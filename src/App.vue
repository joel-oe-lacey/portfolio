<template>
  <div id="app">
    <div id="scroll-wrapper">
      <Nav />
      <Landing />
      <InfoBlock v-bind="about"/>
      <InfoBlock v-bind="skills"/>
      <ExperienceBlock v-bind="resume"/>
      <ExperienceBlock v-bind="education"/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Landing from './components/Landing.vue';
import Nav from './components/Nav.vue';
import InfoBlock from './components/InfoBlock.vue';
import ExperienceBlock from './components/ExperienceBlock.vue';
import { about, skills, resume, education } from './assets/content.js';

export default {
  name: 'App',
  components: {
    Landing,
    Nav,
    InfoBlock,
    ExperienceBlock
  },
  data: function() {
        return {
          about,
          skills,
          resume,
          education
        }
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
  height: 300vh;
  width: 100%;
  overflow-y: scroll;
}
#scroll-wrapper {
  /* position: absolute; */
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
