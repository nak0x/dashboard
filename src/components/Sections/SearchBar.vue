<script setup lang="ts">
import { ref } from 'vue'
import { useSearchEngineStore } from '@/stores/searchEngine'

const store = useSearchEngineStore()
const query = ref('')

function onSearch() {
  if(!query.value) return;

  const suffix = query.value.split(' ')[0]
  const engine = store.getEngineBySuffix(suffix)
  if (!engine) return
  const url = store.buildUrl(engine.id, query.value)
  console.log(url)
  window.location.href = url;
}
</script>

<template>
  <form class="search-bar-container" @submit.prevent="onSearch" id="search">
    <fieldset form="search" class="search-bar">
      <FontAwesomeIcon icon="fa-magnifying-glass" />
      <input
        type="text"
        :value="query"
        @input="e => query = e.target.value"
      />
    </fieldset>
  </form>
</template>

<style>
.search-bar {
  border: none;
  padding: none;
  position: relative;
  display: flex;
  align-items: center;
  width: 80vw;
  max-width: 470px;
  height: 40px;
  margin-top: 3rem;
}

.search-bar input {
  position: absolute;
  inset: 0;
  border: 1px solid var(--grey);
  background-color: transparent;
  font-family: var(--mono-font);
  font-size: 1.1em;
  color: var(--white);
  padding-left: 36px;
}

.search-bar input::placeholder {
  color: var(--lightgrey);
}

.search-bar svg {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--lightgrey);
}
</style>
