// ══════════════════════════════════════════════════════
// 🎼 Uranthia · Funciones compartidas para botones
// ══════════════════════════════════════════════════════
// Cargado por: repertorio.html + todos los setlists
// Depende de: MAPA_LETRAS (letras.js), YOUTUBE_LINKS (youtube.js), GUIAS (guias.js)
// ══════════════════════════════════════════════════════

// ──────────────────────────────────────────────────────
// BOTÓN YOUTUBE
// ──────────────────────────────────────────────────────
// - Si el título está en MAPA_LETRAS, usa ese slug.
// - Si no, genera slug automático (minúsculas, sin acentos, guiones).
// - Si no hay link en YOUTUBE_LINKS, devuelve botón gris.
// - Si hay link, devuelve botón rojo activo.
// ──────────────────────────────────────────────────────
function renderBotonYouTube(titulo) {
  let slug = (typeof MAPA_LETRAS !== 'undefined') ? MAPA_LETRAS[titulo] : null;

  if (!slug) {
    slug = titulo
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // quita acentos
      .replace(/\s+/g, '-')                              // espacios → guiones
      .replace(/[^a-z0-9-]/g, '');                       // quita caracteres raros
  }

  const url = (typeof YOUTUBE_LINKS !== 'undefined') ? YOUTUBE_LINKS[slug] : '';
  if (!url) {
    return '<span class="btn-mini">▶ YouTube</span>';
  }

  return `<a class="btn-mini activo" href="${url}" target="_blank" rel="noopener" style="text-decoration:none; border-color:#ff0000; color:#fff; background:#ff0000; cursor:pointer;">▶ YouTube</a>`;
}

// ──────────────────────────────────────────────────────
// BOTÓN LETRA
// ──────────────────────────────────────────────────────
// - Solo funciona si el título está en MAPA_LETRAS.
// - Prefijo opcional para rutas relativas (ej: '../' en setlists).
// - Si no hay slug en MAPA_LETRAS, devuelve botón gris.
// ──────────────────────────────────────────────────────
function renderBotonLetra(titulo, prefijo) {
  prefijo = prefijo || '';
  const slug = (typeof MAPA_LETRAS !== 'undefined') ? MAPA_LETRAS[titulo] : null;

  if (!slug) {
    return '<span class="btn-mini">📄 Letra</span>';
  }

  return `<a class="btn-mini activo" href="${prefijo}letras/${slug}.html" target="_blank" rel="noopener" style="text-decoration:none; border-color:#d4af37; color:#0d2818; background:#faf3e0; cursor:pointer;">📄 Letra</a>`;
}

// ──────────────────────────────────────────────────────
// BOTÓN BAJO
// ──────────────────────────────────────────────────────
// - Solo funciona si el título está en MAPA_LETRAS y el slug está en GUIAS con 'bajo'.
// - Prefijo opcional para rutas relativas (ej: '../' en setlists).
// - Si no hay guía, devuelve botón gris.
// ──────────────────────────────────────────────────────
function renderBotonBajo(titulo, prefijo) {
  prefijo = prefijo || '';
  const slug = (typeof MAPA_LETRAS !== 'undefined') ? MAPA_LETRAS[titulo] : null;

  if (!slug) {
    return '<span class="btn-mini">🎸 Bajo</span>';
  }

  const guias = (typeof GUIAS !== 'undefined') ? GUIAS[slug] : null;
  if (!guias || !guias.includes('bajo')) {
    return '<span class="btn-mini">🎸 Bajo</span>';
  }

  return `<a class="btn-mini activo" href="${prefijo}guias/${slug}-bajo.html" target="_blank" rel="noopener" style="text-decoration:none; border-color:#d4af37; color:#0d2818; background:#faf3e0; cursor:pointer;">🎸 Bajo</a>`;
}

// ══════════════════════════════════════════════════════
// FIN botones.js
// ══════════════════════════════════════════════════════
