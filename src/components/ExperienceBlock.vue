
<template>
  <section class="resumeItem">
      <h2 class='comp'>{{company}}</h2>
      <h2 class='date'>{{`${edate} - ${sdate}`}}</h2>
      <section class="details">
          <h2>{{title}}</h2>
          <h2>{{location}}</h2>
      </section>
      <section class='desc'>
        <p v-for="(paragraph, index) in desc" :key="index">
          {{paragraph}}
        </p>
      </section>
      <h2 class='listheader'>Highlights</h2>
      <ul class="highlights">
          <li
          v-for="(point, index) in highlights" :key="index">{{point}}
          </li>
      </ul>
  </section>
</template>

<script>
export default {
  name: 'InfoBlock',
  components: {
  },
  props: ['company', 'sdate', 'edate', 'location', 'title', 'desc', 'highlights']
}
</script>

<style>
.comp {
  height: 10%;
  width: 100%;
  text-align: center;
  color: #C4D3E7;
}
.details {
  height: 10%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #CEA1B3;
}
.desc {
  height: 35%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.listheader {
  height: 10%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #CEA1B3;
}
.highlights {
  height: 25%;
  width: 85%; 
}
.date {
  height: 10%;
  width: 100%;
  text-align: center;
}
.resumeItem {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
