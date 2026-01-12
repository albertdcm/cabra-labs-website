import{C as d,T as o,I as i}from"./Cabra Labs Logo--6aE7PCr.js";const n=document.querySelector("#app");if(!n)throw new Error("No se encontró el elemento #app");const p="11 de enero de 2026",c="contacto@cabralabs.com";n.innerHTML=`
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <style>
      .cabra-header, .cabra-header * { -webkit-tap-highlight-color: rgba(30, 41, 59, 0.55); }
      .cabra-header a:active, .cabra-header button:active { background-color: rgba(30, 41, 59, 0.38); }
      .cabra-header a:focus, .cabra-header button:focus { outline: none; }
      .cabra-header a:focus-visible, .cabra-header button:focus-visible {
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

      /* ✅ Cookie banner */
      .cookie-wrap { position: fixed; left: 0; right: 0; bottom: 0; z-index: 60; padding: 14px; }
      .cookie-card {
        max-width: 980px; margin: 0 auto;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(2, 6, 23, 0.78);
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

    <!-- NAVBAR (✅ SIN FAQ / TÉRMINOS / PRIVACIDAD) -->
    <header class="cabra-header sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <nav class="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <a href="/" class="flex items-center group rounded-full px-2 py-1 active:bg-slate-800/40">
          <img src="${d}" alt="Cabra Labs" class="h-10 w-auto group-hover:scale-105 transition-transform duration-200" loading="eager" decoding="async" />
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
              <img src="${o}" class="w-5 h-5 opacity-90" alt="TikTok" loading="lazy" decoding="async" />
            </a>

            <a href="https://instagram.com/cabra_labs" target="_blank" rel="noopener"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600/40 via-emerald-400/30 to-emerald-300/30 border border-emerald-400/30 hover:scale-105 transition-all duration-200 active:bg-slate-800/40"
              aria-label="Instagram">
              <img src="${i}" class="w-5 h-5 opacity-90" alt="Instagram" loading="lazy" decoding="async" />
            </a>
          </div>

          <a
            href="https://wa.me/584120599367?text=Hola%20Cabra%20Labs%2C%20tengo%20una%20consulta%20sobre%20t%C3%A9rminos%20y%20servicios."
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

    <main class="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-16 space-y-10">
      <section class="space-y-5">
        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Legal · Términos y Condiciones
        </div>

        <div class="space-y-3">
          <h1 class="text-3xl md:text-4xl font-semibold leading-tight">
            Términos y <span class="text-gradient-emerald">Condiciones</span>
          </h1>
          <p class="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Estos términos regulan el uso del sitio y los servicios de Cabra Labs (automatizaciones, integraciones,
            asistentes GOAT e implementación técnica).
          </p>
          <p class="text-[11px] text-slate-400">
            Última actualización: <span class="text-slate-300">${p}</span>
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <span class="legal-chip rounded-full px-3 py-1 text-[11px] text-slate-300">Servicios</span>
          <span class="legal-chip rounded-full px-3 py-1 text-[11px] text-slate-300">Responsabilidad</span>
          <span class="legal-chip rounded-full px-3 py-1 text-[11px] text-slate-300">Propiedad intelectual</span>
          <span class="legal-chip rounded-full px-3 py-1 text-[11px] text-slate-300">Pagos</span>
        </div>
      </section>

      <section class="legal-card rounded-3xl p-6 md:p-7 card-soft space-y-3">
        <h2 class="text-lg md:text-xl font-semibold">Importante</h2>
        <p class="text-sm text-slate-300 leading-relaxed">
          Cabra Labs ofrece servicios tecnológicos. Podemos optimizar flujos, automatizar seguimiento y mejorar respuestas,
          pero los resultados comerciales dependen de múltiples factores (oferta, demanda, pricing, operación y atención humana).
          No garantizamos un número específico de ventas.
        </p>
      </section>

      <section class="grid gap-6">
        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">1) Alcance del servicio</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Cabra Labs puede ofrecer: diagnóstico, diseño de flujos, automatizaciones, integraciones (CRM, pagos, e-commerce),
            asistentes conversacionales, paneles y soporte. El alcance exacto se define en propuesta/plan/acuerdo.
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">2) Uso permitido</h3>
          <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
            <li>• Uso legal y responsable.</li>
            <li>• Prohibido spam, fraude, suplantación o uso para actividades ilegales.</li>
            <li>• Prohibido intentar vulnerar seguridad o extraer datos sin autorización.</li>
          </ul>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">3) Plataformas de terceros</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Nuestros sistemas pueden depender de terceros (Meta/WhatsApp/Instagram, hosting, CRM, herramientas de automatización, IA).
            No controlamos caídas, cambios de políticas, límites o precios de terceros. Te ayudamos a mitigar, pero no podemos garantizar continuidad absoluta.
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">4) IA y limitaciones</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            La IA puede generar respuestas incorrectas. Implementamos reglas, validaciones y escalamiento a humano cuando aplica.
            El cliente es responsable de aprobar mensajes sensibles (precios, garantías, temas legales).
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">5) Propiedad intelectual</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Cabra Labs conserva la propiedad de plantillas y componentes reutilizables. Los entregables específicos para el cliente
            se rigen por el acuerdo/propuesta. En ausencia de acuerdo, el cliente recibe licencia de uso para operar su solución.
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">6) Pagos y cancelaciones</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Pagos, plazos, entregables y cancelaciones se definen por propuesta/plan. Salvo acuerdo escrito, pagos ejecutados y/o horas consumidas
            no son reembolsables una vez iniciada la ejecución.
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">7) Jurisdicción</h3>
          <p class="mt-2 text-sm text-slate-300 leading-relaxed">
            Jurisdicción: Venezuela y/o Estados Unidos (según aplique al cliente, canal de contratación y/o acuerdo firmado).
            Si existe un contrato/SOW/propuesta firmada, ese documento prevalece para definir ley aplicable y jurisdicción.
          </p>
        </article>

        <article class="legal-card rounded-3xl p-6 md:p-7 card-soft">
          <h3 class="text-base md:text-lg font-semibold">8) Contacto</h3>
          <div class="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-sm text-slate-200/90">
              Escríbenos a: <a class="legal-link font-semibold" href="mailto:${c}">${c}</a>
            </p>
          </div>
        </article>
      </section>

      <!-- FOOTER (✅ LINKS LEGALES SE QUEDAN AQUÍ) -->
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
                <img src="${o}" alt="TikTok @cabra.labs" class="w-5 h-5" loading="lazy" decoding="async" />
              </a>

              <a
                href="https://instagram.com/cabra_labs"
                target="_blank"
                rel="noopener"
                aria-label="Instagram @cabra_labs"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0f2e2c] border border-emerald-400/40 shadow-[0_0_15px_-2px_rgba(16,185,129,0.25)] hover:scale-105 transition-transform duration-200"
              >
                <img src="${i}" alt="Instagram @cabra.labs" class="w-5 h-5" loading="lazy" decoding="async" />
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
`;(function(){const a="cabra_cookie_consent_v1",r=localStorage.getItem(a);if(r==="accepted"||r==="rejected")return;const e=document.createElement("div");e.className="cookie-wrap",e.innerHTML=`
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
  `,document.body.appendChild(e);const t=document.getElementById("cookie-accept"),s=document.getElementById("cookie-reject"),l=()=>{e.classList.add("cookie-hidden"),setTimeout(()=>e.remove(),200)};t==null||t.addEventListener("click",()=>{localStorage.setItem(a,"accepted"),l()}),s==null||s.addEventListener("click",()=>{localStorage.setItem(a,"rejected"),l()})})();
