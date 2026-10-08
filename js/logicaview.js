"use strict";
/* ===== «Rincón de lógica» (01-10, Filosofía 1.º · tema 4) =====
   Tres pestañas: tablas de verdad (y validez de argumentos), silogismos (modos, reglas y diagrama de
   Venn) y puertas lógicas (cada puerta, y la fórmula dibujada como circuito). Notación de la teoría:
   ¬ ∧ ∨ → ↔, V/F en las tablas y 1/0 en los circuitos. (07-10) Cuarta pestaña: paradojas (datos en paradojas.js).
   Enlace profundo: #logica/tablas|silogismos|puertas|paradojas|ejercicios|clasicos[/ficha]. */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const LOG_TXT = {
  tabTablas: "Tables de vérité", tabSilog: "Syllogismes", tabPuertas: "Portes logiques",
  formula: "Formule", borrar: "Effacer", ejemplos: "Exemples :", verCircuito: "Voir comme circuit",
  ayudaFormula: "Écris une formule avec les variables p, q, r, s, t et les connecteurs ¬ ∧ ∨ → ↔ (ou avec les boutons).",
  errVacia: "Écris une formule.", errCar: "Je ne comprends pas le symbole « {c} ».", errFalta: "Il manque quelque chose à la fin de la formule.",
  errParen: "Il manque une parenthèse fermante.", errSobra: "Il y a quelque chose en trop après « {c} ».", errVars: "Cinq variables distinctes au maximum.",
  tautologia: "Tautologie : elle est vraie dans toutes les lignes, quelle que soit la valeur des variables.",
  contradiccion: "Contradiction : elle est fausse dans toutes les lignes.",
  contingencia: "Contingence : elle est vraie dans certaines lignes et fausse dans d’autres.",
  argTitulo: "Cet argument est-il valide ?", premisas: "Prémisses (séparées par un point-virgule)", conclusion: "Conclusion",
  comprobar: "Vérifier", premisa: "Prémisse {n}",
  valido: "Valide : dans toutes les lignes où les prémisses sont vraies, la conclusion l’est aussi.",
  noValido: "Non valide : il y a au moins une ligne où les prémisses sont vraies et la conclusion fausse (marquée en rouge). C’est un contre-exemple.",
  filasPremisas: "Les lignes en surbrillance sont celles où toutes les prémisses sont vraies.",
  mp: "Modus ponens", mt: "Modus tollens", ac: "Affirmation du conséquent (sophisme)", sd: "Syllogisme disjonctif", sh: "Syllogisme hypothétique",
  demorgan: "Loi de De Morgan", tercero: "Tiers exclu", nocontra: "Contradiction",
  terminos: "Termes (au singulier)", tS: "Sujet (S)", tP: "Prédicat (P)", tM: "Moyen terme (M)",
  defS: "athénien", defP: "mortel", defM: "humain",
  pMayor: "Prémisse majeure", pMenor: "Prémisse mineure", concl: "Conclusion", figura: "Figure",
  figN: "Figure {n}",
  tipoA: "A · universelle affirmative", tipoE: "E · universelle négative", tipoI: "I · particulière affirmative", tipoO: "O · particulière négative",
  fA: "Tout {x} est {y}", fE: "Aucun {x} n’est {y}", fI: "Quelque {x} est {y}", fO: "Quelque {x} n’est pas {y}",
  modo: "Mode {m}", sinNombre: "Ce mode n’a pas de nom traditionnel.",
  silValido: "Valide. C’est le mode {nombre}.", silValidoSin: "Valide.",
  silTrad: "Il n’est valide que si nous supposons que les « {t} » existent (lecture traditionnelle d’Aristote). Pour la logique actuelle, de deux prémisses universelles ne découle pas une conclusion particulière.",
  silTradNombre: "Dans la lecture traditionnelle, c’est le mode {nombre}.",
  silNoValido: "Non valide.", reglasRotas: "Règles enfreintes :",
  r1: "Le moyen terme doit être distribué (pris dans toute son extension) au moins dans une prémisse.",
  r2P: "Le prédicat est distribué dans la conclusion mais pas dans la prémisse majeure (illicite majeur).",
  r2S: "Le sujet est distribué dans la conclusion mais pas dans la prémisse mineure (illicite mineur).",
  r3: "De deux prémisses négatives, rien ne découle.",
  r4a: "Si une prémisse est négative, la conclusion doit être négative.",
  r4b: "Une conclusion négative nécessite une prémisse négative.",
  r5: "De deux prémisses particulières, rien ne découle.",
  r6: "Si une prémisse est particulière, la conclusion doit être particulière.",
  venn: "Diagramme de Venn des prémisses", vennAyuda: "Gris : zone vide (il n’y a rien). ✕ : il y en a au moins un. Un ✕ sur une ligne signifie que nous ne savons pas de quel côté il se trouve.",
  vennConcl: "Si le diagramme des prémisses montre déjà ce que dit la conclusion, le syllogisme est valide.",
  euler: "Diagrammes d’Euler de chaque proposition",
  eulerJunto: "Les deux prémisses ensemble (diagramme d’Euler)",
  eulerJuntoAyuda: "Seules les zones que les prémisses laissent possibles sont dessinées : ce qu’une prémisse universelle déclare vide n’apparaît pas. Regarde les cercles de S et de P : s’ils se retrouvent obligatoirement comme le dit la conclusion, le syllogisme est valide.",
  termLeyenda: "S = {s} · P = {p} · M = {m}",
  eulerAyuda: "La position des cercles exprime la relation : l’un dans l’autre (tout), séparés (aucun), qui se croisent (quelques-uns). Le ✕ marque l’endroit où nous savons qu’il y en a au moins un ; dans les croisements, le reste peut être vide ou non.",
  eulerConcl: "Pour vérifier le syllogisme, joins les deux diagrammes des prémisses par le moyen terme (M) et regarde si les cercles de S et de P doivent se retrouver, sans autre possibilité, comme dans la conclusion.",
  figAyuda: "La figure dépend de la place du moyen terme : 1 · M-P, S-M · 2 · P-M, S-M · 3 · M-P, M-S · 4 · P-M, M-S",
  puerta: "Porte", entradas: "Clique sur les entrées pour les changer (1 = le courant passe, 0 = il ne passe pas).", salida: "Sortie",
  gNOT: "NOT (non) : inverse l’entrée. C’est la négation ¬.",
  gAND: "AND (et) : donne 1 seulement si les deux entrées valent 1. C’est la conjonction ∧.",
  gOR: "OR (ou) : donne 1 si au moins une entrée vaut 1. C’est la disjonction ∨.",
  gNAND: "NAND (non-et) : c’est AND suivie de NOT. Avec des portes NAND, on peut construire n’importe quel circuit.",
  gNOR: "NOR (non-ou) : c’est OR suivie de NOT.",
  gXOR: "XOR (ou exclusif) : donne 1 si les entrées sont différentes. C’est « l’un ou l’autre, mais pas les deux ».",
  gXNOR: "XNOR : donne 1 si les entrées sont identiques. C’est le biconditionnel ↔.",
  circuito: "La formule comme circuit", circAyuda: "Clique sur les variables pour changer leur valeur. Les fils allumés portent un 1. Le conditionnel p → q se construit comme ¬p ∨ q, et le biconditionnel avec une porte XNOR.",
  lampara: "Lampe", tablaPuerta: "Table de la porte",
  introTablas: "La logique étudie quand un raisonnement est correct. Ici, chaque lettre (p, q, r…) est une phrase qui peut être vraie (V) ou fausse (F), et les connecteurs les combinent : ¬ (non), ∧ (et), ∨ (ou), → (si…, alors) et ↔ (si et seulement si). Écris une formule et la table testera toutes les combinaisons possibles ; plus bas, tu peux vérifier si un argument est valide. Commence en cliquant sur l’un des exemples.", introSilog: "Un syllogisme est un raisonnement à deux prémisses et une conclusion qui mettent en relation trois termes : le sujet (S) et le prédicat (P) de la conclusion, et le moyen terme (M), qui apparaît dans les deux prémisses et les relie. Chaque phrase est de l’un de quatre types : A (tout…), E (aucun…), I (quelque…) et O (quelque… ne… pas). Change les types et la figure, ou clique sur un exemple, et les diagrammes te montreront si la conclusion découle des prémisses.", introPuertas: "Les ordinateurs calculent avec la même logique que les tables de vérité, mais avec 1 (le courant passe) et 0 (il ne passe pas) à la place de V et F. Chaque porte logique est un petit circuit qui effectue une opération : NOT nie l’entrée, AND ne s’allume que si les deux entrées le sont, OR se contente d’une seule… Clique sur les entrées pour les allumer et les éteindre ; plus bas, n’importe quelle formule se transforme en circuit.", introEjerc: "Chaque fiche analyse une phrase avec les outils des autres onglets : des lettres pour les phrases simples (p, q, r…), des connecteurs comme dans les tables de vérité, un diagramme d’Euler (chaque cercle est un groupe de personnes ; ✕ = il y a quelqu’un là ; ? = on ne sait pas) et la table de vérité, qui dit dans quels cas la phrase serait fausse. Essaie de formaliser la phrase toi-même avant d’ouvrir « Forme logique ».", introClasicos: "Arguments d’auteurs classiques analysés avec les mêmes outils que les exercices : forme logique, diagramme d’Euler et table de vérité. Lis chaque phrase dans son contexte, essaie de dire quelle condition elle pose (est-elle nécessaire ? est-elle suffisante ?) et compare ensuite avec l’analyse.",
  tabParad: "Paradoxes", tabEjerc: "Exercices", tabClasicos: "Arguments classiques", parTodas: "Toutes", parGrupo: "Afficher", parProblema: "Où est le problème ?", parSalidas: "Issues proposées",
  parForma: "Forme logique", parEuler: "La phrase comme diagramme d’Euler", parConting: "Contingente : une ligne fausse, une zone vide", parEscala: "La phrase sur une échelle", parDice: "Ce qu’elle dit, ce qu’elle présuppose et ce qu’elle ne dit pas", parPensar: "Pour penser :", parTabla: "Le voir dans la table de vérité",
  parIntro: "Un paradoxe est un raisonnement qui part de quelque chose d’acceptable et, par des étapes qui semblent correctes, aboutit à une conclusion inacceptable ou contradictoire. Lis chacun et réfléchis à l’endroit où il échoue avant d’ouvrir les explications.",
  /* (09-10) guía larga y sencilla de cada pestaña, plegada bajo la introducción */
  guiaTit: "Guide : mode d’emploi et utilité",
  guiaTablas: "<h3>À quoi ça sert</h3><p>Quand nous raisonnons, nous relions des phrases avec des mots comme « non », « et », « ou » ou « si…, alors ». La table de vérité sert à voir, sans se tromper, quand une phrase composée est vraie et quand elle est fausse. Elle sert aussi à vérifier si un raisonnement est correct : si la conclusion <em>doit</em> être vraie chaque fois que les prémisses le sont.</p><h3>Avant de commencer : remplacer les phrases par des lettres</h3><p>Chaque phrase simple est remplacée par une lettre. Par exemple, « il pleut » = <em>p</em> et « le sol est mouillé » = <em>q</em>. Les mots qui relient les phrases s’appellent des connecteurs :</p><ul><li><strong>¬</strong> « non » : ¬p = « il ne pleut pas ».</li><li><strong>∧</strong> « et » : p ∧ q = « il pleut et le sol est mouillé ». Elle n’est vraie que si les deux parties le sont.</li><li><strong>∨</strong> « ou » : p ∨ q. Elle est vraie si l’une au moins des deux l’est.</li><li><strong>→</strong> « si…, alors » : p → q = « s’il pleut, le sol est mouillé ». Elle n’est fausse que dans un seul cas : quand il pleut et que le sol n’est pas mouillé.</li><li><strong>↔</strong> « si et seulement si » : elle est vraie quand les deux parties ont la même valeur (les deux V ou les deux F).</li></ul><h3>Pas à pas</h3><ol><li>Clique sur l’un des exemples ou écris ta formule dans la case « Formule ». Les symboles qui ne sont pas sur le clavier ont des boutons sous la case.</li><li>Utilise des parenthèses pour regrouper, comme en mathématiques : (p ∨ q) ∧ r n’est pas la même chose que p ∨ (q ∧ r).</li><li>La table se construit toute seule pendant que tu écris. Chaque ligne est une possibilité, une combinaison de V et de F pour les lettres : avec deux lettres, il y a 4 lignes ; avec trois, 8.</li><li>Regarde la dernière colonne et le message en dessous. La formule peut être une <strong>tautologie</strong> (toujours vraie), une <strong>contradiction</strong> (toujours fausse) ou une <strong>contingence</strong> (cela dépend de la façon dont est le monde).</li><li>Plus bas, dans « Cet argument est-il valide ? », écris les prémisses séparées par des points-virgules, puis la conclusion, et clique sur « Vérifier ». S’il existe une ligne où toutes les prémisses sont vraies et la conclusion fausse, elle apparaîtra en rouge. C’est un <strong>contre-exemple</strong> : l’argument n’est pas valide.</li></ol><h3>Un premier essai</h3><p>Dans les exemples d’arguments, clique sur « Affirmation du conséquent » : « s’il pleut, le sol est mouillé ; le sol est mouillé ; donc il pleut ». Cela paraît raisonnable, mais la table trouve le contre-exemple : le sol peut être mouillé parce que quelqu’un l’a arrosé. Compare avec « Modus ponens », qui, lui, est valide.</p><p class=\"lg-nota\">Attention : qu’un argument soit valide ne signifie pas que sa conclusion est vraie. Cela signifie que, <em>si</em> les prémisses sont vraies, la conclusion l’est aussi.</p>",
  guiaSilog: "<h3>À quoi ça sert</h3><p>Beaucoup de raisonnements de la vie quotidienne parlent de groupes de choses ou de personnes : « tous les… », « aucun… », « certains… ». Le syllogisme est la plus ancienne façon de les étudier : c’est Aristote qui l’a inventé il y a plus de 2 300 ans. Cet outil te dit si un raisonnement de ce type est correct et te le montre avec des dessins.</p><h3>Les éléments</h3><ul><li>Un syllogisme a <strong>deux prémisses</strong> et une <strong>conclusion</strong>.</li><li>Il y a trois termes, c’est-à-dire trois groupes. Dans « Tout humain est mortel ; tout Athénien est humain ; donc tout Athénien est mortel », <em>Athénien</em> est le sujet de la conclusion (S), <em>mortel</em> en est le prédicat (P) et <em>humain</em> est le moyen terme (M) : il fait le pont entre les deux autres et disparaît dans la conclusion.</li><li>Chaque phrase est de l’un de ces quatre types : <strong>A</strong> « tout S est P », <strong>E</strong> « aucun S n’est P », <strong>I</strong> « quelque S est P » et <strong>O</strong> « quelque S n’est pas P ». Une astuce pour s’en souvenir : A et I sont les voyelles de <em>affirmo</em> (« j’affirme », en latin), et E et O celles de <em>nego</em> (« je nie »).</li></ul><h3>Pas à pas</h3><ol><li>Écris les trois termes au singulier, ou garde ceux qui sont donnés en exemple.</li><li>Choisis dans les menus déroulants le type de chaque prémisse et de la conclusion.</li><li>Choisis la figure : elle indique à quelle place de chaque prémisse se trouve le moyen terme. Si ce n’est pas clair pour toi, clique sur l’un des exemples et observe comment cela change.</li><li>Lis le résultat : « Valide » ou « Non valide ». S’il n’est pas valide, on indique quelle règle il enfreint.</li><li>Regarde les diagrammes. Chaque cercle est un groupe. Dans celui de Venn, gris = zone vide (il n’y a rien là) et ✕ = il y en a au moins un là. Dans celui d’Euler, un cercle à l’intérieur d’un autre signifie « tous », des cercles séparés signifient « aucun » et des cercles qui se croisent, « quelques-uns ». Si, en ne dessinant que les prémisses, on voit déjà apparaître ce que dit la conclusion, le syllogisme est valide.</li></ol><h3>Un premier essai</h3><p>Écris tes propres termes : S = chat, M = mammifère, P = animal. Essaie d’abord AAA dans la figure 1 (le mode Barbara) : « tout mammifère est un animal ; tout chat est un mammifère ; donc tout chat est un animal ». Ensuite, change la prémisse mineure en « Quelque… » et regarde ce qui arrive à la conclusion. Et un défi : trouve un syllogisme aux prémisses vraies et à la conclusion vraie qui ne soit pourtant pas valide.</p>",
  guiaPuertas: "<h3>À quoi ça sert</h3><p>Les téléphones et les ordinateurs ne « pensent » pas : ils effectuent des millions d’opérations logiques très simples chaque seconde. Chacune de ces opérations est réalisée par une porte logique, un minuscule circuit. Cet onglet montre que la logique des tables de vérité est la même que celle qui fait fonctionner les ordinateurs : on remplace simplement V par 1 (le courant passe) et F par 0 (il ne passe pas).</p><h3>Pas à pas</h3><ol><li>Choisis une porte avec les boutons du haut (NOT, AND, OR…). En dessous apparaît ce qu’elle fait et à quel connecteur des tables de vérité elle correspond.</li><li>Clique sur les entrées pour les faire passer de 0 à 1, et regarde si la sortie s’allume. La table de la porte résume tous les cas possibles.</li><li>Dans « La formule comme circuit », écris une formule, comme dans les tables de vérité, et elle apparaîtra dessinée comme un circuit de portes. Clique sur les lettres pour changer leur valeur : les fils allumés portent un 1, et la lampe à la fin est le résultat.</li><li>Si tu viens de l’onglet « Tables de vérité », le bouton « Voir comme circuit » apporte ici la formule que tu utilisais.</li></ol><h3>Un premier essai</h3><p>Pense à la lumière d’un couloir avec un interrupteur à chaque bout : quel que soit celui sur lequel tu appuies, la lumière change. Quelle porte fait cela ? Essaie avec XOR. Et une autre : une alarme qui sonne si la porte de la maison est ouverte <em>et</em> que l’alarme est branchée. Quelle porte est-ce ?</p><p class=\"lg-nota\">Curiosité : avec un seul type de porte, NAND, répété de nombreuses fois, on peut construire n’importe quel circuit, y compris un ordinateur entier.</p>",
  guiaParad: "<h3>À quoi ça sert</h3><p>Un paradoxe n’est pas une devinette à piège ni une phrase bizarre : c’est un problème qui oblige à mieux penser. Il part de choses que presque tout le monde accepterait et, pas à pas, aboutit à quelque chose d’absurde. Certains paradoxes ont été résolus et nous ont appris quelque chose de nouveau ; par exemple, qu’une somme d’une infinité de nombres peut donner un résultat fini. D’autres sont encore discutés aujourd’hui.</p><h3>Comment utiliser les fiches</h3><ol><li>Utilise le menu déroulant « Afficher » pour voir un seul groupe, ou laisse « Toutes ».</li><li>Lis le titre, l’origine (qui l’a formulé et quand) et l’énoncé dans l’encadré.</li><li>Avant d’ouvrir quoi que ce soit, <strong>essaie de dire toi-même où est le problème</strong> : quelle étape te paraît douteuse ? Quelle prémisse nierais-tu ?</li><li>Ouvre « Où est le problème ? » et compare avec ce que tu avais pensé. Sur certaines fiches, un bouton permet de voir le paradoxe dans la table de vérité.</li><li>Ouvre « Issues proposées » : ce sont les réponses de différents philosophes. Tu n’as pas à te contenter de la première ; parfois elles se contredisent.</li><li>Termine avec « Pour penser », qui amène le paradoxe vers un cas proche.</li></ol><h3>Une façon de travailler en classe</h3><p>Par deux : une personne défend que le raisonnement est correct et l’autre cherche le faux pas. Ensuite, on échange les rôles. Pour commencer, « Le Menteur », « Achille et la tortue » ou « Le bateau de Thésée » conviennent bien.</p>",
  guiaEjerc: "<h3>À quoi ça sert</h3><p>Il n’y a pas ici de paradoxes : ce sont des phrases ordinaires, comme celles que nous lisons dans un texte ou disons dans une discussion. Les analyser sert à comprendre exactement ce qu’elles affirment, ce qu’elles tiennent pour acquis et, surtout, ce qu’elles ne disent <em>pas</em>, même si cela semble être le cas. C’est ce qu’il faut pour commenter un texte sans lui attribuer des choses qu’il ne dit pas.</p><h3>Pas à pas</h3><ol><li>Lis la phrase calmement. Repère les mots qui lui donnent sa forme : « tous », « certains », « aucun », « seulement », « si… », « et », « ou », « non ».</li><li>Donne des lettres aux phrases simples (par exemple, <em>p</em> = « il est heureux », <em>q</em> = « il obtient ce qu’il désire ») et note sur un papier comment tu crois qu’elles sont reliées.</li><li>Ouvre « Forme logique » et compare. S’il y a un diagramme d’Euler, chaque cercle est un groupe de personnes : ✕ = il y a sûrement quelqu’un là ; ? = la phrase ne dit pas s’il y a quelqu’un.</li><li>Clique sur « Le voir dans la table de vérité » : les lignes fausses sont les cas que la phrase interdit. S’il y a des lignes vraies et des lignes fausses, la phrase est <strong>contingente</strong> : elle dit quelque chose du monde, qui pourrait être autrement.</li><li>Ouvre « Ce qu’elle dit, ce qu’elle présuppose et ce qu’elle ne dit pas », et termine avec « Pour penser ».</li></ol><h3>Attention à deux pièges fréquents</h3><ul><li>« Si A, alors B » n’est pas la même chose que « si B, alors A ». « S’il pleut, je suis mouillé » ne dit pas que chaque fois que je suis mouillé, il pleut.</li><li>« Seuls ceux qui sont A sont B » ne dit pas que tous ceux qui sont A sont B. Cela pose une condition nécessaire (sans A, pas de B), pas une condition suffisante (A ne suffit pas).</li></ul>",
  guiaClasicos: "<h3>À quoi ça sert</h3><p>Les philosophes argumentent avec des phrases très soignées, et un mot comme « seulement » ou « si » change complètement ce qu’ils défendent. Ici, on analyse des phrases d’œuvres classiques avec les outils des autres onglets, pour lire le texte original avec plus de précision.</p><h3>Pas à pas</h3><ol><li>Lis d’abord l’introduction du groupe : elle te situe dans l’œuvre (qui parle, à quel moment et de quoi l’on discute).</li><li>Lis la phrase et demande-toi quelle condition elle pose. Est-elle <strong>nécessaire</strong> (sans elle, on n’obtient pas ce qu’on cherche) ou <strong>suffisante</strong> (avec elle, cela suffit) ? Ou les deux ?</li><li>Ouvre « Forme logique » et regarde le diagramme d’Euler et la table de vérité, comme dans « Exercices ».</li><li>Compare les fiches d’un même groupe : parfois ce sont des variantes de la même idée, et un petit changement dans la phrase change le diagramme.</li><li>Termine avec « Pour penser » et, si tu le peux, lis le passage complet dans « Lectures ».</li></ol><p class=\"lg-nota\">Pour l’instant, ce sont les phrases de saint Augustin dans <em>De la vie heureuse</em> : qui est heureux, celui qui a ce qu’il désire ou celui qui désire ce qu’il ne peut perdre ?</p>"
};
const logT = (k, v) => String(LOG_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const logEsc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const LOG = { parGrupo: "all", tab: "tablas", formula: "(p → q) ∧ p → q", prem: "p → q; p", concl: "q",
  sil: { S: "", P: "", M: "", may: "A", men: "A", con: "A", fig: 1 }, gate: "AND", gA: 1, gB: 0, circ: {} };
const logGuia = k => '<details class="lg-guia"><summary>' + logT("guiaTit") + "</summary>" + logT(k) + "</details>";
const logBox = () => document.getElementById("logicabox");

/* ---------- fórmulas: lectura, cálculo y escritura ---------- */
function logTokens(s){
  const out = [];
  for (let i = 0; i < s.length;){
    const c = s[i], two = s.slice(i, i + 2), three = s.slice(i, i + 3);
    if (/\s/.test(c)){ i++; continue; }
    if (/[p-t]/.test(c)){ out.push({ k: "var", n: c }); i++; continue; }
    if ("¬~!".includes(c)){ out.push({ k: "not" }); i++; continue; }
    if ("∧&·*".includes(c)){ out.push({ k: "and" }); i++; continue; }
    if ("∨|+".includes(c)){ out.push({ k: "or" }); i++; continue; }
    if (three === "<->" || three === "<=>"){ out.push({ k: "iff" }); i += 3; continue; }
    if (c === "↔"){ out.push({ k: "iff" }); i++; continue; }
    if (two === "->" || two === "=>"){ out.push({ k: "imp" }); i += 2; continue; }
    if (c === "→"){ out.push({ k: "imp" }); i++; continue; }
    if (c === "(" || c === ")"){ out.push({ k: c }); i++; continue; }
    throw new Error(logT("errCar", { c }));
  }
  return out;
}
function logParse(s){
  if (!String(s).trim()) throw new Error(logT("errVacia"));
  const tk = logTokens(s); let i = 0;
  const peek = () => tk[i] && tk[i].k;
  const iff = () => { let a = imp(); while (peek() === "iff"){ i++; a = { t: "iff", a, b: imp() }; } return a; };
  const imp = () => { const a = or(); if (peek() === "imp"){ i++; return { t: "imp", a, b: imp() }; } return a; };
  const or = () => { let a = and(); while (peek() === "or"){ i++; a = { t: "or", a, b: and() }; } return a; };
  const and = () => { let a = not(); while (peek() === "and"){ i++; a = { t: "and", a, b: not() }; } return a; };
  const not = () => { if (peek() === "not"){ i++; return { t: "not", a: not() }; } return atom(); };
  const atom = () => {
    const x = tk[i];
    if (!x) throw new Error(logT("errFalta"));
    if (x.k === "var"){ i++; return { t: "var", n: x.n }; }
    if (x.k === "("){ i++; const e = iff(); if (peek() !== ")") throw new Error(logT("errParen")); i++; return e; }
    throw new Error(logT("errFalta"));
  };
  const e = iff();
  if (i < tk.length) throw new Error(logT("errSobra", { c: logStr(e) }));
  return e;
}
const LOG_PREC = { iff: 1, imp: 2, or: 3, and: 4, not: 5, var: 6 };
const LOG_SYM = { iff: "↔", imp: "→", or: "∨", and: "∧" };
function logStr(n, pp){
  let s;
  if (n.t === "var") s = n.n;
  else if (n.t === "not") s = "¬" + logStr(n.a, LOG_PREC.not);
  else s = logStr(n.a, LOG_PREC[n.t] + (n.t === "imp" ? 0.5 : 0)) + " " + LOG_SYM[n.t] + " " + logStr(n.b, LOG_PREC[n.t] + (n.t === "imp" ? 0 : 0.5));
  return (pp != null && LOG_PREC[n.t] < pp) ? "(" + s + ")" : s;
}
function logEval(n, v){
  switch (n.t){
    case "var": return v[n.n];
    case "not": return !logEval(n.a, v);
    case "and": return logEval(n.a, v) && logEval(n.b, v);
    case "or": return logEval(n.a, v) || logEval(n.b, v);
    case "imp": return !logEval(n.a, v) || logEval(n.b, v);
    case "iff": return logEval(n.a, v) === logEval(n.b, v);
  }
}
function logVars(nodes){ const s = new Set(); const go = n => { if (n.t === "var") s.add(n.n); else { go(n.a); if (n.b) go(n.b); } }; nodes.forEach(go); return [...s].sort(); }
function logSubs(n, out, seen){ if (n.t === "var") return; logSubs(n.a, out, seen); if (n.b) logSubs(n.b, out, seen); const k = logStr(n); if (!seen.has(k)){ seen.add(k); out.push(n); } }
function logFilas(vars){
  const rows = [];
  for (let i = 0; i < (1 << vars.length); i++){ const v = {}; vars.forEach((x, j) => { v[x] = !((i >> (vars.length - 1 - j)) & 1); }); rows.push(v); }
  return rows;
}
const logVF = b => '<td class="lg-' + (b ? "v" : "f") + '">' + (b ? "V" : "F") + "</td>";

/* ---------- pestaña 1: tablas de verdad y validez ---------- */
function logTablaHtml(){
  let res;
  try {
    const e = logParse(LOG.formula), vars = logVars([e]);
    if (vars.length > 5) throw new Error(logT("errVars"));
    const subs = []; logSubs(e, subs, new Set());
    const filas = logFilas(vars), vals = filas.map(v => logEval(e, v));
    const veredicto = vals.every(Boolean) ? "tautologia" : (!vals.some(Boolean) ? "contradiccion" : "contingencia");
    res = '<div class="tablewrap"><table class="lg-tabla"><thead><tr>' + vars.map(x => "<th>" + x + "</th>").join("") +
      subs.map((s, k) => '<th class="' + (k === subs.length - 1 ? "lg-main" : "") + '">' + logEsc(logStr(s)) + "</th>").join("") + "</tr></thead><tbody>" +
      filas.map(v => "<tr>" + vars.map(x => logVF(v[x])).join("") + subs.map((s, k) => logVF(logEval(s, v)).replace("<td", k === subs.length - 1 ? '<td data-main="1"' : "<td")).join("") + "</tr>").join("") +
      '</tbody></table></div><p class="lg-veredicto lg-' + veredicto + '">' + logT(veredicto) + "</p>";
  } catch (err){ res = '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
  return res;
}
function logArgHtml(){
  try {
    const ps = LOG.prem.split(";").map(x => x.trim()).filter(Boolean).map(logParse), c = logParse(LOG.concl);
    const vars = logVars([...ps, c]);
    if (vars.length > 5) throw new Error(logT("errVars"));
    const filas = logFilas(vars); let valido = true;
    const cuerpo = filas.map(v => {
      const pv = ps.map(p => logEval(p, v)), cv = logEval(c, v), todas = pv.every(Boolean), malo = todas && !cv;
      if (malo) valido = false;
      return '<tr class="' + (malo ? "lg-contra" : (todas ? "lg-ok" : "")) + '">' + vars.map(x => logVF(v[x])).join("") + pv.map(logVF).join("") + logVF(cv) + "</tr>";
    }).join("");
    return '<div class="tablewrap"><table class="lg-tabla"><thead><tr>' + vars.map(x => "<th>" + x + "</th>").join("") +
      ps.map((p, k) => '<th title="' + logEsc(logT("premisa", { n: k + 1 })) + '">' + logEsc(logStr(p)) + "</th>").join("") + '<th class="lg-main">' + logEsc(logStr(c)) + "</th></tr></thead><tbody>" + cuerpo +
      '</tbody></table></div><p class="lg-nota">' + logT("filasPremisas") + '</p><p class="lg-veredicto ' + (valido ? "lg-tautologia" : "lg-contradiccion") + '">' + logT(valido ? "valido" : "noValido") + "</p>";
  } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
}
const LOG_EJ_F = [["(p → q) ∧ p → q", "mp"], ["¬(p ∧ q) ↔ ¬p ∨ ¬q", "demorgan"], ["p ∨ ¬p", "tercero"], ["p ∧ ¬p", "nocontra"]];
const LOG_EJ_A = [["p → q; p", "q", "mp"], ["p → q; ¬q", "¬p", "mt"], ["p → q; q", "p", "ac"], ["p ∨ q; ¬p", "q", "sd"], ["p → q; q → r", "p → r", "sh"]];
const LOG_TECLAS = ["p", "q", "r", "s", "¬", "∧", "∨", "→", "↔", "(", ")"];
function logTeclado(id){ return '<div class="lg-teclas" data-para="' + id + '">' + LOG_TECLAS.map(k => '<button type="button" class="chip" data-tecla="' + k + '">' + k + "</button>").join("") + "</div>"; }
function logRenderTablas(){
  return '<div class="lg-panel"><label class="lg-label" for="lg-f">' + logT("formula") + '</label><p class="lg-nota">' + logT("ayudaFormula") + '</p>' +
    '<div class="lg-fila"><input id="lg-f" class="lg-input" value="' + logEsc(LOG.formula) + '" autocomplete="off" spellcheck="false"><button type="button" class="btn ghost" data-lg="borrar">' + logT("borrar") + '</button></div>' +
    logTeclado("lg-f") + '<p class="lg-nota">' + logT("ejemplos") + " " + LOG_EJ_F.map(([f, n]) => '<button type="button" class="chip" data-ejf="' + logEsc(f) + '">' + logT(n) + "</button>").join(" ") + '</p>' +
    '<div id="lg-tabla">' + logTablaHtml() + '</div><p><button type="button" class="btn" data-lg="circuito">' + logT("verCircuito") + " →</button></p></div>" +
    '<div class="lg-panel"><h2>' + logT("argTitulo") + '</h2><label class="lg-label" for="lg-p">' + logT("premisas") + '</label><input id="lg-p" class="lg-input" value="' + logEsc(LOG.prem) + '" autocomplete="off" spellcheck="false">' +
    logTeclado("lg-p") + '<label class="lg-label" for="lg-c">' + logT("conclusion") + '</label><div class="lg-fila"><input id="lg-c" class="lg-input" value="' + logEsc(LOG.concl) + '" autocomplete="off" spellcheck="false"><button type="button" class="btn" data-lg="arg">' + logT("comprobar") + "</button></div>" +
    '<p class="lg-nota">' + logT("ejemplos") + " " + LOG_EJ_A.map(([p, c, n]) => '<button type="button" class="chip" data-eja="' + logEsc(p) + '" data-ejc="' + logEsc(c) + '">' + logT(n) + "</button>").join(" ") + '</p><div id="lg-arg">' + logArgHtml() + "</div></div>";
}

/* ---------- pestaña 2: silogismos ---------- */
const LOG_MODOS = { "AAA-1": "Barbara", "EAE-1": "Celarent", "AII-1": "Darii", "EIO-1": "Ferio", "AAI-1": "Barbari", "EAO-1": "Celaront",
  "EAE-2": "Cesare", "AEE-2": "Camestres", "EIO-2": "Festino", "AOO-2": "Baroco", "EAO-2": "Cesaro", "AEO-2": "Camestros",
  "IAI-3": "Disamis", "AII-3": "Datisi", "OAO-3": "Bocardo", "EIO-3": "Ferison", "AAI-3": "Darapti", "EAO-3": "Felapton",
  "AEE-4": "Calemes", "IAI-4": "Dimatis", "EIO-4": "Fresison", "AAI-4": "Bramantip", "EAO-4": "Fesapo", "AEO-4": "Calemos" };
/* términos de cada premisa según la figura: [sujeto, predicado] */
const LOG_FIG = { 1: [["M", "P"], ["S", "M"]], 2: [["P", "M"], ["S", "M"]], 3: [["M", "P"], ["M", "S"]], 4: [["P", "M"], ["M", "S"]] };
const LOG_BIT = { S: 0, P: 1, M: 2 };
const logEn = (r, x) => !!(r & (1 << LOG_BIT[x]));
/* regiones del diagrama 1..7 (bit 0 = S, 1 = P, 2 = M); el 0 (fuera de todo) no cuenta */
const LOG_REG = [1, 2, 3, 4, 5, 6, 7];
function logZona(tipo, x, y){   /* regiones que la proposición vacía (A, E) o en las que afirma que hay algo (I, O) */
  return LOG_REG.filter(r => logEn(r, x) && (tipo === "A" || tipo === "O" ? !logEn(r, y) : logEn(r, y)));
}
function logCumple(m, tipo, x, y){ const z = logZona(tipo, x, y); return tipo === "A" || tipo === "E" ? z.every(r => !m[r]) : z.some(r => m[r]); }
function logSilValido(s, existen){
  const [may, men] = LOG_FIG[s.fig];
  for (let k = 0; k < 128; k++){
    const m = {}; LOG_REG.forEach((r, j) => { m[r] = !!(k & (1 << j)); });
    if (existen && existen.some(x => !LOG_REG.some(r => logEn(r, x) && m[r]))) continue;
    if (logCumple(m, s.may, may[0], may[1]) && logCumple(m, s.men, men[0], men[1]) && !logCumple(m, s.con, "S", "P")) return false;
  }
  return true;
}
function logReglas(s){
  const [may, men] = LOG_FIG[s.fig], dist = (tipo, pos) => pos === 0 ? (tipo === "A" || tipo === "E") : (tipo === "E" || tipo === "O");
  const neg = t => t === "E" || t === "O", part = t => t === "I" || t === "O", rotas = [];
  if (!dist(s.may, may.indexOf("M")) && !dist(s.men, men.indexOf("M"))) rotas.push("r1");
  if (dist(s.con, 1) && !dist(s.may, may.indexOf("P"))) rotas.push("r2P");
  if (dist(s.con, 0) && !dist(s.men, men.indexOf("S"))) rotas.push("r2S");
  if (neg(s.may) && neg(s.men)) rotas.push("r3");
  else if ((neg(s.may) || neg(s.men)) && !neg(s.con)) rotas.push("r4a");
  if (neg(s.con) && !neg(s.may) && !neg(s.men)) rotas.push("r4b");
  if (part(s.may) && part(s.men)) rotas.push("r5");
  else if ((part(s.may) || part(s.men)) && !part(s.con)) rotas.push("r6");
  return rotas;
}
const LOG_CEN = { 1: [86, 92], 2: [234, 92], 3: [160, 78], 4: [160, 236], 5: [112, 166], 6: [208, 166], 7: [160, 136] };
function logVenn(s, nombres){
  const [may, men] = LOG_FIG[s.fig], vacias = new Set(), cruces = [];
  [[s.may, may], [s.men, men]].forEach(([t, xy]) => { if (t === "A" || t === "E") logZona(t, xy[0], xy[1]).forEach(r => vacias.add(r)); });
  [[s.may, may], [s.men, men]].forEach(([t, xy]) => {
    if (t !== "I" && t !== "O") return;
    const z = logZona(t, xy[0], xy[1]).filter(r => !vacias.has(r));
    if (z.length === 1) cruces.push(LOG_CEN[z[0]]);
    else if (z.length === 2) cruces.push([(LOG_CEN[z[0]][0] + LOG_CEN[z[1]][0]) / 2, (LOG_CEN[z[0]][1] + LOG_CEN[z[1]][1]) / 2]);
  });
  const C = { S: [120, 118], P: [200, 118], M: [160, 188] }, R = 74, ids = ["S", "P", "M"];
  let defs = "<defs>" + ids.map(x => '<clipPath id="lgc' + x + '"><circle cx="' + C[x][0] + '" cy="' + C[x][1] + '" r="' + R + '"/></clipPath>').join("");
  for (let o = 0; o < 8; o++) defs += '<mask id="lgm' + o + '"><rect width="320" height="300" fill="#fff"/>' + ids.filter((x, j) => o & (1 << j)).map(x => '<circle cx="' + C[x][0] + '" cy="' + C[x][1] + '" r="' + R + '" fill="#000"/>').join("") + "</mask>";
  defs += "</defs>";
  let zonas = "";
  vacias.forEach(r => {
    let g = '<rect width="320" height="300" class="lg-vacia" mask="url(#lgm' + (7 & ~r) + ')"/>';
    ids.forEach((x, j) => { if (r & (1 << j)) g = '<g clip-path="url(#lgc' + x + ')">' + g + "</g>"; });
    zonas += g;
  });
  const circ = ids.map(x => '<circle cx="' + C[x][0] + '" cy="' + C[x][1] + '" r="' + R + '" class="lg-circ"/>').join("");
  const etq = '<text x="40" y="40" class="lg-vt">S · ' + logEsc(nombres.S) + '</text><text x="280" y="40" text-anchor="end" class="lg-vt">P · ' + logEsc(nombres.P) + '</text><text x="160" y="288" text-anchor="middle" class="lg-vt">M · ' + logEsc(nombres.M) + "</text>";
  const xs = cruces.map(([x, y]) => '<text x="' + x + '" y="' + (y + 7) + '" text-anchor="middle" class="lg-x">✕</text>').join("");
  return '<svg viewBox="0 0 320 300" class="lg-venn" role="img" aria-label="' + logEsc(logT("venn")) + '">' + defs + zonas + circ + etq + xs + "</svg>";
}
/* Euler con los tres términos a la vez: se dibujan solo las zonas que las premisas dejan posibles.
   Las 64 disposiciones (premisa mayor × menor × figura) están precalculadas por tools/logica_euler.js, que busca
   para cada caso la colocación de los círculos que dibuja todas las zonas posibles y ninguna imposible.
   Para regenerarlas: node tools/logica_euler.js */
/* EULER:INICIO */
const LOG_EULER_PRE = {"AA-1":{"c":[[0,0,44],[10,0,82],[0,0,62]],"caja":[-80,-90,100,90],"etq":[[0,-2],[76,-10],[-52,-10]],"x":[]},"AA-2":{"c":[[0,0,44],[40,0,44],[20,0,82]],"caja":[-70,-90,110,90],"etq":[[18,-2],[62,-10],[18,-62]],"x":[]},"AA-3":{"c":[[0,0,82],[40,0,82],[20,0,44]],"caja":[-90,-90,130,90],"etq":[[-62,-2],[102,-2],[18,2]],"x":[]},"AA-4":{"c":[[0,0,82],[10,0,44],[10,0,62]],"caja":[-90,-90,90,90],"etq":[[-66,-10],[14,-2],[-42,-10]],"x":[]},"AE-1":{"c":[[0,0,62],[90,0,82],[120,0,44]],"caja":[-70,-90,180,90],"etq":[[-28.3,1.7],[71.7,-52.5],[121.7,5.8]],"x":[]},"AE-2":{"c":[[0,0,44],[120,0,44],[120,10,62]],"caja":[-52,-60,190,80],"etq":[[0.4,0.5],[121.4,0.5],[109.3,57]],"x":[]},"AE-3":{"c":[[0,0,62],[90,0,82],[120,0,44]],"caja":[-70,-90,180,90],"etq":[[-28.3,1.7],[71.7,-52.5],[121.7,5.8]],"x":[]},"AE-4":{"c":[[0,0,44],[120,0,44],[120,10,62]],"caja":[-52,-60,190,80],"etq":[[0.4,0.5],[121.4,0.5],[109.3,57]],"x":[]},"AI-1":{"c":[[0,0,82],[70,0,82],[80,0,62]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[5.8,-19.2],[110,14.2]],"x":[[51.1,0]]},"AI-2":{"c":[[0,0,82],[80,0,62],[70,0,82]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[110,14.2],[5.8,-19.2]],"x":[[30.8,-37.9]]},"AI-3":{"c":[[0,0,82],[70,0,82],[80,0,62]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[5.8,-19.2],[110,14.2]],"x":[[51.1,0]]},"AI-4":{"c":[[0,0,82],[80,0,62],[70,0,82]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[110,14.2],[5.8,-19.2]],"x":[[30.8,-37.9]]},"AO-1":{"c":[[0,0,82],[70,0,82],[80,0,62]],"caja":[-90,-90,160,90],"etq":[[-44.2,18.3],[10,30.8],[51.7,-10.8]],"x":[[-2.5,-37.9]]},"AO-2":{"c":[[0,0,82],[80,0,62],[70,0,82]],"caja":[-90,-90,160,90],"etq":[[51.7,1.7],[110,14.2],[5.8,-19.2]],"x":[[-31.4,0]]},"AO-3":{"c":[[0,0,82],[70,0,82],[80,0,62]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[5.8,-19.2],[51.7,18.3]],"x":[[102.6,0]]},"AO-4":{"c":[[0,0,82],[80,0,62],[70,0,82]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[51.7,1.7],[5.8,-19.2]],"x":[[132.9,-31.7]]},"EA-1":{"c":[[0,0,44],[120,0,44],[0,10,62]],"caja":[-70,-60,172,80],"etq":[[-1.4,0.5],[119.6,0.5],[10.7,57]],"x":[]},"EA-2":{"c":[[0,0,44],[120,0,44],[0,10,62]],"caja":[-70,-60,172,80],"etq":[[-1.4,0.5],[119.6,0.5],[10.7,57]],"x":[]},"EA-3":{"c":[[0,0,82],[90,0,62],[-30,0,44]],"caja":[-90,-90,160,90],"etq":[[18.3,-52.5],[118.3,1.7],[-35.8,1.7]],"x":[]},"EA-4":{"c":[[0,0,82],[90,0,62],[-30,0,44]],"caja":[-90,-90,160,90],"etq":[[18.3,-52.5],[118.3,1.7],[-35.8,1.7]],"x":[]},"EE-1":{"c":[[0,0,82],[60,0,82],[-20,150,62]],"caja":[-90,-90,150,220],"etq":[[30,-2],[110,-14],[-22,150]],"x":[]},"EE-2":{"c":[[0,0,82],[60,0,82],[-20,150,62]],"caja":[-90,-90,150,220],"etq":[[30,-2],[110,-14],[-22,150]],"x":[]},"EE-3":{"c":[[0,0,82],[60,0,82],[-20,150,62]],"caja":[-90,-90,150,220],"etq":[[30,-2],[110,-14],[-22,150]],"x":[]},"EE-4":{"c":[[0,0,82],[60,0,82],[-20,150,62]],"caja":[-90,-90,150,220],"etq":[[30,-2],[110,-14],[-22,150]],"x":[]},"EI-1":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-68,87.7]],"x":[[-32,38.6]]},"EI-2":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-68,87.7]],"x":[[-32,38.6]]},"EI-3":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-68,87.7]],"x":[[-32,38.6]]},"EI-4":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-68,87.7]],"x":[[-32,38.6]]},"EO-1":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-29,40],[49,22.7],[-68,87.7]],"x":[[7.8,-12]]},"EO-2":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-29,40],[49,22.7],[-68,87.7]],"x":[[7.8,-12]]},"EO-3":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-33.3,31.3]],"x":[[-65.5,77.6]]},"EO-4":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-33.3,31.3]],"x":[[-65.5,77.6]]},"IA-1":{"c":[[0,0,62],[80,0,82],[10,0,82]],"caja":[-80,-90,170,90],"etq":[[28.3,-2.5],[124.2,-19.2],[74.2,-19.2]],"x":[[24.2,57.9]]},"IA-2":{"c":[[0,0,62],[80,0,82],[10,0,82]],"caja":[-80,-90,170,90],"etq":[[28.3,-2.5],[124.2,-19.2],[74.2,-19.2]],"x":[[24.2,57.9]]},"IA-3":{"c":[[0,0,82],[70,0,82],[-10,0,62]],"caja":[-90,-90,160,90],"etq":[[64.2,-19.2],[114.2,22.5],[-40,14.2]],"x":[[18.9,0]]},"IA-4":{"c":[[0,0,82],[70,0,82],[-10,0,62]],"caja":[-90,-90,160,90],"etq":[[64.2,-19.2],[114.2,22.5],[-40,14.2]],"x":[[18.9,0]]},"IE-1":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[138,87.7]],"x":[[102,38.6]]},"IE-2":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[138,87.7]],"x":[[102,38.6]]},"IE-3":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[138,87.7]],"x":[[102,38.6]]},"IE-4":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[138,87.7]],"x":[[102,38.6]]},"II-1":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-10]]},"II-2":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-10]]},"II-3":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-10]]},"II-4":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-10]]},"IO-1":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-22]]},"IO-2":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-22]]},"IO-3":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[14,6],[106,-30],[58,-2]],"x":[[36,74],[36,78]]},"IO-4":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[14,6],[106,-30],[58,-2]],"x":[[36,74],[36,78]]},"OA-1":{"c":[[0,0,62],[80,0,82],[10,0,82]],"caja":[-80,-90,170,90],"etq":[[28.3,1.7],[124.2,-19.2],[74.2,-19.2]],"x":[[-61.2,-15]]},"OA-2":{"c":[[0,0,62],[80,0,82],[10,0,82]],"caja":[-80,-90,170,90],"etq":[[28.3,1.7],[103.3,51.7],[74.2,-19.2]],"x":[[111.4,0]]},"OA-3":{"c":[[0,0,82],[70,0,82],[-10,0,62]],"caja":[-90,-90,160,90],"etq":[[64.2,-19.2],[114.2,22.5],[18.3,18.3]],"x":[[-32.6,0]]},"OA-4":{"c":[[0,0,82],[70,0,82],[-10,0,62]],"caja":[-90,-90,160,90],"etq":[[64.2,-19.2],[114.2,22.5],[-40,14.2]],"x":[[37.1,-73.3]]},"OE-1":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[103.3,31.3]],"x":[[135.5,77.6]]},"OE-2":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[21,22.7],[99,40],[138,87.7]],"x":[[62.2,-12]]},"OE-3":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[103.3,31.3]],"x":[[135.5,77.6]]},"OE-4":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[21,22.7],[99,40],[138,87.7]],"x":[[62.2,-12]]},"OI-1":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[42,22],[106,-30],[30,106]],"x":[[-50,64],[-20,-10]]},"OI-2":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[42,22],[106,-30],[30,106]],"x":[[36,-74],[-20,-10]]},"OI-3":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[42,22],[106,-30],[30,106]],"x":[[-50,64],[-20,-10]]},"OI-4":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[42,22],[106,-30],[30,106]],"x":[[36,-74],[-20,-10]]},"OO-1":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[30,34],[106,-30],[30,106]],"x":[[-50,64],[-20,-22]]},"OO-2":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[30,34],[106,-30],[30,106]],"x":[[36,-74],[-20,-22]]},"OO-3":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[22,6],[106,-30],[90,50]],"x":[[-50,64],[36,78]]},"OO-4":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[22,6],[106,-30],[-30,50]],"x":[[36,-74],[36,78]]}};
/* EULER:FIN */
function logEulerJunto(s, nom){
  const cf = LOG_EULER_PRE[s.may + s.men + "-" + s.fig];
  if (!cf) return "";
  const ids = ["S", "P", "M"], cruces = cf.x;
  const [x0, y0, x1, y1] = cf.caja, W = x1 - x0, H = y1 - y0;
  const circ = ids.map((x, j) => '<circle cx="' + cf.c[j][0] + '" cy="' + cf.c[j][1] + '" r="' + cf.c[j][2] + '" class="lg-circ lg-e' + (j + 1) + '"/>').join("");
  const etq = ids.map((x, j) => { const p = cf.etq[j]; return '<text x="' + p[0] + '" y="' + (p[1] + 5) + '" text-anchor="middle" class="lg-vt">' + x + "</text>"; }).join("");
  const xs = cruces.map(([x, y]) => '<text x="' + x + '" y="' + (y + 7) + '" text-anchor="middle" class="lg-x">✕</text>').join("");
  return '<figure class="lg-euler lg-euler-junto"><svg viewBox="' + x0 + " " + y0 + " " + W + " " + H + '" role="img" aria-label="' + logEsc(logT("eulerJunto")) + '">' + circ + etq + xs + "</svg><figcaption>" + logEsc(logT("termLeyenda", { s: nom.S, p: nom.P, m: nom.M })) + "</figcaption></figure>";
}
/* Euler: una proposición = dos círculos en la posición que expresa (dentro, separados, cruzados) */
function logEuler(tipo, x, y, titulo){
  const c = (cx, cy, r, cls) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="lg-circ ' + cls + '"/>';
  const l = (tx, ty, t) => '<text x="' + tx + '" y="' + ty + '" text-anchor="middle" class="lg-vt">' + t + "</text>";
  const cruz = (cx, cy) => '<text x="' + cx + '" y="' + (cy + 7) + '" text-anchor="middle" class="lg-x">✕</text>';
  const d = {
    A: c(100, 74, 60, "lg-e2") + c(94, 84, 28, "lg-e1") + l(94, 89, x) + l(100, 32, y),
    E: c(56, 74, 40, "lg-e1") + c(144, 74, 40, "lg-e2") + l(56, 79, x) + l(144, 79, y),
    I: c(78, 74, 48, "lg-e1") + c(122, 74, 48, "lg-e2") + l(52, 79, x) + l(148, 79, y) + cruz(100, 74),
    O: c(78, 74, 48, "lg-e1") + c(122, 74, 48, "lg-e2") + l(56, 52, x) + l(148, 79, y) + cruz(52, 84)
  }[tipo];
  return '<figure class="lg-euler"><svg viewBox="0 0 200 148" role="img" aria-label="' + logEsc(titulo) + '">' + d + "</svg><figcaption>" + logEsc(titulo) + " · " + logEsc(logFrase(tipo, x, y)) + "</figcaption></figure>";
}
function logFrase(tipo, x, y){ return logT("f" + tipo, { x, y }); }
function logSilHtml(){
  const s = LOG.sil, nom = { S: s.S || logT("defS"), P: s.P || logT("defP"), M: s.M || logT("defM") }, [may, men] = LOG_FIG[s.fig];
  const clave = s.may + s.men + s.con + "-" + s.fig, nombre = LOG_MODOS[clave];
  let ver;
  if (logSilValido(s)) ver = '<p class="lg-veredicto lg-tautologia">' + (nombre ? logT("silValido", { nombre }) : logT("silValidoSin")) + "</p>";
  else if (logSilValido(s, ["S", "P", "M"])){
    const basta = ["S", "M", "P"].find(x => logSilValido(s, [x])) || "S";
    ver = '<p class="lg-veredicto lg-contingencia">' + logT("silTrad", { t: nom[basta] }) + (nombre ? " " + logT("silTradNombre", { nombre }) : "") + "</p>";
  } else {
    const rotas = logReglas(s);
    ver = '<p class="lg-veredicto lg-contradiccion">' + logT("silNoValido") + "</p>" + (rotas.length ? '<p class="lg-label">' + logT("reglasRotas") + "</p><ul>" + rotas.map(r => "<li>" + logT(r) + "</li>").join("") + "</ul>" : "");
  }
  return '<div class="lg-sil-cuerpo"><ol class="lg-silo"><li><span>' + logT("pMayor") + "</span> " + logEsc(logFrase(s.may, nom[may[0]], nom[may[1]])) + "</li><li><span>" + logT("pMenor") + "</span> " + logEsc(logFrase(s.men, nom[men[0]], nom[men[1]])) +
    '</li><li class="lg-ccl"><span>' + logT("concl") + "</span> " + logEsc(logFrase(s.con, nom.S, nom.P)) + '</li></ol><p class="lg-nota">' + logT("modo", { m: clave }) + (nombre ? " · " + nombre : " · " + logT("sinNombre")) + "</p>" + ver +
    '</div><div class="lg-venn-caja"><div class="fgroup lg-diag">' + [["venn", "Venn"], ["euler", "Euler"]].map(([k, l]) => '<button type="button" class="fbtn" data-diag="' + k + '" aria-pressed="' + ((s.diag || "venn") === k) + '">' + l + "</button>").join("") + "</div>" +
    (s.diag === "euler"
      ? '<p class="lg-label">' + logT("eulerJunto") + "</p>" + logEulerJunto(s, nom) + '<p class="lg-nota">' + logT("eulerJuntoAyuda") + "</p>" +
        '<p class="lg-label">' + logT("euler") + '</p><div class="lg-euler-fila">' +
        logEuler(s.may, may[0], may[1], logT("pMayor")) + logEuler(s.men, men[0], men[1], logT("pMenor")) + logEuler(s.con, "S", "P", logT("concl")) +
        '</div><p class="lg-nota">' + logT("termLeyenda", { s: nom.S, p: nom.P, m: nom.M }) + '</p><p class="lg-nota">' + logT("eulerAyuda") + '</p><p class="lg-nota">' + logT("eulerConcl") + "</p>"
      : '<p class="lg-label">' + logT("venn") + "</p>" + logVenn(s, nom) + '<p class="lg-nota">' + logT("vennAyuda") + '</p><p class="lg-nota">' + logT("vennConcl") + "</p>") + "</div>";
}
function logSelTipo(id, val){ return '<select id="' + id + '" class="lg-sel">' + ["A", "E", "I", "O"].map(t => '<option value="' + t + '"' + (t === val ? " selected" : "") + ">" + logT("tipo" + t) + "</option>").join("") + "</select>"; }
function logRenderSil(){
  const s = LOG.sil;
  return '<div class="lg-panel"><p class="lg-label">' + logT("terminos") + '</p><div class="lg-terminos">' +
    [["S", "tS", "defS"], ["P", "tP", "defP"], ["M", "tM", "defM"]].map(([k, l, d]) => '<label>' + logT(l) + '<input class="lg-input" data-term="' + k + '" value="' + logEsc(s[k]) + '" placeholder="' + logEsc(logT(d)) + '"></label>').join("") +
    '</div><div class="lg-terminos"><label>' + logT("pMayor") + logSelTipo("lg-may", s.may) + "</label><label>" + logT("pMenor") + logSelTipo("lg-men", s.men) + "</label><label>" + logT("concl") + logSelTipo("lg-con", s.con) +
    "</label><label>" + logT("figura") + '<select id="lg-fig" class="lg-sel">' + [1, 2, 3, 4].map(n => '<option value="' + n + '"' + (n === s.fig ? " selected" : "") + ">" + logT("figN", { n }) + "</option>").join("") + "</select></label></div>" +
    '<p class="lg-nota">' + logT("figAyuda") + '</p><p class="lg-nota">' + logT("ejemplos") + " " + ["AAA-1", "EAE-2", "AII-3", "AAI-3", "AEE-1", "IAI-1"].map(k => '<button type="button" class="chip" data-ejs="' + k + '">' + (LOG_MODOS[k] || k) + "</button>").join(" ") +
    '</p></div><div class="lg-panel lg-sil" id="lg-sil">' + logSilHtml() + "</div>";
}

/* ---------- pestaña 3: puertas lógicas ---------- */
const LOG_GATES = ["NOT", "AND", "OR", "NAND", "NOR", "XOR", "XNOR"];
const LOG_GF = { NOT: (a) => !a, AND: (a, b) => a && b, OR: (a, b) => a || b, NAND: (a, b) => !(a && b), NOR: (a, b) => !(a || b), XOR: (a, b) => a !== b, XNOR: (a, b) => a === b };
/* símbolo de cada puerta (52×40, entradas a la izquierda, salida a la derecha en y=20) */
function logGateShape(g, x, y, on){
  const t = "translate(" + x + "," + (y - 20) + ")", cls = 'class="lg-gate' + (on ? " on" : "") + '"';
  const and = '<path d="M0,0 H26 A20,20 0 0 1 26,40 H0 Z" ' + cls + "/>", or = '<path d="M0,0 Q16,20 0,40 Q34,40 50,20 Q34,0 0,0 Z" ' + cls + "/>";
  const burbuja = cx => '<circle cx="' + cx + '" cy="20" r="4" ' + cls + "/>", extra = '<path d="M-6,0 Q10,20 -6,40" class="lg-wire"/>';
  const d = { NOT: '<path d="M0,2 L40,20 L0,38 Z" ' + cls + "/>" + burbuja(44), AND: and, OR: or, NAND: and + burbuja(50), NOR: or + burbuja(54), XOR: extra + or, XNOR: extra + or + burbuja(54) }[g];
  return '<g transform="' + t + '">' + d + "</g>";
}
const logGateOut = g => (g === "NAND" ? 54 : g === "NOR" || g === "XNOR" ? 58 : g === "NOT" ? 48 : 50);
function logRenderPuertaSola(){
  const g = LOG.gate, una = g === "NOT", a = !!LOG.gA, b = !!LOG.gB, out = una ? LOG_GF[g](a) : LOG_GF[g](a, b);
  const pin = (lbl, val, y, key) => '<g class="lg-pin" data-pin="' + key + '" tabindex="0" role="button" aria-label="' + lbl + " = " + (val ? 1 : 0) + '"><rect x="6" y="' + (y - 14) + '" width="34" height="28" rx="6" class="lg-sw' + (val ? " on" : "") + '"/><text x="23" y="' + (y + 5) + '" text-anchor="middle" class="lg-swt">' + lbl + " " + (val ? 1 : 0) + "</text></g>" +
    '<line x1="40" y1="' + y + '" x2="110" y2="' + y + '" class="lg-wire' + (val ? " on" : "") + '"/>';
  let svg = '<svg viewBox="0 0 300 120" class="lg-circ1">' + (una ? pin("A", a, 60, "A") : pin("A", a, 50, "A") + pin("B", b, 70, "B")) + logGateShape(g, 110, 60, out) +
    '<line x1="' + (110 + logGateOut(g)) + '" y1="60" x2="230" y2="60" class="lg-wire' + (out ? " on" : "") + '"/><circle cx="246" cy="60" r="16" class="lg-lamp' + (out ? " on" : "") + '"/><text x="246" y="100" text-anchor="middle" class="lg-swt">' + logT("salida") + " " + (out ? 1 : 0) + "</text></svg>";
  const filas = una ? [[0], [1]] : [[0, 0], [0, 1], [1, 0], [1, 1]];
  const tabla = '<table class="lg-tabla lg-mini"><thead><tr><th>A</th>' + (una ? "" : "<th>B</th>") + "<th>" + logT("salida") + "</th></tr></thead><tbody>" +
    filas.map(f => { const o = una ? LOG_GF[g](!!f[0]) : LOG_GF[g](!!f[0], !!f[1]), act = una ? f[0] === +a : f[0] === +a && f[1] === +b; return '<tr class="' + (act ? "lg-ok" : "") + '">' + f.map(x => "<td>" + x + "</td>").join("") + "<td>" + (o ? 1 : 0) + "</td></tr>"; }).join("") + "</tbody></table>";
  return '<div class="lg-puerta">' + svg + '<div><p class="lg-label">' + logT("tablaPuerta") + "</p>" + tabla + "</div></div>";
}
/* la fórmula como circuito: → se convierte en ¬p ∨ q y ↔ en XNOR */
function logACircuito(n){
  if (n.t === "var") return n;
  if (n.t === "not") return { t: "NOT", a: logACircuito(n.a) };
  if (n.t === "imp") return { t: "OR", a: { t: "NOT", a: logACircuito(n.a) }, b: logACircuito(n.b) };
  return { t: { and: "AND", or: "OR", iff: "XNOR" }[n.t], a: logACircuito(n.a), b: logACircuito(n.b) };
}
function logCircuitoHtml(){
  let e;
  try { e = logACircuito(logParse(LOG.formula)); } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
  const vars = logVars([logParse(LOG.formula)]);
  vars.forEach(v => { if (LOG.circ[v] == null) LOG.circ[v] = true; });
  const val = n => n.t === "var" ? !!LOG.circ[n.n] : (n.t === "NOT" ? !val(n.a) : LOG_GF[n.t](val(n.a), val(n.b)));
  const prof = n => n.t === "var" ? 0 : 1 + Math.max(prof(n.a), n.b ? prof(n.b) : 0), D = prof(e);
  let hoja = 0; const DX = 96, Y0 = 70, DY = 52, X0 = 70;
  const sit = (n, d) => {   /* d = distancia a la salida */
    if (n.t === "var"){ n.y = Y0 + (hoja++) * DY; n.x = X0; return; }
    sit(n.a, d + 1); if (n.b) sit(n.b, d + 1);
    n.x = X0 + 40 + (D - d - 1) * DX; n.y = n.b ? (n.a.y + n.b.y) / 2 : n.a.y;
  };
  sit(e, 0);
  const W = X0 + 40 + D * DX + 90, H = Y0 + Math.max(1, hoja) * DY;
  let cables = "", puertas = "", pines = "";
  const salidaX = n => n.t === "var" ? n.x : n.x + logGateOut(n.t);
  const dib = n => {
    if (n.t === "var"){ pines += '<text x="' + (n.x - 8) + '" y="' + (n.y + 5) + '" text-anchor="end" class="lg-swt' + (val(n) ? " on" : "") + '">' + n.n + "</text>"; return; }
    const ins = n.b ? [n.y - 10, n.y + 10] : [n.y];
    [n.a, n.b].filter(Boolean).forEach((c, j) => { dib(c); const x1 = salidaX(c), xm = (x1 + n.x) / 2;
      cables += '<polyline points="' + x1 + "," + c.y + " " + xm + "," + c.y + " " + xm + "," + ins[j] + " " + n.x + "," + ins[j] + '" class="lg-wire' + (val(c) ? " on" : "") + '"/>'; });
    puertas += logGateShape(n.t, n.x, n.y, val(n));
  };
  dib(e);
  const sx = salidaX(e), out = val(e);
  const sw = vars.map((v, i) => '<g class="lg-pin" data-var="' + v + '" tabindex="0" role="button" aria-label="' + v + " = " + (LOG.circ[v] ? 1 : 0) + '"><rect x="' + (8 + i * 48) + '" y="8" width="40" height="28" rx="6" class="lg-sw' + (LOG.circ[v] ? " on" : "") + '"/><text x="' + (28 + i * 48) + '" y="27" text-anchor="middle" class="lg-swt">' + v + " " + (LOG.circ[v] ? 1 : 0) + "</text></g>").join("");
  return '<svg viewBox="0 0 ' + W + " " + H + '" class="lg-circ2" style="max-width:' + W + 'px">' + sw + cables + puertas + pines +
    '<line x1="' + sx + '" y1="' + e.y + '" x2="' + (W - 40) + '" y2="' + e.y + '" class="lg-wire' + (out ? " on" : "") + '"/><circle cx="' + (W - 24) + '" cy="' + e.y + '" r="16" class="lg-lamp' + (out ? " on" : "") + '"><title>' + logT("lampara") + "</title></circle></svg>" +
    '<p class="lg-nota">' + logEsc(logStr(logParse(LOG.formula))) + " = " + (out ? "1" : "0") + "</p>";
}
function logRenderPuertas(){
  return '<div class="lg-panel"><div class="fgroup">' + LOG_GATES.map(g => '<button type="button" class="fbtn" data-gate="' + g + '" aria-pressed="' + (g === LOG.gate) + '">' + g + "</button>").join("") +
    '</div><p class="lg-nota">' + logT("g" + LOG.gate) + '</p><p class="lg-nota">' + logT("entradas") + '</p><div id="lg-puerta">' + logRenderPuertaSola() + "</div></div>" +
    '<div class="lg-panel"><h2>' + logT("circuito") + '</h2><p class="lg-nota">' + logT("circAyuda") + '</p><div class="lg-fila"><input id="lg-f2" class="lg-input" value="' + logEsc(LOG.formula) + '" autocomplete="off" spellcheck="false"></div>' + logTeclado("lg-f2") +
    '<div id="lg-circ" class="lg-scroll">' + logCircuitoHtml() + "</div></div>";
}

/* ---------- pestaña 4: paradojas (07-10) ---------- */
/* fórmula que se abre en la pestaña de tablas: p = «la frase es verdadera», «el barbero se afeita», «es heterológica»… */
const LOG_PAR_F = { mentiroso: "p ↔ ¬p", barbero: "p ↔ ¬p", grelling: "p ↔ ¬p", epimenides: "p → ¬p", carroll: "(p ∧ (p → q)) → q", infelices: "(p ∧ q) → ¬r", tanto: "(q ∨ s) → p", monica: "((q ∧ r) → p) ∧ (¬q ∧ r → ¬p)", agustin: "p → q", agustin2: "p → q ∧ r", contrafactico: "q ∧ r → p" };
/* diagrama de Euler de una frase (campo euler de paradojas.js): mismas clases que los de la pestaña de silogismos */
function logParEuler(e){
  const c = e.circulos.filter(k => k.r).map(k => '<circle cx="' + k.cx + '" cy="' + k.cy + '" r="' + k.r + '" class="lg-circ ' + k.cls + '"/>').join("");
  const t = e.circulos.filter(k => k.etq).map(k => '<text x="' + k.ex + '" y="' + k.ey + '" text-anchor="middle" class="lg-vt">' + logEsc(k.etq) + "</text>").join("");
  const x = (e.cruces || []).map(([a, b]) => '<text x="' + a + '" y="' + (b + 7) + '" text-anchor="middle" class="lg-x">✕</text>').join("") +
    (e.dudas || []).map(([a, b]) => '<text x="' + a + '" y="' + (b + 7) + '" text-anchor="middle" class="lg-x lg-duda">?</text>').join("");
  return '<figure class="lg-euler lg-par-euler"><svg viewBox="' + e.vista + '" role="img" aria-label="' + logEsc(logT("parEuler")) + '">' + c + t + x + "</svg></figure>" + (e.lectura || "") +
    (e.contingencia ? '<p class="lg-label">' + (e.contTitulo || logT("parConting")) + "</p>" + e.contingencia : "");
}
/* frases de grados (campo escala de paradojas.js): eje, franja en que la frase es verdadera (borde izquierdo
   discontinuo: el límite vago) y punto de referencia; los textos llevan su posición */
function logParEscala(e){
  const [x1, x2, y] = e.eje, [b1, b2] = e.banda;
  const svg = '<rect x="' + b1 + '" y="' + (y - 14) + '" width="' + (b2 - b1) + '" height="28" class="lg-banda"/>' +
    '<line x1="' + x1 + '" y1="' + y + '" x2="' + x2 + '" y2="' + y + '" class="lg-eje"/>' +
    '<path d="M' + (x2 - 8) + "," + (y - 5) + " L" + x2 + "," + y + " L" + (x2 - 8) + "," + (y + 5) + '" class="lg-eje"/>' +
    '<path d="M' + (x1 + 8) + "," + (y - 5) + " L" + x1 + "," + y + " L" + (x1 + 8) + "," + (y + 5) + '" class="lg-eje"/>' +
    '<line x1="' + b1 + '" y1="' + (y - 30) + '" x2="' + b1 + '" y2="' + (y + 20) + '" class="lg-vago"/>' +
    '<line x1="' + e.marca + '" y1="' + 42 + '" x2="' + e.marca + '" y2="' + y + '" class="lg-eje"/><circle cx="' + e.marca + '" cy="' + y + '" r="6" class="lg-marca"/>' +
    e.textos.map(t => '<text x="' + t.x + '" y="' + t.y + '" text-anchor="' + t.align + '" class="lg-vt">' + logEsc(t.t) + "</text>").join("");
  return '<figure class="lg-euler lg-par-euler lg-par-escala"><svg viewBox="' + e.vista + '" role="img" aria-label="' + logEsc(logT("parEscala")) + '">' + svg + "</svg></figure>" + (e.lectura || "") +
    (e.contingencia ? '<p class="lg-label">' + (e.contTitulo || logT("parConting")) + "</p>" + e.contingencia : "");
}
const LOG_PAR_VISTAS = ["paradojas", "ejercicios", "clasicos"];
/* (07-10) pestañas «Paradojas», «Ejercicios» y «Argumentos clásicos»: los mismos datos, repartidos por el campo view de cada grupo.
   En las dos últimas, los plegables son «Forma lógica» y «Qué dice…»; el desplegable de grupos solo sale si hay más de uno. */
function logRenderParadojas(vista){
  vista = vista || "paradojas";
  const grupos = (typeof PARADOJAS_GRUPOS !== "undefined" ? PARADOJAS_GRUPOS : []).filter(g => (g.view || "paradojas") === vista), todas = typeof PARADOJAS !== "undefined" ? PARADOJAS : [];
  const analisis = vista !== "paradojas";
  /* un desplegable y no una fila de botones: seis grupos con títulos largos serían una nube de chips (regla de diseño) */
  const g0 = grupos.some(g => g.id === LOG.parGrupo) ? LOG.parGrupo : "all", filtro = grupos.length < 2 ? "" : '<label class="lg-label lg-pargrupos">' + logT("parGrupo") + '<select id="lg-pargrupo" class="lg-sel">' + [["all", logT("parTodas")], ...grupos.map(g => [g.id, g.titulo])].map(([k, l]) =>
    '<option value="' + k + '"' + (g0 === k ? " selected" : "") + ">" + l + "</option>").join("") + "</select></label>";
  const tarjeta = p => '<article class="lg-panel lg-par" id="par-' + p.id + '"><h3>' + p.titulo + '</h3><p class="lg-nota">' + p.origen + '</p><p class="lg-enun">' + p.enunciado + "</p>" +
    '<details><summary>' + logT(analisis ? "parForma" : "parProblema") + "</summary>" + (/^<ul>/.test(p.problema) ? p.problema : "<p>" + p.problema + "</p>") +
    (LOG_PAR_F[p.id] ? '<p><button type="button" class="btn ghost" data-parf="' + logEsc(LOG_PAR_F[p.id]) + '">' + logT("parTabla") + " · " + logEsc(LOG_PAR_F[p.id]) + " →</button></p>" : "") +
    (p.euler ? '<p class="lg-label">' + (p.euler.titulo || logT("parEuler")) + "</p>" + logParEuler(p.euler) : "") +
    (p.euler2 ? '<p class="lg-label">' + (p.euler2.titulo || logT("parEuler")) + "</p>" + logParEuler(p.euler2) : "") +
    (p.escala ? '<p class="lg-label">' + logT("parEscala") + "</p>" + logParEscala(p.escala) : "") + "</details>" +
    '<details><summary>' + logT(analisis ? "parDice" : "parSalidas") + "</summary>" + p.salidas + "</details>" +
    '<p class="lg-pensar"><strong>' + logT("parPensar") + "</strong> " + p.pensar + "</p></article>";
  return (vista === "paradojas" ? '<div class="lg-panel"><p class="lg-nota">' + logT("parIntro") + "</p>" + logGuia("guiaParad") + filtro + "</div>" : (filtro ? '<div class="lg-panel">' + filtro + "</div>" : "")) +
    grupos.filter(g => g0 === "all" || g.id === g0).map(g => '<section class="lg-pargrupo"><h2>' + g.titulo + '</h2><p class="lg-nota">' + g.intro + "</p>" +
      todas.filter(p => p.grupo === g.id).map(tarjeta).join("") + "</section>").join("");
}

/* ---------- montaje y eventos ---------- */
function logRender(){
  const box = logBox(); if (!box) return;
  const tabs = [["tablas", "tabTablas"], ["silogismos", "tabSilog"], ["puertas", "tabPuertas"], ["paradojas", "tabParad"], ["ejercicios", "tabEjerc"], ["clasicos", "tabClasicos"]];
  box.innerHTML = '<div class="fgroup lg-tabs" role="tablist">' + tabs.map(([k, l]) => '<button type="button" class="fbtn" data-lgtab="' + k + '" aria-pressed="' + (LOG.tab === k) + '">' + logT(l) + "</button>").join("") + "</div>" +
    /* (08-10) una introducción breve en cada pestaña, por si se llega a ella sin contexto (Paradojas ya tiene la suya) */
    ({ tablas: "introTablas", silogismos: "introSilog", puertas: "introPuertas", ejercicios: "introEjerc", clasicos: "introClasicos" }[LOG.tab] ? '<p class="lg-intro">' + logT({ tablas: "introTablas", silogismos: "introSilog", puertas: "introPuertas", ejercicios: "introEjerc", clasicos: "introClasicos" }[LOG.tab]) + "</p>" + logGuia({ tablas: "guiaTablas", silogismos: "guiaSilog", puertas: "guiaPuertas", ejercicios: "guiaEjerc", clasicos: "guiaClasicos" }[LOG.tab]) : "") +
    '<div class="lg-cuerpo">' + (LOG.tab === "silogismos" ? logRenderSil() : LOG.tab === "puertas" ? logRenderPuertas() : LOG_PAR_VISTAS.includes(LOG.tab) ? logRenderParadojas(LOG.tab) : logRenderTablas()) + "</div>";
}
function logInsertar(input, txt){
  const a = input.selectionStart != null ? input.selectionStart : input.value.length, b = input.selectionEnd != null ? input.selectionEnd : a;
  input.value = input.value.slice(0, a) + txt + input.value.slice(b); input.focus(); input.setSelectionRange(a + txt.length, a + txt.length);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}
function logRefrescar(id){
  const el = document.getElementById(id); if (!el) return;
  el.innerHTML = id === "lg-tabla" ? logTablaHtml() : id === "lg-arg" ? logArgHtml() : id === "lg-sil" ? logSilHtml() : id === "lg-circ" ? logCircuitoHtml() : logRenderPuertaSola();
}
function logWire(){
  const box = logBox(); if (!box || box.dataset.lgWired) return;
  box.dataset.lgWired = "1";
  box.addEventListener("click", ev => {
    const b = ev.target.closest("button, .lg-pin"); if (!b) return;
    if (b.dataset.lgtab){ LOG.tab = b.dataset.lgtab; LOG.parGrupo = "all"; logRender(); return; }
    if (b.dataset.tecla){ const inp = document.getElementById(b.parentElement.dataset.para); if (inp) logInsertar(inp, b.dataset.tecla); return; }
    if (b.dataset.ejf != null){ LOG.formula = b.dataset.ejf; logRender(); return; }
    if (b.dataset.eja != null){ LOG.prem = b.dataset.eja; LOG.concl = b.dataset.ejc; logRender(); return; }
    if (b.dataset.ejs){ const [m, f] = b.dataset.ejs.split("-"); Object.assign(LOG.sil, { may: m[0], men: m[1], con: m[2], fig: +f }); logRender(); return; }
    if (b.dataset.diag){ LOG.sil.diag = b.dataset.diag; logRefrescar("lg-sil"); return; }
    if (b.dataset.parf){ LOG.formula = b.dataset.parf; LOG.tab = "tablas"; logRender(); const t = document.getElementById("lg-tabla"); if (t) t.scrollIntoView({ block: "center" }); return; }
    if (b.dataset.gate){ LOG.gate = b.dataset.gate; logRender(); return; }
    if (b.dataset.pin){ LOG["g" + b.dataset.pin] = LOG["g" + b.dataset.pin] ? 0 : 1; logRefrescar("lg-puerta"); return; }
    if (b.dataset.var){ LOG.circ[b.dataset.var] = !LOG.circ[b.dataset.var]; logRefrescar("lg-circ"); return; }
    if (b.dataset.lg === "borrar"){ LOG.formula = ""; logRender(); const i = document.getElementById("lg-f"); if (i) i.focus(); return; }
    if (b.dataset.lg === "circuito"){ LOG.tab = "puertas"; logRender(); const c = document.getElementById("lg-circ"); if (c) c.scrollIntoView({ block: "center" }); return; }
    if (b.dataset.lg === "arg"){ logRefrescar("lg-arg"); }
  });
  box.addEventListener("keydown", ev => { const p = ev.target.closest(".lg-pin"); if (p && (ev.key === "Enter" || ev.key === " ")){ ev.preventDefault(); p.dispatchEvent(new MouseEvent("click", { bubbles: true })); } });
  box.addEventListener("input", ev => {
    const t = ev.target;
    if (t.id === "lg-f"){ LOG.formula = t.value; logRefrescar("lg-tabla"); }
    else if (t.id === "lg-f2"){ LOG.formula = t.value; logRefrescar("lg-circ"); }
    else if (t.id === "lg-p" || t.id === "lg-c"){ LOG[t.id === "lg-p" ? "prem" : "concl"] = t.value; logRefrescar("lg-arg"); }
    else if (t.dataset.term){ LOG.sil[t.dataset.term] = t.value; logRefrescar("lg-sil"); }
  });
  box.addEventListener("change", ev => {
    const t = ev.target, k = { "lg-may": "may", "lg-men": "men", "lg-con": "con", "lg-fig": "fig" }[t.id];
    if (k){ LOG.sil[k] = k === "fig" ? +t.value : t.value; logRefrescar("lg-sil"); }
    else if (t.id === "lg-pargrupo"){ LOG.parGrupo = t.value; logRender(); }
  });
}
function loadLogica(arg){
  /* (07-10) #logica/<paradojas|ejercicios|clasicos>/<id>: abre la pestaña de esa ficha, en su grupo, y la lleva a la vista */
  const m = /^(?:paradojas|ejercicios|clasicos)\/([\w-]+)$/.exec(arg || ""), ficha = m && typeof PARADOJAS !== "undefined" ? PARADOJAS.find(p => p.id === m[1]) : null;
  const grupo = ficha && typeof PARADOJAS_GRUPOS !== "undefined" ? PARADOJAS_GRUPOS.find(g => g.id === ficha.grupo) : null;
  if (ficha){ LOG.tab = (grupo && grupo.view) || "paradojas"; LOG.parGrupo = ficha.grupo; }
  else if (arg && ["tablas", "silogismos", "puertas", ...LOG_PAR_VISTAS].includes(arg)){ LOG.tab = arg; LOG.parGrupo = "all"; }
  logRender(); logWire();
  if (ficha){ const el = document.getElementById("par-" + ficha.id); if (el) el.scrollIntoView({ block: "start" }); }
}
if (logBox()){ logRender(); logWire(); }
