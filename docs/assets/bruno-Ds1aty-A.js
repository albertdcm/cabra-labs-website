import{C as A,T as R,I as P}from"./Cabra Labs Logo-DKhkTmSi.js";const N="/assets/Bruno%20Interno-J3XYnWux.png",f=document.querySelector("#app");if(!f)throw new Error("No se encontró el elemento #app");f.innerHTML=`
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

      /* ✅ Igualar alturas SOLO en desktop para la fila de 3 tarjetas */
      @media (min-width: 768px){
        .theme-bruno .equal-row > .equal-card{
          height: 100%;
        }
      }
    </style>

    <!-- NAVBAR SIMPLE -->
    <header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav class="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <!-- LOGO (PNG, VITE OK) -->
        <a href="/" class="flex items-center group">
          <img
            src="${A}"
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
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-9 md:py-12 space-y-10 md:space-y-12">

      <!-- HERO BRUNO (más compacto y con imagen integrada) -->
      <section class="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1.35fr),minmax(0,1fr)] items-center">
        <!-- Texto -->
        <div class="space-y-5 md:space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-sky-200">
            <span class="text-sm">⚡</span>
            <span>Bruno · Responde por ti 24/7</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
            Tu negocio responde, filtra y escala con <span class="text-sky-300">Bruno</span>
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed">
            Bruno convierte mensajes en oportunidades: responde en WhatsApp, Instagram y web, califica interesados,
            captura datos y, cuando hace falta, <span class="text-slate-100">te pasa la conversación con contexto</span>
            para que tú solo cierres o resuelvas.
          </p>
        </div>

        <!-- Imagen Bruno (sube y se siente parte del hero/banner) -->
        <div class="relative flex items-center justify-center md:justify-end">
          <div class="absolute -inset-6 rounded-3xl bg-sky-500/15 blur-3xl opacity-80"></div>
          <div class="relative rounded-3xl border border-sky-400/40 bg-slate-900/80 px-4 py-5 md:px-6 md:py-6 card-soft">
            <img
              src="${N}"
              alt="Bruno, agente GOAT de atención y calificación"
              class="w-48 md:w-64 lg:w-72 max-w-full mx-auto"
              loading="lazy"
              decoding="async"
            />
            <p class="mt-3 text-[11px] text-center text-sky-100/80">
              Bruno atiende lo repetitivo, filtra interesados y escala a humano cuando toca.
            </p>
          </div>
        </div>
      </section>

      <!-- ✅ FILA 3-COLUMNAS (desktop) con alto igual: Qué incluye / Planes / Precio -->
      <section class="grid gap-4 md:gap-5 md:grid-cols-3 md:items-stretch equal-row">
        <!-- Qué incluye -->
        <div class="rounded-3xl border border-sky-400/25 bg-slate-900/70 p-5 card-soft equal-card md:h-full">
          <p class="text-xs uppercase tracking-[0.22em] text-sky-200/90">Qué incluye</p>
          <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
            <li>• Diseño por objetivos (ventas / soporte / mixto).</li>
            <li>• Base de respuestas + tono de marca.</li>
            <li>• Flujos de atención: precios, horarios, envíos, disponibilidad, políticas, etc.</li>
            <li>• Calificación de leads (preguntas clave + etiquetas).</li>
            <li>• Escalamiento a humano con contexto (handoff).</li>
            <li>• Reporte mensual con conversaciones, motivos y oportunidades.</li>
          </ul>
        </div>

        <!-- Planes -->
        <div class="rounded-3xl border border-sky-400/25 bg-slate-900/70 p-5 card-soft equal-card md:h-full">
          <p class="text-xs uppercase tracking-[0.22em] text-sky-200/90">Planes (flujos y canales incluidos)</p>

          <div class="mt-3 space-y-3 text-sm text-slate-200/90">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p class="font-semibold text-slate-100">Base</p>
              <p class="text-xs text-slate-300 mt-1">
                <span class="text-sky-200 font-semibold">Hasta 2</span> flujos + <span class="text-sky-200 font-semibold">1</span> canal.
              </p>
              <p class="text-[11px] text-slate-400 mt-1">Desde $150/mes</p>
            </div>

            <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p class="font-semibold text-slate-100">Crecimiento</p>
              <p class="text-xs text-slate-300 mt-1">
                <span class="text-sky-200 font-semibold">Hasta 5</span> flujos + <span class="text-sky-200 font-semibold">2</span> canales + handoff a humano.
              </p>
              <p class="text-[11px] text-slate-400 mt-1">Desde $250/mes</p>
            </div>

            <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p class="font-semibold text-slate-100">Escala</p>
              <p class="text-xs text-slate-300 mt-1">
                <span class="text-sky-200 font-semibold">Hasta 8</span> flujos + <span class="text-sky-200 font-semibold">3</span> canales + etiquetas + reportes avanzados.
              </p>
              <p class="text-[11px] text-slate-400 mt-1">Desde $400/mes</p>
            </div>

            <p class="text-[11px] text-slate-400">
              “Flujo” = una ruta completa (ej: consulta → preguntas → respuesta → captura de datos → cierre o soporte).
            </p>
          </div>
        </div>

        <!-- Precio -->
        <div class="rounded-3xl border border-sky-400/25 bg-gradient-to-r from-sky-500/10 via-slate-900/60 to-emerald-500/10 p-5 card-soft equal-card md:h-full">
          <p class="text-xs uppercase tracking-[0.22em] text-sky-200/90">Precio</p>

          <p class="mt-3 text-sm text-slate-200/90">
            <span class="text-sky-200 font-semibold">Setup desde $250</span> · mensualidad fija por plan:
            <span class="text-sky-200 font-semibold">Base $150/mes</span> ·
            <span class="text-sky-200 font-semibold">Crecimiento $250/mes</span> ·
            <span class="text-sky-200 font-semibold">Escala $400/mes</span>.
          </p>

          <p class="text-[11px] text-slate-400 mt-2">
            Lo conectamos con CRM, Google Sheets, pasarelas y herramientas que ya usas.
            Integraciones especiales o automatizaciones a medida se cotizan por proyecto.
          </p>

          <div class="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs text-slate-300">
              Ideal si hoy:
            </p>
            <ul class="mt-2 space-y-1 text-[12px] text-slate-200/90">
              <li>• Respondes tarde y se enfrían leads</li>
              <li>• Te saturan preguntas repetidas</li>
              <li>• Necesitas handoff ordenado a tu equipo</li>
            </ul>
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
            Con esta información definimos qué debe responder, cómo califica interesados, cuándo escala a humano
            y el nivel ideal de automatización (Base / Crecimiento / Escala).
          </p>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 card-soft">
            <p class="text-xs uppercase tracking-[0.22em] text-sky-200/90">Lo que armamos con esto</p>
            <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
              <li>• Flujos prioritarios (ventas, soporte, reclamos, seguimiento).</li>
              <li>• Preguntas clave para filtrar y calificar leads.</li>
              <li>• Reglas claras de escalamiento a humano (handoff).</li>
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
              placeholder="Ej: preguntas repetidas, precios, envíos, horarios, disponibilidad, reclamos, devoluciones..."
              required
            ></textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Canales donde lo quieres activo</label>
            <div class="grid gap-2 sm:grid-cols-2">
              ${["WhatsApp Business","Instagram DM","Web (chat)","Facebook Messenger","Email (respuestas sugeridas)"].map(e=>`
                    <label class="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/90 hover:bg-white/10 transition-colors">
                      <input type="checkbox" name="canales" value="${e}" class="accent-sky-400" />
                      ${e}
                    </label>
                  `).join("")}
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
              ${["CRM (Kommo/HubSpot)","Google Sheets","Notificaciones por Email","Slack/Telegram","E-commerce (Shopify/Woo)","Pasarela (Stripe/PayPal)"].map(e=>`
                    <label class="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/90 hover:bg-white/10 transition-colors">
                      <input type="checkbox" name="integraciones" value="${e}" class="accent-sky-400" />
                      ${e}
                    </label>
                  `).join("")}
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs text-slate-300">Plan sugerido</label>
            <div class="grid gap-2 sm:grid-cols-3">
              ${[{key:"Base",desc:"2 flujos · 1 canal",price:"$150/mes"},{key:"Crecimiento",desc:"5 flujos · 2 canales · handoff",price:"$250/mes"},{key:"Escala",desc:"8 flujos · 3 canales · reportes",price:"$400/mes"}].map(e=>`
                    <label class="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200/90 hover:bg-white/10 transition-colors cursor-pointer">
                      <div class="flex items-start gap-2">
                        <input type="radio" name="plan" value="${e.key}" class="mt-0.5 accent-sky-400" />
                        <div>
                          <p class="font-semibold text-slate-100">${e.key}</p>
                          <p class="text-[11px] text-slate-400 mt-1">${e.desc}</p>
                          <p class="text-[11px] text-sky-200/90 mt-1 font-semibold">${e.price}</p>
                        </div>
                      </div>
                    </label>
                  `).join("")}
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
                <img src="${R}" alt="TikTok @cabra.labs" class="w-5 h-5" loading="lazy" decoding="async" />
              </a>

              <a
                href="https://instagram.com/cabra_labs"
                target="_blank"
                rel="noopener"
                aria-label="Instagram @cabra_labs"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0f2e2c] border border-emerald-400/40 shadow-[0_0_15px_-2px_rgba(16,185,129,0.25)] hover:scale-105 transition-transform duration-200"
              >
                <img src="${P}" alt="Instagram @cabra.labs" class="w-5 h-5" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>

          <!-- AGENTES -->
          <div>
            <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Agentes</p>
            <ul class="space-y-1 text-xs text-slate-400">
              <li><a href="/gala.html" class="hover:text-emerald-200 transition-colors">Gala · Atrae clientes listos para comprar</a></li>
              <li><a href="/bruno.html" class="hover:text-emerald-200 transition-colors">Bruno · Responde por ti 24/7</a></li>
              <li><a href="/nia.html" class="hover:text-emerald-200 transition-colors">Nia · Cierra ventas con seguimiento automático</a></li>
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
              <li><a class="hover:text-emerald-200 transition-colors" href="#agentes">Planes y precios</a></li>
            </ul>
          </div>

        </div>

        <div class="border-t border-white/10 text-[11px] text-slate-500 py-4 text-center">
          © 2025 Cabra Labs. All rights reserved.
        </div>
      </footer>

    </main>
  </div>
`;function E(){if(document.getElementById("cabra-lead-ui"))return;const e=document.createElement("div");e.id="cabra-lead-ui",e.innerHTML=`
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
            Recibimos tu información. Bruno ya puede preparar el bot y los flujos para atender y calificar interesados.
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
  `,document.body.appendChild(e);const a=document.getElementById("cabra-success-overlay");a==null||a.addEventListener("click",s=>{s.target===a&&x()}),document.querySelectorAll("[data-cabra-close]").forEach(s=>{s.addEventListener("click",()=>x())}),document.querySelectorAll("[data-cabra-toast-close]").forEach(s=>{s.addEventListener("click",()=>g())}),window.addEventListener("keydown",s=>{s.key==="Escape"&&(x(),g())})}function z(e){E();const a=document.getElementById("cabra-success-overlay"),s=document.getElementById("cabra-success-msg");s&&e&&(s.textContent=e),a==null||a.classList.add("is-open")}function x(){const e=document.getElementById("cabra-success-overlay");e==null||e.classList.remove("is-open")}let c;function M(e){E();const a=document.getElementById("cabra-error-toast"),s=document.getElementById("cabra-error-msg");s&&e&&(s.textContent=e),a==null||a.classList.add("is-show"),c&&window.clearTimeout(c),c=window.setTimeout(()=>{g()},4500)}function g(){const e=document.getElementById("cabra-error-toast");e==null||e.classList.remove("is-show"),c&&window.clearTimeout(c),c=void 0}const H="https://cabralab.app.n8n.cloud/webhook/form-submission",W="cabra_labs_goat_2025_secure";async function F(e){const a=JSON.stringify({token:W,body:e}),s=await fetch(H,{method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:a}),n=await s.text();let t={};try{t=n?JSON.parse(n):{}}catch{t={raw:n}}if(!s.ok)throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.raw)||"Error enviando el formulario");return t}const l=f.querySelector("form");l&&l.addEventListener("submit",async e=>{var w;e.preventDefault();const a=o=>{var k,p,_;return((_=(p=(k=l.querySelector(`[name="${o}"]`))==null?void 0:k.value)==null?void 0:p.trim)==null?void 0:_.call(p))??""},s=Array.from(l.querySelectorAll('input[name="canales"]:checked')).map(o=>o.value),n=Array.from(l.querySelectorAll('input[name="integraciones"]:checked')).map(o=>o.value),t=((w=l.querySelector('input[name="plan"]:checked'))==null?void 0:w.value)??"",i=new URLSearchParams(window.location.search),j=Object.fromEntries(i.entries()),B=i.get("utm_source")||"",C=i.get("utm_medium")||"",I=i.get("utm_campaign")||"",T=i.get("utm_content")||"",S=i.get("utm_term")||"",y=a("nombre"),$=a("email"),h=a("whatsapp"),v=a("url"),d=a("casos"),m=a("horario"),u=a("sla"),b=a("handoff"),L=[d?`Casos: ${d}`:"",s.length?`Canales: ${s.join(", ")}`:"",m?`Horario humano: ${m}`:"",u?`SLA humano: ${u}`:"",b?`Handoff: ${b}`:"",n.length?`Integraciones: ${n.join(", ")}`:"",t?`Plan sugerido: ${t}`:""].filter(Boolean).join(`
`),q={agent:"Bruno",plan:t,name:y,email:$,phone:h,company:"",website:v,message:L,source_url:window.location.href,nombre:y,whatsapp:h,url:v,utm:j,utm_source:B,utm_medium:C,utm_campaign:I,utm_content:T,utm_term:S,bruno_negocio:"",bruno_oferta:d,bruno_canales:s.join(", "),bruno_presupuesto:"",bruno_objetivo:"",bruno_plan:t,bruno:{oferta:d,canales:s.join(`
`),horario:m,sla:u,handoff:b,integraciones:n.join(`
`),plan:t}},r=l.querySelector('button[type="submit"]'),O=(r==null?void 0:r.textContent)??"";try{r&&(r.disabled=!0,r.textContent="Enviando…");const o=await F(q);z((o==null?void 0:o.message)||"Recibimos tu información. Te contactaremos pronto."),l.reset()}catch(o){console.error(o),M("No se pudo enviar. Intenta de nuevo. Si persiste, escríbenos por WhatsApp.")}finally{r&&(r.disabled=!1,r.textContent=O)}});
