# GymPro Elite Fitness Center

Sitio web de élite para un fitness center premium, desarrollado con estética Apple Light Tech. Construido por la agencia **CsDigitalPro** con foco en UX de alto impacto, performance mobile-first y animaciones nativas sin dependencias pesadas.

---

## Tech Stack

| Tecnología | Rol |
|---|---|
| **HTML5 Semántico** | Estructura accesible con roles ARIA, landmarks y atributos `aria-*` |
| **CSS3 Moderno** | Variables nativas (`--var`), Grid, Flexbox, `clamp()`, `@keyframes`, `backdrop-filter` |
| **JavaScript ES2022** | Vanilla JS modular; `IntersectionObserver`, `requestAnimationFrame`, `localStorage` |
| **Swiper.js v11** | Slider de productos y actividades — CDN, con módulos de autoplay, fade, navegación y paginación |
| **CSS Custom Properties** | Sistema de tokens de diseño centralizado (colores, radios, sombras, curvas de animación) |
| **System Font Stack** | `-apple-system, BlinkMacSystemFont` — tipografía SF Pro sin Google Fonts |
| **SVG Inline** | Iconos, gráficos y mapas renderizados en SVG nativo (sin sprite sheets ni librerías de iconos) |

**Metodologías:**
- Mobile-First Absolute (base en 9:16, escala a tablet y desktop)
- BEM-lite para nomenclatura CSS
- Delegación de eventos para rendimiento en listas de productos
- Lazy loading nativo (`loading="lazy"`) en imágenes
- Scroll pasivo (`{ passive: true }`) en todos los event listeners de scroll

---

## Características Principales

- **Glassmorphism Nav** — `backdrop-filter: blur(20px) saturate(180%)` con compresión al hacer scroll
- **Parallax Dinámico** — texto "LIMITLESS" en 3 capas con movimiento escalonado vía `requestAnimationFrame`
- **Bento Grid** — layout CSS Grid 3×2 estilo Apple App Store con animaciones hover individuales
- **Mini Slider Automático** — Swiper fade + autoplay en la card E-Shop del Bento
- **Modal de Planes** — 3 membresías (Start, Pro, Elite) con precios y beneficios, CTA a WhatsApp
- **Slider de Actividades** — 12 disciplinas en modal con cards de colores (Neon, Dark, Light)
- **E-Shop Completa** — Slider principal + grid filtrable por categoría en tiempo real
- **Product Modal** — imagen, categoría, descripción, selectores de variante (sabor/peso/presentación)
- **Carrito Persistente** — `localStorage` para mantener items entre páginas
- **WhatsApp Integration** — mensaje automático con producto, variantes y precio codificado por URL
- **Compra Exitosa** — modal de confirmación con ícono SVG animado
- **Reveal on Scroll** — `IntersectionObserver` con fade-in + slide-up progresivo
- **Contador Animado** — números de impacto con ease-out-quad vía `requestAnimationFrame`
- **Smooth Scroll** — nativo `scroll-behavior: smooth` + polyfill programático
- **Página Legal Completa** — Privacy Policy (Ley 25.326), Terms of Purchase y Refund Policy con navegación interna
- **Cart Bubble** — botón flotante con contador que aparece al agregar items
- **Burger Menu Mobile** — drawer animado para navegación en móvil con cierre automático
- **Accesibilidad** — roles ARIA, `aria-modal`, `aria-label`, navegación por teclado (Enter/Espacio/Escape)

---

## Estructura de Archivos

```
gympro/
├── index.html          ← Home page (Hero, Bento, Stats, Footer)
├── shop.html           ← Tienda completa (Slider + Grid filtrable)
├── legal.html          ← Políticas legales (Privacy, Terms, Refund)
├── README.md
└── assets/
    ├── css/
    │   └── style.css   ← Hoja de estilos principal (comentada por sección)
    ├── js/
    │   └── main.js     ← Lógica JavaScript (comentada por módulo)
    └── images/
        └── .gitkeep    ← Directorio para assets locales
```

---

## Paleta de Diseño

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#F5F5F7` | Fondo general (blanco seda) |
| `--white` | `#FFFFFF` | Cards y superficies elevadas |
| `--neon` | `#CCFF00` | Acento principal (neon amarillo) |
| `--dark` | `#1D1D1F` | Texto primario, botones dark |
| `--grey` | `#6E6E73` | Texto secundario, labels |
| `--ease` | `cubic-bezier(0.23, 1, 0.32, 1)` | Curva de animación Apple-style |
| `--dur` | `0.8s` | Duración estándar de transiciones |

---

## Instalación y uso local

1. Cloná o descargá el repositorio en tu máquina.
2. Abrí la carpeta `gympro/` con **VS Code** (u otro editor).
3. Instalá la extensión **Live Server** (Ritwick Dey) si no la tenés.
4. Hacé clic derecho sobre `index.html` → **"Open with Live Server"**.
5. El sitio abrirá en `http://127.0.0.1:5500` con hot-reload automático.

> **Sin Live Server:** podés abrir `index.html` directamente en el navegador.

### Personalización rápida

- **Número de WhatsApp:** buscá `5491100000000` en `main.js` y reemplazalo.
- **Precios:** editá el array `PRODUCTS` en `main.js`.
- **Colores:** modificá las variables en la sección `:root` de `style.css`.
- **Sedes:** editá la bento card `.bento__card--sedes` en `index.html`.

---

## Navegadores soportados

Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

> Requiere soporte de `backdrop-filter`, `CSS Grid`, `IntersectionObserver` e `CSS Custom Properties`.

---

## Créditos

```
╔══════════════════════════════════════════════════════╗
║                                                      ║
║      Diseñado y Desarrollado por CsDigitalPro        ║
║             https://csdigitalpro.com                 ║
║                                                      ║
║      © 2025 GymPro Elite Fitness Center.             ║
║      Todos los derechos reservados.                  ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```
