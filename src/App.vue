<template>
  <div id="app">
    <div id="scroll-wrapper">
      <Nav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  /* position: relative; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex: 0 0 auto;
  height: 300vh;
  width: 100%;
  overflow-y: scroll;
  background-color: #555B6E;
}
#scroll-wrapper {
  /* position: absolute; */
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
