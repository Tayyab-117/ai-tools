const RECENTS_KEY = 'faihub_recents'
const FAVS_KEY = 'faihub_favs'

export function getRecents(): string[] {
  try { return JSON.parse(localStorage.getItem(RECENTS_KEY) || '[]') } catch { return [] }
}
export function saveRecent(slug: string){
  try {
    const prev = getRecents().filter(s=>s!==slug)
    const next = [slug, ...prev].slice(0,8)
    localStorage.setItem(RECENTS_KEY, JSON.stringify(next))
  } catch {}
}
export function getFavs(): string[] {
  try { return JSON.parse(localStorage.getItem(FAVS_KEY) || '[]') } catch { return [] }
}
export function toggleFav(slug: string){
  const favs = new Set(getFavs())
  if (favs.has(slug)) favs.delete(slug); else favs.add(slug)
  localStorage.setItem(FAVS_KEY, JSON.stringify(Array.from(favs)))
}
export function isFav(slug: string){ return new Set(getFavs()).has(slug) }
