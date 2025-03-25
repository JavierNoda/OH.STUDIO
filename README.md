# 🚀 Mi Proyecto Web

Este es un proyecto donde he aprendido y aplicado varias tecnologías como HTML, CSS, JavaScript, GitHub, Vercel, Cloudinary, Bootstrap, Boxicons y Animate.css.

---

## 📌 Tecnologías Usadas

### 🔹 HTML, CSS y JavaScript
- **HTML**: Estructura el contenido de la página.
- **CSS**: Da estilo y diseño a los elementos.
- **JavaScript**: Añade interactividad y funcionalidades dinámicas.

### 🔹 Git y GitHub
Comandos esenciales usados en GitHub:
- `git init` → Inicia un repositorio Git.
- `git add .` → Agrega todos los archivos al área de preparación.
- `git commit -m "Mensaje"` → Guarda los cambios en el historial.
- `git push origin main` → Sube los cambios al repositorio remoto.
- `git pull origin main` → Descarga la última versión del código.

### 🔹 Vercel (Hosting)
Pasos para desplegar en Vercel:
1. Instalar Vercel con `npm install -g vercel`
2. Iniciar sesión con `vercel login`
3. Subir el proyecto con `vercel`

### 🔹 Cloudinary (Gestión de imágenes)
- Se usa para almacenar imágenes de manera optimizada en la nube.
- Se integró con JavaScript para cargar imágenes dinámicamente.
- Se usó **lazy loading** en imágenes para mejorar el rendimiento:
  ```html
  <img src="imagen.jpg" loading="lazy" alt="Descripción de la imagen">
  ```

### 🔹 Bootstrap (Diseño rápido)
- Se usaron clases de Bootstrap para botones, grids y responsividad.
- Ejemplo: `<div class="container">...</div>`

### 🔹 Boxicons (Íconos personalizados)
- Se usaron íconos llamativos con:
  ```html
  <i class="bx bx-home"></i>
  ```

### 🔹 Animate.css (Animaciones)
- Se añadieron efectos de animación en los elementos:
  ```html
  <div class="animate__animated animate__bounce">Hola</div>
  ```

---

## 🔹 Mejora de Rendimiento y Accesibilidad

### ✅ **Optimización de Imágenes**
- Uso de **formatos modernos** como WebP para imágenes:
  ```html
  <picture>
    <source srcset="imagen.webp" type="image/webp">
    <img src="imagen.jpg" alt="Descripción">
  </picture>
  ```
- Imágenes adaptativas con `srcset` para dispositivos de diferentes tamaños.

### ✅ **Carga Diferida (Lazy Loading)**
- Se implementó `loading="lazy"` en imágenes y `defer` en scripts:
  ```html
  <script src="script.js" defer></script>
  ```

### ✅ **Accesibilidad (A11Y)**
- Se agregaron etiquetas `alt` en imágenes para accesibilidad.
- Se mejoró el contraste de colores y el tamaño de fuente para legibilidad.
- Se usaron etiquetas semánticas como `<header>`, `<main>`, `<footer>`.

### ✅ **Minificación de CSS y JS**
- Se usó minificación para reducir el peso de los archivos CSS y JS.
- Uso de herramientas como Terser y PurifyCSS para eliminar código innecesario.

### ✅ **Uso de Lighthouse para Auditar el Sitio**
- **Lighthouse** es una herramienta de Google para analizar rendimiento, accesibilidad y SEO.
- Se ejecutó en Chrome DevTools (`F12 > Lighthouse`) para mejorar métricas clave.

---

## 🔹 📌 Instalación y Uso
- Clona este repositorio:
  ```sh
  git clone https://github.com/JavierNoda/OH.STUDIO.git
  ```
- Abre el proyecto en tu editor favorito.
- Ejecuta el proyecto en un servidor local o despliega con Vercel.


