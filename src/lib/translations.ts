export type Language = "en" | "es" | "pt";

export const translations = {
  en: {
    navbar: {
      services: "Services",
      whatsIncluded: "What's Included",
      portfolio: "Portfolio",
      about: "About",
      payments: "Payments",
      contact: "Contact",
      bookConsult: "Book a Consult",
    },
    hero: {
      tagline: "Thoughtful Design. Timeless Spaces.",
      h1Line1: "Orlando's Premier Kitchen,",
      h1Line2: "Bathroom & Floor Remodeling",
      body: "Luxury renovations for Orange County homeowners. Licensed, insured, and delivered on time.",
      cta1: "Get Your Free Estimate",
      cta2: "Call (689) 278-5555",
      paymentBadges: ["Credit Card", "Stripe", "Square", "Financing 0%", "₿ Crypto Accepted"],
      scroll: "Scroll",
    },
    services: {
      sectionLabel: "What We Offer",
      h2: "Our Services",
      subtitle:
        "Every project is approached with the same dedication to craft, detail, and the lives of the people who inhabit the space.",
      items: [
        {
          title: "Complete Kitchen Remodel",
          description:
            "Full kitchen renovation from demo to final install — cabinets, countertops, flooring, backsplash, and fixtures. We handle design, permits, and construction in Orange County, FL.",
        },
        {
          title: "Luxury Bathroom Renovation",
          description:
            "Complete bathroom remodel including tile, vanity, shower, lighting, and plumbing. We transform outdated bathrooms into spa-quality spaces.",
        },
        {
          title: "Design Consultation",
          description:
            "Meet with our designers to create your vision — mood boards, 3D renderings, material selections, and a detailed project estimate. In-home or virtual.",
        },
        {
          title: "Hardwood & Luxury Vinyl Flooring",
          description:
            "Installation of hardwood, luxury vinyl plank, and tile flooring across Orange County. Quality materials, licensed installation, and flawless results.",
        },
      ],
    },
    whatsIncluded: {
      sectionLabel: "Full Service",
      h2: "Everything Included",
      subtitle:
        "From the first sketch to the final detail — we handle every step so you can focus on enjoying your new space.",
      cta: "Get Your Free Estimate",
      items: [
        {
          icon: "✏️",
          title: "Professional Designer",
          description:
            "Work one-on-one with a certified interior designer dedicated to your project from start to finish.",
        },
        {
          icon: "📐",
          title: "3D Floor Plan Renderings",
          description:
            "See exactly how your space will look before any work begins — detailed 3D visualizations of your project.",
        },
        {
          icon: "🎨",
          title: "Custom Color Palettes",
          description:
            "Curated color combinations for walls, finishes, and accents tailored to your style and natural light.",
        },
        {
          icon: "🚪",
          title: "Cabinet Color Guidance",
          description:
            "Expert recommendations on cabinet colors, hardware finishes, and combinations that elevate your kitchen or bathroom.",
        },
        {
          icon: "🛒",
          title: "Sourcing Guidance",
          description:
            "We guide you on where to buy floors, cabinets, and materials — the best quality for your budget.",
        },
        {
          icon: "🏗️",
          title: "Demolition & Cleanup",
          description:
            "Full demolition service and debris removal included — we leave your space clean and ready for installation.",
        },
        {
          icon: "📋",
          title: "City Permits",
          description:
            "We handle all permit applications and approvals with the city so you don't have to worry about compliance.",
        },
        {
          icon: "💬",
          title: "Free Estimates",
          description:
            "No-cost consultations and project estimates — know exactly what to expect before committing to anything.",
        },
      ],
    },
    portfolio: {
      sectionLabel: "Our Work",
      h2: "Selected Projects",
      cta: "Start Your Project",
      categories: ["All", "Kitchens", "Bathrooms", "Floors"],
      projectTitles: {
        "Modern Kitchen": "Modern Kitchen",
        "Classic Kitchen": "Classic Kitchen",
        "Contemporary Kitchen": "Contemporary Kitchen",
        "Luxury Kitchen": "Luxury Kitchen",
        "Open Kitchen": "Open Kitchen",
        "Designer Kitchen": "Designer Kitchen",
        "Elegant Kitchen": "Elegant Kitchen",
        "Minimalist Kitchen": "Minimalist Kitchen",
        "Bespoke Kitchen": "Bespoke Kitchen",
        "Premium Kitchen": "Premium Kitchen",
        "Studio Kitchen": "Studio Kitchen",
        "Spa Bathroom": "Spa Bathroom",
        "Modern Bathroom": "Modern Bathroom",
        "Luxury Bathroom": "Luxury Bathroom",
        "Classic Bathroom": "Classic Bathroom",
        "Designer Bathroom": "Designer Bathroom",
        "Elegant Bathroom": "Elegant Bathroom",
        "Suite Bathroom": "Suite Bathroom",
        "Minimalist Bathroom": "Minimalist Bathroom",
        "Hardwood Floor": "Hardwood Floor",
        "Marble Floor": "Marble Floor",
        "Tile Floor": "Tile Floor",
        "Designer Floor": "Designer Floor",
        "Luxury Floor": "Luxury Floor",
        "Pattern Floor": "Pattern Floor",
        "Natural Floor": "Natural Floor",
        "Premium Floor": "Premium Floor",
      },
    },
    about: {
      sectionLabel: "Our Story",
      h2Line1: "Design That Honors",
      h2Line2: "How You Live",
      para1:
        "Ixora Living was founded on a simple belief: a beautifully designed space has the power to improve the quality of everyday life. We combine classical principles of proportion and materiality with a deeply personal understanding of each client's world.",
      para2:
        "Our team of designers, artisans, and project managers collaborate across disciplines to bring interiors that are both functional and deeply considered — spaces where living feels effortless.",
      stats: [
        { value: "12+", label: "Years of Experience" },
        { value: "200+", label: "Projects Completed" },
        { value: "18", label: "Countries Served" },
        { value: "4", label: "Design Awards" },
      ],
    },
    payments: {
      sectionLabel: "Flexible Options",
      h2: "We Accept All Payments",
      subtitle:
        "We make it easy to invest in your dream space. Choose the payment method that works best for you — including cryptocurrency.",
      cryptoLabel: "Crypto Accepted",
      cryptoH3Line1: "We Speak",
      cryptoH3Line2: "Blockchain",
      cryptoDesc:
        "Pay for your interior design project with cryptocurrency. Fast, secure, and borderless — perfect for our international clients.",
      financingLabel: "Special Offer",
      financingH3: "0% Interest Financing Available",
      financingDesc:
        "Start your project today with flexible monthly payments. Subject to approval. Ask us about our financing options during your consultation.",
      financingCta: "Ask About Financing",
      paymentMethods: [
        {
          category: "Credit & Debit Cards",
          icon: "💳",
          items: ["Visa", "Mastercard", "American Express", "Discover"],
        },
        {
          category: "Digital Payments",
          icon: "⚡",
          items: ["Stripe", "Square", "Apple Pay", "Google Pay"],
        },
        {
          category: "Financing Available",
          icon: "🏦",
          items: ["0% Interest Plans", "Monthly Installments", "Flexible Terms", "Quick Approval"],
        },
        {
          category: "Traditional",
          icon: "🖊️",
          items: ["Personal Check", "Bank Transfer", "Wire Transfer", "Zelle"],
        },
      ],
    },
    contact: {
      sectionLabel: "Let's Work Together",
      h2Line1: "Begin Your",
      h2Line2: "Design Journey",
      body: "Whether you have a clear vision or you're just beginning to imagine your dream space, we'd love to hear from you. Book a complimentary 30-minute consultation to get started.",
      emailLabel: "Email",
      studioLabel: "Studio",
      hoursLabel: "Hours",
      hoursValue: "Monday – Saturday, 8am – 6pm EST",
      nameLabel: "Your Name",
      emailFieldLabel: "Email Address",
      phoneLabel: "Phone Number",
      zipLabel: "Zip Code",
      serviceLabel: "Service",
      selectPlaceholder: "Select a service",
      serviceOptions: [
        { value: "kitchen-remodel", label: "Complete Kitchen Remodel" },
        { value: "bathroom-renovation", label: "Luxury Bathroom Renovation" },
        { value: "design-consultation", label: "Design Consultation" },
        { value: "flooring", label: "Hardwood & Luxury Vinyl Flooring" },
      ],
      budgetLabel: "Project Budget",
      budgetOptions: [
        { value: "under-10k", label: "Under $10k" },
        { value: "10k-25k", label: "$10k – $25k" },
        { value: "25k-50k", label: "$25k – $50k" },
        { value: "50k-plus", label: "$50k+" },
      ],
      messageLabel: "Tell Us About Your Project",
      messagePlaceholder: "Describe your space, style preferences, timeline...",
      submitButton: "Request My Free Estimate",
      thankYouTitle: "Thank You",
      thankYouSubtitle: "We'll be in touch within 24 hours to arrange your consultation.",
    },
    footer: {
      tagline: "Crafting timeless interiors for the way you live.",
      groups: {
        Company: { label: "Company", links: ["About", "Services", "Portfolio", "Contact"] },
        Services: {
          label: "Services",
          links: ["Full Interior Design", "Room Refresh", "E-Design", "Bespoke"],
        },
        Follow: { label: "Follow", links: ["Instagram", "Pinterest", "LinkedIn", "Houzz"] },
      },
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      allRightsReserved: "All rights reserved.",
    },
  },

  es: {
    navbar: {
      services: "Servicios",
      whatsIncluded: "Qué Incluimos",
      portfolio: "Portafolio",
      about: "Nosotros",
      payments: "Pagos",
      contact: "Contacto",
      bookConsult: "Agendar Consulta",
    },
    hero: {
      tagline: "Diseño Consciente. Espacios Eternos.",
      h1Line1: "Lo Mejor en Cocinas,",
      h1Line2: "Baños y Pisos en Orlando",
      body: "Renovaciones de lujo para propietarios en el Condado de Orange. Licenciados, asegurados y entregados a tiempo.",
      cta1: "Obtén Tu Presupuesto Gratis",
      cta2: "Llama al (689) 278-5555",
      paymentBadges: ["Tarjeta de Crédito", "Stripe", "Square", "Financiamiento 0%", "₿ Crypto Aceptado"],
      scroll: "Scroll",
    },
    services: {
      sectionLabel: "Lo Que Ofrecemos",
      h2: "Nuestros Servicios",
      subtitle:
        "Cada proyecto se aborda con la misma dedicación al oficio, el detalle y las vidas de quienes habitan el espacio.",
      items: [
        {
          title: "Remodelación Completa de Cocina",
          description:
            "Renovación completa de cocina desde la demolición hasta la instalación final — gabinetes, encimeras, pisos, backsplash y accesorios. Diseño, permisos y construcción en Orange County, FL.",
        },
        {
          title: "Renovación de Baño de Lujo",
          description:
            "Remodelación completa de baño incluyendo azulejos, tocador, ducha, iluminación y plomería. Transformamos baños anticuados en espacios de spa.",
        },
        {
          title: "Consultoría de Diseño",
          description:
            "Reúnete con nuestros diseñadores para crear tu visión — mood boards, renderizaciones 3D, selección de materiales y presupuesto detallado. En casa o virtual.",
        },
        {
          title: "Pisos de Madera y Vinilo de Lujo",
          description:
            "Instalación de pisos de madera, vinilo de lujo y baldosas en todo Orange County. Materiales de calidad, instalación licenciada y resultados impecables.",
        },
      ],
    },
    whatsIncluded: {
      sectionLabel: "Servicio Completo",
      h2: "Todo Incluido",
      subtitle: "Desde el primer boceto hasta el último detalle — nosotros manejamos cada paso.",
      cta: "Obtén Tu Presupuesto Gratis",
      items: [
        {
          icon: "✏️",
          title: "Diseñador Profesional",
          description:
            "Trabaja uno a uno con un diseñador de interiores certificado dedicado a tu proyecto de principio a fin.",
        },
        {
          icon: "📐",
          title: "Renders de Planos 3D",
          description:
            "Visualiza exactamente cómo lucirá tu espacio antes de que comience el trabajo — renderizaciones 3D detalladas.",
        },
        {
          icon: "🎨",
          title: "Paletas de Colores Personalizadas",
          description:
            "Combinaciones de colores para paredes, acabados y acentos adaptados a tu estilo y luz natural.",
        },
        {
          icon: "🚪",
          title: "Asesoría de Colores para Gabinetes",
          description:
            "Recomendaciones expertas sobre colores de gabinetes, acabados de hardware y combinaciones que realzan tu cocina o baño.",
        },
        {
          icon: "🛒",
          title: "Guía de Compras",
          description:
            "Te orientamos sobre dónde comprar pisos, gabinetes y materiales — la mejor calidad para tu presupuesto.",
        },
        {
          icon: "🏗️",
          title: "Demolición y Limpieza",
          description:
            "Servicio completo de demolición y retiro de escombros incluido — dejamos tu espacio limpio y listo para la instalación.",
        },
        {
          icon: "📋",
          title: "Permisos Municipales",
          description:
            "Gestionamos todas las solicitudes y aprobaciones de permisos con la ciudad para que no te preocupes por el cumplimiento.",
        },
        {
          icon: "💬",
          title: "Presupuestos Gratis",
          description:
            "Consultas y presupuestos de proyecto sin costo — sabe exactamente qué esperar antes de comprometerte.",
        },
      ],
    },
    portfolio: {
      sectionLabel: "Nuestro Trabajo",
      h2: "Proyectos Seleccionados",
      cta: "Inicia Tu Proyecto",
      categories: ["Todos", "Cocinas", "Baños", "Pisos"],
      projectTitles: {
        "Modern Kitchen": "Cocina Moderna",
        "Classic Kitchen": "Cocina Clásica",
        "Contemporary Kitchen": "Cocina Contemporánea",
        "Luxury Kitchen": "Cocina de Lujo",
        "Open Kitchen": "Cocina Abierta",
        "Designer Kitchen": "Cocina de Diseño",
        "Elegant Kitchen": "Cocina Elegante",
        "Minimalist Kitchen": "Cocina Minimalista",
        "Bespoke Kitchen": "Cocina a Medida",
        "Premium Kitchen": "Cocina Premium",
        "Studio Kitchen": "Cocina Estudio",
        "Spa Bathroom": "Baño Spa",
        "Modern Bathroom": "Baño Moderno",
        "Luxury Bathroom": "Baño de Lujo",
        "Classic Bathroom": "Baño Clásico",
        "Designer Bathroom": "Baño de Diseño",
        "Elegant Bathroom": "Baño Elegante",
        "Suite Bathroom": "Baño Suite",
        "Minimalist Bathroom": "Baño Minimalista",
        "Hardwood Floor": "Piso de Madera",
        "Marble Floor": "Piso de Mármol",
        "Tile Floor": "Piso de Baldosa",
        "Designer Floor": "Piso de Diseño",
        "Luxury Floor": "Piso de Lujo",
        "Pattern Floor": "Piso con Patrón",
        "Natural Floor": "Piso Natural",
        "Premium Floor": "Piso Premium",
      },
    },
    about: {
      sectionLabel: "Nuestra Historia",
      h2Line1: "Diseño que Honra",
      h2Line2: "tu Forma de Vivir",
      para1:
        "Ixora Living fue fundada en una simple creencia: un espacio bellamente diseñado tiene el poder de mejorar la calidad de vida cotidiana. Combinamos principios clásicos de proporción y materialidad con una comprensión profundamente personal del mundo de cada cliente.",
      para2:
        "Nuestro equipo de diseñadores, artesanos y gerentes de proyecto colaboran para crear interiores funcionales y profundamente considerados — espacios donde vivir se siente sin esfuerzo.",
      stats: [
        { value: "12+", label: "Años de Experiencia" },
        { value: "200+", label: "Proyectos Completados" },
        { value: "18", label: "Países Atendidos" },
        { value: "4", label: "Premios de Diseño" },
      ],
    },
    payments: {
      sectionLabel: "Opciones Flexibles",
      h2: "Aceptamos Todos los Pagos",
      subtitle:
        "Hacemos fácil invertir en tu espacio ideal. Elige el método de pago que mejor te funcione — incluyendo criptomonedas.",
      cryptoLabel: "Crypto Aceptado",
      cryptoH3Line1: "Hablamos",
      cryptoH3Line2: "Blockchain",
      cryptoDesc:
        "Paga tu proyecto de diseño de interiores con criptomonedas. Rápido, seguro y sin fronteras — perfecto para nuestros clientes internacionales.",
      financingLabel: "Oferta Especial",
      financingH3: "Financiamiento al 0% de Interés",
      financingDesc:
        "Comienza tu proyecto hoy con pagos mensuales flexibles. Sujeto a aprobación. Pregúntanos sobre nuestras opciones de financiamiento durante tu consulta.",
      financingCta: "Pregunta por Financiamiento",
      paymentMethods: [
        {
          category: "Tarjetas de Crédito y Débito",
          icon: "💳",
          items: ["Visa", "Mastercard", "American Express", "Discover"],
        },
        {
          category: "Pagos Digitales",
          icon: "⚡",
          items: ["Stripe", "Square", "Apple Pay", "Google Pay"],
        },
        {
          category: "Financiamiento Disponible",
          icon: "🏦",
          items: ["Planes al 0% de Interés", "Cuotas Mensuales", "Términos Flexibles", "Aprobación Rápida"],
        },
        {
          category: "Tradicional",
          icon: "🖊️",
          items: ["Cheque Personal", "Transferencia Bancaria", "Transferencia Internacional", "Zelle"],
        },
      ],
    },
    contact: {
      sectionLabel: "Trabajemos Juntos",
      h2Line1: "Comienza Tu",
      h2Line2: "Viaje de Diseño",
      body: "Tengas una visión clara o estés apenas imaginando tu espacio ideal, nos encantaría saber de ti. Agenda una consulta gratuita de 30 minutos para comenzar.",
      emailLabel: "Email",
      studioLabel: "Estudio",
      hoursLabel: "Horario",
      hoursValue: "Lunes – Sábado, 8am – 6pm EST",
      nameLabel: "Tu Nombre",
      emailFieldLabel: "Correo Electrónico",
      phoneLabel: "Número de Teléfono",
      zipLabel: "Código Postal",
      serviceLabel: "Servicio",
      selectPlaceholder: "Selecciona un servicio",
      serviceOptions: [
        { value: "kitchen-remodel", label: "Remodelación Completa de Cocina" },
        { value: "bathroom-renovation", label: "Renovación de Baño de Lujo" },
        { value: "design-consultation", label: "Consultoría de Diseño" },
        { value: "flooring", label: "Pisos de Madera y Vinilo de Lujo" },
      ],
      budgetLabel: "Presupuesto del Proyecto",
      budgetOptions: [
        { value: "under-10k", label: "Menos de $10k" },
        { value: "10k-25k", label: "$10k – $25k" },
        { value: "25k-50k", label: "$25k – $50k" },
        { value: "50k-plus", label: "$50k+" },
      ],
      messageLabel: "Cuéntanos Tu Proyecto",
      messagePlaceholder: "Describe tu espacio, preferencias de estilo, cronograma...",
      submitButton: "Solicita Tu Presupuesto Gratis",
      thankYouTitle: "Gracias",
      thankYouSubtitle: "Nos pondremos en contacto en menos de 24 horas para coordinar tu consulta.",
    },
    footer: {
      tagline: "Creando interiores atemporales para tu forma de vivir.",
      groups: {
        Company: { label: "Compañía", links: ["Nosotros", "Servicios", "Portafolio", "Contacto"] },
        Services: {
          label: "Servicios",
          links: ["Diseño de Interiores Completo", "Renovación de Ambientes", "E-Design", "A Medida"],
        },
        Follow: { label: "Síguenos", links: ["Instagram", "Pinterest", "LinkedIn", "Houzz"] },
      },
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      allRightsReserved: "Todos los derechos reservados.",
    },
  },

  pt: {
    navbar: {
      services: "Serviços",
      whatsIncluded: "O Que Incluímos",
      portfolio: "Portfólio",
      about: "Sobre Nós",
      payments: "Pagamentos",
      contact: "Contato",
      bookConsult: "Agendar Consulta",
    },
    hero: {
      tagline: "Design Consciente. Espaços Eternos.",
      h1Line1: "Os Melhores em Cozinhas,",
      h1Line2: "Banheiros e Pisos em Orlando",
      body: "Reformas de luxo para proprietários no Condado de Orange. Licenciados, segurados e entregues no prazo.",
      cta1: "Obtenha Seu Orçamento Gratuito",
      cta2: "Ligue (689) 278-5555",
      paymentBadges: ["Cartão de Crédito", "Stripe", "Square", "Financiamento 0%", "₿ Crypto Aceito"],
      scroll: "Scroll",
    },
    services: {
      sectionLabel: "O Que Oferecemos",
      h2: "Nossos Serviços",
      subtitle:
        "Cada projeto é abordado com a mesma dedicação ao ofício, ao detalhe e às vidas das pessoas que habitam o espaço.",
      items: [
        {
          title: "Reforma Completa de Cozinha",
          description:
            "Renovação completa de cozinha da demolição à instalação final — armários, bancadas, pisos, backsplash e acessórios. Design, licenças e construção em Orange County, FL.",
        },
        {
          title: "Renovação de Banheiro de Luxo",
          description:
            "Reforma completa de banheiro incluindo azulejos, pia, chuveiro, iluminação e encanamento. Transformamos banheiros desatualizados em espaços de spa.",
        },
        {
          title: "Consultoria de Design",
          description:
            "Encontre-se com nossos designers para criar sua visão — mood boards, renderizações 3D, seleção de materiais e orçamento detalhado. Presencial ou virtual.",
        },
        {
          title: "Pisos de Madeira e Vinil de Luxo",
          description:
            "Instalação de pisos de madeira, vinil de luxo e cerâmica em todo Orange County. Materiais de qualidade, instalação licenciada e resultados impecáveis.",
        },
      ],
    },
    whatsIncluded: {
      sectionLabel: "Serviço Completo",
      h2: "Tudo Incluído",
      subtitle: "Do primeiro esboço ao último detalhe — cuidamos de cada etapa.",
      cta: "Obtenha Seu Orçamento Gratuito",
      items: [
        {
          icon: "✏️",
          title: "Designer Profissional",
          description:
            "Trabalhe individualmente com um designer de interiores certificado dedicado ao seu projeto do início ao fim.",
        },
        {
          icon: "📐",
          title: "Renderizações de Planta 3D",
          description:
            "Veja exatamente como ficará seu espaço antes de qualquer trabalho começar — visualizações 3D detalhadas do projeto.",
        },
        {
          icon: "🎨",
          title: "Paletas de Cores Personalizadas",
          description:
            "Combinações de cores para paredes, acabamentos e detalhes adaptados ao seu estilo e iluminação natural.",
        },
        {
          icon: "🚪",
          title: "Orientação de Cores para Gabinetes",
          description:
            "Recomendações especializadas sobre cores de armários, acabamentos de ferragens e combinações que elevam sua cozinha ou banheiro.",
        },
        {
          icon: "🛒",
          title: "Orientação de Compras",
          description:
            "Orientamos você sobre onde comprar pisos, armários e materiais — a melhor qualidade para o seu orçamento.",
        },
        {
          icon: "🏗️",
          title: "Demolição e Limpeza",
          description:
            "Serviço completo de demolição e remoção de entulho incluído — deixamos seu espaço limpo e pronto para instalação.",
        },
        {
          icon: "📋",
          title: "Licenças Municipais",
          description:
            "Cuidamos de todos os pedidos e aprovações de licenças junto à prefeitura para que você não precise se preocupar com a conformidade.",
        },
        {
          icon: "💬",
          title: "Orçamentos Gratuitos",
          description:
            "Consultas e orçamentos de projeto sem custo — saiba exatamente o que esperar antes de se comprometer.",
        },
      ],
    },
    portfolio: {
      sectionLabel: "Nosso Trabalho",
      h2: "Projetos Selecionados",
      cta: "Inicie Seu Projeto",
      categories: ["Todos", "Cozinhas", "Banheiros", "Pisos"],
      projectTitles: {
        "Modern Kitchen": "Cozinha Moderna",
        "Classic Kitchen": "Cozinha Clássica",
        "Contemporary Kitchen": "Cozinha Contemporânea",
        "Luxury Kitchen": "Cozinha de Luxo",
        "Open Kitchen": "Cozinha Aberta",
        "Designer Kitchen": "Cozinha Design",
        "Elegant Kitchen": "Cozinha Elegante",
        "Minimalist Kitchen": "Cozinha Minimalista",
        "Bespoke Kitchen": "Cozinha Sob Medida",
        "Premium Kitchen": "Cozinha Premium",
        "Studio Kitchen": "Cozinha Estúdio",
        "Spa Bathroom": "Banheiro Spa",
        "Modern Bathroom": "Banheiro Moderno",
        "Luxury Bathroom": "Banheiro de Luxo",
        "Classic Bathroom": "Banheiro Clássico",
        "Designer Bathroom": "Banheiro Design",
        "Elegant Bathroom": "Banheiro Elegante",
        "Suite Bathroom": "Banheiro Suíte",
        "Minimalist Bathroom": "Banheiro Minimalista",
        "Hardwood Floor": "Piso de Madeira",
        "Marble Floor": "Piso de Mármore",
        "Tile Floor": "Piso de Cerâmica",
        "Designer Floor": "Piso Design",
        "Luxury Floor": "Piso de Luxo",
        "Pattern Floor": "Piso com Padrão",
        "Natural Floor": "Piso Natural",
        "Premium Floor": "Piso Premium",
      },
    },
    about: {
      sectionLabel: "Nossa História",
      h2Line1: "Design que Honra",
      h2Line2: "Seu Modo de Viver",
      para1:
        "A Ixora Living foi fundada em uma crença simples: um espaço lindamente projetado tem o poder de melhorar a qualidade de vida cotidiana. Combinamos princípios clássicos de proporção e materialidade com uma compreensão profundamente pessoal do mundo de cada cliente.",
      para2:
        "Nossa equipe de designers, artesãos e gerentes de projeto colabora para criar interiores funcionais e profundamente pensados — espaços onde viver parece sem esforço.",
      stats: [
        { value: "12+", label: "Anos de Experiência" },
        { value: "200+", label: "Projetos Concluídos" },
        { value: "18", label: "Países Atendidos" },
        { value: "4", label: "Prêmios de Design" },
      ],
    },
    payments: {
      sectionLabel: "Opções Flexíveis",
      h2: "Aceitamos Todos os Pagamentos",
      subtitle:
        "Facilitamos o investimento no seu espaço dos sonhos. Escolha o método de pagamento que funciona melhor para você — incluindo criptomoedas.",
      cryptoLabel: "Crypto Aceito",
      cryptoH3Line1: "Falamos",
      cryptoH3Line2: "Blockchain",
      cryptoDesc:
        "Pague seu projeto de design de interiores com criptomoeda. Rápido, seguro e sem fronteiras — perfeito para nossos clientes internacionais.",
      financingLabel: "Oferta Especial",
      financingH3: "Financiamento com 0% de Juros",
      financingDesc:
        "Comece seu projeto hoje com pagamentos mensais flexíveis. Sujeito a aprovação. Pergunte sobre nossas opções de financiamento durante sua consulta.",
      financingCta: "Pergunte Sobre Financiamento",
      paymentMethods: [
        {
          category: "Cartões de Crédito e Débito",
          icon: "💳",
          items: ["Visa", "Mastercard", "American Express", "Discover"],
        },
        {
          category: "Pagamentos Digitais",
          icon: "⚡",
          items: ["Stripe", "Square", "Apple Pay", "Google Pay"],
        },
        {
          category: "Financiamento Disponível",
          icon: "🏦",
          items: ["Planos com 0% de Juros", "Parcelas Mensais", "Termos Flexíveis", "Aprovação Rápida"],
        },
        {
          category: "Tradicional",
          icon: "🖊️",
          items: ["Cheque Pessoal", "Transferência Bancária", "Transferência Internacional", "Zelle"],
        },
      ],
    },
    contact: {
      sectionLabel: "Vamos Trabalhar Juntos",
      h2Line1: "Comece Sua",
      h2Line2: "Jornada de Design",
      body: "Seja você alguém com uma visão clara ou que está apenas começando a imaginar seu espaço ideal, adoraríamos ouvir de você. Agende uma consulta gratuita de 30 minutos para começar.",
      emailLabel: "Email",
      studioLabel: "Estúdio",
      hoursLabel: "Horário",
      hoursValue: "Segunda – Sábado, 8h – 18h EST",
      nameLabel: "Seu Nome",
      emailFieldLabel: "Endereço de E-mail",
      phoneLabel: "Número de Telefone",
      zipLabel: "CEP",
      serviceLabel: "Serviço",
      selectPlaceholder: "Selecione um serviço",
      serviceOptions: [
        { value: "kitchen-remodel", label: "Reforma Completa de Cozinha" },
        { value: "bathroom-renovation", label: "Renovação de Banheiro de Luxo" },
        { value: "design-consultation", label: "Consultoria de Design" },
        { value: "flooring", label: "Pisos de Madeira e Vinil de Luxo" },
      ],
      budgetLabel: "Orçamento do Projeto",
      budgetOptions: [
        { value: "under-10k", label: "Menos de $10k" },
        { value: "10k-25k", label: "$10k – $25k" },
        { value: "25k-50k", label: "$25k – $50k" },
        { value: "50k-plus", label: "$50k+" },
      ],
      messageLabel: "Conte-nos Sobre Seu Projeto",
      messagePlaceholder: "Descreva seu espaço, preferências de estilo, prazo...",
      submitButton: "Solicite Seu Orçamento Gratuito",
      thankYouTitle: "Obrigado",
      thankYouSubtitle: "Entraremos em contato em até 24 horas para agendar sua consulta.",
    },
    footer: {
      tagline: "Criando interiores atemporais para o seu modo de viver.",
      groups: {
        Company: { label: "Empresa", links: ["Sobre Nós", "Serviços", "Portfólio", "Contato"] },
        Services: {
          label: "Serviços",
          links: ["Design de Interiores Completo", "Renovação de Ambientes", "E-Design", "Sob Medida"],
        },
        Follow: { label: "Siga-nos", links: ["Instagram", "Pinterest", "LinkedIn", "Houzz"] },
      },
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço",
      allRightsReserved: "Todos os direitos reservados.",
    },
  },
} as const;

// Widened type so all language objects are assignable
export type Translations = typeof translations[Language];
