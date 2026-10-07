// ══════════════════════════════════════════════════════
// 🎼 Uranthia · Funciones compartidas para botones
// ══════════════════════════════════════════════════════
// Cargado por: repertorio.html + todos los setlists
// Depende de: MAPA_LETRAS (letras.js), YOUTUBE_LINKS (youtube.js), GUIAS (guias.js)
// ══════════════════════════════════════════════════════

// Detecta si estamos en un setlist o en el repertorio (por URL)
function _claseBotonMini() {
  return window.location.pathname.includes('/setlists/')
    ? 'btn-mini-setlist'
    : 'btn-mini';
}

// Genera slug automático desde el título (minúsculas, sin acentos, guiones)
function _slugAutomatico(titulo) {
  return titulo
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Obtiene el slug: primero busca en MAPA_LETRAS, si no, genera automático
function _obtenerSlug(titulo) {
  let slug = (typeof MAPA_LETRAS !== 'undefined') ? MAPA_LETRAS[titulo] : null;
  if (!slug) {
    slug = _slugAutomatico(titulo);
  }
  return slug;
}

// ──────────────────────────────────────────────────────
// BOTÓN YOUTUBE
// ──────────────────────────────────────────────────────
function renderBotonYouTube(titulo) {
  const clase = _claseBotonMini();
  const slug = _obtenerSlug(titulo);

  const url = (typeof YOUTUBE_LINKS !== 'undefined') ? YOUTUBE_LINKS[slug] : '';
  if (!url) {
    return `<span class="${clase}">▶ YouTube</span>`;
  }

  return `<a class="${clase} activo" href="${url}" target="_blank" rel="noopener" style="text-decoration:none; border-color:#ff0000; color:#ff0000; background:#fff5f5; cursor:pointer;">▶ YouTube</a>`;
}

// ──────────────────────────────────────────────────────
// BOTÓN LETRA
// ──────────────────────────────────────────────────────
function renderBotonLetra(titulo, prefijo) {
  prefijo = prefijo || '';
  const clase = _claseBotonMini();
  const slug = (typeof MAPA_LETRAS !== 'undefined') ? MAPA_LETRAS[titulo] : null;

  // Solo se activa si está en MAPA_LETRAS (tiene letra real)
  if (!slug) {
    return `<span class="${clase}">📄 Letra</span>`;
  }

  return `<a class="${clase} activo" href="${prefijo}letras/${slug}.html" target="_blank" rel="noopener" style="text-decoration:none; border-color:#d4af37; color:#b8860b; background:#faf3e0; cursor:pointer;">📄 Letra</a>`;
}

// ──────────────────────────────────────────────────────
// BOTÓN BAJO
// ──────────────────────────────────────────────────────
function renderBotonBajo(titulo, prefijo) {
  prefijo = prefijo || '';
  const clase = _claseBotonMini();
  const slug = _obtenerSlug(titulo);  // ← slug automático también acá

  const guias = (typeof GUIAS !== 'undefined') ? GUIAS[slug] : null;
  if (!guias || !guias.includes('bajo')) {
    return `<span class="${clase}">🎸 Bajo</span>`;
  }

  return `<a class="${clase} activo" href="${prefijo}guias/${slug}-bajo.html" target="_blank" rel="noopener" style="text-decoration:none; border-color:#d4af37; color:#b8860b; background:#faf3e0; cursor:pointer;">🎸 Bajo</a>`;
}

// ══════════════════════════════════════════════════════
// FIN botones.js
// ══════════════════════════════════════════════════════
