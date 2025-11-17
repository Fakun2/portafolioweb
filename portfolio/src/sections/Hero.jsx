import { motion } from "framer-motion";
import facundoImg from "../assets/facundo.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center md:flex-row md:justify-between gap-10 px-6 md:px-16 relative"
    >
      {/* Fondo glow */}
      <div className="absolute inset-0 bg-hero-gradient opacity-40 blur-3xl pointer-events-none"></div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          ¡Hola! Soy <span className="text-blue-400">Facundo Nosa</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Desarrollador Frontend & Tester QA en formación, apasionado por la
          tecnología, el diseño elegante y la creación de experiencias digitales únicas.
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 transition-all py-3 px-6 rounded-lg font-bold text-white shadow-lg shadow-blue-500/20"
        >
          Contacto
        </a>
      </motion.div>

      {/* Imagen con estilo hero */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-[0_0_30px_5px_rgba(0,150,255,0.3)] bg-slate-900/40 backdrop-blur-xl border border-slate-700/40">
          <img
            src={facundoImg}
            alt="Facundo Nosa"
            className="w-full h-full object-cover"
          />

          {/* borde glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 pointer-events-none"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
