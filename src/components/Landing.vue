<template>
  <section id="landing">
      <section class="inner-landing">
          <h1>Joel Lacey</h1>
      </section>
  </section>
</template>

<script>
export default {
  name: 'Landing',
  components: {
  }
}
</script>

<style>
#landing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 80%;
    border: 1px solid black;
}
.inner-landing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
    height: 75%;
    width: 75%;
    border: 1px solid black;
}
</style>
