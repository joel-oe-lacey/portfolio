<template>
  <section class="carousel-outer" :style="{ width, height }">
    <section class="carousel">
      <slot/>
    </section>
    <section class="btn-cont-carousel">
      <button @click="changeSlide(-1)" id="btn-carousel" class="btn">Back</button>
      <button @click="changeSlide(1)" id="btn-carousel" class="btn">Forward</button>
    </section>
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
  height: 90%;
  width: 100%;
}
.carousel > * {
  flex: 1 0 100%;
  scroll-snap-align: start;
}
.btn-cont-carousel {
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
#btn-carousel {
  width: 30%;
  border: none;
}
</style>
