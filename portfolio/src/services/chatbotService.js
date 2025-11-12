// Servicio sencillo que simula respuestas automáticas del chatbot
const defaultResponses = [
  '¡Hola! Gracias por visitar mi portafolio. ¿En qué puedo ayudarte hoy?',
  'Actualmente estoy disponible para proyectos freelance y posiciones remotas.',
  'Puedo ayudarte a construir aplicaciones web modernas con React, Node.js y bases de datos SQL/NoSQL.',
  'Si deseas conocer más detalles, revisa la sección de proyectos o escríbeme a través del formulario de contacto.'
];

export const sendMessage = async (message) => {
  // Simulamos latencia para imitar una llamada a API real
  await new Promise((resolve) => setTimeout(resolve, 600));

  const normalized = message.toLowerCase();
  if (normalized.includes('hola') || normalized.includes('buen')) {
    return '¡Hola! Es un gusto saludarte 👋. ¿Buscas colaboración o información específica?';
  }
  if (normalized.includes('precio') || normalized.includes('costo')) {
    return 'Cada proyecto es único. Tras una llamada de descubrimiento puedo enviarte una propuesta personalizada en menos de 24 horas.';
  }
  if (normalized.includes('contacto') || normalized.includes('email')) {
    return 'Puedes escribirme directamente a tu.correo@ejemplo.com o usar el formulario en la sección de contacto.';
  }

  // Si no detectamos coincidencias, devolvemos una respuesta aleatoria
  const randomIndex = Math.floor(Math.random() * defaultResponses.length);
  return defaultResponses[randomIndex];
};