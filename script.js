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
  // 🔗 Cambia esta URL por la de tu página tierna
  window.location.href = "https://TUUSUARIO.github.io/feliz-cumple-carta";
}
