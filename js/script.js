// ── Contact Info (Centralized) ──
const contactInfo = {
  email: 'engenharia@bssprojetos.com',
  phone: '+55 (16) 99279-0880',
  whatsapp: 'https://wa.me/5516992790880',
  linkedin: 'https://www.linkedin.com/company/82604793',
  instagram: 'https://www.instagram.com/projetosbss/',
  facebook: 'https://www.facebook.com/bssprojetos'
};

// Populate contact links
function populateContactLinks() {
  document.querySelectorAll('[data-contact-href]').forEach(el => {
    const key = el.dataset.contactHref;
    if (key === 'email') {
      el.href = `mailto:${contactInfo.email}`;
    } else if (key === 'phone') {
      el.href = contactInfo.whatsapp;
    } else if (contactInfo[key]) {
      el.href = contactInfo[key];
    }
  });
  
  document.querySelectorAll('[data-contact-text]').forEach(el => {
    const key = el.dataset.contactText;
    if (key === 'email') {
      el.textContent = contactInfo.email;
    } else if (key === 'phone') {
      el.textContent = contactInfo.phone;
    }
  });
}

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

  const clients = [
    { src: './assets/img/logos/vittia-grupo.png', alt: 'Vittia' },
    { src: './assets/img/logos/upl_final.png', alt: 'UPL' },
    { src: './assets/img/logos/engetrad_final.png', alt: 'Grupo C' },
    { src: './assets/img/logos/habiarte_final.png', alt: 'Habiarte' },
    { src: './assets/img/logos/uberpostos_final.png', alt: 'Uberpostos' },
    { src: './assets/img/logos/bpbunge_final.png', alt: 'BP Bunge' },
    { src: './assets/img/logos/guabi_final.png', alt: 'Guabi' },
    { src: './assets/img/logos/alfa_final.png', alt: 'Alfa' },
    { src: './assets/img/logos/alta mgiana_final.png', alt: 'Alta MGIANA' },
    { src: './assets/img/logos/bp_bioenergy_final.png', alt: 'BP Bioenergy' },
    { src: './assets/img/logos/global_mix_final.png', alt: 'Global Mix' },
    { src: './assets/img/logos/increabase_final.png', alt: 'Increabase' },
    { src: './assets/img/logos/laminacao_sao_joaquim_final.png', alt: 'Laminação São Joaquim' },
    { src: './assets/img/logos/Logo_Tereos_2016_final.png', alt: 'Tereos' },
    { src: './assets/img/logos/marcato_final.png', alt: 'Marcato' },
    { src: './assets/img/logos/minerva_final.png', alt: 'Minerva' },
    { src: './assets/img/logos/realquimica_logo_final.png', alt: 'Realquímica' },
    { src: './assets/img/logos/scala_final.png', alt: 'Scala' },
    { src: './assets/img/logos/sodru_final.png', alt: 'Sodru' },
    { src: './assets/img/logos/usina Cerradão_final.png', alt: 'Usina Cerradão' },
    { src: './assets/img/logos/__final.png', alt: 'Garra Fundição' },
    { src: './assets/img/logos/taten-engenharia_final.png', alt: 'Taten Engenharia' }
  ];

const grid = document.getElementById('clients-grid');

clients.forEach(({ src, alt }) => {
  const div = document.createElement('div');
  div.className = 'client-logo';

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';

  div.appendChild(img);
  grid.appendChild(div);
});


  // function showTab(name, btnEl) {
  //   document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
  //   document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  //   document.getElementById('tab-' + name).style.display = 'flex';
  //   btnEl.classList.add('active');
  // }

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

  // ── Initialize contact info ──
  populateContactLinks();