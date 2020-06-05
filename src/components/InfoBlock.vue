
<template>
  <section class="info">
      <h2>{{title}}</h2>
      <div v-if="desc">
          <h2>{{desc}}</h2>
      </div>
      <div v-else>
        <ul>
          <li v-for="item in items" :key="item">{{item}}</li>
        </ul>
      </div>
  </section>
</template>

<script>
export default {
  name: 'InfoBlock',
  components: {
  },
  props: ['title', 'desc', 'items']
}
</script>

<style>
.info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 5%;
    height: 40%;
    width: 100%;
    /* color: #82455D; */
}
</style>
