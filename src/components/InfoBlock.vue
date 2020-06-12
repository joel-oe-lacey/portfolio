
<template>
  <section class="about">
      <section class="portrait-cont">      
        <img class="portrait" src="../assets/profile.jpg">
      </section>
      <article class="info">
          <h2>Joel Oliver Edward Lacey</h2>
          <p>I think we’re intrinsically linked with technology. At this point it spans every corner of our lives. We’ve reached an important cross-roads where we have to stop and ask ourselves; is our technology really helping us live better lives in the way we want it to?</p>
          <p>I’m a Front End Developer who recently made an intensive shift from Content Management to be at the bleeding edge of contending with that very question. In what ways is our technology getting away from us? How can we design programs and websites that represent our best interests: in diversity, in our mental well being, in digital community? </p>
          <p>I’ve been learning, coding, writing and collaborating with wonderful people and organizations in the community in that pursuit ever since. Read a little about that journey below.</p>
      </article>
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
.about {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 5%; */

  /* color: #82455D; */
}
.portrait-cont {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.portrait {
  height: 80%;
  width: 80%;
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(22, 15, 15, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
}
.info {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;  
}
</style>
