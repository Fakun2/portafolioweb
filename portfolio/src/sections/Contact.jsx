import { useRef } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Mensaje enviado correctamente 🎉");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Hubo un error al enviar el mensaje 😓");
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white"
    >
      <Toaster position="top-center" />

      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-xl bg-hero-gradient opacity-60 blur-3xl" />

      <motion.h2
        className="relative z-10 text-center text-4xl font-bold tracking-tight sm:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contactame
      </motion.h2>

      <motion.p
        className="relative z-10 mx-auto mt-4 max-w-xl text-center text-sm text-slate-400 sm:text-base"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Tenes una idea, propuesta o proyecto interesante{`?`} Enviame un mensaje y te respondo lo antes posible.
        
      </motion.p>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 mx-auto mt-10 flex max-w-lg flex-col gap-6 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_0_40px_rgba(15,23,42,0.9)] outline outline-1 outline-slate-800/60"
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent [background:radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.35),transparent_55%)]" />

        <div className="relative flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">Tu nombre</span>
          <input
            type="text"
            name="name"
            placeholder="Juan Pérez"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 p-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-blue/60"
          />
        </div>

        <div className="relative flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">Tu email</span>
          <input
            type="email"
            name="email"
            placeholder="tuemail@gmail.com"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 p-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-blue/60"
          />
        </div>

        <div className="relative flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">Mensaje</span>
          <textarea
            name="message"
            placeholder="Escribí tu mensaje aquí..."
            required
            className="h-32 w-full resize-none rounded-lg border border-slate-700 bg-slate-900/80 p-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-blue/60"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-cyan-500/30 transition-colors hover:from-cyan-300 hover:via-blue-400 hover:to-violet-400"
        >
          Enviar mensaje
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
