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
    </style>

    <!-- NAVBAR (STICKY SIEMPRE) -->
    <!-- Ajuste: FAQ eliminado del menú + CTA "Conversemos" a WhatsApp (texto blanco) -->
    <header class="cabra-header sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <nav class="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">

        <!-- LOGO (PNG, VITE OK) -->
        <a href="/" class="flex items-center group rounded-full px-2 py-1 active:bg-slate-800/40">
          <img
            src="${CabraLogo}"
            alt="Cabra Labs"
            class="h-10 w-auto group-hover:scale-105 transition-transform duration-200"
            loading="eager"
            decoding="async"
          />
        </a>

        <!-- NAV LINKS (FAQ eliminado) -->
        <div class="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#agentes" class="rounded-full px-3 py-2 text-slate-200 hover:text-emerald-300 transition-colors active:bg-slate-800/40">
            Agentes
          </a>
          <a href="#integraciones" class="rounded-full px-3 py-2 text-slate-200 hover:text-emerald-300 transition-colors active:bg-slate-800/40">
            Integraciones
          </a>
          <a href="#sobre" class="rounded-full px-3 py-2 text-slate-200 hover:text-emerald-300 transition-colors active:bg-slate-800/40">
            Cómo trabajamos
          </a>
        </div>

        <!-- SOCIAL + CTA -->
        <div class="flex items-center gap-3">

          <!-- Redes: solo desktop -->
          <div class="hidden md:flex items-center gap-3">
            <!-- TikTok -->
            <a
              href="https://tiktok.com/@cabra.labs"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600/40 via-emerald-400/30 to-emerald-300/30 border border-emerald-400/30 hover:scale-105 transition-all duration-200 active:bg-slate-800/40"
              aria-label="TikTok"
            >
              <img src="${TikTokIcon}" class="w-5 h-5 opacity-90" alt="TikTok" loading="lazy" decoding="async" />
            </a>

            <!-- Instagram -->
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

          <!-- CTA Principal → WhatsApp (texto blanco) -->
          <a
            href="https://wa.me/584120599367?text=Hola%20Cabra%20Labs%2C%20vengo%20desde%20la%20web%20y%20deseo%20trabajar%20con%20uno%20de%20sus%20agentes.
"
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
            Asistentes digitales que venden y atienden por ti
          </div>

          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
              La <span class="text-gradient-emerald">empresa GOAT</span> de asistentes
              que ponen tu negocio en piloto automático.
            </h1>
            <p class="text-slate-300 text-sm md:text-base max-w-xl">
              Creamos asistentes digitales que responden mensajes, muestran ofertas,
              recuerdan tareas y cuidan a tus clientes en WhatsApp, Instagram,
              tu web y otros canales, a cualquier hora del día.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <a
              href="#contacto"
              class="rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/50 text-white text-sm font-semibold px-6 py-2.5 transition-all duration-200"
            >
              Diseñar mi equipo GOAT
            </a>
            <p class="text-xs text-slate-400">
              Sin compromiso · Revisamos gratis cómo estás atendiendo hoy.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-4 text-sm">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+300</p>
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
                Diseñamos un “equipo invisible” que trabaja detrás de tu negocio:
                responde, recuerda, envía mensajes y lleva el control para que tú
                puedas enfocarte en decidir y crear.
              </p>
              <ul class="list-disc list-inside text-slate-300 text-xs space-y-1">
                <li>Atención automática en WhatsApp, Instagram, web y más.</li>
                <li>Conexión con herramientas que ya usas para vender y cobrar.</li>
                <li>Paneles claros con los números que necesitas.</li>
              </ul>
            </div>

            <p class="text-[11px] text-slate-400">
              Nos adaptamos a tus sistemas actuales para mejorar lo que ya tienes,
              no para obligarte a empezar desde cero.
            </p>
          </div>
        </aside>
      </section>

      <!-- SOBRE -->
      <section id="sobre" class="relative">
        <div class="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"></div>

        <div class="relative grid gap-10 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-start">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
              <span class="text-base">🐐</span>
              <span>Quiénes somos</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
              Cabra Labs es tu equipo GOAT
              <span class="text-emerald-300"> para automatizar sin complicarte </span>
            </h2>

            <p class="text-slate-200/90 leading-relaxed text-sm md:text-base">
              Combinamos negocio y tecnología para que tu empresa atienda mejor,
              venda más y dependa menos de trabajo manual repetitivo.
            </p>

            <div class="flex flex-wrap gap-2 pt-2">
              <span class="rounded-full bg-slate-900/70 border border-emerald-500/40 px-3 py-1 text-xs text-emerald-100">
                Procesos más simples
              </span>
              <span class="rounded-full bg-slate-900/70 border border-sky-500/40 px-3 py-1 text-xs text-sky-100">
                Más ventas sin estrés
              </span>
              <span class="rounded-full bg-slate-900/70 border border-violet-500/40 px-3 py-1 text-xs text-violet-100">
                Mejor atención
              </span>
            </div>
          </div>

          <div class="space-y-4">
            <div class="relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/15 via-slate-900/80 to-slate-950/90 px-6 py-6 shadow-xl shadow-emerald-500/20 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-emerald-400/40 card-soft">
              <h3 class="text-lg font-semibold text-emerald-100">Miramos tu operación con lupa</h3>
              <p class="text-sm text-emerald-50/80 leading-relaxed mt-2">
                Revisamos cómo llegan tus clientes, cómo te escriben y qué pasa después.
                Con eso armamos un mapa simple de tu negocio.
              </p>
            </div>

            <div class="relative overflow-hidden rounded-3xl border border-violet-400/40 bg-gradient-to-br from-violet-500/15 via-slate-900/80 to-slate-950/90 px-6 py-6 shadow-xl shadow-violet-500/20 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-violet-400/40 card-soft">
              <h3 class="text-lg font-semibold text-violet-100">Implementamos contigo</h3>
              <p class="text-sm text-violet-50/80 leading-relaxed mt-2">
                Te acompañamos paso a paso, medimos resultados y ajustamos hasta que funcione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ALIADOS -->
      <section class="relative">
        <div class="pointer-events-none absolute -left-24 -top-10 h-60 w-60 rounded-full bg-emerald-500/15 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl"></div>

        <div class="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950 px-6 py-7 md:px-8 md:py-8 shadow-xl shadow-emerald-500/15 backdrop-blur">
          <div class="space-y-3 max-w-2xl">
            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-emerald-200">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Ecosistema GOAT
            </div>

            <h2 class="text-xl md:text-2xl font-semibold">Nuestros aliados comerciales</h2>
            <p class="text-sm text-slate-300">
              Conectamos tus asistentes con plataformas de pago, anuncios, CRM y tiendas online.
            </p>
          </div>

          <div class="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 text-[11px] md:text-xs">
            ${["Meta","Google","Microsoft","Stripe","WhatsApp API","N8N","Shopify","WordPress"]
              .map(
                (name) => `
                  <div class="card-soft py-2 px-3 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-200">
                    ${name}
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- AGENTES -->
      <section id="agentes" class="relative pt-12 md:pt-16 pb-10 md:pb-16 space-y-10">
        <div class="space-y-2 text-center md:text-left">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-emerald-200">
            <span class="text-sm">⚡</span> Agentes GOAT
          </div>
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
            Conoce a nuestros agentes GOAT
          </h2>
          <p class="text-slate-300 max-w-2xl text-sm md:text-base">
            Cada agente se concentra en una parte clave: atraer, responder y dar seguimiento hasta cerrar.
          </p>
        </div>

        <div class="grid gap-6 md:gap-8 md:grid-cols-3">
          <!-- GALA -->
          <article class="group relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-slate-950 shadow-[0_0_80px_rgba(16,185,129,0.18)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_120px_rgba(16,185,129,0.35)] hover:border-emerald-300/80 h-full">
            <div class="relative px-8 pt-8 pb-7 space-y-6 h-full flex flex-col">
              <div class="space-y-5 grow">
                <div class="flex flex-col items-center md:items-start gap-4">
                  <img src="${GalaImg}" alt="Gala" class="h-28 w-auto drop-shadow-xl" loading="lazy" decoding="async"/>
                  <div class="space-y-1 text-center md:text-left">
                    <h3 class="text-xl font-semibold text-slate-50">Gala · Estrategia & Funnels</h3>
                    <p class="text-sm text-emerald-200/90">Desde $450 de configuración inicial.</p>
                  </div>
                </div>
                <p class="text-slate-300/90 text-sm italic leading-relaxed">
                  “Gala ordena tu negocio para que vendas más: atrae clientes, los guía y automatiza tareas.”
                </p>
                <ul class="space-y-2.5 text-sm text-slate-200/90">
                  <li>• Diseñamos el camino completo del cliente.</li>
                  <li>• Mensajes, secuencias y recordatorios automáticos.</li>
                  <li>• Medición y mejoras continuas.</li>
                </ul>
              </div>
              <div class="pt-4">
                <a href="/gala.html" class="inline-flex items-center justify-center gap-1 text-base font-semibold text-emerald-300 hover:text-emerald-100 border border-emerald-400/70 rounded-full px-5 py-2 shadow-[0_0_12px_rgba(16,185,129,0.45)] hover:shadow-[0_0_22px_rgba(16,185,129,0.75)] transition-all duration-200 hover:scale-[1.03]">
                  Diseñar mi funnel con Gala →
                </a>
              </div>
            </div>
          </article>

          <!-- BRUNO -->
          <article class="group relative overflow-hidden rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-slate-950 shadow-[0_0_80px_rgba(56,189,248,0.16)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_120px_rgba(56,189,248,0.35)] hover:border-sky-300/80 h-full">
            <div class="relative px-8 pt-8 pb-7 space-y-6 h-full flex flex-col">
              <div class="space-y-5 grow">
                <div class="flex flex-col items-center md:items-start gap-4">
                  <img src="${BrunoImg}" alt="Bruno" class="h-28 w-auto drop-shadow-xl" loading="lazy" decoding="async"/>
                  <div class="space-y-1 text-center md:text-left">
                    <h3 class="text-xl font-semibold text-slate-50">Bruno · Soporte & Bots</h3>
                    <p class="text-sm text-sky-200/90">Desde $250/mes.</p>
                  </div>
                </div>
                <p class="text-slate-300/90 text-sm italic leading-relaxed">
                  “Bruno responde por ti 24/7: dudas, pedidos, reclamos y traspaso con contexto.”
                </p>
                <ul class="space-y-2.5 text-sm text-slate-200/90">
                  <li>• WhatsApp, Instagram y web.</li>
                  <li>• Respuestas rápidas y escalamiento a humano.</li>
                  <li>• Reportes claros cada mes.</li>
                </ul>
              </div>
              <div class="pt-4">
                <a href="/bruno.html" class="inline-flex items-center justify-center gap-1 text-base font-semibold text-sky-300 hover:text-sky-100 border border-sky-400/70 rounded-full px-5 py-2 shadow-[0_0_12px_rgba(56,189,248,0.45)] hover:shadow-[0_0_22px_rgba(56,189,248,0.75)] transition-all duration-200 hover:scale-[1.03]">
                  Activar a Bruno →
                </a>
              </div>
            </div>
          </article>

          <!-- NIA -->
          <article class="group relative overflow-hidden rounded-3xl border border-purple-400/25 bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-slate-950 shadow-[0_0_80px_rgba(168,85,247,0.18)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_120px_rgba(168,85,247,0.38)] hover:border-purple-300/80 h-full">
            <div class="relative px-8 pt-8 pb-7 space-y-6 h-full flex flex-col">
              <div class="space-y-5 grow">
                <div class="flex flex-col items-center md:items-start gap-4">
                  <img src="${NiaImg}" alt="Nia" class="h-28 w-auto drop-shadow-xl" loading="lazy" decoding="async"/>
                  <div class="space-y-1 text-center md:text-left">
                    <h3 class="text-xl font-semibold text-slate-50">Nia · CRM & Seguimiento</h3>
                    <p class="text-sm text-purple-200/90">Desde $300/mes.</p>
                  </div>
                </div>
                <p class="text-slate-300/90 text-sm italic leading-relaxed">
                  “Nia organiza tus prospectos, tareas y seguimientos para que cierres más.”
                </p>
                <ul class="space-y-2.5 text-sm text-slate-200/90">
                  <li>• Recordatorios y mensajes automáticos.</li>
                  <li>• Etapas claras del pipeline.</li>
                  <li>• Reportes simples de oportunidades.</li>
                </ul>
              </div>
              <div class="pt-4">
                <a href="/nia.html" class="inline-flex items-center justify-center gap-1 text-base font-semibold text-purple-300 hover:text-purple-100 border border-purple-400/70 rounded-full px-5 py-2 shadow-[0_0_12px_rgba(168,85,247,0.45)] hover:shadow-[0_0_22px_rgba(168,85,247,0.75)] transition-all duration-200 hover:scale-[1.03]">
                  Activar a Nia →
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- INTEGRACIONES -->
      <section id="integraciones" class="relative space-y-6 py-10">
        <div class="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl"></div>

        <div class="relative space-y-4">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
            <span class="text-base">⚡</span>
            <span>Ecosistema GOAT</span>
          </div>

          <h2 class="text-xl md:text-2xl font-semibold">
            Nos integramos con tus herramientas favoritas
          </h2>

          <p class="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Bancos, medios de pago, CRM y tiendas online. Si no ves tu herramienta, igual la revisamos.
          </p>
        </div>

        <div class="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-3 pt-4">
          ${["BNC","Bancamiga","Stripe","PayPal","Profit Plus","Odoo","Shopify","WooCommerce"]
            .map(
              (name) => `
              <div class="card-soft py-2 px-3 flex items-center justify-center text-[11px] text-slate-200 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-200">
                ${name}
              </div>
            `
            )
            .join("")}
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
            Un compañero que siempre está trabajando
          </h2>

          <p class="text-sm md:text-base text-slate-300/90 leading-relaxed">
            Tus agentes GOAT no se cansan. Mientras tú duermes, siguen captando, respondiendo y moviendo clientes.
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
                Medimos impacto en horas ahorradas y ventas asistidas para que veas valor real.
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
              Listo para diseñar tu equipo GOAT
            </h2>

            <p class="text-sm text-slate-200/90 leading-relaxed">
              En una llamada corta revisamos tu operación y te mostramos qué automatizar primero.
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
    
    <!-- BRAND -->
    <div class="space-y-3">
      <p class="font-semibold">Cabra Labs</p>
      <p class="text-xs text-slate-400 leading-relaxed">
        Creamos equipos de asistentes digitales y automatizaciones GOAT para que tu negocio siga atendiendo y vendiendo.
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
          <img src="${InstagramIcon}" alt="Instagram @cabra_labs" class="w-5 h-5" loading="lazy" decoding="async" />
        </a>
      </div>
    </div>

    <!-- AGENTES -->
    <div>
      <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Agentes</p>
      <ul class="space-y-1 text-xs text-slate-400">
        <li>
          <a href="/gala.html" class="hover:text-emerald-200 transition-colors">
            Gala · Estrategia &amp; Funnels
          </a>
        </li>
        <li>
          <a href="/bruno.html" class="hover:text-emerald-200 transition-colors">
            Bruno · Soporte &amp; Bots
          </a>
        </li>
        <li>
          <a href="/nia.html" class="hover:text-emerald-200 transition-colors">
            Nia · CRM &amp; Seguimiento
          </a>
        </li>
      </ul>
    </div>

    <!-- SOPORTE -->
    <div>
      <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Soporte</p>
      <ul class="space-y-1 text-xs text-slate-400">
        <li>
          <a
            class="hover:text-emerald-200 transition-colors"
            href="https://wa.me/584120599367"
            target="_blank"
            rel="noopener"
          >
            Contacto
          </a>
        </li>

        <li>
          <a
            class="hover:text-emerald-200 transition-colors"
            href="/faq.html"
          >
            Preguntas frecuentes
          </a>
        </li>

        <li>
          <a
            class="hover:text-emerald-200 transition-colors"
            href="#agentes"
          >
            Planes y precios
          </a>
        </li>
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
