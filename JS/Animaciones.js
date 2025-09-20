// Diccionario de contenido según tipo
const infoTexts = {
  mision: "Implement and develop systems that benefit vulnerable communities, promoting the responsible use of water and environmental conservation.",
  vision: "Be leaders in sustainable innovation, transforming rainwater into an efficient tool for human consumption and hydroponic agriculture.",
  captacion: "Installation of innovative systems for collecting rainwater.",
  purificacion: "Safe filtration and purification technologies for human consumption.",
  consultoria: "Advisory services for water sustainability projects for companies and communities."
};

// Detectar si es un dispositivo táctil
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.info-card');

cards.forEach(card => {
  const type = card.getAttribute('data-type');
  const contentDiv = card.querySelector('.info-content');

  function showText() {
    contentDiv.innerHTML = `<p>${infoTexts[type] || 'Information not available'}</p>`;
  }

  function hideText() {
    contentDiv.innerHTML = '';
  }

  function toggleText() {
    if (contentDiv.innerHTML.trim() === '') {
      showText();
    } else {
      hideText();
    }
  }

  if (isTouchDevice) {
    // En móviles: tocar para alternar
    card.addEventListener('click', toggleText);
  } else {
    // En escritorio: hover para mostrar y ocultar
    card.addEventListener('mouseenter', showText);
    card.addEventListener('mouseleave', hideText);
  }
});
