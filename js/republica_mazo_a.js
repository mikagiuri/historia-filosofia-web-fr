// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/republica_mazo_a.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const REP_MAZO_A = {
 "acciones": [
  {
   "id": "censura",
   "v": "a",
   "ap": 1,
   "img": "ac-censura",
   "name": "Censure des poètes",
   "d": "On surveille les mythes qu’entendent les jeunes : +1 de sagesse pour chaque gardien et −1 aux dégâts des événements du tour suivant.",
   "cita": "« Il faut d’abord surveiller ceux qui composent des mythes : accepter celui qu’ils composent bien et rejeter celui qu’ils composent mal. »",
   "loc": "République II, 377b-c ; X, 607a",
   "nota": "Débat ouvert : Platon forme le cœur par les mythes ; Aristote rappelle qu’imiter est naturel à l’être humain et que c’est ainsi que nous apprenons (Poétique 4, 1448b). Simplifié : le frein vaut pour n’importe quel événement, pas seulement les sophistes ou la timocratie ; sans le +1 AP en démocratie.",
   "ef": {
    "zsj": 1,
    "dura": {
     "k": "menos",
     "n": 1,
     "turnos": 1
    }
   }
  },
  {
   "id": "limite",
   "v": "a",
   "ap": 1,
   "img": "ac-limite",
   "name": "Loi contre le luxe",
   "d": "On limite l’accumulation des richesses : +2 d’harmonie si la cité a déjà quitté l’aristocratie ; en aristocratie, il n’y a rien à freiner.",
   "cita": "« Plus ils estiment la richesse, moins ils estiment la vertu. »",
   "loc": "République VIII, 550d-551b",
   "nota": "Elle freine l’oligarchie en s’attaquant à sa cause. Simplifié : « en oligarchie ou en train d’y tomber » = à partir de la timocratie ; l’annulation de l’écoulement de l’oligarchie n’est pas programmée.",
   "ef": {
    "si": {
     "req": "reg>=1",
     "ef": {
      "arm": 2
     }
    }
   }
  },
  {
   "id": "sorteo",
   "v": "a",
   "ap": 1,
   "img": "../aristoteles/azar-suerte",
   "name": "Charges tirées au sort",
   "d": "Les charges sont réparties entre tous : +2 AP, mais −1 d’harmonie et la cité se rapproche de la démocratie.",
   "cita": "« Ils se partagent à égalité le gouvernement et les charges, et le plus souvent par tirage au sort. »",
   "loc": "République VIII, 557a",
   "nota": "Une action qui accélère la chute : tout ce qui donne de l’énergie ne sauve pas la cité. Simplifié : sans le −1 au seuil de la démocratie.",
   "ef": {
    "ap": 2,
    "arm": -1
   }
  },
  {
   "id": "consejo",
   "v": "a",
   "ap": 2,
   "img": "ac-consejo",
   "name": "Conseil des anciens",
   "d": "Les plus prudents veillent sur la constitution : +1 d’harmonie et −1 aux dégâts des événements pendant 2 tours.",
   "cita": "« Toute constitution change du fait de ceux qui détiennent le pouvoir, lorsque la discorde surgit parmi eux. »",
   "loc": "République VIII, 545d-e",
   "nota": "La carte qui « gagne le plus de temps » avant la dégénérescence. Simplifié : « +1 au seuil de la prochaine transition » comme amortisseur des dégâts ; sans le +1 AP en démocratie.",
   "ef": {
    "arm": 1,
    "dura": {
     "k": "menos",
     "n": 1,
     "turnos": 2
    }
   }
  },
  {
   "id": "zanganos",
   "v": "a",
   "ap": 1,
   "img": "ac-zanganos",
   "name": "Bannissement du frelon",
   "d": "On expulse l’oisif qui vit aux dépens des autres : +1 d’harmonie ; en oligarchie ou pire, le prochain coup d’État ne fait aucun dégât.",
   "cita": "« Le frelon pourvu d’un aiguillon met la cité en agitation, comme celui qui n’en a pas dérègle la ruche. » (paraphrase)",
   "loc": "République VIII, 552c-e ; 564b-e",
   "nota": "La ruche : l’oisif qui agite est la matière dont est fait le démagogue. Simplifié : « −1 à la probabilité du coup » comme bouclier d’un tour. Paraphrase ;",
   "ef": {
    "arm": 1,
    "si": {
     "req": "reg>=2",
     "ef": {
      "escudo": {
       "tags": [
        "golpe"
       ],
       "turnos": 1
      }
     }
    }
   }
  },
  {
   "id": "a_fundar_colonia",
   "img": "ac-fundar-colonia",
   "v": "a",
   "ap": 2,
   "name": "Fonder une colonie",
   "d": "Une partie des gens fonde une autre cité et la tienne garde la juste mesure : ce tour-ci, la « Cité amoindrie » ne te fait aucun dégât.",
   "cita": "« Que la cité grandisse tant qu’elle veut rester une, et pas davantage. » (paraphrase)",
   "loc": "République IV, 423b-c",
   "nota": "La juste mesure (*tò métrion*) : ni si petite qu’elle ne se suffise pas, ni si grande qu’elle cesse d’être une. Simplifié : « +6 de population effective face au seuil de 30 » comme bouclier contre l’événement.",
   "ef": {
    "escudo": {
     "tags": [
      "menguada"
     ],
     "turnos": 1
    }
   }
  }
 ],
 "eventos": [
  {
   "id": "a_ev_dos_pueblos",
   "img": "ev-dos-pueblos",
   "v": "a",
   "name": "Les deux peuples",
   "loc": "République VIII, 551d",
   "cita": "« Une telle cité n’est pas une, mais deux : celle des pauvres et celle des riches, qui habitent le même lieu et conspirent sans cesse les uns contre les autres. »",
   "threat": "En oligarchie, la cité se divise en riches et en pauvres ; s’il y a beaucoup plus de producteurs que de défenseurs, le conflit éclate.",
   "req": "defensa",
   "si": {
    "ef": {
     "arm": -2
    },
    "msg": "La cité se divise en deux, mais les défenseurs contiennent le choc : −2."
   },
   "no": {
    "ef": {
     "arm": -2,
     "kill": [
      "E",
      2
     ]
    },
    "msg": "La lutte éclate entre riches et pauvres : −2 et 2 producteurs meurent."
   },
   "aparece": "reg>=2",
   "nota": "L’inégalité n’est pas un défaut secondaire de l’oligarchie : c’en est l’essence, et la guerre civile sa fin. Simplifié : « E > 3 × G » comme « !défense » et ⌊E/10⌋ morts comme 2."
  },
  {
   "id": "a_ev_libertad_extrema",
   "img": "ev-libertad-extrema",
   "v": "a",
   "name": "La liberté qui devient esclavage",
   "loc": "République VIII, 563e-564a",
   "cita": "« La liberté excessive ne semble se changer en rien d’autre qu’en excessive servitude, aussi bien pour le particulier que pour la cité. »",
   "threat": "Quand la cité est déjà une démocratie, l’excès de liberté la pousse vers l’extrême opposé.",
   "req": "reg>=3",
   "si": {
    "ef": {
     "arm": -2
    },
    "msg": "La cité, au bord du gouffre, fait un pas vers la tyrannie : −2."
   },
   "no": {
    "ef": {
     "arm": 0
    },
    "msg": "Il reste encore de la marge : simple avertissement."
   },
   "aparece": "reg>=2",
   "nota": "L’extrême engendre son contraire. Débat ouvert : est-ce le juste milieu qui l’évite, ou des institutions qui limitent le pouvoir (Popper) ? Simplifié : « au bord du gouffre » = être déjà en démocratie ; sans le −1 au seuil de la tyrannie."
  },
  {
   "id": "a_ev_escolta_tirano",
   "img": "ev-escolta-tirano",
   "v": "a",
   "name": "Le tyran demande une escorte",
   "loc": "République VIII, 565d-566d",
   "cita": "« Le protecteur du peuple, acclamé comme un sauveur, demande une garde pour vous défendre ; avec elle, il cesse d’être protecteur et devient tyran. » (paraphrase)",
   "threat": "À la fin de la démocratie, le protecteur du peuple demande une garde ; si tu la lui as déjà donnée auparavant, la cité tombe.",
   "req": "semilla",
   "si": {
    "ef": {
     "arm": -3
    },
    "msg": "Il avait déjà sa garde : le protecteur devient tyran (−3)."
   },
   "no": {
    "ef": {
     "arm": -1
    },
    "msg": "Il demande la garde et la cité hésite : −1. Tu peux encore décider."
   },
   "aparece": "reg>=3",
   "nota": "La naissance du tyran à partir de la faveur populaire, selon Platon ; on l’expose, on ne tranche pas. Paraphrase. Simplifié : sans la transition directe vers la tyrannie (c’est l’harmonie qui en décide)."
  }
 ],
 "dialogos": [
  {
   "id": "a_sicilia",
   "emoji": "⛵",
   "quien": "Un vieux général",
   "loc": "République VIII, 547e-548a",
   "situacion": "L’assemblée, enthousiaste, vote la conquête d’une île riche et lointaine. Les jeunes rêvent de gloire ; un vieux général demande la parole pour s’y opposer.",
   "cita": "« Il passera la plus grande partie du temps en guerre. »",
   "griego": "",
   "pregunta": "Que décide ta cité ?",
   "opts": [
    {
     "t": "Appareiller : la gloire est à celui qui ose.",
     "razon": "La cité qui n’ose pas ne grandit pas.",
     "ef": {
      "arm": -2,
      "ap": 2,
      "mov": [
       "E",
       "G",
       1
      ]
     },
     "r": "La cité se remplit d’enthousiasme et de soldats (+2 AP, un producteur s’enrôle), mais elle joue tout ce qu’elle a sur un seul pari (−2 d’harmonie)."
    },
    {
     "t": "Écouter le général prudent et ne pas y aller.",
     "razon": "Il faut mesurer l’entreprise avant de l’entreprendre.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Tes gardiens savent mesurer l’entreprise : la cité reste et se conserve (+1 d’harmonie)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Personne ne sait défendre la prudence et l’assemblée te traite de lâche (−1 d’harmonie)."
     }
    },
    {
     "t": "N’y aller qu’avec une petite flotte, pour la forme.",
     "razon": "Ni tout ni rien.",
     "ef": {
      "ap": -1
     },
     "r": "Ni gloire ni désastre ; la cité dépense et ne gagne rien (−1 AP)."
    }
   ],
   "platon": {
    "txt": "Le régime de l’honneur « passera la plus grande partie du temps en guerre », parce qu’il estime davantage ceux qui sont bons pour combattre que les sages (paraphrase).",
    "loc": "République VIII, 547e-548a"
   },
   "critica": {
    "autor": "Thucydide",
    "txt": "Il attribue le désastre davantage aux divisions internes et aux erreurs de commandement qu’au désir de gloire lui-même (paraphrase).",
    "loc": "Histoire de la guerre du Péloponnèse II 65, 11"
   },
   "glo": [
    "g-timocracia",
    "g-alma-irascible"
   ],
   "fase": 1,
   "nota": "Le *thymós* sans mesure (*philonikía*, amour de la victoire). Historiquement, c’est l’Athènes démocratique qui l’a voté : l’excès d’honneur est-il propre à un régime ou à n’importe lequel ?"
  },
  {
   "id": "a_leon",
   "emoji": "⚖️",
   "quien": "Les Trente",
   "loc": "Apologie de Socrate 32c-d",
   "situacion": "Les Trente, qui gouvernent la cité, ordonnent à plusieurs citoyens d’arrêter Léon de Salamine, un innocent, pour s’emparer de ses biens. Ils veulent que tous se salissent les mains.",
   "cita": "« Ce gouvernement, tout puissant qu’il était, ne m’effraya pas au point de me faire commettre une injustice. »",
   "griego": "",
   "pregunta": "Que font tes gardiens ?",
   "opts": [
    {
     "t": "Obéir : les ordres sont les ordres.",
     "razon": "Celui qui commande répond de ce qu’il commande.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "Léon meurt et ses biens remplissent les caisses (+2 AP). La cité apprend que personne n’est à l’abri (−2 d’harmonie)."
    },
    {
     "t": "Rentrer chez soi, comme l’un d’eux l’a fait.",
     "razon": "Il y a des ordres qu’on n’exécute pas.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "Tes gardiens refusent sans bruit ; les Trente prennent note (+1 d’harmonie, −1 AP à cause de la surveillance qu’ils subissent)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Un seul refuse ; les autres obéissent (−1 d’harmonie)."
     }
    },
    {
     "t": "Dénoncer l’ordre sur l’agora.",
     "razon": "L’injustice passée sous silence se répète.",
     "ef": {
      "arm": 2,
      "ap": -2,
      "zsj": -1
     },
     "r": "La cité se réveille (+2 d’harmonie), mais les Trente poursuivent ceux qui ont parlé (−2 AP) et tes gardiens vivent dans la peur (−1 de sagesse chacun)."
    }
   ],
   "platon": {
    "txt": "« Ce gouvernement, tout puissant qu’il était, ne m’effraya pas au point de me faire commettre une injustice. Quand nous sortîmes, les quatre autres allèrent à Salamine et ramenèrent Léon, et moi je m’en allai chez moi. » (Socrate dans sa défense.) Dans la Lettre VII, Platon raconte sa déception envers les Trente (paraphrase ; authenticité discutée).",
    "loc": "Apologie de Socrate 32c-d ; Lettre VII 324d-325a"
   },
   "critica": {
    "autor": "Critias",
    "txt": "Oncle de Platon et chef des Trente, il présentait son gouvernement comme un remède contre les excès de la démocratie (paraphrase de la tradition).",
    "loc": "Xénophon, Helléniques II 3, 24-34"
   },
   "glo": [
    "g-justicia"
   ],
   "fase": 2,
   "nota": "L’oligarchie réelle que Platon a vue de près ; la désobéissance de Socrate comme limite de l’obéissance. (Apologie de Socrate) ; Lettre VII en paraphrase (authenticité discutée)."
  },
  {
   "id": "a_deudas",
   "emoji": "🪙",
   "quien": "Les paysans endettés",
   "loc": "République VIII, 555c-556a",
   "situacion": "Les paysans, étouffés par les dettes, demandent qu’on les efface. Les créanciers sont ceux qui gouvernent.",
   "cita": "« Abolir les dettes et partager la terre. »",
   "griego": "χρεῶν ἀποκοπὰς καὶ γῆς ἀναδασμόν (*khreôn apokopàs kaì gês anadasmón*) : « abolition des dettes et partage des terres ».",
   "pregunta": "Que fait ta cité ?",
   "opts": [
    {
     "t": "Réclamer jusqu’au dernier obole.",
     "razon": "Ce qui a été convenu s’exécute.",
     "ef": {
      "arm": -2,
      "ap": 1
     },
     "r": "Les caisses se remplissent (+1 AP) ; les endettés deviennent des frelons qui n’ont plus rien à perdre (−2 d’harmonie)."
    },
    {
     "t": "Remettre une partie des dettes par une loi, comme Solon.",
     "razon": "Une loi à mi-chemin évite la rupture.",
     "ef": {
      "arm": 1,
      "ap": -1
     },
     "r": "Ni les riches ni les pauvres ne sont tout à fait contents (+1 d’harmonie, −1 AP)."
    },
    {
     "t": "Qu’un protecteur du peuple promette d’effacer toutes les dettes.",
     "razon": "Il faut donner au peuple ce qu’il demande.",
     "ef": {
      "arm": 2,
      "escolta": true
     },
     "r": "Le peuple l’acclame (+2 d’harmonie). Platon dirait que c’est ainsi que commence le tyran."
    }
   ],
   "platon": {
    "txt": "Ceux qui gouvernent en oligarchie, en prêtant de l’argent, « multiplient dans la cité les frelons et les mendiants » (paraphrase) ; et celui qui aspire à la tyrannie gagne le peuple en promettant d’« abolir les dettes et de partager la terre ».",
    "loc": "République VIII, 555e et 565e-566a"
   },
   "critica": {
    "autor": "Aristote",
    "txt": "Il compte la *seisákhtheia* de Solon (« l’allègement des charges ») comme un remède qui a évité la tyrannie, et non comme ce qui l’a apportée (paraphrase).",
    "loc": "Constitution d’Athènes 6 et 11-12"
   },
   "glo": [
    "g-alma-concupiscible"
   ],
   "fase": 2,
   "nota": "La même mesure, lue comme réforme ou comme démagogie : débat ouvert sur la dette et le pouvoir. Phase : oligarchie → démocratie."
  },
  {
   "id": "a_stasis",
   "emoji": "🔥",
   "quien": "Les deux camps",
   "loc": "République VIII, 556e-557a",
   "situacion": "Riches et pauvres s’entretuent dans les rues ; chaque camp appelle à son secours des alliés du dehors. Les deux exigent de tes gardiens qu’ils choisissent.",
   "cita": "« La démocratie naît, je crois, lorsque les pauvres l’emportent. »",
   "griego": "στάσις (*stásis*) : « discorde, guerre civile ».",
   "pregunta": "Avec qui va ta cité ?",
   "opts": [
    {
     "t": "Avec les riches : il faut conserver l’ordre.",
     "razon": "Sans ordre, pas de cité.",
     "req": "ejercito",
     "si": {
      "ef": {
       "arm": -1,
       "ap": 1
      },
      "r": "Ton armée écrase la révolte (+1 AP), mais la blessure reste ouverte (−1 d’harmonie)."
     },
     "no": {
      "ef": {
       "arm": -3
      },
      "r": "Les riches perdent ; les vainqueurs ne pardonnent pas (−3 d’harmonie)."
     }
    },
    {
     "t": "Avec les pauvres : ils sont la majorité.",
     "razon": "La cité appartient à ceux qui sont les plus nombreux.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "Les pauvres gagnent et se partagent les charges (+2 AP). La cité descend une marche vers la liberté (−2 d’harmonie)."
    },
    {
     "t": "Servir de médiateur entre les deux camps.",
     "razon": "Une cité divisée n’est pas une cité.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 2
      },
      "r": "Tes gardiens obtiennent une trêve (+2 d’harmonie)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "zsj": -1
      },
      "r": "Les deux camps t’accusent de trahison (−1 d’harmonie et −1 de sagesse chacun)."
     }
    }
   ],
   "platon": {
    "txt": "« La démocratie naît, je crois, lorsque les pauvres l’emportent : ils tuent les uns, bannissent les autres, et avec ceux qui restent ils se partagent à égalité le gouvernement et les charges. »",
    "loc": "République VIII, 556e-557a"
   },
   "critica": {
    "autor": "Aristote",
    "txt": "Les guerres civiles naissent d’idées opposées de l’égalité : les uns croient devoir être égaux en tout parce qu’ils le sont en quelque chose, les autres inégaux en tout parce qu’ils le sont en quelque chose (paraphrase).",
    "loc": "Politique V 1, 1301a25-b4"
   },
   "glo": [
    "g-la-ciudad-justa"
   ],
   "fase": 2,
   "nota": "La *stásis* comme moteur du changement de régime ; pour Platon, la discorde est toujours le principe de la chute. Phase : oligarchie → démocratie."
  },
  {
   "id": "a_arginusas",
   "emoji": "🌊",
   "quien": "L’assemblée",
   "loc": "Apologie de Socrate 32b-c",
   "situacion": "La cité a gagné une bataille navale, mais une tempête a empêché de secourir les naufragés. L’assemblée, furieuse, veut condamner tous les généraux en un seul vote. La loi l’interdit.",
   "cita": "« J’ai estimé que je devais courir le risque avec la loi et avec le juste. »",
   "griego": "",
   "pregunta": "Que fait celui qui préside l’assemblée ?",
   "opts": [
    {
     "t": "Voter : le peuple est souverain.",
     "razon": "Ce que décide l’assemblée est la loi.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "L’assemblée se sent forte (+2 AP). Les généraux sont exécutés et l’année suivante la cité s’en repent (−2 d’harmonie)."
    },
    {
     "t": "Refuser de voter une mesure illégale.",
     "razon": "Même le peuple n’est pas au-dessus de la loi.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "Tes gardiens défendent la loi même si on les traite de traîtres (+1 d’harmonie, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Un seul refuse et on l’écarte (−1 d’harmonie)."
     }
    },
    {
     "t": "Proposer des jugements séparés.",
     "razon": "Chacun mérite son propre jugement.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Tu calmes l’assemblée… pour un jour (+1 d’harmonie)."
     },
     "no": {
      "ef": {
       "ap": -1
      },
      "r": "Personne ne t’écoute (−1 AP)."
     }
    }
   ],
   "platon": {
    "txt": "« Je fus le seul des prytanes à m’opposer à ce que vous fassiez quoi que ce soit contre les lois, et je votai contre ; et bien que les orateurs fussent prêts à me dénoncer et à me faire arrêter, j’ai estimé que je devais courir le risque avec la loi et avec le juste. »",
    "loc": "Apologie de Socrate 32b-c ; cf. République VIII, 557b et 562d"
   },
   "critica": {
    "autor": "Aristote",
    "txt": "Beaucoup de personnes réunies peuvent juger mieux que quelques experts, comme un banquet payé par tous vaut mieux que celui d’un seul (paraphrase). L’erreur des Arginuses fut-elle celle de la démocratie ou celle d’avoir violé ses propres lois ?",
    "loc": "Politique III 11, 1281a42-b10"
   },
   "glo": [
    "g-justicia"
   ],
   "fase": 3,
   "nota": "L’assemblée au-dessus de la loi ; attention à ne pas y lire une condamnation de la démocratie pure et simple : l’objection ouvre le débat. (Apologie de Socrate)."
  },
  {
   "id": "a_demagogo",
   "emoji": "📣",
   "quien": "Un orateur",
   "loc": "République VIII, 565c-d",
   "situacion": "La cité a faim. Un orateur promet du blé bon marché pour tous si on lui donne le commandement ; il n’y a pas de blé pour tenir cette promesse.",
   "cita": "« De cette racine, et d’aucune autre, naît le tyran. »",
   "griego": "προστάτης (*prostátes*) : « protecteur, celui qui se met à la tête ».",
   "pregunta": "Que fait l’assemblée ?",
   "opts": [
    {
     "t": "Lui donner le commandement : il promet ce dont nous avons besoin.",
     "razon": "Quand on a faim, on n’attend pas.",
     "ef": {
      "arm": 1,
      "ap": 2,
      "escolta": true
     },
     "r": "On t’acclame (+1 d’harmonie, +2 AP). Quand le blé n’arrivera pas, il cherchera un ennemi extérieur pour qu’on oublie la faim."
    },
    {
     "t": "Écouter celui qui dit la vérité : il faudra se serrer la ceinture.",
     "razon": "Une promesse impossible est un mensonge.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "La cité accepte le sacrifice parce qu’elle en comprend la raison (+1 d’harmonie, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Personne ne sait l’expliquer et la faim se change en rage (−2 d’harmonie)."
     }
    },
    {
     "t": "Répartir ce qu’il y a à un prix juste.",
     "razon": "Le peu qu’on a, partagé, suffit à tous.",
     "ef": {
      "ap": -2
     },
     "r": "Personne ne s’enrichit et personne ne meurt de faim (−2 AP)."
    }
   ],
   "platon": {
    "txt": "Le peuple a coutume de « mettre un homme à sa tête comme protecteur, de le nourrir et de le faire grand » ; et « de cette racine, et d’aucune autre, naît le tyran ». Ensuite, pour que le peuple ait besoin d’un chef, « il provoque toujours quelque guerre ».",
    "loc": "République VIII, 565c-d et 566e-567a"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "Il propose de remplacer « qui doit gouverner ? » par « comment empêcher que les mauvais gouvernants fassent trop de mal ? » (paraphrase).",
    "loc": "La Société ouverte et ses ennemis, I, chap. 7 (1945)"
   },
   "glo": [
    "g-tirania"
   ],
   "fase": 3,
   "nota": "Le passage de la démocratie à la tyrannie selon Platon ; le jeu l’expose et laisse ouverte la question des remèdes."
  },
  {
   "id": "a_golpe",
   "emoji": "🏯",
   "quien": "Le protecteur du peuple",
   "loc": "République VIII, 565d-566b",
   "situacion": "Le protecteur du peuple revient blessé et dit que ses ennemis l’ont attaqué. Il demande une garde personnelle ; ses partisans lui proposent, en plus, de prendre l’Acropole cette nuit même.",
   "cita": "« La célèbre demande des tyrans. »",
   "griego": "",
   "pregunta": "Que fait ta cité ?",
   "opts": [
    {
     "t": "Lui donner la garde : il faut le protéger.",
     "razon": "S’il lui arrive quelque chose, qui défendra le peuple ?",
     "req": "semilla",
     "si": {
      "ef": {
       "arm": -3
      },
      "r": "Il avait déjà préparé le terrain : la cité se réveille avec un maître (−3 d’harmonie)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "escolta": true
      },
      "r": "Il reçoit une petite garde. C’est le premier pas (−1 d’harmonie)."
     }
    },
    {
     "t": "La lui refuser et prévenir le Conseil.",
     "razon": "Celui qui demande des armes contre ses concitoyens a déjà choisi.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 2,
       "ap": -1
      },
      "r": "Le coup est désamorcé (+2 d’harmonie, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Personne n’ose refuser (−2 d’harmonie)."
     }
    },
    {
     "t": "Répondre à ce que demandent ses partisans, mais par des lois.",
     "razon": "Ils auront bien un peu raison s’ils sont si nombreux.",
     "ef": {
      "arm": 1,
      "ap": -2
     },
     "r": "Certains s’en contentent et d’autres te traitent de mou (+1 d’harmonie, −2 AP)."
    }
   ],
   "platon": {
    "txt": "Quand le protecteur se voit en danger, il demande au peuple une garde personnelle, « la célèbre demande des tyrans », et le peuple la lui donne, craignant pour lui et confiant en soi.",
    "loc": "République VIII, 565d-566b (l’exemple historique est Pisistrate ; Hérodote I 59)"
   },
   "critica": {
    "autor": "Aristote",
    "txt": "Le gouvernement de Pisistrate fut modéré et populaire, « plus d’un citoyen que d’un tyran », et beaucoup s’en souvenaient comme d’un âge d’or (paraphrase).",
    "loc": "Constitution d’Athènes 16"
   },
   "glo": [
    "g-tirania"
   ],
   "fase": 3,
   "nota": "Comment naît un tyran à partir de la faveur populaire ; l’objection empêche de réduire le problème aux « méchants » et aux « bons ». Phase : démocratie → tyrannie."
  },
  {
   "id": "a_conjura",
   "emoji": "🗡️",
   "quien": "Le tyran",
   "loc": "République VIII, 567b-c",
   "situacion": "La cité est depuis des années aux mains d’un tyran. Le bruit court d’un complot pour le tuer lors de la prochaine procession.",
   "cita": "« Une purge contraire à celle des médecins. »",
   "griego": "",
   "pregunta": "Que fait le tyran ?",
   "opts": [
    {
     "t": "Plus de garde et des exécutions préventives.",
     "razon": "Mieux vaut prévenir que tomber.",
     "ef": {
      "arm": -2,
      "ap": 1,
      "zsj": -1
     },
     "r": "Il survit (+1 AP), mais il élimine les meilleurs (−2 d’harmonie et −1 de sagesse pour chaque gardien)."
    },
    {
     "t": "Rendre les lois et renoncer.",
     "razon": "Un pouvoir qui ne se maintient que par la peur ne vaut pas la peine.",
     "ef": {
      "arm": 3,
      "ap": -3
     },
     "r": "Peu de tyrans l’ont fait. La cité respire (+3 d’harmonie) et repart de zéro (−3 AP)."
    },
    {
     "t": "Ne pas en tenir compte : personne n'osera.",
     "razon": "Celui qui craint tout le monde a déjà perdu.",
     "req": "defensa",
     "si": {
      "ef": {
       "arm": -1
      },
      "r": "Cette fois, il ne se passe rien… pour le moment (−1 d’harmonie)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "kill": [
        "Z",
        1
       ]
      },
      "r": "Le complot réussit à moitié : l’un de tes gardiens tombe (−1 d’harmonie)."
     }
    }
   ],
   "platon": {
    "txt": "Le tyran doit se débarrasser de tous ceux qui valent quelque chose, « une purge contraire à celle des médecins : eux ôtent le pire et laissent le meilleur, et lui fait l’inverse ». Et il vit « enfermé comme dans une prison », le seul de la cité qui ne puisse voyager ni voir ce que voient les autres.",
    "loc": "République VIII, 567b-c ; IX, 579b-c"
   },
   "critica": {
    "autor": "Thucydide",
    "txt": "Athènes éleva une statue aux tyrannicides Harmodios et Aristogiton ; Thucydide corrige la légende : ils tuèrent le frère du tyran, et pour une offense privée, non pour la liberté (paraphrase).",
    "loc": "Histoire de la guerre du Péloponnèse VI 54-59"
   },
   "glo": [
    "g-tirania"
   ],
   "fase": 4,
   "nota": "L’âme du tyran à l’œuvre : celui qui peut le plus est le plus prisonnier. Simplifié : la mort d’un gardien « avec une probabilité de 0,4 » dépend désormais de la « défense ». (Rép. VIII-IX)."
  },
  {
   "id": "a_siracusa",
   "emoji": "🏛️",
   "quien": "Un tyran de Sicile",
   "loc": "Lettre VII 328b-c",
   "situacion": "Un tyran d’une autre cité invite tes meilleurs gardiens à sa cour : il veut qu’ils fassent de lui un gouvernant philosophe.",
   "cita": "« Rien qu’un homme de paroles, qui n’ose jamais mettre la main à une œuvre. » (paraphrase)",
   "griego": "",
   "pregunta": "Les laisses-tu partir ?",
   "opts": [
    {
     "t": "Qu’ils y aillent et tentent de l’éduquer pour de bon.",
     "razon": "Si le philosophe n’agit pas, à quoi sert-il ?",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "Le tyran adoucit une loi. C’est peu, mais ce n’est pas rien (+1 d’harmonie, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "ap": -2
      },
      "r": "Il se lasse d’eux et les vend comme esclaves ; tu paies la rançon (−1 d’harmonie, −2 AP)."
     }
    },
    {
     "t": "Qu’ils y aillent pour l’influence et l’argent.",
     "razon": "Un ami puissant aide toujours.",
     "ef": {
      "ap": 2,
      "zsj": -1
     },
     "r": "Ils reviennent riches et moins sages (+2 AP, −1 de sagesse chacun)."
    },
    {
     "t": "Qu’ils n’y aillent pas : on ne pactise pas avec un tyran.",
     "razon": "On n’éduque pas celui qui ne veut pas apprendre.",
     "ef": {},
     "r": "Syracuse reste la même, et ta cité aussi."
    }
   ],
   "platon": {
    "txt": "Il alla à Syracuse surtout par honte de lui-même, pour ne pas apparaître comme « rien qu’un homme de paroles, qui n’ose jamais mettre la main à une œuvre » (paraphrase ; authenticité discutée).",
    "loc": "Lettre VII 328b-c ; cf. République V, 473c-d"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "Il lit ces voyages comme la preuve que Platon cherchait un tyran docile ; d’autres lecteurs, comme la preuve que la philosophie ne peut pas gouverner celui qui ne veut pas apprendre (paraphrase).",
    "loc": "La Société ouverte et ses ennemis, I (1945)"
   },
   "glo": [
    "g-sabiduria",
    "g-tirania"
   ],
   "fase": 4,
   "nota": "La proposition du philosophe-roi mise à l’épreuve de l’histoire ; pont vers le mythe d’Er. Lettre VII en paraphrase (authenticité discutée)."
  },
  {
   "id": "a_amnistia",
   "emoji": "🕊️",
   "quien": "Ceux qui ont souffert",
   "loc": "Lettre VII 325b-c",
   "situacion": "Le gouvernement qui en a persécuté tant d’autres est tombé. Ses collaborateurs sont toujours dans la cité. Ceux qui ont souffert réclament un châtiment.",
   "cita": "« Ceux qui revinrent alors usèrent de beaucoup de modération. » (paraphrase)",
   "griego": "ἀμνηστία (*amnestía*) : « oubli » des maux passés.",
   "pregunta": "Que fait la cité ?",
   "opts": [
    {
     "t": "La vengeance : que tous paient.",
     "razon": "Sans châtiment, pas de justice.",
     "ef": {
      "arm": -2,
      "ap": 1
     },
     "r": "On confisque leurs biens (+1 AP) ; la cité se divise de nouveau (−2 d’harmonie)."
    },
    {
     "t": "Amnistie générale : interdit de rappeler les maux passés.",
     "razon": "La cité a besoin de redevenir une.",
     "ef": {
      "arm": 2,
      "ap": -1
     },
     "r": "La cité respire (+2 d’harmonie), même si beaucoup de coupables restent impunis (−1 AP)."
    },
    {
     "t": "Un procès seulement pour ceux qui ont tué de leurs propres mains.",
     "razon": "Ni vengeance ni oubli : la justice.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Une justice difficile, mais une justice (+1 d’harmonie)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Les procès tournent au règlement de comptes (−1 d’harmonie)."
     }
    }
   ],
   "platon": {
    "txt": "Après la chute des Trente, « ceux qui revinrent alors usèrent de beaucoup de modération » (paraphrase ; authenticité discutée) ; et pourtant c’est cette même démocratie restaurée qui jugea Socrate.",
    "loc": "Lettre VII 325b-c ; cf. République VIII, 545d"
   },
   "critica": {
    "autor": "Aristote",
    "txt": "Il loue cette réconciliation comme la plus noble et la plus politique qu’il connaisse (paraphrase).",
    "loc": "Constitution d’Athènes 40, 2-3"
   },
   "glo": [
    "g-justicia",
    "g-la-ciudad-justa"
   ],
   "fase": 1,
   "nota": "La seule carte du paquet qui freine la chute par le bas : la cité ne remonte pas de régime (546a), mais l’harmonie retrouvée retarde la descente suivante. Elle sort après une descente de régime (phase 1 ou pire). Lettre VII en paraphrase (authenticité discutée)."
  }
 ],
 "almas": [
  {
   "id": "alma_razon",
   "name": "L’âme aristocratique (la raison gouverne)",
   "lema": "Chaque partie fait ce qui lui revient, y compris à l’intérieur de l’âme.",
   "txt": "La raison (*logistikón*) commande, l’ardeur (*thymós*) la défend et l’appétit (*epithymía*) obéit. La justice n’est pas seulement politique : c’est l’ordre intérieur des trois parties de l’âme.",
   "loc": "République IV, 441c-442d ; IX, 580d-581a"
  },
  {
   "id": "alma_thymos",
   "name": "L’âme timocratique (l’ardeur gouverne)",
   "lema": "Elle aime l’honneur et le pouvoir plus que le savoir.",
   "txt": "L’être humain timocratique remet le commandement, en lui-même, à l’élément irascible et amoureux de la victoire. Le *thymós* est la partie irascible ou ardente ; son excès est l’ambition (*philotimía*).",
   "loc": "République VIII, 548d-550b"
  },
  {
   "id": "alma_epithymia_nec",
   "name": "L’âme oligarchique (l’appétit nécessaire gouverne)",
   "lema": "Elle épargne, craint de dépenser et laisse inassouvi tout désir qui ne rapporte rien.",
   "txt": "L’être humain oligarchique met sur le trône l’élément appétitif et amoureux de l’argent. L’*epithymía* est la partie appétitive ; ici domine sa forme « nécessaire », celle de l’argent.",
   "loc": "République VIII, 553a-554e"
  },
  {
   "id": "alma_epithymia_libre",
   "name": "L’âme démocratique (les appétits égaux gouvernent)",
   "lema": "Elle appelle l’impudence courage, et l’anarchie liberté.",
   "txt": "Elle vit en s’abandonnant chaque jour au désir qui se présente : aujourd’hui elle boit et écoute de la musique, demain elle jeûne, après-demain elle fait de la politique. Sans une partie qui commande, il n’y a d’ordre ni au-dedans ni au-dehors : la liberté sans mesure met sur le même plan le nécessaire et le superflu.",
   "loc": "République VIII, 561a-561e"
  },
  {
   "id": "alma_eros_tirano",
   "name": "L’âme tyrannique (le désir à l’aiguillon gouverne : Éros)",
   "lema": "Celui qui peut tout au-dehors est le plus esclave au-dedans.",
   "txt": "Dans l’âme du tyran, un désir directeur gouverne les autres comme un aiguillon ; il est réellement esclave bien qu’il commande, plein de peur, sans amis, incapable de faire ce qu’il veut : le plus malheureux des êtres humains. On expose l’argument de Platon, non un jugement sur un régime réel.",
   "loc": "République IX, 571a-580a"
  }
 ],
 "tabla": [
  {
   "name": "Aristocratie",
   "alma": "raison (*logistikón*)",
   "causa": "discorde entre ceux qui gouvernent",
   "cita": "« Que chacun fasse ce qui est le sien… voilà la justice. »",
   "loc": "République IV, 433a"
  },
  {
   "name": "Timocratie",
   "alma": "ardeur (*thymós*)",
   "causa": "l’amour de l’argent chasse l’honneur",
   "cita": "« Toute constitution change… lorsque la discorde surgit. »",
   "loc": "République VIII, 545d"
  },
  {
   "name": "Oligarchie",
   "alma": "appétit nécessaire (l’argent)",
   "causa": "les pauvres l’emportent sur les riches ; la cité se divise",
   "cita": "« Plus ils estiment la richesse, moins ils estiment la vertu. »",
   "loc": "République VIII, 550e"
  },
  {
   "name": "Démocratie",
   "alma": "appétits égaux (la liberté)",
   "causa": "l’excès de liberté appelle un protecteur",
   "cita": "« Chacun peut faire ce qu’il veut. »",
   "loc": "République VIII, 557b"
  },
  {
   "name": "Tyrannie",
   "alma": "désir-roi (Éros)",
   "causa": "le bas de l’échelle : l’effondrement",
   "cita": "« La liberté excessive… en excessive servitude. »",
   "loc": "République VIII, 564a"
  }
 ]
};
