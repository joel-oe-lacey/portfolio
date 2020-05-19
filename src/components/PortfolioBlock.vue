
<template>
  <section class="resumeItem">
      <ul class="body">
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
.body {
  height: 90%;
  width: 90%;
  border: 1px solid black;
}
.resumeItem {
    display: flex;
    justify-content: center;
    height: 40%;
    width: 90%;
    border: 1px solid black;
    margin: 3%;
}
</style>
