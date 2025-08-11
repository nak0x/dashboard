<script setup lang="ts">
import { useWorkspaceStore } from '@/stores/workspaces'
import Search from './Sections/Search.vue'
import Dashboard from './Sections/Dashboard.vue'
import Profile from './Sections/Profile.vue'

/* --- Stores --- */
const workspaces = useWorkspaceStore()

</script>
<template>
  <section class="workspace-container">
    <Search v-if="workspaces.index == 0"></Search>
    <Dashboard v-if="workspaces.index == 1"></Dashboard>
    <Profile v-if="workspaces.index == 2"></Profile>
  </section>
</template>

<style>
.workspace-container {
  flex-grow: 1;
}
</style>
