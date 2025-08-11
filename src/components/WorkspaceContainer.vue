<script setup lang="ts">
import { useWorkspaceStore } from "@/stores/workspaces";
import SectionSearch from "./Sections/SectionSearch.vue";
import SectionDashboard from "./Sections/SectionDashboard.vue";
import SectionProfile from "./Sections/SectionProfile.vue";

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
