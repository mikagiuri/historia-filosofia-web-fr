"use strict";
/* ===== «Nudos: ¿encajan tus razones?» (09-10, Bachillerato) — vista sobre nudos.js (NUDOS) =====
   El alumno contesta afirmaciones (de acuerdo / en desacuerdo / depende, diciendo de qué). Cuando dos respuestas
   chocan aparece un nudo, y se deshace ESCRIBIENDO: cambiar una respuesta (y decir qué te hizo cambiar),
   distinguir (nombrar la diferencia relevante) o morder la bala (aceptar la consecuencia). Hay nudos aparentes,
   que parecen contradicción y no lo son. Sin nota, sin perfil, sin comparar con nadie y sin guardar nada:
   al final, un «cuaderno de razones» para imprimir o copiar. Enlace profundo: #nudos/<módulo>. */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const NUD_TXT = {
  intro: "Tu vas lire des affirmations et dire si tu es d'accord, pas d'accord, ou si ça dépend, et de quoi. Quand deux de tes réponses s'opposeront, un nœud apparaîtra. Pour le défaire, tu devras écrire une raison.",
  intro2: "Il n'y a pas de bonnes réponses, pas de note, et personne ne compare tes réponses à celles des autres. Rien n'est enregistré ni ne sort de ce navigateur. À la fin, tu auras ton carnet de raisons à imprimer ou à copier.",
  nAfs: "{n} affirmations · {m} nœuds possibles", empezar: "Commencer",
  afirmacion: "Affirmation {i} sur {n}", piensas: "Qu'en penses-tu ?",
  vA: "D'accord", vD: "Pas d'accord", vP: "Ça dépend",
  deQue: "De quoi est-ce que ça dépend ? Donne au moins un cas où c'est oui et un autre où c'est non.",
  nPal: "{n} mots (minimum {m})", siguiente: "Suivant", volver: "Retour", salir: "Quitter",
  tuResp: "Ta réponse : {v}",
  nudo: "Nœud", nudoAp: "Nœud apparent",
  nudoTit: "Ces deux réponses tirent dans des sens opposés", nudoApTit: "Cela ressemble à une contradiction…",
  apExplica: "Explique-le avec tes mots : pourquoi n'est-ce pas une contradiction ?", seguir: "Continuer",
  elige: "Choisis comment tu le défais. Il n'y a pas de bonne option : ce qui compte, c'est la raison que tu donnes.",
  oCa: "✏️ Je change ma réponse à la première affirmation", oCb: "✏️ Je change ma réponse à la deuxième affirmation",
  oDi: "🔍 Je maintiens les deux : une différence pertinente l'explique",
  oBa: "🦷 Je maintiens les deux et j'assume la conséquence (« je mords la balle »)",
  pCambio: "Qu'est-ce qui t'a fait changer d'avis ?",
  pDist: "Quelle est la différence pertinente entre les deux cas ? Nomme-la et explique pourquoi elle compte.",
  pBala: "Quelle conséquence assumes-tu exactement, et pourquoi te semble-t-elle acceptable ?",
  reContestar: "Répondre de nouveau à cette affirmation", guardar: "Enregistrer ma raison",
  saberMas: "Pour en savoir plus :",
  cuaderno: "Ton carnet de raisons", cuadSub: "Sans note et sans profil : ce qui compte, c'est ce que tu as écrit.",
  misResp: "Mes réponses", dependeDe: "Ça dépend de : {t}",
  misNudos: "Mes nœuds et comment je les ai défaits",
  lCambio: "J'ai changé d'avis sur « {a} » : de « {de} » à « {x} ».", porQue: "Pourquoi : {t}",
  lDist: "J'ai distingué « {a} » et « {b} ».", lBala: "J'ai assumé la conséquence (« mordu la balle ») entre « {a} » et « {b} ».", lAp: "Nœud apparent entre « {a} » et « {b} ».",
  miRazon: "Ma raison : {t}",
  sinNudos: "Aucun nœud n'est apparu dans tes réponses. Est-ce parce que tu es cohérent ou parce que tu as beaucoup répondu « Ça dépend » ? Les deux peuvent être vrais.",
  sinNudosPocoP: "Aucun de nos nœuds ne s’est déclenché, mais cela ne prouve pas qu’il n’y en ait pas : cherche toi-même une tension parmi tes réponses et écris-la dans le dernier défi.",
  reto: "Dernier défi", retoTxt: "Choisis la réponse dont tu es le plus sûr et écris la meilleure objection qu'on pourrait lui faire. Ensuite, réponds-y.",
  imprimir: "Imprimer ou enregistrer en PDF", copiar: "Copier comme texte", inicio: "Revenir au début",
  copiado: "Copié.", noCopia: "Impossible de copier ; utilise « Imprimer ».",
  guiaTit: "Guide : mode d’emploi et utilité",
  guia: "<h3>À quoi ça sert</h3><p>Bien penser, ce n'est pas avoir beaucoup d'opinions, c'est faire en sorte qu'elles s'accordent entre elles et savoir en donner les raisons. Ici, tu découvres où tes propres réponses s'opposent et tu t'exerces aux trois façons honnêtes de résoudre une opposition : changer d'avis, relever une différence pertinente entre les cas ou assumer une conséquence gênante. Dans les trois cas, tu dois écrire pourquoi.</p><h3>Comment l'utiliser</h3><ol><li>Choisis un module et réponds aux affirmations une par une. Si tu choisis « Ça dépend », explique de quoi.</li><li>Quand un nœud apparaît, lis pourquoi tes réponses s'opposent et choisis comment le défaire. Si tu changes une réponse, tu reviendras à cette affirmation, puis tu reprendras là où tu en étais.</li><li>Certains nœuds sont apparents : ils ressemblent à une contradiction, mais n'en sont pas. Explique avec tes mots pourquoi.</li><li>À la fin, relis ton carnet de raisons, relève le dernier défi et imprime-le si on te le demande.</li></ol><h3>À garder en tête</h3><ul><li>Il n'y a ni bonnes réponses ni score : un nœud n'est pas une erreur, c'est une invitation à penser.</li><li>Toute opposition n'est pas une contradiction. Bien distinguer deux cas vaut autant que changer d'avis.</li><li>Tes réponses ne sont envoyées nulle part et ne sont comparées à celles de personne.</li></ul>"
};
const nudT = (k, v) => String(NUD_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const nudEsc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const nudPal = s => (String(s).trim().match(/\S+/g) || []).length;
const nudBox = () => document.getElementById("nudosbox");
let NUD = null;   // estado del recorrido: { m, orden, pos, resp, hechos, log, volverA }

function nudVal(v){ return nudT({ A: "vA", D: "vD", P: "vP" }[v]); }
function nudPar(n){ const [a, b] = n.k.split("|").map(x => x.split("=")); return { a: a[0], av: a[1], b: b[0], bv: b[1] }; }

function nudInicio(){
  NUD = null;
  const box = nudBox(); if (!box) return;
  box.innerHTML = '<details class="nud-guia"><summary>' + nudT("guiaTit") + "</summary>" + nudT("guia") + "</details>" +
    '<div class="nud-card"><p>' + nudT("intro") + '</p><p class="nud-muted">' + nudT("intro2") + "</p></div>" +
    '<div class="nud-mods">' + NUDOS.map(m => '<button type="button" class="nud-mod" data-nudmod="' + m.id + '"><strong>' + m.titulo + '</strong><span class="nud-muted">' + m.sub + '</span><span class="nud-small">' +
      nudT("nAfs", { n: Object.keys(m.afs).length, m: m.nudos.length }) + "</span></button>").join("") + "</div>";
  box.querySelectorAll("[data-nudmod]").forEach(b => b.onclick = () => nudEmpezar(b.dataset.nudmod));
}

function nudEmpezar(id){
  const m = NUDOS.find(x => x.id === id) || NUDOS[0];
  NUD = { m, orden: Object.keys(m.afs), pos: 0, resp: {}, hechos: new Set(), log: [], volverA: null };
  nudPregunta();
}

function nudPregunta(motivo){
  const box = nudBox(), id = NUD.orden[NUD.pos], r = motivo != null ? {} : (NUD.resp[id] || {});
  box.innerHTML = '<div class="nud-card"><p class="nud-small nud-muted">' + NUD.m.titulo + " · " + nudT("afirmacion", { i: NUD.pos + 1, n: NUD.orden.length }) + "</p>" +
    '<p class="nud-stmt" id="nud-enun">' + NUD.m.afs[id] + "</p>" +
    '<fieldset class="nud-fs" aria-labelledby="nud-enun"><legend class="nud-small nud-muted">' + nudT("piensas") + '</legend><div class="nud-opts">' +
    ["A", "D", "P"].map(v => '<label class="nud-opt"><input type="radio" name="nud-v" value="' + v + '"' + (r.v === v ? " checked" : "") + "><span>" + nudVal(v) + "</span></label>").join("") +
    '</div></fieldset><div id="nud-dep"' + (r.v === "P" ? "" : " hidden") + '><label class="nud-lab" for="nud-deptx">' + nudT("deQue") + '</label><textarea id="nud-deptx">' + nudEsc(r.dep || "") + '</textarea><div class="nud-count" id="nud-depc"></div></div>' +
    '<p class="nud-row"><button type="button" class="btn" id="nud-sig" disabled>' + nudT("siguiente") + "</button>" +
    (NUD.pos > 0 && motivo == null ? ' <button type="button" class="btn ghost" id="nud-atr">' + nudT("volver") + "</button>" : "") +
    ' <button type="button" class="btn ghost" id="nud-sal">' + nudT("salir") + "</button></p></div>";
  const val = () => (box.querySelector("input[name=nud-v]:checked") || {}).value;
  const ok = () => {
    const v = val(), n = nudPal(document.getElementById("nud-deptx").value);
    document.getElementById("nud-dep").hidden = v !== "P";
    document.getElementById("nud-depc").textContent = v === "P" ? nudT("nPal", { n, m: 8 }) : "";
    document.getElementById("nud-sig").disabled = !v || (v === "P" && n < 8);
  };
  box.querySelectorAll("input[name=nud-v]").forEach(x => x.onchange = ok);
  document.getElementById("nud-deptx").oninput = ok; ok();
  document.getElementById("nud-sal").onclick = nudInicio;
  const atr = document.getElementById("nud-atr"); if (atr) atr.onclick = () => { NUD.pos--; nudPregunta(); };
  document.getElementById("nud-sig").onclick = () => {
    const v = val(), antes = NUD.resp[id];
    NUD.resp[id] = { v, dep: v === "P" ? document.getElementById("nud-deptx").value.trim() : "" };
    if (antes && antes.v !== v){
      NUD.log.push({ tipo: "cambio", id, de: antes.v, a: v, razon: motivo || "" });
      for (const k of [...NUD.hechos]) if (k.split("|").some(x => x.split("=")[0] === id)) NUD.hechos.delete(k);   // sus nudos se vuelven a evaluar
    }
    nudSiguiente();
  };
  window.scrollTo({ top: box.offsetTop - 80 });
}

function nudPendiente(){
  return NUD.m.nudos.find(n => {
    if (NUD.hechos.has(n.k)) return false;
    const p = nudPar(n), ra = NUD.resp[p.a], rb = NUD.resp[p.b];
    return ra && rb && ra.v === p.av && rb.v === p.bv;
  });
}

function nudSiguiente(){
  const n = nudPendiente();
  if (n) return nudNudo(n);
  if (NUD.volverA != null){ NUD.pos = NUD.volverA; NUD.volverA = null; }
  if (NUD.pos < NUD.orden.length - 1){ NUD.pos++; return nudPregunta(); }
  nudCuaderno();
}

function nudNudo(n){
  const box = nudBox(), p = nudPar(n), ap = n.tipo === "aparente";
  const fila = id => "<div><strong>" + NUD.m.afs[id] + '</strong><br><span class="nud-small nud-muted">' + nudT("tuResp", { v: nudVal(NUD.resp[id].v) }) + "</span></div>";
  box.innerHTML = '<div class="nud-card nud-knot' + (ap ? " nud-ap" : "") + '" role="region" aria-live="polite"><span class="nud-tag">' + nudT(ap ? "nudoAp" : "nudo") + "</span>" +
    "<h3>" + nudT(ap ? "nudoApTit" : "nudoTit") + '</h3><div class="nud-pair">' + fila(p.a) + fila(p.b) + "</div><p>" + n.por + "</p>" +
    (ap ? '<label class="nud-lab" for="nud-tx">' + nudT("apExplica") + '</label><textarea id="nud-tx"></textarea><div class="nud-count" id="nud-cnt"></div><p class="nud-row"><button type="button" class="btn" id="nud-ok" disabled>' + nudT("seguir") + "</button></p>"
      : '<p class="nud-small nud-muted">' + nudT("elige") + '</p><div class="nud-choices">' +
        [["ca", "oCa"], ["cb", "oCb"], ["di", "oDi"], ["ba", "oBa"]].map(([c, l]) => '<button type="button" class="nud-choice" data-nudc="' + c + '" aria-pressed="false">' + nudT(l) + "</button>").join("") +
        '</div><div id="nud-extra"></div>') +
    '<p class="nud-src">' + nudT("saberMas") + " " + n.fuente + "</p></div>";
  if (ap){
    nudTexto(10, () => { NUD.hechos.add(n.k); NUD.log.push({ tipo: "aparente", n, razon: document.getElementById("nud-tx").value.trim() }); nudSiguiente(); });
    return;
  }
  box.querySelectorAll("[data-nudc]").forEach(b => b.onclick = () => {
    box.querySelectorAll("[data-nudc]").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    nudOpcion(n, b.dataset.nudc);
  });
}

function nudTexto(min, alPulsar){
  const tx = document.getElementById("nud-tx"), b = document.getElementById("nud-ok");
  tx.oninput = () => { const w = nudPal(tx.value); document.getElementById("nud-cnt").textContent = nudT("nPal", { n: w, m: min }); b.disabled = w < min; };
  tx.oninput(); b.onclick = alPulsar;
}

function nudOpcion(n, c){
  const p = nudPar(n), cambio = c === "ca" || c === "cb", min = cambio ? 8 : 15;
  document.getElementById("nud-extra").innerHTML = (c === "di" && n.distinguir ? '<p class="nud-hint">' + n.distinguir + "</p>" : "") +
    '<label class="nud-lab" for="nud-tx">' + nudT(cambio ? "pCambio" : (c === "di" ? "pDist" : "pBala")) + '</label><textarea id="nud-tx"></textarea><div class="nud-count" id="nud-cnt"></div>' +
    '<p class="nud-row"><button type="button" class="btn" id="nud-ok" disabled>' + nudT(cambio ? "reContestar" : "guardar") + "</button></p>";
  document.getElementById("nud-tx").focus();
  nudTexto(min, () => {
    const razon = document.getElementById("nud-tx").value.trim();
    if (cambio){
      if (NUD.volverA == null) NUD.volverA = NUD.pos;
      NUD.pos = NUD.orden.indexOf(c === "ca" ? p.a : p.b);
      nudPregunta(razon);   // si la respuesta no cambia, el nudo vuelve a aparecer
      return;
    }
    NUD.hechos.add(n.k); NUD.log.push({ tipo: c === "di" ? "distingo" : "bala", n, razon }); nudSiguiente();
  });
}

function nudCuaderno(){
  const box = nudBox(), af = id => NUD.m.afs[id];
  const lineas = NUD.log.map(e => {
    if (e.tipo === "cambio") return "<li>" + nudT("lCambio", { a: af(e.id), de: nudVal(e.de), x: nudVal(e.a) }) + (e.razon ? "<br>" + nudT("porQue", { t: nudEsc(e.razon) }) : "") + "</li>";
    const p = nudPar(e.n), k = { distingo: "lDist", bala: "lBala", aparente: "lAp" }[e.tipo];
    return "<li>" + nudT(k, { a: af(p.a), b: af(p.b) }) + "<br>" + nudT("miRazon", { t: nudEsc(e.razon) }) + "</li>";
  }).join("") || '<li class="nud-muted">' + nudT(NUD.orden.filter(id => NUD.resp[id].v === "P").length >= 3 ? "sinNudos" : "sinNudosPocoP") + "</li>";   // (09-10) el mensaje de «mucho Depende» solo si de verdad lo hay
  box.innerHTML = '<div class="nud-card nud-cuaderno"><h3>' + nudT("cuaderno") + '</h3><p class="nud-small nud-muted">' + NUD.m.titulo + " · " + new Date().toLocaleDateString(document.documentElement.lang || "es") + ". " + nudT("cuadSub") + "</p>" +
    "<h4>" + nudT("misResp") + "</h4><ul>" + NUD.orden.map(id => "<li>" + af(id) + " — <strong>" + nudVal(NUD.resp[id].v) + "</strong>" + (NUD.resp[id].dep ? '<br><span class="nud-small">' + nudT("dependeDe", { t: nudEsc(NUD.resp[id].dep) }) + "</span>" : "") + "</li>").join("") + "</ul>" +
    "<h4>" + nudT("misNudos") + '</h4><ul class="nud-log">' + lineas + "</ul>" +
    "<h4>" + nudT("reto") + '</h4><label class="nud-lab" for="nud-reto">' + nudT("retoTxt") + '</label><textarea id="nud-reto" class="nud-reto"></textarea>' +
    '<p class="nud-row nud-noprint"><button type="button" class="btn" id="nud-imp">' + nudT("imprimir") + '</button> <button type="button" class="btn ghost" id="nud-cop">' + nudT("copiar") +
    '</button> <button type="button" class="btn ghost" id="nud-ini">' + nudT("inicio") + '</button> <span class="nud-small nud-muted" id="nud-msg" aria-live="polite"></span></p></div>';
  document.getElementById("nud-imp").onclick = () => void 0 /* sin imprimir en la web de alumnado */;
  document.getElementById("nud-ini").onclick = nudInicio;
  document.getElementById("nud-cop").onclick = async () => {
    const t = box.querySelector(".nud-cuaderno").innerText.replace(/\n{3,}/g, "\n\n") + "\n\n" + nudT("reto") + ": " + document.getElementById("nud-reto").value;
    try { await navigator.clipboard.writeText(t); document.getElementById("nud-msg").textContent = nudT("copiado"); }
    catch (e){ document.getElementById("nud-msg").textContent = nudT("noCopia"); }
  };
  window.scrollTo({ top: box.offsetTop - 80 });
}

function loadNudos(arg){
  const id = String(arg || "").split("/")[0];
  if (id && NUDOS.some(m => m.id === id)) nudEmpezar(id); else nudInicio();
}
if (nudBox() && typeof NUDOS !== "undefined") nudInicio();
