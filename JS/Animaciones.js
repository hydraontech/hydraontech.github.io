// Diccionario de contenido según tipo
const infoTexts = {
  mision: "Implement and develop systems that benefit vulnerable communities, promoting the responsible use of water and environmental conservation.",
  vision: "Be leaders in sustainable innovation, transforming rainwater into an efficient tool for human consumption and hydroponic agriculture.",
  captacion: "Installation of innovative systems for collecting rainwater.",
  purificacion: "Safe filtration and purification technologies for human consumption.",
  consultoria: "Advisory services for water sustainability projects for companies and communities."
};

// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.info-card');

// Agrega eventos a cada tarjeta
cards.forEach(card => {
  const type = card.getAttribute('data-type');
  const contentDiv = card.querySelector('.info-content');

  function showText() {
    if (contentDiv.innerHTML.trim() === '') {
      contentDiv.innerHTML = `<p>${infoTexts[type] || 'Information not available'}</p>`;
    }
  }

  function hideText() {
    contentDiv.innerHTML = '';
  }

  function toggleText(e) {
    e.stopPropagation(); // Evita conflictos con otros clics
    if (contentDiv.innerHTML.trim() === '') {
      showText();
    } else {
      hideText();
    }
  }

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    // Usamos 'touchstart' para que responda al primer toque
    card.addEventListener('touchstart', toggleText);
  } else {
    card.addEventListener('mouseenter', showText);
    card.addEventListener('mouseleave', hideText);
  }
});
