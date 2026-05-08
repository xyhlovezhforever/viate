import { create } from 'zustand'
import { ResumeData, ResumeTemplate } from '@/types'
import { getStorageItemSync, setStorageItem, getStorageItem } from '@/lib/storage'

interface ResumeStore {
  resumes: ResumeData[]
  currentResumeId: string | null
  currentHtml: string
  isPreviewMode: boolean
  
  // Actions
  setCurrentResume: (id: string | null) => void
  setCurrentHtml: (html: string) => void
  setPreviewMode: (mode: boolean) => void
  createResume: (template: ResumeTemplate) => string
  updateResume: (id: string, html: string) => void
  deleteResume: (id: string) => void
  getResumeById: (id: string) => ResumeData | undefined
  loadFromStorage: () => Promise<void>
}

// Storage key for persistence
const STORAGE_KEY = 'viate-resume-storage'

const getInitialState = () => {
  return getStorageItemSync<{ resumes: ResumeData[] }>(STORAGE_KEY, { resumes: [] })
}

const saveToStorage = async (resumes: ResumeData[]) => {
  try {
    await setStorageItem(STORAGE_KEY, { resumes })
  } catch (error) {
    console.error('Failed to save to storage', error)
  }
}

export const useResumeStore = create<ResumeStore>()((set, get) => {
  const initialData = getInitialState()
  
  return {
    ...initialData,
    currentResumeId: null,
    currentHtml: '',
    isPreviewMode: false,

    setCurrentResume: (id) => {
      set({ currentResumeId: id })
      if (id) {
        const resume = get().getResumeById(id)
        if (resume) {
          set({ currentHtml: resume.html })
        }
      }
    },

    setCurrentHtml: (html) => set({ currentHtml: html }),

    setPreviewMode: (mode) => set({ isPreviewMode: mode }),

    createResume: (template) => {
      const newResume: ResumeData = {
        id: Date.now().toString(),
        templateId: template.id,
        name: `${template.name} - 副本`,
        html: template.html,
        lastModified: new Date(),
        createdAt: new Date(),
      }
      const newResumes = [...get().resumes, newResume]
      set({
        resumes: newResumes,
        currentResumeId: newResume.id,
        currentHtml: newResume.html,
      })
      saveToStorage(newResumes)
      return newResume.id
    },

    updateResume: (id, html) => {
      const newResumes = get().resumes.map((resume) =>
        resume.id === id
          ? { ...resume, html, lastModified: new Date() }
          : resume
      )
      set({ resumes: newResumes, currentHtml: html })
      saveToStorage(newResumes)
    },

    deleteResume: (id) => {
      const newResumes = get().resumes.filter((resume) => resume.id !== id)
      set({
        resumes: newResumes,
        currentResumeId: get().currentResumeId === id ? null : get().currentResumeId,
      })
      saveToStorage(newResumes)
    },

    getResumeById: (id) => {
      return get().resumes.find((resume) => resume.id === id)
    },

    loadFromStorage: async () => {
      const data = await getStorageItem<{ resumes: ResumeData[] }>(STORAGE_KEY)
      if (data && data.resumes) {
        set({ resumes: data.resumes })
      }
    },
  }
})
