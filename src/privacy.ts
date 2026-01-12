import "./style.css";

import InstagramIcon from "./assets/agents/instagram.svg";
import TikTokIcon from "./assets/agents/tik-tok.svg";
import CabraLogo from "./assets/agents/Cabra Labs Logo.png";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("No se encontró el elemento #app");

/**
 * ⚙️ Edita estos 2 valores si quieres:
 */
const UPDATED_AT = "11 de enero de 2026";
const CONTACT_EMAIL = "contacto@cabralabs.com";

app.innerHTML = `
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <!-- FIX: Tap highlight / focus (igual que home) + estilos legales + cookies -->
    <style>
      .cabra-header, .cabra-header * {
        -webkit-tap-highlight-color: rgba(30, 41, 59, 0.55);
      }
      .cabra-header a:active,
      .cabra-header button:active {
        background-color: rgba(30, 41, 59, 0.38);
      }
      .cabra-header a:focus,
      .cabra-header button:focus { outline: none; }
      .cabra-header a:focus-visible,
      .cabra-header button:focus-visible {
        outline: 2px solid rgba(52, 211, 153, 0.6);
        outline-offset: 2px;
        border-radius: 9999px;
      }

      .legal-card {
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.06);
      }
      .legal-chip {
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.05);
      }
      .legal-link {
        color: rgba(110, 231, 183, 0.92);
      }
      .legal-link:hover {
        color: rgba(167, 243, 208, 0.95);
        text-decoration: underline;
      }

      /* ✅ Cookie banner (estilo Cabra Labs) */
      .cookie-wrap {
        position: fixed;
        left: 0; right: 0; bottom: 0;
        z-index: 60;
        padding: 14px;
      }
      .cookie-card {
        max-width: 980px;
        margin: 0 auto;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(2, 6, 23, 0.78); /* slate-950 */
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-radius: 20px;
        box-shadow: 0 12px 40px rgba(0,0,0,0.35);
        padding: 14px 14px;
      }
      .cookie-btn {
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.06);
        color: rgba(226,232,240,0.92);
        transition: transform 150ms ease, background 150ms ease, border-color 150ms ease;
      }
      .cookie-btn:hover { background: rgba(255,255,255,0.09); transform: translateY(-1px); }
      .cookie-btn-primary {
        background: linear-gradient(90deg, rgba(56,189,248,0.95), rgba(16,185,129,0.95));
        border: none;
        color: white;
      }
      .cookie-btn-primary:hover { transform: translateY(-1px); filter: brightness(1.03); }
      .cookie-hidden { display: none !important; }
    </style>

    <!-- NAVBAR (sticky) ✅ SIN FAQ / TÉRMINOS / PRIVACIDAD -->
    <header class="cabra-header sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <nav class="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <a href="/" class="flex items-center group rounded-full px-2 py-1 active:bg-slate-800/40">
          <img src="${CabraLogo}" alt="Cabra Labs" class="h-10 w-auto group-hover:scale-105 transition-transform duration-200" loading="eager" decoding="async" />
        </a>

        <div class="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="/" class="rounded-full px-3 py-2 text-slate-200 hover:text-emerald-300 transition-colors active:bg-slate-800/40">
            Inicio
          </a>
        </div>

        <div class="flex items-center gap-3">
          <div class="hidden md:flex items-center gap-3">
            <a href="https://tiktok.com/@cabra.labs" target="_blank" rel="noopener"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600/40 via-emerald-400/30 to-emerald-300/30 border border-emerald-400/30 hover:scale-105 transition-all duration-200 active:bg-slate-800/40"
              aria-label="TikTok">
              <img src="${TikTokIcon}" class="w-5 h-5 opacity-90" alt="TikTok" loading="lazy" decoding="async" />
            </a>

            <a href="https://instagram.com/cabra_labs" target="_blank" rel="noopener"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600/40 via-emerald-400/30 to-emerald-300/30 border border-emerald-400/30 hover:scale-105 transition-all duration-200 active:bg-slate-800/40"
              aria-label="Instagram">
              <img src="${InstagramIcon}" class="w-5 h-5 opacity-90" alt="Instagram" loading="lazy" decoding="async" />
            </a>
          </div>

          <a
            href="https://wa.me/584120599367?text=Hola%20Cabra%20Labs%2C%20tengo%20una%20consulta%20sobre%20privacidad."
            target="_blank"
            rel="noopener"
            class="rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-emerald-500
                   px-5 py-2.5 text-sm sm:text-base font-semibold text-white
                   shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/45 hover:scale-[1.03]
                   transition-all duration-200 whitespace-nowrap leading-none active:bg-slate-800/40">
            Conversemos
          </a>
        </div>
      </nav>
    </header>

    <!-- CONTENT -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-16 space-y-10">
      <section class="space-y-5">
        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Legal · Política de Privacidad
        </div>

        <div class="space-y-3">
          <h1 class="text-3xl md:text-4xl font-semibold leading-tight">
            Política de <span class="text-gradient-emerald">Privacidad</span>
          </h1>
          <p class="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            En Cabra Labs protegemos tu información. Aquí te explicamos qué datos recopilamos, cómo los usamos
            y qué controles tienes sobre ellos.
          </p>
          <p class="text-[11px] text-slate-400">
            Última actualización: <span class="text-slate-300">${UPDATED_AT}</span>
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <span class="legal-chip rounded-full px-3 py-1 text-[11px] text-slate-300">Automatizaciones</span>
          <span class="legal-chip rounded-full px-3 py-1 text-[11px] text-slate-300">IA</span>
          <span class="legal-chip rounded-full px-3 py-1 text-[11px] text-slate-300">WhatsApp / Instagram</span>
          <span class="legal-chip rounded-full px-3 py-1 text-[11px] text-slate-300">Seguridad</span>
        </div>
      </section>

      <section class="legal-card rounded-3xl p-6 md:p-7 card-soft space-y-3">
        <h2 class="text-lg md:text-xl font-semibold">Resumen rápido</h2>
        <ul class="mt-1 space-y-2 text-sm text-slate-200/90">
          <li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span><span>No vendemos tu información.</span></li>
          <li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0"></span><span>Usamos datos para contactarte, operar el servicio y mejorar resultados.</span></li>
          <li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0"></span><span>Podemos usar proveedores (hosting, Meta, IA, CRM) para prestar el servicio.</span></li>
        </ul>
      </section>

      <section class="grid gap-6">
        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">1) Información que recopilamos</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Dependiendo del canal (web, WhatsApp, Instagram, formularios o llamadas) podemos recopilar:
          </p>
          <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
            <li>• Datos de contacto: nombre, email, teléfono.</li>
            <li>• Datos del negocio: rubro, oferta, necesidades, horarios.</li>
            <li>• Conversaciones: mensajes y respuestas para soporte, trazabilidad y mejora del flujo.</li>
            <li>• Datos técnicos: IP, dispositivo, navegador, métricas básicas de uso y seguridad.</li>
          </ul>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">2) Cómo usamos la información</h3>
          <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
            <li>• Responder solicitudes, agendar llamadas y soporte.</li>
            <li>• Implementar automatizaciones, integraciones y asistentes GOAT.</li>
            <li>• Monitoreo básico y diagnóstico de fallas (logs técnicos).</li>
            <li>• Medición del desempeño (por ejemplo: tiempos de respuesta, leads, conversiones si aplica).</li>
          </ul>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">3) IA y automatizaciones</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Algunas soluciones usan IA para clasificar, resumir o proponer respuestas. La IA puede cometer errores;
            por eso diseñamos reglas, límites y escalamiento a humano cuando corresponde.
          </p>
          <p class="mt-3 text-[11px] text-slate-400">
            Importante: Cabra Labs ofrece servicios tecnológicos. No sustituye asesoría legal, médica o financiera.
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">4) Terceros y proveedores</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Para operar el servicio podemos apoyarnos en plataformas de terceros (p. ej., Meta/WhatsApp/Instagram,
            proveedores de IA, CRMs, hosting, analítica). Solo compartimos lo necesario para prestar el servicio
            y cumplir soporte/seguridad.
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">5) Retención y seguridad</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Conservamos información el tiempo necesario para el propósito del servicio o cumplimiento de obligaciones.
            Aplicamos medidas razonables de seguridad, pero ningún sistema es infalible.
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">6) Tus derechos</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Puedes solicitar acceso, corrección o eliminación de tus datos, y limitar su uso.
          </p>
          <div class="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-sm text-slate-200/90">
              Escríbenos a: <a class="legal-link font-semibold" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
            </p>
          </div>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">7) Jurisdicción</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Jurisdicción: Venezuela y/o Estados Unidos (según aplique al cliente, canal de contratación y/o acuerdo firmado).
            Si existe una propuesta, contrato o SOW, ese documento prevalece para definir ley aplicable, jurisdicción y resolución de disputas.
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">8) Cambios a esta política</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Podemos actualizar esta política publicando la versión vigente en esta página con su fecha de actualización.
          </p>
        </article>
      </section>

      <!-- FOOTER (✅ LINKS LEGALES SIGUEN AQUÍ) -->
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
              <li><a href="/gala.html" class="hover:text-emerald-200 transition-colors">Gala · Leads listos para comprar</a></li>
              <li><a href="/bruno.html" class="hover:text-emerald-200 transition-colors">Bruno · Atención 24/7 sin estrés</a></li>
              <li><a href="/nia.html" class="hover:text-emerald-200 transition-colors">Nia · Seguimiento que cierra</a></li>
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
              <li><a class="hover:text-emerald-200 transition-colors" href="/privacy.html">Política de Privacidad</a></li>
              <li><a class="hover:text-emerald-200 transition-colors" href="/terms.html">Términos y Condiciones</a></li>
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

// ✅ Mini banner de cookies (sin librerías)
(function initCookieBanner() {
  const KEY = "cabra_cookie_consent_v1";
  const existing = localStorage.getItem(KEY);

  if (existing === "accepted" || existing === "rejected") return;

  const wrap = document.createElement("div");
  wrap.className = "cookie-wrap";
  wrap.innerHTML = `
    <div class="cookie-card">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div class="space-y-1">
          <p class="text-sm font-semibold text-slate-100">🍪 Cookies</p>
          <p class="text-xs text-slate-300 leading-relaxed max-w-2xl">
            Usamos cookies esenciales para que el sitio funcione correctamente. Si aceptas, podremos usar cookies
            adicionales para medir y mejorar la experiencia.
            <a class="legal-link font-semibold" href="/privacy.html#cookies">Ver detalles</a>.
          </p>
        </div>

        <div class="flex flex-wrap gap-2 justify-start md:justify-end">
          <button id="cookie-reject" class="cookie-btn rounded-full px-4 py-2 text-xs font-semibold">
            Solo esenciales
          </button>
          <button id="cookie-accept" class="cookie-btn cookie-btn-primary rounded-full px-4 py-2 text-xs font-semibold">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(wrap);

  const acceptBtn = document.getElementById("cookie-accept") as HTMLButtonElement | null;
  const rejectBtn = document.getElementById("cookie-reject") as HTMLButtonElement | null;

  const close = () => {
    wrap.classList.add("cookie-hidden");
    setTimeout(() => wrap.remove(), 200);
  };

  acceptBtn?.addEventListener("click", () => {
    localStorage.setItem(KEY, "accepted");
    close();
  });

  rejectBtn?.addEventListener("click", () => {
    localStorage.setItem(KEY, "rejected");
    close();
  });
})();
