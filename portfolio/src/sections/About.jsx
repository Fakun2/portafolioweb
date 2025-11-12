import { motion } from 'framer-motion';
import { skills } from '../data/skills.js';

// Sección sobre mí con descripción y habilidades destacadas
const About = () => {
  return (
    <section id="sobre-mi">
      <div className="container-section grid gap-12 lg:grid-cols-2">
        <motion.div
          className="glass-panel p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-white">Sobre mí</h2>
          <p className="mt-4 text-slate-300">
            Soy un desarrollador full stack con más de 6 años de experiencia construyendo soluciones digitales end-to-end.
            Disfruto convertir ideas complejas en productos elegantes, escalables y centrados en las personas.
          </p>
          <p className="mt-4 text-slate-300">
            Domino arquitecturas modernas basadas en microservicios, metodologías ágiles y herramientas DevOps. Mi objetivo es
            crear experiencias memorables que impulsen resultados de negocio medibles.
          </p>
        </motion.div>
        <motion.div
          className="glass-panel p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold text-white">Competencias clave</h3>
          <p className="mt-4 text-slate-400">
            Estas son algunas de las tecnologías y herramientas con las que trabajo a diario:
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-200"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(34,211,238,0.2)' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;