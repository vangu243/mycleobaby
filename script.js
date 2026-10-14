/* =====================================================================
   1. CONFIGURATION — C'EST ICI QUE TU MODIFIES TOUT
   ===================================================================== */
const CONFIG = {
  name: "Cleopatre",

  // Nom affiché avant TA vidéo (dernière vidéo)
  myName: { fr: "Ton amoureux", en: "Your love" },

  // MUSIQUE (légale) — remplis UNE des deux options, laisse l'autre vide ""
  //  a) file : un fichier audio que tu possèdes, ex: "assets/music/litaka.mp3"
  //  b) youtubeId : l'identifiant d'une vidéo YouTube (ce qui suit "v=" dans le lien)
  music: { file: "", youtubeId: "UpJay2UcIIg", volume: 0.55 }, // Ferré Gola - Litaka (Clip Officiel)

  // NOTRE HISTOIRE — une ligne par écran. photo: "" = pas de photo.
  story: [
    { photo: "assets/photos/1.jpg", fr: "Chaque histoire d'amour a un début...", en: "Every love story has a beginning..." },
    { photo: "assets/photos/2.jpg", fr: "Ton sourire est devenu mon endroit préféré.", en: "Your smile became my favorite place." },
    { photo: "assets/photos/3.jpg", fr: "Même à travers un écran, tu illumines mes journées.", en: "Even through a screen, you light up my days." },
    { photo: "assets/photos/4.jpg", fr: "Ta joie est contagieuse, et je ne m'en lasse jamais.", en: "Your joy is contagious, and I never get tired of it." },
    { photo: "assets/photos/5.jpg", fr: "Chaque appel avec toi est un petit cadeau.", en: "Every call with you is a little gift." },
    { photo: "assets/photos/6.jpg", fr: "Tu es la personne que je choisis, encore et encore.", en: "You are the person I choose, again and again." },
    { photo: "assets/photos/7.jpg", fr: "La distance ne change rien à ce que je ressens pour toi.", en: "Distance changes nothing about what I feel for you." },
    { photo: "assets/photos/8.jpg", fr: "Avec toi, même les petits moments deviennent précieux.", en: "With you, even the small moments become precious." },
    { photo: "assets/photos/9.jpg", fr: "Ton rire résonne encore dans ma tête.", en: "Your laugh still echoes in my head." },
    { photo: "assets/photos/10.jpg", fr: "Je t'aime un peu plus chaque jour qui passe.", en: "I love you a little more with every day that passes." },
    { photo: "assets/photos/11.jpg", fr: "Tu es mon rire, ma paix, mon chez-moi.", en: "You are my laughter, my peace, my home." },
    { photo: "assets/photos/12.jpg", fr: "Et notre histoire continue de s'écrire...", en: "And our story keeps being written..." }
  ],

  // NOS SOUVENIRS — grille à toucher, juste après les photos. Change les titres/légendes ci-dessous.
  memories: [
    { emoji: "💪", title: { fr: "Quand je doute", en: "When I doubt myself" },
      caption: { fr: "Quand je perds confiance, elle me dit toujours qu'il n'y a pas de plan B, et qu'on va réussir.",
                 en: "When I lose confidence, she always tells me there's no plan B, and that we're going to make it." } },
    { emoji: "😊", title: { fr: "Son sourire", en: "Her smile" },
      caption: { fr: "Quand elle sourit, je me sens très heureux.", en: "When she smiles, I feel so happy." } },
    { emoji: "🌟", title: { fr: "Sa présence", en: "Her presence" },
      caption: { fr: "Sa présence me fortifie d'avancer.", en: "Her presence gives me the strength to keep going." } },
    { emoji: "💃", title: { fr: "Danser ensemble", en: "Dancing together" },
      caption: { fr: "Même de loin, quand on danse ensemble, je sens toujours sa présence.",
                 en: "Even from afar, when we dance together, I always feel her presence." } }
  ],

  // QUELQUES INSTANTS À NOUS — vos petits souvenirs vidéo, juste avant les messages des proches
  ourClips: [
    { src: "assets/videos/us1.mp4", fr: "Un de nos moments à nous ❤️", en: "One of our moments ❤️" },
    { src: "assets/videos/us2.mp4", fr: "Un de nos fous rires ❤️", en: "One of our laughs together ❤️" },
    { src: "assets/videos/us3.mp4", fr: "Un souvenir que je garde précieusement ❤️", en: "A memory I hold close ❤️" },
    { src: "assets/videos/us4.mp4", fr: "Toi et moi, comme toujours ❤️", en: "You and me, like always ❤️" },
    { src: "assets/videos/us5.mp4", fr: "Un petit bout de nous ❤️", en: "A little piece of us ❤️" },
    { src: "assets/videos/us6.mp4", fr: "Encore un souvenir à nous ❤️", en: "One more memory of us ❤️" }
  ],

  // VIDÉOS DES PROCHES — pour en ajouter : copie une ligne. Pour en enlever : supprime la ligne.
  friends: [
    { name: "Maman",  src: "assets/videos/video1.mp4" },
    { name: "Papa",   src: "assets/videos/video2.mp4" },
    { name: "Sarah",  src: "assets/videos/video3.mp4" },
    { name: "Grace",  src: "assets/videos/video4.mp4" },
    { name: "Ami(e) 5", src: "assets/videos/video5.mp4" },
    { name: "Ami(e) 6", src: "assets/videos/video6.mp4" },
    { name: "Ami(e) 7", src: "assets/videos/video7.mp4" },
    { name: "Ami(e) 8", src: "assets/videos/video8.mp4" },
    { name: "Ami(e) 9", src: "assets/videos/video9.mp4" },
    { name: "Ami(e) 10", src: "assets/videos/video10.mp4" },
    { name: "Maman",    src: "assets/videos/video11.mp4" },
    { name: "Maman 2",  src: "assets/videos/video12.mp4" },
    { name: "Maman 3",  src: "assets/videos/video13.mp4" },
    { name: "Petit frère", src: "assets/videos/video14.mp4" }
  ],

  // TA VIDÉO (toujours la dernière)
  myVideo: "assets/videos/moi.mp4",

  // LES 5 CŒURS (le jeu)
  hearts: [
    { fr: "Une chose que j'aime chez toi : ton sourire, qui illumine toutes mes journées.", en: "One thing I love about you: your smile, which lights up all my days." },
    { fr: "Un souvenir que je n'oublierai jamais : tu m'aimes inconditionnellement.", en: "One memory I'll never forget: you love me unconditionally." },
    { fr: "Une chose que je souhaite pour nous : avancer et vivre ensemble.", en: "One thing I wish for us: to move forward and live together." },
    { fr: "Ce que tu m'as appris : à être toujours positif, quelle que soit la situation. Bisous.", en: "What you taught me: to always stay positive, no matter the situation. Kisses." },
    { fr: "Ce que je te promets : je serai toujours là pour toi, et on se battra ensemble.", en: "What I promise you: I will always be there for you, and we'll fight together." }
  ],

  // LA LETTRE — un texte = un paragraphe
  letter: {
    fr: ["Ma chère Cleopatre,", "Écris ici ta véritable lettre d'amour.", "Je voulais créer quelque chose que tu pourrais garder et revoir quand tu le souhaites.", "Même lorsque la distance nous sépare, une partie de mon cœur reste toujours près de toi.", "Joyeux anniversaire mon amour.", "Je t'aime."],
    en: ["My dear Cleopatre,", "Write your real love letter here.", "I wanted to create something you could keep and come back to whenever you want.", "Even when distance separates us, a part of my heart is always close to you.", "Happy birthday, my love.", "I love you."]
  },
  signature: "— Ton nom",

  // CARTE SOUVENIR — le message qui apparaît sur l'image téléchargeable
  card: {
    fr: "Tu es mon rire, ma paix, mon chez-moi. Joyeux anniversaire, mon amour.",
    en: "You are my laughter, my peace, my home. Happy birthday, my love."
  },

  // VERROU D'ENTRÉE — le nom n'est jamais écrit en clair ici (voir plus bas).
  // Après 3 essais ratés, cet indice s'affiche :
  lockHint: { fr: "Indice : mon nom complet, comme sur ma pièce d'identité.", en: "Hint: my full name, as on my ID." },

  // TEXTES DE L'INTERFACE
  ui: {
    fr: { hb: "Joyeux anniversaire, {name} ❤️", special: "J'ai préparé quelque chose de spécial pour toi...", start: "Commencer",
      prev: "Précédent", next: "Suivant", toVideos: "Continuer ❤️", vtitle: "Des messages de ceux qui t'aiment ❤️",
      msgFrom: "Un message de", play: "Lancer", now: "Et maintenant... quelque chose de ma part ❤️", toGame: "Continuer ❤️",
      gtitle: "Trouve mes cœurs", gfound: "Tu as trouvé tous mes cœurs ❤️", gift: "OUVRE TON DERNIER CADEAU 🎁",
      fhb: "Joyeux anniversaire, {name} !", fwish: "Que ce nouveau chapitre de ta vie soit rempli d'amour, de bonheur et de beaux souvenirs.",
      last: "Un dernier message ❤️", close: "Fermer", missing: "Vidéo introuvable", musicOn: "🎵 Musique ON", musicOff: "🎵 Musique OFF",
      downloadCard: "💌 Télécharger ma carte souvenir",
      replyPrompt: "Et toi... tu voudrais me dire quoi ? ❤️", replySend: "M'envoyer ça 💌",
      replySent: "Choisis comment me l'envoyer ❤️", replyCopied: "Copié ! Colle-le dans WhatsApp pour me l'envoyer ❤️", replyEmpty: "Écris un petit mot d'abord ❤️",
      scratchHint: "Gratte ici avec ton doigt ✨",
      memTitle: "Nos souvenirs", memHint: "Touche chaque carte ✨" },
    en: { hb: "Happy Birthday, {name} ❤️", special: "I've prepared something special for you...", start: "Start",
      prev: "Previous", next: "Next", toVideos: "Continue ❤️", vtitle: "Messages from the people who love you ❤️",
      msgFrom: "A message from", play: "Play", now: "And now... something from me ❤️", toGame: "Continue ❤️",
      gtitle: "Find my hearts", gfound: "You found all my hearts ❤️", gift: "OPEN YOUR FINAL GIFT 🎁",
      fhb: "Happy Birthday, {name}!", fwish: "May this new chapter of your life be filled with love, happiness and beautiful memories.",
      last: "One last message ❤️", close: "Close", missing: "Video not found", musicOn: "🎵 Music ON", musicOff: "🎵 Music OFF",
      downloadCard: "💌 Download my memory card",
      replyPrompt: "And you... what would you like to tell me? ❤️", replySend: "Send it to me 💌",
      replySent: "Choose how to send it to me ❤️", replyCopied: "Copied! Paste it in WhatsApp to send it to me ❤️", replyEmpty: "Write a little something first ❤️",
      scratchHint: "Scratch here with your finger ✨",
      memTitle: "Our memories", memHint: "Tap each card ✨" }
  }
};

/* =====================================================================
   2. CODE — pas besoin d'y toucher
   ===================================================================== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let L = 'fr', mOn = false, mA = null, yt = null;
const T = k => CONFIG.ui[L][k].replace(/\{name\}/g, CONFIG.name);

function show(id) {
  $$('.screen').forEach(s => s.classList.toggle('active', s.id === id));
  if (id === 'story') { si = 0; renderStory(); }
  if (id === 'memories') { renderMemories(); }
  if (id === 'videos') { buildSteps(); vi = 0; renderVid(); }
  if (id === 'game') startGame();
  if (id === 'final') finale();
}
function applyLang() {
  document.documentElement.lang = L;
  $$('[data-t]').forEach(e => e.textContent = T(e.dataset.t));
  $('#music').textContent = mOn ? T('musicOn') : T('musicOff');
}

/* ---- Musique ---- */
let musicInited = false;
function musicInit() {
  if (musicInited) return; musicInited = true;
  const m = CONFIG.music;
  if (m.file) { mA = new Audio(m.file); mA.loop = true; mA.volume = m.volume; }
  else if (m.youtubeId) {
    const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; document.head.append(s);
    window.onYouTubeIframeAPIReady = () => { yt = new YT.Player('yt', { width: '200', height: '200', videoId: m.youtubeId,
      playerVars: { playsinline: 1, loop: 1, playlist: m.youtubeId, controls: 0 },
      events: {
        onReady: () => { yt.setVolume(m.volume * 100); if (mOn) mPlay(); },
        onError: e => console.warn('Musique YouTube : lecture impossible (code erreur ' + e.data + '). La vidéo est peut-être bloquée pour la lecture intégrée hors YouTube.')
      } }); };
  }
  if (m.file || m.youtubeId) $('#music').classList.remove('hidden');
}
const mPlay = () => { if (mA) mA.play().catch(() => {}); if (yt && yt.playVideo) yt.playVideo(); };
const mPause = () => { if (mA) mA.pause(); if (yt && yt.pauseVideo) yt.pauseVideo(); };
function setMusic(on) { mOn = on; $('#music').textContent = on ? T('musicOn') : T('musicOff'); on ? mPlay() : mPause(); }
// duck(true, 0.5) baisse à 50% (on entend encore les vœux) ; duck(true) sans niveau coupe complètement ; duck(false) remet le son normal.
function duck(active, level = 0) {
  if (!mOn) return;
  if (active && level > 0) {
    if (mA) { if (mA.paused) mA.play().catch(() => {}); mA.volume = CONFIG.music.volume * level; }
    if (yt && yt.setVolume) { if (yt.playVideo) yt.playVideo(); yt.setVolume(CONFIG.music.volume * 100 * level); }
  } else if (active) {
    mPause();
  } else {
    if (mA) mA.volume = CONFIG.music.volume;
    if (yt && yt.setVolume) yt.setVolume(CONFIG.music.volume * 100);
    mPlay();
  }
}

/* ---- Notre histoire ---- */
let si = 0;
function renderStory() {
  const s = CONFIG.story[si], ph = $('#photo'), tx = $('#stext');
  ph.innerHTML = s.photo ? `<img src="${s.photo}" alt="" onerror="this.remove()">` : '';
  tx.textContent = s[L];
  [ph, tx].forEach(e => { e.classList.remove('in'); void e.offsetWidth; e.classList.add('in'); });
  setTimeout(() => heartsBurst(innerWidth / 2, innerHeight * 0.2, 8), 400);
  $('#sprev').style.visibility = si ? 'visible' : 'hidden';
  $('#snext').textContent = si === CONFIG.story.length - 1 ? T('toVideos') : T('next');
  $('#scount').textContent = `${si + 1} / ${CONFIG.story.length}`;
}
$('#snext').onclick = () => si < CONFIG.story.length - 1 ? (si++, renderStory()) : show('memories');
$('#sprev').onclick = () => { if (si) { si--; renderStory(); } };

/* ---- Nos souvenirs (grille à toucher) ---- */
function renderMemories() {
  const grid = $('#memGrid'); grid.innerHTML = '';
  CONFIG.memories.forEach(m => {
    const card = document.createElement('div'); card.className = 'memCard';
    card.innerHTML = `<div class="memInner">
        <div class="memFace memFront"><span>${m.emoji}</span><p>${m.title[L]}</p></div>
        <div class="memFace memBack"><p>${m.caption[L]}</p></div>
      </div>`;
    card.onclick = () => {
      const was = card.classList.contains('flipped');
      card.classList.toggle('flipped');
      if (!was) { const r = card.getBoundingClientRect(); heartsBurst(r.left + r.width / 2, r.top + r.height / 2, 10); }
    };
    grid.appendChild(card);
  });
}
$('#memNext').onclick = () => show('videos');

/* ---- Vidéos (s'enchaînent seules après la 1ère) ---- */
let steps = [], vi = 0, vChainOn = false;
function buildSteps() {
  steps = [
    ...CONFIG.ourClips.map(c => ({ k: 'u', src: c.src, cap: c[L] })),
    ...CONFIG.friends.map(f => ({ k: 'f', name: f.name, src: f.src })),
    { k: 'i' }, { k: 'm', name: CONFIG.myName[L], src: CONFIG.myVideo }
  ];
  vChainOn = false;
}
function stopVid() { const v = $('#vstage video'); if (v) v.pause(); duck(false); }
function advanceVid() { vi < steps.length - 1 ? (vi++, renderVid()) : (stopVid(), show('game')); }
function playStep(s, st) {
  st.innerHTML = `<video controls playsinline autoplay src="${s.src}"></video>`;
  const v = st.querySelector('video');
  v.onplay = () => duck(true, (s.k === 'f' || s.k === 'u') ? 0.5 : 0);
  v.onpause = () => duck(false);
  v.onended = () => { duck(false); advanceVid(); };
  v.onerror = () => { st.innerHTML = `<p class="missing">${T('missing')}<br><small>${s.src}</small></p>`; setTimeout(advanceVid, 1800); };
}
function renderVid() {
  stopVid();
  const s = steps[vi], st = $('#vstage'), vt = $('#vtitle');
  if (s.k === 'u') { vt.style.visibility = 'visible'; vt.textContent = L === 'fr' ? 'Quelques instants à nous ❤️' : 'A few moments of us ❤️'; }
  else if (s.k === 'f') { vt.style.visibility = 'visible'; vt.textContent = T('vtitle'); }
  else { vt.style.visibility = 'hidden'; }
  if (s.k === 'i') {
    st.innerHTML = `<p class="script big fadein">${T('now')}</p>`;
    setTimeout(() => heartsBurst(innerWidth / 2, innerHeight / 2, 30), 900);
    setTimeout(advanceVid, 2800);
  } else if (!vChainOn) {
    st.innerHTML = `${s.cap ? `<p class="lead fadein">${s.cap}</p>` : ''}<p class="script big reveal">❤️</p>
      <button class="btn play" id="vplay">▶ ${T('play')}</button>`;
    $('#vplay').onclick = () => { vChainOn = true; playStep(s, st); };
  } else {
    if (s.cap) heartsBurst(innerWidth / 2, innerHeight * 0.25, 10);
    playStep(s, st);
  }
  $('#vprev').style.visibility = 'visible';
  $('#vnext').textContent = vi === steps.length - 1 ? T('toGame') : T('next');
  $('#vcount').textContent = s.k === 'f' ? `${vi - CONFIG.ourClips.length + 1} / ${CONFIG.friends.length}` : (s.k === 'u' ? `${vi + 1} / ${CONFIG.ourClips.length}` : '');
}
$('#vnext').onclick = () => { if (vi < steps.length - 1) { vi++; renderVid(); } else { stopVid(); show('game'); } };
$('#vprev').onclick = () => { if (vi) { vi--; renderVid(); } else { stopVid(); show('story'); } };

/* ---- Jeu des 5 cœurs ---- */
const SLOTS = [[8, 6], [58, 2], [33, 36], [6, 66], [60, 62]];
let found = 0;
function startGame() {
  found = 0; const a = $('#garea'); a.innerHTML = '';
  $('#gcount').textContent = `0 / ${CONFIG.hearts.length}`;
  CONFIG.hearts.forEach((h, i) => setTimeout(() => {
    const b = document.createElement('button'); b.className = 'heart'; b.textContent = '♥';
    b.style.left = SLOTS[i % 5][0] + '%'; b.style.top = SLOTS[i % 5][1] + '%';
    b.onclick = () => {
      if (b.classList.contains('done')) return;
      b.classList.add('done'); found++;
      const r = b.getBoundingClientRect(); heartsBurst(r.left + 25, r.top + 25, 18);
      $('#gcount').textContent = `${found} / ${CONFIG.hearts.length}`;
      $('#gmsg').textContent = h[L]; $('#gcard').classList.add('open');
    };
    a.append(b);
  }, 800 + i * 1100));
}
$('#gok').onclick = () => {
  $('#gcard').classList.remove('open');
  if (found === CONFIG.hearts.length) setTimeout(() => $('#gdone').classList.add('open'), 500);
};
$('#gift').onclick = () => { $('#gdone').classList.remove('open'); show('final'); };

/* ---- Final ---- */
function finale() {
  confetti(); setTimeout(confetti, 2500); setTimeout(confetti, 5000);
  const b = $('#balloons'); b.innerHTML = '';
  for (let i = 0; i < 14; i++) {
    const e = document.createElement('span'); e.className = 'balloon'; e.textContent = '🎈';
    e.style.left = Math.random() * 92 + '%'; e.style.animationDuration = 7 + Math.random() * 6 + 's';
    e.style.animationDelay = Math.random() * 6 + 's'; b.append(e);
  }
  playBirthdayPiano();
}
/* ---- Petit piano d'anniversaire sur l'écran du gâteau (Litaka baisse, puis remonte) ---- */
function playBirthdayPiano() {
  const piano = new Audio('assets/music/piano_birthday.mp3');
  piano.volume = 0.9;
  duck(true, 0.15);
  piano.play().catch(() => {});
  piano.onended = () => duck(false);
}
/* ---- Carte à gratter avant la lettre ---- */
function initScratch() {
  const canvas = $('#scratchCanvas'), lbody = $('#lbody');
  const rect = lbody.getBoundingClientRect();
  const w = Math.max(Math.round(rect.width), 260), h = Math.max(Math.round(rect.height), 220);
  canvas.width = w; canvas.height = h;
  canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  canvas.style.opacity = '1'; canvas.style.pointerEvents = 'auto'; canvas.style.transition = 'opacity .8s ease';
  const ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'source-over';
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, '#e9c98a'); g.addColorStop(1, '#c79a52');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(139,13,31,.85)'; ctx.font = '20px "Cormorant Garamond", serif'; ctx.textAlign = 'center';
  ctx.fillText('❤ ' + T('scratchHint') + ' ❤', w / 2, h / 2);
  ctx.globalCompositeOperation = 'destination-out';
  let scratching = false, revealed = false;
  const pos = e => { const r = canvas.getBoundingClientRect(); const p = e.touches ? e.touches[0] : e; return { x: p.clientX - r.left, y: p.clientY - r.top }; };
  const scratchAt = (x, y) => { ctx.beginPath(); ctx.arc(x, y, 28, 0, 6.29); ctx.fill(); };
  function checkDone() {
    if (revealed) return;
    const data = ctx.getImageData(0, 0, w, h).data;
    let clear = 0, total = 0;
    for (let i = 3; i < data.length; i += 4 * 37) { total++; if (data[i] === 0) clear++; }
    if (clear / total > 0.45) {
      revealed = true;
      canvas.style.opacity = '0'; canvas.style.pointerEvents = 'none';
      heartsBurst(innerWidth / 2, innerHeight * 0.4, 24);
    }
  }
  const start = e => { scratching = true; const p = pos(e); scratchAt(p.x, p.y); };
  const move = e => { if (!scratching) return; e.preventDefault(); const p = pos(e); scratchAt(p.x, p.y); checkDone(); };
  const end = () => { scratching = false; checkDone(); };
  canvas.onmousedown = start; canvas.onmousemove = move; canvas.onmouseup = end;
  canvas.ontouchstart = e => { start(e); }; canvas.ontouchmove = move; canvas.ontouchend = end;
}
$('#lastmsg').onclick = () => {
  $('#lbody').innerHTML = CONFIG.letter[L].map(p => `<p>${p}</p>`).join('') + `<p class="sign">${CONFIG.signature}</p>`;
  $('#letter').classList.add('open');
  requestAnimationFrame(initScratch);
};
$('#lclose').onclick = () => $('#letter').classList.remove('open');

/* ---- Effets (particules) ---- */
const cv = $('#fx'), cx = cv.getContext('2d'); let W, H, P = [];
function resize() { const d = devicePixelRatio || 1; W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; cx.setTransform(d, 0, 0, d, 0, 0); }
addEventListener('resize', resize); resize();
function heartsBurst(x, y, n = 14) {
  for (let i = 0; i < n; i++) { const a = Math.random() * 6.28, v = 1 + Math.random() * 3;
    P.push({ t: 'h', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 1.5, g: .05, s: 12 + Math.random() * 16, l: 90, r: 0, vr: 0, c: i % 3 ? '#c1272d' : '#d8b36a' }); }
}
function confetti() {
  const c = ['#d8b36a', '#8b0d1f', '#f5efe6', '#c1272d'];
  for (let i = 0; i < 150; i++) P.push({ t: 'c', x: Math.random() * W, y: -20 - Math.random() * H * .4, vx: (Math.random() - .5) * 2,
    vy: 2 + Math.random() * 3, g: 0, s: 6 + Math.random() * 6, l: 500, r: Math.random() * 6, vr: (Math.random() - .5) * .3, c: c[i % 4] });
}
function ambient() {
  if (P.length > 90 || Math.random() > .18) return;
  const roll = Math.random();
  const t = roll < .2 ? 'h' : roll < .32 ? 'star' : 'd';
  P.push({ t, x: Math.random() * W, y: H + 10, vx: (Math.random() - .5) * .4, vy: -(.3 + Math.random() * .8),
    g: 0, s: t === 'h' ? 10 + Math.random() * 8 : t === 'star' ? 9 + Math.random() * 7 : .8 + Math.random() * 1.8,
    l: 600, r: Math.random() * 6.28, vr: t === 'star' ? .01 + Math.random() * .02 : 0, c: t === 'star' ? '#d8b36a' : '#8b0d1f' });
}
(function tick() {
  cx.clearRect(0, 0, W, H); ambient();
  P = P.filter(p => p.l > 0 && p.y < H + 60 && p.y > -60);
  for (const p of P) {
    p.x += p.vx; p.y += p.vy; p.vy += p.g; p.r += p.vr; p.l--;
    cx.globalAlpha = Math.max(0, Math.min(1, p.l / 40));
    if (p.t === 'd') { cx.fillStyle = '#d8b36a'; cx.beginPath(); cx.arc(p.x, p.y, p.s, 0, 6.3); cx.fill(); }
    else if (p.t === 'h') { cx.font = p.s + 'px serif'; cx.fillStyle = p.c; cx.fillText('♥', p.x, p.y); }
    else if (p.t === 'star') { cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.font = p.s + 'px serif'; cx.fillStyle = p.c; cx.textAlign = 'center'; cx.fillText('✦', 0, 0); cx.restore(); }
    else { cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); cx.restore(); }
  }
  requestAnimationFrame(tick);
})();

/* ---- Verrou d'entrée ---- */
// Réponses acceptées, stockées comme empreintes (hash), jamais en clair.
// 1) le nom complet, écrit dans N'IMPORTE QUEL ORDRE
// 2) une phrase alternative plus facile
const LOCK_NAME_HASH = '1olxr59';      // 3 mots du nom, dans n'importe quel ordre
const LOCK_PHRASE_HASHES = ['1efz3no', '53p2l2', '10oaj23', '1akozo5', 'pvasu6']; // phrases alternatives acceptées
function norm(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}
function hash(str) { let h = 5381; for (let i = 0; i < str.length; i++) h = (h * 33) ^ str.charCodeAt(i); return (h >>> 0).toString(36); }
function checkLock(input) {
  const n = norm(input);
  if (!n) return false;
  const tokens = n.split(' ').filter(Boolean).sort().join(' ');
  if (hash(tokens) === LOCK_NAME_HASH) return true;
  return LOCK_PHRASE_HASHES.includes(hash(n));
}
let lockTries = 0, lockWait = null;
const lockIn = $('#lockInput'), lockBtn = $('#lockBtn'), lockMsg = $('#lockMsg'), lockHint = $('#lockHint');
function tryUnlock() {
  if (lockBtn.disabled) return;
  if (checkLock(lockIn.value)) {
    lockMsg.textContent = '❤️';
    musicInit(); setMusic(true); // on lance la musique tout de suite, pendant ce vrai tap de l'utilisatrice
    setTimeout(() => show('lang'), 500);
    return;
  }
  lockTries++;
  lockIn.classList.remove('shake'); void lockIn.offsetWidth; lockIn.classList.add('shake');
  lockMsg.textContent = "Pas tout à fait... réfléchis encore ❤️ / Not quite... think again ❤️";
  if (lockTries >= 3) {
    lockHint.textContent = `${CONFIG.lockHint.fr} / ${CONFIG.lockHint.en}`;
  }
  const waits = [0, 0, 0, 5, 15, 30];
  const wait = waits[Math.min(lockTries, waits.length - 1)];
  if (wait > 0) {
    let left = wait;
    lockBtn.disabled = true;
    lockWait = setInterval(() => {
      left--;
      lockBtn.textContent = `Attends ${left}s / Wait ${left}s`;
      if (left <= 0) { clearInterval(lockWait); lockBtn.disabled = false; lockBtn.textContent = 'Déverrouiller / Unlock'; }
    }, 1000);
  }
}
lockBtn.onclick = tryUnlock;
lockIn.addEventListener('keydown', e => { if (e.key === 'Enter') tryUnlock(); });

/* ---- Carte souvenir téléchargeable ---- */
function wrapLines(ctx, text, maxWidth) {
  const words = text.split(' '), lines = []; let line = '';
  for (const w of words) {
    const test = (line + w + ' ');
    if (ctx.measureText(test).width > maxWidth && line) { lines.push(line.trim()); line = w + ' '; }
    else line = test;
  }
  lines.push(line.trim());
  return lines;
}
async function downloadCard() {
  if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) {} }
  const W = 1080, H = 1350;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(W / 2, H * 0.32, 40, W / 2, H * 0.32, 950);
  g.addColorStop(0, '#2a0a10'); g.addColorStop(1, '#0a0506');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.strokeStyle = '#d8b36a'; x.lineWidth = 3; x.strokeRect(44, 44, W - 88, H - 88);
  x.strokeStyle = 'rgba(216,179,106,.4)'; x.lineWidth = 1; x.strokeRect(58, 58, W - 116, H - 116);
  x.textAlign = 'center';
  x.font = '46px serif'; x.fillStyle = 'rgba(216,179,106,.45)';
  x.fillText('❤', 130, 150); x.fillText('❤', W - 130, H - 110);
  x.fillStyle = '#d8b36a'; x.font = '100px "Great Vibes", cursive';
  x.fillText(CONFIG.name, W / 2, 280);
  x.fillStyle = 'rgba(245,239,230,.75)'; x.font = '26px "Cormorant Garamond", serif';
  x.fillText(L === 'fr' ? "NOTRE HISTOIRE D'AMOUR" : 'OUR LOVE STORY', W / 2, 330);
  x.fillStyle = '#f5efe6'; x.font = 'italic 42px "Cormorant Garamond", serif';
  const lines = wrapLines(x, CONFIG.card[L], W - 220);
  const startY = 620 - (lines.length - 1) * 30;
  lines.forEach((ln, i) => x.fillText(ln, W / 2, startY + i * 58));
  x.fillStyle = '#d8b36a'; x.font = '26px "Cormorant Garamond", serif';
  const today = new Date();
  x.fillText(today.toLocaleDateString(L === 'fr' ? 'fr-FR' : 'en-GB', { day: '2-digit', month: 'long', year: 'numeric' }), W / 2, 980);
  x.font = '64px "Great Vibes", cursive';
  x.fillText(CONFIG.signature, W / 2, 1080);
  const url = c.toDataURL('image/png');
  const a = document.createElement('a'); a.href = url; a.download = 'cleopatre-carte-souvenir.png'; a.click();
}
$('#downloadCard').onclick = downloadCard;

/* ---- Elle répond : elle choisit comment te l'envoyer (aucune info à préconfigurer) ---- */
$('#replySend').onclick = async () => {
  const msg = $('#replyText').value.trim();
  const btn = $('#replySend');
  if (!msg) { btn.textContent = T('replyEmpty'); setTimeout(() => btn.textContent = T('replySend'), 1800); return; }
  const full = `💌 ${CONFIG.name} → ${CONFIG.myName[L]} :\n${msg}`;
  if (navigator.share) {
    try { await navigator.share({ text: full }); return; } catch (e) { /* elle a annulé, pas grave */ }
  }
  try {
    await navigator.clipboard.writeText(full);
    btn.textContent = T('replyCopied');
    setTimeout(() => btn.textContent = T('replySend'), 2600);
  } catch (e) {
    btn.textContent = T('replyCopied');
  }
};

/* ---- Démarrage ---- */
$$('[data-lang]').forEach(b => b.onclick = () => { L = b.dataset.lang; applyLang(); musicInit(); show('welcome'); });
$('#start').onclick = e => { heartsBurst(e.clientX, e.clientY, 24); setMusic(true); setTimeout(() => show('story'), 500); };
$('#music').onclick = () => setMusic(!mOn);

/* Échap ferme les fenêtres */
document.addEventListener('keydown', e => { if (e.key === 'Escape') $$('.card,.overlay').forEach(x => x.classList.remove('open')); });
