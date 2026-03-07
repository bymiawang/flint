/* ============================================================
   FLINT — main.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav state ──────────────────────────────────────────── */
  const nav  = document.getElementById('nav');
  const hero = document.getElementById('hero');
  if (nav && hero) {
    const update = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom > 60) {
        nav.className = 'over-hero';
        document.body.classList.add('hero-visible');
      } else {
        nav.className = 'over-light';
        document.body.classList.remove('hero-visible');
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── Scroll reveal (IntersectionObserver) ───────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ── TAM bar animation ──────────────────────────────────── */
  const tamSection = document.getElementById('market');
  const tamBars = [
    { el: document.getElementById('tam-bar-1'), w: '100%' },
    { el: document.getElementById('tam-bar-2'), w: '52%'  },
    { el: document.getElementById('tam-bar-3'), w: '16%'  },
  ];
  if (tamSection) {
    const tamIo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          tamBars.forEach((b, i) => {
            if (b.el) setTimeout(() => { b.el.style.width = b.w; }, i * 160);
          });
          tamIo.disconnect();
        }
      });
    }, { threshold: 0.25 });
    tamIo.observe(tamSection);
  }

  /* ── Demo progress bar ──────────────────────────────────── */
  const demoSection = document.getElementById('demo-section');
  const progFill    = document.getElementById('prog-fill');
  if (demoSection && progFill) {
    const dIo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => { progFill.style.width = '100%'; }, 200);
          dIo.disconnect();
        }
      });
    }, { threshold: 0.3 });
    dIo.observe(demoSection);
  }

  /* ── Scroll cue fade ────────────────────────────────────── */
  const scrollCue = document.querySelector('.scroll-cue');
  if (scrollCue) {
    let hidden = false;
    window.addEventListener('scroll', () => {
      if (!hidden && window.scrollY > 80) {
        scrollCue.style.opacity = '0';
        scrollCue.style.transition = 'opacity 0.4s';
        hidden = true;
      }
    }, { passive: true });
  }

  /* ── Stat counters ──────────────────────────────────────── */
  const statEls = document.querySelectorAll('.t-stat[data-count]');
  if (statEls.length) {
    const countUp = (el) => {
      const target  = +el.dataset.count;
      const prefix  = el.dataset.prefix  || '';
      const suffix  = el.dataset.suffix  || '';
      const dur     = 1400;
      const start   = performance.now();
      const ease    = t => 1 - Math.pow(1 - t, 3);
      const tick    = (now) => {
        const t   = Math.min((now - start) / dur, 1);
        const val = Math.round(ease(t) * target);
        el.textContent = prefix + val + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const statIo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          countUp(e.target);
          statIo.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    statEls.forEach(el => statIo.observe(el));
  }

  /* ── Smooth anchor links ────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
