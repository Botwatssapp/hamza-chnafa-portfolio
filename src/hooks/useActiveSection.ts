import { useEffect, useState } from 'react'
import { NAV_IDS, type NavId } from '../i18n/translations'

export function useActiveSection() {
  const [activeId, setActiveId] = useState<NavId>('home')

  useEffect(() => {
    let frame = 0

    const update = () => {
      const probe = Math.min(window.innerHeight * 0.28, 168)
      let current: NavId = 'home'

      for (const id of NAV_IDS) {
        const section = document.getElementById(id)
        if (!section) continue
        const rect = section.getBoundingClientRect()
        if (rect.top <= probe && rect.bottom > probe) {
          current = id
          break
        }
      }

      setActiveId(current)
      frame = 0
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return activeId
}
