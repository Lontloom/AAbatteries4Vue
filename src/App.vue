<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/addPost">Add Post</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

:root {
    --box-background-color: #ffffff;
    --header-background-color: #b0c4e3;
    --footer-background-color: #b0c4e3;
    --hover-color: #678cc2;
    --button-color: #1344d6;
    --link-color: #1344d6;
    --text-color: #080708;
    --background-color: #e6e8e6;
}

h1 ~ a {
    color: var(--link-color);
}

</style>
