// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/republica_mazo_b.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const REP_MAZO_B = {
 "acciones": [
  {
   "id": "oficio",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Un métier par personne",
   "d": "Chacun fait une seule chose, la sienne : +6 de production et, si les producteurs ne débordent pas la cité, +1 d’harmonie.",
   "cita": "« Chacun de nous ne naît pas semblable à un autre, mais différent par nature, apte à une tâche différente. Et l’on fait plus, mieux et plus aisément quand on fait une seule chose, la sienne, en son temps, en laissant les autres. »",
   "loc": "République II, 370a-c ; IV, 433a-b",
   "nota": "La division du travail est l’origine de la cité et la racine de la justice : faire ce qui est sien. C’est pourquoi cette carte ouvre le jeu. Simplifié : « aucune classe ne déborde » se mesure ainsi : « les producteurs ne sont pas une majorité excessive ».",
   "ef": {
    "prod": 6,
    "si": {
     "req": "!mayoriaE",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_mercado",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Marché et monnaie",
   "d": "La cité gagne en confort, non en justice : +10 de production, sans harmonie. Ouvre la porte à « La cité gonflée ».",
   "cita": "« Il faudra des marchands, un marché et une monnaie, symbole de l’échange. Ainsi la cité grandit. Mais si nous recherchons le luxe, nous ne fondons plus une cité saine, mais une cité fiévreuse, gonflée de choses inutiles. »",
   "loc": "République II, 371a-d ; 372e-373a",
   "nota": "Platon distingue la pólis « saine » de la « gonflée », φλεγμαίνουσα (*phlegmaínousa*). Le bien-être matériel n’est pas, en soi, la justice : utile pour débattre de croissance et de limites.",
   "ef": {
    "prod": 10
   }
  },
  {
   "id": "b_labranza",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Partage des terres et des tâches",
   "d": "+8 de production. Si les producteurs nourrissent toute la population, +1 d’harmonie en plus.",
   "cita": "« Le laboureur ne se fabriquera pas lui-même la charrue ni la houe : c’est le forgeron qui les lui fera. Ainsi chaque métier sert les autres, et des besoins de beaucoup naît la cité. »",
   "loc": "République II, 369b-370a",
   "nota": "La classe des producteurs n’est pas la méprisable : elle est le fondement. Sans sa tempérance et son travail, ni gouvernement ni défense ne tiennent.",
   "ef": {
    "prod": 8,
    "si": {
     "req": "alimenta",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_frugalidad",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Cité saine, non gonflée",
   "d": "Renoncer au luxe : +1 d’harmonie et, ce tour-ci, « La cité gonflée » ne fait pas de dégâts, mais −4 de production.",
   "cita": "« Veux-tu que nous examinions d’abord une cité saine ? Ils mangeront du pain et boiront du vin, ils auront du sel, des olives et du fromage ; ils feront cuire des oignons et des légumes. Et ils passeront leur vie en paix et en bonne santé, et mourront vieux, léguant à leurs enfants la même vie. »",
   "loc": "République II, 372a-d",
   "nota": "L’austérité de la première cité. Glaucon l’appelle « cité de porcs » ; le débat entre nécessité et désir reste ouvert, sans verdict.",
   "ef": {
    "arm": 1,
    "prod": -4,
    "escudo": {
     "tags": [
      "b_ev_hinchada"
     ],
     "turnos": 1
    }
   }
  },
  {
   "id": "musica",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Éducation : musique (μουσική, *mousiké*)",
   "d": "Le rythme et l’harmonie accordent l’âme : +1 de courage et +1 de tempérance pour chaque gardien auxiliaire. Prépare « Le gardien accordé ».",
   "cita": "« L’éducation par la musique est souveraine, parce que le rythme et l’harmonie pénètrent jusqu’au plus profond de l’âme et, si on l’éduque bien, la rendent gracieuse ; et si mal, le contraire. »",
   "loc": "République III, 401d-402a ; II, 376e-377a",
   "nota": "Pour Platon, la « musique » embrasse parole, récit et mélodie : elle forme le caractère avant le raisonnement. Éduquer, c’est accorder l’âme.",
   "ef": {
    "gv": 1,
    "et": 1
   }
  },
  {
   "id": "b_gimnasia",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Éducation : gymnastique (γυμναστική, *gymnastiké*)",
   "d": "+1 de courage pour chaque gardien auxiliaire. Si « Musique » a déjà été jouée, +1 d’harmonie pour l’équilibre atteint.",
   "cita": "« Ce n’est pas le corps bon qui rend l’âme bonne, mais l’inverse : l’âme bonne, par sa vertu, rend le corps le meilleur possible. La gymnastique et la musique ne sont pas l’une pour le corps et l’autre pour l’âme : toutes deux éduquent, surtout, l’âme. »",
   "loc": "République III, 403c-404e ; 410b-c",
   "nota": "La gymnastique sans la musique rend brutal ; la musique sans la gymnastique amollit. Simplifié : sans Musique, pas de châtiment adéquat (le jeu parlait d’un gardien « féroce » aussi avec les siens).",
   "ef": {
    "gv": 1,
    "si": {
     "req": "flag:musica",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_equilibrio_guardian",
   "v": "b",
   "fase": 1,
   "ap": 2,
   "name": "Le gardien accordé",
   "d": "Après Musique et Gymnastique : +2 d’harmonie. Le gardien est féroce avec l’ennemi et doux avec les siens : « Guerre pour le territoire » fait moitié moins de dégâts.",
   "cita": "« Celui qui mêle musique et gymnastique dans la mesure la plus juste et les applique à l’âme avec proportion, celui-là nous l’appellerons le plus parfaitement éduqué et le plus harmonieux, bien plus que l’accordeur de cordes. »",
   "loc": "République III, 410c-412a",
   "nota": "Le juste mélange, μετριότης (*metriótes*) : le cœur bien éduqué est l’allié de la raison (440e-441a). Simplifié : Gymnastique est exigée et le +2 n’arrive que si Musique a aussi été jouée ; la moitié des dégâts est appliquée par l’événement.",
   "req": "flag:b_gimnasia",
   "ef": {
    "si": {
     "req": "flag:musica",
     "ef": {
      "arm": 2
     }
    }
   }
  },
  {
   "id": "pruebas",
   "v": "b",
   "fase": 1,
   "ap": 2,
   "name": "Épreuves des gardiens",
   "d": "Si les auxiliaires sont éduqués, le meilleur devient gouvernant (1 auxiliaire devient gouvernant). Sinon, on promeut celui qui ne le devait pas : −1 d’harmonie.",
   "cita": "« Il faut les observer à tous les âges, pour voir s’ils gardent ce principe et ne se laissent ni ensorceler ni forcer jusqu’à oublier l’opinion qu’il faut faire le meilleur pour la cité. Celui qui sortira pur de l’épreuve, comme l’or éprouvé par le feu, nous le mettrons à la tête comme chef et gardien. »",
   "loc": "République III, 413c-414a",
   "nota": "Les gouvernants sortent des gardiens par un mérite éprouvé, non par la naissance (415b-c). Simplifié : l’éducation se vérifie seulement avec Gymnastique jouée (le jeu exige Musique et Gymnastique).",
   "ef": {
    "arm": -1,
    "si": {
     "req": "flag:b_gimnasia",
     "ef": {
      "arm": 1,
      "mov": [
       "G",
       "Z",
       1
      ]
     }
    }
   }
  },
  {
   "id": "mito",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Le mythe des métaux",
   "d": "Un récit partagé fait la cohésion de la pólis : +2 d’harmonie et, pendant 2 tours, « Révolte pour cause d’inégalité » ne fait pas de dégâts.",
   "cita": "« Nous dirons : vous êtes frères, mais le dieu, en vous formant, a mêlé de l’or à ceux qui sont capables de commander, de l’argent aux auxiliaires, et du fer et du bronze aux laboureurs et aux artisans. Et la première et la plus importante chose que le dieu ordonne est de veiller au métal que porte l’âme de chaque enfant. »",
   "loc": "République III, 414b-415c",
   "nota": "Le « noble mensonge », γενναῖον ψεῦδος (*gennaîon pseûdos*). Peut-on fonder une cité juste sur un récit qui n’est pas littéralement vrai ? Popper y voit de la propagande ; d’autres, un mythe fondateur. Simplifié : sans le choix « vérité / symbole ».",
   "ef": {
    "arm": 2,
    "escudo": {
     "tags": [
      "b_ev_desigualdad"
     ],
     "turnos": 2
    }
   }
  },
  {
   "id": "b_hijo_bronce",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Un fils de bronze dans une maison d’or",
   "d": "Après le mythe : chacun dans la classe de son âme, non de sa famille. Un producteur à l’âme d’or devient gouvernant ; +1 d’harmonie si la cité reste en équilibre.",
   "cita": "« Si d’eux naît un enfant avec du bronze ou du fer dans l’âme, qu’ils n’aient aucune pitié : qu’ils lui donnent le rang que sa nature mérite et le repoussent vers les artisans ou les laboureurs. Et si de ceux-ci naît un enfant avec de l’or ou de l’argent, qu’ils l’honorent et le conduisent en haut. »",
   "loc": "République III, 415a-c",
   "nota": "La juste contrepartie du mythe : la classe tient à la nature de l’âme, non à l’hérédité. Simplifié : le mouvement va toujours de producteur à gouvernant (le jeu admettait aussi l’inverse).",
   "req": "flag:mito",
   "ef": {
    "mov": [
     "E",
     "Z",
     1
    ],
    "si": {
     "req": "equilibrio",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "comun",
   "v": "b",
   "fase": 1,
   "ap": 2,
   "name": "Des gardiens sans propriété",
   "d": "Sans maison, terre ni or à eux : +2 d’harmonie et pas de faction au sein du gouvernement, mais −6 de production. Ouvre le débat « Les gardiens sont-ils heureux ? ».",
   "cita": "« Aucun n’aura maison, terre ni bien propre. Ils recevront leur subsistance des autres, comme salaire de leur garde, et la dépenseront en commun. Eux seuls n’ont pas le droit de toucher à l’or et à l’argent, de peur que, possédant du leur, ils cessent de garder le bien de tous. »",
   "loc": "République III, 416d-417b",
   "nota": "La communauté des biens des gardiens. C’est précisément ce que critique Aristote (Politique II, 1261a-1264b) : on néglige ce qui est commun. Débat ouvert.",
   "ef": {
    "arm": 2,
    "prod": -6
   }
  },
  {
   "id": "rey",
   "v": "b",
   "fase": 2,
   "ap": 3,
   "name": "Le roi-philosophe",
   "d": "Seulement s’il y a un gouvernant d’une sagesse pleine : +3 d’harmonie. Sans lui, la carte est bloquée.",
   "cita": "« Si les philosophes ne règnent pas dans les cités, ou si ceux qu’on appelle aujourd’hui rois ne philosophent pas vraiment et avec force, et si le pouvoir politique et la philosophie ne coïncident pas, il n’y a pas de répit pour les maux des cités ni, je crois, pour ceux du genre humain. »",
   "loc": "République V, 473c-d",
   "nota": "La thèse la plus célèbre et la plus discutée : Popper y voit la racine de l’autoritarisme ; d’autres la lisent comme « que commande celui qui sait, non celui qui veut ». Simplifié : ne double pas les cartes de sagesse.",
   "req": "sabios",
   "ef": {
    "arm": 3
   }
  },
  {
   "id": "bajar",
   "v": "b",
   "fase": 2,
   "ap": 2,
   "name": "Retourner dans la caverne",
   "d": "Après le roi philosophe : s’il y a des gouvernants sages qui redescendent gouverner, +2 d’harmonie au début de chacun des 2 tours suivants.",
   "cita": "« Vous redescendrez, chacun à votre tour, dans la demeure des autres, et vous vous habituerez à voir dans l’obscurité. Car vous aurez vu la vérité du beau, du juste et du bon ; et ainsi la cité sera gouvernée éveillée, et non en rêve, comme celles d’aujourd’hui, qui se battent pour des ombres. »",
   "loc": "République VII, 519c-520d",
   "nota": "Le philosophe ne reste pas en haut : sa justice est de redescendre gouverner. Simplifié : l’effet dure 2 tours (non le reste de la partie) et ne s’interrompt pas si les gouvernants disparaissent.",
   "req": "flag:rey",
   "ef": {
    "si": {
     "req": "sabios",
     "ef": {
      "dura": {
       "k": "arm",
       "n": 2,
       "turnos": 2
      }
     }
    }
   }
  },
  {
   "id": "b_consejo",
   "v": "b",
   "fase": 2,
   "ap": 1,
   "name": "Conseil qui délibère",
   "d": "Les gouvernants délibèrent sur le tout : +1 de sagesse pour chaque gouvernant et +1 d’harmonie.",
   "cita": "« La cité fondée selon la nature serait sage tout entière par cette partie, la plus petite, qui est à sa tête et commande ; et il revient à celle-ci, semble-t-il, de participer à la science qui, seule entre toutes, doit s’appeler σοφία (*sophía*). »",
   "loc": "République IV, 428c-429a",
   "nota": "La sagesse de la cité consiste à savoir délibérer sur le tout, non dans la somme des savoirs techniques. Simplifié : +1 de sagesse par gouvernant (le jeu disait +2).",
   "ef": {
    "zsj": 1,
    "arm": 1
   }
  },
  {
   "id": "b_unidad",
   "v": "b",
   "fase": 2,
   "ap": 2,
   "name": "Une seule cité",
   "d": "+1 d’harmonie, ou +2 si les trois fonctions sont remplies. Le tour suivant, « Faction au sein du gouvernement » ne fait pas de dégâts.",
   "cita": "« Y a-t-il pour une cité un mal plus grand que ce qui la disloque et la rend multiple au lieu d’une ? Et un bien plus grand que ce qui l’unit et la rend une ? Quand, parmi les citoyens, le plaisir et la peine sont communs — tous se réjouissent et s’affligent des mêmes choses —, ce partage est ce qui lie la cité. »",
   "loc": "République V, 462a-e ; IV, 423c-d",
   "nota": "L’unité est la fin politique de Platon ; Aristote objecte qu’une cité trop une cesse d’être cité (Politique II, 1261a). Simplifié : annule la faction pendant un tour au lieu de réduire ses dégâts de moitié.",
   "ef": {
    "arm": 1,
    "si": {
     "req": "equilibrio",
     "ef": {
      "arm": 1
     }
    },
    "escudo": {
     "tags": [
      "b_ev_faccion"
     ],
     "turnos": 1
    }
   }
  },
  {
   "id": "b_tamano",
   "v": "b",
   "fase": 2,
   "ap": 1,
   "name": "Ni trop grande ni trop petite",
   "d": "La cité ne grandit que tant qu’elle reste une : si elle compte moins de 30 habitants, +1 d’harmonie pour compenser la pénalité de taille.",
   "cita": "« Jusqu’où la cité veut grandir en restant une, qu’elle grandisse ; mais pas au-delà. Qu’elle ne soit ni petite en apparence ni grande, mais une et suffisante. »",
   "loc": "République IV, 423b-d",
   "nota": "Le critère de taille n’est pas la grandeur, mais l’unité et l’autosuffisance, αὐτάρκεια (*autárkeia*). Simplifié : +1 d’harmonie avec moins de 30 habitants ; ne freine pas la croissance excessive.",
   "ef": {
    "si": {
     "req": "pequena",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_cada_cual_lo_suyo",
   "v": "b",
   "fase": 3,
   "ap": 2,
   "name": "Chacun à sa place",
   "d": "La justice mise en jeu : +3 d’harmonie si sagesse, défense et nourriture sont assurées à la fois ; sinon, +1. Ne retire jamais rien.",
   "cita": "« Ce que nous disions depuis le début — que chacun fasse ce qui est sien — se révèle être la justice, ou une forme de celle-ci. Faire ce qui est sien et ne pas s’occuper de beaucoup de choses : voilà ce qui est juste. »",
   "loc": "République IV, 433a-b ; 443c-d",
   "nota": "La définition opérationnelle de la justice, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*). Simplifié : deux niveaux (+3 ou +1) au lieu de retirer 1 pour chaque classe défaillante.",
   "ef": {
    "arm": 1,
    "si": {
     "req": "equilibrio",
     "ef": {
      "arm": 2
     }
    }
   }
  },
  {
   "id": "b_armonia_alma",
   "v": "b",
   "fase": 3,
   "ap": 2,
   "name": "La cité et l’âme",
   "d": "+2 d’harmonie. Si la raison commande (il y a des gouvernants sages), pendant 2 tours chaque événement négatif retire 1 de moins.",
   "cita": "« Comme dans la cité, trois classes ; ainsi dans l’âme de chacun, trois parties : celle par laquelle on raisonne, celle par laquelle on s’emporte, et celle par laquelle on désire. Est juste celui en qui chaque partie fait ce qui est sien, où la raison commande et où le cœur lui obéit comme un allié. »",
   "loc": "République IV, 439d-441c ; 441d-442d",
   "nota": "Le parallèle âme-cité, ce qui tombe le plus à la PAU : la justice intérieure a la même structure que la justice politique. Simplifié : la protection se décide en jouant la carte.",
   "ef": {
    "arm": 2,
    "si": {
     "req": "sabios",
     "ef": {
      "dura": {
       "k": "menos",
       "n": 1,
       "turnos": 2
      }
     }
    }
   }
  },
  {
   "id": "b_salud_alma",
   "v": "b",
   "fase": 3,
   "ap": 1,
   "name": "Santé de l’âme",
   "d": "Réordonner sans expulser personne : +1 d’harmonie, et +1 de plus si une fonction de la cité est défaillante.",
   "cita": "« Produire la justice, c’est mettre les parties de l’âme dans leur ordre naturel, les unes commandant et les autres obéissant ; produire l’injustice, c’est la révolte des unes contre les autres. La justice est donc la santé de l’âme ; l’injustice, sa maladie. »",
   "loc": "République IV, 443c-444e",
   "nota": "Justice = santé ; injustice = maladie de l’âme : réponse à Glaucon (est-il avantageux d’être juste ?). Simplifié : « corriger un désordre » se traduit par +1 d’harmonie quand l’équilibre manque.",
   "ef": {
    "arm": 1,
    "si": {
     "req": "!equilibrio",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_reparto_virtud",
   "v": "b",
   "fase": 3,
   "ap": 1,
   "name": "Honorer chaque classe",
   "d": "Aucune classe n’est de trop : +1 d’harmonie et +1 de sagesse pour chaque gouvernant, +1 de courage pour chaque auxiliaire et +1 de tempérance pour chaque producteur.",
   "cita": "« Nous ne fondons pas la cité pour qu’une seule classe y soit particulièrement heureuse, mais pour que la cité tout entière le soit autant que possible. Car c’est dans une telle cité que nous espérions trouver la justice. »",
   "loc": "République IV, 420b-421c",
   "nota": "Réponse à Adimante : le bonheur du tout avant celui d’une partie. Le gouvernant juste ne s’enrichit pas ; il sert. En outre, cela évite la « Révolte pour cause d’inégalité ».",
   "ef": {
    "arm": 1,
    "zsj": 1,
    "gv": 1,
    "et": 1
   }
  }
 ],
 "eventos": [
  {
   "id": "b_ev_entrometimiento",
   "v": "b",
   "name": "Le cordonnier veut gouverner",
   "loc": "République IV, 434a-c",
   "cita": "« Que le charpentier essaie de faire le cordonnier, ou le cordonnier le charpentier, en échangeant leurs outils et leurs honneurs, cela ne nuit guère à la cité. Mais que celui qui est par nature artisan se glisse, enhardi, dans la classe guerrière, ou le guerrier dans celle de ceux qui gouvernent sans le mériter : cet échange est la ruine de la cité. »",
   "threat": "Met à l’épreuve la place de chaque classe : sagesse en haut, défense suffisante et nourriture pour tous.",
   "req": "equilibrio",
   "si": {
    "ef": {
     "arm": 1
    },
    "msg": "Chacun est à sa place : +1 d’harmonie."
   },
   "no": {
    "ef": {
     "arm": -2
    },
    "msg": "Une classe se mêle de ce qui n’est pas à elle, πολυπραγμοσύνη (*polypragmosýne*) : −2 d’harmonie."
   },
   "nota": "L’injustice définie : se mêler de ce qui est à autrui. C’est exactement l’envers de « Chacun à sa place »."
  },
  {
   "id": "b_ev_hinchada",
   "v": "b",
   "name": "La cité gonflée",
   "loc": "République II, 372e-373e",
   "cita": "« Si nous voulons voir comment naissent dans la cité la justice et l’injustice, regardons la cité qui se remplit de choses inutiles : chasseurs, artistes, cuisiniers, médecins pour tant d’excès. Le territoire, jusque-là suffisant, devient trop petit ; et il faudra entamer celui des voisins. Et de là, la guerre. »",
   "threat": "Après le marché, si les producteurs sont l’immense majorité, le luxe déborde la cité.",
   "aparece": "flag:b_mercado",
   "req": "!mayoriaE",
   "si": {
    "ef": {},
    "msg": "La cité reste saine : le luxe ne la déborde pas."
   },
   "no": {
    "ef": {
     "arm": -2
    },
    "msg": "La cité se gonfle de choses inutiles et lorgne le territoire du voisin : −2 d’harmonie."
   },
   "nota": "Platon fait dériver la guerre de l’excès de désir, non de la nature. Débat ouvert sur consommation et conflit, sans morale. Simplifié : le « luxe accumulé » se mesure par une majorité de producteurs ; ne s’enchaîne pas avec la guerre."
  },
  {
   "id": "b_ev_desigualdad",
   "v": "b",
   "name": "Révolte pour cause d’inégalité",
   "loc": "République IV, 422e-423a",
   "cita": "« Toute cité, si petite soit-elle, est en réalité deux cités ennemies : celle des pauvres et celle des riches ; et dans chacune, beaucoup d’autres. Si tu les traites comme une seule, tu te trompes. »",
   "threat": "Si personne n’a construit la cohésion (ni le mythe des métaux ni l’honneur rendu à chaque classe), une classe se sent lésée.",
   "req": "flag:mito",
   "si": {
    "ef": {},
    "msg": "Le récit commun soutient la cohésion : personne ne se révolte."
   },
   "no": {
    "ef": {
     "arm": -2,
     "si": {
      "req": "flag:b_reparto_virtud",
      "ef": {
       "arm": 2
      }
     }
    },
    "msg": "Sans récit commun, la cité se scinde en deux : −2 d’harmonie (rien, si tu as honoré chaque classe)."
   },
   "nota": "La cohésion ne va pas de soi : il faut la construire (récit partagé, reconnaissance). Rejoint la critique de l’inégalité. Simplifié : la pólis ne se scinde pas."
  },
  {
   "id": "b_ev_faccion",
   "v": "b",
   "name": "Faction au sein du gouvernement (στάσις, *stásis*)",
   "loc": "République III, 417a-b",
   "cita": "« Possédant terres, maisons et argent à eux, de gardiens ils deviendront maîtres et laboureurs ; d’alliés des autres citoyens, des seigneurs qui haïssent et sont haïs ; et ils passeront leur vie à craindre davantage ceux du dedans que les ennemis du dehors, courant déjà, eux et la cité, vers la perdition. »",
   "threat": "Si les gardiens ont une propriété privée, ils se battent pour ce qui est à eux.",
   "req": "flag:comun",
   "si": {
    "ef": {},
    "msg": "Sans propriété, il n’y a rien pour quoi se battre en haut."
   },
   "no": {
    "ef": {
     "arm": -2,
     "si": {
      "req": "!justos",
      "ef": {
       "kill": [
        "Z",
        1
       ]
      }
     }
    },
    "msg": "Les gouvernants se disputent leurs biens : −2 d’harmonie et, s’ils ne sont pas justes, l’un d’eux tombe."
   },
   "nota": "Pourquoi Platon retire la propriété aux gardiens : pour qu’il n’y ait pas de faction en haut. L’objection d’Aristote attend à « Des gardiens sans propriété ». Simplifié : l’aggravation se mesure avec « justes » ; on ne regarde pas s’ils sont plusieurs."
  },
  {
   "id": "b_ev_sofistas",
   "v": "b",
   "name": "Le maître qui flatte la bête",
   "loc": "République VI, 493a-c",
   "cita": "« C’est comme si quelqu’un, en élevant un animal grand et fort, apprenait ses humeurs et ses appétits : quand il s’apaise et quand il s’emporte, quelles voix le calment ; et que ce savoir, acquis à force de le fréquenter, il l’appelait sagesse. Mais il ne saurait pas lequel de ces goûts de l’animal est beau ou laid, juste ou injuste : il les nomme seulement comme l’opine la bête. »",
   "threat": "Si la sagesse manque en haut, le relativisme séduit la jeunesse.",
   "req": "sabios",
   "si": {
    "ef": {
     "arm": 1
    },
    "msg": "Les arguments sont réfutés : +1 d’harmonie."
   },
   "no": {
    "ef": {
     "arm": -2
    },
    "msg": "Le relativisme séduit la jeunesse : −2 d’harmonie."
   },
   "nota": "La critique platonicienne du sophiste : il confond flatter la foule et savoir. Débat ouvert sur rhétorique, opinion publique et vérité."
  },
  {
   "id": "b_ev_defensa",
   "v": "b",
   "name": "Guerre pour le territoire",
   "loc": "République II, 374a-e",
   "cita": "« Laisserons-nous la guerre au premier venu ? Ou est-ce aussi un métier ? Car si le cordonnier ne peut être à la fois laboureur, tisserand et maçon, comment celui qui a un autre métier serait-il bon à la guerre ? Garder la cité demande plus de soin que n’importe quel travail, et plus de temps, et d’art, et de dévouement. »",
   "threat": "Si les gardiens auxiliaires ne suffisent pas à défendre la population, l’ennemi entre.",
   "req": "defensa",
   "si": {
    "ef": {},
    "msg": "Les gardiens défendent la cité : l’ennemi ne passe pas."
   },
   "no": {
    "ef": {
     "arm": -2,
     "kill": [
      "E",
      2
     ],
     "si": {
      "req": "flag:b_equilibrio_guardian",
      "ef": {
       "arm": 1
      }
     }
    },
    "msg": "L’ennemi entre : −2 d’harmonie et 2 producteurs meurent (−1 d’harmonie si tes gardiens sont accordés)."
   },
   "nota": "La défense est un métier spécialisé : c’est de là que naissent les gardiens. Simplifié : « Le gardien accordé » réduit de moitié la perte d’harmonie, non les morts."
  },
  {
   "id": "b_ev_adimanto",
   "v": "b",
   "name": "Les gardiens sont-ils heureux ?",
   "loc": "République IV, 419a-421c",
   "aparece": "flag:comun",
   "nota": "L’objection d’Adimante et la réponse de Socrate. Question vivante : peut-on demander à certains de renoncer pour le bien commun ? Simplifié : l’option B n’ajoute pas le risque de faction.",
   "elige": {
    "id": "b_ev_adimanto",
    "emoji": "🏠",
    "quien": "Adimante",
    "loc": "République IV, 419a-421c",
    "situacion": "Tes gardiens vivent sans propriété. Adimante proteste : ils commandent dans la cité, mais n’en jouissent pas.",
    "cita": "« Quelqu’un dira que tu ne les rends guère heureux, et que c’est ta faute : maîtres de la cité, ils n’en jouissent pas ; ni terres, ni belles maisons, ni or. — Nous ne fondons pas la cité pour le bonheur à part d’une classe, mais pour celui de l’ensemble ; dans le tout bien gouverné, nous espérons trouver la justice. »",
    "griego": "",
    "pregunta": "Que lui réponds-tu ?",
    "opts": [
     {
      "t": "Le bonheur est celui du tout, non d’une partie.",
      "razon": "On ne fonde pas la cité pour qu’une seule classe soit heureuse.",
      "ef": {
       "arm": 1
      },
      "r": "La cité reste unie (+1 d’harmonie). La question reste ouverte : peuvent-ils être heureux ainsi ?"
     },
     {
      "t": "Il faut leur donner quelque bien, sinon ils partiront.",
      "razon": "Personne ne soutient longtemps un renoncement sans récompense.",
      "ef": {
       "prod": 4
      },
      "r": "Les gardiens sont contents et la cité rend davantage (+4 de production), mais le « mien » se remet à pointer."
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
   }
  },
  {
   "id": "b_ev_tres_olas",
   "v": "b",
   "name": "Les trois vagues",
   "loc": "République V, 457b-c ; 472b-473c",
   "cita": "« Trois vagues nous menacent de rire de nous et de nous engloutir : la communauté des hommes et des femmes, celle des enfants, et la plus grande de toutes, que les philosophes règnent. Mais il faudra dire si cette cité peut exister, et de quelle manière. Car celui qui dessine le modèle du meilleur n’est pas moins bon pour ne pas montrer qu’il peut se réaliser. »",
   "threat": "Épreuve finale : sagesse, défense et nourriture sont-elles assurées à la fois ?",
   "req": "equilibrio",
   "si": {
    "ef": {
     "arm": 3
    },
    "msg": "La cité est possible : +3 d’harmonie."
   },
   "no": {
    "ef": {
     "arm": -1,
     "si": {
      "req": "!defensa",
      "ef": {
       "arm": -1
      }
     }
    },
    "msg": "Une fonction est défaillante : −1 d’harmonie (−2 si, en plus, la défense manque)."
   },
   "nota": "Clôture de l’arc de B : la cité juste est-elle possible, ou n’est-elle qu’un modèle pour nous mesurer ? Platon admet qu’elle ne se réalisera peut-être pas et que, malgré tout, elle sert de patron. Simplifié : −1 ou −2 au lieu de compter chaque fonction défaillante."
  }
 ],
 "clases": [
  {
   "id": "b_gobernantes",
   "name": "Gouvernants — σοφία (*sophía*)",
   "txt": "Ils sont peu nombreux par nature et apportent la sagesse. Si au moins l’un d’eux atteint la sagesse pleine, la cité « voit la lumière » : on peut jouer le Roi philosophe et la première fonction est remplie.",
   "cita": "« La cité est sage par la plus petite de ses parties, celle qui y commande et délibère ; et cette science qui veille sur le tout, et non sur une affaire isolée, nous l’appelons à juste titre σοφία (*sophía*). »",
   "loc": "République IV, 428c-429a ; 441e-442c",
   "nota": "La sagesse n’est pas savoir beaucoup, mais savoir gouverner l’ensemble ; c’est pourquoi peu de gens suffisent. C’est la raison, λόγος (*lógos*), de l’âme de la cité."
  },
  {
   "id": "b_guardianes",
   "name": "Gardiens auxiliaires — ἀνδρεία (*andreía*)",
   "txt": "Ils apportent le courage : ils défendent la pólis et exécutent ce que le gouvernement décide. Leur valeur est de conserver l’opinion droite sur ce qui est redoutable, que l’éducation a gravée.",
   "cita": "« J’appelle courage une certaine conservation : celle de l’opinion, née de la loi par l’éducation, sur ce qu’il faut craindre, et de quelle manière. La conserver dans les douleurs et dans les plaisirs, dans les peurs et les désirs, voilà ἀνδρεία (*andreía*). »",
   "loc": "République IV, 429a-430c ; II, 374e-375c",
   "nota": "Le courage platonicien n’est pas témérité, mais fermeté éduquée : le cœur, θυμός (*thymós*), qui obéit à la raison. Le gardien est « féroce avec l’ennemi et doux avec les siens », comme un bon chien (375e)."
  },
  {
   "id": "b_productores",
   "name": "Producteurs — σωφροσύνη (*sophrosýne*)",
   "txt": "Ils génèrent la production de la pólis et incarnent la tempérance, qui est ici accord : accepter qui commande. À la différence des autres vertus, la tempérance traverse les trois classes.",
   "cita": "« La tempérance ressemble à une harmonie : c’est l’accord sur qui doit commander, qui traverse toute la cité, de haut en bas, faisant chanter à l’unisson les plus faibles, les plus forts et ceux du milieu. »",
   "loc": "République IV, 430d-432b ; III, 389d-e",
   "nota": "La σωφροσύνη (*sophrosýne*) n’est pas seulement « manger peu » : c’est maîtrise de soi et consensus. C’est pourquoi toutes les classes la portent, pas seulement le peuple. C’est l’appétit, ἐπιθυμία (*epithymía*), qui se laisse ordonner."
  },
  {
   "id": "b_justicia",
   "name": "Justice — δικαιοσύνη (*dikaiosýne*)",
   "txt": "Ce n’est pas une classe, mais la relation entre les trois : elle existe quand chaque classe fait ce qui lui revient et seulement cela, et se perd avec l’ingérence. Dans le jeu, c’est l’harmonie de la cité.",
   "cita": "« La justice est faire ce qui est sien et ne pas se mêler de beaucoup de choses. Quand celui qui produit, celui qui seconde et celui qui gouverne font chacun ce qui est sien dans la cité, cela est juste et cela la rend juste. »",
   "loc": "République IV, 433a-434c ; 443c-444a",
   "nota": "La justice n’est pas la vertu d’une classe, mais l’harmonie du tout, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*). Il en va de même pour l’âme (441d-442d) : une âme est juste quand chaque partie remplit sa fonction."
  }
 ],
 "tabla": [
  {
   "name": "Gouvernants, ἄρχοντες (*árchontes*)",
   "alma": "Raison, λόγος (*lógos*)",
   "virtud": "σοφία (*sophía*) : délibérer sur le bien du tout",
   "cumple": "La cité « voit » : délibération juste ; contribue à l’équilibre.",
   "desborda": "Tyrannie du savoir, gouvernement sans consentement : tension avec les autres classes.",
   "falta": "Cité aveugle : la masse ou la force décide et tout reste opinion, δόξα (*dóxa*)."
  },
  {
   "name": "Gardiens auxiliaires, ἐπίκουροι (*epíkouroi*)",
   "alma": "Cœur, θυμός (*thymós*)",
   "virtud": "ἀνδρεία (*andreía*) : défendre et exécuter ce qui est décidé",
   "cumple": "Féroces au dehors, doux au dedans : défense ferme ; contribue à l’équilibre.",
   "desborda": "Coup d’État militaire, l’honneur placé au-dessus de la raison : timocratie (passerelle vers la Version A).",
   "falta": "Cité sans défense : elle tombe devant l’extérieur ou devant la révolte."
  },
  {
   "name": "Producteurs, δημιουργοί (*demiourgoí*)",
   "alma": "Appétit, ἐπιθυμία (*epithymía*)",
   "virtud": "σωφροσύνη (*sophrosýne*), avec les autres classes : produire et s’accorder sur qui commande",
   "cumple": "Pólis nourrie et consentante ; contribue à l’équilibre.",
   "desborda": "Luxe, cité « gonflée », révolte pour la richesse : oligarchie ou démocratie.",
   "falta": "Famine : la base matérielle ne soutient pas les deux autres classes."
  },
  {
   "name": "Justice, δικαιοσύνη (*dikaiosýne*)",
   "alma": "L’âme tout entière en ordre",
   "virtud": "Chacun à sa place, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*)",
   "cumple": "Les trois classes s’acquittent de leur tâche : la pólis est une, saine et juste.",
   "desborda": "Ingérence : les classes échangent leurs places ; injustice, ἀδικία (*adikía*).",
   "falta": "Désagrégation : la cité devient « multiple » et en guerre contre elle-même."
  }
 ]
};
