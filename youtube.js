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
  "aun": "https://www.youtube.com/watch?v=sHjUUh-cQL4",
  "bella-senora": "https://www.youtube.com/watch?v=v_e1Yr7f6B0",
  "chica-de-humo": "https://www.youtube.com/watch?v=mgkV9fUeVo8",
  "baila": "https://www.youtube.com/watch?v=YnHNiQjcM_4",
  "chicas-cocodrilo": "https://www.youtube.com/watch?v=uHd9r0LHli8",
  "no-voy-en-tren": "https://www.youtube.com/watch?v=uHd9r0LHli8&t=2m28s",
  "en-algun-lugar": "https://www.youtube.com/watch?v=uHd9r0LHli8&t=4m01s",
  "viviendo-de-noche": "https://www.youtube.com/watch?v=uHd9r0LHli8&t=5m38s",
  "muralla": "https://www.youtube.com/watch?v=uHd9r0LHli8&t=7m26s",
  "visita-nuestro-bar": "https://www.youtube.com/watch?v=uHd9r0LHli8&t=9m15s",
  "persiana-americana": "https://www.youtube.com/watch?v=uHd9r0LHli8&t=11m15s",
  "no-huyas-de-mi": "https://www.youtube.com/watch?v=uHd9r0LHli8&t=14m10s",
  "ni-tu-ni-nadie": "https://www.youtube.com/watch?v=sH5ROBxWZyw",
  "es-por-amor": "https://www.youtube.com/watch?v=xN9Ssf-1u8Q",
  "cuando-seas-grande": "https://www.youtube.com/watch?v=YEhRTovQwm4",
  "guitarras-blancas": "https://www.youtube.com/watch?v=YEhRTovQwm4",
  "no-puedo-estar-sin-ti": "https://www.youtube.com/watch?v=lJe-5JXgQco",
  "dejame-entrar": "https://www.youtube.com/watch?v=7gKV1h_gFp4",
  "viento": "https://www.youtube.com/watch?v=T8TtE-enslA",
  "eternamente-bella": "https://www.youtube.com/watch?v=9Muiws78y5A",  
  "ado": "https://www.youtube.com/watch?v=K4uZhFb4E4s",  
  "triste-cancion-de-amor": "https://www.youtube.com/watch?v=KNeLqABYNFQ",    
};

// Función helper para armar el botón
function botonYouTube(slug) {
  const url = YOUTUBE_LINKS[slug];
  if (!url) return '';
  return `<a class="btn-yt-mini" href="${url}" target="_blank" rel="noopener" title="Ver en YouTube">▶</a>`;
}
