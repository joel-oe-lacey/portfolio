<template>
  <section id="landing">
      <section class="inner-landing">
          <h1>“First we build the tools, then they build us.”
― Marshall McLuhan</h1>
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
    height: 40%;
    width: 100%;
}
.inner-landing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
    height: 90%;
    width: 80%;
    border: 1px solid black;
}
</style>
