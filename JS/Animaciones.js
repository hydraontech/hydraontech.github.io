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

  card.addEventListener('mouseenter', () => {
    // Agrega el texto si no está ya agregado
    if (contentDiv.innerHTML.trim() === '') {
      contentDiv.innerHTML = `<p>${infoTexts[type] || 'Information not available'}</p>`;
    }
  });

  card.addEventListener('mouseleave', () => {
    // Si quieres que se borre el contenido al salir, descomenta la línea siguiente
    // contentDiv.innerHTML = '';
  });
});

// Código para menú hamburguesa responsive
const menuToggle = document.querySelector('.menu-toggle');
const botones = document.querySelector('.botones');

menuToggle.addEventListener('click', () => {
  if (botones.style.display === 'flex') {
    botones.style.display = 'none';
  } else {
    botones.style.display = 'flex';
  }
});
