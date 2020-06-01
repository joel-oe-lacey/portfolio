
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
      <img class="projectImg" src="../assets/american_portrait.png"/>
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
  height: 90%;
  width: 90%;
  padding: 3%;
  border-radius: 1%;
  border: 1px solid black;
}
.portfolioItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 90%;
  border: 1px solid black;
  margin: 3%;
  border-radius: 1%;
  box-shadow: 2px 5px;
}
.projHeader {
  font-size: 1.8em;
  grid-area: header;
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
