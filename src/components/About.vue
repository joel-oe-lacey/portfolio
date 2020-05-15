<template>
    <div id="inner-wrapper">
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
</template>

<script>
import Landing from './Landing.vue';
import InfoBlock from './InfoBlock.vue';
import ExperienceBlock from './ExperienceBlock.vue';
import { about, skills, resume, education } from '../assets/content.js';

export default {
  name: 'App',
  components: {
    Landing,
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
