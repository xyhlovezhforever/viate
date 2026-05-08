import { create } from 'zustand'
import { GitHubConfig } from '@/types'
import { getStorageItemSync, setStorageItem, getStorageItem } from '@/lib/storage'

interface SettingsStore {
  githubConfig: GitHubConfig | null
  isDarkMode: boolean
  autoSave: boolean
  
  // Actions
  setGitHubConfig: (config: GitHubConfig | null) => void
  toggleDarkMode: () => void
  setAutoSave: (value: boolean) => void
  loadFromStorage: () => Promise<void>
}

// Storage key for persistence
const STORAGE_KEY = 'viate-settings-storage'

interface SettingsData {
  githubConfig?: GitHubConfig | null
  isDarkMode?: boolean
  autoSave?: boolean
}

const getInitialState = () => {
  return getStorageItemSync<SettingsData>(STORAGE_KEY, {})
}

const saveToStorage = async (data: SettingsData) => {
  try {
    const current = await getStorageItem<SettingsData>(STORAGE_KEY) || {}
    await setStorageItem(STORAGE_KEY, { ...current, ...data })
  } catch (error) {
    console.error('Failed to save to storage', error)
  }
}

export const useSettingsStore = create<SettingsStore>()((set, get) => {
  const initialData = getInitialState()
  
  return {
    githubConfig: initialData.githubConfig || null,
    isDarkMode: initialData.isDarkMode || false,
    autoSave: initialData.autoSave !== undefined ? initialData.autoSave : true,

    setGitHubConfig: (config) => {
      set({ githubConfig: config })
      saveToStorage({ githubConfig: config })
    },
    
    toggleDarkMode: () => {
      const newMode = !get().isDarkMode
      set({ isDarkMode: newMode })
      saveToStorage({ isDarkMode: newMode })
    },
    
    setAutoSave: (value) => {
      set({ autoSave: value })
      saveToStorage({ autoSave: value })
    },

    loadFromStorage: async () => {
      const data = await getStorageItem<SettingsData>(STORAGE_KEY)
      if (data) {
        set({
          githubConfig: data.githubConfig !== undefined ? data.githubConfig : null,
          isDarkMode: data.isDarkMode || false,
          autoSave: data.autoSave !== undefined ? data.autoSave : true,
        })
      }
    },
  }
})
