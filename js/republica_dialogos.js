// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/republica_dialogos.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const REP_DIAL = {
 "regimenes": [
  {
   "id": "aristocracia",
   "emoji": "🏛️",
   "min": 8,
   "name": "Aristocratie",
   "lema": "Les meilleurs gouvernent : la raison commande dans la cité comme dans l’âme.",
   "causa": "C’est la cité juste : chaque classe fait ce qui lui revient, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*).",
   "cita": "« Que chacun fasse ce qui est le sien et ne se mêle pas de beaucoup de choses, voilà la justice. »",
   "loc": "République IV, 433a",
   "glo": [
    "g-la-ciudad-justa",
    "g-justicia"
   ]
  },
  {
   "id": "timocracia",
   "emoji": "🛡️",
   "min": 6,
   "name": "Timocratie",
   "lema": "C’est l’âme irascible qui gouverne : l’honneur et la guerre pèsent plus que la raison.",
   "causa": "La discorde s’installe parmi ceux qui gouvernent : les meilleurs perdent le commandement et les amoureux de l’honneur le prennent.",
   "cita": "« Toute constitution change du fait de ceux qui détiennent le pouvoir, lorsque la discorde surgit parmi eux. »",
   "loc": "République VIII, 545d",
   "glo": [
    "g-timocracia",
    "g-alma-irascible"
   ]
  },
  {
   "id": "oligarquia",
   "emoji": "💰",
   "min": 4,
   "name": "Oligarchie",
   "lema": "Les riches gouvernent : la richesse remplace l’honneur.",
   "causa": "L’amour de l’argent chasse la vertu, et la cité se coupe en deux : les riches et les pauvres.",
   "cita": "« Plus ils estiment la richesse, moins ils estiment la vertu. »",
   "loc": "République VIII, 550e",
   "glo": [
    "g-alma-concupiscible"
   ]
  },
  {
   "id": "democracia",
   "emoji": "🗳️",
   "min": 2,
   "name": "Démocratie",
   "lema": "Le peuple gouverne : la liberté est le bien suprême.",
   "causa": "Les pauvres l’emportent sur les riches et se partagent les charges entre tous, souvent par tirage au sort.",
   "cita": "« La cité se remplit de liberté et de franc-parler, et chacun y peut faire ce qu’il veut. »",
   "loc": "République VIII, 557b",
   "glo": []
  },
  {
   "id": "tirania",
   "emoji": "⛓️",
   "min": -999,
   "name": "Tyrannie",
   "lema": "Un seul gouverne, esclave de ses désirs.",
   "causa": "Un protecteur du peuple s’empare de la garde et du pouvoir, et ne les lâche plus.",
   "cita": "« La liberté excessive ne semble se changer en rien d’autre qu’en excessive servitude, aussi bien pour le particulier que pour la cité. »",
   "loc": "République VIII, 564a",
   "glo": [
    "g-tirania"
   ]
  }
 ],
 "dialogos": [
  {
   "id": "trasimaco",
   "emoji": "🦁",
   "quien": "Thrasymaque",
   "loc": "République I, 338c",
   "situacion": "Le sophiste Thrasymaque fait irruption dans l’assemblée et crie que tes gardiens sont des naïfs.",
   "cita": "« Moi, je dis que le juste n’est rien d’autre que ce qui convient au plus fort. »",
   "griego": "τὸ τοῦ κρείττονος συμφέρον (*tò toû kreíttonos symphéron*) : « ce qui convient au plus fort ».",
   "pregunta": "Que lui réponds-tu ?",
   "opts": [
    {
     "t": "Lui donner raison : que les gardiens gouvernent à leur propre profit.",
     "razon": "Ainsi, ni la force ni l’envie de commander ne leur manqueront jamais.",
     "ef": {
      "arm": -1,
      "ap": 2
     },
     "r": "Les gardiens se font payer pour gouverner : tu as plus de ressources (+2 AP), mais le peuple se méfie (−1 d’harmonie)."
    },
    {
     "t": "Le réfuter : celui qui gouverne bien cherche le bien des gouvernés, comme le médecin celui du malade.",
     "razon": "Un art veille à ce dont il s’occupe, non à celui qui l’exerce.",
     "ef": {
      "arm": 1,
      "ap": -1
     },
     "r": "Tu convaincs l’assemblée (+1 d’harmonie), mais le débat te prend du temps (−1 AP)."
    },
    {
     "t": "L’expulser : on ne discute pas avec un sophiste.",
     "razon": "Ses paroles sèment le désordre chez les jeunes.",
     "ef": {
      "arm": 1,
      "sj": -1
     },
     "r": "L’assemblée se tait (+1 d’harmonie), mais tes gardiens perdent l’habitude de donner des raisons (−1 de sagesse chacun)."
    }
   ],
   "platon": {
    "txt": "« Aucun gouvernant, en tant que gouvernant, n’examine ni n’ordonne ce qui lui convient à lui, mais ce qui convient au gouverné. »",
    "loc": "République I, 342e"
   },
   "critica": {
    "autor": "Thrasymaque",
    "txt": "« Tu crois que les bergers et les bouviers veillent au bien des brebis ou des bœufs, et qu’ils les engraissent et les soignent en pensant à autre chose qu’au bien de leurs maîtres et au leur. »",
    "loc": "République I, 343b"
   },
   "glo": [
    "g-justicia",
    "g-sofistas"
   ]
  },
  {
   "id": "giges",
   "emoji": "💍",
   "quien": "Glaucon",
   "loc": "République II, 359c-360d",
   "situacion": "Glaucon raconte l’histoire de Gygès, un berger qui trouva un anneau le rendant invisible et s’en servit pour s’emparer du pouvoir. Maintenant, un gardien de ta cité en a trouvé un pareil.",
   "cita": "« Personne n’est juste de son plein gré, mais par contrainte. »",
   "griego": "",
   "pregunta": "Que fais-tu ?",
   "opts": [
    {
     "t": "Plus de surveillance et plus de châtiments : que personne n’échappe au regard de la cité.",
     "razon": "Si la justice naît de la peur, il faut faire peur.",
     "ef": {
      "mov": 1
     },
     "r": "Un producteur devient guerrier pour surveiller. Mais qui surveille les surveillants ?"
    },
    {
     "t": "Faire confiance à l’éducation : le juste l’est même si personne ne le voit.",
     "razon": "La justice est un ordre de l’âme, non la peur d’être vu.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 2
      },
      "r": "Tes gardiens sont vraiment justes : l’anneau ne les tente pas (+2 d’harmonie)."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Tes gardiens ne sont pas bien éduqués et celui qui a l’anneau en abuse (−2 d’harmonie)."
     }
    },
    {
     "t": "Que les gardiens vivent sous le regard de tous, sans maisons closes ni or.",
     "razon": "C’est ce que Platon propose pour eux (416d-417a).",
     "ef": {
      "arm": 1,
      "ap": -1
     },
     "r": "Personne ne peut se cacher (+1 d’harmonie), mais surveiller coûte (−1 AP)."
    }
   ],
   "platon": {
    "txt": "« Moi, je la range parmi les plus beaux biens : ceux que doit aimer, pour eux-mêmes et pour ce qui en résulte, quiconque veut être heureux. »",
    "loc": "République II, 358a"
   },
   "critica": {
    "autor": "Glaucon",
    "txt": "« Si quelqu’un doté de ce pouvoir ne voulait jamais commettre d’injustice ni toucher au bien d’autrui, ceux qui le verraient le trouveraient le plus malheureux et le plus insensé. »",
    "loc": "République II, 360d"
   },
   "glo": [
    "g-justicia",
    "g-virtud"
   ]
  },
  {
   "id": "adimanto",
   "emoji": "🏠",
   "quien": "Adimante",
   "loc": "République IV, 419a",
   "situacion": "Adimante se plaint : tes gardiens n’ont ni terres, ni maisons, ni or. Ils commandent la cité, mais vivent comme des soldats à solde.",
   "cita": "« Que dirais-tu pour ta défense, Socrate, si quelqu’un disait que tu ne rends pas du tout heureux ces hommes, et cela par leur propre faute ? »",
   "griego": "",
   "pregunta": "Que décides-tu ?",
   "opts": [
    {
     "t": "Leur donner maisons, terres et or : celui qui gouverne mérite sa récompense.",
     "razon": "Un gardien heureux gouverne mieux.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "Ils sont contents (+2 AP), mais commencent à veiller à leur domaine : selon Platon, ils deviennent ainsi des maîtres au lieu d’être des alliés (417a-b) (−2 d’harmonie)."
    },
    {
     "t": "Les laisser sans propriété : on ne fonde pas la cité pour qu’une classe soit heureuse.",
     "razon": "Ce qui compte, c’est le bonheur de la cité tout entière.",
     "ef": {
      "arm": 1
     },
     "r": "La cité reste unie (+1 d’harmonie). La question reste ouverte : peuvent-ils être heureux ainsi ?"
    }
   ],
   "platon": {
    "txt": "« Nous n’avons pas fondé la cité en visant le bonheur particulier d’une seule classe, mais le plus grand bonheur possible de la cité tout entière. »",
    "loc": "République IV, 420b"
   },
   "critica": {
    "autor": "Aristote",
    "txt": "« Il n’est pas possible que le tout soit heureux si la plupart de ses parties, ou toutes, ou certaines d’entre elles, ne le sont pas. »",
    "loc": "Politique II 5, 1264b17-19"
   },
   "glo": [
    "g-la-ciudad-justa"
   ]
  },
  {
   "id": "metales",
   "emoji": "🥇",
   "quien": "Socrate",
   "loc": "République III, 414b-c",
   "situacion": "Il faut que tous acceptent leur place dans la cité. Socrate propose de raconter un mythe : vous êtes tous nés de la terre et vous êtes frères, mais le dieu a mêlé de l’or chez les uns, de l’argent chez les autres, et du fer et du bronze chez les derniers.",
   "cita": "« Comment pourrions-nous inventer un seul mensonge noble pour persuader, avant tout, les gouvernants eux-mêmes et, à défaut, le reste de la cité ? »",
   "griego": "γενναῖον ψεῦδος (*gennaîon pseûdos*) : « mensonge noble », ou « fiction noble », selon les traducteurs.",
   "pregunta": "Racontes-tu le mythe ?",
   "opts": [
    {
     "t": "Raconter le mythe des métaux.",
     "razon": "Une cité unie a besoin d’un récit commun.",
     "ef": {
      "arm": 2
     },
     "r": "La cité accepte son ordre (+2 d’harmonie). Mais elle l’accepte parce qu’elle croit à un mythe, non parce qu’elle le comprend."
    },
    {
     "t": "Dire la vérité : les classes sont une répartition de fonctions qui peut se discuter.",
     "razon": "Celui qui obéit a le droit de savoir pourquoi.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Tes gardiens savent l’expliquer et l’assemblée l’accepte (+1 d’harmonie)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Personne ne sait expliquer le pourquoi et le mécontentement grandit (−1 d’harmonie)."
     }
    },
    {
     "t": "Que chacun choisisse sa classe.",
     "razon": "Personne ne devrait rester attaché à sa naissance.",
     "ef": {
      "arm": -1,
      "ap": 1
     },
     "r": "Beaucoup veulent commander et peu travailler : la cité perd son ordre (−1 d’harmonie), mais gagne en initiative (+1 AP)."
    }
   ],
   "platon": {
    "txt": "« Vous tous, dans la cité, vous êtes frères, mais le dieu, en vous façonnant, a mêlé de l’or chez ceux qui sont capables de gouverner, de l’argent chez les auxiliaires, et du fer et du bronze chez les laboureurs et les autres artisans. » Et si de parents d’or naît un enfant de bronze, il doit passer dans la classe qui lui revient, et inversement.",
    "loc": "République III, 415a-c"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "Il voit dans le mensonge noble une propagande que les gouvernants utilisent pour que les gouvernés acceptent leur place (paraphrase). D’autres lecteurs y voient un mythe de fondation, comme en possède toute communauté.",
    "loc": "La Société ouverte et ses ennemis, I, chap. 8 (1945)"
   },
   "glo": [
    "g-las-tres-partes-del-alma"
   ]
  },
  {
   "id": "comunidad",
   "emoji": "👪",
   "quien": "Socrate",
   "loc": "République V, 457c-d",
   "situacion": "Socrate propose que les gardiens n’aient pas de famille propre : ainsi personne ne dira « ceci est à moi » et la cité sera une seule famille.",
   "cita": "« Ces femmes seront toutes communes à tous ces hommes, et aucune ne vivra en privé avec aucun ; et les enfants seront aussi communs, et ni le père ne connaîtra son fils ni le fils son père. »",
   "griego": "",
   "pregunta": "L’appliques-tu à tes gardiens ?",
   "opts": [
    {
     "t": "L’appliquer : sans familles privées, rien ne divise les gardiens.",
     "razon": "Ce qui unit la cité est son plus grand bien.",
     "ef": {
      "arm": 2,
      "ap": -2
     },
     "r": "Les gardiens forment un seul corps (+2 d’harmonie), mais élever en commun tous les enfants demande beaucoup d’efforts (−2 AP)."
    },
    {
     "t": "Respecter les familles des gardiens.",
     "razon": "Chacun prend mieux soin de ce qui lui appartient.",
     "ef": {
      "arm": -1,
      "ap": 1
     },
     "r": "Chaque gardien prend soin des siens (+1 AP), mais apparaissent le « mien » et le « tien » (−1 d’harmonie)."
    }
   ],
   "platon": {
    "txt": "« Avons-nous pour la cité un mal plus grand que ce qui la déchire et la rend multiple au lieu d’une ? Ou un bien plus grand que ce qui la lie et la rend une ? »",
    "loc": "République V, 462a-b"
   },
   "critica": {
    "autor": "Aristote",
    "txt": "« Ce qui est commun au plus grand nombre reçoit le moins de soin. »",
    "loc": "Politique II 3, 1261b33-34"
   },
   "glo": [
    "g-la-ciudad-justa"
   ]
  },
  {
   "id": "filosofo",
   "emoji": "🦉",
   "quien": "Glaucon",
   "loc": "République V, 473c-d",
   "situacion": "L’assemblée discute de qui doit gouverner. Socrate lance la proposition qui, de son propre aveu, fera rire tout le monde.",
   "cita": "« Si les philosophes ne règnent pas dans les cités, ou si ceux qu’on appelle aujourd’hui rois et souverains ne philosophent pas vraiment et comme il se doit, il n’y aura pas de répit aux maux des cités, cher Glaucon, ni, je crois, du genre humain. »",
   "griego": "",
   "pregunta": "À qui donnes-tu le pouvoir ?",
   "opts": [
    {
     "t": "Aux plus sages.",
     "razon": "Gouverner est un savoir, comme piloter un navire.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 2
      },
      "r": "Tu as des gardiens d’une sagesse pleine : ils gouvernent avec justesse (+2 d’harmonie)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Aucun de tes gardiens n’est pleinement sage : les « sages » déçoivent (−1 d’harmonie)."
     }
    },
    {
     "t": "À celui que le sort désigne, comme dans l’Athènes démocratique.",
     "razon": "Tous les citoyens se valent.",
     "ef": {
      "arm": -1,
      "ap": 2
     },
     "r": "L’assemblée s’implique (+2 AP), mais pour Platon, c’est laisser la barre à qui ne sait pas naviguer (−1 d’harmonie)."
    },
    {
     "t": "Aux plus courageux, comme à Sparte.",
     "razon": "Celui qui défend la cité mérite d’y commander.",
     "req": "ejercito",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Ton armée est forte et maintient l’ordre (+1 d’harmonie), même si l’honneur commence à peser plus que la raison."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Tes guerriers sont peu nombreux et personne ne les respecte (−2 d’harmonie)."
     }
    }
   ],
   "platon": {
    "txt": "« Le vrai pilote doit s’occuper de l’année, des saisons, du ciel, des astres, des vents et de tout ce qui touche à son art, s’il doit vraiment gouverner un navire. »",
    "loc": "République VI, 488d"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "Il propose de remplacer la question « Qui doit gouverner ? » par celle-ci : comment organiser les institutions pour que les mauvais gouvernants causent le moins de dégâts possible ? (paraphrase)",
    "loc": "La Société ouverte et ses ennemis, I, chap. 7 (1945)"
   },
   "glo": [
    "g-el-bien",
    "g-sabiduria"
   ]
  },
  {
   "id": "caverna",
   "emoji": "🕯️",
   "quien": "Glaucon",
   "loc": "République VII, 519c-520d",
   "situacion": "Tes meilleurs gardiens sont sortis de la caverne et contemplent le Bien. Ils ne veulent pas redescendre, pour gouverner parmi les ombres.",
   "cita": "« Il vous faut donc descendre, chacun à votre tour, dans la demeure commune des autres. »",
   "griego": "καταβατέον (*katabatéon*) : « il faut descendre ».",
   "pregunta": "Les obliges-tu à revenir ?",
   "opts": [
    {
     "t": "Les obliger à descendre à tour de rôle.",
     "razon": "Ils doivent à la cité l’éducation qu’ils ont reçue.",
     "ef": {
      "arm": 2,
      "sj": -1
     },
     "r": "Ils reviennent gouverner (+2 d’harmonie), même si, de retour dans l’obscurité, leurs yeux mettent du temps à s’habituer aux ombres (−1 de sagesse chacun)."
    },
    {
     "t": "Les laisser contempler : ils ont gagné cette liberté.",
     "razon": "Il n’est pas de vie plus haute que celle de qui connaît.",
     "ef": {
      "arm": -2,
      "sj": 1
     },
     "r": "Ils sont plus sages que jamais (+1 de sagesse chacun), mais la cité reste aux mains de ceux qui ne sont pas sortis (−2 d’harmonie)."
    }
   ],
   "platon": {
    "txt": "« La loi ne se soucie pas qu’une seule classe de la cité vive particulièrement bien, mais veille à ce que cela se produise dans la cité tout entière. »",
    "loc": "République VII, 519e"
   },
   "critica": {
    "autor": "Aristote",
    "txt": "La vie contemplative est la plus haute et celle qui se suffit le plus à elle-même (paraphrase) : pourquoi le sage devrait-il l’abandonner ?",
    "loc": "Éthique à Nicomaque X 7, 1177a12-b1"
   },
   "glo": [
    "g-el-mito-de-la-caverna",
    "g-el-bien",
    "g-dialectica-ap"
   ]
  },
  {
   "id": "poetas",
   "emoji": "🎭",
   "quien": "Adimante",
   "loc": "République II, 377b-c",
   "situacion": "Les enfants de la cité écoutent Homère et Hésiode : des dieux qui mentent, se battent et se vengent. Socrate propose de surveiller les mythes qu’on raconte.",
   "cita": "« D’abord, semble-t-il, nous devons surveiller ceux qui composent des mythes : accepter celui qu’ils composent bien et rejeter celui qu’ils composent mal. »",
   "griego": "",
   "pregunta": "Que fais-tu des poètes ?",
   "opts": [
    {
     "t": "Censurer les mythes qui montrent des dieux injustes ou lâches.",
     "razon": "Les enfants imitent ce qu’ils entendent.",
     "ef": {
      "arm": 1,
      "ap": -1
     },
     "r": "Les jeunes grandissent avec des modèles de vertu (+1 d’harmonie), mais réviser les mythes coûte (−1 AP)."
    },
    {
     "t": "Laisser les poètes libres.",
     "razon": "La cité se pense aussi à travers ses histoires.",
     "ef": {
      "arm": -1,
      "ap": 2
     },
     "r": "Le théâtre et la poésie fleurissent (+2 AP), mais les jeunes apprennent de dieux qui se vengent (−1 d’harmonie)."
    },
    {
     "t": "Expulser toute la poésie, sauf les hymnes aux dieux et les éloges des hommes de bien.",
     "razon": "C’est ce que Platon finit par proposer au livre X.",
     "ef": {
      "arm": 2,
      "sj": -1
     },
     "r": "L’ordre règne (+2 d’harmonie), mais la cité perd une manière d’apprendre (−1 de sagesse chacun)."
    }
   ],
   "platon": {
    "txt": "« De la poésie, il ne faut admettre dans la cité que les hymnes aux dieux et les éloges des hommes de bien. »",
    "loc": "République X, 607a"
   },
   "critica": {
    "autor": "Aristote",
    "txt": "Imiter est naturel à l’être humain dès l’enfance, et c’est par l’imitation qu’il acquiert ses premières connaissances (paraphrase).",
    "loc": "Poétique 4, 1448b5-9"
   },
   "glo": [
    "g-paideia"
   ]
  }
 ],
 "versiones": {
  "degen": {
   "emoji": "⛓️",
   "eyebrow": "Version A",
   "name": "Dégénérescence des régimes",
   "libros": "République VIII-IX et X",
   "lema": "La cité et l’âme se corrompent : de l’aristocratie à la tyrannie.",
   "intro": "Fonde la cité juste et tiens bon : chaque crise peut lui faire descendre une marche. Gagne celui qui ne tombe pas."
  },
  "clases": {
   "emoji": "⚖️",
   "eyebrow": "Version B",
   "name": "Les classes qui sauvent la pólis",
   "libros": "République II-IV",
   "lema": "Chaque classe remplit sa fonction et la justice sauve la cité.",
   "intro": "Répartis les trois classes, éduque les gardiens et fais en sorte que chacun fasse ce qui lui revient : la sagesse en haut, le courage chez les auxiliaires, la tempérance chez tous."
  }
 },
 "acciones": [
  {
   "id": "censura",
   "v": "a",
   "ap": 1,
   "img": "ac-censura",
   "name": "Censure des poètes",
   "src": "República II-III, 377b-392c",
   "d": "Les jeunes grandissent avec des modèles de vertu : +1 de sagesse pour chaque gardien."
  },
  {
   "id": "limite",
   "v": "a",
   "ap": 1,
   "img": "ac-limite",
   "name": "Limite à la richesse",
   "src": "Leyes V, 744d-e",
   "d": "Nul ne peut posséder plus de quatre fois ce que possède le plus pauvre : cela freine l’oligarchie (+1 d’harmonie)."
  },
  {
   "id": "sorteo",
   "v": "a",
   "ap": 1,
   "img": "ac-sorteo",
   "name": "Charges tirées au sort",
   "src": "República VIII, 557a",
   "d": "Plus de citoyens gouvernent (+2 AP), mais pour Platon c’est le passage à la démocratie (−1 d’harmonie)."
  },
  {
   "id": "escolta",
   "v": "a",
   "ap": 2,
   "img": "ac-escolta",
   "name": "Garde personnelle",
   "src": "República VIII, 566b",
   "d": "Un protecteur du peuple réclame une escorte : +2 d’harmonie tout de suite, mais −0,5 à chaque tour suivant."
  },
  {
   "id": "consejo",
   "v": "a",
   "ap": 2,
   "img": "ac-consejo",
   "name": "Conseil nocturne",
   "src": "Leyes XII, 961a-b",
   "d": "Les meilleurs se réunissent pour veiller sur les lois : +2 d’harmonie."
  },
  {
   "id": "zanganos",
   "v": "a",
   "ap": 1,
   "img": "ac-zanganos",
   "name": "Dehors les frelons",
   "src": "República VIII, 552c",
   "d": "Les oisifs qui dépensent sans produire sont la maladie de la ruche : +1 d’harmonie."
  },
  {
   "id": "oficio",
   "v": "b",
   "ap": 1,
   "img": "ac-oficio",
   "name": "Un métier par personne",
   "src": "República II, 370a-c",
   "d": "Chacun ne fait qu’une seule chose, celle qui convient à sa nature : +6 de production."
  },
  {
   "id": "musica",
   "v": "b",
   "ap": 1,
   "img": "ac-musica",
   "name": "Musique et gymnastique",
   "src": "República III, 410c-412a",
   "d": "Éducation de l’âme et du corps : +1 de sagesse pour chaque gardien."
  },
  {
   "id": "lana",
   "v": "b",
   "ap": 1,
   "img": "ac-lana",
   "name": "Teindre la laine",
   "src": "República IV, 429d-430b",
   "d": "L’éducation fixe chez les auxiliaires l’opinion droite sur ce qu’il faut craindre, comme une teinture qui ne part pas au lavage : ce tour-ci, les guerriers valent ×1,5."
  },
  {
   "id": "pruebas",
   "v": "b",
   "ap": 2,
   "img": "ac-pruebas",
   "name": "Épreuves des gardiens",
   "src": "República III, 413c-414a",
   "d": "Ne gouvernent que ceux qui résistent aux plaisirs et aux peurs : tous tes gardiens comptent comme justes."
  },
  {
   "id": "comun",
   "v": "b",
   "ap": 2,
   "img": "ac-comun",
   "name": "Vie commune des gardiens",
   "src": "República III, 416d-417b",
   "d": "Sans or ni maisons à eux, rien ne les sépare de la cité : +2 d’harmonie."
  },
  {
   "id": "mito",
   "v": "b",
   "ap": 1,
   "img": "ac-mito",
   "name": "Mythe des métaux",
   "src": "República III, 415a-c",
   "d": "Un récit commun unit la cité : +1 d’harmonie."
  },
  {
   "id": "rey",
   "v": "b",
   "ap": 3,
   "img": "ac-rey",
   "name": "Roi-philosophe",
   "src": "República V, 473c-d",
   "d": "Si tu as des gardiens d’une sagesse pleine, ce sont eux qui gouvernent : +3 d’harmonie. Sinon, cela ne sert à rien."
  },
  {
   "id": "bajar",
   "v": "b",
   "ap": 1,
   "img": "ac-bajar",
   "name": "Retourner dans la caverne",
   "src": "República VII, 519c-520d",
   "d": "Les sages descendent gouverner : +2 d’harmonie, mais −1 de sagesse pour chaque gardien."
  }
 ],
 "fases": [
  {
   "name": "Spécialisation",
   "lema": "À chacun un métier : la cité naît de ce que nul ne se suffit à soi-même (369b)."
  },
  {
   "name": "Gardiens",
   "lema": "Éduquer ceux qui défendent : musique, gymnastique et opinion droite."
  },
  {
   "name": "Gouvernement",
   "lema": "Qui commande ? Ceux qui savent, s’il y en a."
  },
  {
   "name": "Épreuve",
   "lema": "La justice tient-elle quand les crises arrivent ?"
  }
 ],
 "funciones": [
  {
   "k": "sophia",
   "emoji": "🦉",
   "name": "Sagesse",
   "gr": "σοφία (*sophía*)",
   "clase": "gouvernants",
   "ok": "Il y a des gouvernants d’une sagesse pleine, avec la science du Bien.",
   "no": "Aucun gardien n’atteint la sagesse pleine.",
   "loc": "République IV, 428b-429a"
  },
  {
   "k": "andreia",
   "emoji": "🛡️",
   "name": "Courage",
   "gr": "ἀνδρεία (*andreía*)",
   "clase": "auxiliaires",
   "ok": "Les auxiliaires suffisent à défendre la cité et conservent l’opinion droite sur ce qui est redoutable.",
   "no": "Les défenseurs sont trop peu nombreux.",
   "loc": "République IV, 429b-430c"
  },
  {
   "k": "sophrosyne",
   "emoji": "🍷",
   "name": "Tempérance",
   "gr": "σωφροσύνη (*sophrosýne*)",
   "clase": "toutes les classes",
   "ok": "La cité se suffit à elle-même : tous acceptent qui commande.",
   "no": "La production ne suffit pas : l’appétit déborde la cité.",
   "loc": "République IV, 430d-432a"
  },
  {
   "k": "dikaiosyne",
   "emoji": "⚖️",
   "name": "Justice",
   "gr": "δικαιοσύνη (*dikaiosýne*)",
   "clase": "la cité tout entière",
   "ok": "Chaque classe fait ce qui lui revient : la cité est juste.",
   "no": "Il manque l’une des trois : il n’y a pas encore de justice.",
   "loc": "République IV, 433a-434c"
  }
 ],
 "doxa": "Les auxiliaires n’ont pas la science, ἐπιστήμη (*epistéme*), mais l’opinion droite, ὀρθὴ δόξα (*orthè dóxa*) : leur courage est « la conservation de l’opinion droite et légitime sur ce qu’il faut craindre et ne pas craindre » (République IV, 430b). Seuls les gouvernants sortent de la caverne.",
 "finB": [
  {
   "min": 20,
   "todas": true,
   "emoji": "🏛️",
   "name": "Callipolis : la cité juste",
   "lema": "Les trois classes font ce qui leur revient et la cité tient."
  },
  {
   "min": 12,
   "emoji": "⚖️",
   "name": "Une cité debout, pas tout à fait juste",
   "lema": "Elle tient, mais une fonction fait défaut."
  },
  {
   "min": 0.1,
   "emoji": "⚠️",
   "name": "Une cité désordonnée",
   "lema": "Chaque classe empiète sur ce qui revient aux autres."
  },
  {
   "min": -999,
   "emoji": "💥",
   "name": "La cité se dissout",
   "lema": "Sans justice, la cité cesse d’être une."
  }
 ],
 "er": {
  "titulo": "Épilogue · le mythe d’Er",
  "situacion": "Er, un guerrier mort au combat, revient à la vie sur le bûcher et raconte ce qu’il a vu : les âmes choisissent leur prochaine vie. Le premier à choisir, sans réfléchir, prend celle du tyran le plus puissant ; puis il découvre qu’il y est écrit qu’il dévorera ses propres enfants.",
  "cita": "« La faute revient à celui qui choisit ; le dieu n’est pas coupable. »",
  "loc": "République X, 617e",
  "griego": "αἰτία ἑλομένου· θεὸς ἀναίτιος (*aitía heloménou ; theòs anaítios*).",
  "pregunta": "C’est à toi de choisir une vie. Laquelle prends-tu ?",
  "opts": [
   {
    "t": "La vie du tyran : un pouvoir sans limites.",
    "r": "C’est le choix du premier, qui venait d’une cité ordonnée mais avait été vertueux « par habitude, sans philosophie » (619c-d)."
   },
   {
    "t": "La vie tranquille d’un simple particulier, comme Ulysse.",
    "r": "Ulysse, guéri de son ambition, cherche longtemps la vie d’un homme privé, sans charges, et la choisit avec contentement (620c-d)."
   },
   {
    "t": "La vie qui saura le mieux distinguer la bonne de la mauvaise.",
    "r": "C’est ce que conseille Socrate : apprendre à toujours choisir la meilleure vie parmi les possibles est ce qui importe le plus (618b-c)."
   }
  ],
  "cierre": "Ainsi s’achève la République : « le mythe a été sauvé et ne s’est pas perdu, et il nous sauvera si nous lui obéissons » (621b-c)."
 },
 "ui": {
  "regTitulo": "Régime de ta cité (République, livre VIII)",
  "degenera": "Ta cité dégénère",
  "seguir": "Continuer →",
  "dialogo": "Dialogue",
  "elige": "Elige tu postura y su razón:",
  "porque": "Parce que",
  "resultado": "Ce qui se passe dans ta cité",
  "responde": "Ce que répond Platon",
  "objeta": "Ce qu’on lui objecte",
  "abierto": "Débat ouvert : le jeu ne dit pas quelle position est la bonne. Tu décides, avec des raisons.",
  "finRegimen": "Régime final",
  "hunde": "La cité sombre dans la tyrannie",
  "escalera": "Voici comment Platon classe les régimes, du meilleur au pire. Aristote les classe autrement : parmi les formes déviées, la démocratie est la plus modérée et la tyrannie la pire (Politique IV 2, 1289a-b). La démocratie est-elle une dégénérescence ou la meilleure défense contre le tyran ?",
  "posturas": "Tes positions dans les dialogues",
  "disertacion": "Pour ta dissertation",
  "dTesis": "Thèse : une cité peut-elle être juste si chaque classe se limite à faire ce qui lui revient ?",
  "dPlaton": "Argument de Platon : la justice est l’harmonie des parties, dans la cité comme dans l’âme (République IV, 433a et 441d-e).",
  "dObjecion": "Objection : choisis l’une des critiques apparues dans ta partie (Thrasymaque, Glaucon, Aristote, Popper…) et explique-la avec tes mots.",
  "dTuya": "Ta conclusion : quelle position de ta partie défendrais-tu par écrit, et pourquoi ?",
  "diccionario": "Concepts dans le dictionnaire",
  "sinDialogos": "Dans cette partie, il n’y a pas eu de dialogues.",
  "hudReg": "Régime",
  "elegir": "Choisis une version",
  "accionesMax": "Actions (3 max. ce tour)",
  "justiciaTurno": "⚖️ La cité est juste : chaque classe fait ce qui lui revient (+0,5).",
  "opcional": "facultatif",
  "clasesB": [
   "Gouvernants",
   "Auxiliaires",
   "Producteurs"
  ],
  "rosterB": [
   "🦉 Gouvernants : σοφία (*sophía*) <span class=\"rep-floor\">les trois vertus ≥4 · peu nombreux, ceux qui délibèrent sur le tout</span>",
   "🛡️ Auxiliaires : ἀνδρεία (*andreía*) <span class=\"rep-floor\">courage et tempérance ≥4 · ils gardent l’opinion droite</span>",
   "🌾 Producteurs : σωφροσύνη (*sophrosýne*) <span class=\"rep-floor\">tempérance ≥4 · ils nourrissent la cité</span>"
  ],
  "elegirIntro": "Deux jeux avec le même moteur et des accents différents. Tu peux en changer quand tu veux.",
  "jugarEsta": "Jouer cette version →",
  "cambiar": "↺ Changer de version",
  "fase": "Phase",
  "nuevaFase": "Nouvelle phase : +2 AP",
  "funciones": "Les fonctions de la cité",
  "escolta": "La garde personnelle grandit : −0,5 d’harmonie.",
  "erElige": "Ton choix",
  "verFin": "Voir la fin →",
  "version": "Version",
  "chuleta": "📋 Aide-mémoire du jeu",
  "chuletaT": "Aide-mémoire : toutes les règles et formules",
  "volver": "← Retour",
  "cAcciones": "Cartes d’action (coût en AP et effet)",
  "cComunes": "Communes aux deux versions",
  "cEventos": "Événements (ce qui les déclenche et ce qu’ils font)",
  "cEconomia": "Économie de points",
  "cEconomiaT": "Tu commences avec 8 AP. Chaque tour, tu gagnes 1 AP de plus ; dans la version B, chaque nouvelle phase donne 2 AP. Tu peux jouer jusqu’à 3 actions par tour, chacune une seule fois.",
  "cVictoria": "Comment on gagne et comment on perd",
  "cVictoriaA": "Version A : tu commences en aristocratie avec 10 d’harmonie. Sous 8, timocratie ; sous 6, oligarchie ; sous 4, démocratie ; sous 2, tyrannie. On ne remonte pas. À 0 d’harmonie ou avec moins de 3 habitants, la cité s’effondre. Tu gagnes si tu finis en aristocratie ou en timocratie.",
  "cVictoriaB": "Version B : tu gagnes la Callipolis si tu finis avec 20 d’harmonie ou plus et que la cité est juste (les trois fonctions remplies) ; avec 12 ou plus, la cité reste debout. Avec 0 d’harmonie ou moins de 3 habitants, elle se dissout. En B, l’harmonie monte vite : le difficile est d’arriver à la fin avec chaque classe à sa place.",
  "cFunciones": "Les fonctions de la cité (dans les deux versions) : sagesse = un gardien de sagesse 5 ; courage = guerriers ≥ producteurs ÷ 2,5 ; tempérance = production ≥ population. La justice n’est pas une quatrième vertu : c’est que les trois soient remplies à la fois, chaque classe à sa place (République IV, 433a-c). À chaque tour où la cité est juste, +0,5 d’harmonie.",
  "cClases": "Les classes et leur coût",
  "cClasesT": "Coût de chaque profil = somme de ses trois vertus. Gardien : les trois ≥ 4. Guerrier : courage et tempérance ≥ 4. Producteur : tempérance ≥ 4 ; chaque producteur nourrit 2 personnes. Sous 30 habitants, l’événement « Cité amoindrie » retire des points. En mode Réel, producteurs ≥ 2 × (gardiens + guerriers) : c’est une règle du jeu, pas de Platon.",
  "cDialogos": "Dialogues : ceux de ta version apparaissent, un tous les trois tours. Tu choisis une position et une raison ; le résultat change la cité.",
  "cDestino": "Cartes du destin (peste, guerre, tremblement de terre, mort du fondateur) : elles retirent des points et tuent, quelles que soient tes décisions. Il en sort 3 en mode Réel et 2 en mode Facile.",
  "cTurnos": "Durée : 12 tours en mode Facile et 14 en mode Réel."
 }
};
