import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    if (!revealEls.length) return

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    revealEls.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}
