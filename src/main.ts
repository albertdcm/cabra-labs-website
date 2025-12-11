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
    <a href="/" class="flex items-center gap-3 group">
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
              Sin compromiso · Revisamos gratis cómo estás atendiendo hoy.
            </p>
          </div>

          <!-- Métricas -->
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
              <p class="text-xs text-slate-300">en ventas asistidas por nuestros sistemas</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 card-soft">
              <p class="text-2xl font-semibold">+39%</p>
              <p class="text-xs text-slate-300">crecimiento promedio de ingresos</p>
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
                Diseñamos un “equipo invisible” que trabaja detrás de tu negocio:
                responde, recuerda, envía mensajes y lleva el control para que tú
                puedas enfocarte en decidir y crear.
              </p>
              <ul
                class="list-disc list-inside text-slate-300 text-xs space-y-1"
              >
                <li>Atención automática en WhatsApp, Instagram, web y más.</li>
                <li>Conexión con las herramientas que ya usas para vender y cobrar.</li>
                <li>Paneles claros con los números que necesitas para tomar decisiones.</li>
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
              Nos adaptamos a tus sistemas actuales para mejorar lo que ya tienes,
              no para obligarte a empezar todo desde cero.
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
              <span class="text-emerald-300"> para automatizar tareas del día a día </span>
              sin complicarte la vida.
            </h2>

            <p class="text-slate-200/90 leading-relaxed text-sm md:text-base">
              Somos un equipo que combina negocio y tecnología para algo muy simple:
              que tu empresa atienda mejor, venda más y dependa menos de trabajo manual
              repetitivo.
            </p>

            <p class="text-slate-300/80 leading-relaxed text-sm md:text-base">
              Analizamos cómo trabajas hoy, identificamos los pasos que siempre se repiten
              y los convertimos en procesos automáticos: recordatorios, respuestas,
              seguimientos y reportes que se hacen solos, como si tuvieras varios asistentes
              extra en tu equipo.
            </p>

            <!-- Chips de foco -->
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="rounded-full bg-slate-900/70 border border-emerald-500/40 px-3 py-1 text-xs text-emerald-100">
                Procesos más simples
              </span>
              <span class="rounded-full bg-slate-900/70 border border-sky-500/40 px-3 py-1 text-xs text-sky-100">
                Más ventas sin más estrés
              </span>
              <span class="rounded-full bg-slate-900/70 border border-violet-500/40 px-3 py-1 text-xs text-violet-100">
                Mejor atención a tus clientes
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
                    Miramos tu operación con lupa
                  </h3>
                  <p class="text-sm text-emerald-50/80 leading-relaxed">
                    Revisamos cómo llegan tus clientes, cómo te escriben,
                    quién les responde y qué pasa después. Con eso armamos
                    un mapa sencillo de tu negocio.
                  </p>
                  <p class="text-xs text-emerald-100/70 pt-1">
                    A partir de ese mapa decidimos qué pasos puede hacer
                    un asistente digital y cuáles deben seguir en manos
                    de tu equipo.
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
                    Implementamos contigo, no te dejamos solo
                  </h3>
                  <p class="text-sm text-violet-50/80 leading-relaxed">
                    No instalamos “un bot” y ya. Te acompañamos paso a paso
                    para que todo quede bien conectado, medimos resultados
                    y hacemos ajustes hasta que funcione como necesitas.
                  </p>
                  <p class="text-xs text-violet-100/70 pt-1">
                    Reuniones cortas, paneles fáciles de leer y mejoras
                    continuas basadas en datos reales de tu negocio.
                  </p>
                </div>
              </div>
            </div>

            <!-- Micro badge animada -->
            <div class="flex items-center gap-2 pt-2">
              <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <p class="text-xs text-slate-400">
                Siempre probando, midiendo y mejorando para que tus sistemas no se queden atrás. 🐐⚙️
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
            Conectamos tus asistentes con las plataformas que ya conoces:
            bancos, pasarelas de pago, herramientas de anuncios, sistemas
            para manejar clientes y tiendas en línea.
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
        class="group relative flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-slate-100/90 shadow-sm shadow-slate-950/50 overflow-hidden transition-all	duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-100 hover:shadow-emerald-500/40"
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
<section
  id="agentes"
  class="relative pt-12 md:pt-16 pb-10 md:pb-16 space-y-8 md:space-y-10"
>
  <!-- Glows -->
  <div
    class="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
  ></div>
  <div
    class="pointer-events-none absolute -right-24 top-32 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
  ></div>

  <!-- Encabezado -->
  <div class="space-y-2 text-center md:text-left">
    <div
      class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-emerald-200"
    >
      <span class="text-sm">⚡</span> Agentes GOAT
    </div>
    <h2
      class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50"
    >
      Conoce a nuestros agentes GOAT
    </h2>
    <p class="text-slate-300 max-w-2xl text-sm md:text-base">
      Cada agente se concentra en una parte clave de tu negocio:
      atraer personas, responder dudas y hacer seguimiento a posibles
      clientes hasta que se convierten en ventas.
    </p>
  </div>

  <!-- Cards -->
  <div class="grid gap-6 md:gap-8 md:grid-cols-3">
    <!-- ---------------------- GALA ---------------------- -->
    <article
      class="group relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-slate-950 shadow-[0_0_80px_rgba(16,185,129,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_120px_rgba(16,185,129,0.35)] hover:border-emerald-300/80 h-full"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-transparent to-slate-900/90 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
      ></div>

      <div
        class="relative px-8 pt-8 pb-7 space-y-6 grid grid-rows-[auto_1fr_auto] h-full"
      >
        <!-- Contenido -->
        <div class="space-y-6">
          <div class="flex flex-col items-center md:items-start gap-4">
            <img
              src="${GalaImg}"
              alt="Gala"
              class="h-28 w-auto drop-shadow-xl"
            />
            <div class="space-y-1 text-center md:text-left">
              <h3 class="text-xl font-semibold text-slate-50">
                Gala · Estrategia & Funnels
              </h3>
              <p class="text-sm text-emerald-200/90">
                Desde $450 de configuración inicial · Planes mensuales según lo que necesites.
              </p>
            </div>
          </div>

          <p class="text-slate-300/90 text-sm italic leading-relaxed">
            “Gala pone orden en tu forma de vender. Te ayuda a traer personas nuevas,
            guiarlas paso a paso hasta la compra y dejar cada oportunidad asegurada.”
          </p>

          <ul class="space-y-2.5 text-sm text-slate-200/90">
            <li>• Revisamos tus productos, servicios y forma actual de vender.</li>
            <li>• Diseñamos el camino completo del cliente.</li>
            <li>• Configuramos mensajes, secuencias y recordatorios.</li>
            <li>• Activamos automatizaciones para cada etapa.</li>
            <li>• Conectamos todo con tus redes y correos.</li>
            <li>• Medimos avances para mejorar ventas cada mes.</li>
          </ul>
        </div>

        <!-- Botón alineado abajo en la fila 3 -->
        <div class="row-start-3 pt-4">
          <a
            href="/gala.html"
            class="inline-flex items-center justify-center gap-1 text-base font-semibold text-emerald-300 hover:text-emerald-100
            border border-emerald-400/70 rounded-full px-5 py-2
            shadow-[0_0_12px_rgba(16,185,129,0.45)]
            hover:shadow-[0_0_22px_rgba(16,185,129,0.75)]
            transition-all duration-300 hover:scale-[1.04]"
          >
            Diseñar mi funnel con Gala →
          </a>
        </div>
      </div>
    </article>

    <!-- ---------------------- BRUNO ---------------------- -->
    <article
      class="group relative overflow-hidden rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-slate-950 shadow-[0_0_80px_rgba(56,189,248,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_120px_rgba(56,189,248,0.35)] hover:border-sky-300/80 h-full"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-sky-500/22 via-transparent to-slate-900/90 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
      ></div>

      <div
        class="relative px-8 pt-8 pb-7 space-y-6 grid grid-rows-[auto_1fr_auto] h-full"
      >
        <!-- Contenido -->
        <div class="space-y-6">
          <div class="flex flex-col items-center md:items-start gap-4">
            <img
              src="${BrunoImg}"
              alt="Bruno"
              class="h-28 w-auto drop-shadow-xl"
            />
            <div class="space-y-1 text-center md:text-left">
              <h3 class="text-xl font-semibold text-slate-50">
                Bruno · Soporte & Bots
              </h3>
              <p class="text-sm text-sky-200/90">
                Desde $250/mes · Instalación única según los canales.
              </p>
            </div>
          </div>

          <p class="text-slate-300/90 text-sm italic leading-relaxed">
            “Bruno responde por ti 24/7. Atiende dudas, revisa pedidos,
            recibe reclamos y transfiere casos importantes con todo el contexto.”
          </p>

          <ul class="space-y-2.5 text-sm text-slate-200/90">
            <li>• Disponible 24/7 en WhatsApp, Instagram y web.</li>
            <li>• Responde dudas sobre precios, pedidos y horarios.</li>
            <li>• Flujos automáticos de estados y entregas.</li>
            <li>• Escala casos complejos a un humano.</li>
            <li>• Se conecta a inventario, pagos o CRM.</li>
            <li>• Reportes claros cada mes.</li>
          </ul>
        </div>

        <!-- Botón alineado abajo en la fila 3 -->
        <div class="row-start-3 pt-4">
          <a
            href="/bruno.html"
            class="inline-flex items-center justify-center gap-1 text-base font-semibold text-sky-300 hover:text-sky-100
            border border-sky-400/70 rounded-full px-5 py-2
            shadow-[0_0_12px_rgba(56,189,248,0.45)]
            hover:shadow-[0_0_22px_rgba(56,189,248,0.75)]
            transition-all duration-300 hover:scale-[1.04]"
          >
            Ver demo de Bruno →
          </a>
        </div>
      </div>
    </article>

    <!-- ---------------------- NIA ---------------------- -->
    <article
      class="group relative overflow-hidden rounded-3xl border border-purple-400/25 bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-slate-950 shadow-[0_0_80px_rgba(168,85,247,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_120px_rgba(168,85,247,0.38)] hover:border-purple-300/80 h-full"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-purple-500/24 via-transparent to-slate-900/90 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
      ></div>

      <div
        class="relative px-8 pt-8 pb-7 space-y-6 grid grid-rows-[auto_1fr_auto] h-full"
      >
        <!-- Contenido -->
        <div class="space-y-6">
          <div class="flex flex-col items-center md:items-start gap-4">
            <img
              src="${NiaImg}"
              alt="Nia"
              class="h-28 w-auto drop-shadow-xl"
            />
            <div class="space-y-1 text-center md:text-left">
              <h3 class="text-xl font-semibold text-slate-50">
                Nia · CRM & Seguimiento
              </h3>
              <p class="text-sm text-purple-200/90">
                Desde $300/mes · Ideal para equipos comerciales que quieren orden.
              </p>
            </div>
          </div>

          <p class="text-slate-300/90 text-sm italic leading-relaxed">
            “Nia organiza a tu equipo de ventas. Recuerda qué cliente va en qué etapa,
            qué tarea toca hoy, envía mensajes de seguimiento y te muestra cuánto
            podrías vender este mes si cierras esas oportunidades.”
          </p>

          <ul class="space-y-2.5 text-sm text-slate-200/90">
            <li>• Ordena tus contactos en listas claras: calientes, fríos y para reactivar.</li>
            <li>• Crea recordatorios y tareas automáticas para que ningún cliente se pierda.</li>
            <li>• Envía mensajes según el momento: primera reunión, propuesta enviada, cierre, postventa.</li>
            <li>• Se conecta con tu sistema de clientes (CRM) para aprovechar los datos que ya tienes.</li>
            <li>• Muestra reportes sencillos: cuánto tienes en oportunidades y qué tan cerca estás de cerrar.</li>
            <li>• Cada mes ajustamos el flujo para mejorar los resultados.</li>
          </ul>
        </div>

        <!-- Botón alineado abajo en la fila 3 -->
        <div class="row-start-3 pt-4">
          <a
            href="/nia.html"
            class="inline-flex items-center justify-center gap-1 text-base font-semibold text-purple-300 hover:text-purple-100
            border border-purple-400/70 rounded-full px-5 py-2
            shadow-[0_0_12px_rgba(168,85,247,0.45)]
            hover:shadow-[0_0_22px_rgba(168,85,247,0.75)]
            transition-all duration-300 hover:scale-[1.04]"
          >
            Activar a Nia en mi operación →
          </a>
        </div>
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
      Conectamos tus asistentes GOAT con bancos, medios de pago, sistemas para
      manejar clientes y plataformas de tienda en línea. Si no ves tu herramienta
      en la lista, igual podemos revisarla y conectarla.
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
            Tus agentes GOAT no se cansan ni se distraen. Mientras tú duermes,
            ellos siguen captando leads, respondiendo mensajes y moviendo a tus
            clientes al siguiente paso.
          </p>

          <p class="text-sm md:text-base text-slate-300/80 leading-relaxed">
            El objetivo es que tu negocio no se detenga cuando alguien del equipo
            se enferma, está de viaje o simplemente no puede responder a tiempo.
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
                  Somos la primera empresa enfocada en crear “equipos GOAT” de asistentes
                  digitales para operaciones en Latinoamérica, con un lenguaje claro y
                  cero tecnicismos innecesarios.
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
                Medimos el impacto en horas ahorradas y ventas generadas, para que
                veas claramente qué está haciendo cada asistente y cuánto valor
                aporta a tu negocio.
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
        En una llamada corta nos cuentas qué vendes, por dónde te escriben
        tus clientes y qué tareas te quitan más tiempo. Con eso te mostramos
        qué partes se pueden automatizar y qué tipo de asistente te conviene
        activar primero.
      </p>

      <p class="text-[11px] text-slate-400">
        Llamada exploratoria de 20–30 minutos · Sin compromiso · Ideal para
        founders y equipos que quieren orden antes de crecer.
      </p>
    </div>

    <!-- Botón WhatsApp -->
    <div class="flex flex-col items-start md:items-end gap-2">
      <a
        href="https://wa.me/584120599367"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 
               text-white text-sm font-semibold px-7 py-2.5 transition-colors"
      >
        Hablar con Cabra Labs por WhatsApp
        <span class="text-base text-white">↗</span>
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
        Creamos equipos de asistentes digitales y automatizaciones GOAT 
        para que tu negocio siga atendiendo y vendiendo incluso cuando tú no estás conectado.
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
