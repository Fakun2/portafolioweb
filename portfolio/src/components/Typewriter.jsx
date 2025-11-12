import { useEffect, useState } from 'react';

// Componente de efecto máquina de escribir sin dependencias externas
const Typewriter = ({ phrases, typingSpeed = 120, pauseTime = 1800 }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!deleting && text.length < currentPhrase.length) {
      timeout = setTimeout(() => setText(currentPhrase.slice(0, text.length + 1)), typingSpeed);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentPhrase.slice(0, text.length - 1)), typingSpeed / 2);
    } else if (!deleting && text.length === currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typingSpeed, pauseTime]);

  return (
    <span className="relative after:absolute after:-right-2 after:top-0 after:h-full after:w-[2px] after:animate-pulse after:bg-neon-cyan">
      {text}
    </span>
  );
};

export default Typewriter;