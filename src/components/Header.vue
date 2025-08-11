<script setup>
import { useWorkspaceStore } from '@/stores/workspaces'
import { ref, getCurrentInstance } from 'vue'

import Tag from './Tag.vue'

const { proxy } = getCurrentInstance()

/* --- Stores --- */
const workspaces = useWorkspaceStore()

/* --- Methodes --- */
const getClock = () => {
  const date = new Date();
  let hours = date.getHours();
  hours = hours > 9 ? `${hours}` : `0${hours}`
  let min = date.getMinutes();
  min = min > 9 ? `${min}` : `0${min}`
  return `${hours}:${min}`
}

const getTemperature = async () => {
  const result = await proxy.$utils.fetchUrl("https://api.open-meteo.com/v1/forecast?latitude=45.9088&longitude=6.1257&current=temperature_2m&forecast_days=1");
  return `${result.current.temperature_2m}${result.current_units.temperature_2m}`;
}

const getIpAddr = async () => {
  const result = await proxy.$utils.fetchUrl("https://api.ipify.org/?format=json")
  return `${result.ip}`;
}

/* --- Refs --- */
const clock = ref(getClock());
const temp = ref('');
const ipaddr = ref('');

getTemperature().then((tempData) => {
  temp.value = tempData;
})

getIpAddr().then((ip) => {
  ipaddr.value = ip;
})

/* 15fps clock*/
setInterval(() => {
  clock.value = getClock();
}, 64)

</script>

<template>
  <nav class="header">

    <div class="current-tab">
      <div class="indicators">
        <span
          v-for="space in workspaces.workspaces"
          :key="space.id"
          @click="workspaces.setCurrent(space.id)"
          :class="`indicator ${workspaces.isActive(space.id) ? 'active' : ''}`"
        ></span>
      </div>
      <div class="tab-name">
        {{ workspaces.current.title ?? "No workspace name" }}
      </div>
    </div>

    <div class="menu">
      <Tag v-if="ipaddr" :text="ipaddr" icon="fa-network-wired"></Tag>
      <Tag v-if="temp" :text="temp" icon="fa-temperature-half"></Tag>
      <Tag :text="clock"></Tag>
      <Tag text="" icon="fa-gear"></Tag>
    </div>

  </nav>
</template>

<style scoped>
/* --- Global --- */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-bottom: 8px;
}

/* --- Current workspace --- */
.current-tab {
  display: flex;
  gap: 24px;
  height: 100%;
  align-items: center;
}
.indicators {
  display: flex;
  gap: 20px;
}
.indicator {
  --inner: var(--grey);
  --outer : transparent;
  display: block;
  position: relative;
  aspect-ratio: 1;
  height: 14px;
  background-color: var(--inner);
  border-radius: 100%;
  transition: background-color 200ms ease;
  cursor: pointer;
}
.indicator:before {
  content: '';
  z-index: -1;
  display: block;
  height: 32px;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 100%;
  background-color: var(--outer);
  transition: background-color 200ms ease;
}
.indicator.active {
  --outer: var(--grey);
  --inner: var(--blue);
}
.indicator:hover {
  --inner: var(--pink);
}

/* --- Menu --- */
.menu {
  display: flex;
  gap: 12px;
}
</style>
