<template>
  <div id="app">
    <div id="scroll-wrapper">
      <Nav />
      <Landing />
      <InfoBlock />
      <InfoBlock />
      <InfoBlock />
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Landing from './components/Landing.vue';
import Nav from './components/Nav.vue';
import InfoBlock from './components/InfoBlock.vue';

export default {
  name: 'App',
  components: {
    Landing,
    Nav,
    InfoBlock
  }
}
</script>

<style>
#app {
  /* position: relative; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  flex: 0 0 auto;
  height: 100%;
  width: 100%;
}
#scroll-wrapper {
  /* position: absolute; */
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: auto;
}
</style>
