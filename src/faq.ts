import "./style.css";
import CabraLogo from "./assets/agents/Cabra Labs Logo.png";
import TikTokIcon from "./assets/agents/tik-tok.svg";
import InstagramIcon from "./assets/agents/instagram.svg";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontró el elemento #app");
}

const faqs: { q: string; a: string; tag?: string }[] = [
  {
    tag: "General",
    q: "¿Qué hace Cabra Labs?",
    a: "Creamos equipos de asistentes digitales (GOAT) y automatizaciones para que tu negocio atienda y venda incluso cuando tú no estás. Diseñamos el sistema, lo conectamos con tus herramientas y lo dejamos funcionando con métricas.",
  },
  {
    tag: "General",
    q: "¿Necesito saber de automatizaciones para trabajar con ustedes?",
    a: "No. Te guiamos paso a paso. Solo necesitamos entender tu proceso (cómo llegan los clientes, cómo les vendes y cómo atiendes) y nosotros traducimos eso a flujos y automatizaciones.",
  },
  {
    tag: "General",
    q: "¿En cuánto tiempo se ve funcionando?",
    a: "Depende del alcance. Un primer flujo simple puede estar listo en pocos días, y un sistema con varios canales/CRM suele tomar 1–3 semanas. Te confirmamos tiempos luego del diagnóstico.",
  },
  {
    tag: "Bruno",
    q: "¿Bruno reemplaza a mi equipo de soporte?",
    a: "No: Bruno se encarga de lo repetitivo (preguntas frecuentes, capturar datos, filtrar, clasificar) y escala a humano cuando el caso lo amerita. Así tu equipo atiende menos ruido y más casos importantes.",
  },
  {
    tag: "Bruno",
    q: "¿Bruno puede atender en WhatsApp e Instagram?",
    a: "Sí. Podemos activarlo por canal (WhatsApp Business, Instagram DM, web chat, etc.) según tu plan y el tipo de atención que necesites.",
  },
  {
    tag: "Bruno",
    q: "¿Qué es “handoff a humano” (escalamiento)?",
    a: "Es la regla que define cuándo Bruno te pasa la conversación: por ejemplo pagos, reclamos complejos, negociación, casos VIP o cuando el cliente lo pide explícitamente.",
  },
  {
    tag: "Nia",
    q: "¿Nia funciona si no tengo CRM?",
    a: "Sí. Si no tienes CRM, te proponemos una estructura simple (por ejemplo con Google Sheets o un CRM recomendado) y montamos el pipeline con etapas, tareas y seguimiento automático.",
  },
  {
    tag: "Nia",
    q: "¿Qué es un “pipeline”?",
    a: "Es el camino que recorre un prospecto hasta la compra: por ejemplo Nuevo → Calificado → Cotizado → Llamada → Negociación → Cerrado/Perdido. Nia lo ordena y lo mantiene actualizado.",
  },
  {
    tag: "Nia",
    q: "¿Qué tipo de seguimientos puede automatizar Nia?",
    a: "Ejemplos: no respondió (1h/24h/72h), post-cotización, post-llamada, reactivación de leads fríos, post-venta (recompra) y recordatorios de pago, entre otros.",
  },
  {
    tag: "Gala",
    q: "¿Gala sirve si todavía no tengo un funnel?",
    a: "Sí. Gala puede ayudarte a estructurar el funnel desde cero (oferta, lead magnet, pasos, mensajes, páginas) y luego automatiza para que el proceso se ejecute solo.",
  },
  {
    tag: "Pagos",
    q: "¿Cómo trabajan los precios?",
    a: "Normalmente hay un mensual (operación/soporte/optimización) y un setup según cantidad de flujos, canales, integraciones y personalización. Después del briefing te damos una propuesta clara.",
  },
  {
    tag: "Integraciones",
    q: "¿Con qué herramientas pueden integrarse?",
    a: "Con lo que ya uses: CRM (Kommo/HubSpot/Pipedrive), Google Sheets, e-commerce (Shopify/Woo), pasarelas (Stripe/PayPal), Slack/Telegram, email y más.",
  },
  {
    tag: "Seguridad",
    q: "¿Qué pasa con mis datos y los de mis clientes?",
    a: "Usamos buenas prácticas de acceso mínimo y conectamos herramientas oficiales. Te explicamos qué datos se guardan, dónde y con qué propósito. Si necesitas políticas específicas, las definimos contigo.",
  },
];

const groups = Array.from(
  faqs.reduce((map, item) => {
    const key = item.tag ?? "General";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
    return map;
  }, new Map<string, { q: string; a: string; tag?: string }[]>())
);

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

        <div class="flex items-center gap-4">
          <a
            href="/#agentes"
            class="hidden sm:inline text-xs sm:text-sm text-slate-300 hover:text-emerald-300 transition-colors"
          >
            Ver agentes
          </a>

          <a
            href="/"
            class="text-xs sm:text-sm text-slate-300 hover:text-emerald-300 transition-colors"
          >
            ← Volver a la página principal
          </a>
        </div>
      </nav>
    </header>

    <!-- CONTENIDO -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-10 md:py-14 space-y-10">

      <!-- HERO FAQ -->
      <section class="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900/60 p-6 md:p-8 card-soft">
        <div class="pointer-events-none absolute -left-24 -top-20 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-24 -bottom-20 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl"></div>

        <div class="space-y-3 relative">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-200">
            <span class="text-sm">❓</span>
            <span>Preguntas frecuentes</span>
          </div>

          <h1 class="text-2xl md:text-3xl font-semibold tracking-tight">
            Respuestas rápidas para entender cómo trabajamos
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
            Aquí aclaramos lo más común sobre nuestros agentes GOAT, automatizaciones, tiempos, precios e integraciones.
            Si quieres que agreguemos una pregunta, escríbenos y la sumamos.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://wa.me/584120599367"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/35 hover:scale-[1.02] transition-transform"
            >
              Hablar por WhatsApp
              <span class="text-base">↗</span>
            </a>

            <a
              href="/#agentes"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/10 transition-colors"
            >
              Ver planes y agentes
            </a>
          </div>
        </div>
      </section>

      <!-- FAQ LIST -->
      <section class="space-y-8">
        ${groups
          .map(([tag, items]) => {
            return `
              <div class="space-y-3">
                <h2 class="text-sm uppercase tracking-[0.22em] text-slate-300">
                  ${tag}
                </h2>

                <div class="grid gap-3">
                  ${items
                    .map((item) => {
                      return `
                        <details class="group rounded-3xl border border-white/10 bg-white/5 p-5 card-soft hover:border-emerald-400/35 transition-colors">
                          <summary class="cursor-pointer list-none flex items-start justify-between gap-4">
                            <span class="text-sm md:text-base font-semibold text-slate-100">
                              ${item.q}
                            </span>
                            <span class="shrink-0 text-slate-400 group-open:text-emerald-200 transition-colors">
                              ▾
                            </span>
                          </summary>

                          <div class="pt-3 text-sm text-slate-300 leading-relaxed">
                            ${item.a}
                          </div>
                        </details>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            `;
          })
          .join("")}
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
