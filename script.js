document.addEventListener('DOMContentLoaded', () => {
  // --- 화면 및 팝업 엘리먼트 ---
  const screenIntro = document.getElementById('screen-intro');
  const screenLobby = document.getElementById('screen-lobby');
  const screenGame = document.getElementById('screen-game');

  const popupOverlay = document.getElementById('popup-overlay');
  const popupIntro = document.getElementById('popup-intro');
  const popupSuccess = document.getElementById('popup-success');
  const popupReview = document.getElementById('popup-review');

  // --- 팝업 페이징 엘리먼트 ---
  const introPage1 = document.getElementById('intro-page-1');
  const introPage2 = document.getElementById('intro-page-2');
  const btnNextIntro = document.getElementById('btn-next-intro');
  const btnPrevIntro = document.getElementById('btn-prev-intro');
  const btnCloseIntro = document.getElementById('btn-close-intro');

  // --- 게임 내부 엘리먼트 ---
  const dayButtonsContainer = document.getElementById('day-buttons');
  const levelIndicator = document.getElementById('level-indicator');
  const timerDisplay = document.getElementById('timer');
  const koreanSentence = document.getElementById('korean-sentence');
  const answerSlots = document.getElementById('answer-slots');
  const wordBank = document.getElementById('word-bank');

  const bgmLobby = document.getElementById('bgm-lobby');

  // --- 기타 버튼 ---
  const btnNextSentence = document.getElementById('btn-next-sentence');
  const btnReturnLobby = document.getElementById('btn-return-lobby');
  const btnIngameLobby = document.getElementById('btn-ingame-lobby');

  const btnRecordVoice = document.getElementById('btn-record-voice');
  const btnPlayMyVoice = document.getElementById('btn-play-my-voice');
  const btnPlayTts = document.getElementById('btn-play-tts');

  // --- 상태 변수 ---
  let currentDayData = [];
  let currentSentenceIndex = 0;
  let timerInterval = null;
  let timeLeft = 30;
  let targetSentenceData = [];
  let currentAnswer = [];
  let currentFullChinese = '';
  let mistakeTracker = {};

  // --- Web Audio API (유저 터치 시점에 지연 생성하여 오류 방지) ---
  let audioCtx = null;

  function playClickSound() {
    // 최초 터치 시점에 AudioContext 생성 (브라우저 정책 우회)
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      100,
      audioCtx.currentTime + 0.1,
    );

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioCtx.currentTime + 0.1,
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
  }

  // --- TTS 음성 세팅 ---
  let synthVoices = [];
  function loadVoices() {
    if ('speechSynthesis' in window)
      synthVoices = window.speechSynthesis.getVoices();
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }

  // --- 녹음 세팅 ---
  let mediaRecorder;
  let audioChunks = [];
  let myRecordedAudioUrl = null;
  let myRecordedAudioObj = null;

  // 1. 인트로 및 팝업 흐름 제어
  screenIntro.addEventListener('click', () => {
    showPopup(popupIntro);
  });

  btnNextIntro.addEventListener('click', () => {
    introPage1.classList.remove('active');
    introPage1.classList.add('hidden');
    introPage2.classList.remove('hidden');
    introPage2.classList.add('active');
  });

  btnPrevIntro.addEventListener('click', () => {
    introPage2.classList.remove('active');
    introPage2.classList.add('hidden');
    introPage1.classList.remove('hidden');
    introPage1.classList.add('active');
  });

  btnCloseIntro.addEventListener('click', () => {
    hidePopup(popupIntro);
    // 다음 오픈을 위해 1페이지로 리셋
    introPage2.classList.remove('active');
    introPage2.classList.add('hidden');
    introPage1.classList.remove('hidden');
    introPage1.classList.add('active');

    switchScreen(screenLobby);
    initLobby();
    bgmLobby.play().catch((e) => console.log('BGM Play Error:', e));
  });

  // 2. 로비 초기화 함수
  function initLobby() {
    dayButtonsContainer.innerHTML = '';
    if (!window.sentenceData) return; // 데이터 로드 확인
    const days = Object.keys(window.sentenceData);
    days.forEach((day) => {
      const btn = document.createElement('button');
      btn.innerText = day.toUpperCase();
      btn.addEventListener('click', () => startGame(day));
      dayButtonsContainer.appendChild(btn);
    });
  }

  btnIngameLobby.addEventListener('click', () => {
    stopTimer();
    switchScreen(screenLobby);
    bgmLobby.play().catch((e) => console.log(e));
  });

  btnReturnLobby.addEventListener('click', () => {
    hidePopup(popupReview);
    switchScreen(screenLobby);
    bgmLobby.play().catch((e) => console.log(e));
  });

  // 3. 게임 시작 로직
  function startGame(dayKey) {
    currentDayData = window.sentenceData[dayKey];
    currentSentenceIndex = 0;
    mistakeTracker = {};

    bgmLobby.pause();
    bgmLobby.currentTime = 0;

    switchScreen(screenGame);
    loadSentence();
  }

  function loadSentence() {
    const sentenceObj = currentDayData[currentSentenceIndex];

    answerSlots.innerHTML = '';
    wordBank.innerHTML = '';
    currentAnswer = [];
    screenGame.classList.remove('shake-screen');

    // 녹음 초기화
    myRecordedAudioUrl = null;
    if (myRecordedAudioObj) {
      myRecordedAudioObj.pause();
      myRecordedAudioObj = null;
    }
    btnPlayMyVoice.disabled = true;
    btnRecordVoice.innerText = '🎙️ 녹음하기';
    btnRecordVoice.classList.remove('recording');

    targetSentenceData = sentenceObj.chinese.hanzi.map((h, i) => ({
      hanzi: h,
      pinyin: sentenceObj.chinese.pinyin[i],
      id: i,
    }));
    currentFullChinese = targetSentenceData.map((t) => t.hanzi).join('');

    if (sentenceObj.isFinal) screenGame.classList.add('is-final');
    else screenGame.classList.remove('is-final');

    levelIndicator.innerText = `Level ${sentenceObj.level}`;
    koreanSentence.innerText = sentenceObj.korean;

    let shuffledWords = [...targetSentenceData].sort(() => Math.random() - 0.5);

    shuffledWords.forEach((item) => {
      const card = createWordCardUI(item);
      card.addEventListener('click', () => handleWordClick(item, card));
      wordBank.appendChild(card);
    });

    startTimer();
  }

  function createWordCardUI(item) {
    const card = document.createElement('div');
    card.className = 'word-card';
    card.dataset.id = item.id;
    card.innerHTML = `<div class="pinyin">${item.pinyin}</div><div class="hanzi">${item.hanzi}</div>`;
    return card;
  }

  // 4. 단어 터치 로직
  function handleWordClick(item, originalCard) {
    if (originalCard.classList.contains('hidden')) return;

    playClickSound(); // 툭 소리 재생
    originalCard.classList.add('hidden');

    const slotCard = createWordCardUI(item);
    slotCard.addEventListener('click', () => {
      playClickSound();
      answerSlots.removeChild(slotCard);
      originalCard.classList.remove('hidden');
      currentAnswer = currentAnswer.filter((ans) => ans.id !== item.id);
    });

    answerSlots.appendChild(slotCard);
    currentAnswer.push(item);

    if (currentAnswer.length === targetSentenceData.length) checkAnswer();
  }

  // 5. 정답 확인
  function checkAnswer() {
    stopTimer();
    const isCorrect = currentAnswer.every(
      (val, idx) => val.hanzi === targetSentenceData[idx].hanzi,
    );

    if (isCorrect) {
      document.getElementById('success-korean').innerText =
        currentDayData[currentSentenceIndex].korean;
      document.getElementById('success-chinese').innerText = currentFullChinese;

      showPopup(popupSuccess);
      playTTS(currentFullChinese);
    } else {
      handleErrorOrTimeout();
    }
  }

  function handleErrorOrTimeout() {
    stopTimer();
    mistakeTracker[currentSentenceIndex] = true;

    screenGame.classList.remove('shake-screen');
    void screenGame.offsetWidth;
    screenGame.classList.add('shake-screen');

    setTimeout(() => {
      answerSlots.innerHTML = '';
      currentAnswer = [];
      Array.from(wordBank.children).forEach((c) =>
        c.classList.remove('hidden'),
      );
      startTimer(30);
    }, 400);
  }

  // 6. 팝업 내 녹음 및 음성 제어
  btnRecordVoice.addEventListener('click', async () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      btnRecordVoice.innerText = '🎙️ 다시 녹음';
      btnRecordVoice.classList.remove('recording');
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
        mediaRecorder.onstop = () => {
          // 모바일(아이폰/안드로이드) 호환성을 위해 브라우저 기본 포맷 사용
          const audioBlob = new Blob(audioChunks, {
            type: mediaRecorder.mimeType || 'audio/webm',
          });
          myRecordedAudioUrl = URL.createObjectURL(audioBlob);
          myRecordedAudioObj = new Audio(myRecordedAudioUrl);
          btnPlayMyVoice.disabled = false;
        };
        mediaRecorder.start();
        btnRecordVoice.innerText = '🛑 멈추기';
        btnRecordVoice.classList.add('recording');
      } catch (err) {
        alert('마이크 접근이 거부되었습니다.');
      }
    }
  });

  btnPlayMyVoice.addEventListener('click', () => {
    if (myRecordedAudioObj) myRecordedAudioObj.play();
  });

  btnPlayTts.addEventListener('click', () => {
    playTTS(currentFullChinese);
  });

  btnNextSentence.addEventListener('click', () => {
    hidePopup(popupSuccess);
    window.speechSynthesis.cancel();
    currentSentenceIndex++;

    if (currentSentenceIndex < currentDayData.length) {
      loadSentence();
    } else {
      buildReviewList();
      showPopup(popupReview);
    }
  });

  // 7. 복습 리스트 생성
  function buildReviewList() {
    const reviewContainer = document.getElementById('review-list');
    reviewContainer.innerHTML = '';

    currentDayData.forEach((sentenceObj, index) => {
      const fullChinese = sentenceObj.chinese.hanzi.join('');
      const itemDiv = document.createElement('div');
      itemDiv.className = 'review-item';

      if (mistakeTracker[index]) {
        itemDiv.classList.add('mistake-highlight');
      }

      const textDiv = document.createElement('div');
      textDiv.className = 'review-text';
      textDiv.innerHTML = `<div class="r-korean">${sentenceObj.korean}</div>
                                 <div class="r-chinese">${fullChinese}</div>`;

      const playBtn = document.createElement('button');
      playBtn.className = 'icon-btn';
      playBtn.innerText = '🔊';
      playBtn.addEventListener('click', () => playTTS(fullChinese));

      itemDiv.appendChild(textDiv);
      itemDiv.appendChild(playBtn);
      reviewContainer.appendChild(itemDiv);
    });
  }

  // 8. TTS 로직
  function playTTS(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.7;

      const zhVoices = synthVoices.filter((v) => v.lang.includes('zh'));
      const femaleVoice =
        zhVoices.find((v) => /Xiaoxiao|Ting-Ting|Google/i.test(v.name)) ||
        zhVoices[0];
      if (femaleVoice) utterance.voice = femaleVoice;

      window.speechSynthesis.speak(utterance);
    }
  }

  // 9. 타이머 제어
  function startTimer(resumeTime = 30) {
    stopTimer();
    timeLeft = resumeTime;
    timerDisplay.innerText = timeLeft;

    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.innerText = timeLeft;
      if (timeLeft <= 0) handleErrorOrTimeout();
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // 10. 팝업 및 화면 유틸리티
  function showPopup(el) {
    popupOverlay.classList.remove('hidden');
    el.classList.remove('hidden');
  }
  function hidePopup(el) {
    popupOverlay.classList.add('hidden');
    el.classList.add('hidden');
  }
  function switchScreen(activeScreen) {
    document
      .querySelectorAll('.screen')
      .forEach((s) => s.classList.remove('active'));
    activeScreen.classList.add('active');
    screenIntro.classList.remove('active');
  }
});
