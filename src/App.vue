<template>
  <div>
    <b-c-header />
    <b-c-main />
    <b-c-footer />
  </div>
</template>
<script>
import BCHeader from "./views/BCHeader.vue";
import BCMain from "./views/BCMain.vue";
import BCFooter from "./views/BCFooter.vue";
export default {
  components: {
    BCHeader,
    BCMain,
    BCFooter,
  },
};
</script>
<style lang="css"></style>
