import "./style.css";
import BrunoInternoImg from "./assets/agents/Bruno Interno.png";

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
            class="inline-flex h-9 w-9 rounded-2xl bg-sky-500/10 border border-sky-400/40 items-center justify-center text-xl group-hover:scale-105 transition-transform"
          >
            🐐
          </span>
          <span class="font-semibold tracking-tight text-slate-100 text-base">
            Cabra Labs
          </span>
        </a>
        <a
          href="/"
          class="text-xs sm:text-sm text-slate-300 hover:text-sky-300 transition-colors"
        >
          ← Volver a la página principal
        </a>
      </nav>
    </header>

    <!-- CONTENIDO -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-10 md:py-14 space-y-12">
      <!-- HERO BRUNO -->
      <section class="grid gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-center fade-in-up">
        <!-- Texto -->
        <div class="space-y-5">
          <div class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-sky-100">
            <span class="text-sm">💬</span>
            <span>Bruno · Soporte &amp; Bots</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
            Activa a <span class="text-gradient-emerald">Bruno</span> como tu front-line 24/7
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed">
            Bruno responde por ti 24/7. Atiende preguntas, revisa pedidos, gestiona reclamos 
            y si hace falta te pasa la conversación con toda la información lista para que solo resuelvas.
          </p>

          <div class="grid gap-3 text-xs md:text-sm text-slate-200/90">
            <p>Lo conectamos a tus canales principales:</p>
            <ul class="list-disc list-inside space-y-1">
              <li>WhatsApp Business / API, Instagram DM y webchat.</li>
              <li>Flujos de soporte, status de órdenes, reclamos y FAQs.</li>
              <li>Escalamiento a humanos con contexto, tags y notas.</li>
            </ul>
          </div>

          <p class="text-xs text-sky-200/90">
            Desde $250/mes · setup inicial según cantidad de canales y flujos.
          </p>
        </div>

        <!-- Imagen Bruno -->
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-6 rounded-3xl bg-sky-500/15 blur-3xl opacity-80"></div>
          <div
            class="relative rounded-3xl border border-sky-400/60 bg-slate-900/80
                   px-4 py-6 md:px-6 md:py-7 card-soft
                   hover:border-sky-400 hover:shadow-sky-500/40 transition-all"
          >
            <img
              src="${BrunoInternoImg}"
              alt="Bruno, agente GOAT de soporte y bots"
              class="w-52 md:w-64 lg:w-72 max-w-full mx-auto float-soft"
            />
            <p class="mt-4 text-[11px] text-center text-sky-100/85">
              Bruno se encarga del volumen: tickets repetitivos, consultas simples 
              y seguimiento de casos, liberando horas del equipo humano.
            </p>
          </div>
        </div>
      </section>

      <!-- FORMULARIO BRUNO -->
      <section class="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1.1fr)] items-start fade-in-up">
        <!-- Copy formulario -->
        <div class="space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">
            Configura tu bot de soporte con Bruno
          </h2>
          <p class="text-sm text-slate-300 leading-relaxed">
            Con esta información diseñamos el primer flujo de Bruno: canales a conectar, 
            tipos de consulta y qué cosas deben ir sí o sí a un humano.
          </p>
          <ul class="text-sm text-slate-300/90 space-y-1.5">
            <li>• Volumen aproximado de mensajes / tickets al mes.</li>
            <li>• Canales donde quieres a Bruno operativo.</li>
            <li>• Principales motivos de contacto de tus clientes.</li>
            <li>• Sistemas a los que debemos conectarnos (ecommerce, ERP, CRM...).</li>
          </ul>
        </div>

        <!-- Form -->
        <form
          class="space-y-4 rounded-3xl border border-sky-400/30 bg-slate-900/80 p-5 md:p-6 shadow-xl shadow-sky-500/20"
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Correo</label>
              <input
                type="email"
                name="email"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="para enviar la propuesta de flujo"
                required
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Tipo de negocio</label>
            <input
              type="text"
              name="negocio"
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              placeholder="Retail, ecommerce, SaaS, servicios, etc."
            />
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Canales donde quieres a Bruno</label>
            <textarea
              name="canales"
              rows={3}
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              placeholder="Ej: WhatsApp Business, Instagram, webchat, Messenger..."
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Principales motivos de contacto</label>
            <textarea
              name="motivos"
              rows={3}
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              placeholder="Ej: estado de pedidos, cambios, reclamos, dudas de producto..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-full
                   bg-gradient-to-r from-sky-400 to-emerald-400
                   px-6 py-2.5 text-sm font-semibold text-slate-950
                   shadow-lg shadow-sky-500/30 hover:shadow-sky-400/40
                   hover:scale-[1.02] transition-transform"
          >
            Enviar briefing para Bruno
            <span class="text-base">↗</span>
          </button>

          <p class="text-[11px] text-slate-500 pt-1">
            Más adelante conectamos este formulario al webhook de n8n que definas.
          </p>
        </form>
      </section>
    </main>
  </div>
`;
