import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navigationLinks, socialLinks } from '../data/navigation.js';
import ThemeToggle from './ThemeToggle.jsx';
import SocialIcon from './SocialIcon.jsx';

// Barra de navegación fija con modo oscuro, enlaces y menú móvil animado
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-2xl border-b border-white/5">
      <div className="container-section flex items-center justify-between py-4">
        <a href="#inicio" className="text-lg font-semibold tracking-tight highlight-text">
          Facundo Nosa · Full Stack Developer
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-slate-300 hover:text-neon-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <SocialIcon key={link.label} {...link} />
            ))}
            <ThemeToggle />
          </div>
        </nav>
        <button
          type="button"
          aria-label="Abrir menú"
          className="md:hidden text-slate-200 text-2xl"
          onClick={toggleMenu}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/5 bg-slate-950/95"
          >
            <div className="container-section flex flex-col gap-4 py-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.3em] text-slate-300 hover:text-neon-purple"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.label} {...link} />
                ))}
                <ThemeToggle />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;