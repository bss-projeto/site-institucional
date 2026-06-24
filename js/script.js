// ── Mobile menu ──
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

  // ── Counter animation ──
  function animateCount(el) {
    const target = parseInt(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = prefix + Math.floor(current).toLocaleString('pt-BR') + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  }

  // ── Scroll reveal ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // ── Counter trigger ──
  const counters = document.querySelectorAll('[data-target]');
  const cObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        cObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cObserver.observe(c));

  // ── Clients tabs ──
  function showTab(name, btnEl) {
    document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + name).style.display = 'flex';
    btnEl.classList.add('active');
  }

  // ── Form submit ──
  function submitForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = '✓ Mensagem Enviada!';
    btn.style.background = '#25a244';
    setTimeout(() => {
      btn.textContent = 'Solicitar Proposta →';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }

  // ── Nav scroll effect ──
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    nav.style.background = window.scrollY > 60
      ? 'rgba(13,27,42,.98)'
      : 'rgba(13,27,42,.95)';
  });