window.onload = function () {
  window.scrollTo(0, 0);
};

fetch(window.location.href).then((response) => {
  if (!response.ok) {
    window.location.href = '/src/404.html';
  }
});

// Función callback que se ejecuta cuando la sección entra en el viewport
/**
 * Callback function for IntersectionObserver that adds a 'visible' class to elements
 * when they enter the viewport and stops observing them.
 *
 * @param {IntersectionObserverEntry[]} entries - Array of IntersectionObserverEntry objects.
 * @param {IntersectionObserver} observer - The IntersectionObserver instance.
 */
const fadeInOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Agrega la clase "visible" cuando la sección entra en el viewport
      entry.target.classList.add('visible');
      // Deja de observar una vez que la sección es visible
      observer.unobserve(entry.target);
    }
  });
};

// Crear una instancia de IntersectionObserver
const observer = new IntersectionObserver(fadeInOnScroll, {
  threshold: 0.4, // Se activará cuando el 50% de la sección esté visible
});

// Seleccionar todas las secciones y empezar a observarlas
const sections = document.querySelectorAll('.fade-section');
sections.forEach((section) => {
  observer.observe(section);
});

/* INSERCION DE VISTAS */

// const templateHeader = document.getElementById('header-template');
// document
//   .getElementById('header-container')
//   .appendChild(templateHeader.content.cloneNode(true));

// document.addEventListener('DOMContentLoaded', function () {
//   const template = document.getElementById('footer-template');
//   const footerContainer = document.getElementById('footer-container');

//   if (template && footerContainer) {
//     footerContainer.appendChild(template.content.cloneNode(true));
//   }
// });
