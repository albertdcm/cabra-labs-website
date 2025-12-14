import "./style.css";
import NiaInternoImg from "./assets/agents/Nia Interno.png";
import CabraLogo from "./assets/agents/Cabra Labs Logo.png";
import TikTokIcon from "./assets/agents/tik-tok.svg";
import InstagramIcon from "./assets/agents/instagram.svg";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontró el elemento #app");
}

app.innerHTML = `
  <div class="nia-page min-h-screen bg-slate-950 text-slate-50">
    <!-- FIX HOVER VERDE -> MORADO (solo para esta página) -->
    <style>
      .nia-page .card-soft:hover,
      .nia-page .card-soft:focus-within {
        border-color: rgba(192, 132, 252, 0.55) !important; /* purple-300 */
        box-shadow:
          0 0 0 2px rgba(192, 132, 252, 0.22),
          0 0 30px -10px rgba(168, 85, 247, 0.45) !important; /* purple glow */
      }
    </style>

    <!-- NAVBAR SIMPLE -->
    <header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav class="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">

        <!-- LOGO (PNG, VITE OK) -->
        <a href="/" class="flex items-center group">
          <img
            src="${CabraLogo}"
            alt="Cabra Labs"
            class="h-10 w-auto group-hover:scale-105 transition-transform duration-200"
            loading="eager"
            decoding="async"
          />
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
      <section class="grid gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-center">
        <!-- Texto -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-purple-200">
            <span class="text-sm">⚡</span>
            <span>Nia · CRM & Seguimiento</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
            Seguimiento que cierra con <span class="text-purple-300">Nia</span>
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed">
            Nia organiza tu equipo comercial: estructura tu pipeline, recuerda tareas,
            automatiza mensajes de seguimiento y te muestra qué oportunidades están
            por cerrarse para que no se te enfríen los prospectos.
          </p>

          <!-- Plan / Qué incluye -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-purple-400/25 bg-slate-900/70 p-5 card-soft">
              <p class="text-xs uppercase tracking-[0.22em] text-purple-200/90">Qué incluye</p>
              <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
                <li>• Configuración de CRM / pipeline (etapas, estados y reglas).</li>
                <li>• Automatizaciones de seguimiento (no-respondió, recontacto, post-llamada).</li>
                <li>• Recordatorios y tareas para el equipo (SLA, próximos pasos).</li>
                <li>• Etiquetas y segmentación (frío / tibio / caliente / VIP).</li>
                <li>• Dashboards básicos de oportunidades y conversiones.</li>
                <li>• Optimización continua según resultados.</li>
              </ul>
            </div>

            <div class="rounded-3xl border border-purple-400/25 bg-slate-900/70 p-5 card-soft">
              <p class="text-xs uppercase tracking-[0.22em] text-purple-200/90">Automatizaciones incluidas</p>
              <div class="mt-3 space-y-3 text-sm text-slate-200/90">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p class="font-semibold text-slate-100">Base</p>
                  <p class="text-xs text-slate-300 mt-1">
                    <span class="text-purple-200 font-semibold">Hasta 3</span> automatizaciones + <span class="text-purple-200 font-semibold">1</span> pipeline.
                  </p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p class="font-semibold text-slate-100">Crecimiento</p>
                  <p class="text-xs text-slate-300 mt-1">
                    <span class="text-purple-200 font-semibold">Hasta 6</span> automatizaciones + <span class="text-purple-200 font-semibold">2</span> pipelines + segmentación.
                  </p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p class="font-semibold text-slate-100">Escala</p>
                  <p class="text-xs text-slate-300 mt-1">
                    <span class="text-purple-200 font-semibold">Hasta 10</span> automatizaciones + <span class="text-purple-200 font-semibold">3</span> pipelines + dashboards avanzados.
                  </p>
                </div>

                <p class="text-[11px] text-slate-400">
                  “Automatización” = una regla/flujo completo (ej: lead → tarea → mensaje → cambio de etapa → alerta).
                </p>
              </div>
            </div>
          </div>

          <!-- Precio -->
          <div class="rounded-3xl border border-purple-400/25 bg-gradient-to-r from-purple-500/10 via-slate-900/60 to-sky-500/10 p-5 card-soft">
            <p class="text-sm text-slate-200/90">
              <span class="text-purple-200 font-semibold">Desde $300/mes</span> · setup según CRM, cantidad de pipelines y automatizaciones.
            </p>
            <p class="text-[11px] text-slate-400 mt-1">
              Si ya usas Kommo/HubSpot/Odoo/Sheets, armamos Nia encima para aprovechar tu base.
            </p>
          </div>
        </div>

        <!-- Imagen Nia -->
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-6 rounded-3xl bg-purple-500/15 blur-3xl opacity-80"></div>
          <div class="relative rounded-3xl border border-purple-400/40 bg-slate-900/80 px-4 py-6 md:px-6 md:py-7 card-soft">
            <img
              src="${NiaInternoImg}"
              alt="Nia, agente GOAT de CRM y seguimiento"
              class="w-52 md:w-64 lg:w-72 max-w-full mx-auto"
              loading="lazy"
              decoding="async"
            />
            <p class="mt-4 text-[11px] text-center text-purple-100/80">
              Nia ordena tu pipeline y hace seguimiento automático para que cierres sin perseguir.
            </p>
          </div>
        </div>
      </section>

      <!-- FORMULARIO NIA -->
      <section class="grid gap-8 md:grid-cols-[minmax(0,1.05fr),minmax(0,1.15fr)] items-start">
        <!-- Copy formulario -->
        <div class="space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">
            Briefing para activar a Nia
          </h2>
          <p class="text-sm text-slate-300 leading-relaxed">
            Con esta información definimos tu pipeline, las reglas de seguimiento, tareas del equipo,
            y el número de automatizaciones que necesitas para cerrar más rápido.
          </p>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 card-soft">
            <p class="text-xs uppercase tracking-[0.22em] text-purple-200/90">Lo que armamos con esto</p>
            <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
              <li>• Pipeline recomendado (etapas y criterios de avance).</li>
              <li>• Automatizaciones (3 / 6 / 10) según tu operación.</li>
              <li>• Tareas y recordatorios (SLA de respuesta).</li>
              <li>• Reporte/Tablero para ver oportunidades y forecast.</li>
            </ul>
          </div>
        </div>

        <!-- Form -->
        <form
          class="space-y-4 rounded-3xl border border-purple-400/30 bg-slate-900/80 p-5 md:p-6 shadow-xl shadow-purple-500/15"
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                placeholder="¿Con quién hablará Nia?"
                required
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Correo electrónico</label>
              <input
                type="email"
                name="email"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                placeholder="para enviarte el diagnóstico"
                required
              />
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">WhatsApp (opcional)</label>
              <input
                type="tel"
                name="whatsapp"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                placeholder="+58..."
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Sitio web o Instagram</label>
              <input
                type="text"
                name="url"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                placeholder="tu web o @instagram"
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">¿Cómo vendes hoy?</label>
            <textarea
              name="proceso"
              rows="3"
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              placeholder="Ej: llegan leads → respondo → cotizo → llamada → cierre → postventa"
              required
            ></textarea>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">CRM actual</label>
              <select
                name="crm"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              >
                <option value="">Selecciona uno</option>
                <option>Kommo</option>
                <option>HubSpot</option>
                <option>Odoo</option>
                <option>Pipedrive</option>
                <option>Google Sheets</option>
                <option>No tengo CRM</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Tamaño del equipo de ventas</label>
              <select
                name="equipo"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              >
                <option value="">Selecciona uno</option>
                <option>Solo yo</option>
                <option>2–3 personas</option>
                <option>4–7 personas</option>
                <option>8+ personas</option>
              </select>
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Etapas que quieres en tu pipeline</label>
            <textarea
              name="etapas"
              rows="3"
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              placeholder="Ej: Nuevo → Calificado → Cotizado → Llamada → Negociación → Cerrado/Perdido"
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Seguimientos que quieres automatizar</label>
            <div class="grid gap-2 sm:grid-cols-2">
              ${[
                "No respondió (1h / 24h / 72h)",
                "Post-cotización",
                "Post-llamada",
                "Reactivación de leads fríos",
                "Post-venta (recompra)",
                "Recordatorios de pago"
              ]
                .map(
                  (opt) => `
                    <label class="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/90 hover:bg-white/10 transition-colors">
                      <input type="checkbox" name="seguimientos" value="${opt}" class="accent-purple-400" />
                      ${opt}
                    </label>
                  `
                )
                .join("")}
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Tiempo ideal de respuesta al lead</label>
              <select
                name="sla"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              >
                <option value="">Selecciona uno</option>
                <option>En menos de 5 min</option>
                <option>En menos de 30 min</option>
                <option>En menos de 2 horas</option>
                <option>En el mismo día</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Objetivo (próx. 3–6 meses)</label>
              <select
                name="objetivo"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              >
                <option value="">Selecciona uno</option>
                <option>Subir tasa de cierre</option>
                <option>Mejorar velocidad de respuesta</option>
                <option>Ordenar pipeline</option>
                <option>Forecast / proyección mensual</option>
                <option>Reactivar leads fríos</option>
              </select>
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Plan sugerido</label>
            <div class="grid gap-2 sm:grid-cols-3">
              ${[
                { key: "Base", desc: "1 pipeline · hasta 3 automatizaciones" },
                { key: "Crecimiento", desc: "2 pipelines · hasta 6 automatizaciones" },
                { key: "Escala", desc: "3 pipelines · hasta 10 automatizaciones" }
              ]
                .map(
                  (p) => `
                    <label class="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200/90 hover:bg-white/10 transition-colors cursor-pointer">
                      <div class="flex items-start gap-2">
                        <input type="radio" name="plan" value="${p.key}" class="mt-0.5 accent-purple-400" />
                        <div>
                          <p class="font-semibold text-slate-100">${p.key}</p>
                          <p class="text-[11px] text-slate-400 mt-1">${p.desc}</p>
                        </div>
                      </div>
                    </label>
                  `
                )
                .join("")}
            </div>
          </div>

          <button
            type="submit"
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-400 to-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/40 hover:scale-[1.02] transition-transform"
          >
            Enviar briefing para Nia
            <span class="text-base">↗</span>
          </button>

          <p class="text-[11px] text-slate-500 pt-1">
            Luego conectamos este formulario a tu flujo en n8n (WhatsApp, email, CRM, etc.).
          </p>
        </form>
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
          aria-label="Instagram @cabra.labs"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0f2e2c] border border-emerald-400/40 shadow-[0_0_15px_-2px_rgba(16,185,129,0.25)] hover:scale-105 transition-transform duration-200"
        >
          <img src="${InstagramIcon}" alt="Instagram @cabra.labs" class="w-5 h-5" loading="lazy" decoding="async" />
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
          <a class="hover:text-emerald-200 transition-colors" href="/faq.html">
            Preguntas frecuentes
          </a>
        </li>

        <li>
          <a class="hover:text-emerald-200 transition-colors" href="/#agentes">
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

/* ================================
   ✅ CONEXIÓN CON n8n (solo esto)
================================== */

const N8N_WEBHOOK_URL = "https://cabralab.app.n8n.cloud/webhook/cabra-leads";
// Para pruebas con "Listen for test event", usa:
// const N8N_WEBHOOK_URL = "https://cabralab.app.n8n.cloud/webhook-test/cabra-leads";

const CABRA_TOKEN = "cabra_labs_goat_2025_secure";

async function sendLead(payload: any) {
  const res = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-cabra-token": CABRA_TOKEN,
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data: any = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }

  if (!res.ok) {
    throw new Error(data?.message || data?.raw || "Error enviando el formulario");
  }

  return data;
}

const niaForm = app.querySelector("form") as HTMLFormElement | null;

if (niaForm) {
  niaForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const getValue = (name: string) =>
      (niaForm.querySelector(
        `[name="${name}"]`
      ) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)?.value?.trim?.() ?? "";

    const seguimientos = Array.from(
      niaForm.querySelectorAll<HTMLInputElement>('input[name="seguimientos"]:checked')
    ).map((i) => i.value);

    const plan = (niaForm.querySelector('input[name="plan"]:checked') as HTMLInputElement | null)?.value ?? "";

    const payload = {
      agent: "Nia",

      // ✅ AJUSTE: n8n valida body.nombre (y body.email)
      nombre: getValue("nombre"),
      name: getValue("nombre"),

      email: getValue("email"),
      phone: getValue("whatsapp"),
      company: "", // (no existe campo empresa en este form)
      website: getValue("url"),
      need: [
        `Proceso: ${getValue("proceso")}`,
        getValue("crm") ? `CRM: ${getValue("crm")}` : "",
        getValue("equipo") ? `Equipo: ${getValue("equipo")}` : "",
        getValue("etapas") ? `Etapas: ${getValue("etapas")}` : "",
        seguimientos.length ? `Seguimientos: ${seguimientos.join(", ")}` : "",
        getValue("sla") ? `SLA respuesta: ${getValue("sla")}` : "",
        getValue("objetivo") ? `Objetivo: ${getValue("objetivo")}` : "",
        plan ? `Plan sugerido: ${plan}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      budget: "", // (no hay campo presupuesto en este form)
      timeline: "", // (no hay campo timeline en este form)
      source_url: window.location.href,
      utm: Object.fromEntries(new URLSearchParams(window.location.search)),
    };

    const submitBtn = niaForm.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    const originalText = submitBtn?.textContent ?? "";

    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando…";
      }

      const data = await sendLead(payload);
      alert(data?.message || "✅ Recibimos tu información. Te contactaremos pronto.");
      niaForm.reset();
    } catch (err) {
      console.error(err);
      alert("❌ No se pudo enviar. Intenta de nuevo.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
}
