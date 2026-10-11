"use strict";
/* ===== Rincón de lógica · «Lógica moderna»: Formalizar y Reglas de inferencia (12-10-2026) =====
   Petición del profesor: el Rincón tenía lógica proposicional (tablas de verdad, puertas) pero sin pestaña de lógica
   moderna. Las pestañas de arriba pasan a ser «Lógica clásica» (silogismos, cuadrado, conjuntos) y «Lógica moderna»
   (tablas de verdad, formalizar, reglas de inferencia, cuantificadores, puertas lógicas); ver logRender en logicaview.js.
   · Cuantificadores: A, E, I, O en lógica de predicados, un «mundo pequeño» para evaluarlas (sujeto vacío incluido) y
     un ejercicio de elegir la fórmula de cada frase.
   · Formalizar: frases en castellano que el alumno pasa a fórmula con el teclado de conectivas; se corrige por
     EQUIVALENCIA (misma tabla de verdad), así que vale cualquier forma correcta, y si no lo es se enseña la fila en
     que difieren. Cada frase trae su pista y su caso trampa («solo si», «a menos que», «o… o…», «ni… ni…»).
   · Reglas de inferencia: las reglas válidas y las falacias formales que se les parecen, con su forma, un ejemplo y
     un botón para comprobarlas en la tabla de verdad; y un ejercicio «¿regla o trampa?» con argumentos en castellano.
   Usa las funciones de logicaview.js (logParse, logVars, logFilas, logEval, logStr, logEsc, logTeclado, LOG).
   Textos en LOGM_TXT y en los datos de abajo: cadenas enteras, que traduce el diccionario de interfaz (ui/<lang>.json). */
const LOGM_TXT = {
  tabClasica: "Logique classique", tabModerna: "Logique moderne", tabFormalizar: "Formaliser", tabInferencia: "Règles d’inférence",
  introFormalizar: "Formaliser, c’est traduire une phrase en symboles : chaque phrase simple est une lettre (p, q, r…) et les mots qui les relient (« non », « et », « ou », « si… alors ») sont des connecteurs. Écris la formule avec le clavier et clique sur « Vérifier » : toute formule équivalente est acceptée, car on compare sa table de vérité avec celle de la solution.",
  introInferencia: "Une règle d’inférence est une façon de raisonner qui ne se trompe jamais : si les prémisses sont vraies, la conclusion l’est aussi. Certaines formes leur ressemblent beaucoup, mais ne sont pas valides : ce sont les sophismes formels. Voici les deux, avec un exemple de chacun, et un exercice pour les distinguer.",
  guiaTitF: "Comment se traduit chaque mot",
  guiaF: "<ul><li><b>¬</b> (non) : « non », « il n’est pas vrai que », « il est faux que ».</li><li><b>∧</b> (et) : « et », « mais », « bien que », « cependant », « de plus ». En logique, ils disent tous la même chose : que les deux choses sont vraies.</li><li><b>∨</b> (ou) : « ou ». En logique, il est inclusif (l’une, l’autre ou les deux) ; si la phrase exclut les deux à la fois (« ou… ou…, mais pas les deux »), il faut l’ajouter.</li><li><b>→</b> (si…, alors) : « si p, q », « q si p », « quand p, q », « chaque fois que p, q », « il suffit que p pour que q » (p est une condition <i>suffisante</i>).</li><li><b>Cas piège</b> : « p seulement si q » et « pour p, il est nécessaire que q » s’écrivent <b>p → q</b> : q est une condition <i>nécessaire</i>, pas suffisante.</li><li><b>↔</b> (si et seulement si) : « p si et seulement si q », « p quand et seulement quand q ».</li><li><b>Autres pièges</b> : « ni p ni q » s’écrit ¬p ∧ ¬q ; « p à moins que q » s’écrit ¬q → p (ou, ce qui revient au même, p ∨ q).</li><li><b>« Donc » n’est pas un connecteur</b> : « je pense, donc je suis » n’affirme pas « si je pense, je suis », mais <i>tire</i> une conclusion d’une prémisse. C’est un argument : on l’étudie dans « Règles d’inférence ».</li></ul>",
  diccionario: "Dictionnaire :", tuFormula: "Ta formule", comprobar: "Vérifier", solucion: "Voir la solution", pista: "Indice",
  bien: "Correct ! Ta formule est équivalente à la solution : {s}", mal: "Elle n’est pas équivalente. Par exemple, quand {fila}, ta formule donne {a} et la phrase dit {b}.",
  verdadero: "vrai", falso: "faux", vacia: "Écris une formule.", sol: "Solution : {s}", ejercicio: "Phrase {n} sur {m}",
  validas: "Règles valides", falacias: "Sophismes formels (ils ne sont pas valides)", forma: "Forme", ejemplo: "Exemple", porQue: "Pourquoi ça ne marche pas",
  verTabla: "La vérifier dans la table de vérité", ejTit: "Règle ou piège ?", ejAyuda: "Lis chaque argument et choisis quelle forme il a. Il n’y a pas de note : ce qui compte, c’est de comprendre pourquoi.",
  acierto: "Bien ! C’est {r}.", fallo: "No: es {r}.", formaArg: "Sa forme : {f}"
};
const logmT = (k, v) => String(LOGM_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

/* ---------- Formalizar ---------- */
const LOGM_FZ = [
  { f: "S’il pleut, le sol est mouillé.", d: [["p", "il pleut"], ["q", "le sol est mouillé"]], s: "p → q", pista: "« Si p, q » : ce qui vient après « si » est l’antécédent." },
  { f: "Il pleut et je ne prends pas de parapluie.", d: [["p", "il pleut"], ["q", "je prends un parapluie"]], s: "p ∧ ¬q", pista: "La lettre est la phrase affirmative ; le « non » s’écrit avec ¬." },
  { f: "S’il pleut et que je ne prends pas de parapluie, je me mouille.", d: [["p", "il pleut"], ["q", "je prends un parapluie"], ["r", "je me mouille"]], s: "(p ∧ ¬q) → r", pista: "D’abord l’antécédent complet, entre parenthèses ; ensuite la flèche." },
  { f: "Je n’étudie ni ne travaille.", d: [["p", "j’étudie"], ["q", "je travaille"]], s: "¬p ∧ ¬q", pista: "« Ni… ni… » nie les deux choses à la fois." },
  { f: "Je partirai en excursion seulement s’il ne pleut pas.", d: [["p", "je pars en excursion"], ["q", "il pleut"]], s: "p → ¬q", pista: "Cas piège : « seulement si » introduit la condition nécessaire, qui va après la flèche." },
  { f: "Pour voter, il est nécessaire d’être majeur.", d: [["p", "tu votes"], ["q", "tu es majeur"]], s: "p → q", pista: "Si tu votes, c’est que tu es majeur ; mais être majeur ne suffit pas pour voter." },
  { f: "Il suffit d’appuyer sur le bouton pour que la lumière s’allume.", d: [["p", "tu appuies sur le bouton"], ["q", "la lumière s’allume"]], s: "p → q", pista: "« Il suffit de p » dit que p est une condition suffisante : il va avant la flèche." },
  { f: "Nous sortirons à moins qu’il ne pleuve.", d: [["p", "nous sortons"], ["q", "il pleut"]], s: "¬q → p", pista: "Cas piège : « p à moins que q » veut dire « si non q, p »." },
  { f: "Je t’appellerai si et seulement si tu arrives en retard.", d: [["p", "je t’appelle"], ["q", "tu arrives en retard"]], s: "p ↔ q", pista: "« Si et seulement si » réunit deux conditionnels : p → q et q → p." },
  { f: "Ou tu étudies, ou tu travailles, mais pas les deux.", d: [["p", "tu étudies"], ["q", "tu travailles"]], s: "(p ∨ q) ∧ ¬(p ∧ q)", pista: "Cas piège : le « ou » logique est inclusif ; ici, il faut ajouter que les deux ne se produisent pas en même temps." },
  { f: "Il n’est pas vrai que, s’il pleut, le match soit annulé.", d: [["p", "il pleut"], ["q", "le match est annulé"]], s: "¬(p → q)", pista: "Le « il n’est pas vrai que » nie tout le conditionnel : il va devant la parenthèse." },
  { f: "Épicure : « Quand nous sommes là, la mort n’est pas là ; et quand la mort est là, nous ne sommes plus là ».", d: [["p", "nous sommes là"], ["q", "la mort est là"]], s: "(p → ¬q) ∧ (q → ¬p)", pista: "Ce sont deux conditionnels reliés par « et ». (Lettre à Ménécée, 125.)" }
];
function logmEquiv(a, b){
  const vars = logVars([a, b]);
  return logFilas(vars).find(v => logEval(a, v) !== logEval(b, v)) || null;
}
function logmFzRes(i){
  const z = LOGM_FZ[i], st = LOG.fz[i] || {};
  if (st.sol) return '<p class="lg-nota">' + logmT("sol", { s: logEsc(z.s) }) + "</p>";
  if (!st.hecho) return "";
  if (!String(st.f || "").trim()) return '<p class="lg-error">' + logmT("vacia") + "</p>";
  try {
    const a = logParse(st.f), b = logParse(z.s), dif = logmEquiv(a, b);
    if (!dif) return '<p class="lg-veredicto lg-tautologia">' + logmT("bien", { s: logEsc(z.s) }) + "</p>";
    const fila = Object.keys(dif).map(x => x + " = " + (dif[x] ? "V" : "F")).join(", ");
    return '<p class="lg-veredicto lg-contradiccion">' + logmT("mal", { fila, a: logmT(logEval(a, dif) ? "vrai" : "faux"), b: logmT(logEval(b, dif) ? "vrai" : "faux") }) +
      '</p><p class="lg-nota"><b>' + logmT("pista") + ":</b> " + logEsc(z.pista) + "</p>";
  } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
}
function logRenderFormalizar(){
  const N = LOGM_FZ.length;
  return '<details class="lg-guia"><summary>' + logmT("guiaTitF") + "</summary>" + logmT("guiaF") + "</details>" +
    LOGM_FZ.map((z, i) => {
      const st = LOG.fz[i] || {};
      return '<div class="lg-panel lg-fz" id="lg-fz-' + i + '"><p class="lg-nota">' + logmT("ejercicio", { n: i + 1, m: N }) + '</p><p class="lg-fz-frase">' + logEsc(z.f) + "</p>" +
        '<p class="lg-nota">' + logmT("diccionario") + " " + z.d.map(([l, t]) => "<b>" + l + "</b> = " + logEsc(t)).join(" · ") + "</p>" +
        '<label class="lg-label" for="lg-fzi-' + i + '">' + logmT("tuFormula") + '</label><div class="lg-fila"><input id="lg-fzi-' + i + '" class="lg-input" data-fz="' + i + '" value="' + logEsc(st.f || "") + '" autocomplete="off" spellcheck="false">' +
        '<button type="button" class="btn" data-fzok="' + i + '">' + logmT("comprobar") + '</button></div>' + logTeclado("lg-fzi-" + i) +
        '<p><button type="button" class="btn ghost" data-fzsol="' + i + '">' + logmT("solucion") + '</button></p><div id="lg-fzr-' + i + '">' + logmFzRes(i) + "</div></div>";
    }).join("");
}

/* ---------- Reglas de inferencia ---------- */
const LOGM_REGLAS = [
  { k: "mp", n: "Modus ponens", p: "p → q; p", c: "q", ej: "S’il pleut, le sol est mouillé. Il pleut. Donc le sol est mouillé." },
  { k: "mt", n: "Modus tollens", p: "p → q; ¬q", c: "¬p", ej: "S’il pleut, le sol est mouillé. Le sol n’est pas mouillé. Donc il ne pleut pas." },
  { k: "sh", n: "Syllogisme hypothétique", p: "p → q; q → r", c: "p → r", ej: "Si j’étudie, je réussis ; si je réussis, je pars en voyage. Donc, si j’étudie, je pars en voyage." },
  { k: "sd", n: "Syllogisme disjonctif", p: "p ∨ q; ¬p", c: "q", ej: "Ou il est chez lui, ou il est en classe. Il n’est pas chez lui. Donc il est en classe." },
  { k: "dc", n: "Dilemme constructif", p: "p → r; q → r; p ∨ q", c: "r", ej: "Si tu prends le train, tu arrives en retard ; si tu prends le bus, aussi. Tu prendras le train ou le bus. Donc tu arriveras en retard." }
];
const LOGM_FALACIAS = [
  { k: "ac", n: "Affirmation du conséquent", p: "p → q; q", c: "p", ej: "S’il pleut, le sol est mouillé. Le sol est mouillé. Donc il a plu.", por: "Le sol peut être mouillé pour une autre raison : quelqu’un l’a arrosé. La condition suffisante n’est pas la seule possible." },
  { k: "na", n: "Négation de l’antécédent", p: "p → q; ¬p", c: "¬q", ej: "Si tu étudies, tu réussis. Tu n’as pas étudié. Donc tu ne réussiras pas.", por: "La règle ne dit pas ce qui se passe si tu n’étudies pas : tu réussiras peut-être pour une autre raison." },
  { k: "ad", n: "Affirmation d’un disjoint", p: "p ∨ q; p", c: "¬q", ej: "Ou nous allons au cinéma, ou nous allons dîner. Nous allons au cinéma. Donc nous n’allons pas dîner.", por: "Le « ou » logique est inclusif : on peut faire les deux. Ce ne serait valide que si la phrase excluait les deux à la fois." }
];
const LOGM_EJ = [
  { t: "Si Socrate est un être humain, il est mortel. Socrate est un être humain. Donc Socrate est mortel.", r: "mp" },
  { t: "S’il y a du feu, il y a de l’oxygène. Sur la Lune, il n’y a pas d’oxygène. Donc sur la Lune, il n’y a pas de feu.", r: "mt" },
  { t: "Si un gouvernement viole les droits des citoyens, le peuple a le droit de résister. Le peuple résiste. Donc le gouvernement a violé ses droits.", r: "ac" },
  { t: "Ou le coupable est le majordome, ou c’est la cuisinière. Le majordome a un alibi et n’est pas le coupable. Donc c’est la cuisinière.", r: "sd" },
  { t: "Si tu fais des efforts, tu progresses ; si tu progresses, tu réussis. Donc, si tu fais des efforts, tu réussis.", r: "sh" },
  { t: "S’il pleut, le match est annulé. Il ne pleut pas. Donc le match n’est pas annulé.", r: "na" },
  { t: "Si je doute, je pense. Je doute. Donc je pense.", r: "mp" },
  { t: "Ana étudie la philosophie ou l’histoire. Elle étudie la philosophie. Donc elle n’étudie pas l’histoire.", r: "ad" },
  { t: "Si l’âme était matérielle, elle se décomposerait comme le corps. L’âme ne se décompose pas. Donc l’âme n’est pas matérielle.", r: "mt" },
  { t: "Si la théorie est bonne, ses prédictions se réalisent. Ses prédictions se réalisent. Donc la théorie est bonne.", r: "ac" }
];
function logmTodas(){ return LOGM_REGLAS.concat(LOGM_FALACIAS); }
function logmForma(x){ return x.p.split(";").map(s => s.trim()).join(" · ") + " ⊢ " + x.c; }
function logmCarta(x, fal){
  return '<div class="lg-regla' + (fal ? " lg-falaz" : "") + '"><h3>' + logEsc(x.n) + '</h3><p class="lg-forma"><b>' + logmT("forma") + ":</b> " + logEsc(logmForma(x)) + "</p>" +
    '<p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p>" + (fal ? '<p><b>' + logmT("porQue") + ":</b> " + logEsc(x.por) + "</p>" : "") +
    '<p><button type="button" class="btn ghost" data-infp="' + logEsc(x.p) + '" data-infc="' + logEsc(x.c) + '">' + logmT("verTabla") + " →</button></p></div>";
}
function logRenderInferencia(){
  const T = logmTodas();
  return '<div class="lg-panel"><h2>' + logmT("validas") + '</h2><div class="lg-reglas">' + LOGM_REGLAS.map(x => logmCarta(x, false)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("ejTit") + '</h2><p class="lg-nota">' + logmT("ejAyuda") + "</p>" +
    LOGM_EJ.map((e, i) => {
      const r = LOG.inf[i], bien = T.find(x => x.k === e.r);
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.t) + '</p><div class="lg-teclas">' + T.map(x => '<button type="button" class="chip' + (r === x.k ? (x.k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + '" data-infej="' + i + '" data-infr="' + x.k + '"' + (r ? " disabled" : "") + ">" + logEsc(x.n) + "</button>").join("") + "</div>" +
        (r ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "acierto" : "fallo", { r: logEsc(bien.n) }) + " " + logmT("formaArg", { f: logEsc(logmForma(bien)) }) + "</p>" : "") + "</div>";
    }).join("") + "</div>";
}

/* ---------- Cuantificadores (lógica de predicados) ---------- */
/* Las cuatro proposiciones de Aristóteles en lógica de predicados, un «mundo pequeño» donde se evalúan (con el caso
   del sujeto vacío: el compromiso existencial del tema 4) y un ejercicio de elegir la fórmula de cada frase. */
const LOGM_CQ_TXT = {
  tabCuantificadores: "Quantificateurs",
  introCuantificadores: "La logique des tables de vérité ne peut pas analyser « Tous les humains sont mortels ; Socrate est humain ; donc Socrate est mortel », car elle ne voit pas ce qu’il y a à l’intérieur de chaque phrase. Frege (1879) a ajouté les prédicats (Hx = « x est humain ») et les quantificateurs : ∀x, « pour tout x », et ∃x, « il existe au moins un x ». Avec eux, on écrit les quatre propositions d’Aristote et bien d’autres choses.",
  cqCuatro: "Les quatre propositions d’Aristote", cqProp: "Proposition", cqFormula: "Formule", cqLee: "Se lit",
  cqTrampa: "Cas piège : « Tout S est P » n’est pas ∀x (Sx ∧ Px), qui dirait que tout est à la fois S et P ; et « Quelque S est P » n’est pas ∃x (Sx → Px), qui est vrai dès qu’il existe quelque chose qui n’est pas S.",
  cqNeg: "Nier un quantificateur : ¬∀x Px équivaut à ∃x ¬Px (« pas tous » = « certains ne… pas »), et ¬∃x Px équivaut à ∀x ¬Px (« aucun » = « chacun ne… pas »). C’est pourquoi A et O sont contradictoires, de même que E et I.",
  cqMundo: "Un petit monde", cqMundoAyuda: "Cinq individus (a, b, c, d, e). Coche ceux qui sont S et ceux qui sont P, et regarde quelles propositions sont vraies.",
  cqInd: "Individu", cqVacio: "Essaie de laisser S vide : alors « Tout S est P » et « Aucun S n’est P » sont vraies en même temps, et « Quelque S est P » est fausse. En logique moderne, la proposition universelle ne tient pas pour acquis qu’il existe des S : c’est l’engagement existentiel du thème 4.",
  cqTesti: "Le montre : {x}", cqContra: "Échoue pour : {x}", cqNadie: "il n’y en a aucun", cqSinS: "vraie parce qu’il n’y a aucun S",
  cqPresets: "Mondes d’exemple :", cqP1: "Tous les S sont P", cqP2: "Aucun S n’est P", cqP3: "Certains oui, d’autres non", cqP4: "Il n’y a aucun S",
  cqEjTit: "Quelle formule est-ce ?", cqEjAyuda: "Choisis la formule qui dit la même chose que la phrase. La majuscule est le prédicat et la minuscule, un individu précis.",
  cqBien: "Correct !", cqMal: "No.", cqEjemplo: "Exemple résolu : le syllogisme de Socrate",
  cqEjemploTxt: "Tous les humains sont mortels : ∀x (Hx → Mx). Socrate est humain : Hs. Donc Socrate est mortel : Ms. De la première prémisse découle Hs → Ms (ce qui vaut pour tout x vaut pour Socrate : « instanciation universelle »), et de Hs → Ms et Hs découle Ms par modus ponens."
};
const LOGM_CQ4 = [
  ["A", "Tout S est P", "∀x (Sx → Px)", "pour tout x, si x est S, alors x est P"],
  ["E", "Aucun S n’est P", "∀x (Sx → ¬Px)", "pour tout x, si x est S, alors x n’est pas P (ou bien : ¬∃x (Sx ∧ Px))"],
  ["I", "Quelque S est P", "∃x (Sx ∧ Px)", "il existe au moins un x qui est S et qui est P"],
  ["O", "Quelque S n’est pas P", "∃x (Sx ∧ ¬Px)", "il existe au moins un x qui est S et qui n’est pas P"]
];
const LOGM_CQ_IND = ["a", "b", "c", "d", "e"];
const LOGM_CQ_PRE = {
  p1: [[1, 1], [1, 1], [0, 1], [0, 0], [1, 1]], p2: [[1, 0], [1, 0], [0, 1], [0, 1], [0, 0]],
  p3: [[1, 1], [1, 0], [0, 1], [1, 1], [0, 0]], p4: [[0, 1], [0, 0], [0, 1], [0, 0], [0, 1]]
};
const LOGM_CQ_EJ = [
  { f: "Tous les philosophes sont curieux.", d: "F = philosophe, C = curieux", o: ["∀x (Fx → Cx)", "∀x (Fx ∧ Cx)", "∃x (Fx ∧ Cx)", "∀x (Cx → Fx)"], r: 0, por: "Universelle affirmative (A). Avec ∧, elle dirait que tout le monde est philosophe et curieux ; avec la flèche à l’envers, que tout curieux est philosophe." },
  { f: "Certains sophistes se faisaient payer pour enseigner.", d: "S = sophiste, C = se faisait payer pour enseigner", o: ["∃x (Sx → Cx)", "∃x (Sx ∧ Cx)", "∀x (Sx → Cx)"], r: 1, por: "Particulière affirmative (I) : il existe quelqu’un qui est sophiste et qui se faisait payer. Avec la flèche, il suffirait qu’il existe quelque chose qui ne soit pas sophiste." },
  { f: "Aucun dieu n’est mortel.", d: "D = dieu, M = mortel", o: ["¬∀x (Dx → Mx)", "∀x (¬Dx → Mx)", "∀x (Dx → ¬Mx)"], r: 2, por: "Universelle négative (E). ¬∃x (Dx ∧ Mx) convient aussi : « il n’existe rien qui soit dieu et mortel »." },
  { f: "Les Grecs n’étaient pas tous philosophes.", d: "G = grec, F = philosophe", o: ["∀x (Gx → ¬Fx)", "¬∀x (Gx → Fx)", "¬∃x (Gx ∧ Fx)"], r: 1, por: "Cas piège : « pas tous » n’est pas « aucun ». Cela équivaut à ∃x (Gx ∧ ¬Fx) : quelque Grec n’était pas philosophe (O)." },
  { f: "Seuls les citoyens votaient à l’assemblée.", d: "V = votait à l’assemblée, C = citoyen", o: ["∀x (Cx → Vx)", "∀x (Vx → Cx)", "∃x (Vx ∧ Cx)"], r: 1, por: "Cas piège : « seuls les C » place la condition nécessaire après la flèche : tous ceux qui votaient étaient citoyens (tous les citoyens ne votaient pas forcément)." },
  { f: "Il y a quelque chose qui n’a pas été causé par autre chose.", d: "C = causé par autre chose", o: ["¬∃x Cx", "∀x ¬Cx", "∃x ¬Cx"], r: 2, por: "Il existe au moins un x qui n’est pas causé : c’est l’idée du premier moteur d’Aristote ou de la cause première de Thomas d’Aquin." },
  { f: "Socrate est mortel.", d: "M = mortel, s = Socrate", o: ["∃x Mx", "Ms", "∀x Mx"], r: 1, por: "Un individu précis s’écrit avec une lettre minuscule (une constante) : pas besoin de quantificateur." },
  { f: "Quiconque pense existe.", d: "P = pense, E = existe", o: ["∀x (Px → Ex)", "∀x (Ex → Px)", "∃x (Px ∧ Ex)"], r: 0, por: "Universelle affirmative (A). Pour en tirer « j’existe », il faudrait en plus la prémisse « je pense » (Pi) et l’instanciation universelle, comme avec Socrate." }
];
function logmCqEval(m){
  const ix = i => LOGM_CQ_IND[i], S = m.map(r => !!r[0]), P = m.map(r => !!r[1]), all = [0, 1, 2, 3, 4];
  const res = {
    A: { v: all.every(i => !S[i] || P[i]), malos: all.filter(i => S[i] && !P[i]) },
    E: { v: all.every(i => !S[i] || !P[i]), malos: all.filter(i => S[i] && P[i]) },
    I: { v: all.some(i => S[i] && P[i]), buenos: all.filter(i => S[i] && P[i]) },
    O: { v: all.some(i => S[i] && !P[i]), buenos: all.filter(i => S[i] && !P[i]) }
  };
  Object.values(res).forEach(r => { r.txt = r.malos ? (r.malos.length ? logmT("cqContra", { x: r.malos.map(ix).join(", ") }) : (S.some(Boolean) ? "" : logmT("cqSinS"))) : (r.buenos.length ? logmT("cqTesti", { x: r.buenos.map(ix).join(", ") }) : logmT("cqNadie")); });
  return res;
}
function logmCqMundo(){
  const m = LOG.cq.m, res = logmCqEval(m);
  return '<div class="tablewrap"><table class="lg-tabla lg-cq-mundo"><thead><tr><th>' + logmT("cqInd") + "</th>" + LOGM_CQ_IND.map(x => "<th>" + x + "</th>").join("") + "</tr></thead><tbody>" +
    ["S", "P"].map((k, j) => "<tr><th>" + k + "</th>" + m.map((r, i) => '<td><button type="button" class="chip lg-cq-cel' + (r[j] ? " on" : "") + '" data-cqi="' + i + '" data-cqj="' + j + '" aria-pressed="' + !!r[j] + '">' + (r[j] ? "✓" : "·") + "</button></td>").join("") + "</tr>").join("") +
    '</tbody></table></div><div class="tablewrap"><table class="lg-tabla"><tbody>' +
    LOGM_CQ4.map(([t, , f]) => '<tr><th>' + t + "</th><td>" + logEsc(f) + "</td>" + logVF(res[t].v) + '<td class="lg-cq-x">' + logEsc(res[t].txt) + "</td></tr>").join("") + "</tbody></table></div>";
}
function logRenderCuantificadores(){
  const ej = LOG.cq.ej;
  return '<div class="lg-panel"><h2>' + logmT("cqCuatro") + '</h2><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("cqProp") + "</th><th>" + logmT("cqFormula") + "</th><th>" + logmT("cqLee") + "</th></tr></thead><tbody>" +
    LOGM_CQ4.map(([t, p, f, l]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + '</td><td class="lg-forma">' + logEsc(f) + "</td><td>" + logEsc(l) + "</td></tr>").join("") + "</tbody></table></div>" +
    '<p class="lg-nota">' + logmT("cqTrampa") + '</p><p class="lg-nota">' + logmT("cqNeg") + "</p></div>" +
    '<div class="lg-panel"><h2>' + logmT("cqMundo") + '</h2><p class="lg-nota">' + logmT("cqMundoAyuda") + '</p><p class="lg-nota">' + logmT("cqPresets") + " " +
    [["p1", "cqP1"], ["p2", "cqP2"], ["p3", "cqP3"], ["p4", "cqP4"]].map(([k, l]) => '<button type="button" class="chip" data-cqpre="' + k + '">' + logmT(l) + "</button>").join(" ") + "</p>" +
    '<div id="lg-cq">' + logmCqMundo() + '</div><p class="lg-nota">' + logmT("cqVacio") + "</p></div>" +
    '<div class="lg-panel"><h2>' + logmT("cqEjTit") + '</h2><p class="lg-nota">' + logmT("cqEjAyuda") + "</p>" +
    LOGM_CQ_EJ.map((e, i) => {
      const r = ej[i];
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.f) + ' <span class="lg-nota">(' + logEsc(e.d) + ')</span></p><div class="lg-teclas">' +
        e.o.map((o, k) => '<button type="button" class="chip lg-forma' + (r != null && r === k ? (k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + (r != null && k === e.r && r !== k ? " lg-chip-ok" : "") + '" data-cqej="' + i + '" data-cqo="' + k + '"' + (r != null ? " disabled" : "") + ">" + logEsc(o) + "</button>").join("") + "</div>" +
        (r != null ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "cqBien" : "cqMal") + " " + logEsc(e.por) + "</p>" : "") + "</div>";
    }).join("") + '<details class="lg-guia"><summary>' + logmT("cqEjemplo") + "</summary><p>" + logmT("cqEjemploTxt") + "</p></details></div>";
}

Object.assign(LOGM_TXT, LOGM_CQ_TXT);

/* ---------- eventos (delegados en la caja del Rincón; logicaview.js maneja los demás) ---------- */
(function(){
  const box = document.getElementById("logicabox"); if (!box) return;
  LOG.fz = LOG.fz || {}; LOG.inf = LOG.inf || {}; LOG.cq = LOG.cq || { m: LOGM_CQ_PRE.p3.map(r => r.slice()), ej: {} };
  Object.assign(LOG_TXT, LOGM_TXT);   // las pestañas nuevas usan logT() de logicaview.js
  logRender();
  box.addEventListener("click", ev => {
    const b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.fzok != null){ const i = +b.dataset.fzok; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { hecho: true, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.fzsol != null){ const i = +b.dataset.fzsol; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { sol: true }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.infp != null){ LOG.prem = b.dataset.infp; LOG.concl = b.dataset.infc; LOG.tab = "tablas"; logRender(); const a = document.getElementById("lg-arg"); if (a) a.scrollIntoView({ block: "center" }); }
    else if (b.dataset.cqi != null){ const r = LOG.cq.m[+b.dataset.cqi]; r[+b.dataset.cqj] = r[+b.dataset.cqj] ? 0 : 1; const c = document.getElementById("lg-cq"); if (c) c.innerHTML = logmCqMundo(); }
    else if (b.dataset.cqpre){ LOG.cq.m = LOGM_CQ_PRE[b.dataset.cqpre].map(r => r.slice()); const c = document.getElementById("lg-cq"); if (c) c.innerHTML = logmCqMundo(); }
    else if (b.dataset.cqej != null){ LOG.cq.ej[+b.dataset.cqej] = +b.dataset.cqo; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
    else if (b.dataset.infej != null){ LOG.inf[+b.dataset.infej] = b.dataset.infr; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
  });
  box.addEventListener("input", ev => { const t = ev.target; if (t.dataset && t.dataset.fz != null){ const i = +t.dataset.fz; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { f: t.value, hecho: false, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = ""; } });
  box.addEventListener("keydown", ev => { const t = ev.target; if (ev.key === "Enter" && t.dataset && t.dataset.fz != null){ ev.preventDefault(); const ok = box.querySelector('[data-fzok="' + t.dataset.fz + '"]'); if (ok) ok.click(); } });
})();
