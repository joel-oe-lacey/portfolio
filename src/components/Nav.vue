<template>
  <section id="nav">
      <a href="">About</a>
      <a href="">Porfolio</a>
      <a href="">Misc</a>
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
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 60%;
    border: 1px solid black;
}
</style>
