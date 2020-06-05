
<template>
  <section class="portfolioItem">
    <section class="portfolioBody">
      <h1 class="projHeader">{{title}}</h1>
      <section class="about">
          <h2>About</h2>
          <p>{{desc}}</p>
      </section>
      <ul class="stack">
          <li
          v-for="item in stack" :key="item">{{item}}
          </li>
      </ul>
      <img class="projectImg" src="../assets/american_portrait.png" />
    </section>
  </section>
</template>

<script>
export default {
  name: 'PortfolioBlock',
  components: {
  },
  props: ['title', 'link', 'desc', 'stack', 'img']
}
</script>

<style>
.portfolioBody {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 10% 45% 45%;
  grid-gap: 2%;
  grid-template-areas: 
  "header header"
  "about img"
  "stack img";
  height: 96%;
  width: 98%;
  padding: 3%;
  border-bottom-right-radius: 4% 9%;
  border-top-right-radius: 4% 9%;
  border-bottom-left-radius: 4% 9%;
  border-top-left-radius: 4% 9%;
  background-color: #9590A8;
}
.portfolioItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 90%;
  margin: 3%;
  /* border-radius: 1%; */
  background-color: #C4D3E7;
  border-bottom-right-radius: 5% 10%;
  border-top-right-radius: 5% 10%;
  border-bottom-left-radius: 5% 10%;
  border-top-left-radius: 5% 10%;
}
.portfolioItem:hover {
  box-shadow: 0.1rem 0.3rem 0.6rem #9590A8;
  transition: 300ms;
}
.projHeader {
  font-size: 2em;
  grid-area: header;
  color: #82455D;
}
.about {
  grid-area: about;
}
.stack {
  grid-area: stack;
}
.projectImg {
  height: 100%;
  width: 100%;
  grid-area: img;
  object-fit: scale-down;
}
</style>
