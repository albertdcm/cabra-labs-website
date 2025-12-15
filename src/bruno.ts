import "./style.css";
import BrunoInternoImg from "./assets/agents/Bruno Interno.png";
import CabraLogo from "./assets/agents/Cabra Labs Logo.png";
import TikTokIcon from "./assets/agents/tik-tok.svg";
import InstagramIcon from "./assets/agents/instagram.svg";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontró el elemento #app");
}

app.innerHTML = `
  <div class="theme-bruno min-h-screen bg-slate-950 text-slate-50">
    <!-- ✅ AJUSTE: contorno azul (hover/click/focus) SOLO para contenedores (.card-soft) en Bruno -->
    <style>
      .theme-bruno .card-soft {
        transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease, background-color 200ms ease;
      }

      .theme-bruno .card-soft:hover,
      .theme-bruno .card-soft:active,
      .theme-bruno .card-soft:focus-within {
        border-color: rgba(56, 189, 248, 0.55) !important; /* sky-400 */
        box-shadow:
          0 0 0 1px rgba(56, 189, 248, 0.22),
          0 0 34px -12px rgba(56, 189, 248, 0.55) !important;
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
          class="text-xs sm:text-sm text-slate-300 hover:text-sky-300 transition-colors"
        >
          ← Volver a la página principal
        </a>
      </nav>
    </header>

    <!-- CONTENIDO -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-10 md:py-14 space-y-12">

      <!-- HERO BRUNO -->
      <section class="grid gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-center">
        <!-- Texto -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-sky-200">
            <span class="text-sm">⚡</span>
            <span>Bruno · Soporte & Bots</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
            Atención 24/7 con <span class="text-sky-300">Bruno</span>
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed">
            Bruno responde por ti en WhatsApp, Instagram y web: resuelve dudas, califica prospectos,
            gestiona reclamos y, cuando haga falta, <span class="text-slate-100">te pasa la conversación con todo el contexto</span>
            para que tú solo cierres o resuelvas.
          </p>

          <!-- Plan / Qué incluye -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-sky-400/25 bg-slate-900/70 p-5 card-soft">
              <p class="text-xs uppercase tracking-[0.22em] text-sky-200/90">Qué incluye</p>
              <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
                <li>• Diseño del bot por objetivos (ventas / soporte / mixto).</li>
                <li>• Base de respuestas (FAQ) + tono de marca.</li>
                <li>• Flujos de atención: preguntas frecuentes, precios, horarios, envíos, etc.</li>
                <li>• Calificación de leads (preguntas clave + tags).</li>
                <li>• Escalamiento a humano (cuando el caso lo amerita).</li>
                <li>• Reporte mensual con conversaciones, motivos y oportunidades.</li>
              </ul>
            </div>

            <div class="rounded-3xl border border-sky-400/25 bg-slate-900/70 p-5 card-soft">
              <p class="text-xs uppercase tracking-[0.22em] text-sky-200/90">Automatizaciones incluidas</p>
              <div class="mt-3 space-y-3 text-sm text-slate-200/90">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p class="font-semibold text-slate-100">Base</p>
                  <p class="text-xs text-slate-300 mt-1">
                    <span class="text-sky-200 font-semibold">Hasta 2</span> flujos (ventas/soporte) + <span class="text-sky-200 font-semibold">1</span> canal.
                  </p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p class="font-semibold text-slate-100">Crecimiento</p>
                  <p class="text-xs text-slate-300 mt-1">
                    <span class="text-sky-200 font-semibold">Hasta 5</span> flujos + <span class="text-sky-200 font-semibold">2</span> canales + handoff a humano.
                  </p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p class="font-semibold text-slate-100">Escala</p>
                  <p class="text-xs text-slate-300 mt-1">
                    <span class="text-sky-200 font-semibold">Hasta 8</span> flujos + <span class="text-sky-200 font-semibold">3</span> canales + etiquetas + reportes avanzados.
                  </p>
                </div>

                <p class="text-[11px] text-slate-400">
                  “Flujo” = una ruta completa (ej: consulta → preguntas → respuesta → captura de datos → cierre o soporte).
                </p>
              </div>
            </div>
          </div>

          <!-- Precio -->
          <div class="rounded-3xl border border-sky-400/25 bg-gradient-to-r from-sky-500/10 via-slate-900/60 to-emerald-500/10 p-5 card-soft">
            <p class="text-sm text-slate-200/90">
              <span class="text-sky-200 font-semibold">Desde $250/mes</span> · setup según canales, cantidad de flujos y nivel de personalización.
            </p>
            <p class="text-[11px] text-slate-400 mt-1">
              Podemos conectarlo con CRM, Google Sheets, pasarelas y herramientas que ya usas.
            </p>
          </div>
        </div>

        <!-- Imagen Bruno -->
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-6 rounded-3xl bg-sky-500/15 blur-3xl opacity-80"></div>
          <div class="relative rounded-3xl border border-sky-400/40 bg-slate-900/80 px-4 py-6 md:px-6 md:py-7 card-soft">
            <img
              src="${BrunoInternoImg}"
              alt="Bruno, agente GOAT de soporte y bots"
              class="w-52 md:w-64 lg:w-72 max-w-full mx-auto"
              loading="lazy"
              decoding="async"
            />
            <p class="mt-4 text-[11px] text-center text-sky-100/80">
              Bruno atiende, filtra y escala: para que tu equipo no pierda tiempo en lo repetitivo.
            </p>
          </div>
        </div>
      </section>

      <!-- FORMULARIO BRUNO -->
      <section class="grid gap-8 md:grid-cols-[minmax(0,1.05fr),minmax(0,1.15fr)] items-start">
        <!-- Copy formulario -->
        <div class="space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">
            Briefing para activar a Bruno
          </h2>
          <p class="text-sm text-slate-300 leading-relaxed">
            Con esta información definimos el bot, los flujos de atención, el handoff a humano
            y el nivel de automatización ideal (Base / Crecimiento / Escala).
          </p>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 card-soft">
            <p class="text-xs uppercase tracking-[0.22em] text-sky-200/90">Lo que armamos con esto</p>
            <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
              <li>• Flujos prioritarios (ventas, soporte, reclamos, seguimiento).</li>
              <li>• Preguntas clave para calificar leads.</li>
              <li>• Reglas de escalamiento a humano.</li>
              <li>• Integraciones necesarias (CRM, Sheets, pasarela, etc.).</li>
            </ul>
          </div>
        </div>

        <!-- Form -->
        <form
          class="space-y-4 rounded-3xl border border-sky-400/30 bg-slate-900/80 p-5 md:p-6 shadow-xl shadow-sky-500/15"
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="¿Con quién hablará Bruno?"
                required
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Correo electrónico</label>
              <input
                type="email"
                name="email"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
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
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="+58..."
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Sitio web o Instagram</label>
              <input
                type="text"
                name="url"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="tu web o @instagram"
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">¿Qué atiende Bruno?</label>
            <textarea
              name="casos"
              rows="3"
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              placeholder="Ej: dudas de precios, envíos, horarios, disponibilidad, reclamos, devoluciones..."
              required
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Canales donde lo quieres activo</label>
            <div class="grid gap-2 sm:grid-cols-2">
              ${[
                "WhatsApp Business",
                "Instagram DM",
                "Web (chat)",
                "Facebook Messenger",
                "Email (respuestas sugeridas)"
              ]
                .map(
                  (ch) => `
                    <label class="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/90 hover:bg-white/10 transition-colors">
                      <input type="checkbox" name="canales" value="${ch}" class="accent-sky-400" />
                      ${ch}
                    </label>
                  `
                )
                .join("")}
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Horario de atención humana</label>
              <input
                type="text"
                name="horario"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="Ej: Lun–Vie 9am–6pm"
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Tiempo ideal de respuesta humana</label>
              <select
                name="sla"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              >
                <option value="">Selecciona uno</option>
                <option>En menos de 5 min</option>
                <option>En menos de 30 min</option>
                <option>En menos de 2 horas</option>
                <option>En el mismo día</option>
              </select>
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Escalamiento a humano</label>
            <textarea
              name="handoff"
              rows="3"
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              placeholder="¿Cuándo debe pasarte la conversación? Ej: pagos, reclamos complejos, negociación, casos VIP..."
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Integraciones deseadas</label>
            <div class="grid gap-2 sm:grid-cols-2">
              ${[
                "CRM (Kommo/HubSpot)",
                "Google Sheets",
                "Notificaciones por Email",
                "Slack/Telegram",
                "E-commerce (Shopify/Woo)",
                "Pasarela (Stripe/PayPal)"
              ]
                .map(
                  (tool) => `
                    <label class="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/90 hover:bg-white/10 transition-colors">
                      <input type="checkbox" name="integraciones" value="${tool}" class="accent-sky-400" />
                      ${tool}
                    </label>
                  `
                )
                .join("")}
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Plan sugerido</label>
            <div class="grid gap-2 sm:grid-cols-3">
              ${[
                { key: "Base", desc: "2 flujos · 1 canal" },
                { key: "Crecimiento", desc: "5 flujos · 2 canales · handoff" },
                { key: "Escala", desc: "8 flujos · 3 canales · reportes" }
              ]
                .map(
                  (p) => `
                    <label class="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200/90 hover:bg-white/10 transition-colors cursor-pointer">
                      <div class="flex items-start gap-2">
                        <input type="radio" name="plan" value="${p.key}" class="mt-0.5 accent-sky-400" />
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
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:shadow-sky-400/40 hover:scale-[1.02] transition-transform"
          >
            Enviar briefing para Bruno
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
              <li><a href="/gala.html" class="hover:text-emerald-200 transition-colors">Gala · Estrategia &amp; Funnels</a></li>
              <li><a href="/bruno.html" class="hover:text-emerald-200 transition-colors">Bruno · Soporte &amp; Bots</a></li>
              <li><a href="/nia.html" class="hover:text-emerald-200 transition-colors">Nia · CRM &amp; Seguimiento</a></li>
            </ul>
          </div>

          <!-- SOPORTE -->
          <div>
            <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Soporte</p>
            <ul class="space-y-1 text-xs text-slate-400">
              <li>
                <a class="hover:text-emerald-200 transition-colors" href="https://wa.me/584120599367" target="_blank" rel="noopener">
                  Contacto
                </a>
              </li>
              <li><a class="hover:text-emerald-200 transition-colors" href="/faq.html">Preguntas frecuentes</a></li>
              <li><a class="hover:text-emerald-200 transition-colors" href="/#agentes">Planes y precios</a></li>
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
    // ✅ AJUSTE (ÚNICO): enviar el payload dentro de { body: ... } para que tu nodo "Normalize + Metadata"
    // lo lea como $json.body (y también siga siendo compatible con tu soporte de { body: ... }).
    body: JSON.stringify({ body: payload }),
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

const brunoForm = app.querySelector("form") as HTMLFormElement | null;

if (brunoForm) {
  brunoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const getValue = (name: string) =>
      (brunoForm.querySelector(
        `[name="${name}"]`
      ) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)?.value?.trim?.() ?? "";

    const canales = Array.from(
      brunoForm.querySelectorAll<HTMLInputElement>('input[name="canales"]:checked')
    ).map((i) => i.value);

    const integraciones = Array.from(
      brunoForm.querySelectorAll<HTMLInputElement>('input[name="integraciones"]:checked')
    ).map((i) => i.value);

    const plan =
      (brunoForm.querySelector('input[name="plan"]:checked') as HTMLInputElement | null)?.value ?? "";

    // ✅ Payload alineado con tu workflow de n8n (body.nombre/body.email + normalize)
    const payload = {
      agent: "Bruno",
      nombre: getValue("nombre"),
      email: getValue("email"),
      whatsapp: getValue("whatsapp"),
      url: getValue("url"),

      casos: getValue("casos"),
      canales,
      horario: getValue("horario"),
      sla: getValue("sla"),
      handoff: getValue("handoff"),
      integraciones,
      plan,

      source_url: window.location.href,
      utm: Object.fromEntries(new URLSearchParams(window.location.search)),
    };

    const submitBtn = brunoForm.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    const originalText = submitBtn?.textContent ?? "";

    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando…";
      }

      const data = await sendLead(payload);
      alert(data?.message || "✅ Recibimos tu información. Te contactaremos pronto.");
      brunoForm.reset();
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
