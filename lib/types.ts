import type { ComponentType } from 'react'
export type ToolCategory = 'text'|'data'|'images'|'audio'|'utilities'
export interface ToolSEO { longDescription: string; howTo?: string[]; useCases?: string[]; faq?: { q: string, a: string }[]; related?: string[] }
export interface ToolDefinition { slug: string; name: string; category: ToolCategory; tagline: string; component: ComponentType<any>; props?: Record<string, any>; keywords?: string[]; badge?: string; seo: ToolSEO; pop?: number }

