import "./style.css";
import GalaInternoImg from "./assets/agents/Gala Interno.png";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontró el elemento #app");
}

app.innerHTML = `
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <!-- NAVBAR SIMPLE -->
    <header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav class="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <a href="/" class="flex items-center gap-3 group">
          <span
            class="inline-flex h-9 w-9 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 items-center justify-center text-xl group-hover:scale-105 transition-transform"
          >
            🐐
          </span>
          <span class="font-semibold tracking-tight text-slate-100 text-base">
            Cabra Labs
          </span>
        </a>
        <a
          href="/"
          class="text-xs sm:text-sm text-slate-300 hover:text-emerald-300 transition-colors"
        >
          ← Volver a la página principal
        </a>
      </nav>
    </header>

    <!-- CONTENIDO -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-10 md:py-14 space-y-12">
      <!-- HERO GALA -->
      <section class="grid gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-center fade-in-up">
        <!-- Texto -->
        <div class="space-y-5">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-200">
            <span class="text-sm">⚡</span>
            <span>Gala · Estrategia & Funnels</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
            Diseña tu funnel con <span class="text-gradient-emerald">Gala</span>
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed">
            Gala ordena tu negocio para que vendas más. Te ayuda a atraer clientes, 
            guiarlos paso a paso hasta la compra, y automatiza mensajes y tareas 
            para que no pierdas oportunidades.
          </p>

          <div class="grid gap-3 text-xs md:text-sm text-slate-200/90">
            <p>Con Gala trabajamos en tres capas:</p>
            <ul class="list-disc list-inside space-y-1">
              <li>Mapa completo de tu recorrido de cliente (desde el primer contacto hasta la recompra).</li>
              <li>Arquitectura de funnels y mensajes por canal: anuncios, orgánico, email, WhatsApp, etc.</li>
              <li>Definición de automatizaciones clave y métricas que vamos a seguir mes a mes.</li>
            </ul>
          </div>

          <p class="text-xs text-emerald-200/90">
            Desde $450 setup · planes mensuales según complejidad y número de funnels.
          </p>
        </div>

        <!-- Imagen Gala -->
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-6 rounded-3xl bg-emerald-500/15 blur-3xl opacity-80"></div>
          <div class="relative rounded-3xl border border-emerald-400/40 bg-slate-900/80 px-4 py-6 md:px-6 md:py-7 card-soft">
            <img
              src="${GalaInternoImg}"
              alt="Gala, agente GOAT de estrategia y funnels"
              class="w-52 md:w-64 lg:w-72 max-w-full mx-auto float-soft"
            />
            <p class="mt-4 text-[11px] text-center text-emerald-100/80">
              Gala analiza campañas, embudos y experiencias para encontrar las rutas
              más rentables de adquisición y conversión.
            </p>
          </div>
        </div>
      </section>

      <!-- FORMULARIO GALA -->
      <section class="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1.1fr)] items-start fade-in-up">
        <!-- Copy formulario -->
        <div class="space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">
            Cuéntale a Gala sobre tu negocio
          </h2>
          <p class="text-sm text-slate-300 leading-relaxed">
            Completa este formulario para que podamos diseñar un funnel a tu medida. 
            Usaremos esta información para la primera llamada de diagnóstico y para 
            preparar propuestas de recorridos y automatizaciones.
          </p>
          <ul class="text-sm text-slate-300/90 space-y-1.5">
            <li>• Tipo de negocio y ticket promedio.</li>
            <li>• Canales actuales de adquisición (pagos y orgánicos).</li>
            <li>• Herramientas que ya utilizas (CRM, email, pasarelas, etc.).</li>
            <li>• Objetivo principal en los próximos 3–6 meses.</li>
          </ul>
        </div>

        <!-- Form -->
        <form
          class="space-y-4 rounded-3xl border border-emerald-400/30 bg-slate-900/80 p-5 md:p-6 shadow-xl shadow-emerald-500/15"
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="¿Con quién va a hablar Gala?"
                required
              />
            </div>
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Correo electrónico</label>
              <input
                type="email"
                name="email"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="para enviarte el mapa de funnel"
                required
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Negocio y oferta principal</label>
            <textarea
              name="negocio"
              rows={3}
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              placeholder="¿Qué vendes? ¿A quién? ¿Cuál es tu ticket promedio?"
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Canales actuales y herramientas</label>
            <textarea
              name="canales"
              rows={3}
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              placeholder="Ej: Instagram, Meta Ads, WhatsApp, sitio web, CRM, email marketing..."
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Objetivo principal (3–6 meses)</label>
            <textarea
              name="objetivo"
              rows={3}
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              placeholder="Ej: duplicar leads, mejorar conversión de llamada a venta, reactivar base fría..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:scale-[1.02] transition-transform"
          >
            Enviar briefing para Gala
            <span class="text-base">↗</span>
          </button>

          <p class="text-[11px] text-slate-500 pt-1">
            Ajustaremos luego el endpoint de este formulario para conectarlo con tu flujo en n8n.
          </p>
        </form>
      </section>
    </main>
  </div>
`;

