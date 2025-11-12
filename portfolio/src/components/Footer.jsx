import SocialIcon from './SocialIcon.jsx';
import { socialLinks } from '../data/navigation.js';

// Pie de página con enlaces sociales y créditos
const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-10">
      <div className="container-section flex flex-col items-center gap-6 text-center text-sm text-slate-400">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} {...link} />
          ))}
        </div>
        <p>
          © {new Date().getFullYear()} Tu Nombre. Construido con ❤ utilizando React, Tailwind CSS y Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;