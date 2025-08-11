<script setup lang="ts">
import Header from "@/components/AppHeader.vue";
import Workspace from "@/components/WorkspaceContainer.vue";
</script>

<template>
  <img
    class="wallpaper"
    src="./assets/imgs/austin-schmid-KcG7nqrUmN8-unsplash.jpg"
  />
  <AppHeader></AppHeader>
  <WorkspaceContainer></WorkspaceContainer>
</template>

<style scoped>
.wallpaper {
  display: block;
  position: fixed;
  width: 100vw;
  height: 100dvh;
  inset: 0;
  transform: scaleX(-100%);
  object-fit: cover;
  object-position: center;
  z-index: -1;
}
</style>
