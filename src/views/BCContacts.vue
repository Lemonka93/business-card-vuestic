<template>
  <div>
    <a href="tel:+375255148050"><va-icon name="call" /></a>
    <a href="viber://chat/?number=%2B375255148050"
      ><img src="../assets/viber.png" alt="Viber"
    /></a>
    <a href="https://telegram.me/#"
      ><img src="../assets/telegram.svg.webp" alt="Telegram"
    /></a>
  </div>
</template>
<script>
export default {
  name: "BCContacts",
};
</script>
<style scoped>
div {
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
a img {
  width: 24px;
  cursor: pointer;
}
</style>
