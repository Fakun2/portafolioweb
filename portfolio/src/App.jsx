import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';
import ScrollIndicators from './components/ScrollIndicators.jsx';
import useTheme from './hooks/useTheme.js';

// Componente principal que orquesta todas las secciones del portafolio
function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="bg-slate-950 text-slate-100 min-h-screen relative overflow-x-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-60 blur-3xl" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
        <ScrollIndicators />
      </div>
    </div>
  );
}

export default App;