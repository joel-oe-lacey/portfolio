<template>
  <div id="app">
    <div id="scroll-wrapper">
      <Nav />
      <Landing />
      <InfoBlock v-bind="about"/>
      <InfoBlock v-bind="skills"/>
      <h1>Experience</h1>
      <ExperienceBlock 
        v-for="item in resume.items"
        v-bind:key="item.title"
        v-bind="item"/>
      <h1>Education</h1>
      <ExperienceBlock 
        v-for="item in education.items"
        v-bind:key="item.title"
        v-bind="item"/>
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
  text-align: left;
}
</style>
