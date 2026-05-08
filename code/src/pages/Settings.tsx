import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Github, Trash2 } from 'lucide-react'
import { useSettingsStore } from '@/store/useSettingsStore'
import { useResumeStore } from '@/store/useResumeStore'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import ConfirmDialog from '@/components/ui/ConfirmDialog'
import { useToast } from '@/hooks/useToast'
import Toast from '@/components/ui/Toast'
import { formatDate } from '@/lib/utils'

const Settings = () => {
  const { githubConfig, setGitHubConfig, autoSave, setAutoSave } = useSettingsStore()
  const { resumes, deleteResume } = useResumeStore()
  
  const [token, setToken] = useState(githubConfig?.token || '')
  const [username, setUsername] = useState(githubConfig?.username || '')
  const [repo, setRepo] = useState(githubConfig?.repo || '')
  const [branch, setBranch] = useState(githubConfig?.branch || 'main')
  const [isSaving, setIsSaving] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const { toast, showToast, hideToast } = useToast()

  const handleSaveGitHub = () => {
    setIsSaving(true)
    setGitHubConfig({ token, username, repo, branch })
    setTimeout(() => {
      setIsSaving(false)
      showToast('GitHub 配置已保存！', 'success')
    }, 500)
  }

  const handleDeleteResume = (id: string) => {
    deleteResume(id)
    setDeleteConfirm(null)
    showToast('简历已删除', 'success')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">设置</h1>
        <p className="text-lg text-muted-foreground">配置您的账号和偏好设置</p>
      </motion.div>

      {/* GitHub Configuration */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Github className="w-6 h-6" />
            <CardTitle>GitHub Pages 配置</CardTitle>
          </div>
          <CardDescription>
            配置 GitHub 信息以便一键发布简历到 GitHub Pages
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Personal Access Token
            </label>
            <Input
              type="password"
              placeholder="ghp_xxxxxxxxxxxx"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <p className="text-xs text-muted-foreground mt-1">
              需要 repo 权限。<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-primary underline">创建 Token</a>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              GitHub 用户名
            </label>
            <Input
              placeholder="your-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              仓库名称
            </label>
            <Input
              placeholder="your-username.github.io"
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
            />
            <p className="text-xs text-muted-foreground mt-1">
              建议使用 username.github.io 格式
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              分支名称
            </label>
            <Input
              placeholder="main"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>

          <Button onClick={handleSaveGitHub} isLoading={isSaving}>
            <Save className="w-4 h-4 mr-2" />
            保存配置
          </Button>
        </CardContent>
      </Card>

      {/* Auto Save */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>编辑器设置</CardTitle>
        </CardHeader>
        <CardContent>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autoSave}
              onChange={(e) => setAutoSave(e.target.checked)}
              className="w-4 h-4 mr-3"
            />
            <span className="text-sm font-medium">自动保存</span>
          </label>
          <p className="text-xs text-muted-foreground mt-1 ml-7">
            编辑时自动保存更改（2秒延迟）
          </p>
        </CardContent>
      </Card>

      {/* Resume Management */}
      <Card>
        <CardHeader>
          <CardTitle>我的简历</CardTitle>
          <CardDescription>管理您保存的简历</CardDescription>
        </CardHeader>
        <CardContent>
          {resumes.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              还没有保存的简历
            </p>
          ) : (
            <div className="space-y-3">
              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div>
                    <h4 className="font-medium">{resume.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      最后修改：{formatDate(resume.lastModified)}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setDeleteConfirm(resume.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 删除确认对话框 */}
      <ConfirmDialog
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        onConfirm={() => deleteConfirm && handleDeleteResume(deleteConfirm)}
        title="删除简历"
        message="确定要删除这份简历吗？此操作无法撤销。"
        confirmText="删除"
        cancelText="取消"
        type="danger"
      />

      {/* Toast 通知 */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  )
}

export default Settings
