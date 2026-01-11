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
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-8 md:py-10 space-y-10">

      <!-- ✅ HERO GALA (compacto + imagen integrada al banner como Bruno/Nia) -->
      <section class="grid gap-6 md:gap-8 md:grid-cols-[minmax(0,1.55fr),minmax(0,1fr)] items-center">
        <!-- Texto -->
        <div class="space-y-4 md:space-y-5">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-200">
            <span class="text-sm">⚡</span>
            <span>Gala · Captación y calificación</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
            Convierte clics y mensajes en <span class="text-gradient-emerald">leads listos para comprar</span>
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed">
            Gala diseña tu ruta de ventas con un funnel probado:
            <span class="text-slate-100">atrae</span>,
            <span class="text-slate-100">califica</span> y
            <span class="text-slate-100">mueve al lead</span> hacia la decisión con
            seguimiento inteligente para que no se te escape ninguna oportunidad.
          </p>
        </div>

        <!-- ✅ Imagen Gala (subida + alineada al centro del hero; se siente parte del banner) -->
        <div class="relative flex items-center justify-center md:justify-end">
          <div class="absolute -inset-8 rounded-3xl bg-emerald-500/15 blur-3xl opacity-80"></div>

          <div class="relative rounded-3xl border border-emerald-400/40 bg-slate-900/80 px-4 py-5 md:px-6 md:py-6 card-soft">
            <img
              src="${GalaInternoImg}"
              alt="Gala, agente GOAT de estrategia y funnels"
              class="w-44 md:w-56 lg:w-64 max-w-full mx-auto"
              loading="lazy"
              decoding="async"
            />
            <p class="mt-3 text-[11px] text-center text-emerald-100/80">
              Gala define qué decir, cuándo decirlo y cómo llevar al lead al siguiente paso.
            </p>
          </div>
        </div>
      </section>

      <!-- ✅ INFO EN 1 FILA (Qué incluye / Planes / Precio) | MÁS COMPACTO + MISMO ALTO -->
      <section id="planes" class="grid gap-4 md:gap-3 md:grid-cols-3 items-stretch scroll-mt-24">

        <!-- Qué incluye -->
        <div class="rounded-3xl border border-emerald-400/25 bg-slate-900/70 p-4 card-soft md:h-full flex flex-col">
          <p class="text-xs uppercase tracking-[0.22em] text-emerald-200/90">Qué incluye</p>

          <ul class="mt-2 space-y-2 text-sm text-slate-200/90">
            <li>• Diagnóstico + mapa del funnel (etapas, fricciones, objeciones).</li>
            <li>• Mensajes por etapa con tono de marca (WhatsApp/IG · Email opcional).</li>
            <li>• Calificación (frío / tibio / caliente) + segmentación base.</li>
            <li>• Tracking + métricas clave para mejorar con datos.</li>
            <li>• Iteración semanal: ajustes para convertir más.</li>
          </ul>

          <div class="mt-auto"></div>
        </div>

        <!-- Planes -->
        <div class="rounded-3xl border border-emerald-400/25 bg-slate-900/70 p-4 card-soft md:h-full flex flex-col">
          <p class="text-xs uppercase tracking-[0.22em] text-emerald-200/90">Planes (incluye automatizaciones)</p>

          <div class="mt-2 space-y-2 text-sm text-slate-200/90">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p class="font-semibold text-slate-100">Base</p>
              <p class="text-xs text-slate-300 mt-1">
                <span class="text-emerald-200 font-semibold">Hasta 3</span> automatizaciones +
                <span class="text-emerald-200 font-semibold">1</span> funnel principal
              </p>
            </div>

            <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p class="font-semibold text-slate-100">Crecimiento</p>
              <p class="text-xs text-slate-300 mt-1">
                <span class="text-emerald-200 font-semibold">Hasta 6</span> automatizaciones +
                <span class="text-emerald-200 font-semibold">2</span> funnels + segmentación
              </p>
            </div>

            <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p class="font-semibold text-slate-100">Escala</p>
              <p class="text-xs text-slate-300 mt-1">
                <span class="text-emerald-200 font-semibold">Hasta 10</span> automatizaciones +
                <span class="text-emerald-200 font-semibold">3</span> funnels + reportes
              </p>
            </div>
          </div>

          <p class="text-[11px] text-slate-400 mt-auto pt-2">
            “Automatización” = un flujo completo (lead → calificación → recordatorios → cierre).
          </p>
        </div>

        <!-- Precio / Integraciones -->
        <div class="rounded-3xl border border-emerald-400/25 bg-gradient-to-r from-emerald-500/10 via-slate-900/60 to-sky-500/10 p-4 card-soft md:h-full flex flex-col">
          <p class="text-xs uppercase tracking-[0.22em] text-emerald-200/90">Integraciones</p>

          <p class="mt-2 text-sm text-slate-200/90 leading-relaxed">
            Si ya usas CRM, WhatsApp, email o pasarela, nos integramos para aprovechar lo que ya funciona.
            Integraciones especiales se cotizan por proyecto.
          </p>

          <p class="text-[11px] text-slate-400 mt-auto pt-2 leading-relaxed">
            Coordinamos el alcance en una llamada corta y te enviamos propuesta con entregables y timing.
          </p>
        </div>

      </section>

      <!-- FORMULARIO GALA -->
      <section id="briefing" class="grid gap-8 md:grid-cols-[minmax(0,1.05fr),minmax(0,1.15fr)] items-start scroll-mt-24">
        <!-- Copy formulario -->
        <div class="space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">
            Briefing para activar a Gala
          </h2>

          <p class="text-sm text-slate-300 leading-relaxed">
            Con esta info preparamos tu diagnóstico y estimamos el plan ideal para captar y calificar mejor
            <span class="text-slate-100">desde el día 1</span>.
          </p>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 card-soft">
            <p class="text-xs uppercase tracking-[0.22em] text-emerald-200/90">Lo que te llevas</p>
            <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
              <li>• Funnel recomendado (1–3 etapas principales).</li>
              <li>• Plan sugerido (Base / Crecimiento / Escala).</li>
              <li>• Integraciones recomendadas (si aplica).</li>
              <li>• Próximos pasos + timing estimado.</li>
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
                "Google Sheets",
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
                { key: "Escala", desc: "3 funnels · hasta 10 automatizaciones" },
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
              <li><a href="/gala.html" class="hover:text-emerald-200 transition-colors">Gala · Atrae clientes listos para comprar</a></li>
              <li><a href="/bruno.html" class="hover:text-emerald-200 transition-colors">Bruno · Responde por ti 24/7</a></li>
              <li><a href="/nia.html" class="hover:text-emerald-200 transition-colors">Nia · Cierra ventas con seguimiento automático</a></li>
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
              <!-- ✅ Planes y precios removido -->
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

/* ======================================================
   ✅ MODAL (ÉXITO) + ALERTA BONITA (ERROR) — SOLO UI
====================================================== */

function mountLeadUI() {
  if (document.getElementById("cabra-lead-ui")) return;

  const ui = document.createElement("div");
  ui.id = "cabra-lead-ui";
  ui.innerHTML = `
    <style>
      .cabra-overlay{
        position:fixed; inset:0; z-index:9999;
        display:none; align-items:center; justify-content:center;
        padding:16px;
        background:rgba(2,6,23,.72);
        backdrop-filter: blur(10px);
      }
      .cabra-overlay.is-open{ display:flex; }
      .cabra-modal{
        width:min(560px, 100%);
        border-radius:28px;
        border:1px solid rgba(52,211,153,.30);
        background:linear-gradient(135deg, rgba(15,23,42,.96), rgba(2,6,23,.92));
        box-shadow: 0 30px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(52,211,153,.12), 0 0 60px rgba(16,185,129,.20);
        overflow:hidden;
        transform: translateY(8px) scale(.98);
        opacity:0;
        transition: transform 200ms ease, opacity 200ms ease;
      }
      .cabra-overlay.is-open .cabra-modal{ transform: translateY(0) scale(1); opacity:1; }
      .cabra-modal__top{
        padding:18px 18px 12px 18px;
        display:flex; align-items:flex-start; justify-content:space-between; gap:12px;
      }
      .cabra-pill{
        display:inline-flex; align-items:center; gap:8px;
        font-size:11px; letter-spacing:.22em; text-transform:uppercase;
        color:rgba(167,243,208,.95);
        border:1px solid rgba(52,211,153,.28);
        background:rgba(16,185,129,.10);
        padding:8px 12px;
        border-radius:999px;
      }
      .cabra-close{
        width:40px; height:40px;
        border-radius:999px;
        border:1px solid rgba(255,255,255,.10);
        background:rgba(255,255,255,.06);
        color:rgba(226,232,240,.95);
        display:inline-flex; align-items:center; justify-content:center;
        transition: transform 150ms ease, background-color 150ms ease, border-color 150ms ease;
        cursor:pointer;
      }
      .cabra-close:hover{ transform: scale(1.04); background:rgba(255,255,255,.10); border-color:rgba(255,255,255,.16); }
      .cabra-modal__body{ padding:0 18px 18px 18px; }
      .cabra-title{
        margin-top:6px;
        font-size:20px; font-weight:700;
        letter-spacing:-.01em;
        color:rgba(240,253,250,.98);
      }
      .cabra-text{
        margin-top:8px;
        font-size:13px;
        color:rgba(148,163,184,.95);
        line-height:1.6;
      }
      .cabra-actions{
        margin-top:16px;
        display:flex; gap:10px; flex-wrap:wrap;
      }
      .cabra-btn{
        border:none; cursor:pointer;
        border-radius:999px;
        padding:10px 14px;
        font-size:13px; font-weight:700;
        transition: transform 150ms ease, box-shadow 150ms ease, opacity 150ms ease;
      }
      .cabra-btn:active{ transform: scale(.98); }
      .cabra-btn--primary{
        color:#052e2b;
        background:linear-gradient(90deg, rgba(52,211,153,1), rgba(56,189,248,1));
        box-shadow: 0 18px 45px rgba(16,185,129,.25);
      }
      .cabra-btn--ghost{
        color:rgba(226,232,240,.95);
        background:rgba(255,255,255,.06);
        border:1px solid rgba(255,255,255,.10);
      }

      /* Toast */
      .cabra-toast-wrap{
        position:fixed; z-index:10000;
        left:16px; right:16px; bottom:16px;
        display:flex; justify-content:center;
        pointer-events:none;
      }
      .cabra-toast{
        pointer-events:auto;
        width:min(560px, 100%);
        border-radius:18px;
        border:1px solid rgba(248,113,113,.25);
        background:linear-gradient(135deg, rgba(15,23,42,.96), rgba(2,6,23,.92));
        box-shadow: 0 22px 70px rgba(0,0,0,.50), 0 0 40px rgba(239,68,68,.12);
        padding:12px 12px;
        display:flex; align-items:flex-start; gap:10px;
        transform: translateY(10px);
        opacity:0;
        transition: transform 180ms ease, opacity 180ms ease;
      }
      .cabra-toast.is-show{ transform: translateY(0); opacity:1; }
      .cabra-toast__icon{
        width:34px; height:34px;
        border-radius:14px;
        display:flex; align-items:center; justify-content:center;
        background:rgba(239,68,68,.12);
        border:1px solid rgba(248,113,113,.22);
        flex:0 0 auto;
      }
      .cabra-toast__title{
        font-size:13px; font-weight:800;
        color:rgba(254,226,226,.98);
        margin-top:1px;
      }
      .cabra-toast__msg{
        font-size:12px;
        color:rgba(148,163,184,.98);
        margin-top:2px;
        line-height:1.45;
      }
      .cabra-toast__close{
        margin-left:auto;
        width:36px; height:36px;
        border-radius:999px;
        border:1px solid rgba(255,255,255,.10);
        background:rgba(255,255,255,.06);
        color:rgba(226,232,240,.95);
        display:flex; align-items:center; justify-content:center;
        cursor:pointer;
        transition: transform 150ms ease, background-color 150ms ease;
      }
      .cabra-toast__close:hover{ transform: scale(1.04); background:rgba(255,255,255,.10); }
    </style>

    <!-- Modal éxito -->
    <div class="cabra-overlay" id="cabra-success-overlay" role="dialog" aria-modal="true" aria-labelledby="cabra-success-title">
      <div class="cabra-modal">
        <div class="cabra-modal__top">
          <div class="cabra-pill">✅ <span>Enviado</span></div>
          <button class="cabra-close" type="button" aria-label="Cerrar" data-cabra-close>✕</button>
        </div>
        <div class="cabra-modal__body">
          <div class="cabra-title" id="cabra-success-title">¡Briefing recibido! 🚀</div>
          <div class="cabra-text" id="cabra-success-msg">
            Recibimos tu información. Gala ya puede preparar el diagnóstico y el diseño del funnel.
          </div>
          <div class="cabra-actions">
            <button class="cabra-btn cabra-btn--primary" type="button" data-cabra-close>Perfecto</button>
            <a class="cabra-btn cabra-btn--ghost" href="https://wa.me/584120599367" target="_blank" rel="noopener" style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center;">
              Escribir por WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast error -->
    <div class="cabra-toast-wrap" aria-live="polite" aria-atomic="true">
      <div class="cabra-toast" id="cabra-error-toast" role="status">
        <div class="cabra-toast__icon">⚠️</div>
        <div style="min-width:0;">
          <div class="cabra-toast__title" id="cabra-error-title">No se pudo enviar</div>
          <div class="cabra-toast__msg" id="cabra-error-msg">
            Intenta de nuevo en unos segundos. Si el problema continúa, escríbenos por WhatsApp.
          </div>
        </div>
        <button class="cabra-toast__close" type="button" aria-label="Cerrar" data-cabra-toast-close>✕</button>
      </div>
    </div>
  `;
  document.body.appendChild(ui);

  const overlay = document.getElementById("cabra-success-overlay") as HTMLDivElement | null;
  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) closeSuccessModal();
  });

  document.querySelectorAll("[data-cabra-close]").forEach((btn) => {
    btn.addEventListener("click", () => closeSuccessModal());
  });

  document.querySelectorAll("[data-cabra-toast-close]").forEach((btn) => {
    btn.addEventListener("click", () => hideErrorToast());
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSuccessModal();
      hideErrorToast();
    }
  });
}

function openSuccessModal(message?: string) {
  mountLeadUI();
  const overlay = document.getElementById("cabra-success-overlay");
  const msg = document.getElementById("cabra-success-msg");
  if (msg && message) msg.textContent = message;
  overlay?.classList.add("is-open");
}

function closeSuccessModal() {
  const overlay = document.getElementById("cabra-success-overlay");
  overlay?.classList.remove("is-open");
}

let toastTimer: number | undefined;

function showErrorToast(message?: string) {
  mountLeadUI();
  const toast = document.getElementById("cabra-error-toast");
  const msg = document.getElementById("cabra-error-msg");
  if (msg && message) msg.textContent = message;

  toast?.classList.add("is-show");
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    hideErrorToast();
  }, 4500);
}

function hideErrorToast() {
  const toast = document.getElementById("cabra-error-toast");
  toast?.classList.remove("is-show");
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = undefined;
}

/* ================================
   ✅ CONEXIÓN CON n8n (CORS-SAFE)
================================== */

const N8N_WEBHOOK_URL = "https://cabralab.app.n8n.cloud/webhook/form-submission";
const CABRA_TOKEN = "cabra_labs_goat_2025_secure";

async function sendLead(payload: any) {
  const rawBody = JSON.stringify({
    token: CABRA_TOKEN,
    body: payload,
  });

  const res = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
    body: rawBody,
  });

  const text = await res.text();
  let data: any = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }

  if (!res.ok) throw new Error(data?.message || data?.raw || "Error enviando el formulario");
  return data;
}

const galaForm = app.querySelector("form") as HTMLFormElement | null;

if (galaForm) {
  galaForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const getValue = (name: string) =>
      (
        galaForm.querySelector(
          `[name="${name}"]`
        ) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null
      )?.value?.trim?.() ?? "";

    const herramientas = Array.from(
      galaForm.querySelectorAll<HTMLInputElement>('input[name="herramientas"]:checked')
    ).map((i) => i.value);

    const plan =
      (galaForm.querySelector('input[name="plan"]:checked') as HTMLInputElement | null)?.value ?? "";

    const urlParams = new URLSearchParams(window.location.search);
    const utmObj = Object.fromEntries(urlParams.entries());
    const utm_source = urlParams.get("utm_source") || "";
    const utm_medium = urlParams.get("utm_medium") || "";
    const utm_campaign = urlParams.get("utm_campaign") || "";
    const utm_content = urlParams.get("utm_content") || "";
    const utm_term = urlParams.get("utm_term") || "";

    const oferta = getValue("oferta");
    const canales = getValue("canales");
    const objetivo = getValue("objetivo");
    const ticket = getValue("ticket");
    const websiteOrIg = getValue("url");

    const messageText = [
      `Oferta: ${oferta}`,
      canales ? `Canales: ${canales}` : "",
      objetivo ? `Objetivo: ${objetivo}` : "",
      ticket ? `Ticket: ${ticket}` : "",
      herramientas.length ? `Herramientas: ${herramientas.join(", ")}` : "",
      plan ? `Plan sugerido: ${plan}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const payload = {
      agent: "Gala",
      plan,
      name: getValue("nombre"),
      email: getValue("email"),
      phone: getValue("whatsapp"),
      company: "",
      website: websiteOrIg,
      message: messageText,
      source_url: window.location.href,
      need: messageText,
      budget: ticket,
      timeline: "",
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      utm: utmObj,
      gala_objetivo: objetivo,
      gala_procesos: [oferta, canales ? `Canales: ${canales}` : ""].filter(Boolean).join("\n"),
      gala_herramientas: herramientas.join("\n"),
      gala_integraciones: herramientas.join("\n"),
      gala_plan: plan,
      gala: {
        objetivo,
        procesos: [oferta, canales ? `Canales: ${canales}` : ""].filter(Boolean).join("\n"),
        herramientas: herramientas.join("\n"),
        integraciones: herramientas.join("\n"),
        plan,
      },
    };

    const submitBtn = galaForm.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    const originalText = submitBtn?.textContent ?? "";

    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando…";
      }

      const data = await sendLead(payload);
      openSuccessModal(data?.message || "Recibimos tu información. Te contactaremos pronto.");
      galaForm.reset();
    } catch (err) {
      console.error(err);
      showErrorToast("No se pudo enviar. Intenta de nuevo. Si persiste, escríbenos por WhatsApp.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
}

