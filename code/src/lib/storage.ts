/**
 * Storage adapter that works in both web and extension environments
 * Uses chrome.storage.local in extensions, localStorage in web
 */

// Type declaration for chrome API
declare const chrome: any

// Check if running in extension environment
const isExtension = typeof chrome !== 'undefined' && chrome?.storage?.local

/**
 * Get item from storage
 */
export async function getStorageItem<T>(key: string): Promise<T | null> {
  try {
    if (isExtension) {
      const result = await chrome.storage.local.get(key)
      return result[key] || null
    } else {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : null
    }
  } catch (error) {
    console.error('Failed to get storage item:', error)
    return null
  }
}

/**
 * Set item in storage
 */
export async function setStorageItem<T>(key: string, value: T): Promise<void> {
  try {
    if (isExtension) {
      await chrome.storage.local.set({ [key]: value })
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  } catch (error) {
    console.error('Failed to set storage item:', error)
  }
}

/**
 * Remove item from storage
 */
export async function removeStorageItem(key: string): Promise<void> {
  try {
    if (isExtension) {
      await chrome.storage.local.remove(key)
    } else {
      localStorage.removeItem(key)
    }
  } catch (error) {
    console.error('Failed to remove storage item:', error)
  }
}

/**
 * Clear all storage
 */
export async function clearStorage(): Promise<void> {
  try {
    if (isExtension) {
      await chrome.storage.local.clear()
    } else {
      localStorage.clear()
    }
  } catch (error) {
    console.error('Failed to clear storage:', error)
  }
}

/**
 * Synchronous get for initial state (fallback to empty state in extension)
 */
export function getStorageItemSync<T>(key: string, defaultValue: T): T {
  // In extension environment, we can't use sync storage for initial state
  // Return default value and let the store update asynchronously
  if (isExtension) {
    // Schedule async load
    getStorageItem<T>(key).then(value => {
      if (value !== null) {
        // Trigger a state update (handled by the store)
        window.dispatchEvent(new CustomEvent('storage-loaded', { 
          detail: { key, value } 
        }))
      }
    })
    return defaultValue
  } else {
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : defaultValue
    } catch {
      return defaultValue
    }
  }
}
