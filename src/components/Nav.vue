<template>
  <section id="nav">
      <router-link to="/" class="link">About</router-link>
      <router-link to="/portfolio" class="link">Porfolio</router-link>
      <router-link to="/content" class="link">Content</router-link>
  </section>
</template>

<script>
export default {
  name: 'Nav',
  components: {
  }
}
</script>

<style>
#nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    margin-top: auto;
    height: 100px;
    width: 60%;
    font-size: 2em;
    z-index: 9999;
    align-self: flex-end;
}
.link {
    text-decoration: none;
    color: #E8EBE4;
    padding: 1%;
    border-bottom-right-radius: 15% 30%;
    border-top-right-radius: 15% 30%;
    border-bottom-left-radius: 15% 30%;
    border-top-left-radius: 15% 30%;
}
.link:hover {
  background-color: #82455D;
  color: #C4D3E7;
  transition: .5s;
}
</style>
