<template>
  <div class="home">
    <va-carousel :items="items" v-model="value" />
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      value: 0,
      items: [
        "https://picsum.photos/1500",
        "https://picsum.photos/1501",
        "https://picsum.photos/1502",
        "https://picsum.photos/1503",
        "https://picsum.photos/1504",
      ],
    };
  },
};
</script>
