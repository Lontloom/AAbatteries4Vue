<template>
    <div class="posts" v-for="post in posts" :key="post.id">
        <post-component :post="post"/>
    </div>
    <button v-on:click="resetAllLikes">Reset likes</button>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "PostsView",
    components: {
        PostComponent,
    },
    computed: {
        ...mapGetters(['posts'])
        // alternative: 
        // posts() {
        //     return this.$store.getters.posts;
        // },
    },
    methods: {
        ...mapActions(['resetAllLikes'])
        // alternative:
        // resetLikes() {
        //     this.$store.dispatch('resetAllLikes');
        // },
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
</style>