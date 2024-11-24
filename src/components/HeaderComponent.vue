<template>
    <header class="header">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Signup</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  <style scoped>
  .header {
    background-color: var(--header-background-color);
    padding: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .1), 0px 8px 16px rgba(0, 0, 0, .1);
  }
  
  nav {
    padding: 10px;
  }
  
  nav a {
    font-weight: bold;
    color: var(--link-color);
    text-decoration: none;
  }
  
  nav a.router-link-exact-active {
    color: var(--hover-color);
  }
  </style>
  