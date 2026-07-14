document.addEventListener('DOMContentLoaded', () => {
  // --- 화면 및 팝업 엘리먼트 ---
  const screenIntro = document.getElementById('screen-intro');
  const screenLobby = document.getElementById('screen-lobby');
  const screenGame = document.getElementById('screen-game');

  const popupOverlay = document.getElementById('popup-overlay');
  const popupIntro = document.getElementById('popup-intro');
  const popupSuccess = document.getElementById('popup-success');
  const popupReview = document.getElementById('popup-review');

  // --- 게임 내부 엘리먼트 ---
  const dayButtonsContainer = document.getElementById('day-buttons');
  const levelIndicator = document.getElementById('level-indicator');
  const timerDisplay = document.getElementById('timer');
  const koreanSentence = document.getElementById('korean-sentence');
  const answerSlots = document.getElementById('answer-slots');
  const wordBank = document.getElementById('word-bank');

  const bgmLobby = document.getElementById('bgm-lobby');

  // --- 버튼 엘리먼트 ---
  const btnCloseIntro = document.getElementById('btn-close-intro');
  const btnNextSentence = document.getElementById('btn-next-sentence');
  const btnReplayTts = document.getElementById('btn-replay-tts');
  const btnReturnLobby = document.getElementById('btn-return-lobby');
  const btnIngameLobby = document.getElementById('btn-ingame-lobby');

  // --- 게임 상태 변수 ---
  let currentDayData = [];
  let currentSentenceIndex = 0;
  let timerInterval = null;
  let timeLeft = 30;
  let targetSentenceData = [];
  let currentAnswer = [];
  let currentFullChinese = ''; // 현재 정답 문장 (TTS용)

  // --- TTS 음성 로드 ---
  let synthVoices = [];
  function loadVoices() {
    if ('speechSynthesis' in window) {
      synthVoices = window.speechSynthesis.getVoices();
    }
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }

  // 1. 인트로 터치 시 게임 소개 팝업 띄우기
  screenIntro.addEventListener('click', () => {
    showPopup(popupIntro);
  });

  // 게임 소개 팝업 닫고 로비로 진입
  btnCloseIntro.addEventListener('click', () => {
    hidePopup(popupIntro);
    switchScreen(screenLobby);
    initLobby();
    bgmLobby.play().catch((e) => console.log('BGM Play Error:', e));
  });

  // 2. 로비 초기화
  function initLobby() {
    dayButtonsContainer.innerHTML = '';
    const days = Object.keys(window.sentenceData);
    days.forEach((day) => {
      const btn = document.createElement('button');
      btn.innerText = day.toUpperCase();
      btn.addEventListener('click', () => startGame(day));
      dayButtonsContainer.appendChild(btn);
    });
  }

  // 인게임 도중 로비로 돌아가기
  btnIngameLobby.addEventListener('click', () => {
    stopTimer();
    switchScreen(screenLobby);
    bgmLobby.play().catch((e) => console.log(e));
  });

  // 결과(복습) 팝업에서 로비로 돌아가기
  btnReturnLobby.addEventListener('click', () => {
    hidePopup(popupReview);
    switchScreen(screenLobby);
    bgmLobby.play().catch((e) => console.log(e));
  });

  // 3. 게임 시작
  function startGame(dayKey) {
    currentDayData = window.sentenceData[dayKey];
    currentSentenceIndex = 0;
    bgmLobby.pause();
    bgmLobby.currentTime = 0;

    switchScreen(screenGame);
    loadSentence();
  }

  // 4. 문장 로드 로직
  function loadSentence() {
    const sentenceObj = currentDayData[currentSentenceIndex];

    // UI 리셋
    answerSlots.innerHTML = '';
    wordBank.innerHTML = '';
    currentAnswer = [];
    screenGame.classList.remove('shake-screen');

    // 데이터 세팅
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

    // 카드 섞기
    let shuffledWords = [...targetSentenceData];
    shuffledWords.sort(() => Math.random() - 0.5);

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

    const pinyinDiv = document.createElement('div');
    pinyinDiv.className = 'pinyin';
    pinyinDiv.innerText = item.pinyin;

    const hanziDiv = document.createElement('div');
    hanziDiv.className = 'hanzi';
    hanziDiv.innerText = item.hanzi;

    card.appendChild(pinyinDiv);
    card.appendChild(hanziDiv);
    return card;
  }

  // 5. 단어 카드 터치 로직
  function handleWordClick(item, originalCard) {
    if (originalCard.classList.contains('hidden')) return;

    originalCard.classList.add('hidden');
    const slotCard = createWordCardUI(item);

    slotCard.addEventListener('click', () => {
      answerSlots.removeChild(slotCard);
      originalCard.classList.remove('hidden');
      const idx = currentAnswer.findIndex((ans) => ans.id === item.id);
      if (idx > -1) currentAnswer.splice(idx, 1);
    });

    answerSlots.appendChild(slotCard);
    currentAnswer.push(item);

    if (currentAnswer.length === targetSentenceData.length) {
      checkAnswer();
    }
  }

  // 6. 정답 확인 및 오답/시간초과 처리
  function checkAnswer() {
    stopTimer();
    const isCorrect = currentAnswer.every(
      (val, index) => val.hanzi === targetSentenceData[index].hanzi,
    );

    if (isCorrect) {
      // 정답 처리 -> 팝업 띄우고 음성 재생
      document.getElementById('success-korean').innerText =
        currentDayData[currentSentenceIndex].korean;
      document.getElementById('success-chinese').innerText = currentFullChinese;

      showPopup(popupSuccess);
      playTTS(currentFullChinese);
    } else {
      // 오답 처리
      handleErrorOrTimeout();
    }
  }

  function handleErrorOrTimeout() {
    stopTimer();
    // 화면 흔들기
    screenGame.classList.remove('shake-screen');
    void screenGame.offsetWidth; // reflow 트리거 (애니메이션 재시작 위함)
    screenGame.classList.add('shake-screen');

    setTimeout(() => {
      resetCurrentSentence();
      startTimer(30);
    }, 400); // 흔들림 직후 초기화
  }

  function resetCurrentSentence() {
    answerSlots.innerHTML = '';
    currentAnswer = [];
    Array.from(wordBank.children).forEach((card) =>
      card.classList.remove('hidden'),
    );
  }

  // 정답 팝업 내 조작 버튼
  btnReplayTts.addEventListener('click', () => {
    playTTS(currentFullChinese);
  });

  btnNextSentence.addEventListener('click', () => {
    hidePopup(popupSuccess);
    currentSentenceIndex++;

    if (currentSentenceIndex < currentDayData.length) {
      loadSentence();
    } else {
      // Day 클리어 시 복습 팝업 띄우기
      buildReviewList();
      showPopup(popupReview);
    }
  });

  // 7. 복습 리스트 생성 로직
  function buildReviewList() {
    const reviewContainer = document.getElementById('review-list');
    reviewContainer.innerHTML = ''; // 초기화

    currentDayData.forEach((sentenceObj) => {
      const fullChinese = sentenceObj.chinese.hanzi.join('');

      const itemDiv = document.createElement('div');
      itemDiv.className = 'review-item';

      const textDiv = document.createElement('div');
      textDiv.className = 'review-text';
      textDiv.innerHTML = `<div class="r-korean">${sentenceObj.korean}</div>
                                 <div class="r-chinese">${fullChinese}</div>`;

      const playBtn = document.createElement('button');
      playBtn.className = 'icon-btn small';
      playBtn.innerText = '🔊';
      playBtn.addEventListener('click', () => playTTS(fullChinese));

      itemDiv.appendChild(textDiv);
      itemDiv.appendChild(playBtn);
      reviewContainer.appendChild(itemDiv);
    });
  }

  // 8. 중국어 TTS 로직 (0.7배속, 여성음성 우선)
  function playTTS(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // 겹침 방지
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.7;

      const zhVoices = synthVoices.filter((v) => v.lang.includes('zh'));
      const femaleVoice =
        zhVoices.find((v) => /Xiaoxiao|Ting-Ting|Google/i.test(v.name)) ||
        zhVoices[0];

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      window.speechSynthesis.speak(utterance);
    }
  }

  // 9. 타이머 로직
  function startTimer(resumeTime = 30) {
    stopTimer();
    timeLeft = resumeTime;
    timerDisplay.innerText = timeLeft;

    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.innerText = timeLeft;

      if (timeLeft <= 0) {
        handleErrorOrTimeout();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // 10. 유틸리티 함수 (팝업 및 화면 전환)
  function showPopup(popupElement) {
    popupOverlay.classList.remove('hidden');
    popupElement.classList.remove('hidden');
  }

  function hidePopup(popupElement) {
    popupOverlay.classList.add('hidden');
    popupElement.classList.add('hidden');
  }

  function switchScreen(activeScreen) {
    document
      .querySelectorAll('.screen')
      .forEach((s) => s.classList.remove('active'));
    activeScreen.classList.add('active');
    screenIntro.classList.remove('active'); // 인트로는 명시적으로 끄기
  }
});
