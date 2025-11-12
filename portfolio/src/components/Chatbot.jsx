import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMessageCircle, FiSend } from 'react-icons/fi';
import { sendMessage } from '../services/chatbotService.js';

// Chatbot flotante con animaciones y respuestas simuladas
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      content: '¡Bienvenido! Soy tu asistente virtual. Pregúntame sobre proyectos, disponibilidad o servicios.'
    }
  ]);
  const [pendingMessage, setPendingMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!pendingMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      content: pendingMessage.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    setPendingMessage('');
    setLoading(true);

    const response = await sendMessage(userMessage.content);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: 'bot',
        content: response
      }
    ]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={toggleChat}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-slate-950 transition-transform hover:scale-105"
        style={{ boxShadow: '0 18px 45px rgba(99, 102, 241, 0.28)' }}
        aria-label="Abrir chatbot"
      >
        <FiMessageCircle className="text-2xl" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="glass-panel mt-4 w-80 max-w-[90vw] overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-white/5 bg-slate-900/70 px-4 py-3">
              <span className="text-sm font-semibold tracking-wide text-neon-cyan">Asistente Virtual</span>
              <button
                type="button"
                className="text-xs uppercase tracking-[0.3em] text-slate-400 hover:text-neon-purple"
                onClick={toggleChat}
              >
                Cerrar
              </button>
            </div>
            <div className="flex max-h-80 flex-col gap-3 overflow-y-auto px-4 py-4 text-sm">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <p
                    className={`max-w-[80%] rounded-2xl px-4 py-2 leading-relaxed shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-neon-purple/80 to-neon-blue/80 text-slate-950'
                        : 'bg-slate-900/80 text-slate-200'
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              ))}
              {loading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <p className="rounded-2xl bg-slate-900/80 px-4 py-2 text-slate-300">Escribiendo...</p>
                </motion.div>
              )}
            </div>
            <form className="flex items-center gap-2 border-t border-white/5 bg-slate-900/70 px-4 py-3" onSubmit={handleSubmit}>
              <input
                type="text"
                value={pendingMessage}
                onChange={(event) => setPendingMessage(event.target.value)}
                placeholder="Escribe tu mensaje"
                className="flex-1 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-slate-950 transition hover:scale-105"
                style={{ boxShadow: '0 14px 32px rgba(99, 102, 241, 0.26)' }}
                disabled={loading}
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;