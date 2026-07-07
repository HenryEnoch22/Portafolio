export type ProjectKey = 'erpGpc' | 'rotomfit' | 'maternico' | 'imprenta';

export interface Project {
    id: number;
    translationKey: ProjectKey;
    name: string;
    logo: string;
    shortDescription: string;
    description: string;
    technologies: string[];
    role: string;
    features: string[];
    images: string[];
    github: string | null;
    demo: string | null;
}

export const projects: Project[] = [
    {
        id: 1,
        translationKey: "erpGpc",
        name: "ERP GPC Logística",

        logo: "/projects/gpc/CuboGPC.jpeg",

        shortDescription:
            "Plataforma para control de solicitudes de pago, operadores, unidades de transporte y viajes.",

        description: `
            ERP empresarial desarrollado para centralizar distintos procesos operativos y administrativos de la organización.
            La plataforma está compuesta por un módulo de solicitudes de pago para la gestión y aprobación de gastos entre sucursales, un módulo de transporte enfocado en la administración de operadores y viajes, y un módulo de nómina integrado con el sistema de recursos humanos de la empresa para el control de asistencia del personal.

            Además, el sistema se integra con servicios externos mediante APIs para obtener información operativa en tiempo real y mantener sincronizados distintos procesos del negocio.
        `,

        technologies: [
            "Laravel",
            "MySQL",
            "Blade",
            "Liviwire",
        ],

        role: "Desarrollador Full Stack",

        features: [
            "Gestión de solicitudes de pago entre sucursales",
            "Flujo de aprobación de gastos por Tesorería y Dirección",
            "Exportación de solicitudes de pago a Excel",
            "Administración de operadores de transporte",
            "Gestión y seguimiento de viajes",
            "Control de materiales transportados",
            "Generación de cartas porte",
            "Integración con APIs de rastreo en tiempo real",
            "Sincronización de empleados mediante API al sistema de Recursos Humanos de la empresa",
            "Control de asistencia, descansos y días festivos",
            "Importación y exportación de información de nómina mediante Excel"
        ],

        images: [
            "/projects/gpc/EquipoDeTransporte.jpeg",
            "/projects/gpc/ReporteDeViajes.jpeg",
            "/projects/gpc/ReporteFinancieroUnidades.jpeg"
        ],

        github: null,
        demo: null
    },

    {
        id: 2,
        translationKey: "rotomfit",
        name: "Rotomfit",

        logo: "/projects/rotomfit/RotomfitLogo_cropped.jpg",

        shortDescription:"Plataforma web para gestión de pacientes, citas, rutinas terapéuticas, contenido especializado y venta de productos.",

        description: `
            RotomFit es una plataforma web desarrollada para optimizar la gestión de una clínica de la rehabilitación física. El sistema centraliza la administración de pacientes, el agendamiento de citas, la creación de rutinas terapéuticas personalizadas y la publicación de contenido informativo para los usuarios.

            Además, incorpora un módulo de comercio electrónico para el apartado de productos relacionados con la terapia física, permitiendo a los administradores gestionar inventario, pedidos y entregas desde una misma plataforma. 
            El objetivo principal del proyecto es facilitar el seguimiento de los pacientes y mejorar la organización de los procesos clínicos y administrativos.
        `,

        technologies: [
            "Laravel",
            "MySQL",
            "React",
            "Tailwind",
        ],

        role: "Desarrollador Full Stack",

        features: [
            "Registro y gestión de pacientes",
            "Aprobación y validación de pacientes por administradores",
            "Agendamiento y administración de citas",
            "Creación y gestión de ejercicios terapéuticos",
            "Diseño de rutinas personalizadas compuestas por múltiples ejercicios",
            "Dosificación de ejercicios mediante series, repeticiones y parámetros específicos",
            "Seguimiento de rutinas asignadas a pacientes",
            "Gestión de productos para la tienda en línea",
            "Carrito de compras y administración de pedidos",
            "Seguimiento de entregas pendientes por parte de administradores",
            "Publicación y administración de artículos informativos para terapia física",
        ],

        images: [
          "/projects/rotomfit/Welcome.png",
          "/projects/rotomfit/Blogs.png",
          "/projects/rotomfit/Productos.png",
           "/projects/rotomfit/Perfil.png",

        ],

        github: null,
        demo: "https://rotomfit.com/"
    },

    {
        id: 3,
        translationKey: "maternico",
        name: "Maternico",

        logo: "/projects/maternico/MaternicoLogo.jpg",

        shortDescription:"Aplicación móvil diseñada para acompañar a las madres primerizas en el cuidado y seguimiento de sus bebés.",

        description: `
            Maternico es una aplicación móvil desarrollada por un equipo multidisciplinario integrado por estudiantes de Ingeniería de Software, Contaduría y Gestión de Negocios de la Universidad Veracruzana. El proyecto surgió como una iniciativa de emprendimiento para competir en eventos organizados por ANFECA a nivel regional y nacional, combinando conocimientos tecnológicos, administrativos y financieros para desarrollar una solución con impacto social.
            
            Fue pensada especialmente para madres primerizas, tanto en zonas urbanas como en comunidades con recursos limitados. Su propósito es centralizar toda la información y seguimiento necesario durante los primeros años de vida del bebé, en un solo lugar accesible desde el celular.
            
            La aplicación permite registrar los datos del bebé y llevar un calendario personalizado donde se pueden agendar eventos propios, pero que también viene precargado con hitos médicos importantes como calendarios de vacunación y revisiones pediátricas según la edad del bebé. Cuenta con una sección informativa a través de videos y revistas digitales, y un directorio que ayuda a localizar los centros de salud o hospitales IMSS más cercanos. Las mamás pueden interactuar entre sí a través de un foro comunitario y conservar  los momentos especiales de su bebé en un álbum fotográfico dentro de la app. El sistema tiene dos modalidades: una versión gratuita y una versión premium con acceso ampliado al contenido.
        `,

        technologies: [
            "Laravel",
            "MySQL",
            "React Native",
        ],

        role: "Desarrollador Backend",

        features: [
            "Registro y autenticación de usuarios (madre y administrador)",
            "Registro y gestión del perfil del bebé",
            "Calendario de eventos con hitos de vacunación precargados por edad",
            "Álbum fotográfico de acontecimentos del bebé",
            "Foro comunitario entre madres con comentarios",
            "Directorio de centros de salud y hospitales IMSS cercanos",
            "Visualización de revistas informativas sobre crianza y salud",
            "Visualización de videos informativos sobre cuidado del bebé",
            "Gestión de contenido (revistas y videos) por parte del administrador",
            "Moderación del foro y comentarios por parte del administrador",
        ],

        images: [
            "/projects/maternico/MaternicoStaff.jpg",
            "/projects/maternico/Stand.jpeg",
            "/projects/maternico/LoginMaternico.png",
            "/projects/maternico/DashboardMaternico.png",
            // "/projects/maternico/PerfilBebe.png",
            // "/projects/maternico/Calendario.png",
        ],  

        github: null,
        demo: null,
    },

     {
        id: 4,
        translationKey: "imprenta",
        name: "Imprenta Vázquez",

        logo: "/projects/imprenta/ImprentaVazquezLogo.jpg",

        shortDescription:"Plataforma web de gestión de solicitudes de impresión que permite a los clientes solicitar trabajos desde casa y dar seguimiento a su proceso, mientras el administrador gestiona cada etapa.",

        description: `
            Es una plataforma web diseñada para digitalizar y centralizar la operación de una imprenta. El administrador es el encargado de registrar manualmente a los clientes en el sistema, quienes una vez con acceso pueden ingresar desde cualquier lugar y crear solicitudes de trabajo de impresión sin necesidad de acudir físicamente al local.
            
            Cada solicitud pasa por un flujo de estados que tanto el cliente como el administrador pueden consultar en todo momento, permitiendo transparencia y seguimiento desde que se recibe el pedido hasta que se completa. Cuando el trabajo es aprobado y el cliente elige pagar por transferencia bancaria, puede subir directamente su comprobante de pago desde la plataforma para agilizar la confirmación.
            El administrador cuenta con una vista de perfil por cliente donde puede revisar todos los trabajos realizados a lo largo del tiempo, facilitando el seguimiento de clientes frecuentes y el historial completo de su relación comercial. Además, gestiona un catálogo de tipos de trabajo configurable donde puede agregar, editar o eliminar los servicios de impresión disponibles, manteniendo siempre actualizada la oferta al momento en que los clientes generen nuevas solicitudes.
        `,

        technologies: [
            "Laravel",
            "Next.js",
            "MySQL",
            "Tailwind",
        ],

        role: "Desarrollador Backend",

        features: [
            "Registro y gestión de clientes por parte del administrador",
            "Autenticación de clientes y administrador",
            "Creación de solicitudes de trabajo de impresión por parte del cliente",
            "Seguimiento del estado de las solicitudes en tiempo real",
            "Gestión y actualización de estados de solicitudes por el administrador",
            "Carga de comprobante de pago por transferencia bancaria",
            "CRUD de tipos de trabajo de impresión disponibles",
            "Perfil de cliente con historial completo de trabajos realizados",
            "Visualización del historial de solicitudes por cliente",
        ],

        images: [
            "/projects/imprenta/Login.jpg",
            "/projects/imprenta/Solicitudes.jpg",
            "/projects/imprenta/DetalleCliente.jpg",
            "/projects/imprenta/SolicitudImpresion.jpg",    
        ],  

        github: null,
        demo: null,
    },


    
];