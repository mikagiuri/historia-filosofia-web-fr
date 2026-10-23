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
  "mundoReloj": "Le temps, défini",
  "mundoAnt": "Les antinomies de Kant",
  "ledeAnt": "Kant a montré dans la Critique de la raison pure (A426-461 / B454-489) que la raison, quand elle pense le monde comme un tout, se contredit  : sur le commencement du monde, le simple, la liberté et l’être nécessaire, elle peut prouver la thèse et aussi l’antithèse. Ici, chaque preuve est ramenée à ses prémisses  : chacune se démontre avec les siennes, et ce qui entre en conflit, ce sont les prémisses (coche-les toutes à la fois et tu le verras). Viennent ensuite les issues  : celle de Kant (dans les deux premières, la thèse et l’antithèse peuvent être fausses toutes les deux  ; dans les deux dernières, vraies toutes les deux) et une autre que Kant n’a pas prise, lâcher la prémisse de la thèse. À la fin, le débat sur les prémisses de Kant lui-même.",
  "notaDefsAnt": "La table rend le squelette logique des antinomies, non l’idéalisme transcendantal de Kant. « La série est complète » se lit ici comme « il n’y a pas de régression à l’infini », comme dans les cinq voies : c’est une interprétation. Et comme la table ne cherche que des mondes finis, la régression sans fin et la division sans fin apparaissent comme des cercles ; les mondes infinis, c’est Isabelle qui les construit.",
  "defsAnt": "Définitions",
  "grupoA1": "1re : le commencement du monde",
  "grupoA2": "2e : le simple",
  "grupoA3": "3e : la liberté",
  "grupoA4": "4e : l’être nécessaire",
  "notaPieA": "On cherche des mondes d’au plus 4 choses et 4 instants. « Démontré dans Isabelle » signifie qu’Isabelle/HOL a vérifié la preuve avec ces prémisses (théories Antinomias_matematicas et Antinomias_dinamicas). Si l’on ne trouve pas de monde où la proposition échoue, cela ne démontre rien.",
  "notaSinA": "Dans un monde fini, il y a toujours un premier instant, une première cause et une dernière partie. C’est pourquoi le monde sans commencement, la régression sans fin et la division sans fin ne tiennent pas dans la table : Isabelle les construit avec les entiers relatifs et les entiers naturels (modelo_antitesis1, modelo_antitesis2, modelo_antitesis3).",
  "choqueIsa": "Isabelle démontre que ces prémisses entrent en conflit dans n’importe quel monde, y compris infini ({t}).",
  "mundoCosmos": "De l'être au cosmos",
  "ledeCosmos": "Parménide raisonne à partir de très peu de prémisses : ce qui est, est, et le non-être n'est pas. Il en tire que l'être ne naît pas, ne change pas et est un. Ici, la preuve est découpée en ses prémisses, et l'on voit laquelle fait tout le travail. Viennent ensuite ses héritiers, qui lâchent chacun une prémisse différente : les atomistes admettent le vide ; Mélissos, sans rien lâcher, fait un pas qui ne vaut pas ; et Platon, dans le Timée, scinde le problème en deux plans, ce qui est toujours et ce qui devient, et pose un artisan, le Démiurge.",
  "notaDefsCosmos": "Ici, il y a des choses et des instants. « Est » se lit comme « il y a » : <code>ExisteEn(x, t)</code>, x est à l'instant t. <code>Claro(x, t)</code> tient lieu de n'importe quelle qualité susceptible de changer, comme la couleur éclatante du fragment B8. Les relations du <em>Timée</em> ne parlent pas du temps, sauf celle de commencer.",
  "defsCosmos": "Définitions",
  "grupoC1": "Parménide : l'être",
  "grupoC2": "Les atomistes : le vide",
  "grupoC3": "Mélissos : ce qui n'est pas engendré",
  "grupoC4": "Le Démiurge du Timée",
  "notaPieC": "On cherche des mondes d'au plus 4 choses et 3 instants. « Démontré dans Isabelle » signifie qu'Isabelle/HOL a vérifié la preuve avec ces prémisses (théories Parmenides_herederos et Timeo_demiurgo). Si l'on ne trouve aucun monde où la proposition échoue, cela ne démontre rien.",
  "clSiempre": "est toujours",
  "clVacio": "vide",
  "lyHace": "fait",
  "lyCopia": "est copie de",
  "lyDobleC": "double cercle : ce qui est toujours, ou le vide",
  "eDeviene": "devient",
  "eVisible": "visible",
  "eBello": "beau",
  "eBueno": "bon",
  "eGenerado": "engendré",
  "ePrincipio": "avec un commencement",
  "eClaro": "clair en {x}",
  "eNuncaClaro": "n'est jamais clair",
  "hClaro": "Quand chaque chose est claire",
  "hVacio": "Le vide",
  "hMeliso": "Génération et commencement",
  "hDemiurgo": "Le Démiurge",
  "fClaroV": "Instants où {a} est clair : {x}",
  "fVacio": "{a} est vide",
  "fGenerado": "{a} est engendré",
  "fPrincipio": "{a} a un commencement",
  "fCopia": "{a} est copie de {b}",
  "fCopiaSi": "{a} est copie de soi",
  "fSiempre": "{a} est toujours",
  "fDeviene": "{a} devient",
  "fVisible": "{a} est visible",
  "fBello": "{a} est beau",
  "fBueno": "{a} est bon",
  "infinitoTxt": "Cela peut arriver, mais seulement dans un monde infini : la table, qui cherche des mondes d’au plus quatre choses, ne peut pas le construire. Isabelle, elle, le construit ({t}).",
  "lyCausaInt": "est cause intelligible de",
  "lyCond": "est condition de",
  "lyFund": "est fondement intelligible de",
  "lyDobleA": "double cercle : libre, inconditionné ou simple",
  "clLibre": "libre",
  "clIncond": "inconditionné",
  "clSimple": "simple",
  "eFen": "phénomène",
  "eEnMundo": "dans le monde",
  "eEspacio": "dans l’espace",
  "hTiempoMundo": "Quand le monde existe",
  "fMundoEn": "Le monde existe aux instants {x}",
  "fMundoNunca": "Le monde n’existe à aucun instant",
  "hPartes": "Parties",
  "hCondiciones": "Conditions",
  "fParteSi": "{a} est partie de soi-même",
  "fCausaInt": "{a} est cause intelligible de {b}",
  "fCausaIntSi": "{a} est cause intelligible de soi",
  "fCond": "{a} est condition de {b}",
  "fCondSi": "{a} est condition de soi",
  "fFund": "{a} est fondement intelligible de {b}",
  "fFundSi": "{a} est fondement de soi",
  "fFen": "{a} est un phénomène",
  "fEnMundo": "{a} est dans le monde",
  "fEspacio": "{a} occupe un espace",
  "tamTiempo": "Il existe une ligne de {k} qui satisfait toutes les prémisses cochées et sur laquelle la proposition échoue.",
  "dibujoAriaT": "La ligne du temps : en couleur, les instants où le monde existe.",
  "ejeMundo": "instants (en couleur, quand le monde existe)",
  "chocan": "Ces prémisses entrent en conflit entre elles : {x}. Retire-en une et réessaie : un autre groupe peut aussi entrer en conflit.",
  "chocanTodas": "Elles entrent toutes en conflit à la fois : si tu en retires une quelconque, les autres peuvent coexister.",
  "chocanFijas": "Elles entrent en conflit avec ce qui est fixé dans ce monde, même si tu ne coches aucune prémisse.",
  "sobraIsa": "Isabelle démontre que ces prémisses sont superflues, chacune séparément (pas toutes à la fois) :",
  "sobraItem": "{x} : sans elle, la conclusion découle aussi ({t}).",
  "bSobra": "Une prémisse est-elle superflue ?",
  "sobraPosible": "Dans des mondes d'au plus {c} choses, la proposition n'échoue pas non plus si tu retires une seule de celles-ci : {x}.",
  "sobraNoDemuestra": "Cela ne démontre pas qu'elles soient superflues : il faut peut-être un monde plus grand. Pour le savoir, il faut le démontrer, comme Isabelle l'a fait pour celles de Spinoza.",
  "sobraNinguna": "Aucune n'est superflue : si tu retires l'une quelconque d'entre elles, un contre-modèle apparaît.",
  "mundoVias": "Les cinq voies",
  "ledeVias": "Thomas d'Aquin propose cinq voies pour montrer que Dieu existe (Somme théologique, I, question 2, article 3). Ici, chaque voie est décomposée en ses prémisses, pour voir laquelle fait le travail et où les objections portent leur coup. La table ne décide pas si Dieu existe : elle vérifie seulement ce qui découle de quoi.",
  "notaDefsVias": "Dans les voies, mouvoir et causer ne sont pas des événements dans le temps. Ce sont des causes <em>par soi</em>, qui agissent en même temps que leur effet, comme la main meut le bâton et le bâton la pierre. La dépendance va dans un seul sens : ce qui est mû dépend du moteur, et non le moteur de ce qui est mû. C'est pourquoi seule la troisième voie utilise des instants : elle parle d'exister et de cesser d'exister. Que le monde ait commencé dans le temps, Thomas le tient pour une vérité de foi, que la raison ne peut ni démontrer ni réfuter (I, question 46, articles 1 et 2), et aucune voie n'en a besoin. Que tout dépende de Dieu pour être, en revanche, il le tient pour démontrable (I, question 44, article 1).",
  "defsVias": "Définitions",
  "grupoV1": "Première voie : le mouvement",
  "grupoV2": "Deuxième voie : la cause efficiente",
  "grupoV3": "Troisième voie : le contingent et le nécessaire",
  "grupoV4": "Quatrième voie : les degrés de perfection",
  "grupoV5": "Cinquième voie : le gouvernement des choses",
  "grupoVD": "« Et c'est cela que nous appelons Dieu »",
  "notaPieV": "On cherche des mondes d'au plus 4 choses, nommées A, B, C et D, et 4 instants. « Démontré dans Isabelle » signifie qu'Isabelle/HOL a vérifié la preuve avec ces prémisses (théorie Cinco_vias). Si l'on ne trouve aucun monde où la proposition échoue, cela ne démontre rien.",
  "clPrimero": "premier",
  "lyPrimero": "double cercle : un premier (rien ne le meut ou rien ne le cause)",
  "lyMueve": "meut",
  "lyPerfecto": "est plus parfait que",
  "lyDirige": "dirige vers sa fin",
  "hMovimiento": "Mouvement",
  "hExistencia": "Quand chaque chose existe",
  "hPerfeccion": "Perfection",
  "hFines": "Fins",
  "fMueveSi": "{a} se meut lui-même",
  "fMueve": "{a} meut {b}",
  "fExisteV": "Instants où {a} existe : {x}",
  "fPerfSi": "{a} est plus parfait que lui-même",
  "fPerf": "{a} est plus parfait que {b}",
  "fFin": "{a} tend vers une fin",
  "fConoce": "{a} connaît",
  "fDirigeSi": "{a} se dirige lui-même vers sa fin",
  "fDirige": "{a} dirige {b} vers sa fin",
  "eFin": "tend vers une fin",
  "eConoce": "connaît",
  "eExiste": "existe en {x}",
  "eNunca": "n'existe jamais",
  "verExploVias": "L'exploration des cinq voies, dans Théorie",
  "verPlanoDios": "Les preuves de l'existence de Dieu, dans Généalogies",
  "ledeReloj": "Maintenant, on dit ce qu'est le temps : il y a des instants ordonnés, et chaque chose commence à l'un et se termine à un autre. Commencer avant, durer plus longtemps et survivre ne sont plus des relations isolées : on les définit avec les instants. Ce qu'il fallait admettre comme prémisse dans le monde d'entraînement, ici on le démontre.",
  "notaDefsReloj": "Ce qu'est le temps est fixé, car c'est ce que le temps signifie dans ce monde. Les prémisses de la création, en revanche, peuvent être retirées.",
  "defsTiempoFijo": "Ce qu'est le temps",
  "defsReloj": "Définitions",
  "grupoR": "Propositions du temps défini",
  "notaPieR": "On cherche des mondes d'au plus 4 choses, appelées A, B, C et D, et 4 instants. « Démontré dans Isabelle » signifie qu'Isabelle/HOL a vérifié la preuve avec ces prémisses (théorie Mundo_tiempo_definido). Si l'on ne trouve aucun monde où la proposition échoue, cela ne démontre rien.",
  "hayMundoR": "Il existe un monde de {n} et {k} qui satisfait toutes les prémisses cochées et où la proposition échoue.",
  "unInst": "1 instant",
  "nInst": "{n} instants",
  "sinMundoCompletoR": "Il n'y en a aucun d'au plus {c} choses et {a} instants.",
  "lyVida": "barre : le temps où la chose existe",
  "lyIncreadoR": "bord épais : incréé",
  "ejeInst": "instants",
  "hVidas": "Quand chaque chose existe",
  "fVida": "{a} : de l'instant {b} à l'instant {c}",
  "hRelReloj": "Avant, survie et durée",
  "fSobrevive": "{a} survit à {b}",
  "errTipoI": "Dans « {x} », la place {n} est pour un instant : utilise t, u, v ou w.",
  "errTipoCI": "Dans « {x} », la place {n} est pour une chose ; t, u, v et w sont des instants.",
  "errComp": "« {x} » compare des instants : des deux côtés, mets t, u, v ou w.",
  "ledeTiempo": "Un monde de pratique pour prendre le pli. Les choses ne se distinguent que par laquelle a commencé avant, laquelle dure plus longtemps et laquelle a créé laquelle. Et elles peuvent cesser d'exister : celui qui crée quelque chose peut disparaître alors que son œuvre continue, donc commencer avant ne veut pas dire durer plus longtemps. Choisis une proposition et les prémisses que tu admets : la table cherche un petit monde où toutes les prémisses sont vraies et où la proposition échoue ; si ce monde ne peut pas exister parce qu'Isabelle l'a déjà démontré avec ces prémisses, elle te donne la preuve.",
  "notaDefsTiempo": "Trois relations et une définition, rien de plus. Ce que les prémisses ne disent pas peut arriver : si tu ne coches pas que rien ne commence avant soi-même, cela peut se produire dans le monde cherché.",
  "defsTiempo": "Relations et définition",
  "grupoT": "Propositions de pratique",
  "propiaNombre": "✎ Écris ta propre proposition",
  "tEscribe": "Ta proposition, en logique",
  "phEscribe": "Par exemple : ∀x y. Crea(x, y) → Antes(x, y)",
  "tTeclado": "Symboles",
  "tVocabulario": "Relations et définitions de ce monde",
  "atajos": "Tu peux aussi taper ~ (non), & (et), | (ou), -> (si… alors), <-> (si et seulement si), != (différent), « {t} » (∀), « {h} » (∃) et « {n} » (¬). Les variables sont des lettres minuscules : x, y, z…",
  "palTodo": "tout",
  "palHay": "existe",
  "palNo": "non",
  "hasEscrito": "Tu as écrit",
  "libresTodo": "Les variables sans « tout » ni « existe » ({x}) valent pour n'importe quoi : c'est comme si la formule commençait par « tout ».",
  "modoSigue": "Est-ce que cela découle des prémisses cochées ?",
  "modoPosible": "Est-ce que cela peut arriver avec les prémisses cochées ?",
  "sinIsabelle": "Tu écris ceci toi-même, donc Isabelle ne l'a pas vérifié : la table ne cherche que de petits mondes. Si elle n'en trouve pas où cela échoue, cela ne le démontre pas.",
  "tTusPremisas": "Tes prémisses",
  "phPremisa": "Écris une prémisse ; par exemple : ∀x. ¬Crea(x, x)",
  "bAnadir": "Ajouter",
  "bQuitar": "Retirer",
  "noHayPropias": "Tu n'en as encore écrit aucune.",
  "errVacio": "Écris une formule.",
  "errSimbolo": "Je ne comprends pas « {x} ».",
  "errNombre": "Je ne connais pas « {x} ». Dans ce monde, tu peux utiliser : {y}.",
  "errArgs": "« {x} » prend {n} entre parenthèses, séparés par des virgules.",
  "errFaltaParen": "Après « {x} » viennent des parenthèses avec les choses : {x}(x, y).",
  "errTipo": "Dans « {x} », la place {n} est pour un attribut : utilise a ou b.",
  "errTipoC": "Dans « {x} », la place {n} est pour une chose ; a et b sont des attributs.",
  "errEsperabaCosa": "Dans « {y} » viennent des variables (x, y, z…), pas « {x} ».",
  "errParen": "Il manque une parenthèse fermante.",
  "errAbre": "Il y a une parenthèse fermante en trop.",
  "errSobra": "Je ne sais pas quoi faire de « {x} ». Manque-t-il un ∧, un ∨ ou un → ?",
  "errCuant": "Après {x} viennent les variables : {x}x. …",
  "errEsperaba": "Ici, j'attendais une formule, pas « {x} ».",
  "errFin": "La formule s'arrête trop tôt : il manque quelque chose à la fin.",
  "selloNada": "Prémisses incompatibles",
  "selloPosible": "C'est possible",
  "puedeOcurrir": "Cela peut arriver",
  "noPuede": "Avec ces prémisses, cela ne peut pas arriver",
  "posibleTxt": "Il existe un monde de {n} qui satisfait toutes les prémisses cochées et où cela arrive.",
  "imposibleTxt": "Il n'existe aucun monde d'au plus {c} choses qui satisfasse les prémisses cochées et où cela arrive.",
  "seCompruebaPos": "On vérifie si cela peut arriver : {x}",
  "posibleIsa": "Isabelle construit un monde comme celui-là ({t}).",
  "imposibleIsa": "Isabelle démontre que cela ne peut pas arriver avec {x} ({t}).",
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
    "ej": "Rien n’a deux créateurs : si A et B ont créé C, A et B sont la même chose. Sans cette prémisse, deux choses distinctes peuvent créer une troisième chose (proposition 9)."
   },
   {
    "id": "serie",
    "titulo": "À tout arrive une flèche",
    "txt": "Chaque chose reçoit au moins une flèche : ∀x. ∃y. R(y, x).",
    "ej": "Tout a été créé par quelque chose. Dans un monde fini, avec « Antes » irréflexive et transitive, c’est impossible (proposition 7)."
   }
  ],
  "tSimbolos": "Les symboles",
  "bPracticar": "S’exercer aux propriétés des relations dans la table « Relations »",
  "tMapa": "Carte des propriétés",
  "introMapa": "Quelle propriété d'une relation découle de quelles autres. Cela vaut pour n'importe quelle relation : commencer avant, créer, déplacer, causer, être plus parfait… Ce qui découle est démontré dans Isabelle ; ce qui ne découle pas a un contre-exemple, lui aussi vérifié (théorie Propiedades_relaciones).",
  "mapa": [
   {
    "sigue": true,
    "si": "Irréflexive et transitive",
    "da": "asymétrique"
   },
   {
    "sigue": true,
    "si": "Asymétrique",
    "da": "irréflexive"
   },
   {
    "sigue": true,
    "si": "Sans régression à l'infini",
    "da": "asymétrique, et donc irréflexive"
   },
   {
    "sigue": true,
    "si": "Sans régression à l'infini, s'il y a au moins une flèche",
    "da": "il y a un premier élément, auquel aucune flèche n'aboutit"
   },
   {
    "sigue": true,
    "si": "Dans un monde fini, irréflexive et transitive",
    "da": "sans régression à l'infini"
   },
   {
    "sigue": true,
    "si": "Dans un monde fini, un ordre strict où tout est comparable",
    "da": "il y a un maximum"
   },
   {
    "sigue": false,
    "si": "Asymétrique",
    "da": "transitive",
    "ej": "0 va à 1 et 1 va à 2, mais 0 ne va pas à 2."
   },
   {
    "sigue": false,
    "si": "Irréflexive",
    "da": "asymétrique",
    "ej": "« Est différent de » : A est différent de B et B de A."
   },
   {
    "sigue": false,
    "si": "Transitive",
    "da": "irréflexive",
    "ej": "La relation qui relie chaque chose à toutes, y compris à elle-même."
   },
   {
    "sigue": false,
    "si": "Avec une infinité de choses, irréflexive et transitive",
    "da": "sans régression à l'infini",
    "ej": "Dans les nombres, chacun est précédé du suivant, sans fin. Compare avec la cinquième ligne."
   }
  ],
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
  "paraTodoI": "pour tout instant {v}",
  "paraTodosI": "pour tous les instants {v}",
  "hayInst": "il y a un instant {v} tel que",
  "hayInsts": "il y a des instants {v} tels que",
  "hayMixtoI": "il y a une chose {c} et un instant {a} tels que",
  "noHayInst": "il n'y a aucun instant {v} tel que",
  "menorI": "{1} est antérieur à {2}",
  "menorIgI": "{1} est antérieur ou égal à {2}",
  "rel": {
   "Empieza": [
    "{1} commence à l'instant {2}",
    "{1} ne commence pas à l'instant {2}"
   ],
   "Acaba": [
    "{1} se termine à l'instant {2}",
    "{1} ne se termine pas à l'instant {2}"
   ],
   "Sobrevive": [
    "{1} survit à {2}",
    "{1} ne survit pas à {2}"
   ],
   "ExisteEn": [
    "{1} existe à l'instant {2}",
    "{1} n'existe pas à l'instant {2}"
   ],
   "Claro": [
    "{1} est clair à l'instant {2}",
    "{1} n'est pas clair à l'instant {2}"
   ],
   "Vacio": [
    "{1} est vide",
    "{1} n'est pas vide"
   ],
   "Generado": [
    "{1} est engendré",
    "{1} n'est pas engendré"
   ],
   "Principio": [
    "{1} a un commencement",
    "{1} n'a pas de commencement"
   ],
   "Siempre": [
    "{1} fait partie de ce qui est toujours",
    "{1} ne fait pas partie de ce qui est toujours"
   ],
   "Deviene": [
    "{1} devient",
    "{1} ne devient pas"
   ],
   "Visible": [
    "{1} est visible et tangible",
    "{1} n'est pas visible"
   ],
   "Bello": [
    "{1} est beau",
    "{1} n'est pas beau"
   ],
   "Bueno": [
    "{1} est bon",
    "{1} n'est pas bon"
   ],
   "Copia": [
    "{1} est copie de {2}",
    "{1} n'est pas copie de {2}"
   ],
   "cambia": [
    "{1} change",
    "{1} ne change pas"
   ],
   "siempreEs": [
    "{1} est toujours",
    "{1} n'est pas toujours"
   ],
   "comienza": [
    "{1} commence",
    "{1} ne commence pas"
   ],
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
   "Mundo": [
    "le monde existe à l’instant {1}",
    "le monde n’existe pas à l’instant {1}"
   ],
   "Parte": [
    "{1} est une partie de {2}",
    "{1} n’est pas une partie de {2}"
   ],
   "EnEspacio": [
    "{1} occupe un espace",
    "{1} n’occupe pas d’espace"
   ],
   "Fen": [
    "{1} est un phénomène",
    "{1} n’est pas un phénomène"
   ],
   "CausaInt": [
    "{1} est cause intelligible de {2}",
    "{1} n’est pas cause intelligible de {2}"
   ],
   "Cond": [
    "{1} est condition de {2}",
    "{1} n’est pas condition de {2}"
   ],
   "EnMundo": [
    "{1} est dans le monde",
    "{1} n’est pas dans le monde"
   ],
   "Fund": [
    "{1} est fondement intelligible de {2}",
    "{1} n’est pas fondement intelligible de {2}"
   ],
   "incondicionado": [
    "{1} est inconditionné",
    "{1} n’est pas inconditionné"
   ],
   "simple": [
    "{1} est simple",
    "{1} n’est pas simple"
   ],
   "compuesto": [
    "{1} est composé",
    "{1} n’est pas composé"
   ],
   "Mueve": [
    "{1} meut {2}",
    "{1} ne meut pas {2}"
   ],
   "MasPerfecto": [
    "{1} est plus parfait que {2}",
    "{1} n'est pas plus parfait que {2}"
   ],
   "TiendeAFin": [
    "{1} tend vers une fin",
    "{1} ne tend vers aucune fin"
   ],
   "Conoce": [
    "{1} connaît",
    "{1} ne connaît pas"
   ],
   "Dirige": [
    "{1} dirige {2} vers sa fin",
    "{1} ne dirige pas {2} vers sa fin"
   ],
   "movido": [
    "{1} est mû par quelque chose",
    "{1} n'est mû par rien"
   ],
   "causado": [
    "{1} est causé par quelque chose",
    "{1} n'est causé par rien"
   ],
   "primerMotor": [
    "{1} est un premier moteur",
    "{1} n'est pas un premier moteur"
   ],
   "primeraCausa": [
    "{1} est une première cause",
    "{1} n'est pas une première cause"
   ],
   "necesario": [
    "{1} est nécessaire",
    "{1} n'est pas nécessaire"
   ],
   "maximo": [
    "{1} est le maximum",
    "{1} n'est pas le maximum"
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
 "isabelle": {
  "titulo": "À propos d’Isabelle, et merci",
  "parrafos": [
   "Cette table existe grâce à <b>Isabelle</b>, un assistant de démonstration : un programme dans lequel on écrit des énoncés dans un langage formel et on les démontre pas à pas, et qui vérifie chaque étape sans rien tenir pour acquis. La logique que nous utilisons est Isabelle/HOL, la logique d’ordre supérieur. C’est un logiciel libre.",
   "Quand la table affiche « Démontré dans Isabelle », cela veut dire qu’Isabelle a vérifié cette preuve avec ces prémisses. Le chercheur de contre-modèles de la page est plus modeste : il imite Nitpick, l’outil d’Isabelle qui cherche des contre-exemples, mais il ne regarde que de petits mondes. C’est pourquoi « sans contre-modèle » ne démontre rien.",
   "Isabelle descend du système LCF de Robin Milner, à Édimbourg : un petit noyau de confiance par lequel doit passer toute preuve. Lawrence C. Paulson l’a commencée à l’Université de Cambridge au milieu des années 1980, et ce fut vite un projet commun avec Tobias Nipkow, de l’Université technique de Munich. Makarius Wenzel a créé Isar, le langage dans lequel s’écrivent les preuves structurées. Paulson lui a donné son nom d’après la fille de Gérard Huet. Aujourd’hui, de nombreuses personnes et institutions du monde entier la font vivre."
  ],
  "gracias": "Merci à Lawrence Paulson, à Tobias Nipkow, à Makarius Wenzel et à toutes les personnes qui ont construit Isabelle et l’offrent comme logiciel libre. Sans des décennies de leur travail, formaliser l’<em>Éthique</em> de Spinoza ne serait pas à la portée d’une classe.",
  "tEnlaces": "Pour en savoir plus",
  "enlaces": [
   {
    "txt": "Isabelle : le site officiel",
    "url": "https://isabelle.in.tum.de/"
   },
   {
    "txt": "Archive of Formal Proofs : la bibliothèque de preuves vérifiées avec Isabelle",
    "url": "https://www.isa-afp.org/"
   },
   {
    "txt": "Lawrence C. Paulson (Université de Cambridge)",
    "url": "https://www.cl.cam.ac.uk/~lp15/"
   },
   {
    "txt": "Tobias Nipkow (Université technique de Munich)",
    "url": "https://www.professoren.tum.de/en/nipkow-tobias"
   },
   {
    "txt": "Makarius Wenzel",
    "url": "https://sketis.net/"
   },
   {
    "txt": "L. C. Paulson, T. Nipkow et M. Wenzel, « From LCF to Isabelle/HOL », Formal Aspects of Computing 31 (2019)",
    "url": "https://arxiv.org/abs/1907.02836"
   }
  ]
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
     "<b>Sans contre-modèle.</b> La table n'a pas trouvé de monde où cela échoue, mais elle ne cherche que parmi de petits mondes, d'au plus quatre choses. Cela ne démontre rien : il peut falloir un monde plus grand, voire infini. La proposition 7 du monde de pratique en est l'exemple.",
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
    "titulo": "Pourquoi il y a six mondes",
    "parrafos": [
     "Celui de pratique est petit à dessein : trois relations que tout le monde comprend, pour en prendre le pli, même s'il laisse sans dire ce qu'est le temps. Celui du temps défini le dit : avec des instants, commencer avant, durer plus longtemps et survivre se définissent, et ce qui n'étaient que des prémisses devient des théorèmes. Celui de Spinoza formalise la partie I de l'<em>Éthique</em>. Là, les prémisses qui commencent par H_ sont celles que Spinoza juge évidentes et n'écrit pas : nous avons dû les ajouter pour que ses démonstrations fonctionnent. Si l'une d'elles te semble fausse, retire-la et regarde ce qui cesse de s'ensuivre.",
     "Celui des cinq voies décompose les arguments de Thomas d'Aquin en leurs prémisses. Dans presque toutes les voies, la conclusion découle aussitôt d'une prémisse : celle qui interdit la régression à l'infini, le passage de « tout peut ne pas être » à « il y a eu un moment où il n'y avait rien », ou celle qui dit que ce qui ne connaît pas ne tend vers une fin que si quelqu'un le dirige. C'est là que se situe la discussion.",
     "Celui des antinomies de Kant reprend les quatre contradictions de la raison quand elle pense le monde comme un tout  : le commencement, le simple, la liberté et l’être nécessaire. Chaque thèse et chaque antithèse se démontrent avec leur propre prémisse, et ce qui entre en conflit, ce sont les prémisses. Kant propose deux issues  : dans les deux premières, les deux parties peuvent être fausses  ; dans les deux dernières, vraies. Il y en a d’autres  : lâcher la prémisse de la thèse ou, avec Hegel, ne pas voir dans la contradiction une erreur. La table le vérifie avec de petits mondes, et Isabelle avec les mondes infinis.",
     "Celui de Parménide et de ses héritiers, « De l'être au cosmos », suit une seule idée : devant le même argument, chaque école lâche une prémisse différente. Le saut de « n'être pas clair » à « n'être pas » donne à la fois l'un et l'immobile ; les atomistes lâchent « le vide n'est pas » ; Mélissos fait un pas qui ne vaut pas ; et Platon, dans le <em>Timée</em>, scinde le problème en deux plans et pose un artisan, le Démiurge."
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
   "Proposition 1. Il y a deux chemins. Coche seulement « le créateur dure plus longtemps » et « rien ne dure plus longtemps que soi-même » : est-ce que ça s’ensuit ? Compare la preuve avec celle du temps. Laquelle te semble la plus solide ?",
   "Proposition 4. Elle vient sans la prémisse discutable et il en sort un contre-modèle : quel cas réel lui ressemble ? Ensuite, coche-la et reteste.",
   "Proposition 5. Ce qui est créé peut-il durer plus longtemps que son créateur ? Regarde le monde que construit la table, puis coche la prémisse discutable.",
   "Proposition 6. Elle vient avec toutes les prémisses compatibles cochées et, malgré cela, cela ne s'ensuit pas. Pourquoi ?",
   "Proposition 7. Appuie sur « Toutes ». Que te dit la table ? Pourquoi « tout a été créé » ne tient-il pas avec les autres ?",
   "Proposition 8. Que faudrait-il ajouter pour qu'il n'y ait qu'une seule origine ?",
   "Proposition 9. Une chose peut-elle avoir deux créateurs ? Compte combien de choses il faut au monde, puis coche « Rien n’a deux créateurs ».",
   "Dans le monde « Le temps, défini », propositions 9 et 10 : à quoi renoncerais-tu pour que tout ait un créateur, à ce que celui qui crée commence avant, ou à ce que le temps ait un commencement ? Que dirait Spinoza d'une chose qui se crée elle-même ?",
   "Passe au monde « Le temps, défini », propositions 5 et 6. En quoi survivre et durer plus longtemps diffèrent-ils ? Regarde les barres. Puis la 7 : pourquoi survivre ne suffit-il pas pour durer plus longtemps ?",
   "À la fin de la liste déroulante, « ✎ Écris ta propre proposition ». Écris en logique « celui qui crée quelque chose est incréé » et regarde si cela découle des prémisses. Sinon, quelle prémisse de ta part faudrait-il ? Ajoute-la dans « Tes prémisses ».",
   "Dans « Les cinq voies », proposition 1. Elle ne vient qu'avec « quelque chose se meut » et un contre-modèle apparaît : qu'est-ce qui échoue ? Coche « pas de régression à l'infini » et relance la preuve. Puis la 5 : où se trompe le passage « si tout peut ne pas être, il y a eu un moment où rien n'était » ?",
   "Dans « De l'être au cosmos », proposition 2 : quelle prémisse fait tout le travail ? Retire-la et essaie la 3. Puis la 6, telle quelle : pourquoi ce que dit Mélissos ne s'ensuit-il pas ?",
   "Dans « Les antinomies de Kant », proposition 8. Puis coche à la fois « La série des causes est complète » et « La loi naturelle » : que te dit la table ? Termine avec la 10 : comment les deux peuvent-elles coexister ?",
   "Passe au monde de Spinoza, proposition 5. Avec la prémisse cochée au départ, un contre-modèle apparaît, celui de Leibniz. Quelle prémisse manque et que dit-elle ?",
   "Proposition 14. Retire une à une les prémisses qu'a utilisées Isabelle. Laquelle te paraît la plus discutable ?"
  ]
 },
 "antinomias": {
  "defs": [
   {
    "id": "libre",
    "origen": "Troisième antinomie",
    "texto": "x est libre, au sens cosmologique : il commence de lui-même une série ; aucun état antérieur ne le détermine."
   },
   {
    "id": "incondicionado",
    "origen": "Quatrième antinomie",
    "texto": "x est inconditionné, absolument nécessaire : son existence ne dépend d’aucune condition."
   },
   {
    "id": "simple",
    "origen": "Deuxième antinomie",
    "texto": "x est simple : il n’a pas de parties."
   },
   {
    "id": "compuesto",
    "origen": "Deuxième antinomie",
    "texto": "x est composé : il a au moins une partie."
   }
  ],
  "grupos": [
   {
    "id": "a1",
    "nom": "1re : le commencement du monde"
   },
   {
    "id": "a2",
    "nom": "2e : le simple"
   },
   {
    "id": "a3",
    "nom": "3e : la liberté"
   },
   {
    "id": "a4",
    "nom": "4e : l’être nécessaire"
   }
  ],
  "premisas": [
   {
    "id": "T1_sintesis_completa",
    "grupo": "a1",
    "que": "La série des états passés du monde est complète : il n’y a pas de régression à l’infini vers le passé. C’est ainsi que la table lit la phrase de Kant « une série infinie ne peut s’achever par synthèse successive ». Dans un monde fini, comme ceux de la table, elle est toujours vérifiée."
   },
   {
    "id": "A1_tiempo_sin_principio",
    "grupo": "a1",
    "que": "Le temps n’a pas de premier instant : avant chaque instant, il y en a un autre. Cela ne tient que dans un monde infini, que la table ne peut pas construire."
   },
   {
    "id": "A1_tiempo_vacio_homogeneo",
    "grupo": "a1",
    "que": "Le temps vide est homogène : si le monde existe à un instant et qu’avant il n’y avait rien, rien ne distingue cet instant d’un instant vide antérieur, de sorte que le monde devrait exister aussi en celui-ci."
   },
   {
    "id": "M1_hay_mundo",
    "grupo": "a1",
    "que": "Le monde existe à un instant au moins : c’est un tout donné dans le temps."
   },
   {
    "id": "T2_division_acaba",
    "grupo": "a2",
    "que": "La division s’arrête : il n’y a pas de parties de parties sans fin. C’est ainsi que la table lit Kant : la composition n’est qu’une relation entre des substances, et si on la supprimait, il devrait rester quelque chose."
   },
   {
    "id": "M_transitiva",
    "grupo": "a2",
    "que": "La partie d’une partie est partie du tout."
   },
   {
    "id": "M_irreflexiva",
    "grupo": "a2",
    "que": "Rien n’est partie propre de soi-même."
   },
   {
    "id": "A2_espacio_divisible",
    "grupo": "a2",
    "que": "Ce qui occupe un espace a des parties qui occupent aussi un espace : l’espace n’est pas fait de points, mais d’espaces."
   },
   {
    "id": "M2_hay_espacio",
    "grupo": "a2",
    "que": "Quelque chose occupe un espace."
   },
   {
    "id": "T3_serie_completa",
    "grupo": "a3",
    "que": "La série des causes de ce qui arrive est complète : il n’y a pas de régression à l’infini."
   },
   {
    "id": "A3_ley_natural",
    "grupo": "a3",
    "que": "La loi naturelle : tout ce qui arrive a un état antérieur qui le détermine."
   },
   {
    "id": "S3_ley_de_los_fenomenos",
    "grupo": "a3",
    "que": "La loi naturelle vaut pour les phénomènes : tout phénomène a une cause naturelle qui est aussi un phénomène."
   },
   {
    "id": "T4_serie_completa",
    "grupo": "a4",
    "que": "La série des conditions d’existence est complète : il n’y a pas de régression à l’infini."
   },
   {
    "id": "T4_condicion_en_el_tiempo",
    "grupo": "a4",
    "que": "Ce qui conditionne quelque chose qui est dans le temps est aussi dans le temps, dans le monde. La thèse et l’antithèse l’utilisent toutes les deux."
   },
   {
    "id": "A4_ley_dinamica",
    "grupo": "a4",
    "que": "La loi dynamique : tout ce qui est dans le monde a une condition."
   },
   {
    "id": "M4_hay_mundo",
    "grupo": "a4",
    "que": "Il y a un monde : quelque chose y existe."
   },
   {
    "id": "S4_ley_en_el_mundo",
    "grupo": "a4",
    "que": "À l’intérieur du monde, toute chose a une condition qui est aussi dans le monde."
   }
  ],
  "debate": {
   "titulo": "Et si le problème, c’était les prémisses de Kant ?",
   "parrafos": [
    "La logique ne décide pas si la thèse et l’antithèse sont contradictoires ou contraires  : cela dépend d’une prémisse préalable, celle de savoir si « le monde » est un tout donné. Kant la résout avec sa propre philosophie, et cela ouvre plusieurs objections. Ici, on ne rend pas de verdict.",
    "<b>Un cercle ?</b> Kant présente les antinomies comme une preuve indirecte de son idéalisme transcendantal  : si le monde était une chose en soi, la raison se contredirait (A506-507 / B534-535). Mais son issue suppose déjà que l’espace et le temps sont des formes de notre sensibilité, et c’est pourquoi le monde n’est jamais donné en entier. Si les antinomies se dissolvent grâce à l’idéalisme, peuvent-elles être en même temps une preuve indépendante de celui-ci ? H. E. Allison, dans <em>Kant's Transcendental Idealism</em> (1983), répond qu’une prémisse plus faible suffit  : le réaliste suppose que le monde est un tout donné en soi, et cette supposition conduit à elle seule à la contradiction.",
    "<b>Pourquoi lâcher cette prémisse et pas une autre ?</b> Chaque conflit repose sur plusieurs prémisses, et la table permet de retirer n’importe laquelle. Kant lâche le monde donné. Celui qui lâche la prémisse de la thèse, « la série est complète », garde l’antithèse sans antinomie  : ce sont les propositions 4b, 7b, 10b et 14b, qu’Isabelle construit avec les entiers relatifs et les entiers naturels. C’est ce qu’ont vu, avec des raisons différentes, Schopenhauer, Cantor et Russell.",
    "<b>Et si la contradiction n’était pas une erreur ?</b> G. W. F. Hegel, dans l’<em>Encyclopédie des sciences philosophiques</em> (§ 48), reproche à Kant trop de tendresse pour le monde  : il lui ôte la contradiction pour la mettre sur le dos de la raison. Pour Hegel, la contradiction est dans les choses mêmes, et il n’y a pas quatre antinomies, elles apparaissent dans tout concept. La logique classique de la table n’admet pas cette issue  : en elle, d’une contradiction découle n’importe quoi.",
    "À réfléchir  : sur la table, quelle prémisse te semble la plus facile à lâcher dans chaque antinomie ? Est-ce la même dans les quatre ?"
   ],
   "tAntes": "Avant Kant",
   "antes": [
    "Zénon d’Élée (Ve siècle av. J.-C.)  : les paradoxes du mouvement et de la division sans fin, tels que les rapporte Aristote dans la <em>Physique</em> (livre VI).",
    "Sextus Empiricus (IIe siècle), <em>Esquisses pyrrhoniennes</em>  : opposer à chaque raisonnement un autre de force égale (<em>isosthéneia</em>) et suspendre le jugement (<em>epokhḗ</em>).",
    "Maïmonide, <em>Guide des égarés</em> (II, 15-25), et Thomas d’Aquin, <em>Somme théologique</em> (I, q. 46, a. 2) et <em>De l’éternité du monde</em>  : ni le commencement du monde ni son éternité ne peuvent se démontrer. Kant dira quelque chose de plus fort  : que les deux se démontrent.",
    "P. Bayle, <em>Dictionnaire historique et critique</em> (1697), article « Zénon d’Élée »  : l’étendue ne peut être constituée ni de points, ni d’atomes étendus, ni de parties divisibles à l’infini. C’est presque la deuxième antinomie, mais Bayle conclut qu’il faut s’en remettre à la foi.",
    "G. W. Leibniz et S. Clarke, <em>Correspondance</em> (1715-1716)  : le commencement du monde, l’espace absolu et la liberté. S. M. Al-Azm, dans <em>The Origins of Kant's Arguments in the Antinomies</em> (1972), soutient que Kant y a puisé une bonne partie de ses preuves."
   ]
  },
  "props": [
   {
    "id": "K1T",
    "parte": 1,
    "nombre": "1. Le monde a un commencement (thèse)",
    "cita": "Le monde a un commencement dans le temps et il est aussi enfermé dans des limites dans l’espace. (A426 / B454)",
    "pregunta": "Le monde a un <b>commencement</b> dans le temps : il y a un instant où il existe et avant lequel il n’existait pas.",
    "pasos": [
     {
      "txt": "Suppose que le monde n’ait pas de commencement : avant chaque état du monde, il y en a eu un autre.",
      "k": "hip"
     },
     {
      "txt": "Alors, jusqu’à maintenant, une série infinie d’états se serait écoulée, et une série infinie ne peut pas avoir été achevée.",
      "k": "T1_sintesis_completa"
     },
     {
      "txt": "Mais le monde existe. Conflit.",
      "k": "M1_hay_mundo"
     },
     {
      "txt": "Donc il a un commencement. Isabelle le démontre (tesis1), avec la synthèse complète lue comme « sans régression à l’infini ».",
      "k": "fin"
     }
    ],
    "leccion": {
     "T1_sintesis_completa": "Sans elle, le monde peut ne pas avoir de commencement, mais seulement dans un monde infini, comme les entiers relatifs : la table ne peut pas le construire (modelo_antitesis1). Dans un monde fini, il y a toujours un premier instant.",
     "M1_hay_mundo": "Sans elle, il se peut qu’il n’y ait pas de monde, et alors pas non plus de commencement."
    }
   },
   {
    "id": "K1A",
    "parte": 1,
    "nombre": "2. Le monde n’a pas de commencement (antithèse)",
    "cita": "Le monde n’a ni commencement ni limites dans l’espace, mais il est infini aussi bien dans le temps que dans l’espace. (A427 / B455)",
    "pregunta": "Le monde n’a <b>pas de commencement</b> dans le temps.",
    "pasos": [
     {
      "txt": "Suppose que le monde commence à un instant.",
      "k": "hip"
     },
     {
      "txt": "Avant cet instant, il y en a eu un autre : un temps vide.",
      "k": "A1_tiempo_sin_principio"
     },
     {
      "txt": "Mais dans le temps vide, aucun instant ne se distingue d’un autre : si le monde a commencé à celui-ci, il devrait exister aussi au précédent. Conflit.",
      "k": "A1_tiempo_vacio_homogeneo"
     },
     {
      "txt": "Donc le monde ne commence pas. Isabelle le démontre (antitesis1).",
      "k": "fin"
     }
    ],
    "leccion": {
     "A1_tiempo_sin_principio": "Sans elle, le temps peut avoir un premier instant, et le monde commencer à cet instant sans aucun temps vide avant.",
     "A1_tiempo_vacio_homogeneo": "Sans elle, le monde peut commencer à un instant quelconque, après un temps vide."
    }
   },
   {
    "id": "K1D",
    "parte": 1,
    "nombre": "3. Si le monde est donné, ou bien il commence ou bien il ne commence pas",
    "pregunta": "Si le monde existe comme un tout dans le temps, ou bien il <b>a un commencement</b> ou bien il <b>n’en a pas</b>.",
    "prueba": "Le monde étant donné, « a un commencement » et « n’a pas de commencement » sont contradictoires : l’une des deux est vraie et l’autre fausse. C’est pourquoi Kant peut prouver chacune en réfutant l’autre : toutes ses preuves sont par réduction à l’absurde."
   },
   {
    "id": "K1S",
    "parte": 1,
    "posible": true,
    "nombre": "4. Sans le monde donné, les deux tombent (l’issue de Kant)",
    "pregunta": "Il se peut que le monde <b>n’ait ni commencement ni absence de commencement</b>.",
    "nota": "Cela arrive si le monde n’est pas un tout donné dans le temps. C’est l’issue que propose Kant pour les antinomies mathématiques (A501-507 / B529-535)  : la thèse et l’antithèse ne sont pas contradictoires, mais contraires, comme « tout corps sent bon » et « tout corps sent mauvais », qui sont fausses toutes les deux si les corps n’ont pas d’odeur. Pour Kant, le monde n’est pas une chose en soi, mais une régression d’expériences qui n’est jamais donnée en entier. La table montre seulement la forme logique  : sans la présupposition, aucune des deux n’est vérifiée.",
    "notaNo": "Le monde étant donné, cela ne peut pas arriver : c’est la proposition 3."
   },
   {
    "id": "K1C",
    "parte": 1,
    "posible": true,
    "nombre": "4b. Une autre issue  : un passé sans commencement",
    "pregunta": "Il se peut que le monde existe et <b>n’ait pas de commencement</b>  : avant chaque état, il y en a eu un autre, sans fin.",
    "nota": "C’est une issue que Kant n’a pas prise  : lâcher la prémisse de la thèse, « une série infinie ne peut s’être achevée ». Avec l’infini actuel de G. Cantor, un passé infini déjà écoulé ne renferme aucune contradiction, et l’antithèse reste sans rivale. B. Russell, dans <em>Our Knowledge of the External World</em> (1914, leçon VI), a soutenu que les preuves des thèses reposent sur une erreur au sujet de l’infini. Isabelle construit ce monde avec les entiers relatifs (modelo_antitesis1). Quelle prémisse faut-il lâcher, celle de la thèse ou celle du monde donné, la logique ne le décide plus.",
    "notaNo": "Avec la prémisse de la thèse, cela ne peut pas arriver  : c’est la proposition 1."
   },
   {
    "id": "K2T",
    "parte": 2,
    "nombre": "5. Tout composé se compose de parties simples (thèse)",
    "cita": "Toute substance composée se compose dans le monde de parties simples, et il n’existe nulle part rien d’autre que le simple ou ce qui en est composé. (A434 / B462)",
    "pregunta": "Tout composé a au moins une <b>partie simple</b>.",
    "pasos": [
     {
      "txt": "Suppose un composé sans aucune partie simple : chacune de ses parties a une autre partie, et cette autre encore une autre, sans fin.",
      "k": "hip"
     },
     {
      "txt": "Mais la division s’arrête : la composition n’est qu’une relation entre des substances, et si on la supprimait, il resterait quelque chose.",
      "k": "T2_division_acaba"
     },
     {
      "txt": "Le dernier terme auquel on parvient est partie du composé, parce que la partie d’une partie est partie.",
      "k": "M_transitiva"
     },
     {
      "txt": "Donc le composé a une partie simple. Isabelle le démontre (tesis2).",
      "k": "fin"
     }
    ],
    "leccion": {
     "T2_division_acaba": "Sans elle, dans un monde fini, elle ne peut échouer que si quelque chose est partie de soi-même : la division sans fin, pour de bon, exige un monde infini (modelo_antitesis2).",
     "M_transitiva": "Sans elle, le dernier terme auquel on parvient en divisant peut ne pas être partie du composé."
    }
   },
   {
    "id": "K2A",
    "parte": 2,
    "nombre": "6. Rien n’est simple (antithèse)",
    "cita": "Aucune chose composée dans le monde ne se compose de parties simples, et il n’existe en lui rien de simple. (A435 / B463)",
    "pregunta": "Rien de ce qui occupe un espace n’est <b>simple</b>.",
    "prueba": "Tout ce qui est composé occupe un espace, et l’espace n’est pas fait de points, mais d’espaces : ce qui l’occupe a des parties les unes hors des autres, qui occupent aussi un espace. Rien en lui ne peut être simple. Isabelle le démontre (antitesis2).",
    "leccion": {
     "A2_espacio_divisible": "Sans elle, quelque chose dans l’espace peut être simple, comme un atome."
    }
   },
   {
    "id": "K2M",
    "parte": 2,
    "posible": true,
    "nombre": "7. Quelque chose de simple et un composé sans parties simples (les deux échouent)",
    "pregunta": "Il peut y avoir quelque chose de simple et, en même temps, un composé qui <b>n’a aucune partie simple</b>.",
    "nota": "Ce monde rend fausses la thèse et l’antithèse à la fois : ici non plus elles ne sont pas contradictoires, mais contraires, et plus nettement que dans la première, parce qu’il y a des composés. Pour Kant, la division d’un corps va seulement « à l’indéfini » : on n’arrive pas à des parties simples et il n’est pas non plus donné une infinité de parties (A523-527 / B551-555). Cela, la logique ne le vérifie plus."
   },
   {
    "id": "K2C",
    "parte": 2,
    "posible": true,
    "nombre": "7b. Une autre issue  : divisible sans fin",
    "pregunta": "Il peut y avoir des composés et <b>rien de simple</b>  : chaque partie a à son tour des parties, sans fin.",
    "nota": "Encore une fois, lâcher la prémisse de la thèse, « la division s’achève ». A. Schopenhauer, dans la « Critique de la philosophie kantienne » qu’il a ajoutée au <em>Monde comme volonté et comme représentation</em> (1819), soutient que dans les quatre antinomies seules valent les preuves des antithèses, et que celles des thèses sont des sophismes. Les mathématiques du continu, depuis Cantor et Dedekind, traitent sans contradiction un segment à une infinité de parties. Isabelle construit ce monde avec les entiers naturels (modelo_antitesis2).",
    "notaNo": "Avec la prémisse de la thèse, cela ne peut pas arriver  : si la division s’achève, quelque chose est simple."
   },
   {
    "id": "K3T",
    "parte": 3,
    "nombre": "8. Il y a une causalité par liberté (thèse)",
    "cita": "La causalité selon les lois de la nature n’est pas la seule dont puissent dériver tous les phénomènes du monde. Pour les expliquer, il est nécessaire d’admettre en outre une causalité par liberté. (A444 / B472)",
    "pregunta": "Il y a quelque chose de <b>libre</b> : il commence de lui-même une série, sans aucun état antérieur qui le détermine.",
    "pasos": [
     {
      "txt": "Suppose que tout arrive seulement selon des lois naturelles : chaque état a un état antérieur qui le détermine.",
      "k": "hip"
     },
     {
      "txt": "Alors la série des causes n’a jamais de premier commencement.",
      "k": "hip"
     },
     {
      "txt": "Mais la série des causes doit être complète : rien n’arrive sans une cause suffisamment déterminée. Conflit.",
      "k": "T3_serie_completa"
     },
     {
      "txt": "Donc il y a une cause qui commence d’elle-même une série : une causalité par liberté. Isabelle le démontre (tesis3).",
      "k": "fin"
     }
    ],
    "leccion": {
     "T3_serie_completa": "Sans elle, les causes peuvent aller en cercle, et tout événement a sa cause. Isabelle construit en outre la régression sans fin avec les entiers relatifs (modelo_antitesis3)."
    }
   },
   {
    "id": "K3A",
    "parte": 3,
    "nombre": "9. Tout arrive par des lois naturelles (antithèse)",
    "cita": "Il n’y a pas de liberté, mais tout dans le monde arrive uniquement selon des lois de la nature. (A445 / B473)",
    "pregunta": "Rien n’est <b>libre</b> : tout a un état antérieur qui le détermine.",
    "prueba": "Une cause libre commencerait une série sans aucun état antérieur qui la détermine selon une loi. Cela rompt la loi de la causalité et, avec elle, l’unité de l’expérience. Isabelle le démontre (antitesis3).",
    "leccion": {
     "A3_ley_natural": "Sans elle, un événement peut commencer de lui-même."
    }
   },
   {
    "id": "K3S",
    "parte": 3,
    "posible": true,
    "nombre": "10. Liberté et nature, à la fois (l’issue de Kant)",
    "pregunta": "Il peut y avoir quelque chose <b>qui n’est pas un phénomène</b>, de libre, qui soit cause intelligible des phénomènes, bien que chaque phénomène ait sa cause naturelle.",
    "nota": "C’est l’issue que propose Kant pour les antinomies dynamiques (A532-558 / B560-586)  : l’antithèse vaut des phénomènes et la thèse de l’intelligible. Avec deux causalités distinctes, la naturelle entre phénomènes et l’intelligible venue du dehors, les deux peuvent coexister  : ici, elles ne sont pas fausses toutes les deux, comme dans les mathématiques, mais vraies toutes les deux. Dans un monde fini, la causalité naturelle entre phénomènes tourne en cercle  ; Isabelle la construit sans cercles, avec les entiers relatifs (solucion3). Que cette cause intelligible existe, la logique ne le décide pas  : elle montre seulement qu’il n’y a pas de contradiction.",
    "notaNo": "Avec ces prémisses, cela ne peut pas arriver."
   },
   {
    "id": "K3C",
    "parte": 3,
    "posible": true,
    "nombre": "10b. Une autre issue  : des causes sans cause première",
    "pregunta": "Il se peut que tout ait sa cause <b>sans cercles et sans cause première</b>  : une régression sans fin.",
    "nota": "Lâcher la prémisse de la thèse, « la série des causes est complète », laisse l’antithèse seule  : tout arrive selon des lois naturelles et il n’est pas besoin d’une cause libre qui commence la série. Isabelle le construit avec les entiers relatifs (modelo_antitesis3). Savoir s’il reste alors une place pour la liberté humaine est une autre question, et la logique ne la décide pas.",
    "notaNo": "Avec la prémisse de la thèse, cela ne peut pas arriver  : il y a quelque chose de libre (proposition 8)."
   },
   {
    "id": "K4T",
    "parte": 4,
    "nombre": "11. Au monde appartient quelque chose de nécessaire (thèse)",
    "cita": "Au monde appartient quelque chose qui, soit comme partie de lui, soit comme sa cause, est un être absolument nécessaire. (A452 / B480)",
    "pregunta": "Dans le monde, il y a quelque chose d’<b>inconditionné</b>, d’absolument nécessaire.",
    "pasos": [
     {
      "txt": "Suppose que tout ce qui est dans le monde ait une condition.",
      "k": "hip"
     },
     {
      "txt": "Mais la série des conditions est complète : il faut arriver à quelque chose d’inconditionné.",
      "k": "T4_serie_completa"
     },
     {
      "txt": "Ce qui conditionne quelque chose qui est dans le temps est dans le temps : l’inconditionné appartient au monde.",
      "k": "T4_condicion_en_el_tiempo"
     },
     {
      "txt": "Et il y a un monde. Conflit.",
      "k": "M4_hay_mundo"
     },
     {
      "txt": "Donc au monde appartient quelque chose d’absolument nécessaire. Isabelle le démontre (tesis4). Attention : de « chaque chose du monde a une condition », il ne suit pas que « le monde entier a une condition hors de lui ». C’est le pas de l’argument cosmologique que Kant critique, et pour le vérifier il faut parler d’ensembles de choses, en logique d’ordre supérieur (el_todo_no_tiene_condicion_exterior).",
      "k": "fin"
     }
    ],
    "leccion": {
     "T4_serie_completa": "Sans elle, les conditions peuvent aller en cercle, et rien dans le monde n’est inconditionné.",
     "T4_condicion_en_el_tiempo": "Sans elle, l’inconditionné peut être hors du monde, et la thèse ne dit plus qu’il lui appartient.",
     "M4_hay_mundo": "Sans elle, il se peut qu’il n’y ait pas de monde."
    }
   },
   {
    "id": "K4A",
    "parte": 4,
    "nombre": "12. Rien dans le monde n’est nécessaire (antithèse)",
    "cita": "Il n’existe nulle part aucun être absolument nécessaire, ni dans le monde ni hors du monde comme sa cause. (A453 / B481)",
    "pregunta": "Rien de ce qui est dans le monde n’est <b>inconditionné</b>.",
    "prueba": "À l’intérieur du monde règne la loi dynamique : tout ce qui y est a une condition. Isabelle le démontre (antitesis4_en_el_mundo).",
    "leccion": {
     "A4_ley_dinamica": "Sans elle, quelque chose dans le monde peut ne pas avoir de condition."
    }
   },
   {
    "id": "K4F",
    "parte": 4,
    "nombre": "13. Rien hors du monde ne le conditionne (antithèse)",
    "pregunta": "Rien de ce qui est <b>hors du monde</b> n’est condition de quelque chose du monde.",
    "prueba": "Si quelque chose du dehors conditionnait quelque chose du monde, il commencerait une série dans le temps et serait donc dans le monde. C’est la même prémisse que celle qu’utilisait la thèse : « ce qui conditionne quelque chose dans le temps est dans le temps ». Isabelle le démontre (antitesis4_fuera).",
    "leccion": {
     "T4_condicion_en_el_tiempo": "Sans elle, quelque chose hors du monde peut conditionner quelque chose du monde."
    }
   },
   {
    "id": "K4S",
    "parte": 4,
    "posible": true,
    "nombre": "14. Un fondement hors du temps (l’issue de Kant)",
    "pregunta": "Il peut y avoir quelque chose <b>hors du monde</b>, d’inconditionné, qui soit fondement intelligible de tout ce qui est dans le monde, bien qu’à l’intérieur du monde tout ait sa condition.",
    "nota": "Kant n’applique pas la prémisse « ce qui conditionne quelque chose dans le temps est dans le temps » au fondement intelligible, parce que ce n’est pas une condition dans le temps. Ainsi la thèse, de l’intelligible, et l’antithèse, des phénomènes, peuvent coexister (A559-565 / B587-593). Que ce fondement existe, et que ce soit ce que la religion appelle Dieu, la logique ne le décide plus : Kant le laisse à la raison pratique. Isabelle construit le monde sans cercles (solucion4).",
    "notaNo": "Avec ces prémisses, cela ne peut pas arriver."
   },
   {
    "id": "K4C",
    "parte": 4,
    "posible": true,
    "nombre": "14b. Une autre issue  : une chaîne sans être nécessaire",
    "pregunta": "Il se peut que tout ce qui est dans le monde ait sa condition, que rien du dehors ne le conditionne et que <b>rien ne soit nécessaire</b>.",
    "nota": "C’est l’objection de Cléanthe dans les <em>Dialogues sur la religion naturelle</em> de D. Hume (1779, partie IX)  : si chaque membre d’une chaîne éternelle a son explication, demander en plus la cause du tout est une question de trop. Il suffit de lâcher la prémisse de la thèse, « la série des conditions est complète ». Isabelle construit ce monde avec les entiers relatifs (modelo_antitesis4). Débat ouvert, sans verdict.",
    "notaNo": "Avec la série complète, cela ne peut pas arriver  : quelque chose dans le monde serait inconditionné (salida4_con_serie_completa)."
   }
  ]
 },
 "cosmos": {
  "defs": [
   {
    "id": "cambia",
    "origen": "Parménide, B8",
    "texto": "x change : il est clair à un instant et ne l'est pas à un autre."
   },
   {
    "id": "siempreEs",
    "origen": "Parménide, B8",
    "texto": "x est toujours : il existe à tous les instants."
   },
   {
    "id": "comienza",
    "origen": "Timée, 28b",
    "texto": "x commence : il existe à un instant et à aucun instant antérieur."
   }
  ],
  "grupos": [
   {
    "id": "c1",
    "nom": "Parménide : l'être"
   },
   {
    "id": "c2",
    "nom": "Les atomistes : le vide"
   },
   {
    "id": "c3",
    "nom": "Mélissos : ce qui n'est pas engendré"
   },
   {
    "id": "c4",
    "nom": "Le Démiurge du Timée"
   }
  ],
  "premisas": [
   {
    "id": "P_no_ser",
    "grupo": "c1",
    "que": "Le non-être n'est pas : ce qui est, est à tout instant ; rien ne commence ni ne cesse d'être (B6, B8)."
   },
   {
    "id": "P_salto_otro",
    "grupo": "c1",
    "que": "Être autre, c'est ne pas être : si x n'est pas y, alors x n'est pas. C'est lire « ne pas être y » comme « ne pas être » tout court."
   },
   {
    "id": "P_salto_cambio",
    "grupo": "c1",
    "que": "Cesser d'être clair, c'est ne pas être : si x n'est pas clair à un instant, à cet instant x n'est pas."
   },
   {
    "id": "P_sin_vacio",
    "grupo": "c2",
    "que": "Le vide n'est pas : rien n'est vide."
   },
   {
    "id": "P_separa",
    "grupo": "c2",
    "que": "Deux étants ne se distinguent que s'il y a quelque chose de vide qui les sépare. C'est ainsi qu'Aristote lit les Éléates."
   },
   {
    "id": "M_generado_principio",
    "grupo": "c3",
    "que": "Ce qui est engendré a un commencement."
   },
   {
    "id": "M_no_generado",
    "grupo": "c3",
    "que": "L'être n'est pas engendré."
   },
   {
    "id": "M_conversa",
    "grupo": "c3",
    "que": "Ce qui a un commencement est engendré. C'est la réciproque de la première, et Mélissos ne la dit pas."
   },
   {
    "id": "D_dos_planos",
    "grupo": "c4",
    "que": "Rien n'est toujours et ne devient à la fois : ce sont deux plans (27d-28a)."
   },
   {
    "id": "D_causa",
    "grupo": "c4",
    "que": "Tout ce qui devient devient par quelque cause (28a)."
   },
   {
    "id": "D_visible",
    "grupo": "c4",
    "que": "Ce qui est visible et tangible devient (28b-c)."
   },
   {
    "id": "D_bello",
    "grupo": "c4",
    "que": "Le visible, le cosmos, est beau (29a)."
   },
   {
    "id": "D_hacedor_bueno",
    "grupo": "c4",
    "que": "Celui qui fait le visible est bon (29a)."
   },
   {
    "id": "D_modelo",
    "grupo": "c4",
    "que": "Si ce qui est fait est beau et que celui qui le fait est bon, il l'a fait en regardant un modèle qui est toujours (29a)."
   },
   {
    "id": "U_dos_copias",
    "grupo": "c4",
    "que": "S'il y avait deux copies du même modèle, chacune serait copie d'un autre modèle qui les embrasserait toutes deux (31a)."
   },
   {
    "id": "U_un_modelo",
    "grupo": "c4",
    "que": "Chaque copie l'est d'un seul modèle, le complet (31b)."
   },
   {
    "id": "L_literal",
    "grupo": "c4",
    "que": "Ce qui est fait commence à être. C'est ainsi qu'Aristote lit le « il est devenu » (<em>gégonen</em>) du Timée."
   }
  ],
  "debate": {
   "titulo": "Zénon, et ce que la logique ne tranche pas",
   "parrafos": [
    "<b>Zénon et la dichotomie.</b> Pour défendre Parménide, Zénon soutient que le mouvement est impossible : pour parcourir un stade, il faut d'abord en parcourir la moitié, et avant cela la moitié de ce qui reste, et ainsi sans fin (Aristote, <em>Physique</em>, VI 9, 239b11-14). La réponse mathématique moderne est que des moitiés infinies totalisent une distance finie : 1/2 + 1/4 + 1/8 + … = 1. Isabelle le démontre (dicotomia) ; la table ne le peut pas, car il faudrait un monde infini. Savoir si cela répond vraiment à Zénon, qui demandait comment s'achève une série sans fin, reste discuté : c'est la même question que la première antinomie de Kant.",
    "<b>Quelle prémisse lâcher ?</b> Devant Parménide, chaque héritier en lâche une différente : les atomistes, « le vide n'est pas » ; Platon, le saut entre « n'être pas clair » et « n'être pas » ; Empédocle et Anaxagore, « rien ne change », qu'ils remplacent par le mélange et la séparation de ce qui est déjà. Aucun ne lâche « rien ne vient de rien ». La logique dit quelles prémisses s'opposent ; laquelle on lâche, c'est la philosophie qui le décide.",
    "<b>Un récit vraisemblable.</b> Platon appelle sa cosmologie <em>eikṑs mŷthos</em>, un récit vraisemblable (29d). La table montre sa structure et quelles prémisses font le travail, non s'il est vrai. Débat ouvert, sans verdict.",
    "À réfléchir : le Démiurge fait le cosmos, mais qui fait le Démiurge ? Quelle prémisse de la proposition 7 l'empêche ou le permet ?"
   ]
  },
  "props": [
   {
    "id": "C1",
    "parte": 1,
    "nombre": "1. Rien ne change",
    "cita": "Aussi ne sera-t-il que nom, tout ce que les mortels ont posé, persuadés que c'est vrai : naître et périr, être et ne pas être, changer de lieu et muer la couleur éclatante. (B8, 38-41)",
    "pregunta": "Rien ne <b>change</b> : ce qui est clair l'est toujours, et ce qui n'est pas clair ne l'est jamais.",
    "pasos": [
     {
      "txt": "Suppose que x est clair à un instant et ne l'est pas à un autre.",
      "k": "hip"
     },
     {
      "txt": "À l'instant où il n'est pas clair, x n'est pas : c'est le saut de « n'être pas clair » à « n'être pas ».",
      "k": "P_salto_cambio"
     },
     {
      "txt": "Mais le non-être n'est pas : x est à tout instant. Choc.",
      "k": "P_no_ser"
     },
     {
      "txt": "Donc rien ne change. Isabelle le démontre (inmovil_mesa).",
      "k": "fin"
     }
    ],
    "leccion": {
     "P_salto_cambio": "Sans elle, quelque chose peut changer et continuer d'être : cesser d'être clair n'est pas cesser d'être. C'est l'issue de Platon dans le <em>Sophiste</em> (proposition 3).",
     "P_no_ser": "Sans elle, quelque chose peut changer s'il cesse d'être quand il n'est pas clair. Parménide ne l'admettrait pas."
    }
   },
   {
    "id": "C2",
    "parte": 1,
    "nombre": "2. L'être est un",
    "cita": "Il ne fut jamais ni ne sera, puisqu'il est maintenant, tout ensemble, un, continu. (B8, 5-6)",
    "pregunta": "Tout est <b>la même chose</b> : il n'y a pas deux choses.",
    "pasos": [
     {
      "txt": "Suppose deux choses distinctes, x et y.",
      "k": "hip"
     },
     {
      "txt": "x n'est pas y, et le saut dit qu'alors x n'est pas.",
      "k": "P_salto_otro"
     },
     {
      "txt": "Mais le non-être n'est pas. Choc.",
      "k": "P_no_ser"
     },
     {
      "txt": "Donc il n'y a qu'une seule chose. Isabelle le démontre (uno_mesa). Le même saut, appliqué à « être autre » et à « n'être pas clair », donne l'un et l'immobile : dans Isabelle, les deux cas découlent d'une seule prémisse d'ordre supérieur (salto_casos).",
      "k": "fin"
     }
    ],
    "leccion": {
     "P_salto_otro": "Sans elle, il peut y avoir beaucoup de choses : être autre n'est pas ne pas être.",
     "P_no_ser": "Sans elle, il peut y avoir deux choses, mais aucune ne serait jamais."
    }
   },
   {
    "id": "C3",
    "parte": 1,
    "posible": true,
    "nombre": "3. Beaucoup de choses qui changent, sans non-être (l'issue du Sophiste)",
    "pregunta": "Il peut y avoir <b>deux choses</b> qui sont toujours, et l'une d'elles peut <b>changer</b>.",
    "nota": "Cela arrive si l'on lâche le saut : « n'être pas clair » veut dire « être autre que clair », non « ne pas être du tout ». C'est ce que fait Platon dans le <em>Sophiste</em> (241d), quand il dit qu'il faut mettre à l'épreuve le raisonnement de « notre père Parménide » : le prétendu « parricide ». Que Parménide ait raisonné avec ce saut est une interprétation, défendue par plusieurs commentateurs, comme G. E. L. Owen, et contestée par d'autres. Isabelle construit ce monde (sin_el_salto).",
    "notaNo": "Avec le saut, cela ne peut pas arriver : c'est la proposition 1."
   },
   {
    "id": "C4",
    "parte": 2,
    "nombre": "4. Sans vide, ce qui est est un",
    "cita": "Certains anciens ont cru que ce qui est est nécessairement un et immobile : le vide n'est pas, et il ne pourrait y avoir beaucoup de choses sans quelque chose qui les sépare. (Aristote, De la génération et de la corruption, I 8, 325a2-6)",
    "pregunta": "Ce qui n'est pas vide est <b>une seule chose</b>.",
    "prueba": "S'il y avait deux étants, quelque chose de vide les séparerait ; or le vide n'est pas. Isabelle le démontre (uno_sin_vacio). C'est un autre chemin vers l'un, sans le saut : celui de la lecture d'Aristote.",
    "leccion": {
     "P_sin_vacio": "Sans elle, il peut y avoir beaucoup d'étants avec le vide entre eux : c'est l'issue des atomistes (proposition 5).",
     "P_separa": "Sans elle, deux étants peuvent être côte à côte sans rien entre eux."
    }
   },
   {
    "id": "C5",
    "parte": 2,
    "posible": true,
    "nombre": "5. Beaucoup d'atomes et le vide (l'issue des atomistes)",
    "cita": "Leucippe et son compagnon Démocrite disent que les éléments sont le plein et le vide, et appellent l'un l'être et l'autre le non-être ; c'est pourquoi ils disent aussi que l'être n'est pas plus que le non-être. (Aristote, Métaphysique, I 4, 985b4-8)",
    "pregunta": "Il peut y avoir <b>deux étants</b> et du <b>vide</b>.",
    "nota": "Les atomistes acceptent que deux étants ne se distinguent que par le vide, et lâchent « le vide n'est pas ». Ils conservent une autre prémisse de Parménide : rien ne vient de rien. Les atomes ne naissent ni ne périssent ; ils se déplacent seulement dans le vide. Isabelle construit ce monde (muchos_con_vacio) et un autre avec mouvement (atomistas).",
    "notaNo": "Sans vide, cela ne peut pas arriver : c'est la proposition 4."
   },
   {
    "id": "C6",
    "parte": 3,
    "nombre": "6. Ce qui n'est pas engendré n'a pas de commencement (Mélissos)",
    "cita": "Puisqu'il n'est pas né, il est, et il était toujours et sera toujours, et il n'a ni commencement ni fin, mais il est infini. (Mélissos, B2)",
    "pregunta": "Rien n'a de <b>commencement</b>.",
    "pasos": [
     {
      "txt": "L'être n'est pas engendré.",
      "k": "M_no_generado"
     },
     {
      "txt": "Ce qui a un commencement est engendré. C'est la prémisse qu'il faut, et Mélissos ne la dit pas.",
      "k": "M_conversa"
     },
     {
      "txt": "Donc l'être n'a pas de commencement. Isabelle le démontre avec la réciproque (Meliso_con_la_conversa).",
      "k": "fin"
     }
    ],
    "leccion": {
     "M_conversa": "Sans elle, cela ne s'ensuit pas : quelque chose peut avoir un commencement sans avoir été engendré. C'est la faute que lui reproche Aristote (<em>Réfutations sophistiques</em>, 5, 167b13-20) : de « ce qui est engendré a un commencement », Mélissos passe à « ce qui n'est pas engendré n'en a pas », et c'est nier l'antécédent (falacia_de_Meliso).",
     "M_no_generado": "Sans elle, quelque chose peut être engendré et avoir un commencement."
    }
   },
   {
    "id": "C7",
    "parte": 4,
    "nombre": "7. Le visible a un artisan",
    "cita": "Tout ce qui devient devient nécessairement par quelque cause. (Timée, 28a)",
    "pregunta": "Tout ce qui est <b>visible</b> a quelqu'un qui le <b>fait</b>.",
    "pasos": [
     {
      "txt": "Prends quelque chose de visible.",
      "k": "hip"
     },
     {
      "txt": "Ce qui est visible et tangible devient.",
      "k": "D_visible"
     },
     {
      "txt": "Ce qui devient a une cause.",
      "k": "D_causa"
     },
     {
      "txt": "Donc le visible a un artisan, le Démiurge. Isabelle le démontre (hay_hacedor_mesa). C'est la même forme que la deuxième voie de Thomas, mais ici on ne dit pas que l'artisan soit un ni qu'il n'ait pas de cause.",
      "k": "fin"
     }
    ],
    "leccion": {
     "D_visible": "Sans elle, quelque chose de visible peut ne pas devenir, et n'a pas besoin de cause.",
     "D_causa": "Sans elle, quelque chose peut devenir sans cause."
    }
   },
   {
    "id": "C8",
    "parte": 4,
    "nombre": "8. Le cosmos copie un modèle éternel",
    "cita": "Si ce cosmos est beau et que son artisan est bon, il est évident qu'il a regardé vers l'éternel. (Timée, 29a)",
    "pregunta": "Tout ce qui est visible est fait <b>en regardant un modèle qui est toujours</b>.",
    "prueba": "Le visible a un artisan (proposition 7). Le visible est beau et son artisan, bon ; et ce qui est beau, fait par quelqu'un de bon, copie un modèle éternel. Isabelle le démontre (modelo_eterno_mesa). Deux de ces prémisses ne sont pas de fait, mais de valeur : Platon ajoute qu'il n'est pas permis de penser autrement, ni de le dire.",
    "leccion": {
     "D_hacedor_bueno": "Sans elle, l'artisan peut ne pas être bon et ne copier aucun modèle éternel (sin_hacedor_bueno).",
     "D_bello": "Sans elle, le visible peut ne pas être beau, et rien n'oblige à un modèle éternel.",
     "D_modelo": "Sans elle, un artisan bon peut faire quelque chose de beau sans modèle.",
     "D_causa": "Sans elle, le visible peut ne pas avoir d'artisan.",
     "D_visible": "Sans elle, le visible peut ne pas devenir ni avoir d'artisan."
    }
   },
   {
    "id": "C9",
    "parte": 4,
    "nombre": "9. Le modèle ne devient pas",
    "cita": "Qu'est-ce qui est toujours et n'a pas de génération, et qu'est-ce qui devient toujours et n'est jamais ? (Timée, 27d-28a)",
    "pregunta": "Ce qui <b>est toujours</b> ne <b>devient</b> pas.",
    "prueba": "Ce sont deux plans : ce qui est toujours et n'a pas de génération, et ce qui devient toujours et n'est jamais. Isabelle le démontre (el_modelo_no_deviene). C'est le coup de Platon face à Parménide : le non-changement vaut pour un plan, et le changement, pour l'autre. Kant fera quelque chose de semblable dans les antinomies dynamiques.",
    "leccion": {
     "D_dos_planos": "Sans elle, quelque chose peut être toujours et devenir à la fois : les plans se mêlent."
    }
   },
   {
    "id": "C10",
    "parte": 4,
    "nombre": "10. Il n'y a qu'un seul cosmos",
    "cita": "Avons-nous bien dit qu'il y a un seul ciel, ou était-il plus juste de dire qu'il y en a beaucoup et d'infinis ? Un, s'il doit être fait d'après le modèle. (Timée, 31a)",
    "pregunta": "Deux copies du même modèle sont <b>la même</b>.",
    "pasos": [
     {
      "txt": "Suppose deux copies distinctes du même modèle.",
      "k": "hip"
     },
     {
      "txt": "Chacune serait copie d'un autre modèle qui les embrasserait toutes deux.",
      "k": "U_dos_copias"
     },
     {
      "txt": "Mais chaque copie l'est d'un seul modèle. Choc.",
      "k": "U_un_modelo"
     },
     {
      "txt": "Donc il n'y a qu'un seul cosmos. Isabelle le démontre (un_solo_cosmos_mesa). C'est un argument de régression, cousin du « troisième homme » du <em>Parménide</em> de Platon (132a-b).",
      "k": "fin"
     }
    ],
    "leccion": {
     "U_dos_copias": "Sans elle, deux cosmos peuvent copier le même modèle (sin_dos_copias) : tout le poids de l'argument repose sur cette prémisse.",
     "U_un_modelo": "Sans elle, une copie peut l'être de deux modèles à la fois."
    }
   },
   {
    "id": "C11",
    "parte": 4,
    "posible": true,
    "nombre": "11. Fait et sans commencement (la lecture de Xénocrate)",
    "pregunta": "Il peut y avoir quelque chose de <b>fait</b> qui existe et ne <b>commence</b> pas.",
    "nota": "Ainsi lisaient le <em>Timée</em> Xénocrate puis les néoplatoniciens : « il est devenu » (<em>gégonen</em>) veut dire « il dépend d'une cause », non « il a commencé à un instant », et Platon le raconterait comme s'il avait commencé pour mieux l'enseigner. Aristote rejette cette lecture (<em>Du ciel</em>, I 10, 279b32-280a11). Un cosmos causé et éternel exige des instants infinis vers le passé : Isabelle le construit avec les entiers (lectura_dependencia). Compare avec Thomas d'Aquin, dans « Les cinq voies » : pour lui, la raison seule ne décide pas si le monde a commencé.",
    "notaNo": "Avec la lecture littérale, cela ne peut pas arriver : ce qui est fait commence."
   },
   {
    "id": "C12",
    "parte": 4,
    "posible": true,
    "nombre": "12. Un commencement sans « avant » : le temps naît avec le cosmos",
    "cita": "Le temps est donc né avec le ciel, afin que, nés ensemble, ils se dissolvent aussi ensemble, si jamais ils se dissolvent. (Timée, 38b)",
    "pregunta": "Il peut y avoir quelque chose qui <b>commence</b> et pourtant <b>est toujours</b> : il n'y a aucun instant où il n'existait pas.",
    "nota": "C'est la réponse de Platon : le temps est « image mobile de l'éternité » (37d) et naît avec le cosmos. Le cosmos a un premier instant, mais il n'y a pas de temps vide avant lui. Ainsi la lecture littérale est possible sans l'objection du temps vide : Platon lâche la prémisse A1_tiempo_sin_principio de la première antinomie de Kant. Augustin dira la même chose dans les <em>Confessions</em> (XI) : demander ce que Dieu faisait avant de créer n'a pas de sens, car il n'y avait pas d'avant. Isabelle le vérifie (tiempo_con_el_cosmos).",
    "notaNo": "Avec ces prémisses, cela ne peut pas arriver."
   }
  ]
 },
 "vias": {
  "defs": [
   {
    "id": "movido",
    "origen": "Première voie",
    "texto": "x est mû : quelque chose le meut, le fait passer de la puissance à l'acte."
   },
   {
    "id": "primerMotor",
    "origen": "Première voie",
    "texto": "x est un premier moteur : il meut, et rien ne le meut."
   },
   {
    "id": "causado",
    "origen": "Deuxième voie",
    "texto": "x est causé : quelque chose est sa cause efficiente."
   },
   {
    "id": "primeraCausa",
    "origen": "Deuxième voie",
    "texto": "x est une première cause : il cause, et rien ne le cause."
   },
   {
    "id": "contingente",
    "origen": "Troisième voie",
    "texto": "x est contingent, il peut ne pas être : il y a au moins un instant où il n'existe pas."
   },
   {
    "id": "necesario",
    "origen": "Troisième voie",
    "texto": "x est nécessaire : il existe à tous les instants."
   },
   {
    "id": "maximo",
    "origen": "Quatrième voie",
    "texto": "x est le maximum : il est plus parfait que tout le reste."
   }
  ],
  "grupos": [
   {
    "id": "v1",
    "nom": "Première voie : le mouvement"
   },
   {
    "id": "v2",
    "nom": "Deuxième voie : la cause efficiente"
   },
   {
    "id": "v3",
    "nom": "Troisième voie : le contingent et le nécessaire"
   },
   {
    "id": "v4",
    "nom": "Quatrième voie : les degrés de perfection"
   },
   {
    "id": "v5",
    "nom": "Cinquième voie : le gouvernement des choses"
   }
  ],
  "premisas": [
   {
    "id": "V1_hay_movimiento",
    "grupo": "v1",
    "que": "Quelque chose se meut. C'est certain et cela ressort des sens."
   },
   {
    "id": "V1_sin_regreso",
    "grupo": "v1",
    "que": "Il n'y a pas de régression à l'infini dans les moteurs : on ne peut pas remonter de moteur en moteur sans fin. Sur la table, chaque chose porte un numéro d'ordre et le moteur en porte toujours un plus petit que ce qu'il meut. Ce numéro n'est pas un instant : les moteurs par soi meuvent en même temps."
   },
   {
    "id": "V2_hay_causas",
    "grupo": "v2",
    "que": "Il existe des causes efficientes : quelque chose est causé par autre chose."
   },
   {
    "id": "V2_sin_regreso",
    "grupo": "v2",
    "que": "Il n'y a pas de régression à l'infini dans les causes efficientes par soi."
   },
   {
    "id": "V3_siempre_algo",
    "grupo": "v3",
    "que": "À aucun instant il ne manque tout. S'il y avait eu un moment où il n'y avait rien, il n'y aurait rien maintenant, car ce qui n'est pas ne commence à être que par quelque chose qui est déjà."
   },
   {
    "id": "V3_paso_de_Tomas",
    "grupo": "v3",
    "que": "Si tout peut ne pas être, il y a eu un instant où il n'y avait rien."
   },
   {
    "id": "V4_orden",
    "grupo": "v4",
    "que": "« Plus parfait que » est un ordre : rien n'est plus parfait que soi-même, et si x surpasse y, et y surpasse z, alors x surpasse z."
   },
   {
    "id": "V4_comparables",
    "grupo": "v4",
    "que": "Deux choses distinctes peuvent toujours être comparées : l'une est plus parfaite que l'autre."
   },
   {
    "id": "V5_hay_fines",
    "grupo": "v5",
    "que": "Ce qui ne connaît pas agit en vue d'une fin : les corps naturels agissent toujours, ou presque toujours, de la même manière, pour obtenir le meilleur."
   },
   {
    "id": "V5_dirigido",
    "grupo": "v5",
    "que": "Ce qui ne connaît pas ne tend vers une fin que si quelqu'un qui connaît le dirige, comme l'archer dirige la flèche."
   }
  ],
  "props": [
   {
    "id": "W1",
    "parte": 1,
    "nombre": "1. Il existe un premier moteur",
    "pregunta": "Il y a quelque chose qui <b>meut sans être mû</b>.",
    "pasos": [
     {
      "txt": "Quelque chose se meut : appelons-le m.",
      "k": "V1_hay_movimiento"
     },
     {
      "txt": "m est mû par autre chose. Si celle-ci est mue par une autre, et celle-là par une autre encore, on remonte de moteur en moteur.",
      "k": "hip"
     },
     {
      "txt": "Comme il n'y a pas de régression à l'infini, il faut arriver à un moteur que rien ne meut.",
      "k": "V1_sin_regreso"
     },
     {
      "txt": "Donc il existe un premier moteur. Isabelle le démontre aussi avec une infinité de choses. Ce qui est démontré, c'est qu'il y en a au moins un : qu'il n'y en ait qu'un seul ne s'ensuit pas (voir la 9).",
      "k": "fin"
     }
    ],
    "leccion": {
     "V1_sin_regreso": "Sans elle, les moteurs peuvent tourner en rond : A meut B et B meut A, et aucun n'est le premier. Avec une infinité de choses, de plus, chacune peut être mue par la suivante. Attention : Thomas ne nie pas une série infinie de causes dans le temps, les unes avant les autres, comme un père qui a été engendré par un autre père, et ainsi de suite à l'infini (I, question 46, article 2, réponse à l'objection 7). Ce qu'il nie, c'est la régression infinie dans les moteurs qui meuvent simultanément, comme la main, le bâton et la pierre.",
     "V1_hay_movimiento": "Sans elle, il se peut que rien ne se meuve, et alors aucun moteur n'est nécessaire."
    }
   },
   {
    "id": "W1b",
    "parte": 1,
    "nombre": "2. Rien ne se meut soi-même",
    "cita": "Il est impossible que quelque chose soit, sous le même rapport et de la même manière, moteur et mû ; c'est-à-dire qu'il se meuve lui-même.",
    "pregunta": "Rien ne <b>se meut soi-même</b>.",
    "prueba": "Thomas l'argumente par la puissance et l'acte : se mouvoir, c'est passer de la puissance à l'acte, et rien n'est à la fois en puissance et en acte sous le même rapport. La table trouve un autre chemin : si quelque chose se mouvait soi-même, en remontant de moteur en moteur on ne finirait jamais : x, encore x, encore x… Il suffit de ne pas admettre la régression à l'infini.",
    "leccion": {
     "V1_sin_regreso": "Sans elle, quelque chose peut se mouvoir soi-même : c'est le plus petit des cercles."
    }
   },
   {
    "id": "W2",
    "parte": 2,
    "nombre": "3. Il existe une première cause",
    "pregunta": "Il y a quelque chose qui <b>cause sans être causé</b>.",
    "prueba": "C'est la même structure que la première voie, avec « cause » à la place de « meut » : il y a des causes, il n'y a pas de régression à l'infini, donc il y en a une que rien ne cause. Thomas ajoute que rien n'est cause efficiente de soi-même, car alors cela serait antérieur à soi-même (antérieur par nature, non dans le temps). Spinoza, en revanche, ouvre l'<em>Éthique</em> avec la cause de soi (définition 1) : compare avec la proposition 10 de « Le temps, défini ».",
    "leccion": {
     "V2_sin_regreso": "Sans elle, les causes peuvent tourner en rond, et aucune n'est la première.",
     "V2_hay_causas": "Sans elle, il se peut que rien ne soit causé."
    }
   },
   {
    "id": "W3",
    "parte": 3,
    "nombre": "4. Il existe quelque chose de nécessaire",
    "pregunta": "Il y a quelque chose qui <b>existe à tous les instants</b>.",
    "pasos": [
     {
      "txt": "Supposons que tout soit contingent : tout peut ne pas être.",
      "k": "hip"
     },
     {
      "txt": "Alors il y a eu un instant où il n'y avait rien.",
      "k": "V3_paso_de_Tomas"
     },
     {
      "txt": "Mais à aucun instant il ne manque tout. Contradiction.",
      "k": "V3_siempre_algo"
     },
     {
      "txt": "Donc il existe quelque chose de nécessaire. Thomas poursuit : le nécessaire peut tenir sa nécessité d'un autre, et là non plus on ne peut aller à l'infini. La table s'en tient à ce premier pas.",
      "k": "fin"
     }
    ],
    "leccion": {
     "V3_paso_de_Tomas": "Sans lui, tout peut être contingent et pourtant il peut y avoir toujours quelque chose : deux choses qui se relaient, l'une au début et l'autre ensuite. Voir la proposition 5.",
     "V3_siempre_algo": "Sans elle, il peut y avoir un instant sans rien, et alors rien n'oblige à ce que quelque chose soit nécessaire."
    }
   },
   {
    "id": "W3s",
    "parte": 3,
    "nombre": "5. « Si tout peut ne pas être, il y a eu un moment où rien n'était »",
    "cita": "Ce qui peut ne pas être, à un moment n'est pas. Si donc toutes choses peuvent ne pas être, à un moment il n'y a rien eu.",
    "pregunta": "Si tout peut cesser d'exister, il y a un instant où <b>rien n'existe</b>.",
    "nota": "Cela ne s'ensuit pas : chaque chose manque à un instant, mais pas toutes au même instant. C'est un saut de quantificateurs, de « pour chaque chose il y a un instant où elle n'existe pas » à « il y a un instant où aucune n'existe ». De nombreux commentateurs l'ont relevé, par exemple Anthony Kenny dans <em>The Five Ways</em> (1969). D'autres répondent que Thomas pense à un temps sans fin, dans lequel ce qui peut ne pas être finit par ne pas être, ou que l'argument porte sur toute la série des choses qui s'engendrent et se corrompent. Isabelle le vérifie avec un monde de deux choses qui se relaient (lemme via3_salto)."
   },
   {
    "id": "W4",
    "parte": 4,
    "nombre": "6. Il existe quelque chose de maximal",
    "pregunta": "Il y a quelque chose de <b>plus parfait que tout le reste</b>.",
    "pasos": [
     {
      "txt": "« Plus parfait que » est un ordre : il n'y a pas de cercles de perfection.",
      "k": "V4_orden"
     },
     {
      "txt": "Dans un monde fini, on monte d'une chose à une autre plus parfaite jusqu'à arriver à une que rien ne surpasse.",
      "k": "hip"
     },
     {
      "txt": "Comme tout est comparable, cette chose surpasse toutes les autres.",
      "k": "V4_comparables"
     },
     {
      "txt": "Donc il existe quelque chose de maximal. Isabelle le démontre dans un monde fini (via4_finito). Avec une infinité de choses, cela ne tient pas : parmi les nombres, il y en a toujours un plus grand (via4_sin_maximo). Thomas va plus loin : le maximum d'un genre est cause de tout ce qui s'y trouve, comme le feu, le plus chaud, l'est de la chaleur (il le tire de la <em>Métaphysique</em> d'Aristote, livre II). La table ne vérifie que la première partie.",
      "k": "fin"
     }
    ],
    "leccion": {
     "V4_comparables": "Sans elle, il peut y avoir deux choses qui ne se comparent pas, et aucune ne surpasse toutes les autres : deux sommets, aucun plus haut. Peut-on comparer la perfection d'une rose et celle d'un nombre ?",
     "V4_orden": "Sans elle, la perfection peut tourner en rond : A surpasse B, B surpasse C et C surpasse A."
    }
   },
   {
    "id": "W4u",
    "parte": 4,
    "nombre": "7. Le maximum est unique",
    "pregunta": "Si x et y sont le maximum, x et y <b>sont la même chose</b>.",
    "prueba": "S'il y avait deux maxima distincts, chacun surpasserait l'autre et, puisqu'il s'agit d'un ordre, chacun se surpasserait lui-même. Contradiction.",
    "leccion": {
     "V4_orden": "Sans elle, deux choses peuvent se surpasser l'une l'autre, et toutes deux sont le maximum."
    }
   },
   {
    "id": "W5",
    "parte": 5,
    "nombre": "8. Il y a quelqu'un qui connaît et dirige",
    "pregunta": "Il y a quelque chose qui <b>connaît et dirige</b> une autre chose vers sa fin.",
    "prueba": "Cela s'ensuit aussitôt : toute la force tient à la prémisse « ce qui ne connaît pas ne tend vers une fin que si quelqu'un qui connaît le dirige ». Certains la discutent : Hume, dans les <em>Dialogues sur la religion naturelle</em> (1779), puis ceux qui voient dans la sélection naturelle de Darwin un ordre sans personne pour le diriger. D'autres la défendent, par exemple en demandant d'où viennent les lois régulières de la nature que la sélection elle-même suppose.",
    "leccion": {
     "V5_dirigido": "Sans elle, il peut y avoir des choses qui tendent vers une fin sans que personne les dirige.",
     "V5_hay_fines": "Sans elle, il se peut que rien ne tende vers une fin."
    }
   },
   {
    "id": "WD",
    "parte": 6,
    "nombre": "9. Le même dans les cinq voies ?",
    "pregunta": "Si x est un premier moteur et y une première cause, x et y <b>sont la même chose</b>.",
    "nota": "Cela ne découle pas des voies : il peut y avoir un premier moteur et, à part, une première cause. Chaque voie se termine en disant que cela, « tous l'appellent Dieu », et c'est une objection classique qu'arriver à un premier, ce n'est pas encore arriver à un Dieu unique. Thomas ne prétend pas que chaque voie, seule, donne tout ce que l'on dit de Dieu : l'unité, la simplicité et la perfection, il les argumente ensuite (I, questions 3, 4 et 11). La table montre seulement, pour l'instant, que ce pas est nécessaire."
   }
  ]
 },
 "reloj": {
  "fijas": [
   {
    "id": "F_instantes",
    "origen": "Le temps",
    "texto": "Il y a des instants ordonnés : 0, 1, 2… Le temps a un commencement, l'instant 0."
   },
   {
    "id": "F_vida",
    "origen": "Le temps",
    "texto": "Chaque chose commence à un seul instant et se termine à un seul instant, et rien ne se termine avant d'avoir commencé."
   }
  ],
  "defs": [
   {
    "id": "Antes",
    "origen": "Définition",
    "texto": "x commence avant y : son instant de début est antérieur."
   },
   {
    "id": "DuraMas",
    "origen": "Définition",
    "texto": "x dure plus longtemps que y : x existe plus longtemps, sa barre est plus longue."
   },
   {
    "id": "Sobrevive",
    "origen": "Définition",
    "texto": "x survit à y : x se termine après y et continue d'exister quand y n'existe plus."
   },
   {
    "id": "ExisteEn",
    "origen": "Définition",
    "texto": "x existe à l'instant t : t est entre son début et sa fin."
   },
   {
    "id": "increado",
    "origen": "Définition",
    "texto": "Est incréé ce que rien n'a créé."
   }
  ],
  "grupos": [
   {
    "id": "k",
    "nom": "Création"
   }
  ],
  "premisas": [
   {
    "id": "K_existe",
    "grupo": "k",
    "que": "Celui qui crée existe à l'instant où commence ce qui est créé."
   },
   {
    "id": "K_antes",
    "grupo": "k",
    "que": "Celui qui crée a commencé avant ce qui est créé."
   },
   {
    "id": "K_no_despues",
    "grupo": "k",
    "que": "Celui qui crée ne commence pas après ce qui est créé : il peut créer à l'instant même où il commence, ou se créer lui-même."
   },
   {
    "id": "K_un_creador",
    "grupo": "k",
    "que": "Rien n'a deux créateurs."
   },
   {
    "id": "K_todo_creado",
    "grupo": "k",
    "que": "Tout a été créé par quelque chose."
   }
  ],
  "props": [
   {
    "id": "R1",
    "nombre": "1. Rien ne commence avant soi-même",
    "pregunta": "Rien ne <b>commence avant</b> soi-même.",
    "prueba": "Commencer avant, c'est commencer à un instant antérieur, et aucun instant n'est antérieur à lui-même. Cela découle de ce qu'est le temps, sans aucune prémisse : dans le monde d'entraînement, il fallait l'admettre."
   },
   {
    "id": "R2",
    "nombre": "2. « Avant » est transitif",
    "pregunta": "Si x commence avant y, et y avant z, x <b>commence avant</b> z.",
    "prueba": "Si l'instant où commence x est antérieur à celui de y, et celui de y à celui de z, celui de x est antérieur à celui de z : c'est ainsi que les instants sont ordonnés. Là non plus, aucune prémisse n'est nécessaire."
   },
   {
    "id": "R3",
    "nombre": "3. « Avant » n'est pas réciproque",
    "pregunta": "Si x commence avant y, y <b>ne commence pas avant</b> x.",
    "prueba": "Deux instants ne peuvent pas être chacun antérieur à l'autre. Encore une fois, sans prémisses."
   },
   {
    "id": "R4",
    "nombre": "4. Rien ne se crée soi-même",
    "pregunta": "Rien <b>ne se crée</b> soi-même.",
    "pasos": [
     {
      "txt": "Suppose qu’une chose x se soit créée elle-même : Crea(x, x).",
      "k": "hip"
     },
     {
      "txt": "Celui qui crée a commencé avant ce qui est créé, donc x a commencé avant x : Antes(x, x).",
      "k": "K_antes"
     },
     {
      "txt": "Mais rien ne commence avant soi-même (proposition 1), et ici ce n'est pas une prémisse : c'est un théorème. Contradiction.",
      "k": "fin"
     }
    ],
    "leccion": {
     "K_antes": "Sans elle, rien n'empêche qu'une chose se crée soi-même à l'instant même où elle commence."
    }
   },
   {
    "id": "R5",
    "posible": true,
    "nombre": "5. Ce qui est créé peut survivre à son créateur",
    "pregunta": "Il peut y avoir quelque chose de créé qui <b>continue d'exister</b> quand son créateur n'existe plus.",
    "nota": "Regarde les barres : le créateur existe un temps, crée pendant qu'il existe, puis disparaît ; ce qui est créé continue. Survivre, c'est se terminer après, non durer plus longtemps.",
    "notaNo": "Avec ces prémisses, cela ne peut pas arriver."
   },
   {
    "id": "R6",
    "posible": true,
    "nombre": "6. Ce qui est créé peut durer plus longtemps que son créateur",
    "pregunta": "Il peut y avoir quelque chose de créé qui <b>existe plus longtemps</b> que son créateur.",
    "nota": "Durer plus longtemps, c'est avoir la barre plus longue. Ce n'est pas la même chose que survivre : compare avec la proposition 5.",
    "notaNo": "Avec ces prémisses, cela ne peut pas arriver."
   },
   {
    "id": "R7",
    "nombre": "7. Ce qui survit dure plus longtemps",
    "pregunta": "Si x survit à y, x <b>dure plus longtemps</b> que y.",
    "nota": "Cela ne s'ensuit pas : on peut commencer tard et finir un peu après. La barre se termine plus à droite, mais elle est plus courte."
   },
   {
    "id": "R8",
    "nombre": "8. Celui qui commence avant et se termine après dure plus longtemps",
    "pregunta": "Si x commence avant y et survit à y, x <b>dure plus longtemps</b> que y.",
    "prueba": "La barre de x commence avant et se termine après celle de y : elle la contient, donc elle est plus longue. Cela découle de ce qu'est le temps, sans prémisses."
   },
   {
    "id": "R9",
    "nombre": "9. Il y a quelque chose d'incréé",
    "pregunta": "Il y a quelque chose que <b>rien n'a créé</b>.",
    "pasos": [
     {
      "txt": "Suppose que tout ait un créateur.",
      "k": "hip"
     },
     {
      "txt": "Celui qui crée a commencé avant : chaque créateur commence à un instant antérieur à celui de ce qu'il crée.",
      "k": "K_antes"
     },
     {
      "txt": "Mais le temps a un commencement : ce qui commence en premier ne peut avoir personne avant lui. Contradiction.",
      "k": "fin"
     },
     {
      "txt": "Ces trois choses ne peuvent donc pas aller ensemble : que tout ait un créateur, que celui qui crée commence avant et que le temps ait un commencement. Si l'on accepte les deux dernières, il y a quelque chose d'incréé, quel que soit le nombre de choses, même infini : c'est ce que démontre Isabelle. Mais qui veut que tout ait un créateur peut renoncer à ce que celui qui crée commence avant : regarde la proposition 10.",
      "k": "fin"
     }
    ],
    "leccion": {
     "K_antes": "Sans elle, le créateur peut commencer en même temps ou après ce qui est créé, et tout peut avoir un créateur : A crée B et B crée A."
    }
   },
   {
    "id": "R10",
    "posible": true,
    "nombre": "10. Tout peut avoir un créateur",
    "pregunta": "<b>Tout</b> peut avoir été créé par quelque chose.",
    "nota": "Sans « celui qui crée a commencé avant », cela peut arriver. Avec « celui qui crée ne commence pas après », quelque chose peut créer à l'instant même où commence ce qui est créé, ou se créer lui-même. Une chose qui se crée elle-même est la cause de soi, la <em>causa sui</em> par laquelle commence l'<em>Éthique</em> de Spinoza (définition 1).",
    "notaNo": "Avec « celui qui crée a commencé avant », cela ne peut pas arriver : c'est la proposition 9. Pour que tout ait un créateur, il faut y renoncer."
   }
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
    "que": "Qui crée quelque chose dure plus longtemps que ce qui est créé (discutable : les choses peuvent cesser d'exister, et une œuvre peut survivre à son auteur)."
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
    "pruebaAlt": "Par la durée{N}: si quelque chose se créait soi-même, cela durerait plus longtemps que soi-même, et rien ne dure plus longtemps que soi-même.",
    "pasosAlt": [
     {
      "txt": "Suppose qu’une chose x se soit créée elle-même : Crea(x, x).",
      "k": "hip"
     },
     {
      "txt": "Celui qui crée dure plus longtemps que ce qui est créé, donc x dure plus longtemps que x : DuraMas(x, x).",
      "k": "C_creador_dura_mas"
     },
     {
      "txt": "Mais rien ne dure plus longtemps que soi-même : ¬DuraMas(x, x). Contradiction.",
      "k": "D_irreflexiva"
     },
     {
      "txt": "Donc rien ne se crée soi-même. Ce chemin s’appuie sur la prémisse discutable : si tu la retires, il s’effondre, mais celui du temps reste.",
      "k": "fin"
     }
    ],
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
    "nota": "Les choses de ce monde peuvent cesser d'exister : celui qui crée quelque chose peut disparaître alors que son œuvre continue, comme l'auteur qui meurt et le livre qui reste. Commencer avant n'oblige pas à durer plus longtemps. Pour que ce qui est créé ne dure pas plus longtemps que son créateur, il faut l'admettre comme prémisse : coche la prémisse discutable et reteste.",
    "prueba": "x dure plus longtemps que y (la prémisse discutable) ; si de plus y durait plus longtemps que x, par la transitivité x durerait plus longtemps que lui-même.",
    "leccion": {
     "C_creador_dura_mas": "Être antérieur n'est pas durer plus longtemps : sans cette prémisse, ce qui est créé peut durer plus longtemps que son créateur, comme un livre qui survit à celui qui l'a écrit.",
     "D_irreflexiva": "Sans elle, une chose peut durer plus longtemps qu'elle-même, et ce qui est créé peut durer plus longtemps que son créateur sans que rien ne heurte.",
     "D_transitiva": "Sans la transitivité, que x dure plus longtemps que y et y plus que x ne mène à aucun absurde."
    }
   },
   {
    "id": "Q8",
    "posible": true,
    "nombre": "5. Ce qui est créé peut survivre à son créateur",
    "pregunta": "Il peut y avoir quelque chose de créé qui <b>dure plus longtemps</b> que celui qui l'a créé.",
    "nota": "C'est l'auteur qui meurt et le livre qui reste : celui qui a créé a commencé avant, mais ce qui est créé dure plus longtemps. Rien de ce que nous savons du temps et de la création ne l'empêche.",
    "notaNo": "Avec la prémisse discutable cochée, cela ne peut pas arriver : c'est la proposition 4. Cette prémisse te semble-t-elle raisonnable ?"
   },
   {
    "id": "Q5",
    "nombre": "6. Ce qui est antérieur dure plus longtemps",
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
    "nombre": "7. Il y a quelque chose d'incréé",
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
    "nombre": "8. Il n'y a qu'un seul incréé",
    "pregunta": "Si x et y sont incréés, <b>ils sont une seule et même chose</b>.",
    "nota": "Cela ne s'ensuit pas : il peut y avoir deux origines indépendantes. Pour qu'il n'y en ait qu'une, il faut quelque chose de plus, et c'est ce que Spinoza tente de prouver de la substance (props. 5 et 14) : passe à l'autre monde."
   },
   {
    "id": "Q9",
    "posible": true,
    "nombre": "9. Une chose peut avoir deux créateurs",
    "pregunta": "Une chose peut avoir été créée par <b>deux choses distinctes</b>.",
    "nota": "Il faut trois choses : deux qui créent et une qui est créée. Sur le dessin, deux flèches « a créé » arrivent à la même chose. C’est exactement ce qu’interdit la prémisse « Rien n’a deux créateurs » (C_un_creador) : sans elle, plusieurs créateurs sont possibles ; avec elle, un seul au plus. Dans le monde de Spinoza, qu’il n’y ait qu’une seule substance n’est pas tenu pour acquis : on essaie de le démontrer (prop. 5 et 14).",
    "notaNo": "Avec « Rien n’a deux créateurs » cochée, cela ne peut pas arriver : ce qui est créé a au plus un créateur. Retire-la et réessaie."
   }
  ]
 }
};
