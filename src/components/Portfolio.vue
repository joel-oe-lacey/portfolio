<template>
    <div id="inner-wrapper">
      <h1>Portfolio</h1>
    </div>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex: 0 0 auto;
  height: 300vh;
  width: 100%;
  overflow-y: scroll;
}
#inner-wrapper {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  width: 100%;
  text-align: left;
}
</style>
