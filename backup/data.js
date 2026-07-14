const sentenceData = {
  day1: [
    // 1번
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '중국어를 말해요.',
      chinese: {
        hanzi: ['说', '汉语'],
        pinyin: ['shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '중국어를 말할 줄 알아요',
      chinese: {
        hanzi: ['会', '说', '汉语'],
        pinyin: ['huì', 'shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: 'A: 누가 중국어를 말할 줄 아나요?',
      chinese: {
        hanzi: ['谁', '会', '说', '汉语'],
        pinyin: ['shéi', 'huì', 'shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: true,
      korean: 'B: 저는 중국어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['我', '会', '说', '汉语'],
        pinyin: ['wǒ', 'huì', 'shuō', 'Hànyǔ'],
      },
    },

    // 2번
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '등산(하러) 가요.',
      chinese: {
        hanzi: ['去', '爬', '山'],
        pinyin: ['qù', 'pá', 'shān'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '내일 등산(하러) 가요.',
      chinese: {
        hanzi: ['明天', '去', '爬', '山'],
        pinyin: ['míngtiān', 'qù', 'pá', 'shān'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '저는 …할 계획이에요(…하려고 해요)',
      chinese: {
        hanzi: ['我', '打算……'],
        pinyin: ['wǒ', 'dǎsuàn'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: 'A: 저는 내일 등산 갈 계획이에요.',
      chinese: {
        hanzi: ['我', '打算', '明天', '去', '爬', '山'],
        pinyin: ['wǒ', 'dǎsuàn', 'míngtiān', 'qù', 'pá', 'shān'],
      },
    },
    {
      id: 'sentence2',
      level: 5,
      isFinal: false,
      korean: '비가 와요.',
      chinese: {
        hanzi: ['下雨'],
        pinyin: ['xià yǔ'],
      },
    },
    {
      id: 'sentence2',
      level: 6,
      isFinal: false,
      korean: '내일 비가 와요.',
      chinese: {
        hanzi: ['明天', '下雨'],
        pinyin: ['míngtiān', 'xià yǔ'],
      },
    },
    {
      id: 'sentence2',
      level: 7,
      isFinal: true,
      korean: 'B: 내일 비가 올 거예요.',
      chinese: {
        hanzi: ['明天', '会', '下', '雨'],
        pinyin: ['míngtiān', 'huì', 'xià', 'yǔ'],
      },
    },

    // 3번
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '새 차를 사요.',
      chinese: {
        hanzi: ['买', '新车'],
        pinyin: ['mǎi', 'xīn chē'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '새 차를 샀어요.',
      chinese: {
        hanzi: ['买了', '新车'],
        pinyin: ['mǎi le', 'xīn chē'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '그녀는 새 차를 샀어요.',
      chinese: {
        hanzi: ['她', '买了', '新车'],
        pinyin: ['tā', 'mǎi le', 'xīn chē'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: true,
      korean: 'A: 그녀는 새 차를 샀나요?',
      chinese: {
        hanzi: ['她', '买了', '新车', '吗'],
        pinyin: ['tā', 'mǎi le', 'xīn chē', 'ma'],
      },
    },
    {
      id: 'sentence3',
      level: 5,
      isFinal: false,
      korean: '운전을 할 줄 알아요.',
      chinese: {
        hanzi: ['会', '开'],
        pinyin: ['huì', 'kāi'],
      },
    },
    {
      id: 'sentence3',
      level: 6,
      isFinal: false,
      korean: '운전을 할 줄 몰라요.',
      chinese: {
        hanzi: ['不会', '开'],
        pinyin: ['bú huì', 'kāi'],
      },
    },
    {
      id: 'sentence3',
      level: 7,
      isFinal: false,
      korean: '차조차도 …… ',
      chinese: {
        hanzi: ['连车都……'],
        pinyin: ['lián chē dōu'],
      },
    },
    {
      id: 'sentence3',
      level: 8,
      isFinal: false,
      korean: '차조차도 운전할 줄 몰라요.',
      chinese: {
        hanzi: ['连车都', '不会', '开'],
        pinyin: ['lián chē dōu', 'bú huì', 'kāi'],
      },
    },
    {
      id: 'sentence3',
      level: 9,
      isFinal: false,
      korean: '그녀는 차조차도 운전할 줄 몰라요.',
      chinese: {
        hanzi: ['她', '连车都', '不会', '开'],
        pinyin: ['tā', 'lián chē dōu', 'bú huì', 'kāi'],
      },
    },
    {
      id: 'sentence3',
      level: 10,
      isFinal: true,
      korean: 'B: 아니요, 그녀는 차조차도 운전할 줄 몰라요.',
      chinese: {
        hanzi: ['没有啊', '她', '连车都', '不会', '开'],
        pinyin: ['méiyǒu a', 'tā', 'lián chē dōu', 'bú huì', 'kāi'],
      },
    },

    // 4번
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '저의 생일.',
      chinese: {
        hanzi: ['我的', '生日'],
        pinyin: ['wǒ de', 'shēngrì'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '저의 생일을 잊어버렸어요.',
      chinese: {
        hanzi: ['忘了', '我的', '生日'],
        pinyin: ['wàng le', 'wǒ de', 'shēngrì'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '그는 저의 생일을 잊어버렸어요.',
      chinese: {
        hanzi: ['他', '忘了', '我的', '生日'],
        pinyin: ['tā', 'wàng le', 'wǒ de', 'shēngrì'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: 'A: 그는 저의 생일을 잊어버린 거죠?',
      chinese: {
        hanzi: ['他', '忘了', '我的', '生日', '吧'],
        pinyin: ['tā', 'wàng le', 'wǒ de', 'shēngrì', 'ba'],
      },
    },
    {
      id: 'sentence4',
      level: 5,
      isFinal: false,
      korean: '잊다.',
      chinese: {
        hanzi: ['忘记'],
        pinyin: ['wàngjì'],
      },
    },
    {
      id: 'sentence4',
      level: 6,
      isFinal: false,
      korean: '잊을 거예요.',
      chinese: {
        hanzi: ['会', '忘记', '的'],
        pinyin: ['huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence4',
      level: 7,
      isFinal: false,
      korean: '잊지 않을 거에요.',
      chinese: {
        hanzi: ['不会', '忘记', '的'],
        pinyin: ['bú huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence4',
      level: 8,
      isFinal: true,
      korean: 'B: 그는 잊지 않을 거에요.',
      chinese: {
        hanzi: ['他', '不会', '忘记', '的'],
        pinyin: ['tā', 'bú huì', 'wàngjì', 'de'],
      },
    },

    // 5번
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '웃었어요.',
      chinese: {
        hanzi: ['笑了'],
        pinyin: ['xiào le'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '방금 웃었어요.',
      chinese: {
        hanzi: ['刚才', '笑', '了'],
        pinyin: ['gāngcái', 'xiào', 'le'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: 'A: 그녀가 방금 웃었어요.',
      chinese: {
        hanzi: ['她', '刚才', '笑', '了'],
        pinyin: ['tā', 'gāngcái', 'xiào', 'le'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: false,
      korean: '한국어를 알아들어요.',
      chinese: {
        hanzi: ['听懂', '韩语'],
        pinyin: ['tīngdǒng', 'Hányǔ'],
      },
    },
    {
      id: 'sentence5',
      level: 5,
      isFinal: false,
      korean: '한국어를 알아들을 수 있어요.',
      chinese: {
        hanzi: ['能', '听懂', '韩语'],
        pinyin: ['néng', 'tīngdǒng', 'Hányǔ'],
      },
    },
    {
      id: 'sentence5',
      level: 6,
      isFinal: true,
      korean: 'B: 그녀는 한국어를 알아들을 수 있어요.',
      chinese: {
        hanzi: ['她', '能', '听懂', '韩语'],
        pinyin: ['tā', 'néng', 'tīngdǒng', 'Hányǔ'],
      },
    },
  ],
  day2: [
    // 6번
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '신분증을 두고 오다(가져오는 것을 까먹다).',
      chinese: {
        hanzi: ['忘带', '身份证'],
        pinyin: ['wàngdài', 'shēnfènzhèng'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '신분증을 두고 왔어요.',
      chinese: {
        hanzi: ['忘带身份证', '了'],
        pinyin: ['wàngdài shēnfènzhèng', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: true,
      korean: 'A: 저는 신분증을 두고 왔어요.',
      chinese: {
        hanzi: ['我', '忘带', '身份证', '了'],
        pinyin: ['wǒ', 'wàngdài', 'shēnfènzhèng', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '들어갈 수 있어요.',
      chinese: {
        hanzi: ['能进'],
        pinyin: ['néng jìn'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '그래야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['才', '能', '进'],
        pinyin: ['cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: false,
      korean: '신분증이 있어요.',
      chinese: {
        hanzi: ['有', '身份证'],
        pinyin: ['yǒu', 'shēnfènzhèng'],
      },
    },
    {
      id: 'sentence6',
      level: 7,
      isFinal: false,
      korean: '신분증이 있어야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['有', '身份证', '才', '能', '进'],
        pinyin: ['yǒu', 'shēnfènzhèng', 'cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence6',
      level: 8,
      isFinal: false,
      korean: '어떡하죠? 신분증이 있어야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['怎么办', '有', '身份证', '才', '能', '进'],
        pinyin: ['zěnmebàn', 'yǒu', 'shēnfènzhèng', 'cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence6',
      level: 9,
      isFinal: true,
      korean: 'B: 그럼 어떡하죠? 신분증이 있어야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['那', '怎么办', '有', '身份证', '才', '能', '进'],
        pinyin: ['nà', 'zěnmebàn', 'yǒu', 'shēnfènzhèng', 'cái', 'néng', 'jìn'],
      },
    },

    // 7번
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '안 왔어요.',
      chinese: {
        hanzi: ['没来'],
        pinyin: ['méi lái'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '왜 안 왔어요?',
      chinese: {
        hanzi: ['怎么', '没', '来'],
        pinyin: ['zěnme', 'méi', 'lái'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '그는 왜 안 왔어요?',
      chinese: {
        hanzi: ['他', '怎么', '没', '来'],
        pinyin: ['tā', 'zěnme', 'méi', 'lái'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: true,
      korean: 'A: 오늘 그는 왜 안 왔어요?',
      chinese: {
        hanzi: ['今天', '他', '怎么', '没', '来'],
        pinyin: ['jīntiān', 'tā', 'zěnme', 'méi', 'lái'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: false,
      korean: '올 수 있어요.',
      chinese: {
        hanzi: ['能来'],
        pinyin: ['néng lái'],
      },
    },
    {
      id: 'sentence7',
      level: 6,
      isFinal: false,
      korean: '올 수 없어요.',
      chinese: {
        hanzi: ['不能', '来'],
        pinyin: ['bù néng', 'lái'],
      },
    },
    {
      id: 'sentence7',
      level: 7,
      isFinal: false,
      korean: '다쳤어요.',
      chinese: {
        hanzi: ['受伤了'],
        pinyin: ['shòushāng le'],
      },
    },
    {
      id: 'sentence7',
      level: 8,
      isFinal: false,
      korean: '발을 다쳤어요.',
      chinese: {
        hanzi: ['脚', '受伤', '了'],
        pinyin: ['jiǎo', 'shòushāng', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 9,
      isFinal: false,
      korean: '그는 발을 다쳤어요.',
      chinese: {
        hanzi: ['他', '脚受伤', '了'],
        pinyin: ['tā', 'jiǎo shòushāng', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 10,
      isFinal: true,
      korean: 'B: 그는 발을 다쳐서 올 수 없어요.',
      chinese: {
        hanzi: ['他', '脚', '受伤', '了', '不能', '来'],
        pinyin: ['tā', 'jiǎo', 'shòushāng', 'le', 'bù néng', 'lái'],
      },
    },

    // 8번
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '잠깐 놀아요.',
      chinese: {
        hanzi: ['玩(儿)', '一会儿'],
        pinyin: ['wán(r)', 'yíhuìr'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '잠깐 놀아도 돼요.',
      chinese: {
        hanzi: ['可以', '玩(儿)', '一会儿'],
        pinyin: ['kěyǐ', 'wán(r)', 'yíhuìr'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '잠깐 놀아도 되죠?',
      chinese: {
        hanzi: ['可以', '玩(儿)', '一会儿', '吧'],
        pinyin: ['kěyǐ', 'wán(r)', 'yíhuìr', 'ba'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '나갔어요.',
      chinese: {
        hanzi: ['出去了'],
        pinyin: ['chūqù le'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '방금 나갔어요.',
      chinese: {
        hanzi: ['刚', '出去', '了'],
        pinyin: ['gāng', 'chūqù', 'le'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: false,
      korean: '선생님은 방금 나갔어요.',
      chinese: {
        hanzi: ['老师', '刚', '出去', '了'],
        pinyin: ['lǎoshī', 'gāng', 'chūqù', 'le'],
      },
    },
    {
      id: 'sentence8',
      level: 7,
      isFinal: true,
      korean: 'A: 선생님은 방금 나갔어요. 잠깐 놀아도 되죠?',
      chinese: {
        hanzi: ['老师', '刚', '出去', '了', '可以', '玩(儿)', '一会儿', '吧'],
        pinyin: [
          'lǎoshī',
          'gāng',
          'chūqù',
          'le',
          'kěyǐ',
          'wán(r)',
          'yíhuìr',
          'ba',
        ],
      },
    },
    {
      id: 'sentence8',
      level: 8,
      isFinal: false,
      korean: '휴대폰을 해요.',
      chinese: {
        hanzi: ['玩(儿)', '手机'],
        pinyin: ['wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence8',
      level: 9,
      isFinal: false,
      korean: '휴대폰 하면 안 돼요.',
      chinese: {
        hanzi: ['不能', '玩(儿)', '手机'],
        pinyin: ['bù néng', 'wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence8',
      level: 10,
      isFinal: true,
      korean: 'B: 안 돼요, 휴대폰 하면 안 돼요.',
      chinese: {
        hanzi: ['不行', '不能', '玩(儿)', '手机'],
        pinyin: ['bù xíng', 'bù néng', 'wán(r)', 'shǒujī'],
      },
    },

    // 9번
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '자신이 있어.',
      chinese: {
        hanzi: ['有信心'],
        pinyin: ['yǒu xìnxīn'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '자신이 없어.',
      chinese: {
        hanzi: ['没有', '信心'],
        pinyin: ['méiyǒu', 'xìnxīn'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: 'A: 나는 자신이 없어.',
      chinese: {
        hanzi: ['我', '没有', '信心'],
        pinyin: ['wǒ', 'méiyǒu', 'xìnxīn'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: false,
      korean: '해내다.',
      chinese: {
        hanzi: ['做到'],
        pinyin: ['zuòdào'],
      },
    },
    {
      id: 'sentence9',
      level: 5,
      isFinal: false,
      korean: '해낼 수 있다.',
      chinese: {
        hanzi: ['能够', '做到'],
        pinyin: ['nénggòu', 'zuòdào'],
      },
    },
    {
      id: 'sentence9',
      level: 6,
      isFinal: false,
      korean: '너는 해낼 수 있어.',
      chinese: {
        hanzi: ['你', '能够', '做到'],
        pinyin: ['nǐ', 'nénggòu', 'zuòdào'],
      },
    },
    {
      id: 'sentence9',
      level: 7,
      isFinal: false,
      korean: '자신을 믿어.',
      chinese: {
        hanzi: ['相信', '自己'],
        pinyin: ['xiāngxìn', 'zìjǐ'],
      },
    },
    {
      id: 'sentence9',
      level: 8,
      isFinal: false,
      korean: '자신을 믿어야 해.',
      chinese: {
        hanzi: ['要', '相信', '自己'],
        pinyin: ['yào', 'xiāngxìn', 'zìjǐ'],
      },
    },
    {
      id: 'sentence9',
      level: 9,
      isFinal: true,
      korean: 'B: 너는 충분히 해낼 수 있어. 자신을 믿어야 해.',
      chinese: {
        hanzi: ['你', '能够', '做到', '要', '相信', '自己'],
        pinyin: ['nǐ', 'nénggòu', 'zuòdào', 'yào', 'xiāngxìn', 'zìjǐ'],
      },
    },

    // 10번
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '자리(사람) 있어요.',
      chinese: {
        hanzi: ['有人'],
        pinyin: ['yǒu rén'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '여기 자리(사람) 있어요.',
      chinese: {
        hanzi: ['这儿', '有', '人'],
        pinyin: ['zhèr', 'yǒu', 'rén'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: 'A: 여기 자리(사람) 있나요?',
      chinese: {
        hanzi: ['这儿', '有', '人', '吗'],
        pinyin: ['zhèr', 'yǒu', 'rén', 'ma'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '여기 앉아요.',
      chinese: {
        hanzi: ['坐', '这儿'],
        pinyin: ['zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: false,
      korean: '여기 앉아도 돼요.',
      chinese: {
        hanzi: ['可以', '坐', '这儿'],
        pinyin: ['kěyǐ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence10',
      level: 6,
      isFinal: false,
      korean: '당신은 여기 앉아도 돼요.',
      chinese: {
        hanzi: ['你', '可以', '坐', '这儿'],
        pinyin: ['nǐ', 'kěyǐ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence10',
      level: 7,
      isFinal: false,
      korean: '사람 없어요(빈자리예요).',
      chinese: {
        hanzi: ['没有', '人'],
        pinyin: ['méiyǒu', 'rén'],
      },
    },
    {
      id: 'sentence10',
      level: 8,
      isFinal: false,
      korean: '여기 사람 없어요(빈자리예요).',
      chinese: {
        hanzi: ['这儿', '没有', '人'],
        pinyin: ['zhèr', 'méiyǒu', 'rén'],
      },
    },
    {
      id: 'sentence10',
      level: 9,
      isFinal: true,
      korean: 'B: 당신은 여기 앉아도 돼요. 여기 사람 없어요(빈자리예요).',
      chinese: {
        hanzi: ['你', '可以', '坐', '这儿', '没有', '人'],
        pinyin: ['nǐ', 'kěyǐ', 'zuò', 'zhèr', 'méiyǒu', 'rén'],
      },
    },
  ],
  day3: [
    // 11번
    {
      id: 'sentence11',
      level: 1,
      isFinal: false,
      korean: '담배 피워요.',
      chinese: {
        hanzi: ['抽烟'],
        pinyin: ['chōu yān'],
      },
    },
    {
      id: 'sentence11',
      level: 2,
      isFinal: false,
      korean: '담배 피워도 돼요.',
      chinese: {
        hanzi: ['可以', '抽烟'],
        pinyin: ['kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence11',
      level: 3,
      isFinal: false,
      korean: '담배 피면 안 돼요.',
      chinese: {
        hanzi: ['不可以', '抽烟'],
        pinyin: ['bù kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence11',
      level: 4,
      isFinal: true,
      korean: 'A: 여기서 담배 피면 안 돼요.',
      chinese: {
        hanzi: ['这里', '不可以', '抽烟'],
        pinyin: ['zhèlǐ', 'bù kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence11',
      level: 5,
      isFinal: true,
      korean: 'B: 미안해요.',
      chinese: {
        hanzi: ['不好意思'],
        pinyin: ['bùhǎoyìsi'],
      },
    },

    // 12번
    {
      id: 'sentence12',
      level: 1,
      isFinal: false,
      korean: '경쟁이 세요.',
      chinese: {
        hanzi: ['竞争', '大'],
        pinyin: ['jìngzhēng', 'dà'],
      },
    },
    {
      id: 'sentence12',
      level: 2,
      isFinal: false,
      korean: '경쟁이 엄청 세요.',
      chinese: {
        hanzi: ['竞争', '特别', '大'],
        pinyin: ['jìngzhēng', 'tèbié', 'dà'],
      },
    },
    {
      id: 'sentence12',
      level: 3,
      isFinal: true,
      korean: 'A: 듣자하니 경쟁이 엄청 세대요.',
      chinese: {
        hanzi: ['听说', '竞争', '特别', '大'],
        pinyin: ['tīngshuō', 'jìngzhēng', 'tèbié', 'dà'],
      },
    },
    {
      id: 'sentence12',
      level: 4,
      isFinal: false,
      korean: '저는 성공해요.',
      chinese: {
        hanzi: ['我', '成功'],
        pinyin: ['wǒ', 'chénggōng'],
      },
    },
    {
      id: 'sentence12',
      level: 5,
      isFinal: false,
      korean: '저는 성공할 거에요.',
      chinese: {
        hanzi: ['我', '要', '成功'],
        pinyin: ['wǒ', 'yào', 'chénggōng'],
      },
    },
    {
      id: 'sentence12',
      level: 6,
      isFinal: true,
      korean: 'B: 저는 반드시 성공할 거예요.',
      chinese: {
        hanzi: ['我', '一定', '要', '成功'],
        pinyin: ['wǒ', 'yídìng', 'yào', 'chénggōng'],
      },
    },

    // 13번
    {
      id: 'sentence13',
      level: 1,
      isFinal: false,
      korean: '공항에 도착해요.',
      chinese: {
        hanzi: ['到', '机场'],
        pinyin: ['dào', 'jīchǎng'],
      },
    },
    {
      id: 'sentence13',
      level: 2,
      isFinal: false,
      korean: '저는 공항에 도착해요.',
      chinese: {
        hanzi: ['我', '到', '机场'],
        pinyin: ['wǒ', 'dào', 'jīchǎng'],
      },
    },
    {
      id: 'sentence13',
      level: 3,
      isFinal: true,
      korean: 'A: 저는 곧 공항에 도착해요.',
      chinese: {
        hanzi: ['我', '快', '到', '机场', '了'],
        pinyin: ['wǒ', 'kuài', 'dào', 'jīchǎng', 'le'],
      },
    },
    {
      id: 'sentence13',
      level: 4,
      isFinal: false,
      korean: '주의해요(조심해요).',
      chinese: {
        hanzi: ['注意'],
        pinyin: ['zhùyì'],
      },
    },
    {
      id: 'sentence13',
      level: 5,
      isFinal: false,
      korean: '안전에 주의해요.',
      chinese: {
        hanzi: ['注意', '安全'],
        pinyin: ['zhùyì', 'ānquán'],
      },
    },
    {
      id: 'sentence13',
      level: 6,
      isFinal: false,
      korean: '안전에 주의해야 해요.',
      chinese: {
        hanzi: ['要', '注意', '安全'],
        pinyin: ['yào', 'zhùyì', 'ānquán'],
      },
    },
    {
      id: 'sentence13',
      level: 7,
      isFinal: true,
      korean: 'B: 운전할 때는 안전에 주의해야 해요.',
      chinese: {
        hanzi: ['开车', '要', '注意', '安全'],
        pinyin: ['kāi chē', 'yào', 'zhùyì', 'ānquán'],
      },
    },

    // 14번
    {
      id: 'sentence14',
      level: 1,
      isFinal: false,
      korean: '얼굴빛이 좋아요.',
      chinese: {
        hanzi: ['脸色', '好'],
        pinyin: ['liǎnsè', 'hǎo'],
      },
    },
    {
      id: 'sentence14',
      level: 2,
      isFinal: false,
      korean: '얼굴빛이 안 좋아요.',
      chinese: {
        hanzi: ['脸色', '不好'],
        pinyin: ['liǎnsè', 'bù hǎo'],
      },
    },
    {
      id: 'sentence14',
      level: 3,
      isFinal: false,
      korean: '얼굴빛이 그다지 좋아 보이지 않아요.',
      chinese: {
        hanzi: ['脸色', '不太', '好'],
        pinyin: ['liǎnsè', 'bú tài', 'hǎo'],
      },
    },
    {
      id: 'sentence14',
      level: 4,
      isFinal: true,
      korean: 'A: 왜 그래요? 얼굴빛이 그다지 좋아 보이지 않아요.',
      chinese: {
        hanzi: ['怎么了', '脸色', '不太', '好'],
        pinyin: ['zěnmele', 'liǎnsè', 'bú tài', 'hǎo'],
      },
    },
    {
      id: 'sentence14',
      level: 5,
      isFinal: false,
      korean: '좀 쉬어요.',
      chinese: {
        hanzi: ['休息', '一下'],
        pinyin: ['xiūxi', 'yíxià'],
      },
    },
    {
      id: 'sentence14',
      level: 6,
      isFinal: false,
      korean: '좀 쉬고 싶어요.',
      chinese: {
        hanzi: ['想', '休息', '一下'],
        pinyin: ['xiǎng', 'xiūxi', 'yíxià'],
      },
    },
    {
      id: 'sentence14',
      level: 7,
      isFinal: true,
      korean: 'B: 저는 좀 쉬고 싶어요.',
      chinese: {
        hanzi: ['我', '想', '休息', '一下'],
        pinyin: ['wǒ', 'xiǎng', 'xiūxi', 'yíxià'],
      },
    },

    // 15번
    {
      id: 'sentence15',
      level: 1,
      isFinal: false,
      korean: '모임이 있어요.',
      chinese: {
        hanzi: ['有', '聚会'],
        pinyin: ['yǒu', 'jùhuì'],
      },
    },
    {
      id: 'sentence15',
      level: 2,
      isFinal: false,
      korean: '오늘 모임이 있어요.',
      chinese: {
        hanzi: ['今天', '有', '聚会'],
        pinyin: ['jīntiān', 'yǒu', 'jùhuì'],
      },
    },
    {
      id: 'sentence15',
      level: 3,
      isFinal: false,
      korean: '안 가요.',
      chinese: {
        hanzi: ['不去'],
        pinyin: ['bú qù'],
      },
    },
    {
      id: 'sentence15',
      level: 4,
      isFinal: false,
      korean: '당신은 안 가세요?',
      chinese: {
        hanzi: ['你', '不去', '吗'],
        pinyin: ['nǐ', 'bú qù', 'ma'],
      },
    },
    {
      id: 'sentence15',
      level: 5,
      isFinal: true,
      korean: 'A: 오늘 모임 있는데, 당신은 안 가세요?',
      chinese: {
        hanzi: ['今天', '有', '聚会', '你', '不去', '吗'],
        pinyin: ['jīntiān', 'yǒu', 'jùhuì', 'nǐ', 'bú qù', 'ma'],
      },
    },
    {
      id: 'sentence15',
      level: 6,
      isFinal: false,
      korean: '(밖에) 나가요.',
      chinese: {
        hanzi: ['出门'],
        pinyin: ['chū mén'],
      },
    },
    {
      id: 'sentence15',
      level: 7,
      isFinal: false,
      korean: '(밖에) 나가고 싶어요.',
      chinese: {
        hanzi: ['想', '出门'],
        pinyin: ['xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence15',
      level: 8,
      isFinal: false,
      korean: '(밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['不想', '出门'],
        pinyin: ['bù xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence15',
      level: 9,
      isFinal: false,
      korean: '오늘 (밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['今天', '不想', '出门'],
        pinyin: ['jīntiān', 'bù xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence15',
      level: 10,
      isFinal: true,
      korean: 'B: 저는 오늘 (밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['我', '今天', '不想', '出门'],
        pinyin: ['wǒ', 'jīntiān', 'bù xiǎng', 'chū mén'],
      },
    },
  ],
  day4: [
    // 16번
    {
      id: 'sentence16',
      level: 1,
      isFinal: false,
      korean: '머리가 아파요.',
      chinese: {
        hanzi: ['头疼'],
        pinyin: ['tóuténg'],
      },
    },
    {
      id: 'sentence16',
      level: 2,
      isFinal: false,
      korean: '계속 머리가 아파요.',
      chinese: {
        hanzi: ['一直', '头疼'],
        pinyin: ['yìzhí', 'tóuténg'],
      },
    },
    {
      id: 'sentence16',
      level: 3,
      isFinal: false,
      korean: '요 며칠 계속 머리가 아파요.',
      chinese: {
        hanzi: ['这几天', '一直', '头疼'],
        pinyin: ['zhè jǐ tiān', 'yìzhí', 'tóuténg'],
      },
    },
    {
      id: 'sentence16',
      level: 4,
      isFinal: true,
      korean: 'A: 저는 요 며칠 계속 머리가 아파요.',
      chinese: {
        hanzi: ['我', '这几天', '一直', '头疼'],
        pinyin: ['wǒ', 'zhè jǐ tiān', 'yìzhí', 'tóuténg'],
      },
    },
    {
      id: 'sentence16',
      level: 5,
      isFinal: false,
      korean: '더 쉬어요.',
      chinese: {
        hanzi: ['多', '休息'],
        pinyin: ['duō', 'xiūxi'],
      },
    },
    {
      id: 'sentence16',
      level: 6,
      isFinal: false,
      korean: '더 쉬어야 해요.',
      chinese: {
        hanzi: ['应该', '多', '休息'],
        pinyin: ['yīnggāi', 'duō', 'xiūxi'],
      },
    },
    {
      id: 'sentence16',
      level: 7,
      isFinal: true,
      korean: 'B: 당신은 더 쉬어야 해요.',
      chinese: {
        hanzi: ['你', '应该', '多', '休息'],
        pinyin: ['nǐ', 'yīnggāi', 'duō', 'xiūxi'],
      },
    },

    // 17번
    {
      id: 'sentence17',
      level: 1,
      isFinal: false,
      korean: '기억력이 나빠요.',
      chinese: {
        hanzi: ['记性', '差'],
        pinyin: ['jìxìng', 'chà'],
      },
    },
    {
      id: 'sentence17',
      level: 2,
      isFinal: false,
      korean: '기억력이 나빠졌어요.',
      chinese: {
        hanzi: ['记性', '差', '了'],
        pinyin: ['jìxìng', 'chà', 'le'],
      },
    },
    {
      id: 'sentence17',
      level: 3,
      isFinal: false,
      korean: '기억력이 점점 나빠지고 있어요.',
      chinese: {
        hanzi: ['记性', '越来越', '差', '了'],
        pinyin: ['jìxìng', 'yuèláiyuè', 'chà', 'le'],
      },
    },
    {
      id: 'sentence17',
      level: 4,
      isFinal: false,
      korean: '요즘 기억력이 점점 나빠지고 있어요.',
      chinese: {
        hanzi: ['最近', '记性', '越来越', '差', '了'],
        pinyin: ['zuìjìn', 'jìxìng', 'yuèláiyuè', 'chà', 'le'],
      },
    },
    {
      id: 'sentence17',
      level: 5,
      isFinal: true,
      korean: 'A: 저는 요즘 기억력이 점점 나빠지는 것 같아요.',
      chinese: {
        hanzi: ['我', '觉得', '最近', '记性', '越来越', '差', '了'],
        pinyin: ['wǒ', 'juéde', 'zuìjìn', 'jìxìng', 'yuèláiyuè', 'chà', 'le'],
      },
    },
    {
      id: 'sentence17',
      level: 6,
      isFinal: false,
      korean: '밤을 새워요.',
      chinese: {
        hanzi: ['熬夜'],
        pinyin: ['áoyè'],
      },
    },
    {
      id: 'sentence17',
      level: 7,
      isFinal: false,
      korean: '자꾸 밤을 새워요.',
      chinese: {
        hanzi: ['总是', '熬夜'],
        pinyin: ['zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence17',
      level: 8,
      isFinal: false,
      korean: '자꾸 밤새면 안 돼요.',
      chinese: {
        hanzi: ['不应该', '总是', '熬夜'],
        pinyin: ['bù yīnggāi', 'zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence17',
      level: 9,
      isFinal: true,
      korean: 'B: 당신은 자꾸 밤새면 안 돼요.',
      chinese: {
        hanzi: ['你', '不应该', '总是', '熬夜'],
        pinyin: ['nǐ', 'bù yīnggāi', 'zǒngshì', 'áoyè'],
      },
    },

    // 18번
    {
      id: 'sentence18',
      level: 1,
      isFinal: false,
      korean: '조금 마셔요.',
      chinese: {
        hanzi: ['喝', '一点'],
        pinyin: ['hē', 'yìdiǎn'],
      },
    },
    {
      id: 'sentence18',
      level: 2,
      isFinal: false,
      korean: '조금 더 마셔요?',
      chinese: {
        hanzi: ['再', '喝', '一点'],
        pinyin: ['zài', 'hē', 'yìdiǎn'],
      },
    },
    {
      id: 'sentence18',
      level: 3,
      isFinal: true,
      korean: 'A: 조금 더 마실래요?',
      chinese: {
        hanzi: ['要不要', '再', '喝', '一点'],
        pinyin: ['yào bu yào', 'zài', 'hē', 'yìdiǎn'],
      },
    },
    {
      id: 'sentence18',
      level: 4,
      isFinal: false,
      korean: '갔어요(떠났어요).',
      chinese: {
        hanzi: ['走了'],
        pinyin: ['zǒu le'],
      },
    },
    {
      id: 'sentence18',
      level: 5,
      isFinal: false,
      korean: '가야 해요.',
      chinese: {
        hanzi: ['得', '走', '了'],
        pinyin: ['děi', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 6,
      isFinal: false,
      korean: '저는 가야 해요.',
      chinese: {
        hanzi: ['我', '得', '走', '了'],
        pinyin: ['wǒ', 'děi', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 7,
      isFinal: false,
      korean: '안 마셔요.',
      chinese: {
        hanzi: ['不', '喝'],
        pinyin: ['bù', 'hē'],
      },
    },
    {
      id: 'sentence18',
      level: 8,
      isFinal: false,
      korean: '안 마실래요.',
      chinese: {
        hanzi: ['不', '喝', '了'],
        pinyin: ['bù', 'hē', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 9,
      isFinal: true,
      korean: 'B: 안 마실래요, 저 가야 해요.',
      chinese: {
        hanzi: ['不', '喝', '了，', '我', '得', '走', '了'],
        pinyin: ['bù', 'hē', 'le', 'wǒ', 'děi', 'zǒu', 'le'],
      },
    },

    // 19번
    {
      id: 'sentence19',
      level: 1,
      isFinal: false,
      korean: '무슨 말을 하는 거야? (뭐라고?)',
      chinese: {
        hanzi: ['说什么'],
        pinyin: ['shuō shénme'],
      },
    },
    {
      id: 'sentence19',
      level: 2,
      isFinal: false,
      korean: '(말투를 부드럽게) 무슨 말을 하는 거야?',
      chinese: {
        hanzi: ['说', '什么', '呀'],
        pinyin: ['shuō', 'shénme', 'ya'],
      },
    },
    {
      id: 'sentence19',
      level: 3,
      isFinal: false,
      korean: '너는 무슨 말을 하는 거야?',
      chinese: {
        hanzi: ['你', '说', '什么', '呀'],
        pinyin: ['nǐ', 'shuō', 'shénme', 'ya'],
      },
    },
    {
      id: 'sentence19',
      level: 4,
      isFinal: false,
      korean: '너는 무슨 말을 하고 싶은 거야?',
      chinese: {
        hanzi: ['你', '想', '说', '什么', '呀'],
        pinyin: ['nǐ', 'xiǎng', 'shuō', 'shénme', 'ya'],
      },
    },
    {
      id: 'sentence19',
      level: 5,
      isFinal: true,
      korean: 'A: 너는 도대체 무슨 말을 하고 싶은 거야?',
      chinese: {
        hanzi: ['你', '到底', '想', '说', '什么', '呀'],
        pinyin: ['nǐ', 'dàodǐ', 'xiǎng', 'shuō', 'shénme', 'ya'],
      },
    },
    {
      id: 'sentence19',
      level: 6,
      isFinal: false,
      korean: '나에게 시집 와.',
      chinese: {
        hanzi: ['嫁给', '我'],
        pinyin: ['jià gěi', 'wǒ'],
      },
    },
    {
      id: 'sentence19',
      level: 7,
      isFinal: false,
      korean: '너는 나에게 시집 와.',
      chinese: {
        hanzi: ['你', '嫁给', '我'],
        pinyin: ['nǐ', 'jià gěi', 'wǒ'],
      },
    },
    {
      id: 'sentence19',
      level: 8,
      isFinal: true,
      korean: '너는 나에게 시집 올래? (결혼할래?)',
      chinese: {
        hanzi: ['你', '嫁给', '我', '吗'],
        pinyin: ['nǐ', 'jià gěi', 'wǒ', 'ma'],
      },
    },
    {
      id: 'sentence19',
      level: 9,
      isFinal: true,
      korean: 'B: 너는 나에게 시집 와 줄래? (결혼해 줄래?)',
      chinese: {
        hanzi: ['你', '愿意', '嫁给', '我', '吗'],
        pinyin: ['nǐ', 'yuànyì', 'jià gěi', 'wǒ', 'ma'],
      },
    },

    // 20번
    {
      id: 'sentence20',
      level: 1,
      isFinal: false,
      korean: '의견을 받아들이다.',
      chinese: {
        hanzi: ['接受', '意见'],
        pinyin: ['jiēshòu', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 2,
      isFinal: false,
      korean: '다른 사람의 의견(남의 의견)',
      chinese: {
        hanzi: ['别人的', '意见'],
        pinyin: ['biérén de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 3,
      isFinal: false,
      korean: '남의 의견을 받아들이다.',
      chinese: {
        hanzi: ['接受', '别人的', '意见'],
        pinyin: ['jiēshòu', 'biérén de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 4,
      isFinal: false,
      korean: '남의 의견을 받아들이지 않는다.',
      chinese: {
        hanzi: ['不', '接受', '别人的', '意见'],
        pinyin: ['bù', 'jiēshòu', 'biérén de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 5,
      isFinal: true,
      korean: '남의 의견을 여태껏 받아들이지 않는다.',
      chinese: {
        hanzi: ['从来不', '接受', '别人的', '意见'],
        pinyin: ['cónglái bù', 'jiēshòu', 'biérén de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 6,
      isFinal: true,
      korean:
        'A: 그 사람은 남의 의견을 여태껏 안 받아들여(받아들인 적이 없어).',
      chinese: {
        hanzi: ['他', '从来不', '接受', '别人的', '意见'],
        pinyin: ['tā', 'cónglái bù', 'jiēshòu', 'biérén de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 7,
      isFinal: false,
      korean: '생각을 바꾸다.',
      chinese: {
        hanzi: ['改变', '想法'],
        pinyin: ['gǎibiàn', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence20',
      level: 8,
      isFinal: false,
      korean: '자신의 생각을 바꾸다.',
      chinese: {
        hanzi: ['改变', '自己的', '想法'],
        pinyin: ['gǎibiàn', 'zìjǐ de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence20',
      level: 9,
      isFinal: false,
      korean: '자신의 생각을 바꾸길 원하지 않아.',
      chinese: {
        hanzi: ['不愿意', '改变', '自己的', '想法'],
        pinyin: ['bú yuànyì', 'gǎibiàn', 'zìjǐ de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence20',
      level: 10,
      isFinal: true,
      korean: 'B: 어떤 사람들은 자신의 생각을 바꾸길 원하지 않아.',
      chinese: {
        hanzi: ['有些人', '不愿意', '改变', '自己的', '想法'],
        pinyin: ['yǒuxiē rén', 'bú yuànyì', 'gǎibiàn', 'zìjǐ de', 'xiǎngfǎ'],
      },
    },
  ],
  day5: [
    // 21번
    {
      id: 'sentence21',
      level: 1,
      isFinal: false,
      korean: '스카이다이빙하다.',
      chinese: {
        hanzi: ['跳伞'],
        pinyin: ['tiàosǎn'],
      },
    },
    {
      id: 'sentence21',
      level: 2,
      isFinal: false,
      korean: '스카이다이빙 할 수 있겠다(해볼 용기 있다).',
      chinese: {
        hanzi: ['敢', '跳伞'],
        pinyin: ['gǎn', 'tiàosǎn'],
      },
    },
    {
      id: 'sentence21',
      level: 3,
      isFinal: true,
      korean: 'A: 너는 스카이다이빙 할 수 있겠어(해볼 용기 있어)?',
      chinese: {
        hanzi: ['你', '敢', '跳伞', '吗'],
        pinyin: ['nǐ', 'gǎn', 'tiàosǎn', 'ma'],
      },
    },
    {
      id: 'sentence21',
      level: 4,
      isFinal: false,
      korean: '한 번 해보다.',
      chinese: {
        hanzi: ['试试'],
        pinyin: ['shìshi'],
      },
    },
    {
      id: 'sentence21',
      level: 5,
      isFinal: false,
      korean: '한 번 해보고 싶다.',
      chinese: {
        hanzi: ['想', '试试'],
        pinyin: ['xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence21',
      level: 6,
      isFinal: false,
      korean: '나는 한 번 해보고 싶어.',
      chinese: {
        hanzi: ['我', '想', '试试'],
        pinyin: ['wǒ', 'xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence21',
      level: 7,
      isFinal: false,
      korean: '좀 무서워.',
      chinese: {
        hanzi: ['有点', '怕'],
        pinyin: ['yǒudiǎn', 'pà'],
      },
    },
    {
      id: 'sentence21',
      level: 8,
      isFinal: false,
      korean: '……, 근데 좀 무서워.',
      chinese: {
        hanzi: ['……, 但', '有点', '怕'],
        pinyin: ['dàn', 'yǒudiǎn', 'pà'],
      },
    },
    {
      id: 'sentence21',
      level: 9,
      isFinal: true,
      korean: 'B: 나는 한 번 해보고 싶긴 한데 근데 좀 무서워.',
      chinese: {
        hanzi: ['我', '想', '试试', '但', '有点', '怕'],
        pinyin: ['wǒ', 'xiǎng', 'shìshi', 'dàn', 'yǒudiǎn', 'pà'],
      },
    },

    // 22번
    {
      id: 'sentence22',
      level: 1,
      isFinal: false,
      korean: '혼자 가다.',
      chinese: {
        hanzi: ['一个人', '去'],
        pinyin: ['yí ge rén', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 2,
      isFinal: false,
      korean: '혼자 갈 엄두가 안 나다.',
      chinese: {
        hanzi: ['不敢', '一个人', '去'],
        pinyin: ['bù gǎn', 'yí ge rén', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 3,
      isFinal: true,
      korean: 'A: 나는 혼자 갈 엄두가 안 나다.',
      chinese: {
        hanzi: ['我', '不敢', '一个人', '去'],
        pinyin: ['wǒ', 'bù gǎn', 'yí ge rén', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 4,
      isFinal: false,
      korean: '같이 가다.',
      chinese: {
        hanzi: ['一起', '去'],
        pinyin: ['yìqǐ', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 5,
      isFinal: false,
      korean: '우리 같이 갈까?',
      chinese: {
        hanzi: ['我们', '一起', '去'],
        pinyin: ['wǒmen', 'yìqǐ', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 6,
      isFinal: true,
      korean: 'B: 아니면 우리 같이 갈까?',
      chinese: {
        hanzi: ['要不', '我们', '一起', '去'],
        pinyin: ['yàobù', 'wǒmen', 'yìqǐ', 'qù'],
      },
    },

    // 23번
    {
      id: 'sentence23',
      level: 1,
      isFinal: false,
      korean: '갈 수 없어(못 가).',
      chinese: {
        hanzi: ['去不了'],
        pinyin: ['qù bu liǎo'],
      },
    },
    {
      id: 'sentence23',
      level: 2,
      isFinal: false,
      korean: '아마 못 갈 수도 있어.',
      chinese: {
        hanzi: ['可能', '去不了'],
        pinyin: ['kěnéng', 'qù bu liǎo'],
      },
    },
    {
      id: 'sentence23',
      level: 3,
      isFinal: true,
      korean: 'A: 나는 아마 못 갈 수도 있어.',
      chinese: {
        hanzi: ['我', '可能', '去不了'],
        pinyin: ['wǒ', 'kěnéng', 'qù bu liǎo'],
      },
    },
    {
      id: 'sentence23',
      level: 4,
      isFinal: false,
      korean: '반드시 와야 해.',
      chinese: {
        hanzi: ['必须', '来'],
        pinyin: ['bìxū', 'lái'],
      },
    },
    {
      id: 'sentence23',
      level: 5,
      isFinal: true,
      korean: 'B: 너는 반드시 와야 해.',
      chinese: {
        hanzi: ['你', '必须', '来'],
        pinyin: ['nǐ', 'bìxū', 'lái'],
      },
    },

    // 24번
    {
      id: 'sentence24',
      level: 1,
      isFinal: false,
      korean: '읽어봤어요.',
      chinese: {
        hanzi: ['看过'],
        pinyin: ['kànguo'],
      },
    },
    {
      id: 'sentence24',
      level: 2,
      isFinal: false,
      korean: '책을 읽어봤어요.',
      chinese: {
        hanzi: ['看过', '书'],
        pinyin: ['kànguo', 'shū'],
      },
    },
    {
      id: 'sentence24',
      level: 3,
      isFinal: false,
      korean: '이 책',
      chinese: {
        hanzi: ['这本书'],
        pinyin: ['zhè běn shū'],
      },
    },
    {
      id: 'sentence24',
      level: 4,
      isFinal: false,
      korean: '이 책을 읽어봤어요.',
      chinese: {
        hanzi: ['看过', '这', '本', '书'],
        pinyin: ['kànguo', 'zhè', 'běn', 'shū'],
      },
    },
    {
      id: 'sentence24',
      level: 5,
      isFinal: false,
      korean: '이 책을 읽어봤어요?',
      chinese: {
        hanzi: ['看过', '这', '本', '书', '吗'],
        pinyin: ['kànguo', 'zhè', 'běn', 'shū', 'ma'],
      },
    },
    {
      id: 'sentence24',
      level: 6,
      isFinal: true,
      korean: 'A: 당신은 이 책을 읽어봤어요?',
      chinese: {
        hanzi: ['你', '看过', '这', '本', '书', '吗'],
        pinyin: ['nǐ', 'kànguo', 'zhè', 'běn', 'shū', 'ma'],
      },
    },
    {
      id: 'sentence24',
      level: 7,
      isFinal: false,
      korean: '읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['值得', '看'],
        pinyin: ['zhídé', 'kàn'],
      },
    },
    {
      id: 'sentence24',
      level: 8,
      isFinal: false,
      korean: '이 책은 읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['这', '本', '书', '值得', '看'],
        pinyin: ['zhè', 'běn', 'shū', 'zhídé', 'kàn'],
      },
    },
    {
      id: 'sentence24',
      level: 9,
      isFinal: true,
      korean: 'B: 읽어봤어요, 이 책은 읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['看过', '这', '本', '书', '值得', '看'],
        pinyin: ['kànguo', 'zhè', 'běn', 'shū', 'zhídé', 'kàn'],
      },
    },

    // 25번
    {
      id: 'sentence25',
      level: 1,
      isFinal: false,
      korean: '태도가 별로야.',
      chinese: {
        hanzi: ['态度', '差'],
        pinyin: ['tàidù', 'chà'],
      },
    },
    {
      id: 'sentence25',
      level: 2,
      isFinal: false,
      korean: '태도가 너무 별로야!',
      chinese: {
        hanzi: ['态度', '太', '差', '了'],
        pinyin: ['tàidù', 'tài', 'chà', 'le'],
      },
    },
    {
      id: 'sentence25',
      level: 3,
      isFinal: true,
      korean: 'A: 점원 태도가 너무 별로야!',
      chinese: {
        hanzi: ['服务员', '态度', '太', '差', '了'],
        pinyin: ['fúwùyuán', 'tàidù', 'tài', 'chà', 'le'],
      },
    },
    {
      id: 'sentence25',
      level: 4,
      isFinal: false,
      korean: '화낼 만해(화낼 가치가 있어).',
      chinese: {
        hanzi: ['值得', '生气'],
        pinyin: ['zhídé', 'shēng qì'],
      },
    },
    {
      id: 'sentence25',
      level: 5,
      isFinal: false,
      korean: '화낼 만한 게 아니야(화낼 가치가 없어).',
      chinese: {
        hanzi: ['不值得', '生气'],
        pinyin: ['bù zhídé', 'shēng qì'],
      },
    },
    {
      id: 'sentence25',
      level: 6,
      isFinal: false,
      korean: '전혀 화낼 만한 게 아니야(화낼 가치가 없어).',
      chinese: {
        hanzi: ['根本', '不值得', '生气'],
        pinyin: ['gēnběn', 'bù zhídé', 'shēng qì'],
      },
    },
    {
      id: 'sentence25',
      level: 7,
      isFinal: false,
      korean: '사소한 일은 전혀 화낼 만한 게 아니야(화낼 가치가 없어).',
      chinese: {
        hanzi: ['小事', '根本', '不值得', '生气'],
        pinyin: ['xiaoshì', 'gēnběn', 'bù zhídé', 'shēng qì'],
      },
    },
    {
      id: 'sentence25',
      level: 8,
      isFinal: false,
      korean: '이런 사소한 일',
      chinese: {
        hanzi: ['这种小事'],
        pinyin: ['zhè zhǒng xiǎoshì'],
      },
    },
    {
      id: 'sentence25',
      level: 9,
      isFinal: true,
      korean: 'B: 이런 사소한 일은 전혀 화낼 만한 게 아니야(화낼 가치가 없어).',
      chinese: {
        hanzi: ['这', '种', '小事', '根本', '不值得', '生气'],
        pinyin: ['zhè', 'zhǒng', 'xiaoshì', 'gēnběn', 'bù zhídé', 'shēng qì'],
      },
    },
  ],
  day6: [
    // 26번
    {
      id: 'sentence26',
      level: 1,
      isFinal: false,
      korean: '중국어를 말해요.',
      chinese: {
        hanzi: ['说', '汉语'],
        pinyin: ['shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 2,
      isFinal: false,
      korean: '중국어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['会', '说', '汉语'],
        pinyin: ['huì', 'shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 3,
      isFinal: false,
      korean: '저는 중국어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['我', '会', '说', '汉语'],
        pinyin: ['wǒ', 'huì', 'shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 4,
      isFinal: false,
      korean: '영어를 말해요.',
      chinese: {
        hanzi: ['说', '英语'],
        pinyin: ['shuō', 'Yīngyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 5,
      isFinal: false,
      korean: '영어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['会', '说', '英语'],
        pinyin: ['huì', 'shuō', 'Yīngyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 6,
      isFinal: false,
      korean: '……, 영어도 말할 줄 알아요.',
      chinese: {
        hanzi: ['……, 也', '会', '说', '英语'],
        pinyin: ['yě', 'huì', 'shuō', 'Yīngyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 7,
      isFinal: true,
      korean: 'A: 저는 중국어도 말할 줄 알고, 영어도 말할 줄 알아요.',
      chinese: {
        hanzi: ['我', '会', '说', '汉语', '也会', '说', '英语'],
        pinyin: ['wǒ', 'huì', 'shuō', 'Hànyǔ', 'yě huì', 'shuō', 'Yīngyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 8,
      isFinal: false,
      korean: '중국어를 말해요.',
      chinese: {
        hanzi: ['说', '汉语'],
        pinyin: ['shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 9,
      isFinal: false,
      korean: '중국어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['会', '说', '汉语'],
        pinyin: ['huì', 'shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 10,
      isFinal: false,
      korean: '중국어밖에 말할 줄 몰라요.',
      chinese: {
        hanzi: ['只会', '说', '汉语'],
        pinyin: ['zhǐ huì', 'shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 11,
      isFinal: false,
      korean: '저는 중국어밖에 말할 줄 몰라요.',
      chinese: {
        hanzi: ['我', '只', '会', '说', '汉语'],
        pinyin: ['wǒ', 'zhǐ', 'huì', 'shuō', 'Hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 12,
      isFinal: false,
      korean: '당신이 부러워요.',
      chinese: {
        hanzi: ['羡慕', '你'],
        pinyin: ['xiànmù', 'nǐ'],
      },
    },
    {
      id: 'sentence26',
      level: 13,
      isFinal: false,
      korean: '진짜 당신이 부러워요.',
      chinese: {
        hanzi: ['真', '羡慕', '你'],
        pinyin: ['zhēn', 'xiànmù', 'nǐ'],
      },
    },
    {
      id: 'sentence26',
      level: 14,
      isFinal: true,
      korean: 'B: 저는 중국어밖에 말할 줄 몰라요, 진짜 당신이 부러워요!',
      chinese: {
        hanzi: ['我', '只', '会', '说', '汉语', '真', '羡慕', '你'],
        pinyin: ['wǒ', 'zhǐ', 'huì', 'shuō', 'Hànyǔ', 'zhēn', 'xiànmù', 'nǐ'],
      },
    },

    // 27번
    {
      id: 'sentence27',
      level: 1,
      isFinal: false,
      korean: '비가 와요.',
      chinese: {
        hanzi: ['下雨'],
        pinyin: ['xià yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 2,
      isFinal: false,
      korean: '비가 올 거에요.',
      chinese: {
        hanzi: ['会', '下雨'],
        pinyin: ['huì', 'xià yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 3,
      isFinal: false,
      korean: '내일 비가 올 거에요.',
      chinese: {
        hanzi: ['明天', '会', '下雨'],
        pinyin: ['míngtiān', 'huì', 'xià yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 4,
      isFinal: false,
      korean: '일기예보에 따르면 ……래요.',
      chinese: {
        hanzi: ['天气预报', '说……'],
        pinyin: ['tiānqì yùbào', 'shuō'],
      },
    },
    {
      id: 'sentence27',
      level: 5,
      isFinal: false,
      korean: '일기예보에 따르면 내일 비가 올 거래요.',
      chinese: {
        hanzi: ['天气预报', '说', '明天', '会', '下雨'],
        pinyin: ['tiānqì yùbào', 'shuō', 'míngtiān', 'huì', 'xià yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 6,
      isFinal: false,
      korean: '폭우래요(비가 많이 내린대요).',
      chinese: {
        hanzi: ['是', '大雨'],
        pinyin: ['shì', 'dà yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 7,
      isFinal: false,
      korean: '……, 게다가 폭우래요(비가 많이 내린대요).',
      chinese: {
        hanzi: ['……, 而且', '是', '大雨'],
        pinyin: ['érqiě', 'shì', 'dà yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 8,
      isFinal: true,
      korean:
        'A: 일기예보에 따르면 내일 비가 올 거래요, 게다가 폭우래요(비가 많이 내린대요).',
      chinese: {
        hanzi: ['天气预报', '说', '明天', '会', '下雨', '而且', '是', '大雨'],
        pinyin: [
          'tiānqì yùbào',
          'shuō',
          'míngtiān',
          'huì',
          'xià yǔ',
          'érqiě',
          'shì',
          'dà yǔ',
        ],
      },
    },
    {
      id: 'sentence27',
      level: 9,
      isFinal: false,
      korean: '다른 날에 가요.',
      chinese: {
        hanzi: ['改天', '去'],
        pinyin: ['gǎitiān', 'qù'],
      },
    },
    {
      id: 'sentence27',
      level: 10,
      isFinal: false,
      korean: '다른 날에 가는 게 좋겠어요.',
      chinese: {
        hanzi: ['还是', '改天', '去', '吧'],
        pinyin: ['háishi', 'gǎitiān', 'qù', 'ba'],
      },
    },
    {
      id: 'sentence27',
      level: 11,
      isFinal: false,
      korean: '저는 다른 날에 가는 게 좋겠어요.',
      chinese: {
        hanzi: ['我', '还是', '改天', '去', '吧'],
        pinyin: ['wǒ', 'háishi', 'gǎitiān', 'qù', 'ba'],
      },
    },
    {
      id: 'sentence27',
      level: 12,
      isFinal: true,
      korean: 'B: 그럼 저는 다른 날에 가는 게 좋겠어요.',
      chinese: {
        hanzi: ['那', '我', '还是', '改天', '去', '吧'],
        pinyin: ['nà', 'wǒ', 'háishi', 'gǎitiān', 'qù', 'ba'],
      },
    },

    // 28번
    {
      id: 'sentence28',
      level: 1,
      isFinal: false,
      korean: '운전해요.',
      chinese: {
        hanzi: ['开车'],
        pinyin: ['kāi chē'],
      },
    },
    {
      id: 'sentence28',
      level: 2,
      isFinal: false,
      korean: '운전할 줄 알아요.',
      chinese: {
        hanzi: ['会', '开车'],
        pinyin: ['huì', 'kāi chē'],
      },
    },
    {
      id: 'sentence28',
      level: 3,
      isFinal: false,
      korean: '운전할 줄 몰라요.',
      chinese: {
        hanzi: ['不会', '开车'],
        pinyin: ['bú huì', 'kāi chē'],
      },
    },
    {
      id: 'sentence28',
      level: 4,
      isFinal: false,
      korean: '그녀는 운전할 줄 몰라요.',
      chinese: {
        hanzi: ['她', '不会', '开车'],
        pinyin: ['tā', 'bú huì', 'kāi chē'],
      },
    },
    {
      id: 'sentence28',
      level: 5,
      isFinal: false,
      korean: '지하철을 타요.',
      chinese: {
        hanzi: ['坐', '地铁'],
        pinyin: ['zuò', 'dìtiě'],
      },
    },
    {
      id: 'sentence28',
      level: 6,
      isFinal: false,
      korean: '지하철을 타고 출근해요.',
      chinese: {
        hanzi: ['坐', '地铁', '上班'],
        pinyin: ['zuò', 'dìtiě', 'shàng bān'],
      },
    },
    {
      id: 'sentence28',
      level: 7,
      isFinal: false,
      korean: '매일 지하철을 타고 출근해요.',
      chinese: {
        hanzi: ['每天', '坐', '地铁', '上班'],
        pinyin: ['měitiān', 'zuò', 'dìtiě', 'shàng bān'],
      },
    },
    {
      id: 'sentence28',
      level: 8,
      isFinal: false,
      korean: '그래서 매일 지하철을 타고 출근해요.',
      chinese: {
        hanzi: ['所以', '每天', '坐', '地铁', '上班'],
        pinyin: ['suǒyǐ', 'měitiān', 'zuò', 'dìtiě', 'shàng bān'],
      },
    },
    {
      id: 'sentence28',
      level: 9,
      isFinal: true,
      korean: 'A: 그녀는 운전할 줄 몰라서 매일 지하철을 타고 출근해요.',
      chinese: {
        hanzi: ['她', '不会', '开车', '所以', '每天', '坐', '地铁', '上班'],
        pinyin: [
          'tā',
          'bú huì',
          'kāi chē',
          'suǒyǐ',
          'měitiān',
          'zuò',
          'dìtiě',
          'shàng bān',
        ],
      },
    },
    {
      id: 'sentence28',
      level: 10,
      isFinal: false,
      korean: '지하철은 빨라요.',
      chinese: {
        hanzi: ['地铁', '快'],
        pinyin: ['dìtiě', 'kuài'],
      },
    },
    {
      id: 'sentence28',
      level: 11,
      isFinal: false,
      korean: '지하철은 저렴해요.',
      chinese: {
        hanzi: ['地铁', '便宜'],
        pinyin: ['dìtiě', 'piányi'],
      },
    },
    {
      id: 'sentence28',
      level: 12,
      isFinal: false,
      korean: '지하철은 …하기도 하고 …하기도 해요.',
      chinese: {
        hanzi: ['地铁', '又……', '又……'],
        pinyin: ['dìtiě', 'yòu', 'yòu'],
      },
    },
    {
      id: 'sentence28',
      level: 13,
      isFinal: false,
      korean: '지하철은 빠르기도 하고 싸기도 해요.',
      chinese: {
        hanzi: ['地铁', '又快', '又便宜'],
        pinyin: ['dìtiě', 'yòu kuài', 'yòu piányi'],
      },
    },
    {
      id: 'sentence28',
      level: 14,
      isFinal: false,
      korean: '얼마나 좋아요.',
      chinese: {
        hanzi: ['多好啊'],
        pinyin: ['duō hǎo a'],
      },
    },
    {
      id: 'sentence28',
      level: 15,
      isFinal: true,
      korean: 'B: 지하철은 빠르기도 하고 싸기도 해요, 얼마나 좋아요.',
      chinese: {
        hanzi: ['地铁', '又', '快', '又', '便宜', '多', '好', '啊'],
        pinyin: ['dìtiě', 'yòu', 'kuài', 'yòu', 'piányi', 'duō', 'hǎo', 'a'],
      },
    },

    // 29번
    {
      id: 'sentence29',
      level: 1,
      isFinal: false,
      korean: '잊어요.',
      chinese: {
        hanzi: ['忘记'],
        pinyin: ['wàngjì'],
      },
    },
    {
      id: 'sentence29',
      level: 2,
      isFinal: false,
      korean: '잊었을 거예요.',
      chinese: {
        hanzi: ['会', '忘记', '的'],
        pinyin: ['huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence29',
      level: 3,
      isFinal: false,
      korean: '잊지 않았을 거예요.',
      chinese: {
        hanzi: ['不会', '忘记', '的'],
        pinyin: ['bú huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence29',
      level: 4,
      isFinal: false,
      korean: '그는 잊지 않았을 거예요.',
      chinese: {
        hanzi: ['他', '不会', '忘记', '的'],
        pinyin: ['tā', 'bú huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence29',
      level: 5,
      isFinal: false,
      korean: '시간이 없어요.',
      chinese: {
        hanzi: ['没有', '时间'],
        pinyin: ['méiyǒu', 'shíjiān'],
      },
    },
    {
      id: 'sentence29',
      level: 6,
      isFinal: false,
      korean: '전화할 시간이 없어요.',
      chinese: {
        hanzi: ['没有', '时间', '打', '电话'],
        pinyin: ['méiyǒu', 'shíjiān', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence29',
      level: 7,
      isFinal: false,
      korean: '아직 전화할 시간이 없어요.',
      chinese: {
        hanzi: ['还', '没有', '时间', '打', '电话'],
        pinyin: ['hái', 'méiyǒu', 'shíjiān', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence29',
      level: 8,
      isFinal: false,
      korean: '단지 아직 전화할 시간이 없을 뿐이에요.',
      chinese: {
        hanzi: ['只是', '还', '没有', '时间', '打', '电话'],
        pinyin: ['zhǐshì', 'hái', 'méiyǒu', 'shíjiān', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence29',
      level: 9,
      isFinal: false,
      korean: '그는 단지 아직 전화할 시간이 없을 뿐이에요.',
      chinese: {
        hanzi: ['他', '只是', '还', '没有', '时间', '打', '电话'],
        pinyin: ['tā', 'zhǐshì', 'hái', 'méiyǒu', 'shíjiān', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence29',
      level: 10,
      isFinal: true,
      korean:
        'A: 그는 잊지 않았을 거예요. 그는 단지 아직 전화할 시간이 없을 뿐이에요.',
      chinese: {
        hanzi: [
          '他',
          '不会',
          '忘记',
          '的',
          '他',
          '只是',
          '还',
          '没有',
          '时间',
          '打',
          '电话',
        ],
        pinyin: [
          'tā',
          'bú huì',
          'wàngjì',
          'de',
          'tā',
          'zhǐshì',
          'hái',
          'méiyǒu',
          'shíjiān',
          'dǎ',
          'diànhuà',
        ],
      },
    },
    {
      id: 'sentence29',
      level: 11,
      isFinal: false,
      korean: '저는 조금만(좀) 기다릴게요.',
      chinese: {
        hanzi: ['我', '等等'],
        pinyin: ['wǒ', 'děngdeng'],
      },
    },
    {
      id: 'sentence29',
      level: 12,
      isFinal: false,
      korean: '저는 조금만(좀) 기다려볼게요.',
      chinese: {
        hanzi: ['我', '等等', '吧'],
        pinyin: ['wǒ', 'děngdeng', 'ba'],
      },
    },
    {
      id: 'sentence29',
      level: 13,
      isFinal: false,
      korean: '저는 조금만(좀) 더 기다려볼게요.',
      chinese: {
        hanzi: ['我', '再', '等等', '吧'],
        pinyin: ['wǒ', 'zài', 'děngdeng', 'ba'],
      },
    },
    {
      id: 'sentence29',
      level: 14,
      isFinal: true,
      korean: 'B: 그럼 저는 조금만(좀) 더 기다려볼게요.',
      chinese: {
        hanzi: ['那', '我', '再', '等等', '吧'],
        pinyin: ['nà', 'wǒ', 'zài', 'děngdeng', 'ba'],
      },
    },

    // 30번
    {
      id: 'sentence30',
      level: 1,
      isFinal: false,
      korean: '한국어를 알아들어요.',
      chinese: {
        hanzi: ['听懂', '韩语'],
        pinyin: ['tīngdǒng', 'Hányǔ'],
      },
    },
    {
      id: 'sentence30',
      level: 2,
      isFinal: false,
      korean: '한국어를 알아들을 수 있어요.',
      chinese: {
        hanzi: ['能', '听懂', '韩语'],
        pinyin: ['néng', 'tīngdǒng', 'Hányǔ'],
      },
    },
    {
      id: 'sentence30',
      level: 3,
      isFinal: false,
      korean: '그녀는 한국어를 알아들을 수 있어요.',
      chinese: {
        hanzi: ['她', '能', '听懂', '韩语'],
        pinyin: ['tā', 'néng', 'tīngdǒng', 'Hányǔ'],
      },
    },
    {
      id: 'sentence30',
      level: 4,
      isFinal: false,
      korean: '말할 줄 알아요.',
      chinese: {
        hanzi: ['会说'],
        pinyin: ['huì shuō'],
      },
    },
    {
      id: 'sentence30',
      level: 5,
      isFinal: false,
      korean: '말할 줄 몰라요.',
      chinese: {
        hanzi: ['不会', '说'],
        pinyin: ['bú huì', 'shuō'],
      },
    },
    {
      id: 'sentence30',
      level: 6,
      isFinal: false,
      korean: '……, 하지만 말할 줄 몰라요.',
      chinese: {
        hanzi: ['……,但是', '不会', '说'],
        pinyin: ['dànshì', 'bú huì', 'shuō'],
      },
    },
    {
      id: 'sentence30',
      level: 7,
      isFinal: true,
      korean: 'A: 그녀는 한국어를 알아들을 수 있지만 말할 줄 몰라요.',
      chinese: {
        hanzi: ['她', '能', '听懂', '韩语', '但是', '不会', '说'],
        pinyin: ['tā', 'néng', 'tīngdǒng', 'Hányǔ', 'dànshì', 'bú huì', 'shuō'],
      },
    },
    {
      id: 'sentence30',
      level: 8,
      isFinal: false,
      korean: '알아듣기만 해도(알아들을 수만 있어도) …… .',
      chinese: {
        hanzi: ['听得懂就……'],
        pinyin: ['tīng de dǒng jiù'],
      },
    },
    {
      id: 'sentence30',
      level: 9,
      isFinal: false,
      korean: '정말 대단해요.',
      chinese: {
        hanzi: ['很', '厉害'],
        pinyin: ['hěn', 'lìhai'],
      },
    },
    {
      id: 'sentence30',
      level: 10,
      isFinal: false,
      korean: '이미 정말 대단해요.',
      chinese: {
        hanzi: ['已经', '很', '厉害', '了'],
        pinyin: ['yǐjing', 'hěn', 'lìhai', 'le'],
      },
    },
    {
      id: 'sentence30',
      level: 11,
      isFinal: true,
      korean: 'B: 알아듣기만 해도 이미 정말 대단해요.',
      chinese: {
        hanzi: ['听得懂', '就', '已经', '很', '厉害', '了'],
        pinyin: ['tīng de dǒng', 'jiù', 'yǐjing', 'hěn', 'lìhai', 'le'],
      },
    },
  ],
  day7: [
    // 31번
    {
      id: 'sentence31',
      level: 1,
      isFinal: false,
      korean: '들어갈 수 있어요.',
      chinese: {
        hanzi: ['能', '进'],
        pinyin: ['néng', 'jìn'],
      },
    },
    {
      id: 'sentence31',
      level: 2,
      isFinal: false,
      korean: '그래야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['才', '能', '进'],
        pinyin: ['cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence31',
      level: 3,
      isFinal: false,
      korean: '신분증이 있어요.',
      chinese: {
        hanzi: ['有', '身份证'],
        pinyin: ['yǒu', 'shēnfènzhèng'],
      },
    },
    {
      id: 'sentence31',
      level: 4,
      isFinal: false,
      korean: '신분증이 있어야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['有', '身份证', '才', '能', '进'],
        pinyin: ['yǒu', 'shēnfènzhèng', 'cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence31',
      level: 5,
      isFinal: false,
      korean: '신분증이 있어야만 들어갈 수 있어요.',
      chinese: {
        hanzi: ['要', '有', '身份证', '才', '能', '进'],
        pinyin: ['Yào', 'yǒu', 'shēnfènzhèng', 'cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence31',
      level: 6,
      isFinal: true,
      korean: 'A: 이 아파트 단지는 신분증이 있어야만 들어갈 수 있어요.',
      chinese: {
        hanzi: ['这个', '小区', '要', '有', '身份证', '才', '能', '进'],
        pinyin: [
          'zhè ge',
          'xiǎoqū',
          'yào',
          'yǒu',
          'shēnfènzhèng',
          'cái',
          'néng',
          'jìn',
        ],
      },
    },
    {
      id: 'sentence31',
      level: 7,
      isFinal: false,
      korean: ['두고 왔어요.'],
      chinese: {
        hanzi: ['忘带', '了'],
        pinyin: ['wàng dài', 'le'],
      },
    },
    {
      id: 'sentence31',
      level: 8,
      isFinal: false,
      korean: '신분증을 두고 왔어요.',
      chinese: {
        hanzi: ['忘带身份证', '了'],
        pinyin: ['wàng dài shēnfènzhèng', 'le'],
      },
    },
    {
      id: 'sentence31',
      level: 9,
      isFinal: false,
      korean: '저는 신분증을 두고 왔어요.',
      chinese: {
        hanzi: ['我', '忘带', '身份证', '了'],
        pinyin: ['wǒ', 'wàng dài', 'shēnfènzhèng', 'le'],
      },
    },
    {
      id: 'sentence31',
      level: 10,
      isFinal: false,
      korean: '어떻게 하죠?',
      chinese: {
        hanzi: ['怎么办'],
        pinyin: ['zěnmebàn'],
      },
    },
    {
      id: 'sentence31',
      level: 11,
      isFinal: false,
      korean: '그럼 어떻게 하죠?',
      chinese: {
        hanzi: ['那', '怎么办'],
        pinyin: ['nà', 'zěnmebàn'],
      },
    },
    {
      id: 'sentence31',
      level: 12,
      isFinal: true,
      korean: 'B: 저는 신분증을 두고 왔는데, 그럼 어떻게 하죠?',
      chinese: {
        hanzi: ['我', '忘带', '身份证', '了', '那', '怎么办'],
        pinyin: ['wǒ', 'wàng dài', 'shēnfènzhèng', 'le', 'nà', 'zěnmebàn'],
      },
    },

    // 32번
    {
      id: 'sentence32',
      level: 1,
      isFinal: false,
      korean: '수업해요.',
      chinese: {
        hanzi: ['上课'],
        pinyin: ['shàng kè'],
      },
    },
    {
      id: 'sentence32',
      level: 2,
      isFinal: false,
      korean: '수업에 와요.',
      chinese: {
        hanzi: ['来', '上课'],
        pinyin: ['lái', 'shàng kè'],
      },
    },
    {
      id: 'sentence32',
      level: 3,
      isFinal: false,
      korean: '수업에 올 수 있어요.',
      chinese: {
        hanzi: ['能', '来', '上课'],
        pinyin: ['néng', 'lái', 'shàng kè'],
      },
    },
    {
      id: 'sentence32',
      level: 4,
      isFinal: false,
      korean: '수업에 올 수 없어요(못 와요).',
      chinese: {
        hanzi: ['不能', '来', '上课'],
        pinyin: ['bù néng', 'lái', 'shàng kè'],
      },
    },
    {
      id: 'sentence32',
      level: 5,
      isFinal: false,
      korean: '아파요.',
      chinese: {
        hanzi: ['生病'],
        pinyin: ['shēng bìng'],
      },
    },
    {
      id: 'sentence32',
      level: 6,
      isFinal: false,
      korean: '아파요(아픈 상태가 됐어요).',
      chinese: {
        hanzi: ['生病', '了'],
        pinyin: ['shēng bìng', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 7,
      isFinal: false,
      korean: '오늘 아파요.',
      chinese: {
        hanzi: ['今天', '生病', '了'],
        pinyin: ['jīntiān', 'shēng bìng', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 8,
      isFinal: false,
      korean: '그는 오늘 아파요.',
      chinese: {
        hanzi: ['他', '今天', '生病', '了'],
        pinyin: ['tā', 'jīntiān', 'shēng bìng', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 9,
      isFinal: true,
      korean: 'A: 그는 오늘 아파서 수업에 올 수 없어요(못 와요).',
      chinese: {
        hanzi: ['他', '今天', '生病', '了', '不能', '来', '上课'],
        pinyin: [
          'tā',
          'jīntiān',
          'shēng bìng',
          'le',
          'bù néng',
          'lái',
          'shàng kè',
        ],
      },
    },
    {
      id: 'sentence32',
      level: 10,
      isFinal: false,
      korean: '그를 봐요.',
      chinese: {
        hanzi: ['看', '他'],
        pinyin: ['kàn', 'tā'],
      },
    },
    {
      id: 'sentence32',
      level: 11,
      isFinal: false,
      korean: '그를 한번 봐요.',
      chinese: {
        hanzi: ['看看', '他'],
        pinyin: ['kànkan', 'tā'],
      },
    },
    {
      id: 'sentence32',
      level: 12,
      isFinal: false,
      korean: '그를 한번 보러 가요.',
      chinese: {
        hanzi: ['去', '看看', '他'],
        pinyin: ['qù', 'kànkan', 'tā'],
      },
    },
    {
      id: 'sentence32',
      level: 13,
      isFinal: true,
      korean: 'B: 그를 한번 보러 갈까요?',
      chinese: {
        hanzi: ['要不要', '去', '看看', '他'],
        pinyin: ['yào bu yào', 'qù', 'kànkan', 'tā'],
      },
    },

    // 33번
    {
      id: 'sentence33',
      level: 1,
      isFinal: false,
      korean: '휴대폰을 해요.',
      chinese: {
        hanzi: ['玩(儿)', '手机'],
        pinyin: ['wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence33',
      level: 2,
      isFinal: false,
      korean: '휴대폰 하면 안 돼요.',
      chinese: {
        hanzi: ['不能', '玩(儿)', '手机'],
        pinyin: ['bù néng', 'wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence33',
      level: 3,
      isFinal: false,
      korean: '자기 전에.....',
      chinese: {
        hanzi: ['睡觉前'],
        pinyin: ['shuì jiào qián'],
      },
    },
    {
      id: 'sentence33',
      level: 4,
      isFinal: false,
      korean: '자기 전에 휴대폰 하면 안 돼요.',
      chinese: {
        hanzi: ['睡觉', '前', '不能', '玩(儿)', '手机'],
        pinyin: ['shuì jiào', 'qián', 'bù néng', 'wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence33',
      level: 5,
      isFinal: false,
      korean: '안 좋아요.',
      chinese: {
        hanzi: ['不好'],
        pinyin: ['bù hǎo'],
      },
    },
    {
      id: 'sentence33',
      level: 6,
      isFinal: false,
      korean: '눈에 안 좋아요.',
      chinese: {
        hanzi: ['对', '眼睛', '不好'],
        pinyin: ['duì', 'yǎnjīng', 'bù hǎo'],
      },
    },
    {
      id: 'sentence33',
      level: 7,
      isFinal: true,
      korean: 'A: 자기 전에 휴대폰 하면 안 돼요, 눈에 안 좋아요.',
      chinese: {
        hanzi: ['睡觉', '前', '不能', '玩(儿)', '手机', '对', '眼睛', '不好'],
        pinyin: [
          'shuì jiào',
          'qián',
          'bù néng',
          'wán(r)',
          'shǒujī',
          'duì',
          'yǎnjīng',
          'bù hǎo',
        ],
      },
    },
    {
      id: 'sentence33',
      level: 8,
      isFinal: false,
      korean: '졸려요.',
      chinese: {
        hanzi: ['困'],
        pinyin: ['kùn'],
      },
    },
    {
      id: 'sentence33',
      level: 9,
      isFinal: false,
      korean: '안 졸려요.',
      chinese: {
        hanzi: ['不', '困'],
        pinyin: ['bú', 'kùn'],
      },
    },
    {
      id: 'sentence33',
      level: 10,
      isFinal: false,
      korean: '아직 안 졸려요~',
      chinese: {
        hanzi: ['还', '不', '困', '呢'],
        pinyin: ['hái', 'bú', 'kùn', 'ne'],
      },
    },
    {
      id: 'sentence33',
      level: 11,
      isFinal: false,
      korean: '저 아직 안 졸려요~',
      chinese: {
        hanzi: ['我', '还', '不', '困', '呢'],
        pinyin: ['wǒ', 'hái', 'bú', 'kùn', 'ne'],
      },
    },
    {
      id: 'sentence33',
      level: 12,
      isFinal: true,
      korean: 'B: 근데 저 아직 안 졸려요~',
      chinese: {
        hanzi: ['可', '我', '还', '不', '困', '呢'],
        pinyin: ['kě', 'wǒ', 'hái', 'bú', 'kùn', 'ne'],
      },
    },

    // 34번
    {
      id: 'sentence34',
      level: 1,
      isFinal: false,
      korean: '해내다.',
      chinese: {
        hanzi: ['做到'],
        pinyin: ['zuòdào'],
      },
    },
    {
      id: 'sentence34',
      level: 2,
      isFinal: false,
      korean: '충분히 해낼 수 있다.',
      chinese: {
        hanzi: ['能够', '做到'],
        pinyin: ['nénggòu', 'zuòdào'],
      },
    },
    {
      id: 'sentence34',
      level: 3,
      isFinal: false,
      korean: '……하면, 충분히 해낼 수 있다.',
      chinese: {
        hanzi: ['……，就', '能够', '做到'],
        pinyin: ['jiù', 'nénggòu', 'zuòdào'],
      },
    },
    {
      id: 'sentence34',
      level: 4,
      isFinal: false,
      korean: '노력하다.',
      chinese: {
        hanzi: ['努力'],
        pinyin: ['nǔlì'],
      },
    },
    {
      id: 'sentence34',
      level: 5,
      isFinal: false,
      korean: '노력한다면, …… .',
      chinese: {
        hanzi: ['努力的话'],
        pinyin: ['nǔlì de huà'],
      },
    },
    {
      id: 'sentence34',
      level: 6,
      isFinal: false,
      korean: '너가 노력한다면, …… .',
      chinese: {
        hanzi: ['你', '努力', '的话'],
        pinyin: ['nǐ', 'nǔlì', 'de huà'],
      },
    },
    {
      id: 'sentence34',
      level: 7,
      isFinal: true,
      korean: 'A: 너가 노력한다면, 충분히 해낼 수 있어.',
      chinese: {
        hanzi: ['你', '努力', '的话', '就', '能够', '做到'],
        pinyin: ['nǐ', 'nǔlì', 'de huà', 'jiù', 'nénggòu', 'zuòdào'],
      },
    },
    {
      id: 'sentence34',
      level: 8,
      isFinal: false,
      korean: '힘들다.',
      chinese: {
        hanzi: ['很累'],
        pinyin: ['hěn lèi'],
      },
    },
    {
      id: 'sentence34',
      level: 9,
      isFinal: false,
      korean: '진짜 너무 힘들어 .',
      chinese: {
        hanzi: ['真的', '很', '累'],
        pinyin: ['zhēnde', 'hěn', 'lèi'],
      },
    },
    {
      id: 'sentence34',
      level: 10,
      isFinal: false,
      korean: '가끔 진짜 너무 힘들어.',
      chinese: {
        hanzi: ['有时候', '真的', '很', '累'],
        pinyin: ['yǒushíhou', 'zhēnde', 'hěn', 'lèi'],
      },
    },
    {
      id: 'sentence34',
      level: 11,
      isFinal: false,
      korean: '하지만 가끔 진짜 너무 힘들어.',
      chinese: {
        hanzi: ['可是', '有时候', '真的', '很', '累'],
        pinyin: ['kěshì', 'yǒushíhou', 'zhēnde', 'hěn', 'lèi'],
      },
    },
    {
      id: 'sentence34',
      level: 12,
      isFinal: false,
      korean: '나 알아(나도 알아), …… .',
      chinese: {
        hanzi: ['我知道'],
        pinyin: ['wǒ zhīdao'],
      },
    },
    {
      id: 'sentence34',
      level: 13,
      isFinal: true,
      korean: 'B: 나 알아(나도 알아), 하지만 가끔 진짜 너무 힘들어.',
      chinese: {
        hanzi: ['我', '知道', '可是', '有时候', '真的', '很', '累'],
        pinyin: ['wǒ', 'zhīdao', 'kěshì', 'yǒushíhou', 'zhēnde', 'hěn', 'lèi'],
      },
    },

    // 35번
    {
      id: 'sentence35',
      level: 1,
      isFinal: false,
      korean: '여기에 앉아요',
      chinese: {
        hanzi: ['坐', '这儿'],
        pinyin: ['zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 2,
      isFinal: false,
      korean: '여기에 앉아도 돼요.',
      chinese: {
        hanzi: ['可以', '坐', '这儿'],
        pinyin: ['kěyǐ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 3,
      isFinal: false,
      korean: '당신은 여기에 앉아도 돼요.',
      chinese: {
        hanzi: ['你', '可以', '坐', '这儿'],
        pinyin: ['nǐ', 'kěyǐ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 4,
      isFinal: false,
      korean: '자리(사람) 없어요.',
      chinese: {
        hanzi: ['没有', '人'],
        pinyin: ['méiyǒu', 'rén'],
      },
    },
    {
      id: 'sentence35',
      level: 5,
      isFinal: false,
      korean: '여기에 자리(사람) 없어요.',
      chinese: {
        hanzi: ['这儿', '没有', '人'],
        pinyin: ['zhèr', 'méiyǒu', 'rén'],
      },
    },
    {
      id: 'sentence35',
      level: 6,
      isFinal: true,
      korean: 'A: 당신은 여기에 앉아도 돼요. 여기에 사람 없어요(빈자리예요).',
      chinese: {
        hanzi: ['你', '可以', '坐', '这儿', '这儿', '没有', '人'],
        pinyin: ['nǐ', 'kěyǐ', 'zuò', 'zhèr', 'zhèr', 'méiyǒu', 'rén'],
      },
    },
    {
      id: 'sentence35',
      level: 7,
      isFinal: false,
      korean: '여기에 앉아요.',
      chinese: {
        hanzi: ['坐', '这儿'],
        pinyin: ['zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 8,
      isFinal: false,
      korean: '저는 여기에 앉을게요.',
      chinese: {
        hanzi: ['我', '坐', '这儿'],
        pinyin: ['wǒ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 9,
      isFinal: false,
      korean: '그럼 저는 여기에 앉을게요.',
      chinese: {
        hanzi: ['那', '我', '坐', '这儿'],
        pinyin: ['nà', 'wǒ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 10,
      isFinal: false,
      korean: '[친근하고 자연스러운 어투] 그럼 저는 여기에 앉을게요.',
      chinese: {
        hanzi: ['那', '我', '坐', '这儿', '啦'],
        pinyin: ['nà', 'wǒ', 'zuò', 'zhèr', 'la'],
      },
    },
    {
      id: 'sentence35',
      level: 11,
      isFinal: true,
      korean: 'B: 감사해요, 그럼 저는 여기에 앉을게요.',
      chinese: {
        hanzi: ['谢谢', '那', '我', '坐', '这儿', '啦'],
        pinyin: ['xièxie', 'nà', 'wǒ', 'zuò', 'zhèr', 'la'],
      },
    },
  ],
  day8: [
    // 36번
    {
      id: 'sentence36',
      level: 1,
      isFinal: false,
      korean: '담배를 피워요',
      chinese: {
        hanzi: ['抽烟'],
        pinyin: ['chōu yān'],
      },
    },
    {
      id: 'sentence36',
      level: 2,
      isFinal: false,
      korean: '담배를 피워도 돼요',
      chinese: {
        hanzi: ['可以', '抽烟'],
        pinyin: ['kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence36',
      level: 3,
      isFinal: false,
      korean: '담배를 피우면 안 돼요',
      chinese: {
        hanzi: ['不可以', '抽烟'],
        pinyin: ['bù kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence36',
      level: 4,
      isFinal: false,
      korean: '여기서는 담배를 피우면 안 돼요',
      chinese: {
        hanzi: ['这里', '不可以', '抽烟'],
        pinyin: ['zhèlǐ', 'bù kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence36',
      level: 5,
      isFinal: false,
      korean: '흡연 구역이 있어요',
      chinese: {
        hanzi: ['有', '吸烟区'],
        pinyin: ['yǒu', 'xīyānqū'],
      },
    },
    {
      id: 'sentence36',
      level: 6,
      isFinal: false,
      korean: '밖에 흡연 구역이 있어요.',
      chinese: {
        hanzi: ['外面', '有', '吸烟区'],
        pinyin: ['wàimiàn', 'yǒu', 'xīyānqū'],
      },
    },
    {
      id: 'sentence36',
      level: 7,
      isFinal: true,
      korean: 'A: 여기서는 담배를 피우면 안 돼요, 밖에 흡연 구역이 있어요.',
      chinese: {
        hanzi: ['这里', '不可以', '抽烟', '外面', '有', '吸烟区'],
        pinyin: ['zhèlǐ', 'bù kěyǐ', 'chōu yān', 'wàimiàn', 'yǒu', 'xīyānqū'],
      },
    },
    {
      id: 'sentence36',
      level: 8,
      isFinal: false,
      korean: '밖에 흡연 구역이 있군요.',
      chinese: {
        hanzi: ['外面', '有', '吸烟区', '啊'],
        pinyin: ['wàimiàn', 'yǒu', 'xīyānqū', 'a'],
      },
    },
    {
      id: 'sentence36',
      level: 9,
      isFinal: false,
      korean: '(알고보니) 밖에 흡연 구역이 있군요.',
      chinese: {
        hanzi: ['原来', '外面', '有', '吸烟区', '啊'],
        pinyin: ['yuánlái', 'wàimiàn', 'yǒu', 'xīyānqū', 'a'],
      },
    },
    {
      id: 'sentence36',
      level: 10,
      isFinal: true,
      korean: 'B: 아, (알고보니) 밖에 흡연 구역이 있군요.',
      chinese: {
        hanzi: ['哦', '原来', '外面', '有', '吸烟区', '啊'],
        pinyin: ['ó', 'yuánlái', 'wàimiàn', 'yǒu', 'xīyānqū', 'a'],
      },
    },

    // 37번
    {
      id: 'sentence37',
      level: 1,
      isFinal: false,
      korean: '저는 성공해요.',
      chinese: {
        hanzi: ['我', '成功'],
        pinyin: ['wǒ', 'chénggōng'],
      },
    },
    {
      id: 'sentence37',
      level: 2,
      isFinal: false,
      korean: '저는 성공할 거예요.',
      chinese: {
        hanzi: ['我', '要', '成功'],
        pinyin: ['wǒ', 'yào', 'chénggōng'],
      },
    },
    {
      id: 'sentence37',
      level: 3,
      isFinal: false,
      korean: '저는 반드시 성공할 거예요.',
      chinese: {
        hanzi: ['我', '一定', '要', '成功'],
        pinyin: ['wǒ', 'yídìng', 'yào', 'chénggōng'],
      },
    },
    {
      id: 'sentence37',
      level: 4,
      isFinal: false,
      korean: '저는 이번에 반드시 성공할 거예요.',
      chinese: {
        hanzi: ['我', '这次', '一定', '要', '成功'],
        pinyin: ['wǒ', 'zhècì', 'yídìng', 'yào', 'chénggōng'],
      },
    },
    {
      id: 'sentence37',
      level: 5,
      isFinal: false,
      korean: '평생 후회해요.',
      chinese: {
        hanzi: ['后悔', '一辈子'],
        pinyin: ['hòuhuǐ', 'yíbèizi'],
      },
    },
    {
      id: 'sentence37',
      level: 6,
      isFinal: false,
      korean: '평생 후회할 거예요.',
      chinese: {
        hanzi: ['会', '后悔', '一辈子'],
        pinyin: ['huì', 'hòuhuǐ', 'yíbèizi'],
      },
    },
    {
      id: 'sentence37',
      level: 7,
      isFinal: false,
      korean: '안 그러면 평생 후회할 거예요.',
      chinese: {
        hanzi: ['不然', '会', '后悔', '一辈子'],
        pinyin: ['bùrán', 'huì', 'hòuhuǐ', 'yíbèizi'],
      },
    },
    {
      id: 'sentence37',
      level: 8,
      isFinal: false,
      korean: '안 그러면 평생 후회할 거예요.',
      chinese: {
        hanzi: ['不然', '会', '后悔', '一辈子'],
        pinyin: ['bùrán', 'huì', 'hòuhuǐ', 'yíbèizi'],
      },
    },
    {
      id: 'sentence37',
      level: 9,
      isFinal: true,
      korean:
        'A: 저는 이번에 반드시 성공할 거예요, 안 그러면 평생 후회할 거예요.',
      chinese: {
        hanzi: [
          '我',
          '这次',
          '一定',
          '要',
          '成功',
          '不然',
          '会',
          '后悔',
          '一辈子',
        ],
        pinyin: [
          'wǒ',
          'zhècì',
          'yídìng',
          'yào',
          'chénggōng',
          'bùrán',
          'huì',
          'hòuhuǐ',
          'yíbèizi',
        ],
      },
    },
    {
      id: 'sentence37',
      level: 10,
      isFinal: false,
      korean: '해내요.',
      chinese: {
        hanzi: ['做到'],
        pinyin: ['zuòdào'],
      },
    },
    {
      id: 'sentence37',
      level: 11,
      isFinal: false,
      korean: '해낼 수 있어요.',
      chinese: {
        hanzi: ['能', '做到'],
        pinyin: ['néng', 'zuòdào'],
      },
    },
    {
      id: 'sentence37',
      level: 12,
      isFinal: false,
      korean: '반드시 해낼 수 있어요.',
      chinese: {
        hanzi: ['一定', '能', '做到'],
        pinyin: ['yídìng', 'néng', 'zuòdào'],
      },
    },
    {
      id: 'sentence37',
      level: 13,
      isFinal: false,
      korean: '당신을 믿어요.',
      chinese: {
        hanzi: ['相信', '你'],
        pinyin: ['xiāngxìn', 'nǐ'],
      },
    },
    {
      id: 'sentence37',
      level: 14,
      isFinal: false,
      korean: '저는 당신을 믿어요.',
      chinese: {
        hanzi: ['我', '相信', '你'],
        pinyin: ['wǒ', 'xiāngxìn', 'nǐ'],
      },
    },
    {
      id: 'sentence37',
      level: 15,
      isFinal: true,
      korean: 'B: 저는 당신을 믿어요, 반드시 해낼 수 있을 거예요.',
      chinese: {
        hanzi: ['我', '相信', '你', '一定', '能', '做到'],
        pinyin: ['wǒ', 'xiāngxìn', 'nǐ', 'yídìng', 'néng', 'zuòdào'],
      },
    },

    // 38번
    {
      id: 'sentence38',
      level: 1,
      isFinal: false,
      korean: '주의해야 해요.',
      chinese: {
        hanzi: ['要', '注意'],
        pinyin: ['yào', 'zhùyì'],
      },
    },
    {
      id: 'sentence38',
      level: 2,
      isFinal: false,
      korean: '안전에 주의해야 해요.',
      chinese: {
        hanzi: ['要', '注意', '安全'],
        pinyin: ['yào', 'zhùyì', 'ānquán'],
      },
    },
    {
      id: 'sentence38',
      level: 3,
      isFinal: false,
      korean: '운전할 때는 안전에 주의해야 해요.',
      chinese: {
        hanzi: ['开车', '要', '注意', '安全'],
        pinyin: ['kāi chē', 'yào', 'zhùyì', 'ānquán'],
      },
    },
    {
      id: 'sentence38',
      level: 4,
      isFinal: false,
      korean: '전화를 해요.',
      chinese: {
        hanzi: ['打', '电话'],
        pinyin: ['dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence38',
      level: 5,
      isFinal: false,
      korean: '저에게 전화해요.',
      chinese: {
        hanzi: ['给', '我', '打', '电话'],
        pinyin: ['gěi', 'wǒ', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence38',
      level: 6,
      isFinal: false,
      korean: '도착하면 저에게 전화해요.',
      chinese: {
        hanzi: ['到了', '给', '我', '打', '电话'],
        pinyin: ['dào le', 'gěi', 'wǒ', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence38',
      level: 7,
      isFinal: true,
      korean: 'A: 운전할 때는 안전에 주의하고, 도착하면 저에게 전화해요.',
      chinese: {
        hanzi: [
          '开车',
          '要',
          '注意',
          '安全',
          '到',
          '了',
          '给',
          '我',
          '打',
          '电话',
        ],
        pinyin: [
          'kāi chē',
          'yào',
          'zhùyì',
          'ānquán',
          'dào',
          'le',
          'gěi',
          'wǒ',
          'dǎ',
          'diànhuà',
        ],
      },
    },
    {
      id: 'sentence38',
      level: 8,
      isFinal: false,
      korean: '걱정하지 마요(마음 놓아요).',
      chinese: {
        hanzi: ['放心'],
        pinyin: ['fàng xīn'],
      },
    },
    {
      id: 'sentence38',
      level: 9,
      isFinal: false,
      korean:
        '[조금 더 부드럽고 안심시키는 말투] 걱정하지 마세요(마음 놓으세요)~',
      chinese: {
        hanzi: ['放心', '吧'],
        pinyin: ['fàng xīn', 'ba'],
      },
    },
    {
      id: 'sentence38',
      level: 10,
      isFinal: true,
      korean: 'B: 알겠어요, 걱정하지 마세요(마음 놓으세요)~',
      chinese: {
        hanzi: ['好的', '放心', '吧'],
        pinyin: ['hǎo de', 'fàng xīn', 'ba'],
      },
    },

    // 39번
    {
      id: 'sentence39',
      level: 1,
      isFinal: false,
      korean: '쉬어요.',
      chinese: {
        hanzi: ['休息'],
        pinyin: ['xiūxi'],
      },
    },
    {
      id: 'sentence39',
      level: 2,
      isFinal: false,
      korean: '좀 쉬어요.',
      chinese: {
        hanzi: ['休息', '一下'],
        pinyin: ['xiūxi', 'yíxià'],
      },
    },
    {
      id: 'sentence39',
      level: 3,
      isFinal: false,
      korean: '좀 쉬고 싶어요.',
      chinese: {
        hanzi: ['想', '休息', '一下'],
        pinyin: ['xiǎng', 'xiūxi', 'yíxià'],
      },
    },
    {
      id: 'sentence39',
      level: 4,
      isFinal: false,
      korean: '저는 좀 쉬고 싶어요.',
      chinese: {
        hanzi: ['我', '想', '休息', '一下'],
        pinyin: ['wǒ', 'xiǎng', 'xiūxi', 'yíxià'],
      },
    },
    {
      id: 'sentence39',
      level: 5,
      isFinal: false,
      korean: '다시 얘기해요.',
      chinese: {
        hanzi: ['再', '聊'],
        pinyin: ['zài', 'liáo'],
      },
    },
    {
      id: 'sentence39',
      level: 6,
      isFinal: false,
      korean: '이따가 다시 얘기해요.',
      chinese: {
        hanzi: ['等会儿', '再', '聊'],
        pinyin: ['děnghuìr', 'zài', 'liáo'],
      },
    },
    {
      id: 'sentence39',
      level: 7,
      isFinal: true,
      korean: 'A: 저는 좀 쉬고 싶어요, 이따가 다시 얘기해요.',
      chinese: {
        hanzi: ['我', '想', '休息', '一下', '等会儿', '再', '聊'],
        pinyin: ['wǒ', 'xiǎng', 'xiūxi', 'yíxià', 'děnghuìr', 'zài', 'liáo'],
      },
    },
    {
      id: 'sentence39',
      level: 8,
      isFinal: false,
      korean: '먼저 쉬어요.',
      chinese: {
        hanzi: ['先', '休息'],
        pinyin: ['xiān', 'xiūxi'],
      },
    },
    {
      id: 'sentence39',
      level: 9,
      isFinal: false,
      korean: '(조금 더 부드러운 말투) 먼저 쉬세요.',
      chinese: {
        hanzi: ['先', '休息', '吧'],
        pinyin: ['xiān', 'xiūxi', 'ba'],
      },
    },
    {
      id: 'sentence39',
      level: 10,
      isFinal: false,
      korean: '당신 먼저 쉬세요.',
      chinese: {
        hanzi: ['你', '先', '休息', '吧'],
        pinyin: ['nǐ', 'xiān', 'xiūxi', 'ba'],
      },
    },
    {
      id: 'sentence39',
      level: 11,
      isFinal: true,
      korean: 'B: 알겠어요, 당신 먼저 쉬세요.',
      chinese: {
        hanzi: ['好的', '你', '先', '休息', '吧'],
        pinyin: ['hǎo de', 'nǐ', 'xiān', 'xiūxi', 'ba'],
      },
    },

    // 40번
    {
      id: 'sentence40',
      level: 1,
      isFinal: false,
      korean: '(밖에) 나가요.',
      chinese: {
        hanzi: ['出门'],
        pinyin: ['chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 2,
      isFinal: false,
      korean: '(밖에) 나가고 싶어요.',
      chinese: {
        hanzi: ['想', '出门'],
        pinyin: ['xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 3,
      isFinal: false,
      korean: '(밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['不想', '出门'],
        pinyin: ['bù xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 4,
      isFinal: false,
      korean: '오늘은 (밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['今天', '不想', '出门'],
        pinyin: ['jīntiān', 'bù xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 5,
      isFinal: false,
      korean: '저는 오늘 (밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['我', '今天', '不想', '出门'],
        pinyin: ['wǒ', 'jīntiān', 'bù xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 6,
      isFinal: false,
      korean: '하고 싶어요.',
      chinese: {
        hanzi: ['想', '做'],
        pinyin: ['xiǎng', 'zuò'],
      },
    },
    {
      id: 'sentence40',
      level: 7,
      isFinal: false,
      korean: '하고 싶지 않아요.',
      chinese: {
        hanzi: ['不想', '做'],
        pinyin: ['bù xiǎng', 'zuò'],
      },
    },
    {
      id: 'sentence40',
      level: 8,
      isFinal: false,
      korean: '아무것도 ......',
      chinese: {
        hanzi: ['什么也'],
        pinyin: ['shénme yě'],
      },
    },
    {
      id: 'sentence40',
      level: 9,
      isFinal: false,
      korean: '아무것도 ...하지 않아요.',
      chinese: {
        hanzi: ['什么也', '不'],
        pinyin: ['shénme yě', 'bù'],
      },
    },
    {
      id: 'sentence40',
      level: 10,
      isFinal: false,
      korean: '아무것도 하고 싶지 않아요.',
      chinese: {
        hanzi: ['什么也', '不想', '做'],
        pinyin: ['shénme yě', 'bù xiǎng', 'zuò'],
      },
    },
    {
      id: 'sentence40',
      level: 11,
      isFinal: true,
      korean: 'A: 저는 오늘 나가고 싶지 않고, 아무것도 하고 싶지 않아요.',
      chinese: {
        hanzi: ['我', '今天', '不想', '出门', '什么也', '不想', '做'],
        pinyin: [
          'wǒ',
          'jīntiān',
          'bù xiǎng',
          'chū mén',
          'shénme yě',
          'bù xiǎng',
          'zuò',
        ],
      },
    },
    {
      id: 'sentence40',
      level: 12,
      isFinal: false,
      korean: '푹 쉬어요.',
      chinese: {
        hanzi: ['好好', '休息'],
        pinyin: ['hǎohāo', 'xiūxi'],
      },
    },
    {
      id: 'sentence40',
      level: 13,
      isFinal: false,
      korean: '푹 좀 쉬어요.',
      chinese: {
        hanzi: ['好好', '休息', '一下'],
        pinyin: ['hǎohāo', 'xiūxi', 'yíxià'],
      },
    },
    {
      id: 'sentence40',
      level: 14,
      isFinal: true,
      korean: 'B: 그럼 푹 좀 쉬어요~',
      chinese: {
        hanzi: ['那', '好好', '休息', '一下', '吧'],
        pinyin: ['nà', 'hǎohāo', 'xiūxi', 'yíxià', 'ba'],
      },
    },
  ],
  day9: [
    // 41번
    {
      id: 'sentence41',
      level: 1,
      isFinal: false,
      korean: '푹 쉬어요.',
      chinese: {
        hanzi: ['多休息'],
        pinyin: ['duō xiūxi'],
      },
    },
    {
      id: 'sentence41',
      level: 2,
      isFinal: false,
      korean: '푹 쉬어야 해요.',
      chinese: {
        hanzi: ['应该', '多', '休息'],
        pinyin: ['yīnggāi', 'duō', 'xiūxi'],
      },
    },
    {
      id: 'sentence41',
      level: 3,
      isFinal: false,
      korean: '당신은 푹 쉬어야 해요.',
      chinese: {
        hanzi: ['你', '应该', '多', '休息'],
        pinyin: ['nǐ', 'yīnggāi', 'duō', 'xiūxi'],
      },
    },
    {
      id: 'sentence41',
      level: 4,
      isFinal: false,
      korean: '더 중요해요.',
      chinese: {
        hanzi: ['更', '重要'],
        pinyin: ['gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence41',
      level: 5,
      isFinal: false,
      korean: '일보다 더 중요해요.',
      chinese: {
        hanzi: ['比', '工作', '更', '重要'],
        pinyin: ['bǐ', 'gōngzuò', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence41',
      level: 6,
      isFinal: false,
      korean: '몸이 일보다 더 중요해요.',
      chinese: {
        hanzi: ['身体', '比', '工作', '更', '重要'],
        pinyin: ['shēntǐ', 'bǐ', 'gōngzuò', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence41',
      level: 7,
      isFinal: true,
      korean: 'A: 당신은 푹 쉬어야 해요, 몸이 일보다 더 중요해요.',
      chinese: {
        hanzi: ['你', '应该', '多', '休息', '身体', '比', '工作', '更', '重要'],
        pinyin: [
          'nǐ',
          'yīnggāi',
          'duō',
          'xiūxi',
          'shēntǐ',
          'bǐ',
          'gōngzuò',
          'gèng',
          'zhòngyào',
        ],
      },
    },
    {
      id: 'sentence41',
      level: 8,
      isFinal: false,
      korean: '일이 많아요.',
      chinese: {
        hanzi: ['事情', '多'],
        pinyin: ['shìqing', 'duō'],
      },
    },
    {
      id: 'sentence41',
      level: 9,
      isFinal: false,
      korean: '일이 너무 많아요.',
      chinese: {
        hanzi: ['事情', '太', '多', '了'],
        pinyin: ['shìqing', 'tài', 'duō', 'le'],
      },
    },
    {
      id: 'sentence41',
      level: 10,
      isFinal: false,
      korean: '하지만 일이 너무 많아요.',
      chinese: {
        hanzi: ['可是', '事情', '太', '多', '了'],
        pinyin: ['kěshì', 'shìqing', 'tài', 'duō', 'le'],
      },
    },
    {
      id: 'sentence41',
      level: 11,
      isFinal: true,
      korean: 'B: 저는 알아요(저도 알아요), 하지만 일이 너무 많아요.',
      chinese: {
        hanzi: ['我', '知道', '可是', '事情', '太', '多', '了'],
        pinyin: ['wǒ', 'zhīdao', 'kěshì', 'shìqing', 'tài', 'duō', 'le'],
      },
    },

    // 42번
    {
      id: 'sentence42',
      level: 1,
      isFinal: false,
      korean: '밤을 새요.',
      chinese: {
        hanzi: ['熬夜'],
        pinyin: ['áoyè'],
      },
    },
    {
      id: 'sentence42',
      level: 2,
      isFinal: false,
      korean: '자꾸 밤을 새요.',
      chinese: {
        hanzi: ['总是', '熬夜'],
        pinyin: ['zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence42',
      level: 3,
      isFinal: false,
      korean: '자꾸 밤새면 안 돼요.',
      chinese: {
        hanzi: ['不应该', '总是', '熬夜'],
        pinyin: ['bù yīnggāi', 'zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence42',
      level: 4,
      isFinal: false,
      korean: '당신은 자꾸 밤새면 안 돼요.',
      chinese: {
        hanzi: ['你', '不应该', '总是', '熬夜'],
        pinyin: ['nǐ', 'bù yīnggāi', 'zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence42',
      level: 5,
      isFinal: false,
      korean: '좋지 않아요.',
      chinese: {
        hanzi: ['不好'],
        pinyin: ['bù hǎo'],
      },
    },
    {
      id: 'sentence42',
      level: 6,
      isFinal: false,
      korean: '건강에 안 좋아요.',
      chinese: {
        hanzi: ['对', '身体', '不好'],
        pinyin: ['duì', 'shēntǐ', 'bù hǎo'],
      },
    },
    {
      id: 'sentence42',
      level: 7,
      isFinal: true,
      korean: 'A: 당신은 자꾸 밤새면 안 돼요, 건강에 안 좋아요.',
      chinese: {
        hanzi: ['你', '不应该', '总是', '熬夜', '对', '身体', '不好'],
        pinyin: [
          'nǐ',
          'bù yīnggāi',
          'zǒngshì',
          'áoyè',
          'duì',
          'shēntǐ',
          'bù hǎo',
        ],
      },
    },
    {
      id: 'sentence42',
      level: 8,
      isFinal: false,
      korean: '너무 바빠요.',
      chinese: {
        hanzi: ['太', '忙', '了'],
        pinyin: ['tài', 'máng', 'le'],
      },
    },
    {
      id: 'sentence42',
      level: 9,
      isFinal: false,
      korean: '낮에는 너무 바빠요.',
      chinese: {
        hanzi: ['白天', '太', '忙', '了'],
        pinyin: ['báitiān', 'tài', 'máng', 'le'],
      },
    },
    {
      id: 'sentence42',
      level: 10,
      isFinal: false,
      korean: '어쩔 수 없어요.(방법이 없어요).',
      chinese: {
        hanzi: ['没办法'],
        pinyin: ['méi bànfǎ'],
      },
    },
    {
      id: 'sentence42',
      level: 11,
      isFinal: true,
      korean: 'B: 어쩔 수 없어요, 낮에는 너무 바쁘거든요.',
      chinese: {
        hanzi: ['没', '办法', '白天', '太', '忙', '了'],
        pinyin: ['méi', 'bànfǎ', 'báitiān', 'tài', 'máng', 'le'],
      },
    },

    // 43번
    {
      id: 'sentence43',
      level: 1,
      isFinal: false,
      korean: '가야 해요.',
      chinese: {
        hanzi: ['得走'],
        pinyin: ['děi zǒu'],
      },
    },
    {
      id: 'sentence43',
      level: 2,
      isFinal: false,
      korean: '[상황의 변화] 이제 가야 해요.',
      chinese: {
        hanzi: ['得', '走', '了'],
        pinyin: ['děi', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence43',
      level: 3,
      isFinal: false,
      korean: '저는 이제 가야 해요.',
      chinese: {
        hanzi: ['我', '得', '走', '了'],
        pinyin: ['wǒ', 'děi', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence43',
      level: 4,
      isFinal: false,
      korean: '일이 있어요.',
      chinese: {
        hanzi: ['有', '事'],
        pinyin: ['yǒu', 'shì'],
      },
    },
    {
      id: 'sentence43',
      level: 5,
      isFinal: false,
      korean: '아직 일이 있어요.',
      chinese: {
        hanzi: ['还', '有', '事'],
        pinyin: ['hái', 'yǒu', 'shì'],
      },
    },
    {
      id: 'sentence43',
      level: 6,
      isFinal: true,
      korean: 'A: 저는 가야 해요, 집에 아직 일이 있어요.',
      chinese: {
        hanzi: ['我', '得', '走', '了', '家里', '还', '有', '事'],
        pinyin: ['wǒ', 'děi', 'zǒu', 'le', 'jiā lǐ', 'hái', 'yǒu', 'shì'],
      },
    },
    {
      id: 'sentence43',
      level: 7,
      isFinal: false,
      korean: '가는 길 조심해요.',
      chinese: {
        hanzi: ['路上', '小心'],
        pinyin: ['lùshang', 'xiǎoxīn'],
      },
    },
    {
      id: 'sentence43',
      level: 8,
      isFinal: false,
      korean: '당신은 가는 길 조심해요.',
      chinese: {
        hanzi: ['你', '路上', '小心'],
        pinyin: ['nǐ', 'lùshang', 'xiǎoxīn'],
      },
    },
    {
      id: 'sentence43',
      level: 9,
      isFinal: false,
      korean: '그럼 당신은 가는 길 조심해요.',
      chinese: {
        hanzi: ['那', '你', '路上', '小心'],
        pinyin: ['nà', 'nǐ', 'lùshang', 'xiǎoxīn'],
      },
    },
    {
      id: 'sentence43',
      level: 10,
      isFinal: true,
      korean: 'B: 알겠어요, 그럼 당신은 가는 길 조심해요.',
      chinese: {
        hanzi: ['好的', '那', '你', '路上', '小心'],
        pinyin: ['hǎo de', 'nà', 'nǐ', 'lùshang', 'xiǎoxīn'],
      },
    },

    // 44번
    {
      id: 'sentence44',
      level: 1,
      isFinal: false,
      korean: '나에게 시집 와.',
      chinese: {
        hanzi: ['嫁给我'],
        pinyin: ['jià gěi wǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 2,
      isFinal: false,
      korean: '너는 나에게 시집 와.',
      chinese: {
        hanzi: ['你', '嫁给', '我'],
        pinyin: ['nǐ', 'jià gěi', 'wǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 3,
      isFinal: false,
      korean: '너는 나에게 시집 올래(결혼할래)?',
      chinese: {
        hanzi: ['你', '嫁给', '我', '吗'],
        pinyin: ['nǐ', 'jià gěi', 'wǒ', 'ma'],
      },
    },
    {
      id: 'sentence44',
      level: 4,
      isFinal: false,
      korean: '너는 나에게 시집 와 줄래? (결혼해 줄래?)',
      chinese: {
        hanzi: ['你', '愿意', '嫁给', '我', '吗'],
        pinyin: ['nǐ', 'yuànyì', 'jià gěi', 'wǒ', 'ma'],
      },
    },
    {
      id: 'sentence44',
      level: 5,
      isFinal: false,
      korean: '너를 사랑해.',
      chinese: {
        hanzi: ['爱', '你'],
        pinyin: ['ài', 'nǐ'],
      },
    },
    {
      id: 'sentence44',
      level: 6,
      isFinal: false,
      korean: '너를 정말 사랑해.',
      chinese: {
        hanzi: ['很', '爱', '你'],
        pinyin: ['hěn', 'ài', 'nǐ'],
      },
    },
    {
      id: 'sentence44',
      level: 7,
      isFinal: false,
      korean: '진짜 정말 너를 사랑해.',
      chinese: {
        hanzi: ['真的', '很', '爱', '你'],
        pinyin: ['zhēnde', 'hěn', 'ài', 'nǐ'],
      },
    },
    {
      id: 'sentence44',
      level: 8,
      isFinal: false,
      korean: '나는 진짜 정말 너를 사랑해.',
      chinese: {
        hanzi: ['我', '真的', '很', '爱', '你'],
        pinyin: ['wǒ', 'zhēnde', 'hěn', 'ài', 'nǐ'],
      },
    },
    {
      id: 'sentence44',
      level: 9,
      isFinal: true,
      korean:
        'A: 너는 나에게 시집 와 줄래(결혼해 줄래)? 나는 진짜 정말 너를 사랑해.',
      chinese: {
        hanzi: [
          '你',
          '愿意',
          '嫁给',
          '我',
          '吗',
          '我',
          '真的',
          '很',
          '爱',
          '你',
        ],
        pinyin: [
          'nǐ',
          'yuànyì',
          'jià gěi',
          'wǒ',
          'ma',
          'wǒ',
          'zhēnde',
          'hěn',
          'ài',
          'nǐ',
        ],
      },
    },
    {
      id: 'sentence44',
      level: 10,
      isFinal: false,
      korean: '당연히 원해.',
      chinese: {
        hanzi: ['当然', '愿意'],
        pinyin: ['dāngrán', 'yuànyì'],
      },
    },
    {
      id: 'sentence44',
      level: 11,
      isFinal: false,
      korean: '나는 당연히 원해.',
      chinese: {
        hanzi: ['我', '当然', '愿意'],
        pinyin: ['wǒ', 'dāngrán', 'yuànyì'],
      },
    },
    {
      id: 'sentence44',
      level: 12,
      isFinal: true,
      korean: 'B: 나는 당연히 원하지!',
      chinese: {
        hanzi: ['我', '当然', '愿意', '啊'],
        pinyin: ['wǒ', 'dāngrán', 'yuànyì', 'a'],
      },
    },

    // 45번
    {
      id: 'sentence45',
      level: 1,
      isFinal: false,
      korean: '생각을 바꾸다.',
      chinese: {
        hanzi: ['改变', '想法'],
        pinyin: ['gǎibiàn', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence45',
      level: 2,
      isFinal: false,
      korean: '자신의 생각을 바꾸다.',
      chinese: {
        hanzi: ['改变', '自己', ' 的', '想法'],
        pinyin: ['gǎibiàn', 'zìjǐ', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence45',
      level: 3,
      isFinal: false,
      korean: '자신의 생각을 바꾸길 원하지 않아.',
      chinese: {
        hanzi: ['不愿意', '改变', '自己', ' 的', '想法'],
        pinyin: ['bú yuànyì', 'gǎibiàn', 'zìjǐ', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence45',
      level: 4,
      isFinal: false,
      korean: '어떤 사람들은 자신의 생각을 바꾸길 원하지 않아.',
      chinese: {
        hanzi: ['有些人', '不愿意', '改变', '自己', ' 的', '想法'],
        pinyin: ['yǒuxiē rén', 'bú yuànyì', 'gǎibiàn', 'zìjǐ', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence45',
      level: 5,
      isFinal: false,
      korean: '그 사람들은 ......라고 생각해.',
      chinese: {
        hanzi: ['他们', '觉得......'],
        pinyin: ['tāmen', 'juéde'],
      },
    },
    {
      id: 'sentence45',
      level: 6,
      isFinal: false,
      korean: '그 사람들은 항상 ......라고 생각해.',
      chinese: {
        hanzi: ['他们', '总', '觉得......'],
        pinyin: ['tāmen', 'zǒng', 'juéde'],
      },
    },
    {
      id: 'sentence45',
      level: 7,
      isFinal: false,
      korean: '자신이 옳다(맞다).',
      chinese: {
        hanzi: ['自己', '是', '对', '的'],
        pinyin: ['zìjǐ', 'shì', 'duì', 'de'],
      },
    },
    {
      id: 'sentence45',
      level: 8,
      isFinal: false,
      korean: '그 사람들은 항상 자신이 옳다고 생각해.',
      chinese: {
        hanzi: ['他们', '总', '觉得', '自己', '是', '对', '的'],
        pinyin: ['tāmen', 'zǒng', 'juéde', 'zìjǐ', 'shì', 'duì', 'de'],
      },
    },
    {
      id: 'sentence45',
      level: 9,
      isFinal: true,
      korean:
        'A: 어떤 사람들은 자신의 생각을 바꾸길 원하지 않아. 그 사람들은 항상 자신이 옳다고 생각해.',
      chinese: {
        hanzi: [
          '有些人',
          '不愿意',
          '改变',
          '自己的',
          '想法',
          '他们',
          '总',
          '觉得',
          '自己',
          '是',
          '对',
          '的',
        ],
        pinyin: [
          'yǒuxiē rén',
          'bú yuànyì',
          'gǎibiàn',
          'zìjǐ de',
          'xiǎngfǎ',
          'tāmen',
          'zǒng',
          'juéde',
          'zìjǐ',
          'shì',
          'duì',
          'de',
        ],
      },
    },
    {
      id: 'sentence45',
      level: 10,
      isFinal: false,
      korean: '다 있어요.',
      chinese: {
        hanzi: ['都', '有'],
        pinyin: ['dōu', 'yǒu'],
      },
    },
    {
      id: 'sentence45',
      level: 11,
      isFinal: false,
      korean: '어디에나 다 있어요.',
      chinese: {
        hanzi: ['哪里', '都', '有'],
        pinyin: ['nǎlǐ', 'dōu', 'yǒu'],
      },
    },
    {
      id: 'sentence45',
      level: 12,
      isFinal: true,
      korean: 'B: 이런 사람은 어디에나 다 있지.',
      chinese: {
        hanzi: ['这', '种', '人', '哪里', '都', '有'],
        pinyin: ['zhè', 'zhǒng', 'rén', 'nǎlǐ', 'dōu', 'yǒu'],
      },
    },
  ],
  day10: [
    // 46번
    {
      id: 'sentence46',
      level: 1,
      isFinal: false,
      korean: '스카이다이빙하다.',
      chinese: {
        hanzi: ['跳伞'],
        pinyin: ['tiàosǎn'],
      },
    },
    {
      id: 'sentence46',
      level: 2,
      isFinal: false,
      korean: '스카이다이빙 할 수 있겠다(해볼 용기 있다).',
      chinese: {
        hanzi: ['敢', '跳伞'],
        pinyin: ['gǎn', 'tiàosǎn'],
      },
    },
    {
      id: 'sentence46',
      level: 3,
      isFinal: false,
      korean: '너는 스카이다이빙 할 수 있겠어(해볼 용기 있어)?',
      chinese: {
        hanzi: ['你', '敢', '跳伞', '吗'],
        pinyin: ['nǐ', 'gǎn', 'tiàosǎn', 'ma'],
      },
    },
    {
      id: 'sentence46',
      level: 4,
      isFinal: false,
      korean: '되게 짜릿하다(아주 짜릿하다).',
      chinese: {
        hanzi: ['很', '刺激'],
        pinyin: ['hěn', 'cìjī'],
      },
    },
    {
      id: 'sentence46',
      level: 5,
      isFinal: false,
      korean: '듣자 하니 짜릿하대.',
      chinese: {
        hanzi: ['听说', '很', '刺激'],
        pinyin: ['tīngshuō', 'hěn', 'cìjī'],
      },
    },
    {
      id: 'sentence46',
      level: 6,
      isFinal: true,
      korean:
        'A: 너는 스카이다이빙 할 수 있겠어(해볼 용기 있어)? 되게 짜릿하다(아주 짜릿하다).',
      chinese: {
        hanzi: ['你', '敢', '跳伞', '吗', '听说', '很', '刺激'],
        pinyin: ['nǐ', 'gǎn', 'tiàosǎn', 'ma', 'tīngshuō', 'hěn', 'cìjī'],
      },
    },
    {
      id: 'sentence46',
      level: 7,
      isFinal: false,
      korean: '[자신 있게 대답] 할 수 있지!',
      chinese: {
        hanzi: ['敢', '啊'],
        pinyin: ['gǎn', 'a'],
      },
    },
    {
      id: 'sentence46',
      level: 8,
      isFinal: false,
      korean: '한번 해보다.',
      chinese: {
        hanzi: ['试试'],
        pinyin: ['shìshi'],
      },
    },
    {
      id: 'sentence46',
      level: 9,
      isFinal: false,
      korean: '한 번 해보고 싶어.',
      chinese: {
        hanzi: ['想', '试试'],
        pinyin: ['xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence46',
      level: 10,
      isFinal: false,
      korean: '계속 한 번 해보고 싶었어.',
      chinese: {
        hanzi: ['一直', '想', '试试'],
        pinyin: ['yìzhí', 'xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence46',
      level: 11,
      isFinal: false,
      korean: '나는 계속 한 번 해보고 싶었어.',
      chinese: {
        hanzi: ['我', '一直', '想', '试试'],
        pinyin: ['wǒ', 'yìzhí', 'xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence46',
      level: 12,
      isFinal: true,
      korean: 'B: 할 수 있지! 나는 계속 한 번 해보고 싶었어.',
      chinese: {
        hanzi: ['敢', '啊', '我', '一直', '想', '试试'],
        pinyin: ['gǎn', 'a', 'wǒ', 'yìzhí', 'xiǎng', 'shìshi'],
      },
    },

    // 47번
    {
      id: 'sentence47',
      level: 1,
      isFinal: false,
      korean: '밤길을 걸어요.',
      chinese: {
        hanzi: ['走夜路'],
        pinyin: ['zǒu yèlù'],
      },
    },
    {
      id: 'sentence47',
      level: 2,
      isFinal: false,
      korean: '혼자 밤길을 걸어요.',
      chinese: {
        hanzi: ['一个人', '走', '夜路'],
        pinyin: ['yí ge rén', 'zǒu', 'yèlù'],
      },
    },
    {
      id: 'sentence47',
      level: 3,
      isFinal: false,
      korean: '나는 혼자 밤길을 걷지 못하겠어.',
      chinese: {
        hanzi: ['我', '不敢', '一个人', '走', '夜路'],
        pinyin: ['wǒ', 'bù gǎn', 'yí ge rén', 'zǒu', 'yèlù'],
      },
    },
    {
      id: 'sentence47',
      level: 4,
      isFinal: false,
      korean: '집에 가요.',
      chinese: {
        hanzi: ['回家'],
        pinyin: ['huí jiā'],
      },
    },
    {
      id: 'sentence47',
      level: 5,
      isFinal: false,
      korean: '택시를 타고 집에 가.',
      chinese: {
        hanzi: ['叫', '车', '回', '家'],
        pinyin: ['jiào', 'chē', 'huí', 'jiā'],
      },
    },
    {
      id: 'sentence47',
      level: 6,
      isFinal: false,
      korean: '자주 택시를 타고 집에 가.',
      chinese: {
        hanzi: ['常常', '叫', '车', '回', '家'],
        pinyin: ['chángcháng', 'jiào', 'chē', 'huí', 'jiā'],
      },
    },
    {
      id: 'sentence47',
      level: 7,
      isFinal: false,
      korean: '……, 그래서 자주 택시를 타고 집에 가.',
      chinese: {
        hanzi: ['……, 所以', '常常', '叫', '车', '回', '家'],
        pinyin: ['suǒyǐ', 'chángcháng', 'jiào', 'chē', 'huí', 'jiā'],
      },
    },
    {
      id: 'sentence47',
      level: 8,
      isFinal: true,
      korean:
        'A: 저는 혼자 밤길을 걷지 못하겠어요. 그래서 자주 택시를 타고 집에 가요.',
      chinese: {
        hanzi: [
          '我',
          '不敢',
          '一个人',
          '走',
          '夜路',
          '所以',
          '常常',
          '叫',
          '车',
          '回',
          '家',
        ],
        pinyin: [
          'wǒ',
          'bù gǎn',
          'yí ge rén',
          'zǒu',
          'yèlù',
          'suǒyǐ',
          'chángcháng',
          'jiào',
          'chē',
          'huí',
          'jiā',
        ],
      },
    },
    {
      id: 'sentence47',
      level: 9,
      isFinal: false,
      korean: '너무 무서워.',
      chinese: {
        hanzi: ['太', '可怕', '了'],
        pinyin: ['tài', 'kěpà', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 10,
      isFinal: false,
      korean: '혼자 다니는 건 너무 무서워.',
      chinese: {
        hanzi: ['一个人', '走', '太', '可怕', '了'],
        pinyin: ['yí ge rén', 'zǒu', 'tài', 'kěpà', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 11,
      isFinal: false,
      korean: '밤에 혼자 다니는 건 너무 무서워요.',
      chinese: {
        hanzi: ['晚上', '一个人', '走', '太', '可怕', '了'],
        pinyin: ['wǎnshang', 'yí ge rén', 'zǒu', 'tài', 'kěpà', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 12,
      isFinal: true,
      korean: 'B: 나도 그래, 밤에 혼자 다니는 건 너무 무서워.',
      chinese: {
        hanzi: ['我也是', '晚上', '一个人', '走', '太', '可怕', '了'],
        pinyin: [
          'wǒ yě shì',
          'wǎnshang',
          'yí ge rén',
          'zǒu',
          'tài',
          'kěpà',
          'le',
        ],
      },
    },

    // 48번
    {
      id: 'sentence48',
      level: 1,
      isFinal: false,
      korean: '후회해.',
      chinese: {
        hanzi: ['后悔'],
        pinyin: ['hòuhuǐ'],
      },
    },
    {
      id: 'sentence48',
      level: 2,
      isFinal: false,
      korean: '후회할 거야.',
      chinese: {
        hanzi: ['会', '后悔', '的'],
        pinyin: ['huì', 'hòuhuǐ', 'de'],
      },
    },
    {
      id: 'sentence48',
      level: 3,
      isFinal: false,
      korean: '나중에 후회할 거야.',
      chinese: {
        hanzi: ['以后', '会', '后悔', '的'],
        pinyin: ['yǐhòu', 'huì', 'hòuhuǐ', 'de'],
      },
    },
    {
      id: 'sentence48',
      level: 4,
      isFinal: false,
      korean: '그렇지 않으면 나중에 후회할 거야.',
      chinese: {
        hanzi: ['不然', '以后', '会', '后悔', '的'],
        pinyin: ['bùrán', 'yǐhòu', 'huì', 'hòuhuǐ', 'de'],
      },
    },
    {
      id: 'sentence48',
      level: 5,
      isFinal: false,
      korean: '반드시 와야 해.',
      chinese: {
        hanzi: ['必须', '来'],
        pinyin: ['bìxū', 'lái'],
      },
    },
    {
      id: 'sentence48',
      level: 6,
      isFinal: false,
      korean: '너는 반드시 와야 해.',
      chinese: {
        hanzi: ['你', '必须', '来'],
        pinyin: ['nǐ', 'bìxū', 'lái'],
      },
    },
    {
      id: 'sentence48',
      level: 7,
      isFinal: true,
      korean: 'A: 너는 반드시 와야 해. 그렇지 않으면 나중에 후회할 거야.',
      chinese: {
        hanzi: ['你', '必须', '来', '不然', '以后', '会', '后悔', '的'],
        pinyin: ['nǐ', 'bìxū', 'lái', 'bùrán', 'yǐhòu', 'huì', 'hòuhuǐ', 'de'],
      },
    },
    {
      id: 'sentence48',
      level: 8,
      isFinal: false,
      korean: '꼭 갈게.',
      chinese: {
        hanzi: ['一定', '去'],
        pinyin: ['yídìng', 'qù'],
      },
    },
    {
      id: 'sentence48',
      level: 9,
      isFinal: false,
      korean: '나 꼭 갈게.',
      chinese: {
        hanzi: ['我', '一定', '去'],
        pinyin: ['wǒ', 'yídìng', 'qù'],
      },
    },
    {
      id: 'sentence48',
      level: 10,
      isFinal: false,
      korean: '그럼 나 꼭 갈게.',
      chinese: {
        hanzi: ['那', '我', '一定', '去'],
        pinyin: ['nà', 'wǒ', 'yídìng', 'qù'],
      },
    },
    {
      id: 'sentence48',
      level: 11,
      isFinal: true,
      korean: 'B: 알겠어, 그럼 나 꼭 갈게.',
      chinese: {
        hanzi: ['好吧', '那', '我', '一定', '去'],
        pinyin: ['hǎo ba', 'nà', 'wǒ', 'yídìng', 'qù'],
      },
    },

    // 49번
    {
      id: 'sentence49',
      level: 1,
      isFinal: false,
      korean: '읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['值得', '看'],
        pinyin: ['zhídé', 'kàn'],
      },
    },
    {
      id: 'sentence49',
      level: 2,
      isFinal: false,
      korean: '이 책은 읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['这本书', '值得', '看'],
        pinyin: ['zhè běn shū', 'zhídé', 'kàn'],
      },
    },
    {
      id: 'sentence49',
      level: 3,
      isFinal: false,
      korean: '무언가를 배웠어요.',
      chinese: {
        hanzi: ['学到', '东西'],
        pinyin: ['xuédào', 'dōngxi'],
      },
    },
    {
      id: 'sentence49',
      level: 4,
      isFinal: false,
      korean: '많은 것',
      chinese: {
        hanzi: ['很多', '东西'],
        pinyin: ['hěn duō', 'dōngxi'],
      },
    },
    {
      id: 'sentence49',
      level: 5,
      isFinal: false,
      korean: '많은 걸 배웠어요.',
      chinese: {
        hanzi: ['学到', '很多', '东西'],
        pinyin: ['xuédào', 'hěn duō', 'dōngxi'],
      },
    },
    {
      id: 'sentence49',
      level: 6,
      isFinal: false,
      korean: '많은 걸 배울 수 있어요.',
      chinese: {
        hanzi: ['能', '学到', '很多', '东西'],
        pinyin: ['néng', 'xuédào', 'hěn duō', 'dōngxi'],
      },
    },
    {
      id: 'sentence49',
      level: 7,
      isFinal: true,
      korean:
        'A: 이 책은 읽을 만해요(읽어 볼 가치가 있어요), 많은 걸 배울 수 있어요.',
      chinese: {
        hanzi: ['这', '本', '书', '值得', '看', '能', '学到', '很多', '东西'],
        pinyin: [
          'zhè',
          'běn',
          'shū',
          'zhídé',
          'kàn',
          'néng',
          'xuédào',
          'hěn duō',
          'dōngxi',
        ],
      },
    },
    {
      id: 'sentence49',
      level: 8,
      isFinal: false,
      korean: '한번 봐요.',
      chinese: {
        hanzi: ['看看'],
        pinyin: ['kànkan'],
      },
    },
    {
      id: 'sentence49',
      level: 9,
      isFinal: false,
      korean: '한번 보러 가요.',
      chinese: {
        hanzi: ['去', '看看'],
        pinyin: ['qù', 'kànkan'],
      },
    },
    {
      id: 'sentence49',
      level: 10,
      isFinal: false,
      korean: '저도 한번 보러 가야겠어요.',
      chinese: {
        hanzi: ['我', '也', '去', '看看'],
        pinyin: ['wǒ', 'yě', 'qù', 'kànkan'],
      },
    },
    {
      id: 'sentence49',
      level: 11,
      isFinal: false,
      korean: '그럼 저도 한번 보러 가야겠어요.',
      chinese: {
        hanzi: ['那', '我', '也', '去', '看看'],
        pinyin: ['nà', 'wǒ', 'yě', 'qù', 'kànkan'],
      },
    },
    {
      id: 'sentence49',
      level: 12,
      isFinal: true,
      korean: 'B: 그래요? 그럼 저도 한번 보러 가야겠어요.',
      chinese: {
        hanzi: ['是吗', '那', '我', '也', '去', '看看'],
        pinyin: ['shì ma', 'nà', 'wǒ', 'yě', 'qù', 'kànkan'],
      },
    },

    // 50번
    {
      id: 'sentence50',
      level: 1,
      isFinal: false,
      korean: '화낼 만해.',
      chinese: {
        hanzi: ['值得', '生气'],
        pinyin: ['zhídé', 'shēngqì'],
      },
    },
    {
      id: 'sentence50',
      level: 2,
      isFinal: false,
      korean: '화낼 만한 게 아니야.',
      chinese: {
        hanzi: ['不值得', '生气'],
        pinyin: ['bù zhídé', 'shēngqì'],
      },
    },
    {
      id: 'sentence50',
      level: 3,
      isFinal: false,
      korean: '전혀 화낼 만한 게 아니야.',
      chinese: {
        hanzi: ['根本', '不值得', '生气'],
        pinyin: ['gēnběn', 'bù zhídé', 'shēngqì'],
      },
    },
    {
      id: 'sentence50',
      level: 4,
      isFinal: false,
      korean: '이런 사소한 일.',
      chinese: {
        hanzi: ['这种小事'],
        pinyin: ['zhè zhǒng xiǎoshì'],
      },
    },
    {
      id: 'sentence50',
      level: 5,
      isFinal: false,
      korean: '이런 사소한 일은 전혀 화낼 만한 게 아니야.',
      chinese: {
        hanzi: ['这', '种', '小事', '根本', '不值得', '生气'],
        pinyin: ['zhè', 'zhǒng', 'xiǎoshì', 'gēnběn', 'bù zhídé', 'shēngqì'],
      },
    },
    {
      id: 'sentence50',
      level: 6,
      isFinal: false,
      korean: '지나갔어.',
      chinese: {
        hanzi: ['过去了'],
        pinyin: ['guòqù le'],
      },
    },
    {
      id: 'sentence50',
      level: 7,
      isFinal: false,
      korean: '한번 웃어봐.',
      chinese: {
        hanzi: ['笑一笑'],
        pinyin: ['xiào yi xiào'],
      },
    },
    {
      id: 'sentence50',
      level: 8,
      isFinal: false,
      korean: '한번 웃어넘기면 돼.',
      chinese: {
        hanzi: ['笑一笑', '就', '过去', '了'],
        pinyin: ['xiào yi xiào', 'jiù', 'guòqù', 'le'],
      },
    },
    {
      id: 'sentence50',
      level: 9,
      isFinal: true,
      korean:
        'A: 이런 사소한 일은 전혀 화낼 만한 게 아니야, 한번 웃어넘기면 돼.',
      chinese: {
        hanzi: [
          '这',
          '种',
          '小事',
          '根本',
          '不值得',
          '生气',
          '笑一笑',
          '就',
          '过去',
          '了',
        ],
        pinyin: [
          'zhè',
          'zhǒng',
          'xiǎoshì',
          'gēnběn',
          'bù zhídé',
          'shēngqì',
          'xiào yi xiào',
          'jiù',
          'guòqù',
          'le',
        ],
      },
    },
    {
      id: 'sentence50',
      level: 10,
      isFinal: false,
      korean: '말이 맞아.',
      chinese: {
        hanzi: ['说得对'],
        pinyin: ['shuō de duì'],
      },
    },
    {
      id: 'sentence50',
      level: 11,
      isFinal: false,
      korean: '너 말이 맞아.',
      chinese: {
        hanzi: ['你', '说', '得', '对'],
        pinyin: ['nǐ', 'shuō', 'de', 'duì'],
      },
    },
    {
      id: 'sentence50',
      level: 12,
      isFinal: true,
      korean: 'B: 그래, 너 말이 맞아.',
      chinese: {
        hanzi: ['好吧', '你', '说', '得', '对'],
        pinyin: ['hǎo ba', 'nǐ', 'shuō', 'de', 'duì'],
      },
    },
  ],
};

// 전역 변수로 내보내기
window.sentenceData = sentenceData;
