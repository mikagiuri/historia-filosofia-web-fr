// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/juego_aristoteles.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const JUEGO_ARIS = {
 "meta": {
  "imgBase": "media/juegos/aristoteles/",
  "etapas": [
   {
    "id": "j",
    "label": "Jeunesse",
    "rondas": 3
   },
   {
    "id": "m",
    "label": "Maturité",
    "rondas": 6,
    "paso": {
     "hac": 3,
     "t": "Les années passent : tes terres et ton travail rapportent."
    }
   },
   {
    "id": "v",
    "label": "Vieillesse",
    "rondas": 3,
    "paso": {
     "hac": 1,
     "sal": -1,
     "t": "La vieillesse arrive : des rentes mises de côté, mais le corps souffre."
    }
   }
  ]
 },
 "stats": [
  {
   "k": "sal",
   "em": "🏋️",
   "label": "Santé",
   "niveles": [
    [
     2,
     "à bout"
    ],
    [
     4,
     "fragile"
    ],
    [
     7,
     "bonne"
    ],
    [
     99,
     "robuste"
    ]
   ]
  },
  {
   "k": "hac",
   "em": "💰",
   "label": "Fortune",
   "niveles": [
    [
     2,
     "au bord de la ruine"
    ],
    [
     4,
     "maigre"
    ],
    [
     7,
     "aisée"
    ],
    [
     99,
     "riche"
    ]
   ]
  },
  {
   "k": "car",
   "em": "🧠",
   "label": "Caractère",
   "niveles": [
    [
     2,
     "dégradé"
    ],
    [
     4,
     "vacillant"
    ],
    [
     7,
     "ferme"
    ],
    [
     99,
     "exemplaire"
    ]
   ]
  },
  {
   "k": "rep",
   "em": "🏛️",
   "label": "Réputation",
   "niveles": [
    [
     2,
     "méprisée"
    ],
    [
     4,
     "discrète"
    ],
    [
     7,
     "respectée"
    ],
    [
     99,
     "célèbre"
    ]
   ]
  },
  {
   "k": "ene",
   "em": "⚔️",
   "label": "Ennemis",
   "niveles": [
    [
     1,
     "aucun"
    ],
    [
     3,
     "quelques-uns"
    ],
    [
     5,
     "beaucoup"
    ],
    [
     7,
     "puissants"
    ],
    [
     99,
     "ils te veulent morts"
    ]
   ]
  },
  {
   "k": "phr",
   "em": "🧭",
   "label": "Prudence",
   "niveles": [
    [
     3,
     "impulsive"
    ],
    [
     6,
     "sensée"
    ],
    [
     99,
     "très prudente"
    ]
   ]
  }
 ],
 "chars": [
  {
   "id": "socrates",
   "name": "Socrate",
   "orient": "Contemplative",
   "sal": 8,
   "hac": 4,
   "car": 8,
   "rep": 4,
   "ene": 2,
   "phr": 8,
   "virtud": "Pauvreté volontaire",
   "virtudT": "L'argent lui importe peu : il perd moitié moins que la normale quand cela lui coûte de l'argent.",
   "debilidad": "Incompris",
   "debilidadT": "Chaque vérité dite en public lui attire plus d'ennemis qu'aux autres.",
   "mods": {
    "verdad": {
     "ene": 1
    }
   },
   "mult": {
    "hac": {
     "down": 0.5
    }
   },
   "perfil": "Pauvre, sain comme un soldat et très prudent ; la ville le connaît plus comme un importun que comme un sage.",
   "frase": "Je sais seulement que je ne sais rien.",
   "destino": "Condamné à boire la ciguë en 399 av. J.-C., accusé d'impiété et de corrompre la jeunesse ; il refusa de s'évader de prison."
  },
  {
   "id": "hipatia",
   "name": "Hypatie",
   "orient": "Contemplative",
   "sal": 6,
   "hac": 6,
   "car": 8,
   "rep": 7,
   "ene": 2,
   "phr": 7,
   "virtud": "Prestige",
   "virtudT": "Ses élèves la respectent : elle gagne de la réputation plus facilement.",
   "debilidad": "Méfiance sociale",
   "debilidadT": "Tout ce qu'elle fait au vu de tous lui attire des ennemis.",
   "mods": {
    "publico": {
     "ene": 1
    }
   },
   "mult": {
    "rep": {
     "up": 1.5
    }
   },
   "perfil": "Maîtresse respectée d'une famille aisée ; sa renommée la protège… et l'expose.",
   "frase": "Le savoir est ma force.",
   "destino": "Assassinée en 415 par une foule de chrétiens à Alexandrie, en plein conflit entre l'évêque Cyrille et le préfet Oreste."
  },
  {
   "id": "platon",
   "name": "Platon",
   "orient": "Contemplative",
   "sal": 7,
   "hac": 8,
   "car": 7,
   "rep": 6,
   "ene": 1,
   "phr": 7,
   "virtud": "Idéalisme",
   "virtudT": "Agir avec justice lui renforce le caractère plus qu'aux autres.",
   "debilidad": "Rigidité",
   "debilidadT": "Les pactes et les compromissions lui usent le caractère.",
   "mods": {
    "justo": {
     "car": 1
    },
    "pacto": {
     "car": -1
    }
   },
   "perfil": "Aristocrate riche et bien relationné, avec peu d'ennemis et un projet : que les sages gouvernent.",
   "frase": "Que gouverne celui qui aime la sagesse.",
   "destino": "Il se rendit trois fois à Syracuse pour éduquer ses tyrans et, selon la tradition, lors de l'un de ces voyages, on le vendit comme esclave. Il mourut très âgé à Athènes, à la tête de l'Académie."
  },
  {
   "id": "protagoras",
   "name": "Protagoras",
   "orient": "Discursive",
   "sal": 6,
   "hac": 8,
   "car": 6,
   "rep": 8,
   "ene": 2,
   "phr": 6,
   "sinImg": true,
   "virtud": "Maître de rhétorique",
   "virtudT": "Il se fait payer cher pour enseigner : tout ce qu'il fait au vu de tous lui rapporte de l'argent.",
   "debilidad": "Agnostique",
   "debilidadT": "Ce qu'il dit des dieux scandalise : chaque vérité dérangeante lui attire plus d'ennemis.",
   "mods": {
    "publico": {
     "hac": 1
    },
    "verdad": {
     "ene": 1
    }
   },
   "perfil": "Le sophiste le plus célèbre et le mieux payé de Grèce ; ami de Périclès et suspect aux yeux des dévots.",
   "frase": "L'homme est la mesure de toutes choses.",
   "destino": "Périclès lui confia les lois de la colonie de Thourioi. Selon la tradition, on l'accusa d'impiété à cause de son livre Sur les dieux, on brûla ses livres sur l'agora et il mourut dans un naufrage en fuyant Athènes."
  },
  {
   "id": "diogenes",
   "name": "Diogène",
   "orient": "Contemplative",
   "sal": 8,
   "hac": 2,
   "car": 7,
   "rep": 4,
   "ene": 2,
   "phr": 6,
   "sinImg": true,
   "noRuina": true,
   "virtud": "Autarcie",
   "virtudT": "Il n'a besoin de presque rien : se retrouver sans argent ne l'élimine pas, et il perd moitié moins que les autres.",
   "debilidad": "Impudence (anaídeia)",
   "debilidadT": "Il se moque de tout le monde : chaque vérité dite en public lui attire des ennemis et lui retire de la réputation.",
   "mods": {
    "verdad": {
     "ene": 1,
     "rep": -1
    }
   },
   "mult": {
    "hac": {
     "down": 0.5
    }
   },
   "perfil": "Il vit dans un tonneau, mendie et se rit des conventions. Il est sain et libre, et n'a presque rien à perdre.",
   "frase": "Ôte-toi de mon soleil.",
   "destino": "Il vécut à Athènes et à Corinthe, pauvre par choix et se moquant des conventions. Il mourut très âgé à Corinthe vers 323 av. J.-C. ; selon la tradition, la même année qu'Alexandre."
  },
  {
   "id": "aspasia",
   "name": "Aspasie",
   "orient": "Discursive",
   "sal": 6,
   "hac": 6,
   "car": 6,
   "rep": 5,
   "ene": 2,
   "phr": 6,
   "virtud": "Éloquence",
   "virtudT": "Ses discours convainquent : elle gagne de la réputation plus facilement.",
   "debilidad": "Dépendance",
   "debilidadT": "Étrangère et femme, elle dépend de protecteurs : quand elle perd de la réputation, elle perd le double.",
   "mult": {
    "rep": {
     "up": 1.5,
     "down": 2
    }
   },
   "perfil": "Étrangère cultivée et éloquente dans une ville qui ne laisse pas voter les femmes ; sa position dépend des autres.",
   "frase": "Les mots aussi ont du pouvoir.",
   "destino": "Compagne de Périclès. Selon Plutarque, on l'accusa d'impiété et Périclès pleura devant le jury pour la sauver."
  },
  {
   "id": "aristofanes",
   "name": "Aristophane",
   "orient": "Discursive",
   "sal": 6,
   "hac": 6,
   "car": 5,
   "rep": 6,
   "ene": 2,
   "phr": 5,
   "virtud": "Esprit et satire",
   "virtudT": "Dire des vérités en public lui donne de la renommée…",
   "debilidad": "Mordant",
   "debilidadT": "…et aussi des ennemis.",
   "mods": {
    "verdad": {
     "rep": 1,
     "ene": 1
    }
   },
   "perfil": "Auteur comique à succès, ni riche ni pauvre, avec une langue que la ville applaudit et que les puissants redoutent.",
   "frase": "Le rire dit aussi la vérité.",
   "destino": "Cléon le dénonça pour avoir ridiculisé Athènes devant les étrangers ; il continua d'écrire des comédies jusqu'à sa vieillesse."
  },
  {
   "id": "pericles",
   "name": "Périclès",
   "orient": "Politique",
   "sal": 7,
   "hac": 8,
   "car": 6,
   "rep": 9,
   "ene": 4,
   "phr": 7,
   "sinImg": true,
   "riesgo": 0.1,
   "virtud": "Prudence politique",
   "virtudT": "Aristote le cite comme exemple d'homme prudent : ses décisions risquées réussissent plus souvent.",
   "debilidad": "Cible de ses rivaux",
   "debilidadT": "Comme ils ne peuvent rien contre lui, ils s'attaquent aux siens : tout ce qu'il fait en public lui attire des ennemis.",
   "mods": {
    "publico": {
     "ene": 1
    }
   },
   "perfil": "Aristocrate riche, élu stratège année après année ; l'homme politique le plus puissant d'Athènes, entouré d'amis… et d'accusations contre eux.",
   "frase": "Nous aimons la beauté avec simplicité et le savoir sans mollesse.",
   "destino": "Il dirigea Athènes pendant une trentaine d'années, connues comme le « siècle de Périclès ». Ses rivaux accusèrent Phidias, Anaxagore et Aspasie. Il mourut en 429 av. J.-C. de la peste, au début de la guerre du Péloponnèse."
  },
  {
   "id": "aristides",
   "name": "Aristide",
   "orient": "Politique",
   "sal": 7,
   "hac": 6,
   "car": 9,
   "rep": 7,
   "ene": 3,
   "phr": 6,
   "sinImg": true,
   "ostracismo": 0.7,
   "virtud": "Le Juste",
   "virtudT": "Agir avec justice lui donne de la renommée, et agir injustement lui pèse plus qu'à personne.",
   "debilidad": "Justice sans concessions",
   "debilidadT": "Chaque acte juste lui attire des ennemis, et la ville se lasse de l'entendre appeler « le Juste » : s'il a beaucoup de renommée, l'ostracisme le menace doublement.",
   "mods": {
    "justo": {
     "rep": 1,
     "ene": 1
    },
    "injusto": {
     "car": -1
    }
   },
   "perfil": "Aristocrate de fortune modeste et stratège à Marathon. Tout Athènes l'appelle « le Juste », et cela agace déjà certains.",
   "frase": "Rien ne serait plus profitable… ni plus injuste.",
   "destino": "Condamné à l'ostracisme en 482 av. J.-C. Selon Plutarque, un paysan qui ne savait pas écrire lui demanda de graver lui-même « Aristide » sur l'ostrakon, parce qu'il en avait assez de l'entendre appeler « le Juste ». Il revint en 480 pour combattre à Salamine et à Platées, fixa avec équité le tribut de la Ligue de Délos et mourut si pauvre que la ville dota ses filles."
  },
  {
   "id": "alcibiades",
   "name": "Alcibiade",
   "orient": "Politique",
   "sal": 8,
   "hac": 9,
   "car": 4,
   "rep": 8,
   "ene": 3,
   "phr": 3,
   "virtud": "Charisme et audace",
   "virtudT": "Il gagne de la réputation plus facilement que personne.",
   "debilidad": "Hédonisme",
   "debilidadT": "Les plaisirs lui abîment davantage le caractère et la santé.",
   "mods": {
    "placer": {
     "car": -1,
     "sal": -1
    }
   },
   "mult": {
    "rep": {
     "up": 1.5
    }
   },
   "perfil": "Jeune, riche, beau et célèbre ; peu prudent et entouré d'envieux.",
   "frase": "Mon éclat guidera les autres.",
   "destino": "Accusé de sacrilège, il passa à Sparte, puis en Perse et revint à Athènes ; il mourut assassiné en Phrygie en 404 av. J.-C."
  },
  {
   "id": "cleon",
   "name": "Cléon",
   "orient": "Politique",
   "sal": 6,
   "hac": 7,
   "car": 3,
   "rep": 7,
   "ene": 3,
   "phr": 3,
   "virtud": "Éloquence populaire",
   "virtudT": "Quand il gagne de la réputation, il en gagne le double…",
   "debilidad": "Démagogie",
   "debilidadT": "…et quand il la perd, il perd aussi le double.",
   "mult": {
    "rep": {
     "up": 2,
     "down": 2
    }
   },
   "perfil": "Commerçant enrichi qui commande à l'assemblée en criant ; peu de caractère et beaucoup d'ambition.",
   "frase": "Le peuple veut de la fermeté.",
   "destino": "Il mourut en 422 av. J.-C. à la bataille d'Amphipolis, à la tête de l'armée athénienne."
  },
  {
   "id": "critias",
   "name": "Critias",
   "orient": "Politique",
   "sal": 6,
   "hac": 8,
   "car": 3,
   "rep": 5,
   "ene": 3,
   "phr": 4,
   "virtud": "Ruse politique",
   "virtudT": "S'imposer par la force lui rapporte plus d'argent…",
   "debilidad": "Tyrannie",
   "debilidadT": "…mais lui crée plus d'ennemis.",
   "mods": {
    "fuerza": {
     "hac": 1,
     "ene": 1
    }
   },
   "perfil": "Aristocrate riche, cultivé et rancunier envers la démocratie.",
   "frase": "L'ordre s'impose.",
   "destino": "Chef des Trente Tyrans en 404 av. J.-C. ; il mourut l'année suivante en combattant les démocrates à Munichie."
  },
  {
   "id": "trasimaco",
   "name": "Thrasymaque",
   "orient": "Politique",
   "sal": 6,
   "hac": 7,
   "car": 4,
   "rep": 5,
   "ene": 2,
   "phr": 3,
   "virtud": "Ruse",
   "virtudT": "Il gagne facilement de l'argent quand il joue sale…",
   "debilidad": "Cynisme moral",
   "debilidadT": "…mais, comme il ne croit pas en la justice, bien agir le renforce deux fois moins.",
   "mods": {
    "injusto": {
     "hac": 1
    }
   },
   "mult": {
    "car": {
     "up": 0.5
    }
   },
   "perfil": "Sophiste à succès qui se fait payer cher ; il pense que la justice est ce qui convient au plus fort.",
   "frase": "La justice sert le puissant.",
   "destino": "Sophiste de Chalcédoine surtout connu par la République de Platon ; nous savons à peine comment s'est terminée sa vie."
  },
  {
   "id": "alejandro",
   "name": "Alexandre le Grand",
   "orient": "Politique",
   "sal": 9,
   "hac": 10,
   "car": 4,
   "rep": 8,
   "ene": 4,
   "phr": 4,
   "virtud": "Ambition et commandement",
   "virtudT": "S'imposer par la force lui donne de la renommée.",
   "debilidad": "Démesure",
   "debilidadT": "Il est incapable de choisir les options intermédiaires où les autres se réfugient.",
   "mods": {
    "fuerza": {
     "rep": 1
    }
   },
   "bloquea": [
    "medida"
   ],
   "perfil": "Héritier d'un royaume, richissime, fort et célèbre, avec des ennemis dès le berceau.",
   "frase": "Le monde ne suffit pas.",
   "destino": "Il conquit un empire jusqu'en Inde et mourut à Babylone en 323 av. J.-C., à 32 ans."
  }
 ],
 "dilemmas": [
  {
   "id": "efebo",
   "etapa": "j",
   "virtue": "Courage (andreía)",
   "sit": "Tu as dix-huit ans et tu commences ton service comme éphèbe : deux ans de garde aux frontières de l'Attique.",
   "opts": [
    {
     "t": "T'entraîner à fond et te faire des amis à la garnison.",
     "sal": 2,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "Tu reviens fort et avec des amis qui te défendront."
    },
    {
     "t": "Obtenir une affectation confortable grâce aux contacts de ta famille.",
     "rep": -1,
     "car": -1,
     "hac": 1,
     "r": "Tu t'épargnes le froid et les marches, mais les autres le savent."
    },
    {
     "t": "Prouver ta valeur en cherchant la bagarre avec les bergers de la frontière.",
     "sal": -2,
     "rep": 1,
     "ene": 1,
     "car": -1,
     "tags": [
      "fuerza"
     ],
     "r": "Tu gagnes une réputation de brave… et une cicatrice inutile."
    },
    {
     "t": "Profiter des gardes de nuit pour lire et discuter avec d'autres éphèbes.",
     "phr": 2,
     "car": 1,
     "sal": -1,
     "r": "Tu dors peu, mais tu apprends à réfléchir avant d'agir."
    }
   ]
  },
  {
   "id": "maestro",
   "etapa": "j",
   "virtue": "Prudence (phrónesis)",
   "sit": "Tu veux te former. Sur l'agora, un sophiste se fait payer cher pour t'apprendre à gagner tes procès ; un philosophe ne demande rien, mais pose des questions qui dérangent les puissants.",
   "hist": "Protagoras fit payer jusqu'à 100 mines pour un cours ; Socrate se vantait de ne jamais se faire payer.",
   "opts": [
    {
     "t": "Payer le sophiste : la rhétorique ouvre toutes les portes.",
     "hac": -3,
     "rep": 2,
     "phr": 1,
     "r": "Tu apprends à convaincre n'importe qui. Ta bourse s'en ressent."
    },
    {
     "t": "Suivre le philosophe, même si on te voit avec quelqu'un de mal vu.",
     "car": 1,
     "phr": 2,
     "ene": 1,
     "tags": [
      "verdad"
     ],
     "r": "Tu apprends à t'examiner toi-même ; certains parents ne veulent plus que leurs fils te fréquentent."
    },
    {
     "t": "Ni l'un ni l'autre : apprendre le métier de ta famille.",
     "hac": 2,
     "phr": 1,
     "rep": -1,
     "r": "Tu gagnes de l'argent et un métier, mais sur l'agora personne ne sait qui tu es."
    },
    {
     "t": "Les deux à la fois, en travaillant le jour pour payer le sophiste.",
     "hac": -2,
     "sal": -2,
     "phr": 2,
     "rep": 1,
     "r": "Tu apprends tout… et tu finis épuisé."
    }
   ]
  },
  {
   "id": "simposio",
   "etapa": "j",
   "virtue": "Tempérance (sophrosýne)",
   "sit": "Lors d'un symposion chez un riche, le vin coule sans être coupé d'eau et on te défie de boire jusqu'à l'aube.",
   "hist": "Les Grecs jugeaient barbare de boire le vin pur ; dans le Banquet de Platon, Socrate boit toute la nuit sans s'enivrer.",
   "opts": [
    {
     "t": "Accepter le défi et le gagner.",
     "sal": -2,
     "rep": 2,
     "car": -1,
     "tags": [
      "placer"
     ],
     "r": "Tu es la légende de la nuit ; ton foie n'est pas du même avis."
    },
    {
     "t": "Boire peu et rester pour la conversation.",
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Tu repars la tête claire et avec deux nouveaux amis."
    },
    {
     "t": "Partir en disant à voix haute ce que tu penses de ces fêtes.",
     "rep": -2,
     "ene": 1,
     "car": -1,
     "r": "Aristote qualifierait lui aussi cette insensibilité de vice : on te prend pour un grincheux."
    },
    {
     "t": "Demander à être le symposiarque et fixer toi-même à quel point on coupe le vin.",
     "phr": 1,
     "risk": true,
     "win": {
      "rep": 2,
      "car": 1,
      "r": "Tu diriges la soirée avec grâce : tout le monde veut te réinviter."
     },
     "lose": {
      "rep": -2,
      "r": "On te prend pour un pédant et on te hue."
     }
    }
   ]
  },
  {
   "id": "herencia",
   "etapa": "j",
   "virtue": "Générosité (eleutheriótes)",
   "sit": "Ton père meurt. Il te laisse des oliveraies en Attique et des dettes envers plusieurs voisins.",
   "opts": [
    {
     "t": "Payer d'abord toutes les dettes, même s'il ne te reste presque rien.",
     "hac": -2,
     "car": 2,
     "rep": 1,
     "tags": [
      "justo"
     ],
     "r": "Tu restes à court d'argent, mais avec ta parole."
    },
    {
     "t": "Vendre les oliveraies et vivre de rentes en ville.",
     "hac": 1,
     "rep": 1,
     "phr": -1,
     "r": "Vie confortable en ville ; les créanciers devront attendre."
    },
    {
     "t": "Emprunter davantage pour acheter un navire marchand.",
     "risk": true,
     "win": {
      "hac": 5,
      "r": "Le navire revient chargé de blé de la mer Noire."
     },
     "lose": {
      "hac": -4,
      "r": "Le navire sombre au large de l'Eubée avec toute sa cargaison."
     }
    },
    {
     "t": "Ne pas payer les voisins les plus pauvres : ils ne peuvent pas t'attaquer en justice.",
     "hac": 2,
     "car": -3,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "Tu gagnes quelques drachmes et tu perds tes voisins."
    }
   ]
  },
  {
   "id": "aval",
   "etapa": "j",
   "virtue": "Amitié (philía)",
   "sit": "Un ami d'enfance te demande de te porter garant d'un énorme prêt pour son affaire d'armement naval.",
   "opts": [
    {
     "t": "Te porter garant de tout : entre amis, tout est commun.",
     "car": 1,
     "risk": true,
     "win": {
      "rep": 1,
      "hac": 1,
      "r": "L'affaire marche bien et ton ami t'en est reconnaissant toute sa vie."
     },
     "lose": {
      "hac": -5,
      "r": "L'affaire fait faillite et le créancier vient te trouver."
     }
    },
    {
     "t": "Refuser : l'amitié ne doit pas se mêler à l'argent.",
     "car": -1,
     "rep": -1,
     "r": "Ton ami comprend… à moitié."
    },
    {
     "t": "Lui prêter seulement ce que tu peux perdre sans te ruiner.",
     "hac": -2,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Cela ne le sauve pas entièrement, mais tu ne l'as pas laissé tomber."
    },
    {
     "t": "Te porter garant en échange de la moitié de l'affaire.",
     "car": -1,
     "risk": true,
     "win": {
      "hac": 3,
      "r": "Bonne affaire… même si l'amitié n'est plus la même."
     },
     "lose": {
      "hac": -4,
      "r": "Faillite, et en plus ton ami t'en veut."
     }
    }
   ]
  },
  {
   "id": "delion",
   "etapa": "j",
   "virtue": "Courage (andreía)",
   "sit": "Première bataille comme hoplite. La phalange commence à céder et l'homme qui était à ta gauche tombe, blessé.",
   "hist": "À la bataille de Délion (424 av. J.-C.), selon le récit d'Alcibiade dans le Banquet, Socrate se retira sans perdre son calme et couvrit ses compagnons.",
   "opts": [
    {
     "t": "Jeter ton bouclier et courir.",
     "rep": -3,
     "car": -2,
     "r": "Tu sauves ta vie, mais à Athènes il n'y a pas de plus grande honte que de perdre son bouclier."
    },
    {
     "t": "Charger seul contre l'ennemi.",
     "tags": [
      "fuerza"
     ],
     "muerte": 0.12,
     "muerteT": "Tu tombes, transpercé par une lance thébaine.",
     "risk": true,
     "win": {
      "rep": 3,
      "car": 1,
      "r": "Tu perces la ligne ennemie et tout le monde chante ton nom."
     },
     "lose": {
      "sal": -4,
      "r": "On t'encercle ; tu t'en sors vivant par miracle."
     }
    },
    {
     "t": "Te replier en bon ordre, en couvrant le blessé.",
     "sal": -1,
     "car": 2,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "Tu mets le blessé en sécurité. C'est ainsi, et non autrement, qu'on est courageux."
    },
    {
     "t": "Rester immobile, le bouclier levé, en attendant des ordres qui n'arrivent pas.",
     "sal": -2,
     "r": "Tu survis sans gloire et avec une blessure au bras."
    }
   ]
  },
  {
   "id": "olimpia",
   "etapa": "j",
   "virtue": "Tempérance (sophrosýne)",
   "sit": "Tu es sélectionné pour concourir à Olympie. Un entraîneur te propose un régime extrême ; un autre, de payer les juges.",
   "hist": "Avec les amendes infligées aux tricheurs, on élevait à Olympie des statues de Zeus, les Zanès, portant le nom du tricheur gravé.",
   "opts": [
    {
     "t": "T'entraîner dur, mais avec du repos.",
     "sal": 1,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "Tu ne gagnes pas, mais tu fais bonne figure."
    },
    {
     "t": "Régime extrême et entraînement sans repos.",
     "risk": true,
     "win": {
      "rep": 3,
      "r": "Couronne d'olivier ! Ta cité te nourrira gratuitement toute ta vie."
     },
     "lose": {
      "sal": -3,
      "r": "Tu te blesses avant la finale."
     }
    },
    {
     "t": "Soudoyer les juges.",
     "car": -2,
     "tags": [
      "injusto"
     ],
     "risk": true,
     "win": {
      "rep": 3,
      "hac": -2,
      "r": "Tu gagnes… et tu sais comment."
     },
     "lose": {
      "rep": -4,
      "hac": -3,
      "ene": 1,
      "r": "On te démasque : ton nom reste gravé sur une statue de la honte."
     }
    },
    {
     "t": "Renoncer pour te consacrer à l'étude.",
     "phr": 1,
     "rep": -1,
     "r": "Ta famille ne comprend pas."
    }
   ]
  },
  {
   "id": "arginusas",
   "etapa": "m",
   "virtue": "Justice (dikaiosýne)",
   "sit": "Le sort te désigne pour présider l'assemblée. La foule exige de juger en même temps, en un seul vote, les généraux qui n'ont pas secouru les naufragés. C'est illégal.",
   "hist": "Arginuses, 406 av. J.-C. : Socrate, qui présidait ce jour-là, refusa de le soumettre au vote. Les généraux furent exécutés quand même.",
   "opts": [
    {
     "t": "Le soumettre au vote : le peuple est souverain.",
     "rep": 1,
     "car": -3,
     "r": "Les généraux sont exécutés. L'année suivante, la cité se repent."
    },
    {
     "t": "Refuser de voter une mesure illégale, même sous la menace.",
     "car": 3,
     "ene": 3,
     "rep": -1,
     "tags": [
      "justo",
      "publico"
     ],
     "r": "On te traite de traître. Tu ne cèdes pas."
    },
    {
     "t": "Feindre d'être malade et laisser un autre présider.",
     "car": -1,
     "rep": -1,
     "r": "Tu échappes à l'ennui, mais pas à ta conscience."
    },
    {
     "t": "Proposer des procès séparés avec des arguments légaux.",
     "phr": 1,
     "tags": [
      "justo"
     ],
     "risk": true,
     "win": {
      "car": 2,
      "rep": 2,
      "ene": 1,
      "r": "Tu parviens à calmer l'assemblée… pour un jour."
     },
     "lose": {
      "ene": 2,
      "rep": -1,
      "r": "Personne ne t'écoute et on t'inscrit sur la liste des suspects."
     }
    }
   ]
  },
  {
   "id": "leon",
   "etapa": "m",
   "virtue": "Justice (dikaiosýne)",
   "sit": "Le gouvernement oligarchique t'ordonne d'arrêter Léon de Salamine, un innocent, pour s'emparer de ses biens. Il veut te salir les mains.",
   "hist": "En 404 av. J.-C., les Trente donnèrent cet ordre à Socrate et à quatre autres. Les autres y allèrent ; Socrate rentra chez lui.",
   "opts": [
    {
     "t": "Obéir : les ordres sont les ordres.",
     "hac": 2,
     "car": -3,
     "set": "colaborador",
     "r": "Léon meurt. On te paie avec une partie de ses biens."
    },
    {
     "t": "Rentrer chez toi sans rien dire.",
     "car": 2,
     "ene": 3,
     "rep": -1,
     "tags": [
      "justo"
     ],
     "r": "Tu n'arrêtes personne. Les Trente prennent note de ton nom."
    },
    {
     "t": "Prévenir Léon en secret pour qu'il s'enfuie.",
     "car": 2,
     "ene": 1,
     "risk": true,
     "win": {
      "r": "Léon s'échappe et personne ne sait que c'était toi."
     },
     "lose": {
      "ene": 3,
      "r": "Un domestique t'a vu. Maintenant, on te surveille."
     }
    },
    {
     "t": "Dénoncer l'ordre devant tout le monde sur l'agora.",
     "car": 3,
     "ene": 5,
     "rep": 2,
     "tags": [
      "justo",
      "publico",
      "verdad"
     ],
     "muerte": 0.12,
     "muerteT": "Cette nuit-là même, les hommes des Trente viennent te chercher.",
     "r": "La cité t'admire à voix basse. Les Trente, à voix haute, te haïssent."
    }
   ]
  },
  {
   "id": "jurado",
   "etapa": "m",
   "virtue": "Justice (dikaiosýne)",
   "sit": "Tu es juré dans un procès. Un puissant commerçant t'offre de l'argent pour voter contre un métèque sans ressources.",
   "opts": [
    {
     "t": "Accepter l'argent.",
     "hac": 3,
     "car": -3,
     "set": "corrupto",
     "tags": [
      "injusto"
     ],
     "r": "Le métèque perd tout. Toi, tu gagnes un secret."
    },
    {
     "t": "Le refuser et voter en conscience.",
     "car": 1,
     "ene": 1,
     "tags": [
      "justo"
     ],
     "r": "Le commerçant n'oublie pas."
    },
    {
     "t": "Le refuser et dénoncer la corruption devant le tribunal.",
     "car": 2,
     "rep": 1,
     "ene": 3,
     "tags": [
      "justo",
      "publico"
     ],
     "r": "Le commerçant est condamné à une amende et jure de se venger."
    },
    {
     "t": "Accepter l'argent et voter quand même en conscience.",
     "hac": 3,
     "car": -1,
     "ene": 3,
     "phr": -1,
     "r": "Tu as trompé un homme puissant. Cela se paie."
    }
   ]
  },
  {
   "id": "trierarca",
   "etapa": "m",
   "virtue": "Magnificence (megaloprépeia)",
   "sit": "La cité te nomme triérarque : pendant un an, tu dois financer et commander une trière de guerre.",
   "hist": "Les liturgies étaient les services publics payés par les riches. Avec l'antidosis, tu pouvais défier un autre de s'en charger… ou d'échanger sa fortune contre la tienne.",
   "opts": [
    {
     "t": "Payer le nécessaire et bien t'acquitter de ta charge.",
     "hac": -2,
     "rep": 1,
     "car": 1,
     "tags": [
      "medida"
     ],
     "r": "Un bon navire et un devoir accompli."
    },
    {
     "t": "Dépenser une fortune pour avoir le meilleur navire de la flotte.",
     "hac": -5,
     "rep": 3,
     "r": "Ta trière fait l'envie du Pirée. Ton intendant pleure."
    },
    {
     "t": "Recourir à l'antidosis : qu'un autre, plus riche, paie.",
     "ene": 2,
     "risk": true,
     "win": {
      "r": "L'autre accepte de payer. Tu t'en es tiré, et tu t'es fait un ennemi."
     },
     "lose": {
      "hac": -3,
      "rep": -1,
      "r": "Le tribunal te donne raison à moitié : tu paies quand même, plus les frais de justice."
     }
    },
    {
     "t": "Économiser sur les rameurs et les voiles.",
     "hac": -1,
     "rep": -2,
     "risk": true,
     "win": {
      "r": "Le navire tient l'année."
     },
     "lose": {
      "sal": -3,
      "rep": -2,
      "r": "Une tempête coule le navire mal équipé : tu nages jusqu'à la côte."
     }
    }
   ]
  },
  {
   "id": "sicilia",
   "etapa": "m",
   "virtue": "Courage (andreía)",
   "sit": "L'assemblée, enthousiaste, vote l'invasion de la Sicile. On t'offre le commandement d'une partie de la flotte.",
   "hist": "L'expédition de Sicile (415-413 av. J.-C.) se termina en désastre : la plupart moururent ou finirent dans les carrières de Syracuse. Nicias avait parlé contre.",
   "opts": [
    {
     "t": "Accepter le commandement et la gloire.",
     "rep": 3,
     "hac": 2,
     "ene": 2,
     "tags": [
      "fuerza"
     ],
     "muerte": 0.15,
     "muerteT": "Tu meurs dans les carrières de Syracuse, comme tant d'Athéniens.",
     "risk": true,
     "win": {
      "rep": 2,
      "r": "Tu reviens, l'un des rares, couvert d'honneurs."
     },
     "lose": {
      "sal": -4,
      "hac": -2,
      "r": "Tu reviens vaincu, malade et sans rien."
     }
    },
    {
     "t": "Parler contre, même si on te traite de lâche.",
     "car": 2,
     "rep": -2,
     "ene": 2,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Tu perds le vote. Tu avais raison, mais cela ne console personne."
    },
    {
     "t": "Voter pour, mais rester chez toi.",
     "car": -1,
     "r": "Ni gloire ni risque."
    },
    {
     "t": "Te charger du ravitaillement et en garder une part.",
     "hac": 4,
     "car": -3,
     "ene": 1,
     "set": "corrupto",
     "tags": [
      "injusto"
     ],
     "r": "La flotte appareille avec moins de blé qu'il n'aurait fallu."
    }
   ]
  },
  {
   "id": "peste",
   "etapa": "m",
   "virtue": "Générosité (eleutheriótes)",
   "sit": "La peste éclate à Athènes. Tu as des entrepôts de blé et de médicaments.",
   "hist": "La peste de 430 av. J.-C. tua peut-être un tiers des Athéniens, dont Périclès. Thucydide en fut atteint et la décrivit.",
   "opts": [
    {
     "t": "Le vendre cher : il ne vaudra jamais autant.",
     "hac": 4,
     "car": -3,
     "ene": 2,
     "rep": -2,
     "tags": [
      "injusto"
     ],
     "r": "Tu t'enrichis pendant que la cité enterre ses morts."
    },
    {
     "t": "Le distribuer gratuitement toi-même.",
     "hac": -4,
     "car": 3,
     "rep": 2,
     "risk": true,
     "win": {
      "r": "Tu sors indemne du milieu des malades."
     },
     "lose": {
      "sal": -4,
      "r": "Tu es contaminé."
     }
    },
    {
     "t": "Fuir à la campagne avec ta famille.",
     "rep": -2,
     "car": -1,
     "sal": 1,
     "r": "Tu es sauvé. Personne n'oublie que tu es parti."
    },
    {
     "t": "Organiser avec d'autres une distribution à prix juste.",
     "hac": -1,
     "car": 2,
     "rep": 1,
     "phr": 1,
     "tags": [
      "justo",
      "medida"
     ],
     "risk": true,
     "win": {
      "r": "Le système fonctionne et tu es sauvé."
     },
     "lose": {
      "sal": -2,
      "r": "Tu tombes malade, mais tu survis."
     }
    }
   ]
  },
  {
   "id": "tirano",
   "etapa": "m",
   "virtue": "Prudence (phrónesis)",
   "sit": "Le tyran de Syracuse t'invite à sa cour : il veut que tu fasses de lui un gouvernant philosophe.",
   "hist": "Platon se rendit trois fois à Syracuse pour éduquer Denys Ier et Denys II. Il échoua les trois fois.",
   "opts": [
    {
     "t": "Accepter pour l'influence et l'argent.",
     "hac": 3,
     "car": -2,
     "set": "colaborador",
     "r": "Tu vis dans un palais et tu conseilles un homme qui ne t'écoute pas."
    },
    {
     "t": "Refuser l'invitation.",
     "car": 1,
     "r": "Tu restes chez toi. Syracuse reste la même."
    },
    {
     "t": "Y aller et essayer de l'éduquer pour de bon.",
     "car": 1,
     "risk": true,
     "win": {
      "car": 1,
      "rep": 2,
      "r": "Le tyran modère une loi. C'est peu, mais ce n'est pas rien."
     },
     "lose": {
      "hac": -4,
      "ene": 2,
      "sal": -1,
      "r": "Il se lasse de toi et te vend comme esclave ; des amis paient ta rançon."
     }
    },
    {
     "t": "Y aller et transmettre des informations à ses ennemis.",
     "car": -1,
     "ene": 2,
     "hac": 1,
     "risk": true,
     "win": {
      "rep": 1,
      "r": "Les démocrates de Syracuse t'en sont reconnaissants."
     },
     "lose": {
      "sal": -3,
      "ene": 3,
      "r": "On te démasque. Tu t'enfuis de nuit sur un bateau de pêcheurs."
     }
    }
   ]
  },
  {
   "id": "impiedad",
   "etapa": "m",
   "virtue": "Amitié (philía)",
   "sit": "On accuse d'impiété ton ancien maître pour avoir dit que le soleil est une pierre incandescente.",
   "hist": "Anaxagore fut accusé d'impiété pour cela même, vers 430 av. J.-C. ; Périclès l'aida à quitter Athènes.",
   "opts": [
    {
     "t": "Témoigner en sa faveur.",
     "car": 2,
     "ene": 3,
     "rep": -1,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Ton maître te serre dans ses bras. L'accusation note ton nom."
    },
    {
     "t": "Te taire.",
     "car": -1,
     "r": "On le condamne. Personne ne te demande rien."
    },
    {
     "t": "L'aider à s'enfuir de nuit.",
     "car": 1,
     "ene": 2,
     "hac": -1,
     "risk": true,
     "win": {
      "r": "Il arrive sain et sauf à Lampsaque."
     },
     "lose": {
      "ene": 2,
      "rep": -2,
      "r": "On vous découvre au port."
     }
    },
    {
     "t": "Témoigner contre lui pour te sauver toi-même.",
     "car": -4,
     "ene": -2,
     "rep": 1,
     "set": "delator",
     "r": "Les accusateurs te considèrent comme l'un des leurs."
    }
   ]
  },
  {
   "id": "deudas",
   "etapa": "m",
   "virtue": "Justice (dikaiosýne)",
   "sit": "Les paysans, étranglés par les dettes, demandent qu'on les efface. Beaucoup te doivent de l'argent à toi.",
   "hist": "Solon (594 av. J.-C.) fit la seisákhtheia, « le secouement des fardeaux » : il annula les dettes et interdit l'esclavage pour dettes.",
   "opts": [
    {
     "t": "Exiger qu'on te paie jusqu'au dernier obole.",
     "hac": 2,
     "ene": 2,
     "rep": -2,
     "car": -1,
     "r": "Tu encaisses. Les paysans n'oublient pas."
    },
    {
     "t": "Effacer toi-même d'abord les dettes qu'on te doit.",
     "hac": -4,
     "car": 2,
     "rep": 2,
     "r": "Tu perds beaucoup, et tu gagnes toute une région."
    },
    {
     "t": "Proposer une loi qui efface une partie des dettes, comme Solon.",
     "hac": -2,
     "car": 2,
     "rep": 1,
     "ene": 1,
     "phr": 1,
     "tags": [
      "justo",
      "medida"
     ],
     "r": "Ni les riches ni les pauvres ne sont tout à fait contents. Bon signe."
    },
    {
     "t": "Vendre les dettes à un usurier avant qu'elles ne soient annulées.",
     "hac": 1,
     "car": -2,
     "rep": -1,
     "tags": [
      "injusto"
     ],
     "r": "Tu te débarrasses du problème, et tu le passes à d'autres."
    }
   ]
  },
  {
   "id": "mitilene",
   "etapa": "m",
   "virtue": "Douceur (praótes)",
   "sit": "Une cité alliée s'est révoltée. Le peuple, furieux, veut tuer tous ses hommes. C'est à toi de parler à l'assemblée.",
   "hist": "Mytilène, 427 av. J.-C. : Cléon réclama le massacre ; Diodote convainquit l'assemblée le lendemain, et une seconde trière arriva à temps pour l'empêcher.",
   "opts": [
    {
     "t": "Demander le massacre : le peuple t'en sera reconnaissant.",
     "rep": 3,
     "car": -3,
     "ene": 1,
     "tags": [
      "fuerza"
     ],
     "r": "On t'acclame. Mille personnes vont mourir."
    },
    {
     "t": "Demander qu'on ne punisse que les coupables.",
     "car": 2,
     "rep": -1,
     "risk": true,
     "win": {
      "rep": 2,
      "r": "Tu convaincs l'assemblée. Une trière part en toute hâte pour arrêter le massacre."
     },
     "lose": {
      "ene": 2,
      "r": "On t'accuse d'avoir été acheté par les rebelles."
     }
    },
    {
     "t": "Ne pas parler.",
     "car": -1,
     "rep": -1,
     "r": "D'autres décident à ta place."
    },
    {
     "t": "Demander la peine maximale en public et voter contre en secret.",
     "car": -1,
     "phr": -1,
     "ene": 1,
     "r": "Toi-même, tu ne sais plus ce que tu penses."
    }
   ]
  },
  {
   "id": "rumor",
   "etapa": "m",
   "virtue": "Véracité (alétheia)",
   "sit": "Une rumeur fausse circule sur toi. Tu peux prouver que c'est ton rival qui l'a lancée, mais pour cela tu devrais révéler un secret d'un ami.",
   "opts": [
    {
     "t": "Révéler le secret de ton ami.",
     "rep": 2,
     "car": -2,
     "ene": 1,
     "r": "Ta réputation est sauvée. Ton amitié, non."
    },
    {
     "t": "Supporter la rumeur en silence.",
     "rep": -3,
     "car": 1,
     "r": "Tu perds de la renommée. Ton ami ne saura jamais ce que tu as fait pour lui."
    },
    {
     "t": "Répandre toi-même une rumeur pire sur ton rival.",
     "rep": 1,
     "car": -2,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "Match nul dans la boue."
    },
    {
     "t": "Parler en privé avec ton rival et négocier.",
     "phr": 1,
     "tags": [
      "pacto"
     ],
     "risk": true,
     "win": {
      "rep": 1,
      "ene": -1,
      "r": "Vous parvenez à un accord : il dément et toi tu oublies."
     },
     "lose": {
      "rep": -2,
      "r": "Il utilise la conversation contre toi."
     }
    }
   ]
  },
  {
   "id": "prestamo",
   "etapa": "m",
   "virtue": "Générosité (eleutheriótes)",
   "sit": "On te propose un prêt maritime : si le navire revient de la mer Noire, tu doubles ton argent ; s'il sombre, tu le perds.",
   "hist": "Aristote distinguait l'administration de la maison, qui recherche le nécessaire, de la chrématistique, qui cherche à accumuler de l'argent sans limite.",
   "opts": [
    {
     "t": "Investir toute ta fortune.",
     "risk": true,
     "win": {
      "hac": 6,
      "r": "Le navire revient. Te voilà riche."
     },
     "lose": {
      "hac": -7,
      "r": "Le navire ne revient pas."
     }
    },
    {
     "t": "Investir une partie.",
     "risk": true,
     "win": {
      "hac": 2,
      "r": "Beau bénéfice."
     },
     "lose": {
      "hac": -2,
      "r": "Tu perds ce que tu as investi."
     }
    },
    {
     "t": "Ne pas investir : tu as ce qu'il te faut.",
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Tu dors tranquille."
    },
    {
     "t": "Investir et payer le capitaine pour qu'il évite les eaux dangereuses.",
     "hac": -1,
     "car": -1,
     "risk": true,
     "win": {
      "hac": 3,
      "r": "Le navire revient."
     },
     "lose": {
      "hac": -3,
      "r": "Le capitaine garde ton argent et disparaît."
     }
    }
   ]
  },
  {
   "id": "stasis",
   "etapa": "m",
   "virtue": "Courage (andreía)",
   "sit": "Guerre civile dans la cité : démocrates et oligarques s'entretuent dans les rues, et les deux camps exigent que tu choisisses.",
   "hist": "Une loi attribuée à Solon retirait ses droits au citoyen qui ne prenait pas parti dans une guerre civile. Thucydide décrit la stásis de Corcyre comme la fin de toute morale.",
   "opts": [
    {
     "t": "Rejoindre les oligarques.",
     "hac": 2,
     "ene": 3,
     "tags": [
      "fuerza"
     ],
     "set": "oligarca",
     "r": "Ton camp gagne… pour l'instant."
    },
    {
     "t": "Rejoindre les démocrates.",
     "rep": 1,
     "ene": 3,
     "r": "Tu te bats au Pirée avec les rameurs et les artisans."
    },
    {
     "t": "T'enfermer chez toi jusqu'à ce que ça passe.",
     "rep": -2,
     "ene": 1,
     "car": -1,
     "r": "Les deux camps te méprisent."
    },
    {
     "t": "Servir de médiateur entre les deux camps.",
     "phr": 1,
     "muerte": 0.08,
     "muerteT": "Un exalté te tue en pleine négociation.",
     "risk": true,
     "win": {
      "car": 2,
      "rep": 3,
      "ene": -2,
      "r": "Tu obtiens une trêve. On te doit la paix."
     },
     "lose": {
      "ene": 3,
      "sal": -2,
      "r": "Les deux camps t'accusent de trahison."
     }
    }
   ]
  },
  {
   "id": "ostrakon",
   "etapa": "m",
   "virtue": "Justice (dikaiosýne)",
   "sit": "On vote un ostracisme. Un rival te propose d'unir vos partisans pour bannir un troisième et de vous partager son pouvoir.",
   "hist": "En 416 av. J.-C., Alcibiade et Nicias s'entendirent pour que le banni soit Hyperbolos. Ce fut le dernier ostracisme d'Athènes.",
   "opts": [
    {
     "t": "Accepter le pacte.",
     "rep": 2,
     "ene": 2,
     "car": -2,
     "tags": [
      "pacto"
     ],
     "r": "Le troisième s'en va pour dix ans. Ton rival et toi, vous vous surveillez."
    },
    {
     "t": "Le refuser et voter pour celui que tu juges vraiment dangereux.",
     "car": 1,
     "ene": 1,
     "r": "Tu votes selon ta conscience ; ton rival le prend mal."
    },
    {
     "t": "Prévenir la victime du complot.",
     "car": 1,
     "ene": 2,
     "rep": 1,
     "r": "Le complot échoue. Tu sais maintenant qui te déteste."
    },
    {
     "t": "Ne pas voter.",
     "rep": -1,
     "r": "D'autres décident."
    }
   ]
  },
  {
   "id": "mina",
   "etapa": "m",
   "virtue": "Justice (dikaiosýne)",
   "sit": "On te propose d'affermer une concession dans les mines d'argent du Laurion. C'est très rentable si tu ne te soucies pas de la façon dont les esclaves travaillent dans les galeries.",
   "opts": [
    {
     "t": "L'affermer et exploiter au maximum.",
     "hac": 4,
     "car": -3,
     "tags": [
      "injusto"
     ],
     "r": "L'argent coule à flots. Mieux vaut ne pas descendre voir comment."
    },
    {
     "t": "L'affermer, mais avec des tours de travail et une nourriture décente.",
     "hac": 2,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Tu gagnes moins que d'autres, mais tu gagnes."
    },
    {
     "t": "Ne pas te lancer dans ce commerce.",
     "car": 1,
     "r": "Un autre l'afferme à ta place."
    },
    {
     "t": "L'affermer et t'endetter pour ouvrir davantage de galeries.",
     "car": -2,
     "risk": true,
     "win": {
      "hac": 6,
      "r": "Tu trouves une veine très riche."
     },
     "lose": {
      "hac": -5,
      "sal": -1,
      "r": "La galerie s'effondre."
     }
    }
   ]
  },
  {
   "id": "libro",
   "etapa": "m",
   "orient": [
    "Contemplative",
    "Discursive"
   ],
   "virtue": "Véracité (alétheia)",
   "sit": "Ton livre dit que, des dieux, on ne peut pas savoir s'ils existent. Un ami te conseille de ne pas le publier.",
   "hist": "Protagoras ouvrit ainsi son ouvrage Sur les dieux ; selon la tradition, ses livres furent brûlés sur l'agora.",
   "opts": [
    {
     "t": "Le publier tel quel.",
     "car": 1,
     "rep": 2,
     "ene": 4,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "On le lit dans toute la Grèce. Et dans les temples."
    },
    {
     "t": "Le publier dans un langage plus prudent.",
     "phr": 1,
     "rep": 1,
     "ene": 1,
     "tags": [
      "medida"
     ],
     "r": "Il dit la même chose, mais il faut savoir le lire."
    },
    {
     "t": "Le lire seulement à tes disciples.",
     "phr": 1,
     "r": "Tes idées circulent à voix basse."
    },
    {
     "t": "Le brûler toi-même.",
     "car": -2,
     "phr": -1,
     "r": "Personne ne t'accusera de rien. Personne ne saura ce que tu pensais."
    }
   ]
  },
  {
   "id": "escuela",
   "etapa": "m",
   "orient": [
    "Contemplative"
   ],
   "virtue": "Générosité (eleutheriótes)",
   "sit": "Tu fondes une école. Comment vas-tu l'entretenir ?",
   "opts": [
    {
     "t": "Faire payer cher, comme les sophistes.",
     "hac": 4,
     "rep": 1,
     "car": -1,
     "r": "L'école est riche ; les élèves aussi."
    },
    {
     "t": "Ne rien faire payer et vivre de dons.",
     "hac": -2,
     "car": 1,
     "rep": 1,
     "r": "Tu vis de peu, entouré de gens qui veulent apprendre."
    },
    {
     "t": "Faire payer chacun selon ses moyens.",
     "hac": 1,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida",
      "justo"
     ],
     "r": "Les riches paient pour les pauvres, et tous apprennent."
    },
    {
     "t": "N'accepter que des fils de familles puissantes.",
     "hac": 2,
     "rep": 2,
     "ene": 1,
     "car": -1,
     "r": "Tes élèves gouverneront la cité. Les autres t'en veulent."
    }
   ]
  },
  {
   "id": "alejandria",
   "etapa": "m",
   "orient": [
    "Contemplative"
   ],
   "virtue": "Prudence (phrónesis)",
   "sit": "L'évêque et le préfet de la ville s'affrontent ; à tes cours viennent des élèves des deux camps.",
   "hist": "Alexandrie, 415 : Hypatie était l'amie et la conseillère du préfet Oreste. La foule qui la tua l'accusait d'empêcher la réconciliation.",
   "opts": [
    {
     "t": "Soutenir publiquement le préfet : il a raison.",
     "rep": 1,
     "ene": 4,
     "tags": [
      "publico"
     ],
     "muerte": 0.1,
     "muerteT": "Une foule te traîne dans les rues.",
     "r": "Le préfet t'en remercie. Le camp de l'évêque te désigne du doigt."
    },
    {
     "t": "Continuer à enseigner comme toujours, sans donner ton avis.",
     "ene": 1,
     "r": "Ton silence aussi est interprété."
    },
    {
     "t": "Cesser d'enseigner en public pendant un temps.",
     "rep": -2,
     "ene": -2,
     "hac": -1,
     "r": "On t'oublie un peu. Tant mieux."
    },
    {
     "t": "Essayer de réconcilier les deux.",
     "phr": 1,
     "risk": true,
     "win": {
      "rep": 2,
      "car": 2,
      "ene": -1,
      "r": "Une trêve fragile, mais une trêve."
     },
     "lose": {
      "ene": 3,
      "r": "Chaque camp croit que tu travailles pour l'autre."
     }
    }
   ]
  },
  {
   "id": "alumno",
   "etapa": "m",
   "orient": [
    "Contemplative"
   ],
   "virtue": "Amitié (philía)",
   "sit": "Un jeune homme brillant, riche et arrogant veut devenir ton disciple pour apprendre à gouverner.",
   "hist": "Alcibiade fut le disciple et l'ami de Socrate. Lors du procès de 399 av. J.-C., beaucoup s'en souvenaient.",
   "opts": [
    {
     "t": "Lui enseigner, même s'il ne change pas.",
     "rep": 1,
     "set": "alumno",
     "r": "Il t'écoute, t'admire… et fait ce qu'il veut."
    },
    {
     "t": "Le refuser.",
     "rep": -1,
     "r": "Il cherche un autre maître, moins exigeant."
    },
    {
     "t": "Lui enseigner et le critiquer en public quand il se trompe.",
     "car": 1,
     "ene": 1,
     "tags": [
      "verdad"
     ],
     "set": "alumno",
     "r": "Il te respecte plus que personne ; sa famille, moins."
    },
    {
     "t": "T'en servir pour gagner de l'influence.",
     "hac": 2,
     "rep": 2,
     "car": -2,
     "set": "alumno",
     "r": "Il t'ouvre les portes des meilleures maisons."
    }
   ]
  },
  {
   "id": "comedia",
   "etapa": "m",
   "orient": [
    "Discursive"
   ],
   "virtue": "Véracité (alétheia)",
   "sit": "Tu prépares une pièce qui ridiculise l'homme politique le plus puissant de la cité.",
   "hist": "En 426 av. J.-C., Cléon traîna Aristophane devant le Conseil pour Les Babyloniens ; deux ans plus tard, Aristophane le ridiculisa de nouveau dans Les Cavaliers.",
   "opts": [
    {
     "t": "La monter telle quelle.",
     "rep": 3,
     "ene": 4,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Tout le théâtre rit. Lui, non."
    },
    {
     "t": "L'adoucir.",
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "Bon accueil. Personne ne s'offense trop."
    },
    {
     "t": "Ridiculiser plutôt un philosophe sans pouvoir.",
     "rep": 2,
     "car": -2,
     "r": "Succès facile. Des années plus tard, le public se souviendra de ta caricature lors d'un procès."
    },
    {
     "t": "La ranger dans un tiroir.",
     "rep": -2,
     "r": "Cette année, tu ne montes rien."
    }
   ]
  },
  {
   "id": "logografo",
   "etapa": "m",
   "orient": [
    "Discursive"
   ],
   "virtue": "Véracité (alétheia)",
   "sit": "Un homme riche te paie pour que tu lui écrives son discours de défense. Tu sais qu'il est coupable.",
   "opts": [
    {
     "t": "Écrire le meilleur discours possible pour beaucoup d'argent.",
     "hac": 3,
     "car": -1,
     "rep": 1,
     "r": "On l'acquitte. Ta réputation de logographe grandit."
    },
    {
     "t": "Refuser la commande.",
     "car": 1,
     "r": "Un autre l'écrira à ta place."
    },
    {
     "t": "L'écrire, mais sans mentir sur rien.",
     "hac": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Un discours honnête pour une cause douteuse."
    },
    {
     "t": "L'écrire et transmettre la vérité à l'accusation.",
     "hac": 2,
     "car": -1,
     "ene": 2,
     "r": "On le condamne. Ton client se méfie de toi."
    }
   ]
  },
  {
   "id": "acusacion",
   "etapa": "m",
   "orient": [
    "Discursive"
   ],
   "virtue": "Courage (andreía)",
   "sit": "Pour attaquer ton protecteur politique, on t'accuse d'impiété.",
   "hist": "Selon Plutarque, Aspasie fut accusée d'impiété par le poète comique Hermippos, et Périclès pleura devant le jury pour la sauver.",
   "opts": [
    {
     "t": "Te défendre toi-même devant le tribunal.",
     "tags": [
      "publico"
     ],
     "risk": true,
     "win": {
      "rep": 2,
      "ene": -2,
      "r": "Ta défense est si bonne qu'on la cite pendant des années."
     },
     "lose": {
      "ene": 2,
      "rep": -2,
      "hac": -2,
      "r": "On te condamne à une énorme amende."
     }
    },
    {
     "t": "Demander à ton protecteur de parler pour toi.",
     "rep": -1,
     "ene": -1,
     "r": "Il te sauve, mais tu lui dois maintenant la vie."
    },
    {
     "t": "Fuir la cité.",
     "hac": -3,
     "rep": -2,
     "ene": -3,
     "r": "Tu repars de zéro ailleurs."
    },
    {
     "t": "Contre-attaquer en accusant tes accusateurs.",
     "ene": 3,
     "rep": 1,
     "tags": [
      "fuerza"
     ],
     "r": "Guerre ouverte devant les tribunaux."
    }
   ]
  },
  {
   "id": "golpe",
   "etapa": "m",
   "orient": [
    "Politique"
   ],
   "virtue": "Tempérance (sophrosýne)",
   "sit": "Tes partisans te proposent de prendre l'Acropole cette nuit et de te proclamer tyran.",
   "hist": "Pisistrate essaya trois fois au VIe siècle av. J.-C. et, la troisième fois, il resta. Cylon, avant lui, échoua et ses partisans furent assassinés.",
   "opts": [
    {
     "t": "Faire le coup d'État.",
     "car": -3,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "muerte": 0.2,
     "muerteT": "Le coup d'État échoue : on te tue sur l'Acropole.",
     "risk": true,
     "win": {
      "rep": 3,
      "hac": 4,
      "ene": 5,
      "set": "tirano",
      "r": "Tu te réveilles maître de la cité."
     },
     "lose": {
      "ene": 4,
      "hac": -3,
      "r": "Il échoue. Tu t'en sors par miracle."
     }
    },
    {
     "t": "Refuser et prévenir le Conseil.",
     "car": 2,
     "ene": 3,
     "rep": 1,
     "tags": [
      "justo"
     ],
     "r": "Le coup d'État est déjoué. Tes anciens partisans te détestent."
    },
    {
     "t": "Refuser en silence.",
     "car": 1,
     "ene": 1,
     "r": "Personne ne sait rien. Pour le moment."
    },
    {
     "t": "Proposer des réformes légales pour répondre à leurs demandes.",
     "phr": 1,
     "car": 1,
     "rep": 1,
     "ene": 1,
     "tags": [
      "medida"
     ],
     "r": "Certains s'en contentent ; d'autres te traitent de mou."
    }
   ]
  },
  {
   "id": "melos",
   "etapa": "m",
   "orient": [
    "Politique"
   ],
   "virtue": "Justice (dikaiosýne)",
   "sit": "En tant que général, tu as fait capituler une petite île neutre. L'assemblée te demande ce qu'il faut faire des vaincus.",
   "hist": "Mélos, 416 av. J.-C. : Athènes tua les hommes et réduisit en esclavage les femmes et les enfants. Thucydide le raconte dans le « dialogue des Méliens ».",
   "opts": [
    {
     "t": "Tuer les hommes et réduire le reste en esclavage, pour l'exemple.",
     "hac": 3,
     "rep": 1,
     "car": -4,
     "ene": 1,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "r": "Plus personne n'osera rester neutre."
    },
    {
     "t": "Demander la clémence.",
     "car": 2,
     "rep": -2,
     "ene": 1,
     "r": "On t'accuse de mollesse."
    },
    {
     "t": "Installer des colons et percevoir un tribut, sans massacre.",
     "car": 1,
     "hac": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Une conquête, mais sans sang inutile."
    },
    {
     "t": "Garder le butin avant que l'ordre n'arrive.",
     "hac": 4,
     "car": -3,
     "ene": 2,
     "set": "corrupto",
     "tags": [
      "injusto"
     ],
     "r": "Personne n'a bien compté les amphores."
    }
   ]
  },
  {
   "id": "hermes",
   "etapa": "m",
   "orient": [
    "Politique"
   ],
   "virtue": "Véracité (alétheia)",
   "sit": "La veille de ton expédition, les statues d'Hermès de la cité apparaissent mutilées. Tes rivaux t'accusent de sacrilège.",
   "hist": "En 415 av. J.-C., on accusa Alcibiade. Il demanda à être jugé avant d'appareiller ; on ne le lui permit pas. Condamné par contumace, il passa à Sparte.",
   "opts": [
    {
     "t": "Exiger d'être jugé maintenant, avant d'appareiller.",
     "tags": [
      "publico"
     ],
     "risk": true,
     "win": {
      "rep": 2,
      "ene": -2,
      "r": "On t'acquitte et tu appareilles blanchi."
     },
     "lose": {
      "ene": 3,
      "r": "On reporte le procès : on te jugera en ton absence."
     }
    },
    {
     "t": "Appareiller et te laisser juger par contumace.",
     "ene": 4,
     "rep": -1,
     "r": "On te condamne à mort par contumace."
    },
    {
     "t": "Soudoyer les témoins.",
     "hac": -3,
     "car": -2,
     "risk": true,
     "win": {
      "ene": -1,
      "r": "Les témoins se rétractent."
     },
     "lose": {
      "ene": 4,
      "rep": -2,
      "r": "L'un d'eux raconte tout."
     }
    },
    {
     "t": "Passer à l'ennemi avant qu'on ne t'arrête.",
     "car": -3,
     "rep": -3,
     "ene": 3,
     "hac": 2,
     "set": "traidor",
     "r": "Sparte t'accueille à bras ouverts. Athènes, avec une condamnation à mort."
    }
   ]
  },
  {
   "id": "flota",
   "etapa": "m",
   "orient": [
    "Politique"
   ],
   "virtue": "Justice (dikaiosýne)",
   "sit": "Ton rival te confie en secret son plan : incendier la flotte des alliés, ancrée dans le port. Athènes dominerait la mer sans concurrence. L'assemblée te charge de le juger.",
   "hist": "Selon Plutarque, Thémistocle proposa quelque chose de ce genre et l'assemblée chargea Aristide de l'examiner. Aristide dit que rien ne serait plus profitable ni plus injuste, et les Athéniens le rejetèrent sans le connaître.",
   "opts": [
    {
     "t": "Le soutenir : ce qui convient à Athènes est juste.",
     "hac": 2,
     "rep": 1,
     "car": -3,
     "ene": 1,
     "tags": [
      "injusto",
      "fuerza"
     ],
     "r": "La flotte alliée brûle. Athènes commande la mer, et plus personne ne lui fait confiance."
    },
    {
     "t": "Dire à l'assemblée que c'est très profitable… et très injuste.",
     "car": 2,
     "ene": 2,
     "tags": [
      "justo",
      "publico",
      "verdad"
     ],
     "risk": true,
     "win": {
      "rep": 2,
      "r": "L'assemblée le rejette sans demander de détails. Ton rival ne te le pardonne pas."
     },
     "lose": {
      "rep": -1,
      "ene": 1,
      "r": "On t'accuse de placer la morale avant la patrie."
     }
    },
    {
     "t": "Prévenir les alliés en secret.",
     "car": 1,
     "ene": 3,
     "rep": -2,
     "r": "Les alliés sont sauvés. À Athènes, quelqu'un te soupçonne."
    },
    {
     "t": "Proposer plutôt une ligue avec les alliés et un tribut juste.",
     "car": 1,
     "rep": 1,
     "phr": 1,
     "tags": [
      "justo",
      "medida"
     ],
     "r": "Les alliés te font confiance pour fixer ce que paie chaque cité."
    }
   ]
  },
  {
   "id": "hifasis",
   "etapa": "m",
   "orient": [
    "Politique"
   ],
   "virtue": "Tempérance (sophrosýne)",
   "sit": "Ton armée est épuisée après des années de campagne et veut rentrer chez elle. Toi, tu veux aller jusqu'au bout du monde.",
   "hist": "Sur les rives de l'Hyphase (326 av. J.-C.), les soldats d'Alexandre refusèrent d'aller plus loin. Il rebroussa chemin, mais par le désert de Gédrosie, où des milliers moururent.",
   "opts": [
    {
     "t": "Ordonner d'aller de l'avant.",
     "rep": 1,
     "sal": -2,
     "ene": 3,
     "car": -1,
     "tags": [
      "fuerza"
     ],
     "r": "Ils t'obéissent à contrecœur."
    },
    {
     "t": "Rentrer chez toi.",
     "rep": -1,
     "car": 1,
     "tags": [
      "medida"
     ],
     "r": "Tes soldats te bénissent."
    },
    {
     "t": "Exécuter ceux qui protestent.",
     "ene": 4,
     "car": -3,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "r": "Le silence se fait. Un silence dangereux."
    },
    {
     "t": "Revenir par le désert le plus dur, pour prouver ta valeur.",
     "sal": -4,
     "rep": 1,
     "car": -1,
     "r": "Tu arrives. Beaucoup, non."
    }
   ]
  },
  {
   "id": "demagogo",
   "etapa": "m",
   "orient": [
    "Politique",
    "Discursive"
   ],
   "virtue": "Véracité (alétheia)",
   "sit": "La cité a faim. Tu peux gagner les élections au poste de stratège en promettant du blé bon marché que tu ne pourras pas te procurer.",
   "opts": [
    {
     "t": "Tout promettre.",
     "rep": 3,
     "car": -2,
     "set": "promesa",
     "r": "Tu gagnes avec une majorité écrasante."
    },
    {
     "t": "Dire la vérité : il faudra se serrer la ceinture.",
     "car": 2,
     "rep": -2,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Tu perds. Mais personne ne pourra rien te reprocher."
    },
    {
     "t": "Promettre ce que tu peux vraiment tenir.",
     "rep": 1,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Tu gagnes de justesse."
    },
    {
     "t": "Rejeter la faute de la faim sur les métèques.",
     "rep": 2,
     "car": -3,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "Ça marche. Ça marche toujours."
    }
   ]
  },
  {
   "id": "juicio",
   "etapa": "v",
   "cond": {
    "ene": 5
   },
   "virtue": "Courage (andreía)",
   "sit": "Déjà âgé, on t'accuse de corrompre la jeunesse et de ne pas croire aux dieux de la cité. Le jury est composé de 501 citoyens.",
   "hist": "Ainsi fut le procès de Socrate (399 av. J.-C.), d'après l'Apologie de Platon. Il demanda comme « peine » d'être nourri gratuitement au Prytanée, et on le condamna à mort.",
   "opts": [
    {
     "t": "Pleurer et supplier le jury.",
     "car": -3,
     "ene": -2,
     "rep": -1,
     "r": "On t'acquitte par pitié. Tu sais ce que tu as fait."
    },
    {
     "t": "Défendre ta vie avec fierté, sans demander clémence.",
     "car": 3,
     "tags": [
      "verdad",
      "publico"
     ],
     "risk": true,
     "pBase": 0,
     "win": {
      "rep": 2,
      "r": "On t'acquitte à quelques voix près. Ce fut la meilleure défense dont on se souvienne."
     },
     "lose": {
      "set": "preso",
      "r": "On te condamne à mort. On te conduit en prison pour attendre l'exécution."
     }
    },
    {
     "t": "Proposer toi-même l'exil comme peine.",
     "hac": -3,
     "rep": -2,
     "ene": -3,
     "r": "Ils acceptent. Tu finiras tes jours loin de la cité."
    },
    {
     "t": "Fuir avant le procès.",
     "hac": -2,
     "rep": -2,
     "ene": -2,
     "car": -1,
     "r": "Tu pars avant qu'on ne te juge. Certains te traitent de lâche."
    }
   ]
  },
  {
   "id": "carcel",
   "etapa": "v",
   "req": "preso",
   "urgente": true,
   "virtue": "Justice (dikaiosýne)",
   "sit": "Tu es en prison, dans l'attente de l'exécution. Tes amis ont soudoyé le gardien : tu peux t'évader cette nuit.",
   "hist": "Dans le Criton de Platon, Socrate refuse de s'évader : ce serait rendre aux lois injustice pour injustice.",
   "opts": [
    {
     "t": "T'évader : la condamnation est injuste.",
     "car": -1,
     "hac": -2,
     "rep": -1,
     "r": "Tu vis, banni et sur toutes les lèvres."
    },
    {
     "t": "Rester : on ne répond pas à une injustice par une autre.",
     "car": 3,
     "muerte": 1,
     "muerteT": "Tu exécutes la sentence. Tes disciples ne cesseront de parler de toi."
    },
    {
     "t": "T'évader et continuer à enseigner depuis l'étranger.",
     "hac": -2,
     "rep": 1,
     "ene": 1,
     "r": "Tu continues à enseigner dans une autre cité."
    }
   ]
  },
  {
   "id": "testamento",
   "etapa": "v",
   "virtue": "Générosité (eleutheriótes)",
   "sit": "Le moment est venu de faire ton testament.",
   "hist": "Aristote disposa dans son testament l'affranchissement de plusieurs de ses esclaves, selon Diogène Laërce.",
   "opts": [
    {
     "t": "Tout laisser à tes enfants.",
     "r": "Ta famille est protégée."
    },
    {
     "t": "Fonder une bibliothèque ou une école avec tes biens.",
     "hac": -4,
     "rep": 2,
     "car": 1,
     "r": "Ton nom restera sur la porte pendant des siècles."
    },
    {
     "t": "Affranchir tes esclaves et leur distribuer une partie de tes biens.",
     "hac": -2,
     "car": 2,
     "tags": [
      "justo"
     ],
     "r": "Certains voisins y voient de la folie."
    },
    {
     "t": "Tout dépenser de ton vivant en banquets.",
     "sal": -2,
     "hac": -3,
     "car": -1,
     "tags": [
      "placer"
     ],
     "r": "Que les héritiers paient."
    }
   ]
  },
  {
   "id": "retiro",
   "etapa": "v",
   "virtue": "Prudence (phrónesis)",
   "sit": "Le médecin te conseille de quitter la vie publique et de te retirer à la campagne.",
   "opts": [
    {
     "t": "Rester à l'assemblée jusqu'au bout.",
     "rep": 1,
     "sal": -2,
     "ene": 1,
     "r": "On te respecte, et tu t'épuises."
    },
    {
     "t": "Te retirer à la campagne.",
     "sal": 2,
     "rep": -1,
     "ene": -2,
     "tags": [
      "medida"
     ],
     "r": "Tes ennemis t'oublient. Tes oliviers, non."
    },
    {
     "t": "Te retirer et écrire tes mémoires.",
     "sal": 1,
     "phr": 1,
     "rep": 1,
     "r": "Se souvenir avec ordre, c'est aussi penser."
    },
    {
     "t": "Payer un guérisseur célèbre pour un remède miraculeux.",
     "hac": -3,
     "risk": true,
     "win": {
      "sal": 2,
      "r": "Par hasard ou non, tu te sens mieux."
     },
     "lose": {
      "sal": -2,
      "r": "Le remède était pire que le mal."
     }
    }
   ]
  },
  {
   "id": "estatua",
   "etapa": "v",
   "virtue": "Magnanimité (megalopsykhía)",
   "sit": "La cité veut t'ériger une statue sur l'agora.",
   "hist": "Pour Aristote, le magnanime se sait digne de grands honneurs et les accepte sans les désirer avidement ; le vaniteux les recherche sans les mériter.",
   "opts": [
    {
     "t": "L'accepter et la payer toi-même.",
     "hac": -3,
     "rep": 2,
     "r": "Une statue digne."
    },
    {
     "t": "La refuser par fausse modestie.",
     "car": -1,
     "r": "Tout le monde sait que tu mourais d'envie."
    },
    {
     "t": "L'accepter et demander que l'argent restant aille aux orphelins de guerre.",
     "car": 2,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "La statue est petite, et le geste, grand."
    },
    {
     "t": "Exiger qu'elle soit plus grande que celle de ton rival.",
     "rep": 1,
     "ene": 2,
     "car": -1,
     "r": "Il y a maintenant deux statues qui ne se parlent pas."
    }
   ]
  },
  {
   "id": "amnistia",
   "etapa": "v",
   "virtue": "Douceur (praótes)",
   "sit": "Ceux qui t'ont persécuté sont tombés. C'est à toi maintenant de décider ce qu'on fait d'eux.",
   "hist": "En 403 av. J.-C., après la chute des Trente, Athènes vota une amnistie : interdiction de « rappeler les maux passés ». C'est l'une des premières de l'histoire.",
   "opts": [
    {
     "t": "Te venger : qu'ils paient ce qu'ils ont fait.",
     "ene": 3,
     "hac": 2,
     "car": -2,
     "tags": [
      "fuerza"
     ],
     "r": "Justice, disent certains. Vengeance, disent d'autres."
    },
    {
     "t": "Soutenir une amnistie générale.",
     "car": 2,
     "rep": 2,
     "ene": -3,
     "tags": [
      "justo"
     ],
     "r": "La cité respire."
    },
    {
     "t": "Demander un procès seulement pour ceux qui ont tué.",
     "car": 1,
     "ene": -1,
     "phr": 1,
     "tags": [
      "medida",
      "justo"
     ],
     "r": "Une justice difficile, mais une justice."
    },
    {
     "t": "Quitter la cité : tu ne veux pas les voir.",
     "rep": -1,
     "ene": -2,
     "r": "Tu t'épargnes des rancœurs."
    }
   ]
  },
  {
   "id": "herederos",
   "etapa": "v",
   "virtue": "Justice (dikaiosýne)",
   "sit": "Tes enfants se disputent l'entreprise familiale. L'un veut la vendre à un acheteur connu pour maltraiter ses ouvriers.",
   "opts": [
    {
     "t": "Vendre au plus offrant.",
     "hac": 3,
     "car": -2,
     "r": "De l'argent vite. Mieux vaut ne pas poser de questions."
    },
    {
     "t": "Ne pas vendre et la partager entre tes enfants.",
     "hac": -1,
     "car": 1,
     "r": "Ils se disputeront quand même, mais sans vendre."
    },
    {
     "t": "Vendre, mais en posant des conditions dans le contrat.",
     "hac": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "L'acheteur les accepte à contrecœur."
    },
    {
     "t": "La garder et serrer toi-même la vis aux ouvriers.",
     "hac": 3,
     "car": -3,
     "ene": 1,
     "tags": [
      "injusto"
     ],
     "r": "S'il faut presser quelqu'un, que le profit soit pour toi."
    }
   ]
  },
  {
   "id": "c-colaborador",
   "etapa": [
    "m",
    "v"
   ],
   "req": "colaborador",
   "virtue": "Justice (dikaiosýne)",
   "sit": "Le gouvernement que tu servais est tombé. Maintenant, on te juge pour avoir collaboré avec lui.",
   "opts": [
    {
     "t": "Rejeter la faute sur les autres.",
     "car": -2,
     "risk": true,
     "win": {
      "ene": -2,
      "r": "On te croit."
     },
     "lose": {
      "ene": 3,
      "rep": -2,
      "r": "Les autres t'accusent, preuves à l'appui."
     }
    },
    {
     "t": "Assumer ta part et te prévaloir de l'amnistie.",
     "car": 2,
     "rep": -1,
     "hac": -2,
     "ene": -1,
     "r": "Tu paies une amende. Tu peux regarder tes voisins en face."
    },
    {
     "t": "Fuir avec ce que tu peux emporter.",
     "hac": -3,
     "rep": -3,
     "ene": -2,
     "r": "Une vie nouvelle, loin et sans nom."
    },
    {
     "t": "Acheter des témoins.",
     "hac": -4,
     "car": -2,
     "risk": true,
     "win": {
      "ene": -2,
      "r": "On t'acquitte."
     },
     "lose": {
      "ene": 4,
      "rep": -3,
      "r": "L'achat est découvert."
     }
    }
   ]
  },
  {
   "id": "c-corrupto",
   "etapa": [
    "m",
    "v"
   ],
   "req": "corrupto",
   "virtue": "Véracité (alétheia)",
   "sit": "Un ancien complice menace de révéler ta corruption si tu ne le paies pas.",
   "opts": [
    {
     "t": "Le payer.",
     "hac": -3,
     "r": "Il en redemandera."
    },
    {
     "t": "Avouer le premier et rendre ce que tu as pris.",
     "rep": -3,
     "car": 3,
     "hac": -3,
     "r": "Scandale, amende… et soulagement."
    },
    {
     "t": "Le menacer à ton tour.",
     "ene": 3,
     "car": -1,
     "r": "Vous avez maintenant un secret et une haine en commun."
    },
    {
     "t": "Le faire taire pour toujours.",
     "car": -5,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "risk": true,
     "win": {
      "r": "Tu n'entendras plus jamais parler de lui."
     },
     "lose": {
      "ene": 5,
      "rep": -3,
      "r": "Le tueur à gages parle."
     }
    }
   ]
  },
  {
   "id": "c-tirano",
   "etapa": [
    "m",
    "v"
   ],
   "req": "tirano",
   "virtue": "Tempérance (sophrosýne)",
   "sit": "Cela fait des années que tu gouvernes en tyran. Une rumeur te parvient : un complot pour te tuer lors de la prochaine procession.",
   "hist": "Harmodios et Aristogiton tuèrent Hipparque, fils de Pisistrate, aux Panathénées de 514 av. J.-C. ; Athènes leur éleva une statue comme tyrannoctones.",
   "opts": [
    {
     "t": "Garde personnelle et exécutions préventives.",
     "ene": 2,
     "car": -3,
     "hac": -2,
     "tags": [
      "fuerza"
     ],
     "r": "Tu survis. La cité te craint plus que jamais."
    },
    {
     "t": "Renoncer au pouvoir et rendre les lois.",
     "car": 3,
     "rep": 2,
     "ene": -4,
     "hac": -2,
     "r": "Peu de tyrans l'ont fait. On se souviendra de toi pour cela."
    },
    {
     "t": "Négocier en secret avec les conjurés.",
     "phr": 1,
     "risk": true,
     "win": {
      "ene": -3,
      "r": "Vous parvenez à un accord."
     },
     "lose": {
      "ene": 2,
      "sal": -3,
      "r": "C'était un piège : on te blesse pendant la procession."
     }
    },
    {
     "t": "Ne pas en tenir compte : personne n'osera.",
     "muerte": 0.4,
     "muerteT": "Les conjurés te poignardent pendant la procession.",
     "r": "Rien ne se passe. Cette fois."
    }
   ]
  },
  {
   "id": "c-alumno",
   "etapa": [
    "m",
    "v"
   ],
   "req": "alumno",
   "virtue": "Amitié (philía)",
   "sit": "Ton ancien disciple est passé à l'ennemi, et la cité te reproche de l'avoir corrompu.",
   "opts": [
    {
     "t": "Te défendre en expliquant ce que tu lui as vraiment enseigné.",
     "phr": 1,
     "tags": [
      "verdad",
      "publico"
     ],
     "risk": true,
     "win": {
      "ene": -2,
      "r": "Certains comprennent."
     },
     "lose": {
      "ene": 3,
      "r": "Personne ne veut entendre les nuances."
     }
    },
    {
     "t": "Le renier en public.",
     "car": -1,
     "ene": -1,
     "r": "Tu te sauves à moitié. Lui l'apprend."
    },
    {
     "t": "Te taire.",
     "ene": 2,
     "r": "Qui ne dit mot consent, dit-on."
    },
    {
     "t": "Quitter la cité pour un temps.",
     "hac": -2,
     "ene": -3,
     "rep": -1,
     "r": "À ton retour, il y aura un autre coupable."
    }
   ]
  },
  {
   "id": "c-delator",
   "etapa": [
    "m",
    "v"
   ],
   "req": "delator",
   "virtue": "Amitié (philía)",
   "sit": "Le maître contre qui tu as témoigné est mort en exil. Ses disciples te montrent du doigt dans la rue.",
   "opts": [
    {
     "t": "Demander pardon en public.",
     "car": 2,
     "rep": -1,
     "r": "Certains te pardonnent ; toi, non."
    },
    {
     "t": "Te justifier : tu as fait ce qu'il fallait faire.",
     "car": -1,
     "ene": 2,
     "r": "Personne ne te croit, pas même toi."
    },
    {
     "t": "Payer l'éducation de ses disciples pauvres.",
     "hac": -3,
     "car": 2,
     "rep": 1,
     "r": "Cela n'efface rien, mais répare un peu."
    },
    {
     "t": "Dénoncer aussi ses disciples.",
     "car": -3,
     "ene": 3,
     "tags": [
      "injusto"
     ],
     "r": "Il n'y a plus de retour en arrière."
    }
   ]
  },
  {
   "id": "c-oligarca",
   "etapa": [
    "m",
    "v"
   ],
   "req": "oligarca",
   "virtue": "Justice (dikaiosýne)",
   "sit": "Les démocrates ont repris la cité. Ton camp a perdu.",
   "opts": [
    {
     "t": "Résister à Éleusis avec les derniers oligarques.",
     "ene": 3,
     "tags": [
      "fuerza"
     ],
     "muerte": 0.15,
     "muerteT": "Tu tombes dans la dernière escarmouche.",
     "r": "Une cause perdue, mais la tienne."
    },
    {
     "t": "Te prévaloir de l'amnistie.",
     "ene": -3,
     "rep": -1,
     "r": "Tu redeviens un citoyen comme les autres."
    },
    {
     "t": "Dénoncer tes anciens compagnons en échange du pardon.",
     "car": -3,
     "ene": -2,
     "r": "On te pardonne. Eux, non."
    },
    {
     "t": "T'exiler avec ta fortune.",
     "hac": -2,
     "rep": -2,
     "ene": -2,
     "r": "Une vie confortable en exil."
    }
   ]
  },
  {
   "id": "c-traidor",
   "etapa": [
    "m",
    "v"
   ],
   "req": "traidor",
   "virtue": "Amitié (philía)",
   "sit": "Cela fait des années que tu sers l'ennemi, et là-bas non plus on ne te fait pas confiance. Athènes t'offre de revenir si tu lui apportes une victoire.",
   "hist": "Alcibiade revint à Athènes en 407 av. J.-C., acclamé comme un héros ; l'année suivante, après une défaite de son lieutenant, on le destitua.",
   "opts": [
    {
     "t": "Revenir avec la victoire.",
     "risk": true,
     "win": {
      "rep": 4,
      "ene": -2,
      "r": "Tu reviens en héros."
     },
     "lose": {
      "ene": 3,
      "sal": -2,
      "r": "La bataille tourne mal et maintenant les deux camps te détestent."
     }
    },
    {
     "t": "Rester là où tu es.",
     "ene": 1,
     "r": "Étranger partout."
    },
    {
     "t": "Partir en Perse et vivre de ta renommée.",
     "hac": 1,
     "rep": -1,
     "ene": 1,
     "r": "Un satrape t'accueille, pour le moment."
    },
    {
     "t": "Te retirer dans une forteresse avec tes hommes.",
     "hac": -2,
     "ene": -1,
     "r": "Seul, mais en sécurité."
    }
   ]
  },
  {
   "id": "c-promesa",
   "etapa": [
    "m",
    "v"
   ],
   "req": "promesa",
   "virtue": "Véracité (alétheia)",
   "sit": "Le blé bon marché que tu avais promis n'est pas arrivé. Le peuple commence à crier ton nom, et pas pour t'applaudir.",
   "opts": [
    {
     "t": "Le payer de ta poche.",
     "hac": -5,
     "rep": 2,
     "r": "Tu tiens parole, même si tu te ruines."
    },
    {
     "t": "Accuser les riches et leur confisquer le grain.",
     "ene": 4,
     "rep": 1,
     "tags": [
      "fuerza"
     ],
     "r": "Le peuple mange. Les riches conspirent."
    },
    {
     "t": "Reconnaître que tu as promis l'impossible.",
     "car": 2,
     "rep": -3,
     "r": "Honnête, tardif et coûteux."
    },
    {
     "t": "Inventer un ennemi extérieur.",
     "car": -3,
     "rep": 1,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "La guerre fait oublier la faim… un temps."
    }
   ]
  }
 ],
 "chance": [
  {
   "t": "Soutien du peuple",
   "d": "Le peuple se range de ton côté.",
   "rep": 2,
   "ene": -1,
   "img": "azar-apoyo"
  },
  {
   "t": "Discours subtil",
   "d": "Tes paroles parviennent à un équilibre admirable.",
   "rep": 1,
   "phr": 1,
   "img": "azar-sutil"
  },
  {
   "t": "Réforme réussie",
   "d": "Une de tes mesures réussit.",
   "rep": 1,
   "hac": 1,
   "img": "azar-reforma"
  },
  {
   "t": "Inspiration",
   "d": "Tu trouves une clarté qui met de l'ordre dans ton jugement.",
   "phr": 2,
   "img": "azar-inspiracion"
  },
  {
   "t": "Traité de paix",
   "d": "La paix est signée et la cité respire.",
   "sal": 1,
   "hac": 1,
   "ene": -1,
   "img": "azar-paz"
  },
  {
   "t": "Coup de chance",
   "d": "La fortune te sourit pour une fois.",
   "hac": 3,
   "img": "azar-suerte"
  },
  {
   "t": "Résistance des élites",
   "d": "Les puissants bloquent ton initiative.",
   "hac": -2,
   "ene": 2,
   "img": "azar-elites",
   "bad": true
  },
  {
   "t": "Réaction des fanatiques",
   "d": "Tu reçois une réponse violente.",
   "sal": -2,
   "ene": 1,
   "img": "azar-fanaticos",
   "bad": true
  },
  {
   "t": "La peste",
   "d": "Une épidémie ravage la cité.",
   "sal": -3,
   "img": "azar-peste",
   "bad": true
  },
  {
   "t": "Ruine économique",
   "d": "Un mauvais investissement te laisse sans ressources.",
   "hac": -3,
   "img": "azar-ruina",
   "bad": true
  },
  {
   "t": "Trahison",
   "d": "Quelqu'un de confiance te vend.",
   "rep": -2,
   "ene": 2,
   "hac": -1,
   "img": "azar-traicion",
   "bad": true
  },
  {
   "t": "Guerre civile",
   "d": "Le conflit interne dévore tout.",
   "sal": -2,
   "hac": -2,
   "img": "azar-guerra",
   "bad": true
  },
  {
   "t": "Scandale public",
   "d": "Ton nom est traîné dans la boue.",
   "rep": -3,
   "img": "azar-escandalo",
   "bad": true
  }
 ],
 "chanceProb": 0.35,
 "peligro": {
  "umbral": 4,
  "porPunto": 0.06,
  "max": 0.5,
  "juicio": {
   "t": "On te traduit en justice",
   "img": null,
   "em": "⚖️",
   "salidas": [
    {
     "min": 0.7,
     "t": "Acquitté",
     "d": "Le jury t'acquitte à quelques voix près.",
     "ene": -2
    },
    {
     "min": 0.45,
     "t": "Amende et prison",
     "d": "On te condamne à une amende que tu ne peux pas payer entièrement : quelques mois de prison.",
     "hac": -2,
     "sal": -1,
     "ene": -2
    },
    {
     "min": 0.22,
     "t": "Exil",
     "d": "On te condamne à l'exil : tu perds maison, amis et biens.",
     "hac": -2,
     "rep": -2,
     "ene": -4,
     "img": "azar-destierro"
    },
    {
     "min": -99,
     "t": "Condamnation à mort",
     "d": "Le jury te condamne à mort.",
     "muerte": true
    }
   ]
  },
  "ostracismo": {
   "t": "Ostracisme",
   "d": "L'assemblée écrit ton nom sur les ostraka : dix ans hors de la cité, mais tu conserves tes biens.",
   "rep": -3,
   "hac": -1,
   "ene": -4,
   "img": "azar-destierro"
  },
  "atentado": {
   "t": "Attentat",
   "img": "azar-fanaticos",
   "salidas": [
    {
     "min": 0.15,
     "t": "Tu survis à un attentat",
     "d": "On t'attaque de nuit ; tu t'en sors blessé.",
     "sal": -3,
     "ene": -1
    },
    {
     "min": -99,
     "t": "Assassiné",
     "d": "On t'attaque de nuit dans une rue du Céramique.",
     "muerte": true
    }
   ]
  }
 },
 "finales": {
  "muerte_noble": {
   "emoji": "🕯️",
   "label": "Vie noble brisée",
   "texto": "Tu meurs fidèle à toi-même. Aristote admirerait ton caractère, mais ne te dirait pas heureux : l'eudaimonía est une vie entière réussie, et la tienne a été coupée."
  },
  "muerte": {
   "emoji": "💀",
   "label": "Vie gâchée",
   "texto": "Tu meurs sans être devenu celui que tu pouvais être. Ni la vertu ni la fortune ne t'ont accompagné."
  },
  "ruina_noble": {
   "emoji": "🥀",
   "label": "Vertueux dans la misère",
   "texto": "Tu gardes ton caractère, mais tu te retrouves sans rien. Pour Aristote, la vertu seule ne suffit pas : sans biens, on ne peut ni bien agir ni bien vivre."
  },
  "ruina": {
   "emoji": "🪨",
   "label": "Ruiné",
   "texto": "Tu as tout perdu, et avec cela la possibilité de participer à la vie de la cité."
  },
  "prospero": {
   "emoji": "🪙",
   "label": "Prospère mais pas heureux",
   "texto": "Tu as richesse et renommée, mais un caractère dégradé. Pour Aristote, les biens extérieurs sont des moyens : sans vertu, pas d'eudaimonía."
  }
 },
 "bands": [
  {
   "min": 46,
   "emoji": "🌿",
   "label": "Vie heureuse et excellente"
  },
  {
   "min": 38,
   "emoji": "⚖️",
   "label": "Vie équilibrée"
  },
  {
   "min": 28,
   "emoji": "⚠️",
   "label": "Vie conflictuelle"
  },
  {
   "min": -999,
   "emoji": "🥀",
   "label": "Vie au bord de l'échec"
  }
 ],
 "reflect": [
  "Si ton personnage est mort en étant vertueux, a-t-il été heureux ? Que dirait Aristote, qui rappelle que personne n'appelle Priam heureux ?",
  "Qu'est-ce qui a le plus pesé dans ta vie : ton caractère, tes biens ou la fortune ?",
  "Aristote dit que la vertu est un juste milieu « relatif à nous ». As-tu eu autant de mal à bien agir que les autres personnages ?",
  "Cela vaut-il la peine d'être incorruptible si cela peut te coûter la vie ?",
  "Qu'est-ce qui distingue la vie politique, la vie discursive et la vie contemplative ? Laquelle est la plus heureuse, selon Aristote ?",
  "Pourquoi la *phronêsis* (prudence) est-elle si importante pour bien vivre ?"
 ]
};
