<template>
  <div class="main">
    <b-c-carousel></b-c-carousel>
    <b-c-description></b-c-description>
  </div>
</template>
<script>
import BCCarousel from "./BCCarousel.vue";
import BCDescription from "./BCDescription.vue";
export default {
  name: "BCMain",
  components: { BCCarousel, BCDescription },
};
</script>
