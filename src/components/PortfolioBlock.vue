
<template>
  <section class="portfolio-item">
    <section class="portfolio-body">
      <h1 class="proj-header">{{title}}</h1>
      <section class='port-desc'>
        <p v-for="(paragraph, index) in desc" :key="index">
          {{paragraph}}
        </p>
      </section>
      <section class="stack">
        <p
        v-for="item in stack" :key="item">{{item}}
        </p>
      </section>
      <section class="project-img-cont">
        <img class="project-img" :src="img" />  
      </section>
      <section v-if="live" class="btn-cont-live">
        <a :href="live" class="btn">Live Site</a>
      </section>
      <section class="btn-cont-github">
        <a :href="github" class="btn">Github</a>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'PortfolioBlock',
  components: {
  },
  props: ['title', 'github', 'live', 'desc', 'stack', 'img']
}
</script>

<style>
.portfolio-body {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 10% 70% 5% 15%;
  grid-gap: 2%;
  grid-template-areas: 
  "header header"
  "about img"
  "stack stack"
  "live github";
  height: 96%;
  width: 98%;
  padding: 3%;
  border-bottom-right-radius: 4% 9%;
  border-top-right-radius: 4% 9%;
  border-bottom-left-radius: 4% 9%;
  border-top-left-radius: 4% 9%;
  background-color: #9590A8;
}
.portfolio-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  /* border-radius: 1%; */
  background-color: #C4D3E7;
  border-bottom-right-radius: 5% 10%;
  border-top-right-radius: 5% 10%;
  border-bottom-left-radius: 5% 10%;
  border-top-left-radius: 5% 10%;
  transition: 800ms;
}
.proj-header {
  font-size: 2em;
  grid-area: header;
  color: #82455D;
}
.port-desc {
  grid-area: about;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.stack {
  grid-area: stack;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: bold;
  font-size: 1.3rem;
  color: #82455D;
}
.project-img {
  height: 90%;
  width: 90%;
  object-fit: scale-down;
  background: #C4D3E7;
}
.project-img-cont {
  height: 100%;
  width: 100%;
  grid-area: img;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.btn-cont-github {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  grid-area: github;
}
.btn-cont-live {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-area: live;
}
.btn {
  height: 60%;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #C4D3E7;
  color: #82455D;
  font-size: 1.8rem;
  font-weight: bold;
  border: 2px solid #82455D;
  border-bottom-right-radius: 5% 10%;
  border-top-right-radius: 5% 10%;
  border-bottom-left-radius: 5% 10%;
  border-top-left-radius: 5% 10%;
}
/* .btn:hover {
  box-shadow: 0.1rem 0.2rem 0.3rem white;
  transition: 300ms;
} */
</style>
