document.querySelectorAll('.map-card').forEach(card => {
    card.addEventListener('click', () => {
        const map = card.dataset.map;
        const encodedChar = encodeURIComponent(character);
        window.location.href = `juego.html?character=${encodedChar}&map=${map}`;
    });

    card.addEventListener('click', () => {
        const selected = encodeURIComponent(card.dataset.name);
        window.location.href = `personajesDark.html?map=${selected}`;
    });
});