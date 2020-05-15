<template>
  <section id="nav">
      <router-link to="/"><a>About</a></router-link>
      <router-link to="/portfolio">Porfolio</router-link>
      <router-link to="/misc">Misc</router-link>
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
    border: 1px solid black;
}
</style>
