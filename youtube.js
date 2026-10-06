// 🎼 Uranthia · Enlaces de YouTube por canción
// Clave = slug del archivo de letra (sin .html)
// Actualizá acá y se refleja en repertorio, setlists y letras.

const YOUTUBE_LINKS = {
  "la-fuerza-del-destino": "https://www.youtube.com/watch?v=_mAmEKNqg1g",
  "mirala-miralo": "https://www.youtube.com/watch?v=9cjXTMLjaFw"
};

// Función helper para armar el botón
function botonYouTube(slug) {
  const url = YOUTUBE_LINKS[slug];
  if (!url) return '';
  return `<a class="btn-yt-mini" href="${url}" target="_blank" rel="noopener" title="Ver en YouTube">▶</a>`;
}
