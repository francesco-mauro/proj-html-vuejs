<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import BackToTopButton from "./components/BackToTopButton.vue";
import ButtonRightSide from "./components/ButtonRightSide.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    BackToTopButton,
    ButtonRightSide,
  },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <BackToTopButton />
  <ButtonRightSide />
  <AppFooter />
</template>

<!-- salve gruppo 9 -->

<style scoped lang="scss"></style>
