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
    <section id="contact" className="w-full py-20 bg-black text-white relative">
      <Toaster position="top-center" />

      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contactame
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto flex flex-col gap-6 bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
      >
        <label className="flex flex-col gap-2">
          <span className="text-gray-300">Tu nombre</span>
          <input
            type="text"
            name="name"
            placeholder="Juan Pérez"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-gray-300">Tu email</span>
          <input
            type="email"
            name="email"
            placeholder="tuemail@gmail.com"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-gray-300">Mensaje</span>
          <textarea
            name="message"
            placeholder="Escribí tu mensaje aquí..."
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white h-32 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg font-bold uppercase tracking-wide"
        >
          Enviar mensaje
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
