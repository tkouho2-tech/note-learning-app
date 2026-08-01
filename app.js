// ==========================================================================
// 1. Data Definitions & State Management
// ==========================================================================

const NOTES = {
    treble: [
        // Easy (Within staff lines: E4 to F5)
        { id: "E4", freq: 329.63, step: 0, syllable: "ミ", letter: "E", japanese: "ホ", hint: "第1線（一番下の線）の音です。" },
        { id: "F4", freq: 349.23, step: 1, syllable: "ファ", letter: "F", japanese: "ヘ", hint: "第1間（一番下の隙間）の音です。" },
        { id: "G4", freq: 392.00, step: 2, syllable: "ソ", letter: "G", japanese: "ト", hint: "第2線の音です。ト音記号の基準音です。" },
        { id: "A4", freq: 440.00, step: 3, syllable: "ラ", letter: "A", japanese: "イ", hint: "第2間の音です。チューニングの基準音(440Hz)です。" },
        { id: "B4", freq: 493.88, step: 4, syllable: "シ", letter: "B", japanese: "ロ", hint: "第3線（真ん中の線）の音です。" },
        { id: "C5", freq: 523.25, step: 5, syllable: "ド", letter: "C", japanese: "ハ", hint: "第3間の音です。" },
        { id: "D5", freq: 587.33, step: 6, syllable: "レ", letter: "D", japanese: "ニ", hint: "第4線の音です。" },
        { id: "E5", freq: 659.25, step: 7, syllable: "ミ", letter: "E", japanese: "ホ", hint: "第4間の音です。" },
        { id: "F5", freq: 698.46, step: 8, syllable: "ファ", letter: "F", japanese: "ヘ", hint: "第5線（一番上の線）の音です。" },
        
        // Medium (Ledger lines 1-2: C4 to A5)
        { id: "C4", freq: 261.63, step: -2, syllable: "ド", letter: "C", japanese: "ハ", hint: "下第1線（五線譜の下に引く1本目の線）の上の音、「真ん中のド」です。" },
        { id: "D4", freq: 293.66, step: -1, syllable: "レ", letter: "D", japanese: "ニ", hint: "下第1間（五線のすぐ下）の音です。" },
        { id: "G5", freq: 783.99, step: 9, syllable: "ソ", letter: "G", japanese: "ト", hint: "上第1間（五線のすぐ上）の音です。" },
        { id: "A5", freq: 880.00, step: 10, syllable: "ラ", letter: "A", japanese: "イ", hint: "上第1線（五線の上部に引く1本目の線）の上の音です。" },
        
        // Hard (Ledger lines 3+: A3 to C6)
        { id: "A3", freq: 220.00, step: -4, syllable: "ラ", letter: "A", japanese: "イ", hint: "下第3線上（五線の下に引く3本目の線）の上の音です。" },
        { id: "B3", freq: 246.94, step: -3, syllable: "シ", letter: "B", japanese: "ロ", hint: "下第2間（五線の下、下第2線と第3線の間）の音です。" },
        { id: "B5", freq: 987.77, step: 11, syllable: "シ", letter: "B", japanese: "ロ", hint: "上第2間（上第1線と上第2線の間）の音です。" },
        { id: "C6", freq: 1046.50, step: 12, syllable: "ド", letter: "C", japanese: "ハ", hint: "上第2線上（五線の上に引く2本目の線）の音です。" }
    ],
    bass: [
        // Easy (Within staff lines: G2 to A3)
        { id: "G2", freq: 97.99, step: 0, syllable: "ソ", letter: "G", japanese: "ト", hint: "ヘ音記号の第1線（一番下の線）の音です。" },
        { id: "A2", freq: 110.00, step: 1, syllable: "ラ", letter: "A", japanese: "イ", hint: "第1間（一番下の隙間）の音です。" },
        { id: "B2", freq: 123.47, step: 2, syllable: "シ", letter: "B", japanese: "ロ", hint: "第2線の音です。" },
        { id: "C3", freq: 130.81, step: 3, syllable: "ド", letter: "C", japanese: "ハ", hint: "第2間の音です。" },
        { id: "D3", freq: 146.83, step: 4, syllable: "レ", letter: "D", japanese: "ニ", hint: "第3線（真ん中の線）の音です。" },
        { id: "E3", freq: 164.81, step: 5, syllable: "ミ", letter: "E", japanese: "ホ", hint: "第3間の音です。" },
        { id: "F3", freq: 174.61, step: 6, syllable: "ファ", letter: "F", japanese: "ヘ", hint: "第4線の音です。ヘ音記号の基準点（2つの点の間）の音です。" },
        { id: "G3", freq: 196.00, step: 7, syllable: "ソ", letter: "G", japanese: "ト", hint: "第4間の音です。" },
        { id: "A3", freq: 220.00, step: 8, syllable: "ラ", letter: "A", japanese: "イ", hint: "第5線（一番上の線）の音です。" },
        
        // Medium (Ledger lines 1-2: E2 to C4)
        { id: "E2", freq: 82.41, step: -2, syllable: "ミ", letter: "E", japanese: "ホ", hint: "下第1線の音です。" },
        { id: "F2", freq: 87.31, step: -1, syllable: "ファ", letter: "F", japanese: "ヘ", hint: "下第1間（五線のすぐ下）の音です。" },
        { id: "B3", freq: 246.94, step: 9, syllable: "シ", letter: "B", japanese: "ロ", hint: "上第1間（五線のすぐ上）の音です。" },
        { id: "C4", freq: 261.63, step: 10, syllable: "ド", letter: "C", japanese: "ハ", hint: "上第1線（ヘ音記号の上部に引く1本目の線）の上の音。「中央のド」です。" },
        
        // Hard (Ledger lines 3+: C2 to E4)
        { id: "C2", freq: 65.41, step: -4, syllable: "ド", letter: "C", japanese: "ハ", hint: "下第3線（五線の下に引く3本目の線）の音です。" },
        { id: "D2", freq: 73.42, step: -3, syllable: "レ", letter: "D", japanese: "ニ", hint: "下第2間の音です。" },
        { id: "D4", freq: 293.66, step: 11, syllable: "レ", letter: "D", japanese: "ニ", hint: "上第1間と上第2線の間の音です。" },
        { id: "E4", freq: 329.63, step: 12, syllable: "ミ", letter: "E", japanese: "ホ", hint: "上第2線（ヘ音記号の上に引く2本目の線）の上の音です。" }
    ]
};

const state = {
    settings: {
        clef: 'treble',        // 'treble', 'bass', 'both'
        difficulty: 'easy',    // 'easy', 'medium', 'hard'
        notation: 'syllable'   // 'syllable', 'letter', 'japanese'
    },
    game: {
        mode: 'practice',      // 'practice', 'challenge'
        score: 0,
        combo: 0,
        maxCombo: 0,
        correctCount: 0,
        incorrectCount: 0,
        questionCount: 0,
        currentNote: null,
        currentClef: 'treble',
        timeLeft: 60,
        timerInterval: null,
        isAnswered: false
    },
    stats: {
        totalAnswers: 0,
        correctAnswers: 0,
        noteStats: {}          // Format: { "treble_C4": { correct: 2, total: 3 } }
    }
};

// ==========================================================================
// 2. Synthesizer Engine (Web Audio API)
// ==========================================================================

class AudioSynth {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Play synthesized piano-like sound
    playNote(frequency, duration = 1.0) {
        this.init();
        const now = this.ctx.currentTime;

        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const osc3 = this.ctx.createOscillator();
        
        const gainNode = this.ctx.createGain();

        // Fundamental wave (warm triangle)
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(frequency, now);

        // 2nd Harmonic (subtle brightness)
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(frequency * 2, now);

        // 3rd Harmonic (adds key strike feel)
        osc3.type = 'sine';
        osc3.frequency.setValueAtTime(frequency * 3, now);

        // Amplitude Envelope (Piano Decay)
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.4, now + 0.015); // Fast Attack
        gainNode.gain.exponentialRampToValueAtTime(0.1, now + 0.2); // Mid decay
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration); // Long release

        // Harmonious mixing
        const osc2Gain = this.ctx.createGain();
        osc2Gain.gain.setValueAtTime(0.15, now);
        
        const osc3Gain = this.ctx.createGain();
        osc3Gain.gain.setValueAtTime(0.08, now);

        osc1.connect(gainNode);
        
        osc2.connect(osc2Gain);
        osc2Gain.connect(gainNode);
        
        osc3.connect(osc3Gain);
        osc3Gain.connect(gainNode);

        gainNode.connect(this.ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc3.start(now);

        osc1.stop(now + duration);
        osc2.stop(now + duration);
        osc3.stop(now + duration);
    }

    playCorrect() {
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now); // B5
        osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.35);
    }

    playIncorrect() {
        this.init();
        const now = this.ctx.currentTime;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'triangle';
        osc2.type = 'triangle';
        
        osc1.frequency.setValueAtTime(140, now);
        osc2.frequency.setValueAtTime(145, now); // Dischord

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.25, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start(now);
        osc2.start(now);
        
        osc1.stop(now + 0.45);
        osc2.stop(now + 0.45);
    }
}

const synth = new AudioSynth();

// ==========================================================================
// 3. SVG Rendering Engine (Draw clefs, notes, staff lines)
// ==========================================================================

function renderMusicNote(clef, note, containerId = 'canvas-wrapper') {
    const wrapper = document.getElementById(containerId);
    if (!wrapper) return;

    // Viewbox layout: 320x180
    // Staff lines are drawn at Y = 50, 70, 90, 110, 130
    const staffLinesY = [50, 70, 90, 110, 130];
    const noteY = 130 - (note.step * 10);
    const noteX = 180; // center horizontal

    let svgHtml = `
        <svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- 五線譜 (5 staff lines) -->
    `;

    staffLinesY.forEach(y => {
        svgHtml += `<line class="staff-line" x1="20" y1="${y}" x2="300" y2="${y}" />`;
    });

    // 音部記号の描画 (Noto Music フォントを使用)
    if (clef === 'treble') {
        // ト音記号 G4 (第2線 Y=110) の位置を基準に調整
        svgHtml += `
            <text x="30" y="130" font-family="'Noto Music', 'Segoe UI Symbol', sans-serif" font-size="95" class="clef-icon-svg">𝄞</text>
        `;
    } else {
        // ヘ音記号 F3 (第4線 Y=70) の位置を基準に調整
        svgHtml += `
            <text x="30" y="96" font-family="'Noto Music', 'Segoe UI Symbol', sans-serif" font-size="75" class="clef-icon-svg">𝄢</text>
        `;
    }

    // 加線 (Ledger Lines) の計算と描画
    if (noteY <= 30) {
        // 上加線 (Y=30, 10, ...)
        for (let y = 30; y >= noteY; y -= 20) {
            svgHtml += `<line class="ledger-line" x1="${noteX - 25}" y1="${y}" x2="${noteX + 25}" y2="${y}" />`;
        }
    } else if (noteY >= 150) {
        // 下加線 (Y=150, 170, ...)
        for (let y = 150; y <= noteY; y += 20) {
            svgHtml += `<line class="ledger-line" x1="${noteX - 25}" y1="${y}" x2="${noteX + 25}" y2="${y}" />`;
        }
    }

    // 音符ヘッドの描画 (斜め楕円)
    // rx=14, ry=9.5. 回転させると本物の全音符に近くなる
    svgHtml += `
        <g id="${containerId}-group">
            <ellipse cx="${noteX}" cy="${noteY}" rx="14" ry="9.5" transform="rotate(-20, ${noteX}, ${noteY})" class="note-head" id="${containerId}-head" />
            <!-- 内側の白い穴を再現して全音符らしく見せる -->
            <ellipse cx="${noteX}" cy="${noteY}" rx="6" ry="3" transform="rotate(-20, ${noteX}, ${noteY})" fill="#0f172a" id="${containerId}-inner" style="transition: fill var(--transition-fast);" />
        </g>
    `;

    svgHtml += `</svg>`;
    wrapper.innerHTML = svgHtml;
}

// ==========================================================================
// 4. Game Logic & Flow Control
// ==========================================================================

// LocalStorage persistence
function saveStats() {
    localStorage.setItem('notemaster_stats_v1', JSON.stringify(state.stats));
}

function loadStats() {
    const saved = localStorage.getItem('notemaster_stats_v1');
    if (saved) {
        try {
            state.stats = JSON.parse(saved);
        } catch (e) {
            console.error("Could not parse saved stats", e);
        }
    }
    
    // High Score Display initialization
    const scoreVal = localStorage.getItem('notemaster_best_score_v1') || '0';
    document.getElementById('best-score-val').innerText = scoreVal;
}

// Switch between screens
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    
    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
        target.classList.add('active');
        state.currentScreen = screenId;
    }
}

// Answer Options Buttons Generator
function generateAnswerButtons() {
    const container = document.getElementById('answer-buttons');
    container.innerHTML = '';

    const sylls = ["ド", "レ", "ミ", "ファ", "ソ", "ラ", "シ"];
    const letts = ["C", "D", "E", "F", "G", "A", "B"];
    const japs = ["ハ", "ニ", "ホ", "ヘ", "ト", "イ", "ロ"];

    let displayNames = [];
    if (state.settings.notation === 'syllable') displayNames = sylls;
    else if (state.settings.notation === 'letter') displayNames = letts;
    else displayNames = japs;

    displayNames.forEach((name, idx) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerText = name;
        btn.dataset.noteIndex = idx;
        btn.dataset.name = name;
        
        btn.addEventListener('click', () => handleAnswer(name, btn));
        container.appendChild(btn);
    });
}

// Get standard note array filtered by difficulty
function getFilteredNotes(clef, diff) {
    const all = NOTES[clef];
    if (diff === 'easy') {
        // easy: index 0 to 8
        return all.slice(0, 9);
    } else if (diff === 'medium') {
        // medium: index 0 to 12
        return all.slice(0, 13);
    } else {
        // hard: all notes (0 to 16)
        return all;
    }
}

// Set up a new question
function nextQuestion() {
    state.game.isAnswered = false;
    document.getElementById('btn-next-question').classList.add('hidden');
    document.getElementById('practice-hint').classList.remove('hidden');
    
    // Show answer buttons again
    const answerSection = document.querySelector('.answer-section');
    if (answerSection) answerSection.classList.remove('hidden');
    
    // Reset buttons
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
    });

    // Reset SVG colors
    const innerEl = document.getElementById('canvas-wrapper-inner');
    if (innerEl) innerEl.setAttribute('fill', '#0f172a');

    // Pick clef
    let currentClef = state.settings.clef;
    if (currentClef === 'both') {
        currentClef = Math.random() < 0.5 ? 'treble' : 'bass';
    }
    state.game.currentClef = currentClef;

    // Display clef badge
    const badge = document.getElementById('clef-indicator-badge');
    badge.innerText = currentClef === 'treble' ? 'ト音記号 (𝄞)' : 'ヘ音記号 (𝄢)';

    // Get note candidates based on difficulty
    const candidates = getFilteredNotes(currentClef, state.settings.difficulty);
    
    // Pick note avoiding immediate duplicates if possible
    let chosenNote;
    let attempts = 0;
    do {
        chosenNote = candidates[Math.floor(Math.random() * candidates.length)];
        attempts++;
    } while (state.game.currentNote && chosenNote.id === state.game.currentNote.id && candidates.length > 1 && attempts < 10);

    state.game.currentNote = chosenNote;

    // Render Note
    renderMusicNote(currentClef, chosenNote);

    // Render hint (Practice mode only)
    if (state.game.mode === 'practice') {
        document.getElementById('practice-hint').style.display = 'flex';
        document.getElementById('hint-text').innerText = "ヒント: この音符をよく見て、下の音名を選んでください。";
    } else {
        document.getElementById('practice-hint').style.display = 'none';
    }
}

// Handle Answer Selection
function handleAnswer(selectedName, clickedBtn) {
    if (state.game.isAnswered) return;
    state.game.isAnswered = true;

    const note = state.game.currentNote;
    const notation = state.settings.notation;
    let correctAnswer = "";

    if (notation === 'syllable') correctAnswer = note.syllable;
    else if (notation === 'letter') correctAnswer = note.letter;
    else correctAnswer = note.japanese;

    const isCorrect = (selectedName === correctAnswer);

    // Disable all options
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });

    // Update stats dictionary
    const statKey = `${state.game.currentClef}_${note.id}`;
    if (!state.stats.noteStats[statKey]) {
        state.stats.noteStats[statKey] = { correct: 0, total: 0 };
    }
    state.stats.noteStats[statKey].total++;
    state.stats.totalAnswers++;

    const noteHead = document.getElementById('canvas-wrapper-head');
    const noteInner = document.getElementById('canvas-wrapper-inner');
    const feedbackOverlay = document.getElementById('feedback-overlay');
    const feedbackIcon = document.getElementById('feedback-icon');

    if (isCorrect) {
        clickedBtn.classList.add('correct');
        synth.playCorrect();
        
        // Success Animations
        if (noteHead) noteHead.classList.add('correct');
        if (noteInner) noteInner.setAttribute('fill', 'var(--color-success)');

        feedbackIcon.innerText = "✓";
        feedbackIcon.className = "feedback-icon correct show";

        state.game.correctCount++;
        state.stats.noteStats[statKey].correct++;
        state.stats.correctAnswers++;
        state.game.combo++;
        
        if (state.game.combo > state.game.maxCombo) {
            state.game.maxCombo = state.game.combo;
        }

        if (state.game.mode === 'challenge') {
            // Formula: base 10 points * combo multiplier
            const pointsGained = 10 * Math.min(10, state.game.combo);
            state.game.score += pointsGained;
            document.getElementById('game-score').innerText = state.game.score;
            document.getElementById('game-combo').innerText = state.game.combo;
            
            // Auto transition to next question in Challenge Mode after brief delay
            setTimeout(() => {
                feedbackIcon.classList.remove('show');
                nextQuestion();
            }, 600);
        } else {
            // Practice Mode: show "Next" button
            const answerSection = document.querySelector('.answer-section');
            if (answerSection) answerSection.classList.add('hidden');
            document.getElementById('btn-next-question').classList.remove('hidden');
            document.getElementById('hint-text').innerText = "正解です！ 🎹音が鳴りました。";
        }
    } else {
        clickedBtn.classList.add('incorrect');
        synth.playIncorrect();

        // Highlight correct button
        document.querySelectorAll('.answer-btn').forEach(btn => {
            if (btn.dataset.name === correctAnswer) {
                btn.classList.add('correct');
            }
        });

        // Error Animations
        if (noteHead) noteHead.classList.add('incorrect');
        if (noteInner) noteInner.setAttribute('fill', 'var(--color-error)');

        feedbackIcon.innerText = "✗";
        feedbackIcon.className = "feedback-icon incorrect show";

        state.game.incorrectCount++;
        state.game.combo = 0;

        if (state.game.mode === 'challenge') {
            document.getElementById('game-combo').innerText = '0';
            setTimeout(() => {
                feedbackIcon.classList.remove('show');
                nextQuestion();
            }, 800);
        } else {
            // Practice mode: Show detailed hint
            const answerSection = document.querySelector('.answer-section');
            if (answerSection) answerSection.classList.add('hidden');
            document.getElementById('btn-next-question').classList.remove('hidden');
            document.getElementById('hint-text').innerText = `正解は「${correctAnswer}」でした。 ${note.hint}`;
        }
    }

    // Play note pitch on click (always play actual piano note so they learn sound)
    setTimeout(() => {
        synth.playNote(note.freq);
    }, 150);

    saveStats();
}

// ==========================================================================
// 5. Game Modes Management (Practice vs. Challenge)
// ==========================================================================

function startPracticeMode() {
    state.game.mode = 'practice';
    state.game.correctCount = 0;
    state.game.incorrectCount = 0;
    state.game.questionCount = 1;
    
    // Adjust Layouts
    document.getElementById('practice-status').classList.remove('hidden');
    document.getElementById('challenge-status').classList.add('hidden');
    document.getElementById('timer-bar-container').classList.add('hidden');
    document.getElementById('practice-count').innerText = state.game.questionCount;

    generateAnswerButtons();
    showScreen('game');
    nextQuestion();
}

function startChallengeMode() {
    state.game.mode = 'challenge';
    state.game.score = 0;
    state.game.combo = 0;
    state.game.maxCombo = 0;
    state.game.correctCount = 0;
    state.game.incorrectCount = 0;
    state.game.timeLeft = 60;

    // Adjust Layouts
    document.getElementById('practice-status').classList.add('hidden');
    document.getElementById('challenge-status').classList.remove('hidden');
    document.getElementById('timer-bar-container').classList.remove('hidden');
    
    document.getElementById('game-score').innerText = '0';
    document.getElementById('game-combo').innerText = '0';
    document.getElementById('game-timer').innerText = '60';
    document.getElementById('timer-bar').style.width = '100%';

    generateAnswerButtons();
    showScreen('game');
    nextQuestion();

    // Timer Loop
    if (state.game.timerInterval) clearInterval(state.game.timerInterval);
    state.game.timerInterval = setInterval(() => {
        state.game.timeLeft--;
        document.getElementById('game-timer').innerText = state.game.timeLeft;
        
        // Progress bar percentage
        const pct = (state.game.timeLeft / 60) * 100;
        document.getElementById('timer-bar').style.width = `${pct}%`;

        if (state.game.timeLeft <= 0) {
            endChallenge();
        }
    }, 1000);
}

function endChallenge() {
    clearInterval(state.game.timerInterval);
    state.game.timerInterval = null;

    // Play final success beep
    synth.playCorrect();

    // Stats calculations
    const total = state.game.correctCount + state.game.incorrectCount;
    const accuracy = total > 0 ? Math.round((state.game.correctCount / total) * 100) : 0;

    document.getElementById('result-score').innerText = state.game.score;
    document.getElementById('result-correct').innerText = state.game.correctCount;
    document.getElementById('result-incorrect').innerText = state.game.incorrectCount;
    document.getElementById('result-accuracy').innerText = `${accuracy}%`;
    document.getElementById('result-max-combo').innerText = state.game.maxCombo;

    // Custom Emojis based on score
    const emojiEl = document.getElementById('result-emoji');
    const titleEl = document.getElementById('result-title');
    if (state.game.score > 500) {
        emojiEl.innerText = "👑";
        titleEl.innerText = "素晴らしい演奏！神スコアです！";
    } else if (state.game.score > 250) {
        emojiEl.innerText = "🎉";
        titleEl.innerText = "グレート！なかなかの腕前ですね！";
    } else {
        emojiEl.innerText = "✨";
        titleEl.innerText = "チャレンジ終了！";
    }

    // High Score Check
    const currentBest = parseInt(localStorage.getItem('notemaster_best_score_v1') || '0');
    const isNewRecord = (state.game.score > currentBest);
    
    if (isNewRecord) {
        localStorage.setItem('notemaster_best_score_v1', state.game.score.toString());
        document.getElementById('new-record-badge').classList.remove('hidden');
    } else {
        document.getElementById('new-record-badge').classList.add('hidden');
    }

    showScreen('result');
}

// ==========================================================================
// 6. Statistics View Generator
// ==========================================================================

function buildStatsScreen() {
    document.getElementById('total-answers').innerText = state.stats.totalAnswers;
    
    const accuracy = state.stats.totalAnswers > 0 
        ? Math.round((state.stats.correctAnswers / state.stats.totalAnswers) * 100) 
        : 0;
    
    document.getElementById('total-accuracy').innerText = `${accuracy}%`;

    // Process notes list to find weakest ones
    const listContainer = document.getElementById('note-progress-list');
    const weakNotesContainer = document.getElementById('weak-notes-list');
    listContainer.innerHTML = '';
    weakNotesContainer.innerHTML = '';

    const weakNotes = [];
    const allStats = [];

    // Form list of all note stats
    for (const clef of ['treble', 'bass']) {
        NOTES[clef].forEach(note => {
            const key = `${clef}_${note.id}`;
            const noteData = state.stats.noteStats[key];
            const clefName = clef === 'treble' ? 'ト音' : 'ヘ音';
            
            if (noteData && noteData.total > 0) {
                const pct = Math.round((noteData.correct / noteData.total) * 100);
                allStats.push({
                    key,
                    label: `${clefName} ${note.id}`,
                    correct: noteData.correct,
                    total: noteData.total,
                    pct: pct
                });

                if (pct < 70 && noteData.total >= 2) {
                    weakNotes.push({
                        label: `${clefName} ${note.id}`,
                        pct: pct
                    });
                }
            }
        });
    }

    // Populate Weak Notes Badge
    if (weakNotes.length > 0) {
        // Sort lowest accuracy first
        weakNotes.sort((a,b) => a.pct - b.pct);
        weakNotes.slice(0, 5).forEach(note => {
            const badge = document.createElement('div');
            badge.className = 'weak-note-badge';
            badge.innerHTML = `${note.label} <span class="pct">${note.pct}%</span>`;
            weakNotesContainer.appendChild(badge);
        });
    } else {
        const p = document.createElement('p');
        p.className = 'empty-msg';
        p.innerText = state.stats.totalAnswers < 5 
            ? 'もっとプレイすると苦手な音を分析できます。' 
            : '素晴らしい！現在の正解率は優秀です。';
        weakNotesContainer.appendChild(p);
    }

    // Populate Full Progress List
    if (allStats.length > 0) {
        // Sort by key index or label alphabetically
        allStats.sort((a,b) => a.label.localeCompare(b.label));
        
        allStats.forEach(item => {
            const row = document.createElement('div');
            row.className = 'note-progress-row';
            row.innerHTML = `
                <span class="note-label">${item.label}</span>
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${item.pct}%"></div>
                </div>
                <span class="progress-val">${item.pct}% (${item.correct}/${item.total})</span>
            `;
            listContainer.appendChild(row);
        });
    } else {
        const p = document.createElement('p');
        p.className = 'empty-msg';
        p.innerText = 'クイズデータがまだありません。';
        listContainer.appendChild(p);
    }
}

// Reset stats
function resetStats() {
    if (confirm("すべての学習統計データをリセットしますか？この操作は取り消せません。")) {
        state.stats.totalAnswers = 0;
        state.stats.correctAnswers = 0;
        state.stats.noteStats = {};
        localStorage.removeItem('notemaster_best_score_v1');
        saveStats();
        loadStats();
        buildStatsScreen();
        updateExplorer();
    }
}

// ==========================================================================
// 6.5. Explorer (Note Reference) Logic
// ==========================================================================

function updateExplorer() {
    if (!state.explorerClef) {
        state.explorerClef = 'treble';
    }
    const clef = state.explorerClef;

    const notes = clef === 'treble' ? NOTES.treble : NOTES.bass;
    const sortedNotes = [...notes].sort((a, b) => a.step - b.step);

    const wrapper = document.getElementById('explorer-canvas-wrapper');
    if (!wrapper) return;

    const staffLinesY = [50, 70, 90, 110, 130];
    
    let svgHtml = `
        <svg viewBox="0 0 860 190" xmlns="http://www.w3.org/2000/svg">
            <!-- 五線譜 (5 staff lines) -->
    `;

    staffLinesY.forEach(y => {
        svgHtml += `<line class="staff-line" x1="20" y1="${y}" x2="840" y2="${y}" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />`;
    });

    // 音部記号 (Noto Music フォントを使用)
    if (clef === 'treble') {
        svgHtml += `<text x="25" y="130" font-family="'Noto Music', 'Segoe UI Symbol', sans-serif" font-size="95" fill="var(--text-primary)" style="opacity: 0.8; user-select: none;">𝄞</text>`;
    } else {
        svgHtml += `<text x="25" y="96" font-family="'Noto Music', 'Segoe UI Symbol', sans-serif" font-size="75" fill="var(--text-primary)" style="opacity: 0.8; user-select: none;">𝄢</text>`;
    }

    // 各音符の描画
    sortedNotes.forEach((note, idx) => {
        const x = 85 + idx * 44;
        const y = 130 - (note.step * 10);
        const isC = note.syllable === "ド";

        // 加線 (Ledger lines)
        if (y <= 30) {
            for (let ly = 30; ly >= y; ly -= 20) {
                svgHtml += `<line class="ledger-line" x1="${x - 18}" y1="${ly}" x2="${x + 18}" y2="${ly}" stroke="rgba(255,255,255,0.4)" stroke-width="2" />`;
            }
        } else if (y >= 150) {
            for (let ly = 150; ly <= y; ly += 20) {
                svgHtml += `<line class="ledger-line" x1="${x - 18}" y1="${ly}" x2="${x + 18}" y2="${ly}" stroke="rgba(255,255,255,0.4)" stroke-width="2" />`;
            }
        }

        // 音名表記の選択
        let label = "";
        if (state.settings.notation === 'syllable') label = note.syllable;
        else if (state.settings.notation === 'letter') label = note.letter;
        else label = note.japanese;

        const noteClass = isC ? "explorer-notehead is-c" : "explorer-notehead";
        const textClass = isC ? "explorer-notename is-c" : "explorer-notename";

        svgHtml += `
            <g class="explorer-note-group">
                <!-- 音符ヘッド -->
                <ellipse cx="${x}" cy="${y}" rx="13" ry="9" transform="rotate(-20, ${x}, ${y})" class="${noteClass}" />
                <!-- 中空部分 -->
                <ellipse cx="${x}" cy="${y}" rx="5.5" ry="3" transform="rotate(-20, ${x}, ${y})" fill="#0f172a" />
                <!-- 音名ラベル -->
                <text x="${x}" y="168" text-anchor="middle" class="${textClass}">${label}</text>
            </g>
        `;
    });

    svgHtml += `</svg>`;
    wrapper.innerHTML = svgHtml;
}

// ==========================================================================
// 7. Event Listeners & Bootstrapping
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load data
    loadStats();
    
    // 2. Setup screen transitions
    const btnShowStats = document.getElementById('btn-show-stats');
    if (btnShowStats) {
        btnShowStats.addEventListener('click', () => {
            buildStatsScreen();
            showScreen('stats');
        });
    }
    const btnCloseStats = document.getElementById('btn-close-stats');
    if (btnCloseStats) {
        btnCloseStats.addEventListener('click', () => {
            showScreen('start');
        });
    }

    // 2.5. Note Explorer Transition & Togglers (Protected if elements exist)
    const btnShowExplorer = document.getElementById('btn-show-explorer');
    if (btnShowExplorer) {
        btnShowExplorer.addEventListener('click', () => {
            state.explorerClef = 'treble';
            const btnClefTreble = document.getElementById('btn-explorer-clef-treble');
            const btnClefBass = document.getElementById('btn-explorer-clef-bass');
            if (btnClefTreble) btnClefTreble.classList.add('active');
            if (btnClefBass) btnClefBass.classList.remove('active');
            updateExplorer();
            showScreen('explorer');
        });
    }
    const btnExplorerBack = document.getElementById('btn-explorer-back');
    if (btnExplorerBack) {
        btnExplorerBack.addEventListener('click', () => {
            showScreen('start');
        });
    }
    const btnExplorerClefTreble = document.getElementById('btn-explorer-clef-treble');
    if (btnExplorerClefTreble) {
        btnExplorerClefTreble.addEventListener('click', () => {
            state.explorerClef = 'treble';
            btnExplorerClefTreble.classList.add('active');
            const btnClefBass = document.getElementById('btn-explorer-clef-bass');
            if (btnClefBass) btnClefBass.classList.remove('active');
            updateExplorer();
        });
    }
    const btnExplorerClefBass = document.getElementById('btn-explorer-clef-bass');
    if (btnExplorerClefBass) {
        btnExplorerClefBass.addEventListener('click', () => {
            state.explorerClef = 'bass';
            btnExplorerClefBass.classList.add('active');
            const btnClefTreble = document.getElementById('btn-explorer-clef-treble');
            if (btnClefTreble) btnClefTreble.classList.remove('active');
            updateExplorer();
        });
    }

    // 3. Configurations selectors
    const setupToggleSelectors = (containerId, settingKey) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.settings[settingKey] = btn.dataset[settingKey];
                
                // Regenerate buttons if changing notations
                if (settingKey === 'notation') {
                    generateAnswerButtons();
                }
                
                // Refresh note explorer panel
                updateExplorer();
            });
        });
    };

    setupToggleSelectors('clef-selector', 'clef');
    setupToggleSelectors('difficulty-selector', 'difficulty');
    setupToggleSelectors('notation-selector', 'notation');

    // 4. Game Modes Buttons
    const btnStartPractice = document.getElementById('btn-start-practice');
    if (btnStartPractice) {
        btnStartPractice.addEventListener('click', () => {
            startPracticeMode();
        });
    }

    const btnStartChallenge = document.getElementById('btn-start-challenge');
    if (btnStartChallenge) {
        btnStartChallenge.addEventListener('click', () => {
            startChallengeMode();
        });
    }

    // 5. In-Game button handlers
    const btnQuitGame = document.getElementById('btn-quit-game');
    if (btnQuitGame) {
        btnQuitGame.addEventListener('click', () => {
            if (state.game.mode === 'challenge') {
                if (confirm("本当に中断しますか？現在のスコアは無効になります。")) {
                    clearInterval(state.game.timerInterval);
                    state.game.timerInterval = null;
                    showScreen('start');
                    updateExplorer();
                }
            } else {
                showScreen('start');
                updateExplorer();
            }
        });
    }

    const btnNextQuestion = document.getElementById('btn-next-question');
    if (btnNextQuestion) {
        btnNextQuestion.addEventListener('click', () => {
            state.game.questionCount++;
            const practiceCount = document.getElementById('practice-count');
            if (practiceCount) practiceCount.innerText = state.game.questionCount;
            
            // Hide feedback overlay
            const feedbackIcon = document.getElementById('feedback-icon');
            if (feedbackIcon) feedbackIcon.classList.remove('show');
            
            nextQuestion();
        });
    }

    // 6. Result Buttons
    const btnRetry = document.getElementById('btn-retry');
    if (btnRetry) {
        btnRetry.addEventListener('click', () => {
            if (state.game.mode === 'challenge') {
                startChallengeMode();
            } else {
                startPracticeMode();
            }
        });
    }

    const btnHome = document.getElementById('btn-home');
    if (btnHome) {
        btnHome.addEventListener('click', () => {
            showScreen('start');
            loadStats(); // reload best score
            updateExplorer(); // refresh explorer panel
        });
    }

    const btnResetStats = document.getElementById('btn-reset-stats');
    if (btnResetStats) {
        btnResetStats.addEventListener('click', () => {
            resetStats();
        });
    }

    // 7. Initial updates on load
    updateExplorer();
});
