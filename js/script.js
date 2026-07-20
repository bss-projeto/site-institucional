// ── Blog modal ──
const blogArticles = {
  fundacoes: {
    category: 'Fundação e Equipamentos',
    title: 'Como Projetar Fundações para Equipamentos Industriais',
    summary: 'A correta concepção das fundações é um dos fatores que mais impactam a segurança, a estabilidade e a vida útil de equipamentos pesados nas plantas industriais.',
    body: [
      '<p>Ao dimensionar fundações para equipamentos industriais, é essencial considerar não apenas o peso estático do equipamento, mas também as cargas dinâmicas geradas por vibração, impacto, torque e operação contínua.</p>',
      '<p>Em muitos casos, a falha ocorre por subestimar os efeitos do movimento repetitivo, especialmente em máquinas de grande porte, compressores, motores e sistemas de britagem.</p>',
      '<p>Além do cálculo estrutural, o projeto precisa prever detalhes de execução como profundidade da fundação, tipo de solo, compatibilização com a base do equipamento, proteção contra vibração e futuras intervenções de manutenção.</p>'
    ]
  },
  estruturas: {
    category: 'Estruturas Metálicas',
    title: 'Principais Erros em Estruturas Metálicas Industriais',
    summary: 'Mesmo em estruturas bem concebidas, pequenos erros de detalhamento ou execução podem comprometer a segurança e a durabilidade do empreendimento.',
    body: [
      '<p>Um dos erros mais frequentes é o uso de detalhes de ligação incompatíveis com as cargas reais da estrutura, principalmente em situações de sobrecarga, expansão térmica ou movimentação de materiais.</p>',
      '<p>Outro ponto crítico é a falta de atenção ao detalhamento de pilar, base, conexão e travamentos, que pode gerar concentrações de tensão e deformações excessivas.</p>',
      '<p>O ideal é integrar projeto estrutural, fabricação e montagem desde a fase inicial para garantir que o que foi calculado seja realmente executável na obra.</p>'
    ]
  },
  inspecao: {
    category: 'Inspeção e Manutenção',
    title: 'Inspeção Estrutural em Armazéns de Açúcar',
    summary: 'A inspeção periódica é essencial para identificar sinais de deterioração antes que se tornem problemas de segurança e operação.',
    body: [
      '<p>Em armazéns de açúcar a granel, a análise estrutural deve considerar a presença de cargas permanentes, ações de vento, corrosão em pontos específicos e deformações acumuladas ao longo do tempo.</p>',
      '<p>Patologias como fissuras, deslocamentos, corrosão de elementos metálicos e problemas nas fundações podem comprometer a estabilidade do sistema sem sinais imediatos.</p>',
      '<p>Uma boa inspeção combina vistoria técnica, medições, avaliação de danos e definição clara de critérios para reforço ou intervenção.</p>'
    ]
  },
  pisos: {
    category: 'Pisos Industriais',
    title: 'Critérios para Pisos Industriais de Alto Desempenho',
    summary: 'Pisos industriais precisam ser projetados para resistir à carga, ao tráfego e à agressividade química com durabilidade e baixo custo de manutenção.',
    body: [
      '<p>O desempenho de um piso industrial depende de fatores como espessura do concreto, resistência característica, tipo de armação, juntas e acabamento superficial.</p>',
      '<p>Em ambientes com tráfego pesado e condições agressivas, a escolha do sistema de proteção e a compatibilidade entre sub-base e revestimento são determinantes.</p>',
      '<p>Um projeto bem executado reduz a necessidade de reforços e melhora a operação diária sem comprometer a segurança da área industrial.</p>'
    ]
  },
  tanques: {
    category: 'Tanques e Reservatórios',
    title: 'Projeto de Tanques Industriais: Aspectos Críticos',
    summary: 'Tanques industriais exigem atenção especial a carregamentos, corrosão, ancoragem e comportamento estrutural ao longo da vida útil.',
    body: [
      '<p>Na análise de tanques, a pressão hidrostática e a ação do produto armazenado precisam ser avaliadas com precisão para evitar deformações e falhas prematuras.</p>',
      '<p>Além disso, a corrosão é um fator estratégico, principalmente em estruturas expostas a ambientes agressivos ou produtos químicos.</p>',
      '<p>O detalhamento da ancoragem, da base e das juntas é fundamental para garantir desempenho, segurança e facilidade de manutenção.</p>'
    ]
  }
};

const blogModal = document.getElementById('blog-modal');
const blogModalTitle = document.getElementById('blog-modal-title');
const blogModalBadge = document.getElementById('blog-modal-badge');
const blogModalSummary = document.querySelector('.blog-modal-summary');
const blogModalBody = document.querySelector('.blog-modal-body');
const closeBlogModalBtn = document.querySelector('.blog-modal-close');
const blogModalBackdrop = document.querySelector('.blog-modal-backdrop');

function openBlogModal(postId) {
  const article = blogArticles[postId];
  if (!article) return;

  blogModalBadge.textContent = article.category || 'Conteúdo Técnico';
  blogModalTitle.textContent = article.title;
  blogModalSummary.textContent = article.summary;
  blogModalBody.innerHTML = article.body.join('');
  blogModal.classList.add('open');
  blogModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeBlogModal() {
  blogModal.classList.remove('open');
  blogModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.post-card[data-post-id]').forEach(card => {
  card.addEventListener('click', () => openBlogModal(card.dataset.postId));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openBlogModal(card.dataset.postId);
    }
  });
});

closeBlogModalBtn.addEventListener('click', closeBlogModal);
blogModalBackdrop.addEventListener('click', closeBlogModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && blogModal.classList.contains('open')) {
    closeBlogModal();
  }
});

// ── Contact Info (Centralized) ──
const contactInfo = {
  email: 'sander@bssprojetos.com',
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
    { src: './assets/img/logos/taten-engenharia_final.png', alt: 'Taten Engenharia' },
    { src: './assets/img/logos/smi_final.png', alt: 'SMI' },
    { src: './assets/img/logos/sso energy_final.png', alt: 'SSO Energy' },
    { src: './assets/img/logos/solocon_final.png', alt: 'Solocon' },
    { src: './assets/img/logos/am_braga_final.png', alt: 'AM Braga' },
    { src: './assets/img/logos/apicetec_final.png', alt: 'Apicetec' },
    { src: './assets/img/logos/as_engenharia_final.png', alt: 'AS Engenharia' },
    { src: './assets/img/logos/base_quimica_final.png', alt: 'Base Química' },
    { src: './assets/img/logos/rezende_final.png', alt: 'Rezende' },
    { src: './assets/img/logos/hda_lemos_final.png', alt: 'HDA Lemos' },
    { src: './assets/img/logos/aj_engenharia_final.png', alt: 'AJ Engenharia' }
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
  // function submitForm(e) {
  //   e.preventDefault();

  //   const form = e.target;
  //   const btn = form.querySelector('.form-submit');

  //   const nome = form.querySelector('#nome').value.trim();
  //   const empresa = form.querySelector('#empresa').value.trim();
  //   const telefone = form.querySelector('#telefone').value.trim();
  //   const email = form.querySelector('#email').value.trim();
  //   const mensagem = form.querySelector('#mensagem').value.trim();

  //   const assunto = 'Novo contato pelo formulário do site - BSS Projetos';
  //   const corpo = [
  //     'Você recebeu um novo contato realizado pelo formulário do site.',
  //     '',
  //     `Nome: ${nome || 'Não informado'}`,
  //     `Empresa: ${empresa || 'Não informada'}`,
  //     `Telefone: ${telefone || 'Não informado'}`,
  //     `E-mail: ${email || 'Não informado'}`,
  //     `Mensagem: ${mensagem || 'Sem mensagem adicional.'}`,
  //     '',
  //     `Enviado em: ${new Date().toLocaleString('pt-BR')}`
  //   ].join('\n');

  //   window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

  //   btn.textContent = '✓ Mensagem Pronta para Envio';
  //   btn.style.background = '#25a244';

  //   setTimeout(() => {
  //     btn.textContent = 'Solicitar Proposta →';
  //     btn.style.background = '';
  //     form.reset();
  //   }, 3000);
  // }

  async function submitForm(e) {
  e.preventDefault();

  const form = e.target;
  const btn = form.querySelector('.form-submit');

  const nome = form.querySelector('#nome').value.trim();
  const empresa = form.querySelector('#empresa').value.trim();
  const telefone = form.querySelector('#telefone').value.trim();
  const email = form.querySelector('#email').value.trim();
  const mensagem = form.querySelector('#mensagem').value.trim();

  btn.disabled = true;
  btn.textContent = 'Enviando...';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '4835277f-fdc1-496d-a4f6-c7ec81482531',
        subject: 'Novo contato pelo formulário do site - BSS Projetos',
        from_name: nome || 'Site BSS Projetos',
        nome,
        empresa,
        telefone,
        email,
        mensagem
      })
    });

    const result = await response.json();

    if (result.success) {
      btn.textContent = '✓ Mensagem Enviada';
      btn.style.background = '#25a244';
      form.reset();
    } else {
      throw new Error(result.message || 'Erro ao enviar');
    }
  } catch (err) {
    btn.textContent = '✗ Erro, tente novamente';
    btn.style.background = '#c0392b';
    console.error(err);
  }

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'Solicitar Proposta →';
    btn.style.background = '';
  }, 3000);
}

  // ── Nav scroll effect ──
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    nav.style.background = window.scrollY > 60
      ? 'rgba(255, 255, 255, 0.72)'
      : '#ffffff';
  });

  // ── Initialize contact info ──
  populateContactLinks();