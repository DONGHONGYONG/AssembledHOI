(() => {
  const topbar = document.getElementById('topbar');
  const setTopbar = () => topbar?.classList.toggle('scrolled', window.scrollY > 12);
  setTopbar();
  window.addEventListener('scroll', setTopbar, { passive: true });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min((i % 4) * 55, 165)}ms`;
      observer.observe(el);
    });
  }

  const copyButton = document.getElementById('copyBib');
  copyButton?.addEventListener('click', async () => {
    const text = document.getElementById('bibtex')?.innerText || '';
    try {
      await navigator.clipboard.writeText(text);
      const old = copyButton.textContent;
      copyButton.textContent = 'Copied ✓';
      setTimeout(() => copyButton.textContent = old, 1500);
    } catch {
      copyButton.textContent = 'Select & copy';
    }
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const close = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lightboxImage?.removeAttribute('src');
  };
  document.querySelectorAll('.lightbox-target').forEach(el => {
    el.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = el.dataset.full || el.querySelector('img')?.src || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
  document.getElementById('lightboxClose')?.addEventListener('click', close);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
