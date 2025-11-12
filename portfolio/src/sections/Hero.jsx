import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter.jsx';
import SocialIcon from '../components/SocialIcon.jsx';
import { socialLinks } from '../data/navigation.js';

// Sección principal con foto, titular y efecto máquina de escribir
const Hero = () => {
  const heroPhrases = useMemo(
    () => [
      'Construyo interfaces reactivas y accesibles.',
      'Automatizo procesos con APIs inteligentes.',
      'Diseño soluciones escalables y seguras.'
    ],
    []
  );

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="container-section grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Disponible para nuevas oportunidades
          </motion.span>
          <motion.h1
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            ¡Hola! Soy <span className="highlight-text">Tu Nombre</span>, desarrollador full stack con enfoque en experiencias digitales de alto impacto.
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            Combino un sólido background técnico con sensibilidad por el diseño para crear productos digitales fluidos, accesibles y memorables.
          </motion.p>
          <motion.div
            className="text-xl text-neon-cyan"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Typewriter phrases={heroPhrases} />
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <a
              href="#proyectos"
              className="rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              style={{ boxShadow: '0 18px 45px rgba(99, 102, 241, 0.28)' }}
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-neon-cyan hover:text-neon-cyan"
            >
              Hablemos
            </a>
          </motion.div>
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            {socialLinks.map((link) => (
              <SocialIcon key={link.label} {...link} />
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-full border border-white/10 bg-slate-900/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          style={{ boxShadow: '0 35px 90px rgba(168, 85, 247, 0.25)' }}
        >
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-neon-cyan/40 via-transparent to-neon-purple/40 blur-3xl" />
          <img
            src="https://avatars.dicebear.com/api/initials/Tu%20Nombre.svg"
            alt="Retrato profesional"
            className="relative h-60 w-60 rounded-full border-4 border-slate-900 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;