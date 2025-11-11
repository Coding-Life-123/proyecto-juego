const params = new URLSearchParams(window.location.search);
const map = params.get('map');
const character = params.get('character');
const charSrc = params.get('charSrc');

const img = document.getElementById('charImg');
const name = document.getElementById('charName');
const mapName = document.getElementById('mapName');

if (charSrc) img.src = decodeURIComponent(charSrc);
if (character) name.textContent = decodeURIComponent(character);
if (map) mapName.textContent = `Cargando mapa: ${map.toUpperCase()}...`;

console.log(params)