const characters = document.querySelectorAll('.character');
const statsCard = document.getElementById('stats-card');
const nameEl = document.getElementById('char-name');
const statsEl = document.getElementById('char-stats');
const charElement = document.getElementById('char-element');
const params = new URLSearchParams(window.location.search);
const map = params.get('map');
const mapName = document.getElementById('map-name');
if (map) {
    mapName.textContent = `Mapa seleccionado: ${decodeURIComponent(map)}`;
} else {
    mapName.textContent = 'Ningún mapa seleccionado.';
}

characters.forEach(char => {
  char.addEventListener('mousemove', e => {
    nameEl.textContent = char.dataset.name;
    statsEl.textContent = char.dataset.stats;
    charElement.textContent = "Elemento: "+char.dataset.element

    statsCard.style.top = `${e.clientY + 25}px`;
    statsCard.style.left = `${e.clientX + 25}px`;
    statsCard.classList.remove('hidden');
  });

  char.addEventListener('mouseleave', () => {
    statsCard.classList.add('hidden');
  });

  char.addEventListener('click', ()=>{
    const characterSelected = encodeURIComponent(char.dataset.name);
    const charSrc = encodeURIComponent(char.querySelector('img').src);
    window.location.href = `loading.html?map=${map}&character=${characterSelected}&charSrc=${charSrc}`;
  })
});
