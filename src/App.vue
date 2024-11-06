<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  color: var(--text-color, #000);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: var(--background-color);
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
