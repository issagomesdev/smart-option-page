/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_URL: string
  readonly VITE_BOT_DEMO_URL: string
  readonly VITE_ADMIN_DEMO_URL: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_PORTFOLIO_URL: string
  readonly VITE_DEVELOPER_EMAIL: string
  readonly VITE_DEVELOPER_PHOTO_URL: string
  readonly VITE_CURRICULUM_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
