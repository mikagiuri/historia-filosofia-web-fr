// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/laboratorio_induccion.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const IND = {
 "t": {
  "inLede": "Beaucoup de bons raisonnements ne sont pas déductifs : leurs prémisses peuvent être vraies et leur conclusion fausse. Ils ne sont pas mauvais pour autant ; ils sont plus ou moins forts. Ici, on apprend à reconnaître quatre façons de raisonner sans certitude et ce qui les rend plus fortes ou plus faibles.",
  "inTiposTit": "Quatre façons de raisonner sans certitude",
  "inHumeTit": "Le problème de Hume",
  "inHume": "David Hume s’est demandé ce qui nous autorise à passer de « le soleil s’est levé tous les jours » à « le soleil se lèvera demain ». Ce n’est pas une déduction : qu’il ne se lève pas ne serait pas une contradiction. Il ne vaut pas non plus de s’appuyer sur l’expérience (« l’induction a toujours fonctionné »), car c’est déjà une induction : l’argument tourne en rond (Enquête sur l’entendement humain, 1748, section IV, partie 2 ; déjà dans le Traité de la nature humaine, 1739, livre I, partie III, section 6). Sa « solution sceptique » est que nous attendons la même chose par habitude, non par raison : l’habitude est « le grand guide de la vie humaine » (Enquête, section V, partie 1). La question reste ouverte : il y a des réponses, mais aucune ne convainc tout le monde.",
  "inPeirceTit": "L'abduction de Peirce",
  "inPeirce": "Charles S. Peirce a appelé abduction l’inférence qui propose une hypothèse pour expliquer un fait surprenant : « On observe C, un fait surprenant ; mais si A était vrai, C serait normal ; donc il y a des raisons de soupçonner que A est vrai » (Collected Papers 5.189, de ses leçons de 1903). Pour Peirce, l’abduction consiste surtout à proposer une hypothèse qui mérite d’être vérifiée. Elle a la forme de l’affirmation du conséquent, elle n’est donc pas déductivement valide. On la rapproche souvent de l’« inférence à la meilleure explication », nom donné par Gilbert Harman en 1965, qui choisit la meilleure parmi les explications possibles ; mais ce n’est pas la même chose : Peirce s’intéresse à la proposition de l’hypothèse et Harman à son choix.",
  "inCasosTit": "Vingt cas",
  "inCasosAyuda": "Lis le cas, dis de quelle façon de raisonner il s'agit, puis réfléchis à ce qui le rendrait plus fort ou plus faible.",
  "inCaso": "Cas {n} sur {t}",
  "inQueTipo": "De quelle façon de raisonner s'agit-il ?",
  "inBien": "Bien : c'est {x}.",
  "inMal": "Non : c'est {x}.",
  "inPregunta": "Pour réfléchir :",
  "inVer": "Voir la réponse",
  "inRespuesta": "Réponse :",
  "inVecina": "Le sophisme voisin :",
  "inAnterior": "Précédent",
  "inSiguiente": "Suivant",
  "inAciertos": "Bonnes réponses : {a} sur {n}",
  "inLimiteTit": "Jusqu’où elle va",
  "inLimite": "Aucune de ces formes n’est déductivement valide, au sens du niveau 1 : il se peut toujours que les prémisses soient vraies et la conclusion fausse. Ce que l’on peut mesurer, c’est leur force, et pour cela il faut davantage que de la logique : des données, des probabilités et la connaissance du sujet. La science vit de ces raisonnements, mais elle les met à l’épreuve en cherchant le cas qui les réfute."
 },
 "tipos": [
  {
   "tipo": "gen",
   "nom": "Généralisation",
   "frase": "une généralisation",
   "dice": "De ce qui a été observé dans quelques cas, on passe à tous, à la plupart ou au cas suivant.",
   "fuerte": "Elle est d'autant plus forte que les cas sont nombreux, variés et représentatifs de l'ensemble ; et plus faible s'il existe un seul cas contraire."
  },
  {
   "tipo": "ana",
   "nom": "Analogie",
   "frase": "une analogie",
   "dice": "Deux choses se ressemblent beaucoup ; l'une a en plus une autre propriété ; donc l'autre l'a probablement aussi.",
   "fuerte": "Elle est plus forte si les ressemblances ont un rapport avec la propriété que l'on conclut, et plus faible s'il y a des différences qui, elles, ont un rapport."
  },
  {
   "tipo": "cau",
   "nom": "Inférence causale",
   "frase": "une inférence causale",
   "dice": "Deux choses vont ensemble (ou l'une vient après l'autre) ; donc l'une est la cause de l'autre.",
   "fuerte": "Elle est plus forte si l'on écarte les autres causes, le hasard et la cause commune, et mieux encore avec une expérience qui ne change qu'une seule chose."
  },
  {
   "tipo": "exp",
   "nom": "Inférence à la meilleure explication",
   "frase": "une inférence à la meilleure explication",
   "dice": "Face à un fait, on choisit l’hypothèse qui l’explique le mieux. On la rapproche souvent de l’abduction de Peirce, qui consiste surtout à proposer une hypothèse qui mérite d’être vérifiée.",
   "fuerte": "Elle est plus forte si l'hypothèse explique davantage de choses, est plus simple, s'accorde avec ce que l'on sait déjà et si l'on a écarté les hypothèses rivales."
  }
 ],
 "casos": [
  {
   "tipo": "gen",
   "txt": "Mes deux voisins de Burgos sont très sérieux. Les gens de Burgos sont sérieux.",
   "q": "Qu'est-ce qui la rendrait plus forte ?",
   "r": "Beaucoup plus de cas, de lieux et d'âges différents ; deux ne suffisent pas pour parler de toute une ville.",
   "vecina": "Généralisation hâtive (et stéréotype)."
  },
  {
   "tipo": "cau",
   "txt": "Depuis que je porte ce bracelet, j'ai moins mal au dos. Le bracelet me guérit.",
   "q": "Quelles autres explications y a-t-il ?",
   "r": "Que la douleur allait diminuer de toute façon, l'effet placebo, ou quelque chose d'autre qui a changé en même temps. Il faudrait comparer avec un groupe sans bracelet, sans que personne ne sache qui le porte.",
   "vecina": "Post hoc, ergo propter hoc (« après cela, donc à cause de cela »)."
  },
  {
   "tipo": "ana",
   "txt": "Ma grande sœur a réussi avec ce professeur en révisant une semaine avant ; moi aussi, je réussirai comme ça.",
   "q": "Qu'est-ce qui l'affaiblit ?",
   "r": "Les différences qui comptent : l'année, le programme, l'examen de cette année et la façon de travailler de chacune.",
   "vecina": "Fausse analogie."
  },
  {
   "tipo": "exp",
   "txt": "J'arrive chez moi, la porte a été forcée, l'ordinateur et les bijoux ont disparu, et il y a de la boue sur le tapis. Il y a eu un cambriolage.",
   "q": "Pourquoi est-ce la meilleure explication ?",
   "r": "Parce qu'elle explique tous les faits à la fois avec une seule hypothèse simple. Les autres (une étourderie, une farce) expliquent moins.",
   "vecina": "Affirmation du conséquent, si on la prend pour une preuve concluante."
  },
  {
   "tipo": "cau",
   "txt": "Dans les villages où il y a plus de cigognes, il naît plus d'enfants. Ce sont les cigognes qui apportent les bébés.",
   "q": "Qu'est-ce qui explique la corrélation ?",
   "r": "Une cause commune : à la campagne, il y a plus de cigognes et, à certaines époques et dans certains lieux, plus de naissances. Corrélation n'est pas causalité.",
   "vecina": "Confondre corrélation et causalité (cause commune)."
  },
  {
   "tipo": "gen",
   "txt": "On a interrogé 2 000 personnes choisies au hasard dans tout le pays, et 62 % préfèrent le train à l'avion pour les trajets de moins de 600 km. Donc la majorité de la population le préfère.",
   "q": "Qu'est-ce qui l'affaiblirait ?",
   "r": "Que l'échantillon ne soit pas choisi au hasard : par exemple, si l'on n'avait interrogé que dans des gares.",
   "vecina": "Échantillon biaisé."
  },
  {
   "tipo": "exp",
   "txt": "La nuit, les lumières s'allument toutes seules dans la vieille maison. Il y a des fantômes.",
   "q": "Pourquoi est-ce une mauvaise explication ?",
   "r": "Parce qu'il existe des explications plus simples, qui s'accordent avec ce que l'on sait déjà et que l'on peut vérifier (un minuteur, une panne électrique). Une hypothèse que l'on ne peut pas mettre à l'épreuve explique peu.",
   "vecina": "Appel à l'ignorance : « je ne sais pas ce que c'est, donc c'est un fantôme »."
  },
  {
   "tipo": "ana",
   "txt": "La Terre et Mars tournent autour du Soleil, ont des saisons, une atmosphère et de l'eau gelée. La Terre abrite la vie ; donc Mars probablement aussi.",
   "q": "Qu'est-ce qui l'affaiblit ?",
   "r": "Des différences qui ont à voir avec la vie : Mars a une atmosphère très ténue, n’a pas d’eau liquide en surface et reçoit beaucoup de radiations.",
   "vecina": "Fausse analogie."
  },
  {
   "tipo": "gen",
   "txt": "J’ai lancé la pièce cinq fois et elle est tombée sur face les cinq fois. Si la pièce n’est pas truquée, cette fois elle doit tomber sur pile.",
   "q": "Pourquoi est-ce un mauvais raisonnement ?",
   "r": "Si la pièce n’est pas truquée, les lancers sont indépendants : la pièce ne se souvient pas de ce qui est sorti et la probabilité de pile reste d’un demi. Et si cinq faces de suite font naître un soupçon, c’est un soupçon sur la pièce : si elle était truquée, ce qu’on attendrait, c’est une nouvelle face, non pile.",
   "vecina": "Sophisme du joueur."
  },
  {
   "tipo": "cau",
   "txt": "Les élèves qui prennent un bon petit-déjeuner ont de meilleures notes. Bien déjeuner le matin améliore les notes.",
   "q": "Que faudrait-il écarter ?",
   "r": "Que les deux choses dépendent d'une troisième (horaires, ambiance à la maison, heures de sommeil). Une expérience qui ne change que le petit-déjeuner permettrait de trancher.",
   "vecina": "Cause commune."
  },
  {
   "tipo": "exp",
   "txt": "L'orbite d'Uranus ne suivait pas exactement les lois de Newton. Le Verrier a supposé qu'une autre planète l'attirait, a calculé où elle devait se trouver et, en 1846, on a découvert Neptune.",
   "q": "Qu'est-ce qui a rendu cette hypothèse forte ?",
   "r": "Elle a prédit quelque chose de nouveau que l'on a pu vérifier : où regarder. Une bonne explication ne se contente pas de s'accorder avec ce que l'on connaît : elle prend des risques.",
   "vecina": "Aucun : c'est le modèle d'une abduction réussie."
  },
  {
   "tipo": "ana",
   "txt": "Ce médicament a fonctionné sur des souris atteintes de la même maladie ; il fonctionnera probablement chez l'être humain.",
   "q": "Qu'est-ce qui la rendrait plus forte ?",
   "r": "Que le mécanisme de la maladie soit le même chez la souris et chez l'être humain et, surtout, des essais sur des personnes. Beaucoup de médicaments qui fonctionnent sur les souris échouent ensuite.",
   "vecina": "Fausse analogie."
  },
  {
   "tipo": "cau",
   "txt": "Plus il y a de pompiers sur un incendie, plus il y a de dégâts. Les pompiers causent les dégâts.",
   "q": "Qu’y a-t-il derrière la corrélation ?",
   "r": "Une cause commune : un grand incendie cause à la fois plus de dégâts et la venue de plus de pompiers. Les pompiers ne causent pas les dégâts ; les deux faits dépendent de la taille de l’incendie.",
   "vecina": "Confondre corrélation et causalité (cause commune)."
  },
  {
   "tipo": "gen",
   "txt": "Le médicament a fait baisser la fièvre chez 85 % des 3 000 patients de l'essai. Il fera probablement baisser la tienne.",
   "q": "Qu'est-ce qui l'affaiblirait ?",
   "r": "Que tu appartiennes à un groupe qui ne figurait pas dans l'essai (par ton âge ou une autre maladie), ou que l'essai n'ait pas eu de groupe témoin.",
   "vecina": "Accident (secundum quid) : appliquer à un cas particulier ce qui vaut en général."
  },
  {
   "tipo": "ana",
   "txt": "Un État est comme un navire : il faut un capitaine qui sache naviguer, et on ne vote pas pour savoir qui tient la barre. Donc l'État doit être gouverné par ceux qui savent (Platon, République VI).",
   "q": "Où peut-elle échouer ?",
   "r": "Dans le fait que la destination du navire est fixée par les passagers, non par le capitaine : en politique, on discute de l'endroit où aller, pas seulement de la manière d'y aller. C'est un débat ouvert sur la démocratie.",
   "vecina": "Fausse analogie (selon ses critiques)."
  },
  {
   "tipo": "exp",
   "txt": "Le patient a de la fièvre, il tousse et il a perdu l'odorat ; il y a une épidémie de grippe en ville. C'est la grippe.",
   "q": "Qu'est-ce qui l'affaiblirait ?",
   "r": "Qu'une autre maladie explique mieux les symptômes (la perte d'odorat oriente aussi vers d'autres virus). C'est pourquoi on fait des tests pour écarter les hypothèses rivales.",
   "vecina": "Conclusion hâtive : ne pas écarter les hypothèses rivales."
  },
  {
   "tipo": "gen",
   "txt": "Tous les cygnes que l'on avait vus en Europe pendant des siècles étaient blancs. Donc tous les cygnes sont blancs.",
   "q": "Qu'est-il arrivé à cette généralisation ?",
   "r": "En 1697, on a vu des cygnes noirs en Australie : un seul cas contraire suffit à réfuter un « tous », quel que soit le nombre de cas favorables.",
   "vecina": "Aucune : des siècles d’observation ne sont pas une généralisation hâtive. C’est la limite de toute induction : aucun nombre de cas favorables n’assure un « tous » (Hume), et un seul cas contraire suffit à le réfuter (Popper)."
  },
  {
   "tipo": "exp",
   "txt": "L'orbite de Mercure ne suivait pas non plus Newton. Le Verrier a supposé une autre planète, Vulcain, plus proche du Soleil. On ne l'a jamais trouvée.",
   "q": "Qu'est-ce que ce cas enseigne, comparé à celui de Neptune ?",
   "r": "Que la même façon de raisonner peut échouer. La bonne explication s'est révélée être une autre : la relativité générale d'Einstein (1915) a expliqué l'orbite sans aucune nouvelle planète.",
   "vecina": "Aucune au moment de la proposer : supposer Vulcain était aussi raisonnable que supposer Neptune. Maintenir Vulcain après ne l’avoir pas trouvé, en inventant des excuses seulement pour sauver la théorie, aurait été une hypothèse ad hoc."
  },
  {
   "tipo": "cau",
   "txt": "Semmelweis a observé à Vienne (1847) que dans le service des médecins, qui venaient de pratiquer des autopsies, il mourait beaucoup plus de parturientes que dans celui des sages-femmes. Il a fait se laver les mains à la chaux chlorée, et la mortalité a chuté.",
   "q": "Pourquoi est-ce une inférence causale forte ?",
   "r": "Parce qu'il a changé une seule chose (le lavage des mains) et que l'effet est apparu ; de plus, il a écarté les autres explications une à une. Malgré cela, ses collègues ont mis des années à l'accepter.",
   "vecina": "Aucun : c'est un bon exemple de méthode."
  },
  {
   "tipo": "ana",
   "txt": "Une montre a des pièces ajustées à une fin, et c’est un horloger qui l’a faite. L’œil a des pièces ajustées à une fin ; donc c’est un concepteur qui l’a fait (William Paley, Théologie naturelle, 1802).",
   "q": "Quelles objections lui a-t-on faites ?",
   "r": "Avant Paley, Hume (Dialogues sur la religion naturelle, 1779) avait déjà objecté à l’argument du dessein, dans la version que défend le personnage de Cléanthe : le monde ressemble peu à une machine et l’analogie ne dit rien du concepteur. Ensuite, Darwin (1859) a proposé une autre explication de l’ajustement. C’est un débat ouvert en philosophie de la religion, non une question close par la logique.",
   "vecina": "Fausse analogie (selon ses critiques)."
  }
 ]
};
