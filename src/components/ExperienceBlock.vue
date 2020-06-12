
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
      <ul class="body">
          <li
          v-for="point in points" :key="point">{{point}}
          </li>
      </ul>
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
.leftHeader {
  height: 40%;
  width: 70%;
}
.rightHeader {
  height: 40%;
  width: 30%;
}
.body {
  height: 60%;
  width: 100%;
  margin-top: 2%;  
}
.resumeItem {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3%;
    height: 100%;
    width: 100%;
}
</style>
