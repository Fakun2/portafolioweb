# Portafolio Profesional Moderno

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

```bash
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
```

Cada sección y componente incluye comentarios en español para facilitar el mantenimiento y la extensión del proyecto.

## 🛠️ Requisitos previos

- Node.js 18 o superior.
- npm 9 o superior.

> Si tu entorno bloquea el acceso a `npm`, puedes descargar los paquetes manualmente o utilizar un mirror privado.

## 📦 Instalación

```bash
cd portfolio
npm install
```

## 🧪 Desarrollo local

```bash
npm run dev
```

Esto abrirá la aplicación en `http://localhost:5173` con recarga en caliente.

## 🏗️ Build de producción

```bash
npm run build
npm run preview
```

El comando `build` genera la carpeta `dist/` lista para desplegar y `preview` sirve la build localmente para verificación.

## ✉️ Configuración de EmailJS

1. Crea una cuenta gratuita en [EmailJS](https://www.emailjs.com/).
2. Genera un **Service ID**, **Template ID** y **Public Key**.
3. Crea un archivo `.env` en la raíz del proyecto con las variables:

   ```bash
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

4. Reinicia el servidor de desarrollo (`npm run dev`).

> Si prefieres otro servicio (Formspree, Resend, API propia), actualiza `src/sections/Contact.jsx`.

## 🤖 Personalización del Chatbot

- Las respuestas simuladas se definen en `src/services/chatbotService.js`.
- Para conectarlo con OpenAI u otra API, reemplaza la función `sendMessage` con la integración deseada.
- El componente principal está en `src/components/Chatbot.jsx` con animaciones de Framer Motion y estilo Tailwind.

## 🌐 Despliegue recomendado

- [Vercel](https://vercel.com/) — integración directa con repos GitHub/GitLab/Bitbucket.
- [Netlify](https://www.netlify.com/) — soporte para builds automáticas y formularios.
- [GitHub Pages](https://pages.github.com/) — requiere ejecutar `npm run build` y subir `dist/`.

Configura la variable de entorno `VITE_EMAILJS_PUBLIC_KEY` en tu plataforma de despliegue para mantener el formulario funcional.

## 📝 Próximos pasos sugeridos

- Añadir sección de blog usando markdown (`src/posts`) y un generador estático sencillo.
- Conectar el chatbot a un backend (Node.js + Express) para respuestas inteligentes.
- Integrar analítica (Plausible, Google Analytics) y monitoreo de rendimiento.
- Añadir pruebas automatizadas (Vitest, Cypress) dentro de CI/CD.

## 📄 Licencia

Uso personal y comercial permitido. Personaliza los créditos a tu nombre y actualiza los enlaces a tus perfiles reales.

---

Hecho con 💡, código limpio y animaciones suaves para resaltar tu talento.