<script setup lang="ts">
import SearchBar from "./SearchBar.vue";

const getVersionNumber = () => {
  const birthdate = new Date("2004/3/9").valueOf();
  const cur = Date.now();
  const diff = cur - birthdate;
  const a = Math.floor(diff / 31557600000);
  return a > 100
    ? a.toString().split("").join(".")
    : "0.".concat(a.toString().split("").join("."));
};

const VERSION = `v${getVersionNumber()}`;
</script>
<template>
  <div class="search-container">
    <div class="search-content">
      <div class="search-title-container">
        <h1 class="title search">Nak0x {{ VERSION }}</h1>
        <p class="subtitle">Start typing to search</p>
      </div>
      <SearchBar></SearchBar>
    </div>
  </div>
</template>

<style>
.search-container {
  height: 100%;
  position: relative;
}

.search-content {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.search-title-container {
  text-align: center;
}

.title.search {
  font-size: 3em;
  margin: 0;
}
</style>
