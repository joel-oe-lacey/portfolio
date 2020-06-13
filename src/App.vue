<template>
  <div class="app">
    <Nav />
    <router-view></router-view>
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
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column;
  /* align-items: center; */
  /* text-align: left; */
  height: 275vh;
  width: 100%;
  background-color: #555B6E;
  color: #E8EBE4;
  z-index: -1;
}
</style>
