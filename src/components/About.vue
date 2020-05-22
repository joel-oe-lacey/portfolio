<template>
    <div id="inner-wrapper">
      <Landing />
      <InfoBlock v-bind="about"/>
      <InfoBlock v-bind="skills"/>
      <h1 class="header">Experience</h1>
      <ExperienceBlock 
        v-for="item in resume.items"
        v-bind:key="item.title"
        v-bind="item"/>
      <h1 class="header">Education</h1>
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
  color: #E8EBE4;
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
.header {
  height: 10%;
  width: 80%;
  text-align: left;
  background: linear-gradient(45deg,#82455D, #555B6E)
}
</style>
