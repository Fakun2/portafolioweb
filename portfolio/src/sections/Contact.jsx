import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

// Formulario de contacto conectado a EmailJS con validaciones básicas
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Por favor completa todos los campos antes de enviar.' });
      return;
    }

    try {
      setStatus({ type: 'loading', message: 'Enviando mensaje...' });
      // Estas variables deben configurarse en EmailJS y almacenarse en variables de entorno
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !userId) {
        throw new Error('Faltan credenciales de EmailJS. Configúralas en el archivo .env local.');
      }

      await emailjs.send(serviceId, templateId, formData, userId);
      setStatus({ type: 'success', message: '¡Mensaje enviado! Te responderé muy pronto.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message:
          'No fue posible enviar tu mensaje en este momento. Intenta nuevamente o escríbeme directo a tu.correo@ejemplo.com.'
      });
    }
  };

  return (
    <section id="contacto">
      <div className="container-section">
        <motion.div
          className="glass-panel p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-white">Conectemos</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Cuéntame sobre tu idea, proyecto o posición disponible. Estoy listo para construir experiencias digitales
            memorables junto a tu equipo.
          </p>
          <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-200">
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-200">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-200">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:opacity-60"
              style={{ boxShadow: '0 18px 45px rgba(99, 102, 241, 0.28)' }}
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            {status.message && (
              <p
                className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}
              >
                {status.message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;