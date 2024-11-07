<template>
<div class="post">
    <div class="post header">
        <div class="header person">
            <img src="../assets/person.svg" :alt=post.author.email>
            <p>{{post.author.name}}</p>
        </div>
        <p>{{calculateDate(post.creationTimestamp)}}</p>
    </div>
    <div class="post body">
        <img v-if=image(post) alt="A post picture" :src=post.picture />
        <p v-if=text(post)>{{post.text}}</p>
    </div>
    <div class="thumbs up">
        <img src="../assets/thumbUp.svg" alt="Thumbs up" @click="likePost(post.id)">
        <p>{{post.likes}}</p>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "PostComponent",
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        image (post) {
            if (Object.hasOwn(post, "picture")){
                return true;
            }
            return false;
        },

        text (post) {
            if (Object.hasOwn(post, "text")){
                return true;
            }
            return false;
        }, 

        calculateDate (timestamp) {
            let date = new Date(timestamp);
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };
            return date.toLocaleString("en-US", options);
        },

        ...mapActions(['likePost'])
        // allternative: 
        // like (id) {
        //     this.$store.dispatch("likePost", id);
        // }
    },
}
</script>

<style scoped>
div.post:not(.header, .body) div:not(.thumbs.up, .header.person){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

div.header.person {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    
    img {
        width: 30px;
        height: 30px;
    }
}

div.thumbs.up {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;

    & p {
        margin: 0px;
    }
}

 div.post.header > div p{
    flex: 1;
    display: flex;
}

div.post:not(.header, .body) {
    background-color: var(--box-background-color);
    border-radius: 10px;
    text-align: start;
    padding: 20px;
    margin: 10px;
    width: 600px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .1), 0px 8px 16px rgba(0, 0, 0, .1);

    & div.post.body:not(:has(p))+.thumbs.up {
        margin-top: 10px;
    }

    & .post.body:has(img) {
        flex-direction: column;
    }

}

@media (max-width: 700px) {
    div.post:not(.header, .body) {
        width: 100%;
        padding: 0px;
        border-radius: 0px;
        & .post.header {
            margin-left: 5px;
            margin-right: 5px;
        }

        & p {
            margin-left: 5px;
            margin-right: 5px;
        }
        & .thumbs.up {
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 10px;
        }

        div.post.body > img {
            border-radius: 0px;
        }
    }
}

</style>