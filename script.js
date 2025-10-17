function redirigirCarta() {
  // 🔗 Cambia esta URL por la de tu segunda página (la tierna)
  window.location.href = "https://TUUSUARIO.github.io/feliz-cumple-carta";
}

// Reproduce la música si el navegador bloquea autoplay
document.addEventListener("click", () => {
  const audio = document.getElementById("musica");
  if (audio.paused) audio.play().catch(() => {});
});
