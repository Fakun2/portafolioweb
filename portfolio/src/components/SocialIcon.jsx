import * as Icons from 'react-icons/fa';

// Ícono reutilizable para enlaces sociales con animaciones y accesibilidad
const SocialIcon = ({ label, href, icon }) => {
  const IconComponent = Icons[icon] ?? Icons.FaRegSmile;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${label}`}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-slate-300 transition hover:border-neon-purple hover:text-neon-purple"
    >
      <IconComponent className="text-xl transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
    </a>
  );
};

export default SocialIcon;