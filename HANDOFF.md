# HANDOFF — Sitio web The Professional Cleaners Inc.

> **Cómo usar este archivo:** abre un chat nuevo, **sube el ZIP `the-professional-cleaners-site.zip`** y **pega el contenido de este archivo** como primer mensaje. Con eso el nuevo asistente tiene todo el contexto y los archivos para continuar.

---

## Mensaje sugerido para pegar en el chat nuevo

Estoy continuando el sitio web de **The Professional Cleaners Inc.** (empresa de limpieza en el GTA, Canadá). Te adjunto el ZIP con el sitio actual. Por favor descomprímelo, confírmame que ves las 13 páginas HTML + la carpeta `images/`, y sigue a partir de ahí. Trabajamos en **español**. Abajo está todo el contexto.

---

## 1. Qué es el proyecto
- Sitio de marketing (generación de prospectos) para **The Professional Cleaners Inc.**, empresa de limpieza en el **Greater Toronto Area (GTA)** y **York Region**.
- **Enfoque principal: limpieza COMERCIAL** (negocios). Mensaje profesional, confiable, orientado a empresas, capaz de manejar espacios grandes y contratos recurrentes.
- La limpieza de casas queda **al final y con menos énfasis**.
- Es solo **diseño (front-end)** por ahora — el formulario todavía **no está conectado** a ningún correo/backend.

## 2. Estilo de trabajo
- **Ejecutar primero, iterar después:** construir y luego ajustar con feedback (poca confirmación previa).
- Comunicación **en español**.
- Entorno de trabajo: Python + Playwright (validación/capturas) + PIL (imágenes). Archivos en `/mnt/user-data/outputs/`.
- Validación estándar tras cada cambio: 0 desbordamiento horizontal en **390 / 768 / 1280px**, 0 errores JS, 0 enlaces internos rotos, imágenes cargan.
- Tras cada cambio: reconstruir el ZIP con `zip -r the-professional-cleaners-site.zip *.html logo.png images/` (¡`images/` debe quedar como subcarpeta!).

## 3. Datos reales del negocio (autoritativos)
- **Nombre legal:** The Professional Cleaners Inc.
- **Teléfono:** (647) 620-2963  → en JS `PHONE_TEL="+16476202963"`
- **Email:** professionalcleaning74@gmail.com
- **Instagram:** @theprofessionalcleanerstoronto → https://www.instagram.com/theprofessionalcleanerstoronto
- **Zona:** York Region y el Greater Toronto Area.
- Footer: "© 2026 The Professional Cleaners Inc. All rights reserved."

## 4. Servicios (7, en este orden)
1. **Commercial Cleaning** (foto real) — de tiendas/edificios a bodegas/almacenes.
2. **Office Cleaning** (imagen de marca — falta foto real)
3. **Post-Construction Cleaning** (foto real)
4. **Janitorial Services** (imagen de marca — falta foto real)
5. **Carpet & Upholstery Cleaning** (imagen de marca — falta foto real)
6. **Window Cleaning** (foto real)
7. **Regular Home Cleaning** (foto real) — **último, de-enfatizado** (queda solo y centrado al final de la grilla).

Las descripciones vienen del folleto oficial de la empresa (texto propio del dueño).

## 5. Industrias que se destacan (en el Home)
Oficinas · Fábricas/Industrial · Gimnasios · Tiendas/Retail · Clínicas/Consultorios médicos · Escuelas.

## 6. Promoción y mensaje
- **15% de descuento en la primera limpieza** ("New Client Offer") — banner en la página de Servicios.
- Tagline: **"We customise it for you"** / "We customise every clean to your space".

## 7. Páginas (14 HTML + logo.png + images/)
- `index.html` — Home (reposicionada a comercial): hero comercial → trustbar → **Industrias que atendemos** (6) → **Qué incluye la limpieza comercial** (8 ítems, 4×2) → why-choose → how-it-works → eco → FAQ → CTA final.
- `gallery.html` — **Galería de trabajos**: 8 fotos reales en cuadrícula 4×2 con **lightbox** (clic para ampliar, flechas, Esc). Imágenes en `images/gallery/g1..g8.jpg` (también en base64).
- `services.html` — banner + **banner de promo 15%** + 7 tarjetas de servicio (comercial primero, casa al final centrada) + bloque SEO de resumen.
- `about.html`, `areas.html`, `contact.html` (formulario front-end con aside "Prefer to talk?" + subida de fotos con estilo).
- `faq.html` — **huérfana** (ya no está en el menú; el FAQ vive en el Home). Pendiente decidir si borrarla o reusarla.
- 7 páginas de servicio: `commercial-cleaning.html`, `office-cleaning.html`, `post-construction-cleaning.html`, `janitorial-services.html`, `carpet-upholstery-cleaning.html`, `window-cleaning.html`, `regular-home-cleaning.html`.

**Imágenes** (`images/`): las 7 también van **incrustadas en base64** dentro de cada página (para que se vean sin conexión / en previsualización). Fotos reales: commercial, post-construction, window, regular-home. Imágenes de marca (placeholder) pendientes de foto real: **office, janitorial, carpet-upholstery**.

## 8. Sistema de diseño (resumen)
- Colores: Azul primario `#0A7AF9`, blanco `#F7FDFD`, azul claro `#9CD1FA`, naranja `#EF9B03`, rosa `#CC01A9`, coral `#EC1F4C`, oscuro/footer `#081010`.
- Tipografías: **Plus Jakarta Sans** (títulos) + **Inter** (texto), vía Google Fonts.
- Logo: círculo azul con casa blanca (en base64 dentro de las páginas).
- El "chrome" compartido (barra superior, header sticky con hamburguesa ≤1100px, menú móvil, footer de 4 columnas, barra inferior fija móvil Call/Quote, y el `<script>`) está **duplicado en cada página** (no hay build step): editarlo requiere tocar todos los archivos con scripts (regex) en Python.
- Navegación: Home · About · Services · Gallery · Areas We Serve · Contact · botón "Request a Free Quote". (FAQ NO está en el menú.)

## 9. Pendientes (para continuar)
1. **Reseñas/Testimonios:** (pendiente) construir la sección (el dueño enviará reseñas reales: texto + nombre + opcional cargo/empresa + estrellas 1–5). **No inventar reseñas falsas.**
2. **Galería:** ✅ hecha (8 fotos de trabajos). Opcional: agregar sección de **Antes/Después** con pares reales si el dueño los envía.
3. **Fotos reales** para Office, Janitorial y Carpet & Upholstery (reemplazar las imágenes de marca).
4. Opcionales: conectar el formulario a Gmail (p. ej. Formspree); decidir si borrar `faq.html`; añadir CTA final a areas/contact; ampliar el copy de la sección "eco" para tono comercial.

## 10. Cómo ver / compartir el sitio
- **Ver:** descomprimir el ZIP, mantener todo en la misma carpeta, abrir `index.html`.
- **Compartir enlace en vivo (recomendado):** Netlify Drop (https://app.netlify.com/drop) — arrastrar la carpeta descomprimida. También sirve Vercel, Cloudflare Pages o GitHub Pages.
- Trabaja siempre a partir del **último ZIP** para no perder cambios.
