<template>
<div class="post">
    <div class="post header">
        <div class="header person">
            <img src="../assets/person.svg" :alt="person">
        </div>
        <p>{{calculateDate(post.date)}}</p>
    </div>
    <div class="post body">
        <p>{{post.body}}</p>
    </div>
</div>
</template>

<script>

export default {
    name: "PostComponent",
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        calculateDate (timestamp) {
            let date = new Date(timestamp);
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };
            return date.toLocaleString("en-US", options);
        },
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
    }
}

</style>