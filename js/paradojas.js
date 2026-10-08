// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/paradojas.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const PARADOJAS_GRUPOS = [
 {
  "id": "autorref",
  "view": "paradojas",
  "titulo": "Des phrases qui parlent d'elles-mêmes",
  "intro": "Paradoxes de l'autoréférence : une phrase, un ensemble ou une règle qui s'applique à elle-même et finit par dire à la fois une chose et son contraire."
 },
 {
  "id": "zenon",
  "view": "paradojas",
  "titulo": "Zénon : le mouvement et l'infini",
  "intro": "Zénon d'Élée, disciple de Parménide, a imaginé des arguments pour montrer que le mouvement, si on y réfléchit avec soin, semble impossible."
 },
 {
  "id": "vaguedad",
  "view": "paradojas",
  "titulo": "Vague et identité",
  "intro": "Des mots sans limite précise et des choses qui changent peu à peu : où est la frontière ? Quand une chose cesse-t-elle d'être ce qu'elle était ?"
 },
 {
  "id": "accion",
  "view": "paradojas",
  "titulo": "Paradoxes de l'action et de la politique",
  "intro": "Ce ne sont pas des contradictions logiques, mais des situations où le moyen semble aller contre la fin, ou où la raison ne suffit pas pour décider."
 },
 {
  "id": "razonar",
  "view": "paradojas",
  "titulo": "Pièges du raisonnement",
  "intro": "Des raisonnements qui semblent impeccables et mènent à une conclusion que nous ne pouvons pas accepter : il faut trouver le faux pas."
 },
 {
  "id": "ejercicios",
  "view": "ejercicios",
  "titulo": "Analyse de phrases (exercices de classe)",
  "intro": "Ce ne sont pas des paradoxes : ce sont des phrases que nous avons analysées en classe. On en dégage d'abord la forme logique ; ensuite on regarde ce qu'elles disent, ce qu'elles supposent et ce qu'elles ne disent pas bien qu'elles en aient l'air."
 },
 {
  "id": "agustin",
  "view": "clasicos",
  "titulo": "Saint Augustin : <em>La Vie heureuse</em>",
  "intro": "Phrases du dialogue <em>La Vie heureuse</em> (chap. 2), dans lequel Augustin, sa mère Monique et quelques jeunes gens discutent, pendant un banquet d'anniversaire, de qui est heureux. On les analyse avec les mêmes outils que les phrases de classe."
 }
];
const PARADOJAS = [
 {
  "id": "mentiroso",
  "grupo": "autorref",
  "titulo": "Le menteur",
  "origen": "Eubulide de Milet, IVe siècle av. J.-C.",
  "enunciado": "« Cette phrase est fausse. »",
  "problema": "Si la phrase est vraie, alors ce qu'elle dit est vrai : qu'elle est fausse. Si elle est fausse, alors ce qu'elle dit est faux, donc elle n'est pas fausse : elle est vraie. Chaque réponse nous mène à la contraire. Si nous appelons <em>p</em> « cette phrase est vraie », la phrase affirme <em>p ↔ ¬p</em>, qui est une contradiction : fausse quelle que soit la valeur de <em>p</em>.",
  "salidas": "<ul><li><strong>Tarski</strong> (1933) : un langage ne peut pas parler de la vérité de ses propres phrases. Il faut un métalangage, un langage « de niveau supérieur », pour dire « cette phrase est vraie » ou « elle est fausse ».</li><li><strong>Kripke</strong> (1975) : la phrase n'a pas de fondement, car pour savoir si elle est vraie, il faudrait le savoir d'avance. Elle n'est ni vraie ni fausse : elle reste sans valeur.</li><li><strong>Dialéthéisme</strong> (Graham Priest) : certaines phrases sont à la fois vraies et fausses, et il faut construire une logique qui l'admette sans que tout s'effondre.</li></ul>",
  "pensar": "Et la phrase « cette phrase est vraie » ? Elle ne mène pas à une contradiction, mais quelle valeur de vérité lui donnerais-tu, et pourquoi ?"
 },
 {
  "id": "epimenides",
  "grupo": "autorref",
  "titulo": "Épiménide : « Tous les Crétois mentent »",
  "origen": "Épiménide de Cnossos (Crète), VIe siècle av. J.-C. On la raconte parfois avec des Athéniens ou un autre peuple, mais la version ancienne est celle du Crétois.",
  "enunciado": "Épiménide, qui est crétois, dit : « Tous les Crétois mentent toujours ».",
  "problema": "Cela ressemble au menteur : si c'est vrai, Épiménide, qui est crétois, ment en le disant, donc c'est faux. Mais voici le piège : si c'est faux, il n'est pas nécessaire que ce soit vrai. Que ce soit faux signifie seulement qu'<strong>un</strong> Crétois au moins dit la vérité <strong>parfois</strong>. La seule chose qui s'ensuit est que la phrase est fausse et qu'Épiménide ment. Il n'y a pas de paradoxe, sauf si nous ajoutons qu'Épiménide est le seul Crétois ou que c'est la seule phrase qui ait été prononcée en Crète. En logique : si <em>p</em> implique <em>¬p</em>, ce qui s'ensuit est simplement <em>¬p</em>.",
  "salidas": "<ul><li>C'est un bon exemple du fait que la négation de « tous mentent » n'est pas « tous disent la vérité », mais « l'un d'eux au moins ne ment pas » (dans le carré logique, la contradictoire d'une A est une O).</li><li>La version d'Épiménide est citée dans la Bible (Épître à Tite 1, 12) sans aucun souci logique : elle y est employée comme une insulte contre les Crétois.</li></ul>",
  "pensar": "Que faudrait-il ajouter à l'histoire pour qu'elle soit un vrai paradoxe, comme celui du menteur ?"
 },
 {
  "id": "barbero",
  "grupo": "autorref",
  "titulo": "Le barbier de Russell",
  "origen": "Bertrand Russell l'a utilisé en 1918 pour expliquer simplement son paradoxe des ensembles (1901).",
  "enunciado": "Dans un village, il y a un barbier qui rase tous les hommes qui ne se rasent pas eux-mêmes, et eux seuls. Qui rase le barbier ?",
  "problema": "Si le barbier se rase lui-même, il fait partie de ceux qui se rasent eux-mêmes, et ceux-là, il ne les rase pas : il ne se rase pas. S'il ne se rase pas lui-même, il fait partie de ceux qui ne se rasent pas, et tous ceux-là, c'est lui qui les rase : il se rase. Si <em>p</em> est « le barbier se rase lui-même », la règle dit <em>p ↔ ¬p</em> : une autre contradiction.",
  "salidas": "<ul><li>La solution pour le barbier est simple : <strong>ce barbier ne peut pas exister</strong>. La description est contradictoire, comme un « cercle carré ».</li><li>Ce qui est grave, c'est la version originale : l'<strong>ensemble de tous les ensembles qui ne se contiennent pas eux-mêmes</strong>. Se contient-il lui-même ? Si oui, non ; si non, oui. Russell l'a écrit à Frege en 1902, alors qu'il était sur le point de publier sa tentative de fonder les mathématiques sur la logique, et Frege a reconnu que son système vacillait.</li><li>Les issues ont été la <strong>théorie des types</strong> de Russell (un ensemble ne peut pas être membre de lui-même) et les théories des ensembles dont les axiomes interdisent de former des ensembles avec n'importe quelle propriété.</li></ul>",
  "pensar": "Un catalogue de bibliothèque qui recense tous les catalogues qui ne se mentionnent pas eux-mêmes : doit-il se mentionner lui-même ?"
 },
 {
  "id": "grelling",
  "grupo": "autorref",
  "titulo": "Le paradoxe de « hétérologique »",
  "origen": "Kurt Grelling et Leonard Nelson, 1908.",
  "enunciado": "Certains mots disent quelque chose qu'ils vérifient eux-mêmes : « polysyllabe » est polysyllabe, « court » est court. Nous les appelons <em>autologiques</em>. Les autres, comme « monosyllabe » ou « longuissime », sont <em>hétérologiques</em>. Le mot « hétérologique » est-il hétérologique ?",
  "problema": "Si « hétérologique » est hétérologique, il vérifie ce qu'il dit, donc il est autologique. S'il est autologique, il vérifie ce qu'il dit, c'est-à-dire être hétérologique. C'est le barbier, mais avec des mots : une propriété qui s'applique à elle-même.",
  "salidas": "<ul><li>Comme pour le menteur, on propose de séparer les niveaux : on ne peut pas utiliser un mot pour parler des propriétés des mots de son propre niveau sans précautions.</li><li>Autre issue : « hétérologique » n'est pas bien défini pour lui-même, de même que la phrase du menteur n'a pas de valeur de vérité.</li></ul>",
  "pensar": "Le mot « autologique » est-il autologique ? Peut-on en décider ?"
 },
 {
  "id": "cocodrilo",
  "grupo": "autorref",
  "titulo": "Le crocodile",
  "origen": "Problème classique de la logique grecque, repris par les stoïciens et par Lucien.",
  "enunciado": "Un crocodile enlève un enfant et dit à la mère : « Je te le rendrai si tu devines ce que je vais faire ». La mère répond : « Tu ne vas pas me le rendre ».",
  "problema": "Si le crocodile le garde, la mère a deviné juste, et alors il doit le lui rendre. S'il le lui rend, la mère s'est trompée, et alors il ne devrait pas le lui rendre. Quoi qu'il fasse, il rompt sa promesse.",
  "salidas": "<ul><li>La promesse du crocodile dépend de ce qu'il va faire lui-même : c'est une autre forme d'autoréférence, et elle ne peut pas être tenue dans tous les cas.</li><li>Si la mère avait dit « tu vas me le rendre », le crocodile pourrait choisir sans contradiction : le rendre (elle a raison) ou le garder (elle a tort).</li></ul>",
  "pensar": "Quelle réponse convient à la mère, et pourquoi celle qu'elle a donnée est-elle la plus astucieuse ?"
 },
 {
  "id": "aquiles",
  "grupo": "zenon",
  "titulo": "Achille et la tortue",
  "origen": "Zénon d'Élée, Ve siècle av. J.-C. ; c'est Aristote qui nous le rapporte dans la <em>Physique</em> (livre VI).",
  "enunciado": "Achille, le plus rapide des Grecs, fait la course avec une tortue et lui laisse de l'avance. Quand il arrive là où se trouvait la tortue, elle a déjà avancé un peu. Quand il arrive à ce nouveau point, elle a avancé encore un peu. Et ainsi de suite : Achille ne la rattrape jamais.",
  "problema": "Chaque tronçon est réel et il y a une infinité de tronçons. Il semble que parcourir une infinité de tronçons exige un temps infini, de sorte qu'Achille ne rattraperait jamais la tortue, ce qui contredit ce que nous voyons.",
  "salidas": "<ul><li><strong>Mathématiques</strong> : une somme d'une infinité de termes peut donner un résultat fini. 1 + ½ + ¼ + ⅛ + … = 2. Les tronçons infinis se parcourent en un temps fini, et l'on peut calculer où il la rattrape.</li><li><strong>Aristote</strong> : l'espace et le temps ne sont divisibles à l'infini qu'<em>en puissance</em> ; Achille ne parcourt pas une infinité de tronçons <em>en acte</em>.</li><li>Certains philosophes pensent que la somme ne résout pas tout : reste la question de savoir comment on peut <em>achever</em> une série d'étapes qui n'a pas de dernière étape.</li></ul>",
  "pensar": "Zénon défendait Parménide : le mouvement est une apparence. Pourquoi un argument contre le mouvement servirait-il à défendre que l'être est un et immobile ?"
 },
 {
  "id": "dicotomia",
  "grupo": "zenon",
  "titulo": "La dichotomie",
  "origen": "Zénon d'Élée, Ve siècle av. J.-C.",
  "enunciado": "Pour traverser la salle de classe, tu dois d'abord arriver à la moitié. Mais avant, à la moitié de la moitié. Et avant, à la moitié de cette moitié… Il n'y a pas de premier pas, donc tu ne peux même pas commencer à bouger.",
  "problema": "C'est Achille à l'envers : au lieu de ne jamais arriver au bout, on ne peut jamais sortir du début, parce qu'avant tout point il y en a un autre où il faut arriver d'abord.",
  "salidas": "<ul><li>La même réponse mathématique : ½ + ¼ + ⅛ + … = 1. Une infinité de tronçons, une distance finie, un temps fini.</li><li>La question philosophique : l'espace est-il réellement divisible à l'infini, ou y a-t-il une distance minimale ? La physique actuelle discute encore pour savoir si l'espace et le temps sont continus.</li></ul>",
  "pensar": "Y a-t-il une différence entre « on peut le diviser une infinité de fois » et « il est fait d'une infinité de parties » ?"
 },
 {
  "id": "flecha",
  "grupo": "zenon",
  "titulo": "La flèche",
  "origen": "Zénon d'Élée, Ve siècle av. J.-C. ; aussi dans la <em>Physique</em> d'Aristote.",
  "enunciado": "À chaque instant, une flèche en vol occupe un espace exactement égal à elle-même : à cet instant, elle est immobile. Le temps est fait d'instants. Donc la flèche est toujours immobile.",
  "problema": "Si elle ne se meut à aucun instant, et que le temps n'est qu'une somme d'instants, quand se meut-elle ? Pourtant, nous voyons qu'elle atteint la cible.",
  "salidas": "<ul><li><strong>Aristote</strong> : le temps n'est pas composé d'instants indivisibles, de même qu'une ligne n'est pas faite de points. Le mouvement se produit dans des intervalles, non dans des instants.</li><li><strong>Calcul moderne</strong> : la vitesse à un instant se définit comme une limite. Que la flèche occupe un lieu à chaque instant n'empêche pas qu'elle ait une vitesse à cet instant.</li></ul>",
  "pensar": "Un film, ce sont des photos fixes les unes après les autres. Quelque chose bouge-t-il dans un film ?"
 },
 {
  "id": "sorites",
  "grupo": "vaguedad",
  "titulo": "Le tas (sorite)",
  "origen": "Eubulide de Milet, IVe siècle av. J.-C. « Sorite » vient du grec <em>sōrós</em>, « tas ».",
  "enunciado": "Un grain de sable n'est pas un tas. Si quelque chose n'est pas un tas, y ajouter un seul grain n'en fait pas un tas. Donc deux grains ne font pas un tas, ni trois… ni un million.",
  "problema": "Les deux prémisses semblent vraies et le raisonnement est valide (c'est un modus ponens répété). Mais la conclusion est fausse : un million de grains, c'est bien un tas. Il en va de même pour « chauve », « grand », « riche » ou « adulte ».",
  "salidas": "<ul><li><strong>Il y a une limite exacte, mais nous ne la connaissons pas</strong> (épistémicisme, Timothy Williamson) : un certain grain fait le tas, même si personne ne sait lequel.</li><li><strong>Degrés de vérité</strong> (logique floue) : « ceci est un tas » peut être vrai à 0,4 ou à 0,9. Chaque grain ajoute un peu de vérité.</li><li><strong>Cas limites</strong> (supervaluationnisme) : dans la zone douteuse, la phrase n'est ni vraie ni fausse, bien qu'il reste vrai qu'à un certain point on passe au tas.</li></ul>",
  "pensar": "La loi fixe la majorité à 18 ans. Te semble-t-elle une solution au sorite ou une façon de l'esquiver ? Pourquoi en a-t-on besoin ?"
 },
 {
  "id": "teseo",
  "grupo": "vaguedad",
  "titulo": "Le bateau de Thésée",
  "origen": "Plutarque, <em>Vie de Thésée</em> (Ier-IIe siècle) ; Thomas Hobbes a ajouté la seconde partie au XVIIe siècle.",
  "enunciado": "Les Athéniens conservaient le navire de Thésée et remplaçaient les planches pourries par des neuves, jusqu'à ce qu'il n'en reste plus une seule d'origine. Est-ce toujours le navire de Thésée ? Et si quelqu'un avait gardé les vieilles planches et les assemblait de nouveau, lequel des deux serait le navire de Thésée ?",
  "problema": "Si l'identité dépend de la matière, le navire reconstruit avec les vieilles planches est celui de Thésée. Si elle dépend de la continuité (il n'a jamais cessé de naviguer ni d'être entretenu), c'est le navire réparé. Ils ne peuvent pas l'être tous les deux, car ce sont deux navires.",
  "salidas": "<ul><li>L'identité dépend de la <strong>forme et de la fonction</strong>, non de la matière (une idée proche d'Aristote).</li><li>L'identité dépend de la <strong>continuité</strong> dans le temps.</li><li>« Être le même » est en partie une <strong>convention</strong> : cela dépend de la raison pour laquelle nous posons la question (un musée, un registre de navires, un procès).</li></ul>",
  "pensar": "Les cellules de ton corps se renouvellent presque toutes en quelques années. Qu'est-ce qui fait que tu restes toi ?"
 },
 {
  "id": "sivispacem",
  "grupo": "accion",
  "titulo": "« Si vis pacem, para bellum »",
  "origen": "« Si tu veux la paix, prépare la guerre. » L'idée vient de Végèce, écrivain militaire romain (IVe-Ve siècles) : <em>qui desiderat pacem, praeparet bellum</em>. La formule brève est postérieure.",
  "enunciado": "Pour obtenir la paix, il faut se préparer à la guerre : celui qui est bien armé ne sera pas attaqué.",
  "problema": "Il semble que le moyen contredise la fin : s'armer pour ne pas se battre. Ce n'est pas une contradiction logique (un moyen peut peu ressembler à sa fin), mais un paradoxe pratique. Le problème est de savoir ce qui se passe si <strong>tous</strong> suivent la maxime : si un pays s'arme pour se défendre, son voisin y voit une menace et s'arme aussi. C'est le <strong>dilemme de sécurité</strong>, qui mène à la course aux armements.",
  "salidas": "<ul><li><strong>La dissuasion</strong> fonctionne : pendant la guerre froide, les deux puissances possédaient des armes nucléaires et ne se sont pas attaquées directement (la « destruction mutuelle assurée »). Mais la paix reposait sur un équilibre de la peur, et il y a eu des moments très proches de la guerre, comme la crise des missiles de Cuba (1962).</li><li><strong>Kant</strong>, dans <em>Vers la paix perpétuelle</em> (1795), demande que les armées permanentes disparaissent avec le temps, parce qu'elles menacent toujours les autres de guerre et les poussent à se surpasser en armement. Pour lui, la paix se construit avec le droit et des républiques, non avec la peur.</li><li>Certains proposent de renverser la formule : <em>si vis pacem, para pacem</em> : si tu veux la paix, prépare la paix.</li></ul>",
  "pensar": "Applique l'épreuve de Kant : que se passerait-il si tous les pays agissaient selon cette maxime ? Y aurait-il plus de paix ou plus de guerres ?"
 },
 {
  "id": "tolerancia",
  "grupo": "accion",
  "titulo": "Le paradoxe de la tolérance",
  "origen": "Karl Popper, <em>La Société ouverte et ses ennemis</em> (1945), dans une note du chapitre 7.",
  "enunciado": "Si une société est tolérante sans limites, y compris envers ceux qui veulent en finir avec la tolérance, ceux-ci peuvent en venir à bout. La tolérance illimitée mène à la disparition de la tolérance.",
  "problema": "Pour protéger la tolérance, il semble qu'il faille être intolérant envers certains. Mais alors, qui décide envers qui, et n'est-ce pas ce que font les intolérants ?",
  "salidas": "<ul><li>Popper ne dit pas qu'il faille interdire toute opinion intolérante. Tant qu'on peut y répondre par des arguments et la freiner par l'opinion publique, le plus sensé est de ne pas l'interdire. Ce n'est que lorsque les intolérants refusent de discuter et répondent par la force que la société a le droit de se défendre.</li><li>Une autre façon de voir (John Rawls) : la tolérance est comme un pacte. Celui qui le rompt ne peut pas exiger que les autres le respectent à son égard, bien que, tant qu'il ne met pas les institutions en danger, il faille le tolérer.</li></ul>",
  "pensar": "Où placerais-tu la limite : dans les idées, dans les paroles ou dans les actes ?"
 },
 {
  "id": "buridan",
  "grupo": "accion",
  "titulo": "L'âne de Buridan",
  "origen": "On l'attribue à Jean Buridan (XIVe siècle), bien qu'elle n'apparaisse pas dans ses œuvres. L'idée figure déjà chez Aristote, <em>Du ciel</em> (livre II).",
  "enunciado": "Un âne, tout aussi affamé des deux côtés, se trouve exactement entre deux tas de foin identiques. Il n'a aucune raison d'aller vers l'un plutôt que vers l'autre, alors il ne bouge pas et meurt de faim.",
  "problema": "Si nous n'agissons que lorsque nous avons une raison de préférer quelque chose, face à deux options identiques nous ne pourrions pas choisir. Mais mourir de faim est pire que n'importe laquelle des deux options.",
  "salidas": "<ul><li>Il faut avoir la <strong>liberté de choisir sans raison</strong>, au hasard : c'est précisément ce qu'on utilisait au Moyen Âge pour discuter du libre arbitre.</li><li><strong>Spinoza</strong> (<em>Éthique</em>, partie II) accepte la conclusion : une personne placée dans cet équilibre parfait mourrait de faim. Et si on lui demande si elle ne serait pas alors plus un âne qu'une personne, il répond qu'il ne le sait pas.</li><li>Dans la vie réelle, il n'y a jamais deux options exactement égales. Et s'il y en a, tirer à pile ou face est une décision rationnelle.</li></ul>",
  "pensar": "T'es-tu déjà retrouvé bloqué face à deux options presque égales ? Comment as-tu résolu cela ?"
 },
 {
  "id": "hedonismo",
  "grupo": "accion",
  "titulo": "Le paradoxe de l'hédonisme",
  "origen": "Henry Sidgwick, <em>Les Méthodes de l'éthique</em> (1874) ; John Stuart Mill le raconte dans son <em>Autobiographie</em> (1873).",
  "enunciado": "Celui qui cherche directement le plaisir ou le bonheur ne le trouve pas. Il le trouve, celui qui se consacre à autre chose.",
  "problema": "Si le bonheur est la fin de tout ce que nous faisons (comme le pensent les hédonistes et les utilitaristes), le plus logique serait de le chercher directement. Mais le faire semble la meilleure manière de le perdre.",
  "salidas": "<ul><li>Mill, après une dépression de jeunesse, a conclu que ne sont heureux que ceux qui ont l'esprit tourné vers autre chose que leur propre bonheur : celui des autres, l'amélioration de l'humanité, un art ou une occupation.</li><li>Aristote dirait que le bonheur n'est pas un état que l'on poursuit, mais le résultat d'une vie où l'on agit bien : il apparaît quand on fait bien ce que l'on fait.</li></ul>",
  "pensar": "T'est-il arrivé qu'une chose cesse de t'amuser juste au moment où tu as commencé à t'efforcer de bien t'amuser ?"
 },
 {
  "id": "examen",
  "grupo": "razonar",
  "titulo": "L'examen surprise",
  "origen": "Il a circulé dans les années 1940 ; D. J. O'Connor l'a publié en 1948.",
  "enunciado": "Le professeur annonce : « La semaine prochaine, il y aura un examen surprise : vous ne saurez quel jour c'est que le matin même ». Un élève raisonne : « Ce ne peut pas être le vendredi, parce que le jeudi après-midi nous saurions que c'est pour le vendredi. Le vendredi écarté, ce ne peut pas être non plus le jeudi, pour la même raison… Donc il ne peut pas y avoir d'examen surprise ». Le mercredi, il y a examen, et personne ne s'y attendait.",
  "problema": "Chaque étape de l'élève semble correcte, mais la conclusion est fausse : l'examen a bien été une surprise. Où cela cloche-t-il ?",
  "salidas": "<ul><li>L'élève tient pour acquis que l'annonce du professeur est vraie (il y aura un examen) et conclut en même temps qu'il n'y en aura pas. S'il cesse de croire à l'annonce, il ne peut plus s'en servir pour écarter des jours, et n'importe quel jour redevient une surprise.</li><li>L'annonce parle de ce que sauront les élèves, et ce qu'ils savent change quand ils raisonnent là-dessus : c'est une forme d'autoréférence, comme le menteur.</li><li>Avec un seul jour possible (« demain il y aura un examen surprise »), l'annonce est bien contradictoire. Avec plusieurs jours, ce n'est plus clair.</li></ul>",
  "pensar": "Si l'élève était arrivé à la conclusion « l'examen doit avoir lieu le lundi », cela aurait-il été une surprise ?"
 },
 {
  "id": "protagoras",
  "grupo": "razonar",
  "titulo": "Protagoras et Évathle",
  "origen": "Aulu-Gelle, <em>Les Nuits attiques</em> (IIe siècle), le raconte à propos du sophiste Protagoras.",
  "enunciado": "Protagoras enseigne le droit à Évathle, qui le paiera quand il gagnera son premier procès. Évathle termine sa formation et ne défend personne. Protagoras l'assigne en justice. Protagoras : « Si je gagne, tu me paies parce que le juge l'ordonne ; si je perds, tu me paies parce que tu auras gagné ton premier procès ». Évathle : « Si je gagne, je ne paie pas parce que le juge l'ordonne ; si je perds, je ne paie pas parce que je n'aurai encore gagné aucun procès ».",
  "problema": "Les deux raisonnements ont la même forme et mènent à des conclusions opposées. Chacun choisit, selon son intérêt, si c'est le jugement ou le contrat qui compte.",
  "salidas": "<ul><li>L'astuce consiste à changer de critère au milieu de l'argument. Si l'on en fixe un seul (le jugement ou le contrat), le dilemme disparaît.</li><li>Une issue de juriste : le juge donne raison à Évathle, parce qu'il n'a encore gagné aucun procès. Mais alors Évathle vient d'en gagner un, et Protagoras peut l'assigner de nouveau… et gagner.</li></ul>",
  "pensar": "Les sophistes enseignaient à défendre n'importe quelle position. Quel rapport ce cas a-t-il avec cela ?"
 },
 {
  "id": "omnipotencia",
  "grupo": "razonar",
  "titulo": "La pierre qu'on ne peut pas soulever",
  "origen": "Paradoxe de l'omnipotence, discuté dans la philosophie médiévale.",
  "enunciado": "Un être tout-puissant peut-il créer une pierre si lourde que lui-même ne puisse pas la soulever ?",
  "problema": "S'il peut la créer, il y a quelque chose qu'il ne peut pas faire : la soulever. S'il ne peut pas la créer, il y a quelque chose qu'il ne peut pas faire : la créer. Dans les deux cas, il n'est pas tout-puissant.",
  "salidas": "<ul><li><strong>Thomas d'Aquin</strong> : être omnipotent, c'est pouvoir faire tout ce qui est <em>possible</em>. Ce qui renferme une contradiction (« une pierre que ne peut pas soulever celui qui peut tout ») n'est pas une chose qu'on ne puisse pas faire, mais une phrase dépourvue de sens, comme « un cercle carré ».</li><li>D'autres pensent que le paradoxe montre que l'idée d'un pouvoir sans aucune limite est incohérente.</li></ul>",
  "pensar": "Est-ce une limitation de ne pas pouvoir faire le contradictoire ?"
 },
 {
  "id": "infelices",
  "grupo": "ejercicios",
  "titulo": "« De tous les malheureux… »",
  "origen": "Phrase proposée comme exercice en classe.",
  "enunciado": "« De tous les malheureux, ceux qui obtiennent tout ce qu'ils désirent ne sont pas ceux qui s'en tirent le plus mal. »",
  "problema": "Nous parlons de personnes, donc nous prenons trois propriétés : <em>p</em> = « est malheureux », <em>q</em> = « obtient tout ce qu'il désire », <em>r</em> = « s'en tire le plus mal ». La phrase dit : <strong>si quelqu'un est malheureux et obtient tout ce qu'il désire, alors il ne s'en tire pas le plus mal</strong> : <em>(p ∧ q) → ¬r</em>. C'est une universelle négative (type E) : « Aucun malheureux qui obtient tout n'est de ceux qui s'en tirent le plus mal ». Sa contraposée dit la même chose de l'autre côté : si un malheureux s'en tire le plus mal, alors il n'a pas obtenu tout ce qu'il désire : <em>(p ∧ r) → ¬q</em>.",
  "salidas": "<ul><li><strong>Ce qu'elle suppose</strong> : qu'il y a des malheureux qui obtiennent tout ce qu'ils désirent. S'il n'y en avait pas, cela n'aurait pas de sens de les signaler « de tous les malheureux ». Obtenir tout ce que l'on désire ne suffit pas pour être heureux.</li><li><strong>Ce qu'elle suggère, sans le dire</strong> : que ceux qui s'en tirent le plus mal sont ceux qui n'obtiennent pas ce qu'ils désirent. C'est une suggestion (ce qui est donné à entendre), non une conséquence logique : la phrase ne fait qu'exclure un groupe, elle ne dit pas qui s'en tire le plus mal.</li><li><strong>Ce qu'elle ne dit pas</strong> : que ceux qui obtiennent tout sont heureux (au contraire, elle les compte parmi les malheureux), ni qu'ils souffrent peu : seulement qu'ils ne sont pas ceux qui souffrent le plus.</li><li><strong>Idées apparentées</strong> : Schopenhauer (<em>Le Monde comme volonté et comme représentation</em>, § 57) pensait que la vie oscille comme un pendule entre la douleur du désir insatisfait et l'ennui du désir comblé. Oscar Wilde, dans <em>L'Éventail de lady Windermere</em>, fait dire à un personnage qu'il y a deux tragédies : ne pas obtenir ce que l'on désire et l'obtenir.</li></ul>",
  "pensar": "Fais la table de vérité de (p ∧ q) → ¬r : dans quelle seule ligne la phrase serait-elle fausse ? Décris la personne qui la rendrait fausse.",
  "euler": {
   "vista": "0 0 345 240",
   "circulos": [
    {
     "cx": 135,
     "cy": 122,
     "r": 105,
     "cls": "lg-e2",
     "etq": "Malheureux (p)",
     "ex": 120,
     "ey": 60
    },
    {
     "cx": 98,
     "cy": 142,
     "r": 54,
     "cls": "lg-e4",
     "etq": "Le plus mal (r)",
     "ex": 98,
     "ey": 136
    },
    {
     "cx": 250,
     "cy": 112,
     "r": 70,
     "cls": "lg-e1",
     "etq": "Obtiennent tout (q)",
     "ex": 268,
     "ey": 20
    }
   ],
   "cruces": [
    [
     210,
     116
    ],
    [
     98,
     166
    ]
   ],
   "dudas": [
    [
     290,
     120
    ]
   ],
   "lectura": "<ul><li>Le grand cercle, ce sont les <strong>malheureux (p)</strong>. La phrase parle « de tous les malheureux », donc ceux qui s'en tirent <strong>le plus mal (r)</strong> sont dessinés à l'intérieur : c'est le pire parmi les malheureux.</li><li>Le cercle de ceux qui <strong>obtiennent tout (q)</strong> croise celui des malheureux, et le ✕ du croisement marque ce que la phrase suppose : il y a des malheureux qui obtiennent tout.</li><li>Les cercles <strong>q</strong> et <strong>r</strong> ne se touchent pas : c'est l'universelle négative, « aucun malheureux qui obtient tout ne s'en tire le plus mal », <em>(p ∧ q) → ¬r</em>.</li><li>Le ✕ dans <strong>r</strong> : la phrase suppose que quelqu'un s'en tire le plus mal. Comme il est en dehors de <strong>q</strong>, cette personne n'a pas tout obtenu : c'est la contraposée, <em>(p ∧ r) → ¬q</em>.</li><li>Le <strong>?</strong> marque ce que la phrase ne dit pas : s'il y a quelqu'un qui obtient tout sans être malheureux. Cette zone peut être vide ou non.</li><li>Ce que la phrase ne fait que suggérer, que tous ceux qui n'obtiennent pas tout s'en tirent le plus mal, <strong>n'est pas dans le dessin</strong> : à l'intérieur de <strong>p</strong> reste une zone en dehors de <strong>q</strong> et de <strong>r</strong>, celle des malheureux qui n'obtiennent pas tout et ne s'en tirent pas non plus le plus mal. Et le dessin montre où se trouve chacun, non pourquoi : que le pire vienne <em>du</em> fait de ne pas obtenir ce que l'on désire ne peut pas non plus se dessiner.</li></ul>",
   "contingencia": "<p>La table de vérité de <em>(p ∧ q) → ¬r</em> a huit lignes et la phrase n'est fausse que dans une : elle est <strong>contingente</strong>. Dans le diagramme, chaque ligne est une <strong>zone</strong>, un type de personne selon qu'elle est à l'intérieur ou à l'extérieur de chaque cercle. Les huit lignes sont les huit zones possibles.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>(p ∧ q) → ¬r</th><th>Qui c'est</th><th>Dans le diagramme</th></tr></thead><tbody><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Malheureux qui obtient tout et s'en tire le plus mal</td><td><strong>N'y est pas</strong> : q et r ne se touchent pas à l'intérieur de p. C'est la zone que la phrase interdit.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Malheureux qui obtient tout et ne s'en tire pas le plus mal</td><td>Le croisement de p et q, avec ✕ : il y a quelqu'un.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Malheureux qui n'obtient pas tout et s'en tire le plus mal</td><td>Le cercle r, avec ✕ : il y a quelqu'un.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Malheureux qui n'obtient pas tout et ne s'en tire pas le plus mal</td><td>Le reste de p.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>N'est pas malheureux, obtient tout et s'en tire le plus mal</td><td>N'y est pas, mais pas à cause de la formule : r est dessiné à l'intérieur de p par la lecture « de tous les malheureux ».</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>N'est pas malheureux et obtient tout</td><td>La partie de q en dehors de p, avec ? : on ne sait pas s'il y a quelqu'un.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>N'est pas malheureux, n'obtient pas tout et s'en tire le plus mal</td><td>N'y est pas, pour la même lecture « de tous les malheureux ».</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ni malheureux, ni n'obtient tout, ni ne s'en tire le plus mal</td><td>En dehors de tous les cercles.</td></tr></tbody></table></div><ul><li><strong>Ligne fausse = zone manquante.</strong> Ce que la phrase affirme se dessine en retirant l'unique combinaison qui la rendrait fausse : les cercles q et r se séparent à l'intérieur de p. Les lignes vraies sont les zones que la phrase laisse possibles.</li><li><strong>C'est pourquoi elle est contingente</strong> : elle retire certaines zones et en laisse d'autres. Une <strong>tautologie</strong> est vraie dans toutes les lignes, donc elle ne retirerait aucune zone : n'importe quel dessin conviendrait et elle ne dirait rien sur la façon dont est le monde (c'est ce que dit Wittgenstein des tautologies dans le <em>Tractatus</em>). Une <strong>contradiction</strong> est fausse dans toutes les lignes, donc elle les retirerait toutes, y compris celle d'en dehors des cercles : on ne pourrait dessiner personne. La phrase contingente informe parce qu'elle se situe entre les deux : elle écarte un cas et laisse les autres ouverts.</li><li><strong>Piège</strong> : dans le dessin, trois zones manquent, mais la formule n'en retire qu'une. Les deux autres (r en dehors de p) sont retirées par la lecture « de tous les malheureux », qui n'est pas dans <em>(p ∧ q) → ¬r</em>. Si nous voulions l'inclure dans la formule, il faudrait ajouter <em>r → p</em>.</li><li><strong>Le diagramme en dit plus que la table</strong> : la table dit quelles combinaisons sont possibles, non lesquelles existent. Les ✕ (il y a quelqu'un dans cette zone) sont ce que la phrase suppose, et cela ne peut plus s'exprimer dans la logique des énoncés : il faut dire « il y a quelque… », ce qui relève de la logique des prédicats ou du syllogisme.</li></ul>"
  }
 },
 {
  "id": "apenas",
  "grupo": "ejercicios",
  "titulo": "« À peine moins malheureux… »",
  "origen": "Phrase proposée comme exercice en classe, à la suite de la précédente.",
  "enunciado": "« Ceux qui obtiennent tout ce qu'ils désirent sont à peine moins malheureux que ceux qui obtiennent peu ou rien. »",
  "problema": "Cette phrase ne classe plus (être ou ne pas être malheureux), mais <strong>compare des degrés</strong>. Appelons <em>q</em> ceux qui obtiennent tout ce qu'ils désirent et <em>s</em> ceux qui obtiennent peu ou rien. La phrase affirme deux choses à la fois : que <em>q</em> est moins malheureux que <em>s</em> (« sont moins malheureux ») et que la différence est petite (« à peine »). C'est une conjonction : si l'une des deux parties est fausse, la phrase est fausse. En logique des énoncés, tout cela se réduit à une seule lettre, parce que « A est moins malheureux que B » ne se décompose pas en parties qui seraient vraies ou fausses séparément : il faut une relation entre deux termes, <em>M(x, y)</em>, « x est moins malheureux que y », et cela relève de la logique des prédicats. C'est pourquoi ni la table de vérité avec p, q et r ni les cercles d'Euler, qui disent seulement qui est dedans et qui est dehors, ne conviennent ici : il faut une échelle.",
  "salidas": "<ul><li><strong>Ce qu'elle dit</strong> : tout obtenir améliore un peu les choses, mais très peu. Attention : « à peine moins » <strong>affirme bien</strong> qu'ils sont moins malheureux. Elle ne dit pas qu'ils le sont autant : « à peine » n'est pas « pas du tout ».</li><li><strong>Ce qu'elle suppose</strong> : qu'il y a ceux qui obtiennent tout et ceux qui obtiennent peu ou rien ; que personne n'est dans les deux groupes à la fois ; et que les deux groupes ont une part de malheur, car sinon on ne parlerait pas d'être « moins malheureux ».</li><li><strong>Ce qu'elle ne dit pas</strong> : rien sur ceux qui obtiennent beaucoup, mais pas tout. La phrase compare les extrêmes et laisse de côté le milieu. On ne peut pas déduire que ce groupe se situe à mi-chemin en matière de malheur : il pourrait être le plus heureux ou le plus malheureux des trois.</li><li><strong>Piège de la lecture</strong> : « ceux qui obtiennent tout sont moins malheureux que ceux qui obtiennent peu » peut se lire « chacun des premiers, moins que chacun des seconds » ou « en général, en moyenne ». La première lecture se réfute par un seul contre-exemple ; la seconde, non. Les phrases générales sur des groupes se comprennent d'ordinaire de la seconde manière.</li><li><strong>Relation avec la phrase précédente</strong> : si ceux qui obtiennent tout sont moins malheureux que ceux qui obtiennent peu, même à peine, ils ne peuvent pas être ceux qui s'en tirent le plus mal, car il y a toujours quelqu'un de pire. Avec la première lecture, la nouvelle phrase <strong>implique</strong> la précédente. L'inverse n'est pas vrai : la précédente permettait que tout obtenir soulage beaucoup le malheur, et celle-ci le nie.</li></ul>",
  "pensar": "Remplace « à peine » par « beaucoup » : la phrase dit-elle plus ou moins qu'avant ? Et si tu dis « ne sont pas moins malheureux » ? Parmi les trois versions, laquelle serait la plus facile à réfuter ?",
  "escala": {
   "vista": "0 0 360 185",
   "eje": [
    15,
    345,
    100
   ],
   "banda": [
    178,
    218
   ],
   "marca": 222,
   "textos": [
    {
     "x": 222,
     "y": 34,
     "align": "middle",
     "t": "Peu ou rien (s)"
    },
    {
     "x": 174,
     "y": 64,
     "align": "end",
     "t": "jusqu'où va « à peine » ?"
    },
    {
     "x": 198,
     "y": 136,
     "align": "middle",
     "t": "q : vraie"
    },
    {
     "x": 92,
     "y": 136,
     "align": "middle",
     "t": "q ici : fausse"
    },
    {
     "x": 92,
     "y": 152,
     "align": "middle",
     "t": "(ce n'est pas « à peine »)"
    },
    {
     "x": 290,
     "y": 136,
     "align": "middle",
     "t": "q ici : fausse"
    },
    {
     "x": 290,
     "y": 152,
     "align": "middle",
     "t": "(ce n'est pas « moins »)"
    },
    {
     "x": 15,
     "y": 176,
     "align": "start",
     "t": "moins malheureux"
    },
    {
     "x": 345,
     "y": 176,
     "align": "end",
     "t": "plus malheureux"
    }
   ],
   "lectura": "<ul><li>La ligne est l'<strong>échelle du malheur</strong> : vers la gauche, moins ; vers la droite, plus. Le point <strong>s</strong> (ceux qui obtiennent peu ou rien) sert de référence.</li><li>La <strong>bande verte</strong> est l'endroit où devrait se trouver <strong>q</strong> (ceux qui obtiennent tout) pour que la phrase soit vraie : à gauche de s (« moins malheureux »), mais tout près (« à peine »).</li><li>À droite de s, la phrase est fausse, car ils ne seraient pas <em>moins</em> malheureux. Très à gauche, elle est fausse aussi, car la différence ne serait plus <em>à peine</em>.</li><li>Le bord gauche de la bande est une <strong>ligne en pointillés</strong> : personne ne sait où s'arrête « à peine ». C'est le flou du sorite : un peu plus de distance ne change rien et pourtant, à un moment donné, ce n'est plus « à peine ».</li></ul>",
   "contTitulo": "Contingente : une bande étroite",
   "contingencia": "<p>Comme la première phrase, celle-ci est <strong>contingente</strong> : elle peut être vraie ou fausse selon la façon dont est le monde. Mais l'échelle montre autre chose : <strong>combien elle risque</strong>.</p><ul><li>Dans le diagramme d'Euler de la première phrase, on retirait une zone et toutes les autres restaient. Ici, c'est le contraire : la phrase n'est vraie que dans une bande étroite et elle est fausse sur tout le reste de l'échelle. Elle écarte presque toutes les positions possibles.</li><li>Plus une phrase écarte de possibilités, plus elle dit de choses et plus il est facile de la réfuter. Une tautologie n'écarte rien et ne dit rien ; cette phrase écarte beaucoup et dit beaucoup. C'est l'idée de Popper : une affirmation a d'autant plus de contenu que les situations possibles qui la rendraient fausse sont nombreuses.</li><li>En contrepartie, « à peine » est vague. Dans les cas limites (une différence ni clairement petite ni clairement grande), on ne sait pas si la phrase est vraie ou fausse. Une phrase peut être très risquée et, en même temps, difficile à vérifier.</li><li>Pour la vérifier, il faudrait mesurer le malheur, et ce n'est plus un problème de logique. C'est un problème empirique (enquêtes sur le bien-être, études de psychologie) et conceptuel : qu'est-ce qui compte comme malheur ?</li></ul>"
  }
 },
 {
  "id": "tanto",
  "grupo": "ejercicios",
  "titulo": "« Ceux qui obtiennent tout comme ceux qui n'obtiennent rien… »",
  "origen": "Phrase proposée comme exercice en classe, à la suite des précédentes.",
  "enunciado": "« Ceux qui obtiennent tout comme ceux qui n'obtiennent rien sont malheureux. »",
  "problema": "Ce sont deux universelles affirmatives (type A) réunies : « tous ceux qui obtiennent tout sont malheureux » et « tous ceux qui n'obtiennent rien sont malheureux ». Avec <em>p</em> = « est malheureux », <em>q</em> = « obtient tout ce qu'il désire » et <em>s</em> = « n'obtient rien », on obtient <em>(q → p) ∧ (s → p)</em>, qui équivaut à <em>(q ∨ s) → p</em> : si tu te trouves à l'un des deux extrêmes, tu es malheureux. Sa contraposée dit la même chose de l'autre côté : <em>¬p → (¬q ∧ ¬s)</em>, celui qui n'est pas malheureux a obtenu quelque chose, mais pas tout.",
  "salidas": "<ul><li><strong>Ce qu'elle dit</strong> : les deux extrêmes mènent au malheur. Et, par la contraposée, que les seuls qui peuvent ne pas être malheureux sont au milieu : cela ressemble à un éloge du juste milieu, même si la phrase ne dit pas que ceux du milieu sont heureux, seulement que personne en dehors du milieu ne l'est.</li><li><strong>Piège de la langue</strong> : « n'obtiennent rien » contient deux mots négatifs, mais ils ne s'annulent pas comme <em>¬¬</em> en logique. En castillan, « no… nada » est une seule négation : cela signifie « ils n'obtiennent aucune chose », pas « ils obtiennent quelque chose ». C'est pourquoi <em>s</em> est une seule lettre, sans négations à l'intérieur.</li><li><strong>Piège du concept</strong> : celui qui ne désire rien obtient « tout ce qu'il désire » (il ne lui manque rien de ce qu'il veut) et, en même temps, peut n'obtenir rien. C'est le seul qui pourrait appartenir aux deux groupes à la fois, et la phrase dit qu'il est malheureux lui aussi. C'est exactement le contraire de ce que pensaient les stoïciens, les épicuriens ou les bouddhistes : que la tranquillité s'atteint en réduisant les désirs.</li><li><strong>Ce qu'elle ne suppose pas</strong> : qu'il y ait quelqu'un dans chaque groupe. En logique actuelle, « tous les q sont p » est vraie même s'il n'y a aucun q (comme on le voit dans l'onglet des Syllogismes avec la lecture traditionnelle).</li><li><strong>Rapport avec les précédentes</strong> : la première phrase supposait que certains de ceux qui obtiennent tout sont malheureux ; celle-ci dit que tous le sont, donc elle en dit plus. Celle du « à peine » comparait des degrés de malheur ; celle-ci dit seulement qu'il y a du malheur aux deux extrêmes, sans le mesurer.</li></ul>",
  "pensar": "Selon cette phrase, qui pourrait être heureux ? Décris cette personne. Et que dirait Épicure à celui qui soutient la phrase ?",
  "euler": {
   "vista": "0 0 345 240",
   "circulos": [
    {
     "cx": 172,
     "cy": 122,
     "r": 108,
     "cls": "lg-e2",
     "etq": "Malheureux (p)",
     "ex": 172,
     "ey": 42
    },
    {
     "cx": 132,
     "cy": 132,
     "r": 50,
     "cls": "lg-e1",
     "etq": "Tout (q)",
     "ex": 120,
     "ey": 132
    },
    {
     "cx": 212,
     "cy": 132,
     "r": 50,
     "cls": "lg-e4",
     "etq": "Rien (s)",
     "ex": 226,
     "ey": 132
    }
   ],
   "cruces": [],
   "dudas": [
    [
     172,
     132
    ]
   ],
   "lectura": "<ul><li>Le grand cercle représente les <strong>malheureux (p)</strong>. Les cercles de ceux qui obtiennent <strong>tout (q)</strong> et de ceux qui <strong>n'obtiennent rien (s)</strong> sont à l'intérieur : ce sont les deux universelles affirmatives, « tout q est p » et « tout s est p ».</li><li>q et s se touchent à peine : on ne peut pas tout obtenir et ne rien obtenir à la fois, sauf dans un cas. Le <strong>?</strong> du croisement est ce cas, celui qui ne désire rien. La phrase ne dit pas s'il existe quelqu'un comme cela ; s'il existe, elle le compte parmi les malheureux.</li><li>Il n'y a aucun ✕ : la phrase ne suppose l'existence de personne dans aucun groupe. Elle dit seulement où il serait s'il existait.</li><li>En dehors du grand cercle se trouvent ceux qui ne sont pas malheureux, et là il n'y a ni q ni s : c'est la contraposée. Si quelqu'un n'est pas malheureux, il est en dehors des deux extrêmes.</li></ul>",
   "contTitulo": "Contingente : trois lignes fausses, trois zones vides",
   "contingencia": "<p>La table de <em>(q ∨ s) → p</em> a huit lignes et la phrase est fausse dans <strong>trois</strong> d'entre elles : celles de quelqu'un qui n'est pas malheureux et se trouve à l'un des extrêmes. Elle est <strong>contingente</strong>. Comme avant, chaque ligne est une zone du diagramme.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>s</th><th>(q ∨ s) → p</th><th>Qui c'est</th><th>Dans le diagramme</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Malheureux qui obtient tout et n'obtient rien (il ne désire rien)</td><td>Le croisement de q et s, avec ? : on ne sait pas s'il y a quelqu'un.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Malheureux qui obtient tout</td><td>Le cercle q.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Malheureux qui n'obtient rien</td><td>Le cercle s.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Malheureux qui obtient quelque chose, mais pas tout</td><td>Le reste de p.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>N'est pas malheureux, obtient tout et n'obtient rien : le sage qui ne désire rien</td><td><strong>Il n'y est pas</strong> : q et s sont à l'intérieur de p.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>N'est pas malheureux et obtient tout</td><td><strong>Il n'y est pas</strong> : q est à l'intérieur de p.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>N'est pas malheureux et n'obtient rien</td><td><strong>Il n'y est pas</strong> : s est à l'intérieur de p.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>N'est pas malheureux et obtient quelque chose, mais pas tout</td><td>En dehors de tous les cercles.</td></tr></tbody></table></div><ul><li><strong>Trois lignes fausses = trois zones qui manquent</strong> : toutes les parties de q et de s qui resteraient en dehors de p. C'est pourquoi on les dessine à l'intérieur.</li><li><strong>Elle en dit plus que la première phrase</strong> : celle-là interdisait une seule zone ; celle-ci en interdit trois. Plus une phrase supprime de zones, plus elle s'engage et plus il est facile qu'elle se révèle fausse : il suffit de trouver quelqu'un qui obtient tout et n'est pas malheureux.</li><li>Remarque la ligne du sage sans désirs : la phrase la déclare impossible. Celui qui croit que cette personne existe tient un contre-exemple, et un seul suffit pour réfuter une universelle.</li></ul>"
  }
 },
 {
  "id": "monica",
  "grupo": "agustin",
  "titulo": "Monique : « S'il désire de bonnes choses et les a, il est heureux »",
  "origen": "Monique, mère d'Augustin, dans <em>La Vie heureuse</em> (II, 10). Augustin lui répond qu'elle a atteint « la citadelle même de la philosophie ».",
  "enunciado": "« S'il désire de bonnes choses et les a, il est heureux ; mais s'il en désire de mauvaises, même s'il les a, il est malheureux. »",
  "problema": "Augustin vient de demander si tout homme qui a ce qu'il veut est heureux, et voici la réponse de Monique. Avec <em>p</em> = « est heureux », <em>q</em> = « désire le bien » et <em>r</em> = « a ce qu'il désire » (en simplifiant « désirer le mal » en « ne pas désirer le bien »), on obtient <em>((q ∧ r) → p) ∧ ((¬q ∧ r) → ¬p)</em>. Les deux parties commencent par <em>r</em> : Monique ne parle que de ceux qui ont déjà ce qu'ils désirent, et d'eux elle dit que être heureux et désirer le bien vont ensemble. C'est-à-dire : si <em>r</em>, alors <em>p ↔ q</em>.",
  "salidas": "<ul><li><strong>Suffisante, non nécessaire</strong> : Monique dit « si…, il est heureux » ; Augustin, dans la fiche suivante, « seul celui qui… ». Ce sont des flèches en sens contraires. Monique indique un chemin qui mène au bonheur ; Augustin, une porte sans laquelle on n'entre pas. Elles ne se contredisent pas.</li><li><strong>Ce qu'elle ne dit pas</strong> : rien de ceux qui n'ont pas ce qu'ils désirent. Ils en étaient convenus plus tôt dans le dialogue : celui qui n'a pas ce qu'il veut n'est pas heureux.</li><li><strong>L'écho de Cicéron</strong> : Augustin rappelle que l'<em>Hortensius</em> de Cicéron dit la même chose : ce n'est pas un malheur aussi grand de ne pas obtenir ce que l'on veut que de vouloir obtenir ce qui ne convient pas. C'est une réponse à la première phrase de l'exercice : la pire part ne revient pas à celui qui n'obtient pas, mais à celui qui désire mal.</li></ul>",
  "pensar": "Monique ne dit pas quelles choses sont bonnes. Quelques lignes plus loin, Augustin ajoute une condition : laquelle ? (Regarde la fiche suivante.)",
  "euler": {
   "vista": "0 0 345 268",
   "circulos": [
    {
     "cx": 172,
     "cy": 144,
     "r": 118,
     "cls": "lg-e2"
    },
    {
     "cx": 172,
     "cy": 144,
     "r": 80,
     "cls": "lg-e3"
    },
    {
     "cx": 172,
     "cy": 16,
     "r": 0,
     "cls": "lg-e2",
     "etq": "Ont ce qu'ils désirent (r)",
     "ex": 172,
     "ey": 16
    },
    {
     "cx": 172,
     "cy": 122,
     "r": 0,
     "cls": "lg-e2",
     "etq": "Désirent le bien (q)",
     "ex": 172,
     "ey": 140
    },
    {
     "cx": 172,
     "cy": 140,
     "r": 0,
     "cls": "lg-e2",
     "etq": "= heureux (p)",
     "ex": 172,
     "ey": 158
    },
    {
     "cx": 172,
     "cy": 206,
     "r": 0,
     "cls": "lg-e2",
     "etq": "malheureux (¬p)",
     "ex": 172,
     "ey": 240
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>Le grand cercle n'est pas un groupe de plus : c'est le <strong>cadre</strong>. Monique ne parle que de ceux qui <strong>ont ce qu'ils désirent (r)</strong> ; des autres, la phrase ne dit rien.</li><li>À l'intérieur du cadre, le cercle de ceux qui <strong>désirent le bien (q)</strong> est aussi celui des <strong>heureux (p)</strong> : parmi ceux qui ont ce qu'ils désirent, être heureux et désirer le bien vont ensemble.</li><li>L'anneau autour représente ceux qui ont ce qu'ils désirent, mais désirent le mal : <strong>malheureux</strong>, « même s'ils l'ont ».</li></ul>",
   "contTitulo": "Contingente : deux lignes fausses",
   "contingencia": "<p>La table a huit lignes et la phrase de Monique n'est fausse que dans <strong>deux</strong> : celle de qui a le bien qu'il désire et n'est pas heureux, et celle de qui a le mal qu'il désire et est heureux. Les quatre lignes où <em>r</em> est fausse sont toutes vraies : la phrase ne dit rien de celui qui n'a pas ce qu'il désire, et ce qui n'est pas dit ne peut pas la rendre fausse.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>Monique</th><th>Qui c'est</th><th>Dans le diagramme</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Heureux qui désire le bien et l'a</td><td>Le cercle q = p.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Heureux qui désire le bien et ne l'a pas</td><td>En dehors du cadre : la phrase ne dit rien.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Heureux qui désire le mal et l'a</td><td><strong>Il n'y est pas</strong> : à l'intérieur du cadre, désirer le mal, c'est être dans l'anneau des malheureux.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Heureux qui désire le mal et ne l'a pas</td><td>En dehors du cadre : la phrase ne dit rien.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Désire le bien, l'a et n'est pas heureux</td><td><strong>Il n'y est pas</strong> : à l'intérieur du cadre, celui qui désire le bien est heureux.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Désire le bien, ne l'a pas et n'est pas heureux</td><td>En dehors du cadre.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Désire le mal, l'a et n'est pas heureux</td><td>L'anneau des malheureux.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Désire le mal, ne l'a pas et n'est pas heureux</td><td>En dehors du cadre.</td></tr></tbody></table></div>"
  }
 },
 {
  "id": "agustin",
  "grupo": "agustin",
  "titulo": "Augustin : « Seul celui qui désire ce qu'il ne peut perdre… »",
  "origen": "Paraphrase d'Augustin d'Hippone, <em>La Vie heureuse</em> (386), chapitre II : celui qui veut être heureux doit se procurer ce qui demeure toujours et qu'aucune fortune ne peut lui enlever.",
  "enunciado": "« Seul celui qui désire ce qu'il ne peut perdre peut atteindre le bonheur. »",
  "problema": "Deux lettres : <em>p</em> = « atteint le bonheur » et <em>q</em> = « désire ce qu'il ne peut perdre ». « Seul celui qui q, p » pose une <strong>condition nécessaire</strong> : sans q, pas de p. C'est-à-dire <em>p → q</em> : si quelqu'un atteint le bonheur, c'est qu'il désire ce qu'il ne peut perdre. (Le « peut atteindre » est lu comme « atteint », pour ne pas compliquer.) Sa contraposée dit la même chose : <em>¬q → ¬p</em>, celui qui désire ce qu'il peut perdre n'atteint pas le bonheur.",
  "salidas": "<ul><li><strong>Piège : « seul » n'est pas « tout »</strong>. La phrase ne dit pas que celui qui désire ce qu'il ne peut perdre est heureux (<em>q → p</em>). Passer de l'une à l'autre, c'est le sophisme de l'affirmation du conséquent : tu peux l'essayer dans l'onglet des tables, dans l'exemple « Affirmation du conséquent ».</li><li><strong>L'argument d'Augustin</strong> : celui qui aime ce qu'il peut perdre vit dans la peur de le perdre, et avec la peur on n'est pas heureux. La seule chose que l'on ne peut perdre, pour lui, c'est Dieu.</li><li><strong>Rapport avec les précédentes</strong> : ce qui compte n'est plus combien on désire ni combien on obtient, mais <em>ce que</em> l'on désire, et en particulier si on peut le perdre. C'est une idée proche de celle des stoïciens : placer son désir dans ce qui ne dépend pas de la fortune.</li></ul>",
  "pensar": "Pour Augustin, la seule chose que l'on ne peut perdre, c'est Dieu. Te vient-il à l'esprit autre chose que l'on ne puisse perdre ? Cela conviendrait-il pour la phrase ?",
  "euler": {
   "vista": "0 0 345 215",
   "circulos": [
    {
     "cx": 172,
     "cy": 120,
     "r": 90,
     "cls": "lg-e1",
     "etq": "Désirent ce qu'ils ne peuvent perdre (q)",
     "ex": 172,
     "ey": 20
    },
    {
     "cx": 150,
     "cy": 132,
     "r": 46,
     "cls": "lg-e3",
     "etq": "Heureux (p)",
     "ex": 150,
     "ey": 132
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>Le cercle des <strong>heureux (p)</strong> est à l'intérieur de celui de ceux qui <strong>désirent ce qu'ils ne peuvent perdre (q)</strong> : c'est une universelle affirmative, « tout heureux désire ce qu'il ne peut perdre ».</li><li>À l'intérieur de q, il reste de la place en dehors de p : il peut y avoir quelqu'un qui désire ce qu'il ne peut perdre et n'est pas heureux. Ce vide, c'est le « seul » de la phrase.</li></ul>",
   "contTitulo": "Contingente : une ligne fausse, une zone vide",
   "contingencia": "<p>La table de <em>p → q</em> a quatre lignes et la phrase n'est fausse que dans une : elle est <strong>contingente</strong>. Cette ligne est la zone qui manque dans le dessin.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas lg-z2\"><thead><tr><th>p</th><th>q</th><th>p → q</th><th>Qui c'est</th><th>Dans le diagramme</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Heureux qui désire ce qu'il ne peut perdre</td><td>p, à l'intérieur de q.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Heureux qui désire ce qu'il peut perdre</td><td><strong>Il n'y est pas</strong> : p est à l'intérieur de q.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Désire ce qu'il ne peut perdre et n'est pas heureux</td><td>La partie de q en dehors de p : « seul » n'est pas « tout ».</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ni heureux ni désireux de ce qu'il ne peut perdre</td><td>En dehors des deux cercles.</td></tr></tbody></table></div><p>La troisième ligne est celle du piège : elle est vraie, et dans le dessin c'est la partie de q qui reste en dehors de p. Si la phrase disait « tout homme qui désire ce qu'il ne peut perdre est heureux », c'est cette zone qui manquerait, à la place de la deuxième.</p>"
  }
 },
 {
  "id": "agustin2",
  "grupo": "agustin",
  "titulo": "Augustin, variante : « …qui est la fin que nous cherchons tous nécessairement »",
  "origen": "Variante de la phrase précédente. La seconde partie est aussi d'Augustin : dans <em>La Vie heureuse</em> (II), il tient pour acquis que nous voulons tous être heureux.",
  "enunciado": "« Seul celui qui désire et obtient ce qu'il ne peut perdre peut atteindre le bonheur, qui est la fin que nous cherchons tous nécessairement. »",
  "problema": "Il y a maintenant <strong>deux affirmations</strong>. La première est celle d'avant avec une condition de plus : avec <em>p</em> = « atteint le bonheur », <em>q</em> = « désire ce qu'il ne peut perdre » et <em>r</em> = « obtient ce qu'il ne peut perdre », on obtient <em>p → (q ∧ r)</em>. Il ne suffit plus de le désirer : il faut aussi l'obtenir. La seconde est ajoutée par la proposition relative : « le bonheur est la fin que nous cherchons tous nécessairement ». Comme elle est entre virgules, elle est <strong>explicative</strong> : elle ne restreint pas de quel bonheur on parle, mais dit quelque chose de plus à son sujet. Sans virgules (« le bonheur que nous cherchons tous »), elle serait déterminative et n'affirmerait rien de nouveau.",
  "salidas": "<ul><li><strong>Ce qui découle de la réunion des deux</strong> : tous cherchent le bonheur, mais seul l'atteint celui qui désire <em>et</em> obtient ce qu'il ne peut perdre. Celui qui n'y parvient pas cherche, sans pouvoir s'en empêcher, quelque chose qu'il ne peut atteindre. Ce qui était auparavant une condition devient un drame.</li><li><strong>« Nécessairement » n'est pas « tautologiquement »</strong> : « nous cherchons tous le bonheur » n'est pas vraie par sa forme (la table ne la rend pas vraie dans toutes les lignes), mais, selon Augustin, par ce que nous sommes. Cette nécessité vient de la nature humaine, pas de la logique, et pour l'exprimer il faut une logique modale.</li><li><strong>Celui qui n'est pas heureux est-il malheureux ?</strong> En castillan courant, pas nécessairement : « heureux » et « malheureux » sont des contraires, et on peut se trouver entre les deux. Augustin, lui, ne laisse pas de milieu : dans <em>La Vie heureuse</em> (II, 11 et IV, 28), il tient pour acquis que tout homme qui n'est pas heureux est misérable, comme tout homme qui n'est pas mort est vivant. Si nous l'acceptons, « non heureux » (<em>¬p</em>) et « malheureux » sont la même chose, et la phrase se durcit : celui qui ne désire pas et n'obtient pas ce qu'il ne peut perdre ne reste pas dans un no man's land, il est malheureux. Et avec « nous cherchons tous le bonheur », personne ne peut rester en marge : ou bien on l'atteint, ou bien on est malheureux.</li><li><strong>Le piège habituel</strong> : « seul » n'est toujours pas « tout ». Celui qui désire et obtient ce qu'il ne peut perdre n'a pas le bonheur garanti par cette phrase.</li></ul>",
  "pensar": "Enlève les virgules : « Seul celui qui désire et obtient ce qu'il ne peut perdre peut atteindre le bonheur que nous cherchons tous ». Quelle affirmation disparaît ?",
  "euler": {
   "titulo": "Lecture littérale : « seul » (p → q ∧ r)",
   "vista": "0 0 345 318",
   "circulos": [
    {
     "cx": 130,
     "cy": 125,
     "r": 98,
     "cls": "lg-e1",
     "etq": "Le désirent (q)",
     "ex": 95,
     "ey": 14
    },
    {
     "cx": 215,
     "cy": 125,
     "r": 98,
     "cls": "lg-e2",
     "etq": "L'obtiennent (r)",
     "ex": 250,
     "ey": 14
    },
    {
     "cx": 172,
     "cy": 120,
     "r": 48,
     "cls": "lg-e3",
     "etq": "Heureux (p)",
     "ex": 172,
     "ey": 120
    },
    {
     "cx": 172,
     "cy": 245,
     "r": 64,
     "cls": "lg-e4",
     "etq": "Malheureux (¬p)",
     "ex": 172,
     "ey": 258
    }
   ],
   "cruces": [],
   "dudas": [
    [
     62,
     110
    ],
    [
     283,
     110
    ]
   ],
   "lectura": "<ul><li><strong>q</strong> représente ceux qui désirent ce que l'on ne peut perdre et <strong>r</strong>, ceux qui l'obtiennent. Ils se croisent : on peut désirer sans obtenir et, peut-être, obtenir sans avoir désiré.</li><li>Le cercle des <strong>heureux (p)</strong> se trouve à l'intérieur du croisement : pour être heureux, il faut être à la fois dans q et dans r.</li><li>« Nous cherchons tous le bonheur » n'a pas besoin de cercle : elle parlerait de tout le monde, elle serait donc le cadre entier du dessin. Une universelle qui ne laisse personne dehors ne sépare pas de zones.</li><li>En bas, le cercle des <strong>malheureux (¬p)</strong>. Il ne touche pas celui des heureux, car personne n'est les deux à la fois. Il croise q et r, y compris leur croisement : on peut désirer et obtenir ce que l'on ne peut perdre et ne pas être heureux (« seul » n'est pas « tout »). Et il déborde des deux, car celui qui ne le désire ni ne l'obtient n'est pas heureux.</li><li>Les <strong>?</strong> marquent ce qui ne tombe dans aucun des deux cercles : ceux qui ne seraient ni heureux ni malheureux (et il en va de même pour ce qui reste en dehors de tous les cercles). Si, comme Augustin, il n'y a pas de milieu, il n'y a personne là. S'il y en a un, c'est leur place.</li></ul>",
   "contTitulo": "Contingente : trois lignes fausses, trois zones vides",
   "contingencia": "<p>La table de <em>p → (q ∧ r)</em> a huit lignes et la phrase est fausse dans <strong>trois</strong> d'entre elles, une de plus que la version précédente si on l'écrit avec les mêmes lettres : celle de l'heureux qui le désire mais ne l'obtient pas. C'est ce qu'ajoute « et obtient ».</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>p → (q ∧ r)</th><th>Qui c'est</th><th>Dans le diagramme</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Heureux qui le désire et l'obtient</td><td>p, dans le croisement de q et r.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Heureux qui le désire, mais ne l'obtient pas</td><td><strong>Il n'y est pas</strong> : p est à l'intérieur de r.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Heureux qui l'obtient sans le désirer</td><td><strong>Il n'y est pas</strong> : p est à l'intérieur de q.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Heureux qui ne le désire ni ne l'obtient</td><td><strong>Il n'y est pas</strong> : p est à l'intérieur de q et de r.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Le désire et l'obtient, et n'est pas heureux</td><td>Le croisement de q et r en dehors de p : « seul » n'est pas « tout ».</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Le désire et ne l'obtient pas</td><td>q en dehors de r.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>L'obtient sans le désirer</td><td>r en dehors de q.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ne le désire ni ne l'obtient</td><td>En dehors des cercles.</td></tr></tbody></table></div><p>La seconde affirmation, « nous cherchons tous le bonheur », ne change pas la table : elle ne parle ni de <em>p</em>, ni de <em>q</em>, ni de <em>r</em>, mais de chercher, et elle vaut pour toutes les lignes également.</p>"
  },
  "euler2": {
   "titulo": "Augustin complet : « qui possède Dieu est heureux » (p ↔ q ∧ r)",
   "vista": "0 0 345 258",
   "circulos": [
    {
     "cx": 130,
     "cy": 125,
     "r": 98,
     "cls": "lg-e1",
     "etq": "Le désirent (q)",
     "ex": 95,
     "ey": 14
    },
    {
     "cx": 215,
     "cy": 125,
     "r": 98,
     "cls": "lg-e2",
     "etq": "L'obtiennent (r)",
     "ex": 250,
     "ey": 14
    },
    {
     "cx": 172,
     "cy": 129,
     "r": 0,
     "cls": "lg-e3",
     "etq": "Heureux (p)",
     "ex": 172,
     "ey": 129
    },
    {
     "cx": 172,
     "cy": 246,
     "r": 0,
     "cls": "lg-e4",
     "etq": "Malheureux (¬p) : tout le reste",
     "ex": 172,
     "ey": 246
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>Quelques lignes plus loin, dans <em>La Vie heureuse</em> (II, 11), Augustin conclut : « Deum igitur qui habet, beatus est », c'est-à-dire que celui qui possède Dieu, que l'on ne peut perdre, est heureux. Celui qui possède ce qu'il ne peut perdre ne craint pas de le perdre et ne manque pas de ce qu'il veut : il n'a aucune raison d'être malheureux. Ainsi la condition est aussi suffisante, et la phrase devient <em>p ↔ (q ∧ r)</em>.</li><li>Maintenant le croisement de q et r <strong>est</strong> le cercle des heureux : il n'est plus nécessaire de le dessiner à part. La zone du premier dessin qui grince (le désire, l'obtient et est malheureux) reste vide.</li><li>Comme il n'y a pas de milieu, tout le reste (q sans r, r sans q et ce qui reste en dehors) ce sont les <strong>malheureux</strong>. Euler ne peut pas les dessiner comme un cercle : ils sont le reste du dessin. Quand deux classes se partagent tout et que l'une d'elles est un croisement, l'autre ne peut être que le fond.</li><li>La table de <em>p ↔ (q ∧ r)</em> a quatre lignes fausses : les trois de la lecture littérale et celle de qui le désire, l'obtient et n'est pas heureux. Cette quatrième ligne est la zone qui se vide. La phrase complète écarte davantage et, pour cela, dit davantage.</li></ul>"
  }
 },
 {
  "id": "contrafactico",
  "grupo": "ejercicios",
  "titulo": "« …seraient heureux s'ils ne pouvaient cesser de le désirer »",
  "origen": "Phrase proposée comme exercice en classe, en dialogue avec Monique et Augustin.",
  "enunciado": "« Ceux qui obtiennent quelque chose qu'ils désirent et qu'ils ne peuvent perdre seraient heureux s'ils ne pouvaient cesser de le désirer. »",
  "problema": "Trois lettres : <em>p</em> = « est heureux », <em>q</em> = « obtient quelque chose qu'il désire et qu'il ne peut perdre » et <em>r</em> = « ne peut cesser de le désirer ». Lue avec la flèche des tables, la phrase est <em>(q ∧ r) → p</em> : si quelqu'un l'obtient et ne peut cesser de le désirer, il est heureux. Mais la phrase n'est pas à l'indicatif (« sont heureux si… »), elle est au <strong>conditionnel</strong> (« seraient heureux s'ils ne pouvaient… ») : c'est un <strong>conditionnel contrefactuel</strong>. Elle parle de ce qui arriverait si les choses étaient différentes de ce qu'elles sont, et laisse entendre qu'en fait elles ne le sont pas : qu'ils peuvent bel et bien cesser de le désirer (<em>¬r</em>) et que, alors, ils ne sont pas heureux (<em>¬p</em>).",
  "salidas": "<ul><li><strong>Ce qu'elle laisse entendre</strong> : que même celui qui possède quelque chose qu'il désire et qu'il ne peut perdre peut cesser de le désirer, et alors il n'est pas heureux. Elle ne le dit pas : c'est le conditionnel qui le suggère.</li><li><strong>Une faille dans l'argument d'Augustin</strong> : pour lui, est heureux celui qui a ce qu'il veut (<em>La Vie heureuse</em>, II, 10-11), et c'est pourquoi il suffit d'avoir ce que l'on ne peut perdre. La phrase souligne que l'on peut perdre deux choses : l'objet et le désir. Ce que l'on ne peut perdre est toujours là, mais si je cesse de le vouloir, je n'ai plus « ce que je veux ».</li><li><strong>Comment la variante la ferme</strong> : « la fin que nous cherchons tous <em>nécessairement</em> ». Si ce que l'on ne peut perdre est aussi ce que nous ne pouvons cesser de désirer, <em>r</em> est toujours remplie et le contrefactuel est superflu : la phrase dit la même chose qu'Augustin. Ce « nécessairement » est précisément la pièce qui manque à cette phrase.</li><li><strong>Face à Monique</strong> : elle disait que les choses périssables ne rassasient pas (« talibus satiari non poterit », II, 11). Cette phrase va plus loin : même ce que l'on ne peut perdre ne suffit pas, si le désir peut s'éteindre.</li><li><strong>Proche de Schopenhauer</strong> : le désir comblé s'use et laisse place à l'ennui, comme dans le pendule de la première phrase.</li></ul>",
  "pensar": "Peut-on cesser de désirer quelque chose que l'on ne peut perdre ? Cherche un exemple. Et peut-on cesser de désirer le bonheur lui-même ?",
  "euler": {
   "vista": "0 0 345 250",
   "circulos": [
    {
     "cx": 172,
     "cy": 130,
     "r": 110,
     "cls": "lg-e2",
     "etq": "Obtiennent quelque chose qu'ils désirent et ne peuvent perdre (q)",
     "ex": 172,
     "ey": 12
    },
    {
     "cx": 150,
     "cy": 135,
     "r": 70,
     "cls": "lg-e3",
     "etq": "Heureux (p)",
     "ex": 150,
     "ey": 96
    },
    {
     "cx": 150,
     "cy": 150,
     "r": 34,
     "cls": "lg-vacia",
     "etq": "r : vide",
     "ex": 150,
     "ey": 155
    }
   ],
   "cruces": [
    [
     250,
     140
    ]
   ],
   "dudas": [],
   "lectura": "<ul><li>Le grand cercle est le <strong>cadre</strong> : la phrase ne parle que de ceux qui obtiennent quelque chose qu'ils désirent et qu'ils ne peuvent perdre (q), c'est-à-dire de ceux qui remplissent déjà la condition d'Augustin.</li><li>À l'intérieur, le cercle de ceux qui <strong>ne peuvent cesser de le désirer (r)</strong> se trouve à l'intérieur de celui des <strong>heureux (p)</strong> : c'est ce que dit la flèche, <em>(q ∧ r) → p</em>.</li><li>Mais r est en <strong>gris</strong> : le conditionnel laisse entendre qu'il est vide, parce que n'importe qui peut cesser de désirer quelque chose. Et le ✕ marque où se trouvent les gens réels selon la phrase : dans le cadre, en dehors des heureux.</li><li>Voilà le problème : si r est vide, peu importe où on le dessine. À l'intérieur de p ou en dehors, le dessin respecterait la phrase. Un conditionnel dont l'antécédent est vide ne dit rien du monde réel.</li></ul>",
   "contTitulo": "Contingente avec la flèche, mais vide comme contrefactuel",
   "contingencia": "<p>Avec la flèche des tables, <em>(q ∧ r) → p</em> a huit lignes et une seule fausse : elle est <strong>contingente</strong>. La ligne surlignée en vert est celle que le conditionnel donne pour réelle.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>(q ∧ r) → p</th><th>Qui c'est</th><th>Dans le diagramme</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Heureux, l'obtient et ne peut cesser de le désirer</td><td>r, à l'intérieur de p.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Heureux, l'obtient et peut cesser de le désirer</td><td>p en dehors de r.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Heureux qui n'obtient rien qu'il ne puisse perdre et ne peut cesser de le désirer</td><td>En dehors du cadre : la phrase ne dit rien.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Heureux qui n'obtient rien qu'il ne puisse perdre et peut cesser de le désirer</td><td>En dehors du cadre.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>L'obtient, ne peut cesser de le désirer et n'est pas heureux</td><td><strong>Il n'y est pas</strong> : r est à l'intérieur de p. C'est la seule ligne fausse.</td></tr><tr class=\"lg-ok\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>L'obtient, peut cesser de le désirer et n'est pas heureux</td><td>Le cadre en dehors de p, avec ✕ : le cas réel que suggère le conditionnel.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Ne l'obtient pas, ne peut cesser de le désirer et n'est pas heureux</td><td>En dehors du cadre.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ne l'obtient pas, peut cesser de le désirer et n'est pas heureux</td><td>En dehors du cadre.</td></tr></tbody></table></div><ul><li><strong>Le piège du contrefactuel.</strong> Dans la ligne du cas réel, <em>r</em> est fausse, et avec <em>r</em> fausse la flèche est vraie quoi qu'il arrive à <em>p</em>. Ainsi, avec la table, « s'ils ne pouvaient cesser de le désirer, ils seraient heureux » serait aussi vraie que « s'ils ne pouvaient cesser de le désirer, ils seraient encore plus malheureux ». La table ne distingue pas les deux.</li><li>C'est pourquoi les contrefactuels demandent un autre outil. Le plus connu est celui des mondes possibles (Robert Stalnaker, David Lewis) : la phrase est vraie si, dans le monde le plus proche du nôtre où ils ne pourraient cesser de le désirer, ils étaient heureux. Il ne suffit plus de regarder les valeurs de vérité : il faut imaginer comment seraient les choses.</li></ul>"
  }
 }
];
