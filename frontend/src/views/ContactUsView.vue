<template>
  <div class="contact-us">
    <h1>Contact Us</h1>
    <p>Phone: +123-456-7890</p>
    <p>Email: contact@postit.com</p>
    <h2>Team Members</h2>
    <ul>
      <li>Kaspar Aednik</li>
      <li>Lilly Marlene Siewert</li>
      <li>Till Belz</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactUsView'
};
</script>

<style scoped>
.contact-us {
  margin: 20px;
  font-family: Arial, sans-serif;
}

h1, h2 {
  color: rgb(65, 65, 224);
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin: 5px 0;
}
</style>
