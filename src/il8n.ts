import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones
const resources = {
  es: {
    translation: {
      nav: {
        howItWorks: "Cómo funciona",
        forDrivers: "Para conductores",
        support: "Soporte",
        login: "Iniciar sesión",
        createAccount: "Crear cuenta",
        search: "Buscar",
        enter: "Entrar",
      },
      home: {
        hero: {
          title:
            "Acceso simple al transporte local en destinos donde moverse no es tan simple.",
          description:
            "inDrov es una aplicación que centraliza el acceso al transporte local — taxis y opciones disponibles — para que turistas y residentes puedan moverse de forma simple, incluso en zonas sin paradas o transporte público.",
          downloadOn: "Descargar en",
          availableOn: "Disponible en",
          appStore: "App Store",
          googlePlay: "Google Play",
          downloadText:
            "Descarga la app disponible para usuarios y conductores.",
        },
        problems: {
          title: "Moverse no siempre es tan simple.",
          subtitle:
            "En ciudades, islas y zonas turísicas, encontrar transporte puede ser complicado.",
          point1: "Transporte público limitada o inexistente",
          point2: "Personas nuevas sin contactos ni números locales",
          point3: "Dificultad para moverse de noche o desde zonas alejadas",
          point4:
            "Conductores disponibles, pero sin conexión directa con usuarios",
          conclusion:
            "nace para conectar esas dos realidades, de forma simple.",
        },
        trust: {
          title1: "Primero incertidumbre.",
          title2: "Después confianza.",
        },
        cards: {
          card1: {
            title: "¿Por qué existe inDrov?",
            text1: "En muchos lugares, moverse no es tan simple.",
            text2:
              "El transporte público no llega a todos lados y no siempre hay opciones disponibles.",
          },
          card2: {
            title: "¿Para quién es?",
            text: "Pensado para turistas, residentes y conductores que buscan una forma más simple de conectarse y moverse.",
          },
          card3: {
            title: "¿Qué no somos?",
            text: "inDrov no es una empresa de transporte. Es una plataforma tecnológica que facilita la conexión entre usuarios y conductores independientes.",
          },
          card4: {
            title: "Nuestra visión",
            text1:
              "Creemos que la movilidad debería ser simple, accesible y humana.",
            text2: "Sin complicaciones innecesarias.",
          },
        },
        partners: {
          title: "En asociación con restaurantes, hoteles y marcas locales",
          subtitle:
            "Descubrí lugares y empresas cerca de vos gracias a inDrov.",
          restaurant: "Restaurante",
          hotel: "LOGO HOTEL",
          company: "EMPRESA",
          web: "Web",
          localBrand: "Marca Local",
          commerce: "Logo Comercio",
          yourLogo: "Tu Logo",
          here: "Aquí",
          viewMore: "Ver más socios",
        },
        footer: {
          information: "Información",
          howItWorks: "Cómo funciona",
          forDrivers: "Para conductores",
          faq: "Preguntas frecuentes",
          support: "Soporte",
          helpCenter: "Centro de ayuda",
          contact: "Contacto",
          legal: "Legal",
          terms: "Términos del Servicio",
          privacy: "Política de Privacidad",
          dataProcessing: "Tratamiento de datos",
          platformDescription: "Plataforma de intermediación",
          copyright: "© 2026 inDrov. Todos los derechos reservados.",
        },
      },
      legal: {
        header: {
          title: "Legal y Privacidad",
          subtitle:
            "Información legal, privacidad y condiciones de uso de la plataforma inDrov.",
        },
        tabs: {
          terms: "Términos del Servicio",
          privacy: "Política de Privacidad",
          dataProcessing: "Tratamiento de Datos",
          support: "Soporte",
        },
        lastUpdated: "Última actualización: Marzo 2026",
        backToHome: "Volver al inicio",

        terms: {
          title: "Términos del Servicio",
          section1: {
            title: "1. Naturaleza del Servicio",
            subtitle: "(Intermediación)",
            content: [
              "La Plataforma actúa exclusivamente como intermediaria tecnológica entre usuarios pasajeros y conductores independientes. No presta servicios de transporte.",
              "No emplea conductores ni garantiza la disponibilidad de los mismos.",
            ],
          },
          section2: {
            title: "2. Responsabilidad",
            content: [
              "La Plataforma no asume responsabilidad por incidentes, retrasos, cancelaciones, accidentes, conflictos, pérdidas o daños derivados de la relación entre usuario y conductor.",
            ],
          },
          section3: {
            title: "3. Conductores",
            content: [
              "Los conductores son responsables de cumplir con la normativa local vigente, incluyendo licencias, seguros y condiciones legales para operar.",
            ],
          },
          section4: {
            title: "4. Usuarios",
            content: [
              "Los usuarios aceptan que el uso de la Plataforma es bajo su propia responsabilidad. La Plataforma no verifica de forma exhaustiva la identidad o antecedentes de los conductores.",
            ],
          },
          section5: {
            title: "5. Pagos y Comisiones",
            content: [
              "Los pagos pueden realizarse en efectivo u otros métodos habilitados. La Plataforma puede cobrar comisiones por el uso del servicio.",
            ],
          },
          section6: {
            title: "6. Cancelaciones y Disponibilidad",
            content: [
              "La disponibilidad de conductores no está garantizada. La Plataforma no es responsable si no hay conductores disponibles.",
            ],
          },
          section7: {
            title: "7. Uso de Datos",
            content: [
              "La Plataforma recopila datos necesarios para el funcionamiento del servicio. Estos datos no serán vendidos a terceros.",
            ],
          },
          section8: {
            title: "8. Modificaciones",
            content: [
              "La Plataforma se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación.",
            ],
          },
          section9: {
            title: "9. Terminación",
            content: [
              "La Plataforma puede suspender o cancelar cuentas en caso de uso indebido.",
            ],
          },
          section10: {
            title: "10. Jurisdicción",
            content: [
              "Estos términos se rigen por la legislación vigente en Grecia.",
            ],
          },
          finalProvisions: {
            title: "Disposiciones Finales",
            content: [
              "El uso continuado de la Plataforma implica la aceptación total de estos términos. Este documento no constituye una relación laboral, sociedad o agencia.",
            ],
          },
        },

        privacy: {
          title: "Política de Privacidad",
          section1: {
            title: "1. Introducción",
            content: [
              "Esta Política de Privacidad describe cómo se recopilan, usan y protegen los datos personales de los usuarios y conductores que utilizan la aplicación, operada como intermediario de servicios de transporte en Grecia.",
            ],
          },
          section2: {
            title: "2. Datos que recopilamos",
            content: [
              "– Nombre y apellido",
              "– Número de teléfono",
              "– Correo electrónico",
              "– Ubicación en tiempo real durante el uso del servicio",
              "– Datos del viaje (origen, destino, fecha, precio estimado)",
              "– Datos del conductor (licencias, vehículo, calificaciones)",
            ],
          },
          section3: {
            title: "3. Uso de la información",
            intro: "Los datos se utilizan exclusivamente para:",
            content: [
              "– Facilitar la conexión entre usuarios y conductores",
              "– Gestionar viajes y pagos",
              "– Mejorar la experiencia del usuario",
              "– Cumplir obligaciones legales",
            ],
          },
          section4: {
            title: "4. Compartición de datos",
            content: [
              "La aplicación no vende datos personales. Los datos solo se comparten cuando es necesario para la prestación del servicio (entre usuario y conductor) o por requerimiento legal.",
            ],
          },
          section5: {
            title: "5. Pagos",
            content: [
              "Los pagos pueden realizarse en efectivo u otros métodos habilitados. La aplicación no almacena datos sensibles de tarjetas si se utilizan proveedores externos.",
            ],
          },
          section6: {
            title: "6. Seguridad",
            content: [
              "Se aplican medidas razonables de seguridad para proteger los datos personales. Sin embargo, ningún sistema es 100% infalible.",
            ],
          },
          section7: {
            title: "7. Derechos del usuario",
            content: [
              "El usuario puede solicitar acceso, corrección o eliminación de sus datos escribiendo al canal de soporte oficial de la aplicación.",
            ],
          },
          section8: {
            title: "8. Cambios en la política",
            content: [
              "Esta política puede modificarse en cualquier momento. El uso continuado de la aplicación implica aceptación de los cambios.",
            ],
          },
          section9: {
            title: "9. Jurisdicción",
            content: ["Esta política se rige por las leyes de Grecia."],
          },
          section10: {
            title: "10. Contacto",
            content: [
              "Para consultas sobre privacidad, el usuario puede contactar al soporte de la aplicación.",
            ],
          },
        },

        dataProcessing: {
          title: "Tratamiento de Datos",
          section1: {
            title: "1. Protección de Datos",
            content: [
              "Se aplican medidas técnicas y organizativas razonables para proteger la información contra accesos no autorizados, pérdidas, alteraciones o divulgaciones indebidas.",
            ],
          },
          section2: {
            title: "2. Acceso a la Información",
            content: [
              "El acceso a los datos está limitado únicamente a personas autorizadas y sistemas necesarios para la correcta operación del servicio.",
            ],
          },
          section3: {
            title: "3. Almacenamiento",
            content: [
              "Los datos se almacenan en servidores seguros y se aplican protocolos de cifrado cuando corresponde.",
            ],
          },
          section4: {
            title: "4. Comunicaciones",
            content: [
              "Las comunicaciones entre la aplicación y los servidores se realizan mediante conexiones seguras (HTTPS / SSL).",
            ],
          },
          section5: {
            title: "5. Incidentes de Seguridad",
            content: [
              "Ante cualquier incidente de seguridad, se tomarán medidas inmediatas para mitigar el impacto y proteger a los usuarios afectados.",
            ],
          },
          section6: {
            title: "6. Actualizaciones",
            content: [
              "Las medidas de seguridad podrán actualizarse periódicamente para adaptarse a nuevas amenazas o requisitos legales.",
            ],
          },
          section7: {
            title: "7. Responsabilidad",
            content: [
              "Si bien se aplican buenas prácticas de seguridad, ningún sistema es 100% infalible. El uso del servicio implica aceptación de este riesgo razonable.",
            ],
          },
          section8: {
            title: "8. Vigencia",
            content: [
              "Esta política entra en vigencia desde su publicación y podrá ser modificada en cualquier momento.",
            ],
          },
        },

        support: {
          title: "Soporte",
          section1: {
            title: "1. Canales de contacto",
            content: [
              "Los usuarios y conductores pueden contactar al soporte a través de: - Correo electrónico oficial de soporte - Formularios dentro de la aplicación (cuando estén disponibles)",
            ],
          },
          section2: {
            title: "2. Tipo de asistencia",
            content: [
              "El soporte cubre: - Problemas técnicos de la aplicación - Consultas generales sobre el funcionamiento - Reportes de errores o comportamientos anómalos - Solicitudes relacionadas con cuentas (bloqueos, activaciones, correcciones de datos)",
              "El soporte no interviene en disputas económicas directas entre usuarios y conductores.",
            ],
          },
          section3: {
            title: "3. Tiempos de respuesta",
            content: [
              "El soporte se brinda en base a disponibilidad operativa. Los tiempos de respuesta pueden variar según la complejidad del caso y el volumen de solicitudes.",
            ],
          },
          section4: {
            title: "4. Responsabilidad",
            content: [
              "La plataforma actúa únicamente como intermediario tecnológico. No garantiza la resolución inmediata de todos los casos ni asume responsabilidades por acuerdos directos entre usuarios y conductores.",
            ],
          },
          section5: {
            title: "5. Uso adecuado del soporte",
            content: [
              "El uso indebido, abusivo o fraudulento de los canales de soporte puede resultar en la suspensión o bloqueo de la cuenta.",
            ],
          },
          section6: {
            title: "6. Cambios en esta política",
            content: [
              "Esta Política de Soporte puede actualizarse en cualquier momento para adaptarse a cambios operativos o legales.",
            ],
          },
          section7: {
            title: "7. Jurisdicción",
            content: [
              "Esta política se rige por las leyes vigentes en Grecia.",
            ],
          },
        },
      },
      register: {
        title: "Creá tu cuenta",
        subtitle: "Únete a inDrov y comienza a moverte de forma simple",
        form: {
          name: "Nombre",
          email: "Email",
          confirmEmail: "Confirmar email",
          phone: "612 345 678",
          password: "Contraseña",
          country: "País de residencia",
          selectCountry: "Selecciona tu país",
          acceptTerms: "Acepto los",
          termsLink: "Términos y condiciones",
          acceptPrivacy: "Acepto la",
          privacyLink: "Política de Privacidad",
          privacyText: "y el tratamiento de mis datos personales.",
          createAccount: "Crear cuenta",
          creating: "Registrando...",
          alreadyHaveAccount: "¿Ya tienes cuenta?",
          login: "Iniciar sesión",
          backToHome: "Volver al inicio",
        },
        errors: {
          nameRequired: "El nombre es obligatorio",
          nameMinLength: "El nombre debe tener al menos 2 caracteres",
          emailRequired: "El email es obligatorio",
          emailInvalid: "El email no es válido",
          confirmEmailRequired: "Debes confirmar tu email",
          emailsNotMatch: "Los emails no coinciden",
          phoneRequired: "El teléfono es obligatorio",
          phoneInvalid: "El teléfono debe tener entre 9 y 15 dígitos",
          passwordRequired: "La contraseña es obligatoria",
          passwordMinLength: "La contraseña debe tener al menos 8 caracteres",
          countryRequired: "Debes seleccionar un país",
          termsRequired: "Debes aceptar los términos del servicio",
          privacyRequired: "Debes aceptar la política de privacidad",
          formErrors: "Por favor, corrige los errores en el formulario",
          serverError:
            "Error al conectar con el servidor. Verifica que el backend esté corriendo.",
          registrationError: "Error al registrar usuario",
        },
      },

      login: {
        title: "Iniciar sesión",
        form: {
          emailOrPhone: "Correo o número de móvil",
          password: "Contraseña",
          showPassword: "Mostrar",
          hidePassword: "Ocultar",
          acceptTerms: "Aceptar",
          termsLink: "términos y condiciones",
          rememberMe: "Guardar mis datos",
          loginButton: "Iniciar sesión",
          forgotPassword: "¿Olvidaste tu contraseña?",
          noAccount: "¿No tienes cuenta?",
          createAccount: "Crear nueva cuenta",
          backToHome: "Volver al inicio",
        },
        errors: {
          emailOrPhoneRequired: "Este campo es obligatorio",
          emailInvalid: "El email no es válido",
          phoneInvalid: "El número de teléfono no es válido",
          passwordRequired: "La contraseña es obligatoria",
          passwordMinLength: "La contraseña debe tener al menos 8 caracteres",
          termsRequired: "Debes aceptar los términos y condiciones",
        },
      },
      faq: {
        title: "Preguntas frecuentes",
        subtitle: "Todo lo que necesitás saber para moverte con",
        subtitleBold: "tranquilidad",
        notFound: "¿No encontraste tu respuesta?",
        contactSupport: "Contactar soporte",
        questions: [
          {
            icon: "bi-question-circle",
            question: "¿Qué es inDrov?",
            answer:
              "inDrov es una plataforma de intermediación que conecta usuarios con conductores locales en zonas donde moverse no siempre es simple.",
          },
          {
            icon: "bi-car-front",
            question: "¿inDrov es un servicio de transporte?",
            answer:
              "No. inDrov no presta servicios de transporte. Facilita el contacto entre usuarios y conductores independientes.",
          },
          {
            icon: "bi-geo-alt",
            question: "¿En qué lugares funciona?",
            answer:
              "En ciudades, islas y zonas turísticas donde el transporte público es limitado o inexistente.",
          },
          {
            icon: "bi-shield-check",
            question: "¿Es seguro usar inDrov?",
            answer:
              "Sí. Podés ver el perfil del conductor, su nombre y su foto antes de aceptar un viaje.",
          },
          {
            icon: "bi-person-plus",
            question: "¿Necesito crear una cuenta?",
            answer:
              "Sí. Para solicitar viajes o contactar conductores es necesario crear una cuenta.",
          },
          {
            icon: "bi-currency-dollar",
            question: "¿Cuánto cuesta usar inDrov?",
            answer:
              "El uso de la plataforma puede variar según la zona y los acuerdos locales. Los detalles se muestran antes de confirmar.",
          },
          {
            icon: "bi-person-badge",
            question: "Soy conductor, ¿cómo me registro?",
            answer:
              'Podés registrarte desde la sección "Para conductores" y completar tus datos.',
          },
          {
            icon: "bi-envelope",
            question: "¿Cómo contacto con soporte?",
            answer:
              "Podés escribirnos desde el centro de ayuda y te responderemos lo antes posible.",
          },
        ],
      },

      drivers: {
        title: "Para conductores locales",
        subtitle: "Conectá con personas que necesitan moverse.",
        description: "inDrov te conecta con usuarios",
        descriptionBold1: "reales",
        descriptionMiddle: "en zonas donde el transporte",
        descriptionBold2: "no",
        descriptionEnd: "siempre llega.",
        benefits: {
          benefit1: "Accedés a usuarios cercanos, sin intermediarios confusos",
          benefit2: "Elegís cuándo aceptar viajes",
          benefit3: "Mostrás tu perfil: nombre, foto y confianza",
          benefit4: "Trabajás en tu zona, con personas reales",
        },
        howItWorks: {
          title: "Cómo funciona:",
          step1: "Te registrás como conductor",
          step2: "Recibís solicitudes cercanas",
          step3: "Aceptás solo las que quieras",
        },
        registerButton: "Registrarse como conductor",
        requirements: "Requisitos simples · Sin exclusividad",
      },

      helpCenter: {
        title: "Centro de ayuda",
        subtitle: "¿Necesitás ayuda? Completá el formulario y",
        subtitleBold: "nos pondremos en contacto contigo",
        subtitleEnd: "lo antes posible.",
        form: {
          name: "Nombre *",
          email: "Email *",
          subject: "Asunto *",
          message:
            "Describí tu problema o pregunta con tantos detalles como sea posible...",
          notRobot: "No soy un robot",
          submit: "Enviar",
        },
        contact: {
          email: "indrovhelp@gmail.com",
          phone: "+54 9 11 2480-6391",
        },
      },
    },
  },
  en: {
    translation: {
      nav: {
        howItWorks: "How it works",
        forDrivers: "For drivers",
        support: "Support",
        login: "Log in",
        createAccount: "Create account",
        search: "Search",
        enter: "Enter",
      },
      home: {
        hero: {
          title:
            "Simple access to local transportation in destinations where getting around isn't so simple.",
          description:
            "inDrov is an application that centralizes access to local transportation — taxis and available options — so tourists and residents can move around simply, even in areas without stops or public transportation.",
          downloadOn: "Download on",
          availableOn: "Available on",
          appStore: "App Store",
          googlePlay: "Google Play",
          downloadText: "Download the app available for users and drivers.",
        },
        problems: {
          title: "Getting around isn't always so simple.",
          subtitle:
            "In cities, islands and tourist areas, finding transportation can be complicated.",
          point1: "Limited or non-existent public transportation",
          point2: "New people without contacts or local numbers",
          point3: "Difficulty moving at night or from remote areas",
          point4: "Available drivers, but no direct connection with users",
          conclusion: "was born to connect these two realities, simply.",
        },
        trust: {
          title1: "First uncertainty.",
          title2: "Then trust.",
        },
        cards: {
          card1: {
            title: "Why does inDrov exist?",
            text1: "In many places, getting around isn't so simple.",
            text2:
              "Public transportation doesn't reach everywhere and there aren't always available options.",
          },
          card2: {
            title: "Who is it for?",
            text: "Designed for tourists, residents and drivers looking for a simpler way to connect and move around.",
          },
          card3: {
            title: "What we are not?",
            text: "inDrov is not a transportation company. It's a technology platform that facilitates the connection between users and independent drivers.",
          },
          card4: {
            title: "Our vision",
            text1:
              "We believe mobility should be simple, accessible and human.",
            text2: "Without unnecessary complications.",
          },
        },
        partners: {
          title: "In partnership with restaurants, hotels and local brands",
          subtitle: "Discover places and businesses near you thanks to inDrov.",
          restaurant: "Restaurant",
          hotel: "HOTEL LOGO",
          company: "COMPANY",
          web: "Web",
          localBrand: "Local Brand",
          commerce: "Commerce Logo",
          yourLogo: "Your Logo",
          here: "Here",
          viewMore: "View more partners",
        },
        footer: {
          information: "Information",
          howItWorks: "How it works",
          forDrivers: "For drivers",
          faq: "Frequently asked questions",
          support: "Support",
          helpCenter: "Help center",
          contact: "Contact",
          legal: "Legal",
          terms: "Terms of Service",
          privacy: "Privacy Policy",
          dataProcessing: "Data processing",
          platformDescription: "Intermediation platform",
          copyright: "© 2026 inDrov. All rights reserved.",
        },
      },
      legal: {
        header: {
          title: "Legal and Privacy",
          subtitle:
            "Legal information, privacy and terms of use of the inDrov platform.",
        },
        tabs: {
          terms: "Terms of Service",
          privacy: "Privacy Policy",
          dataProcessing: "Data Processing",
          support: "Support",
        },
        lastUpdated: "Last updated: March 2026",
        backToHome: "Back to home",

        terms: {
          title: "Terms of Service",
          section1: {
            title: "1. Nature of Service",
            subtitle: "(Intermediation)",
            content: [
              "The Platform acts exclusively as a technological intermediary between passenger users and independent drivers. It does not provide transportation services.",
              "It does not employ drivers nor guarantees their availability.",
            ],
          },
          section2: {
            title: "2. Liability",
            content: [
              "The Platform assumes no responsibility for incidents, delays, cancellations, accidents, conflicts, losses or damages arising from the relationship between user and driver.",
            ],
          },
          section3: {
            title: "3. Drivers",
            content: [
              "Drivers are responsible for complying with current local regulations, including licenses, insurance and legal conditions to operate.",
            ],
          },
          section4: {
            title: "4. Users",
            content: [
              "Users accept that the use of the Platform is at their own risk. The Platform does not exhaustively verify the identity or background of drivers.",
            ],
          },
          section5: {
            title: "5. Payments and Commissions",
            content: [
              "Payments can be made in cash or other enabled methods. The Platform may charge commissions for the use of the service.",
            ],
          },
          section6: {
            title: "6. Cancellations and Availability",
            content: [
              "Driver availability is not guaranteed. The Platform is not responsible if there are no available drivers.",
            ],
          },
          section7: {
            title: "7. Data Use",
            content: [
              "The Platform collects data necessary for the operation of the service. This data will not be sold to third parties.",
            ],
          },
          section8: {
            title: "8. Modifications",
            content: [
              "The Platform reserves the right to modify these terms at any time. Modifications will take effect from their publication.",
            ],
          },
          section9: {
            title: "9. Termination",
            content: [
              "The Platform may suspend or cancel accounts in case of improper use.",
            ],
          },
          section10: {
            title: "10. Jurisdiction",
            content: [
              "These terms are governed by the current legislation in Greece.",
            ],
          },
          finalProvisions: {
            title: "Final Provisions",
            content: [
              "Continued use of the Platform implies full acceptance of these terms. This document does not constitute an employment relationship, partnership or agency.",
            ],
          },
        },

        privacy: {
          title: "Privacy Policy",
          section1: {
            title: "1. Introduction",
            content: [
              "This Privacy Policy describes how personal data of users and drivers who use the application is collected, used and protected, operated as an intermediary for transportation services in Greece.",
            ],
          },
          section2: {
            title: "2. Data we collect",
            content: [
              "– First and last name",
              "– Phone number",
              "– Email address",
              "– Real-time location during service use",
              "– Trip data (origin, destination, date, estimated price)",
              "– Driver data (licenses, vehicle, ratings)",
            ],
          },
          section3: {
            title: "3. Use of information",
            intro: "Data is used exclusively to:",
            content: [
              "– Facilitate connection between users and drivers",
              "– Manage trips and payments",
              "– Improve user experience",
              "– Comply with legal obligations",
            ],
          },
          section4: {
            title: "4. Data sharing",
            content: [
              "The application does not sell personal data. Data is only shared when necessary for service provision (between user and driver) or by legal requirement.",
            ],
          },
          section5: {
            title: "5. Payments",
            content: [
              "Payments can be made in cash or other enabled methods. The application does not store sensitive card data if external providers are used.",
            ],
          },
          section6: {
            title: "6. Security",
            content: [
              "Reasonable security measures are applied to protect personal data. However, no system is 100% infallible.",
            ],
          },
          section7: {
            title: "7. User rights",
            content: [
              "Users can request access, correction or deletion of their data by contacting the application's official support channel.",
            ],
          },
          section8: {
            title: "8. Policy changes",
            content: [
              "This policy may be modified at any time. Continued use of the application implies acceptance of changes.",
            ],
          },
          section9: {
            title: "9. Jurisdiction",
            content: ["This policy is governed by the laws of Greece."],
          },
          section10: {
            title: "10. Contact",
            content: [
              "For privacy inquiries, users can contact the application's support.",
            ],
          },
        },

        dataProcessing: {
          title: "Data Processing",
          section1: {
            title: "1. Data Protection",
            content: [
              "Reasonable technical and organizational measures are applied to protect information against unauthorized access, loss, alteration or improper disclosure.",
            ],
          },
          section2: {
            title: "2. Information Access",
            content: [
              "Access to data is limited only to authorized persons and systems necessary for the correct operation of the service.",
            ],
          },
          section3: {
            title: "3. Storage",
            content: [
              "Data is stored on secure servers and encryption protocols are applied when appropriate.",
            ],
          },
          section4: {
            title: "4. Communications",
            content: [
              "Communications between the application and servers are made through secure connections (HTTPS / SSL).",
            ],
          },
          section5: {
            title: "5. Security Incidents",
            content: [
              "In case of any security incident, immediate measures will be taken to mitigate the impact and protect affected users.",
            ],
          },
          section6: {
            title: "6. Updates",
            content: [
              "Security measures may be updated periodically to adapt to new threats or legal requirements.",
            ],
          },
          section7: {
            title: "7. Liability",
            content: [
              "While good security practices are applied, no system is 100% infallible. Use of the service implies acceptance of this reasonable risk.",
            ],
          },
          section8: {
            title: "8. Effectiveness",
            content: [
              "This policy takes effect from its publication and may be modified at any time.",
            ],
          },
        },

        support: {
          title: "Support",
          section1: {
            title: "1. Contact channels",
            content: [
              "Users and drivers can contact support through: - Official support email - Forms within the application (when available)",
            ],
          },
          section2: {
            title: "2. Type of assistance",
            content: [
              "Support covers: - Technical application problems - General inquiries about operation - Bug reports or anomalous behaviors - Account-related requests (blocks, activations, data corrections)",
              "Support does not intervene in direct economic disputes between users and drivers.",
            ],
          },
          section3: {
            title: "3. Response times",
            content: [
              "Support is provided based on operational availability. Response times may vary depending on case complexity and request volume.",
            ],
          },
          section4: {
            title: "4. Liability",
            content: [
              "The platform acts only as a technological intermediary. It does not guarantee immediate resolution of all cases nor assumes responsibilities for direct agreements between users and drivers.",
            ],
          },
          section5: {
            title: "5. Proper use of support",
            content: [
              "Improper, abusive or fraudulent use of support channels may result in account suspension or blocking.",
            ],
          },
          section6: {
            title: "6. Changes to this policy",
            content: [
              "This Support Policy may be updated at any time to adapt to operational or legal changes.",
            ],
          },
          section7: {
            title: "7. Jurisdiction",
            content: [
              "This policy is governed by the laws in force in Greece.",
            ],
          },
        },
      },
      register: {
        title: "Create your account",
        subtitle: "Join inDrov and start moving simply",
        form: {
          name: "Name",
          email: "Email",
          confirmEmail: "Confirm email",
          phone: "612 345 678",
          password: "Password",
          country: "Country of residence",
          selectCountry: "Select your country",
          acceptTerms: "I accept the",
          termsLink: "Terms and conditions",
          acceptPrivacy: "I accept the",
          privacyLink: "Privacy Policy",
          privacyText: "and the processing of my personal data.",
          createAccount: "Create account",
          creating: "Registering...",
          alreadyHaveAccount: "Already have an account?",
          login: "Log in",
          backToHome: "Back to home",
        },
        errors: {
          nameRequired: "Name is required",
          nameMinLength: "Name must be at least 2 characters",
          emailRequired: "Email is required",
          emailInvalid: "Email is not valid",
          confirmEmailRequired: "You must confirm your email",
          emailsNotMatch: "Emails do not match",
          phoneRequired: "Phone is required",
          phoneInvalid: "Phone must be between 9 and 15 digits",
          passwordRequired: "Password is required",
          passwordMinLength: "Password must be at least 8 characters",
          countryRequired: "You must select a country",
          termsRequired: "You must accept the terms of service",
          privacyRequired: "You must accept the privacy policy",
          formErrors: "Please correct the errors in the form",
          serverError:
            "Error connecting to server. Verify that the backend is running.",
          registrationError: "Error registering user",
        },
      },

      login: {
        title: "Log in",
        form: {
          emailOrPhone: "Email or mobile number",
          password: "Password",
          showPassword: "Show",
          hidePassword: "Hide",
          acceptTerms: "Accept",
          termsLink: "terms and conditions",
          rememberMe: "Remember me",
          loginButton: "Log in",
          forgotPassword: "Forgot your password?",
          noAccount: "Don't have an account?",
          createAccount: "Create new account",
          backToHome: "Back to home",
        },
        errors: {
          emailOrPhoneRequired: "This field is required",
          emailInvalid: "Email is not valid",
          phoneInvalid: "Phone number is not valid",
          passwordRequired: "Password is required",
          passwordMinLength: "Password must be at least 8 characters",
          termsRequired: "You must accept the terms and conditions",
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know to move with",
        subtitleBold: "peace of mind",
        notFound: "Didn't find your answer?",
        contactSupport: "Contact support",
        questions: [
          {
            icon: "bi-question-circle",
            question: "What is inDrov?",
            answer:
              "inDrov is an intermediation platform that connects users with local drivers in areas where getting around isn't always simple.",
          },
          {
            icon: "bi-car-front",
            question: "Is inDrov a transportation service?",
            answer:
              "No. inDrov does not provide transportation services. It facilitates contact between users and independent drivers.",
          },
          {
            icon: "bi-geo-alt",
            question: "Where does it work?",
            answer:
              "In cities, islands and tourist areas where public transportation is limited or non-existent.",
          },
          {
            icon: "bi-shield-check",
            question: "Is it safe to use inDrov?",
            answer:
              "Yes. You can see the driver's profile, name and photo before accepting a trip.",
          },
          {
            icon: "bi-person-plus",
            question: "Do I need to create an account?",
            answer:
              "Yes. To request trips or contact drivers you need to create an account.",
          },
          {
            icon: "bi-currency-dollar",
            question: "How much does it cost to use inDrov?",
            answer:
              "Platform usage may vary depending on the area and local agreements. Details are shown before confirming.",
          },
          {
            icon: "bi-person-badge",
            question: "I'm a driver, how do I register?",
            answer:
              'You can register from the "For drivers" section and complete your information.',
          },
          {
            icon: "bi-envelope",
            question: "How do I contact support?",
            answer:
              "You can write to us from the help center and we will respond as soon as possible.",
          },
        ],
      },

      drivers: {
        title: "For local drivers",
        subtitle: "Connect with people who need to get around.",
        description: "inDrov connects you with",
        descriptionBold1: "real",
        descriptionMiddle: "users in areas where transportation",
        descriptionBold2: "doesn't",
        descriptionEnd: "always reach.",
        benefits: {
          benefit1: "Access nearby users, without confusing intermediaries",
          benefit2: "Choose when to accept trips",
          benefit3: "Show your profile: name, photo and trust",
          benefit4: "Work in your area, with real people",
        },
        howItWorks: {
          title: "How it works:",
          step1: "Register as a driver",
          step2: "Receive nearby requests",
          step3: "Accept only the ones you want",
        },
        registerButton: "Register as a driver",
        requirements: "Simple requirements · No exclusivity",
      },

      helpCenter: {
        title: "Help Center",
        subtitle: "Need help? Complete the form and",
        subtitleBold: "we will contact you",
        subtitleEnd: "as soon as possible.",
        form: {
          name: "Name *",
          email: "Email *",
          subject: "Subject *",
          message:
            "Describe your problem or question with as many details as possible...",
          notRobot: "I'm not a robot",
          submit: "Submit",
        },
        contact: {
          email: "indrovhelp@gmail.com",
          phone: "+54 9 11 2480-6391",
        },
      },
    },
  },
  el: {
    translation: {
      nav: {
        howItWorks: "Πώς λειτουργεί",
        forDrivers: "Για οδηγούς",
        support: "Υποστήριξη",
        login: "Σύνδεση",
        createAccount: "Δημιουργία λογαριασμού",
        search: "Αναζήτηση",
        enter: "Είσοδος",
      },
      home: {
        hero: {
          title:
            "Απλή πρόσβαση στις τοπικές μεταφορές σε προορισμούς όπου η μετακίνηση δεν είναι τόσο απλή.",
          description:
            "Το inDrov είναι μια εφαρμογή που συγκεντρώνει την πρόσβαση στις τοπικές μεταφορές — ταξί και διαθέσιμες επιλογές — ώστε οι τουρίστες και οι κάτοικοι να μπορούν να μετακινούνται απλά, ακόμη και σε περιοχές χωρίς στάσεις ή δημόσιες συγκοινωνίες.",
          downloadOn: "Λήψη στο",
          availableOn: "Διαθέσιμο στο",
          appStore: "App Store",
          googlePlay: "Google Play",
          downloadText:
            "Κατεβάστε την εφαρμογή διαθέσιμη για χρήστες και οδηγούς.",
        },
        problems: {
          title: "Η μετακίνηση δεν είναι πάντα τόσο απλή.",
          subtitle:
            "Σε πόλεις, νησιά και τουριστικές περιοχές, η εύρεση μεταφοράς μπορεί να είναι περίπλοκη.",
          point1: "Περιορισμένες ή ανύπαρκτες δημόσιες συγκοινωνίες",
          point2: "Νέοι άνθρωποι χωρίς επαφές ή τοπικούς αριθμούς",
          point3: "Δυσκολία μετακίνησης τη νύχτα ή από απομακρυσμένες περιοχές",
          point4: "Διαθέσιμοι οδηγοί, αλλά χωρίς άμεση σύνδεση με χρήστες",
          conclusion:
            "γεννήθηκε για να συνδέσει αυτές τις δύο πραγματικότητες, απλά.",
        },
        trust: {
          title1: "Πρώτα αβεβαιότητα.",
          title2: "Μετά εμπιστοσύνη.",
        },
        cards: {
          card1: {
            title: "Γιατί υπάρχει το inDrov;",
            text1: "Σε πολλά μέρη, η μετακίνηση δεν είναι τόσο απλή.",
            text2:
              "Οι δημόσιες συγκοινωνίες δεν φτάνουν παντού και δεν υπάρχουν πάντα διαθέσιμες επιλογές.",
          },
          card2: {
            title: "Για ποιους είναι;",
            text: "Σχεδιασμένο για τουρίστες, κατοίκους και οδηγούς που αναζητούν έναν πιο απλό τρόπο να συνδεθούν και να μετακινηθούν.",
          },
          card3: {
            title: "Τι δεν είμαστε;",
            text: "Το inDrov δεν είναι εταιρεία μεταφορών. Είναι μια τεχνολογική πλατφόρμα που διευκολύνει τη σύνδεση μεταξύ χρηστών και ανεξάρτητων οδηγών.",
          },
          card4: {
            title: "Το όραμά μας",
            text1:
              "Πιστεύουμε ότι η κινητικότητα πρέπει να είναι απλή, προσβάσιμη και ανθρώπινη.",
            text2: "Χωρίς περιττές περιπλοκές.",
          },
        },
        partners: {
          title:
            "Σε συνεργασία με εστιατόρια, ξενοδοχεία και τοπικές επωνυμίες",
          subtitle:
            "Ανακαλύψτε μέρη και επιχειρήσεις κοντά σας χάρη στο inDrov.",
          restaurant: "Εστιατόριο",
          hotel: "ΛΟΓΟΤΥΠΟ ΞΕΝΟΔΟΧΕΙΟΥ",
          company: "ΕΤΑΙΡΕΙΑ",
          web: "Ιστός",
          localBrand: "Τοπική Μάρκα",
          commerce: "Λογότυπο Εμπορίου",
          yourLogo: "Το Λογότυπό σας",
          here: "Εδώ",
          viewMore: "Δείτε περισσότερους συνεργάτες",
        },
        footer: {
          information: "Πληροφορίες",
          howItWorks: "Πώς λειτουργεί",
          forDrivers: "Για οδηγούς",
          faq: "Συχνές ερωτήσεις",
          support: "Υποστήριξη",
          helpCenter: "Κέντρο βοήθειας",
          contact: "Επικοινωνία",
          legal: "Νομικά",
          terms: "Όροι Υπηρεσίας",
          privacy: "Πολιτική Απορρήτου",
          dataProcessing: "Επεξεργασία δεδομένων",
          platformDescription: "Πλατφόρμα διαμεσολάβησης",
          copyright: "© 2026 inDrov. Όλα τα δικαιώματα διατηρούνται.",
        },
      },
      legal: {
        header: {
          title: "Νομικά και Απόρρητο",
          subtitle:
            "Νομικές πληροφορίες, απόρρητο και όροι χρήσης της πλατφόρμας inDrov.",
        },
        tabs: {
          terms: "Όροι Υπηρεσίας",
          privacy: "Πολιτική Απορρήτου",
          dataProcessing: "Επεξεργασία Δεδομένων",
          support: "Υποστήριξη",
        },
        lastUpdated: "Τελευταία ενημέρωση: Μάρτιος 2026",
        backToHome: "Επιστροφή στην αρχική",

        terms: {
          title: "Όροι Υπηρεσίας",
          section1: {
            title: "1. Φύση της Υπηρεσίας",
            subtitle: "(Διαμεσολάβηση)",
            content: [
              "Η Πλατφόρμα λειτουργεί αποκλειστικά ως τεχνολογικός διαμεσολαβητής μεταξύ επιβατών και ανεξάρτητων οδηγών. Δεν παρέχει υπηρεσίες μεταφοράς.",
              "Δεν απασχολεί οδηγούς ούτε εγγυάται τη διαθεσιμότητά τους.",
            ],
          },
          section2: {
            title: "2. Ευθύνη",
            content: [
              "Η Πλατφόρμα δεν αναλαμβάνει ευθύνη για περιστατικά, καθυστερήσεις, ακυρώσεις, ατυχήματα, συγκρούσεις, απώλειες ή ζημίες που προκύπτουν από τη σχέση μεταξύ χρήστη και οδηγού.",
            ],
          },
          section3: {
            title: "3. Οδηγοί",
            content: [
              "Οι οδηγοί είναι υπεύθυνοι για τη συμμόρφωση με την ισχύουσα τοπική νομοθεσία, συμπεριλαμβανομένων αδειών, ασφάλισης και νομικών προϋποθέσεων για λειτουργία.",
            ],
          },
          section4: {
            title: "4. Χρήστες",
            content: [
              "Οι χρήστες αποδέχονται ότι η χρήση της Πλατφόρμας γίνεται με δική τους ευθύνη. Η Πλατφόρμα δεν επαληθεύει εξαντλητικά την ταυτότητα ή το ιστορικό των οδηγών.",
            ],
          },
          section5: {
            title: "5. Πληρωμές και Προμήθειες",
            content: [
              "Οι πληρωμές μπορούν να γίνουν σε μετρητά ή με άλλες ενεργοποιημένες μεθόδους. Η Πλατφόρμα μπορεί να χρεώσει προμήθειες για τη χρήση της υπηρεσίας.",
            ],
          },
          section6: {
            title: "6. Ακυρώσεις και Διαθεσιμότητα",
            content: [
              "Η διαθεσιμότητα των οδηγών δεν είναι εγγυημένη. Η Πλατφόρμα δεν είναι υπεύθυνη εάν δεν υπάρχουν διαθέσιμοι οδηγοί.",
            ],
          },
          section7: {
            title: "7. Χρήση Δεδομένων",
            content: [
              "Η Πλατφόρμα συλλέγει δεδομένα που είναι απαραίτητα για τη λειτουργία της υπηρεσίας. Αυτά τα δεδομένα δεν θα πωληθούν σε τρίτους.",
            ],
          },
          section8: {
            title: "8. Τροποποιήσεις",
            content: [
              "Η Πλατφόρμα διατηρεί το δικαίωμα να τροποποιήσει αυτούς τους όρους ανά πάσα στιγμή. Οι τροποποιήσεις θα τεθούν σε ισχύ από τη δημοσίευσή τους.",
            ],
          },
          section9: {
            title: "9. Τερματισμός",
            content: [
              "Η Πλατφόρμα μπορεί να αναστείλει ή να ακυρώσει λογαριασμούς σε περίπτωση ακατάλληλης χρήσης.",
            ],
          },
          section10: {
            title: "10. Δικαιοδοσία",
            content: [
              "Αυτοί οι όροι διέπονται από την ισχύουσα νομοθεσία στην Ελλάδα.",
            ],
          },
          finalProvisions: {
            title: "Τελικές Διατάξεις",
            content: [
              "Η συνεχής χρήση της Πλατφόρμας συνεπάγεται την πλήρη αποδοχή αυτών των όρων. Το παρόν έγγραφο δεν συνιστά εργασιακή σχέση, εταιρική σχέση ή αντιπροσωπεία.",
            ],
          },
        },

        privacy: {
          title: "Πολιτική Απορρήτου",
          section1: {
            title: "1. Εισαγωγή",
            content: [
              "Αυτή η Πολιτική Απορρήτου περιγράφει πώς συλλέγονται, χρησιμοποιούνται και προστατεύονται τα προσωπικά δεδομένα των χρηστών και των οδηγών που χρησιμοποιούν την εφαρμογή, η οποία λειτουργεί ως διαμεσολαβητής υπηρεσιών μεταφοράς στην Ελλάδα.",
            ],
          },
          section2: {
            title: "2. Δεδομένα που συλλέγουμε",
            content: [
              "– Όνομα και επώνυμο",
              "– Αριθμός τηλεφώνου",
              "– Διεύθυνση email",
              "– Τοποθεσία σε πραγματικό χρόνο κατά τη διάρκεια χρήσης της υπηρεσίας",
              "– Δεδομένα ταξιδιού (αφετηρία, προορισμός, ημερομηνία, εκτιμώμενη τιμή)",
              "– Δεδομένα οδηγού (άδειες, όχημα, αξιολογήσεις)",
            ],
          },
          section3: {
            title: "3. Χρήση πληροφοριών",
            intro: "Τα δεδομένα χρησιμοποιούνται αποκλειστικά για:",
            content: [
              "– Διευκόλυνση της σύνδεσης μεταξύ χρηστών και οδηγών",
              "– Διαχείριση ταξιδιών και πληρωμών",
              "– Βελτίωση της εμπειρίας χρήστη",
              "– Συμμόρφωση με νομικές υποχρεώσεις",
            ],
          },
          section4: {
            title: "4. Κοινοποίηση δεδομένων",
            content: [
              "Η εφαρμογή δεν πουλά προσωπικά δεδομένα. Τα δεδομένα κοινοποιούνται μόνο όταν είναι απαραίτητο για την παροχή της υπηρεσίας (μεταξύ χρήστη και οδηγού) ή κατόπιν νομικής απαίτησης.",
            ],
          },
          section5: {
            title: "5. Πληρωμές",
            content: [
              "Οι πληρωμές μπορούν να γίνουν σε μετρητά ή με άλλες ενεργοποιημένες μεθόδους. Η εφαρμογή δεν αποθηκεύει ευαίσθητα δεδομένα καρτών εάν χρησιμοποιούνται εξωτερικοί πάροχοι.",
            ],
          },
          section6: {
            title: "6. Ασφάλεια",
            content: [
              "Εφαρμόζονται εύλογα μέτρα ασφαλείας για την προστασία των προσωπικών δεδομένων. Ωστόσο, κανένα σύστημα δεν είναι 100% αλάνθαστο.",
            ],
          },
          section7: {
            title: "7. Δικαιώματα χρήστη",
            content: [
              "Οι χρήστες μπορούν να ζητήσουν πρόσβαση, διόρθωση ή διαγραφή των δεδομένων τους επικοινωνώντας με το επίσημο κανάλι υποστήριξης της εφαρμογής.",
            ],
          },
          section8: {
            title: "8. Αλλαγές στην πολιτική",
            content: [
              "Αυτή η πολιτική μπορεί να τροποποιηθεί ανά πάσα στιγμή. Η συνεχής χρήση της εφαρμογής συνεπάγεται αποδοχή των αλλαγών.",
            ],
          },
          section9: {
            title: "9. Δικαιοδοσία",
            content: ["Αυτή η πολιτική διέπεται από τους νόμους της Ελλάδας."],
          },
          section10: {
            title: "10. Επικοινωνία",
            content: [
              "Για ερωτήματα σχετικά με το απόρρητο, οι χρήστες μπορούν να επικοινωνήσουν με την υποστήριξη της εφαρμογής.",
            ],
          },
        },

        dataProcessing: {
          title: "Επεξεργασία Δεδομένων",
          section1: {
            title: "1. Προστασία Δεδομένων",
            content: [
              "Εφαρμόζονται εύλογα τεχνικά και οργανωτικά μέτρα για την προστασία των πληροφοριών από μη εξουσιοδοτημένη πρόσβαση, απώλεια, αλλοίωση ή ακατάλληλη αποκάλυψη.",
            ],
          },
          section2: {
            title: "2. Πρόσβαση στις Πληροφορίες",
            content: [
              "Η πρόσβαση στα δεδομένα περιορίζεται μόνο σε εξουσιοδοτημένα άτομα και συστήματα που είναι απαραίτητα για τη σωστή λειτουργία της υπηρεσίας.",
            ],
          },
          section3: {
            title: "3. Αποθήκευση",
            content: [
              "Τα δεδομένα αποθηκεύονται σε ασφαλείς διακομιστές και εφαρμόζονται πρωτόκολλα κρυπτογράφησης όταν είναι κατάλληλο.",
            ],
          },
          section4: {
            title: "4. Επικοινωνίες",
            content: [
              "Οι επικοινωνίες μεταξύ της εφαρμογής και των διακομιστών πραγματοποιούνται μέσω ασφαλών συνδέσεων (HTTPS / SSL).",
            ],
          },
          section5: {
            title: "5. Περιστατικά Ασφαλείας",
            content: [
              "Σε περίπτωση οποιουδήποτε περιστατικού ασφαλείας, θα ληφθούν άμεσα μέτρα για τον μετριασμό του αντίκτυπου και την προστασία των επηρεαζόμενων χρηστών.",
            ],
          },
          section6: {
            title: "6. Ενημερώσεις",
            content: [
              "Τα μέτρα ασφαλείας μπορούν να ενημερώνονται περιοδικά για να προσαρμόζονται σε νέες απειλές ή νομικές απαιτήσεις.",
            ],
          },
          section7: {
            title: "7. Ευθύνη",
            content: [
              "Ενώ εφαρμόζονται καλές πρακτικές ασφαλείας, κανένα σύστημα δεν είναι 100% αλάνθαστο. Η χρήση της υπηρεσίας συνεπάγεται αποδοχή αυτού του εύλογου κινδύνου.",
            ],
          },
          section8: {
            title: "8. Ισχύς",
            content: [
              "Αυτή η πολιτική τίθεται σε ισχύ από τη δημοσίευσή της και μπορεί να τροποποιηθεί ανά πάσα στιγμή.",
            ],
          },
        },

        support: {
          title: "Υποστήριξη",
          section1: {
            title: "1. Κανάλια επικοινωνίας",
            content: [
              "Οι χρήστες και οι οδηγοί μπορούν να επικοινωνήσουν με την υποστήριξη μέσω: - Επίσημου email υποστήριξης - Φορμών εντός της εφαρμογής (όταν είναι διαθέσιμα)",
            ],
          },
          section2: {
            title: "2. Τύπος βοήθειας",
            content: [
              "Η υποστήριξη καλύπτει: - Τεχνικά προβλήματα της εφαρμογής - Γενικές ερωτήσεις σχετικά με τη λειτουργία - Αναφορές σφαλμάτων ή ανώμαλων συμπεριφορών - Αιτήματα σχετικά με λογαριασμούς (αποκλεισμούς, ενεργοποιήσεις, διορθώσεις δεδομένων)",
              "Η υποστήριξη δεν παρεμβαίνει σε άμεσες οικονομικές διαφορές μεταξύ χρηστών και οδηγών.",
            ],
          },
          section3: {
            title: "3. Χρόνοι απόκρισης",
            content: [
              "Η υποστήριξη παρέχεται με βάση τη λειτουργική διαθεσιμότητα. Οι χρόνοι απόκρισης μπορεί να ποικίλλουν ανάλογα με την πολυπλοκότητα της περίπτωσης και τον όγκο των αιτημάτων.",
            ],
          },
          section4: {
            title: "4. Ευθύνη",
            content: [
              "Η πλατφόρμα λειτουργεί μόνο ως τεχνολογικός διαμεσολαβητής. Δεν εγγυάται την άμεση επίλυση όλων των περιπτώσεων ούτε αναλαμβάνει ευθύνες για άμεσες συμφωνίες μεταξύ χρηστών και οδηγών.",
            ],
          },
          section5: {
            title: "5. Ορθή χρήση της υποστήριξης",
            content: [
              "Η ακατάλληλη, καταχρηστική ή δόλια χρήση των καναλιών υποστήριξης μπορεί να οδηγήσει σε αναστολή ή αποκλεισμό του λογαριασμού.",
            ],
          },
          section6: {
            title: "6. Αλλαγές σε αυτήν την πολιτική",
            content: [
              "Αυτή η Πολιτική Υποστήριξης μπορεί να ενημερωθεί ανά πάσα στιγμή για να προσαρμοστεί σε λειτουργικές ή νομικές αλλαγές.",
            ],
          },
          section7: {
            title: "7. Δικαιοδοσία",
            content: [
              "Αυτή η πολιτική διέπεται από τους νόμους που ισχύουν στην Ελλάδα.",
            ],
          },
        },
      },
      register: {
        title: "Δημιουργήστε τον λογαριασμό σας",
        subtitle: "Γίνετε μέλος του inDrov και αρχίστε να μετακινείστε απλά",
        form: {
          name: "Όνομα",
          email: "Email",
          confirmEmail: "Επιβεβαίωση email",
          phone: "612 345 678",
          password: "Κωδικός πρόσβασης",
          country: "Χώρα κατοικίας",
          selectCountry: "Επιλέξτε τη χώρα σας",
          acceptTerms: "Αποδέχομαι τους",
          termsLink: "Όρους και προϋποθέσεις",
          acceptPrivacy: "Αποδέχομαι την",
          privacyLink: "Πολιτική Απορρήτου",
          privacyText: "και την επεξεργασία των προσωπικών μου δεδομένων.",
          createAccount: "Δημιουργία λογαριασμού",
          creating: "Εγγραφή...",
          alreadyHaveAccount: "Έχετε ήδη λογαριασμό;",
          login: "Σύνδεση",
          backToHome: "Επιστροφή στην αρχική",
        },
        errors: {
          nameRequired: "Το όνομα είναι υποχρεωτικό",
          nameMinLength: "Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες",
          emailRequired: "Το email είναι υποχρεωτικό",
          emailInvalid: "Το email δεν είναι έγκυρο",
          confirmEmailRequired: "Πρέπει να επιβεβαιώσετε το email σας",
          emailsNotMatch: "Τα email δεν ταιριάζουν",
          phoneRequired: "Το τηλέφωνο είναι υποχρεωτικό",
          phoneInvalid: "Το τηλέφωνο πρέπει να έχει μεταξύ 9 και 15 ψηφία",
          passwordRequired: "Ο κωδικός πρόσβασης είναι υποχρεωτικός",
          passwordMinLength:
            "Ο κωδικός πρόσβασης πρέπει να έχει τουλάχιστον 8 χαρακτήρες",
          countryRequired: "Πρέπει να επιλέξετε μια χώρα",
          termsRequired: "Πρέπει να αποδεχτείτε τους όρους υπηρεσίας",
          privacyRequired: "Πρέπει να αποδεχτείτε την πολιτική απορρήτου",
          formErrors: "Παρακαλώ διορθώστε τα σφάλματα στη φόρμα",
          serverError:
            "Σφάλμα σύνδεσης με τον διακομιστή. Βεβαιωθείτε ότι το backend λειτουργεί.",
          registrationError: "Σφάλμα εγγραφής χρήστη",
        },
      },

      login: {
        title: "Σύνδεση",
        form: {
          emailOrPhone: "Email ή αριθμός κινητού",
          password: "Κωδικός πρόσβασης",
          showPassword: "Εμφάνιση",
          hidePassword: "Απόκρυψη",
          acceptTerms: "Αποδοχή",
          termsLink: "όρων και προϋποθέσεων",
          rememberMe: "Να με θυμάσαι",
          loginButton: "Σύνδεση",
          forgotPassword: "Ξεχάσατε τον κωδικό σας;",
          noAccount: "Δεν έχετε λογαριασμό;",
          createAccount: "Δημιουργία νέου λογαριασμού",
          backToHome: "Επιστροφή στην αρχική",
        },
        errors: {
          emailOrPhoneRequired: "Αυτό το πεδίο είναι υποχρεωτικό",
          emailInvalid: "Το email δεν είναι έγκυρο",
          phoneInvalid: "Ο αριθμός τηλεφώνου δεν είναι έγκυρος",
          passwordRequired: "Ο κωδικός πρόσβασης είναι υποχρεωτικός",
          passwordMinLength:
            "Ο κωδικός πρόσβασης πρέπει να έχει τουλάχιστον 8 χαρακτήρες",
          termsRequired: "Πρέπει να αποδεχτείτε τους όρους και προϋποθέσεις",
        },
      },
      faq: {
        title: "Συχνές Ερωτήσεις",
        subtitle: "Όλα όσα χρειάζεστε να γνωρίζετε για να μετακινηθείτε με",
        subtitleBold: "ηρεμία",
        notFound: "Δεν βρήκατε την απάντησή σας;",
        contactSupport: "Επικοινωνία με υποστήριξη",
        questions: [
          {
            icon: "bi-question-circle",
            question: "Τι είναι το inDrov;",
            answer:
              "Το inDrov είναι μια πλατφόρμα διαμεσολάβησης που συνδέει χρήστες με τοπικούς οδηγούς σε περιοχές όπου η μετακίνηση δεν είναι πάντα απλή.",
          },
          {
            icon: "bi-car-front",
            question: "Είναι το inDrov υπηρεσία μεταφοράς;",
            answer:
              "Όχι. Το inDrov δεν παρέχει υπηρεσίες μεταφοράς. Διευκολύνει την επικοινωνία μεταξύ χρηστών και ανεξάρτητων οδηγών.",
          },
          {
            icon: "bi-geo-alt",
            question: "Σε ποια μέρη λειτουργεί;",
            answer:
              "Σε πόλεις, νησιά και τουριστικές περιοχές όπου οι δημόσιες συγκοινωνίες είναι περιορισμένες ή ανύπαρκτες.",
          },
          {
            icon: "bi-shield-check",
            question: "Είναι ασφαλές να χρησιμοποιήσω το inDrov;",
            answer:
              "Ναι. Μπορείτε να δείτε το προφίλ του οδηγού, το όνομα και τη φωτογραφία του πριν αποδεχτείτε ένα ταξίδι.",
          },
          {
            icon: "bi-person-plus",
            question: "Χρειάζομαι να δημιουργήσω λογαριασμό;",
            answer:
              "Ναι. Για να ζητήσετε ταξίδια ή να επικοινωνήσετε με οδηγούς χρειάζεται να δημιουργήσετε λογαριασμό.",
          },
          {
            icon: "bi-currency-dollar",
            question: "Πόσο κοστίζει η χρήση του inDrov;",
            answer:
              "Η χρήση της πλατφόρμας μπορεί να ποικίλλει ανάλογα με την περιοχή και τις τοπικές συμφωνίες. Οι λεπτομέρειες εμφανίζονται πριν την επιβεβαίωση.",
          },
          {
            icon: "bi-person-badge",
            question: "Είμαι οδηγός, πώς μπορώ να εγγραφώ;",
            answer:
              'Μπορείτε να εγγραφείτε από την ενότητα "Για οδηγούς" και να συμπληρώσετε τα στοιχεία σας.',
          },
          {
            icon: "bi-envelope",
            question: "Πώς μπορώ να επικοινωνήσω με την υποστήριξη;",
            answer:
              "Μπορείτε να μας γράψετε από το κέντρο βοήθειας και θα απαντήσουμε το συντομότερο δυνατό.",
          },
        ],
      },

      drivers: {
        title: "Για τοπικούς οδηγούς",
        subtitle: "Συνδεθείτε με ανθρώπους που χρειάζονται να μετακινηθούν.",
        description: "Το inDrov σας συνδέει με",
        descriptionBold1: "πραγματικούς",
        descriptionMiddle: "χρήστες σε περιοχές όπου οι μεταφορές",
        descriptionBold2: "δεν",
        descriptionEnd: "φτάνουν πάντα.",
        benefits: {
          benefit1:
            "Πρόσβαση σε κοντινούς χρήστες, χωρίς μπερδεμένους μεσάζοντες",
          benefit2: "Επιλέγετε πότε να δεχτείτε ταξίδια",
          benefit3:
            "Εμφανίζετε το προφίλ σας: όνομα, φωτογραφία και εμπιστοσύνη",
          benefit4: "Εργάζεστε στην περιοχή σας, με πραγματικούς ανθρώπους",
        },
        howItWorks: {
          title: "Πώς λειτουργεί:",
          step1: "Εγγραφείτε ως οδηγός",
          step2: "Λαμβάνετε κοντινά αιτήματα",
          step3: "Αποδέχεστε μόνο αυτά που θέλετε",
        },
        registerButton: "Εγγραφή ως οδηγός",
        requirements: "Απλές απαιτήσεις · Χωρίς αποκλειστικότητα",
      },

      helpCenter: {
        title: "Κέντρο Βοήθειας",
        subtitle: "Χρειάζεστε βοήθεια; Συμπληρώστε τη φόρμα και",
        subtitleBold: "θα επικοινωνήσουμε μαζί σας",
        subtitleEnd: "το συντομότερο δυνατό.",
        form: {
          name: "Όνομα *",
          email: "Email *",
          subject: "Θέμα *",
          message:
            "Περιγράψτε το πρόβλημά σας ή την ερώτησή σας με όσο το δυνατόν περισσότερες λεπτομέρειες...",
          notRobot: "Δεν είμαι ρομπότ",
          submit: "Αποστολή",
        },
        contact: {
          email: "indrovhelp@gmail.com",
          phone: "+54 9 11 2480-6391",
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources,
    fallbackLng: "es", // Idioma por defecto
    lng: "es", // Idioma inicial
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
