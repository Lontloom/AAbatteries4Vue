<template>
    <div class="edit-post-container">
        <h2>Edit Post</h2>
        <form @submit.prevent="submitUpdate">
            <label for="body">Body</label>
            <input type="text" id="body" v-model="body" placeholder="Edit your post body here..." required />
            <div class="button-container">
                <button type="submit">Update</button>
                <button type="button" @click="deletePost">Delete</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "EditPostView",
    data() {
        return {
            postId: this.$route.params.id,
            body: "", 
        };
    },
    methods: {
        fetchPost() {
            fetch(`http://localhost:3000/posts/${this.postId}`)
                .then((response) => response.json())
                .then((data) => {
                    this.body = data.body;
                })
                .catch((err) => console.error("Error fetching post:", err));
        },
        submitUpdate() {
            console.log("Update button clicked");
            fetch(`http://localhost:3000/posts/${this.postId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ body: this.body }),
            })
                .then((response) => {
                    if (response.ok) {
                        this.$router.push("/");
                    } else {
                        console.error("Failed to update post");
                    }
                })
                .catch((error) => console.error("Error updating post:", error));
        },
        deletePost() {
            console.log("Delete button clicked");
            fetch(`http://localhost:3000/posts/${this.postId}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (response.ok) {
                        this.$router.push("/");
                    } else {
                        console.error("Failed to delete post");
                    }
                })
                .catch((error) => console.error("Error deleting post:", error));
        },
        mounted() {
            console.log('Post ID:', this.postId);
            console.log('Route Params:', this.$route.params); 
            this.fetchPost();
        },
    },
};
</script>

<style scoped>
.edit-post-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-color);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
}

label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
}

input {
    width: 300px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

button {
    all: unset;
    background-color: var(--button-color);
    font-size: large;
    color: white;
    font-weight: bold;
    border-radius: 25px;
    width: 100px;
    text-align: center;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

button:hover {
    opacity: 0.9;
}
</style>
