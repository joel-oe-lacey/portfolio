<template>
  <section class="landing">
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
.landing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 100%;
    z-index: 2;
    position: absolute;
}
.inner-landing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
    height: 40%;
    width: 60%;
    background-color: rgba(149, 144, 168, 0.6);
}
</style>
