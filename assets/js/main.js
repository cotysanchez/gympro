/* ============================================================
   GymPro Elite — main.js
   CsDigitalPro Agency
   ============================================================ */

/* ============================================================
   1. DATA — Productos y Actividades
   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: "Whey Protein Gold",
    category: "Proteína",
    price: 18990,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80&auto=format&fit=crop",
    desc: "Proteína de suero de leche de alta calidad con 25g por servicio. Filtrada por microfiltración de flujo cruzado para máxima pureza y digestibilidad. Aminoácidos esenciales completos.",
    variants: {
      "Sabor": ["Chocolate", "Vainilla", "Frutilla", "Sin sabor"],
      "Peso":  ["1 kg", "2 kg", "5 kg"]
    }
  },
  {
    id: 2,
    name: "Creatina Monohidrato",
    category: "Fuerza",
    price: 8990,
    img: "https://images.unsplash.com/photo-1544991875-5dc1b05f5b5d?w=700&q=80&auto=format&fit=crop",
    desc: "Creatina monohidrato micronizada de grado farmacéutico. Aumenta la fuerza explosiva, la potencia anaeróbica y acelera la recuperación entre series intensas.",
    variants: {
      "Sabor": ["Sin sabor", "Limón"],
      "Peso":  ["300 g", "500 g", "1 kg"]
    }
  },
  {
    id: 3,
    name: "BCAA 2:1:1 Aminoácidos",
    category: "Recuperación",
    price: 12490,
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=700&q=80&auto=format&fit=crop",
    desc: "Aminoácidos de cadena ramificada en ratio científico 2:1:1. Leucina, Isoleucina y Valina para reducir el catabolismo muscular y acelerar la recuperación post-entrenamiento.",
    variants: {
      "Sabor": ["Sandía", "Tropical", "Limón", "Sin sabor"],
      "Peso":  ["300 g", "600 g"]
    }
  },
  {
    id: 4,
    name: "Pre-Workout Extreme",
    category: "Pre-Entreno",
    price: 14990,
    img: "https://picsum.photos/seed/preworkout/700/700",
    desc: "Fórmula avanzada con cafeína anhidra, beta-alanina, citrulina malato y creatina. Máxima energía sostenida, foco mental extremo y pump muscular garantizados por 90+ minutos.",
    variants: {
      "Sabor": ["Frutas del bosque", "Menta explosiva", "Naranja cítrica"],
      "Peso":  ["300 g", "450 g"]
    }
  },
  {
    id: 5,
    name: "Glutamina Micronizada",
    category: "Recuperación",
    price: 9490,
    img: "https://picsum.photos/seed/glutamine/700/700",
    desc: "L-Glutamina micronizada de alta pureza. Acelera la recuperación muscular post-entrenamiento, mejora la salud intestinal y refuerza el sistema inmunitario en atletas.",
    variants: {
      "Sabor": ["Sin sabor"],
      "Peso":  ["300 g", "500 g", "1 kg"]
    }
  },
  {
    id: 6,
    name: "Multivitamin + Cafeína ENA",
    category: "Vitaminas",
    price: 11990,
    img: "https://picsum.photos/seed/multivitamin/700/700",
    desc: "Complejo multivitamínico deportivo ENA Sport con cafeína natural de guaraná. 23 vitaminas y minerales esenciales formulados específicamente para el deportista moderno.",
    variants: {
      "Presentación": ["60 cápsulas", "120 cápsulas"],
      "Tipo":         ["Con cafeína", "Sin cafeína"]
    }
  },
  {
    id: 7,
    name: "Pre-War ENA",
    category: "Pre-Entreno",
    price: 16490,
    img: "https://picsum.photos/seed/prewar-ena/700/700",
    desc: "Pre-War ENA: la fórmula más potente de la línea ENA Sport. Sistema de energía triple con cafeína anhidra, taurina y extracto de hierba mate para máximo rendimiento y recuperación.",
    variants: {
      "Sabor": ["Mango pasión", "Maracuyá boost", "Cereza negra"],
      "Peso":  ["400 g", "800 g"]
    }
  },
  {
    id: 8,
    name: "Creatina Creapure® Premium",
    category: "Fuerza",
    price: 19990,
    img: "https://picsum.photos/seed/creapure/700/700",
    desc: "Creatina monohidrato certificada Creapure® — el estándar de oro de la industria. Fabricada en Alemania con pureza >99.9%. La diferencia se siente desde la primera semana.",
    variants: {
      "Sabor": ["Sin sabor", "Naranja natural"],
      "Peso":  ["500 g", "1 kg", "3 kg"]
    }
  }
];

const ACTIVITIES = [
  { title: "HIIT",        sub: "30 min · Alta intensidad",      style: "neon",  icon: "⚡", desc: "Intervalos de alta intensidad para quemar grasa y maximizar el VO2 max en mínimo tiempo." },
  { title: "Yoga",        sub: "60 min · Mente & Cuerpo",        style: "light", icon: "🌿", desc: "Posturas, pranayama y meditación guiada para equilibrio físico y mental total." },
  { title: "CrossFit",    sub: "45 min · Entrenamiento funcional",style: "dark",  icon: "🏋️", desc: "WODs variados combinando fuerza, potencia, cardio y movimiento funcional." },
  { title: "Pump",        sub: "50 min · Tonificación",           style: "light", icon: "💪", desc: "Trabajo con barra y mancuernas para tonificar todo el cuerpo y mejorar la composición corporal." },
  { title: "Funcional",   sub: "40 min · Movimiento natural",     style: "neon",  icon: "🔥", desc: "Ejercicios que replican movimientos de la vida cotidiana para un cuerpo ágil y resistente." },
  { title: "Stretching",  sub: "30 min · Flexibilidad",           style: "light", icon: "✨", desc: "Elongación profunda y recuperación muscular activa. Ideal post-entrenamiento." },
  { title: "Running",     sub: "45 min · Cardio & Técnica",       style: "dark",  icon: "🏃", desc: "Técnica de carrera, intervalos y fondo en pista techada para todos los niveles." },
  { title: "GAP",         sub: "40 min · Glúteos Abs Piernas",    style: "neon",  icon: "🎯", desc: "Trabajo específico en zonas clave sin impacto articular. Máximo resultado en 8 semanas." },
  { title: "ABS",         sub: "25 min · Core Power",             style: "light", icon: "⭐", desc: "Entrenamiento de abdomen profundo, estabilización del core y lumbar. Adaptable a todos los niveles." },
  { title: "Combat",      sub: "50 min · MMA & Kickboxing",       style: "dark",  icon: "🥊", desc: "Técnicas de boxeo, kickboxing y artes marciales. El cardio más efectivo y divertido." },
  { title: "Zumba",       sub: "55 min · Baile & Cardio",         style: "neon",  icon: "🎵", desc: "Ritmos latinos y urbanos fusionados para un cardio social que no parece ejercicio." },
  { title: "Jump",        sub: "35 min · Cama Elástica",          style: "light", icon: "🚀", desc: "Low-impact con máximo cardio en cama elástica individual. Cuida tus articulaciones." },
];

/* ============================================================
   2. STATE — Cart y producto activo
   ============================================================ */
let cart = [];
let currentProduct = null;
let selectedVariants = {};

/* Carga carrito persistente desde localStorage */
(function loadCart() {
  try {
    const saved = localStorage.getItem('gympro_cart');
    if (saved) cart = JSON.parse(saved);
  } catch (_) { cart = []; }
})();

function saveCart() {
  try { localStorage.setItem('gympro_cart', JSON.stringify(cart)); } catch (_) {}
}

/* ============================================================
   3. INIT — Entry point principal
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initParallax();
  initReveal();
  initBentoSwipers();
  initCounters();
  initPlanModal();
  initActivitiesModal();
  initProductModal();
  updateCartBubble();

  /* Shop-specific */
  if (document.querySelector('.shop-swiper')) initShop();

  /* Legal-specific */
  if (document.querySelector('.legal-nav')) initLegalNav();
});

/* ============================================================
   4. NAVIGATION — Scroll effect + Mobile Burger
   ============================================================ */
function initNav() {
  const nav    = document.getElementById('nav');
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.nav__mobile');
  if (!nav) return;

  /* Scroll: agrega clase compacta al bajar 40px */
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, { passive: true });

  /* Burger menu para mobile */
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('open');
      burger.classList.toggle('active', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      mobile.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    /* Cierra al hacer clic en un link */
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('active');
        mobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ============================================================
   5. PARALLAX — Capas de movimiento escalonado en el Hero
   La capa de fondo (LIMITLESS) se mueve más lento que el scroll
   creando profundidad visual sin librerías externas. */
function initParallax() {
  const bgText = document.querySelector('.hero__bg-text');
  if (!bgText) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        /* Movimiento lento: 0.3x del scroll — sensación parallax suave */
        bgText.style.transform = `translateY(calc(-50% + ${y * 0.3}px))`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ============================================================
   6. REVEAL ON SCROLL — IntersectionObserver con stagger
   Cada elemento .reveal se anima al entrar en el viewport.
   El retardo escalonado crea el efecto de cascada visual. */
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target); /* Solo animar una vez */
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(el => io.observe(el));
}

/* ============================================================
   7. SWIPERS — Inicialización de sliders
   ============================================================ */
function initBentoSwipers() {
  /* Mini-slider automático en la bento card de E-Shop (fade effect) */
  const bentoSlider = document.querySelector('.bento-mini-slider');
  if (bentoSlider) {
    new Swiper(bentoSlider, {
      loop: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 800,
    });
  }
}

/* ============================================================
   8. COUNTERS — Animación de números con easing
   useRAF para suavidad. Usa ease-out-quad para sentido de inercia. */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
}

function animateCounter(el) {
  const target   = parseInt(el.dataset.count, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 1600;
  const start    = performance.now();

  const update = (now) => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    /* Ease-out-quad: deceleración natural */
    const eased    = 1 - Math.pow(1 - progress, 2);
    el.textContent = Math.floor(eased * target).toLocaleString('es-AR') + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('es-AR') + suffix;
  };
  requestAnimationFrame(update);
}

/* ============================================================
   9. MODAL SYSTEM — Gestión centralizada de modales
   ============================================================ */
function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('open');
  /* Solo restaurar scroll si no hay otro modal abierto */
  if (!document.querySelector('.modal-overlay.open')) {
    document.body.style.overflow = '';
  }
}

/* Cierra al hacer clic en la overlay (fuera del modal) */
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeModal(e.target.id);
  }
});

/* Cierra con Escape */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
  }
});

/* ============================================================
   10. MODAL: PLANES — Botón hero + todos los links del nav
   ============================================================ */
function initPlanModal() {
  /* Botón hero */
  const btn = document.getElementById('btn-planes');
  if (btn) btn.addEventListener('click', () => openModal('modal-planes'));

  /* Links del nav desktop, mobile y CTA "Únete" que apuntan a #planes */
  document.querySelectorAll('a[href="#planes"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('modal-planes');
    });
  });
}

/* ============================================================
   11. MODAL: ACTIVIDADES — Construye el slider dinámicamente
   Las activity cards se renderizan en JS para facilitar mantenimiento. */
function initActivitiesModal() {
  const btnAct = document.getElementById('bento-act');
  if (btnAct) btnAct.addEventListener('click', openActivitiesModal);

  const wrapper = document.querySelector('#act-swiper .swiper-wrapper');
  if (!wrapper) return;

  /* Renderizar slides */
  ACTIVITIES.forEach(act => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="act-card act-card--${act.style}">
        <span class="act-card__icon">${act.icon}</span>
        <div>
          <h3 class="act-card__title">${act.title}</h3>
          <p class="act-card__sub">${act.sub}</p>
        </div>
      </div>`;
    wrapper.appendChild(slide);
  });

  /* Inicializar Swiper */
  new Swiper('#act-swiper', {
    slidesPerView: 1.25,
    spaceBetween: 12,
    navigation: {
      nextEl: '#act-swiper .swiper-button-next',
      prevEl: '#act-swiper .swiper-button-prev',
    },
    pagination: { el: '#act-swiper .swiper-pagination', clickable: true },
    grabCursor: true,
    breakpoints: {
      540:  { slidesPerView: 2.1 },
      768:  { slidesPerView: 2.8 },
      1024: { slidesPerView: 3.3 },
    },
  });
}

function openActivitiesModal() { openModal('modal-actividades'); }

/* ============================================================
   12. MODAL: PRODUCTO — Renderiza variantes y datos dinámicamente
   ============================================================ */
function initProductModal() {
  /* Escucha eventos de clic y teclado en tarjetas de producto (delegación) */
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-product-id]');
    if (card) openProduct(parseInt(card.dataset.productId, 10));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-product-id]');
      if (card) { e.preventDefault(); openProduct(parseInt(card.dataset.productId, 10)); }
      const actBtn = e.target.closest('#bento-act');
      if (actBtn) { e.preventDefault(); openActivitiesModal(); }
    }
  });
}

function openProduct(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  currentProduct = p;
  selectedVariants = {};

  /* Poblar imagen */
  const img = document.getElementById('pm-img');
  if (img) { img.src = p.img; img.alt = p.name; }

  /* Texto — pm-cat es el badge sobre la imagen, pm-cat-lbl es el label en el panel info */
  setText('pm-cat',     p.category);
  setText('pm-cat-lbl', p.category);
  setText('pm-name',    p.name);
  setText('pm-desc',    p.desc);
  setText('pm-price',   formatPrice(p.price));

  /* Variantes */
  const variantsEl = document.getElementById('pm-variants');
  if (!variantsEl) return;
  variantsEl.innerHTML = '';

  Object.entries(p.variants).forEach(([key, vals]) => {
    const group = document.createElement('div');
    group.className = 'pm-variant-group';
    group.innerHTML = `<span class="pm-variant-label">${key}</span><div class="variant-options" data-key="${key}"></div>`;
    const optionsEl = group.querySelector('.variant-options');

    vals.forEach((val, i) => {
      const btn = document.createElement('button');
      btn.className = 'variant-btn' + (i === 0 ? ' active' : '');
      btn.textContent = val;
      if (i === 0) selectedVariants[key] = val;

      btn.addEventListener('click', () => {
        optionsEl.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedVariants[key] = val;
      });
      optionsEl.appendChild(btn);
    });

    variantsEl.appendChild(group);
  });

  openModal('modal-product');
}

/* ============================================================
   13. CARRITO — Gestión de items con persistencia localStorage
   ============================================================ */
function addToCart() {
  if (!currentProduct) return;
  const variantKey = JSON.stringify(selectedVariants);
  const existing   = cart.find(i => i.id === currentProduct.id && JSON.stringify(i.variants) === variantKey);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...currentProduct, variants: { ...selectedVariants }, qty: 1 });
  }

  saveCart();
  updateCartBubble();
  closeModal('modal-product');
  openModal('modal-success');
}

function updateCartBubble() {
  const bubble = document.getElementById('cart-bubble');
  const count  = document.getElementById('cart-count');
  if (!bubble || !count) return;
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  count.textContent = total;
  bubble.classList.toggle('visible', total > 0);
}

/* ============================================================
   14. WHATSAPP — Genera mensaje automático con producto y variantes
   ============================================================ */
function buyOnWhatsApp() {
  if (!currentProduct) return;
  const variantText = Object.entries(selectedVariants).map(([k, v]) => `${k}: ${v}`).join(' · ');
  const msg = `Hola GymPro Elite! 👋 Quiero comprar:\n\n*${currentProduct.name}*\n${variantText}\nPrecio: ${formatPrice(currentProduct.price)}\n\n¿Cuándo puedo coordinar la entrega?`;
  window.open(`https://wa.me/5491100000000?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

function openWhatsApp(plan) {
  const msg = `Hola GymPro Elite! 👋 Me interesa el *${plan}*. ¿Pueden darme información sobre cómo comenzar?`;
  window.open(`https://wa.me/5491100000000?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

/* ============================================================
   15. SHOP PAGE — Slider principal + Grid con filtros
   ============================================================ */
function initShop() {
  renderShopGrid();
  initShopSlider();
  initFilters();
}

function renderShopGrid() {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => productCardHTML(p)).join('');
}

function productCardHTML(p) {
  return `
    <div class="product-card reveal" data-product-id="${p.id}" data-category="${p.category}">
      <div class="product-card__img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-card__body">
        <span class="product-card__cat">${p.category}</span>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__price">${formatPrice(p.price)}</p>
        <button class="btn btn--dark btn--sm product-card__action">Ver producto</button>
      </div>
    </div>`;
}

/* Slider destacados en shop.html */
function initShopSlider() {
  const slider = document.querySelector('.shop-swiper');
  if (!slider) return;

  /* Renderiza los primeros 8 productos en el slider */
  const wrapper = slider.querySelector('.swiper-wrapper');
  PRODUCTS.forEach(p => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = productCardHTML(p);
    wrapper.appendChild(slide);
  });

  new Swiper('.shop-swiper', {
    slidesPerView: 1.3,
    spaceBetween: 16,
    navigation: { nextEl: '.shop-next', prevEl: '.shop-prev' },
    grabCursor: true,
    breakpoints: {
      540:  { slidesPerView: 2.2, spaceBetween: 18 },
      768:  { slidesPerView: 3.1, spaceBetween: 20 },
      1024: { slidesPerView: 4,   spaceBetween: 24 },
    },
  });

  /* Inicializar reveal en el grid después de renderizar */
  initReveal();
}

/* Filtros por categoría */
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProducts(btn.dataset.filter);
    });
  });
}

function filterProducts(category) {
  const cards = document.querySelectorAll('#shop-grid .product-card');
  const empty  = document.getElementById('shop-empty');
  let visible  = 0;

  cards.forEach(card => {
    const match = category === 'all' || card.dataset.category === category;
    card.classList.toggle('hidden', !match);
    if (match) visible++;
  });

  if (empty) empty.classList.toggle('visible', visible === 0);
}

/* ============================================================
   16. LEGAL PAGE — Navegación de secciones con smooth scroll
   ============================================================ */
function initLegalNav() {
  const links = document.querySelectorAll('.legal-nav a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* Actualiza el link activo al hacer scroll */
  const sections = document.querySelectorAll('.legal-section');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id    = e.target.id;
        const link  = document.querySelector(`.legal-nav a[href="#${id}"]`);
        if (link) {
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));
}

/* ============================================================
   17. HELPERS — Utilidades menores
   ============================================================ */
function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
