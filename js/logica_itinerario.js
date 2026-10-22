// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/logica_itinerario.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const LOG_ITIN = {
 "titulo": "Itinéraire : de zéro à expert",
 "intro": "Douze niveaux, du syllogisme d’Aristote à la démonstration de propositions de l’Éthique de Spinoza avec un assistant de preuve. On avance doucement : chaque niveau dit ce que tu sauras à la fin, ce qu’il faut faire et dans quel ordre, comment vérifier que tu peux passer au suivant et jusqu’où va ce que tu as appris. Les outils d’un niveau sont mis à l’épreuve au suivant : parfois ils valent encore, parfois ils montrent leur limite.",
 "tarjeta": "Douze niveaux dans l’ordre, du syllogisme à la démonstration avec Isabelle. Commence ici si tu ne sais pas par où commencer.",
 "abrir": "Voir l’itinéraire",
 "nivel": "Nivel {n}",
 "meta": "À la fin, tu sauras :",
 "pasos": "Quoi faire, dans cet ordre",
 "control": "Point de contrôle :",
 "falta": "En préparation :",
 "limite": "Jusqu’où cela va :",
 "hecho": "Je l’ai réussi",
 "progreso": "Niveaux réussis : {n} sur {t}.",
 "progresoNada": "Coche chaque niveau quand tu réussis son point de contrôle : cela n’est enregistré que dans ce navigateur.",
 "noAqui": "n’est pas sur ce site",
 "ramasTit": "Branches latérales",
 "ramasIntro": "On peut y entrer depuis le niveau indiqué, sans quitter le chemin principal.",
 "desde": "Depuis le niveau {n}",
 "puentesTit": "Ponts : la même loi en cinq langages",
 "puentes": {
  "cab": [
   "Énoncés",
   "Ensembles",
   "Algèbre de Boole",
   "Les nombres de toujours (avec 0 et 1)",
   "Portes"
  ],
  "filas": [
   [
    "¬p",
    "Aᶜ",
    "x′",
    "1 − x",
    "NOT"
   ],
   [
    "p ∧ q",
    "A ∩ B",
    "x · y",
    "x · y",
    "AND"
   ],
   [
    "p ∨ q",
    "A ∪ B",
    "x + y (avec 1 + 1 = 1)",
    "x + y − x · y",
    "OR"
   ],
   [
    "¬(p ∧ q) ↔ ¬p ∨ ¬q",
    "(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ",
    "(x · y)′ = x′ + y′",
    "1 − x · y = (1 − x) + (1 − y) − (1 − x)(1 − y)",
    "NAND = OR de deux NOT"
   ],
   [
    "tautologie",
    "U, l’univers",
    "1",
    "toujours 1",
    "la lampe toujours allumée"
   ],
   [
    "contradiction",
    "∅, l’ensemble vide",
    "0",
    "toujours 0",
    "la lampe toujours éteinte"
   ]
  ],
  "nota": "Chaque ligne dit la même chose cinq fois. Vérifie-le : la loi de De Morgan se voit dans une table de vérité, dans un diagramme de Venn, en faisant le calcul avec 0 et 1, et avec deux portes."
 },
 "niveles": [
  {
   "n": 1,
   "titulo": "Le syllogisme : validité, vérité et degrés de généralité",
   "meta": "qu’un raisonnement peut être valide avec des prémisses fausses et non valide avec tout vrai ; ce que c’est que déduire et induire ; et que « tous », « quelques » et « aucun » sont des degrés de généralité différents, qui ne donnent un raisonnement valide que s’ils sont bien articulés.",
   "pasos": [
    {
     "t": "Logique et argumentation (thème 4) : validité et vérité, déduction et induction",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Indices : valide ou vrai ?",
     "h": "#pistas/fil-validez"
    },
    {
     "t": "Syllogismes : les quatre propositions (A, E, I, O), les trois termes, les figures et les règles",
     "h": "#logica/silogismos"
    },
    {
     "t": "Sophismes du syllogisme : quelle règle chacun enfreint",
     "h": "#logica/falacias"
    }
   ],
   "control": {
    "t": "Quiz du thème 4",
    "h": "#cuestionarios/fil-t4-banco"
   },
   "limite": "Le syllogisme travaille avec des groupes de choses et trois termes. Il ne sait que faire des phrases reliées par « si…, alors » ou par « ou » : cela viendra au niveau 3."
  },
  {
   "n": 2,
   "titulo": "Du syllogisme au dessin : Euler et Venn",
   "meta": "traduire chaque proposition et chaque syllogisme en un diagramme d’Euler et en un diagramme de Venn, et lire sur le dessin si la conclusion est déjà dans les prémisses.",
   "pasos": [
    {
     "t": "Logique et argumentation (thème 4) : diagrammes d’Euler et de Venn",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Syllogismes : les diagrammes des prémisses et de la conclusion",
     "h": "#logica/silogismos"
    }
   ],
   "control": {
    "t": "Quiz : propositions, classes et diagrammes d’Euler et de Venn",
    "h": "#cuestionarios/fil-venn-q"
   },
   "limite": "Euler illustre mais ne démontre pas : un seul dessin peut tromper. Venn démontre, lui, mais avec trois ensembles cela devient déjà difficile, et il ne peut pas dessiner les relations entre les choses."
  },
  {
   "n": 3,
   "titulo": "Logique des énoncés",
   "meta": "les connecteurs, d’abord par leur usage puis par leur nom ; formaliser des phrases avec « seulement si », « à moins que » ou « ni… ni » ; faire des tables de vérité ; reconnaître une tautologie et une contradiction ; et voir que la même logique fait fonctionner un circuit.",
   "pasos": [
    {
     "t": "Laboratoire, « On se parle ? » : déduis ce que signifie un connecteur d’après son usage",
     "h": "#logica/hablamos"
    },
    {
     "t": "Formaliser : 13 phrases avec cas piège",
     "h": "#logica/formalizar"
    },
    {
     "t": "Tables de vérité : tautologie, contradiction et contingence",
     "h": "#logica/tablas"
    },
    {
     "t": "Portes logiques : la formule comme circuit",
     "h": "#logica/puertas"
    }
   ],
   "control": {
    "t": "Quiz : tables de vérité et logique",
    "h": "#cuestionarios/fil-logica-q"
   },
   "falta": "Un quiz de formalisation et une version élargie de celui des tables de vérité.",
   "limite": "La table de vérité décide tout, mais elle grandit très vite : avec 5 lettres, cela fait déjà 32 lignes. Pour raisonner sans faire la table entière, il faut des lois et des règles : niveau 4."
  },
  {
   "n": 4,
   "titulo": "Lois logiques et déduction",
   "meta": "les lois de la logique des énoncés, les règles valides (modus ponens, modus tollens, syllogisme hypothétique et disjonctif, dilemme) et leurs imitations fausses, et déduire une conclusion pas à pas sans faire la table.",
   "pasos": [
    {
     "t": "Lois logiques : 70 lois, chacune vérifiable dans sa table",
     "h": "#logica/leyes"
    },
    {
     "t": "Règles d’inférence et l’exercice « règle ou piège ? »",
     "h": "#logica/inferencia"
    },
    {
     "t": "Lois logiques : les 21 règles dérivées",
     "h": "#logica/leyes"
    }
   ],
   "control": {
    "t": "L’exercice « règle ou piège ? » de Règles d’inférence, avec 10 réussites sur 12",
    "h": "#logica/inferencia"
   },
   "falta": "Des démonstrations en déduction naturelle, en appliquant les règles ligne par ligne.",
   "limite": "Chaque règle de déduction est une tautologie de la table : la table les justifie et les règles épargnent du travail. Mais tout cela parle de phrases entières, pas de ce qu’il y a à l’intérieur."
  },
  {
   "n": 5,
   "titulo": "Classes, ensembles et algèbre de Boole",
   "meta": "les opérations sur les classes et les ensembles, leurs lois, l’algèbre de Boole et, surtout, que ce sont les mêmes lois que celles de la logique des énoncés, que celles des calculs de toujours avec 0 et 1 et que celles des portes logiques.",
   "pasos": [
    {
     "t": "Logique et argumentation (thème 4) : classes, opérations, lois et paradoxe de Russell",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Lois des ensembles : compare deux expressions dans Venn (et la loi piège)",
     "h": "#logica/conjuntos"
    },
    {
     "t": "Logique et argumentation (thème 4) : Boole et les portes",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Portes logiques : De Morgan avec deux portes",
     "h": "#logica/puertas"
    },
    {
     "t": "Atelier de Leibniz : le binaire et les nombres caractéristiques",
     "h": "#leibniz"
    }
   ],
   "puentes": true,
   "control": {
    "t": "Écrire une même loi (par exemple, celle de De Morgan) dans les cinq langages du tableau des ponts et la vérifier dans la table de vérité et dans Venn."
   },
   "limite": "Avec les classes, on dit « tous les A sont B », mais pas « chaque A aime un B » : il manque de pouvoir parler de chaque chose séparément. C’est le niveau 6."
  },
  {
   "n": 6,
   "titulo": "Logique des prédicats : « tous », « quelques », « aucun »",
   "meta": "lire « tous », « quelques » et « aucun » à la manière ancienne et à celle d’aujourd’hui, avec ∀ et ∃ ; le carré logique et la conversion dans leurs deux versions ; le problème du sujet vide ; et manier des variables (x, y) : ce qui est lié et ce qui est libre.",
   "pasos": [
    {
     "t": "Carré logique, avec la lecture traditionnelle et l’actuelle, et la conversion",
     "h": "#logica/cuadrado"
    },
    {
     "t": "Quantificateurs : A, E, I et O avec ∀ et ∃, et le monde de cinq individus",
     "h": "#logica/cuantificadores"
    }
   ],
   "control": {
    "t": "L’exercice de Quantificateurs (10 phrases)",
    "h": "#logica/cuantificadores"
   },
   "falta": "Un quiz sur les quantificateurs et la conversion.",
   "limite": "Le carré ancien tient pour acquis qu’il y a quelque chose dont on parle ; la logique d’aujourd’hui, non. C’est pourquoi certaines inférences de toujours (Darapti) ne valent que si l’on ajoute cette prémisse."
  },
  {
   "n": 7,
   "titulo": "Appliquer ce qu’on a appris : arguments classiques, paradoxes et sophismes",
   "meta": "analyser avec ces outils des arguments d’auteurs, des paradoxes et des sophismes classiques, et vérifier la validité avec un arbre de vérité.",
   "pasos": [
    {
     "t": "Arguments classiques : Monique, Augustin et la condition nécessaire et suffisante",
     "h": "#logica/clasicos/monica"
    },
    {
     "t": "Exercices : des phrases avec forme logique",
     "h": "#logica/ejercicios"
    },
    {
     "t": "Paradoxes : le menteur, le barbier, Zénon…",
     "h": "#logica/paradojas"
    },
    {
     "t": "Sophismes classiques",
     "h": "#logica/falacias"
    },
    {
     "t": "Laboratoire, « Arbre de vérité » : le cogito, le problème du mal, le dilemme",
     "h": "#logica/arbol"
    },
    {
     "t": "Ce que la tortue dit à Achille",
     "h": "#logica/paradojas/carroll"
    }
   ],
   "control": {
    "t": "Choisir un paradoxe et un sophisme et dire, avec l’outil qu’il faudra, où se trouve le faux pas."
   },
   "limite": "La tortue de Carroll montre la limite de fond : on ne peut pas transformer une règle en une prémisse de plus sans tomber dans une régression à l’infini. Pour appliquer la logique, il faut accepter des règles."
  },
  {
   "n": 8,
   "titulo": "Mondes et relations",
   "meta": "décider si une phrase est vraie dans un monde concret, et reconnaître les propriétés d’une relation (réflexive, symétrique, transitive…) et ce qui découle de chacune.",
   "pasos": [
    {
     "t": "Laboratoire, « Monde de figures » : les cinq défis",
     "h": "#logica/mundo"
    },
    {
     "t": "Laboratoire, « Relations » : les cinq défis",
     "h": "#logica/relaciones"
    },
    {
     "t": "Laboratoire, « Spinoza » : la carte des propriétés de la révision",
     "h": "#logica/spinoza"
    }
   ],
   "control": {
    "t": "Les défis du Monde de figures et de Relations",
    "h": "#logica/mundo"
   },
   "limite": "Un petit monde peut réfuter une phrase, mais pas la démontrer : il y a des phrases qui n’échouent que dans des mondes grands ou infinis."
  },
  {
   "n": 9,
   "titulo": "De la logique à la mathématique",
   "meta": "suivre une démonstration mathématique et en trouver le maillon faible, distinguer ce qui est démontré de ce qui est présupposé, et voir quels jugements Kant distinguait et ce qu’il en reste dans la logique d’aujourd’hui.",
   "pasos": [
    {
     "t": "Laboratoire, « Démonstrations guidées » : racine de 2, Euclide, Ménon, Anselme",
     "h": "#logica/demos"
    },
    {
     "t": "Laboratoire, « Les jugements de Kant »",
     "h": "#logica/kant"
    }
   ],
   "control": {
    "t": "Faire une démonstration guidée du début à la fin sans te tromper à aucune étape."
   },
   "limite": "Une démonstration écrite à la main peut sauter une étape sans que personne le remarque. Et si un programme vérifiait chaque étape ? C’est ce qui vient."
  },
  {
   "n": 10,
   "titulo": "Isabelle, niveau 1 : les mondes du temps",
   "meta": "ce qu’est un assistant de preuve, chercher des contre-modèles et retirer des prémisses pour voir lesquelles sont nécessaires, et écrire tes propres propositions et prémisses.",
   "pasos": [
    {
     "t": "Laboratoire, « Spinoza » : « À propos d’Isabelle, et merci »",
     "h": "#logica/spinoza"
    },
    {
     "t": "Laboratoire, « Spinoza », monde d’entraînement : temps, durée et création",
     "h": "#logica/spinoza"
    },
    {
     "t": "Laboratoire, « Spinoza », monde « Le temps, défini »",
     "h": "#logica/spinoza"
    },
    {
     "t": "« ✎ Écris ta propre proposition », dans l’un ou l’autre des deux mondes",
     "h": "#logica/spinoza"
    }
   ],
   "control": {
    "t": "Dans « Le temps, défini », expliquer pourquoi la proposition 9 n’oblige pas à accepter quelque chose d’incréé : quelles trois thèses ne tiennent pas ensemble."
   },
   "limite": "Le chercheur de la page ne regarde que des mondes d’au plus quatre choses ; ce qu’il ne trouve pas n’est pas démontré. Ce qui est démontré, c’est ce qu’Isabelle a vérifié."
  },
  {
   "n": 11,
   "titulo": "Isabelle, niveau 2 : les cinq voies",
   "meta": "séparer un argument célèbre en ses prémisses, voir laquelle fait le travail à chaque étape et où les objections mettent le doigt.",
   "pasos": [
    {
     "t": "Laboratoire, « Spinoza », monde « Les cinq voies »",
     "h": "#logica/spinoza"
    },
    {
     "t": "Les cinq voies et leurs origines",
     "h": "#teoria/hf-cinco-vias"
    }
   ],
   "control": {
    "t": "Expliquer avec tes mots le contre-modèle des propositions 5 et 9 : quelle prémisse manque et pourquoi."
   },
   "limite": "Qu’une prémisse fasse tout le travail ne la rend pas fausse : décider si on l’accepte n’est plus de la logique, c’est de la philosophie."
  },
  {
   "n": 12,
   "titulo": "Isabelle, niveau 3 : l’Éthique de Spinoza",
   "meta": "lire la Partie I de l’Éthique comme un système, découvrir les prémisses que l’auteur n’écrit pas, voir lesquelles sont superflues et lesquelles s’opposent, et comprendre ce que signifie qu’un programme vérifie une œuvre entière.",
   "pasos": [
    {
     "t": "Laboratoire, « Spinoza », monde « Spinoza, Éthique I » : couches, « Une prémisse est-elle superflue ? » et « Écris ta propre proposition »",
     "h": "#logica/spinoza"
    }
   ],
   "control": {
    "t": "Choisir une proposition, retirer toutes les prémisses possibles et défendre par écrit si la plus discutable est acceptable."
   },
   "limite": "Spinoza parle d’attributs de la substance, et parler de propriétés de propriétés mène au-delà de la logique des prédicats du premier ordre : c’est la porte de la logique d’ordre supérieur, celle d’Isabelle/HOL."
  }
 ],
 "ramas": [
  {
   "titulo": "Sophismes non formels et rhétorique",
   "desde": 1,
   "txt": "Les pièges qui ne tiennent pas à la forme mais au contenu, et l’art de discuter.",
   "pasos": [
    {
     "t": "Sophismes",
     "h": "#logica/falacias"
    },
    {
     "t": "Duel de raisons",
     "h": "#duelo"
    },
    {
     "t": "L’art de la parole",
     "h": "#palabra"
    }
   ]
  },
  {
   "titulo": "Histoire de la logique",
   "desde": 1,
   "txt": "Aristote, Leibniz, Kant, Frege et Russell : d’où vient chaque outil.",
   "pasos": [
    {
     "t": "Atelier de Leibniz",
     "h": "#leibniz"
    },
    {
     "t": "Kant : les jugements et la logique d’aujourd’hui",
     "h": "#teoria/hf-kant-juicios"
    },
    {
     "t": "La philosophie analytique : Russell et Wittgenstein",
     "h": "#teoria/hf-analitica"
    }
   ]
  },
  {
   "titulo": "Induction et abduction",
   "desde": 1,
   "txt": "Raisonner sans certitude : généraliser, comparer et chercher la meilleure explication.",
   "pasos": [
    {
     "t": "Logique et argumentation (thème 4) : abduction et analogie",
     "h": "#teoria/fil-t4"
    }
   ],
   "falta": "Une table de force inductive, d’analogie et de meilleure explication."
  }
 ]
};
