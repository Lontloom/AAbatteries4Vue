<template>
  <footer>
    <p>PostIt 3.0 made with 📠 in 2024.</p>
  </footer>
</template>

<script>
export default {
    name: 'footerComponent',
}
</script>

<style scoped>
footer {
    background-color: var(--footer-background-color);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    display: flex;
    justify-content: center;
    margin-top: auto;
    position: bottom;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .1), 0px 8px 16px rgba(0, 0, 0, .1);
}

footer>strong {
    padding: 10px;
    margin: 10px;
}
</style>
  