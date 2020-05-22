<template>
  <section id="nav">
      <router-link to="/" class="link">About</router-link>
      <router-link to="/portfolio" class="link">Porfolio</router-link>
      <router-link to="/misc" class="link">Misc</router-link>
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
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 5%;
    width: 60%;
    font-size: 2em;
}
.link {
    text-decoration: none;
    color: #E8EBE4;
    padding: 1%;
    border-radius: 15%;
}
.link:hover {
  background-color: #82455D;
  color: #C4D3E7;
  transition: .5s;
}
</style>
