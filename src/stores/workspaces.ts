import { defineStore } from "pinia";
import { computed, ref } from "vue";

export interface Workspace {
  id: number;
  title: string;
}

export const useWorkspaceStore = defineStore("workspace", () => {
  const workspaces = ref<Workspace[]>([
    { id: 1, title: "Search Engine" },
    { id: 2, title: "Dashboard" },
    { id: 3, title: "Profile" },
  ]);

  // Track the current workspace id
  const currentId = ref<number>(workspaces.value[0]?.id ?? 1);

  // Derived values
  const current = computed<Workspace | undefined>(() =>
    workspaces.value.find((w) => w.id === currentId.value),
  );

  const index = computed(() =>
    workspaces.value.findIndex((w) => w.id === currentId.value),
  );

  const isActive = (id: number) => currentId.value === id;

  // Actions
  function setCurrent(id: number) {
    if (workspaces.value.some((w) => w.id === id)) currentId.value = id;
  }

  function next() {
    if (workspaces.value.length === 0) return;
    const i = index.value;
    const nextI = (i + 1) % workspaces.value.length;
    currentId.value = workspaces.value[nextI].id;
  }

  function prev() {
    if (workspaces.value.length === 0) return;
    const i = index.value;
    const prevI = (i - 1 + workspaces.value.length) % workspaces.value.length;
    currentId.value = workspaces.value[prevI].id;
  }

  return {
    // state
    workspaces,
    currentId,
    // getters
    current,
    index,
    isActive,
    // actions
    setCurrent,
    next,
    prev,
  };
});
