<template>
  <section class="carousel-outer" :style="{ width, height }">
    <section class="carousel">
      <slot/>
    </section>
    <button @click="changeSlide(-1)">Prev Slide</button>
    <button @click="changeSlide(1)">Next Slide</button>
  </section>
</template>

<script>
export default {
  props: ["width", "height"],
  methods: {
    changeSlide(delta) {
      const carousel = this.$el.querySelector(".carousel");
      const width = carousel.offsetWidth;
      carousel.scrollTo(carousel.scrollLeft + width * delta, 0);
    }
  }
};
</script>


<style scoped>
.carousel {
  display: flex;
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  height: 100%;
  width: 100%;
}

.carousel > * {
  flex: 1 0 100%;
  scroll-snap-align: start;
}
</style>
