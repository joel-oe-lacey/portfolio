<template>
    <div class="port-wrapper">
      <div class="parallax-container">
        <parallax>
          <img src="https://d2fbv9aul2xr54.cloudfront.net/street.jpg" class="background">
        </parallax>
      </div>
      <Landing v-bind="portLanding" />
      <!-- <h2 class='port-header'>Projects</h2> -->
      <Carousel width="90%" height="40%" :style="{ 'margin-top': '5%' }">
        <PortfolioBlock 
        v-for="(item, index) in projects"
        v-bind:key="index"
        v-bind="item"/>
      </Carousel>
      <h2 class='port-header'>About this site</h2>
      <footer class="about-site">
        <p>This website was created as an exploration into Vue. It is hosted statically on AWS, images are served via cloudfront. About Page background by Colton Duke on Unsplash. Portfolio Page background by Yassine Khalfalli on Unsplash. Icons made by Freepik from www.flaticon.com.</p>
        <!-- <p></p> -->
        <!-- <p>About Page background by Colton Duke on Unsplash. Portfolio Page background by Yassine Khalfalli on Unsplash.</p> -->
        <!-- <p></p> -->
        <!-- <p>Icons made by Freepik from www.flaticon.com.</p> -->
      </footer>
      <a href="https://joel-oe-lacey-resources.s3.amazonaws.com/resume-joellacey.pdf" id='resume' class='btn'>View My Resume</a>
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
  font-size: 1.8rem;
}
.about-site {
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#resume {
  height: 2%;
  width: 60%
}
</style>
