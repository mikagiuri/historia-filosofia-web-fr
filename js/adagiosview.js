"use strict";
/* ===== «Adagios» (09-10, Bachillerato) — vista sobre adagios.js (ADAGIOS) =====
   Repertorio de lemas clásicos al modo de los cuadernos de lugares comunes del Renacimiento. Cada ficha: la versión
   española y, solo al pulsar el botón λ de su línea (como en el glosario), el lema latino y, si lo hay, el original
   griego con su transliteración; luego qué quiere decir, cuándo usarlo, el caso trampa si lo hay, de dónde viene y los temas.
   Los nombres de pensadores con ficha en Ilustres (en esta web) abren su biografía: el primero de cada ficha.
   Filtro por ámbito y modo «Ponte a prueba» (solo el lema en español; el resto se descubre al pulsar). Arriba solo las fichas:
   la historia (Erasmo, florilegios, Montaigne) y el cuaderno de lugares comunes van al final, plegados.
   Enlace profundo: #adagios/<id>. Los temas se enlazan solo si existen en la web (THEORY filtrado). */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const ADG_TXT = {
  ambito: "Domaine", todos: "Tous",
  saber: "Savoir", realidad: "Réalité", etica: "Éthique et vie", politica: "Politique", humano: "Être humain",
  modo: "Mode", leer: "Lire", prueba: "Teste-toi",
  pruebaAyuda: "Essaie d'expliquer ce que cela veut dire, d'où cela vient et quand tu l'utiliserais ; puis clique sur « Découvrir ».",
  descubrir: "Découvrir", ocultar: "Masquer",
  originalBtn: "Voir l'original en latin", originalBtnGr: "Voir l'original en latin et en grec, et comment se lit le grec",
  latin: "En latin :", griego: "En grec :",
  origen: "D'où ça vient :", erasmo: "Érasme, Adagia {n}",
  sentido: "Ce que ça veut dire :", uso: "Utilise-le :", trampa: "Piège", temas: "Dans les thèmes :",
  verBio: "Voir la biographie de {n}",
  cuenta: "{n} adages", cuenta1: "1 adage",
  hTit: "D'où ça vient : la langue commune de la Renaissance",
  h1: "À la Renaissance, quiconque avait étudié connaissait par cœur des centaines de devises, d'adages et de sentences des classiques. Ce n'était pas un ornement : ils fonctionnaient comme une langue partagée. Il suffisait de dire « Festina lente » ou « Nosce te ipsum » pour évoquer une idée entière, avec son histoire et ses nuances, et le lecteur cultivé la reconnaissait aussitôt.",
  h2t: "Les Adagia d'Érasme",
  h2: "La collection la plus influente fut celle d'Érasme de Rotterdam. Il commença en 1500 par une anthologie de 818 proverbes grecs et latins et l'enrichit toute sa vie : l'édition de 1536 en compte 4 151. Chaque adage est accompagné d'un commentaire sur son origine, son sens et son usage, et certains commentaires sont de véritables essais, comme celui de « Dulce bellum inexpertis », contre la guerre, ou celui de « Sileni Alcibiadis », sur les apparences.",
  h3t: "Florilèges et lieux communs",
  h3: "À côté d'Érasme circulaient les florilèges (« choix de fleurs »), des anthologies de passages choisis comme la Polyanthea de Domenico Nani Mirabelli (1503) ou les Illustrium poetarum flores d'Octavien Mirandula. Et à l'école, chaque élève tenait son propre cahier de lieux communs (loci communes) : il recopiait les phrases qu'il trouvait en lisant et les classait par thèmes (l'amitié, la fortune, la mort, la justice…) pour avoir des arguments sous la main en écrivant ou en parlant. Érasme, dans le De copia, et Juan Luis Vives ont expliqué comment faire.",
  h3b: "Attention à une confusion fréquente : les Loci communes de Melanchthon (1521) portent le même nom, mais c'est un manuel de théologie protestante classé par thèmes, pas un recueil de citations.",
  h4t: "Les poutres de Montaigne",
  h4: "Montaigne fit peindre sur les poutres du plafond de sa bibliothèque plus de cinquante sentences en grec et en latin, beaucoup tirées de la Bible, de Sextus Empiricus et de l'anthologie de Stobée, pour les avoir sous les yeux pendant qu'il écrivait ses Essais. Elles sont toujours conservées dans sa tour du Périgord, dans le sud-ouest de la France.",
  h4b: "Il se donna aussi sa propre devise. En 1576, il fit frapper une médaille avec une balance en équilibre et un mot grec des sceptiques, ἐπέχω (epékho, « je m'abstiens », c'est-à-dire je suspends mon jugement). Dans les Essais (II, 12), il le traduit sous forme de question : « Que sçay-je ? », « que sais-je ? ».",
  pieDivisa: "La devise de Montaigne : « Que sçay-je ? » au-dessus d'une balance en équilibre",
  pieMedalla: "Médaille de Montaigne par les Gatteaux (XIXe siècle ; Bibliothèque nationale de France)",
  cTit: "Fais ton cahier de lieux communs",
  c0: "Un cahier de lieux communs est un fichier de phrases classées par thèmes pour les avoir sous la main en écrivant. Voici comment faire :",
  c1t: "Prépare-le.",
  c1: "Un carnet ou un document avec cinq parties, une par domaine : Savoir, Réalité, Éthique et vie, Politique et Être humain. Laisse au moins deux pages par partie.",
  c2t: "Recopie chaque adage toujours avec les mêmes cinq lignes :",
  c2a: "la devise en latin ou en grec ;", c2b: "la traduction ;", c2c: "d'où il vient : auteur et œuvre ;",
  c2d: "ce qu'il veut dire, en une phrase à toi (ne recopie pas celle du site) ;",
  c2e: "une phrase à toi où tu l'utilises à propos d'un thème du cours.",
  cEjT: "Exemple :",
  cEj: "Homo homini lupus · « L'homme est un loup pour l'homme » · Plaute, Asinaria ; repris par Hobbes dans Du citoyen · Sans lois pour nous protéger, les autres sont une menace · « Pour Hobbes, dans l'état de nature, homo homini lupus ; c'est pourquoi les individus acceptent un souverain qui garantisse la paix ».",
  c3t: "Tiens-le à jour.",
  c3: "Deux adages par semaine : celui qui est apparu en classe et un autre que tu choisis, dans cette section ou dans tes lectures. À la fin du trimestre, tu en auras environ vingt-cinq.",
  c4t: "Révise-le.",
  c4: "Une fois par semaine, avec le mode « Teste-toi » ou en cachant la traduction dans ton cahier : dis à voix haute ce qu'il signifie et dans quel thème tu l'utiliserais. Marque d'un point ceux que tu rates et reviens-y la semaine suivante.",
  c5t: "Utilise-le en écrivant.",
  c5: "Dans un commentaire ou une dissertation, un adage fonctionne au début, pour présenter le problème, ou à la fin, pour conclure la thèse. N'en mets pas plus d'un ou deux par texte et explique-le toujours : « Comme l'a écrit Plaute, et comme le répéterait Hobbes, homo homini lupus : … ». Si tu ne sais pas expliquer pourquoi il vient à propos, ne le mets pas."
};
const adgT = (k, v) => String(ADG_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

const ADG_AMB = ["saber", "realidad", "etica", "politica", "humain"];
/* pensadores con ficha en Ilustres: nombre tal como aparece en los textos → id (solo se enlaza si la ficha existe en esta web) */
const ADG_ILU = [
  ["Augustin d'Hippone", "agustin"], ["Anselme de Cantorbéry", "anselmo"], ["Thomas d'Aquin", "tomas"], ["Francis Bacon", "francis_bacon"],
  ["Érasme de Rotterdam", "erasmo"], ["Érasme", "erasmo"], ["Socrate", "socrates"], ["Platon", "platon"], ["Aristote", "aristoteles"],
  ["Héraclite", "heraclito"], ["Parménide", "parmenides"], ["Protagoras", "protagoras"], ["Épicure", "epicuro"], ["Sénèque", "seneca"],
  ["Tertullien", "tertuliano"], ["Ockham", "ockham"], ["Machiavel", "maquiavelo"], ["Hobbes", "hobbes"], ["Spinoza", "spinoza"],
  ["Locke", "locke"], ["Leibniz", "leibniz"], ["Kant", "kant"], ["Heidegger", "heidegger"]
];
let adgAmb = "all", adgPrueba = false;

function adgEsc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function adgBox(){ return document.getElementById("adagiosbox"); }
function adgHayIlu(id){ return typeof ILUSTRES !== "undefined" && ILUSTRES[id] && typeof loadIlustre === "function"; }

/* texto escapado con el primer nombre de cada pensador convertido en botón (hechos = los ya enlazados en la ficha) */
function adgNombres(txt, hechos){
  let s = adgEsc(txt);
  ADG_ILU.forEach(([n, id]) => {
    if (hechos.has(id) || !adgHayIlu(id)) return;
    /* seguido de un número de pasaje es el título de una obra (Platón, «Protágoras 343b»), no la persona */
    const rx = new RegExp("(^|[^\\p{L}>])(" + n + ")(?![\\p{L}<])(?!\\s*\\d)", "u");
    if (!rx.test(s)) return;
    s = s.replace(rx, (m, a, b) => a + '<button class="adg-ilu" data-ilu="' + id + '" title="' + adgEsc(adgT("verBio", { n: ILUSTRES[id].name })) + '">' + b + '</button>');
    hechos.add(id);
  });
  return s;
}

function adgFiltro(){
  const f = document.getElementById("adagiosfilter");
  if (!f) return;
  f.innerHTML = '<div class="fgroup"><span class="flabel">' + adgT("ambito") + '</span>' +
    ["all"].concat(ADG_AMB).map(a => '<button class="fbtn" data-adg-a="' + a + '" aria-pressed="' + (a === adgAmb) + '">' +
      adgT(a === "all" ? "todos" : a) + '</button>').join("") + '</div>' +
    '<div class="fgroup"><span class="flabel">' + adgT("modo") + '</span>' +
    [["leer", false], ["prueba", true]].map(m => '<button class="fbtn" data-adg-m="' + m[0] + '" aria-pressed="' + (adgPrueba === m[1]) + '">' + adgT(m[0]) + '</button>').join("") + '</div>';
  f.querySelectorAll("[data-adg-a]").forEach(b => b.addEventListener("click", () => { adgAmb = b.dataset.adgA; adgFiltro(); adgRender(); }));
  f.querySelectorAll("[data-adg-m]").forEach(b => b.addEventListener("click", () => { adgPrueba = b.dataset.adgM === "prueba"; adgFiltro(); adgRender(); }));
}

function adgTemas(a){
  if (typeof THEORY === "undefined") return "";
  const ts = (a.t || []).filter(k => THEORY[k]);
  if (!ts.length) return "";
  return '<p class="adg-temas"><span class="adg-k">' + adgT("temas") + '</span> ' +
    ts.map(k => '<button class="adg-tema" data-th="' + adgEsc(k) + '" title="' + adgEsc(THEORY[k].title) + '">' + adgEsc(THEORY[k].title) + '</button>').join("") + '</p>';
}

function adgFicha(a){
  const h = new Set(), N = t => adgNombres(t, h);
  /* (09-10) el original (latín y, si lo hay, griego transliterado) solo se ve al pulsar λ, en la línea del español */
  const lb = adgT(a.gr ? "originalBtnGr" : "originalBtn");
  return '<article class="adg-card' + (adgPrueba ? ' adg-oculta' : '') + '" id="adg-' + adgEsc(a.id) + '" data-ep="' + adgEsc(a.e) + '">' +
    (a.img ? '<figure class="adg-fig' + (a.fit === "contain" ? ' adg-fig-c' : '') + '"><img src="' + adgEsc(a.img) + '" alt="' + adgEsc(a.pie) + '" loading="lazy" decoding="async"><figcaption>' + N(a.pie) + '</figcaption></figure>' : '') +
    '<h2 class="adg-es">' + adgEsc(a.es) + '<button type="button" class="adg-lam" aria-expanded="false" aria-label="' + lb + '" title="' + lb + '">λ</button></h2>' +
    '<div class="adg-orig" hidden><p class="adg-la"><span class="adg-k">' + adgT("latin") + '</span> <i lang="la">' + adgEsc(a.la) + '</i></p>' +
    (a.gr ? '<p class="adg-gr"><span class="adg-k">' + adgT("griego") + '</span> <span lang="grc">' + adgEsc(a.gr) + '</span> (<i>' + adgEsc(a.tr) + '</i>)</p>' : '') + '</div>' +
    (adgPrueba ? '<p class="adg-ayuda">' + adgT("pruebaAyuda") + '</p><button class="adg-desc" aria-expanded="false">' + adgT("descubrir") + '</button>' : '') +
    '<div class="adg-cuerpo">' +
      '<p class="adg-sen"><span class="adg-k">' + adgT("sentido") + '</span> ' + N(a.sen) + '</p>' +
      (a.uso ? '<p class="adg-uso"><span class="adg-k">' + adgT("uso") + '</span> ' + N(a.uso) + '</p>' : '') +
      (a.trampa ? '<p class="adg-trampa"><strong>' + adgT("trampa") + '.</strong> ' + N(a.trampa) + '</p>' : '') +
      '<p class="adg-o"><span class="adg-k">' + adgT("origen") + '</span> ' + N(a.o) + (a.er ? '. ' + N(adgT("erasmo", { n: a.er })) : '') + '.</p>' +
      adgTemas(a) +
    '</div></article>';
}

function adgHistoria(){
  const h = new Set(), p = k => '<p>' + adgNombres(adgT(k), h) + '</p>';
  return '<details class="adg-guia"><summary>' + adgT("hTit") + '</summary>' + p("h1") +
    '<h3>' + adgT("h2t") + '</h3>' + p("h2") + '<h3>' + adgT("h3t") + '</h3>' + p("h3") + p("h3b") +
    '<h3>' + adgT("h4t") + '</h3>' + p("h4") + p("h4b") +
    '<div class="adg-mont">' + [["montaigne_divisa", "pieDivisa"], ["montaigne_medalla", "pieMedalla"]].map(([f, k]) =>
      '<figure><img src="media/galeria_museo/adagios/' + f + '.jpg" alt="' + adgEsc(adgT(k)) + '" loading="lazy"><figcaption>' + adgT(k) + '</figcaption></figure>').join("") + '</div></details>' +
    '<details class="adg-guia"><summary>' + adgT("cTit") + '</summary><p>' + adgT("c0") + '</p><ol>' +
    '<li><strong>' + adgT("c1t") + '</strong> ' + adgT("c1") + '</li>' +
    '<li><strong>' + adgT("c2t") + '</strong><ol type="a">' + ["c2a", "c2b", "c2c", "c2d", "c2e"].map(k => '<li>' + adgT(k) + '</li>').join("") + '</ol>' +
      '<p class="adg-ej"><strong>' + adgT("cEjT") + '</strong> ' + adgNombres(adgT("cEj"), new Set()) + '</p></li>' +
    ["c3", "c4", "c5"].map(k => '<li><strong>' + adgT(k + "t") + '</strong> ' + adgT(k) + '</li>').join("") + '</ol></details>';
}

function adgRender(){
  const box = adgBox();
  if (!box) return;
  const l = ADAGIOS.filter(a => adgAmb === "all" || a.amb === adgAmb);
  box.innerHTML = '<div class="adg-grid">' + l.map(adgFicha).join("") + '</div>' +
    '<p class="adg-cuenta">' + (l.length === 1 ? adgT("cuenta1") : adgT("cuenta", { n: l.length })) + '</p>' + adgHistoria();
}

/* clics delegados (la caja se repinta con cada filtro) */
(() => {
  const box = adgBox();
  if (!box) return;
  box.addEventListener("click", e => {
    const d = e.target.closest(".adg-desc");
    if (d){ const c = d.closest(".adg-card"), oc = c.classList.toggle("adg-oculta");
      d.textContent = adgT(oc ? "descubrir" : "ocultar"); d.setAttribute("aria-expanded", String(!oc)); return; }
    const l = e.target.closest(".adg-lam");
    if (l){ const g = l.closest(".adg-card").querySelector(".adg-orig"); g.hidden = !g.hidden; l.setAttribute("aria-expanded", String(!g.hidden)); return; }
    const i = e.target.closest("[data-ilu]");
    if (i){ (window.show || show)("ilustres"); loadIlustre(i.dataset.ilu); return; }
    const t = e.target.closest("[data-th]");
    if (t){ (window.show || show)("teoria"); if (typeof window.loadTheory === "function") window.loadTheory(t.dataset.th); }
  });
})();

function loadAdagios(arg){
  const id = String(arg || "").split("/")[0];
  const a = ADAGIOS.find(x => x.id === id);
  if (a && adgAmb !== "all" && a.amb !== adgAmb){ adgAmb = "all"; adgFiltro(); }
  adgRender();
  const el = a && document.getElementById("adg-" + a.id);
  /* tras pintar: show() sube al principio de la vista y el enrutado inicial llega después */
  if (el){ el.classList.add("adg-marca"); setTimeout(() => el.scrollIntoView({ block: "center" }), 80); setTimeout(() => el.classList.remove("adg-marca"), 2600); }
}
window.loadAdagios = loadAdagios;
if (adgBox() && typeof ADAGIOS !== "undefined"){ adgFiltro(); adgRender(); }
