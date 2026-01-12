import "./style.css";

import BrunoImg from "./assets/agents/Bruno.png";
import GalaImg from "./assets/agents/Gala.png";
import NiaImg from "./assets/agents/Nia.png";
import CabrasImg from "./assets/agents/cabras trabajando.png";
import CabrasFut from "./assets/agents/cabras futuristas.png";
import InstagramIcon from "./assets/agents/instagram.svg";
import TikTokIcon from "./assets/agents/tik-tok.svg";
import CabraLogo from "./assets/agents/Cabra Labs Logo.png";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontró el elemento #app");
}

app.innerHTML = `
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <!-- FIX: Tap highlight / click overlay (iOS + desktop) -> gris oscuro, focus verde -->
    <style>
      .cabra-header, .cabra-header * {
        -webkit-tap-highlight-color: rgba(30, 41, 59, 0.55); /* slate-800/55 */
      }
      .cabra-header a:active,
      .cabra-header button:active {
        background-color: rgba(30, 41, 59, 0.38); /* gris oscuro */
      }
      .cabra-header a:focus,
      .cabra-header button:focus {
        outline: none;
      }
      .cabra-header a:focus-visible,
      .cabra-header button:focus-visible {
        outline: 2px solid rgba(52, 211, 153, 0.6); /* emerald */
        outline-offset: 2px;
        border-radius: 9999px;
      }

      /* ============================
         ✅ TOGGLE (A MEDIDA)
         ============================ */
      .goat-toggle-btn {
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: rgba(255, 255, 255, 0.06);
        color: rgba(226, 232, 240, 0.88);
        transition: transform 150ms ease, background 150ms ease, border-color 150ms ease;
      }
      .goat-toggle-btn:hover {
        background: rgba(255, 255, 255, 0.09);
        transform: translateY(-1px);
      }
      .goat-toggle-btn[aria-selected="true"] {
        background: linear-gradient(90deg, rgba(56,189,248,0.18), rgba(16,185,129,0.18));
        border-color: rgba(16,185,129,0.35);
        color: rgba(236, 253, 245, 0.92);
        box-shadow: 0 0 0 2px rgba(16,185,129,0.10);
      }
      .goat-panel[hidden] { display: none !important; }

      /* ============================
         ✅ “CÓMO SE COTIZA” CARD ALIGN
         ============================ */
      .quote-card {
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: rgba(255, 255, 255, 0.06);
      }
      .quote-card h4 { letter-spacing: 0.18em; }
      .quote-chip {
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: rgba(255, 255, 255, 0.05);
      }

      /* ============================
         ✅ SERVICIOS IA - ICON CHIP
         ============================ */
      .svc-icon {
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.06);
      }
      .svc-kicker {
        letter-spacing: 0.22em;
      }
    </style>

    <!-- NAVBAR (STICKY SIEMPRE) -->
    <header class="cabra-header sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <nav class="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">

        <!-- LOGO -->
        <a href="/" class="flex items-center group rounded-full px-2 py-1 active:bg-slate-800/40">
          <img
            src="${CabraLogo}"
            alt="Cabra Labs"
            class="h-10 w-auto group-hover:scale-105 transition-transform duration-200"
            loading="eager"
            decoding="async"
          />
        </a>

        <!-- NAV LINKS -->
        <div class="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#agentes" class="rounded-full px-3 py-2 text-slate-200 hover:text-emerald-300 transition-colors active:bg-slate-800/40">
            Agentes
          </a>
          <a href="#servicios-ia" class="rounded-full px-3 py-2 text-slate-200 hover:text-emerald-300 transition-colors active:bg-slate-800/40">
            Servicios IA
          </a>
          <a href="#sobre" class="rounded-full px-3 py-2 text-slate-200 hover:text-emerald-300 transition-colors active:bg-slate-800/40">
            Cómo trabajamos
          </a>
        </div>

        <!-- SOCIAL + CTA -->
        <div class="flex items-center gap-3">
          <div class="hidden md:flex items-center gap-3">
            <a
              href="https://tiktok.com/@cabra.labs"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600/40 via-emerald-400/30 to-emerald-300/30 border border-emerald-400/30 hover:scale-105 transition-all duration-200 active:bg-slate-800/40"
              aria-label="TikTok"
            >
              <img src="${TikTokIcon}" class="w-5 h-5 opacity-90" alt="TikTok" loading="lazy" decoding="async" />
            </a>

            <a
              href="https://instagram.com/cabra_labs"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600/40 via-emerald-400/30 to-emerald-300/30 border border-emerald-400/30 hover:scale-105 transition-all duration-200 active:bg-slate-800/40"
              aria-label="Instagram"
            >
              <img src="${InstagramIcon}" class="w-5 h-5 opacity-90" alt="Instagram" loading="lazy" decoding="async" />
            </a>
          </div>

          <a
            href="https://wa.me/584120599367?text=Hola%20Cabra%20Labs%2C%20vengo%20desde%20la%20web%20y%20quiero%20que%20mi%20negocio%20responda%20y%20cierre%20m%C3%A1s%20ventas%20con%20un%20agente%20GOAT."
            target="_blank"
            rel="noopener"
            class="rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-emerald-500
                   px-5 py-2.5 text-sm sm:text-base font-semibold text-white
                   shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/45 hover:scale-[1.03]
                   transition-all duration-200 whitespace-nowrap leading-none active:bg-slate-800/40"
          >
            Conversemos
          </a>
        </div>

      </nav>
    </header>

    <!-- CONTENIDO PRINCIPAL -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-16 space-y-16">

      <!-- HERO -->
      <section class="grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] items-center">
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Tu negocio responde, filtra y vende — incluso cuando tú no estás
          </div>

          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
              Pon tu negocio en <span class="text-gradient-emerald">piloto automático</span>:
              responde rápido y convierte más sin contratar más personal.
            </h1>
            <p class="text-slate-300 text-sm md:text-base max-w-xl">
              Creamos asistentes GOAT que captan, responden y hacen seguimiento en WhatsApp, Instagram,
              web y otros canales, para que no se pierdan oportunidades de venta.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <a
              href="#contacto"
              class="rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/50 text-white text-sm font-semibold px-6 py-2.5 transition-all duration-200"
            >
              Activar GOAT
            </a>
            <p class="text-xs text-slate-400">
              Sin compromiso · Revisamos gratis dónde se te están escapando mensajes y ventas.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-4 text-sm">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+100</p>
              <p class="text-xs text-slate-300">negocios acompañados</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+9M</p>
              <p class="text-xs text-slate-300">mensajes y consultas atendidas</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+$30M</p>
              <p class="text-xs text-slate-300">en ventas asistidas</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+39%</p>
              <p class="text-xs text-slate-300">crecimiento promedio</p>
            </div>
          </div>
        </div>

        <aside class="relative float-soft">
          <div class="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl"></div>
          <div class="relative card-soft p-5 space-y-4">
            <p class="text-xs font-medium text-emerald-300 uppercase tracking-[0.2em]">
              Equipo GOAT
            </p>
            <div class="overflow-hidden rounded-2xl">
              <img src="${CabrasImg}" alt="Cabras trabajando" class="w-full h-36 md:h-44 object-cover rounded-2xl" loading="eager" decoding="async" />
            </div>

            <div class="space-y-3 text-sm">
              <p class="text-slate-200">
                Un “equipo invisible” que atiende y vende detrás de tu negocio:
                responde, filtra interesados y hace seguimiento para que tú te enfoques en decidir y crecer.
              </p>
              <ul class="list-disc list-inside text-slate-300 text-xs space-y-1">
                <li>Atención automática en WhatsApp, Instagram, web y más.</li>
                <li>Captura de leads y seguimiento para cerrar más.</li>
                <li>Paneles claros con los números que importan.</li>
              </ul>
            </div>

            <p class="text-[11px] text-slate-400">
              Nos adaptamos a tu sistema actual — sin obligarte a empezar desde cero.
            </p>
          </div>
        </aside>
      </section>

      <!-- ✅ GUÍA RÁPIDA -->
      <section class="relative">
        <div class="pointer-events-none absolute -left-24 -top-12 h-60 w-60 rounded-full bg-emerald-500/12 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-24 bottom-0 h-60 w-60 rounded-full bg-sky-500/12 blur-3xl"></div>

        <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-950 to-slate-900/70 px-6 py-7 md:px-8 md:py-8 card-soft">
          <div class="space-y-3 max-w-3xl">
            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
              <span class="text-base">🧭</span>
              <span>Por dónde empezar</span>
            </div>

            <h2 class="text-xl md:text-2xl font-semibold">
              Elige el primer paso según tu problema
            </h2>

            <p class="text-sm text-slate-300">
              No necesitas saber de automatizaciones: te decimos qué agente te conviene primero.
            </p>
          </div>

          <div class="mt-6 grid gap-3 md:grid-cols-3 text-sm">
            <a href="/bruno.html" class="card-soft p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-200">
              <p class="text-slate-100 font-semibold">Pierdo mensajes o respondo tarde</p>
              <p class="text-xs text-slate-300 mt-1">Empieza con <span class="text-sky-200 font-semibold">Bruno</span> (atención 24/7).</p>
            </a>

            <a href="/gala.html" class="card-soft p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-200">
              <p class="text-slate-100 font-semibold">Me llegan leads, pero no buenos</p>
              <p class="text-xs text-slate-300 mt-1">Empieza con <span class="text-emerald-200 font-semibold">Gala</span> (captación + calificación).</p>
            </a>

            <a href="/nia.html" class="card-soft p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-200">
              <p class="text-slate-100 font-semibold">Hablo con leads, pero no cierro</p>
              <p class="text-xs text-slate-300 mt-1">Empieza con <span class="text-purple-200 font-semibold">Nia</span> (seguimiento + cierre).</p>
            </a>
          </div>
        </div>
      </section>

      <!-- AGENTES -->
      <section id="agentes" class="relative pt-8 md:pt-10 pb-6 md:pb-10 space-y-10">
        <div class="space-y-2 text-center md:text-left">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-emerald-200">
            <span class="text-sm">⚡</span> Agentes GOAT
          </div>
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
            Elige tu agente GOAT
          </h2>
          <p class="text-slate-300 max-w-2xl text-sm md:text-base">
            Cada uno se enfoca en una etapa: atraer, responder o hacer seguimiento hasta cerrar.
          </p>
        </div>

        <div class="grid gap-6 md:gap-8 md:grid-cols-3">
          <!-- GALA (✅ sin precios) -->
          <article class="group relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-slate-950 shadow-[0_0_80px_rgba(16,185,129,0.18)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_120px_rgba(16,185,129,0.35)] hover:border-emerald-300/80 h-full">
            <div class="relative px-8 pt-8 pb-7 space-y-6 h-full flex flex-col">
              <div class="space-y-5 grow">
                <div class="flex flex-col items-center md:items-start gap-4">
                  <img src="${GalaImg}" alt="Gala" class="h-28 w-auto drop-shadow-xl" loading="lazy" decoding="async"/>
                  <div class="space-y-1 text-center md:text-left">
                    <h3 class="text-xl font-semibold text-slate-50">Gala · Leads listos para comprar</h3>
                    <p class="text-xs text-emerald-200/90 uppercase tracking-[0.22em]">Captación + calificación</p>
                  </div>
                </div>

                <p class="text-slate-300/90 text-sm italic leading-relaxed">
                  “Convierte clics y mensajes en oportunidades reales: atrae, califica y ordena tus leads.”
                </p>

                <ul class="space-y-2.5 text-sm text-slate-200/90">
                  <li>• Calificación automática (frío | tibio | caliente).</li>
                  <li>• Captación desde Ads, link en bio y WhatsApp directo.</li>
                  <li>• Etiquetado y conexión a agenda/CRM + métricas básicas.</li>
                  <li>• Canales: WhatsApp · Instagram · Facebook Messenger.</li>
                </ul>
              </div>

              <div class="pt-4">
                <a href="/gala.html" class="inline-flex items-center justify-center gap-1 text-base font-semibold text-emerald-300 hover:text-emerald-100 border border-emerald-400/70 rounded-full px-6 py-2.5 shadow-[0_0_14px_rgba(16,185,129,0.40)] hover:shadow-[0_0_24px_rgba(16,185,129,0.70)] transition-all duration-200 hover:scale-[1.03]">
                  Quiero leads →
                </a>
              </div>
            </div>
          </article>

          <!-- BRUNO (✅ sin precios) -->
          <article class="group relative overflow-hidden rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-slate-950 shadow-[0_0_80px_rgba(56,189,248,0.16)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_120px_rgba(56,189,248,0.35)] hover:border-sky-300/80 h-full">
            <div class="relative px-8 pt-8 pb-7 space-y-6 h-full flex flex-col">
              <div class="space-y-5 grow">
                <div class="flex flex-col items-center md:items-start gap-4">
                  <img src="${BrunoImg}" alt="Bruno" class="h-28 w-auto drop-shadow-xl" loading="lazy" decoding="async"/>
                  <div class="space-y-1 text-center md:text-left">
                    <h3 class="text-xl font-semibold text-slate-50">Bruno · Atención 24/7 sin estrés</h3>
                    <p class="text-xs text-sky-200/90 uppercase tracking-[0.22em]">Atención + filtros</p>
                  </div>
                </div>

                <p class="text-slate-300/90 text-sm italic leading-relaxed">
                  “Responde y filtra en segundos: atención consistente con tono de marca y escalamiento a humano.”
                </p>

                <ul class="space-y-2.5 text-sm text-slate-200/90">
                  <li>• Atención automática 24/7 + FAQs claras.</li>
                  <li>• Captura de datos, filtros y escalamiento a humano.</li>
                  <li>• Reportes mensuales de actividad.</li>
                  <li>• Canales: WhatsApp · Instagram · Facebook (Web opcional).</li>
                </ul>
              </div>

              <div class="pt-4">
                <a href="/bruno.html" class="inline-flex items-center justify-center gap-1 text-base font-semibold text-sky-300 hover:text-sky-100 border border-sky-400/70 rounded-full px-6 py-2.5 shadow-[0_0_14px_rgba(56,189,248,0.40)] hover:shadow-[0_0_24px_rgba(56,189,248,0.70)] transition-all duration-200 hover:scale-[1.03]">
                  Quiero atención 24/7 →
                </a>
              </div>
            </div>
          </article>

          <!-- NIA (✅ sin precios) -->
          <article class="group relative overflow-hidden rounded-3xl border border-purple-400/25 bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-slate-950 shadow-[0_0_80px_rgba(168,85,247,0.18)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_120px_rgba(168,85,247,0.38)] hover:border-purple-300/80 h-full">
            <div class="relative px-8 pt-8 pb-7 space-y-6 h-full flex flex-col">
              <div class="space-y-5 grow">
                <div class="flex flex-col items-center md:items-start gap-4">
                  <img src="${NiaImg}" alt="Nia" class="h-28 w-auto drop-shadow-xl" loading="lazy" decoding="async"/>
                  <div class="space-y-1 text-center md:text-left">
                    <h3 class="text-xl font-semibold text-slate-50">Nia · Seguimiento que cierra</h3>
                    <p class="text-xs text-purple-200/90 uppercase tracking-[0.22em]">Seguimiento + cierre</p>
                  </div>
                </div>

                <p class="text-slate-300/90 text-sm italic leading-relaxed">
                  “Hace el seguimiento por ti: el mensaje correcto, en el momento correcto, para llegar a cierre.”
                </p>

                <ul class="space-y-2.5 text-sm text-slate-200/90">
                  <li>• Seguimiento automático 24h/72h + recuperación de leads fríos.</li>
                  <li>• Pipeline base y recordatorios para avanzar.</li>
                  <li>• Alertas y reportes simples.</li>
                  <li>• Canales: WhatsApp · Instagram (Email opcional).</li>
                </ul>
              </div>

              <div class="pt-4">
                <a href="/nia.html" class="inline-flex items-center justify-center gap-1 text-base font-semibold text-purple-300 hover:text-purple-100 border border-purple-400/70 rounded-full px-6 py-2.5 shadow-[0_0_14px_rgba(168,85,247,0.40)] hover:shadow-[0_0_24px_rgba(168,85,247,0.70)] transition-all duration-200 hover:scale-[1.03]">
                  Quiero cerrar más →
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- ✅ BLOQUE “A MEDIDA” (COMPACTO) -->
        <div class="pt-2">
          <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-950 to-slate-900/70 px-6 py-7 md:px-8 md:py-8 card-soft">
            <div class="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/12 blur-3xl"></div>
            <div class="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-sky-500/12 blur-3xl"></div>

            <div class="relative grid gap-6 md:grid-cols-[minmax(0,1.25fr),minmax(0,1fr)] items-start">

              <!-- LEFT -->
              <div class="space-y-4">
                <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-slate-200">
                  <span class="text-sm">🧩</span>
                  Automatización a medida
                </div>

                <h3 class="text-xl md:text-2xl font-semibold">
                  ¿Necesitas algo específico fuera de los planes?
                </h3>

                <p class="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Diseñamos e implementamos el flujo exacto que te falta: pagos, CRM, reportes, campañas u onboarding.
                </p>

                <!-- ✅ TOGGLE -->
                <div class="flex flex-wrap gap-2" role="tablist" aria-label="Tipo de automatización a medida">
                  <button
                    class="goat-toggle-btn rounded-full px-4 py-2 text-xs md:text-sm font-semibold"
                    data-goat-tab="puntual"
                    role="tab"
                    aria-selected="true"
                    type="button"
                  >
                    Flujo puntual
                  </button>
                  <button
                    class="goat-toggle-btn rounded-full px-4 py-2 text-xs md:text-sm font-semibold"
                    data-goat-tab="integracion"
                    role="tab"
                    aria-selected="false"
                    type="button"
                  >
                    Integración
                  </button>
                  <button
                    class="goat-toggle-btn rounded-full px-4 py-2 text-xs md:text-sm font-semibold"
                    data-goat-tab="sistema"
                    role="tab"
                    aria-selected="false"
                    type="button"
                  >
                    Sistema completo
                  </button>
                </div>

                <!-- PANELS (cortos) -->
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
                  <div class="goat-panel space-y-2" data-goat-panel="puntual">
                    <p class="text-sm text-slate-200/90">
                      Para resolver <span class="text-emerald-200 font-semibold">1 objetivo</span> rápido.
                    </p>
                    <ul class="text-sm text-slate-200/90 space-y-1.5">
                      <li>• Automatización lista para usar</li>
                      <li>• Pruebas + entrega + doc mínima</li>
                    </ul>
                  </div>

                  <div class="goat-panel space-y-2" data-goat-panel="integracion" hidden>
                    <p class="text-sm text-slate-200/90">
                      Para <span class="text-sky-200 font-semibold">conectar herramientas</span> (API/Webhooks).
                    </p>
                    <ul class="text-sm text-slate-200/90 space-y-1.5">
                      <li>• Mapeo + validaciones</li>
                      <li>• Manejo de errores + pruebas</li>
                    </ul>
                  </div>

                  <div class="goat-panel space-y-2" data-goat-panel="sistema" hidden>
                    <p class="text-sm text-slate-200/90">
                      Para flujos <span class="text-violet-200 font-semibold">multi-etapas</span> con métricas.
                    </p>
                    <ul class="text-sm text-slate-200/90 space-y-1.5">
                      <li>• Varias rutas + segmentación</li>
                      <li>• Indicadores (básico o avanzado)</li>
                    </ul>
                  </div>
                </div>

                <p class="text-[11px] text-slate-400">
                  Ideal para complementar Gala/Bruno/Nia con un extra puntual.
                </p>
              </div>

              <!-- RIGHT (Cómo se cotiza) -->
              <div class="space-y-4 md:text-right">
                <div class="quote-card rounded-3xl p-5 md:p-6 text-left">
                  <div class="flex items-start justify-between gap-3">
                    <div>
                      <p class="text-[11px] uppercase tracking-[0.22em] text-slate-300">Cómo se cotiza</p>
                      <h4 class="mt-2 text-base md:text-lg font-semibold text-slate-100">
                        Por alcance (impacto + integraciones + volumen)
                      </h4>
                    </div>

                    <div class="shrink-0 w-10 h-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                      <span class="text-lg">🧾</span>
                    </div>
                  </div>

                  <ul class="mt-4 space-y-2 text-sm text-slate-200/90">
                    <li class="flex gap-2">
                      <span class="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span><span class="font-semibold text-slate-100">Complejidad</span> del flujo</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0"></span>
                      <span><span class="font-semibold text-slate-100">Integraciones</span> (CRM, pagos, e-commerce)</span>
                    </li>
                    <li class="flex gap-2">
                      <span class="mt-[6px] h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0"></span>
                      <span><span class="font-semibold text-slate-100">Volumen</span> (leads/mensajes)</span>
                    </li>
                  </ul>

                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="quote-chip rounded-full px-3 py-1 text-[11px] text-slate-300">Propuesta rápida</span>
                    <span class="quote-chip rounded-full px-3 py-1 text-[11px] text-slate-300">Entrega clara</span>
                    <span class="quote-chip rounded-full px-3 py-1 text-[11px] text-slate-300">Pruebas incluidas</span>
                  </div>

                  <p class="mt-4 text-[11px] text-slate-400">
                    En una llamada corta te enviamos alcance + entregables + precio.
                  </p>
                </div>

                <div class="flex md:justify-end">
                  <a
                    href="#contacto"
                    class="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 text-white text-sm font-semibold px-6 py-2.5 transition-all duration-200"
                  >
                    Cotizar flujo a medida
                    <span class="text-base text-white">↗</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <!-- ✅ SERVICIOS IA (con íconos restaurados) -->
      <section id="servicios-ia" class="relative space-y-8 py-6">
        <div class="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl"></div>

        <div class="relative space-y-3">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
            <span class="text-base">✨</span>
            <span>Servicios IA</span>
          </div>

          <h2 class="text-2xl md:text-3xl font-semibold">
            La capa creativa que potencia a tus agentes GOAT
          </h2>

          <p class="text-sm text-slate-300 max-w-3xl leading-relaxed">
            Además de automatizar respuestas y seguimiento, creamos los activos que hacen que tu embudo convierta:
            landing pages, sitios web y contenido con IA (imagen, video y audio) listo para publicar.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <!-- WEB & CONVERSIÓN -->
          <article class="card-soft relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 via-slate-900/70 to-slate-950 p-7">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="svc-kicker text-[11px] uppercase text-emerald-200/80">Web & conversión</p>
                <h3 class="mt-3 text-2xl font-semibold">Landing + sitios web</h3>
              </div>
              <div class="svc-icon w-11 h-11 rounded-2xl flex items-center justify-center">
                <span class="text-lg">🌐</span>
              </div>
            </div>

            <ul class="mt-6 space-y-3 text-sm text-slate-200/90">
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span><span class="text-emerald-200 font-semibold">Landing express (mobile-first)</span> para vender</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Copy + estructura (CTA, secciones, FAQ, prueba social)</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>SEO básico + performance + tracking (Pixel/GA opcional)</span>
              </li>
            </ul>
          </article>

          <!-- CREATIVOS IA -->
          <article class="card-soft relative overflow-hidden rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-500/10 via-slate-900/70 to-slate-950 p-7">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="svc-kicker text-[11px] uppercase text-sky-200/80">Creativos IA</p>
                <h3 class="mt-3 text-2xl font-semibold">Diseño de imágenes</h3>
              </div>
              <div class="svc-icon w-11 h-11 rounded-2xl flex items-center justify-center">
                <span class="text-lg">🖼️</span>
              </div>
            </div>

            <ul class="mt-6 space-y-3 text-sm text-slate-200/90">
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0"></span>
                <span><span class="text-sky-200 font-semibold">Posts, stories y banners</span> (brand-lock)</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0"></span>
                <span>Creativos para Ads (variantes A/B)</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0"></span>
                <span>Mockups / producto / carruseles / thumbnails</span>
              </li>
            </ul>
          </article>

          <!-- CONTENIDO IA -->
          <article class="card-soft relative overflow-hidden rounded-3xl border border-purple-400/25 bg-gradient-to-br from-purple-500/12 via-slate-900/70 to-slate-950 p-7">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="svc-kicker text-[11px] uppercase text-purple-200/80">Contenido IA</p>
                <h3 class="mt-3 text-2xl font-semibold">Videos y audios</h3>
              </div>
              <div class="svc-icon w-11 h-11 rounded-2xl flex items-center justify-center">
                <span class="text-lg">🎬</span>
              </div>
            </div>

            <ul class="mt-6 space-y-3 text-sm text-slate-200/90">
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0"></span>
                <span><span class="text-purple-200 font-semibold">Reels/TikTok:</span> edición + subtítulos + ganchos</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0"></span>
                <span>Guiones + voiceover IA + locuciones</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0"></span>
                <span>Piezas para campañas + UGC-style (opcional)</span>
              </li>
            </ul>
          </article>
        </div>

        <div class="pt-2">
          <p class="text-[11px] text-slate-400 max-w-3xl">
            Ideal si ya usas Gala/Bruno/Nia y quieres aumentar conversión con piezas creativas + landing + contenido.
          </p>

          <div class="mt-4">
            <a
              href="#contacto"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 text-white text-sm font-semibold px-6 py-2.5 transition-all duration-200"
            >
              Quiero un pack creativo
              <span class="text-base text-white">↗</span>
            </a>
          </div>
        </div>
      </section>

      <!-- SOBRE -->
      <section id="sobre" class="relative">
        <div class="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"></div>

        <div class="relative grid gap-10 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-start">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
              <span class="text-base">🐐</span>
              <span>Cómo trabajamos</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
              Menos mensajes perdidos.
              <span class="text-emerald-300"> Más ventas con seguimiento.</span>
            </h2>

            <p class="text-slate-200/90 leading-relaxed text-sm md:text-base">
              Combinamos negocio y tecnología para que respondas rápido, filtres mejor y cierres más.
            </p>

            <div class="flex flex-wrap gap-2 pt-2">
              <span class="rounded-full bg-slate-900/70 border border-emerald-500/40 px-3 py-1 text-xs text-emerald-100">
                Respuesta consistente
              </span>
              <span class="rounded-full bg-slate-900/70 border border-sky-500/40 px-3 py-1 text-xs text-sky-100">
                Leads calificados
              </span>
              <span class="rounded-full bg-slate-900/70 border border-violet-500/40 px-3 py-1 text-xs text-violet-100">
                Seguimiento automático
              </span>
            </div>
          </div>

          <div class="space-y-4">
            <div class="relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/15 via-slate-900/80 to-slate-950/90 px-6 py-6 shadow-xl shadow-emerald-500/20 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-emerald-400/40 card-soft">
              <h3 class="text-lg font-semibold text-emerald-100">Diagnóstico rápido</h3>
              <p class="text-sm text-emerald-50/80 leading-relaxed mt-2">
                Revisamos tus mensajes y detectamos dónde se caen oportunidades (y cómo recuperarlas).
              </p>
            </div>

            <div class="relative overflow-hidden rounded-3xl border border-violet-400/40 bg-gradient-to-br from-violet-500/15 via-slate-900/80 to-slate-950/90 px-6 py-6 shadow-xl shadow-violet-500/20 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-violet-400/40 card-soft">
              <h3 class="text-lg font-semibold text-violet-100">Implementación + mejoras</h3>
              <p class="text-sm text-violet-50/80 leading-relaxed mt-2">
                Lo montamos contigo, medimos y ajustamos hasta que se note en respuestas y cierres.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SIEMPRE TRABAJANDO -->
      <section class="relative grid gap-10 md:grid-cols-[minmax(0,1.15fr),minmax(0,1.1fr)] items-center">
        <div class="space-y-5">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
            <span class="text-sm">⚡</span>
            <span>Siempre encendido</span>
          </div>

          <h2 class="text-2xl md:text-3xl font-semibold leading-tight">
            Tu equipo GOAT trabaja mientras tú no estás
          </h2>

          <p class="text-sm md:text-base text-slate-300/90 leading-relaxed">
            Responde, filtra y hace seguimiento 24/7 para que no se enfríen tus leads.
          </p>
        </div>

        <div class="relative">
          <div class="absolute -inset-4 rounded-3xl bg-emerald-500/15 blur-3xl opacity-80"></div>

          <article class="relative card-soft p-6 md:p-7 overflow-hidden border border-emerald-400/40 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950">
            <div class="space-y-4">
              <p class="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300">
                Cabra Labs
              </p>

              <div class="overflow-hidden rounded-2xl border border-emerald-400/30 bg-slate-900/70">
                <img
                  src="${CabrasFut}"
                  alt="Cabras futuristas"
                  class="w-full h-32 md:h-40 object-cover rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p class="text-xs md:text-sm text-slate-400 leading-relaxed">
                Medimos impacto en tiempo ahorrado y oportunidades atendidas para que veas valor real.
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- CONTACTO -->
      <section id="contacto" class="relative pt-12 mt-10">
        <div class="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl"></div>

        <div class="relative card-soft bg-gradient-to-r from-emerald-500/15 via-slate-950/95 to-sky-500/10 px-6 py-8 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div class="space-y-3 max-w-2xl">
            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-200">
              <span class="text-sm">📲</span>
              <span>Próximo paso</span>
            </div>

            <h2 class="text-2xl md:text-3xl font-semibold">
              ¿Listo para dejar de perder mensajes y cerrar más?
            </h2>

            <p class="text-sm text-slate-200/90 leading-relaxed">
              En una llamada corta revisamos tu atención actual y te mostramos qué automatizar primero.
            </p>

            <p class="text-[11px] text-slate-400">
              Chat exploratorio · Sin compromiso.
            </p>
          </div>

          <div class="flex flex-col items-start md:items-end gap-2">
            <a
              href="https://wa.me/584120599367"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-7 py-2.5 transition-colors duration-200"
            >
              Hablar por WhatsApp
              <span class="text-base text-white">↗</span>
            </a>

            <span class="text-[11px] text-slate-400">
              Estamos listos para atenderte. 🐐
            </span>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="border-t border-white/10 mt-8">
        <div class="max-w-6xl mx-auto px-4 md:px-0 py-10 grid gap-8 md:grid-cols-3 text-sm">
          <div class="space-y-3">
            <p class="font-semibold">Cabra Labs</p>
            <p class="text-xs text-slate-400 leading-relaxed">
              Creamos equipos GOAT para que tu negocio responda, capture leads y haga seguimiento hasta cerrar ventas.
            </p>

            <div class="pt-2 flex items-center gap-3">
              <a
                href="https://tiktok.com/@cabra.labs"
                target="_blank"
                rel="noopener"
                aria-label="TikTok @cabra.labs"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0f2e2c] border border-emerald-400/40 shadow-[0_0_15px_-2px_rgba(16,185,129,0.25)] hover:scale-105 transition-transform duration-200"
              >
                <img src="${TikTokIcon}" alt="TikTok @cabra.labs" class="w-5 h-5" loading="lazy" decoding="async" />
              </a>

              <a
                href="https://instagram.com/cabra_labs"
                target="_blank"
                rel="noopener"
                aria-label="Instagram @cabra_labs"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0f2e2c] border border-emerald-400/40 shadow-[0_0_15px_-2px_rgba(16,185,129,0.25)] hover:scale-105 transition-transform duration-200"
              >
                <img src="${InstagramIcon}" alt="Instagram @cabra.labs" class="w-5 h-5" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>

          <div>
            <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Agentes</p>
            <ul class="space-y-1 text-xs text-slate-400">
              <li><a href="/gala.html" class="hover:text-emerald-200 transition-colors">Gala · Leads listos para comprar</a></li>
              <li><a href="/bruno.html" class="hover:text-emerald-200 transition-colors">Bruno · Atención 24/7 sin estrés</a></li>
              <li><a href="/nia.html" class="hover:text-emerald-200 transition-colors">Nia · Seguimiento que cierra</a></li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Soporte</p>
            <ul class="space-y-1 text-xs text-slate-400">
              <li>
                <a class="hover:text-emerald-200 transition-colors" href="https://wa.me/584120599367" target="_blank" rel="noopener">
                  Contacto
                </a>
              </li>
              <li><a class="hover:text-emerald-200 transition-colors" href="/faq.html">Preguntas frecuentes</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/10 text-[11px] text-slate-500 py-4 text-center">
          © 2025 Cabra Labs. All rights reserved.
        </div>
      </footer>

    </main>
  </div>
`;

// =========================
//  Scroll reveal (más rápido)
// =========================
const revealElements = document.querySelectorAll<HTMLElement>("main section, .card-soft");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "120px 0px",
  }
);

revealElements.forEach((el, index) => {
  el.classList.add("reveal-on-scroll");
  el.style.transitionDelay = `${Math.min(index * 16, 160)}ms`;
  observer.observe(el);
});

// =========================
// ✅ Toggle A MEDIDA
// =========================
(function initGoatToggle() {
  const tabButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-goat-tab]"));
  const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-goat-panel]"));

  if (!tabButtons.length || !panels.length) return;

  const setActive = (key: string) => {
    tabButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-goat-tab") === key;
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      const show = panel.getAttribute("data-goat-panel") === key;
      panel.toggleAttribute("hidden", !show);
    });
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-goat-tab") || "puntual";
      setActive(key);
    });
  });

  // default
  setActive("puntual");
})();

// Preload ligero de imágenes clave
const preload = (src: string) => {
  const img = new Image();
  img.decoding = "async";
  img.loading = "eager";
  img.src = src;
};

preload(CabraLogo);
preload(CabrasImg);
preload(GalaImg);
preload(BrunoImg);
preload(NiaImg);
preload(CabrasFut);
