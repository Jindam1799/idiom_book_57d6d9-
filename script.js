/* =========================================================
   진담중국어 덩어리훈련 · 관용구 — 문장 배열 게임
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const $ = (id) => document.getElementById(id);

  // ---------- 화면 / 팝업 ----------
  const screens = {
    intro: $('screen-intro'),
    lobby: $('screen-lobby'),
    game: $('screen-game'),
    speak: $('screen-speak'),
  };
  const popupOverlay = $('popup-overlay');
  const popups = {
    intro: $('popup-intro'),
    warning: $('popup-warning'),
    resume: $('popup-resume'),
    timeout: $('popup-timeout'),
    success: $('popup-success'),
    review: $('popup-review'),
    exit: $('popup-exit'),
  };

  // ---------- 게임 요소 ----------
  const dayButtonsContainer = $('day-buttons');
  const levelIndicator = $('level-indicator');
  const finalBadge = $('final-badge');
  const retryBadge = $('retry-badge');
  const timerDisplay = $('timer');
  const timerBox = timerDisplay.parentElement;
  const timerFill = $('timer-fill');
  const progressText = $('progress-text');
  const progressFill = $('progress-fill');
  const koreanSentence = $('korean-sentence');
  const answerSlots = $('answer-slots');
  const wordBank = $('word-bank');
  const bgmLobby = $('bgm-lobby');
  const toastEl = $('toast');

  const btnRecordVoice = $('btn-record-voice');
  const btnPlayMyVoice = $('btn-play-my-voice');
  const btnPlayTts = $('btn-play-tts');
  const btnTtsRate = $('btn-tts-rate');

  const DATA = window.sentenceData || {};

  // =========================================================
  // 저장 (이 기기의 브라우저에만 저장됨)
  // =========================================================
  const STORE_KEY = 'jindam_gwanyonggu_v2';
  const defaultStore = () => ({
    settings: { bgm: true, pinyin: true, slow: false },
    weeks: {},
  });
  let store = defaultStore();
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      store = {
        settings: Object.assign(defaultStore().settings, parsed.settings || {}),
        weeks: parsed.weeks || {},
      };
    }
  } catch (e) {
    /* 저장소를 쓸 수 없는 환경 — 메모리로만 동작 */
  }
  function saveStore() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (e) {
      /* 무시 */
    }
  }
  function weekRecord(key) {
    if (!store.weeks[key]) store.weeks[key] = { best: 0, cleared: false, resume: null };
    return store.weeks[key];
  }

  // =========================================================
  // 효과음 (Web Audio — 첫 터치 이후 생성)
  // =========================================================
  let audioCtx = null;
  function ensureCtx() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }
  function tone(freq, endFreq, dur, type = 'sine', vol = 0.25, delay = 0) {
    const ctx = ensureCtx();
    if (!ctx) return;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    osc.frequency.exponentialRampToValueAtTime(endFreq, t0 + dur);
    gain.gain.setValueAtTime(vol, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }
  const sfx = {
    click: () => tone(400, 100, 0.1),
    back: () => tone(260, 180, 0.08, 'sine', 0.18),
    correct: () => {
      tone(660, 660, 0.12, 'triangle', 0.25);
      tone(990, 990, 0.2, 'triangle', 0.25, 0.1);
    },
    wrong: () => tone(180, 110, 0.25, 'square', 0.12),
    hint: () => tone(880, 1200, 0.15, 'sine', 0.18),
    clear: () => {
      [523, 659, 784, 1047].forEach((f, i) => tone(f, f, 0.18, 'triangle', 0.2, i * 0.12));
    },
  };

  // =========================================================
  // TTS (중국어 원어민 음성)
  // =========================================================
  const hasTTS = 'speechSynthesis' in window;
  const isAndroid = /android/i.test(navigator.userAgent);
  let synthVoices = [];
  let zhVoice = null;
  function loadVoices() {
    if (!hasTTS) return;
    synthVoices = window.speechSynthesis.getVoices();
    const norm = (l) => (l || '').replace('_', '-').toLowerCase();
    // 보통화(zh-CN) 우선, 광둥어·홍콩 음성은 제외
    let pool = synthVoices.filter((v) => ['zh-cn', 'cmn-cn', 'cmn-hans-cn'].includes(norm(v.lang)));
    if (!pool.length) {
      pool = synthVoices.filter(
        (v) => norm(v.lang).startsWith('zh') && !/hk|yue|mo/.test(norm(v.lang)),
      );
    }
    // 우선순위대로 찾기
    //  - 아이폰/맥: Tingting(여성)
    //  - 안드로이드/크롬: Google 중국어 음성(여성)
    //  - 그 외: 이름에 female 이 있는 음성 → 첫 번째 중국어 음성
    const byName = (re) => pool.find((v) => re.test(v.name));
    const isMale = (v) => /\bmale\b|男/i.test(v.name) && !/female|女/i.test(v.name);
    const preferred = isAndroid
      ? [/Google/i, /Tingting|Ting-Ting/i]
      : [/Tingting|Ting-Ting/i, /Google/i];
    zhVoice = null;
    for (const re of preferred) {
      zhVoice = byName(re);
      if (zhVoice) break;
    }
    if (!zhVoice) zhVoice = pool.find((v) => /female|女/i.test(v.name)) || pool.find((v) => !isMale(v)) || pool[0] || null;
    window.__ttsVoiceName = zhVoice ? zhVoice.name : '(기본 음성)'; // 확인용
  }
  if (hasTTS) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function ttsRate() {
    return store.settings.slow ? 0.5 : 0.7;
  }
  function playTTS(text, btn) {
    if (!hasTTS) {
      showToast('이 브라우저는 음성 재생을 지원하지 않아요');
      return;
    }
    stopMyVoice();
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = ttsRate();
    if (zhVoice) u.voice = zhVoice;
    if (btn) {
      u.onstart = () => btn.classList.add('playing');
      u.onend = u.onerror = () => btn.classList.remove('playing');
    }
    window.speechSynthesis.speak(u);
  }
  function stopTTS() {
    if (hasTTS) window.speechSynthesis.cancel();
    document.querySelectorAll('.btn-voice.playing').forEach((b) => b.classList.remove('playing'));
  }
  function updateRateButton() {
    btnTtsRate.textContent = store.settings.slow ? '🐢 느리게' : '🐇 기본 속도';
  }

  // =========================================================
  // 공통 유틸
  // =========================================================
  function openPopup(el) {
    Object.values(popups).forEach((p) => p.classList.add('hidden'));
    popupOverlay.classList.remove('hidden');
    el.classList.remove('hidden');
  }
  function closePopup(el) {
    el.classList.add('hidden');
    popupOverlay.classList.add('hidden');
  }
  function switchScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove('active'));
    screens[name].classList.add('active');
    currentScreen = name;
    if (name === 'lobby') playBgm();
    else pauseBgm();
  }
  let toastTimer = null;
  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.add('hidden'), 2200);
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function fullChinese(s) {
    return s.chinese.hanzi.join('');
  }
  function fullPinyin(s) {
    return s.chinese.pinyin.filter(Boolean).join(' ');
  }
  function weekLabel(key) {
    return key.replace(/^([a-z]+)(\d+)$/i, (m, w, n) => `${w.toUpperCase()} ${n}`);
  }

  // =========================================================
  // 배경음 / 설정
  // =========================================================
  let currentScreen = 'intro';
  function playBgm() {
    if (!store.settings.bgm || currentScreen !== 'lobby') return;
    bgmLobby.volume = 0.6;
    bgmLobby.play().catch(() => {});
  }
  function pauseBgm() {
    bgmLobby.pause();
  }
  function applySettings() {
    document.body.classList.toggle('no-pinyin', !store.settings.pinyin);
    const bgmBtn = $('btn-toggle-bgm');
    bgmBtn.textContent = store.settings.bgm ? '🎵 배경음 ON' : '🎵 배경음 OFF';
    bgmBtn.classList.toggle('off', !store.settings.bgm);
    ['btn-toggle-pinyin', 'btn-toggle-pinyin-lobby'].forEach((id) => {
      const b = $(id);
      b.textContent = store.settings.pinyin ? '병음 ON' : '병음 OFF';
      b.classList.toggle('off', !store.settings.pinyin);
    });
    updateRateButton();
  }
  $('btn-toggle-bgm').addEventListener('click', () => {
    store.settings.bgm = !store.settings.bgm;
    saveStore();
    applySettings();
    if (store.settings.bgm) playBgm();
    else pauseBgm();
  });
  const togglePinyin = () => {
    store.settings.pinyin = !store.settings.pinyin;
    saveStore();
    applySettings();
  };
  $('btn-toggle-pinyin').addEventListener('click', togglePinyin);
  $('btn-toggle-pinyin-lobby').addEventListener('click', togglePinyin);
  applySettings();

  // =========================================================
  // 1. 인트로 → 소개 → (삼성 안내) → 로비
  // =========================================================
  const introPage1 = $('intro-page-1');
  const introPage2 = $('intro-page-2');
  function showIntroPage(n) {
    introPage1.classList.toggle('active', n === 1);
    introPage1.classList.toggle('hidden', n !== 1);
    introPage2.classList.toggle('active', n === 2);
    introPage2.classList.toggle('hidden', n !== 2);
  }
  const isSamsungBrowser = /SamsungBrowser/i.test(navigator.userAgent);

  screens.intro.addEventListener('click', () => {
    ensureCtx();
    showIntroPage(1);
    openPopup(popups.intro);
  });
  $('btn-next-intro').addEventListener('click', () => showIntroPage(2));
  $('btn-prev-intro').addEventListener('click', () => showIntroPage(1));
  $('btn-close-intro').addEventListener('click', () => {
    closePopup(popups.intro);
    showIntroPage(1);
    if (currentScreen === 'lobby') return; // 로비에서 소개를 다시 연 경우
    if (isSamsungBrowser) openPopup(popups.warning);
    else goLobby();
  });
  $('btn-open-intro').addEventListener('click', () => {
    showIntroPage(1);
    openPopup(popups.intro);
  });
  $('btn-close-warning').addEventListener('click', () => {
    closePopup(popups.warning);
    goLobby();
  });
  // 삼성 인터넷 → 크롬으로 열기 (크롬이 없으면 플레이스토어 크롬 페이지)
  $('btn-open-chrome').addEventListener('click', () => {
    const url = location.href.split('#')[0];
    location.href =
      'intent://' + url.replace(/^https?:\/\//, '') +
      '#Intent;scheme=' + location.protocol.replace(':', '') +
      ';package=com.android.chrome;S.browser_fallback_url=' +
      encodeURIComponent('https://play.google.com/store/apps/details?id=com.android.chrome') +
      ';end';
  });
  $('btn-copy-link').addEventListener('click', async () => {
    const url = location.href;
    try {
      await navigator.clipboard.writeText(url);
      showToast('링크를 복사했어요! 크롬에 붙여넣어 주세요');
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast('링크를 복사했어요! 크롬에 붙여넣어 주세요');
      } catch (err) {
        showToast('복사에 실패했어요. 주소창의 링크를 직접 복사해 주세요');
      }
      ta.remove();
    }
  });

  // =========================================================
  // 2. 로비
  // =========================================================
  function goLobby() {
    stopTimer();
    stopTTS();
    stopRecording(true);
    buildLobby();
    switchScreen('lobby');
  }
  function buildLobby() {
    dayButtonsContainer.innerHTML = '';
    Object.keys(DATA).forEach((key) => {
      const rec = weekRecord(key);
      const total = DATA[key].length;
      const exprCount = new Set(DATA[key].map((s) => s.id)).size;
      const num = (key.match(/\d+/) || [''])[0];
      const hasResume = rec.resume && rec.resume.pos > 0 && rec.resume.pos < total;

      let status = '시작하기';
      let statusClass = '';
      let percent = 0;
      if (hasResume) {
        status = `이어하기 ${rec.resume.pos} / ${total}`;
        statusClass = 'resume';
        percent = (rec.resume.pos / total) * 100;
      } else if (rec.cleared) {
        status = '완료 ✓';
        statusClass = 'done';
        percent = 100;
      }

      const btn = document.createElement('button');
      btn.className = 'week-card' + (rec.cleared ? ' cleared' : '');
      btn.innerHTML = `
        <span class="wk-num"><small>WEEK</small><b>${num}</b></span>
        <span class="wk-body">
          <span class="wk-top">
            <span class="wk-title">${weekLabel(key)}</span>
            <span class="wk-status ${statusClass}">${status}</span>
          </span>
          <span class="wk-meta">표현 ${exprCount}개 · 문장 ${total}개</span>
          <span class="wk-bar"><i style="width:${percent}%"></i></span>
        </span>
        <span class="wk-side">
          <span class="wk-stars">${[1, 2, 3]
            .map((n) => `<span class="${rec.best >= n ? 'on' : ''}">★</span>`)
            .join('')}</span>
          <span class="wk-arrow">›</span>
        </span>`;
      btn.addEventListener('click', () => {
        sfx.click();
        onWeekSelect(key);
      });
      dayButtonsContainer.appendChild(btn);
    });
  }

  let pendingWeek = null;
  function onWeekSelect(key) {
    const rec = weekRecord(key);
    const total = DATA[key].length;
    if (rec.resume && rec.resume.pos > 0 && rec.resume.pos < total) {
      pendingWeek = key;
      $('resume-title').textContent = weekLabel(key);
      $('resume-desc').textContent = `지난번에 ${rec.resume.pos}문장까지 했어요. 이어서 할까요?`;
      openPopup(popups.resume);
    } else {
      startSession(key, 'normal');
    }
  }
  $('btn-resume-continue').addEventListener('click', () => {
    closePopup(popups.resume);
    startSession(pendingWeek, 'normal', weekRecord(pendingWeek).resume);
  });
  $('btn-resume-restart').addEventListener('click', () => {
    closePopup(popups.resume);
    weekRecord(pendingWeek).resume = null;
    saveStore();
    startSession(pendingWeek, 'normal');
  });
  $('btn-resume-cancel').addEventListener('click', () => closePopup(popups.resume));

  // =========================================================
  // 3. 세션 (한 주차 / 오답 복습)
  // =========================================================
  let session = null;
  let groupInfo = [];

  function buildGroupInfo(list) {
    const info = [];
    let group = 0;
    let prevId = null;
    let start = 0;
    list.forEach((s, i) => {
      if (s.id !== prevId) {
        if (prevId !== null) {
          for (let k = start; k < i; k++) info[k].steps = i - start;
        }
        group++;
        start = i;
        prevId = s.id;
      }
      info[i] = { group, step: i - start + 1, steps: 0 };
    });
    for (let k = start; k < list.length; k++) info[k].steps = list.length - start;
    return info;
  }

  function startSession(weekKey, mode, resume) {
    const list = DATA[weekKey];
    if (!list || !list.length) return;
    groupInfo = buildGroupInfo(list);
    const queue = mode === 'retry' ? resume.queue : list.map((_, i) => i);
    session = {
      weekKey,
      list,
      mode,
      queue,
      pos: mode === 'normal' && resume ? resume.pos : 0,
      wrong: new Set(mode === 'normal' && resume ? resume.wrong || [] : []),
      hinted: new Set(mode === 'normal' && resume ? resume.hinted || [] : []),
    };
    switchScreen('game');
    loadSentence();
  }

  function saveResume() {
    if (!session || session.mode !== 'normal') return;
    const rec = weekRecord(session.weekKey);
    rec.resume = {
      pos: session.pos,
      wrong: [...session.wrong],
      hinted: [...session.hinted],
    };
    saveStore();
  }

  // =========================================================
  // 4. 문장 로드 & 카드 조작
  // =========================================================
  let target = [];
  let placed = []; // { item, bankEl, slotEl, locked }
  let busy = false;
  let solved = false;
  let timeLimit = 30;

  function currentIndex() {
    return session.queue[session.pos];
  }
  function currentSentence() {
    return session.list[currentIndex()];
  }

  function loadSentence() {
    const s = currentSentence();
    const g = groupInfo[currentIndex()];

    answerSlots.innerHTML = '';
    wordBank.innerHTML = '';
    answerSlots.classList.remove('all-correct');
    screens.game.classList.remove('shake-screen');
    placed = [];
    busy = false;
    solved = false;
    resetRecorderUI();

    target = s.chinese.hanzi.map((h, i) => ({
      hanzi: h,
      pinyin: s.chinese.pinyin[i] || '',
      id: i,
    }));

    // 카드가 많으면 자동 축소
    const charCount = target.reduce((n, t) => n + t.hanzi.length, 0);
    const dense = target.length >= 8 || charCount >= 16;
    answerSlots.classList.toggle('dense', dense);
    wordBank.classList.toggle('dense', dense);

    screens.game.classList.toggle('is-final', !!s.isFinal);
    finalBadge.classList.toggle('hidden', !s.isFinal);
    retryBadge.classList.toggle('hidden', session.mode !== 'retry');
    levelIndicator.textContent = `표현 ${g.group} · ${g.step}/${g.steps}단계`;
    koreanSentence.textContent = s.korean;

    const total = session.queue.length;
    progressText.textContent = `${session.pos + 1} / ${total}`;
    progressFill.style.width = `${(session.pos / total) * 100}%`;

    // 섞기 — 정답 순서 그대로 나오지 않도록
    const answerKey = target.map((t) => t.hanzi).join('|');
    let order = shuffle(target);
    const canDiffer = new Set(target.map((t) => t.hanzi)).size > 1;
    for (let tries = 0; canDiffer && tries < 30; tries++) {
      if (order.map((t) => t.hanzi).join('|') !== answerKey) break;
      order = shuffle(target);
    }
    order.forEach((item) => {
      const card = createCard(item);
      card.addEventListener('click', () => {
        if (busy || solved || card.classList.contains('used')) return;
        sfx.click();
        placeCard(item, card);
        afterPlace();
      });
      wordBank.appendChild(card);
    });

    updatePlaceholder();
    timeLimit = Math.max(30, target.length * 4);
    startTimer(timeLimit);
  }

  function createCard(item) {
    const card = document.createElement('div');
    card.className = 'word-card';
    card.dataset.id = item.id;
    const p = document.createElement('div');
    p.className = 'pinyin';
    p.textContent = item.pinyin;
    const h = document.createElement('div');
    h.className = 'hanzi';
    h.textContent = item.hanzi;
    card.append(p, h);
    return card;
  }

  function placeCard(item, bankEl, locked = false) {
    bankEl.classList.add('used');
    const slotEl = createCard(item);
    slotEl.classList.add('placed');
    const entry = { item, bankEl, slotEl, locked };
    if (locked) slotEl.classList.add('locked');
    slotEl.addEventListener('click', () => {
      if (busy || solved || entry.locked) return;
      sfx.back();
      removeEntry(entry);
    });
    placed.push(entry);
    answerSlots.appendChild(slotEl);
    updatePlaceholder();
    return entry;
  }

  function removeEntry(entry) {
    entry.slotEl.remove();
    entry.bankEl.classList.remove('used');
    placed = placed.filter((e) => e !== entry);
    updatePlaceholder();
  }

  function removeUnlocked() {
    placed.filter((e) => !e.locked).forEach(removeEntry);
  }

  function updatePlaceholder() {
    const has = answerSlots.querySelector('.word-card');
    let ph = answerSlots.querySelector('.slots-placeholder');
    if (!has && !ph) {
      ph = document.createElement('span');
      ph.className = 'slots-placeholder';
      ph.textContent = '카드를 순서대로 눌러 문장을 완성하세요';
      answerSlots.appendChild(ph);
    } else if (has && ph) {
      ph.remove();
    }
  }

  function afterPlace() {
    if (placed.length === target.length) checkAnswer();
  }

  function firstMismatch() {
    for (let i = 0; i < placed.length; i++) {
      if (placed[i].item.hanzi !== target[i].hanzi) return i;
    }
    return -1;
  }

  // =========================================================
  // 5. 정답 확인 — 맞은 앞부분은 고정, 틀린 뒷부분만 돌려보냄
  // =========================================================
  function checkAnswer() {
    const miss = firstMismatch();
    if (miss === -1) {
      onSolved(false);
      return;
    }
    session.wrong.add(currentIndex());
    sfx.wrong();
    busy = true;

    screens.game.classList.remove('shake-screen');
    void screens.game.offsetWidth;
    screens.game.classList.add('shake-screen');

    placed.forEach((e, i) => {
      if (i < miss) {
        e.locked = true;
        e.slotEl.classList.add('locked');
      } else {
        e.slotEl.classList.add('wrong');
      }
    });
    setTimeout(() => {
      placed.slice(miss).forEach(removeEntry);
      busy = false;
      if (miss > 0) showToast(`앞의 ${miss}개는 맞았어요! 나머지를 다시 놓아 보세요`);
    }, 550);
  }

  function onSolved(revealed) {
    solved = true;
    stopTimer();
    placed.forEach((e) => {
      e.locked = true;
      e.slotEl.classList.remove('wrong');
      e.slotEl.classList.add('locked');
    });
    answerSlots.classList.add('all-correct');

    const s = currentSentence();
    const text = fullChinese(s);
    if (!revealed) sfx.correct();
    // 터치 이벤트 안에서 바로 호출해야 모바일에서 음성이 재생됨
    playTTS(text, btnPlayTts);

    const title = $('success-title');
    if (revealed) {
      title.textContent = '정답을 확인해요 👀';
      title.classList.add('revealed');
    } else {
      const praise = session.wrong.has(currentIndex()) || session.hinted.has(currentIndex())
        ? ['정답입니다! 🎉', '해냈어요! 👏']
        : ['정답입니다! 🎉', '완벽해요! ✨', '한 번에 성공! 🎯'];
      title.textContent = praise[Math.floor(Math.random() * praise.length)];
      title.classList.remove('revealed');
    }
    $('success-korean').textContent = s.korean;
    $('success-chinese').textContent = text;
    $('success-pinyin').textContent = fullPinyin(s);
    $('success-pinyin').classList.toggle('hidden', !store.settings.pinyin);

    setTimeout(() => openPopup(popups.success), revealed ? 150 : 650);
  }

  // 힌트: 틀린 카드를 정리하고 다음 정답 카드 1장을 놓아 줌
  $('btn-hint').addEventListener('click', () => {
    if (busy || solved || !session) return;
    const miss = firstMismatch();
    if (miss !== -1) placed.slice(miss).forEach((e) => !e.locked && removeEntry(e));
    // 맞게 놓인 앞부분은 고정
    placed.forEach((e) => {
      e.locked = true;
      e.slotEl.classList.add('locked');
    });
    const need = target[placed.length];
    if (!need) return;
    const bankEl = [...wordBank.children].find(
      (c) => !c.classList.contains('used') && c.querySelector('.hanzi').textContent === need.hanzi,
    );
    if (!bankEl) return;
    session.hinted.add(currentIndex());
    sfx.hint();
    const entry = placeCard(need, bankEl, true);
    entry.slotEl.classList.add('hint-glow');
    afterPlace();
  });

  $('btn-clear').addEventListener('click', () => {
    if (busy || solved) return;
    if (!placed.some((e) => !e.locked)) return;
    sfx.back();
    removeUnlocked();
  });

  // =========================================================
  // 6. 타이머 (시간 초과 시 멈추고 선택지 제공)
  // =========================================================
  let timerInterval = null;
  let timeLeft = 30;
  let timerPausedByHide = false;

  function renderTimer() {
    timerDisplay.textContent = timeLeft;
    const ratio = Math.max(0, timeLeft / timeLimit);
    timerFill.style.width = `${ratio * 100}%`;
    timerFill.classList.toggle('warn', ratio <= 0.5 && ratio > 0.2);
    timerFill.classList.toggle('danger', ratio <= 0.2);
    timerBox.classList.toggle('danger', timeLeft <= 5);
  }
  function startTimer(seconds) {
    stopTimer();
    timeLeft = seconds;
    timerFill.style.transition = 'none';
    renderTimer();
    void timerFill.offsetWidth;
    timerFill.style.transition = '';
    resumeTimer();
  }
  function resumeTimer() {
    if (timerInterval || solved) return;
    timerInterval = setInterval(() => {
      timeLeft--;
      renderTimer();
      if (timeLeft <= 0) onTimeout();
    }, 1000);
  }
  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    timerBox.classList.remove('danger');
  }
  function onTimeout() {
    stopTimer();
    if (busy || solved) return;
    session.wrong.add(currentIndex());
    sfx.wrong();
    openPopup(popups.timeout);
  }
  $('btn-timeout-retry').addEventListener('click', () => {
    closePopup(popups.timeout);
    removeUnlocked();
    startTimer(timeLimit);
  });
  $('btn-timeout-answer').addEventListener('click', () => {
    closePopup(popups.timeout);
    session.hinted.add(currentIndex());
    removeUnlocked();
    // 남은 카드를 정답 순서대로 채움
    while (placed.length < target.length) {
      const need = target[placed.length];
      const bankEl = [...wordBank.children].find(
        (c) => !c.classList.contains('used') && c.querySelector('.hanzi').textContent === need.hanzi,
      );
      if (!bankEl) break;
      placeCard(need, bankEl, true);
    }
    onSolved(true);
  });

  // 앱을 잠시 벗어나면 타이머 일시정지
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (timerInterval) {
        stopTimer();
        timerPausedByHide = true;
      }
      pauseBgm();
      stopTTS();
    } else {
      if (timerPausedByHide && currentScreen === 'game' && popupOverlay.classList.contains('hidden')) {
        resumeTimer();
      }
      timerPausedByHide = false;
      playBgm();
    }
  });

  // =========================================================
  // 7. 정답 팝업 — 원어민 / 속도 / 녹음
  // =========================================================
  btnPlayTts.addEventListener('click', () => {
    if (session) playTTS(fullChinese(currentSentence()), btnPlayTts);
  });
  btnTtsRate.addEventListener('click', () => {
    store.settings.slow = !store.settings.slow;
    saveStore();
    updateRateButton();
    if (session) playTTS(fullChinese(currentSentence()), btnPlayTts);
  });

  const canRecord = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  if (!canRecord) $('recorder-box').classList.add('hidden');

  let mediaRecorder = null;
  let micStream = null;
  let audioChunks = [];
  let myAudio = null;
  let myAudioUrl = null;
  let discardRecording = false;
  let recordAutoStop = null;

  function stopMyVoice() {
    if (myAudio) {
      myAudio.pause();
      myAudio.currentTime = 0;
    }
  }
  function releaseMic() {
    if (micStream) {
      micStream.getTracks().forEach((t) => t.stop());
      micStream = null;
    }
  }
  function stopRecording(discard) {
    clearTimeout(recordAutoStop);
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      discardRecording = !!discard;
      mediaRecorder.stop();
    } else {
      releaseMic();
    }
  }
  function resetRecorderUI() {
    stopRecording(true);
    stopMyVoice();
    if (myAudioUrl) URL.revokeObjectURL(myAudioUrl);
    myAudio = null;
    myAudioUrl = null;
    btnPlayMyVoice.disabled = true;
    btnRecordVoice.textContent = '🎙️ 녹음하기';
    btnRecordVoice.classList.remove('recording');
  }

  btnRecordVoice.addEventListener('click', async () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      stopRecording(false);
      return;
    }
    stopTTS();
    stopMyVoice();
    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      showToast('마이크 사용이 허용되지 않았어요. 브라우저 설정을 확인해 주세요');
      return;
    }
    audioChunks = [];
    discardRecording = false;
    mediaRecorder = new MediaRecorder(micStream);
    mediaRecorder.ondataavailable = (e) => e.data && e.data.size && audioChunks.push(e.data);
    mediaRecorder.onstop = () => {
      releaseMic(); // 마이크 사용 표시 끄기
      btnRecordVoice.classList.remove('recording');
      btnRecordVoice.textContent = '🎙️ 다시 녹음';
      if (discardRecording || !audioChunks.length) return;

      const blob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
      if (myAudioUrl) URL.revokeObjectURL(myAudioUrl);
      myAudioUrl = URL.createObjectURL(blob);
      myAudio = new Audio(myAudioUrl);
      btnPlayMyVoice.disabled = false;

      // 녹음 볼륨 2배 증폭
      const ctx = ensureCtx();
      if (ctx) {
        try {
          const src = ctx.createMediaElementSource(myAudio);
          const gain = ctx.createGain();
          gain.gain.value = 2;
          src.connect(gain);
          gain.connect(ctx.destination);
        } catch (err) {
          /* 증폭 불가 환경은 원음 재생 */
        }
      }
      myAudio.play().catch(() => {});
    };
    mediaRecorder.start();
    btnRecordVoice.textContent = '🛑 멈추기';
    btnRecordVoice.classList.add('recording');
    recordAutoStop = setTimeout(() => stopRecording(false), 15000); // 최대 15초
  });

  btnPlayMyVoice.addEventListener('click', () => {
    if (!myAudio) return;
    stopTTS();
    ensureCtx();
    myAudio.currentTime = 0;
    myAudio.play().catch(() => {});
  });

  $('btn-next-sentence').addEventListener('click', () => {
    closePopup(popups.success);
    stopTTS();
    resetRecorderUI();
    session.pos++;
    if (session.pos < session.queue.length) {
      saveResume();
      loadSentence();
    } else {
      finishSession();
    }
  });

  // =========================================================
  // 8. 결과 & 복습
  // =========================================================
  function starsFor(missCount, total) {
    const rate = total ? missCount / total : 0;
    if (rate <= 0.1) return 3;
    if (rate <= 0.3) return 2;
    return 1;
  }

  function finishSession() {
    stopTimer();
    progressFill.style.width = '100%';
    const missed = new Set([...session.wrong, ...session.hinted]);
    const total = session.queue.length;
    const perfect = session.queue.filter((i) => !missed.has(i)).length;

    const starsEl = $('review-stars');
    if (session.mode === 'normal') {
      const stars = starsFor(missed.size, total);
      const rec = weekRecord(session.weekKey);
      rec.best = Math.max(rec.best || 0, stars);
      rec.cleared = true;
      rec.resume = null;
      saveStore();
      $('review-title').textContent = `${weekLabel(session.weekKey)} 완료! 📚`;
      starsEl.innerHTML = [1, 2, 3]
        .map((n, i) => `<span class="${stars >= n ? 'on' : 'off'}" style="animation-delay:${i * 0.15}s">★</span>`)
        .join('');
      starsEl.classList.remove('hidden');
    } else {
      $('review-title').textContent = '오답 복습 완료! 🔁';
      starsEl.classList.add('hidden');
    }
    sfx.clear();

    $('review-stats').innerHTML = `
      <span class="stat-chip">✅ 한 번에 성공 ${perfect}</span>
      <span class="stat-chip bad">❌ 실수 ${session.wrong.size}</span>
      <span class="stat-chip bad">💡 힌트 ${session.hinted.size}</span>`;

    buildReviewList(missed);
    const retryBtn = $('btn-retry-mistakes');
    retryBtn.classList.toggle('hidden', missed.size === 0);
    retryBtn.textContent = `🔁 틀린 문장만 다시 풀기 (${missed.size})`;
    openPopup(popups.review);
  }

  function buildReviewList(missed) {
    const box = $('review-list');
    box.innerHTML = '';
    // 틀린 문장을 위로
    const order = [...session.queue].sort((a, b) => (missed.has(b) ? 1 : 0) - (missed.has(a) ? 1 : 0));
    order.forEach((idx) => {
      const s = session.list[idx];
      const item = document.createElement('div');
      item.className = 'review-item' + (missed.has(idx) ? ' mistake-highlight' : '');
      const text = document.createElement('div');
      text.className = 'review-text';
      const k = document.createElement('div');
      k.className = 'r-korean';
      k.textContent = s.korean;
      const c = document.createElement('div');
      c.className = 'r-chinese';
      c.textContent = fullChinese(s);
      text.append(k, c);
      if (store.settings.pinyin) {
        const p = document.createElement('div');
        p.className = 'r-pinyin';
        p.textContent = fullPinyin(s);
        text.appendChild(p);
      }
      const play = document.createElement('button');
      play.className = 'icon-btn';
      play.textContent = '🔊';
      play.addEventListener('click', () => playTTS(fullChinese(s)));
      item.append(text, play);
      box.appendChild(item);
    });
  }

  $('btn-retry-mistakes').addEventListener('click', () => {
    const missed = [...new Set([...session.wrong, ...session.hinted])].sort((a, b) => a - b);
    if (!missed.length) return;
    closePopup(popups.review);
    stopTTS();
    startSession(session.weekKey, 'retry', { queue: missed });
  });
  $('btn-speak-challenge').addEventListener('click', () => {
    closePopup(popups.review);
    stopTTS();
    startSpeak(session.weekKey);
  });
  $('btn-return-lobby').addEventListener('click', () => {
    closePopup(popups.review);
    goLobby();
  });

  // 게임 중 로비로 나가기
  $('btn-ingame-lobby').addEventListener('click', () => {
    if (!session) return goLobby();
    stopTimer();
    $('exit-desc').textContent =
      session.mode === 'normal'
        ? '지금까지 한 곳은 저장되어 다음에 이어서 할 수 있어요.'
        : '오답 복습은 저장되지 않아요.';
    openPopup(popups.exit);
  });
  $('btn-exit-confirm').addEventListener('click', () => {
    closePopup(popups.exit);
    saveResume();
    goLobby();
  });
  $('btn-exit-cancel').addEventListener('click', () => {
    closePopup(popups.exit);
    resumeTimer();
  });

  // =========================================================
  // 9. 말하기 도전 — 완성 문장을 한국어만 보고 말하기
  // =========================================================
  let speak = null;
  const speakKorean = $('speak-korean');
  const speakAnswer = $('speak-answer');
  const speakAfter = $('speak-after');
  const btnSpeakReveal = $('btn-speak-reveal');

  function startSpeak(weekKey) {
    const list = DATA[weekKey];
    let items = list.filter((s) => s.isFinal);
    if (!items.length) items = list.slice();
    speak = { weekKey, queue: items.slice(), total: items.length, done: 0, finished: false };
    switchScreen('speak');
    renderSpeak();
  }
  function renderSpeak() {
    const total = speak.total;
    $('speak-progress').textContent = `${Math.min(speak.done + 1, total)} / ${total}`;
    $('speak-progress-fill').style.width = `${(speak.done / total) * 100}%`;
    speakAnswer.classList.add('hidden');
    speakAfter.classList.add('hidden');
    btnSpeakReveal.classList.remove('hidden');

    if (!speak.queue.length) {
      speak.finished = true;
      $('speak-progress-fill').style.width = '100%';
      $('speak-progress').textContent = `${total} / ${total}`;
      speakKorean.textContent = `🎉 말하기 도전 완료!\n완성 문장 ${total}개를 모두 말했어요.`;
      speakKorean.style.whiteSpace = 'pre-line';
      btnSpeakReveal.textContent = '로비로 돌아가기';
      sfx.clear();
      return;
    }
    speakKorean.style.whiteSpace = '';
    btnSpeakReveal.textContent = '👀 정답 확인';
    speakKorean.textContent = speak.queue[0].korean;
  }
  btnSpeakReveal.addEventListener('click', () => {
    if (speak.finished) return goLobby();
    const s = speak.queue[0];
    $('speak-chinese').textContent = fullChinese(s);
    $('speak-pinyin').textContent = fullPinyin(s);
    $('speak-pinyin').classList.toggle('hidden', !store.settings.pinyin);
    speakAnswer.classList.remove('hidden');
    speakAfter.classList.remove('hidden');
    btnSpeakReveal.classList.add('hidden');
    playTTS(fullChinese(s), $('btn-speak-tts'));
  });
  $('btn-speak-tts').addEventListener('click', () => {
    if (speak && speak.queue[0]) playTTS(fullChinese(speak.queue[0]), $('btn-speak-tts'));
  });
  $('btn-speak-ok').addEventListener('click', () => {
    stopTTS();
    sfx.correct();
    speak.queue.shift();
    speak.done++;
    renderSpeak();
  });
  $('btn-speak-again').addEventListener('click', () => {
    stopTTS();
    sfx.back();
    speak.queue.push(speak.queue.shift()); // 맨 뒤로 보내서 한 번 더
    renderSpeak();
  });
  $('btn-speak-back').addEventListener('click', goLobby);
});
