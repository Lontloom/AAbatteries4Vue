<template>
    <button v-on:click="logoutUser">Logout</button>
    <div class="posts" v-for="post in posts" :key="post.id" @click="goToEditPost(post.id)">
        <post-component :post="post"/>
    </div>
    <div class="buttons">
        <button v-on:click="addAPost">Add a post</button>
        <button v-on:click="deleteAllPosts">Delete all</button>
    </div>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue';

export default {
    name: "PostsView",
    components: {
        PostComponent,
    },
    data() {
        return { posts: [] };
    },
    methods: {
        logoutUser() {
            fetch("http://localhost:3000/auth/logout", {
                credentials: 'include',
            })
            .then((response) => {
                if(response.ok) {
                    this.$router.push("/login");
                }
            });
        },

        fetchPosts() {
            fetch(`http://localhost:3000/posts`)
            .then((response) => response.json())
            .then((data) => (this.posts = data))
            .catch((err) => console.log(err.message));
        },

        deleteAllPosts() {
            fetch(`http://localhost:3000/posts`, {
                method: "DELETE", 
                headers: {"Content-Type": "application/json"},
            })
            .then((response) => {
                if (response.status === 200) {
                    window.location.reload();
                }
            })
            .catch((err) => console.log(err))
        },
        
        addAPost() {
            this.$router.push("/add-post");
        },

        goToEditPost(postId) {
            this.$router.push(`/edit-post/${postId}`);
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script>

<style scoped>
div.posts {
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    all: unset;
    background-color: var(--button-color);
    font-size: large;
    color: white;
    font-weight: bold;
    border-radius: 25px;
    width: 200px;
    align-self: center;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .1), 0px 8px 16px rgba(0, 0, 0, .1);
}

button:hover{
    background-color: var(--hover-color);
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

@media (max-width: 600px){
    .buttons {
        flex-wrap: wrap;
        justify-content: space-around;
    }
}

@media (min-width: 700px) {
    .buttons{
        width: 600px;
        align-self: center;
    }
}
</style>