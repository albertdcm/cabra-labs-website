import{C as R,T as L,I as j}from"./Cabra Labs Logo--6aE7PCr.js";const A="/assets/Nia%20Interno-CeIzaFWq.png",h=document.querySelector("#app");if(!h)throw new Error("No se encontró el elemento #app");h.innerHTML=`
  <div class="nia-page min-h-screen bg-slate-950 text-slate-50">
    <!-- ✅ Ajustes SOLO para Nia (sin cambiar el diseño base) -->
    <style>
      /* FIX HOVER VERDE -> MORADO (solo para esta página) */
      .nia-page .card-soft:hover,
      .nia-page .card-soft:active,
      .nia-page .card-soft:focus-within {
        border-color: rgba(192, 132, 252, 0.55) !important; /* purple-300 */
        box-shadow:
          0 0 0 2px rgba(192, 132, 252, 0.22),
          0 0 30px -10px rgba(168, 85, 247, 0.45) !important; /* purple glow */
      }

      /* ✅ Igualar alturas SOLO en desktop para la fila de 3 tarjetas */
      @media (min-width: 768px){
        .nia-page .equal-row > .equal-card{
          height: 100%;
        }
      }

      /* ===========================
         ✅ MODAL (ÉXITO) + TOAST (ERROR)
         =========================== */
      .cabra-modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 18px;
        background: rgba(2, 6, 23, 0.72);
        backdrop-filter: blur(10px);
      }
      .cabra-modal-backdrop.is-open {
        display: flex;
      }
      .cabra-modal {
        width: min(560px, 100%);
        border-radius: 24px;
        border: 1px solid rgba(192, 132, 252, 0.28);
        background: linear-gradient(
          180deg,
          rgba(15, 23, 42, 0.92),
          rgba(2, 6, 23, 0.92)
        );
        box-shadow:
          0 30px 80px rgba(2, 6, 23, 0.75),
          0 0 0 2px rgba(192, 132, 252, 0.10),
          0 0 60px rgba(168, 85, 247, 0.28);
        overflow: hidden;
        transform: translateY(10px) scale(0.98);
        opacity: 0;
        transition: transform 180ms ease, opacity 180ms ease;
      }
      .cabra-modal-backdrop.is-open .cabra-modal {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      .cabra-modal-top {
        position: relative;
        padding: 18px 18px 12px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background:
          radial-gradient(
            1000px 220px at 20% -20%,
            rgba(168, 85, 247, 0.35),
            transparent 60%
          ),
          radial-gradient(
            900px 220px at 90% -30%,
            rgba(56, 189, 248, 0.18),
            transparent 55%
          );
      }
      .cabra-modal-title {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: rgba(233, 213, 255, 0.92);
      }
      .cabra-modal-body {
        padding: 14px 18px 18px;
      }
      .cabra-modal-h1 {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: rgba(248, 250, 252, 0.96);
      }
      .cabra-modal-p {
        margin-top: 8px;
        font-size: 13px;
        line-height: 1.55;
        color: rgba(203, 213, 225, 0.92);
      }
      .cabra-modal-actions {
        margin-top: 14px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      .cabra-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: 999px;
        padding: 10px 14px;
        font-size: 13px;
        font-weight: 700;
        border: 1px solid rgba(192, 132, 252, 0.28);
        color: rgba(15, 23, 42, 0.95);
        background: linear-gradient(
          90deg,
          rgba(192, 132, 252, 1),
          rgba(56, 189, 248, 1)
        );
        box-shadow: 0 18px 45px rgba(168, 85, 247, 0.25);
        transition: transform 150ms ease, box-shadow 150ms ease, filter 150ms ease;
        cursor: pointer;
      }
      .cabra-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 24px 60px rgba(168, 85, 247, 0.33);
        filter: brightness(1.02);
      }
      .cabra-btn-ghost {
        background: rgba(255, 255, 255, 0.06);
        color: rgba(226, 232, 240, 0.92);
        border: 1px solid rgba(255, 255, 255, 0.12);
        box-shadow: none;
      }
      .cabra-btn-ghost:hover {
        transform: translateY(-1px);
        background: rgba(255, 255, 255, 0.085);
      }
      .cabra-modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 38px;
        height: 38px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.06);
        color: rgba(226, 232, 240, 0.9);
        cursor: pointer;
        transition: transform 150ms ease, background 150ms ease;
      }
      .cabra-modal-close:hover {
        transform: scale(1.03);
        background: rgba(255, 255, 255, 0.09);
      }

      .cabra-toast {
        position: fixed;
        z-index: 10000;
        right: 14px;
        bottom: 14px;
        width: min(420px, calc(100% - 28px));
        display: none;
        border-radius: 18px;
        border: 1px solid rgba(248, 113, 113, 0.35);
        background: linear-gradient(
          180deg,
          rgba(15, 23, 42, 0.92),
          rgba(2, 6, 23, 0.92)
        );
        box-shadow:
          0 22px 55px rgba(2, 6, 23, 0.72),
          0 0 45px rgba(248, 113, 113, 0.18);
        overflow: hidden;
      }
      .cabra-toast.is-open {
        display: block;
        animation: cabra-toast-in 180ms ease-out both;
      }
      .cabra-toast-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 12px 14px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background:
          radial-gradient(
            700px 160px at 10% -30%,
            rgba(248, 113, 113, 0.28),
            transparent 55%
          );
      }
      .cabra-toast-title {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: rgba(254, 202, 202, 0.95);
      }
      .cabra-toast-body {
        padding: 12px 14px 14px;
        font-size: 13px;
        color: rgba(226, 232, 240, 0.92);
        line-height: 1.5;
      }
      .cabra-toast-x {
        width: 34px;
        height: 34px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.06);
        color: rgba(226, 232, 240, 0.9);
        cursor: pointer;
      }

      @keyframes cabra-toast-in {
        from { transform: translateY(10px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    </style>

    <!-- NAVBAR SIMPLE -->
    <header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav class="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <a href="/" class="flex items-center group">
          <img
            src="${R}"
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
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-9 md:py-12 space-y-10 md:space-y-12">

      <!-- ✅ HERO NIA (más compacto + imagen integrada al banner) -->
      <section class="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1.35fr),minmax(0,1fr)] items-center">
        <!-- Texto -->
        <div class="space-y-5 md:space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-purple-200">
            <span class="text-sm">⚡</span>
            <span>Nia · Seguimiento & CRM</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
            Seguimiento que cierra con <span class="text-purple-300">Nia</span>
          </h1>

          <p class="text-sm md:text-base text-slate-300 leading-relaxed">
            Nia ordena tu pipeline, automatiza seguimientos (24h/72h), crea tareas y recordatorios,
            y te muestra qué oportunidades están por cerrarse para que <span class="text-slate-100">no se enfríen prospectos</span>.
          </p>
        </div>

        <!-- Imagen Nia (sube y se siente parte del hero/banner) -->
        <div class="relative flex items-center justify-center md:justify-end">
          <div class="absolute -inset-6 rounded-3xl bg-purple-500/15 blur-3xl opacity-80"></div>
          <div class="relative rounded-3xl border border-purple-400/40 bg-slate-900/80 px-4 py-5 md:px-6 md:py-6 card-soft">
            <img
              src="${A}"
              alt="Nia, agente GOAT de CRM y seguimiento"
              class="w-48 md:w-64 lg:w-72 max-w-full mx-auto"
              loading="lazy"
              decoding="async"
            />
            <p class="mt-3 text-[11px] text-center text-purple-100/80">
              Nia te da estructura y seguimiento automático para cerrar sin perseguir.
            </p>
          </div>
        </div>
      </section>

      <!-- ✅ INFO EN 1 FILA (desktop): Qué incluye / Planes / Precio (alto igual) -->
      <section class="grid gap-4 md:gap-5 md:grid-cols-3 md:items-stretch equal-row">
        <!-- Qué incluye -->
        <div class="rounded-3xl border border-purple-400/25 bg-slate-900/70 p-5 card-soft equal-card md:h-full">
          <p class="text-xs uppercase tracking-[0.22em] text-purple-200/90">Qué incluye</p>
          <ul class="mt-3 space-y-2 text-sm text-slate-200/90">
            <li>• Configuración de CRM / pipeline (etapas, estados y reglas).</li>
            <li>• Seguimiento automático (no-respondió, recontacto, post-llamada).</li>
            <li>• Recordatorios y tareas (SLA, próximos pasos).</li>
            <li>• Etiquetas y segmentación (frío / tibio / caliente / VIP).</li>
            <li>• Dashboards básicos de oportunidades y conversiones.</li>
            <li>• Optimización continua según resultados.</li>
          </ul>
        </div>

        <!-- Planes -->
        <div class="rounded-3xl border border-purple-400/25 bg-slate-900/70 p-5 card-soft equal-card md:h-full">
          <p class="text-xs uppercase tracking-[0.22em] text-purple-200/90">Planes (automatizaciones incluidas)</p>

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
                <span class="text-purple-200 font-semibold">Hasta 10</span> automatizaciones + <span class="text-purple-200 font-semibold">3</span> pipelines + dashboards.
              </p>
            </div>

            <p class="text-[11px] text-slate-400">
              “Automatización” = una regla/flujo completo (lead → tarea → mensaje → cambio de etapa → alerta).
            </p>
          </div>
        </div>

        <!-- Precio (sin precios) -->
        <div class="rounded-3xl border border-purple-400/25 bg-gradient-to-r from-purple-500/10 via-slate-900/60 to-sky-500/10 p-5 card-soft equal-card md:h-full">
          <p class="text-xs uppercase tracking-[0.22em] text-purple-200/90">Integraciones</p>

          <p class="mt-3 text-sm text-slate-200/90">
            Definimos el plan ideal según tu CRM, volumen de leads y complejidad del seguimiento.
            Armamos Nia encima de lo que ya usas para aprovechar tu base y cerrar más rápido.
          </p>

          <p class="text-[11px] text-slate-400 mt-2">
            Integraciones especiales, migraciones o automatizaciones a medida se cotizan por proyecto.
            Si ya usas Kommo/HubSpot/Odoo/Sheets, armamos Nia encima para aprovechar tu base.
          </p>

          <div class="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs text-slate-300">Ideal si hoy:</p>
            <ul class="mt-2 space-y-1 text-[12px] text-slate-200/90">
              <li>• Hablas con leads pero no avanzan a cierre</li>
              <li>• No tienes pipeline claro ni próximos pasos</li>
              <li>• No hay seguimiento sistemático (se enfrían)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- FORMULARIO NIA -->
      <section class="grid gap-8 md:grid-cols-[minmax(0,1.05fr),minmax(0,1.15fr)] items-start">
        <div class="space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">Briefing para activar a Nia</h2>
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

        <form class="space-y-4 rounded-3xl border border-purple-400/30 bg-slate-900/80 p-5 md:p-6 shadow-xl shadow-purple-500/15">
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
              ${["No respondió (1h / 24h / 72h)","Post-cotización","Post-llamada","Reactivación de leads fríos","Post-venta (recompra)","Recordatorios de pago"].map(e=>`
                    <label class="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/90 hover:bg-white/10 transition-colors">
                      <input type="checkbox" name="seguimientos" value="${e}" class="accent-purple-400" />
                      ${e}
                    </label>
                  `).join("")}
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
              ${[{key:"Base",desc:"1 pipeline · hasta 3 automatizaciones"},{key:"Crecimiento",desc:"2 pipelines · hasta 6 automatizaciones"},{key:"Escala",desc:"3 pipelines · hasta 10 automatizaciones"}].map(e=>`
                    <label class="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200/90 hover:bg-white/10 transition-colors cursor-pointer">
                      <div class="flex items-start gap-2">
                        <input type="radio" name="plan" value="${e.key}" class="mt-0.5 accent-purple-400" />
                        <div>
                          <p class="font-semibold text-slate-100">${e.key}</p>
                          <p class="text-[11px] text-slate-400 mt-1">${e.desc}</p>
                        </div>
                      </div>
                    </label>
                  `).join("")}
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
                <img src="${L}" alt="TikTok @cabra.labs" class="w-5 h-5" loading="lazy" decoding="async" />
              </a>

              <a
                href="https://instagram.com/cabra_labs"
                target="_blank"
                rel="noopener"
                aria-label="Instagram @cabra_labs"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0f2e2c] border border-emerald-400/40 shadow-[0_0_15px_-2px_rgba(16,185,129,0.25)] hover:scale-105 transition-transform duration-200"
              >
                <img src="${j}" alt="Instagram @cabra.labs" class="w-5 h-5" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>

          <div>
            <p class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Agentes</p>
            <ul class="space-y-1 text-xs text-slate-400">
              <li><a href="/gala.html" class="hover:text-emerald-200 transition-colors">Gala · Estrategia &amp; Funnels</a></li>
              <li><a href="/bruno.html" class="hover:text-emerald-200 transition-colors">Bruno · Soporte &amp; Bots</a></li>
              <li><a href="/nia.html" class="hover:text-emerald-200 transition-colors">Nia · CRM &amp; Seguimiento</a></li>
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

    <!-- ✅ MODAL ÉXITO -->
    <div id="cabra-modal" class="cabra-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="cabra-modal-h1">
      <div class="cabra-modal" role="document">
        <div class="cabra-modal-top">
          <button id="cabra-modal-x" class="cabra-modal-close" aria-label="Cerrar">✕</button>
          <div class="cabra-modal-title">
            <span style="font-size:18px">✅</span>
            <span>Briefing recibido</span>
          </div>
        </div>
        <div class="cabra-modal-body">
          <div id="cabra-modal-h1" class="cabra-modal-h1">¡Listo! Nia ya tiene tu info.</div>
          <div id="cabra-modal-msg" class="cabra-modal-p">
            Recibimos tu briefing. En breve te contactamos con los próximos pasos y la propuesta.
          </div>
          <div class="cabra-modal-actions">
            <button id="cabra-modal-ok" class="cabra-btn">Perfecto <span>↗</span></button>
            <button id="cabra-modal-close" class="cabra-btn cabra-btn-ghost">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ TOAST ERROR -->
    <div id="cabra-toast" class="cabra-toast" role="status" aria-live="polite">
      <div class="cabra-toast-top">
        <div class="cabra-toast-title">
          <span style="font-size:16px">⚠️</span>
          <span>No se pudo enviar</span>
        </div>
        <button id="cabra-toast-x" class="cabra-toast-x" aria-label="Cerrar">✕</button>
      </div>
      <div id="cabra-toast-msg" class="cabra-toast-body">
        Ocurrió un error. Intenta de nuevo.
      </div>
    </div>

  </div>
`;const P="https://cabralab.app.n8n.cloud/webhook/form-submission",M="cabra_labs_goat_2025_secure";async function $(e){const a=JSON.stringify({token:M,body:e}),s=await fetch(P,{method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:a}),o=await s.text();let t={};try{t=o?JSON.parse(o):{}}catch{t={raw:o}}if(!s.ok)throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.raw)||"Error enviando el formulario");return t}const l=h.querySelector("form");l&&l.addEventListener("submit",async e=>{var k;e.preventDefault();const a=i=>{var E,f,O;return((O=(f=(E=l.querySelector(`[name="${i}"]`))==null?void 0:E.value)==null?void 0:f.trim)==null?void 0:O.call(f))??""},s=Array.from(l.querySelectorAll('input[name="seguimientos"]:checked')).map(i=>i.value),o=((k=l.querySelector('input[name="plan"]:checked'))==null?void 0:k.value)??"",t=new URLSearchParams(window.location.search),c=Object.fromEntries(t.entries()),C=t.get("utm_source")||"",I=t.get("utm_medium")||"",N=t.get("utm_campaign")||"",_=t.get("utm_content")||"",q=t.get("utm_term")||"",d=a("proceso"),m=a("crm"),u=a("equipo"),b=a("etapas"),y=s.join(", "),x=a("sla"),g=a("objetivo"),p=o,w=[d?`Proceso: ${d}`:"",m?`CRM: ${m}`:"",u?`Equipo: ${u}`:"",b?`Etapas: ${b}`:"",s.length?`Seguimientos: ${y}`:"",x?`SLA respuesta: ${x}`:"",g?`Objetivo: ${g}`:"",p?`Plan sugerido: ${p}`:""].filter(Boolean).join(`
`),T={agent:"Nia",plan:p,name:a("nombre"),email:a("email"),phone:a("whatsapp"),company:"",website:a("url"),message:w,source_url:window.location.href,nombre:a("nombre"),need:w,budget:"",timeline:"",utm:c,utm_source:C,utm_medium:I,utm_campaign:N,utm_content:_,utm_term:q,nia_proceso:d,nia_crm:m,nia_equipo:u,nia_etapas:b,nia_seguimientos:y,nia_sla:x,nia_objetivo:g,nia_plan:p,nia:{proceso:d,crm:m,equipo:u,etapas:b,seguimientos:s.join(`
`),sla:x,objetivo:g,plan:p}},r=l.querySelector('button[type="submit"]'),z=(r==null?void 0:r.textContent)??"";try{r&&(r.disabled=!0,r.textContent="Enviando…");const i=await $(T);B((i==null?void 0:i.message)||"✅ Recibimos tu información. Te contactaremos pronto."),l.reset()}catch(i){console.error(i),D("❌ No se pudo enviar. Revisa tu conexión e intenta de nuevo.")}finally{r&&(r.disabled=!1,r.textContent=z)}});let S=!1,n;function B(e){const a=document.getElementById("cabra-modal"),s=document.getElementById("cabra-modal-msg");s&&(s.textContent=e),a==null||a.classList.add("is-open"),H()}function F(){var e;(e=document.getElementById("cabra-modal"))==null||e.classList.remove("is-open")}function H(){if(S)return;S=!0;const e=document.getElementById("cabra-modal"),a=document.getElementById("cabra-modal-ok"),s=document.getElementById("cabra-modal-close"),o=document.getElementById("cabra-modal-x"),t=()=>F();a==null||a.addEventListener("click",t),s==null||s.addEventListener("click",t),o==null||o.addEventListener("click",t),e==null||e.addEventListener("click",c=>{c.target===e&&t()}),window.addEventListener("keydown",c=>{c.key==="Escape"&&(t(),v())})}function D(e){const a=document.getElementById("cabra-toast"),s=document.getElementById("cabra-toast-msg");s&&(s.textContent=e),a==null||a.classList.add("is-open");const o=document.getElementById("cabra-toast-x");o==null||o.addEventListener("click",v),n&&window.clearTimeout(n),n=window.setTimeout(()=>v(),5e3)}function v(){const e=document.getElementById("cabra-toast");e==null||e.classList.remove("is-open"),n&&window.clearTimeout(n),n=void 0}
