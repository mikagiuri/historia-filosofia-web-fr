// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/leibniz.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const LEIBNIZ = {
 "retrato": "Gottfried Wilhelm Leibniz (Leipzig, 1646 – Hanovre, 1716), portrait par Christoph Bernhard Francke vers 1695.",
 "intro": "Leibniz fut philosophe, mathématicien, juriste, diplomate et inventeur. Il avait un rêve très ambitieux : que <strong>penser soit aussi sûr que calculer</strong>. Si les idées pouvaient s'écrire avec des signes exacts, une discussion se résoudrait comme une addition, sans cris ni tricheries.",
 "pista": "Son rêve ne s'est pas tout à fait réalisé, mais en chemin il a inventé une machine à calculer et le système de zéros et de uns qu'utilise aujourd'hui n'importe quel ordinateur. Ici, tu vas le parcourir.",
 "maquina": {
  "titulo": "Une machine qui multiplie",
  "texto": [
   "En 1642, Pascal avait construit une machine qui additionnait et soustrayait. Leibniz voulut aller plus loin : une machine qui <strong>multiplierait et diviserait</strong> aussi. Il en présenta un modèle en bois à la Royal Society de Londres en 1673 et continua à la perfectionner pendant vingt ans.",
   "Le secret, c'est le <strong>tambour à échelons</strong> : un cylindre portant neuf dents de longueur croissante. Une petite roue se place le long du cylindre et, selon l'endroit où elle se trouve, elle engrène à chaque tour 0, 1, 2… jusqu'à 9 dents. Ainsi, chaque tour de manivelle ajoute d'un seul coup le chiffre choisi.",
   "Seuls deux exemplaires furent construits, et ils ne fonctionnaient pas tout à fait bien : le mécanisme de la « retenue » défaillait. Mais le tambour à échelons continua d'être utilisé dans les calculatrices mécaniques jusque bien avant dans le XXe siècle."
  ],
  "cita": "Il est indigne d'hommes excellents de perdre des heures comme des esclaves dans le travail du calcul, qui pourrait être confié à n'importe qui si l'on utilisait des machines.",
  "citaPie": "Leibniz, à propos de sa machine arithmétique (1685)",
  "ruedaTit": "Essaie la roue",
  "ruedaTxt": "Déplace la petite roue le long du cylindre : les dents qu'elle engrène sont le chiffre qui s'ajoute à chaque tour.",
  "multTit": "Multiplie comme Leibniz",
  "multTxt": "La machine ne multiplie pas « d'un coup » : elle additionne le premier nombre autant de fois que l'indique chaque chiffre du second et, entre un chiffre et le suivant, elle décale le chariot d'une position (comme quand tu multiplies à la main et que tu laisses un blanc).",
  "multFin": "Terminé : {a} × {b} = {r}. Il t'a fallu {v} tours de manivelle, au lieu de {b} additions à la suite."
 },
 "binario": {
  "titulo": "Tout avec deux chiffres : 0 et 1",
  "texto": [
   "Nous comptons de dix en dix parce que nous avons dix doigts. Leibniz se demanda ce qui se passerait si nous comptions <strong>de deux en deux</strong> : il suffirait de deux chiffres, 0 et 1. En binaire, 2 s'écrit 10 ; 3 s'écrit 11 ; 4 s'écrit 100… et 1 + 1 = 10.",
   "Il l'avait déjà étudié en 1679, mais ne le publia qu'en 1703. Pour Leibniz, cela avait aussi un sens religieux : tout peut sortir de l'un (Dieu) et du néant (le zéro).",
   "Entre-temps, un jésuite qui vivait à Pékin, Joachim Bouvet, lui envoya un diagramme des <strong>64 hexagrammes</strong> du <em>Yijing</em> (le « Livre des mutations » chinois), attribué au légendaire Fuxi. Chaque hexagramme est formé de six lignes, pleines ou brisées. Si l'on lit la ligne pleine comme 1 et la ligne brisée comme 0, le diagramme range les nombres de 0 à 63. Leibniz en fut fasciné."
  ],
  "cuidado": "Attention aux conclusions hâtives : Leibniz <strong>n'a pas copié</strong> le binaire sur la Chine, car il l'avait déjà avant de recevoir la lettre. Et lire les hexagrammes comme des nombres fut une interprétation de sa part et de celle de Bouvet : en Chine, on les utilisait pour la divination et la réflexion, pas pour compter.",
  "hexTit": "Un hexagramme est un nombre",
  "hexTxt": "Clique sur les lignes pour les changer (pleine = 1, brisée = 0) ou écris un nombre de 0 à 63. Ici, la ligne du haut est le chiffre qui vaut le plus.",
  "puente": "Aujourd'hui, chaque 1 et chaque 0 est un circuit qui laisse passer le courant ou non. Regarde comment on calcule avec eux dans les <a href=\"#logica/puertas\">portes logiques du Coin de logique</a>."
 },
 "alfabeto": {
  "titulo": "Un alphabet des pensées",
  "texto": [
   "Jeune, Leibniz lut l'<em>Ars magna</em> de Raymond Lulle, un Majorquin du XIIIe siècle qui combinait des concepts à l'aide de roues tournantes. Cela lui donna une idée : si tous les concepts complexes sont faits de concepts simples, il suffirait d'un <strong>« alphabet des pensées humaines »</strong> pour écrire n'importe quelle idée en combinant ses lettres.",
   "En 1679, il essaya d'utiliser des nombres. À chaque concept simple, il donna un <strong>nombre premier</strong> et à chaque concept composé, le produit de ses parties. Son exemple : animal = 2, rationnel = 3, donc être humain (animal rationnel) = 2 × 3 = 6.",
   "Et maintenant vient le meilleur : « Tout être humain est un animal » est vrai parce que <strong>6 est divisible par 2</strong>. Vérifier une phrase revient à faire une division."
  ],
  "conceptos": [
   {
    "t": "animal",
    "n": 2
   },
   {
    "t": "rationnel",
    "n": 3
   },
   {
    "t": "bipède",
    "n": 5
   },
   {
    "t": "à plumes",
    "n": 7
   },
   {
    "t": "volant",
    "n": 11
   },
   {
    "t": "coureur",
    "n": 13
   },
   {
    "t": "être humain",
    "n": 6,
    "de": "animal × rationnel"
   },
   {
    "t": "oiseau",
    "n": 70,
    "de": "animal × bipède × à plumes"
   },
   {
    "t": "moineau",
    "n": 770,
    "de": "oiseau × volant"
   },
   {
    "t": "autruche",
    "n": 910,
    "de": "oiseau × coureur"
   },
   {
    "t": "chauve-souris",
    "n": 22,
    "de": "animal × volant"
   }
  ],
  "probTit": "À toi d'essayer",
  "probTxt": "Choisis un sujet et un prédicat. La phrase « Tout… est… » sera vraie si le nombre du prédicat divise exactement celui du sujet.",
  "problema": "Le problème : quels concepts sont vraiment simples ? Quel nombre donnerais-tu à « justice » ou à « liberté » ? Leibniz ne parvint jamais à achever son alphabet, et pour des phrases comme « aucun… » ou « quelque… » il dut compliquer le système avec des couples de nombres."
 },
 "tratados": {
  "titulo": "Ses écrits de logique",
  "texto": "Leibniz n'écrivit pas un grand livre de logique, mais des centaines de brouillons. La plupart <strong>restèrent inédits</strong> pendant plus de deux siècles : le philosophe français Louis Couturat les révéla entre 1901 et 1903. C'est pourquoi, quand Boole et Frege réinventèrent la logique au XIXe siècle, ils ne savaient pas que Leibniz était déjà parvenu à beaucoup de leurs idées.",
  "lista": [
   {
    "y": "1666",
    "t": "<em>Dissertatio de arte combinatoria</em>",
    "d": "Sa thèse de jeunesse : inspiré par Lulle, il propose de combiner des concepts simples pour obtenir tous les composés."
   },
   {
    "y": "1679",
    "t": "<em>Elementa characteristicae universalis</em> et autres écrits",
    "d": "Les nombres caractéristiques : chaque concept, un nombre ; chaque phrase, un calcul."
   },
   {
    "y": "1686",
    "t": "<em>Generales inquisitiones de analysi notionum et veritatum</em>",
    "d": "Son calcul logique le plus complet. Il y défend que, dans toute vérité, le prédicat est contenu dans le sujet : dire « Tout S est P », c'est dire que la notion de S contient celle de P."
   },
   {
    "y": "vers 1686",
    "t": "<em>De formae logicae comprobatione per linearum ductus</em>",
    "d": "Le brouillon des diagrammes : il vérifie les syllogismes en dessinant des cercles et des lignes."
   },
   {
    "y": "1704",
    "t": "<em>Nouveaux essais sur l'entendement humain</em>",
    "d": "Sa réponse à Locke, sous forme de dialogue. Il y défend la valeur de la logique d'Aristote et des formes du raisonnement. Ils ne furent publiés qu'en 1765."
   }
  ]
 },
 "diagramas": {
  "titulo": "Les diagrammes d'Euler… que Leibniz dessina",
  "texto": [
   "Les cercles que nous utilisons pour vérifier les syllogismes s'appellent des <strong>diagrammes d'Euler</strong>, parce que le mathématicien Leonhard Euler les a popularisés dans ses <em>Lettres à une princesse d'Allemagne</em> (écrites en 1761). Mais Leibniz les avait déjà dessinés vers 1686, alors qu'Euler n'était même pas né. Et il n'a pas été le premier non plus : il raconte lui-même que, jeune, il les avait vus dans un livre de Johann Christoph Sturm (1661).",
   "Leibniz essaya aussi une autre forme : représenter chaque concept par une <strong>ligne</strong>. Si la ligne de S est à l'intérieur de celle de P, tout S est P. Ce sont les <strong>diagrammes linéaires</strong>, moins célèbres mais tout aussi utiles."
  ],
  "probTit": "Compare les deux versions",
  "probTxt": "Choisis une proposition ou un syllogisme et regarde comment Leibniz le dessinerait avec des cercles et avec des lignes. Sur les lignes, le tronçon en pointillés est la partie qui peut exister ou non.",
  "casos": [
   {
    "id": "A",
    "t": "Tout S est P",
    "d": "S est entièrement à l'intérieur de P."
   },
   {
    "id": "E",
    "t": "Aucun S n'est P",
    "d": "S et P ne se touchent pas."
   },
   {
    "id": "I",
    "t": "Quelque S est P",
    "d": "S et P ont une partie en commun."
   },
   {
    "id": "O",
    "t": "Quelque S n'est pas P",
    "d": "Une partie de S reste en dehors de P."
   },
   {
    "id": "barbara",
    "t": "Tout M est P ; tout S est M ; donc tout S est P",
    "d": "Syllogisme Barbara : si S est dans M et M dans P, S est forcément dans P."
   },
   {
    "id": "celarent",
    "t": "Aucun M n'est P ; tout S est M ; donc aucun S n'est P",
    "d": "Syllogisme Celarent : S est dans M, et M ne touche pas P, donc S non plus."
   }
  ],
  "circulos": "Cercles (comme Euler)",
  "lineas": "Lignes (Leibniz seul)",
  "puente": "Entraîne-toi avec bien d'autres syllogismes dans le <a href=\"#logica/silogismos\">Coin de logique</a>."
 },
 "calculemos": {
  "titulo": "Calculons !",
  "cita": "Quand des controverses surgiront, il n'y aura pas plus besoin de disputes entre deux philosophes qu'entre deux comptables. Il suffira de prendre la plume, de s'asseoir devant l'abaque et de se dire l'un à l'autre (en appelant un ami, si l'on veut) : calculons.",
  "citaPie": "Leibniz, écrit d'environ 1685",
  "texto": "Tel était le rêve complet : un langage exact pour écrire les idées (la « caractéristique universelle ») et des règles pour calculer avec elles (le « calcul du raisonnement »). Tu peux essayer une petite version de ce rêve : dans le <a href=\"#logica/tablas\">Coin de logique</a>, une table de vérité décide, par le calcul, si un argument est valide.",
  "lineaTit": "Ce qui est venu après"
 },
 "linea": [
  {
   "y": "1666",
   "t": "À 20 ans, Leibniz écrit sur l'« art de combiner », inspiré par Lulle."
  },
  {
   "y": "1673",
   "t": "Il présente sa machine à calculer à la Royal Society."
  },
  {
   "y": "1679",
   "t": "Arithmétique binaire et nombres caractéristiques."
  },
  {
   "y": "1684",
   "t": "Il publie le calcul infinitésimal, qui sait additionner une infinité de morceaux de plus en plus petits : la réponse mathématique à <a href=\"#logica/paradojas/aquiles\">Achille et la tortue</a>."
  },
  {
   "y": "1854",
   "t": "George Boole transforme la logique en une algèbre de 0 et de 1."
  },
  {
   "y": "1879",
   "t": "Gottlob Frege invente une écriture logique pour tout raisonnement mathématique : ce qui s'est fait de plus proche de l'alphabet de Leibniz."
  },
  {
   "y": "1931",
   "t": "Kurt Gödel démontre une limite : dans tout système de ce genre, il y a des vérités qu'on ne peut pas démontrer à l'intérieur de celui-ci."
  },
  {
   "y": "1936",
   "t": "Alan Turing décrit la machine capable de faire n'importe quel calcul… et prouve qu'il existe des questions qu'aucune machine ne peut résoudre."
  },
  {
   "y": "1938",
   "t": "Claude Shannon montre que l'algèbre de Boole permet de concevoir des circuits électriques. L'ordinateur numérique naît."
  },
  {
   "y": "Aujourd'hui",
   "t": "L'intelligence artificielle rédige, traduit et converse en faisant des calculs avec des zéros et des uns."
  }
 ],
 "molino": {
  "titulo": "Mais… calculer, est-ce penser ?",
  "texto": "Ce qui est curieux, c'est que Leibniz lui-même pensait qu'<strong>une machine ne peut ni sentir ni percevoir</strong>. Il l'expliqua par une expérience de pensée :",
  "cita": "Et feignant qu'il y ait une machine, dont la structure fasse penser, sentir, avoir perception ; on pourra la concevoir agrandie, en conservant les mêmes proportions, en sorte qu'on y puisse entrer comme dans un moulin. Et cela posé, on ne trouvera en la visitant au dedans, que des pièces qui se poussent les unes les autres, et jamais de quoi expliquer une perception.",
  "citaPie": "Leibniz, Monadologie, § 17 (1714)"
 },
 "reverso": {
  "titulo": "L'envers du décor : un génie malmené",
  "intro": "Jusqu'ici, le Leibniz brillant. Mais sa vie finit mal : opposé à l'homme le plus puissant de la science anglaise et, après sa mort, devenu la risée de la moitié de l'Europe."
 },
 "newton": {
  "titulo": "La guerre du calcul : Newton, juge et partie",
  "pie": "Isaac Newton, président de la Royal Society depuis 1703.",
  "texto": [
   "Newton et Leibniz inventèrent le calcul infinitésimal <strong>chacun de son côté</strong>. Newton le possédait vers 1665-1666, mais ne le publia pas ; Leibniz y parvint en 1675 et le publia en 1684, avec une notation si bonne (dx, ∫) que c'est celle que nous utilisons encore. Aujourd'hui, les historiens s'accordent : aucun n'a copié l'autre.",
   "Mais l'affaire tourna alors à la guerre. En 1711, Leibniz demanda à la Royal Society de Londres de le défendre contre une accusation de plagiat. Le président de la Royal Society était… <strong>Newton</strong>. C'est lui qui choisit les membres de la commission, laquelle publia en 1712 son rapport, le <em>Commercium epistolicum</em>, sans demander à Leibniz sa version. Il donnait raison à Newton.",
   "En 1715 parut dans la revue de la Royal Society un compte rendu anonyme qui faisait l'éloge du rapport. Il avait été écrit par <strong>Newton lui-même</strong>. Et en 1726, dix ans après la mort de Leibniz, Newton supprima de sa grande œuvre, les <em>Principia</em>, le paragraphe où il reconnaissait que Leibniz était parvenu au calcul par ses propres moyens."
  ],
  "cuidado": "Pour être juste, Leibniz non plus ne joua pas franc jeu : en 1705, un compte rendu anonyme, écrit par lui, insinuait que Newton avait copié sa méthode, et en 1713 il fit circuler une autre feuille anonyme contre Newton. Ce qui les distingue, c'est le pouvoir : Newton fut <strong>juge et partie</strong>.",
  "final": "Leibniz mourut à Hanovre en 1716, tombé en disgrâce. Seul son secrétaire assista à son enterrement. Un témoin écrivit qu'on l'enterra « plutôt comme un voleur que comme ce qu'il était vraiment : l'orgueil de son pays ». Sa tombe resta sans pierre tombale pendant plus de cinquante ans."
 },
 "voltaire": {
  "titulo": "Candide : la moquerie de Voltaire",
  "pie": "Voltaire, qui publia Candide en 1759.",
  "texto": [
   "Dans la <em>Théodicée</em> (1710), Leibniz tenta de répondre à une très ancienne question : si Dieu est bon et tout-puissant, pourquoi le mal existe-t-il ? Sa réponse : Dieu a choisi, parmi tous les mondes possibles, <strong>le meilleur des mondes possibles</strong>. Non pas un monde sans maux, mais celui qui offre la meilleure combinaison possible de biens et de maux.",
   "Le 1er novembre 1755, un tremblement de terre, un raz-de-marée et un incendie détruisirent Lisbonne et tuèrent des dizaines de milliers de personnes. Voltaire écrivit un poème furieux : est-ce vraiment là le meilleur des mondes ? (Rousseau lui répondit que la nature n'avait pas construit vingt mille maisons de six et sept étages : une bonne part du désastre était l'œuvre des humains.)",
   "En 1759, Voltaire publia <em>Candide</em>, un court roman dans lequel un jeune naïf parcourt le monde en enchaînant les malheurs : guerres, naufrages, Inquisition, le tremblement de terre de Lisbonne lui-même. Son maître, <strong>Pangloss</strong>, répète devant chaque catastrophe que tout est pour le mieux dans le meilleur des mondes possibles."
  ],
  "cita": "Pangloss enseignait la métaphysico-théologo-cosmolonigologie. Il prouvait admirablement qu'il n'y a point d'effet sans cause, et que, dans ce meilleur des mondes possibles…",
  "citaPie": "Voltaire, Candide, chap. 1. Dans le texte original figure « cosmolonigologie » : on y trouve caché le mot « nigaud ».",
  "nombre": "Et Leibniz y est nommé : au chapitre 28, Pangloss, après avoir été pendu, disséqué et condamné aux galères, dit qu'il ne compte pas changer d'avis, parce que « Leibniz ne peut pas se tromper ».",
  "matiz": "Attention : Voltaire ridiculise une version simplifiée. Leibniz ne disait pas que chaque malheur est un bien, mais que l'ensemble du monde est le meilleur possible. Et il y a un détail curieux : Émilie du Châtelet, la scientifique avec qui Voltaire vécut des années, était leibnizienne et défendit ses idées dans un livre de physique (1740).",
  "pangloss": "Et le nom ? « Pangloss » vient du grec <em>pan</em> (tout) et <em>glossa</em> (langue) : « tout langue », c'est-à-dire un bavard. Certains y voient une moquerie de l'alphabet universel de Leibniz, la langue qui devait servir pour toutes les langues. C'est une lecture tentante, mais rien ne prouve que Voltaire l'ait pensé ainsi. Que faudrait-il pour le démontrer ?",
  "final": "Le roman s'achève sur une phrase devenue célèbre : « Il faut cultiver notre jardin. » Moins de théories sur l'ensemble du monde et plus de travail concret pour l'améliorer."
 },
 "preguntas": {
  "titulo": "Pour réfléchir",
  "lista": [
   "Quelqu'un peut-il être juge dans sa propre cause ? Qu'aurait dû faire la Royal Society ?",
   "Newton et Leibniz sont arrivés au même résultat séparément. Pourquoi crois-tu qu'il leur importait tant de savoir qui avait été le premier ?",
   "La moquerie de Voltaire est-elle juste si elle attaque une version simplifiée de Leibniz ? À quoi sert la satire en philosophie ?",
   "Pourrait-on résoudre un dilemme moral en calculant ? Quelle part pourrait se calculer et quelle part non ?",
   "Quand nous traduisons une idée en nombres, qu'y gagnons-nous et qu'y perdons-nous ?",
   "Si tu entrais dans le « moulin » d'une intelligence artificielle, que trouverais-tu ? Cela donne-t-il raison à Leibniz ?",
   "Leibniz voulait en finir avec les disputes. Un monde où l'on n'aurait jamais à discuter serait-il un bon monde ?"
  ]
 }
};
