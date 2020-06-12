<template>
    <div class="about-cont">
      <div class="parallax-container">
        <parallax>
          <img src="../assets/nyc.jpg" class="background">
        </parallax>
      </div>
      <Landing v-bind="aboutLanding"/>
      <div id="inner-wrapper">
        <InfoBlock />
      <h2 class='port-header'>My Journey</h2>
        <Carousel width="100%" height="50%">
          <ExperienceBlock 
            v-for="item in journey"
            v-bind:key="item.title"
            v-bind="item"/>
        </Carousel>
      </div>
    </div>
</template>

<script>
import Landing from './Landing.vue';
import InfoBlock from './InfoBlock.vue';
import ExperienceBlock from './ExperienceBlock.vue';
import Carousel from './Carousel.vue';
import { about, journey, aboutLanding } from '../assets/content.js';
import Parallax from "vue-parallaxy";

export default {
  name: 'App',
  components: {
    Landing,
    InfoBlock,
    ExperienceBlock,
    Parallax,
    Carousel
  },
  data: function() {
        return {
          about,
          journey,
          aboutLanding
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
  height: 100%;
  width: 90%;
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
