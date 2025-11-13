# Portafolio

Portafolio web construido con **React + Vite** y **Tailwind CSS**, diseñado para mostrar tu experiencia profesional con un estilo moderno, oscuro y acentos neón. Incluye animaciones con **Framer Motion**, un chatbot flotante, modo claro/oscuro, formulario de contacto funcional con EmailJS y estructura lista para escalar (blog, panel admin, etc.).

## 🚀 Características clave

- ⚡️ Stack React + Vite con recarga en caliente (`npm run dev`).
- 🎨 Diseño dark mode con gradientes neón, efectos glassmorphism y animaciones suaves.
- 🤖 Chatbot flotante animado con respuestas simuladas listo para conectar con APIs (OpenAI, WhatsApp, Telegram).
- 🛠️ Componentes reutilizables, estructura modular (`components`, `sections`, `data`, `hooks`, `services`).
- 📱 Diseño completamente responsive (desktop, tablet y mobile).
- 📨 Formulario de contacto validado con integración a EmailJS.
- 🌗 Modo claro/oscuro persistente con `localStorage`.
- 🔍 SEO básico (meta tags, favicon personalizado).
- 🧩 Datos centralizados (navegación, proyectos, experiencia, habilidades) para edición rápida.

## 📁 Estructura de carpetas


portfolio/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── assets/
    ├── components/
    ├── context/
    ├── data/
    ├── hooks/
    ├── sections/
    └── services/