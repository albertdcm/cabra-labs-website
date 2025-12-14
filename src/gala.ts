import "./style.css";
import GalaInternoImg from "./assets/agents/Gala Interno.png";
import CabraLogo from "./assets/agents/Cabra Labs Logo.png";
import TikTokIcon from "./assets/agents/tik-tok.svg";
import InstagramIcon from "./assets/agents/instagram.svg";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontró el elemento #app");
}

app.innerHTML = `
  <div class="min-h-screen bg-slate-950 text-slate-50">
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
          class="text-xs sm:text-sm text-slate-300 hover:text-emerald-300 transition-colors"
        >
          ← Volver a la página principal
        </a>
      </nav>
    </header>

    <!-- CONTENIDO -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-10 md:py-14 space-y-12">

      <!-- HERO GALA -->
      <section class="grid gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-center">
        <!-- Texto -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-200">
            <span class="text-sm">⚡</span>
            <span>Gala · Estrategia & Funnels</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
            Diseña tu funnel con <span class="text-gradient-emerald">Gala</span>
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed">
            Gala ordena tu negocio para que vendas más. Diseñamos el recorrido completo del cliente
            (desde el primer contacto hasta la recompra), armamos la arquitectura del embudo y
            automatizamos los pasos clave para que no se te escape ningún lead.
          </p>

          <!-- Plan / Qué incluye -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-emerald-400/25 bg-slate-900/70 p-5 card-soft">
              <p class="text-xs uppercase tracking-[0.22em] text-emerald-200/90">Qué incluye</p>
              <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
                <li>• Diagnóstico + mapa del funnel (pasos y objeciones).</li>
                <li>• Copy y guiones de mensajes por etapa (DM/WhatsApp/email).</li>
                <li>• Diseño de landing / estructura de oferta (si aplica).</li>
                <li>• Tracking: eventos, conversiones y métricas clave.</li>
                <li>• Iteración semanal (mejoras basadas en datos).</li>
              </ul>
            </div>

            <div class="rounded-3xl border border-emerald-400/25 bg-slate-900/70 p-5 card-soft">
              <p class="text-xs uppercase tracking-[0.22em] text-emerald-200/90">Automatizaciones incluidas</p>
              <div class="mt-3 space-y-3 text-sm text-slate-200/90">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p class="font-semibold text-slate-100">Base</p>
                  <p class="text-xs text-slate-300 mt-1">
                    <span class="text-emerald-200 font-semibold">Hasta 3</span> automatizaciones + <span class="text-emerald-200 font-semibold">1</span> funnel principal.
                  </p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p class="font-semibold text-slate-100">Crecimiento</p>
                  <p class="text-xs text-slate-300 mt-1">
                    <span class="text-emerald-200 font-semibold">Hasta 6</span> automatizaciones + <span class="text-emerald-200 font-semibold">2</span> funnels + segmentación básica.
                  </p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p class="font-semibold text-slate-100">Escala</p>
                  <p class="text-xs text-slate-300 mt-1">
                    <span class="text-emerald-200 font-semibold">Hasta 10</span> automatizaciones + <span class="text-emerald-200 font-semibold">3</span> funnels + reportes avanzados.
                  </p>
                </div>

                <p class="text-[11px] text-slate-400">
                  “Automatización” = un flujo completo (ej: lead → calificación → recordatorios → cierre).
                </p>
              </div>
            </div>
          </div>

          <!-- Precio -->
          <div class="rounded-3xl border border-emerald-400/25 bg-gradient-to-r from-emerald-500/10 via-slate-900/60 to-sky-500/10 p-5 card-soft">
            <p class="text-sm text-slate-200/90">
              <span class="text-emerald-200 font-semibold">Setup desde $450</span> · mensualidad según complejidad,
              cantidad de funnels y automatizaciones.
            </p>
            <p class="text-[11px] text-slate-400 mt-1">
              Si ya tienes herramientas (CRM, WhatsApp, email), nos integramos para aprovechar lo que tienes.
            </p>
          </div>
        </div>

        <!-- Imagen Gala -->
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-6 rounded-3xl bg-emerald-500/15 blur-3xl opacity-80"></div>
          <div class="relative rounded-3xl border border-emerald-400/40 bg-slate-900/80 px-4 py-6 md:px-6 md:py-7 card-soft">
            <img
              src="${GalaInternoImg}"
              alt="Gala, agente GOAT de estrategia y funnels"
              class="w-52 md:w-64 lg:w-72 max-w-full mx-auto"
              loading="lazy"
              decoding="async"
            />
            <p class="mt-4 text-[11px] text-center text-emerald-100/80">
              Gala analiza campañas, embudos y experiencias para encontrar las rutas
              más rentables de adquisición y conversión.
            </p>
          </div>
        </div>
      </section>

      <!-- FORMULARIO GALA -->
      <section class="grid gap-8 md:grid-cols-[minmax(0,1.05fr),minmax(0,1.15fr)] items-start">
        <!-- Copy formulario -->
        <div class="space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">
            Briefing para diseñar tu funnel con Gala
          </h2>
          <p class="text-sm text-slate-300 leading-relaxed">
            Con esta info preparamos tu diagnóstico, definimos el funnel y estimamos cuántas automatizaciones
            necesitas para cerrar más (sin estar pegado al teléfono).
          </p>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 card-soft">
            <p class="text-xs uppercase tracking-[0.22em] text-emerald-200/90">Lo que armamos con esto</p>
            <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
              <li>• Funnel recomendado (1–3 etapas principales).</li>
              <li>• Automatizaciones necesarias (3 / 6 / 10 según tu caso).</li>
              <li>• Recomendación de herramientas e integraciones.</li>
              <li>• Próximos pasos (implementación y timing).</li>
            </ul>
          </div>
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
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="+58..."
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Sitio web o Instagram</label>
              <input
                type="text"
                name="url"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="tu web o @instagram"
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">¿Qué vendes y a quién?</label>
            <textarea
              name="oferta"
              rows="3"
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              placeholder="Producto/servicio, cliente ideal, qué problema resuelves"
              required
            ></textarea>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Ticket promedio</label>
              <input
                type="text"
                name="ticket"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="Ej: $50 / $250 / $1.200"
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs text-slate-300">Objetivo (próx. 3–6 meses)</label>
              <select
                name="objetivo"
                class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              >
                <option value="">Selecciona uno</option>
                <option>Conseguir más leads</option>
                <option>Convertir más (mejor cierre)</option>
                <option>Subir ticket / upsells</option>
                <option>Reactivar base fría</option>
                <option>Automatizar seguimiento</option>
              </select>
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">¿Cómo llegan tus clientes hoy?</label>
            <textarea
              name="canales"
              rows="3"
              class="w-full rounded-xl bg-slate-950/70 border border-slate-600/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              placeholder="Ej: Instagram orgánico, Meta Ads, referidos, web, WhatsApp..."
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Herramientas actuales</label>
            <div class="grid gap-2 sm:grid-cols-2">
              ${[
                "WhatsApp Business",
                "Instagram DM",
                "Meta Ads",
                "Email (Mailchimp/Klaviyo)",
                "CRM (Kommo/HubSpot)",
                "Shopify/WooCommerce",
                "Pasarela (Stripe/PayPal)",
                "Google Sheets"
              ]
                .map(
                  (tool) => `
                    <label class="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/90 hover:bg-white/10 transition-colors">
                      <input type="checkbox" name="herramientas" value="${tool}" class="accent-emerald-400" />
                      ${tool}
                    </label>
                  `
                )
                .join("")}
            </div>
            <p class="text-[11px] text-slate-500">
              Si no está tu herramienta, no importa: igual lo levantamos en la llamada.
            </p>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Plan sugerido</label>
            <div class="grid gap-2 sm:grid-cols-3">
              ${[
                { key: "Base", desc: "1 funnel · hasta 3 automatizaciones" },
                { key: "Crecimiento", desc: "2 funnels · hasta 6 automatizaciones" },
                { key: "Escala", desc: "3 funnels · hasta 10 automatizaciones" }
              ]
                .map(
                  (p) => `
                    <label class="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200/90 hover:bg-white/10 transition-colors cursor-pointer">
                      <div class="flex items-start gap-2">
                        <input type="radio" name="plan" value="${p.key}" class="mt-0.5 accent-emerald-400" />
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
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:scale-[1.02] transition-transform"
          >
            Enviar briefing para Gala
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

/* ================================
   ✅ CONEXIÓN CON n8n (solo esto)
================================== */

// ✅ PRODUCCIÓN (Workflow: Cabra Labs — Leads (All Agents))
const N8N_WEBHOOK_URL = "https://cabralab.app.n8n.cloud/webhook/cabra-leads";

// ✅ TEST (solo cuando uses “Listen for test event” en el nodo Webhook)
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

const galaForm = app.querySelector("form") as HTMLFormElement | null;

if (galaForm) {
  galaForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const getValue = (name: string) =>
      (galaForm.querySelector(
        `[name="${name}"]`
      ) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)?.value?.trim?.() ?? "";

    const herramientas = Array.from(
      galaForm.querySelectorAll<HTMLInputElement>('input[name="herramientas"]:checked')
    ).map((i) => i.value);

    const plan = (galaForm.querySelector('input[name="plan"]:checked') as HTMLInputElement | null)?.value ?? "";

    const payload = {
      agent: "Gala",
      name: getValue("nombre"),
      email: getValue("email"),
      phone: getValue("whatsapp"),
      company: "",
      website: getValue("url"),
      need: [
        `Oferta: ${getValue("oferta")}`,
        getValue("canales") ? `Canales: ${getValue("canales")}` : "",
        getValue("objetivo") ? `Objetivo: ${getValue("objetivo")}` : "",
        getValue("ticket") ? `Ticket: ${getValue("ticket")}` : "",
        herramientas.length ? `Herramientas: ${herramientas.join(", ")}` : "",
        plan ? `Plan sugerido: ${plan}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      budget: getValue("ticket"),
      timeline: "",
      source_url: window.location.href,
      utm: Object.fromEntries(new URLSearchParams(window.location.search)),
    };

    const submitBtn = galaForm.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    const originalText = submitBtn?.textContent ?? "";

    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando…";
      }

      const data = await sendLead(payload);
      alert(data?.message || "✅ Recibimos tu información. Te contactaremos pronto.");
      galaForm.reset();
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
