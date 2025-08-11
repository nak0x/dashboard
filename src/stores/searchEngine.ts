// src/stores/searchEngine.ts
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface SearchEngine {
  id: number
  title: string
  suffix: string
  querystring: string // ex: 'https://duckduckgo.com/?q=%s'
  isDefault: boolean
}

export const useSearchEngineStore = defineStore('searchEngine', () => {
  const searchEngines = ref<SearchEngine[]>([
    { id: 1, title: 'DuckDuckGo', suffix: 'd', querystring: 'https://duckduckgo.com/?q=%s', isDefault: true },
    { id: 2, title: 'Youtube', suffix: 'y', querystring: 'https://www.youtube.com/results?search_query=%s', isDefault: false },
  ])

  const defaultSearchEngine = computed<SearchEngine | null>(() =>
    searchEngines.value.find(se => se.isDefault) ?? null
  )

  function getEngineBySuffix(suffix: string) {
    return searchEngines.value.find(se => se.suffix === suffix) ?? defaultSearchEngine
  }

  function buildUrl(id: number, query: string): string {
    if (!searchEngines.value.length) throw new Error('No search engine')
    const engine = searchEngines.value.find(se => se.id === id)
    if (!engine) throw new Error('Search engine not found')
    if (!engine.querystring.includes('%s')) throw new Error('Query template must contain %s')
    return engine.querystring.replace('%s', encodeURIComponent(query))
  }

  return {
    // state
    searchEngines,
    // getters
    defaultSearchEngine,
    getEngineBySuffix,
    // actions
    buildUrl,
  }
})

