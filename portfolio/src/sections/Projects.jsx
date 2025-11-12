import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects.js';

// Sección de proyectos destacados con tarjetas interactivas
const Projects = () => {
  return (
    <section id="proyectos">
      <div className="container-section">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-white">Proyectos seleccionados</h2>
          <p className="max-w-2xl text-slate-300">
            Cada proyecto combina investigación, UX y performance. Haz hover sobre cada tarjeta para descubrir los detalles y
            accede al repositorio público en GitHub.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 shadow-xl"
              whileHover={{ translateY: -8 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neon-cyan/20 via-slate-900 to-neon-purple/20">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-screen" />
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4 p-8">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-neon-cyan">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-neon-purple hover:text-neon-purple"
                  >
                    <FiGithub /> Código
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neon-cyan transition hover:text-neon-purple"
                  >
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;