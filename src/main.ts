import "./style.css";

import BrunoImg from "./assets/agents/Bruno.png";
import GalaImg from "./assets/agents/Gala.png";
import NiaImg from "./assets/agents/Nia.png";
import CabrasImg from "./assets/agents/cabras trabajando.png";
import CabrasFut from "./assets/agents/cabras futuristas.png";
import InstagramIcon from "./assets/agents/instagram.svg";
import TikTokIcon from "./assets/agents/tik-tok.svg";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontró el elemento #app");
}

app.innerHTML = `
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <!-- NAVBAR -->
<header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
  <nav class="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">

    <!-- LOGO -->
    <a href="#" class="flex items-center gap-3 group">
      <span
        class="inline-flex h-10 w-10 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 items-center justify-center text-2xl group-hover:scale-105 transition-transform"
      >
        🐐
      </span>
      <span class="font-semibold tracking-tight text-slate-100 text-lg">
        Cabra Labs
      </span>
    </a>

    <!-- NAV LINKS -->
    <div class="hidden md:flex items-center gap-10 text-sm font-medium">
      <a href="#agentes" class="text-slate-200 hover:text-emerald-300 transition-colors">
        Agentes
      </a>
      <a href="#integraciones" class="text-slate-200 hover:text-emerald-300 transition-colors">
        Integraciones
      </a>
      <a href="#sobre" class="text-slate-200 hover:text-emerald-300 transition-colors">
        Inteligencia Operativa
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
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600/40 via-emerald-400/30 to-emerald-300/30 border border-emerald-400/30 hover:scale-105 transition-all"
        >
          <img src="${TikTokIcon}" class="w-5 h-5 opacity-90" alt="TikTok" />
        </a>

        <!-- Instagram -->
        <a
          href="https://instagram.com/cabra_labs"
          target="_blank"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600/40 via-emerald-400/30 to-emerald-300/30 border border-emerald-400/30 hover:scale-105 transition-all"
        >
          <img src="${InstagramIcon}" class="w-5 h-5 opacity-90" alt="Instagram" />
        </a>
      </div>

      <!-- CTA Principal (visible en móvil y desktop) -->
      <a
        href="#contacto"
        class="rounded-full bg-emerald-500 hover:bg-emerald-400 
               px-5 py-2.5 text-sm sm:text-base font-semibold 
               text-white hover:text-white transition-all shadow-md 
               hover:shadow-emerald-400/40 hover:scale-[1.04]
               whitespace-nowrap leading-none"
      >
        Agenda una llamada
      </a>
    </div>

  </nav>
</header>


    <!-- CONTENIDO PRINCIPAL -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-16 space-y-16">
      <!-- HERO -->
      <section
        class="grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] items-center"
      >
        <!-- Hero copy -->
        <div class="space-y-6">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Agentes de IA que venden y automatizan por ti
          </div>

          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
              La <span class="text-gradient-emerald">empresa GOAT</span> de agentes
              y automatizaciones para tu negocio.
            </h1>
            <p class="text-slate-300 text-sm md:text-base max-w-xl">
              Construimos, crecemos y escalamos tu operación con un equipo de agentes,
              bots y funnels que trabajan 24/7 sobre tus canales y herramientas favoritas.
            </p>
          </div>

          <!-- CTA + pequeña nota -->
          <div
            class="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
          >
            <a
              href="#contacto"
              class="rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/50 text-white text-sm font-semibold px-6 py-2.5 transition-all duration-300"
            >
              Diseñar mi equipo GOAT
            </a>
            <p class="text-xs text-slate-400">
              Sin compromiso · Diagnóstico inicial de tu flujo actual.
            </p>
          </div>

          <!-- Métricas -->
          <div class="grid gap-4 sm:grid-cols-4 text-sm">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+300</p>
              <p class="text-xs text-slate-300">empresas potenciadas</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+9M</p>
              <p class="text-xs text-slate-300">interacciones gestionadas</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+$30M</p>
              <p class="text-xs text-slate-300">en ingresos asistidos</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+39%</p>
              <p class="text-xs text-slate-300">crecimiento anual promedio</p>
            </div>
          </div>
        </div>

        <!-- Card lateral / mock de equipo -->
        <aside class="relative float-soft">
          <div class="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl"></div>
          <div class="relative card-soft p-5 space-y-4">
            <p
              class="text-xs font-medium text-emerald-300 uppercase tracking-[0.2em]"
            >
              Equipo GOAT
            </p>
            <div class="overflow-hidden rounded-2xl">
              <img src="${CabrasImg}" alt="Cabras trabajando" class="w-full h-36 md:h-44 object-cover rounded-2xl" />
            </div>

            <div class="space-y-3 text-sm">
              <p class="text-slate-200">
                Diseñamos un stack de agentes hecho a la medida de tu operación:
                atención, ventas, cobranza y backoffice conectados entre sí.
              </p>
              <ul
                class="list-disc list-inside text-slate-300 text-xs space-y-1"
              >
                <li>Bots multicanal en WhatsApp, Instagram, web y más.</li>
                <li>Integraciones con CRMs, pasarelas de pago y ERPs.</li>
                <li>Reportes y tableros con los números que realmente importan.</li>
              </ul>
            </div>

            <div class="flex -space-x-2">
              <span
                class="h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-lg"
                >🐐</span
              >
              <span
                class="h-8 w-8 rounded-full bg-sky-500/20 border border-sky-400/60 flex items-center justify-center text-lg"
                >🤖</span
              >
              <span
                class="h-8 w-8 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/60 flex items-center justify-center text-lg"
                >📈</span
              >
            </div>

            <p class="text-[11px] text-slate-400">
              Cabra Labs se integra con tus sistemas actuales para que no tengas que
              reinventar toda tu operación.
            </p>
          </div>
        </aside>
      </section>

      <!-- QUIÉNES SOMOS (AJUSTADO) -->
      <section id="sobre" class="relative">
        <!-- Glows de fondo -->
        <div
          class="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"
        ></div>
        <div
          class="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
        ></div>

        <div class="relative grid gap-10 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-start">
          <!-- Columna texto -->
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
              <span class="text-base">🐐</span>
              <span>Quiénes somos</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
              Cabra Labs es tu equipo GOAT
              <span class="text-emerald-300"> de automatización e IA </span>
              para escalar operaciones.
            </h2>

            <p class="text-slate-200/90 leading-relaxed text-sm md:text-base">
              Cabra Labs es un estudio de automatización y agentes de inteligencia
              artificial especializado en operaciones y crecimiento de negocios.
            </p>

            <p class="text-slate-300/80 leading-relaxed text-sm md:text-base">
              Diseñamos soluciones que optimizan procesos, liberan horas operativas y aumentan
              la conversión en cada etapa del funnel. Nuestro enfoque es que tu empresa tenga
              un equipo de asistentes virtuales trabajando como si fueran parte de tu staff.
            </p>

            <!-- Chips de foco -->
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="rounded-full bg-slate-900/70 border border-emerald-500/40 px-3 py-1 text-xs text-emerald-100">
                Operaciones
              </span>
              <span class="rounded-full bg-slate-900/70 border border-sky-500/40 px-3 py-1 text-xs text-sky-100">
                Ventas &amp; funnels
              </span>
              <span class="rounded-full bg-slate-900/70 border border-violet-500/40 px-3 py-1 text-xs text-violet-100">
                Soporte &amp; automatización
              </span>
            </div>
          </div>

          <!-- Columna tarjetas -->
          <div class="space-y-4">
            <!-- Card 1 -->
            <div
              class="relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/15 via-slate-900/80 to-slate-950/90 px-6 py-6 shadow-xl shadow-emerald-500/20 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald-400/40 card-soft"
            >
              <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/20 blur-2xl"></div>
              <div class="flex items-start gap-3 relative">
                <div
                  class="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/50 text-lg"
                >
                  🤖
                </div>
                <div class="space-y-1">
                  <h3 class="text-lg font-semibold text-emerald-100">
                    Inteligencia Operativa
                  </h3>
                  <p class="text-sm text-emerald-50/80 leading-relaxed">
                    Entendemos tus procesos actuales, detectamos cuellos de botella y los
                    traducimos en agentes y flujos automatizados que se adaptan a tu operación.
                  </p>
                  <p class="text-xs text-emerald-100/70 pt-1">
                    Ideal para empresas que quieren pasar de procesos manuales a una operación
                    escalable y siempre encendida.
                  </p>
                </div>
              </div>
            </div>

            <!-- Card 2 -->
            <div
              class="relative overflow-hidden rounded-3xl border border-violet-400/40 bg-gradient-to-br from-violet-500/15 via-slate-900/80 to-slate-950/90 px-6 py-6 shadow-xl shadow-violet-500/20 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-violet-400/40 card-soft"
            >
              <div class="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-violet-400/25 blur-2xl"></div>
              <div class="flex items-start gap-3 relative">
                <div
                  class="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-violet-500/20 border border-violet-400/50 text-lg"
                >
                  📈
                </div>
                <div class="space-y-1">
                  <h3 class="text-lg font-semibold text-violet-100">
                    Implementación “done with you”
                  </h3>
                  <p class="text-sm text-violet-50/80 leading-relaxed">
                    No solo entregamos bots: te acompañamos en la implementación, medición y
                    mejora continua para que el equipo GOAT se convierta en parte real de tu
                    operación.
                  </p>
                  <p class="text-xs text-violet-100/70 pt-1">
                    Sesiones de trabajo conjunto, dashboards de resultados y roadmap de mejora
                    continua.
                  </p>
                </div>
              </div>
            </div>

            <!-- Micro badge animada -->
            <div class="flex items-center gap-2 pt-2">
              <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <p class="text-xs text-slate-400">
                Siempre activos, siempre midiendo, siempre optimizando. 🐐⚙️
              </p>
            </div>
          </div>
        </div>
      </section>

            <!-- ALIADOS COMERCIALES -->
<section class="relative">
  <!-- Glows de fondo -->
  <div
    class="pointer-events-none absolute -left-24 -top-10 h-60 w-60 rounded-full bg-emerald-500/15 blur-3xl"
  ></div>
  <div
    class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl"
  ></div>

  <div
    class="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950 px-6 py-7 md:px-8 md:py-8 shadow-xl shadow-emerald-500/15 backdrop-blur"
  >
    <div class="flex flex-col gap-4 md:flex-row md:items-center">
      <div class="space-y-3 max-w-2xl">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-emerald-200"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          <span>Ecosistema GOAT</span>
        </div>

        <div class="space-y-1">
          <h2 class="text-xl md:text-2xl font-semibold">
            Nuestros aliados comerciales
          </h2>
          <p class="text-sm text-slate-300">
            Trabajamos sobre ecosistemas líderes para que tus agentes GOAT se conecten
            con lo que ya usas hoy: CRMs, pasarelas de pago, herramientas de marketing y
            más.
          </p>
        </div>
      </div>
    </div>


    <!-- Chips de marcas -->
    <div
      class="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 text-[11px] md:text-xs"
    >
      <!-- Cada aliado -->
      <div
        class="group relative flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-slate-100/90 shadow-sm shadow-slate-950/50 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-100 hover:shadow-emerald-500/40"
      >
        <span
          class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-500/25 via-sky-500/25 to-emerald-500/25 blur-md"
        ></span>
        <span class="relative z-10 font-medium">Meta</span>
      </div>

      <div
        class="group relative flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-slate-100/90 shadow-sm shadow-slate-950/50 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-100 hover:shadow-emerald-500/40"
      >
        <span
          class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-sky-500/25 via-emerald-500/25 to-sky-500/25 blur-md"
        ></span>
        <span class="relative z-10 font-medium">Google</span>
      </div>

      <div
        class="group relative flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-slate-100/90 shadow-sm shadow-slate-950/50 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-100 hover:shadow-emerald-500/40"
      >
        <span
          class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-500/25 via-sky-500/25 to-violet-500/25 blur-md"
        ></span>
        <span class="relative z-10 font-medium">Microsoft</span>
      </div>

      <div
        class="group relative flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-slate-100/90 shadow-sm shadow-slate-950/50 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-100 hover:shadow-emerald-500/40"
      >
        <span
          class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-sky-500/25 via-emerald-500/25 to-sky-500/25 blur-md"
        ></span>
        <span class="relative z-10 font-medium">Stripe</span>
      </div>

      <div
        class="group relative flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-slate-100/90 shadow-sm shadow-slate-950/50 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-100 hover:shadow-emerald-500/40"
      >
        <span
          class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-500/25 via-sky-500/25 to-emerald-500/25 blur-md"
        ></span>
        <span class="relative z-10 font-medium">WhatsApp API</span>
      </div>

      <div
        class="group relative flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-slate-100/90 shadow-sm shadow-slate-950/50 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-100 hover:shadow-emerald-500/40"
      >
        <span
          class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-500/25 via-emerald-500/25 to-violet-500/25 blur-md"
        ></span>
        <span class="relative z-10 font-medium">Kommo</span>
      </div>

      <div
        class="group relative flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-slate-100/90 shadow-sm shadow-slate-950/50 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-100 hover:shadow-emerald-500/40"
      >
        <span
          class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-sky-500/25 via-emerald-500/25 to-sky-500/25 blur-md"
        ></span>
        <span class="relative z-10 font-medium">Shopify</span>
      </div>

      <div
        class="group relative flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-slate-100/90 shadow-sm shadow-slate-950/50 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-100 hover:shadow-emerald-500/40"
      >
        <span
          class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-500/25 via-sky-500/25 to-violet-500/25 blur-md"
        ></span>
        <span class="relative z-10 font-medium">WordPress</span>
      </div>
    </div>
  </div>
</section>

      <!-- AGENTES GOAT -->
<section id="agentes" class="relative space-y-10 pt-16 pb-20">
  <!-- Glows -->
  <div class="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
  <div class="pointer-events-none absolute -right-24 top-32 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"></div>

  <!-- Encabezado -->
  <div class="space-y-2 text-center md:text-left">
    <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-emerald-200">
      <span class="text-sm">⚡</span> Agentes GOAT
    </div>
    <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
      Conoce a nuestros agentes GOAT
    </h2>
    <p class="text-slate-300 max-w-2xl text-sm md:text-base">
      Cada agente está diseñado para liderar una parte crítica de tu operación: estrategia, soporte y seguimiento comercial trabajando en equipo.
    </p>
  </div>

  <!-- Cards -->
  <div class="grid gap-8 md:grid-cols-3">

    <!-- GALA -->
    <article class="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-slate-950 shadow-[0_0_80px_rgba(16,185,129,0.18)]">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-slate-900/80 pointer-events-none"></div>

      <div class="relative px-8 pt-8 pb-7 space-y-6">
        <div class="flex flex-col items-center md:items-start gap-4">
          <img src="${GalaImg}" alt="Gala" class="h-28 w-auto drop-shadow-xl" />
          <div class="space-y-1 text-center md:text-left">
            <h3 class="text-xl font-semibold text-slate-50">Gala · Estrategia & Funnels</h3>
            <p class="text-sm text-emerald-200/90">Desde $450 setup · planes mensuales según complejidad.</p>
          </div>
        </div>

        <!-- COLETILLA -->
        <p class="text-slate-300/90 text-sm italic leading-relaxed">
          “Gala ordena tu negocio para que vendas más. Te ayuda a atraer clientes, 
          guiarlos paso a paso hasta la compra, y automatiza mensajes y tareas 
          para que no pierdas oportunidades.”
        </p>

        <ul class="space-y-2.5 text-sm text-slate-200/90">
          <li>• Auditoría de tu oferta, productos y recorridos de cliente.</li>
          <li>• Diseño completo de funnels: captación, nurturing y conversión.</li>
          <li>• Definición de mensajes, secuencias y rutas multicanal.</li>
          <li>• Configuración de triggers, segmentación y journeys dinámicos.</li>
          <li>• Integración con CRM, email marketing y canales sociales.</li>
          <li>• Optimización mensual de tasas de conversión y revenue asistido.</li>
        </ul>

        <a href="/disenar-funnel" class="inline-flex items-center gap-1 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors">
          Diseñar mi funnel con Gala →
        </a>
      </div>
    </article>

    <!-- BRUNO -->
    <article class="relative overflow-hidden rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-slate-950 shadow-[0_0_80px_rgba(56,189,248,0.16)]">
      <div class="absolute inset-0 bg-gradient-to-br from-sky-500/18 via-transparent to-slate-900/80 pointer-events-none"></div>

      <div class="relative px-8 pt-8 pb-7 space-y-6">
        <div class="flex flex-col items-center md:items-start gap-4">
          <img src="${BrunoImg}" alt="Bruno" class="h-28 w-auto drop-shadow-xl" />
          <div class="space-y-1 text-center md:text-left">
            <h3 class="text-xl font-semibold text-slate-50">Bruno · Soporte & Bots</h3>
            <p class="text-sm text-sky-200/90">Desde $250/mes · instalación única según canales.</p>
          </div>
        </div>

        <!-- COLETILLA -->
        <p class="text-slate-300/90 text-sm italic leading-relaxed">
          “Bruno responde por ti 24/7. Atiende preguntas, revisa pedidos, gestiona reclamos 
          y si hace falta te pasa la conversación con toda la información lista para que solo resuelvas.”
        </p>

        <ul class="space-y-2.5 text-sm text-slate-200/90">
          <li>• Bot multicanal 24/7 en WhatsApp, Instagram y web.</li>
          <li>• Gestión de FAQs, estados de pedido, tickets y reclamaciones.</li>
          <li>• Flujos automatizados de soporte y entregas.</li>
          <li>• Derivación a humanos con contexto y etiquetado inteligente.</li>
          <li>• Conexión con CRM, ERP o ecommerce.</li>
          <li>• Métricas de soporte: tiempos de respuesta, tickets asistidos y satisfacción.</li>
        </ul>

        <a href="/demo-bruno" class="inline-flex items-center gap-1 text-sm font-semibold text-sky-300 hover:text-sky-200 transition-colors">
          Ver demo de Bruno →
        </a>
      </div>
    </article>

    <!-- NIA -->
    <article class="relative overflow-hidden rounded-3xl border border-purple-400/25 bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-slate-950 shadow-[0_0_80px_rgba(168,85,247,0.18)]">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-500/18 via-transparent to-slate-900/80 pointer-events-none"></div>

      <div class="relative px-8 pt-8 pb-7 space-y-6">
        <div class="flex flex-col items-center md:items-start gap-4">
          <img src="${NiaImg}" alt="Nia" class="h-28 w-auto drop-shadow-xl" />
          <div class="space-y-1 text-center md:text-left">
            <h3 class="text-xl font-semibold text-slate-50">Nia · CRM & Seguimiento</h3>
            <p class="text-sm text-purple-200/90">Desde $300/mes · ideal para equipos comerciales.</p>
          </div>
        </div>

        <!-- COLETILLA -->
        <p class="text-slate-300/90 text-sm italic leading-relaxed">
          “Nia organiza tu equipo comercial. Hace seguimiento de tus prospectos, recuerda tareas, 
          envía mensajes automáticos y te muestra cuánto puedes vender este mes.”
        </p>

        <ul class="space-y-2.5 text-sm text-slate-200/90">
          <li>• Seguimiento automático de leads calientes, fríos y reactivación.</li>
          <li>• Recordatorios, agendas y tareas para equipos comerciales.</li>
          <li>• Mensajes inteligentes según etapa del pipeline.</li>
          <li>• Retargeting sobre tu CRM con flujos segmentados.</li>
          <li>• Reportes de conversión, forecast y oportunidades recuperadas.</li>
          <li>• Optimización mensual del embudo comercial.</li>
        </ul>

        <a href="/crm-automation" class="inline-flex items-center gap-1 text-sm font-semibold text-purple-300 hover:text-purple-200 transition-colors">
          Activar a Nia en mi operación →
        </a>
      </div>
    </article>

  </div>
</section>


      <!-- INTEGRACIONES -->
      <section id="integraciones" class="relative space-y-6 py-10">
  <!-- Glows de fondo -->
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
      Conectamos tus agentes GOAT con CRMs, ERPs, pasarelas de pago, tiendas en línea 
      y herramientas de productividad. Si no ves tu herramienta, igual podemos integrarla.
    </p>
  </div>

  <!-- Chips de integraciones -->
  <div class="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-3 pt-4">
    ${["BNC", "Bancamiga", "Stripe", "PayPal", "Kommo", "Odoo", "Shopify", "WooCommerce"]
      .map(
        (name) => `
        <div class="card-soft py-2 px-3 flex items-center justify-center text-[11px] text-slate-200 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300">
          ${name}
        </div>
      `
      )
      .join("")}
  </div>
</section>

            <!-- SIEMPRE TRABAJANDO -->
      <section class="relative grid gap-10 md:grid-cols-[minmax(0,1.15fr),minmax(0,1.1fr)] items-center">
        <!-- Columna texto -->
        <div class="space-y-5">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
            <span class="text-sm">⚡</span>
            <span>Siempre encendido</span>
          </div>

          <h2 class="text-2xl md:text-3xl font-semibold leading-tight">
            Un compañero que siempre está trabajando
          </h2>

          <p class="text-sm md:text-base text-slate-300/90 leading-relaxed">
            Tus agentes GOAT están disponibles 24/7. Captan leads mientras duermes, atienden
            clientes cuando tu equipo está desconectado y mantienen tus procesos corriendo
            incluso en horas pico.
          </p>

          <p class="text-sm md:text-base text-slate-300/80 leading-relaxed">
            Nuestro trabajo es que tu negocio no dependa solo de disponibilidad humana
            para seguir creciendo.
          </p>
        </div>

        <!-- Card Cabra Labs -->
        <div class="relative">
          <div class="absolute -inset-4 rounded-3xl bg-emerald-500/15 blur-3xl opacity-80"></div>

          <article
            class="relative card-soft p-6 md:p-7 overflow-hidden border border-emerald-400/40 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950"
          >
            <div class="space-y-4">
              <div class="space-y-1">
                <p class="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300">
                  Cabra Labs
                </p>
                <p class="text-sm md:text-base text-slate-100 leading-relaxed">
                  La primera empresa enfocada en crear equipos GOAT de agentes de inteligencia
                  artificial para operaciones en Latinoamérica.
                </p>
              </div>

              <div class="overflow-hidden rounded-2xl border border-emerald-400/30 bg-slate-900/70">
                <img
                  src="${CabrasFut}"
                  alt="Cabras futuristas"
                  class="w-full h-32 md:h-40 object-cover rounded-2xl"
                />
              </div>

              <p class="text-xs md:text-sm text-slate-400 leading-relaxed">
                Diseñamos, implementamos y medimos, para que puedas ver el impacto directo
                en tu facturación y en las horas que recuperas cada mes.
              </p>
            </div>
          </article>
        </div>
      </section>


            <!-- CONTACTO / CTA FINAL -->
      <section id="contacto" class="relative pt-12 mt-10">
        <!-- Glows de fondo -->
        <div class="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl"></div>

        <div
          class="relative card-soft bg-gradient-to-r from-emerald-500/15 via-slate-950/95 to-sky-500/10 px-6 py-8 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <!-- Texto -->
          <div class="space-y-3 max-w-2xl">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-200"
            >
              <span class="text-sm">📲</span>
              <span>Próximo paso</span>
            </div>

            <h2 class="text-2xl md:text-3xl font-semibold">
              Listo para diseñar tu equipo GOAT
            </h2>

            <p class="text-sm text-slate-200/90 leading-relaxed">
              Cuéntanos brevemente sobre tu negocio, tus canales principales y qué parte de
              tu operación quieres automatizar. Te proponemos una arquitectura de agentes,
              integraciones y métricas a seguir.
            </p>

            <p class="text-[11px] text-slate-400">
              Llamada exploratoria de 20–30 minutos · Sin compromiso · Ideal para founders,
              equipos de marketing y operaciones.
            </p>
          </div>

          <!-- Botón WhatsApp -->
          <div class="flex flex-col items-start md:items-end gap-2">
            <a
              href="https://wa.me/584120599367"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-sm font-semibold px-7 py-2.5 transition-colors"
            >
              Hablar con Cabra Labs por WhatsApp
              <span class="text-base">↗</span>
            </a>
            <span class="text-[11px] text-slate-400">
              Respondemos normalmente en menos de 24 horas. 🐐
            </span>
          </div>
        </div>
      </section>


        <!-- FOOTER -->
<footer class="border-t border-white/10 mt-8">
  <div
    class="max-w-6xl mx-auto px-4 md:px-0 py-10 grid gap-8 md:grid-cols-4 text-sm"
  >
    <!-- Columna 1 -->
    <div class="space-y-3">
      <p class="font-semibold">Cabra Labs</p>
      <p class="text-xs text-slate-400 leading-relaxed">
        Creamos tu equipo de agentes y automatizaciones GOAT 
        para que tu negocio funcione incluso cuando tú no estás.
      </p>

      <!-- Redes sociales (IGUALES AL HEADER) -->
      <div class="pt-2 flex items-center gap-3">
        <!-- TikTok -->
        <a
          href="https://tiktok.com/@cabra.labs"
          target="_blank"
          rel="noopener"
          aria-label="TikTok @cabra.labs"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full
                 bg-[#0f2e2c] border border-emerald-400/40
                 shadow-[0_0_15px_-2px_rgba(16,185,129,0.25)]
                 hover:scale-105 transition-transform"
        >
          <img src="${TikTokIcon}" alt="TikTok @cabra.labs" class="w-5 h-5" />
        </a>

        <!-- Instagram -->
        <a
          href="https://instagram.com/cabra_labs"
          target="_blank"
          rel="noopener"
          aria-label="Instagram @cabra_labs"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full
                 bg-[#0f2e2c] border border-emerald-400/40
                 shadow-[0_0_15px_-2px_rgba(16,185,129,0.25)]
                 hover:scale-105 transition-transform"
        >
          <img src="${InstagramIcon}" alt="Instagram @cabra_labs" class="w-5 h-5" />
        </a>
      </div>
    </div>

    <!-- Columna 2 -->
    <div>
      <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
        Agentes
      </p>
      <ul class="space-y-1 text-xs text-slate-400">
        <li>Gala · Estrategia &amp; Funnels</li>
        <li>Bruno · Soporte &amp; Bots</li>
        <li>Nia · CRM &amp; Seguimiento</li>
      </ul>
    </div>

    <!-- Columna 3 -->
    <div>
      <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
        Demos
      </p>
      <ul class="space-y-1 text-xs text-slate-400">
        <li>Retail &amp; e-commerce</li>
        <li>Servicios y consultoría</li>
        <li>Restaurantes &amp; reservas</li>
      </ul>
    </div>

    <!-- Columna 4 -->
    <div>
      <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
        Soporte
      </p>
      <ul class="space-y-1 text-xs text-slate-400">
        <li>Contacto</li>
        <li>Preguntas frecuentes</li>
        <li>Planes y precios</li>
      </ul>
    </div>
  </div>

  <!-- Línea inferior -->
  <div
    class="border-t border-white/10 text-[11px] text-slate-500 py-4 text-center"
  >
    © 2025 Cabra Labs. All rights reserved.
  </div>
</footer>
`;

// =========================
//  Scroll reveal GOAT
// =========================
const revealElements = document.querySelectorAll<HTMLElement>(
  "main section, .card-soft"
);

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
    threshold: 0.2,
  }
);

revealElements.forEach((el, index) => {
  el.classList.add("reveal-on-scroll");
  (el as HTMLElement).style.transitionDelay = `${index * 40}ms`;
  observer.observe(el);
});


