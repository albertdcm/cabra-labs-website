import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontró el elemento #app");
}

app.innerHTML = `
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <!-- NAVBAR -->
    <header class="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav class="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <div class="flex items-center gap-2">
          <span
            class="inline-flex h-9 w-9 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 items-center justify-center text-xl"
          >
            🐐
          </span>
          <span class="font-semibold tracking-tight">Cabra Labs</span>
        </div>

        <div class="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#agentes" class="hover:text-white transition-colors">Agentes</a>
          <a href="#integraciones" class="hover:text-white transition-colors">Integraciones</a>
          <a href="#sobre" class="hover:text-white transition-colors">Inteligencia Operativa</a>
        </div>

        <a
          href="#contacto"
          class="text-sm font-medium rounded-full px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 transition-colors"
        >
          Agenda una llamada
        </a>
      </nav>
    </header>

    <!-- CONTENIDO PRINCIPAL -->
    <main class="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-16 space-y-16">
      <!-- HERO -->
      <section
        class="grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] items-center"
      >
        <!-- Hero copy -->
        <div class="space-y-6">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Agentes de IA que venden y automatizan por ti
          </div>

          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
              La <span class="text-gradient-emerald">empresa GOAT</span> de agentes
              y automatizaciones para tu negocio.
            </h1>
            <p class="text-slate-300 text-sm md:text-base max-w-xl">
              Construimos, crecemos y escalamos tu operación con un equipo de agentes,
              bots y funnels que trabajan 24/7 sobre tus canales y herramientas favoritas.
            </p>
          </div>

          <!-- CTA + pequeña nota -->
          <div
            class="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
          >
            <a
              href="#contacto"
              class="rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-sm font-semibold px-6 py-2.5 transition-colors"
            >
              Diseñar mi equipo GOAT
            </a>
            <p class="text-xs text-slate-400">
              Sin compromiso · Diagnóstico inicial de tu flujo actual.
            </p>
          </div>

          <!-- Métricas -->
          <div class="grid gap-4 sm:grid-cols-4 text-sm">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-2xl font-semibold">+300</p>
              <p class="text-xs text-slate-300">empresas potenciadas</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-2xl font-semibold">+9M</p>
              <p class="text-xs text-slate-300">interacciones gestionadas</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-2xl font-semibold">+$30M</p>
              <p class="text-xs text-slate-300">en ingresos asistidos</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-2xl font-semibold">+39%</p>
              <p class="text-xs text-slate-300">crecimiento anual promedio</p>
            </div>
          </div>
        </div>

        <!-- Card lateral / mock de equipo -->
        <aside class="relative float-soft">
          <div class="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl"></div>
          <div class="relative card-soft p-5 space-y-4">
            <p
              class="text-xs font-medium text-emerald-300 uppercase tracking-[0.2em]"
            >
              Equipo GOAT
            </p>

            <div class="space-y-3 text-sm">
              <p class="text-slate-200">
                Diseñamos un stack de agentes hecho a la medida de tu operación:
                atención, ventas, cobranza y backoffice conectados entre sí.
              </p>
              <ul
                class="list-disc list-inside text-slate-300 text-xs space-y-1"
              >
                <li>Bots multicanal en WhatsApp, Instagram, web y más.</li>
                <li>Integraciones con CRMs, pasarelas de pago y ERPs.</li>
                <li>Reportes y tableros con los números que realmente importan.</li>
              </ul>
            </div>

            <div class="flex -space-x-2">
              <span
                class="h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-lg"
                >🐐</span
              >
              <span
                class="h-8 w-8 rounded-full bg-sky-500/20 border border-sky-400/60 flex items-center justify-center text-lg"
                >🤖</span
              >
              <span
                class="h-8 w-8 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/60 flex items-center justify-center text-lg"
                >📈</span
              >
            </div>

            <p class="text-[11px] text-slate-400">
              Cabra Labs se integra con tus sistemas actuales para que no tengas que
              reinventar toda tu operación.
            </p>
          </div>
        </aside>
      </section>

      <!-- QUIÉNES SOMOS -->
      <section
        id="sobre"
        class="grid gap-8 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] items-start"
      >
        <div class="space-y-4">
          <h2 class="text-2xl md:text-3xl font-semibold">¿Quiénes somos?</h2>
          <p class="text-sm md:text-base text-slate-300">
            Cabra Labs es un estudio de automatización y agentes de inteligencia
            artificial especializado en operaciones y crecimiento de negocios.
          </p>
          <p class="text-sm md:text-base text-slate-300">
            Diseñamos soluciones que optimizan procesos, liberan horas operativas y
            aumentan la conversión en cada etapa del funnel. Nuestro enfoque es que tu
            empresa tenga un equipo de asistentes virtuales trabajando como si fueran
            parte de tu staff.
          </p>
        </div>

        <div class="grid gap-3 text-xs text-slate-300">
          <div class="card-soft p-4">
            <p class="font-semibold text-slate-100 mb-1">
              Inteligencia Operativa
            </p>
            <p>
              Entendemos tus procesos actuales, detectamos cuellos de botella y los
              traducimos en agentes y flujos automatizados.
            </p>
          </div>
          <div class="card-soft p-4">
            <p class="font-semibold text-slate-100 mb-1">
              Implementación “done with you”
            </p>
            <p>
              No solo entregamos bots: te acompañamos en la implementación, medición y
              mejora continua.
            </p>
          </div>
        </div>
      </section>

      <!-- ALIADOS COMERCIALES -->
      <section class="space-y-4">
        <h2 class="text-xl md:text-2xl font-semibold">Nuestros aliados comerciales</h2>
        <p class="text-sm text-slate-300 max-w-2xl">
          Trabajamos sobre ecosistemas líderes para que tus agentes GOAT se conecten
          con lo que ya usas hoy: CRMs, pasarelas de pago, herramientas de marketing y
          más.
        </p>

        <div
          class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-3 text-[11px] text-slate-300"
        >
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Meta
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Google
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Microsoft
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Stripe
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            WhatsApp API
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Kommo
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Shopify
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            WordPress
          </div>
        </div>
      </section>

      <!-- AGENTES GOAT -->
      <section id="agentes" class="space-y-6">
        <div class="flex items-center justify-between gap-4">
          <div>
            <h2 class="text-xl md:text-2xl font-semibold">
              Conoce a nuestros agentes GOAT
            </h2>
            <p class="text-sm text-slate-300">
              Cada agente está diseñado para liderar una parte crítica de tu operación.
            </p>
          </div>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <!-- Gala -->
          <article class="card-soft p-5 flex flex-col justify-between">
            <div class="space-y-2">
              <h3 class="text-lg font-semibold">Gala · Estrategia & Funnels</h3>
              <p class="text-xs text-slate-300">
                Desde $450 setup · planes mensuales según complejidad.
              </p>
              <ul
                class="mt-2 text-xs text-slate-300 space-y-1 list-disc list-inside"
              >
                <li>Mapea tu oferta, productos y recorridos de cliente.</li>
                <li>Diseña funnels automatizados de captación y nurturing.</li>
                <li>Define triggers, segmentación y journeys multicanal.</li>
              </ul>
            </div>
            <a
              href="#contacto"
              class="mt-4 text-xs font-medium text-emerald-300 hover:text-emerald-200"
            >
              Diseñar mi funnel con Gala →
            </a>
          </article>

          <!-- Bruno -->
          <article class="card-soft p-5 flex flex-col justify-between">
            <div class="space-y-2">
              <h3 class="text-lg font-semibold">Bruno · Soporte & Bots</h3>
              <p class="text-xs text-slate-300">
                Desde $250/mes · instalación única.
              </p>
              <ul
                class="mt-2 text-xs text-slate-300 space-y-1 list-disc list-inside"
              >
                <li>Responde WhatsApp, Instagram y web 24/7.</li>
                <li>Gestiona FAQs, estado de pedidos, tickets y reclamaciones.</li>
                <li>Derivación inteligente a humanos cuando importa.</li>
              </ul>
            </div>
            <a
              href="#contacto"
              class="mt-4 text-xs font-medium text-emerald-300 hover:text-emerald-200"
            >
              Ver demo de Bruno →
            </a>
          </article>

          <!-- Nia -->
          <article class="card-soft p-5 flex flex-col justify-between">
            <div class="space-y-2">
              <h3 class="text-lg font-semibold">Nia · CRM & Seguimiento</h3>
              <p class="text-xs text-slate-300">
                Desde $300/mes · ideal para equipos comerciales.
              </p>
              <ul
                class="mt-2 text-xs text-slate-300 space-y-1 list-disc list-inside"
              >
                <li>Seguimiento automático de leads calientes y fríos.</li>
                <li>Recordatorios, agendas y retargeting sobre tu CRM.</li>
                <li>Reportes de conversión y forecast de oportunidades.</li>
              </ul>
            </div>
            <a
              href="#contacto"
              class="mt-4 text-xs font-medium text-emerald-300 hover:text-emerald-200"
            >
              Activar a Nia en mi operación →
            </a>
          </article>
        </div>
      </section>

      <!-- INTEGRACIONES -->
      <section id="integraciones" class="space-y-4">
        <h2 class="text-xl md:text-2xl font-semibold">
          Nos integramos con tus herramientas favoritas
        </h2>
        <p class="text-sm text-slate-300 max-w-2xl">
          Conectamos tus agentes GOAT con CRMs, ERPs, pasarelas de pago, tiendas en
          línea y herramientas de productividad. Si no ves tu herramienta, probablemente
          igual podamos conectarnos.
        </p>

        <div
          class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-3 text-[11px] text-slate-300"
        >
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            BNC
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Bancamiga
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Stripe
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            PayPal
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Kommo
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Odoo
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            Shopify
          </div>
          <div class="card-soft py-2 px-3 flex items-center justify-center">
            WooCommerce
          </div>
        </div>
      </section>

      <!-- SIEMPRE TRABAJANDO -->
      <section class="grid gap-8 md:grid-cols-2 items-center">
        <div class="space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">
            Un compañero que siempre está trabajando
          </h2>
          <p class="text-sm text-slate-300">
            Tus agentes GOAT están disponibles 24/7. Captan leads mientras duermes,
            atienden clientes cuando tu equipo está desconectado y mantienen tus
            procesos corriendo incluso en horas pico.
          </p>
          <p class="text-sm text-slate-300">
            Nuestro trabajo es que tu negocio no dependa solo de disponibilidad humana
            para seguir creciendo.
          </p>
        </div>

        <div class="card-soft p-6 space-y-3 pulse-soft">
          <p
            class="text-xs font-medium text-emerald-300 uppercase tracking-[0.2em]"
          >
            Cabra Labs
          </p>
          <p class="text-sm text-slate-200">
            La primera empresa enfocada en crear equipos GOAT de agentes de
            inteligencia artificial para operaciones en Latinoamérica.
          </p>
          <p class="text-xs text-slate-400">
            Diseñamos, implementamos y medimos, para que puedas ver el impacto directo
            en tu facturación y en las horas que recuperas cada mes.
          </p>
        </div>
      </section>

      <!-- CONTACTO / CTA FINAL -->
      <section
        id="contacto"
        class="space-y-4 border-t border-white/10 pt-10 mt-6"
      >
        <h2 class="text-xl md:text-2xl font-semibold">
          Listo para diseñar tu equipo GOAT
        </h2>
        <p class="text-sm text-slate-300 max-w-2xl">
          Cuéntanos brevemente sobre tu negocio, tus canales principales y qué parte de
          tu operación quieres automatizar. Te proponemos una arquitectura de agentes,
          integraciones y métricas a seguir.
        </p>
        <a
          href="https://wa.me/XXXXXXXXXXX"
          target="_blank"
          class="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-sm font-semibold px-6 py-2.5 transition-colors"
        >
          Hablar con Cabra Labs por WhatsApp
          <span>↗</span>
        </a>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="border-t border-white/10 mt-8">
      <div
        class="max-w-6xl mx-auto px-4 md:px-0 py-10 grid gap-8 md:grid-cols-4 text-sm"
      >
        <div class="space-y-2">
          <p class="font-semibold">Cabra Labs</p>
          <p class="text-xs text-slate-400">
            Creamos tu equipo de agentes y automatizaciones GOAT para que tu negocio
            funcione incluso cuando tú no estás.
          </p>
        </div>

        <div>
          <p
            class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide"
          >
            Agentes
          </p>
          <ul class="space-y-1 text-xs text-slate-400">
            <li>Gala · Estrategia & Funnels</li>
            <li>Bruno · Soporte & Bots</li>
            <li>Nia · CRM & Seguimiento</li>
          </ul>
        </div>

        <div>
          <p
            class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide"
          >
            Demos
          </p>
          <ul class="space-y-1 text-xs text-slate-400">
            <li>Retail & e-commerce</li>
            <li>Servicios y consultoría</li>
            <li>Restaurantes & reservas</li>
          </ul>
        </div>

        <div>
          <p
            class="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide"
          >
            Soporte
          </p>
          <ul class="space-y-1 text-xs text-slate-400">
            <li>Contacto</li>
            <li>Preguntas frecuentes</li>
            <li>Planes y precios</li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-white/10 text-[11px] text-slate-500 py-4 text-center"
      >
        © 2025 Cabra Labs. All rights reserved.
      </div>
    </footer>
  </div>
`;

