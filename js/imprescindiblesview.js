"use strict";
/* ===== Señalética de importancia para la Historia de la Filosofía (19-10) =====
   Insignia de nivel 5-1 (puntos ●●●●○ + nombre) para Biografías, la lista de temas y el glosario de HF. Datos en imprescindibles.js
   (generado con tools/build_imprescindibles.js). Solo variables de styles.css; legible en modo noche; no desplaza nada:
   la insignia se pinta con la ficha o la tarjeta, nunca después. Textos de interfaz como cadenas enteras (ui/<lang>.json). */

const IMP_TXT = {
  n5: "Indispensable", n4: "Essentiel", n3: "Important", n2: "Complémentaire", n1: "Approfondissement",
  aria: "Importance pour la PAU : {n} sur 5, {t}.", por: "Pourquoi",
  leyTit: "Ce que signifient les points",
  ley5: "Lecture ou auteur de la PAU, ou quelque chose sans quoi on ne comprend pas le reste.",
  ley4: "Ce que le curriculum marque comme indispensable (avec astérisque) ou ce qui est déjà tombé à la PAU.",
  ley3: "Ce que nomme le curriculum, ou ce qui est nécessaire pour comprendre ce qui précède.",
  ley2: "Utile comme contexte ou pour argumenter dans la dissertation.",
  ley1: "Curiosité ou approfondissement : pour en savoir plus.",
  leyPie: "Critère : d'abord le curriculum basque (Décret 76/2023), ensuite la PAU de l'UPV/EHU.",
  filtro: "Seulement indispensables et essentiels"
};
const impT = (k, v) => String(IMP_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const impEsc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* nivel de un autor (clave de Biografías) o de un tema de HF (número); null si no hay dato */
function impNivel(tipo, k){
  if (typeof IMPRESCINDIBLES === "undefined") return null;
  if (tipo === "glo"){ const g = k, gr = g && g.imp && (IMPRESCINDIBLES.glosarioGrupos || {})[g.impg]; return gr ? { n: g.imp, motivo: gr[1] } : null; }   // k = entrada del glosario
  const d = tipo === "tema" ? IMPRESCINDIBLES.temasHf[k] : IMPRESCINDIBLES.autores[k];
  return d ? { n: d[0], motivo: d[1] } : null;
}
/* insignia: modo "puntos" (solo puntos, para tarjetas y listas) o "completa" (puntos + nombre) */
function impBadge(tipo, k, modo){
  const d = impNivel(tipo, k); if (!d) return "";
  const nombre = impT("n" + d.n), lab = impT("aria", { n: d.n, t: nombre.toLowerCase() }) + " " + d.motivo;
  const pts = [1, 2, 3, 4, 5].map(i => '<i class="imp-p' + (i <= d.n ? " imp-on" : "") + '"></i>').join("");
  return '<span class="imp imp-' + d.n + (modo === "completa" ? " imp-full" : "") + '" role="img" aria-label="' + impEsc(lab) + '" title="' + impEsc(nombre + ": " + d.motivo) + '">' +
    '<span class="imp-pts" aria-hidden="true">' + pts + "</span>" + (modo === "completa" ? '<span class="imp-nom" aria-hidden="true">' + impEsc(nombre) + "</span>" : "") + "</span>";
}
/* motivo visible (para la ficha) */
function impMotivo(tipo, k){
  const d = impNivel(tipo, k); if (!d) return "";
  return '<p class="imp-motivo"><span>' + impEsc(impT("por")) + ":</span> " + impEsc(d.motivo) + "</p>";
}
/* leyenda plegada */
function impLeyenda(){
  if (typeof IMPRESCINDIBLES === "undefined") return "";
  return '<details class="imp-leyenda"><summary>' + impEsc(impT("leyTit")) + '</summary><ul>' +
    [5, 4, 3, 2, 1].map(n => '<li><span class="imp imp-' + n + ' imp-full" aria-hidden="true"><span class="imp-pts">' +
      [1, 2, 3, 4, 5].map(i => '<i class="imp-p' + (i <= n ? " imp-on" : "") + '"></i>').join("") + '</span><span class="imp-nom">' + impEsc(impT("n" + n)) + "</span></span> " +
      impEsc(impT("ley" + n)) + "</li>").join("") + '</ul><p class="imp-leypie">' + impEsc(impT("leyPie")) + "</p></details>";
}
