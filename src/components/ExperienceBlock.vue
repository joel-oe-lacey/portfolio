
<template>
  <section class="resumeItem">
      <section class="leftHeader">
          <h2>{{company}}</h2>
          <h2>{{title}}</h2>
      </section>
      <section class="rightHeader">
          <h2>{{location}}</h2>
          <h2>{{`${sdate} - ${edate}`}}</h2>
      </section>
      <section class="body"
      v-for="point in points" :key="point">{{point}}
      </section>
  </section>
</template>

<script>
export default {
  name: 'InfoBlock',
  components: {
  },
  props: ['company', 'sdate', 'edate', 'location', 'title', 'points']
}
</script>

<style>
.resumeItem {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 5%;
    height: 40%;
    width: 80%;
    border: 1px solid black;
}
</style>
