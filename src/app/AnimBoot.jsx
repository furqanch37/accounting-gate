'use client';

import { useEffect } from 'react';

export default function AnimBoot() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const items = Array.from(document.querySelectorAll('.fade-anim'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const delay = (e.target.getAttribute('data-delay') || '0').trim();
          if (delay) e.target.style.setProperty('--fade-delay', delay);
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
