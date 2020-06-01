<template>
    <div class="about-cont">
      <div class="parallax-container">
        <parallax>
          <img src="../assets/nyc.jpg" class="background">
        </parallax>
      </div>
      <Landing />
      <div id="inner-wrapper">
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
    </div>
</template>

<script>
import Landing from './Landing.vue';
import InfoBlock from './InfoBlock.vue';
import ExperienceBlock from './ExperienceBlock.vue';
import { about, skills, resume, education } from '../assets/content.js';
import Parallax from "vue-parallaxy";

export default {
  name: 'App',
  components: {
    Landing,
    InfoBlock,
    ExperienceBlock,
    Parallax
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
#inner-wrapper {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  min-height: 50%;
  width: 80%;
  text-align: left;
  z-index: 1;
  align-self: center;
  /* background-color: rgba(149, 144, 168, 0.6); */
}
.header {
  height: 10%;
  width: 100%;
  text-align: left;
  padding: 1%;
  color: #C4D3E7;
  /* background: linear-gradient(45deg,#82455D, #555B6E); */
}
.background {
  height: 100%;
  width: 100%;
  background-color: rgba(149, 144, 168, 0.6);
}
.parallax-container {
  position: relative;
  z-index: 1;
  /* height: 75%; */
  width: 100%;
}
.about-cont {
  height: 100%;
  width: 100%; 
  z-index: 0;
  display: flex;
  flex-flow: column;
  /* justify-content: center; */
  align-items: center;
  overflow: hidden;
}
</style>
