import type { ComponentType } from 'react'
export type ToolCategory = 'documents'|'images'|'audio'|'productivity'
export interface ToolDefinition {
  slug: string
  name: string
  category: ToolCategory
  tagline: string
  description?: string
  component: ComponentType<any>
  keywords?: string[]
  badge?: string
}
