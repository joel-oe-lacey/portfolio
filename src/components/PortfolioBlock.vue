
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
      <!-- <img class="projectImg" src="../assets/logo.png"/> -->
    </section>
  </section>
</template>

<script>
export default {
  name: 'PortfolioBlock',
  components: {
  },
  props: ['title', 'link', 'desc', 'stack']
}
</script>

<style>
.portfolioBody {
  display: flex;
  flex-flow: column wrap;
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
  height: 10%;
  width: 100%;
}
.about {
  height: 45%;
  width: 50%;
}
.stack {
  height: 45%;
  width: 50%;
}
.projectImg {
  height: 90%;
  width: 50%;
  object-fit: scale-down;
}
</style>
