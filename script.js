const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btn-musica");

btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play().catch(() => {});
    btnMusica.textContent = "🔊 Música sonando";
  } else {
    musica.pause();
    btnMusica.textContent = "🎵 Reproducir música de fondo";
  }
});

function redirigirCarta() {
  window.location.href = "https://pionono1.github.io/Feliz-cumple-reina/";
}


