import { MetadataRoute } from 'next'
import { tools } from '../lib/registry'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  const now = new Date().toISOString()
  const routes = ['','/tools','/privacy','/terms','/faq','/contact','/about','/donate'].map(p=>({
    url: base + (p || '/'), lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8
  }))
  const toolRoutes = tools.map(t => ({ url: `${base}/tools/${t.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 }))
  return [...routes, ...toolRoutes]
}
