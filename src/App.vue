<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <footer-component/>
</template>

<script>
  import footerComponent from "@/components/footerComponent.vue";

  export default {
    name: 'App',
    components: {
      footerComponent
    }
  }
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  color: var(--text-color, #000);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
}

body {
    height: 100%;
    min-height: 100vh;
    margin: 0;
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
</style>
