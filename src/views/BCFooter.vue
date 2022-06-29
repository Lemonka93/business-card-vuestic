<template>
  <div class="footer">
    <b-c-contacts />
  </div>
</template>
<script>
import BCContacts from "./BCContacts.vue";
export default {
  name: "BCFooter",
  components: { BCContacts },
};
</script>
<style>
.footer {
  display: flex;
  justify-content: center;
}
</style>
