import "./style.css";
import NiaInternoImg from "./assets/agents/Nia Interno.png";

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
            class="inline-flex h-9 w-9 rounded-2xl bg-purple-500/10 border border-purple-400/40 items-center justify-center text-xl group-hover:scale-105 transition-transform"
          >
            🐐
          </span>
          <span class="font-semibold tracking-tight text-slate-100 text-base">
            Cabra Labs
          </span>
        </a>
        <a
          href="/"
          class="text-xs sm:text-sm text-slate-300 hover:text-purple-300 transition-colors"
        >
          ← Volver a la página principal
        </a>
      </nav>
    </header>

    <!-- CONTENIDO -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-10 md:py-14 space-y-12">
      <!-- HERO NIA -->
      <section class="grid gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-center fade-in-up">
        <!-- Texto -->
        <div class="space-y-5">
          <div class="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/15 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-purple-100">
            <span class="text-sm">📊</span>
            <span>Nia · CRM &amp; Seguimiento</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
            Ordena tu equipo comercial con <span class="text-gradient-emerald">Nia</span>
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed">
            Nia organiza tu equipo comercial. Hace seguimiento de tus prospectos, recuerda tareas, 
            envía mensajes automáticos y te muestra cuánto puedes vender este mes.
          </p>

          <div class="grid gap-3 text-xs md:text-sm text-slate-200/90">
            <p>Trabaja sobre tu CRM actual o te ayudamos a montar uno:</p>
            <ul class="list-disc list-inside space-y-1">
              <li>Diseño de pipeline comercial y etapas.</li>
              <li>Secuencias de seguimiento y reactivación de leads.</li>
              <li>Alertas de oportunidades calientes y deals en riesgo.</li>
            </ul>
          </div>

          <p class="text-xs text-purple-200/90">
            Desde $300/mes · ideal para equipos comerciales que quieren previsibilidad.
          </p>
        </div>

        <!-- Imagen Nia -->
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-6 rounded-3xl bg-purple-500/18 blur-3xl opacity-80"></div>
          <div
            class="relative rounded-3xl border border-purple-400/60 bg-slate-900/80
                   px-4 py-6 md:px-6 md:py-7 card-soft
                   hover:border-purple-400 hover:shadow-purple-500/40 transition-all"
          >
            <img
              src="${NiaInternoImg}"
              alt="Nia, agente GOAT de CRM y seguimiento"
              class="w-52 md:w-64 lg:w-72 max-w-full mx-auto float-soft"
            />
            <p class="mt-4 text-[11px] text-center text-purple-100/85">
              Nia mantiene el pipeline vivo: recuerda llamadas, envía toques automatizados 
              y te muestra dónde estás perdiendo oportunidades.
            </p>
          </div>
        </div>
      </section>

      <!-- FORMULARIO NIA -->
      <section class="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1.1fr)] items-start fade-in-up">
        <!-- Copy formulario -->
        <div class="space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">
            Configura tu tablero comercial con Nia
          </h2>
          <p class="text-sm text-slate-300 leading-relaxed">
            Este formulario nos ayuda a entender cómo vendes hoy y qué deberíamos medir 
            para que Nia te dé claridad sobre metas, forecast y seguimiento.
          </p>
          <ul class="text-sm text-slate-300/90 space-y-1.5">
            <li>• Número de vendedores y estructura del equipo.</li>
            <li>• CRM actual (si tienes) y herramientas de contacto.</li>
            <li>• Etapas clave del pipeline y tiempos promedio.</li>
            <li>• Métricas que quieres ver semanal y mensualmente.</li>
          </ul>
        </div>

        <!-- Form -->
        <form
          class="space-y-4 rounded-3xl border border-purple-400/30 bg-slate-900/80 p-5 md:p-6 shadow-xl shadow-purple-500/25"
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Correo</label>
              <input
                type="email"
                name="email"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                placeholder="para compartir el tablero y métricas"
                required
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Tamaño y tipo de equipo comercial</label>
            <textarea
              name="equipo"
              rows={3}
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              placeholder="Ej: 3 vendedores internos, 2 externos, 1 SDR..."
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">CRM y herramientas actuales</label>
            <textarea
              name="crm"
              rows={3}
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              placeholder="Ej: Kommo, HubSpot, Excel, WhatsApp, llamadas, email..."
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Métricas que quieres vigilar</label>
            <textarea
              name="metricas"
              rows={3}
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              placeholder="Ej: leads por semana, tasa de cierre, MRR nuevo, oportunidades ganadas..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-full
                   bg-gradient-to-r from-sky-400 to-emerald-400
                   px-6 py-2.5 text-sm font-semibold text-slate-950
                   shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40
                   hover:scale-[1.02] transition-transform"
          >
            Enviar briefing para Nia
            <span class="text-base">↗</span>
          </button>

          <p class="text-[11px] text-slate-500 pt-1">
            Luego conectamos este formulario con un flujo en n8n para asignar tareas y deals automáticamente.
          </p>
        </form>
      </section>
    </main>
  </div>
`;
