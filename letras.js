// 🎼 Uranthia · Botones de Letra + YouTube reutilizables
// Se carga desde repertorio.html (prefijo '') y desde setlists/*.html (prefijo '../')

const MAPA_LETRAS = {
  'LA FUERZA DEL DESTINO': 'la-fuerza-del-destino',
  'MIRALA MIRALO': 'mirala-miralo',
  'TE BESE': 'te-bese',
  'TE QUIERO TANTO TANTO': 'te-quiero-tanto-tanto',
  // Acá vas agregando: 'TITULO EN MAYUSCULAS': 'slug-del-archivo'
};

function renderBotonLetra(titulo, prefijo) {
  prefijo = prefijo || '';
  const slug = MAPA_LETRAS[titulo];
  if (!slug) {
    return '<span class="btn-mini-setlist">📄 Letra</span>';
  }
  return `<a class="btn-mini-setlist" href="${prefijo}letras/${slug}.html" target="_blank" rel="noopener" style="text-decoration:none; border-color:#d4af37; color:#0d2818; background:#faf3e0; cursor:pointer;">📄 Letra</a>`;
}

function renderBotonYouTube(titulo) {
  const slug = MAPA_LETRAS[titulo];
  if (!slug) {
    return '<span class="btn-mini-setlist">▶ YouTube</span>';
  }
  const url = (typeof YOUTUBE_LINKS !== 'undefined') ? YOUTUBE_LINKS[slug] : '';
  if (!url) {
    return '<span class="btn-mini-setlist">▶ YouTube</span>';
  }
  return `<a class="btn-mini-setlist" href="${url}" target="_blank" rel="noopener" style="text-decoration:none; border-color:#ff0000; color:#fff; background:#ff0000; cursor:pointer;">▶ YouTube</a>`;
}
