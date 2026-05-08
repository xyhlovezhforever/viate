export interface ResumeTemplate {
  id: string
  name: string
  description: string
  thumbnail: string
  html: string
  category: 'modern' | 'classic' | 'creative' | 'minimal'
  isPremium?: boolean
}

export interface ResumeData {
  id: string
  templateId: string
  name: string
  html: string
  lastModified: Date
  createdAt: Date
}

export interface GitHubConfig {
  token: string
  username: string
  repo: string
  branch: string
}

export interface EditorState {
  currentResumeId: string | null
  html: string
  isPreviewMode: boolean
  isSaving: boolean
}
