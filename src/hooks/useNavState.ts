import { useEffect } from 'react'

export function useNavState() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const hero = document.getElementById('hero')
    if (!nav || !hero) return

    const updateNav = () => {
      const heroBottom = hero.getBoundingClientRect().bottom
      if (heroBottom > 60) {
        nav.className = 'over-hero'
        document.body.classList.add('hero-visible')
      } else {
        nav.className = 'over-light'
        document.body.classList.remove('hero-visible')
      }
    }

    const scrollCue = document.querySelector<HTMLElement>('.scroll-cue')
    let scrollCueHidden = false
    const updateScrollCue = () => {
      if (!scrollCueHidden && window.scrollY > 80 && scrollCue) {
        scrollCue.style.opacity = '0'
        scrollCue.style.transition = 'opacity 0.4s'
        scrollCueHidden = true
      }
    }

    const onScroll = () => {
      updateNav()
      updateScrollCue()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateNav()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
