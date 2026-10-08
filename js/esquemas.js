// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/esquemas.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const ESQUEMAS = {
 "AA-REL-02": {
  "subject": "hf",
  "block": "A",
  "tema": "Aristote",
  "title": "Les causes du changement",
  "mermaid": "flowchart TD\n  center[\"LES CAUSES DU CHANGEMENT\"]:::axis\n  intr[\"intrinsèques\"]\n  estr[\"extrinsèques\"]\n  mat[\"matérielle\"]:::key\n  mat_e[\"le substrat dans lequel il a lieu\"]\n  form[\"formelle\"]:::key\n  form_e[\"la figure qui est adoptée\"]\n  erag[\"efficiente\"]:::key\n  erag_e[\"ce qui le met en marche\"]\n  xede[\"finale\"]:::key\n  xede_e[\"la fin du changement\"]\n  center -->|\"ce sont celles-ci\"| intr\n  center -->|\"ce sont celles-ci\"| estr\n  intr --> mat\n  intr --> form\n  estr --> erag\n  estr --> xede\n  mat -->|\"c'est\"| mat_e\n  form -->|\"c'est\"| form_e\n  erag -->|\"c'est\"| erag_e\n  xede -->|\"c'est\"| xede_e\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Pourquoi les choses changent-elles et que faut-il pour expliquer un changement ?",
   "raiz": "LES CAUSES DU CHANGEMENT",
   "raiz_d": "Aristote répond à Parménide : le changement est réel et peut s'expliquer par ses causes.",
   "ramas": [
    {
     "rel": "se comprend comme",
     "t": "Passage de la puissance à l'acte",
     "k": true,
     "a": "Aristote",
     "d": "La puissance est la possibilité d'être ; l'acte, cette possibilité déjà réalisée.",
     "c": [
      {
       "rel": "par exemple",
       "t": "Le bronze devient statue",
       "d": "Le bronze est statue en puissance ; une fois sculpté, il l'est en acte."
      }
     ]
    },
    {
     "rel": "à l'intérieur de la chose",
     "t": "Causes intrinsèques",
     "d": "Elles font partie de la substance elle-même : sa matière et sa forme (hylémorphisme).",
     "c": [
      {
       "rel": "de quoi elle est faite",
       "t": "Cause matérielle",
       "k": true,
       "d": "Le substrat qui demeure pendant le changement : le bronze."
      },
      {
       "rel": "ce qu'elle est",
       "t": "Cause formelle",
       "k": true,
       "d": "La structure ou l'essence qu'elle acquiert : la figure de la statue."
      }
     ]
    },
    {
     "rel": "en dehors de la chose",
     "t": "Causes extrinsèques",
     "d": "Elles ne font pas partie de la chose, mais la produisent et l'orientent.",
     "c": [
      {
       "rel": "ce qui la produit",
       "t": "Cause efficiente",
       "k": true,
       "d": "L'agent qui met le changement en marche : le sculpteur."
      },
      {
       "rel": "pour quoi",
       "t": "Cause finale",
       "k": true,
       "d": "La fin vers laquelle tend le changement : la statue achevée et son but."
      }
     ]
    },
    {
     "rel": "d'où une vision",
     "t": "Téléologie",
     "d": "Tous les êtres, y compris la nature, tendent vers une fin (finalisme).",
     "c": [
      {
       "rel": "son principe ultime",
       "t": "Moteur immobile",
       "d": "Acte pur qui, sans se mouvoir, attire tout le reste comme cause finale."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Cause formelle",
     "rel": "actualise la puissance de la",
     "a": "Cause matérielle"
    },
    {
     "de": "Cause finale",
     "rel": "se généralise dans la",
     "a": "Téléologie"
    }
   ],
   "idea": "Pour Aristote, changer, c'est passer de la puissance à l'acte, et un changement n'est pleinement expliqué que par ses quatre causes : de quoi, quoi, par qui et pour quoi. Tout dans la nature tend vers une fin."
  }
 },
 "BH-REL-01": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Hume et l'empirisme",
  "mermaid": "flowchart TD\n  n0[\"HUME\"]\n  n1[\"Examen de la connaissance\"]\n  n2[\"perceptions\"]:::axis\n  n3[\"impressions\"]\n  n4[\"idées\"]\n  n5[\"organisées par les lois d'association de l'imagination\"]\n  n6[\"contiguïté\"]\n  n7[\"causalité\"]:::key\n  n8[\"ressemblance\"]\n  n9[\"connaissance factuelle\"]:::key\n  n10[\"relations entre idées\"]:::key\n  n11[\"croyance fondée sur l'habitude\"]\n  n12[\"connaissance universelle, nécessaire\"]\n  n13[\"critique de la métaphysique et de la science\"]:::axis\n  n14[\"base de la morale : émotivisme moral\"]:::key\n  n15[\"l'idée de substance : monde, dieu, moi\"]\n  n16[\"l'idée de connexion nécessaire\"]\n  n17[\"dans le sentiment\"]\n  n18[\"phénoménisme\"]\n  n19[\"scepticisme\"]\n  n20[\"le bon\"]\n  n21[\"l'action\"]\n  n22[\"tolérance : norme et attitude pour la coexistence\"]\n  n23[\"dans le pacte\"]\n  n0 --> n1\n  n1 -->|\"sa base\"| n2\n  n2 -->|\"se divisent en deux\"| n3\n  n2 --> n4\n  n2 -->|\"sont cause de :\"| n5\n  n5 --> n6\n  n5 --> n7\n  n5 --> n8\n  n7 -->|\"s'appliquent à :\"| n9\n  n8 -->|\"s'appliquent à :\"| n10\n  n9 -->|\"sa base\"| n11\n  n10 -->|\"forment\"| n12\n  n11 --> n13\n  n13 --> n15\n  n13 --> n16\n  n12 --> n14\n  n14 -->|\"où ?\"| n17\n  n15 -->|\"produit\"| n18\n  n16 -->|\"produit\"| n19\n  n17 -->|\"décide\"| n20\n  n17 --> n21\n  n19 -->|\"produit\"| n22\n  n20 -->|\"s'exprime\"| n23\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Que reste-t-il de la causalité, de la substance et de la morale si seul ce qui vient d'une impression a de la valeur ?",
   "raiz": "LA CRITIQUE DE HUME",
   "raiz_d": "Hume soumet les grandes idées de la philosophie à une épreuve : de quelle impression procède cette idée ? S'il n'y a pas d'impression, l'idée n'a pas de fondement.",
   "ramas": [
    {
     "rel": "première cible",
     "t": "La causalité",
     "k": true,
     "d": "Nous croyons que la cause produit nécessairement l'effet.",
     "c": [
      {
       "rel": "l'expérience montre",
       "t": "Succession et conjonction constante",
       "d": "Nous voyons qu'un fait en suit un autre, encore et encore."
      },
      {
       "rel": "mais ne montre pas",
       "t": "La connexion nécessaire",
       "d": "Il n'y a aucune impression du « cela doit arriver » : cette idée ne procède pas de l'expérience."
      },
      {
       "rel": "s'explique par",
       "t": "L'habitude",
       "k": true,
       "d": "La répétition crée en nous l'habitude d'attendre l'effet : c'est une croyance, non une raison."
      }
     ]
    },
    {
     "rel": "deuxième cible",
     "t": "La substance",
     "d": "Quelque chose de permanent qui se trouverait sous les perceptions.",
     "c": [
      {
       "rel": "du monde extérieur",
       "t": "Nous n'avons que des perceptions",
       "d": "Nous ne pouvons pas en sortir pour vérifier qu'il existe des corps qui les causent."
      },
      {
       "rel": "du moi",
       "t": "Un faisceau de perceptions",
       "d": "Il n'y a pas d'impression d'un moi fixe, seulement un flux de perceptions qui se succèdent."
      },
      {
       "rel": "de Dieu",
       "t": "Dieu comme cause du monde",
       "d": "Il n'y a pas d'impression de Dieu, et le déduire comme cause exige une connexion nécessaire que nous ne connaissons pas."
      }
     ]
    },
    {
     "rel": "conséquences",
     "t": "Limites de la connaissance",
     "k": true,
     "c": [
      {
       "rel": "en métaphysique",
       "t": "Phénoménisme",
       "d": "Nous ne connaissons que des phénomènes, non la réalité en soi."
      },
      {
       "rel": "en science",
       "t": "Connaissance seulement probable",
       "d": "Les lois naturelles généralisent ce qui a été observé ; qu'elles s'appliquent demain n'est pas nécessaire."
      },
      {
       "rel": "attitude finale",
       "t": "Scepticisme modéré",
       "d": "Nous ne pouvons pas fonder rationnellement ces croyances, mais la vie nous oblige à les suivre."
      }
     ]
    },
    {
     "rel": "aussi en morale",
     "t": "Émotivisme",
     "k": true,
     "d": "Les jugements moraux expriment des sentiments d'approbation ou de rejet, non des faits.",
     "c": [
      {
       "rel": "parce que",
       "t": "La raison ne pousse pas à agir",
       "d": "« La raison est, et ne doit être, que l'esclave des passions. »"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "L'habitude",
     "rel": "fait qu'il soit",
     "a": "Connaissance seulement probable"
    },
    {
     "de": "La connexion nécessaire",
     "rel": "sans elle tombe la preuve de",
     "a": "Dieu comme cause du monde"
    }
   ],
   "idea": "Hume ne nie pas que nous croyions aux causes, aux corps ou à un moi : il montre que ces croyances naissent de l'habitude et de l'imagination, non de la raison ni d'aucune impression."
  }
 },
 "BH-REL-02": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "La connaissance chez Hume",
  "mermaid": "flowchart TD\n  ezag[\"CONNAISSANCE\"]:::axis\n  lock[\"Locke et Descartes\"]:::key\n  pertz[\"PERCEPTIONS\"]:::axis\n  eduk[\"tous les contenus mentaux\"]\n  inpr[\"impressions\"]:::key\n  trin[\"intenses et vives\"]\n  ideiak[\"idées\"]:::key\n  ahul[\"faibles et peu nettes\"]\n  esper[\"EXPÉRIENCE\"]:::axis\n  desc[\"Descartes\"]:::key\n  sortz[\"idées innées, adventices et factices\"]\n  ezag -->|\"comme pour ceux-ci\"| lock\n  ezag -->|\"c'est avoir ceci\"| pertz\n  pertz -->|\"ce sont ceux-ci\"| eduk\n  pertz -->|\"peuvent être celles-ci\"| inpr\n  pertz -->|\"peuvent être celles-ci\"| ideiak\n  inpr -->|\"si elles sont ainsi\"| trin\n  inpr -->|\"produisent celles-ci\"| ideiak\n  ideiak -->|\"si elles sont ainsi\"| ahul\n  pertz -->|\"ont cette origine\"| esper\n  esper -->|\"à la différence de celui-ci\"| desc\n  desc -->|\"qui acceptait ceci\"| sortz\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "D'où proviennent nos idées et quels types de connaissance pouvons-nous atteindre avec elles ?",
   "raiz": "LA CONNAISSANCE CHEZ HUME",
   "raiz_d": "Empirisme : il n'y a pas d'idées innées ; tout contenu de l'esprit procède de l'expérience.",
   "ramas": [
    {
     "rel": "matière première",
     "t": "Perceptions",
     "a": "Hume",
     "d": "Tout ce qui est dans l'esprit : voir, entendre, se souvenir, imaginer, penser.",
     "c": [
      {
       "rel": "les plus vives",
       "t": "Impressions",
       "k": true,
       "d": "Perceptions vives de l'expérience : ce que nous ressentons en voyant, en entendant ou en désirant."
      },
      {
       "rel": "copies faibles de celles-ci",
       "t": "Idées",
       "d": "Ce qui reste dans l'esprit quand on se rappelle ou pense ce que l'on a senti auparavant."
      }
     ]
    },
    {
     "rel": "règle qui s'en déduit",
     "t": "Critère de l'impression",
     "k": true,
     "d": "Toute idée valide procède d'une impression préalable.",
     "c": [
      {
       "rel": "conséquence",
       "t": "Idée sans impression : idée vide",
       "d": "Pour savoir si une idée a un sens, il faut chercher l'impression dont elle vient."
      },
      {
       "rel": "rejette",
       "t": "Les idées innées",
       "a": "Descartes",
       "d": "L'esprit n'apporte pas de contenus en naissant."
      }
     ]
    },
    {
     "rel": "l'imagination les unit",
     "t": "Association d'idées",
     "d": "Les idées ne s'enchaînent pas au hasard : l'imagination les associe selon trois lois.",
     "c": [
      {
       "rel": "par",
       "t": "Ressemblance",
       "d": "Un portrait nous fait penser à la personne représentée."
      },
      {
       "rel": "par",
       "t": "Contiguïté",
       "d": "Penser à une rue nous mène à celle d'à côté (dans l'espace ou dans le temps)."
      },
      {
       "rel": "par",
       "t": "Cause et effet",
       "d": "Voir de la fumée nous fait penser au feu."
      }
     ]
    },
    {
     "rel": "deux types de savoir",
     "t": "Types de connaissance",
     "k": true,
     "c": [
      {
       "rel": "a priori",
       "t": "Relations d'idées",
       "d": "Mathématiques et logique : vérités nécessaires ; les nier est contradictoire.",
       "c": [
        {
         "rel": "mais",
         "t": "Elles n'informent pas sur les faits",
         "d": "Elles ne font que comparer des idées entre elles."
        }
       ]
      },
      {
       "rel": "a posteriori",
       "t": "Questions de fait",
       "d": "Vérités contingentes, fondées sur l'expérience : elles pourraient être autrement.",
       "c": [
        {
         "rel": "exemple",
         "t": "« Le soleil se lèvera demain »",
         "d": "Le nier n'est pas contradictoire : seule l'expérience l'appuie."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Questions de fait",
     "rel": "s'appuient sur la relation de",
     "a": "Cause et effet"
    }
   ],
   "idea": "Pour Hume, tout commence dans les impressions : les idées en sont des copies, et il n'y a que deux savoirs, les relations d'idées (nécessaires) et les questions de fait (contingentes)."
  }
 },
 "CK-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Kant et les Lumières",
  "mermaid": "flowchart TD\n  n0[\"LA PHILOSOPHIE DE KANT\"]\n  n1[\"Qu'est-ce que l'homme ?\"]\n  n2[\"Que puis-je connaître ?\"]:::axis\n  n3[\"Que dois-je faire ?\"]:::axis\n  n4[\"Que puis-je espérer ?\"]:::axis\n  n5[\"la liberté\"]\n  n6[\"l'immortalité de l'âme\"]\n  n7[\"l'existence de Dieu\"]\n  n8[\"condition de la moralité\"]\n  n9[\"garantie de l'accomplissement du devoir\"]\n  n10[\"garantie du souverain bien : vertu + bonheur\"]\n  n11[\"partir du fait de la science\"]\n  n12[\"partir du fait moral\"]\n  n13[\"usage théorique de la raison\"]\n  n14[\"usage pratique de la raison\"]\n  n15[\"ses conditions\"]\n  n16[\"ses limites\"]\n  n17[\"conditions a priori : universels de la loi morale\"]\n  n18[\"conditions formelles a priori\"]\n  n19[\"conditions matérielles : l'expérience\"]\n  n20[\"dans le devoir comme forme de la loi\"]\n  n21[\"de la sensibilité\"]\n  n22[\"de l'entendement\"]\n  n23[\"de la raison\"]\n  n24[\"dans l'impératif catégorique\"]:::key\n  n25[\"formes a priori : espace et temps\"]:::key\n  n26[\"catégories\"]:::key\n  n27[\"idées\"]\n  n0 --> n1\n  n1 --> n2\n  n2 -->|\"rend possible\"| n3\n  n3 -->|\"postule\"| n4\n  n4 --> n5\n  n4 --> n6\n  n4 --> n7\n  n5 --> n8\n  n6 --> n9\n  n7 --> n10\n  n2 --> n11\n  n3 --> n12\n  n11 -->|\"pour examiner\"| n13\n  n12 -->|\"pour examiner\"| n14\n  n13 -->|\"rend possible\"| n14\n  n13 --> n15\n  n13 -->|\"les constituent\"| n16\n  n14 -->|\"les établit\"| n17\n  n15 -->|\"synthèse de quoi ?\"| n18\n  n18 --> n21\n  n18 --> n22\n  n18 --> n23\n  n21 --> n25\n  n22 --> n26\n  n23 --> n27\n  n19 -->|\"n'est pas connaissance, car elle les laisse de côté\"| n16\n  n17 -->|\"les trouve\"| n20\n  n20 -->|\"s'exprime\"| n24\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce que l'homme, selon Kant, et quel rapport sa philosophie a-t-elle avec les Lumières ?",
   "raiz": "KANT : LA RAISON ÉCLAIRÉE S'EXAMINE",
   "raiz_d": "Le criticisme analyse les limites et la portée de la raison avec trois questions qui se résument en une : qu'est-ce que l'homme ?",
   "ramas": [
    {
     "rel": "attitude de départ",
     "t": "Sapere aude",
     "k": true,
     "a": "Kant",
     "d": "Devise de Qu'est-ce que les Lumières ? (1784) : ose penser par toi-même, sans la guidance d'autrui.",
     "c": [
      {
       "rel": "pour sortir de la",
       "t": "Minorité coupable",
       "d": "Ce n'est pas un manque d'intelligence, mais de courage : elle est entretenue par la paresse, la lâcheté et les tuteurs."
      },
      {
       "rel": "n'a besoin que de liberté pour l'",
       "t": "Usage public de la raison",
       "d": "Raisonner en savant devant le public lecteur. Dans sa fonction (usage privé), on obéit."
      }
     ]
    },
    {
     "rel": "première question",
     "t": "Que puis-je connaître ?",
     "d": "Usage théorique de la raison : il part du fait de la science.",
     "c": [
      {
       "rel": "connaître exige",
       "t": "Formes a priori et catégories",
       "d": "L'espace et le temps (sensibilité) et les catégories (entendement) ordonnent ce que donne l'expérience."
      },
      {
       "rel": "limite",
       "t": "Nous ne connaissons que des phénomènes",
       "d": "Non les choses en soi : c'est pourquoi la métaphysique ne peut pas être une science."
      }
     ]
    },
    {
     "rel": "deuxième question",
     "t": "Que dois-je faire ?",
     "d": "Usage pratique de la raison : il part du fait moral.",
     "c": [
      {
       "rel": "répond avec l'",
       "t": "Impératif catégorique",
       "k": true,
       "d": "Commandement universel et inconditionnel : agir par devoir, non par intérêt ni par inclination."
      },
      {
       "rel": "suppose l'",
       "t": "Autonomie morale",
       "d": "La raison se donne à elle-même la loi, sans dépendre de Dieu, de l'autorité ni du bonheur."
      }
     ]
    },
    {
     "rel": "troisième question",
     "t": "Que m'est-il permis d'espérer ?",
     "d": "La morale exige d'admettre ce que la raison théorique ne peut pas démontrer.",
     "c": [
      {
       "rel": "répond avec les",
       "t": "Postulats de la raison pratique",
       "k": true,
       "c": [
        {
         "rel": "premier",
         "t": "La liberté",
         "d": "Condition de la moralité : si je dois, c'est que je peux."
        },
        {
         "rel": "deuxième",
         "t": "L'immortalité de l'âme",
         "d": "Permet de s'approcher sans fin de la pleine vertu."
        },
        {
         "rel": "troisième",
         "t": "L'existence de Dieu",
         "d": "Garantit le souverain bien : que vertu et bonheur aillent de pair."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Sapere aude",
     "rel": "est la même exigence que la",
     "a": "Autonomie morale"
    },
    {
     "de": "Nous ne connaissons que des phénomènes",
     "rel": "laisse la place aux",
     "a": "Postulats de la raison pratique"
    }
   ],
   "idea": "Kant, c'est les Lumières qui s'examinent elles-mêmes : la raison reconnaît qu'elle ne peut connaître au-delà de l'expérience, mais elle se donne à elle-même la loi morale. Penser et agir par soi-même en est le noyau."
  }
 },
 "CK-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "La connaissance sensible (Kant)",
  "mermaid": "flowchart TD\n  erreal[\"LA RÉALITÉ\"]:::axis\n  gbera[\"la chose en soi\"]:::key\n  noum[\"le noumène\"]:::key\n  kaos[\"chaos de sensations\"]:::axis\n  subj[\"le sujet\"]:::key\n  forma[\"formes a priori de la sensibilité\"]:::axis\n  puru[\"intuitions pures\"]:::key\n  espa[\"espace et temps\"]\n  objl[\"objet de la connaissance sensible\"]:::key\n  enp[\"intuition empirique\"]\n  fen[\"phénomène sensible\"]\n  niret[\"la chose pour moi\"]\n  erreal -->|\"est\"| gbera\n  erreal -->|\"est\"| noum\n  erreal -->|\"envoie\"| kaos\n  kaos -->|\"le composent\"| objl\n  objl -->|\"s'appelle ainsi\"| enp\n  enp -->|\"ou\"| fen\n  fen -->|\"c'est\"| niret\n  kaos -->|\"les organisent\"| forma\n  forma -->|\"s'appellent ainsi\"| puru\n  puru -->|\"ce sont celles-ci\"| espa\n  subj -->|\"les possède\"| forma\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Quand nous percevons quelque chose, qu'apporte la réalité et qu'apporte le sujet ?",
   "raiz": "LA CONNAISSANCE SENSIBLE",
   "raiz_d": "Premier pas de la connaissance selon Kant (Esthétique transcendantale) : la sensibilité reçoit et ordonne ce qui nous parvient.",
   "ramas": [
    {
     "rel": "ce qui vient de l'extérieur",
     "t": "La matière : les sensations",
     "d": "Ce qui est reçu a posteriori, par l'expérience.",
     "c": [
      {
       "rel": "arrive comme",
       "t": "Un chaos d'impressions",
       "d": "Des données éparses, encore sans ordre."
      },
      {
       "rel": "procède de",
       "t": "La chose en soi (noumène)",
       "k": true,
       "d": "La réalité telle qu'elle est en elle-même : elle nous affecte, mais nous ne la connaissons jamais."
      }
     ]
    },
    {
     "rel": "ce qu'apporte le sujet",
     "t": "Les formes a priori de la sensibilité",
     "k": true,
     "d": "Structures antérieures à l'expérience qui la rendent possible.",
     "c": [
      {
       "rel": "sont",
       "t": "Espace et temps",
       "d": "Tout ce que nous percevons est quelque part et à un certain moment."
      },
      {
       "rel": "c'est pourquoi ce sont aussi des",
       "t": "Intuitions pures",
       "d": "Elles ne sont pas tirées de l'expérience : elles sont dans toute expérience."
      },
      {
       "rel": "fondent",
       "t": "Les mathématiques",
       "d": "Géométrie (espace) et arithmétique (temps) sont une connaissance universelle et nécessaire."
      }
     ]
    },
    {
     "rel": "résultat",
     "t": "Le phénomène",
     "k": true,
     "d": "La chose telle qu'elle m'apparaît : la chose pour moi.",
     "c": [
      {
       "rel": "se saisit dans l'",
       "t": "Intuition empirique",
       "d": "Des sensations déjà situées dans l'espace et dans le temps."
      },
      {
       "rel": "ensuite le pense l'",
       "t": "Entendement",
       "d": "Avec ses catégories (causalité, substance…), il transforme le phénomène en objet connu."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Espace et temps",
     "rel": "ordonnent",
     "a": "Un chaos d'impressions"
    },
    {
     "de": "Le phénomène",
     "rel": "ne coïncide jamais avec",
     "a": "La chose en soi (noumène)"
    }
   ],
   "idea": "Nous ne percevons jamais la réalité « en soi » : nous percevons des phénomènes, c'est-à-dire des sensations ordonnées par l'espace et le temps, que le sujet lui-même apporte."
  }
 },
 "CC-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Comte : la société, la loi des trois états et la science positive",
  "mermaid": "flowchart TD\n  co[\"COMTE\"]\n  giz[\"LA SOCIÉTÉ\"]:::axis\n  ord[\"ORDRE\"]:::key\n  aur[\"PROGRÈS\"]:::key\n  lege[\"LOI DES TROIS ÉTATS\"]:::axis\n  teo[\"théologique\"]\n  met[\"métaphysique\"]\n  pos[\"POSITIF\"]:::key\n  zient[\"LA SCIENCE\"]:::key\n  gert[\"FAITS ET LOIS\"]:::key\n  feno[\"explique les phénomènes à partir d'eux\"]\n  co --> giz\n  giz -->|\"organisée par deux principes\"| ord\n  giz -->|\"organisée par deux principes\"| aur\n  ord -->|\"suivant\"| lege\n  aur -->|\"suivant\"| lege\n  lege --> teo\n  lege --> met\n  lege --> pos\n  pos -->|\"d'où\"| zient\n  zient -->|\"étudie\"| gert\n  gert --> feno\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment la connaissance humaine progresse-t-elle et comment Comte veut-il ordonner la société avec la science ?",
   "raiz": "LE POSITIVISME",
   "raiz_d": "Auguste Comte (XIXe siècle) : n'est connaissance vraie que celle qui repose sur des faits observables et vérifiables.",
   "ramas": [
    {
     "rel": "l'humanité avance selon la",
     "t": "Loi des trois états",
     "k": true,
     "a": "Comte",
     "d": "Chaque science et l'humanité tout entière passent par trois manières d'expliquer la réalité.",
     "c": [
      {
       "rel": "premier",
       "t": "État théologique",
       "d": "Il explique les phénomènes par l'action de dieux."
      },
      {
       "rel": "ensuite",
       "t": "État métaphysique",
       "d": "Il explique par des essences et des forces abstraites."
      },
      {
       "rel": "enfin",
       "t": "État positif",
       "k": true,
       "d": "Il explique par des lois scientifiques."
      }
     ]
    },
    {
     "rel": "sa méthode",
     "t": "La science positive",
     "k": true,
     "c": [
      {
       "rel": "part de",
       "t": "Faits observables",
       "d": "Seul vaut ce qui peut être vérifié empiriquement."
      },
      {
       "rel": "cherche",
       "t": "Des lois, non des causes ultimes",
       "d": "Des relations constantes entre les phénomènes, non leur « pourquoi » ultime."
      },
      {
       "rel": "c'est pourquoi",
       "t": "Rejette la métaphysique",
       "d": "La spéculation sans faits n'est pas connaissance."
      }
     ]
    },
    {
     "rel": "sa dernière science",
     "t": "La sociologie",
     "d": "Une « physique sociale » : étudier la société avec la méthode des sciences naturelles.",
     "c": [
      {
       "rel": "étudie l'",
       "t": "Ordre",
       "d": "Statique sociale : ce qui maintient la société unie."
      },
      {
       "rel": "et le",
       "t": "Progrès",
       "d": "Dynamique sociale : comment la société évolue."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "État positif",
     "rel": "est celui de la",
     "a": "La science positive"
    },
    {
     "de": "Progrès",
     "rel": "suit la",
     "a": "Loi des trois états"
    }
   ],
   "idea": "Comte porte à l'extrême la confiance moderne dans la science : l'humanité mûrit en passant de l'explication par les dieux à l'explication par les lois, et même la société doit être étudiée scientifiquement."
  }
 },
 "CM-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Hegel et Karl Marx",
  "mermaid": "flowchart TD\n  n0[\"LA PHILOSOPHIE DE MARX\"]:::axis\n  n1[\"philosophie allemande\"]\n  n2[\"économie politique\"]\n  n3[\"socialisme utopique\"]\n  n4[\"Hegel\"]\n  n5[\"Smith, Ricardo\"]\n  n6[\"Owen · Saint-Simon · Fourier\"]\n  n7[\"Feuerbach\"]\n  n8[\"dialectique\"]\n  n9[\"matérialisme\"]\n  n10[\"théorie de la valeur-travail\"]\n  n11[\"socialisme\"]\n  n12[\"l'être humain\"]\n  n13[\"la nature\"]\n  n14[\"l'histoire\"]\n  n15[\"activité créatrice : le travail\"]\n  n16[\"crée sa vie en société\"]\n  n17[\"création d'outils (technologie)\"]\n  n18[\"la force productive croît\"]\n  n19[\"relation contradictoire\"]\n  n20[\"change les rapports de production\"]\n  n21[\"rapports de propriété\"]\n  n22[\"mode de production capitaliste\"]\n  n23[\"propriété privée des moyens de production\"]\n  n24[\"aliénation ou dépossession de son être\"]:::axis\n  n25[\"sociale\"]:::key\n  n26[\"politique\"]:::key\n  n27[\"religieuse\"]:::key\n  n28[\"économique\"]:::key\n  n29[\"division en classes sociales\"]\n  n30[\"bourgeoisie\"]\n  n31[\"prolétaires\"]\n  n32[\"révolution\"]:::axis\n  n33[\"société sans classes sociales\"]\n  n34[\"fin de l'exploitation\"]\n  n35[\"dépasser l'aliénation et réaliser l'être humain\"]\n  n1 --> n4\n  n2 --> n5\n  n3 --> n6\n  n4 --> n8\n  n4 -->|\"Feuerbach\"| n7\n  n7 --> n9\n  n5 --> n10\n  n6 --> n11\n  n8 --> n0\n  n9 --> n0\n  n10 --> n0\n  n11 --> n0\n  n0 --> n12\n  n12 -->|\"est son essence\"| n15\n  n15 -->|\"grâce à lui\"| n16\n  n16 -->|\"la transforme et la socialise\"| n13\n  n16 -->|\"ici elle se développe dialectiquement\"| n14\n  n16 -->|\"se développe\"| n18\n  n16 --> n19\n  n18 -->|\"pour cette raison\"| n17\n  n20 -->|\"les produit\"| n21\n  n18 -->|\"cela crée\"| n22\n  n20 --> n22\n  n21 --> n23\n  n22 -->|\"cela provoque\"| n24\n  n24 -->|\"provoque\"| n25\n  n24 --> n26\n  n24 --> n27\n  n24 --> n28\n  n24 -->|\"provoque\"| n29\n  n29 -->|\"cela crée\"| n30\n  n29 --> n31\n  n31 -->|\"cela fait\"| n32\n  n32 -->|\"cela apporte\"| n33\n  n32 --> n34\n  n33 -->|\"condition pour cela\"| n35\n  n34 -->|\"condition pour cela\"| n35\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Que prend Marx à Hegel et à Feuerbach, et comment explique-t-il ainsi l'histoire et le capitalisme ?",
   "raiz": "LE MATÉRIALISME HISTORIQUE",
   "raiz_d": "Marx transforme la dialectique idéaliste de Hegel en une dialectique de la matière : l'économie fait avancer l'histoire.",
   "ramas": [
    {
     "rel": "hérite de ses sources",
     "t": "Les sources de Marx",
     "c": [
      {
       "rel": "de Hegel",
       "t": "La dialectique",
       "a": "Hegel",
       "d": "La réalité avance par contradictions. Chez Hegel, c'est l'Idée ; chez Marx, la vie matérielle."
      },
      {
       "rel": "de Feuerbach",
       "t": "Le matérialisme",
       "a": "Feuerbach",
       "d": "Le réel est matériel ; Dieu est une projection de l'être humain."
      },
      {
       "rel": "de l'économie politique",
       "t": "La valeur-travail",
       "a": "Smith, Ricardo",
       "d": "La valeur des marchandises provient du travail."
      },
      {
       "rel": "du socialisme utopique",
       "t": "L'idéal socialiste",
       "a": "Owen, Saint-Simon, Fourier"
      }
     ]
    },
    {
     "rel": "explique l'histoire",
     "t": "La structure économique",
     "k": true,
     "d": "Elle détermine l'organisation sociale, politique et idéologique.",
     "c": [
      {
       "rel": "part du",
       "t": "Travail",
       "d": "Essence humaine : en transformant la nature, l'être humain se fait lui-même."
      },
      {
       "rel": "choc entre",
       "t": "Forces et rapports de production",
       "d": "Quand la technique progresse, les rapports de propriété la freinent et la contradiction éclate."
      },
      {
       "rel": "érige une",
       "t": "Superstructure",
       "d": "Droit, politique, religion, philosophie : des idées qui justifient la classe dominante."
      },
      {
       "rel": "moteur de l'histoire",
       "t": "Lutte des classes",
       "k": true
      }
     ]
    },
    {
     "rel": "l'applique à son époque",
     "t": "Le capitalisme",
     "c": [
      {
       "rel": "repose sur la",
       "t": "Propriété privée des moyens",
       "d": "La bourgeoisie possède les moyens de production ; le prolétariat, seulement sa force de travail."
      },
      {
       "rel": "d'où l'",
       "t": "Plus-value",
       "d": "Valeur que le travailleur produit et ne reçoit pas."
      },
      {
       "rel": "provoque",
       "t": "Aliénation",
       "k": true,
       "d": "L'ouvrier est séparé du produit, du processus, de son essence et des autres."
      }
     ]
    },
    {
     "rel": "issue",
     "t": "Révolution prolétarienne",
     "c": [
      {
       "rel": "mène à la",
       "t": "Société sans classes",
       "d": "Communisme : fin de l'exploitation et de l'aliénation."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La dialectique",
     "rel": "devient",
     "a": "Lutte des classes"
    },
    {
     "de": "La valeur-travail",
     "rel": "lui permet d'expliquer l'",
     "a": "Plus-value"
    },
    {
     "de": "Aliénation",
     "rel": "est dépassée par la",
     "a": "Révolution prolétarienne"
    }
   ],
   "idea": "« Les philosophes n'ont fait qu'interpréter le monde de différentes manières ; ce qui importe, c'est de le transformer » (Marx) : la dialectique, appliquée à l'économie, explique l'histoire et annonce son changement."
  }
 },
 "CM-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Les idéologies dans le marxisme",
  "mermaid": "flowchart TD\n  ideo[\"LES IDÉOLOGIES\"]:::axis\n  kausak[\"causes\"]:::key\n  funtz[\"fonctions\"]:::key\n  k1[\"la situation économique des individus\"]\n  k2[\"leur position dans le processus de production\"]\n  k3[\"les rapports de production dans lesquels ils sont plongés\"]\n  f1[\"se faire une représentation imaginaire de la réalité\"]\n  f2[\"reconstruire la réalité de façon déformée\"]\n  f3[\"cimenter la structure sociale\"]\n  f4[\"légitimer le pouvoir de la classe dirigeante\"]\n  osag[\"composantes : État, droit, morale, économie politique, religion, philosophie, art\"]:::key\n  ideo -->|\"causes\"| kausak\n  ideo -->|\"fonctions\"| funtz\n  ideo -->|\"composantes\"| osag\n  kausak --> k1\n  kausak --> k2\n  kausak --> k3\n  funtz --> f1\n  funtz --> f2\n  funtz --> f3\n  funtz --> f4\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce qu'une idéologie, d'où vient-elle et à quoi sert-elle ?",
   "raiz": "L'IDÉOLOGIE",
   "raiz_d": "Pour Marx, une « fausse conscience » : un système d'idées qui cache l'exploitation.",
   "ramas": [
    {
     "rel": "naît de",
     "t": "La structure économique",
     "k": true,
     "d": "Les idées dépendent de la manière dont on produit et de qui possède les moyens de production.",
     "c": [
      {
       "rel": "chacun pense depuis sa",
       "t": "Position de classe",
       "d": "La place qu'il occupe dans les rapports de production."
      },
      {
       "rel": "sur elle s'érige la",
       "t": "Superstructure",
       "d": "Institutions et idées : État et droit, morale, religion, philosophie, art."
      }
     ]
    },
    {
     "rel": "s'exprime dans",
     "t": "Ses formes",
     "c": [
      {
       "rel": "la plus claire",
       "t": "La religion",
       "d": "« L'opium du peuple » : elle console avec l'au-delà et empêche de se révolter."
      },
      {
       "rel": "aussi",
       "t": "Morale et droit",
       "d": "Ils présentent comme juste et éternel ce qui convient à la classe dominante."
      },
      {
       "rel": "aussi",
       "t": "Philosophie et économie bourgeoises",
       "d": "Elles présentent l'ordre capitaliste comme naturel."
      }
     ]
    },
    {
     "rel": "remplit",
     "t": "Ses fonctions",
     "c": [
      {
       "rel": "premier",
       "t": "Déformer la réalité",
       "d": "Elle donne une image inversée : ce qui est historique paraît naturel."
      },
      {
       "rel": "surtout",
       "t": "Légitimer la classe dominante",
       "k": true,
       "d": "Son intérêt particulier passe pour l'intérêt de tous."
      },
      {
       "rel": "ainsi elle réussit à",
       "t": "Cimenter la société",
       "d": "Elle fait accepter l'ordre social et évite le conflit."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Position de classe",
     "rel": "explique qu'il convienne",
     "a": "Légitimer la classe dominante"
    },
    {
     "de": "La religion",
     "rel": "est un cas clair de",
     "a": "Déformer la réalité"
    }
   ],
   "idea": "Les idées ne flottent pas dans l'air : elles naissent de l'économie et, en tant que fausse conscience, font passer pour naturelle et juste la domination d'une classe. Changer la structure économique change les idées."
  }
 },
 "CF-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Feuerbach : de l'aliénation religieuse à la république démocratique",
  "mermaid": "flowchart TD\n  fe[\"FEUERBACH\"]\n  giz[\"l'être humain est ceci\"]:::axis\n  nahi[\"LA VOLONTÉ\"]:::key\n  arr[\"LA RAISON\"]:::key\n  sent[\"LE SENTIMENT\"]:::key\n  perf[\"pensés comme PERFECTIONS DE DIEU\"]:::axis\n  ali[\"l'être humain S'ALIÈNE À LUI-MÊME\"]:::key\n  bot[\"il doit récupérer son pouvoir\"]\n  erre[\"LA RÉPUBLIQUE DÉMOCRATIQUE\"]:::key\n  fe --> giz\n  giz --> nahi\n  giz --> arr\n  giz --> sent\n  nahi -->|\"sont pensés\"| perf\n  arr -->|\"sont pensés\"| perf\n  sent -->|\"sont pensés\"| perf\n  perf -->|\"par conséquent\"| ali\n  ali -->|\"donc\"| bot\n  bot -->|\"en elle\"| erre\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce que Dieu, selon Feuerbach, et comment l'être humain récupère-t-il ce qu'il a mis en lui ?",
   "raiz": "L'ALIÉNATION RELIGIEUSE",
   "raiz_d": "Ludwig Feuerbach (XIXe siècle), disciple critique de Hegel et matérialiste : la religion est l'œuvre de l'être humain.",
   "ramas": [
    {
     "rel": "point de départ",
     "t": "L'essence humaine",
     "a": "Feuerbach",
     "d": "Les facultés qui définissent l'être humain comme espèce.",
     "c": [
      {
       "rel": "est",
       "t": "Raison"
      },
      {
       "rel": "est",
       "t": "Volonté"
      },
      {
       "rel": "est",
       "t": "Sentiment (amour)"
      }
     ]
    },
    {
     "rel": "l'être humain fait une",
     "t": "Projection",
     "k": true,
     "d": "Il prend ses propres qualités, les porte à l'infini et les attribue à un être extérieur à lui.",
     "c": [
      {
       "rel": "ainsi naît",
       "t": "Dieu",
       "d": "L'essence humaine idéalisée et placée hors de l'être humain."
      },
      {
       "rel": "conséquence",
       "t": "Aliénation",
       "k": true,
       "d": "Plus il met en Dieu, plus il s'appauvrit : il se sépare de son propre être et s'y soumet."
      }
     ]
    },
    {
     "rel": "issue",
     "t": "Récupérer l'essence humaine",
     "c": [
      {
       "rel": "en découvrant que",
       "t": "La théologie est anthropologie",
       "k": true,
       "d": "Parler de Dieu, c'est parler, sans le savoir, de l'être humain."
      },
      {
       "rel": "dans la vie sociale",
       "t": "Amour entre les êtres humains",
       "d": "L'amour du prochain prend la place de l'amour de Dieu."
      },
      {
       "rel": "en politique",
       "t": "République démocratique",
       "d": "Communauté d'égaux, sans tutelle divine ni monarchique."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "L'essence humaine",
     "rel": "se projette dans",
     "a": "Dieu"
    },
    {
     "de": "La théologie est anthropologie",
     "rel": "défait l'",
     "a": "Aliénation"
    }
   ],
   "idea": "Dieu ne crée pas l'être humain : c'est l'être humain qui crée Dieu avec ses meilleures qualités et s'appauvrit. Marx reprendra cette idée, mais cherchera la racine de l'aliénation dans l'économie."
  }
 },
 "C5A-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Gramsci : l'hégémonie culturelle",
  "mermaid": "flowchart TD\n  gra[\"GRAMSCI\"]\n  heg[\"hégémonie culturelle\"]:::axis\n  ind[\"la force : l'État et la loi\"]\n  bai[\"consentement et accord\"]:::key\n  intel[\"intellectuels organiques\"]:::key\n  zen[\"le sens commun\"]:::key\n  zib[\"la société civile\"]:::axis\n  bloke[\"le bloc historique\"]\n  ideo[\"intérêt de classe comme intérêt général\"]\n  ohi[\"habitude prise pour normale\"]\n  gerra[\"guerre de position\"]:::axis\n  kontra[\"un sens commun nouveau\"]:::key\n  eman[\"l'émancipation\"]\n  gra -->|\"concept central\"| heg\n  heg -->|\"pas seulement la force\"| ind\n  heg -->|\"aussi le consentement\"| bai\n  heg -->|\"agents\"| intel\n  bai -->|\"par\"| zen\n  bai -->|\"où\"| zib\n  zib -->|\"école, presse\"| ohi\n  zen -->|\"conséquence\"| ideo\n  intel -->|\"alliance\"| bloke\n  intel -->|\"lutte culturelle\"| gerra\n  gerra -->|\"construire\"| kontra\n  ideo -->|\"briser\"| kontra\n  kontra -->|\"objectif\"| eman\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Pourquoi la classe dominante ne commande-t-elle pas seulement par la force ?",
   "raiz": "L'HÉGÉMONIE CULTURELLE",
   "raiz_d": "Antonio Gramsci (marxiste italien, 1891-1937) : le pouvoir se maintient aussi par le consentement des dominés.",
   "ramas": [
    {
     "rel": "d'un côté",
     "t": "Coercition",
     "a": "Gramsci",
     "d": "Société politique : l'État, la loi, la police. Elle s'impose par la force.",
     "c": [
      {
       "rel": "on l'attaque par la",
       "t": "Guerre de mouvement",
       "d": "Assaut frontal et rapide contre l'État, comme en Russie en 1917."
      }
     ]
    },
    {
     "rel": "de l'autre",
     "t": "Consensus",
     "k": true,
     "d": "Société civile : école, Église, presse, famille. Elle convainc au lieu de contraindre.",
     "c": [
      {
       "rel": "produit un",
       "t": "Sens commun",
       "k": true,
       "d": "Ce que tous voient comme normal : l'intérêt d'une classe passe pour l'intérêt général."
      },
      {
       "rel": "il est élaboré par les",
       "t": "Intellectuels organiques",
       "k": true,
       "d": "Ils organisent et diffusent la vision du monde d'une classe sociale.",
       "c": [
        {
         "rel": "ils cimentent le",
         "t": "Bloc historique",
         "d": "Union de la base économique et de la culture qui soutient un ordre social."
        }
       ]
      }
     ]
    },
    {
     "rel": "réponse",
     "t": "Contre-hégémonie",
     "d": "Les classes subalternes doivent conquérir la culture avant le pouvoir.",
     "c": [
      {
       "rel": "stratégie",
       "t": "Guerre de position",
       "d": "Lutte culturelle lente, tranchée après tranchée, au sein de la société civile."
      },
      {
       "rel": "objectif",
       "t": "Un nouveau sens commun",
       "d": "Une vision du monde propre qui rende possible l'émancipation."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Guerre de position",
     "rel": "remplace en Occident la",
     "a": "Guerre de mouvement"
    },
    {
     "de": "Un nouveau sens commun",
     "rel": "dispute le",
     "a": "Sens commun"
    }
   ],
   "idea": "Dans les sociétés modernes, le pouvoir repose surtout sur le consentement : celui qui parvient à faire passer sa vision du monde pour du « sens commun » domine. C'est pourquoi le changement commence dans la culture."
  }
 },
 "C5A-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "L'École de Francfort : la théorie critique",
  "mermaid": "flowchart TD\n  frk[\"ÉCOLE DE FRANCFORT\"]\n  teo[\"Théorie critique\"]:::axis\n  trad[\"contre la théorie traditionnelle\"]\n  marx[\"Marx\"]\n  freud[\"Freud\"]\n  weber[\"Weber\"]\n  helb[\"l'émancipation\"]:::key\n  hoad[\"Horkheimer et Adorno\"]:::axis\n  mar[\"Marcuse\"]:::axis\n  hab[\"Habermas\"]:::axis\n  ains[\"raison instrumentale\"]:::key\n  dial[\"Dialectique de la raison\"]:::key\n  indk[\"industrie culturelle\"]\n  uni[\"société unidimensionnelle\"]:::key\n  behf[\"faux besoins\"]\n  erre[\"surrépression\"]\n  komu[\"raison communicationnelle\"]:::key\n  elka[\"dialogue et consensus\"]\n  esp[\"l'espace public\"]\n  frk -->|\"programme\"| teo\n  marx -->|\"source\"| teo\n  freud --> teo\n  weber --> teo\n  teo -->|\"objectif\"| helb\n  teo -->|\"se distingue\"| trad\n  teo --> hoad\n  teo --> mar\n  teo --> hab\n  hoad -->|\"diagnostic\"| ains\n  ains -->|\"devient\"| dial\n  dial -->|\"par exemple\"| indk\n  mar -->|\"la société\"| uni\n  uni -->|\"créant\"| behf\n  behf --> erre\n  hab -->|\"issue\"| komu\n  komu -->|\"par\"| elka\n  elka --> esp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Pourquoi la raison qui promettait de nous libérer est-elle devenue un instrument de domination ?",
   "raiz": "L'ÉCOLE DE FRANCFORT",
   "raiz_d": "Philosophes allemands du XXe siècle qui, après les guerres, l'Holocauste et le totalitarisme, critiquent la société et la culture.",
   "ramas": [
    {
     "rel": "son programme",
     "t": "La théorie critique",
     "k": true,
     "a": "Horkheimer",
     "d": "Elle ne se limite pas à décrire la société, comme la théorie traditionnelle : elle l'analyse pour émanciper.",
     "c": [
      {
       "rel": "combine",
       "t": "Marx, Freud et Weber",
       "d": "Économie, psychanalyse et rationalisation."
      }
     ]
    },
    {
     "rel": "son diagnostic",
     "t": "La raison instrumentale",
     "k": true,
     "a": "Horkheimer, Adorno",
     "d": "Elle s'interroge sur les moyens (comment y parvenir), non sur les fins (ce qui est juste) : efficacité et calcul.",
     "c": [
      {
       "rel": "l'explique la",
       "t": "Dialectique de la raison",
       "d": "Ouvrage de 1944 : le progrès technique ne garantit pas une société plus juste ; la raison devient domination."
      },
      {
       "rel": "on la voit dans l'",
       "t": "Industrie culturelle",
       "d": "Divertissement standardisé qui encourage la passivité et le conformisme."
      }
     ]
    },
    {
     "rel": "dans la société de consommation",
     "t": "La société unidimensionnelle",
     "a": "Marcuse",
     "d": "Le système intègre tout le monde et éteint la capacité de s'opposer.",
     "c": [
      {
       "rel": "crée",
       "t": "Faux besoins",
       "d": "Désirs imposés par le marché qui nous attachent à la consommation."
      }
     ]
    },
    {
     "rel": "son issue (2e génération)",
     "t": "La raison communicationnelle",
     "k": true,
     "a": "Habermas",
     "d": "Nous ne faisons pas que produire : nous communiquons aussi.",
     "c": [
      {
       "rel": "cherche le",
       "t": "Consensus par le dialogue",
       "d": "Accord qui naît d'un dialogue honnête, non de la manipulation."
      },
      {
       "rel": "exige un",
       "t": "Espace public libre",
       "d": "Base de la démocratie délibérative."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Industrie culturelle",
     "rel": "fabrique",
     "a": "Faux besoins"
    },
    {
     "de": "La raison communicationnelle",
     "rel": "répond à",
     "a": "La raison instrumentale"
    }
   ],
   "idea": "Le progrès technique n'apporte pas à lui seul une société juste : la raison réduite au calcul domine les personnes. Habermas propose de la retrouver comme dialogue orienté vers l'entente."
  }
 },
 "C5B-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Arendt : l'analyse du totalitarisme",
  "mermaid": "flowchart TD\n  tot[\"TOTALITARISME\"]\n  ideo[\"idéologie totalisante\"]:::key\n  ter[\"la logique de la terreur\"]:::key\n  masa[\"société de masse\"]\n  bak[\"solitude et atomisation\"]:::key\n  sus[\"racines\"]:::axis\n  anti[\"antisémitisme (Dreyfus)\"]\n  inp[\"impérialisme\"]\n  ban[\"la banalité du mal\"]:::key\n  eich[\"Eichmann : renoncement à penser\"]\n  tot --> ideo\n  tot --> ter\n  ideo --> masa\n  ter --> bak\n  tot -->|\"origine\"| sus\n  sus --> anti\n  sus --> inp\n  tot -->|\"conséquence\"| ban\n  ban --> eich\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce que le totalitarisme et comment a-t-il pu exister ?",
   "raiz": "LE TOTALITARISME (ARENDT)",
   "raiz_d": "Une forme de pouvoir nouvelle du XXe siècle, distincte de la tyrannie classique : elle recherche la domination totale de l'individu.",
   "ramas": [
    {
     "rel": "naît de",
     "t": "Racines historiques",
     "d": "Deux processus qui ont préparé la crise de l'État-nation.",
     "c": [
      {
       "rel": "première",
       "t": "L'antisémitisme moderne",
       "d": "L'affaire Dreyfus montre comment la haine des Juifs devient une force politique."
      },
      {
       "rel": "seconde",
       "t": "L'impérialisme",
       "d": "L'expansion coloniale expérimente la domination sans limites sur d'autres peuples."
      }
     ]
    },
    {
     "rel": "s'appuie sur",
     "t": "La société de masse",
     "k": true,
     "d": "Des individus isolés, sans liens communs, faciles à manipuler.",
     "c": [
      {
       "rel": "sa base",
       "t": "La solitude politique",
       "d": "Celui qui perd ses liens avec les autres reste sans défense face à la propagande et à l'obéissance."
      }
     ]
    },
    {
     "rel": "fonctionne avec",
     "t": "Idéologie et terreur",
     "k": true,
     "d": "Les deux instruments de la domination totale.",
     "c": [
      {
       "rel": "explique tout par",
       "t": "Une idéologie totalisante",
       "d": "Une seule idée (la race, la classe) qui prétend expliquer toute l'histoire."
      },
      {
       "rel": "la diffuse",
       "t": "La propagande",
       "d": "Elle canalise massivement la conscience et l'imagination politique."
      },
      {
       "rel": "l'impose",
       "t": "La terreur",
       "d": "Elle élimine l'opposition et la pluralité ; elle transforme la population en une masse indifférenciée."
      }
     ]
    },
    {
     "rel": "révèle",
     "t": "La banalité du mal",
     "k": true,
     "d": "Le mal peut naître non d'une intention perverse, mais du renoncement à penser.",
     "c": [
      {
       "rel": "exemple",
       "t": "Eichmann",
       "d": "Un bureaucrate obéissant, non un monstre : il exécutait des ordres sans les juger."
      },
      {
       "rel": "remède",
       "t": "Penser et juger par soi-même",
       "d": "L'esprit critique et l'espace public protègent contre la domination totale."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La solitude politique",
     "rel": "laisse sans défense face à",
     "a": "La propagande"
    },
    {
     "de": "Penser et juger par soi-même",
     "rel": "résiste à",
     "a": "Une idéologie totalisante"
    }
   ],
   "idea": "Le totalitarisme n'est pas une tyrannie de plus : avec l'idéologie et la terreur, il transforme des individus isolés en masse, et son mal est exécuté par des gens ordinaires qui renoncent à penser."
  }
 },
 "C5B-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Arendt : vita activa et action politique",
  "mermaid": "flowchart TD\n  vit[\"VITA ACTIVA\"]\n  lan[\"labeur (animal laborans)\"]\n  egi[\"travail (homo faber)\"]\n  eki[\"action (zoon politikon)\"]:::axis\n  bizi[\"survivre\"]\n  mundu[\"le monde des objets\"]\n  plu[\"natalité et pluralité\"]:::key\n  esp[\"l'espace public\"]:::key\n  bot[\"pouvoir : agir ensemble\"]:::key\n  ind[\"la violence\"]\n  vit --> lan\n  vit --> egi\n  vit -->|\"la suprême\"| eki\n  lan --> bizi\n  egi --> mundu\n  eki -->|\"fondement\"| plu\n  eki -->|\"où\"| esp\n  esp --> bot\n  bot -->|\"se distingue\"| ind\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Que faisons-nous, nous les êtres humains, quand nous agissons, et quelle activité nous rend libres ?",
   "raiz": "LA VITA ACTIVA (ARENDT)",
   "raiz_d": "Dans La Condition de l'homme moderne (1958), Arendt distingue trois activités humaines, de la plus liée à la nécessité à la plus libre.",
   "ramas": [
    {
     "rel": "niveau biologique",
     "t": "Le labeur",
     "d": "Entretenir la vie : produire et consommer. Cela se répète sans fin et ne laisse pas de trace.",
     "c": [
      {
       "rel": "est accompli par l'",
       "t": "Animal laborans",
       "d": "L'être humain comme espèce qui doit survivre."
      }
     ]
    },
    {
     "rel": "niveau artificiel",
     "t": "Le travail",
     "d": "Fabriquer des objets durables : maisons, outils, œuvres.",
     "c": [
      {
       "rel": "est accompli par l'",
       "t": "Homo faber"
      },
      {
       "rel": "crée",
       "t": "Un monde stable d'objets",
       "d": "Un foyer commun qui dure plus longtemps que chaque vie humaine."
      }
     ]
    },
    {
     "rel": "niveau politique",
     "t": "L'action",
     "k": true,
     "d": "Agir et parler avec d'autres, sans objets entre nous : l'activité proprement libre.",
     "c": [
      {
       "rel": "se fonde sur",
       "t": "La natalité",
       "k": true,
       "d": "Chaque naissance apporte un commencement nouveau : nous pouvons initier quelque chose d'imprévu."
      },
      {
       "rel": "exige",
       "t": "La pluralité",
       "d": "Nous sommes égaux et en même temps uniques : nous agissons parmi des êtres distincts."
      },
      {
       "rel": "a lieu dans",
       "t": "L'espace public",
       "d": "Là où les citoyens parlent, s'écoutent et apparaissent devant les autres."
      }
     ]
    },
    {
     "rel": "de l'action naît",
     "t": "Le pouvoir",
     "k": true,
     "d": "Il surgit quand les gens agissent ensemble et s'accordent.",
     "c": [
      {
       "rel": "à ne pas confondre avec",
       "t": "La violence",
       "d": "Instrument qui remplace le pouvoir ou comble son vide : elle peut le détruire, non le créer."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Le pouvoir",
     "rel": "n'existe que dans",
     "a": "L'espace public"
    },
    {
     "de": "Animal laborans",
     "rel": "dans la modernité, envahit",
     "a": "L'espace public"
    }
   ],
   "idea": "Pour Arendt, la liberté ne réside ni dans la production ni dans la consommation, mais dans l'action avec d'autres dans l'espace public : de là naît le pouvoir, qui est le contraire de la violence."
  }
 },
 "CdB-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Beauvoir : la femme, l'altérité et la liberté",
  "mermaid": "flowchart TD\n  be[\"BEAUVOIR\"]\n  tez[\"on ne naît pas femme, on le devient\"]:::axis\n  best[\"la femme comme l'Autre\"]:::key\n  aska[\"la liberté en situation\"]:::key\n  mit[\"les mythes de la féminité\"]\n  obj[\"dialectique objet/sujet\"]\n  trans[\"transcendance\"]\n  inm[\"immanence\"]\n  gor[\"le corps et la situation\"]\n  be -->|\"thèse\"| tez\n  tez -->|\"la femme\"| best\n  tez -->|\"projet\"| aska\n  best --> mit\n  best -->|\"Hegel\"| obj\n  aska --> trans\n  aska -->|\"contre\"| inm\n  aska --> gor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si nous sommes libres, pourquoi la femme a-t-elle vécu comme « l'Autre » ?",
   "raiz": "LA FEMME, L'ALTÉRITÉ ET LA LIBERTÉ",
   "raiz_d": "L'argument du Deuxième Sexe (texte PAU : la Conclusion), lu à partir de l'existentialisme que Beauvoir partage avec Sartre.",
   "ramas": [
    {
     "rel": "part de",
     "t": "La liberté en situation",
     "a": "Beauvoir, Sartre",
     "d": "Il n'y a pas d'essence préalable : chaque être humain se fait par ses actes, mais toujours au sein d'une situation.",
     "c": [
      {
       "rel": "d'où la thèse",
       "t": "« On ne naît pas femme : on le devient »",
       "k": true,
       "d": "L'identité féminine est un produit de la culture et de la société, non de la biologie."
      },
      {
       "rel": "dans la Conclusion",
       "t": "« Dans la société humaine, rien n'est naturel »",
       "d": "La femme est un produit de la civilisation : son destin n'est pas fixé par les hormones."
      }
     ]
    },
    {
     "rel": "diagnostic",
     "t": "La femme comme « l'Autre »",
     "k": true,
     "d": "L'homme s'est défini comme Sujet ; elle est toujours définie par rapport à lui.",
     "c": [
      {
       "rel": "l'explique par",
       "t": "La dialectique du maître et de l'esclave",
       "a": "Hegel",
       "d": "L'identité se construit dans la lutte pour la reconnaissance de l'autre."
      },
      {
       "rel": "l'enferme dans",
       "t": "L'immanence",
       "d": "Tâches répétitives qui ne laissent pas de trace ; la transcendance est réservée à l'homme."
      },
      {
       "rel": "le justifient",
       "t": "Les mythes de l'« éternel féminin »",
       "d": "Ils présentent comme des essences éternelles ce qui est une situation historique."
      }
     ]
    },
    {
     "rel": "la maintient",
     "t": "La complicité et la mauvaise foi",
     "k": true,
     "d": "La liberté angoisse, et les deux sexes se mentent à eux-mêmes pour ne pas l'affronter.",
     "c": [
      {
       "rel": "chez la femme",
       "t": "Accepter d'être un « objet protégé »",
       "d": "Une éducation qui exalte l'abnégation l'invite à la facilité et à la dépendance."
      },
      {
       "rel": "chez l'homme",
       "t": "Transformer son privilège en « nature »"
      }
     ]
    },
    {
     "rel": "issue",
     "t": "La réciprocité",
     "k": true,
     "d": "Se reconnaître comme deux libertés qui se rencontrent : une fraternité entre égaux.",
     "c": [
      {
       "rel": "exige",
       "t": "Transformer l'économie et la culture",
       "d": "L'indépendance économique ne suffit pas : il faut aussi changer l'éducation et les mœurs."
      },
      {
       "rel": "réalise",
       "t": "La libération des deux sexes",
       "d": "« Vouloir être libre, c'est aussi vouloir les autres libres. »"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "« Dans la société humaine, rien n'est naturel »",
     "rel": "démonte",
     "a": "Les mythes de l'« éternel féminin »"
    },
    {
     "de": "L'immanence",
     "rel": "se brise quand",
     "a": "Transformer l'économie et la culture"
    }
   ],
   "idea": "La femme n'est pas « l'Autre » par nature, mais par une situation historique qu'elle accepte parfois par mauvaise foi ; l'issue est la réciprocité entre deux libertés."
  }
 },
 "CdB-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Après Beauvoir : genre et justice",
  "mermaid": "flowchart TD\n  gen[\"LA CONSTRUCTION DU GENRE\"]\n  but[\"Butler\"]:::axis\n  fra[\"Fraser\"]:::axis\n  nus[\"Nussbaum\"]:::axis\n  perf[\"la performativité\"]:::key\n  queer[\"la théorie queer\"]\n  bir[\"la redistribution\"]\n  ait[\"la reconnaissance\"]:::key\n  gait[\"les capacités humaines\"]:::key\n  just[\"justice de genre\"]:::key\n  gen --> but\n  gen --> fra\n  gen --> nus\n  but --> perf\n  perf --> queer\n  fra --> bir\n  fra --> ait\n  nus --> gait\n  bir --> just\n  ait --> just\n  gait --> just\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Après Beauvoir, qu'est-ce que le genre et qu'exige la justice entre les sexes ?",
   "raiz": "APRÈS BEAUVOIR : GENRE ET JUSTICE",
   "raiz_d": "Les héritières de Beauvoir ouvrent deux débats : qu'est-ce que le genre (identité) et que doit changer dans la société (justice).",
   "ramas": [
    {
     "rel": "qu'est-ce que le genre",
     "t": "Le genre comme performance",
     "k": true,
     "a": "Judith Butler",
     "d": "Ce n'est pas une essence biologique : nous le faisons en répétant des gestes, des vêtements et des manières de parler.",
     "c": [
      {
       "rel": "donc",
       "t": "Il peut être subverti",
       "d": "Si le genre est un scénario qui se répète, il peut aussi être réécrit."
      },
      {
       "rel": "d'où",
       "t": "La théorie queer",
       "d": "Elle remet en question l'idée qu'il n'y aurait que deux identités fixes et « normales »."
      }
     ]
    },
    {
     "rel": "qu'exige la justice",
     "t": "Redistribution et reconnaissance",
     "k": true,
     "a": "Nancy Fraser",
     "d": "La justice de genre a besoin à la fois de deux axes ; un seul ne suffit pas.",
     "c": [
      {
       "rel": "axe économique",
       "t": "Redistribution",
       "d": "Répartir les ressources, le temps et les opportunités."
      },
      {
       "rel": "axe culturel",
       "t": "Reconnaissance",
       "d": "Respecter la dignité et la voix de celles et ceux qui subissent l'oppression."
      }
     ]
    },
    {
     "rel": "comment la mesurer",
     "t": "L'approche par les capacités",
     "k": true,
     "a": "Martha Nussbaum",
     "d": "Une société est juste si elle garantit à toutes les personnes ce qu'elles peuvent réellement être et faire.",
     "c": [
      {
       "rel": "ne se mesure pas par",
       "t": "Le PIB",
       "d": "La richesse moyenne cache ce que chaque personne peut vraiment faire de sa vie."
      },
      {
       "rel": "mais par",
       "t": "Capacités de base",
       "d": "Vie, santé, intégrité, émotions, raison pratique, affiliation, jeu…"
      }
     ]
    },
    {
     "rel": "que mettre au centre",
     "t": "L'écoféminisme",
     "a": "Yayo Herrero",
     "d": "Il unit la crise écologique et l'oppression des femmes.",
     "c": [
      {
       "rel": "parce que nous sommes",
       "t": "Écodépendants et interdépendants",
       "d": "Nous dépendons de la nature et des soins des autres."
      },
      {
       "rel": "propose",
       "t": "Mettre la vie et le soin au centre"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Mettre la vie et le soin au centre",
     "rel": "exige",
     "a": "Redistribution"
    }
   ],
   "idea": "Beauvoir a montré que la femme se fait ; Butler ajoute que le genre se refait à chaque acte, et Fraser, Nussbaum et Herrero demandent ce qui doit changer dans la société pour qu'il y ait justice."
  }
 },
 "C8-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "L'existentialisme : liberté, absurde et être",
  "mermaid": "flowchart TD\n  ext[\"EXISTENTIALISME\"]\n  tesi[\"l'existence précède l'essence\"]:::axis\n  fen[\"phénoménologie\"]\n  kier[\"Kierkegaard\"]\n  hei[\"HEIDEGGER\"]:::axis\n  sar[\"SARTRE\"]:::axis\n  cam[\"CAMUS\"]:::axis\n  das[\"Dasein : être-au-monde\"]:::key\n  her[\"être-pour-la-mort\"]\n  den[\"la temporalité\"]\n  ask[\"la liberté\"]:::key\n  era[\"la responsabilité\"]\n  ang[\"l'angoisse\"]\n  abs[\"l'absurde\"]:::key\n  mat[\"la révolte\"]\n  zen[\"donner un sens à la vie\"]\n  aut[\"authenticité : auteur de sa propre vie\"]:::key\n  ext -->|\"thèse centrale\"| tesi\n  fen -->|\"source\"| ext\n  kier -->|\"précédent\"| ext\n  tesi -->|\"comme ontologie\"| hei\n  tesi -->|\"comme liberté\"| sar\n  tesi -->|\"comme absurde\"| cam\n  hei -->|\"la question de l'être\"| das\n  das -->|\"structure\"| her\n  her -->|\"base\"| den\n  sar -->|\"l'homme est liberté\"| ask\n  ask -->|\"de là\"| era\n  era -->|\"et\"| ang\n  cam -->|\"le monde est absurde\"| abs\n  abs -->|\"réponse\"| mat\n  mat -->|\"en créant\"| zen\n  den -->|\"vivre authentiquement\"| aut\n  ang --> aut\n  zen --> aut\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si nous naissons sans essence fixée, que faisons-nous de notre liberté ?",
   "raiz": "L'EXISTENTIALISME",
   "raiz_d": "Courant des années 40-50, après les guerres mondiales : la question du sens de la vie devient urgente. Précurseur : Kierkegaard.",
   "ramas": [
    {
     "rel": "point de départ",
     "t": "L'existence précède l'essence",
     "k": true,
     "a": "Sartre",
     "d": "Nous ne naissons pas avec une nature fixe : nous nous construisons par nos actes.",
     "c": [
      {
       "rel": "l'être humain est",
       "t": "Un projet",
       "d": "Un être qui se fait lui-même en choisissant."
      },
      {
       "rel": "se centre sur",
       "t": "L'individu concret",
       "a": "Unamuno",
       "d": "L'« homme de chair et d'os », non des abstractions."
      }
     ]
    },
    {
     "rel": "conséquence",
     "t": "La liberté radicale",
     "k": true,
     "a": "Sartre",
     "d": "« L'homme est condamné à être libre » : il y a toujours un choix ; ne pas choisir, c'est déjà choisir.",
     "c": [
      {
       "rel": "implique",
       "t": "La responsabilité",
       "d": "Sans Dieu ni nature pour nous excuser, nous répondons de ce que nous sommes."
      },
      {
       "rel": "produit",
       "t": "L'angoisse",
       "d": "Nous sentons l'absence de fondements absolus et le poids de choisir."
      }
     ]
    },
    {
     "rel": "arrière-plan",
     "t": "La finitude et l'absurdité",
     "d": "La vie n'a pas de but préétabli.",
     "c": [
      {
       "rel": "se vit comme",
       "t": "Être-pour-la-mort",
       "a": "Heidegger",
       "d": "Nous sommes jetés dans un monde que nous n'avons pas choisi et nous sommes finis."
      },
      {
       "rel": "se vit comme",
       "t": "La nausée et le néant",
       "a": "Sartre, Heidegger",
       "d": "L'existence apparaît sans raison ni fondement."
      },
      {
       "rel": "se vit comme",
       "t": "L'absurde",
       "a": "Camus",
       "d": "Choc entre notre soif de sens et un monde qui ne la satisfait pas."
      }
     ]
    },
    {
     "rel": "deux manières de vivre",
     "t": "Authenticité ou fuite",
     "k": true,
     "d": "Que faisons-nous face à la liberté et à la mort.",
     "c": [
      {
       "rel": "fuir, c'est",
       "t": "Mauvaise foi et inauthenticité",
       "d": "Se mentir à soi-même (« je suis comme ça », « je n'avais pas le choix ») ou faire ce que « l'on » fait, comme la masse."
      },
      {
       "rel": "assumer, c'est",
       "t": "La vie authentique",
       "d": "Accepter la finitude et choisir consciemment, en assumant les conséquences."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "L'angoisse",
     "rel": "pousse à se réfugier dans",
     "a": "Mauvaise foi et inauthenticité"
    },
    {
     "de": "Être-pour-la-mort",
     "rel": "une fois acceptée, ouvre",
     "a": "La vie authentique"
    }
   ],
   "idea": "Il n'y a ni essence ni Dieu pour décider à notre place : nous sommes condamnés à être libres, et vivre authentiquement, c'est assumer cette liberté et notre finitude sans excuses."
  }
 },
 "C8K-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Kierkegaard : l'angoisse de la liberté et le saut de la foi",
  "mermaid": "flowchart TD\n  kk[\"KIERKEGAARD\"]\n  giz[\"l'homme se caractérise ainsi\"]:::axis\n  ezdet[\"son essence ne le détermine pas d'avance\"]:::key\n  elegi[\"il doit se choisir lui-même\"]:::key\n  ezdeus[\"par lui-même il n'est rien\"]\n  ahalg[\"toute option n'est que possibilité\"]\n  angus[\"L'ANGOISSE\"]:::key\n  etsip[\"LE DÉSESPOIR\"]:::key\n  fede[\"le saut de la foi : vers la pure réalité\"]:::key\n  jaink[\"DIEU\"]:::axis\n  kk --> giz\n  giz --> ezdet\n  giz --> elegi\n  ezdet -->|\"donc\"| ezdeus\n  elegi -->|\"mais\"| ahalg\n  ezdeus -->|\"produit\"| angus\n  ahalg -->|\"produit\"| etsip\n  angus -->|\"nous en sortons\"| fede\n  etsip -->|\"nous en sortons\"| fede\n  fede -->|\"est\"| jaink\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Que signifie exister comme individu qui doit se choisir lui-même ?",
   "raiz": "KIERKEGAARD",
   "raiz_d": "Penseur danois du XIXe siècle, précurseur de l'existentialisme : face aux grands systèmes abstraits (Hegel), l'individu concret.",
   "ramas": [
    {
     "rel": "point de départ",
     "t": "L'individu singulier",
     "k": true,
     "d": "Ce qui importe n'est pas l'humanité en abstrait, mais mon existence concrète.",
     "c": [
      {
       "rel": "n'est pas donné",
       "t": "Le moi est une tâche",
       "d": "L'individu doit devenir lui-même."
      },
      {
       "rel": "c'est pourquoi",
       "t": "Se choisir : « ou bien… ou bien »",
       "d": "Exister, c'est décider, et personne ne peut choisir à ma place."
      }
     ]
    },
    {
     "rel": "la liberté produit",
     "t": "L'angoisse",
     "k": true,
     "d": "Le vertige de la liberté : se sentir face à la pure possibilité, sans rien qui garantisse le choix.",
     "c": [
      {
       "rel": "naît de",
       "t": "La possibilité",
       "d": "Tout peut être et rien n'est assuré d'avance."
      }
     ]
    },
    {
     "rel": "modes d'existence",
     "t": "Les trois stades",
     "d": "Trois formes de vie entre lesquelles on ne passe pas par raisonnement, mais en choisissant.",
     "c": [
      {
       "rel": "premier",
       "t": "Esthétique",
       "d": "Vivre pour le plaisir de l'instant, sans engagement (le séducteur).",
       "c": [
        {
         "rel": "aboutit au",
         "t": "Le désespoir",
         "d": "Ne pas vouloir être soi-même : la vie dispersée se vide."
        }
       ]
      },
      {
       "rel": "deuxième",
       "t": "Éthique",
       "d": "Engagement envers le devoir et les normes universelles (le mariage)."
      },
      {
       "rel": "troisième",
       "t": "Religieux",
       "d": "Relation personnelle et absolue de l'individu avec Dieu."
      }
     ]
    },
    {
     "rel": "seule issue",
     "t": "Le saut de la foi",
     "k": true,
     "d": "La foi ne se démontre pas par la raison : elle se décide, en risquant tout.",
     "c": [
      {
       "rel": "est",
       "t": "Un paradoxe",
       "d": "Elle est au-dessus de l'éthique et de toute logique."
      },
      {
       "rel": "modèle",
       "t": "Abraham",
       "d": "Il accepte de sacrifier Isaac par obéissance à Dieu, contre toute raison éthique."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Le désespoir",
     "rel": "pousse vers",
     "a": "Le saut de la foi"
    },
    {
     "de": "Le saut de la foi",
     "rel": "donne accès au stade",
     "a": "Religieux"
    }
   ],
   "idea": "Pour Kierkegaard, exister, c'est se choisir : cette liberté angoisse, la vie esthétique aboutit au désespoir et seul le saut de la foi, que la raison ne justifie pas, réconcilie l'individu avec lui-même devant Dieu."
  }
 },
 "C6-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "La postmodernité : les axes de la fin des métarécits",
  "mermaid": "flowchart TD\n  pm[\"POSTMODERNITÉ\"]\n  meta[\"la fin des métarécits\"]\n  niet[\"l'héritage de Nietzsche\"]\n  lyo[\"Lyotard\"]:::axis\n  der[\"Derrida\"]:::axis\n  fou[\"Foucault\"]:::axis\n  bau[\"Baudrillard\"]:::axis\n  del[\"Deleuze et Guattari\"]:::axis\n  jak[\"la perte de légitimation du savoir\"]:::key\n  desk[\"déconstruction et différance\"]:::key\n  bot[\"pouvoir / savoir, biopolitique\"]:::key\n  sim[\"le simulacre\"]:::key\n  erri[\"rhizome et lignes de fuite\"]:::key\n  haber[\"Habermas : modernité inachevée\"]:::axis\n  vat[\"Vattimo : pensée faible\"]\n  ror[\"Rorty : conversation et ironie\"]\n  pm -->|\"diagnostic central\"| meta\n  pm -->|\"point de départ\"| niet\n  meta --> lyo\n  meta --> der\n  meta --> fou\n  meta --> bau\n  meta --> del\n  lyo -->|\"le savoir\"| jak\n  der -->|\"le texte\"| desk\n  fou -->|\"généalogie\"| bot\n  bau -->|\"hyperréalité\"| sim\n  del -->|\"non hiérarchique\"| erri\n  jak -->|\"contre-réponse\"| haber\n  desk -->|\"affaiblir l'être\"| vat\n  erri -->|\"conversation\"| ror\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Pouvons-nous continuer à faire confiance à la raison, à la vérité et au progrès ?",
   "raiz": "LA POSTMODERNITÉ",
   "raiz_d": "Après les guerres et les totalitarismes, le scepticisme remplace la foi moderne dans le progrès. Son grand précurseur est Nietzsche.",
   "ramas": [
    {
     "rel": "diagnostic",
     "t": "La fin des métarécits",
     "k": true,
     "a": "Lyotard",
     "d": "« Incrédulité à l'égard des métarécits » : nous ne croyons plus aux récits qui expliquent toute la réalité.",
     "c": [
      {
       "rel": "exemples",
       "t": "Christianisme, marxisme, progrès",
       "d": "Grands récits qui promettaient un but à l'histoire."
      },
      {
       "rel": "les remplacent",
       "t": "Petits récits locaux",
       "d": "Fragmentation et pluralisme : il n'y a pas de « Grande Histoire »."
      }
     ]
    },
    {
     "rel": "radicalisent la critique",
     "t": "La pensée de la rupture",
     "d": "Ils abandonnent le projet moderne d'une raison et d'une vérité universelles.",
     "c": [
      {
       "rel": "démonte les concepts",
       "t": "La déconstruction",
       "a": "Derrida",
       "d": "Il n'y a rien « hors du texte » : tout concept cache des contradictions et des hiérarchies de pouvoir."
      },
      {
       "rel": "démonte le moi",
       "t": "La mort du sujet",
       "a": "Foucault",
       "d": "Le moi est une construction de réseaux de pouvoir et de discours : tout savoir produit du pouvoir."
      },
      {
       "rel": "renonce à la vérité forte",
       "t": "La pensée faible",
       "a": "Vattimo",
       "d": "Il assume la pluralité des interprétations : une éthique de la tolérance."
      },
      {
       "rel": "démonte le réel",
       "t": "L'hyperréalité",
       "a": "Baudrillard",
       "d": "Le simulacre remplace le réel : « la carte a remplacé le territoire »."
      }
     ]
    },
    {
     "rel": "réplique",
     "t": "Réparer la modernité",
     "k": true,
     "a": "Habermas",
     "d": "Si nous renonçons à la raison universelle, nous restons sans outils pour critiquer l'injustice.",
     "c": [
      {
       "rel": "le problème est",
       "t": "La raison instrumentale",
       "d": "La raison utilisée seulement comme moyen de dominer et de calculer."
      },
      {
       "rel": "propose",
       "t": "La raison dialogique",
       "k": true,
       "d": "Accords rationnels dans une communauté idéale de parole, sans contraintes."
      }
     ]
    },
    {
     "rel": "aporie",
     "t": "Tout se vaut ?",
     "d": "Sans vérité objective, comment distinguer une information réelle d'une fake news, ou un expert d'un influenceur ?"
    }
   ],
   "cruces": [
    {
     "de": "La raison dialogique",
     "rel": "répond à",
     "a": "La pensée de la rupture"
    },
    {
     "de": "L'hyperréalité",
     "rel": "aiguise",
     "a": "Tout se vaut ?"
    }
   ],
   "idea": "La postmodernité proclame la fin des grands récits et de la vérité unique ; Habermas répond que, sans une raison dialogique, nous restons sans outils pour critiquer l'injustice."
  }
 },
 "C7-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Les changements de paradigme",
  "mermaid": "flowchart TD\n  arist[\"Aristote\"]:::key\n  org[\"paradigme organiciste\"]:::axis\n  magik[\"Paradigme magico-animiste\"]:::axis\n  mek[\"paradigme mécaniste\"]:::axis\n  esp[\"fondé sur l'expérience\"]:::key\n  anim[\"la nature = un grand animal\"]\n  ezoh[\"accepte les phénomènes extraordinaires\"]\n  inoz[\"mentalité naïve\"]\n  makin[\"la nature = des machines\"]:::key\n  hedad[\"le réel : étendue et mouvement\"]\n  ezind[\"n'accepte pas les forces occultes\"]\n  ondor[\"conséquences : découvertes et mathématiques dans la science\"]:::key\n  arist -->|\"telle est son origine\"| org\n  org -->|\"a remplacé celui-ci\"| magik\n  magik -->|\"celui-ci l'a remplacé\"| mek\n  magik -->|\"se fonde\"| esp\n  esp -->|\"croit\"| anim\n  anim -->|\"accepte\"| ezoh\n  ezoh -->|\"produit\"| inoz\n  mek -->|\"la nature est\"| makin\n  makin -->|\"seul le réel\"| hedad\n  makin -->|\"n'accepte pas\"| ezind\n  mek -->|\"la conséquence est\"| ondor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment la manière de comprendre la nature a-t-elle changé ?",
   "raiz": "LES CHANGEMENTS DE PARADIGME",
   "raiz_d": "Un paradigme est le cadre que partage une époque pour expliquer la nature ; quand il entre en crise, un autre le remplace.",
   "ramas": [
    {
     "rel": "Antiquité et Moyen Âge",
     "t": "Paradigme organiciste",
     "k": true,
     "a": "Aristote",
     "d": "La nature est comme un grand organisme vivant dans lequel tout tend vers une fin.",
     "c": [
      {
       "rel": "se fonde sur",
       "t": "L'expérience des sens",
       "d": "Observation qualitative et bon sens, sans mesurer ni expérimenter."
      },
      {
       "rel": "explique par",
       "t": "Causes finales",
       "d": "Chaque chose se meut vers son lieu naturel ou sa fin (téléologie)."
      }
     ]
    },
    {
     "rel": "Renaissance",
     "t": "Paradigme magico-animiste",
     "k": true,
     "a": "Ficin, Paracelse, Bruno",
     "d": "La nature est un être animé, plein d'âmes, de sympathies et d'antipathies.",
     "c": [
      {
       "rel": "admet",
       "t": "Forces occultes et faits extraordinaires",
       "d": "Correspondances secrètes entre astres, corps et plantes."
      },
      {
       "rel": "le sage est",
       "t": "Le mage",
       "d": "Celui qui connaît ces forces peut dominer la nature (alchimie, astrologie)."
      }
     ]
    },
    {
     "rel": "XVIIe siècle",
     "t": "Paradigme mécaniste",
     "k": true,
     "a": "Galilée, Descartes, Newton",
     "d": "La nature est une machine régie par des lois mathématiques.",
     "c": [
      {
       "rel": "n'accepte que",
       "t": "Étendue et mouvement",
       "d": "Le réel est le mesurable ; les forces occultes et les fins sont rejetées."
      },
      {
       "rel": "méthode",
       "t": "Expérience et mathématiques",
       "d": "Base de la science moderne et de ses grandes découvertes."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Paradigme magico-animiste",
     "rel": "rompt avec",
     "a": "Paradigme organiciste"
    },
    {
     "de": "Paradigme mécaniste",
     "rel": "remplace",
     "a": "Paradigme magico-animiste"
    },
    {
     "de": "Étendue et mouvement",
     "rel": "élimine",
     "a": "Causes finales"
    }
   ],
   "idea": "La nature passe d'un organisme avec des fins (Aristote) à un être animé plein de forces occultes (Renaissance) et, enfin, à une machine mesurable par les mathématiques : la science moderne naît."
  }
 },
 "C9-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crise de la modernité",
  "title": "Le féminisme : genre, altérité et débats actuels",
  "mermaid": "flowchart TD\n  fem[\"FÉMINISME\"]\n  sgb[\"distinction sexe-genre\"]:::axis\n  ola[\"les vagues\"]\n  bea[\"Simone de Beauvoir\"]:::axis\n  but[\"Judith Butler\"]:::axis\n  gaur[\"débats actuels\"]\n  alt[\"l'altérité\"]\n  ezda[\"on ne naît pas femme, on le devient\"]:::key\n  traz[\"transcendance et immanence\"]\n  perf[\"performativité du genre\"]:::key\n  queer[\"théorie queer\"]\n  deseg[\"défaire le genre\"]\n  fra[\"Fraser : redistribution et reconnaissance\"]:::key\n  nus[\"Nussbaum : capacités\"]:::key\n  inter[\"intersectionnalité\"]:::key\n  zain[\"éthique du care et interdépendance\"]:::key\n  fem -->|\"base\"| sgb\n  fem -->|\"contexte\"| ola\n  sgb --> bea\n  sgb --> but\n  sgb --> gaur\n  bea -->|\"l'homme sujet, la femme Autre\"| alt\n  alt -->|\"de là\"| ezda\n  ezda -->|\"veut dépasser\"| traz\n  but -->|\"le genre est un acte\"| perf\n  perf -->|\"de là\"| queer\n  queer --> deseg\n  gaur --> fra\n  gaur --> nus\n  gaur --> inter\n  traz --> zain\n  deseg --> zain\n  inter --> zain\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment le féminisme a-t-il changé ce que nous entendons par « être une femme » ?",
   "raiz": "LE FÉMINISME",
   "raiz_d": "Théorie et mouvement qui dénonce l'inégalité entre les sexes et montre qu'elle est historique, non naturelle. On le raconte d'ordinaire par « vagues ».",
   "ramas": [
    {
     "rel": "première vague",
     "t": "L'égalité des droits",
     "a": "Les suffragettes",
     "d": "XIXe et XXe siècles : vote, éducation et droits légaux pour les femmes.",
     "c": [
      {
       "rel": "limite",
       "t": "Changer les lois ne suffit pas",
       "d": "L'inégalité persiste dans la famille, le travail et la culture."
      }
     ]
    },
    {
     "rel": "deuxième vague",
     "t": "La critique de toute la culture",
     "k": true,
     "a": "Simone de Beauvoir",
     "d": "Années 60-80 : l'oppression n'est pas seulement légale, mais structurelle.",
     "c": [
      {
       "rel": "point de départ",
       "t": "« On ne naît pas femme : on le devient »"
      },
      {
       "rel": "diagnostic",
       "t": "La femme comme « l'autre »",
       "d": "Toujours définie par rapport à l'homme, qui se présente comme Sujet."
      },
      {
       "rel": "de là surgit",
       "t": "La distinction sexe / genre",
       "k": true,
       "d": "Le sexe est biologique ; le genre (le féminin et le masculin) est une construction sociale."
      }
     ]
    },
    {
     "rel": "débats actuels",
     "t": "Genre, diversité et soin",
     "d": "Depuis les années 90, le féminisme s'élargit et se pluralise.",
     "c": [
      {
       "rel": "remet en question",
       "t": "Le genre comme performance",
       "k": true,
       "a": "Judith Butler",
       "d": "Le genre se fait en répétant des actes ; il n'y a pas d'essence derrière pour l'expliquer."
      },
      {
       "rel": "ajoute",
       "t": "L'intersectionnalité",
       "k": true,
       "d": "L'oppression de genre se croise avec la classe, la race, la sexualité ou la migration."
      },
      {
       "rel": "exige",
       "t": "Redistribution et reconnaissance",
       "a": "Nancy Fraser",
       "d": "Justice économique et respect de la dignité, à la fois."
      },
      {
       "rel": "propose",
       "t": "Le soin au centre",
       "a": "Yayo Herrero (écoféminisme)",
       "d": "Nous sommes vulnérables et interdépendants : la vie et le soin doivent guider la politique."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Changer les lois ne suffit pas",
     "rel": "cède la place à",
     "a": "La critique de toute la culture"
    },
    {
     "de": "Le genre comme performance",
     "rel": "met en doute",
     "a": "La distinction sexe / genre"
    }
   ],
   "idea": "Le féminisme passe de la revendication de droits au démontage de l'idée d'une « nature » féminine ; aujourd'hui, il discute de ce qu'est le genre et de la façon dont il se croise avec d'autres inégalités."
  }
 },
 "ds-A2": {
  "subject": "hf",
  "block": "A",
  "tema": "Méthodes du philosophe",
  "title": "Méthodes et outils du philosophe",
  "mermaid": "flowchart TD\n  center[\"MÉTHODES ET OUTILS<br>DU PHILOSOPHE\"]:::axis\n  fu[\"Sources d'information\"]:::key\n  he[\"Outils du philosophe\"]:::key\n  center -->|\"part de\"| fu\n  center -->|\"les travaille avec\"| he\n  fu --> f1[\"documents · conférences<br>· traces numériques\"]\n  f1 -->|\"sont soumises à\"| h1[\"1· analyse critique des sources\"]\n  he --> h1\n  h1 --> h2[\"2· interprétation de documents\"]\n  h2 --> h3[\"3· identifier des problèmes philosophiques\"]\n  h3 --> h4[\"4· dialogue fondé sur des arguments\"]\n  h4 --> h5[\"5· recherche philosophique\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment travaille un philosophe : avec quels matériaux et quels outils ?",
   "raiz": "LES MÉTHODES DE LA PHILOSOPHIE",
   "raiz_d": "Faire de la philosophie, ce n'est pas donner son avis : c'est bien formuler une question, clarifier les concepts et défendre une réponse avec des raisons.",
   "ramas": [
    {
     "rel": "part de",
     "t": "Les sources",
     "d": "Documents, conférences, traces numériques : des textes à lire avec esprit critique.",
     "c": [
      {
       "rel": "se lisent dans",
       "t": "Leur contexte (historicité)",
       "k": true,
       "d": "Toute pensée naît dans une époque, une société et une culture concrètes."
      },
      {
       "rel": "oblige à réviser",
       "t": "Le canon",
       "d": "Ce qui est « classique » n'est pas neutre : on a laissé de côté les femmes et les penseurs non européens."
      }
     ]
    },
    {
     "rel": "les interprète avec",
     "t": "Interprétation",
     "d": "Lire un texte philosophique, c'est l'interpréter.",
     "c": [
      {
       "rel": "sa règle",
       "t": "Principe de charité",
       "k": true,
       "d": "Reconstruire la version la plus solide de l'auteur avant de le critiquer. Ce n'est pas lui donner raison."
      }
     ]
    },
    {
     "rel": "défend ses thèses avec",
     "t": "Argumentation",
     "k": true,
     "d": "Défendre une conclusion à partir de prémisses, en montrant pourquoi on y arrive.",
     "c": [
      {
       "rel": "doit détecter le",
       "t": "Sophisme",
       "d": "Raisonnement qui paraît solide, mais ne justifie pas sa conclusion."
      }
     ]
    },
    {
     "rel": "ordonne tout dans la",
     "t": "Recherche philosophique",
     "k": true,
     "d": "Délimiter une question, choisir les sources, clarifier les concepts et construire une position raisonnée.",
     "c": [
      {
       "rel": "suit un ordre",
       "t": "Problème, concepts, thèse, arguments",
       "d": "Et conclusion, sans oublier la critique : ses propres faiblesses et les positions contraires."
      }
     ]
    },
    {
     "rel": "varient avec l'histoire",
     "t": "Méthodes et genres",
     "d": "Chaque époque travaille les problèmes à sa manière et les écrit sous sa propre forme.",
     "c": [
      {
       "rel": "dans l'Antiquité",
       "t": "Dialogue, dialectique et traité",
       "a": "Socrate, Platon, Aristote",
       "d": "Questionner et réfuter ; s'élever jusqu'aux Idées ; définir, classer et chercher les causes."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Principe de charité",
     "rel": "permet de critiquer avec justesse dans la",
     "a": "Argumentation"
    },
    {
     "de": "Leur contexte (historicité)",
     "rel": "explique pourquoi changent les",
     "a": "Méthodes et genres"
    }
   ],
   "idea": "Faire de la philosophie, c'est transformer l'opinion en une position raisonnable : lire les sources dans leur contexte et avec bienveillance, argumenter à partir de prémisses et ordonner la réponse à une question bien délimitée."
  }
 },
 "ds-A3": {
  "subject": "hf",
  "block": "A",
  "tema": "Origine de la philosophie",
  "title": "La naissance de la philosophie en Grèce",
  "mermaid": "flowchart TD\n  center[\"LA NAISSANCE DE LA PHILOSOPHIE<br>EN GRÈCE (VIe s. av. J.-C.)\"]:::axis\n  paso[\"Passage du mythe au logos\"]:::key\n  fac[\"Facteurs qui le rendent possible\"]:::key\n  center -->|\"consiste en\"| paso\n  center -->|\"l'expliquent\"| fac\n  paso --> mito[\"MYTHE :<br>explication imaginative (dieux)\"]\n  paso --> logos[\"LOGOS :<br>explication rationnelle (causes)\"]\n  mito -->|\"cède la place au\"| logos\n  fac --> c1[\"démocratie de la polis → débat sur l'agora\"]\n  fac --> c2[\"esclavage → temps libre pour penser\"]\n  fac --> c3[\"religion sans dogmes → liberté de critique\"]\n  fac --> c4[\"commerce → contact avec d'autres cultures\"]\n  fac --> c5[\"lois écrites → débat systématique\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Pourquoi la philosophie est-elle née en Grèce et qu'est-ce qui a changé dans le passage du mythe au logos ?",
   "raiz": "DU MYTHE AU LOGOS",
   "raiz_d": "VIe siècle av. J.-C., colonies grecques d'Ionie (Milet) et Grande-Grèce : premières tentatives d'expliquer la réalité sans le surnaturel.",
   "ramas": [
    {
     "rel": "avant",
     "t": "Mythe",
     "k": true,
     "a": "Homère, Hésiode",
     "d": "Récits traditionnels des poètes sur le monde, les êtres humains et les dieux.",
     "c": [
      {
       "rel": "répond à",
       "t": "Qui l'a fait ?",
       "d": "Ce qui arrive dépend de la volonté capricieuse des dieux. On l'accepte et on le transmet."
      },
      {
       "rel": "le met en doute la",
       "t": "Critique de Xénophane",
       "a": "Xénophane",
       "d": "Les dieux sont une projection humaine : si les bœufs peignaient, ils peindraient des dieux semblables à des bœufs."
      }
     ]
    },
    {
     "rel": "ensuite",
     "t": "Logos",
     "k": true,
     "d": "La raison : chercher les causes dans la nature elle-même (physis), non dans les dieux.",
     "c": [
      {
       "rel": "répond à",
       "t": "Pourquoi cela arrive-t-il nécessairement ?",
       "k": true,
       "d": "Les choses n'arrivent pas par caprice : il y a nécessité et la physis est un cosmos, un ordre."
      },
      {
       "rel": "cherche",
       "t": "L'arkhé",
       "d": "Le principe dont tout procède."
      },
      {
       "rel": "est soumise à",
       "t": "Critique et discussion",
       "d": "Les explications sont critiquées et mises à l'épreuve."
      }
     ]
    },
    {
     "rel": "l'ont rendu possible",
     "t": "Conditions en Grèce",
     "k": true,
     "c": [
      {
       "rel": "il y avait",
       "t": "Loisir pour penser",
       "d": "Le travail des esclaves donnait du temps libre aux citoyens."
      },
      {
       "rel": "il n'y avait pas",
       "t": "De livres sacrés ni de caste sacerdotale",
       "d": "Ni dogmes ni vérité révélée à imposer."
      },
      {
       "rel": "se sont étendus",
       "t": "La polis et le commerce",
       "d": "Le contact avec l'Égypte, l'Asie et d'autres cultures a relativisé les croyances propres."
      },
      {
       "rel": "sont nés",
       "t": "Le citoyen et l'agora",
       "d": "Sur la place publique, on débat et l'argumentation prend de la valeur."
      },
      {
       "rel": "s'est développée",
       "t": "L'écriture alphabétique",
       "d": "Elle fixe la pensée et permet de la critiquer et de la transmettre."
      }
     ]
    },
    {
     "rel": "avec ses limites",
     "t": "Une origine avec des zones d'ombre",
     "c": [
      {
       "rel": "a laissé de côté",
       "t": "Femmes, esclaves et étrangers",
       "d": "La parole publique n'était pas pour tous."
      },
      {
       "rel": "dément le",
       "t": "« Miracle grec »",
       "d": "La Grèce a hérité de savoirs d'Égypte, de Mésopotamie ou de Phénicie ; sa nouveauté a été de discuter les explications en public."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Critique de Xénophane",
     "rel": "ouvre la voie à la",
     "a": "Logos"
    },
    {
     "de": "Le citoyen et l'agora",
     "rel": "rend possible la",
     "a": "Critique et discussion"
    }
   ],
   "idea": "Le passage du mythe au logos ne remplace pas des histoires par d'autres : il change le type d'explication, de « qui l'a fait ? » à « pourquoi cela arrive-t-il nécessairement ? ». La nouveauté grecque a été de rendre les explications discutables en public."
  }
 },
 "ds-A4": {
  "subject": "hf",
  "block": "A",
  "tema": "Présocratiques",
  "title": "Présocratiques : la recherche de l'arkhé",
  "mermaid": "flowchart TD\n  center[\"PRÉSOCRATIQUES :<br>quel est l'arkhé (principe) de tout ?\"]:::axis\n  fis[\"Physiciens :<br>un principe matériel\"]:::key\n  otros[\"Autres réponses\"]:::key\n  deb[\"Le grand débat :<br>changement vs permanence\"]:::key\n  center --> fis\n  center --> otros\n  center --> deb\n  fis --> t1[\"Thalès → eau\"]\n  fis --> t2[\"Anaximandre → apeiron\"]\n  fis --> t3[\"Anaximène → air\"]\n  fis --> t4[\"Démocrite → atomes + vide\"]\n  otros --> p1[\"Pythagore → nombres\"]\n  otros --> emp[\"Empédocle → 4 éléments\"]\n  otros --> ana[\"Anaxagore → nous\"]\n  deb --> her[\"Héraclite → tout coule (feu)\"]\n  deb --> par[\"Parménide → l'être est immuable\"]\n  her -->|\"s'oppose à\"| par\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si tout change, qu'est-ce qui demeure ? Quel est le principe (arkhé) de la réalité ?",
   "raiz": "LES PRÉSOCRATIQUES ET L'ARKHÉ",
   "raiz_d": "La physis est un cosmos, un ordre. Derrière le changement, il doit y avoir quelque chose qui demeure : l'arkhé, origine, substrat et cause de tout.",
   "ramas": [
    {
     "rel": "un seul principe matériel",
     "t": "Monistes de Milet",
     "k": true,
     "d": "Une seule substance naturelle, vivante par elle-même (hylozoïsme), qui se transforme.",
     "c": [
      {
       "rel": "pour Thalès",
       "t": "L'eau",
       "a": "Thalès",
       "d": "Tout ce qui vit en a besoin et en jaillit."
      },
      {
       "rel": "pour Anaximandre",
       "t": "L'apeiron",
       "a": "Anaximandre",
       "d": "L'indéfini et illimité, d'où tout sort et où tout retourne."
      },
      {
       "rel": "pour Anaximène",
       "t": "L'air",
       "a": "Anaximène",
       "d": "Par condensation et raréfaction : premier mécanisme qui explique le changement."
      }
     ]
    },
    {
     "rel": "un principe non matériel",
     "t": "Pythagoriciens",
     "a": "Pythagore",
     "d": "Le nombre et la proportion : les choses sont ce qu'elles sont parce qu'elles respectent des proportions.",
     "c": [
      {
       "rel": "enseignent",
       "t": "Âme immortelle, corps prison",
       "d": "L'âme transmigre d'un corps à un autre. Elle influencera Platon."
      }
     ]
    },
    {
     "rel": "le grand débat",
     "t": "Le problème du changement",
     "c": [
      {
       "rel": "l'affirme",
       "t": "Tout coule",
       "k": true,
       "a": "Héraclite",
       "d": "Devenir continu et lutte des contraires, régis par un logos (le feu)."
      },
      {
       "rel": "le nie",
       "t": "L'être est, le non-être n'est pas",
       "k": true,
       "a": "Parménide",
       "d": "L'être est éternel, unique et immuable ; le changement est une apparence des sens.",
       "c": [
        {
         "rel": "d'où",
         "t": "Raison contre sens",
         "d": "Voie de la vérité (raison) et voie de l'opinion (sens) : naît le problème de la connaissance."
        }
       ]
      }
     ]
    },
    {
     "rel": "plusieurs principes éternels",
     "t": "Pluralistes",
     "k": true,
     "d": "Les principes ne naissent ni ne meurent ; changer, c'est se mélanger et se séparer.",
     "c": [
      {
       "rel": "pour Empédocle",
       "t": "Quatre racines",
       "a": "Empédocle",
       "d": "Terre, eau, air et feu, que l'Amour unit et la Haine sépare."
      },
      {
       "rel": "pour Anaxagore",
       "t": "Semences et Nous",
       "a": "Anaxagore",
       "d": "Une infinité de semences (homéoméries) qu'un esprit, le Nous, met en mouvement."
      },
      {
       "rel": "pour Démocrite",
       "t": "Atomes et vide",
       "a": "Démocrite",
       "d": "Tout est matière et mouvement, sans finalité (mécanisme)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Pluralistes",
     "rel": "reprennent l'éternité de l'être à",
     "a": "L'être est, le non-être n'est pas"
    },
    {
     "de": "Pluralistes",
     "rel": "sauvent le changement d'",
     "a": "Tout coule"
    },
    {
     "de": "Atomes et vide",
     "rel": "admet un non-être (le vide) contre",
     "a": "L'être est, le non-être n'est pas"
    }
   ],
   "idea": "Tous cherchent l'arkhé, mais le problème de fond est le changement : Héraclite l'affirme, Parménide le nie et les pluralistes le sauvent avec plusieurs principes éternels. Platon héritera du problème."
  }
 },
 "ds-A5": {
  "subject": "hf",
  "block": "A",
  "tema": "Sophistes et Socrate",
  "title": "Les sophistes et Socrate",
  "mermaid": "flowchart TD\n  center[\"LES SOPHISTES ET SOCRATE\"]:::axis\n  sof[\"SOPHISTES<br>(Protagoras, Gorgias)\"]:::key\n  soc[\"SOCRATE\"]:::key\n  asp[\"ASPASIE DE MILET\"]:::key\n  center --> sof\n  center --> soc\n  center --> asp\n  sof -->|\"s'opposent à\"| soc\n  sof --> s1[\"scepticisme épistémologique\"]\n  sof --> s2[\"relativisme moral\"]\n  sof --> s3[\"les lois sont conventions\"]\n  soc --> c1[\"universalisme moral\"]\n  soc --> c2[\"cherche des définitions universelles\"]\n  soc --> c3[\"intellectualisme moral : savoir = vertu\"]\n  soc -->|\"méthode\"| c4[\"ironie + maïeutique\"]\n  asp --> a1[\"maîtresse de rhétorique\"]\n  asp -->|\"influence\"| soc\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Les lois et les valeurs sont-elles naturelles ou conventionnelles ? Y a-t-il une vérité valable pour tous ?",
   "raiz": "SOPHISTES, SOCRATE ET ASPASIE",
   "raiz_d": "Ve siècle av. J.-C., Athènes démocratique : avec le tournant anthropologique, la philosophie passe de la physis à la polis.",
   "ramas": [
    {
     "rel": "débat de fond",
     "t": "Physis contre nomos",
     "k": true,
     "d": "Ce qui est naturel, qui ne varie pas, contre ce qui est convenu entre les êtres humains : loi, coutume, valeurs.",
     "c": [
      {
       "rel": "selon Hippias",
       "t": "Les lois sont des conventions",
       "a": "Hippias",
       "d": "Elles varient d'une communauté à l'autre et, de ce fait, peuvent être changées."
      }
     ]
    },
    {
     "rel": "enseignent la rhétorique",
     "t": "Les sophistes",
     "d": "Maîtres itinérants qui enseignaient, contre rémunération, à triompher à l'assemblée.",
     "c": [
      {
       "rel": "défend le",
       "t": "Relativisme",
       "k": true,
       "a": "Protagoras",
       "d": "« L'homme est la mesure de toutes choses » : il n'y a pas de vérité ni de justice uniques."
      },
      {
       "rel": "défend le",
       "t": "Scepticisme",
       "a": "Gorgias",
       "d": "Rien n'existe ; si quelque chose existait, il ne serait pas connaissable ; s'il était connaissable, il ne serait pas communicable."
      },
      {
       "rel": "réduisent le langage à la",
       "t": "Persuasion",
       "d": "Rhétorique et éristique : convaincre, non dire ce que sont les choses."
      }
     ]
    },
    {
     "rel": "combat les sophistes",
     "t": "Socrate",
     "d": "Il ne se fait pas payer, dialogue au lieu de prononcer des discours et part de « Je sais que je ne sais rien ».",
     "c": [
      {
       "rel": "face au relativisme",
       "t": "Définitions universelles",
       "k": true,
       "d": "Concepts qui expriment ce qui est commun à toutes les choses d'une classe."
      },
      {
       "rel": "en morale",
       "t": "Intellectualisme moral",
       "d": "Seul celui qui connaît le bien agit bien ; le mal se commet par ignorance."
      },
      {
       "rel": "avec la méthode",
       "t": "Ironie et maïeutique",
       "k": true,
       "d": "Découvrir sa propre ignorance (aporie) et aider à « accoucher » la vérité."
      }
     ]
    },
    {
     "rel": "exception dans la polis patriarcale",
     "t": "Aspasie de Milet",
     "d": "Oratrice et maîtresse de rhétorique à une époque où la citoyenneté était réservée aux hommes libres.",
     "c": [
      {
       "rel": "Socrate l'appelle",
       "t": "« Ma maîtresse »",
       "d": "C'est ainsi qu'il la nomme dans le Ménexène de Platon."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Définitions universelles",
     "rel": "réfutent le",
     "a": "Relativisme"
    },
    {
     "de": "Ironie et maïeutique",
     "rel": "dialogue qui cherche la vérité, non la",
     "a": "Persuasion"
    },
    {
     "de": "Aspasie de Milet",
     "rel": "enseigne la rhétorique à",
     "a": "Socrate"
    }
   ],
   "idea": "Les sophistes font des lois et des valeurs une convention (nomos) et de la vérité quelque chose de relatif ; Socrate cherche, en dialoguant, des définitions universelles valables pour tous."
  }
 },
 "ds-A6": {
  "subject": "hf",
  "block": "A",
  "tema": "Platon et Aristote",
  "title": "Platon et Aristote",
  "mermaid": "flowchart TD\n  center[\"PLATON ET ARISTOTE\"]:::axis\n  pla[\"PLATON\"]:::key\n  ari[\"ARISTOTE\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"critique\"| pla\n  pla --> p1[\"dualisme : monde des Idées<br>vs monde physique\"]\n  pla --> p2[\"anamnèse (réminiscence)\"]\n  pla --> p3[\"épistémè (savoir) vs doxa (opinion)\"]\n  ari --> a1[\"hylémorphisme : matière + forme\"]\n  ari --> a2[\"théorie des quatre causes\"]\n  ari --> a3[\"de la puissance à l'acte\"]\n  a1 -->|\"face au dualisme\"| p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Où se trouve ce qui est vraiment réel et comment le connaissons-nous ?",
   "raiz": "PLATON ET ARISTOTE : LA RÉALITÉ",
   "raiz_d": "Deux réponses au problème hérité d'Héraclite et de Parménide : comment penser à la fois ce qui change et ce qui demeure.",
   "ramas": [
    {
     "rel": "sépare deux mondes",
     "t": "Platon : dualisme ontologique",
     "k": true,
     "a": "Platon",
     "c": [
      {
       "rel": "le réel, ce sont",
       "t": "Les Idées",
       "k": true,
       "d": "Modèles éternels, immuables et universels. Au sommet, l'Idée du Bien."
      },
      {
       "rel": "ses copies sont",
       "t": "Les choses sensibles",
       "d": "Changeantes et multiples ; elles participent des Idées et les imitent."
      },
      {
       "rel": "se connaît par",
       "t": "Réminiscence",
       "d": "Connaître, c'est se souvenir de ce que l'âme a contemplé avant de s'incarner."
      },
      {
       "rel": "on s'élève",
       "t": "De la doxa à l'épistémè",
       "d": "De l'opinion sur le sensible à la science de l'intelligible (dialectique).",
       "c": [
        {
         "rel": "la raconte l'",
         "t": "Allégorie de la caverne",
         "d": "La République VII : monter des ombres jusqu'au Soleil, l'Idée du Bien."
        }
       ]
      }
     ]
    },
    {
     "rel": "unit matière et forme",
     "t": "Aristote : hylémorphisme",
     "k": true,
     "a": "Aristote",
     "c": [
      {
       "rel": "le réel est",
       "t": "La substance concrète",
       "k": true,
       "d": "Chaque chose individuelle, composée de matière et de forme."
      },
      {
       "rel": "la forme est",
       "t": "Dans les choses mêmes",
       "d": "Non dans un monde à part : c'est la structure de la chose elle-même."
      },
      {
       "rel": "le changement est",
       "t": "Passage de la puissance à l'acte",
       "d": "Réel et explicable par ses causes (voir « Les causes du changement »)."
      },
      {
       "rel": "se connaît par",
       "t": "Abstraction",
       "d": "L'entendement extrait la forme à partir de ce que donnent les sens."
      }
     ]
    },
    {
     "rel": "Aristote objecte",
     "t": "Critique des Idées",
     "d": "Séparer les formes des choses double la réalité sans l'expliquer.",
     "c": [
      {
       "rel": "par exemple",
       "t": "Le troisième homme",
       "d": "Si la chose et l'Idée se ressemblent, il faudrait une autre Idée pour l'expliquer, et ainsi à l'infini."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Abstraction",
     "rel": "face à la",
     "a": "Réminiscence"
    },
    {
     "de": "Dans les choses mêmes",
     "rel": "non dans un monde à part comme",
     "a": "Les Idées"
    },
    {
     "de": "Critique des Idées",
     "rel": "rejette la séparation de",
     "a": "Les Idées"
    }
   ],
   "idea": "Platon place le réel dans un monde d'Idées séparé, et connaître, c'est se souvenir ; Aristote le place dans les substances concrètes, composées de matière et de forme, et connaître, c'est abstraire à partir des sens."
  }
 },
 "ds-A7": {
  "subject": "hf",
  "block": "A",
  "tema": "Anthropologie classique",
  "title": "Anthropologie classique : la psyché",
  "mermaid": "flowchart TD\n  center[\"ANTHROPOLOGIE CLASSIQUE :<br>qu'est-ce que la psyché (l'âme) ?\"]:::axis\n  soc[\"SOCRATE\"]:::key\n  pla[\"PLATON\"]:::key\n  ari[\"ARISTOTE\"]:::key\n  center --> soc\n  soc -->|\"développé par\"| pla\n  pla -->|\"corrigé par\"| ari\n  soc --> s1[\"« connais-toi toi-même »\"]\n  soc --> s2[\"l'âme est ce qu'il y a de plus précieux\"]\n  soc --> s3[\"connaissance = vertu\"]\n  pla --> p1[\"âme immortelle, trois parties\"]\n  pla --> p2[\"le corps est sa prison\"]\n  pla --> p3[\"dualisme anthropologique\"]\n  ari --> a1[\"l'âme est forme : elle n'existe pas sans corps\"]\n  ari --> a2[\"trois âmes : végétative,<br>sensitive, rationnelle\"]\n  ari --> a3[\"unité substantielle (corps + âme)\"]\n  p3 -->|\"rejeté par\"| a3\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce que l'âme (psyché) et quelle relation a-t-elle avec le corps ?",
   "raiz": "LA PSYCHÉ DANS LA GRÈCE CLASSIQUE",
   "raiz_d": "Avec le tournant anthropologique, la question devient « qui suis-je et comment dois-je vivre ? ».",
   "ramas": [
    {
     "rel": "il faut prendre soin de l'âme",
     "t": "Socrate",
     "a": "Socrate",
     "d": "La vraie liberté, c'est se connaître et se gouverner soi-même.",
     "c": [
      {
       "rel": "sa devise",
       "t": "« Connais-toi toi-même »",
       "d": "Du temple de Delphes : vivre sans s'examiner, c'est vivre endormi."
      }
     ]
    },
    {
     "rel": "sépare âme et corps",
     "t": "Platon : dualisme anthropologique",
     "k": true,
     "a": "Platon",
     "c": [
      {
       "rel": "l'âme est",
       "t": "Immortelle et préexistante",
       "d": "Elle a contemplé les Idées avant de naître et transmigre (métempsycose), héritage pythagoricien."
      },
      {
       "rel": "le corps est",
       "t": "Prison de l'âme",
       "k": true,
       "d": "Il la distrait par des désirs et des craintes et l'empêche d'atteindre la vérité."
      },
      {
       "rel": "se divise en",
       "t": "Trois parties de l'âme",
       "d": "Rationnelle (le cocher), irascible et concupiscible : le mythe de l'attelage ailé."
      }
     ]
    },
    {
     "rel": "unit âme et corps",
     "t": "Aristote : hylémorphisme",
     "k": true,
     "a": "Aristote",
     "c": [
      {
       "rel": "l'âme est",
       "t": "Forme du corps vivant",
       "k": true,
       "d": "Elle n'existe pas sans lui, comme la figure de la statue n'existe pas sans le bronze."
      },
      {
       "rel": "l'être humain est",
       "t": "Une seule substance",
       "d": "Matière (le corps) et forme (l'âme) unies."
      },
      {
       "rel": "l'âme a",
       "t": "Trois fonctions",
       "d": "Végétative (tout être vivant), sensitive (animaux) et rationnelle (seulement l'être humain)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Socrate",
     "rel": "son soin de l'âme inspire l'",
     "a": "Platon : dualisme anthropologique"
    },
    {
     "de": "Forme du corps vivant",
     "rel": "rejette l'idée de",
     "a": "Prison de l'âme"
    }
   ],
   "idea": "Pour Platon, nous sommes une âme immortelle prisonnière d'un corps ; pour Aristote, une seule substance dans laquelle l'âme est la forme du corps et n'existe pas sans lui."
  }
 },
 "ds-A8": {
  "subject": "hf",
  "block": "A",
  "tema": "Éthique classique",
  "title": "Le débat éthique",
  "mermaid": "flowchart TD\n  center[\"LE DÉBAT ÉTHIQUE CLASSIQUE\"]:::axis\n  sp[\"SOCRATE ET PLATON :<br>intellectualisme moral\"]:::key\n  ari[\"ARISTOTE :<br>éthique de la vertu\"]:::key\n  center --> sp\n  center --> ari\n  ari -->|\"prend ses distances avec\"| sp\n  sp --> s1[\"connaître le bien → agir bien\"]\n  sp --> s2[\"nul n'agit mal à dessein<br>(seulement par ignorance)\"]\n  ari --> a1[\"la vertu se cultive par l'habitude\"]\n  ari --> a2[\"juste milieu entre deux extrêmes\"]\n  ari --> a3[\"eudaimonia : le bonheur comme fin\"]\n  s1 -->|\"savoir ne suffit pas :<br>il faut s'habituer\"| a1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce que la vertu et comment atteint-on le bonheur ?",
   "raiz": "L'ÉTHIQUE CLASSIQUE",
   "raiz_d": "Aretè (vertu) et eudaimonia (bonheur) : l'intellectualisme les unit dans le savoir ; Aristote, dans l'habitude.",
   "ramas": [
    {
     "rel": "la vertu est savoir",
     "t": "Socrate : intellectualisme moral",
     "k": true,
     "a": "Socrate",
     "c": [
      {
       "rel": "c'est pourquoi",
       "t": "« Nul ne fait le mal volontairement »",
       "d": "Celui qui agit mal le fait par ignorance."
      },
      {
       "rel": "unit",
       "t": "Science, vertu et bonheur",
       "d": "Celui qui connaît le bien le pratique et est heureux."
      }
     ]
    },
    {
     "rel": "nuance l'intellectualisme",
     "t": "Platon : vertu et purification",
     "a": "Platon",
     "d": "L'âme se libère du corps pour contempler l'Idée du Bien ; la vertu suprême est la sagesse.",
     "c": [
      {
       "rel": "une vertu pour chaque partie",
       "t": "Prudence, courage, tempérance",
       "d": "De la partie rationnelle, irascible et concupiscible de l'âme."
      },
      {
       "rel": "son harmonie est",
       "t": "La justice",
       "d": "Chaque partie remplit sa fonction sous le gouvernement de la raison."
      }
     ]
    },
    {
     "rel": "la vertu est habitude",
     "t": "Aristote : éthique de la vertu",
     "k": true,
     "a": "Aristote",
     "c": [
      {
       "rel": "fin dernière",
       "t": "Eudaimonia",
       "k": true,
       "d": "Vie pleine : activité de l'âme conforme à la vertu tout au long d'une vie entière."
      },
      {
       "rel": "distingue",
       "t": "Vertus dianoétiques et éthiques",
       "d": "Celles de l'entendement s'apprennent ; celles du caractère s'acquièrent en répétant des actes."
      },
      {
       "rel": "la vertu éthique est",
       "t": "Juste milieu",
       "k": true,
       "d": "Entre deux vices : le courage, entre lâcheté et témérité. C'est la prudence qui le fixe."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Aristote : éthique de la vertu",
     "rel": "savoir ne suffit pas, il faut s'habituer :",
     "a": "Socrate : intellectualisme moral"
    },
    {
     "de": "Juste milieu",
     "rel": "c'est la prudence qui le fixe, non une Idée :",
     "a": "Platon : vertu et purification"
    }
   ],
   "idea": "Pour Socrate et Platon, il suffit de connaître le bien pour le faire ; Aristote répond que la vertu éthique est une habitude, le juste milieu que fixe la prudence, et que le bonheur est une vie entière conforme à la vertu."
  }
 },
 "ds-A9": {
  "subject": "hf",
  "block": "A",
  "tema": "Politique classique",
  "title": "Le débat politique",
  "mermaid": "flowchart TD\n  center[\"LE DÉBAT POLITIQUE CLASSIQUE\"]:::axis\n  pla[\"PLATON :<br>la cité idéale (utopie)\"]:::key\n  ari[\"ARISTOTE :<br>politique réaliste\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"plus pragmatique que\"| pla\n  pla --> p1[\"trois classes sociales\"]\n  pla --> p2[\"gouvernement des rois-philosophes\"]\n  pla --> p3[\"critique de la démocratie\"]\n  ari --> a0[\"l'être humain est zoon politikon<br>(animal politique)\"]\n  ari --> rectos[\"Gouvernements droits :<br>monarchie · aristocratie · république\"]\n  ari --> desv[\"Gouvernements déviés :<br>tyrannie · oligarchie · démagogie\"]\n  rectos -->|\"se corrompent en\"| desv\n  ari -->|\"la meilleure forme\"| a4[\"la république\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Quel est le meilleur ordre politique et qui doit gouverner ?",
   "raiz": "LA POLITIQUE CLASSIQUE",
   "raiz_d": "Après la condamnation de Socrate (399 av. J.-C.) : si la démocratie a pu tuer le plus juste, quel est le meilleur ordre social ?",
   "ramas": [
    {
     "rel": "dessine la cité idéale",
     "t": "Platon : La République",
     "k": true,
     "a": "Platon",
     "d": "Une utopie : la cité est l'âme écrite en grand.",
     "c": [
      {
       "rel": "se divise en",
       "t": "Trois classes sociales",
       "d": "Producteurs (tempérance), gardiens (courage) et gouvernants-philosophes (prudence)."
      },
      {
       "rel": "la justice est",
       "t": "Chaque classe dans sa fonction",
       "d": "Sans empiéter sur la fonction des autres."
      },
      {
       "rel": "doit gouverner",
       "t": "Le roi-philosophe",
       "k": true,
       "d": "Seul celui qui connaît l'Idée du Bien. C'est pourquoi il critique la démocratie de son époque."
      },
      {
       "rel": "si elle se corrompt",
       "t": "Cycle de dégénérescence",
       "d": "Timocratie, oligarchie, démocratie et, la pire de toutes, tyrannie."
      }
     ]
    },
    {
     "rel": "étudie la polis réelle",
     "t": "Aristote : la Politique",
     "k": true,
     "a": "Aristote",
     "c": [
      {
       "rel": "part du fait que",
       "t": "Zoon politikon",
       "k": true,
       "d": "L'être humain est un animal politique : il ne vit pleinement qu'en communauté."
      },
      {
       "rel": "s'organise en",
       "t": "Famille, village et polis",
       "d": "La polis est la communauté parfaite : elle cherche non seulement à vivre, mais à bien vivre."
      },
      {
       "rel": "classe",
       "t": "Régimes justes et dégénérés",
       "d": "Selon qui gouverne (un seul, quelques-uns, le grand nombre) et pour qui.",
       "c": [
        {
         "rel": "cherchent le bien commun",
         "t": "Monarchie, aristocratie, république"
        },
        {
         "rel": "cherchent l'intérêt propre",
         "t": "Tyrannie, oligarchie, démagogie"
        }
       ]
      },
      {
       "rel": "préfère",
       "t": "Le régime qui évite les extrêmes",
       "d": "Adapté à chaque peuple et appuyé sur la classe moyenne : la politique aussi est un juste milieu."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Le régime qui évite les extrêmes",
     "rel": "face au gouvernement du sage :",
     "a": "Le roi-philosophe"
    },
    {
     "de": "Tyrannie, oligarchie, démagogie",
     "rel": "sont aussi des corruptions, comme la",
     "a": "Cycle de dégénérescence"
    }
   ],
   "idea": "Platon dessine la cité juste idéale, gouvernée par celui qui connaît le Bien ; Aristote part de la polis réelle et de l'être humain comme animal politique, et préfère le régime qui cherche le bien commun en évitant les extrêmes."
  }
 },
 "ds-A10": {
  "subject": "hf",
  "block": "A",
  "tema": "Hellénisme",
  "title": "Les écoles hellénistiques",
  "mermaid": "flowchart TD\n  center[\"ÉCOLES HELLÉNISTIQUES\"]:::axis\n  meta[\"But commun : le bonheur<br>comme sérénité (ataraxie)\"]:::key\n  center -->|\"toutes cherchent\"| meta\n  epi[\"ÉPICURISME\"]:::key\n  est[\"STOÏCISME\"]:::key\n  cin[\"CYNISME\"]:::key\n  esc[\"SCEPTICISME\"]:::key\n  meta --> epi\n  meta --> est\n  meta --> cin\n  meta --> esc\n  epi -->|\"voie\"| e1[\"plaisir modéré,<br>éviter la douleur\"]\n  est -->|\"voie\"| s1[\"accepter le destin<br>(apathie)\"]\n  cin -->|\"voie\"| c1[\"vivre selon la nature<br>(autarcie)\"]\n  esc -->|\"voie\"| x1[\"suspendre son jugement<br>(épochè)\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment être heureux quand la polis disparaît et que le monde devient incertain ?",
   "raiz": "LES ÉCOLES HELLÉNISTIQUES",
   "raiz_d": "Après Alexandre le Grand, la polis cède la place à de grands royaumes : la philosophie se tourne vers l'individu et son bonheur intérieur.",
   "ramas": [
    {
     "rel": "renoncer à l'artificiel",
     "t": "Cynisme",
     "a": "Antisthène, Diogène de Sinope",
     "c": [
      {
       "rel": "son idéal",
       "t": "Autarcie",
       "k": true,
       "d": "Autosuffisance : ne dépendre de rien ni de personne."
      },
      {
       "rel": "son chemin",
       "t": "Vivre conformément à la nature",
       "d": "Rejeter conventions, richesse, pouvoir et gloire : ce sont des besoins artificiels."
      }
     ]
    },
    {
     "rel": "accepter l'ordre du monde",
     "t": "Stoïcisme",
     "a": "Zénon de Kition",
     "c": [
      {
       "rel": "son idéal",
       "t": "Apathie et ataraxie",
       "k": true,
       "d": "Sans passions qui troublent l'âme ; paix intérieure."
      },
      {
       "rel": "son chemin",
       "t": "Accepter le logos et le destin",
       "d": "Seul compte ce qui dépend de nous : nos jugements et nos attitudes."
      },
      {
       "rel": "d'où",
       "t": "Cosmopolitisme",
       "d": "Nous sommes tous citoyens du même monde."
      }
     ]
    },
    {
     "rel": "chercher le plaisir serein",
     "t": "Épicurisme",
     "a": "Épicure",
     "c": [
      {
       "rel": "son idéal",
       "t": "Le plaisir comme absence de douleur",
       "k": true,
       "d": "Sans douleur dans le corps (aponie) ni trouble dans l'âme (ataraxie) ; pas d'excès."
      },
      {
       "rel": "son chemin",
       "t": "Le tétrapharmakon",
       "d": "Ne craindre ni les dieux ni la mort ; le bien est facile à atteindre et le mal, à supporter."
      }
     ]
    },
    {
     "rel": "renoncer à la certitude",
     "t": "Scepticisme",
     "a": "Pyrrhon d'Élis",
     "c": [
      {
       "rel": "part du fait que",
       "t": "Il n'y a pas de connaissance sûre",
       "d": "À chaque affirmation s'oppose une autre, avec des raisons tout aussi valables."
      },
      {
       "rel": "son chemin",
       "t": "Épochè",
       "k": true,
       "d": "Suspendre son jugement, ne rien affirmer ni nier : de là naît l'ataraxie."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Le plaisir comme absence de douleur",
     "rel": "partage l'ataraxie avec",
     "a": "Apathie et ataraxie"
    },
    {
     "de": "Épochè",
     "rel": "débouche aussi sur l'",
     "a": "Apathie et ataraxie"
    }
   ],
   "idea": "Sans polis qui donne du sens, les quatre écoles cherchent le bonheur de l'individu : l'autarcie cynique, l'apathie stoïcienne, le plaisir serein d'Épicure et la suspension du jugement sceptique."
  }
 },
 "ds-B1": {
  "subject": "hf",
  "block": "B",
  "tema": "Philosophie médiévale",
  "title": "La philosophie médiévale",
  "mermaid": "flowchart TD\n  center[\"LA PHILOSOPHIE MÉDIÉVALE\"]:::axis\n  hilo[\"Thème central :<br>la raison peut-elle démontrer Dieu ?\"]:::key\n  et[\"Quatre étapes\"]:::key\n  center -->|\"tourne autour de\"| hilo\n  center --> et\n  et --> e1[\"Patristique → Augustin\"]\n  e1 --> e2[\"Scolastique précoce → Anselme\"]\n  e2 --> e3[\"Scolastique tardive → Thomas d'Aquin\"]\n  e3 --> e4[\"Nominalisme → Ockham\"]\n  e1 -->|\"preuve\"| p1[\"la vérité intérieure (Augustin)\"]\n  e3 -->|\"preuve\"| p2[\"les cinq voies (Thomas)\"]\n  e4 -->|\"met en doute\"| p3[\"les preuves rationnelles (Ockham)\"]\n  p3 -->|\"finit par séparer\"| sep[\"foi et raison\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment la philosophie médiévale s'est-elle organisée et quels grands problèmes a-t-elle discutés ?",
   "raiz": "LA PHILOSOPHIE MÉDIÉVALE",
   "raiz_d": "Elle naît avec le christianisme et tourne autour d'un problème nouveau : la relation entre foi et raison.",
   "ramas": [
    {
     "rel": "première étape",
     "t": "Patristique",
     "k": true,
     "a": "Augustin d'Hippone",
     "d": "IIe-VIIIe siècles : les Pères de l'Église.",
     "c": [
      {
       "rel": "tâche",
       "t": "Défendre le dogme chrétien",
       "d": "Face aux hérésies, en s'appuyant sur la philosophie grecque."
      },
      {
       "rel": "s'inspire du",
       "t": "Le néoplatonisme",
       "a": "Plotin",
       "d": "Réinterprétation de Platon qui unit philosophie et expérience religieuse."
      }
     ]
    },
    {
     "rel": "deuxième étape",
     "t": "Scolastique",
     "k": true,
     "a": "Anselme, Thomas d'Aquin",
     "d": "IXe-XIVe siècles : philosophie des universités.",
     "c": [
      {
       "rel": "cherche",
       "t": "Une synthèse entre foi et raison",
       "d": "Systématique ; la raison s'exerce, mais subordonnée à la foi."
      },
      {
       "rel": "avec une méthode",
       "t": "Lectio, quaestio, disputatio",
       "d": "Lire et commenter les autorités, poser la question avec des arguments pour et contre, et la débattre."
      }
     ]
    },
    {
     "rel": "grand débat",
     "t": "Le problème des universaux",
     "k": true,
     "d": "Que sont les concepts généraux, comme « humanité » ou « blancheur » ?",
     "c": [
      {
       "rel": "existent réellement",
       "t": "Réalisme",
       "a": "Platon, Augustin",
       "d": "Dans les Idées ou dans l'esprit de Dieu."
      },
      {
       "rel": "existent dans l'esprit",
       "t": "Conceptualisme",
       "a": "Abélard",
       "d": "Ce sont des concepts que l'esprit forme."
      },
      {
       "rel": "ne sont que des noms",
       "t": "Nominalisme",
       "a": "Ockham",
       "d": "Seuls les individus existent."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Patristique",
     "rel": "défend le",
     "a": "Réalisme"
    },
    {
     "de": "Nominalisme",
     "rel": "met en crise la",
     "a": "Une synthèse entre foi et raison"
    }
   ],
   "idea": "Deux étapes, patristique et scolastique, avec un même problème de fond (foi et raison) ; le nominalisme d'Ockham, en ne laissant que des individus, rompt la synthèse et annonce la modernité."
  }
 },
 "ds-B2": {
  "subject": "hf",
  "block": "B",
  "tema": "Foi et raison",
  "title": "Foi et raison",
  "mermaid": "flowchart TD\n  center[\"FOI ET RAISON\"]:::axis\n  q[\"Foi et raison peuvent-elles<br>aller ensemble vers la vérité ?\"]\n  center --> q\n  agus[\"AUGUSTIN\"]:::key\n  tom[\"THOMAS D'AQUIN\"]:::key\n  ter[\"TERTULLIEN\"]:::key\n  q -->|\"union\"| agus\n  q -->|\"harmonie\"| tom\n  q -->|\"opposition\"| ter\n  agus -->|\"devise\"| a1[\"« Crois pour comprendre,<br>comprends pour croire »\"]\n  agus --> a2[\"foi et raison ont besoin l'une de l'autre\"]\n  tom --> t1[\"deux domaines :<br>théologie et philosophie\"]\n  tom -->|\"ne se contredisent pas\"| t2[\"la raison prépare la foi<br>(préambules)\"]\n  ter -->|\"« Je crois parce que c'est absurde »\"| te1[\"la foi suffit,<br>la raison est superflue\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "La raison peut-elle atteindre les vérités de la foi, ou suivent-elles des chemins différents ?",
   "raiz": "FOI ET RAISON",
   "raiz_d": "De l'opposition à la séparation : cinq réponses médiévales, y compris sur la possibilité de démontrer que Dieu existe.",
   "ramas": [
    {
     "rel": "opposition",
     "t": "Tertullien",
     "d": "« Je crois parce que c'est absurde » : la foi n'a pas besoin de la raison."
    },
    {
     "rel": "la foi guide",
     "t": "Augustin",
     "k": true,
     "d": "« Crois pour comprendre » : la foi guide et la raison comprend.",
     "c": [
      {
       "rel": "cherche Dieu dans",
       "t": "L'intériorité",
       "d": "« C'est à l'intérieur de l'homme qu'habite la vérité » : l'âme s'élève jusqu'à Dieu."
      },
      {
       "rel": "connaît par",
       "t": "Illumination",
       "d": "Dieu illumine l'âme pour qu'elle connaisse les vérités éternelles."
      }
     ]
    },
    {
     "rel": "deux vérités",
     "t": "Averroès",
     "d": "Double vérité : l'une pour la foi et l'autre pour la raison."
    },
    {
     "rel": "collaboration",
     "t": "Thomas d'Aquin",
     "k": true,
     "d": "La raison prépare et défend la foi ; elles ne peuvent pas se contredire.",
     "c": [
      {
       "rel": "distingue",
       "t": "Vérités naturelles et surnaturelles",
       "d": "Les unes sont à la portée de la raison ; les autres ne se connaissent que par révélation."
      },
      {
       "rel": "démontre Dieu avec",
       "t": "Les cinq voies",
       "d": "Preuves a posteriori : elles partent du mouvement, des causes, de la contingence, des degrés et de l'ordre."
      }
     ]
    },
    {
     "rel": "séparation",
     "t": "Ockham",
     "k": true,
     "d": "La raison ne peut pas démontrer les vérités de la foi.",
     "c": [
      {
       "rel": "avec son rasoir",
       "t": "Ne pas multiplier les entités",
       "d": "Il élimine tout ce qui n'est pas strictement nécessaire."
      },
      {
       "rel": "résultat",
       "t": "La théologie cesse d'être une science",
       "d": "Foi et raison suivent des chemins différents : la modernité se fraie un passage."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Les cinq voies",
     "rel": "partent du monde, non de",
     "a": "L'intériorité"
    },
    {
     "de": "La théologie cesse d'être une science",
     "rel": "rompt la synthèse de",
     "a": "Thomas d'Aquin"
    }
   ],
   "idea": "Augustin cherche Dieu à l'intérieur et Thomas le démontre à partir du monde ; tous deux croient que foi et raison collaborent. Ockham les sépare : la raison n'atteint pas les vérités de la foi."
  }
 },
 "ds-B3": {
  "subject": "hf",
  "block": "B",
  "tema": "Renaissance",
  "title": "La Renaissance",
  "mermaid": "flowchart TD\n  center[\"LA RENAISSANCE\"]:::axis\n  soc[\"Changements sociaux\"]:::key\n  ant[\"Anthropocentrisme\"]:::key\n  cie[\"Révolution scientifique\"]:::key\n  center --> soc\n  soc -->|\"rendent possible\"| ant\n  ant -->|\"débouche sur\"| cie\n  soc --> s1[\"crise de la féodalité\"]\n  soc --> s2[\"essor de la bourgeoisie\"]\n  soc --> s3[\"l'imprimerie (Gutenberg)\"]\n  ant --> a1[\"l'être humain au centre\"]\n  ant --> a2[\"humanisme\"]\n  cie --> c1[\"héliocentrisme<br>(Copernic, Galilée)\"]\n  cie --> c2[\"méthode empirique\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment l'Europe passe-t-elle d'un monde centré sur Dieu à un monde centré sur l'être humain ?",
   "raiz": "LA RENAISSANCE",
   "raiz_d": "XIVe-XVIe siècles : du théocentrisme médiéval à l'anthropocentrisme ; racines de la modernité.",
   "ramas": [
    {
     "rel": "base matérielle",
     "t": "Changements sociaux",
     "d": "L'ordre féodal et agraire s'effondre.",
     "c": [
      {
       "rel": "en politique",
       "t": "Monarchies et États-nations",
       "d": "Ils remplacent la féodalité."
      },
      {
       "rel": "en économie",
       "t": "Commerce, banque, bourgeoisie",
       "d": "Premiers pas du capitalisme."
      },
      {
       "rel": "dans la culture",
       "t": "L'imprimerie",
       "a": "Gutenberg",
       "d": "Elle révolutionne la diffusion de la connaissance."
      }
     ]
    },
    {
     "rel": "nouveau regard",
     "t": "Humanisme",
     "k": true,
     "d": "On redécouvre les textes grecs et latins.",
     "c": [
      {
       "rel": "met au centre",
       "t": "Anthropocentrisme",
       "d": "L'être humain, et non Dieu, est le centre de la réflexion."
      },
      {
       "rel": "valorise",
       "t": "Dignitas hominis",
       "d": "La dignité et le potentiel de chaque individu."
      }
     ]
    },
    {
     "rel": "rupture religieuse",
     "t": "Réforme protestante",
     "a": "Luther (1517)",
     "d": "Elle remet en question l'autorité de l'Église.",
     "c": [
      {
       "rel": "défend",
       "t": "Libre interprétation de la Bible",
       "d": "Relation directe du croyant avec Dieu."
      },
      {
       "rel": "favorise",
       "t": "Sécularisation",
       "d": "La culture s'affranchit peu à peu de la religion."
      }
     ]
    },
    {
     "rel": "nouvelle science",
     "t": "Révolution scientifique",
     "k": true,
     "a": "Copernic, Kepler, Galilée, Newton",
     "d": "XVIe-XVIIe siècles.",
     "c": [
      {
       "rel": "cosmos",
       "t": "Héliocentrisme",
       "d": "Le Soleil au centre ; la Terre tourne autour de lui."
      },
      {
       "rel": "méthode",
       "t": "Observation et expérimentation",
       "d": "Elles remplacent l'autorité d'Aristote et de la Bible."
      },
      {
       "rel": "nature",
       "t": "Mécanisme",
       "d": "Une machine régie par des lois mathématiques, non un organisme avec des fins."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "L'imprimerie",
     "rel": "rend possible la",
     "a": "Libre interprétation de la Bible"
    },
    {
     "de": "Anthropocentrisme",
     "rel": "donne confiance pour la",
     "a": "Observation et expérimentation"
    }
   ],
   "idea": "Humanisme, Réforme et nouvelle science poussent dans la même direction : moins d'autorité (de l'Église, d'Aristote) et plus de confiance dans l'individu et sa raison."
  }
 },
 "ds-B4": {
  "subject": "hf",
  "block": "B",
  "tema": "Rationalisme et empirisme",
  "title": "Rationalisme et empirisme",
  "mermaid": "flowchart TD\n  center[\"RATIONALISME ET EMPIRISME\"]:::axis\n  rac[\"RATIONALISME<br>(Descartes)\"]:::key\n  emp[\"EMPIRISME<br>(Hume)\"]:::key\n  center --> rac\n  center --> emp\n  rac -->|\"raison ou expérience ?\"| emp\n  rac --> r1[\"la source est la raison\"]\n  rac --> r2[\"il y a des idées innées (a priori)\"]\n  rac --> r3[\"méthode mathématico-déductive\"]\n  rac --> r4[\"« cogito ergo sum »\"]\n  emp --> e1[\"la source est l'expérience\"]\n  emp --> e2[\"l'esprit est une tabula rasa\"]\n  emp --> e3[\"connaissance seulement probable\"]\n  emp --> e4[\"critique de la causalité\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "En quoi exactement Descartes et Hume s'opposent-ils quand ils expliquent la connaissance ?",
   "raiz": "DESCARTES FACE À HUME",
   "raiz_d": "XVIIe-XVIIIe siècles : l'épistémologie passe au centre. Rationalisme et empirisme, point par point.",
   "ramas": [
    {
     "rel": "première différence",
     "t": "Origine de la connaissance",
     "k": true,
     "c": [
      {
       "rel": "selon Descartes",
       "t": "La raison et ses idées innées",
       "d": "Dieu, les vérités mathématiques : l'esprit les possède dès la naissance."
      },
      {
       "rel": "selon Hume",
       "t": "L'expérience : les impressions",
       "d": "Il n'y a pas d'idées innées ; toute idée copie une impression."
      }
     ]
    },
    {
     "rel": "deuxième différence",
     "t": "Modèle et méthode",
     "c": [
      {
       "rel": "selon Descartes",
       "t": "Mathématiques et déduction",
       "d": "Du clair et distinct se déduisent les autres vérités."
      },
      {
       "rel": "selon Hume",
       "t": "Observation et induction",
       "d": "On généralise à partir de cas observés."
      }
     ]
    },
    {
     "rel": "troisième différence",
     "t": "La causalité",
     "k": true,
     "c": [
      {
       "rel": "selon Descartes",
       "t": "Évident pour la raison",
       "d": "La cause a au moins autant de réalité que son effet : avec ce principe, il prouve que Dieu existe."
      },
      {
       "rel": "selon Hume",
       "t": "Habitude, non nécessité",
       "d": "Nous voyons seulement qu'un fait en suit un autre ; la connexion, c'est l'habitude qui la pose."
      }
     ]
    },
    {
     "rel": "quatrième différence",
     "t": "Le moi",
     "c": [
      {
       "rel": "selon Descartes",
       "t": "Une chose qui pense",
       "d": "« Je pense, donc je suis » : le moi est substance pensante, la première certitude."
      },
      {
       "rel": "selon Hume",
       "t": "Un faisceau de perceptions",
       "d": "Il n'y a pas d'impression d'un moi permanent."
      }
     ]
    },
    {
     "rel": "résultat",
     "t": "Portée de la connaissance",
     "k": true,
     "c": [
      {
       "rel": "selon Descartes",
       "t": "Certitude et métaphysique",
       "d": "La métaphysique est la racine de l'arbre du savoir."
      },
      {
       "rel": "selon Hume",
       "t": "Probabilité et scepticisme",
       "d": "La métaphysique est limitée par l'expérience."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La raison et ses idées innées",
     "rel": "permet la",
     "a": "Mathématiques et déduction"
    },
    {
     "de": "Habitude, non nécessité",
     "rel": "conduit au",
     "a": "Probabilité et scepticisme"
    },
    {
     "de": "Évident pour la raison",
     "rel": "soutient la",
     "a": "Certitude et métaphysique"
    }
   ],
   "idea": "Descartes cherche dans la raison une certitude absolue qui fonde la métaphysique ; Hume, partant des impressions, conclut que sur les faits on ne peut avoir qu'un savoir probable."
  }
 },
 "ds-B5": {
  "subject": "hf",
  "block": "B",
  "tema": "Substance (modernes)",
  "title": "Le débat moderne sur la substance",
  "mermaid": "flowchart TD\n  center[\"LE DÉBAT MODERNE<br>SUR LA SUBSTANCE\"]:::axis\n  des[\"DESCARTES :<br>dualisme (trois substances)\"]:::key\n  spi[\"SPINOZA :<br>panthéisme\"]:::key\n  lei[\"LEIBNIZ :<br>monadologie\"]:::key\n  center --> des\n  des --> d1[\"âme et corps séparés\"]\n  des --> d2[\"interaction dans la glande pinéale\"]\n  des -->|\"problème non résolu\"| pr[\"comment l'âme et le corps<br>sont-ils reliés ?\"]\n  pr -->|\"une seule substance\"| spi\n  pr -->|\"une infinité de monades\"| lei\n  spi --> s1[\"une seule substance :<br>Dieu ou la Nature\"]\n  spi --> s2[\"corps et âme :<br>deux aspects de la même chose\"]\n  lei --> l1[\"monades : substances simples\"]\n  lei --> l2[\"harmonie préétablie\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si l'âme et le corps sont des substances distinctes, comment sont-ils reliés ? Et s'il n'y en a qu'une seule ?",
   "raiz": "LE DÉBAT SUR LA SUBSTANCE",
   "raiz_d": "Substance : ce qui existe par soi-même, sans avoir besoin d'une autre. Combien y en a-t-il et de quel type ?",
   "ramas": [
    {
     "rel": "point de départ",
     "t": "Dualisme",
     "k": true,
     "a": "Descartes",
     "d": "Trois substances : Dieu (infinie), l'âme et le corps.",
     "c": [
      {
       "rel": "l'âme est",
       "t": "Res cogitans",
       "d": "Substance pensante : inétendue, libre et immortelle."
      },
      {
       "rel": "le corps est",
       "t": "Res extensa",
       "d": "Substance matérielle : étendue et mécanique."
      },
      {
       "rel": "laisse ouvert",
       "t": "Le problème de la communication",
       "k": true,
       "d": "Comment agissent-elles l'une sur l'autre ? La glande pinéale ne le résout pas."
      }
     ]
    },
    {
     "rel": "solution 1",
     "t": "Occasionnalisme",
     "a": "Malebranche",
     "d": "Les substances n'agissent pas entre elles : Dieu produit l'effet à chaque occasion."
    },
    {
     "rel": "solution 2",
     "t": "Monisme",
     "k": true,
     "a": "Spinoza",
     "d": "Une seule substance : « Dieu, c'est-à-dire la Nature ».",
     "c": [
      {
       "rel": "pensée et étendue sont",
       "t": "Deux attributs de la même chose",
       "d": "Non deux substances : c'est pourquoi il n'y a pas de problème âme-corps."
      }
     ]
    },
    {
     "rel": "solution 3",
     "t": "Monadologie",
     "a": "Leibniz",
     "d": "Une infinité de monades : substances simples, actives et indivisibles.",
     "c": [
      {
       "rel": "ne s'influencent pas, mais",
       "t": "Harmonie préétablie",
       "d": "Dieu les a synchronisées dès le début, comme deux horloges bien faites."
      }
     ]
    },
    {
     "rel": "alternative",
     "t": "Matérialisme",
     "a": "Hobbes, La Mettrie",
     "d": "Seule la matière existe ; la pensée est mouvement de la matière.",
     "c": [
      {
       "rel": "l'être humain est",
       "t": "Homme-machine",
       "d": "Un automate complexe : l'âme est le résultat des organes, surtout du cerveau."
      },
      {
       "rel": "il s'ensuit",
       "t": "Déterminisme",
       "d": "Tout acte est causé par ce qui précède : la liberté serait une illusion."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Occasionnalisme",
     "rel": "répond à",
     "a": "Le problème de la communication"
    },
    {
     "de": "Deux attributs de la même chose",
     "rel": "dissout",
     "a": "Le problème de la communication"
    },
    {
     "de": "Matérialisme",
     "rel": "nie la",
     "a": "Res cogitans"
    }
   ],
   "idea": "Le dualisme de Descartes laisse un problème (comment l'âme et le corps communiquent-ils ?) ; les rationalistes le résolvent avec Dieu ou avec une substance unique, et le matérialisme l'élimine au prix de la liberté."
  }
 },
 "ds-B6": {
  "subject": "hf",
  "block": "B",
  "tema": "Contrat social",
  "title": "Le contrat social",
  "mermaid": "flowchart TD\n  center[\"LE CONTRAT SOCIAL\"]:::axis\n  idea[\"De l'état de nature à la société<br>par un pacte\"]:::key\n  hob[\"HOBBES\"]:::key\n  loc[\"LOCKE\"]:::key\n  rou[\"ROUSSEAU\"]:::key\n  center -->|\"thèse commune\"| idea\n  idea --> hob\n  idea --> loc\n  idea --> rou\n  hob --> h1[\"« homo homini lupus »\"]\n  hob -->|\"pacte qui donne\"| h2[\"Léviathan :<br>monarchie absolue\"]\n  loc --> l1[\"droits naturels :<br>vie, liberté, propriété\"]\n  loc -->|\"pacte qui donne\"| l2[\"monarchie parlementaire<br>+ séparation des pouvoirs\"]\n  rou --> r1[\"la volonté générale\"]\n  rou -->|\"pacte qui donne\"| r2[\"démocratie d'assemblée\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si la société n'est pas naturelle, pourquoi obéissons-nous au pouvoir et quelles limites a-t-il ?",
   "raiz": "LE CONTRAT SOCIAL",
   "raiz_d": "La modernité rompt avec la sociabilité naturelle d'Aristote : la société est un produit de la volonté humaine, un pacte.",
   "ramas": [
    {
     "rel": "précurseur",
     "t": "Machiavel",
     "d": "Réalisme politique : il sépare la politique de la morale et de la religion.",
     "c": [
      {
       "rel": "le gouvernant recherche",
       "t": "L'ordre et la sécurité",
       "d": "Il peut user de la force et de la ruse si nécessaire."
      }
     ]
    },
    {
     "rel": "pacte par peur",
     "t": "Hobbes",
     "k": true,
     "c": [
      {
       "rel": "état de nature",
       "t": "Guerre de tous contre tous",
       "d": "« L'homme est un loup pour l'homme. »"
      },
      {
       "rel": "le contrat crée",
       "t": "Un souverain absolu : le Léviathan",
       "d": "Tous lui cèdent leur pouvoir en échange de la sécurité."
      }
     ]
    },
    {
     "rel": "pacte pour les droits",
     "t": "Locke",
     "k": true,
     "c": [
      {
       "rel": "état de nature",
       "t": "Droits naturels incertains",
       "d": "Vie, liberté et propriété existent déjà, mais personne ne les garantit."
      },
      {
       "rel": "le contrat crée",
       "t": "Un gouvernement limité",
       "d": "S'il viole les droits, le peuple peut résister et le changer. Base du libéralisme."
      }
     ]
    },
    {
     "rel": "pacte pour la liberté",
     "t": "Rousseau",
     "k": true,
     "c": [
      {
       "rel": "état de nature",
       "t": "L'être humain est bon",
       "d": "C'est la société qui le corrompt."
      },
      {
       "rel": "le contrat crée",
       "t": "La volonté générale",
       "d": "L'intérêt commun, non la somme des intérêts : la souveraineté réside dans le peuple."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Un gouvernement limité",
     "rel": "face au pouvoir de",
     "a": "Un souverain absolu : le Léviathan"
    },
    {
     "de": "L'ordre et la sécurité",
     "rel": "est aussi la fin du",
     "a": "Un souverain absolu : le Léviathan"
    }
   ],
   "idea": "Tous trois partent d'un état de nature et d'un pacte ; ce qui change, c'est la vision de l'être humain, et le pouvoir en dépend : absolu (Hobbes), limité (Locke) ou du peuple (Rousseau)."
  }
 },
 "ds-B7": {
  "subject": "hf",
  "block": "B",
  "tema": "Utilitarisme et libéralisme",
  "title": "Utilitarisme, libéralisme et capitalisme",
  "mermaid": "flowchart TD\n  center[\"UTILITARISME, LIBÉRALISME<br>ET CAPITALISME\"]:::axis\n  uti[\"UTILITARISME<br>(Bentham, Mill)\"]:::key\n  lib[\"LIBÉRALISME\"]:::key\n  cap[\"CAPITALISME<br>(Adam Smith)\"]:::key\n  azu[\"AZURMENDI : critique\"]:::key\n  center --> uti\n  center --> lib\n  center --> cap\n  center --> azu\n  uti --> u1[\"le plus grand bonheur pour<br>le plus grand nombre\"]\n  uti --> u2[\"bilan plaisir vs douleur\"]\n  lib --> l1[\"primauté de l'individu\"]\n  lib --> l2[\"propriété privée\"]\n  lib --> l3[\"État neutre\"]\n  lib -->|\"fonde\"| cap\n  cap --> c1[\"la « main invisible »\"]\n  cap --> c2[\"l'intérêt personnel apporte<br>le bien-être général\"]\n  azu -->|\"répond à\"| c2\n  azu --> az1[\"l'être humain est aussi<br>coopératif par nature\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Quelles idées philosophiques soutiennent le capitalisme et quelle image de l'être humain suppose-t-il ?",
   "raiz": "LES BASES DU CAPITALISME",
   "raiz_d": "Libéralisme et utilitarisme sont ses bases théoriques ; Adam Smith les unit. Azurmendi discute sa vision de l'être humain.",
   "ramas": [
    {
     "rel": "base politique",
     "t": "Libéralisme",
     "k": true,
     "a": "Hobbes, Locke",
     "d": "Primauté de l'individu : la société est secondaire, produit du contrat.",
     "c": [
      {
       "rel": "défend",
       "t": "Droits individuels",
       "d": "Parmi eux, la propriété privée."
      },
      {
       "rel": "exige",
       "t": "État neutre",
       "d": "Il n'impose pas une idée du bien : il garantit la liberté de chacun."
      }
     ]
    },
    {
     "rel": "base morale",
     "t": "Utilitarisme",
     "k": true,
     "a": "Bentham, Mill",
     "d": "Une action est bonne si elle produit du plaisir et évite la douleur : critère d'utilité.",
     "c": [
      {
       "rel": "Bentham",
       "t": "Mesurer les conséquences",
       "d": "Le bonheur se calcule d'après les effets des actions."
      },
      {
       "rel": "Mill",
       "t": "Principe du plus grand bonheur",
       "d": "« Le plus grand bonheur pour le plus grand nombre de personnes » ; les plaisirs psychiques valent davantage."
      }
     ]
    },
    {
     "rel": "synthèse économique",
     "t": "Adam Smith",
     "d": "La Richesse des nations (1776).",
     "c": [
      {
       "rel": "le marché agit comme",
       "t": "Main invisible",
       "k": true,
       "d": "L'intérêt propre conduit, sans le vouloir, au bien-être commun."
      },
      {
       "rel": "c'est pourquoi",
       "t": "L'État ne doit pas intervenir",
       "d": "Son intervention serait un obstacle à la croissance."
      }
     ]
    },
    {
     "rel": "critique",
     "t": "Azurmendi",
     "d": "Le capitalisme suppose un être humain compétitif ; il existe une autre tradition.",
     "c": [
      {
       "rel": "rejette",
       "t": "Le darwinisme social",
       "d": "Justifier la suprématie des uns sur les autres."
      },
      {
       "rel": "défend",
       "t": "La coopération est naturelle",
       "a": "Kropotkine, Wilson",
       "d": "La morale naît du sens de la communauté, non du calcul froid de la raison."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Libéralisme",
     "rel": "s'unit chez Smith à",
     "a": "Utilitarisme"
    },
    {
     "de": "Principe du plus grand bonheur",
     "rel": "serait atteint, selon Smith, par le",
     "a": "Main invisible"
    },
    {
     "de": "La coopération est naturelle",
     "rel": "remet en question l'égoïsme que suppose le",
     "a": "Main invisible"
    }
   ],
   "idea": "Le capitalisme repose sur un individu doté de droits (libéralisme) qui cherche son utilité (utilitarisme) ; Smith compte sur le marché pour harmoniser les égoïsmes. Azurmendi demande si nous sommes vraiment si égoïstes."
  }
 },
 "ds-C1": {
  "subject": "hf",
  "block": "C",
  "tema": "Lumières",
  "title": "Les Lumières : raison et droits",
  "mermaid": "flowchart TD\n  center[\"LES LUMIÈRES :<br>raison et droits\"]:::axis\n  raz[\"Un nouveau modèle de raison\"]:::key\n  der[\"Droits naturels\"]:::key\n  fem[\"Première vague du féminisme\"]:::key\n  center --> raz\n  raz -->|\"conduit à exiger\"| der\n  der -->|\"s'élargit en revendiquant\"| fem\n  raz --> r1[\"raison critique\"]\n  raz --> r2[\"raison autonome (« ose savoir »)\"]\n  der --> d1[\"rejet de l'absolutisme\"]\n  der --> d2[\"séparation des pouvoirs (Montesquieu)\"]\n  der --> d3[\"souveraineté populaire (Rousseau)\"]\n  fem --> f1[\"Mary Wollstonecraft\"]\n  fem --> f2[\"Olympe de Gouges\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Que promet la raison des Lumières, et qui a-t-elle laissé de côté ?",
   "raiz": "LES LUMIÈRES",
   "raiz_d": "XVIIIe siècle : la confiance dans le fait que la raison libère des préjugés et de l'autorité aveugle, et mène au progrès et à la liberté.",
   "ramas": [
    {
     "rel": "point de départ",
     "t": "Un nouveau modèle de raison",
     "k": true,
     "c": [
      {
       "rel": "sa devise",
       "t": "« Sapere aude »",
       "a": "Kant",
       "d": "Ose penser par toi-même : sortir de la minorité."
      },
      {
       "rel": "est",
       "t": "Raison critique",
       "d": "Elle soumet à l'examen la religion, la politique, la science et elle-même."
      },
      {
       "rel": "est",
       "t": "Raison autonome",
       "d": "Elle ne dépend ni de la théologie ni de l'autorité."
      },
      {
       "rel": "a confiance dans le",
       "t": "Progrès",
       "a": "Diderot, D'Alembert",
       "d": "L'Encyclopédie veut ordonner tout le savoir au service de la société."
      }
     ]
    },
    {
     "rel": "conséquence politique",
     "t": "Droits naturels",
     "k": true,
     "d": "Des droits que l'on possède de naissance, antérieurs à l'État : on rompt avec l'absolutisme.",
     "c": [
      {
       "rel": "concrétisés dans",
       "t": "Vie, liberté et propriété",
       "a": "Locke"
      },
      {
       "rel": "exige",
       "t": "Séparation des pouvoirs",
       "a": "Montesquieu"
      },
      {
       "rel": "exige",
       "t": "Souveraineté populaire",
       "a": "Rousseau"
      },
      {
       "rel": "transforme le sujet en",
       "t": "Citoyen",
       "d": "Celui qui participe au pouvoir et le légitime, au lieu d'obéir aveuglément."
      },
      {
       "rel": "deviennent loi dans la",
       "t": "Déclaration de 1789",
       "d": "Déclaration des droits de l'homme et du citoyen."
      }
     ]
    },
    {
     "rel": "sa contradiction",
     "t": "Première vague féministe",
     "k": true,
     "d": "L'égalité est proclamée universelle, mais elle exclut les femmes.",
     "c": [
      {
       "rel": "dénonce",
       "t": "L'exclusion des femmes",
       "a": "Rousseau, Voltaire, Kant",
       "d": "Ils les destinaient par nature à la vie domestique."
      },
      {
       "rel": "répond par la",
       "t": "Déclaration des droits de la femme",
       "a": "Olympe de Gouges (1791)"
      },
      {
       "rel": "soutient que",
       "t": "« La raison n'a pas de sexe »",
       "a": "Mary Wollstonecraft (1792)",
       "d": "L'inégalité est culturelle, due au manque d'éducation : elle demande une éducation égalitaire et l'indépendance économique."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Raison autonome",
     "rel": "fonde les",
     "a": "Droits naturels"
    },
    {
     "de": "Déclaration des droits de la femme",
     "rel": "réécrit pour inclure la femme la",
     "a": "Déclaration de 1789"
    }
   ],
   "idea": "La raison des Lumières fonde les droits naturels et transforme le sujet en citoyen ; mais, si la raison est universelle, exclure les femmes est une incohérence que dénonce la première vague féministe."
  }
 },
 "ds-C2": {
  "subject": "hf",
  "block": "C",
  "tema": "Kant",
  "title": "La philosophie critique de Kant",
  "mermaid": "flowchart TD\n  center[\"LA PHILOSOPHIE CRITIQUE DE KANT\"]:::axis\n  cri[\"Criticisme\"]:::key\n  fn[\"Phénomène / Noumène\"]:::key\n  met[\"Le problème de la métaphysique\"]:::key\n  center --> cri\n  cri -->|\"distingue\"| fn\n  fn -->|\"conclusion\"| met\n  cri --> c1[\"unit rationalisme + empirisme\"]\n  cri --> c2[\"connaître = matière (a posteriori)<br>+ forme (a priori)\"]\n  fn --> fe[\"PHÉNOMÈNE : la réalité qui apparaît<br>(on peut la connaître)\"]\n  fn --> no[\"NOUMÈNE : la chose en soi<br>(inconnaissable)\"]\n  no -->|\"c'est pourquoi\"| met\n  met --> m1[\"la métaphysique ne peut pas être une science\"]\n  met --> m2[\"les objets transcendants<br>ne peuvent pas être démontrés\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Que pouvons-nous connaître, et pourquoi la métaphysique ne peut-elle pas être une science ?",
   "raiz": "LE CRITICISME DE KANT",
   "raiz_d": "Critique de la raison pure (1781) : la raison examine ses propres limites et sa portée.",
   "ramas": [
    {
     "rel": "part de",
     "t": "Deux courants insuffisants",
     "c": [
      {
       "rel": "tombe dans le dogmatisme",
       "t": "Rationalisme",
       "a": "Descartes",
       "d": "Il croit que tout se déduit a priori de la raison."
      },
      {
       "rel": "tombe dans le scepticisme",
       "t": "Empirisme",
       "a": "Hume",
       "d": "Tout vient de l'expérience ; il a tiré Kant de son « sommeil dogmatique »."
      }
     ]
    },
    {
     "rel": "propose",
     "t": "La révolution copernicienne",
     "k": true,
     "d": "Ce n'est pas le sujet qui s'adapte à l'objet : l'objet se règle sur les structures du sujet.",
     "c": [
      {
       "rel": "connaître unit la",
       "t": "Matière (a posteriori)",
       "d": "Ce qui vient de l'expérience."
      },
      {
       "rel": "et la",
       "t": "Forme (a priori)",
       "d": "Ce que le sujet apporte : l'espace et le temps, et les catégories de l'entendement."
      },
      {
       "rel": "s'appelle",
       "t": "Idéalisme transcendantal"
      }
     ]
    },
    {
     "rel": "de là il distingue",
     "t": "Les limites de la connaissance",
     "c": [
      {
       "rel": "nous connaissons le",
       "t": "Phénomène",
       "k": true,
       "d": "La réalité telle qu'elle nous apparaît."
      },
      {
       "rel": "nous ne connaissons pas le",
       "t": "Noumène",
       "k": true,
       "d": "La réalité en elle-même, hors de toute expérience : inconnaissable."
      }
     ]
    },
    {
     "rel": "conclusion",
     "t": "La métaphysique ne peut pas être une science",
     "c": [
      {
       "rel": "parce que",
       "t": "Dieu, l'âme et le monde",
       "d": "Ils ne peuvent pas être démontrés par l'expérience."
      },
      {
       "rel": "en revanche",
       "t": "La science, elle, est possible",
       "d": "La physique et les mathématiques portent sur des phénomènes."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La révolution copernicienne",
     "rel": "unit le meilleur du",
     "a": "Deux courants insuffisants"
    },
    {
     "de": "Forme (a priori)",
     "rel": "organise le",
     "a": "Phénomène"
    },
    {
     "de": "Dieu, l'âme et le monde",
     "rel": "restent du côté du",
     "a": "Noumène"
    }
   ],
   "idea": "« Toute connaissance commence avec l'expérience, mais tout ne provient pas d'elle » (Kant) : nous ne connaissons que des phénomènes, c'est pourquoi la science est possible et la métaphysique ne l'est pas."
  }
 },
 "ds-C3": {
  "subject": "hf",
  "block": "C",
  "tema": "Éthique moderne",
  "title": "Éthique : Kant face à l'utilitarisme",
  "mermaid": "flowchart TD\n  center[\"ÉTHIQUE : KANT FACE<br>À L'UTILITARISME\"]:::axis\n  kant[\"KANT :<br>éthique déontologique (du devoir)\"]:::key\n  uti[\"UTILITARISME<br>(Bentham, Mill)\"]:::key\n  azu[\"AZURMENDI :<br>relativisme relatif\"]:::key\n  center --> kant\n  center --> uti\n  kant -->|\"s'oppose à\"| uti\n  kant --> k1[\"regarde le devoir et l'intention\"]\n  kant --> k2[\"impératif catégorique\"]\n  kant --> k3[\"la personne comme fin, non comme moyen\"]\n  uti --> u1[\"regarde les conséquences\"]\n  uti --> u2[\"le plus grand bonheur pour<br>le plus grand nombre\"]\n  center --> azu\n  azu -->|\"nuance les deux\"| kant\n  azu -->|\"nuance les deux\"| uti\n  azu --> az1[\"il n'y a pas de fondement éthique absolu\"]\n  azu --> az2[\"les valeurs dépendent du contexte\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce qui rend une action bonne : l'intention avec laquelle on l'accomplit ou ses conséquences ?",
   "raiz": "ÉTHIQUES DU DEVOIR ET DU BONHEUR",
   "raiz_d": "À la fin du XVIIIe siècle s'affrontent deux réponses : ce qui est juste par principe et ce qui nous convient.",
   "ramas": [
    {
     "rel": "juge l'action elle-même",
     "t": "Éthique du devoir",
     "k": true,
     "a": "Kant",
     "d": "Éthique déontologique, formelle et autonome : elle ne dit pas quoi faire, mais la forme que doit avoir la norme.",
     "c": [
      {
       "rel": "la seule chose bonne sans restriction",
       "t": "La bonne volonté",
       "d": "Agir par devoir, et pas seulement conformément au devoir, ni par intérêt ou par inclination."
      },
      {
       "rel": "s'exprime dans l'",
       "t": "Impératif catégorique",
       "k": true,
       "d": "Commandement moral universel et inconditionnel.",
       "c": [
        {
         "rel": "formule",
         "t": "Loi universelle",
         "d": "Agis selon une maxime dont tu puisses vouloir qu'elle devienne une loi pour tous."
        },
        {
         "rel": "formule",
         "t": "Fin en soi",
         "d": "Traite l'humanité toujours comme une fin, jamais seulement comme un moyen : fondement de la dignité."
        }
       ]
      }
     ]
    },
    {
     "rel": "juge les conséquences",
     "t": "Utilitarisme",
     "k": true,
     "a": "Bentham, Mill",
     "d": "Éthique conséquentialiste (téléologique) : est bonne l'action qui augmente le plaisir et réduit la douleur.",
     "c": [
      {
       "rel": "se guide sur le",
       "t": "Principe d'utilité",
       "d": "Le plus grand bonheur du plus grand nombre."
      },
      {
       "rel": "chez Bentham, quantitatif",
       "t": "Calcul hédonique",
       "d": "Il mesure le plaisir : intensité, durée, certitude, étendue…"
      },
      {
       "rel": "chez Mill, qualitatif",
       "t": "Plaisirs supérieurs et inférieurs",
       "d": "Les plaisirs intellectuels et moraux valent plus que les plaisirs physiques."
      }
     ]
    },
    {
     "rel": "troisième voie basque",
     "t": "Relativisme relatif",
     "a": "Joxe Azurmendi",
     "c": [
      {
       "rel": "rejette",
       "t": "Fondements absolus",
       "d": "Ni Dieu ni la raison ne peuvent fonder une éthique universelle."
      },
      {
       "rel": "sans tomber dans le nihilisme",
       "t": "Validité au sein de chaque communauté",
       "d": "Les valeurs dépendent du contexte, mais en son sein elles valent presque de façon absolue."
      },
      {
       "rel": "combine",
       "t": "Conviction et responsabilité",
       "a": "Max Weber",
       "d": "Principes et conséquences, en distinguant au cas par cas."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Éthique du devoir",
     "rel": "l'intention face aux conséquences",
     "a": "Utilitarisme"
    },
    {
     "de": "Fondements absolus",
     "rel": "remet en question le",
     "a": "Impératif catégorique"
    },
    {
     "de": "Conviction et responsabilité",
     "rel": "regarde les conséquences, comme le",
     "a": "Utilitarisme"
    }
   ],
   "idea": "Pour Kant, une action est morale par l'intention d'accomplir le devoir, non par ses résultats ; pour l'utilitarisme, par le bonheur qu'elle produit. Azurmendi rejette les absolus sans accepter que tout se vaille."
  }
 },
 "ds-C4": {
  "subject": "hf",
  "block": "C",
  "tema": "Philosophes du soupçon",
  "title": "Les philosophes du soupçon",
  "mermaid": "flowchart TD\n  center[\"LES PHILOSOPHES DU SOUPÇON\"]:::axis\n  idea[\"La conscience n'est pas transparente :<br>quelque chose de caché la détermine\"]\n  center -->|\"thèse commune\"| idea\n  marx[\"MARX\"]:::key\n  niet[\"NIETZSCHE\"]:::key\n  freud[\"FREUD\"]:::key\n  idea --> marx\n  idea --> niet\n  idea --> freud\n  marx -->|\"démasque\"| eco[\"l'économie\"]\n  eco -->|\"produit\"| ideo[\"idéologie et aliénation\"]\n  ideo -->|\"se dépasse par\"| rev[\"révolution → communisme\"]\n  niet -->|\"démasque\"| moral[\"la morale et ses valeurs\"]\n  moral -->|\"conduit au\"| nih[\"nihilisme · mort de Dieu\"]\n  nih -->|\"réponse\"| super[\"volonté de puissance · surhomme\"]\n  freud -->|\"démasque\"| incon[\"l'inconscient\"]\n  incon --> yo[\"ça · moi · surmoi\"]\n  incon --> pul[\"Éros et Thanatos\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Que se cache-t-il derrière ce que nous croyons penser et vouloir librement ?",
   "raiz": "LES MAÎTRES DU SOUPÇON",
   "raiz_d": "Selon Ricœur, Marx, Nietzsche et Freud montrent que le sujet n'est pas « maître en sa propre maison ».",
   "ramas": [
    {
     "rel": "soupçon économique",
     "t": "Marx",
     "k": true,
     "c": [
      {
       "rel": "soupçon de",
       "t": "Les idées et la religion",
       "d": "Ce ne sont pas des vérités universelles, mais de la superstructure."
      },
      {
       "rel": "derrière, il y a",
       "t": "Idéologie",
       "d": "Fausse conscience qui justifie la classe dominante et cache l'exploitation."
      },
      {
       "rel": "propose",
       "t": "Révolution sans classes",
       "d": "Pour dépasser l'aliénation du travailleur."
      }
     ]
    },
    {
     "rel": "soupçon moral",
     "t": "Nietzsche",
     "k": true,
     "c": [
      {
       "rel": "soupçon de",
       "t": "La morale et la vérité",
       "d": "Pitié, humilité et égalité : morale d'esclaves."
      },
      {
       "rel": "derrière, il y a",
       "t": "Ressentiment du faible",
       "d": "Haine de la vie et des forts, depuis Platon et le christianisme."
      },
      {
       "rel": "quand les valeurs s'effondrent",
       "t": "Nihilisme",
       "d": "« Dieu est mort » : l'être humain se retrouve sans sens."
      },
      {
       "rel": "propose le",
       "t": "Surhomme",
       "d": "Il crée ses propres valeurs avec la volonté de puissance : transvaluation."
      }
     ]
    },
    {
     "rel": "soupçon psychique",
     "t": "Freud",
     "k": true,
     "c": [
      {
       "rel": "soupçon de",
       "t": "La rationalité consciente",
       "d": "La conscience n'est que la pointe de l'iceberg."
      },
      {
       "rel": "derrière, il y a",
       "t": "L'inconscient",
       "d": "Désirs refoulés qui nous gouvernent ; pulsions d'Éros (vie) et de Thanatos (mort).",
       "c": [
        {
         "rel": "se structure en",
         "t": "Ça, moi et surmoi",
         "d": "Instincts, raison qui fait médiation avec la réalité, normes morales intériorisées."
        }
       ]
      },
      {
       "rel": "cherche",
       "t": "Santé mentale et connaissance de soi"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ressentiment du faible",
     "rel": "cache des intérêts, comme la",
     "a": "Idéologie"
    }
   ],
   "idea": "Marx, Nietzsche et Freud démasquent la conscience : sous nos idées, nos valeurs et nos raisons agissent des forces que nous ne contrôlons pas (l'économie, le ressentiment, l'inconscient)."
  }
 },
 "ds-C5": {
  "subject": "hf",
  "block": "C",
  "tema": "Critique du capitalisme",
  "title": "La critique du capitalisme",
  "mermaid": "flowchart TD\n  center[\"LA CRITIQUE DU CAPITALISME<br>ET DE LA SOCIÉTÉ DE MASSE\"]:::axis\n  fra[\"ÉCOLE DE FRANCFORT\"]:::key\n  are[\"HANNAH ARENDT\"]:::key\n  raw[\"JOHN RAWLS\"]:::key\n  center --> fra\n  center --> are\n  center --> raw\n  fra --> f1[\"raison instrumentale\"]\n  fra --> f2[\"industrie culturelle\"]\n  fra -->|\"produit\"| f3[\"déshumanisation\"]\n  are --> a1[\"analyse du totalitarisme\"]\n  are --> a2[\"idéologie totalisante\"]\n  are -->|\"provoque\"| a3[\"anéantissement de la sphère<br>publique et privée\"]\n  raw -->|\"réponse : réformer, non détruire\"| r1[\"la justice comme équité\"]\n  raw --> r2[\"l'État-providence\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment la critique du capitalisme évolue-t-elle de Marx aux philosophes du XXe siècle ?",
   "raiz": "LA CRITIQUE DU CAPITALISME",
   "raiz_d": "Marx critique l'exploitation de la révolution industrielle ; après le totalitarisme, le XXe siècle critique aussi la culture, la raison et l'État.",
   "ramas": [
    {
     "rel": "XIXe siècle",
     "t": "Exploitation et aliénation",
     "a": "Marx",
     "c": [
      {
       "rel": "repose sur la",
       "t": "Plus-value",
       "d": "Le capitaliste s'approprie la valeur que l'ouvrier produit et ne reçoit pas."
      },
      {
       "rel": "est dépassée par la",
       "t": "Révolution prolétarienne",
       "d": "Vers une société communiste sans classes."
      }
     ]
    },
    {
     "rel": "critique culturelle",
     "t": "La raison instrumentale",
     "k": true,
     "a": "Adorno, Horkheimer (Francfort)",
     "d": "Efficacité et calcul sans s'interroger sur les fins : la raison devient domination.",
     "c": [
      {
       "rel": "on la voit dans l'",
       "t": "Industrie culturelle",
       "d": "Divertissement standardisé : passivité et conformisme."
      }
     ]
    },
    {
     "rel": "le rôle de l'État",
     "t": "Démocratie et réforme",
     "c": [
      {
       "rel": "Popper propose",
       "t": "Ingénierie sociale fragmentaire",
       "a": "Popper",
       "d": "Des réformes petites et graduelles, corrigées si elles échouent ; contre l'historicisme."
      },
      {
       "rel": "Habermas propose",
       "t": "Démocratie délibérative",
       "a": "Habermas",
       "d": "Consensus par le dialogue, dans une sphère publique libre."
      }
     ]
    },
    {
     "rel": "le danger extrême",
     "t": "Le totalitarisme",
     "a": "Hannah Arendt",
     "d": "Domination totale par la terreur et la propagande : la population devient masse.",
     "c": [
      {
       "rel": "face à lui",
       "t": "Retrouver l'espace public",
       "d": "Esprit critique et pluralité."
      }
     ]
    },
    {
     "rel": "fondement moral",
     "t": "La justice comme équité",
     "k": true,
     "a": "John Rawls",
     "c": [
      {
       "rel": "se choisit sous un",
       "t": "Voile d'ignorance",
       "d": "Sans savoir quelle place nous occuperons : nous choisirions de protéger le plus défavorisé."
      },
      {
       "rel": "d'où le",
       "t": "Principe de différence",
       "k": true,
       "d": "Les inégalités ne sont justes que si elles profitent aux plus défavorisés : fondement de l'État-providence."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ingénierie sociale fragmentaire",
     "rel": "réforme graduelle face à la",
     "a": "Révolution prolétarienne"
    },
    {
     "de": "Démocratie délibérative",
     "rel": "répond à",
     "a": "La raison instrumentale"
    }
   ],
   "idea": "De Marx au XXe siècle, la critique passe de l'exploitation économique à la culture et à la raison ; et la réponse, de la révolution à la réforme : démocratie délibérative et justice comme équité."
  }
 },
 "ds-C6": {
  "subject": "hf",
  "block": "C",
  "tema": "Postmodernité",
  "title": "Nietzsche et la postmodernité",
  "mermaid": "flowchart TD\n  center[\"NIETZSCHE ET LA POSTMODERNITÉ\"]:::axis\n  niet[\"NIETZSCHE :<br>déconstruction\"]:::key\n  post[\"POSTMODERNITÉ\"]:::key\n  hab[\"HABERMAS :<br>défense de la modernité\"]:::key\n  center --> niet\n  niet -->|\"inspire\"| post\n  niet --> n1[\"critique de la vérité objective\"]\n  niet --> n2[\"critique de la métaphysique\"]\n  niet --> n3[\"critique du dualisme\"]\n  post --> p1[\"critique des vérités universelles<br>(fin des métarécits)\"]\n  post --> p2[\"pluralité et différence\"]\n  center --> hab\n  hab -->|\"répond à\"| post\n  hab --> h1[\"raison communicationnelle\"]\n  hab --> h2[\"la modernité ne s'est pas épuisée\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Pourquoi Nietzsche est-il le point de départ de la critique postmoderne de la modernité ?",
   "raiz": "NIETZSCHE ET LA POSTMODERNITÉ",
   "raiz_d": "Nietzsche, qui se qualifie lui-même de « dynamite », démolit la tradition occidentale ; la postmodernité hérite de son soupçon et Habermas lui répond.",
   "ramas": [
    {
     "rel": "démolition",
     "t": "La critique de la tradition",
     "k": true,
     "a": "Nietzsche",
     "d": "Avec la méthode généalogique, il montre que les croyances ne sont pas éternelles : elles naissent d'intérêts, de ressentiment et de pouvoir.",
     "c": [
      {
       "rel": "contre la vérité objective",
       "t": "Le perspectivisme",
       "k": true,
       "d": "Toute connaissance dépend du point de vue : il n'y a que des perspectives et des interprétations."
      },
      {
       "rel": "contre la métaphysique",
       "t": "Le « monde vrai » est une fiction",
       "d": "Platon et le christianisme ont inventé un au-delà pour mépriser le seul monde qui existe."
      },
      {
       "rel": "contre la morale",
       "t": "La morale d'esclaves",
       "d": "Derrière la « bonté », l'humilité et l'égalité se cache le ressentiment contre la vie."
      }
     ]
    },
    {
     "rel": "proposition",
     "t": "La transvaluation des valeurs",
     "k": true,
     "a": "Nietzsche",
     "d": "Renverser les valeurs qui nient la vie et en créer d'autres qui l'affirment.",
     "c": [
      {
       "rel": "part de",
       "t": "La mort de Dieu",
       "d": "« Dieu est mort » : le fondement des valeurs absolues s'effondre et le nihilisme arrive."
      },
      {
       "rel": "l'incarne",
       "t": "Le surhomme",
       "d": "Celui qui crée ses propres valeurs par la volonté de puissance."
      }
     ]
    },
    {
     "rel": "hérite du soupçon",
     "t": "La postmodernité",
     "a": "Lyotard, Derrida, Foucault, Vattimo",
     "d": "Elle applique le soupçon de Nietzsche à la culture du XXe siècle.",
     "c": [
      {
       "rel": "rejette",
       "t": "Les vérités universelles",
       "d": "Fin des métarécits : il n'y a ni une seule histoire ni une vérité pour tous."
      },
      {
       "rel": "défend",
       "t": "La pluralité et la différence"
      }
     ]
    },
    {
     "rel": "répond",
     "t": "La défense de la modernité",
     "k": true,
     "a": "Habermas",
     "d": "La modernité est un projet qui ne s'est pas épuisé : il faut le réparer, non l'abandonner.",
     "c": [
      {
       "rel": "propose",
       "t": "La raison communicationnelle",
       "d": "Le dialogue sans contrainte permet d'atteindre des accords rationnels et de critiquer l'injustice."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Le perspectivisme",
     "rel": "anticipe la critique de",
     "a": "Les vérités universelles"
    },
    {
     "de": "La raison communicationnelle",
     "rel": "cherche un accord face à",
     "a": "La pluralité et la différence"
    }
   ],
   "idea": "Nietzsche démolit la vérité, la métaphysique et la morale de l'Occident pour affirmer la vie ; la postmodernité hérite de son soupçon, et Habermas répond que la raison, si elle est dialogique, peut encore être sauvée."
  }
 },
 "ds-C7": {
  "subject": "hf",
  "block": "C",
  "tema": "Philosophie du langage",
  "title": "La philosophie du langage",
  "mermaid": "flowchart TD\n  center[\"LA PHILOSOPHIE DU LANGAGE\"]:::axis\n  w1[\"WITTGENSTEIN I<br>(le premier)\"]:::key\n  w2[\"WITTGENSTEIN II<br>(le second)\"]:::key\n  txi[\"TXILLARDEGI\"]:::key\n  center --> w1\n  w1 -->|\"se corrige lui-même dans\"| w2\n  w1 --> a1[\"le langage est l'image du monde\"]\n  w1 --> a2[\"la métaphysique n'a pas de sens\"]\n  w1 --> a3[\"« ce dont on ne peut parler,<br>il faut le taire »\"]\n  w2 --> b1[\"la signification, c'est l'usage\"]\n  w2 --> b2[\"jeux de langage\"]\n  w2 --> b3[\"philosophie thérapeutique\"]\n  center --> txi\n  txi -->|\"depuis le basque\"| w2\n  txi --> c1[\"la langue conditionne la pensée\"]\n  txi --> c2[\"c'est un structurateur inconscient\"]\n  txi --> c3[\"la survie du basque,<br>difficile sans un État basque\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Où se situent les limites de ce que nous pouvons dire et penser ?",
   "raiz": "LA PHILOSOPHIE DU LANGAGE",
   "raiz_d": "Le tournant linguistique : beaucoup de problèmes philosophiques naissent du mauvais usage du langage, qui marque la limite de ce que nous pouvons penser.",
   "ramas": [
    {
     "rel": "Tractatus (1921)",
     "t": "Le premier Wittgenstein",
     "k": true,
     "d": "Il cherche la structure logique que partagent le langage et le monde.",
     "c": [
      {
       "rel": "soutient",
       "t": "La théorie picturale",
       "d": "Les propositions sont des « images » des faits, comme une carte reflète le terrain."
      },
      {
       "rel": "conclut",
       "t": "La métaphysique est un non-sens",
       "d": "La métaphysique et l'éthique tentent de dire ce qui ne peut pas être dit ; le mystique se montre seulement."
      },
      {
       "rel": "c'est pourquoi",
       "t": "Se taire devant l'indicible",
       "d": "« Ce dont on ne peut parler, il faut le taire. » La philosophie est une activité de clarification."
      }
     ]
    },
    {
     "rel": "Recherches philosophiques",
     "t": "Le second Wittgenstein",
     "k": true,
     "d": "Le langage n'est pas un miroir des faits, mais une boîte à outils.",
     "c": [
      {
       "rel": "soutient",
       "t": "La signification, c'est l'usage"
      },
      {
       "rel": "distingue",
       "t": "Les jeux de langage",
       "d": "Donner des ordres, raconter une blague, prier… : des activités avec leurs propres règles et des « ressemblances de famille »."
      },
      {
       "rel": "la philosophie est",
       "t": "Une thérapie linguistique",
       "d": "Les problèmes ne se résolvent pas : ils se dissolvent quand on voit comment nous utilisons les mots."
      }
     ]
    },
    {
     "rel": "depuis le basque",
     "t": "La langue structure la pensée",
     "k": true,
     "a": "Txillardegi",
     "d": "Influencé par Sapir-Whorf : nous pensons parce que nous avons un langage, et chaque langue porte une vision du monde.",
     "c": [
      {
       "rel": "agit comme",
       "t": "Un structurateur inconscient",
       "d": "Elle organise la réalité avant que nous nous en rendions compte."
      },
      {
       "rel": "c'est pourquoi",
       "t": "Le basque, colonne vertébrale",
       "d": "S'il disparaît, on perd une façon propre de voir le monde ; pour lui, il survivrait difficilement sans un État basque."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Le second Wittgenstein",
     "rel": "corrige",
     "a": "Le premier Wittgenstein"
    }
   ],
   "idea": "Pour le premier Wittgenstein, le langage dessine le monde ; pour le second, c'est un ensemble d'usages ; pour Txillardegi, chaque langue donne forme à la pensée d'un peuple."
  }
 },
 "ds-C8": {
  "subject": "hf",
  "block": "C",
  "tema": "Existentialisme",
  "title": "L'existentialisme",
  "mermaid": "flowchart TD\n  center[\"L'EXISTENTIALISME\"]:::axis\n  idea[\"Part de l'existence concrète,<br>non d'essences abstraites\"]:::key\n  center -->|\"thèse commune\"| idea\n  sar[\"SARTRE (athée)\"]:::key\n  hei[\"HEIDEGGER\"]:::key\n  ort[\"ORTEGA Y GASSET\"]:::key\n  una[\"UNAMUNO (chrétien)\"]:::key\n  idea --> sar\n  idea --> hei\n  idea --> ort\n  idea --> una\n  sar --> s1[\"l'existence précède l'essence\"]\n  sar --> s2[\"condamnés à être libres\"]\n  hei --> h1[\"distinguer l'être et les étants\"]\n  hei --> h2[\"Dasein : projeté dans le monde\"]\n  ort --> o1[\"la raison vitale\"]\n  ort --> o2[\"« je suis moi et ma circonstance »\"]\n  una --> u1[\"le sentiment tragique de la vie\"]\n  una --> u2[\"la soif d'immortalité\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce que l'être humain pour chaque penseur existentialiste ?",
   "raiz": "L'EXISTENTIALISME",
   "raiz_d": "Thèse commune : on part de l'existence concrète, non d'essences abstraites.",
   "ramas": [
    {
     "rel": "ontologie",
     "t": "Le Dasein",
     "k": true,
     "a": "Heidegger",
     "d": "« Être-là » : l'être humain, l'étant qui s'interroge sur l'être.",
     "c": [
      {
       "rel": "distingue",
       "t": "L'être et les étants",
       "d": "Les choses concrètes n'épuisent pas la question de l'être."
      },
      {
       "rel": "existe comme",
       "t": "Être-au-monde, jeté",
       "d": "Lancé dans l'existence sans l'avoir demandé."
      },
      {
       "rel": "se sait",
       "t": "Être-pour-la-mort",
       "d": "Accepter la finitude ouvre à la vie authentique."
      }
     ]
    },
    {
     "rel": "existentialisme athée",
     "t": "La liberté radicale",
     "k": true,
     "a": "Sartre",
     "d": "Sans Dieu pour dicter des normes, nous sommes totalement responsables de ce que nous sommes.",
     "c": [
      {
       "rel": "parce que",
       "t": "L'existence précède l'essence"
      },
      {
       "rel": "d'où",
       "t": "« Condamnés à être libres »",
       "d": "Il y a toujours un choix : ne pas choisir est déjà un choix."
      },
      {
       "rel": "on s'en échappe par la",
       "t": "La mauvaise foi",
       "d": "Illusion qu'on se fait à soi-même : « je suis comme ça », « je n'avais pas le choix »."
      }
     ]
    },
    {
     "rel": "existentialisme chrétien",
     "t": "Le sentiment tragique de la vie",
     "k": true,
     "a": "Unamuno",
     "d": "L'être humain est un être en agonie.",
     "c": [
      {
       "rel": "lutte entre",
       "t": "Raison et cœur",
       "d": "La raison nie l'immortalité ; le cœur la désire."
      },
      {
       "rel": "le meut",
       "t": "La soif d'immortalité"
      }
     ]
    },
    {
     "rel": "raison vitale (raciovitalisme)",
     "t": "La raison vitale",
     "a": "Ortega y Gasset",
     "d": "La raison pure ne suffit pas : il faut penser à partir de la vie concrète.",
     "c": [
      {
       "rel": "parce que",
       "t": "« Je suis moi et ma circonstance »"
      },
      {
       "rel": "d'où",
       "t": "Le perspectivisme",
       "d": "Personne ne détient la vérité absolue : la vérité est la somme de toutes les perspectives."
      }
     ]
    },
    {
     "rel": "disciple d'Ortega",
     "t": "La raison poétique",
     "a": "María Zambrano",
     "d": "Elle unit philosophie et poésie pour atteindre les « entrailles » de l'être humain : rêves, sentiments, espérance."
    }
   ],
   "cruces": [
    {
     "de": "La raison poétique",
     "rel": "élargit",
     "a": "La raison vitale"
    }
   ],
   "idea": "Tous partent de l'individu concret : Heidegger le voit jeté vers la mort, Sartre condamné à être libre, Unamuno en agonie, Ortega uni à sa circonstance et Zambrano ayant besoin de la parole poétique."
  }
 },
 "ds-C9": {
  "subject": "hf",
  "block": "C",
  "tema": "Beauvoir / féminisme",
  "title": "Simone de Beauvoir : le féminisme",
  "mermaid": "flowchart TD\n  center[\"SIMONE DE BEAUVOIR :<br>le féminisme\"]:::axis\n  tesis[\"« On ne naît pas femme :<br>on le devient »\"]:::key\n  alt[\"L'altérité : le deuxième sexe\"]:::key\n  eman[\"L'émancipation\"]:::key\n  center --> tesis\n  tesis -->|\"explique\"| alt\n  alt -->|\"se dépasse par\"| eman\n  tesis --> t1[\"il n'y a pas d'essence féminine fixe\"]\n  tesis --> t2[\"la culture construit « le féminin »\"]\n  alt --> a1[\"l'homme = sujet absolu\"]\n  alt --> a2[\"la femme = « l'autre », le complémentaire\"]\n  alt --> a3[\"dialectique du maître et de l'esclave\"]\n  eman --> e1[\"éducation égalitaire\"]\n  eman --> e2[\"droit à l'avortement et à la contraception\"]\n  eman --> e3[\"autonomie économique\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Que signifie « être femme », et comment la femme peut-elle devenir libre ?",
   "raiz": "SIMONE DE BEAUVOIR : LE FÉMINISME",
   "raiz_d": "Existentialiste comme Sartre, elle inaugure avec Le Deuxième Sexe (1949) la deuxième vague du féminisme.",
   "ramas": [
    {
     "rel": "thèse",
     "t": "« On ne naît pas femme : on le devient »",
     "k": true,
     "d": "L'identité féminine est une construction culturelle, non un destin biologique.",
     "c": [
      {
       "rel": "nie",
       "t": "Une essence féminine fixe",
       "d": "L'existence précède l'essence : il n'y a pas non plus d'« éternel féminin »."
      },
      {
       "rel": "affirme",
       "t": "La culture construit « le féminin »",
       "d": "Maternité, mariage et tâches domestiques fonctionnent comme des instruments d'oppression."
      }
     ]
    },
    {
     "rel": "diagnostic",
     "t": "L'altérité : le deuxième sexe",
     "k": true,
     "d": "La femme a toujours été définie par rapport à l'homme : fille, épouse, mère.",
     "c": [
      {
       "rel": "l'homme, comme",
       "t": "Le Sujet, l'essentiel"
      },
      {
       "rel": "la femme, comme",
       "t": "L'Objet, « l'autre »"
      },
      {
       "rel": "s'explique par",
       "t": "La dialectique du maître et de l'esclave",
       "a": "Hegel",
       "d": "L'identité se construit à travers la reconnaissance de l'autre."
      },
      {
       "rel": "ne se révolte pas à cause de",
       "t": "L'immanence de son travail",
       "d": "Le travail domestique se répète et ne laisse pas de trace ; la transcendance reste à l'homme."
      }
     ]
    },
    {
     "rel": "proposition",
     "t": "L'émancipation",
     "k": true,
     "d": "Que la femme soit un être humain à part entière, non qu'elle devienne un homme.",
     "c": [
      {
       "rel": "première voie",
       "t": "Éducation à l'égalité"
      },
      {
       "rel": "deuxième voie",
       "t": "Indépendance économique"
      },
      {
       "rel": "troisième voie",
       "t": "Autonomie reproductive",
       "d": "Contrôle des naissances (contraception, avortement) et maternité libre."
      },
      {
       "rel": "but",
       "t": "La réciprocité",
       "d": "Se reconnaître comme deux libertés : la libération de la femme est aussi celle de l'homme."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "L'immanence de son travail",
     "rel": "on rompt avec",
     "a": "Indépendance économique"
    }
   ],
   "idea": "« On ne naît pas femme : on le devient » : le féminin est une construction qui a fait de la femme « l'autre » ; s'il est construit, il peut être transformé."
  }
 }
};
