<template>
    <div class="add-post-container">
        <h2>Add Post</h2>
        <form @submit.prevent="submitPost">
            <label for="body">Body</label>
            <input type="text" id="body" v-model="body" placeholder="body" required />
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddPostView",
    data() {
        return {
            body: "",
        };
    },
    methods: {
  submitPost() {
    fetch("http://localhost:3000/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestamp: new Date().toISOString(), text: this.body }),
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          this.$router.push("/"); 
        } else {
          console.error("Failed to add post");
        }
      })
      .catch((error) => console.error("Error adding post:", error));
  },
},
};
</script>

<style scoped>
.add-post-container {
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
  width: 200px;
  padding: 10px;
  margin-bottom: 10px; 
  border-radius: 5px;
  border: 1px solid #ccc;
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
  background-color: var(--hover-color);
}
</style>