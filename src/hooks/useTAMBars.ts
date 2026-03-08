import { useEffect } from 'react'

export function useTAMBars() {
  useEffect(() => {
    const tamSection = document.getElementById('market')
    if (!tamSection) return

    const bars = [
      { id: 'tam-bar-1', w: '100%' },
      { id: 'tam-bar-2', w: '52%' },
      { id: 'tam-bar-3', w: '16%' },
    ]

    const tamIo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          bars.forEach((b, i) => {
            const el = document.getElementById(b.id)
            if (el) setTimeout(() => { el.style.width = b.w }, i * 160)
          })
          tamIo.disconnect()
        }
      })
    }, { threshold: 0.25 })

    tamIo.observe(tamSection)
    return () => tamIo.disconnect()
  }, [])
}
