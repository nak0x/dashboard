<script setup lang="ts">
defineProps<{
  text?: string;
  icon?: string;
}>();
</script>

<template>
  <button class="tag">
    {{ text }}
    <FontAwesomeIcon v-if="icon" :icon="icon" />
  </button>
</template>

<style scoped>
.tag {
  background-color: var(--grey);
  color: var(--white);
  padding: 7px;
  border: none;
  border-radius: var(--radius);
  font-size: 1em;
  font-family: var(--mono-font);
}
</style>
