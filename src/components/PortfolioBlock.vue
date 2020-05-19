
<template>
  <section class="portfolioItem">
    <section class="portfolioBody">
      <h1 class="projHeader">Project Name</h1>
      <section class="about">
          <h2>About</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </section>
      <section class="stack">
          <h2>Stack</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </section>
      <!-- <img class="projectImg" src="../assets/logo.png"/> -->
    </section>
  </section>
</template>

<script>
export default {
  name: 'PortfolioBlock',
  components: {
  },
}
</script>

<style>
.portfolioBody {
  display: flex;
  flex-flow: column wrap;
  height: 90%;
  width: 90%;
  /* padding: 3%; */
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
