"use strict";
/* ===== La República ===== juego de diseño de la ciudad de Platón (v4) =====
   Diseñas una ciudad con perfiles (+/−). Cada persona tiene TRES VIRTUDES del alma:
   Sabiduría-Justicia (SJ ⚖️), Valentía (V 🛡️) y Templanza (T 🍷). Coste = suma de las 3.
     · Guardián: las tres virtudes ≥4  (444 → máx. 555)
     · Guerrero: valentía y templanza ≥4  (x44 → máx. 355)
     · Productor: templanza ≥4  (xx4 → máx. 335)
   La PRODUCCIÓN 🌾 NO es una virtud: es un stat DE LA CIUDAD. Solo la generan los
   productores (cada uno alimenta a 2 personas) y debe cubrir a toda la población.
   Luego, tantos turnos como cartas del mazo (Real 8 / Fácil 7), fundados en
   Platón/Aristóteles, con penalizaciones graduadas y ULTRAEXIGENTES (un diseño
   casi perfecto también cae), eventos positivos, eventos que MATAN ciudadanos,
   penalización creciente a las ciudades de menos de 30 habitantes y CARTAS DEL
   DESTINO (peste, guerra, terremoto, muerte del fundador): sucesos inevitables
   que golpean a cualquier ciudad — la fortuna/necesidad que ni la polis justa
   evita. El mazo siempre incluye varias (Real 3 / Fácil 2). Las acciones son
   la tabla de salvación de quien diseñó mal. */

const REP_ARM0 = 10, REP_START = 10, REP_TARGET = 30;   // armonía: empieza en 10 (referencia de la barra); NO tiene techo, puede subir por encima
const REP_FATE = ["peste","guerra","terremoto","fundador"];   // cartas del destino (daño inevitable)
const REP_AP0 = 6;
const REP_OUT = 2;   // cada productor alimenta (produce para) 2 personas
const REP_MODES = {
  facil: { name:"Facile", budget:265, ratio:false, deck:7 },
  real:  { name:"Réel",  budget:225, ratio:true,  deck:8 }
};
const REP_ROSTER = {
  Z: [ { id:"z_recto", name:"Gardiens droits", sj:4,v:4,t:4, note:"les trois vertus au minimum" },
       { id:"z_sabio", name:"Gardiens sages", sj:5,v:4,t:4, note:"plus de sagesse-justice" },
       { id:"z_pleno", name:"Gardiens accomplis", sj:5,v:5,t:5, note:"vertu maximale" } ],
  G: [ { id:"g_tropa", name:"Guerriers", sj:1,v:4,t:4, note:"l’essentiel" },
       { id:"g_vet", name:"Vétérans", sj:2,v:5,t:4, note:"aguerris" },
       { id:"g_heroe", name:"Héros", sj:3,v:5,t:5, note:"les meilleurs" } ],
  E: [ { id:"labriego", name:"Paysans", sj:1,v:1,t:4, note:"le peuple qui travaille" },
       { id:"diligente", name:"Producteurs diligents", sj:2,v:2,t:5, note:"tempérants et laborieux" } ]
};
const REP_IMG = "media/juegos/platon/";
const REP_ACTS = [
  { id:"moviliza", name:"Mobilisation", ap:2, img:"ac-agoge", d:"Un producteur est formé comme guerrier.", ok:()=>rep.t.E.n>1,
    run:()=>{ repMove("E","G",1); } },
  { id:"heroismo", name:"Héroïsme", ap:1, img:"ac-heroismo", d:"Ce tour, les guerriers valent ×1,5.", ok:()=>!rep.t.hero, run:()=>{ rep.t.hero=true; } },
  { id:"educacion", name:"Réforme éducative", ap:1, img:"ac-ejemplo", d:"Les gardiens gagnent en sagesse-justice (+3).", run:()=>{ rep.t.Z.sj+=3; if(rep.t.Z.max<5)rep.t.Z.max=5; rep.t.Z.just=rep.t.Z.n; } },
  { id:"cosecha", name:"Coup de pouce à la production", ap:1, img:"ac-vida", d:"La cité produit plus de nourriture (+8 production).", run:()=>{ rep.t.prodBonus=(rep.t.prodBonus||0)+8; } },
  { id:"purga", name:"Purge des corrompus", ap:2, img:"ac-politica", d:"Tu récupères 1 point d’harmonie.", run:()=>{ rep.armonia=Math.round((rep.armonia+1)*10)/10; } }
];

const rep = repFresh();
function repFresh(){ return { mode:"real", acciones:"si", cnt:{}, armonia:REP_START, turn:0, turns:8, deck:[], resolved:false, nZ:0,nG:0,nE:0, t:null, ap:0, apTurn:0, used:new Set(), log:[], turnActs:[], designText:"" }; }
function repBox(){ return document.getElementById("repbox"); }
function cost(c){ return c.sj+c.v+c.t; }
function repShuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }

// ---- estado de la ciudad diseñada ----
function repCompute(){
  const cls={}; let pts=0;
  ["Z","G","E"].forEach(k=>{ let n=0,sj=0,v=0,t=0,max=0,just=0;
    REP_ROSTER[k].forEach(c=>{ const q=rep.cnt[c.id]||0; if(q){ n+=q; pts+=cost(c)*q; sj+=c.sj*q; v+=c.v*q; t+=c.t*q; max=Math.max(max,c.sj); if(c.sj>=5)just+=q; } });
    cls[k]={n,sj,v,t,max,just}; });
  rep.nZ=cls.Z.n; rep.nG=cls.G.n; rep.nE=cls.E.n; rep._cls=cls;
  const pop=cls.Z.n+cls.G.n+cls.E.n, prod=REP_OUT*cls.E.n;
  return { nZ:cls.Z.n, nG:cls.G.n, nE:cls.E.n, pop, pts, prod };
}
function repLegal(){
  const s=repCompute(); const m=REP_MODES[rep.mode]; const errs=[];
  if(s.nZ<1||s.nG<1||s.nE<1) errs.push("Il doit y avoir au moins un gardien, un guerrier et un producteur.");
  if(s.pts>m.budget) errs.push("Tu dépasses le budget ("+s.pts+"/"+m.budget+" points).");
  if(m.ratio && s.nE < 2*(s.nZ+s.nG)) errs.push("Règle de Platon : les producteurs ("+s.nE+") doivent être ≥ 2×(gardiens+guerriers) = "+2*(s.nZ+s.nG)+".");
  return { ok:errs.length===0, errs, s };
}

// ---- durante la partida: totales derivados y muertes ----
function T(){ return rep.t; }
function repPop(){ return rep.t.Z.n+rep.t.G.n+rep.t.E.n; }
function repNGeff(){ return rep.t.hero ? rep.t.G.n*1.5 : rep.t.G.n; }
function repSum(stat){ return rep.t.Z[stat]+rep.t.G[stat]+rep.t.E[stat]; }
function repProd(){ return REP_OUT*rep.t.E.n + (rep.t.prodBonus||0); }   // producción de la CIUDAD (solo productores)
function repKill(cls,n){ const c=rep.t[cls]; if(c.n<=0)return 0; const k=Math.min(n,c.n); const f=(c.n-k)/c.n;
  c.sj*=f; c.v*=f; c.t*=f; c.just=Math.round(c.just*f); c.n-=k; return k; }
function repMove(a,b,n){ const A=rep.t[a],B=rep.t[b]; if(A.n<n)return; const proto=REP_ROSTER[b][0];
  const fa=(A.n-n)/A.n; A.sj*=fa;A.v*=fa;A.t*=fa; A.n-=n;
  B.n+=n; B.sj+=proto.sj*n; B.v+=proto.v*n; B.t+=proto.t*n; }

/* ================= EVENTOS (v4) — d: cambio de armonía (± ); kill:{cls,n}; ================= */
const F=Math.floor;
const REP_EVENTS = [
  // — negativos graduados (Platón, República) —
  { id:"rebelion", name:"Révolte des producteurs", src:"Rép. IV", img:"ev-matxinada",
    threat:"Trop de producteurs par rapport aux guerriers : X = (producteurs − guerriers) ÷ 4.",
    effect:()=>{ const x=F(Math.max(0,rep.t.E.n-rep.t.G.n)/4); return { d:-x, msg:x?("Révolte : −"+x):"La masse est contenue." }; } },
  { id:"golpe", name:"Coup d’État", src:"Rép. VIII", img:"ev-golpe",
    threat:"Une armée très supérieure au gouvernement fait un coup d’État (elle tue un gardien).",
    effect:()=>{ if(repNGeff()>rep.t.Z.n*3){ const k=repKill("Z",1); return { d:-3, msg:"Coup d’État ! −3 et "+k+" gardien(s) tué(s)." }; }
      if(rep.t.G.n>rep.t.Z.n*2) return { d:-1, msg:"Tension militaire : −1." }; return { d:0, msg:"L’armée respecte le gouvernement." }; } },
  { id:"corrupcion", name:"Corruption", src:"Rép. I", img:"ev-corrupcion",
    threat:"Tu perds 1 point pour chaque gardien qui n’est pas pleinement juste (SJ<5).",
    effect:()=>{ const x=rep.t.Z.n-rep.t.Z.just; return { d:-x, msg:x?("−"+x+" pour des gardiens peu justes"):"Tous tes gardiens sont justes." }; } },
  { id:"caverna", name:"Ombres dans la caverne", src:"Rép. VII", img:"ev-sabiduria",
    threat:"Si la sagesse-justice moyenne de la polis est faible (<3,8), elle reste dans l’ombre.",
    effect:()=>{ const avg=repSum("sj")/Math.max(1,repPop()); return avg<3.8 ? { d:-2, msg:"Ignorance : −2." } : { d:0, msg:"La cité cherche la lumière." }; } },
  // — Aristóteles / muertes / tamaño —
  { id:"ataque", name:"Attaque extérieure", src:"Pol. VII", img:"ev-ataque",
    threat:"S’il y a peu de défenseurs (guerriers < producteurs ÷ 2,5), l’ennemi entre et tue.",
    effect:()=>{ if(repNGeff() < rep.t.E.n/2.5){ const k=repKill("G",F(rep.t.G.n/4))+repKill("E",F(rep.t.E.n/12)); return { d:-2, msg:"Invasion : −2"+(k?" et "+k+" citoyens meurent.":".") }; } return { d:0, msg:"La défense tient." }; } },
  { id:"peste", name:"La peste", src:"Destin", img:"ev-hambruna", fate:true,
    threat:"Une épidémie s’acharne sur la masse : elle tue une partie des producteurs et des guerriers.",
    effect:()=>{ const k=repKill("E",F(rep.t.E.n/5))+repKill("G",F(rep.t.G.n/8)); return { d:-2, msg:"Peste : −2 et "+k+" citoyens meurent." }; } },
  { id:"hambruna", name:"Famine", src:"Pol. I", img:"ev-hambruna",
    threat:"Sans une marge de production confortable (excédent < 10 % de la population), il y a la faim et des morts.",
    effect:()=>{ const margin=repPop()*0.1, surplus=repProd()-repPop(); if(surplus<margin){ const x=F((margin-surplus)/3)||1, k=repKill("E",F(Math.max(0,-surplus)/6)); return { d:-x, msg:"Famine : −"+x+(k?" et "+k+" producteurs meurent.":".") }; } return { d:0, msg:"La production nourrit la cité." }; } },
  { id:"menguada", name:"Cité amoindrie", src:"Pol. I", img:"ev-ataque",
    threat:"Une petite polis ne se suffit pas à elle-même : en dessous de 30 habitants, plus il y en a peu, pire c’est (÷2).",
    effect:()=>{ const x=F(Math.max(0,REP_TARGET-repPop())/2); return { d:-x, msg:x?("Faiblesse ("+repPop()+" hab.) : −"+x):"Cité autosuffisante." }; } },
  // — positivos —
  { id:"alianza", name:"Alliance commerciale", src:"Rép.", img:"ev-corrupcion",
    threat:"Si les producteurs sont la majorité (≥60 %), le commerce prospère.",
    effect:()=>{ return rep.t.E.n >= 0.6*repPop() ? { d:2, msg:"Commerce prospère : +2." } : { d:0, msg:"Pas de majorité de producteurs." }; } },
  { id:"victoria", name:"Victoire militaire", src:"—", img:"ev-golpe",
    threat:"Une armée forte (guerriers ≥ gardiens ×3) gagne une guerre.",
    effect:()=>{ return repNGeff() >= rep.t.Z.n*3 ? { d:1, msg:"Victoire : +1." } : { d:0, msg:"Pas assez de force pour vaincre." }; } },
  { id:"reforma", name:"Réforme juste", src:"Rép.", img:"ev-sabiduria",
    threat:"Si tes gardiens sont pleinement justes (SJ moyen ≥5), tu retrouves l’harmonie.",
    effect:()=>{ return (rep.t.Z.sj/Math.max(1,rep.t.Z.n))>=5 ? { d:2, msg:"Bon gouvernement : +2." } : { d:0, msg:"Il manque la pleine justice au sommet." }; } },
  { id:"cosecha", name:"Récolte abondante", src:"—", img:"ev-hambruna",
    threat:"Si la cité produit largement assez (excédent ≥ 40 % de la population), c’est la prospérité.",
    effect:()=>{ return (repProd()-repPop()) >= repPop()*0.4 ? { d:2, msg:"Excédent : +2." } : { d:0, msg:"Pas d’excédent notable." }; } },
  // — Atenas y su historia (contexto de Platón y Aristóteles) —
  { id:"delos", name:"Ligue de Délos", src:"Historia", img:"ev-delos",
    threat:"Avec une flotte forte (guerriers ≥ producteurs ÷ 2,5), les alliés paient un tribut ; sinon, ils se soulèvent.",
    effect:()=>{ return repNGeff() >= rep.t.E.n/2.5 ? { d:2, msg:"Tribut des alliés : +2." } : { d:-1, msg:"Les alliés se soulèvent : −1." }; } },
  { id:"esparta", name:"Invasion de Sparte", src:"Guerre du Péloponnèse", img:"ev-esparta",
    threat:"Sparte ravage les champs. Si les défenseurs sont peu nombreux (guerriers < producteurs ÷ 3), c’est un massacre.",
    effect:()=>{ if(repNGeff() < rep.t.E.n/3){ const k=repKill("E",F(rep.t.E.n/8))+repKill("G",F(rep.t.G.n/6)); return { d:-3, msg:"Dévastation : −3 et "+k+" citoyens meurent." }; } return { d:-1, msg:"Tu résistes derrière les remparts : −1." }; } },
  { id:"socrates", name:"Procès de Socrate", src:"Apologie", img:"ev-socrates",
    threat:"La cité juge son homme le plus sage. Sans un gardien pleinement sage (SJ 5), elle le condamne.",
    effect:()=>{ return rep.t.Z.max>=5 ? { d:1, msg:"La sagesse l’acquitte : +1." } : { d:-2, msg:"Le plus sage est condamné : −2." }; } },
  { id:"pericles", name:"L’ambition de Périclès", src:"Historia", img:"ev-pericles",
    threat:"Un chef brillant entreprend de grands travaux. Avec des gardiens tempérants (tempérance moyenne ≥4,5), c’est un siècle d’or ; sans mesure, c’est l’hybris.",
    effect:()=>{ const tavg=rep.t.Z.t/Math.max(1,rep.t.Z.n); return tavg>=4.5 ? { d:2, msg:"Siècle d’or de Périclès : +2." } : { d:-2, msg:"Ambition démesurée (hybris) : −2." }; } },
  { id:"sofistas", name:"Essor des sophistes", src:"Gorgias", img:"ev-sofistas",
    threat:"Des maîtres de la rhétorique séduisent la jeunesse. Si moins de 3/4 de tes gardiens sont pleinement justes, ils l’emportent.",
    effect:()=>{ return rep.t.Z.just >= rep.t.Z.n*0.75 ? { d:1, msg:"Les philosophes les réfutent : +1." } : { d:-2, msg:"Le relativisme corrompt : −2." }; } },
  { id:"timocracia", name:"Timocratie", src:"Rép. VIII", img:"ev-timocracia",
    threat:"Si les guerriers dépassent de 1,5× les gardiens, l’honneur remplace la raison.",
    effect:()=>{ return rep.t.G.n > rep.t.Z.n*1.5 ? { d:-2, msg:"La cité dégénère en timocratie : −2." } : { d:1, msg:"La raison reste aux commandes : +1." }; } },
  { id:"oraculo", name:"Oracle inquiétant", src:"Delfos", img:"ev-oraculo",
    threat:"La Pythie prononce un présage ambigu. Le destin, cette fois, ne dépend pas de ta cité.",
    effect:()=>{ return rep.rng<0.55 ? { d:-2, msg:"Présage funeste : −2." } : { d:1, msg:"Présage favorable : +1." }; } },
  // — CARTAS DEL DESTINO (inevitables: golpean a cualquier ciudad, se diseñe como se diseñe) —
  { id:"guerra", name:"Guerre prolongée", src:"Destin", img:"ev-guerra", fate:true,
    threat:"Aucune cité n’échappe à la guerre : elle use la polis et coûte la vie à des guerriers.",
    effect:()=>{ const k=repKill("G",F(rep.t.G.n/8)); return { d:-2, msg:"La guerre saigne la cité : −2"+(k?" et "+k+" guerriers tombent.":".") }; } },
  { id:"terremoto", name:"Tremblement de terre", src:"Destin", img:"ev-terremoto", fate:true,
    threat:"La terre tremble sans prévenir : elle détruit et tue sans distinguer les classes.",
    effect:()=>{ const k=repKill("E",F(rep.t.E.n/10))+repKill("Z",F(rep.t.Z.n/12)); return { d:-2, msg:"La cité s’effondre : −2"+(k?" et "+k+" personnes meurent.":".") }; } },
  { id:"fundador", name:"Mort du fondateur", src:"Destin", img:"ev-fundador", fate:true,
    threat:"Celui qui a fondé la cité meurt : la succession ouvre une crise qui n’épargne personne.",
    effect:()=>{ return { d:-2, msg:"Crise de succession : −2." }; } }
];

/* ---------- setup ---------- */
function renderRepStart(){
  const box=repBox(); if(!box) return; Object.assign(rep, repFresh());
  box.innerHTML='<div class="rep-wrap"><div class="rep-modes-pick" id="repModes"></div>'+
    '<div class="rep-design"><div class="rep-roster" id="repRoster"></div><aside class="rep-summary" id="repSummary"></aside></div>'+
    '<p class="ia-note">Illustrations générées par IA</p></div>';
  drawRepModes(); drawRepRoster(); drawRepSummary();
}
function drawRepModes(){
  document.getElementById("repModes").innerHTML=
    '<span class="flabel">Difficulté</span>'+Object.entries(REP_MODES).map(([k,m])=>'<button class="pbtn" data-mode="'+k+'" aria-pressed="'+(k===rep.mode)+'">'+m.name+'</button>').join("")+
    '<span class="flabel" style="margin-left:.8rem">Actions</span><button class="pbtn" data-acc="si" aria-pressed="'+(rep.acciones==="si")+'">Avec actions</button><button class="pbtn" data-acc="no" aria-pressed="'+(rep.acciones==="no")+'">Sans actions</button>'+
    '<button class="pbtn rep-rnd" id="repRandom">🎲 Aléatoire</button>'+
    (repHistLoad().length?'<button class="pbtn rep-hist-open" id="repHistOpen">📚 Parties ('+repHistLoad().length+')</button>':'');
  document.querySelectorAll("#repModes [data-mode]").forEach(b=>b.addEventListener("click",()=>{ rep.mode=b.dataset.mode; drawRepModes(); drawRepSummary(); }));
  document.querySelectorAll("#repModes [data-acc]").forEach(b=>b.addEventListener("click",()=>{ rep.acciones=b.dataset.acc; drawRepModes(); }));
  const rnd=document.getElementById("repRandom"); if(rnd) rnd.addEventListener("click",repRandom);
  const ho=document.getElementById("repHistOpen"); if(ho) ho.addEventListener("click",renderRepHistory);
}
function statPips(c){ return '<span class="rep-pips">⚖️'+c.sj+' 🛡️'+c.v+' 🍷'+c.t+' <em>· '+cost(c)+'</em></span>'; }
function drawRepRoster(){
  const sec=(title,list)=>'<div class="rep-rsec"><h3>'+title+'</h3>'+list.map(c=>{ const n=rep.cnt[c.id]||0;
    return '<div class="rep-rrow prod"><div class="rep-rname">'+c.name+' <span class="rep-note">'+c.note+'</span><br>'+statPips(c)+'</div>'+
      '<div class="rep-step"><button data-esub="'+c.id+'">−</button><span class="n">'+n+'</span><button data-eadd="'+c.id+'">+</button></div></div>'; }).join("")+'</div>';
  document.getElementById("repRoster").innerHTML =
    sec("🦉 Gardiens <span class=\"rep-floor\">les trois vertus ≥4</span>",REP_ROSTER.Z)+
    sec("🛡️ Guerriers <span class=\"rep-floor\">courage et tempérance ≥4</span>",REP_ROSTER.G)+
    sec("🌾 Producteurs <span class=\"rep-floor\">tempérance ≥4 · nourrissent la cité</span>",REP_ROSTER.E);
  document.querySelectorAll("#repRoster [data-eadd]").forEach(b=>b.addEventListener("click",()=>{ const id=b.dataset.eadd; rep.cnt[id]=(rep.cnt[id]||0)+1; drawRepRoster(); drawRepSummary(); }));
  document.querySelectorAll("#repRoster [data-esub]").forEach(b=>b.addEventListener("click",()=>{ const id=b.dataset.esub; if(rep.cnt[id]>0){ rep.cnt[id]--; drawRepRoster(); drawRepSummary(); } }));
}
function drawRepSummary(){
  const { ok, errs, s }=repLegal(); const m=REP_MODES[rep.mode]; const fed=s.prod>=s.pop;
  document.getElementById("repSummary").innerHTML=
    '<div class="rep-sum-h">Ta cité</div>'+
    '<div class="rep-sum-row"><span>Population</span><b class="'+(s.pop>=REP_TARGET?"ok":"")+'">'+s.pop+(s.pop<REP_TARGET?' <small>(&lt;30 : pénalise)</small>':'')+'</b></div>'+
    '<div class="rep-sum-row"><span>Points</span><b class="'+(s.pts<=m.budget?"ok":"bad")+'">'+s.pts+' / '+m.budget+'</b></div>'+
    '<div class="rep-sum-classes"><span>🦉 '+s.nZ+'</span><span>🛡️ '+s.nG+'</span><span>🌾 '+s.nE+'</span></div>'+
    '<div class="rep-sum-row"><span>🌾 Production</span><b class="'+(fed?"ok":"bad")+'">'+s.prod+' <small>vs '+s.pop+' mangent</small></b></div>'+
    (m.ratio?'<div class="rep-sum-row"><span>Proportion</span><b class="'+(s.nE>=2*(s.nZ+s.nG)?"ok":"bad")+'">prod. ≥ 2×élite</b></div>':'')+
    '<div class="rep-fate-note">🎴 Attention : le monde est exigeant. En plus des événements qui punissent une mauvaise conception (désormais plus durs), le paquet apporte des <b>cartes du destin</b> —peste, guerre, tremblement de terre, mort du fondateur— qui frappent n’importe quelle cité. Même la conception parfaite n’est pas à l’abri ; les <b>actions</b> sont ta planche de salut.</div>'+
    (ok?'<button class="rep-play" id="repPlay">Fonder la république →</button>':'<ul class="rep-errs">'+errs.map(e=>'<li>'+e+'</li>').join("")+'</ul>');
  const p=document.getElementById("repPlay"); if(p) p.addEventListener("click",repStart);
}
function repRandom(){
  const m=REP_MODES[rep.mode], pick=arr=>arr[Math.floor(Math.random()*arr.length)];
  for(let a=0;a<200;a++){ rep.cnt={};
    [REP_ROSTER.Z,REP_ROSTER.G,REP_ROSTER.E].forEach(arr=>{ rep.cnt[pick(arr).id]=1; });
    for(let g=0;g<300;g++){ const s=repCompute(); if(s.pts>=m.budget-6) break;
      const r=Math.random(), cls=r<0.7?REP_ROSTER.E:(r<0.86?REP_ROSTER.G:REP_ROSTER.Z); const c=pick(cls);
      if(s.pts+cost(c)>m.budget) continue; rep.cnt[c.id]=(rep.cnt[c.id]||0)+1; }
    if(repLegal().ok){ drawRepRoster(); drawRepSummary(); return; } }
  rep.cnt={}; rep.cnt[REP_ROSTER.Z[0].id]=1; rep.cnt[REP_ROSTER.G[0].id]=1; rep.cnt[REP_ROSTER.E[0].id]=6;
  drawRepRoster(); drawRepSummary();
}

/* ---------- turnos ---------- */
function repStart(){
  const s0=repCompute(); const c=rep._cls; rep.armonia=REP_START; rep.turn=0; rep.ap=(rep.acciones==="si")?REP_AP0:0;
  // crónica: instantánea del diseño inicial
  const parts=[]; ["Z","G","E"].forEach(k=>REP_ROSTER[k].forEach(p=>{ const q=rep.cnt[p.id]||0; if(q) parts.push(q+"× "+p.name); }));
  rep.designText=parts.join(", ")+" — "+s0.pop+" hab., "+s0.pts+" pts";
  rep.log=[];
  const n=REP_MODES[rep.mode].deck;   // Real 8 · Fácil 7 — cada carta es un turno
  rep.turns=n;
  const nFate=(rep.mode==="real")?3:2;                                  // cartas del destino inevitables por partida
  const forced=repShuffle(REP_FATE).slice(0,nFate).concat("menguada");  // + «Ciudad menguada» siempre presente
  const forcedSet=new Set(forced);
  const pool=REP_EVENTS.filter(e=>!forcedSet.has(e.id)).map(e=>e.id);   // el resto: eventos condicionales variados
  const rest=repShuffle(pool).slice(0, Math.max(0, n-forced.length));
  rep.deck=repShuffle(rest.concat(forced));
  rep.t={ Z:Object.assign({},c.Z), G:Object.assign({},c.G), E:Object.assign({},c.E), hero:false, prodBonus:0 };
  repRenderTurn();
}
function repFmt(n){ n=Math.round(n*10)/10; return Number.isInteger(n)?n:n.toFixed(1); }
function repRenderTurn(){
  rep.resolved=false; rep.apTurn=0; rep.used=new Set(); rep.turnActs=[]; rep.t.hero=false;
  rep.rng=Math.random();   // azar fijo del turno (oráculo): igual en previsualización y resolución
  const ev=REP_EVENTS.find(e=>e.id===rep.deck[rep.turn]);
  repBox().innerHTML='<div class="rep-wrap">'+
    '<div class="rep-hud"><span class="stat">Tour <b>'+(rep.turn+1)+'</b>/'+rep.turns+'</span>'+
      '<span class="stat" title="Tu commences à 10, mais il n’y a pas de plafond : tu peux accumuler au-dessus.">⚖️ Harmonie <b id="repArm">'+repFmt(rep.armonia)+'</b></span>'+
      (rep.acciones==="si"?'<span class="stat">🔧 PA <b id="repAp">'+rep.ap+'</b></span>':'')+'</div>'+
    '<div class="rep-arm'+(rep.armonia<=4?' low':'')+(rep.armonia>REP_ARM0?' over':'')+'"><i style="width:'+Math.min(100,Math.max(0,rep.armonia/REP_ARM0*100))+'%"></i></div>'+
    '<div class="rep-classes" id="repClasses"></div>'+
    '<div class="rep-city" id="repCity"></div>'+
    '<div class="rep-event reveal" id="repEvent"></div>'+
    (rep.acciones==="si"?'<div class="rep-actions-h">Actions (max. 2 ce tour)</div><div class="rep-acts" id="repActs"></div>':'')+
    '<div class="rep-resolve"><button id="repResolve">Affronter l’événement →</button></div></div>';
  repDrawTurn(ev);
  document.getElementById("repResolve").addEventListener("click",()=>repResolve(ev));
}
function repDrawTurn(ev){
  document.getElementById("repClasses").innerHTML=[
    { em:"🦉", l:"Gardiens", c:rep.t.Z.n }, { em:"🛡️", l:"Guerriers", c:rep.t.G.n+(rep.t.hero?" ×1,5":"") }, { em:"🌾", l:"Producteurs", c:rep.t.E.n }
  ].map(x=>'<div class="rep-class"><div class="c">'+x.em+' '+x.c+'</div><div class="l">'+x.l+'</div></div>').join("");
  // stat de CIUDAD: producción vs población
  const prod=repProd(), pop=repPop(), sur=prod-pop;
  const city=document.getElementById("repCity");
  if(city) city.innerHTML='<span class="rep-cstat">🌾 Production <b>'+prod+'</b></span>'+
    '<span class="rep-cstat">👥 Mangent <b>'+pop+'</b></span>'+
    '<span class="rep-cstat rep-sur '+(sur<0?"bad":"ok")+'">'+(sur<0?"⚠ déficit ":"✓ excédent +")+Math.abs(sur)+'</span>';
  // previsualizar el efecto sin aplicarlo (clonando rep.t)
  const snap=JSON.parse(JSON.stringify(rep.t)); const pre=ev.effect(); rep.t=snap;
  const good=pre.d>0, bad=pre.d<0; const evb=document.getElementById("repEvent");
  evb.classList.toggle("danger",bad); evb.classList.toggle("safe",!bad);
  evb.innerHTML='<img class="rep-ev-img" src="'+REP_IMG+ev.img+'.jpg" alt="">'+
    '<div class="rep-ev-body"><span class="rep-ev-tag'+(ev.fate?' fate':'')+'">'+(ev.fate?'🎴 Carte du destin · inévitable':'🃏 Événement du tour'+(ev.src&&ev.src!=="—"?' · '+ev.src:''))+'</span><h3>'+ev.name+'</h3>'+
    '<div class="threat">'+ev.threat+'</div>'+
    '<div class="rep-status '+(bad?"bad":good?"good":"ok")+'">'+(bad?"⚠ ":good?"✓ ":"• ")+pre.msg+'</div></div>';
  if(rep.acciones==="si"){ const acts=document.getElementById("repActs");
    acts.innerHTML=REP_ACTS.map(a=>{ const dis=rep.apTurn>=2||rep.used.has(a.id)||rep.ap<a.ap||(a.ok&&!a.ok());
      return '<button class="rep-act" data-act="'+a.id+'"'+(dis?" disabled":"")+'>'+(a.img?'<span class="rep-act-art"><img src="'+REP_IMG+a.img+'.jpg" alt=""></span>':'')+'<span class="rep-act-b"><b>'+a.name+' <span class="ap">'+a.ap+' PA</span></b><span class="d">'+a.d+'</span></span></button>'; }).join("");
    acts.querySelectorAll("[data-act]").forEach(b=>b.addEventListener("click",()=>repDoAct(b.dataset.act,ev))); }
}
function repDoAct(id,ev){ const a=REP_ACTS.find(x=>x.id===id);
  if(rep.apTurn>=2||rep.used.has(id)||rep.ap<a.ap||(a.ok&&!a.ok())) return;
  a.run(); rep.ap-=a.ap; rep.apTurn++; rep.used.add(id); rep.turnActs.push(a.name);
  const ael=document.getElementById("repAp"); if(ael)ael.textContent=rep.ap;
  const arm=document.getElementById("repArm"); if(arm)arm.textContent=repFmt(rep.armonia);
  document.querySelector("#republica .rep-arm > i").style.width=Math.min(100,Math.max(0,rep.armonia/REP_ARM0*100))+"%";
  repDrawTurn(ev); }
function repResolve(ev){
  if(rep.resolved) return; rep.resolved=true;
  const before=rep.armonia;
  const r=ev.effect(); const after=Math.round((before+r.d)*10)/10; rep.armonia=after;   // sin techo
  rep.log.push({ n:rep.turn+1, ev:ev.name, src:ev.src, fate:!!ev.fate, msg:r.msg, acts:rep.turnActs.slice(), before, after, Z:rep.t.Z.n, G:rep.t.G.n, E:rep.t.E.n });
  rep.turn++;
  if(rep.turn>=rep.turns || rep.armonia<=0 || repPop()<3) repResult(); else repRenderTurn();
}
/* ---------- crónica de la partida ---------- */
function repChronicleText(){
  const m=REP_MODES[rep.mode]; const L=[
    "CHRONIQUE DE MA RÉPUBLIQUE — Salle de philosophie · IES Martín de Bertendona",
    "Partie : "+(rep.gameName||"(sans nom)"),
    "Mode : "+m.name+" · "+(rep.acciones==="si"?"avec actions":"sans actions"),
    "Conception initiale : "+rep.designText, ""];
  rep.log.forEach(e=>{
    L.push("Tour "+e.n+" — "+e.ev+(e.src&&e.src!=="—"?" ("+e.src+")":"")+(e.fate?" [carte du destin]":""));
    L.push("   Résultat : "+e.msg);
    if(e.acts.length) L.push("   Tes actions : "+e.acts.join(", "));
    L.push("   Harmonie "+repFmt(e.before)+" → "+repFmt(e.after)+"  ·  cité "+e.Z+"/"+e.G+"/"+e.E+" (gardiens/guerriers/producteurs)");
    L.push("");
  });
  L.push("DÉNOUEMENT : "+(rep._rank||"—")+" — "+repFmt(Math.max(0,rep.armonia))+" d’harmonie (base "+REP_ARM0+") après "+rep.log.length+" tours vécus.");
  return L.join("\n");
}
function repDownloadText(txt,name){
  try{ const blob=new Blob([txt],{type:"text/plain;charset=utf-8"});
    const url=URL.createObjectURL(blob); const a=document.createElement("a");
    a.href=url; a.download=(name||"cronica")+".txt";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2000);
  }catch(e){}
}
/* nombre de archivo único y legible: mi-republica-<ciudad>-AAAA-MM-DD-HHMM */
function repFileSlug(s){ return String(s||"").normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40); }
function repStamp(ts){ const d=ts?new Date(ts):new Date(); const p=n=>String(n).padStart(2,"0"); return d.getFullYear()+"-"+p(d.getMonth()+1)+"-"+p(d.getDate())+"-"+p(d.getHours())+p(d.getMinutes()); }
function repChronicleFilename(name,ts){ const s=repFileSlug(name); return "mi-republica"+(s?"-"+s:"")+"-"+repStamp(ts); }
function repDownloadChronicle(){ repDownloadText(repChronicleText(),repChronicleFilename(rep.gameName||rep._defaultName)); }
/* ---------- historial de partidas (localStorage) ---------- */
const REP_HIST_KEY="aula-republica-hist", REP_HIST_MAX=12;
function repHistLoad(){ try{ const h=store.get(REP_HIST_KEY,[]); return Array.isArray(h)?h:[]; }catch(e){ return []; } }
function repHistPush(rec){ try{ const h=repHistLoad(); h.unshift(rec); while(h.length>REP_HIST_MAX) h.pop(); store.set(REP_HIST_KEY,h); }catch(e){} }
/* ---- exportar / importar historial (JSON, para llevarlo entre equipos) ---- */
function repExportHistory(){
  const h=repHistLoad();
  if(!h.length){ alert("Il n’y a pas encore de parties enregistrées à exporter."); return; }
  const data={ app:"aula-republica", version:1, exportado:new Date().toISOString(), partidas:h };
  try{ const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json;charset=utf-8"});
    const url=URL.createObjectURL(blob); const a=document.createElement("a");
    a.href=url; a.download="republica-partidas-"+new Date().toISOString().slice(0,10)+".json";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2000);
  }catch(e){ alert("Impossible de générer le fichier."); }
}
function repImportHistoryFile(file){
  if(!file) return;
  const rd=new FileReader();
  rd.onload=function(){
    let data; try{ data=JSON.parse(rd.result); }catch(e){ alert("Le fichier n’est pas un JSON valide."); return; }
    const arr = Array.isArray(data) ? data : (data && Array.isArray(data.partidas) ? data.partidas : null);
    if(!arr){ alert("Le fichier ne contient pas de parties de La République."); return; }
    const valid=arr.filter(r=>r && typeof r==="object" && typeof r.text==="string");
    if(!valid.length){ alert("Le fichier ne contient aucune partie valide."); return; }
    const cur=repHistLoad();
    const seen={}; cur.forEach(r=>{ if(r&&r.ts!=null) seen[r.ts]=true; });
    const nuevos=valid.filter(r=> r.ts==null || !seen[r.ts]);
    if(!nuevos.length){ alert("Ces parties étaient déjà sur cet ordinateur. Aucune n’a été ajoutée."); return; }
    let merged=cur.concat(nuevos);
    merged.sort((a,b)=>(b.ts||0)-(a.ts||0));
    while(merged.length>REP_HIST_MAX) merged.pop();
    store.set(REP_HIST_KEY,merged);
    alert("Importées : "+nuevos.length+" partie(s). Les "+REP_HIST_MAX+" plus récentes sont conservées.");
    renderRepHistory();
  };
  rd.onerror=function(){ alert("Impossible de lire le fichier."); };
  rd.readAsText(file);
}
function repEsc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
const REP_NAMES=["Calípolis","Magnesia","Nouvelle Athènes","Politeia","Eunomía","Kalonia","Aristópolis","Cité du Soleil","Sofópolis","Areté"];
function repDefaultName(){ return REP_NAMES[Math.floor(Math.random()*REP_NAMES.length)]; }
function repHistSetLatestName(name){
  const nm=(name||"").trim().slice(0,40)||rep._defaultName||"(sans nom)"; rep.gameName=nm;
  try{ const h=repHistLoad(); if(h.length){ h[0].name=nm; h[0].text=repChronicleText(); store.set(REP_HIST_KEY,h); } }catch(e){}
}
function renderRepHistory(){
  const box=repBox(); if(!box) return; const h=repHistLoad();
  box.innerHTML='<div class="rep-wrap"><div class="rep-hist">'+
    '<div class="rep-hist-top"><button class="btn2" id="repHistBack">← Revenir à la conception</button><h3>📚 Parties enregistrées</h3>'+
      '<span class="rep-hist-io">'+(h.length?'<button class="btn2" id="repHistExport" title="Télécharge toutes tes parties dans un fichier JSON pour les conserver ou les emporter sur un autre ordinateur">⬆️ Exporter</button>':'')+'<button class="btn2" id="repHistImport" title="Charge des parties depuis un fichier JSON exporté (elles s’ajoutent à celles de cet ordinateur, sans les effacer)">⬇️ Importer</button>'+(h.length?'<button class="btn2" id="repHistClear" title="Efface toutes les parties enregistrées dans ce navigateur (cela n’affecte pas les fichiers exportés)">🗑️ Tout effacer</button>':'')+'</span>'+
      '<input type="file" id="repHistFile" accept="application/json,.json" style="display:none">'+
      '</div>'+
    (h.length? h.map((r,i)=>'<details class="rep-hist-item"><summary><span class="rep-hist-badge">'+r.emoji+'</span> '+(r.name?'<b class="rep-hist-name">'+repEsc(r.name)+'</b> · ':'')+r.rank+' · ⚖ '+r.arm+' · '+r.turns+' tours · '+r.mode+(r.acc==="no"?" (sans actions)":"")+' · <span class="rep-hist-date">'+r.date+'</span></summary>'+
        '<pre class="rep-hist-text">'+repEsc(r.text)+'</pre>'+
        '<div class="rep-hist-btns"><button class="btn2" data-hcopy="'+i+'">📋 Copier</button><button class="btn2" data-hdl="'+i+'">💾 Télécharger</button></div></details>').join("")
      : '<p class="rep-hist-empty">Tu n’as encore terminé aucune partie. Joues-en une et elle sera enregistrée ici (les '+REP_HIST_MAX+' dernières sont conservées).</p>')+
    '</div></div>';
  document.getElementById("repHistBack").addEventListener("click",renderRepStart);
  const clr=document.getElementById("repHistClear"); if(clr) clr.addEventListener("click",()=>{ if(confirm("Effacer toutes les parties enregistrées ?")){ store.set(REP_HIST_KEY,[]); renderRepHistory(); } });
  const exp=document.getElementById("repHistExport"); if(exp) exp.addEventListener("click",repExportHistory);
  const imp=document.getElementById("repHistImport"), fi=document.getElementById("repHistFile");
  if(imp&&fi){ imp.addEventListener("click",()=>fi.click()); fi.addEventListener("change",()=>{ repImportHistoryFile(fi.files&&fi.files[0]); fi.value=""; }); }
  box.querySelectorAll("[data-hcopy]").forEach(b=>b.addEventListener("click",()=>{ const r=repHistLoad()[+b.dataset.hcopy]; if(r&&navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(r.text).then(()=>{ const o=b.textContent; b.textContent="✓ Copiée !"; setTimeout(()=>{b.textContent=o;},1400); }).catch(()=>{}); } }));
  box.querySelectorAll("[data-hdl]").forEach(b=>b.addEventListener("click",()=>{ const r=repHistLoad()[+b.dataset.hdl]; if(r) repDownloadText(r.text,repChronicleFilename(r.name,r.ts)); }));
}
function repCopyChronicle(btn){
  const txt=repChronicleText();
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(txt).then(()=>{ const o=btn.textContent; btn.textContent="✓ Copiée !"; setTimeout(()=>{btn.textContent=o;},1600); }).catch(()=>{}); }
}
function repResult(){
  const a=rep.armonia; let emoji,rank;
  if(a<=0||repPop()<3){ emoji="💥"; rank="La république s’effondre"; }
  else if(a>=8){ emoji="🏛️"; rank="République harmonieuse"; }
  else if(a>=5){ emoji="⚖️"; rank="République stable"; }
  else { emoji="⚠️"; rank="République fragile, mais debout"; }
  rep._rank=rank;
  const key="aula-republica-best"; const best=store.get(key,0); const record=a>best; if(record) store.set(key,a);
  // guardar en el historial del navegador (con nombre por defecto, editable después)
  rep._defaultName=repDefaultName(); rep.gameName=rep._defaultName;
  const ts=Date.now(); let fecha; try{ fecha=new Date(ts).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}); }catch(e){ fecha=new Date(ts).toLocaleString(); }
  repHistPush({ ts, date:fecha, name:rep.gameName, emoji, rank, mode:REP_MODES[rep.mode].name, acc:rep.acciones, arm:repFmt(Math.max(0,a)), turns:rep.log.length, text:repChronicleText() });
  const qs=["Que montre ce jeu sur la nécessité de l’équilibre dans la société de Platon ?",
    "Quels risques entraîne le pouvoir excessif de chaque classe sociale ?",
    "Est-il vrai, comme le disait Platon, que sans gouvernants philosophes la société ne peut être sauvée ?",
    "Une cité juste vaut-elle la peine si, pour l’obtenir, il faut renoncer à l’égalité entre les classes ?"];
  const chronicle=rep.log.map(e=>{ const s=e.after-e.before, cls=s<0?"bad":s>0?"good":"ok";
    return '<li class="rep-cr-item'+(e.fate?" fate":"")+'"><div class="rep-cr-h"><span class="rep-cr-n">T'+e.n+'</span><b>'+e.ev+'</b>'+(e.fate?' <span class="rep-cr-badge">destin</span>':'')+'<span class="rep-cr-arm '+cls+'">'+repFmt(e.before)+'→'+repFmt(e.after)+'</span></div>'+
      '<div class="rep-cr-msg">'+e.msg+'</div>'+
      (e.acts.length?'<div class="rep-cr-acts">🔧 '+e.acts.join(", ")+'</div>':'')+'</li>'; }).join("");
  repBox().innerHTML='<div class="rep-wrap"><div class="rep-result">'+
    '<div class="rep-badge">'+emoji+'</div><div class="rep-rank">'+rank+'</div>'+
    '<div class="rep-final">'+repFmt(Math.max(0,a))+' <span>d’harmonie</span></div>'+
    '<p class="rep-pop">'+rep.log.length+' tours vécus · cité finale '+rep.t.Z.n+'/'+rep.t.G.n+'/'+rep.t.E.n+' · '+(rep.acciones==="si"?"avec actions":"sans actions")+' · '+(record?"ta meilleure république ! 🎉":"meilleur score : "+repFmt(Math.max(best,a)))+'</p>'+
    '<div class="rep-name"><label for="repName">🏷️ Nom de cette partie</label><input id="repName" type="text" maxlength="40" value="'+repEsc(rep.gameName)+'" placeholder="Donne un nom à ta république"></div>'+
    '<div class="rep-chronicle"><div class="rep-cr-title">📜 Chronique de ta république</div><ol class="rep-cr-list">'+chronicle+'</ol></div>'+
    '<div class="rep-save"><button class="btn2" id="repSave">💾 Enregistrer la chronique (.txt)</button><button class="btn2" id="repCopy">📋 Copier la chronique</button><button class="btn2" id="repHistView">📚 Voir l’historique</button></div>'+
    '<blockquote class="rep-reflect">Pour penser : '+qs[Math.floor(Math.random()*qs.length)]+'</blockquote>'+
    '<div class="rep-actions2"><button class="btn2 primary" id="repAgain">Concevoir une autre cité</button></div></div></div>';
  document.getElementById("repAgain").addEventListener("click",renderRepStart);
  const sv=document.getElementById("repSave"); if(sv) sv.addEventListener("click",repDownloadChronicle);
  const cp=document.getElementById("repCopy"); if(cp) cp.addEventListener("click",()=>repCopyChronicle(cp));
  const hv=document.getElementById("repHistView"); if(hv) hv.addEventListener("click",renderRepHistory);
  const nm=document.getElementById("repName"); if(nm){ nm.addEventListener("input",()=>repHistSetLatestName(nm.value)); nm.addEventListener("focus",()=>nm.select()); }
}
function initRep(){ renderRepStart(); }
document.addEventListener("DOMContentLoaded", initRep);
(function(){ const nav=document.getElementById("tabs"); if(nav) nav.addEventListener("click", e=>{ const b=e.target.closest("button"); if(b && b.dataset.view==="republica") renderRepStart(); }); })();
