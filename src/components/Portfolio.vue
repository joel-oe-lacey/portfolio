<template>
    <div class="port-wrapper">
      <div class="parallax-container">
        <parallax>
          <img src="../assets/street.jpg" class="background">
        </parallax>
      </div>
      <Landing v-bind="portLanding" />
      <h2 class='port-header'>Projects</h2>
      <Carousel width="90%" height="45%">
        <PortfolioBlock 
        v-for="(item, index) in projects"
        v-bind:key="index"
        v-bind="item"/>
      </Carousel>
      <h2 class='port-header'>About this site</h2>
    </div>
</template>

<script>
import Parallax from "vue-parallaxy";
import PortfolioBlock from './PortfolioBlock.vue';
import { skills, projects, portLanding } from '../assets/content.js';
import Carousel from './Carousel.vue';
import Landing from './Landing.vue';

export default {
  name: 'Portfolio',
  components: {
    PortfolioBlock,
    Carousel,
    Parallax,
    Landing
  },
  data: function() {
      return {
        skills,
        projects,
        portLanding
      }
  }
}
</script>

<style>
.port-wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  width: 100%;
}
.port-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 5%;
  width: 90%;
  color: #C4D3E7;
  font-size: 2rem;
}
</style>
