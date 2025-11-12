import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { timeline } from '../data/experience.js';

// Línea de tiempo para experiencia profesional y educación
const Experience = () => {
  return (
    <section id="experiencia">
      <div className="container-section">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-white">Experiencia & Formación</h2>
          <p className="max-w-2xl text-slate-300">
            Una trayectoria enfocada en generar impacto mediante tecnología, liderazgo y aprendizaje continuo.
          </p>
        </motion.div>
        <div className="relative mt-12 border-l border-white/10 pl-8">
          <div className="absolute -left-1 top-0 h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple" />
          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => {
              const Icon = Icons[item.icon] ?? Icons.FaRegClock;
              return (
                <motion.article
                  key={item.period}
                  className="relative rounded-3xl border border-white/5 bg-slate-900/60 p-8 shadow-lg"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="absolute -left-12 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-neon-cyan/40 bg-slate-950 text-neon-cyan">
                    <Icon className="text-xl" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-neon-cyan">{item.period}</span>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm text-slate-300">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;