// 🎼 Uranthia · Enlaces de YouTube por canción
// Clave = slug del archivo de letra (sin .html)
// Actualizá acá y se refleja en repertorio, setlists y letras.

const YOUTUBE_LINKS = {
  "la-fuerza-del-destino": "https://www.youtube.com/watch?v=_mAmEKNqg1g",
  "mirala-miralo": "https://www.youtube.com/watch?v=9cjXTMLjaFw",
  "te-bese": "https://www.youtube.com/watch?v=h1r3GhIjjiA&list=PLliHa6XlDoITiNZdFFxBvPGxrmlzrdLLv&index=23",
  "te-quiero-tanto-tanto": "https://www.youtube.com/watch?v=Y4fm-ebvAOs&list=PLliHa6XlDoITiNZdFFxBvPGxrmlzrdLLv&index=25",
  "vuela-vuela": "https://www.youtube.com/watch?v=WVJGsY6CSHo&list=PLliHa6XlDoITiNZdFFxBvPGxrmlzrdLLv&index=52",
  "no-podras": "https://www.youtube.com/watch?v=yZ8mJgcsbw8",
};

// Función helper para armar el botón
function botonYouTube(slug) {
  const url = YOUTUBE_LINKS[slug];
  if (!url) return '';
  return `<a class="btn-yt-mini" href="${url}" target="_blank" rel="noopener" title="Ver en YouTube">▶</a>`;
}
