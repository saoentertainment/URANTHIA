// ══════════════════════════════════════════════════════
// 🎼 Uranthia · Funciones compartidas para botones
// ══════════════════════════════════════════════════════
// Cargado por: repertorio.html + todos los setlists
// Depende de: MAPA_LETRAS (letras.js), YOUTUBE_LINKS (youtube.js), GUIAS (guias.js)
// ══════════════════════════════════════════════════════

// Detecta si estamos en un setlist o en el repertorio
function _claseBotonMini() {
  return document.querySelector('.cancion-botones-setlist') !== null
    ? 'btn-mini-setlist'
    : 'btn-mini';
}

// ──────────────────────────────────────────────────────
// BOTÓN YOUTUBE
// ──────────────────────────────────────────────────────
function renderBotonYouTube(titulo) {
  const clase = _claseBotonMini();
  let slug = (typeof MAPA_LETRAS !== 'undefined') ? MAPA_LETRAS[titulo] : null;

  if (!slug) {
    slug = titulo
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  const url = (typeof YOUTUBE_LINKS !== 'undefined') ? YOUTUBE_LINKS[slug] : '';
  if (!url) {
    return `<span class="${clase}">▶ YouTube</span>`;
  }

  return `<a class="${clase} activo" href="${url}" target="_blank" rel="noopener" style="text-decoration:none; border-color:#ff0000; color:#fff; background:#ff0000; cursor:pointer;">▶ YouTube</a>`;
}

// ──────────────────────────────────────────────────────
// BOTÓN LETRA
// ──────────────────────────────────────────────────────
function renderBotonLetra(titulo, prefijo) {
  prefijo = prefijo || '';
  const clase = _claseBotonMini();
  const slug = (typeof MAPA_LETRAS !== 'undefined') ? MAPA_LETRAS[titulo] : null;

  if (!slug) {
    return `<span class="${clase}">📄 Letra</span>`;
  }

  return `<a class="${clase} activo" href="${prefijo}letras/${slug}.html" target="_blank" rel="noopener" style="text-decoration:none; border-color:#d4af37; color:#0d2818; background:#faf3e0; cursor:pointer;">📄 Letra</a>`;
}

// ──────────────────────────────────────────────────────
// BOTÓN BAJO
// ──────────────────────────────────────────────────────
function renderBotonBajo(titulo, prefijo) {
  prefijo = prefijo || '';
  const clase = _claseBotonMini();
  const slug = (typeof MAPA_LETRAS !== 'undefined') ? MAPA_LETRAS[titulo] : null;

  if (!slug) {
    return `<span class="${clase}">🎸 Bajo</span>`;
  }

  const guias = (typeof GUIAS !== 'undefined') ? GUIAS[slug] : null;
  if (!guias || !guias.includes('bajo')) {
    return `<span class="${clase}">🎸 Bajo</span>`;
  }

  return `<a class="${clase} activo" href="${prefijo}guias/${slug}-bajo.html" target="_blank" rel="noopener" style="text-decoration:none; border-color:#d4af37; color:#0d2818; background:#faf3e0; cursor:pointer;">🎸 Bajo</a>`;
}

// ══════════════════════════════════════════════════════
// FIN botones.js
// ══════════════════════════════════════════════════════
