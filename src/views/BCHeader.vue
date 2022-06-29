<template>
  <div>
    <va-navbar color="dark" shape class="mb-2">
      <template #left>
        <va-navbar-item><b-c-logo></b-c-logo></va-navbar-item>
      </template>
      <template #center>
        <va-navbar-item>Буксировка методом частичной погрузки</va-navbar-item>
      </template>
      <template #right>
        <va-navbar-item><b-c-phones></b-c-phones></va-navbar-item>
      </template>
    </va-navbar>
  </div>
</template>
<script>
import BCLogo from "./BCLogo.vue";
import BCPhones from "./BCPhones.vue";
export default {
  name: "BCHeader",
  components: { BCLogo, BCPhones },
};
</script>
