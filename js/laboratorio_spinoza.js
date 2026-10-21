// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/laboratorio_spinoza.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const LABSPZ = {
 "t": {
  "enDesarrollo": "En développement",
  "avisoDesarrollo": "<strong>Table en développement.</strong> Elle formalise la Partie I de l'<em>Éthique</em> de Spinoza telle qu'elle a été vérifiée dans l'assistant de preuve Isabelle/HOL. Elle peut changer et contenir des erreurs.",
  "lede": "D'abord, les définitions, en langage formel. Ensuite, choisis une proposition et les prémisses que tu admets. La table cherche un petit monde où toutes les prémisses sont vraies et où la proposition échoue ; si ce monde ne peut pas exister parce qu'Isabelle l'a déjà démontré avec ces prémisses, elle te donne la preuve.",
  "tDefiniciones": "D'abord, les définitions",
  "notaDefiniciones": "Comme dans l'<em>Éthique</em>, tout part de là. Les définitions 1, 4 et 6 servent aussi de prémisses (cases D1, D4 et D6) ; les autres fixent le sens des termes qui apparaissent dans les propositions.",
  "defsSpinoza": "Celles de Spinoza",
  "defsNuestras": "Les nôtres, pour pouvoir formaliser",
  "casilla": "case {x}",
  "tPregunta": "La question",
  "tResultado": "Le résultat",
  "proposicion": "Proposition",
  "grupo1": "Props. 1-15 et 24 : la substance et Dieu",
  "grupo2": "Props. 16-36 : Dieu comme cause et les modes",
  "defsUsa": "Définitions utilisées",
  "enLogica": "En logique",
  "seComprueba": "Vérifié : {x}",
  "necesitaCon": "Isabelle l'a démontrée avec : {x}.",
  "necesitaSin": "Isabelle l'a démontrée sans prémisses ajoutées.",
  "necesitaNo": "Isabelle ne la démontre avec rien de ce qui est disponible.",
  "usoIsabelle": "Isabelle l'a utilisée",
  "bIsabelle": "Celles qu'Isabelle a utilisées",
  "bTodas": "Toutes",
  "bNinguna": "Aucune",
  "bProbar": "Cela s'ensuit-il ?",
  "buscando": "Recherche d'un monde…",
  "selloOk": "Démontré dans Isabelle",
  "selloMal": "Contre-modèle",
  "selloDuda": "Sans contre-modèle",
  "seSigue": "Cela s'ensuit",
  "noSeSigue": "Cela ne s'ensuit pas",
  "sinMundo": "Je n'ai pas trouvé de monde où elle échoue",
  "teorema": "Théorème {t}, avec {x}.",
  "ningunaAnadida": "aucune prémisse ajoutée",
  "sobran": "Les autres que tu as cochées ne sont pas nécessaires.",
  "hayMundo": "Il existe un monde de {n} et {k} qui satisfait toutes les prémisses cochées et où la proposition échoue.",
  "unaCosa": "1 chose",
  "nCosas": "{n} choses",
  "unAtr": "1 attribut",
  "nAtrs": "{n} attributs",
  "usoTambien": "Isabelle a aussi utilisé : {x}.",
  "sin": "Sans {x} :",
  "fallaCon": "Elle échoue avec {x}.",
  "fallaTal": "Elle échoue telle quelle.",
  "diosNombre": "Sans la définition 6, « Dieu » n'est qu'un nom : rien ne l'oblige à être une substance.",
  "encontrado": "Trouvé en {ms} ms.",
  "busqueda": "Recherche : {ms} ms.",
  "sinMundoCompleto": "Il n'y en a aucun d'au plus {c} choses et {a} attributs.",
  "sinMundoCortado": "La recherche a été interrompue avant la fin.",
  "noDemuestra": "Cela ne le démontre pas : la proposition peut s'ensuivre par un autre chemin, ou bien il faut un monde plus grand.",
  "notaPie": "Les mondes sont cherchés avec au plus 4 choses et 2 attributs ; la chose appelée « Dieu » est toujours la première. « Démontré dans Isabelle » signifie qu'Isabelle/HOL a vérifié la preuve avec ces prémisses. Si aucun monde n'est trouvé et que les prémisses ne sont pas celles d'Isabelle, ce n'est pas démontré.",
  "dibujoAria": "Dessin du monde trouvé",
  "clSustancia": "substance",
  "clModo": "mode",
  "clNinguna": "ni substance ni mode",
  "atributos": "attributs {x}",
  "modoDe": "mode de {x}",
  "sigueDe": "découle de {x} (absolu)",
  "lyEn": "est dans",
  "lyConcibe": "est conçu par",
  "lyCausa": "cause",
  "lyParte": "est partie de",
  "lyLimita": "limite",
  "lyRealidad": "a plus de réalité que",
  "lyModif": "découle de la modification",
  "lyDoble": "double cercle : substance",
  "lyDiscont": "cercle en pointillés : ni substance ni mode",
  "hSerEn": "Être dans",
  "hConcebirse": "Être conçu par",
  "hCausas": "Causes",
  "hComun": "Quelque chose en commun",
  "hOtras": "Autres",
  "hModos": "Modes et attributs",
  "fEnSi": "{a} est en soi",
  "fEn": "{a} est dans {b}",
  "fConcibeSi": "{a} est conçu par soi",
  "fConcibe": "{a} est conçu par {b}",
  "fCausaSi": "{a} est cause de soi",
  "fCausa": "{a} cause {b}",
  "fComun": "{a} et {b}",
  "fParte": "{a} est partie de {b}",
  "fLimita": "{a} limite {b}",
  "fRealidad": "{a} a plus de réalité que {b}",
  "fAtrConcibe": "l'attribut {a} est conçu par {b}",
  "fIE": "l'essence de {a} enveloppe l'existence",
  "fCNE": "{a} peut être conçu comme non existant",
  "fExiste": "{a} existe",
  "fModoDe": "{a} est mode de l'attribut {b}",
  "fSigueAbs": "{a} découle de la nature absolue de {b}",
  "fSigueMod": "{a} découle de l'attribut modifié par {b}",
  "Dios": "Dieu",
  "mundo": "Monde",
  "mundoTiempo": "De pratique : temps, durée et création",
  "mundoSpinoza": "Spinoza, Éthique I",
  "ledeTiempo": "Un monde de pratique pour prendre le pli. Les choses ne se distinguent que par laquelle a commencé avant, laquelle dure plus longtemps et laquelle a créé laquelle. Choisis une proposition et les prémisses que tu admets : la table cherche un petit monde où toutes les prémisses sont vraies et où la proposition échoue ; si ce monde ne peut pas exister parce qu'Isabelle l'a déjà démontré avec ces prémisses, elle te donne la preuve.",
  "notaDefsTiempo": "Trois relations et une définition, rien de plus. Ce que les prémisses ne disent pas peut arriver : si tu ne coches pas que rien ne commence avant soi-même, cela peut se produire dans le monde cherché.",
  "defsTiempo": "Relations et définition",
  "grupoT": "Propositions de pratique",
  "selloNada": "Prémisses incompatibles",
  "incompatibles": "Les prémisses cochées ne peuvent pas être vraies ensemble",
  "incompatiblesTxt": "Il n'existe aucun monde d'au plus {c} choses où toutes soient vraies à la fois ; de telles prémisses, n'importe quoi s'ensuivrait. Retires-en une.",
  "hayMundoT": "Il existe un monde de {n} qui satisfait toutes les prémisses cochées et où la proposition échoue.",
  "sinMundoCompletoT": "Il n'y en a aucun d'au plus {c} choses.",
  "clIncreado": "incréé",
  "clCreado": "créé",
  "lyAntes": "a commencé avant",
  "lyDura": "dure plus longtemps que",
  "lyCrea": "a créé",
  "lyDobleT": "double cercle : incréé",
  "hTiempo": "Avant",
  "hDuracion": "Durée",
  "hCreacion": "Création",
  "fAntesSi": "{a} a commencé avant lui-même",
  "fAntes": "{a} a commencé avant {b}",
  "fDuraSi": "{a} dure plus longtemps que lui-même",
  "fDura": "{a} dure plus longtemps que {b}",
  "fCreaSi": "{a} s'est créé lui-même",
  "fCrea": "{a} a créé {b}",
  "notaPieT": "On cherche des mondes d'au plus 4 choses, appelées A, B, C et D. « Démontré dans Isabelle » signifie qu'Isabelle/HOL a vérifié la preuve avec ces prémisses. Si aucun monde où la proposition échoue n'est trouvé, cela ne prouve rien."
 },
 "grupos": [
  {
   "id": "ax",
   "nom": "Axiomes de Spinoza"
  },
  {
   "id": "def",
   "nom": "Définitions utilisées comme prémisses"
  },
  {
   "id": "h1",
   "nom": "Prémisses que Spinoza n'énonce pas"
  },
  {
   "id": "h2",
   "nom": "Prémisses ajoutées pour les props. 16-36"
  }
 ],
 "premisas": [
  {
   "id": "A1",
   "grupo": "ax",
   "que": "Tout ce qui est, est en soi ou en autre chose."
  },
  {
   "id": "A1_excluyente",
   "grupo": "ax",
   "que": "Et pas les deux à la fois (lecture exclusive)."
  },
  {
   "id": "A2",
   "grupo": "ax",
   "que": "Ce qui ne se conçoit pas par autre chose se conçoit par soi."
  },
  {
   "id": "A4",
   "grupo": "ax",
   "que": "L'effet se conçoit par sa cause."
  },
  {
   "id": "A5",
   "grupo": "ax",
   "que": "Les choses qui n'ont rien de commun ne peuvent se concevoir l'une par l'autre."
  },
  {
   "id": "A7",
   "grupo": "ax",
   "que": "Si une chose peut être conçue comme non existante, son essence n'enveloppe pas l'existence."
  },
  {
   "id": "D1",
   "grupo": "def",
   "que": "La cause de soi est ce dont l'essence enveloppe l'existence."
  },
  {
   "id": "D4",
   "grupo": "def",
   "que": "Seules les substances ont des attributs."
  },
  {
   "id": "D6",
   "grupo": "def",
   "que": "Dieu est une substance qui a tous les attributs."
  },
  {
   "id": "H_conversa_A5",
   "grupo": "h1",
   "que": "Si deux choses ont quelque chose en commun, l'une se conçoit par l'autre."
  },
  {
   "id": "H_quien_comparte_uno_comparte_todos",
   "grupo": "h1",
   "que": "Si deux substances partagent un attribut, elles les partagent tous (celle de Leibniz)."
  },
  {
   "id": "H_individuacion_por_atributos",
   "grupo": "h1",
   "que": "Deux substances ayant les mêmes attributs sont la même."
  },
  {
   "id": "H_ser_en_implica_concebirse",
   "grupo": "h1",
   "que": "Ce qui est dans une autre chose se conçoit par elle."
  },
  {
   "id": "H_solo_en_si_solo_por_si",
   "grupo": "h1",
   "que": "Ce qui n'est qu'en soi ne se conçoit que par ce en quoi il est."
  },
  {
   "id": "H_atributo_compartido_es_comun",
   "grupo": "h1",
   "que": "Partager un attribut, c'est avoir quelque chose en commun."
  },
  {
   "id": "H_todo_tiene_causa",
   "grupo": "h1",
   "que": "Tout a une cause, soit une autre chose, soit soi-même."
  },
  {
   "id": "H_realidad_es_atributos",
   "grupo": "h1",
   "que": "Avoir plus de réalité, c'est avoir plus d'attributs."
  },
  {
   "id": "H_puente_atributo_sustancia",
   "grupo": "h1",
   "que": "Si un attribut se conçoit par un autre, sa substance se conçoit par celle de l'autre."
  },
  {
   "id": "H_todo_por_sus_partes",
   "grupo": "h1",
   "que": "Le tout se conçoit par ses parties."
  },
  {
   "id": "H_sustancia_con_atributo",
   "grupo": "h1",
   "que": "Toute substance a au moins un attribut."
  },
  {
   "id": "H_modo_en_sustancia",
   "grupo": "h1",
   "que": "Ce en quoi est un mode est une substance."
  },
  {
   "id": "H_por_si_excluye_por_otro",
   "grupo": "h1",
   "que": "Ce qui se conçoit par autre chose ne se conçoit pas par soi."
  },
  {
   "id": "H_inherencia_es_causalidad",
   "grupo": "h2",
   "que": "Si une chose est dans une autre, cette autre est sa cause."
  },
  {
   "id": "H_modo_de_atributo_es_modo",
   "grupo": "h2",
   "que": "Ce qui est mode d'un attribut est un mode."
  },
  {
   "id": "H_todo_modo_de_algun_atributo",
   "grupo": "h2",
   "que": "Tout mode est mode de quelque attribut."
  },
  {
   "id": "H_limitar_es_determinar",
   "grupo": "h2",
   "que": "Ce qui limite une chose en est la cause."
  },
  {
   "id": "H_lo_que_limita_es_finito",
   "grupo": "h2",
   "que": "Ce qui limite une autre chose est à son tour fini."
  },
  {
   "id": "H_absoluto_solo_de_Dios",
   "grupo": "h2",
   "que": "Ce qui découle de la nature absolue d'un attribut en est un mode et n'a d'autre cause que Dieu."
  },
  {
   "id": "H_mediato_de_Dios_y_su_modificacion",
   "grupo": "h2",
   "que": "Ce qui découle d'un attribut modifié par y est causé par y, qui est un mode, et seulement par Dieu et par y."
  },
  {
   "id": "H_dos_maneras_de_seguirse",
   "grupo": "h2",
   "que": "Tout mode découle de Dieu, immédiatement ou médiatement."
  },
  {
   "id": "H_de_lo_finito_lo_finito",
   "grupo": "h2",
   "que": "Ce qui découle d'une modification finie est fini."
  }
 ],
 "defsSpinoza": [
  {
   "id": "D1",
   "origen": "Déf. 1 · cause de soi",
   "texto": "Par cause de soi, j'entends ce dont l'essence enveloppe l'existence."
  },
  {
   "id": "finita",
   "origen": "Déf. 2 · fini en son genre",
   "texto": "Cette chose est dite finie en son genre qui peut être limitée par une autre de même nature."
  },
  {
   "id": "finita_modo",
   "origen": "Déf. 2 · fini, pour les modes",
   "texto": "La même définition, pour les modes d'un attribut."
  },
  {
   "id": "sustancia",
   "origen": "Déf. 3 · substance",
   "texto": "Par substance, j'entends ce qui est en soi et est conçu par soi."
  },
  {
   "id": "D4",
   "origen": "Déf. 4 · attribut",
   "texto": "Par attribut, j'entends ce que l'entendement perçoit d'une substance comme constituant son essence."
  },
  {
   "id": "modo",
   "origen": "Déf. 5 · mode",
   "texto": "Par mode, j'entends les affections d'une substance, autrement dit ce qui est dans une autre chose, par le moyen de laquelle il est aussi conçu."
  },
  {
   "id": "afeccion",
   "origen": "Déf. 5 · affection",
   "texto": "L'affection d'une substance est ce qui est en elle et se conçoit par elle."
  },
  {
   "id": "D6",
   "origen": "Déf. 6 · Dieu",
   "texto": "Par Dieu, j'entends un être absolument infini, c'est-à-dire une substance consistant en une infinité d'attributs."
  },
  {
   "id": "libre",
   "origen": "Déf. 7 · libre",
   "texto": "Cette chose est dite libre qui existe par la seule nécessité de sa nature et est déterminée par soi seule à agir."
  },
  {
   "id": "eterno",
   "origen": "Déf. 8 · éternité",
   "texto": "Par éternité, j'entends l'existence elle-même, en tant qu'elle est conçue comme suivant nécessairement de la seule définition d'une chose éternelle."
  }
 ],
 "defsNuestras": [
  {
   "id": "anterior_por_naturaleza",
   "origen": "Prop. 1 · antérieur par nature",
   "texto": "y est conçu par x, mais x ne l'est pas par y."
  },
  {
   "id": "divisible",
   "origen": "Prop. 12 · divisible",
   "texto": "Avoir au moins une partie distincte de soi-même."
  },
  {
   "id": "causa_inmanente",
   "origen": "Prop. 18 · cause immanente",
   "texto": "La cause dans laquelle est son effet."
  },
  {
   "id": "causa_transitiva",
   "origen": "Prop. 18 · cause transitive",
   "texto": "La cause dans laquelle n'est pas son effet."
  },
  {
   "id": "atributo_eterno",
   "origen": "Prop. 19 · attribut éternel",
   "texto": "L'attribut dont les substances sont éternelles."
  },
  {
   "id": "eterno_por_atributo",
   "origen": "Prop. 21 · éternel par l'attribut",
   "texto": "Ce qui découle d'un attribut, immédiatement ou médiatement."
  },
  {
   "id": "contingente",
   "origen": "Prop. 33, sc. 1 · contingent",
   "texto": "Ce qui n'est nécessaire ni par son essence ni par sa cause."
  }
 ],
 "props": [
  {
   "id": "TB",
   "parte": 1,
   "nombre": "Prop. 4 (dém.) : tout est substance ou mode",
   "cita": "Tout ce qui est, est ou en soi ou en autre chose ; c'est-à-dire que hors de l'entendement il n'y a rien que des substances et leurs affections.",
   "pregunta": "Toute chose est <b>substance ou mode</b>.",
   "prueba": "Si x est dans une autre chose, il se conçoit par elle, et c'est un mode. Sinon, il est en soi (axiome 1), il se conçoit par soi, et ce qui se conçoit par quelque chose est en cela, donc seulement par soi : c'est une substance.",
   "leccion": {
    "H_solo_en_si_solo_por_si": "Une chose qui est en soi mais se conçoit par une autre : ni substance ni mode."
   }
  },
  {
   "id": "P1",
   "parte": 1,
   "nombre": "Prop. 1 : la substance est antérieure à ses affections",
   "cita": "La substance est antérieure par nature à ses affections.",
   "pregunta": "Si m est une affection de la substance s, m se conçoit par s et <b>s ne se conçoit pas par m</b>.",
   "prueba": "L'affection se conçoit par la substance (déf. 5), et la substance ne se conçoit par aucune autre chose (déf. 3). Cela découle des seules définitions."
  },
  {
   "id": "P2",
   "parte": 1,
   "nombre": "Prop. 2 : deux substances n'ont rien de commun",
   "cita": "Deux substances qui ont des attributs différents n'ont rien de commun entre elles.",
   "pregunta": "Deux substances distinctes <b>n'ont rien de commun</b>.",
   "prueba": "Si elles avaient quelque chose en commun, l'une se concevrait par l'autre ; mais chaque substance ne se conçoit que par soi.",
   "leccion": {
    "H_conversa_A5": "Deux substances, chacune conçue seulement par soi, qui ont quelque chose en commun. L'axiome 5 va dans l'autre sens."
   }
  },
  {
   "id": "P3",
   "parte": 1,
   "nombre": "Prop. 3 : sans rien de commun, pas de cause",
   "cita": "Si deux choses n'ont rien de commun entre elles, l'une ne peut pas être cause de l'autre.",
   "pregunta": "Si x et y n'ont rien de commun, <b>aucune ne cause l'autre</b>.",
   "prueba": "L'effet se conçoit par sa cause (axiome 4), et les choses qui n'ont rien de commun ne peuvent se concevoir l'une par l'autre (axiome 5)."
  },
  {
   "id": "P5",
   "parte": 1,
   "nombre": "Prop. 5 : pas deux substances de même attribut",
   "cita": "Il ne peut y avoir dans la nature deux ou plusieurs substances de même nature ou attribut.",
   "pregunta": "Deux substances qui partagent un attribut <b>sont la même</b>.",
   "prueba": "Si elles partagent un attribut, elles les partagent tous ; et deux substances ayant les mêmes attributs sont la même.",
   "pruebaAlt": "Partager un attribut, c'est avoir quelque chose en commun, et deux substances distinctes n'ont rien de commun (prop. 2).",
   "leccion": {
    "H_quien_comparte_uno_comparte_todos": "Le contre-modèle de Leibniz : une substance à deux attributs et une autre à un seul, qui partagent cet attribut."
   }
  },
  {
   "id": "P6",
   "parte": 1,
   "nombre": "Prop. 6 (corollaire) : rien ne produit une substance",
   "cita": "Une substance ne peut pas être produite par une autre substance. Corollaire : elle ne peut être produite par aucune autre chose.",
   "pregunta": "Rien de distinct d'une substance <b>ne la cause</b>.",
   "prueba": "Si y causait s, s se concevrait par y (axiome 4) ; mais une substance ne se conçoit que par soi. C'est la seule preuve de la série sans prémisses ajoutées."
  },
  {
   "id": "P7",
   "parte": 1,
   "nombre": "Prop. 7 : il appartient à la substance d'exister",
   "cita": "Il appartient à la nature d'une substance d'exister.",
   "pregunta": "L'essence de toute substance <b>enveloppe l'existence</b>.",
   "prueba": "Tout a une cause ; rien de distinct ne la cause (prop. 6, cor.) ; elle est donc cause de soi, et son essence enveloppe l'existence (déf. 1).",
   "leccion": {
    "H_todo_tiene_causa": "Une substance sans aucune cause, dont l'essence n'enveloppe pas l'existence."
   }
  },
  {
   "id": "P8",
   "parte": 1,
   "nombre": "Prop. 8 : toute substance est infinie",
   "cita": "Toute substance est nécessairement infinie.",
   "pregunta": "Aucune substance n'est <b>finie</b> (limitée par une autre de même attribut).",
   "prueba": "Ce qui la limiterait partagerait avec elle un attribut et serait une substance (déf. 4) ; par la prop. 5, ce serait la même."
  },
  {
   "id": "P9",
   "parte": 1,
   "nombre": "Prop. 9 : plus de réalité, plus d'attributs",
   "cita": "Plus une chose a de réalité ou d'être, plus elle a d'attributs.",
   "pregunta": "Si x a plus de réalité que y, <b>les attributs de y sont moins nombreux que ceux de x</b>.",
   "prueba": "C'est la prémisse elle-même : la déf. 4 ne parle pas de degrés de réalité."
  },
  {
   "id": "P10d",
   "parte": 1,
   "nombre": "Prop. 10 (version faible)",
   "cita": "Chaque attribut d'une substance doit être conçu par soi.",
   "pregunta": "Un attribut ne peut être conçu que par des attributs <b>de sa propre substance</b>.",
   "prueba": "Si l'attribut de s est conçu par celui de t, s est conçue par t ; et une substance ne se conçoit que par soi."
  },
  {
   "id": "P10f",
   "parte": 1,
   "nombre": "Prop. 10 (version forte)",
   "cita": "Chaque attribut d'une substance doit être conçu par soi.",
   "pregunta": "Aucun attribut n'est conçu <b>par un autre, distinct de lui</b>, même s'ils sont de la même substance.",
   "nota": "Isabelle ne la démontre pas non plus : avec ce qu'on a, on peut construire un Dieu dont un attribut est conçu par un autre. De cette version dépend que l'esprit et le corps ne se causent pas."
  },
  {
   "id": "P11",
   "parte": 1,
   "nombre": "Prop. 11 : Dieu ne peut pas être conçu comme non existant",
   "cita": "Dieu, ou une substance consistant en une infinité d'attributs, existe nécessairement.",
   "pregunta": "Dieu <b>ne peut pas être conçu comme non existant</b>.",
   "prueba": "S'il le pouvait, son essence n'envelopperait pas l'existence (axiome 7) ; mais il est substance (déf. 6) et elle l'enveloppe (prop. 7)."
  },
  {
   "id": "P11e",
   "parte": 1,
   "nombre": "Prop. 11 : Dieu existe hors du concept",
   "cita": "Dieu, ou une substance consistant en une infinité d'attributs, existe nécessairement.",
   "pregunta": "Dieu <b>existe</b> hors du concept.",
   "nota": "Isabelle ne la démontre pas non plus : avec ce que Spinoza donne, on prouve que Dieu ne peut pas être conçu comme non existant, non qu'il existe. C'est le pas que Kant a discuté."
  },
  {
   "id": "P12",
   "parte": 1,
   "nombre": "Prop. 12 : la substance n'est pas divisible",
   "cita": "On ne peut concevoir véritablement aucun attribut de la substance d'où il suive que la substance puisse être divisée.",
   "pregunta": "Aucune substance n'a de <b>parties</b> distinctes d'elle.",
   "prueba": "Le tout se conçoit par ses parties ; une substance ne se conçoit que par soi."
  },
  {
   "id": "P13",
   "parte": 1,
   "nombre": "Prop. 13 : Dieu est indivisible",
   "cita": "La substance absolument infinie est indivisible.",
   "pregunta": "Dieu <b>n'a pas de parties</b>.",
   "prueba": "C'est la prop. 12 appliquée à Dieu, qui est une substance."
  },
  {
   "id": "P14",
   "parte": 1,
   "nombre": "Prop. 14 : hors de Dieu, aucune substance",
   "cita": "Hors de Dieu, aucune substance ne peut être donnée ni conçue.",
   "pregunta": "Toute substance <b>est Dieu</b>.",
   "prueba": "Toute substance a un attribut ; Dieu les a tous ; par la prop. 5, ce sont la même.",
   "leccion": {
    "H_sustancia_con_atributo": "À côté de Dieu, une substance sans aucun attribut."
   }
  },
  {
   "id": "P15",
   "parte": 1,
   "nombre": "Prop. 15 : tout est en Dieu",
   "cita": "Tout ce qui est, est en Dieu, et sans Dieu rien ne peut être ni être conçu.",
   "pregunta": "Toute chose <b>est en Dieu et se conçoit par Dieu</b>.",
   "prueba": "Tout est substance ou mode. La substance est Dieu (prop. 14). Le mode est dans quelque chose qui est substance, donc en Dieu. Et ce qui est dans quelque chose se conçoit par cela.",
   "leccion": {
    "H_modo_en_sustancia": "Deux modes, chacun dans l'autre, aucun en Dieu : la déf. 5 dit seulement « dans une autre chose »."
   }
  },
  {
   "id": "P24",
   "parte": 1,
   "nombre": "Prop. 24 : aucun mode n'est cause de soi",
   "cita": "L'essence des choses produites par Dieu n'enveloppe pas l'existence.",
   "pregunta": "Aucun mode n'est cause de soi, et son essence <b>n'enveloppe pas l'existence</b>.",
   "prueba": "Un mode se conçoit par autre chose, donc pas par soi ; s'il était cause de soi, il se concevrait par soi (axiome 4).",
   "leccion": {
    "H_por_si_excluye_por_otro": "Un mode qui se conçoit par soi et par un autre, et qui est cause de soi."
   }
  },
  {
   "id": "P16c1",
   "parte": 2,
   "nombre": "Prop. 16, cor. 1 : Dieu est cause de tout",
   "cita": "De la nécessité de la nature divine doivent suivre une infinité de choses en une infinité de modes. Corollaire 1 : Dieu est cause efficiente de toutes les choses qui peuvent tomber sous un entendement infini.",
   "pregunta": "Dieu <b>cause toutes les choses</b>, y compris lui-même.",
   "prueba": "Dieu n'est causé que par Dieu (prop. 6, cor.), et quelque chose le cause. Tout le reste est en Dieu (prop. 15), et ce qui est dans une autre chose est causé par cette chose.",
   "leccion": {
    "H_inherencia_es_causalidad": "Tout est en Dieu, mais Dieu ne cause rien hors de lui : les modes se causent entre eux."
   }
  },
  {
   "id": "P17",
   "parte": 2,
   "nombre": "Prop. 17 : Dieu agit sans être contraint",
   "cita": "Dieu agit par les seules lois de sa nature et sans être contraint par personne.",
   "pregunta": "Rien de distinct de Dieu <b>ne cause Dieu</b>.",
   "prueba": "C'est le corollaire de la prop. 6 appliqué à Dieu, qui est une substance."
  },
  {
   "id": "P17c2",
   "parte": 2,
   "nombre": "Prop. 17, cor. 2 : seul Dieu est libre",
   "cita": "Seul Dieu est cause libre.",
   "pregunta": "Une chose est libre (son essence enveloppe l'existence et rien de distinct ne la cause) <b>si et seulement si c'est Dieu</b>.",
   "prueba": "Ce qui est libre a une essence qui enveloppe l'existence ; par la prop. 24, ce n'est pas un mode ; c'est une substance, donc Dieu. Et Dieu est libre par les props. 7 et 17."
  },
  {
   "id": "P18",
   "parte": 2,
   "nombre": "Prop. 18 : Dieu est cause immanente",
   "cita": "Dieu est cause immanente, mais non transitive, de toutes choses.",
   "pregunta": "Dieu cause tout et tout <b>est en Dieu</b> : rien de ce que Dieu cause ne reste hors de lui.",
   "prueba": "Dieu cause tout (prop. 16, cor. 1) et tout est en Dieu (prop. 15)."
  },
  {
   "id": "P19",
   "parte": 2,
   "nombre": "Prop. 19 : Dieu et ses attributs sont éternels",
   "cita": "Dieu, ou tous les attributs de Dieu, sont éternels.",
   "pregunta": "L'essence de Dieu enveloppe l'existence, et aussi celle de toute substance qui a un attribut quelconque.",
   "prueba": "Toute substance est éternelle (prop. 7), Dieu est substance, et ce qui a un attribut est substance (déf. 4)."
  },
  {
   "id": "P21",
   "parte": 2,
   "nombre": "Prop. 21 : ce qui découle de l'attribut est infini",
   "cita": "Tout ce qui suit de la nature absolue d'un attribut de Dieu a dû exister toujours et être infini.",
   "pregunta": "Ce qui découle de la nature absolue d'un attribut <b>n'est pas fini</b>.",
   "prueba": "Ce qui le limiterait en serait la cause ; mais seul Dieu le cause, et Dieu n'est pas un mode.",
   "leccion": {
    "H_limitar_es_determinar": "Un mode qui découle de l'attribut absolu et qui est pourtant fini."
   }
  },
  {
   "id": "P21e",
   "parte": 2,
   "nombre": "Prop. 21 : la double éternité",
   "cita": "Tout ce qui suit de la nature absolue d'un attribut de Dieu a dû exister toujours et être infini, c'est-à-dire est éternel et infini par cet attribut même.",
   "pregunta": "Ce qui découle de l'attribut absolu est infini, <b>éternel par l'attribut et non par son essence</b>.",
   "prueba": "Il est infini par la prop. 21 ; éternel par l'attribut parce qu'il en découle ; et, comme c'est un mode, son essence n'enveloppe pas l'existence (prop. 24)."
  },
  {
   "id": "P22",
   "parte": 2,
   "nombre": "Prop. 22 : les modes infinis médiats",
   "cita": "Ce qui suit d'un attribut de Dieu en tant qu'il est modifié par une modification qui existe nécessairement et est infinie, doit aussi exister nécessairement et être infini.",
   "pregunta": "Ce qui découle d'une modification infinie <b>n'est pas fini</b>.",
   "prueba": "Ce qui le limiterait en serait la cause, donc Dieu ou la modification ; Dieu n'est pas un mode, et la modification serait finie, parce que ce qui limite est fini."
  },
  {
   "id": "P23",
   "parte": 2,
   "nombre": "Prop. 23 : d'où viennent les modes infinis",
   "cita": "Tout mode qui existe nécessairement et est infini a dû suivre ou de la nature absolue d'un attribut, ou d'un attribut modifié par une modification infinie.",
   "pregunta": "Un mode infini découle de l'attribut <b>directement ou par l'intermédiaire d'un mode infini</b>.",
   "prueba": "Tout mode découle de l'une des deux manières, et du fini ne sort que du fini.",
   "leccion": {
    "H_de_lo_finito_lo_finito": "Un mode infini qui découle d'un mode fini."
   }
  },
  {
   "id": "P26",
   "parte": 2,
   "nombre": "Prop. 26 : ce qui est déterminé, Dieu le détermine",
   "cita": "Une chose qui a été déterminée à faire quelque chose a été nécessairement ainsi déterminée par Dieu ; et celle qui n'a pas été déterminée par Dieu ne peut se déterminer elle-même à agir.",
   "pregunta": "Si quelque chose cause x, <b>Dieu cause x</b> ; et ce que Dieu ne cause pas ne se cause pas lui-même.",
   "prueba": "Immédiate : Dieu cause tout (prop. 16, cor. 1)."
  },
  {
   "id": "P28",
   "parte": 2,
   "nombre": "Prop. 28 : chaque chose finie est causée par une autre chose finie",
   "cita": "Toute chose singulière, c'est-à-dire toute chose finie, ne peut exister ni être déterminée à agir si elle n'y est déterminée par une autre cause qui est elle aussi finie ; et celle-ci, par une autre, et ainsi à l'infini.",
   "pregunta": "Tout mode fini est <b>causé par un autre mode fini</b>, distinct de lui.",
   "prueba": "Le mode fini ne découle ni de l'attribut absolu (prop. 21) ni d'une modification infinie (prop. 22) ; il découle donc d'une modification finie, qui en est la cause et en est distincte (prop. 24). Dans un monde fini, la chaîne se referme en cercle.",
   "pruebaAlt": "Ce qui limite le mode fini en est la cause, est fini et est un mode. Avec ces prémisses, la prop. 28 est presque contenue dans la définition du fini.",
   "teoremaAlt": "P28 (chemin court de Sledgehammer)"
  },
  {
   "id": "P29",
   "parte": 2,
   "nombre": "Prop. 29 : rien n'est contingent",
   "cita": "Dans la nature il n'y a rien de contingent, mais toutes choses sont déterminées par la nécessité de la nature divine à exister et à produire quelque effet d'une certaine manière.",
   "pregunta": "Rien n'est contingent : tout est nécessaire <b>par son essence ou par sa cause</b>.",
   "prueba": "Avec la définition du contingent du scolie 1 de la prop. 33, c'est exactement le principe que tout a une cause."
  },
  {
   "id": "P32",
   "parte": 2,
   "nombre": "Prop. 32 : la volonté n'est pas cause libre",
   "cita": "La volonté ne peut pas être appelée cause libre, mais seulement nécessaire.",
   "pregunta": "Aucun mode, et la volonté est un mode de la pensée, <b>n'est libre</b>.",
   "prueba": "Ce qui est libre a une essence qui enveloppe l'existence, et celle d'un mode ne l'enveloppe pas (prop. 24). La preuve a été trouvée par Sledgehammer, le chercheur automatique d'Isabelle, et n'utilise pas ce que Spinoza cite."
  },
  {
   "id": "P36",
   "parte": 2,
   "nombre": "Prop. 36 : toute chose produit quelque effet",
   "cita": "Rien n'existe de la nature de quoi ne suive quelque effet.",
   "pregunta": "Toute chose <b>cause quelque chose</b>.",
   "nota": "Elle ne découle de rien de ce qui précède : Spinoza l'appuie sur la prop. 34 (la puissance de Dieu est son essence), sans la formaliser. Si on l'ajoute, dans un monde fini elle oblige à des cercles causaux."
  }
 ],
 "repaso": {
  "titulo": "Rappel : choses, propriétés et relations",
  "intro": "Tout ce que la table considère comme connu, ici à côté. Les étiquettes des prémisses ouvrent l’entrée qui convient.",
  "bloques": [
   {
    "id": "cosas",
    "titulo": "Choses",
    "txt": "Ce sont les cercles du dessin. Les lettres <b>x</b>, <b>y</b>, <b>z</b> sont des variables : elles valent pour n’importe quelle chose, comme le « quelqu’un » de « si quelqu’un arrive en retard, il rate le train ». A, B, C et D sont des noms de choses concrètes.",
    "ej": "Dans un monde de trois choses, « pour tout x » veut dire : pour A, pour B et pour C."
   },
   {
    "id": "propiedad",
    "titulo": "Propriétés : P(x)",
    "txt": "Une propriété, <b>une seule chose</b> l’a ou ne l’a pas. On l’écrit avec son nom et la chose entre parenthèses.",
    "ej": "increado(A) : A est incréé. Dans le dessin, le double cercle."
   },
   {
    "id": "relacion",
    "titulo": "Relations : R(x, y)",
    "txt": "Une relation se donne <b>entre deux choses</b>, et l’ordre compte : Crea(A, B) dit que A a créé B, et non que B a créé A. Dans le dessin, c’est une flèche qui va de la première à la seconde.",
    "ej": "Antes(A, B) : A a commencé avant B. La flèche part de A et arrive à B."
   },
   {
    "id": "cuantificadores",
    "titulo": "Tous et quelque",
    "txt": "<b>∀x</b> se lit « pour toute chose x » : ce qui suit vaut pour chacune. <b>∃x</b> se lit « il y a une chose x » : cela vaut au moins pour une. Pour réfuter un « pour tout », un seul cas suffit ; pour réfuter un « il y a », il faut les regarder tous.",
    "ej": "∀x. ¬Crea(x, x) : aucune chose ne se crée elle-même. ∃x. increado(x) : au moins une chose est incréée."
   },
   {
    "id": "formas",
    "titulo": "Les formes de toujours",
    "txt": "Les phrases de la logique de tous les jours ont une forme fixe :",
    "lista": [
     "« Tout P est Q » : ∀x. P(x) → Q(x). Attention ! Avec « → », pas avec « ∧ ».",
     "« Quelque P est Q » : ∃x. P(x) ∧ Q(x). Ici, si, avec « ∧ ».",
     "« Aucun P n’est Q » : ∀x. P(x) → ¬Q(x).",
     "« Quelque P n’est pas Q » : ∃x. P(x) ∧ ¬Q(x).",
     "« Si… alors » : A → B n’est faux que lorsque A est vrai et B faux."
    ]
   },
   {
    "id": "irrefl",
    "titulo": "Irréflexive",
    "txt": "",
    "ej": "Rien n’a commencé avant soi-même : aucune flèche de Antes ne revient à son cercle."
   },
   {
    "id": "refl",
    "titulo": "Réflexive",
    "txt": "",
    "ej": "« Mesure autant que » : chaque chose mesure autant qu’elle-même."
   },
   {
    "id": "sim",
    "titulo": "Symétrique",
    "txt": "",
    "ej": "« Est contemporain de » : si A l’est de B, B l’est de A."
   },
   {
    "id": "asim",
    "titulo": "Asymétrique",
    "txt": "",
    "ej": "Créer, si celui qui crée commence avant : si A a créé B, B n’a pas créé A (proposition 2)."
   },
   {
    "id": "trans",
    "titulo": "Transitive",
    "txt": "",
    "ej": "Si A a commencé avant B et B avant C, A a commencé avant C."
   },
   {
    "id": "inclusion",
    "titulo": "Une relation à l’intérieur d’une autre",
    "txt": "Toute flèche d’une relation est aussi une flèche de l’autre : ∀x y. R(x, y) → S(x, y). La réciproque n’est pas nécessaire.",
    "ej": "Crea à l’intérieur de Antes : si A a créé B, A a commencé avant B. Mais A peut commencer avant B sans l’avoir créé."
   },
   {
    "id": "unico",
    "titulo": "Au plus une flèche arrive",
    "txt": "À chaque chose arrive au plus une flèche de la relation : ∀x y z. R(x, z) ∧ R(y, z) → x = y.",
    "ej": "Rien n’a deux créateurs : si A et B ont créé C, A et B sont la même chose."
   },
   {
    "id": "serie",
    "titulo": "À tout arrive une flèche",
    "txt": "Chaque chose reçoit au moins une flèche : ∀x. ∃y. R(y, x).",
    "ej": "Tout a été créé par quelque chose. Dans un monde fini, avec « Antes » irréflexive et transitive, c’est impossible (proposition 6)."
   }
  ],
  "tSimbolos": "Les symboles",
  "bPracticar": "S’exercer aux propriétés des relations dans la table « Relations »",
  "tLectura": "Cela se lit ainsi",
  "tPasos": "Pas à pas",
  "pHip": "supposition",
  "pFin": "conclusion",
  "conCosas": "Avec {x}, la proposition dit",
  "falsoAqui": "Dans ce monde, c’est faux : vérifie-le sur le dessin.",
  "tForma": "Forme",
  "tFormula": "En logique"
 },
 "lectura": {
  "paraToda": "pour toute chose {v}",
  "paraTodas": "pour toutes les choses {v}",
  "paraTodo": "pour tout attribut {v}",
  "paraTodos": "pour tous les attributs {v}",
  "hayUna": "il y a une chose {v} telle que",
  "hayVarias": "il y a des choses {v} telles que",
  "hayAtr": "il y a un attribut {v} tel que",
  "hayAtrs": "il y a des attributs {v} tels que",
  "hayMixto": "il y a une chose {c} et un attribut {a} tels que",
  "noHay": "il n’y a aucune chose {v} telle que",
  "noHayAtr": "il n’y a aucun attribut {v} tel que",
  "trasTodo": "{a} : {b}",
  "conY": "{a} et {b}",
  "conO": "{a} ou {b}",
  "si": "si {a}, alors {b}",
  "sii": "{a} si et seulement si {b}",
  "noEs": "il n’est pas vrai que {a}",
  "igual": "{1} est la même chose que {2}",
  "distinto": "{1} est distinct de {2}",
  "define": "{a} veut dire : {b}",
  "Dios": "Dieu",
  "rel": {
   "Antes": [
    "{1} a commencé avant {2}",
    "{1} n’a pas commencé avant {2}"
   ],
   "DuraMas": [
    "{1} dure plus longtemps que {2}",
    "{1} ne dure pas plus longtemps que {2}"
   ],
   "Crea": [
    "{1} a créé {2}",
    "{1} n’a pas créé {2}"
   ],
   "increado": [
    "{1} est incréé",
    "{1} n’est pas incréé"
   ],
   "En": [
    "{1} est en {2}",
    "{1} n’est pas en {2}"
   ],
   "SeConcibePor": [
    "{1} se conçoit par {2}",
    "{1} ne se conçoit pas par {2}"
   ],
   "Causa": [
    "{1} est cause de {2}",
    "{1} n’est pas cause de {2}"
   ],
   "AlgoEnComun": [
    "{1} et {2} ont quelque chose en commun",
    "{1} et {2} n’ont rien en commun"
   ],
   "EsParteDe": [
    "{1} est une partie de {2}",
    "{1} n’est pas une partie de {2}"
   ],
   "Limita": [
    "{1} limite {2}",
    "{1} ne limite pas {2}"
   ],
   "MasRealidad": [
    "{1} a plus de réalité que {2}",
    "{1} n’a pas plus de réalité que {2}"
   ],
   "TieneAtributo": [
    "{1} a l’attribut {2}",
    "{1} n’a pas l’attribut {2}"
   ],
   "AtributoSeConcibePor": [
    "l’attribut {1} se conçoit par l’attribut {2}",
    "l’attribut {1} ne se conçoit pas par l’attribut {2}"
   ],
   "EsenciaImplicaExistencia": [
    "l’essence de {1} implique son existence",
    "l’essence de {1} n’implique pas son existence"
   ],
   "ConcebibleComoNoExistente": [
    "{1} peut se concevoir comme non existant",
    "{1} ne peut pas se concevoir comme non existant"
   ],
   "Existe": [
    "{1} existe",
    "{1} n’existe pas"
   ],
   "ModoDeAtributo": [
    "{1} est un mode de l’attribut {2}",
    "{1} n’est pas un mode de l’attribut {2}"
   ],
   "SigueDeAtributoAbsoluto": [
    "{1} découle de la nature absolue de l’attribut {2}",
    "{1} ne découle pas de la nature absolue de l’attribut {2}"
   ],
   "SigueDeModificacion": [
    "{1} découle de l’attribut modifié par {2}",
    "{1} ne découle pas de l’attribut modifié par {2}"
   ],
   "sustancia": [
    "{1} est une substance",
    "{1} n’est pas une substance"
   ],
   "modo": [
    "{1} est un mode",
    "{1} n’est pas un mode"
   ],
   "afeccion": [
    "{1} est une affection de {2}",
    "{1} n’est pas une affection de {2}"
   ],
   "anterior_por_naturaleza": [
    "{1} est antérieur par nature à {2}",
    "{1} n’est pas antérieur par nature à {2}"
   ],
   "finita": [
    "{1} est fini en son genre",
    "{1} n’est pas fini en son genre"
   ],
   "divisible": [
    "{1} est divisible",
    "{1} n’est pas divisible"
   ],
   "libre": [
    "{1} est libre",
    "{1} n’est pas libre"
   ],
   "eterno": [
    "{1} est éternel",
    "{1} n’est pas éternel"
   ],
   "atributo_eterno": [
    "l’attribut {1} est éternel",
    "l’attribut {1} n’est pas éternel"
   ],
   "causa_inmanente": [
    "{1} est cause immanente de {2}",
    "{1} n’est pas cause immanente de {2}"
   ],
   "causa_transitiva": [
    "{1} est cause transitive de {2}",
    "{1} n’est pas cause transitive de {2}"
   ],
   "contingente": [
    "{1} est contingent",
    "{1} n’est pas contingent"
   ],
   "finita_modo": [
    "{1} est un mode fini",
    "{1} n’est pas un mode fini"
   ],
   "eterno_por_atributo": [
    "{1} est éternel par son attribut",
    "{1} n’est pas éternel par son attribut"
   ]
  }
 },
 "guia": {
  "titulo": "Ce que tu as devant toi et comment t'en servir",
  "secciones": [
   {
    "titulo": "L'idée",
    "parrafos": [
     "Un raisonnement est valide quand la conclusion <b>découle</b> des prémisses : si les prémisses sont vraies, la conclusion ne peut pas être fausse. Cette table le met à l'épreuve avec une question très précise : existe-t-il un monde où toutes les prémisses que tu acceptes sont satisfaites et où, malgré tout, la proposition échoue ?",
     "S'il en existe un, la proposition ne découle pas de ces prémisses, aussi raisonnable qu'elle paraisse. S'il ne peut pas en exister, elle en découle. Pour réfuter, un seul cas suffit ; pour démontrer, il faut les écarter tous."
    ]
   },
   {
    "titulo": "Les pièces",
    "lista": [
     "<b>Définitions.</b> Elles fixent ce que veut dire chaque mot. Elles n'affirment l'existence de rien : définir ce qu'est une licorne ne fait pas qu'il y ait des licornes.",
     "<b>Prémisses.</b> Ce que tu acceptes comme point de départ. C'est toi qui les coches, et seules comptent celles qui sont cochées : ce que tu ne coches pas peut ne pas être vrai, même si cela te semble évident. C'est là que se cache le truc de la table.",
     "<b>Proposition.</b> Ce dont tu veux savoir si cela découle des prémisses cochées.",
     "<b>Langage formel.</b> La même phrase écrite avec des symboles. Il oblige à ne rien laisser d'implicite : chaque « tout », chaque « certain » et chaque « si… alors » est mis en évidence."
    ]
   },
   {
    "titulo": "Les quatre résultats possibles",
    "lista": [
     "<b>Contre-modèle : cela ne s'ensuit pas.</b> La table a construit un petit monde qui satisfait toutes tes prémisses et où la proposition échoue. C'est la preuve que cela ne s'ensuit pas. Regarde le dessin pour voir où elle échoue et la liste des faits pour le vérifier toi-même.",
     "<b>Démontré dans Isabelle : cela s'ensuit.</b> Avec ces prémisses, Isabelle/HOL, un programme qui vérifie les démonstrations pas à pas sans rien tenir pour acquis, a validé la preuve. Tu en as ici un résumé en mots.",
     "<b>Sans contre-modèle.</b> La table n'a pas trouvé de monde où cela échoue, mais elle ne cherche que parmi de petits mondes, d'au plus quatre choses. Cela ne démontre rien : il peut falloir un monde plus grand, voire infini. La proposition 6 du monde de pratique en est l'exemple.",
     "<b>Prémisses incompatibles.</b> Il n'existe aucun petit monde où elles soient toutes satisfaites à la fois. De prémisses qui se contredisent, tout s'ensuit, donc elles ne servent à rien prouver."
    ]
   },
   {
    "titulo": "Comment lire le dessin",
    "parrafos": [
     "Chaque cercle est une chose et chaque flèche, une relation ; la légende dit laquelle est laquelle. Une flèche qui part d'un cercle et revient vers lui signifie que cette chose a la relation avec elle-même. Le double cercle marque les choses d'un type particulier : dans le monde de pratique, les choses incréées ; dans celui de Spinoza, les substances. En dessous, « Échoue avec… » indique pour quelles choses concrètes la proposition échoue."
    ]
   },
   {
    "titulo": "À quoi sert d'enlever des prémisses",
    "parrafos": [
     "Le plus intéressant est d'essayer avec moins de prémisses que celles qu'a utilisées Isabelle. Si, en en retirant une, un contre-modèle apparaît, cette prémisse était nécessaire, et le contre-modèle montre pourquoi. S'il n'en apparaît pas, elle était peut-être superflue, ou bien le monde qui la réfute est plus grand que ce que cherche la table. C'est ainsi qu'on découvre ce qu'un raisonnement suppose sans le dire."
    ]
   },
   {
    "titulo": "Pourquoi il y a deux mondes",
    "parrafos": [
     "Celui de pratique est petit à dessein : trois relations que tout le monde comprend, pour en prendre le pli. Celui de Spinoza formalise la partie I de l'<em>Éthique</em>. Là, les prémisses qui commencent par H_ sont celles que Spinoza juge évidentes et n'écrit pas : nous avons dû les ajouter pour que ses démonstrations fonctionnent. Si l'une d'elles te semble fausse, retire-la et regarde ce qui cesse de s'ensuivre."
    ]
   }
  ],
  "tSimbolos": "Les symboles",
  "simbolos": [
   {
    "s": "∀x",
    "t": "pour toute chose x"
   },
   {
    "s": "∃x",
    "t": "il y a une chose x"
   },
   {
    "s": "¬",
    "t": "non"
   },
   {
    "s": "∧",
    "t": "et"
   },
   {
    "s": "∨",
    "t": "ou (ou les deux)"
   },
   {
    "s": "→",
    "t": "si… alors"
   },
   {
    "s": "↔",
    "t": "si et seulement si"
   },
   {
    "s": "≠",
    "t": "différent de"
   },
   {
    "s": ":⟺",
    "t": "veut dire, par définition"
   }
  ],
  "tRecorrido": "Un parcours pour commencer",
  "recorrido": [
   "Monde de pratique, proposition 2. Appuie sur « Cela s'ensuit ? » tel quel. Il manque une prémisse : regarde le contre-modèle et dis laquelle.",
   "Proposition 4. Retire la prémisse discutable. Quel cas réel ressemble au contre-modèle ?",
   "Proposition 5. Elle vient avec toutes les prémisses compatibles cochées et, malgré cela, cela ne s'ensuit pas. Pourquoi ?",
   "Proposition 6. Appuie sur « Toutes ». Que te dit la table ? Pourquoi « tout a été créé » ne tient-il pas avec les autres ?",
   "Proposition 7. Que faudrait-il ajouter pour qu'il n'y ait qu'une seule origine ?",
   "Passe au monde de Spinoza, proposition 5. Avec la prémisse cochée au départ, un contre-modèle apparaît, celui de Leibniz. Quelle prémisse manque et que dit-elle ?",
   "Proposition 14. Retire une à une les prémisses qu'a utilisées Isabelle. Laquelle te paraît la plus discutable ?"
  ]
 },
 "tiempo": {
  "defs": [
   {
    "id": "Antes",
    "origen": "Relation",
    "texto": "x a commencé à exister avant y."
   },
   {
    "id": "DuraMas",
    "origen": "Relation",
    "texto": "x dure plus longtemps que y."
   },
   {
    "id": "Crea",
    "origen": "Relation",
    "texto": "x a créé y."
   },
   {
    "id": "increado",
    "origen": "Définition",
    "texto": "Est incréé ce que rien n'a créé."
   }
  ],
  "grupos": [
   {
    "id": "t",
    "nom": "Temps"
   },
   {
    "id": "d",
    "nom": "Durée"
   },
   {
    "id": "c",
    "nom": "Création"
   }
  ],
  "premisas": [
   {
    "id": "T_irreflexiva",
    "grupo": "t",
    "que": "Rien n'a commencé avant soi-même."
   },
   {
    "id": "T_transitiva",
    "grupo": "t",
    "que": "Si x a commencé avant y, et y avant z, x a commencé avant z."
   },
   {
    "id": "D_irreflexiva",
    "grupo": "d",
    "que": "Rien ne dure plus longtemps que soi-même."
   },
   {
    "id": "D_transitiva",
    "grupo": "d",
    "que": "Si x dure plus longtemps que y, et y plus que z, x dure plus longtemps que z."
   },
   {
    "id": "C_creador_anterior",
    "grupo": "c",
    "que": "Qui crée quelque chose a commencé avant ce qui est créé."
   },
   {
    "id": "C_un_creador",
    "grupo": "c",
    "que": "Rien n'a deux créateurs."
   },
   {
    "id": "C_creador_dura_mas",
    "grupo": "c",
    "que": "Qui crée quelque chose dure plus longtemps que ce qui est créé (discutable)."
   },
   {
    "id": "C_todo_creado",
    "grupo": "c",
    "que": "Tout a été créé par quelque chose."
   }
  ],
  "props": [
   {
    "id": "Q1",
    "pasos": [
     {
      "txt": "Suppose qu’une chose x se soit créée elle-même : Crea(x, x).",
      "k": "hip"
     },
     {
      "txt": "Celui qui crée commence avant ce qui est créé, donc x a commencé avant x : Antes(x, x).",
      "k": "C_creador_anterior"
     },
     {
      "txt": "Mais rien ne commence avant soi-même : ¬Antes(x, x). Contradiction.",
      "k": "T_irreflexiva"
     },
     {
      "txt": "Donc l’hypothèse était fausse : rien ne se crée soi-même.",
      "k": "fin"
     }
    ],
    "nombre": "1. Rien ne se crée soi-même",
    "pregunta": "Rien <b>ne se crée</b> soi-même.",
    "prueba": "Si quelque chose se créait soi-même, cela aurait commencé avant soi-même, et rien ne commence avant soi-même.",
    "leccion": {
     "T_irreflexiva": "Sans elle, une chose peut commencer « avant elle-même », et alors rien ne l'empêche de se créer : regarde la boucle du dessin.",
     "C_creador_anterior": "Sans elle, créer et commencer avant n'ont rien à voir, et une chose peut se créer elle-même sans contradiction."
    }
   },
   {
    "id": "Q2",
    "pasos": [
     {
      "txt": "Suppose que x ait créé y et que y ait créé x : Crea(x, y) ∧ Crea(y, x).",
      "k": "hip"
     },
     {
      "txt": "Alors x a commencé avant y, et y avant x : Antes(x, y) ∧ Antes(y, x).",
      "k": "C_creador_anterior"
     },
     {
      "txt": "En enchaînant, x a commencé avant x : Antes(x, x).",
      "k": "T_transitiva"
     },
     {
      "txt": "Mais rien ne commence avant soi-même. Contradiction.",
      "k": "T_irreflexiva"
     },
     {
      "txt": "Donc, si x crée y, y ne crée pas x.",
      "k": "fin"
     }
    ],
    "nombre": "2. Créer n'est pas réciproque",
    "pregunta": "Si x crée y, <b>y ne crée pas x</b>.",
    "prueba": "x a commencé avant y, et y avant x ; par la transitivité, x a commencé avant x, ce qui est impossible.",
    "leccion": {
     "T_transitiva": "Sans la transitivité, que x commence avant y et y avant x n'oblige pas x à commencer avant x : deux choses peuvent se créer l'une l'autre.",
     "T_irreflexiva": "Sans elle, une chose peut commencer avant elle-même, et le cercle de deux créations ne mène à aucun absurde.",
     "C_creador_anterior": "Sans elle, créer n'a rien à voir avec le temps, et deux choses peuvent se créer l'une l'autre."
    }
   },
   {
    "id": "Q3",
    "pasos": [
     {
      "txt": "Pars du fait que x a créé y et que y a créé z : Crea(x, y) ∧ Crea(y, z).",
      "k": "hip"
     },
     {
      "txt": "Alors x a commencé avant y, et y avant z : Antes(x, y) ∧ Antes(y, z).",
      "k": "C_creador_anterior"
     },
     {
      "txt": "En enchaînant, x a commencé avant z : Antes(x, z).",
      "k": "T_transitiva"
     }
    ],
    "nombre": "3. Le créateur du créateur est antérieur",
    "pregunta": "Si x crée y et y crée z, x <b>a commencé avant z</b>.",
    "prueba": "x a commencé avant y, et y avant z ; par la transitivité, x avant z.",
    "leccion": {
     "T_transitiva": "Sans la transitivité, on ne sait pas si le créateur du créateur a commencé avant ce qui est créé.",
     "C_creador_anterior": "Sans elle, créer ne dit rien de qui a commencé avant."
    }
   },
   {
    "id": "Q4",
    "pasos": [
     {
      "txt": "Pars du fait que x a créé y, et suppose que y dure plus longtemps que x : Crea(x, y) ∧ DuraMas(y, x).",
      "k": "hip"
     },
     {
      "txt": "Celui qui crée dure plus longtemps que ce qui est créé : DuraMas(x, y).",
      "k": "C_creador_dura_mas"
     },
     {
      "txt": "En enchaînant, x dure plus longtemps que x : DuraMas(x, x).",
      "k": "D_transitiva"
     },
     {
      "txt": "Mais rien ne dure plus longtemps que soi-même. Contradiction.",
      "k": "D_irreflexiva"
     },
     {
      "txt": "Donc ce qui est créé ne dure pas plus longtemps que son créateur.",
      "k": "fin"
     }
    ],
    "nombre": "4. Ce qui est créé ne dure pas plus longtemps que son créateur",
    "pregunta": "Si x crée y, y <b>ne dure pas plus longtemps</b> que x.",
    "prueba": "x dure plus longtemps que y (la prémisse discutable) ; si de plus y durait plus longtemps que x, par la transitivité x durerait plus longtemps que lui-même.",
    "leccion": {
     "C_creador_dura_mas": "Être antérieur n'est pas durer plus longtemps : sans cette prémisse, ce qui est créé peut durer plus longtemps que son créateur, comme un livre qui survit à celui qui l'a écrit.",
     "D_irreflexiva": "Sans elle, une chose peut durer plus longtemps qu'elle-même, et ce qui est créé peut durer plus longtemps que son créateur sans que rien ne heurte.",
     "D_transitiva": "Sans la transitivité, que x dure plus longtemps que y et y plus que x ne mène à aucun absurde."
    }
   },
   {
    "id": "Q5",
    "nombre": "5. Ce qui est antérieur dure plus longtemps",
    "pregunta": "Si x a commencé avant y, x <b>dure plus longtemps</b> que y.",
    "nota": "Cela ne s'ensuit d'aucune combinaison de prémisses compatibles : commencer avant et durer plus longtemps sont deux choses distinctes, et aucune prémisse ne relie le temps à la durée, sauf par la création."
   },
   {
    "id": "Q6",
    "pasos": [
     {
      "txt": "Suppose que rien ne soit incréé : chaque chose a un créateur.",
      "k": "hip"
     },
     {
      "txt": "Choisis une chose, cherche son créateur, puis le créateur de celui-ci, et ainsi de suite. Chaque pas remonte dans le temps.",
      "k": "C_creador_anterior"
     },
     {
      "txt": "Ce qui a commencé avant quelque chose qui a commencé avant a commencé avant : toute la chaîne remonte dans le temps.",
      "k": "T_transitiva"
     },
     {
      "txt": "Le monde est fini, donc la chaîne finit par répéter une chose, qui aurait commencé avant elle-même. Contradiction.",
      "k": "T_irreflexiva"
     },
     {
      "txt": "Donc il existe quelque chose d’incréé. Dans un monde infini, la chaîne pourrait ne jamais se répéter : c’est pourquoi Isabelle ne le démontre que pour les mondes finis.",
      "k": "fin"
     }
    ],
    "nombre": "6. Il y a quelque chose d'incréé",
    "pregunta": "Il y a quelque chose que <b>rien n'a créé</b>.",
    "prueba": "Dans un monde fini, il ne peut y avoir une chaîne de créateurs sans premier : si tout avait un créateur, en suivant la chaîne on reviendrait à une chose déjà vue, qui aurait commencé avant elle-même. Isabelle le démontre pour les mondes finis. Dans un monde infini, cela ne vaut pas : dans les nombres naturels, si chaque nombre est créé par le suivant, tout a été créé et rien n'est incréé. C'est pourquoi « tout a été créé » ne tient dans aucun monde fini avec ces prémisses.",
    "leccion": {
     "T_transitiva": "Sans la transitivité, il peut y avoir un cercle de créateurs : A crée B et B crée A, et rien n'est incréé.",
     "T_irreflexiva": "Sans elle, une chose peut se créer elle-même, et alors rien n'est incréé.",
     "C_creador_anterior": "Sans elle, créer n'a rien à voir avec le temps, et tout peut avoir un créateur."
    }
   },
   {
    "id": "Q7",
    "nombre": "7. Il n'y a qu'un seul incréé",
    "pregunta": "Si x et y sont incréés, <b>ils sont une seule et même chose</b>.",
    "nota": "Cela ne s'ensuit pas : il peut y avoir deux origines indépendantes. Pour qu'il n'y en ait qu'une, il faut quelque chose de plus, et c'est ce que Spinoza tente de prouver de la substance (props. 5 et 14) : passe à l'autre monde."
   }
  ]
 }
};
