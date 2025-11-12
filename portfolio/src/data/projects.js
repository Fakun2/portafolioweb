import dashboard from '../assets/dashboard-neon.svg';
import courses from '../assets/online-courses.svg';
import assistant from '../assets/ai-assistant.svg';

// Listado de proyectos destacados con enlaces y descripciones
export const projects = [
  {
    title: 'Sistema de Analítica en Tiempo Real',
    description:
      'Dashboard interactivo construido con React, WebSockets y Tailwind para visualizar métricas empresariales con actualización en vivo.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Socket.IO'],
    image: dashboard,
    repo: 'https://github.com/tu-usuario/analytics-dashboard'
  },
  {
    title: 'Plataforma de Cursos en Línea',
    description:
      'Aplicación responsive con autenticación, pagos y panel de administración. Incluye integración con Stripe y generación de certificados.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: courses,
    repo: 'https://github.com/tu-usuario/online-courses'
  },
  {
    title: 'Asistente Virtual Inteligente',
    description:
      'Chatbot conectado a la API de OpenAI con memoria conversacional y despliegue en Vercel. UI con modo claro/oscuro y soporte multilenguaje.',
    tech: ['React', 'OpenAI API', 'Framer Motion'],
    image: assistant,
    repo: 'https://github.com/tu-usuario/ai-assistant'
  }
];