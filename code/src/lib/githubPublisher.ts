import axios from 'axios'
import { GitHubConfig } from '@/types'

interface PublishResult {
  success: boolean
  url?: string
  error?: string
}

export async function publishToGitHub(
  html: string,
  config: GitHubConfig
): Promise<PublishResult> {
  try {
    const { token, username, repo, branch } = config
    const path = 'index.html'
    
    // GitHub API endpoint
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${path}`
    
    // Check if file exists
    let sha: string | undefined
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      })
      sha = response.data.sha
    } catch (error) {
      // File doesn't exist, that's okay
    }

    // Prepare content
    const content = btoa(unescape(encodeURIComponent(html)))
    
    // Create or update file
    await axios.put(
      apiUrl,
      {
        message: 'Update resume via Viate',
        content,
        branch,
        ...(sha && { sha }),
      },
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    )

    return {
      success: true,
      url: `https://${username}.github.io/${repo}/`,
    }
  } catch (error) {
    console.error('GitHub publish failed:', error)
    return {
      success: false,
      error: '发布到 GitHub 失败，请检查配置和权限',
    }
  }
}
