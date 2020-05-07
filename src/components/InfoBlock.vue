<template>
  <section class="info">
      <h2>Test Header</h2>
      <ul>
          <li>React</li>
          <li>Vue</li>
          <li>Redux</li>
      </ul>
  </section>
</template>

<script>
export default {
  name: 'InfoBlock',
  components: {
  }
}
</script>

<style>
.info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 40%;
    width: 80%;
    border: 1px solid black;
}
</style>
