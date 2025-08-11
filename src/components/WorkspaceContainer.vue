<script setup lang="ts">
import { useWorkspaceStore } from "@/stores/workspaces";
import SectionSearch from "@/components/Sections/SectionSearch.vue";
import SectionDashboard from "@/components/Sections/SectionDashboard.vue";
import SectionProfile from "@/components/Sections/SectionProfile.vue";

/* --- Stores --- */
const workspaces = useWorkspaceStore();
</script>
<template>
  <section class="workspace-container">
    <SectionSearch v-if="workspaces.index == 0"></SectionSearch>
    <SectionDashboard v-if="workspaces.index == 1"></SectionDashboard>
    <SectionProfile v-if="workspaces.index == 2"></SectionProfile>
  </section>
</template>

<style>
.workspace-container {
  flex-grow: 1;
}
</style>
