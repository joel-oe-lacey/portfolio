<template>
    <div id="port-wrapper">
      <PortfolioBlock />
      <PortfolioBlock />
      <PortfolioBlock />
    </div>
</template>

<script>
import PortfolioBlock from './PortfolioBlock.vue';

export default {
  name: 'Portfolio',
  components: {
    PortfolioBlock
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex: 0 0 auto;
  height: 300vh;
  width: 100%;
  overflow-y: scroll;
}
#port-wrapper {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  width: 100%;
}
</style>
