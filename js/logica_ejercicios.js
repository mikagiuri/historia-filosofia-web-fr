// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/logica_ejercicios.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const LOGX = {
 "t": {
  "puentesEjTit": "Exercice : la même loi dans les cinq langages",
  "puentesEjIntro": "Chaque loi est donnée dans l’un des cinq langages. Écris-la dans les quatre autres, puis déplie la solution. Pour la vérifier, passe-la dans la table de vérité (Tables de vérité) ou fais les calculs avec 0 et 1. L’une des dix est un piège.",
  "puentesDada": "Donnée en « {l} » :",
  "puentesVer": "Voir la loi dans les cinq langages",
  "silEjTit": "Exercice : du syllogisme au diagramme de Venn, pas à pas",
  "silEjIntro": "Pour chaque syllogisme : quelles zones ombre chaque prémisse (d’abord les universelles), où va le ✕ et si la conclusion est déjà dessinée. Fais-le sur papier ou sur le diagramme ci-dessus, puis regarde la solution. L’un d’eux est un cas où Euler induit en erreur, et Venn non.",
  "silCargar": "Voir sur le diagramme",
  "silSol": "Solution pas à pas",
  "silMayor": "Prémisse majeure :",
  "silMenor": "Prémisse mineure :",
  "silCruz": "Le ✕ :",
  "silConcl": "La conclusion :",
  "silEuler": "Euler et Venn :",
  "silValido": "Valide",
  "silNoValido": "Non valide",
  "silTrad": "Valide seulement si ce dont parle le moyen terme existe",
  "nomTit": "Sophismes informels : la liste du Coin",
  "nomIntro": "Les pièges qui ne sont pas dans la forme du raisonnement, mais dans son contenu : ce qu'on dit, de qui et dans quel but. Chaque nom mène à son entrée du glossaire, où il est défini ; ici figurent d'autres noms, un exemple et la manière de le contrer.",
  "nomOtros": "Autres noms :",
  "nomEj": "Exemple :",
  "nomParar": "Comment le contrer :",
  "qfTit": "Exercice : quel sophisme est-ce ?",
  "qfIntro": "Vingt cas. Dans trois d'entre eux, il n'y a aucun sophisme : il faut aussi savoir reconnaître un bon argument.",
  "qfNo": "Ce n'est pas un sophisme",
  "qfBien": "Bien.",
  "qfMal": "Non : c'est « {x} ».",
  "qfCuenta": "Bonnes réponses : {a} sur {n}"
 },
 "lenguajes": [
  "Énoncés",
  "Ensembles",
  "Algèbre de Boole",
  "Les nombres de toujours (avec 0 et 1)",
  "Portes"
 ],
 "puentes": [
  {
   "ley": "Double négation",
   "dada": 0,
   "v": [
    "¬¬p ↔ p",
    "(Aᶜ)ᶜ = A",
    "x″ = x",
    "1 − (1 − x) = x",
    "NOT de NOT = le fil direct"
   ]
  },
  {
   "ley": "Commutativité de la conjonction",
   "dada": 1,
   "v": [
    "p ∧ q ↔ q ∧ p",
    "A ∩ B = B ∩ A",
    "x · y = y · x",
    "x · y = y · x",
    "AND avec les entrées interverties = le même AND"
   ]
  },
  {
   "ley": "Idempotence de la disjonction",
   "dada": 2,
   "v": [
    "p ∨ p ↔ p",
    "A ∪ A = A",
    "x + x = x",
    "x + x − x · x = x",
    "OR avec les deux entrées reliées = le fil direct"
   ]
  },
  {
   "ley": "Absorption",
   "dada": 3,
   "v": [
    "p ∧ (p ∨ q) ↔ p",
    "A ∩ (A ∪ B) = A",
    "x · (x + y) = x",
    "x · (x + y − x · y) = x",
    "AND de x avec (x OR y) = x"
   ]
  },
  {
   "ley": "Tiers exclu",
   "dada": 4,
   "v": [
    "p ∨ ¬p (tautologie)",
    "A ∪ Aᶜ = U",
    "x + x′ = 1",
    "x + (1 − x) − x · (1 − x) = 1",
    "x OR (NOT x) : la lampe toujours allumée"
   ]
  },
  {
   "ley": "Non-contradiction",
   "dada": 0,
   "v": [
    "¬(p ∧ ¬p) (tautologie : p ∧ ¬p est toujours fausse)",
    "A ∩ Aᶜ = ∅",
    "x · x′ = 0",
    "x · (1 − x) = 0",
    "x AND (NOT x) : la lampe toujours éteinte"
   ]
  },
  {
   "ley": "De Morgan, pour la disjonction",
   "dada": 1,
   "v": [
    "¬(p ∨ q) ↔ ¬p ∧ ¬q",
    "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ",
    "(x + y)′ = x′ · y′",
    "1 − (x + y − x · y) = (1 − x) · (1 − y)",
    "NOR = AND de deux NOT"
   ]
  },
  {
   "ley": "Distributivité de la conjonction sur la disjonction",
   "dada": 2,
   "v": [
    "p ∧ (q ∨ r) ↔ (p ∧ q) ∨ (p ∧ r)",
    "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
    "x · (y + z) = x · y + x · z",
    "x · (y + z − y · z) = x · y + x · z − x · y · z",
    "x AND (y OR z) = (x AND y) OR (x AND z)"
   ]
  },
  {
   "ley": "Élément neutre de la conjonction",
   "dada": 3,
   "v": [
    "p ∧ (q ∨ ¬q) ↔ p",
    "A ∩ U = A",
    "x · 1 = x",
    "x · 1 = x",
    "AND avec une entrée toujours à 1 = le fil direct"
   ]
  },
  {
   "ley": "Cas piège : une « loi » qui n’en est pas une",
   "dada": 2,
   "trampa": true,
   "v": [
    "¬(p ∨ q) ↔ ¬p ∨ ¬q : fausse avec p vraie et q fausse",
    "(A ∪ B)ᶜ = Aᶜ ∪ Bᶜ : fausse s’il y a quelque chose dans A et pas dans B",
    "(x + y)′ = x′ + y′ : avec x = 1, y = 0, on obtient 0 = 1",
    "1 − (x + y − x · y) = (1 − x) + (1 − y) − (1 − x) · (1 − y) : avec x = 1, y = 0, on obtient 0 = 1",
    "NOR = OR de deux NOT : non ; NOR est le AND de deux NOT, et le OR de deux NOT est NAND"
   ],
   "nota": "Elle est donnée en Boole comme si c’était une loi, mais ce n’en est pas une : c’est l’erreur qui consiste à distribuer la négation sans changer l’opération. Une seule ligne de la table (ou un calcul avec 0 et 1) suffit à la réfuter. La vraie loi est celle de De Morgan, plus haut."
  }
 ],
 "silogismos": [
  {
   "code": "AAA-1",
   "S": "chien",
   "P": "vertébré",
   "M": "mammifère",
   "tipo": "si",
   "mayor": "« Tout mammifère est vertébré » : ombre la partie de « mammifère » qui reste hors de « vertébré » (ses deux zones : celle qui est dans « chien » et l’autre).",
   "menor": "« Tout chien est mammifère » : ombre la partie de « chien » qui reste hors de « mammifère » (deux zones).",
   "cruz": "Il n’y en a aucun : les deux prémisses sont universelles.",
   "concl": "« Tout chien est vertébré » demande que la partie de « chien » hors de « vertébré » soit vide. Ses deux zones sont déjà grisées, une par chaque prémisse : la conclusion est déjà dessinée. C’est Barbara."
  },
  {
   "code": "EAE-1",
   "S": "lézard",
   "P": "animal à poils",
   "M": "reptile",
   "tipo": "si",
   "mayor": "« Aucun reptile n’est animal à poils » : ombre l’endroit où se croisent « reptile » et « animal à poils » (deux zones).",
   "menor": "« Tout lézard est reptile » : ombre la partie de « lézard » hors de « reptile » (deux zones).",
   "cruz": "Il n’y en a aucun.",
   "concl": "« Aucun lézard n’est animal à poils » demande que le croisement de « lézard » et « animal à poils » soit vide. L’une de ses zones a été ombrée par la majeure et l’autre par la mineure : elle est déjà dessinée. C’est Celarent."
  },
  {
   "code": "AII-1",
   "S": "objet sur la table",
   "P": "conducteur",
   "M": "métal",
   "tipo": "si",
   "mayor": "« Tout métal est conducteur » : ombre la partie de « métal » hors de « conducteur » (deux zones). On le fait d’abord parce qu’elle est universelle.",
   "menor": "« Quelque objet sur la table est métal » : demande un ✕ dans le croisement de « objet sur la table » et « métal ».",
   "cruz": "Ce croisement a deux zones, mais celle qui reste hors de « conducteur » est déjà grisée : le ✕ va dans l’autre, à l’intérieur des trois cercles.",
   "concl": "« Quelque objet sur la table est conducteur » demande un ✕ dans le croisement de « objet sur la table » et « conducteur » : il y est déjà. C’est Darii."
  },
  {
   "code": "EIO-1",
   "S": "nombre de la liste",
   "P": "nombre pair",
   "M": "nombre premier supérieur à 2",
   "tipo": "si",
   "mayor": "« Aucun nombre premier supérieur à 2 n’est nombre pair » : ombre le croisement de « nombre premier supérieur à 2 » et « nombre pair » (deux zones).",
   "menor": "« Quelque nombre de la liste est nombre premier supérieur à 2 » : demande un ✕ dans le croisement de « nombre de la liste » et « nombre premier supérieur à 2 ».",
   "cruz": "De ses deux zones, celle qui est dans « nombre pair » est déjà grisée : le ✕ va dans l’autre, hors de « nombre pair ».",
   "concl": "« Quelque nombre de la liste n’est pas nombre pair » demande un ✕ dans « nombre de la liste » hors de « nombre pair » : il y est déjà. C’est Ferio."
  },
  {
   "code": "AAA-2",
   "S": "chien",
   "P": "chat",
   "M": "mammifère",
   "tipo": "no",
   "mayor": "« Tout chat est mammifère » : ombre la partie de « chat » hors de « mammifère ».",
   "menor": "« Tout chien est mammifère » : ombre la partie de « chien » hors de « mammifère ».",
   "cruz": "Il n’y en a aucun.",
   "concl": "« Tout chien est chat » demanderait que la partie de « chien » hors de « chat » soit vide. L’une de ses zones, celle qui est dans « mammifère », reste en blanc : la conclusion n’est pas dessinée. Il n’est pas valide : le moyen terme (« mammifère ») n’est pris dans toute son extension dans aucune prémisse."
  },
  {
   "code": "AII-2",
   "S": "scientifique",
   "P": "poète",
   "M": "rêveur",
   "tipo": "no",
   "mayor": "« Tout poète est rêveur » : ombre la partie de « poète » hors de « rêveur ».",
   "menor": "« Quelque scientifique est rêveur » : demande un ✕ dans le croisement de « scientifique » et « rêveur ».",
   "cruz": "Ce croisement a deux zones, l’une dans « poète » et l’autre dehors, et toutes deux restent en blanc : nous ne savons pas dans laquelle se trouve ce scientifique. Le ✕ va sur la ligne qui les sépare.",
   "concl": "« Quelque scientifique est poète » demanderait un ✕ nettement à l’intérieur du croisement de « scientifique » et « poète ». Le ✕ est sur la ligne : la conclusion n’est pas dessinée. Il n’est pas valide.",
   "euler": "Cas où Euler induit en erreur : il est facile de dessiner « scientifique » coupant « poète » à l’intérieur de « rêveur », et alors il semble que quelque scientifique est poète. Mais il existe un autre dessin, tout aussi fidèle aux prémisses, où les scientifiques rêveurs restent hors des poètes. Euler oblige à choisir un dessin ; Venn ne choisit pas : il met le ✕ sur la ligne."
  },
  {
   "code": "AAI-3",
   "S": "cheval",
   "P": "blanc",
   "M": "licorne",
   "tipo": "trad",
   "mayor": "« Toute licorne est blanche » : ombre la partie de « licorne » hors de « blanc ».",
   "menor": "« Toute licorne est cheval » : ombre la partie de « licorne » hors de « cheval ».",
   "cruz": "Il n’y en a aucun : les deux prémisses sont universelles.",
   "concl": "« Quelque cheval est blanc » demande une ✕, et il n’y en a aucune : la conclusion n’est pas dessinée, même si elle est vraie. C’est Darapti : Aristote le donnait pour valide parce qu’il supposait que les termes ne sont pas vides ; avec « licorne » cette supposition échoue. Avec la prémisse « il y a quelque licorne » (une ✕ dans l’unique zone de « licorne » qui reste en blanc), cela marche."
  },
  {
   "code": "OAO-3",
   "S": "penseur",
   "P": "auteur de livres",
   "M": "philosophe",
   "tipo": "si",
   "mayor": "« Quelque philosophe n’est pas auteur de livres » : demande un ✕ dans « philosophe » hors de « auteur de livres ». On attend la mineure, qui est universelle.",
   "menor": "« Tout philosophe est penseur » : ombre la partie de « philosophe » hors de « penseur » (deux zones).",
   "cruz": "La zone de « philosophe » hors de « auteur de livres » a deux parties ; celle qui reste hors de « penseur » est déjà grisée. Le ✕ va dans l’autre : un philosophe penseur qui n’a pas écrit de livres (Socrate, par exemple).",
   "concl": "« Quelque penseur n’est pas auteur de livres » demande un ✕ dans « penseur » hors de « auteur de livres » : il y est déjà. C’est Bocardo."
  }
 ],
 "falacias": [
  {
   "g": "g-fil-ad-hominem",
   "nom": "Ad hominem",
   "otros": "Attaque contre la personne ; empoisonner le puits ; le tu quoque en est une variante",
   "ej": "« Ne l'écoute pas : il dit ça parce qu'il est scientifique. »",
   "parar": "Séparer la personne de la raison : « Et qu'est-ce qui ne va pas dans ce qu'il dit ? »"
  },
  {
   "g": "g-fil-tu-quoque",
   "nom": "Tu quoque",
   "otros": "Toi aussi ; appel à l'hypocrisie",
   "ej": "« Tu me dis de ne pas fumer ? Mais toi, tu fumais à mon âge. »",
   "parar": "Que l'autre soit incohérent ne rend pas la critique fausse : « Peut-être, mais est-ce que j'ai raison ou non ? »"
  },
  {
   "g": "g-fil-hombre-de-paja",
   "nom": "Homme de paille",
   "otros": "Épouvantail ; caricature de l'argument",
   "ej": "« Il veut moins de devoirs : autrement dit, qu'on n'étudie jamais. »",
   "parar": "Répéter la thèse exacte : « Je n'ai pas dit ça ; j'ai dit… »"
  },
  {
   "g": "g-fil-apelacion-a-la-autoridad",
   "nom": "Appel à l'autorité",
   "otros": "Ad verecundiam ; fausse autorité",
   "ej": "« Ce shampooing est le meilleur : c'est un footballeur qui le dit. »",
   "parar": "Demander s'il est expert en la matière et si les experts sont d'accord."
  },
  {
   "g": "g-fil-apelacion-a-la-mayoria",
   "nom": "Appel à la majorité",
   "otros": "Ad populum ; effet d'entraînement",
   "ej": "« Si tout le monde le partage, ça doit être vrai. »",
   "parar": "Que beaucoup de gens y croient n'est pas une raison : « Pourquoi y croient-ils ? »"
  },
  {
   "g": "g-fil-apelacion-a-la-emocion",
   "nom": "L'appel à l'émotion",
   "otros": "Ad misericordiam (à la pitié) ; ad baculum (à la peur ou à la menace)",
   "ej": "« Si tu me mets une mauvaise note, mes parents me punissent tout l'été. »",
   "parar": "Reconnaître l'émotion et revenir à la question : « Et l'examen, il est bon ou non ? »"
  },
  {
   "g": "g-fil-apelacion-a-la-ignorancia",
   "nom": "Appel à l'ignorance",
   "otros": "Ad ignorantiam",
   "ej": "« Personne n'a prouvé que les fantômes n'existent pas ; donc ils existent. »",
   "parar": "La charge de la preuve revient à celui qui affirme : ne pas savoir que non, ce n'est pas savoir que oui."
  },
  {
   "g": "g-fil-falso-dilema",
   "nom": "Faux dilemme",
   "otros": "Fausse alternative ; tout blanc ou tout noir",
   "ej": "« Ou tu es avec moi, ou tu es contre moi. »",
   "parar": "Chercher la troisième option : « Et si ce n'était ni l'un ni l'autre ? »"
  },
  {
   "g": "g-fil-pendiente-resbaladiza",
   "nom": "Pente glissante",
   "otros": "Boule de neige",
   "ej": "« Si aujourd'hui je te laisse sortir jusqu'à onze heures, demain tu voudras rentrer à trois heures. »",
   "parar": "Demander que chaque maillon de la chaîne soit justifié."
  },
  {
   "g": "g-fil-generalizacion-apresurada",
   "nom": "Généralisation hâtive",
   "otros": "Échantillon insuffisant ou biaisé",
   "ej": "« Mon cousin est de Burgos et il est très sérieux : les gens de Burgos sont sérieux. »",
   "parar": "Demander combien de cas et s'ils sont représentatifs."
  },
  {
   "g": "g-fil-causa-falsa",
   "nom": "Fausse cause",
   "otros": "Post hoc, ergo propter hoc ; cum hoc (corrélation n'est pas causalité)",
   "ej": "« Depuis que je porte ce bracelet, je réussis mes examens : le bracelet me porte chance. »",
   "parar": "Chercher d'autres causes, le hasard ou une cause commune."
  },
  {
   "g": "g-fil-falsa-analogia",
   "nom": "Fausse analogie",
   "otros": "Analogie faible",
   "ej": "« Une école, c'est comme une entreprise : il faut renvoyer les élèves qui ne sont pas performants. »",
   "parar": "Chercher la différence qui compte entre les deux choses."
  },
  {
   "g": "g-fil-peticion-de-principio",
   "nom": "Pétition de principe",
   "otros": "Petitio principii ; raisonnement circulaire",
   "ej": "« Ce livre dit la vérité parce que c'est le livre lui-même qui le dit. »",
   "parar": "Signaler que la prémisse contient déjà la conclusion."
  },
  {
   "g": "g-fil-equivoco",
   "nom": "Équivoque",
   "otros": "Amphibologie (si le double sens vient de la phrase) ; homonymie",
   "ej": "« Une souris a des moustaches ; la souris de mon ordinateur est une souris ; donc elle a des moustaches. »",
   "parar": "Demander ce que signifie le mot dans chaque prémisse."
  },
  {
   "g": "g-fil-pregunta-compleja",
   "nom": "Question piège",
   "otros": "Question complexe ; question captieuse ; question orientée",
   "ej": "« Pourquoi continues-tu à mentir ? »",
   "parar": "Rejeter le présupposé avant de répondre : « Je n'accepte pas l'idée que je mens. »"
  },
  {
   "g": "g-fil-pista-falsa",
   "nom": "Diversion (hareng rouge)",
   "otros": "Red herring ; changer de sujet",
   "ej": "« J'ai cassé le vase ? Et qui a laissé la fenêtre ouverte ? »",
   "parar": "Revenir au sujet : « C'est une autre question ; nous parlions de… »"
  }
 ],
 "qf": [
  {
   "txt": "« N'écoute pas ce que dit le ministre sur l'économie : il a divorcé deux fois. »",
   "tipo": "g-fil-ad-hominem",
   "o": [
    "g-fil-ad-hominem",
    "g-fil-pista-falsa",
    "g-fil-apelacion-a-la-emocion"
   ],
   "por": "Il attaque la vie privée de celui qui parle, qui n'a rien à voir avec ce qu'il dit sur l'économie."
  },
  {
   "txt": "« Tu me grondes parce que je suis en retard ? Mais toi aussi, tu es arrivé en retard lundi ! »",
   "tipo": "g-fil-tu-quoque",
   "o": [
    "g-fil-tu-quoque",
    "g-fil-hombre-de-paja",
    "g-fil-causa-falsa"
   ],
   "por": "Que l'autre soit aussi arrivé en retard ne rend pas faux le fait qu'arriver en retard soit mal."
  },
  {
   "txt": "—Nous devrions recycler davantage au lycée. —Bien sûr, et interdire le plastique, les voitures et l'électricité.",
   "tipo": "g-fil-hombre-de-paja",
   "o": [
    "g-fil-pendiente-resbaladiza",
    "g-fil-hombre-de-paja",
    "g-fil-falso-dilema"
   ],
   "por": "Il exagère la proposition jusqu'au ridicule et attaque cette caricature. S'il disait « si nous recyclons, nous finirons par interdire les voitures », ce serait une pente glissante."
  },
  {
   "txt": "« Le dentiste de la série recommande ce yaourt pour le cœur. »",
   "tipo": "g-fil-apelacion-a-la-autoridad",
   "o": [
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-falsa-analogia"
   ],
   "por": "C'est un acteur, et en plus le cœur n'est pas sa spécialité, même dans la série : une autorité hors de son domaine."
  },
  {
   "txt": "« Dix millions de personnes ne peuvent pas se tromper : cette vidéo dit la vérité. »",
   "tipo": "g-fil-apelacion-a-la-mayoria",
   "o": [
    "g-fil-generalizacion-apresurada",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-apelacion-a-la-autoridad"
   ],
   "por": "Les vues mesurent la popularité, pas la vérité."
  },
  {
   "txt": "« Monsieur, faites-moi réussir, s’il vous plaît : j’ai eu une semaine horrible et je suis très triste. »",
   "tipo": "g-fil-apelacion-a-la-emocion",
   "o": [
    "g-fil-apelacion-a-la-emocion",
    "g-fil-pendiente-resbaladiza",
    "g-fil-falso-dilema"
   ],
   "por": "Il cherche la compassion au lieu de donner des raisons pour lesquelles la copie mérite la moyenne : le chagrin peut être réel, mais il ne dit rien de la valeur de la copie."
  },
  {
   "txt": "« Personne n'a démontré que ce complément alimentaire ne marche pas ; donc il marche. »",
   "tipo": "g-fil-apelacion-a-la-ignorancia",
   "o": [
    "g-fil-causa-falsa",
    "g-fil-apelacion-a-la-ignorancia",
    "g-fil-peticion-de-principio"
   ],
   "por": "Ne pas savoir qu'une chose est fausse ne prouve pas qu'elle est vraie : celui qui affirme qu'il marche doit le prouver."
  },
  {
   "txt": "« Ou tu réussis tout en juin, ou tu n'es pas fait pour les études. »",
   "tipo": "g-fil-falso-dilema",
   "o": [
    "g-fil-falso-dilema",
    "g-fil-generalizacion-apresurada",
    "g-fil-pregunta-compleja"
   ],
   "por": "Il y a bien d'autres possibilités : réussir en septembre, changer de méthode, avoir une mauvaise année."
  },
  {
   "txt": "« Si on laisse utiliser le portable pendant la récré, ensuite on l'utilisera en classe, puis pendant les examens, et à la fin personne n'apprendra plus rien. »",
   "tipo": "g-fil-pendiente-resbaladiza",
   "o": [
    "g-fil-hombre-de-paja",
    "g-fil-pendiente-resbaladiza",
    "g-fil-causa-falsa"
   ],
   "por": "Il enchaîne des conséquences de plus en plus graves sans justifier aucun des pas."
  },
  {
   "txt": "« J'ai rencontré deux Français et tous les deux étaient antipathiques : les Français sont antipathiques. »",
   "tipo": "g-fil-generalizacion-apresurada",
   "o": [
    "g-fil-generalizacion-apresurada",
    "g-fil-falsa-analogia",
    "g-fil-ad-hominem"
   ],
   "por": "Deux cas ne suffisent pas pour parler de millions de personnes."
  },
  {
   "txt": "« Depuis qu'on a installé le nouveau lampadaire, il y a moins de vols. La lumière fait peur aux voleurs. »",
   "tipo": "g-fil-causa-falsa",
   "o": [
    "g-fil-causa-falsa",
    "g-fil-apelacion-a-la-ignorancia",
    "no-es-falacia"
   ],
   "por": "C'est possible, mais qu'une chose vienne après une autre ne prouve pas qu'elle en soit la cause : peut-être y a-t-il eu plus de surveillance, ou c'est un hasard. Il faudrait comparer. Cas piège : la conclusion pourrait être vraie ; ce qui est fallacieux, c'est de la tenir pour prouvée."
  },
  {
   "txt": "« Les élèves sont comme les clients d'un magasin : ils ont toujours raison. »",
   "tipo": "g-fil-falsa-analogia",
   "o": [
    "g-fil-falsa-analogia",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-hombre-de-paja"
   ],
   "por": "Un élève n'achète pas un produit : il vient apprendre ce qu'il ne sait pas encore, et c'est là la différence qui compte."
  },
  {
   "txt": "« Dieu existe parce que la Bible le dit, et la Bible dit la vérité parce qu'elle est la parole de Dieu. »",
   "tipo": "g-fil-peticion-de-principio",
   "o": [
    "g-fil-peticion-de-principio",
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-ignorancia"
   ],
   "por": "L'argument utilise comme prémisse ce qu'il veut prouver. Attention : la logique juge ce raisonnement, non l'existence de Dieu, qui est une question ouverte en philosophie."
  },
  {
   "txt": "« La fin de la vie est la mort. La fin d'une chose est sa perfection. Donc la perfection de la vie est la mort. »",
   "tipo": "g-fil-equivoco",
   "o": [
    "g-fil-equivoco",
    "g-fil-pista-falsa",
    "g-fil-falso-dilema"
   ],
   "por": "« Fin » signifie « terme » dans la première prémisse et « but » dans la seconde : le raisonnement ne semble valide que parce qu'il utilise le même mot."
  },
  {
   "txt": "« Tu as arrêté de tricher aux examens ? »",
   "tipo": "g-fil-pregunta-compleja",
   "o": [
    "g-fil-pregunta-compleja",
    "g-fil-ad-hominem",
    "g-fil-falso-dilema"
   ],
   "por": "Que tu répondes « oui » ou « non », tu admets que tu trichais. Il faut rejeter le présupposé avant de répondre."
  },
  {
   "txt": "—Pourquoi tu n'as pas fait tes devoirs ? —Et pourquoi personne ne parle du chauffage qui marche si mal ?",
   "tipo": "g-fil-pista-falsa",
   "o": [
    "g-fil-tu-quoque",
    "g-fil-pista-falsa",
    "g-fil-apelacion-a-la-emocion"
   ],
   "por": "Il change de sujet pour ne pas répondre. Ce n'est pas un tu quoque, car il n'accuse pas l'autre de faire la même chose."
  },
  {
   "txt": "« La plupart des climatologues du monde s'accordent, après des décennies de données, à dire que la planète se réchauffe à cause de l'activité humaine. Il est raisonnable de l'accepter tant qu'il n'y a pas de preuves contraires. »",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-mayoria",
    "no-es-falacia"
   ],
   "por": "Cas piège : ce n'est pas un sophisme. S'appuyer sur l'accord des experts de leur propre domaine, qui repose sur des données et reste ouvert à la révision, est une raison légitime, même si ce n'est pas une démonstration."
  },
  {
   "txt": "« Ne te fie pas à ce que dit ce témoin sur l'accident : hier, il a reconnu avoir menti sur ce même accident. »",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-ad-hominem",
    "g-fil-tu-quoque",
    "no-es-falacia"
   ],
   "por": "Cas piège : ce n'est pas un ad hominem fallacieux. Qu'un témoin ait menti sur la chose même qu'il raconte est pertinent pour décider à quel point le croire. Ce qui est fallacieux, c'est d'attaquer la personne pour quelque chose qui n'a rien à voir avec ce qu'elle dit."
  },
  {
   "txt": "« Si tu ne paies pas l’inscription avant le 30, tu perds ta place ; si tu perds ta place, tu ne pourras pas suivre le cours cette année. Donc, si tu ne paies pas avant le 30, tu ne pourras pas suivre le cours cette année. »",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-pendiente-resbaladiza",
    "g-fil-apelacion-a-la-emocion",
    "no-es-falacia"
   ],
   "por": "Cas piège : ce n’est pas une pente glissante. Chaque étape est justifiée par une règle connue, et la conclusion découle par syllogisme hypothétique (p → q, q → r ; donc p → r ; niveau 4). La pente glissante enchaîne des étapes qui ne sont que possibles ou probables."
  },
  {
   "txt": "« Il faut croire à l’horoscope : des millions de personnes le lisent. »",
   "tipo": "g-fil-apelacion-a-la-mayoria",
   "o": [
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-generalizacion-apresurada",
    "no-es-falacia"
   ],
   "por": "Que beaucoup de gens le lisent ne le rend pas vrai : la popularité n’est pas une preuve. (S’il disait « il a deviné deux fois pour ma tante, donc il devine », ce serait une généralisation hâtive.)"
  }
 ]
};
