<template>
  <va-carousel :items="items" v-model="value" />
</template>
<script>
export default {
  name: "BCCarousel",
  data() {
    return {
      value: 0,
      items: [
        require("../assets/photo1.jpeg"),
        require("../assets/photo2.jpeg"),
        require("../assets/photo3.jpeg"),
        require("../assets/photo4.jpeg"),
        require("../assets/photo5.jpeg"),
        require("../assets/photo6.jpeg"),
        require("../assets/photo7.jpeg"),
        require("../assets/photo8.jpeg"),
        require("../assets/photo9.jpeg"),
      ],
    };
  },
};
</script>
