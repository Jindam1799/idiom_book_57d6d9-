/* =========================================================
   진담 덩어리훈련 캐릭터 (편마다 다른 캐릭터, 표정 5가지)
   - 관용구: 시안 아기고래  (body data-mascot="whale")
   - 조동사: 노랑 병아리    (body data-mascot="chick")
   - 말버릇: 주황 아기여우  (body data-mascot="fox")
   표정: idle(기본) · happy(정답) · sad(오답) · think(고민) · cheer(축하)
   ========================================================= */
(function () {
  const INK = '#3b2a2a';
  const BLUSH = '#ff8fa3';

  // ---------- 공통 얼굴 ----------
  function eyes(mood, l, r, s = 1) {
    const [lx, ly] = l;
    const [rx, ry] = r;
    if (mood === 'happy' || mood === 'cheer') {
      // ^ ^ 웃는 눈
      const arc = (x, y) =>
        `<path d="M${x - 6 * s} ${y + 2 * s} Q${x} ${y - 6 * s} ${x + 6 * s} ${y + 2 * s}" fill="none" stroke="${INK}" stroke-width="${3.4 * s}" stroke-linecap="round"/>`;
      return arc(lx, ly) + arc(rx, ry);
    }
    if (mood === 'sad') {
      // 처진 눈썹 + 작은 눈 + 눈물
      const one = (x, y, dir) =>
        `<ellipse cx="${x}" cy="${y + 1 * s}" rx="${4 * s}" ry="${4.4 * s}" fill="${INK}"/>` +
        `<circle cx="${x + 1.4 * s}" cy="${y - 0.6 * s}" r="${1.4 * s}" fill="#fff"/>` +
        `<path d="M${x - 6 * s * dir} ${y - 6 * s} L${x + 5 * s * dir} ${y - 10 * s}" stroke="${INK}" stroke-width="${2.4 * s}" stroke-linecap="round"/>`;
      return (
        one(lx, ly, 1) +
        one(rx, ry, -1) +
        `<path d="M${rx + 3 * s} ${ry + 6 * s} C${rx - 1 * s} ${ry + 12 * s} ${rx + 1 * s} ${ry + 16 * s} ${rx + 4 * s} ${ry + 16 * s} C${rx + 7 * s} ${ry + 16 * s} ${rx + 8 * s} ${ry + 12 * s} ${rx + 3 * s} ${ry + 6 * s}Z" fill="#7cc7ff"/>`
      );
    }
    const dx = mood === 'think' ? 1.8 * s : 0;
    const dy = mood === 'think' ? -1.8 * s : 0;
    const one = (x, y) =>
      `<ellipse cx="${x}" cy="${y}" rx="${5 * s}" ry="${6 * s}" fill="${INK}"/>` +
      `<circle cx="${x + 1.8 * s + dx}" cy="${y - 2.2 * s + dy}" r="${2 * s}" fill="#fff"/>` +
      `<circle cx="${x - 1.6 * s + dx}" cy="${y + 2.4 * s + dy}" r="${0.9 * s}" fill="#fff"/>`;
    return one(lx, ly) + one(rx, ry);
  }
  function mouth(mood, x, y, s = 1) {
    if (mood === 'happy' || mood === 'cheer') {
      return (
        `<path d="M${x - 7 * s} ${y - 1 * s} Q${x} ${y + 10 * s} ${x + 7 * s} ${y - 1 * s} Z" fill="${INK}"/>` +
        `<path d="M${x - 3.5 * s} ${y + 4 * s} Q${x} ${y + 1 * s} ${x + 3.5 * s} ${y + 4 * s} Q${x} ${y + 7.5 * s} ${x - 3.5 * s} ${y + 4 * s}Z" fill="#ff7b8f"/>`
      );
    }
    if (mood === 'sad') {
      return `<path d="M${x - 5 * s} ${y + 4 * s} Q${x} ${y - 2 * s} ${x + 5 * s} ${y + 4 * s}" fill="none" stroke="${INK}" stroke-width="${2.6 * s}" stroke-linecap="round"/>`;
    }
    if (mood === 'think') {
      return `<ellipse cx="${x + 2 * s}" cy="${y + 1 * s}" rx="${2.6 * s}" ry="${3 * s}" fill="${INK}"/>`;
    }
    // idle: ω 입
    return `<path d="M${x - 6 * s} ${y} Q${x - 3 * s} ${y + 4.5 * s} ${x} ${y} Q${x + 3 * s} ${y + 4.5 * s} ${x + 6 * s} ${y}" fill="none" stroke="${INK}" stroke-width="${2.6 * s}" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  function blush(l, r, s = 1) {
    return (
      `<ellipse cx="${l[0]}" cy="${l[1]}" rx="${6 * s}" ry="${3.6 * s}" fill="${BLUSH}" opacity=".55"/>` +
      `<ellipse cx="${r[0]}" cy="${r[1]}" rx="${6 * s}" ry="${3.6 * s}" fill="${BLUSH}" opacity=".55"/>`
    );
  }
  function extras(mood, color) {
    if (mood === 'think') {
      return `<g class="m-float"><circle cx="104" cy="20" r="12" fill="#fff" stroke="${color}" stroke-width="2.5"/><text x="104" y="26" text-anchor="middle" font-size="17" font-weight="900" fill="${color}" font-family="sans-serif">?</text></g>`;
    }
    if (mood === 'cheer') {
      const star = (x, y, r, c) =>
        `<path d="M${x} ${y - r} L${x + r * 0.3} ${y - r * 0.3} L${x + r} ${y} L${x + r * 0.3} ${y + r * 0.3} L${x} ${y + r} L${x - r * 0.3} ${y + r * 0.3} L${x - r} ${y} L${x - r * 0.3} ${y - r * 0.3}Z" fill="${c}"/>`;
      return `<g class="m-sparkle">${star(12, 24, 8, '#ffd23f')}${star(108, 30, 6, '#ff8fa3')}${star(104, 96, 7, '#ffd23f')}${star(14, 92, 5, '#7cc7ff')}</g>`;
    }
    if (mood === 'happy') {
      return `<g class="m-sparkle"><path d="M10 40 l4 -4 M12 50 l6 0 M108 40 l-4 -4 M106 50 l-6 0" stroke="${color}" stroke-width="3" stroke-linecap="round"/></g>`;
    }
    return '';
  }

  // ---------- 캐릭터 ----------
  const CHARS = {
    // 관용구 — 아기고래 (시안)
    whale(mood) {
      const body = '#57d6d9';
      const dark = '#2fbabf';
      const belly = '#e6fbfb';
      return (
        // 물줄기
        `<g class="m-spout"><path d="M58 33 C58 24 52 19 46 16" fill="none" stroke="#8fe6f7" stroke-width="4" stroke-linecap="round"/>` +
        `<path d="M58 33 C58 24 64 19 70 16" fill="none" stroke="#8fe6f7" stroke-width="4" stroke-linecap="round"/>` +
        `<circle cx="44" cy="12" r="3.5" fill="#8fe6f7"/><circle cx="72" cy="12" r="3.5" fill="#8fe6f7"/><circle cx="58" cy="10" r="3" fill="#b9f0fa"/></g>` +
        // 꼬리
        `<path d="M92 76 C104 72 108 62 106 50 C112 50 118 46 118 38 C110 42 104 40 100 36 C100 46 98 58 88 66 Z" fill="${dark}"/>` +
        // 몸
        `<path d="M14 72 C14 46 36 32 60 32 C86 32 102 50 102 72 C102 94 84 104 58 104 C32 104 14 94 14 72Z" fill="${body}"/>` +
        // 배
        `<path d="M22 84 C32 100 80 104 96 86 C94 98 78 104 58 104 C38 104 26 96 22 84Z" fill="${belly}"/>` +
        `<path d="M30 92 L34 96 M44 97 L46 101 M60 99 L60 103 M74 97 L72 101" stroke="#b7ecee" stroke-width="2" stroke-linecap="round"/>` +
        // 지느러미
        `<path d="M30 86 C22 92 20 100 26 102 C32 100 36 94 38 88 Z" fill="${dark}"/>` +
        // 광택
        `<path d="M30 52 C36 44 44 40 52 39" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/>` +
        blush([34, 76], [80, 76]) +
        eyes(mood, [44, 66], [70, 66]) +
        mouth(mood, 57, 76) +
        extras(mood, dark)
      );
    },

    // 조동사 — 병아리 (노랑)
    chick(mood) {
      const body = '#f4c84d';
      const light = '#ffe08a';
      const dark = '#d99a00';
      const beakC = '#ff9a3c';
      let beak;
      if (mood === 'happy' || mood === 'cheer') {
        beak =
          `<path d="M50 72 L60 66 L70 72 Z" fill="${beakC}"/>` +
          `<path d="M52 75 L60 86 L68 75 Z" fill="#ff7b5c"/>`;
      } else if (mood === 'sad') {
        beak = `<path d="M52 76 L60 72 L68 76 L60 82 Z" fill="${beakC}"/>`;
      } else if (mood === 'think') {
        beak = `<path d="M55 74 L61 70 L67 74 L61 78 Z" fill="${beakC}"/>`;
      } else {
        beak = `<path d="M51 72 L60 67 L69 72 L60 79 Z" fill="${beakC}"/><path d="M51 72 L69 72" stroke="#e07a1f" stroke-width="1.6"/>`;
      }
      return (
        // 발
        `<path d="M46 104 l-6 8 M46 104 l0 9 M46 104 l6 8 M74 104 l-6 8 M74 104 l0 9 M74 104 l6 8" stroke="${beakC}" stroke-width="3.4" stroke-linecap="round"/>` +
        // 몸
        `<ellipse cx="60" cy="70" rx="40" ry="38" fill="${body}"/>` +
        `<ellipse cx="60" cy="84" rx="26" ry="18" fill="${light}"/>` +
        // 머리 깃털
        `<path d="M58 34 C52 22 56 14 62 18 C60 24 62 28 60 34 Z" fill="${dark}"/>` +
        `<path d="M62 34 C66 24 74 22 76 28 C70 28 66 30 62 34 Z" fill="${body}"/>` +
        // 날개
        `<path d="M22 74 C12 70 10 84 18 90 C24 92 28 86 28 80 Z" fill="${dark}"/>` +
        `<path d="M98 74 C108 70 110 84 102 90 C96 92 92 86 92 80 Z" fill="${dark}"/>` +
        `<path d="M34 46 C40 40 48 37 56 36" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/>` +
        blush([38, 74], [82, 74]) +
        eyes(mood, [46, 62], [74, 62]) +
        beak +
        extras(mood, dark)
      );
    },

    // 말버릇 — 아기여우 (주황)
    fox(mood) {
      const body = '#f09846';
      const dark = '#d9772a';
      const cream = '#fff4e6';
      const tip = '#5a3a2a';
      return (
        // 꼬리
        `<path d="M86 96 C108 96 118 80 112 62 C108 74 98 80 86 82 Z" fill="${body}"/>` +
        `<path d="M112 62 C108 72 102 76 96 78 C104 74 110 68 112 62 Z" fill="${cream}"/>` +
        // 귀
        `<path d="M22 50 L26 14 L52 38 Z" fill="${body}"/>` +
        `<path d="M98 50 L94 14 L68 38 Z" fill="${body}"/>` +
        `<path d="M27 42 L29 22 L44 36 Z" fill="${cream}"/>` +
        `<path d="M93 42 L91 22 L76 36 Z" fill="${cream}"/>` +
        `<path d="M26 14 L24 26 L33 21 Z" fill="${tip}"/>` +
        `<path d="M94 14 L96 26 L87 21 Z" fill="${tip}"/>` +
        // 몸(아래)
        `<ellipse cx="60" cy="100" rx="24" ry="12" fill="${dark}"/>` +
        // 얼굴
        `<path d="M14 66 C14 42 36 30 60 30 C84 30 106 42 106 66 C106 88 86 100 60 100 C34 100 14 88 14 66Z" fill="${body}"/>` +
        // 볼·주둥이 (크림)
        `<path d="M18 74 C26 70 40 70 50 78 C54 82 56 86 60 86 C64 86 66 82 70 78 C80 70 94 70 102 74 C98 90 82 100 60 100 C38 100 22 90 18 74Z" fill="${cream}"/>` +
        `<path d="M34 46 C40 40 48 36 56 35" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".5"/>` +
        blush([30, 76], [90, 76]) +
        eyes(mood, [44, 62], [76, 62]) +
        // 코
        `<ellipse cx="60" cy="76" rx="5" ry="3.6" fill="${tip}"/>` +
        mouth(mood, 60, 84, 0.85) +
        extras(mood, dark)
      );
    },
  };

  function kind() {
    return (document.body && document.body.dataset.mascot) || 'whale';
  }
  function svg(mood = 'idle', k = kind()) {
    const draw = CHARS[k] || CHARS.whale;
    return `<svg class="mascot-svg mood-${mood}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${draw(mood)}</svg>`;
  }
  // el 안에 캐릭터 그리기. duration(ms)을 주면 그 뒤 기본(또는 back) 표정으로 돌아감
  const timers = new WeakMap();
  function render(el, mood = 'idle', duration = 0, back = 'idle') {
    if (!el) return;
    clearTimeout(timers.get(el));
    el.innerHTML = svg(mood);
    el.dataset.mood = mood;
    el.classList.remove('m-bump');
    void el.offsetWidth;
    if (mood !== 'idle') el.classList.add('m-bump');
    if (duration) timers.set(el, setTimeout(() => render(el, back), duration));
  }
  function renderAll() {
    document.querySelectorAll('[data-mascot-slot]').forEach((el) => render(el, el.dataset.mascotSlot || 'idle'));
  }
  window.Mascot = { svg, render, renderAll, kinds: Object.keys(CHARS) };
})();
