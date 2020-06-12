<template>
    <div class="port-wrapper">
      <Carousel width="100%" height="50%">
        <PortfolioBlock 
        v-for="(item, index) in projects"
        v-bind:key="index"
        v-bind="item"/>
      </Carousel>
    </div>
</template>

<script>
import PortfolioBlock from './PortfolioBlock.vue';
import { projects } from '../assets/content.js';
import Carousel from './Carousel.vue';

export default {
  name: 'Portfolio',
  components: {
    PortfolioBlock,
    Carousel
  },
  data: function() {
      return {
        projects
      }
  }
}
</script>

<style>
.app {
  height: 100vh;
  width: 100%;
}
.port-wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 10%;
  height: 100%;
  width: 100%;
}
</style>
