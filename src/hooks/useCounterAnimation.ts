import { useEffect } from 'react'

export function useCounterAnimation() {
  useEffect(() => {
    const statEls = document.querySelectorAll<HTMLElement>('.t-stat[data-count]')
    if (!statEls.length) return

    const countUp = (el: HTMLElement) => {
      const target = +(el.dataset.count ?? 0)
      const prefix = el.dataset.prefix ?? ''
      const suffix = el.dataset.suffix ?? ''
      const dur = 1400
      const start = performance.now()
      const ease = (t: number) => 1 - Math.pow(1 - t, 3)
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1)
        const val = Math.round(ease(t) * target)
        el.textContent = prefix + val + suffix
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const statIo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          countUp(e.target as HTMLElement)
          statIo.unobserve(e.target)
        }
      })
    }, { threshold: 0.5 })

    statEls.forEach(el => statIo.observe(el))
    return () => statIo.disconnect()
  }, [])
}
