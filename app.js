// ============================================================
// MATBOT: AVENTURA MATEMÁTICA (5º ANO)
// Desenvolvedores: Giovana, Felipe e João Pedro
// ============================================================

const CHALLENGES = [
  {
    id: 1,
    topic: "Desafio 1 • Frações Equivalentes",
    type: "choice",
    question: "A pizzaria do MatBot dividiu uma pizza em 8 fatias iguais e vendeu 4 fatias. Qual fração representa exatamente a metade vendida?",
    visualSVG: `
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="60" fill="#FFE66D" stroke="#2D3436" stroke-width="4"/>
        <path d="M70,70 L70,10 A60,60 0 0,1 70,130 Z" fill="#FF6B6B" stroke="#2D3436" stroke-width="3"/>
        <line x1="70" y1="10" x2="70" y2="130" stroke="#2D3436" stroke-width="3"/>
        <line x1="10" y1="70" x2="130" y2="70" stroke="#2D3436" stroke-width="3"/>
        <line x1="27" y1="27" x2="113" y2="113" stroke="#2D3436" stroke-width="3"/>
        <line x1="113" y1="27" x2="27" y2="113" stroke="#2D3436" stroke-width="3"/>
      </svg>
    `,
    options: ["1/4 (um quarto)", "1/2 (um meio)", "3/8 (três oitavos)", "2/3 (dois terços)"],
    correctIndex: 1,
    hints: [
      "Dica 1: Observe o desenho da pizza! A parte vermelha ocupa exatamente metade do círculo inteiro.",
      "Dica 2: Se dividirmos o numerador e o denominador de 4/8 por 4, chegamos a 1/2!"
    ],
    explanation: "Isso mesmo! 4 fatias de 8 (4/8) é equivalente a 1/2, ou seja, metade da pizza!"
  },
  {
    id: 2,
    topic: "Desafio 2 • Geometria e Perímetro",
    type: "choice",
    question: "O jardim quadrado do laboratório do MatBot tem 6 metros de lado. Quantos metros de cerca são necessários para contornar TODO o jardim?",
    visualSVG: `
      <svg width="150" height="130" viewBox="0 0 150 130">
        <rect x="35" y="20" width="80" height="80" rx="8" fill="#55EFC4" stroke="#2D3436" stroke-width="4"/>
        <text x="75" y="14" text-anchor="middle" font-weight="bold" font-size="14" fill="#2D3436">6 m</text>
        <text x="128" y="65" text-anchor="middle" font-weight="bold" font-size="14" fill="#2D3436">6 m</text>
        <text x="75" y="66" text-anchor="middle" font-weight="bold" font-size="15" fill="#2D3436">Quadrado</text>
      </svg>
    `,
    options: ["12 metros", "18 metros", "24 metros", "36 metros"],
    correctIndex: 2,
    hints: [
      "Dica 1: O perímetro é a soma de todos os lados da figura. Um quadrado possui 4 lados iguais!",
      "Dica 2: Multiplique a medida de um lado (6 m) por 4 lados: 6 × 4."
    ],
    explanation: "Perfeito! Como um quadrado tem 4 lados de 6 metros, o perímetro é 6 + 6 + 6 + 6 = 24 metros."
  },
  {
    id: 3,
    topic: "Desafio 3 • Números Decimais",
    type: "choice",
    question: "Na cantina espacial, um suco custa R$ 4,50 e um sanduíche custa R$ 7,25. Quanto você vai gastar comprando os dois juntos?",
    visualSVG: `
      <div style="font-size: 2.4rem; background:#FFF3BF; padding:10px 22px; border-radius:18px; border:3px solid #2D3436;">
        🧃 R$ 4,50 + 🥪 R$ 7,25
      </div>
    `,
    options: ["R$ 11,25", "R$ 11,75", "R$ 12,00", "R$ 12,75"],
    correctIndex: 1,
    hints: [
      "Dica 1: Some primeiro os reais inteiros (4 + 7) e depois os centavos (0,50 + 0,25).",
      "Dica 2: 4 + 7 = 11 reais. E 50 centavos + 25 centavos = 75 centavos!"
    ],
    explanation: "Mandou muito bem! Alinhando vírgula embaixo de vírgula: 4,50 + 7,25 = R$ 11,75."
  },
  {
    id: 4,
    topic: "Desafio 4 • Expressões Numéricas",
    type: "numeric",
    question: "Resolva a expressão do painel do foguete: 20 + 5 × 4 = ?",
    visualSVG: `
      <div style="font-family:'Fredoka',sans-serif; font-size: 2rem; background:#E3FAFC; padding:12px 26px; border-radius:18px; border:3px solid #2D3436;">
        🚀 20 + (5 × 4)
      </div>
    `,
    correctAnswer: "40",
    hints: [
      "Dica 1: Atenção à regra de ouro das expressões! Sempre resolvemos a MULTIPLICAÇÃO antes da adição.",
      "Dica 2: Calcule primeiro 5 × 4 = 20. Depois, some esse resultado com o outro 20!"
    ],
    explanation: "Brilhante! Primeiro fazemos 5 × 4 = 20, e depois 20 + 20 = 40!"
  },
  {
    id: 5,
    topic: "Desafio 5 • Grandezas e Medidas",
    type: "choice",
    question: "Uma garrafa térmica do MatBot comporta 2 litros de água. Quantos copos de 250 ml conseguimos encher completamente com essa garrafa?",
    visualSVG: `
      <div style="font-size: 2.2rem; background:#E0AAFF; padding:10px 22px; border-radius:18px; border:3px solid #2D3436;">
        🧴 2 Litros ➔ 🥤 250 ml
      </div>
    `,
    options: ["4 copos", "6 copos", "8 copos", "10 copos"],
    correctIndex: 2,
    hints: [
      "Dica 1: Lembre-se que 1 litro equivale a 1.000 mililitros (ml). Então 2 litros são 2.000 ml!",
      "Dica 2: Se 4 copos de 250 ml formam 1.000 ml (1 litro), quantos copos formam 2.000 ml?"
    ],
    explanation: "Sensacional! 2 litros = 2.000 ml. Dividindo 2.000 ml por 250 ml, obtemos exatamente 8 copos!"
  }
];

// Estado do jogo
let state = {
  playerName: "Explorador(a)",
  currentIndex: 0,
  score: 0,
  stars: 0,
  hits: 0,
  hintsRemaining: 2,
  hintStep: 0,
  answered: false,
  soundOn: true
};

// Elementos DOM
const screens = {
  home: document.getElementById("screen-home"),
  game: document.getElementById("screen-game"),
  result: document.getElementById("screen-result")
};

const els = {
  playerNameInput: document.getElementById("player-name"),
  btnStart: document.getElementById("btn-start"),
  soundToggle: document.getElementById("sound-toggle"),
  starsCount: document.getElementById("stars-count"),
  scoreCount: document.getElementById("score-count"),
  challengeBadge: document.getElementById("challenge-badge"),
  challengeTopic: document.getElementById("challenge-topic"),
  progressFill: document.getElementById("progress-fill"),
  aiSpeech: document.getElementById("ai-speech"),
  visualAid: document.getElementById("visual-aid"),
  questionTitle: document.getElementById("question-title"),
  optionsGrid: document.getElementById("options-grid"),
  numericBox: document.getElementById("numeric-box"),
  numericAnswer: document.getElementById("numeric-answer"),
  btnSubmitNumeric: document.getElementById("btn-submit-numeric"),
  btnHint: document.getElementById("btn-hint"),
  hintsLeft: document.getElementById("hints-left"),
  btnNext: document.getElementById("btn-next"),
  resultTitle: document.getElementById("result-title"),
  resultMessage: document.getElementById("result-message"),
  finalScore: document.getElementById("final-score"),
  finalHits: document.getElementById("final-hits"),
  finalStars: document.getElementById("final-stars"),
  btnRestart: document.getElementById("btn-restart")
};

// Sintetizador de som leve (Web Audio API - sem arquivos externos)
function playTone(type) {
  if (!state.soundOn) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "success") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } else if (type === "error") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.setValueAtTime(175, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    }
  } catch (e) {
    // Ignora caso o navegador bloqueie áudio automático
  }
}

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

function updateHUD() {
  els.starsCount.textContent = state.stars;
  els.scoreCount.textContent = state.score;
}

function startGame() {
  const typed = els.playerNameInput.value.trim();
  state.playerName = typed || "Explorador(a)";
  state.currentIndex = 0;
  state.score = 0;
  state.stars = 0;
  state.hits = 0;
  updateHUD();
  playTone("click");
  showScreen("game");
  loadChallenge();
}

function loadChallenge() {
  const ch = CHALLENGES[state.currentIndex];
  state.answered = false;
  state.hintsRemaining = 2;
  state.hintStep = 0;

  els.challengeBadge.textContent = `Desafio ${state.currentIndex + 1} de ${CHALLENGES.length}`;
  els.challengeTopic.textContent = ch.topic;
  els.progressFill.style.width = `${((state.currentIndex + 1) / CHALLENGES.length) * 100}%`;
  els.hintsLeft.textContent = state.hintsRemaining;
  els.btnHint.disabled = false;
  els.btnNext.classList.add("hidden");

  els.aiSpeech.innerHTML = `Vamos lá, <strong>${state.playerName}</strong>! Analise o problema com calma. Se travar, peça uma dica!`;
  els.visualAid.innerHTML = ch.visualSVG;
  els.questionTitle.textContent = ch.question;

  els.optionsGrid.innerHTML = "";
  els.numericBox.classList.add("hidden");
  els.numericAnswer.value = "";
  els.numericAnswer.disabled = false;
  els.btnSubmitNumeric.disabled = false;

  if (ch.type === "choice") {
    const letters = ["A", "B", "C", "D"];
    ch.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="option-letter">${letters[idx]}</span><span>${opt}</span>`;
      btn.addEventListener("click", () => handleChoiceAnswer(idx, btn));
      els.optionsGrid.appendChild(btn);
    });
  } else if (ch.type === "numeric") {
    els.numericBox.classList.remove("hidden");
  }
}

function handleChoiceAnswer(selectedIdx, btnElement) {
  if (state.answered) return;
  state.answered = true;

  const ch = CHALLENGES[state.currentIndex];
  const allButtons = els.optionsGrid.querySelectorAll(".option-btn");
  allButtons.forEach((b) => (b.disabled = true));

  if (selectedIdx === ch.correctIndex) {
    btnElement.classList.add("correct");
    registerSuccess(ch.explanation);
  } else {
    btnElement.classList.add("wrong");
    allButtons[ch.correctIndex].classList.add("correct");
    registerError(ch.explanation);
  }
}

function handleNumericAnswer() {
  if (state.answered) return;
  const ch = CHALLENGES[state.currentIndex];
  const userVal = els.numericAnswer.value.trim().replace(",", ".");
  if (!userVal) {
    els.aiSpeech.innerHTML = "Digite um número antes de clicar em <strong>Responder</strong>!";
    return;
  }

  state.answered = true;
  els.numericAnswer.disabled = true;
  els.btnSubmitNumeric.disabled = true;

  if (userVal === ch.correctAnswer) {
    registerSuccess(ch.explanation);
  } else {
    registerError(`A resposta correta era <strong>${ch.correctAnswer}</strong>. ${ch.explanation}`);
  }
}

function registerSuccess(explanation) {
  playTone("success");
  const bonus = state.hintsRemaining * 50;
  const earned = 100 + bonus;
  state.score += earned;
  state.stars += 1;
  state.hits += 1;
  updateHUD();

  els.aiSpeech.innerHTML = `🎉 <strong>Excelente, ${state.playerName}!</strong> (+${earned} pts) ${explanation}`;
  els.btnNext.classList.remove("hidden");
  launchConfetti();
}

function registerError(explanation) {
  playTone("error");
  els.aiSpeech.innerHTML = `💡 <strong>Quase lá!</strong> Não desanime, errar faz parte de aprender: ${explanation}`;
  els.btnNext.classList.remove("hidden");
}

function showHint() {
  if (state.answered || state.hintsRemaining <= 0) return;
  const ch = CHALLENGES[state.currentIndex];
  const hintText = ch.hints[state.hintStep];

  state.hintStep += 1;
  state.hintsRemaining -= 1;
  els.hintsLeft.textContent = state.hintsRemaining;
  playTone("click");

  els.aiSpeech.innerHTML = `🤖 <strong>Tutor MatBot:</strong> ${hintText}`;
  if (state.hintsRemaining === 0) {
    els.btnHint.disabled = true;
  }
}

function nextChallenge() {
  playTone("click");
  state.currentIndex += 1;
  if (state.currentIndex < CHALLENGES.length) {
    loadChallenge();
  } else {
    finishGame();
  }
}

function finishGame() {
  showScreen("result");
  els.resultTitle.textContent = `Parabéns, ${state.playerName}!`;
  els.finalScore.textContent = `${state.score} pts`;
  els.finalHits.textContent = `${state.hits} / ${CHALLENGES.length}`;
  els.finalStars.textContent = `${state.stars} ⭐`;

  if (state.hits === 5) {
    els.resultMessage.textContent = "Pontuação perfeita! Você dominou todos os desafios do 5º ano!";
    launchConfetti();
  } else if (state.hits >= 3) {
    els.resultMessage.textContent = "Ótimo trabalho! Você mostrou muita habilidade matemática com o MatBot!";
    launchConfetti();
  } else {
    els.resultMessage.textContent = "Boa tentativa! Que tal jogar novamente usando as dicas do MatBot para conquistar todas as estrelas?";
  }
}

// Animação simples de confetes
function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A29BFE", "#2ECC71"];
  const pieces = Array.from({ length: 65 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 7 + 4,
    c: colors[Math.floor(Math.random() * colors.length)],
    v: Math.random() * 4 + 2
  }));

  let frames = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      ctx.fillStyle = p.c;
      ctx.fillRect(p.x, p.y, p.r, p.r * 1.4);
      p.y += p.v;
    });
    frames++;
    if (frames < 95) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  draw();
}

// Eventos
els.btnStart.addEventListener("click", startGame);
els.playerNameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") startGame();
});
els.btnHint.addEventListener("click", showHint);
els.btnNext.addEventListener("click", nextChallenge);
els.btnSubmitNumeric.addEventListener("click", handleNumericAnswer);
els.numericAnswer.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleNumericAnswer();
});
els.btnRestart.addEventListener("click", () => {
  showScreen("home");
});
els.soundToggle.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  els.soundToggle.textContent = state.soundOn ? "🔊" : "🔇";
});