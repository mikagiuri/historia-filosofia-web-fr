// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/laboratorio_deduccion.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const DED = {
 "t": {
  "dnLede": "Démontrer sans faire la table : on part des prémisses et on ajoute une ligne à chaque fois, en appliquant une règle à des lignes déjà présentes. Si tu arrives à la conclusion, le raisonnement est valide. Choisis les lignes (l’ordre dans lequel tu les sélectionnes n’a pas d’importance), choisis la règle et appuie sur « Appliquer » : la table vérifie si la règle vaut pour ces lignes et, si elle donne plus d’un résultat, te laisse choisir.",
  "dnEjercicios": "Exercices",
  "dnEsc": "Palier {n}",
  "dnEj": "Exercice {n} :",
  "dnComo": "1. Appuie sur les numéros des lignes que tu vas utiliser. 2. Choisis une règle. 3. Appuie sur « Appliquer ».",
  "dnReglas": "Règles",
  "dnUsar": "Utiliser cette ligne",
  "dnPremisa": "prémisse",
  "dnSupuesto": "hypothèse",
  "dnAbiertos": "Hypothèses ouvertes : {n}. Ferme-les avec PC ou RA avant de terminer : ce qui dépend d’une hypothèse ne vaut pas en dehors d’elle.",
  "dnExtraSup": "Hypothèse provisoire (la formule que tu supposes) :",
  "dnExtraAd": "Formule que tu ajoutes avec « ou » :",
  "dnAplicar": "Appliquer",
  "dnDeshacer": "Annuler",
  "dnReiniciar": "Recommencer",
  "dnNoSe": "Impossible à dériver",
  "dnSiguiente": "Exercice suivant",
  "dnPista": "Un indice",
  "dnPistaN": "Indice {n}.",
  "dnSol": "Voir la dérivation complète",
  "dnOcultar": "Masquer la dérivation",
  "dnElige": "Choisis d’abord une règle.",
  "dnVarias": "La règle donne plus d’un résultat : choisis celui que tu veux ajouter.",
  "dnHecho": "Démontré ! Tu es arrivé à la conclusion sans hypothèse ouverte : le raisonnement est valide.",
  "dnTrampaBien": "Bien vu : on ne peut pas le dériver. Contre-exemple de la table : {fila}. Avec ces valeurs, les prémisses sont vraies et la conclusion fausse.",
  "dnTrampaMal": "Si, on peut le dériver : dans la table, il n’y a aucune ligne où les prémisses sont vraies et la conclusion fausse. Continue à chercher les règles.",
  "dnErrRegla": "Je ne connais pas cette règle.",
  "dnErrExtra": "Écris la formule que demande la règle.",
  "dnErrFormula": "Je ne comprends pas la formule : {m}",
  "dnErrAcceso": "L’une des lignes choisies se trouve dans une hypothèse déjà fermée : on ne peut plus l’utiliser.",
  "dnErrSinSup": "Il n’y a aucune hypothèse ouverte à fermer. Ouvre-en une avec « Sup ».",
  "dnErrNum": "Cette règle s’applique à {n} ligne(s) : choisis ce nombre de lignes.",
  "dnErrContra": "Pour la réduction à l’absurde, choisis deux lignes qui se contredisent : une formule et sa négation.",
  "dnErrNoAplica": "La règle ne s’applique pas à ces lignes. Regarde sa forme dans le tableau des règles.",
  "dnNivel": "Dans {n} hypothèse(s).",
  "dnCerrada": "Ligne d’une hypothèse déjà fermée : on ne peut pas l’utiliser.",
  "dnReglasTit": "Les règles et pourquoi elles valent",
  "dnReglasIntro": "Chaque règle est une tautologie de la table de vérité (niveau 3) : c’est pourquoi elle ne mène jamais de prémisses vraies à une conclusion fausse. Tu peux vérifier chacune dans « Tables de vérité ».",
  "dnColRegla": "Règle",
  "dnColForma": "Forme",
  "dnColTaut": "Tautologie qui la justifie",
  "dnSinTaut": "ouvre ou ferme une hypothèse : elle est justifiée par le fait que A → B est vraie chaque fois que, en supposant A, on arrive à B",
  "dnLimiteTit": "Jusqu’où elle va",
  "dnLimite": "La table de vérité et la déduction aboutissent au même résultat par des chemins différents : avec les cinq connecteurs de la table (¬, ∧, ∨, → et ↔), tout ce que la table donne pour valide peut être dérivé avec ces règles, et tout ce qui est dérivé est valide dans la table (la logique des énoncés est correcte et complète). La déduction économise des lignes, mais toutes deux ne regardent que les phrases entières, non ce qu’il y a à l’intérieur. « Tous les humains sont mortels ; Socrate est humain ; donc Socrate est mortel » ne peut pas se démontrer ainsi : il faut regarder à l’intérieur des phrases, avec « tous » et « quelques ». C’est le niveau 6."
 },
 "esc": [
  "Palier 1 : les règles de base, presque toujours en une seule étape.",
  "Palier 2 : deux ou trois étapes.",
  "Palier 3 : des dérivations plus longues.",
  "Palier 4 : hypothèses provisoires (preuve conditionnelle et réduction à l’absurde).",
  "Palier 5 : combiner, démontrer sans prémisses, reconnaître ce qui ne peut pas être dérivé et utiliser le biconditionnel."
 ],
 "reglas": {
  "mp": {
   "nom": "Modus ponens",
   "dice": "D’un conditionnel et de son antécédent découle le conséquent."
  },
  "mt": {
   "nom": "Modus tollens",
   "dice": "D’un conditionnel et de la négation de son conséquent découle la négation de l’antécédent."
  },
  "sh": {
   "nom": "Syllogisme hypothétique",
   "dice": "Deux conditionnels enchaînés donnent un conditionnel."
  },
  "sd": {
   "nom": "Syllogisme disjonctif",
   "dice": "D’une disjonction et de la négation de l’une de ses parties découle l’autre."
  },
  "ci": {
   "nom": "Introduction de la conjonction",
   "dice": "Deux lignes peuvent être réunies avec « et »."
  },
  "ce": {
   "nom": "Élimination de la conjonction (simplification)",
   "dice": "D’une conjonction découle chacune de ses parties."
  },
  "ad": {
   "nom": "Addition",
   "dice": "D’une ligne découle cette ligne « ou » n’importe quelle autre formule : le « ou » inclusif demande seulement qu’une partie soit vraie."
  },
  "dc": {
   "nom": "Dilemme constructif",
   "dice": "Si deux chemins mènent au même endroit et que l’un des deux est vrai, on y arrive."
  },
  "dn": {
   "nom": "Double négation",
   "dice": "¬¬A et A peuvent être échangées l’une contre l’autre. Elle s’applique à la ligne entière, non à une partie de celle-ci."
  },
  "dm": {
   "nom": "De Morgan",
   "dice": "Nier une conjonction, c’est affirmer la disjonction des négations, et nier une disjonction, la conjonction des négations. Elle s’applique à la ligne entière, non à une partie de celle-ci."
  },
  "cp": {
   "nom": "Contraposition",
   "dice": "Un conditionnel équivaut à sa contraposée. Elle s’applique à la ligne entière, non à une partie de celle-ci."
  },
  "bie": {
   "nom": "Élimination du biconditionnel",
   "dice": "De A ↔ B on déduit A → B, et aussi B → A : choisis celle que tu veux."
  },
  "bii": {
   "nom": "Introduction du biconditionnel",
   "dice": "Si tu as A → B et aussi B → A, tu peux écrire A ↔ B."
  },
  "rep": {
   "nom": "Répétition",
   "dice": "Recopie une ligne encore utilisable (pour l’amener à l’intérieur d’une hypothèse)."
  },
  "sup": {
   "nom": "Hypothèse provisoire",
   "dice": "Suppose une formule quelconque pour voir ce qui en découle. Tout ce que tu dérives reste à l’intérieur de l’hypothèse jusqu’à ce que tu la fermes."
  },
  "pc": {
   "nom": "Preuve conditionnelle",
   "dice": "Si, en supposant A, tu es arrivé à B, ferme l’hypothèse et écris A → B."
  },
  "ra": {
   "nom": "Réduction à l'absurde",
   "dice": "Si, en supposant A, tu es arrivé à une contradiction (B et ¬B), ferme l’hypothèse et écris ¬A."
  }
 },
 "ej": {
  "d01": {
   "pistas": [
    "Tu as un conditionnel et son antécédent.",
    "Choisis les lignes 1 et 2 et la règle MP."
   ]
  },
  "d02": {
   "pistas": [
    "Tu as un conditionnel et la négation de son conséquent.",
    "Choisis les lignes 1 et 2 et la règle MT."
   ]
  },
  "d03": {
   "pistas": [
    "Sépare d’abord la conjonction avec E∧ : deux fois, une pour chaque partie.",
    "Puis réunis-les avec I∧ : la table te laisse choisir entre p ∧ q et q ∧ p."
   ]
  },
  "d04": {
   "pistas": [
    "Une disjonction et la négation de l’une de ses parties.",
    "Lignes 1 et 2, règle SD."
   ]
  },
  "d05": {
   "pistas": [
    "Les deux conditionnels s’enchaînent par q.",
    "Lignes 1 et 2, règle SH."
   ]
  },
  "d06": {
   "pistas": [
    "Commence par le conditionnel dont tu as déjà l’antécédent.",
    "Avec q en main, le second conditionnel donne r."
   ]
  },
  "d07": {
   "pistas": [
    "Pour utiliser p → r, il te faut p seule.",
    "Extrais p de la conjonction avec E∧ et applique MP."
   ]
  },
  "d08": {
   "pistas": [
    "Le conditionnel demande p, et tu as ¬¬p.",
    "Enlève la double négation avec DN et applique MP."
   ]
  },
  "d09": {
   "pistas": [
    "¬(p ∨ q) dit qu’aucune des deux n’a lieu.",
    "De Morgan la transforme en ¬p ∧ ¬q ; ensuite, E∧."
   ]
  },
  "d10": {
   "pistas": [
    "De Morgan transforme ¬(p ∧ q) en ¬p ∨ ¬q.",
    "Pour le syllogisme disjonctif, il te faut nier ¬p : écris ¬¬p à partir de p avec DN.",
    "Maintenant SD avec ¬p ∨ ¬q et ¬¬p."
   ]
  },
  "d11": {
   "pistas": [
    "Le conséquent de la première prémisse est un autre conditionnel.",
    "MP avec 1 et 2 donne q → r ; puis MP encore une fois avec q."
   ]
  },
  "d12": {
   "pistas": [
    "Le conditionnel demande p ∨ q et tu n’as que p.",
    "L’addition permet de passer de p à p ∨ q (écris q dans la case)."
   ]
  },
  "d13": {
   "pistas": [
    "Les trois premières prémisses ont la forme du dilemme constructif.",
    "DC avec 1, 2 et 3 donne r ; puis MP avec la quatrième."
   ]
  },
  "d14": {
   "pistas": [
    "Pour utiliser r → p avec le modus tollens, il te faut ¬p.",
    "¬(p ∨ q) donne ¬p ∧ ¬q par De Morgan ; extrais ¬p avec E∧."
   ]
  },
  "d15": {
   "pistas": [
    "Sépare la conjonction de la première prémisse.",
    "Avec q ∨ r et ¬q, SD donne r. Réunis-la à p avec I∧."
   ]
  },
  "d16": {
   "pistas": [
    "La conclusion est un conditionnel : suppose son antécédent, p ∧ r.",
    "À l’intérieur de l’hypothèse, extrais p, applique MP et ferme avec PC en choisissant la ligne de q."
   ]
  },
  "d17": {
   "pistas": [
    "Suppose p.",
    "Amène q à l’intérieur de l’hypothèse avec R (répétition) et ferme avec PC."
   ]
  },
  "d18": {
   "pistas": [
    "C’est le syllogisme hypothétique, mais sans l’utiliser : démontre-le.",
    "Suppose p, applique MP deux fois et ferme avec PC."
   ]
  },
  "d19": {
   "pistas": [
    "Suppose le contraire de ce que tu veux : p.",
    "Avec p, on obtient q et ¬q : contradiction. Ferme avec RA en choisissant ces deux lignes."
   ]
  },
  "d20": {
   "pistas": [
    "Suppose ¬p.",
    "Avec ¬p, on obtient q, qui se heurte à ¬q. RA donne ¬¬p, et DN, p."
   ]
  },
  "d21": {
   "pistas": [
    "Suppose p.",
    "MP donne q ∧ r ; extrais r avec E∧ et ferme avec PC."
   ]
  },
  "d22": {
   "pistas": [
    "Extrais les deux conditionnels avec E∧.",
    "Suppose p, obtiens q et r, réunis-les avec I∧ et ferme avec PC."
   ]
  },
  "d23": {
   "pistas": [
    "Sans prémisses, il ne reste qu’à supposer. Suppose justement ce que tu veux nier.",
    "De p ∧ ¬p on obtient p et ¬p : RA."
   ]
  },
  "d24": {
   "pistas": [
    "Essaie avec la table : y a-t-il une ligne où p → q et q sont vraies et p fausse ?",
    "S’il y en a une, appuie sur « Impossible à dériver »."
   ],
   "contra": "C’est le sophisme de l’affirmation du conséquent : avec p fausse et q vraie, les deux prémisses sont vraies et la conclusion fausse. Aucune combinaison de règles valides ne peut y mener."
  },
  "d25": {
   "pistas": [
    "Rappelle-toi que le « ou » de la logique est inclusif.",
    "p et q peuvent-elles être vraies en même temps ?"
   ],
   "contra": "C’est le sophisme de l’affirmation d’un disjoint : avec p et q vraies, les prémisses sont vraies et ¬q est fausse. Pour conclure ¬q, il faudrait le « ou » exclusif."
  },
  "d26": {
   "pistas": [
    "Compare avec l’exercice 24 : ici la prémisse est un biconditionnel, qui va dans les deux sens.",
    "E↔ avec la ligne 1 donne q → p ; ensuite, MP avec q."
   ]
  },
  "d27": {
   "pistas": [
    "Pour arriver à un biconditionnel, démontre les deux conditionnels et réunis-les avec I↔.",
    "Suppose p ∧ q, tire-en les deux parties, réunis-les à l’envers et conclus avec PC ; fais de même en partant de q ∧ p."
   ]
  }
 }
};
