const STORAGE_KEY = 'lexora-learning-v1';
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const TRANSLATIONS = {
  en: {
    brandSubtitle: 'IELTS Vocabulary', newChat: 'New chat', yourSpace: 'YOUR SPACE',
    levelA1: 'Beginner', levelA2: 'Elementary', levelB1: 'Intermediate',
    levelB2: 'Upper Intermediate', levelC1: 'Advanced', levelC2: 'Proficiency',
    detailA1: 'Everyday words and simple phrases', detailA2: 'Useful words for familiar situations',
    detailB1: 'Express ideas with more confidence', detailB2: 'Nuance for work and study',
    detailC1: 'Precise language for complex ideas', detailC2: 'Mastery of subtle meaning and style',
    brandHome: 'IELTS Vocabulary Assistant home', mainNavigation: 'Main navigation',
    chatConversation: 'Chat conversation', messages: 'Messages',
    history: 'Conversation history', vocabularyBook: 'Vocabulary book', progress: 'My progress',
    recentChats: 'RECENT CHATS', learningLevel: 'LEARNING LEVEL',
    chooseLevel: 'Choose your CEFR level', levelHint: 'Answers and practice adapt to your level.',
    myProfile: 'My learning profile', profileSubtitle: 'Personal vocabulary journey',
    openMenu: 'Open menu', appName: 'IELTS Vocabulary Assistant',
    appSubtitle: 'Your personal IELTS vocabulary tutor', ready: 'Ready to help',
    activeLevel: 'Active CEFR level', interfaceLanguage: 'Interface language',
    startNewChat: 'Start a new chat', welcomeEyebrow: 'YOUR PERSONAL LEARNING COMPANION',
    welcomeTitleOne: 'Small steps.', welcomeTitleTwo: 'Stronger vocabulary.',
    welcomeDescription: 'Build the words and confidence you need for IELTS. Ask me anything, or choose a place to start.',
    promptLearnTitle: 'Learn new words', promptLearnSubtitle: 'Discover vocabulary at your level',
    promptPracticeTitle: 'Practice translation', promptPracticeSubtitle: 'Turn what you know into English',
    promptTestTitle: 'Check your level', promptTestSubtitle: 'Try a friendly vocabulary quiz',
    promptIeltsTitle: 'IELTS vocabulary', promptIeltsSubtitle: 'Words for writing and speaking',
    welcomeFooter: 'Learn at your own pace. Every conversation is a fresh opportunity.',
    yourMessage: 'Your message', chatPlaceholder: 'Ask anything about English vocabulary...',
    toSend: 'to send', newLine: 'for a new line', send: 'Send',
    sendMessage: 'Send message', disclaimer: 'Lexora can make mistakes. Check important information and keep practicing.',
    closePanel: 'Close panel', emptyHistory: 'Your conversations will appear here.',
    historyEyebrow: 'PICK UP WHERE YOU LEFT OFF', progressEyebrow: 'YOUR LEARNING JOURNEY',
    vocabularyEyebrow: 'WORDS FOR YOUR NEXT STEP', historyIntro: 'Your recent learning conversations are saved in this browser.',
    historyPanelEmpty: 'No conversations yet. Start a chat to begin your vocabulary journey.',
    vocabIntro: 'Explore useful words from A1 to C2. Your saved status and bookmarks stay in this browser. Current focus: {level} {levelName}.',
    searchVocabulary: 'Search words or meanings...', searchLabel: 'Search vocabulary',
    filterLevel: 'Filter vocabulary by level', allLevels: 'All levels', bookmarked: 'Bookmarked',
    noVocabulary: 'No vocabulary found. Try another word or filter.',
    bookmarkWord: 'Bookmark {word}', removeBookmark: 'Remove {word} bookmark',
    example: 'Example: ', learningStatus: 'Learning status for {word}',
    statusNew: 'Not learned', statusLearning: 'Learning', statusMastered: 'Mastered',
    statCurrentLevel: 'Current level', statWordsLearned: 'Words learned',
    statWordsMastered: 'Words mastered', statAccuracy: 'Practice accuracy',
    statStreak: 'Learning streak', statLevelCompletion: 'Level completion',
    streakDays: '{count} days', streakDay: '1 day', cefrPath: 'Your CEFR path',
    progressTip: 'Mark words as Learning or Mastered in your Vocabulary Book to track your progress. Ask Lexora for a short quiz to practice.',
    keepGoing: 'Keep going.', copy: 'Copy', copied: 'Response copied.',
    copyFailed: 'Could not copy the response.', regenerating: 'Regenerate',
    thinking: 'Lexora is thinking', saveFailed: 'Your browser could not save this update.',
    chatRequestFailed: 'Chat request failed ({status}).', emptyResponse: 'The assistant returned an empty response.',
    requestError: "I couldn't get a response: {error} Please check the server connection and try again.",
    serverError: 'The AI service could not complete your request. Please try again shortly.',
    vocabularyError: 'Could not load the vocabulary panel.', partVerb: 'verb', partNoun: 'noun',
    partAdjective: 'adjective', partAdverb: 'adverb',
  },
  id: {
    brandSubtitle: 'Kosakata IELTS', newChat: 'Obrolan baru', yourSpace: 'RUANG BELAJAR',
    levelA1: 'Pemula', levelA2: 'Dasar', levelB1: 'Menengah',
    levelB2: 'Menengah Atas', levelC1: 'Mahir', levelC2: 'Cakap',
    detailA1: 'Kata sehari-hari dan frasa sederhana', detailA2: 'Kosakata untuk situasi yang umum',
    detailB1: 'Ungkapkan ide dengan lebih percaya diri', detailB2: 'Bahasa bernuansa untuk kerja dan studi',
    detailC1: 'Bahasa akurat untuk gagasan kompleks', detailC2: 'Menguasai makna tersirat dan gaya bahasa',
    brandHome: 'Beranda Asisten Kosakata IELTS', mainNavigation: 'Navigasi utama',
    chatConversation: 'Percakapan', messages: 'Pesan',
    history: 'Riwayat percakapan', vocabularyBook: 'Buku kosakata', progress: 'Progres saya',
    recentChats: 'OBROLAN TERBARU', learningLevel: 'LEVEL BELAJAR',
    chooseLevel: 'Pilih level CEFR Anda', levelHint: 'Jawaban dan latihan disesuaikan dengan level Anda.',
    myProfile: 'Profil belajar saya', profileSubtitle: 'Perjalanan kosakata pribadi',
    openMenu: 'Buka menu', appName: 'Asisten Kosakata IELTS',
    appSubtitle: 'Tutor kosakata IELTS pribadi Anda', ready: 'Siap membantu',
    activeLevel: 'Level CEFR aktif', interfaceLanguage: 'Bahasa antarmuka',
    startNewChat: 'Mulai obrolan baru', welcomeEyebrow: 'TEMAN BELAJAR PRIBADI ANDA',
    welcomeTitleOne: 'Langkah kecil.', welcomeTitleTwo: 'Kosakata makin kuat.',
    welcomeDescription: 'Bangun kosakata dan kepercayaan diri untuk IELTS. Tanyakan apa saja atau pilih topik untuk memulai.',
    promptLearnTitle: 'Pelajari kata baru', promptLearnSubtitle: 'Temukan kosakata sesuai level Anda',
    promptPracticeTitle: 'Latihan terjemahan', promptPracticeSubtitle: 'Ubah yang Anda tahu ke bahasa Inggris',
    promptTestTitle: 'Uji kemampuan Anda', promptTestSubtitle: 'Coba kuis kosakata yang santai',
    promptIeltsTitle: 'Kosakata IELTS', promptIeltsSubtitle: 'Kata untuk Writing dan Speaking',
    welcomeFooter: 'Belajar sesuai kecepatan Anda. Setiap percakapan adalah kesempatan baru.',
    yourMessage: 'Pesan Anda', chatPlaceholder: 'Tanyakan apa saja tentang kosakata bahasa Inggris...',
    toSend: 'untuk mengirim', newLine: 'untuk baris baru', send: 'Kirim',
    sendMessage: 'Kirim pesan', disclaimer: 'Lexora bisa saja keliru. Periksa informasi penting dan terus berlatih.',
    closePanel: 'Tutup panel', emptyHistory: 'Percakapan Anda akan muncul di sini.',
    historyEyebrow: 'LANJUTKAN DARI TERAKHIR', progressEyebrow: 'PERJALANAN BELAJAR ANDA',
    vocabularyEyebrow: 'KOSAKATA UNTUK LANGKAH BERIKUTNYA', historyIntro: 'Riwayat percakapan belajar tersimpan di browser ini.',
    historyPanelEmpty: 'Belum ada percakapan. Mulai obrolan untuk memulai perjalanan kosakata Anda.',
    vocabIntro: 'Jelajahi kosakata dari A1 hingga C2. Status belajar dan bookmark tersimpan di browser ini. Fokus saat ini: {level} {levelName}.',
    searchVocabulary: 'Cari kata atau artinya...', searchLabel: 'Cari kosakata',
    filterLevel: 'Saring kosakata berdasarkan level', allLevels: 'Semua level', bookmarked: 'Ditandai',
    noVocabulary: 'Kosakata tidak ditemukan. Coba kata atau filter lain.',
    bookmarkWord: 'Tandai {word}', removeBookmark: 'Hapus tanda {word}',
    example: 'Contoh: ', learningStatus: 'Status belajar untuk {word}',
    statusNew: 'Belum dipelajari', statusLearning: 'Sedang dipelajari', statusMastered: 'Dikuasai',
    statCurrentLevel: 'Level saat ini', statWordsLearned: 'Kata dipelajari',
    statWordsMastered: 'Kata dikuasai', statAccuracy: 'Akurasi latihan',
    statStreak: 'Konsistensi belajar', statLevelCompletion: 'Penyelesaian level',
    streakDays: '{count} hari', streakDay: '1 hari', cefrPath: 'Tahapan CEFR Anda',
    progressTip: 'Tandai kata sebagai Sedang dipelajari atau Dikuasai di Buku Kosakata untuk mencatat progres. Minta Lexora membuat kuis singkat untuk berlatih.',
    keepGoing: 'Terus semangat.', copy: 'Salin', copied: 'Jawaban berhasil disalin.',
    copyFailed: 'Jawaban tidak dapat disalin.', regenerating: 'Buat ulang',
    thinking: 'Lexora sedang berpikir', saveFailed: 'Browser tidak dapat menyimpan perubahan ini.',
    chatRequestFailed: 'Permintaan obrolan gagal ({status}).', emptyResponse: 'Asisten memberikan jawaban kosong.',
    requestError: 'Jawaban tidak dapat diperoleh: {error} Periksa koneksi server lalu coba lagi.',
    serverError: 'Layanan AI tidak dapat menyelesaikan permintaan. Silakan coba lagi sebentar.',
    vocabularyError: 'Panel kosakata tidak dapat dibuka.', partVerb: 'kata kerja', partNoun: 'kata benda',
    partAdjective: 'kata sifat', partAdverb: 'kata keterangan',
  },
};
const VOCABULARY = [
  { word: 'borrow', level: 'A1', pronunciation: '/ˈbɒr.əʊ/', part: 'verb', meaning: 'meminjam', example: 'Can I borrow your pen?' },
  { word: 'journey', level: 'A1', pronunciation: '/ˈdʒɜː.ni/', part: 'noun', meaning: 'perjalanan', example: 'The journey takes two hours.' },
  { word: 'usually', level: 'A1', pronunciation: '/ˈjuː.ʒu.ə.li/', part: 'adverb', meaning: 'biasanya', example: 'I usually walk to school.' },
  { word: 'advice', level: 'A2', pronunciation: '/ədˈvaɪs/', part: 'noun', meaning: 'nasihat, saran', example: 'My teacher gave me useful advice.' },
  { word: 'improve', level: 'A2', pronunciation: '/ɪmˈpruːv/', part: 'verb', meaning: 'meningkatkan, memperbaiki', example: 'Reading can improve your vocabulary.' },
  { word: 'opportunity', level: 'A2', pronunciation: '/ˌɒp.əˈtʃuː.nə.ti/', part: 'noun', meaning: 'kesempatan, peluang', example: 'This is a great opportunity to learn.' },
  { word: 'achieve', level: 'B1', pronunciation: '/əˈtʃiːv/', part: 'verb', meaning: 'mencapai', example: 'She worked hard to achieve her goals.' },
  { word: 'convenient', level: 'B1', pronunciation: '/kənˈviː.ni.ənt/', part: 'adjective', meaning: 'praktis, nyaman', example: 'Online lessons are convenient for busy students.' },
  { word: 'reliable', level: 'B1', pronunciation: '/rɪˈlaɪ.ə.bəl/', part: 'adjective', meaning: 'dapat dipercaya', example: 'Use reliable sources in your essay.' },
  { word: 'consequence', level: 'B2', pronunciation: '/ˈkɒn.sɪ.kwəns/', part: 'noun', meaning: 'akibat, konsekuensi', example: 'Every decision has a consequence.' },
  { word: 'inevitable', level: 'B2', pronunciation: '/ɪˈnev.ɪ.tə.bəl/', part: 'adjective', meaning: 'tak terhindarkan', example: 'Some changes are inevitable.' },
  { word: 'sustainable', level: 'B2', pronunciation: '/səˈsteɪ.nə.bəl/', part: 'adjective', meaning: 'berkelanjutan', example: 'Cities need sustainable transport systems.' },
  { word: 'ambiguous', level: 'C1', pronunciation: '/æmˈbɪɡ.ju.əs/', part: 'adjective', meaning: 'ambigu, bermakna ganda', example: 'The wording of the question was ambiguous.' },
  { word: 'comprehensive', level: 'C1', pronunciation: '/ˌkɒm.prɪˈhen.sɪv/', part: 'adjective', meaning: 'menyeluruh, komprehensif', example: 'The report offers a comprehensive analysis.' },
  { word: 'undermine', level: 'C1', pronunciation: '/ˌʌn.dəˈmaɪn/', part: 'verb', meaning: 'melemahkan, merusak secara bertahap', example: 'A lack of trust can undermine a team.' },
  { word: 'exacerbate', level: 'C2', pronunciation: '/ɪɡˈzæs.ə.beɪt/', part: 'verb', meaning: 'memperburuk', example: 'Poor planning may exacerbate the problem.' },
  { word: 'juxtapose', level: 'C2', pronunciation: '/ˌdʒʌk.stəˈpəʊz/', part: 'verb', meaning: 'menempatkan berdampingan untuk dibandingkan', example: 'The essay juxtaposes two contrasting views.' },
  { word: 'proponent', level: 'C2', pronunciation: '/prəˈpəʊ.nənt/', part: 'noun', meaning: 'pendukung, penganjur', example: 'She is a proponent of public education.' },
];
const STATUS_KEYS = { new: 'statusNew', learning: 'statusLearning', mastered: 'statusMastered' };

const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const sendButton = document.getElementById('send-button');
const levelPickers = [
  {
    root: document.getElementById('sidebar-level-picker'),
    trigger: document.getElementById('sidebar-level-trigger'),
    options: document.getElementById('sidebar-level-options'),
    code: document.getElementById('sidebar-level-code'),
    name: document.getElementById('sidebar-level-name'),
    detail: document.getElementById('sidebar-level-detail'),
  },
  {
    root: document.getElementById('header-level-picker'),
    trigger: document.getElementById('header-level-trigger'),
    options: document.getElementById('header-level-options'),
    code: document.getElementById('header-level-code'),
    name: document.getElementById('header-level-name'),
  },
];
const panelOverlay = document.getElementById('panel-overlay');
const panelContent = document.getElementById('panel-content');
const conversationList = document.getElementById('conversation-list');
const welcomeScreen = document.getElementById('welcome-screen');
const languageSelect = document.getElementById('language-select');
let isSending = false;
let panelType = 'vocabulary';
let toastTimer;

function readState() {
  const emptyState = { level: 'A1', language: 'id', conversations: [], activeConversationId: null, vocabulary: {}, bookmarks: [] };
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!stored || typeof stored !== 'object') return emptyState;
    return {
      ...emptyState,
      ...stored,
      level: LEVELS.includes(stored.level) ? stored.level : 'A1',
      language: stored.language === 'en' ? 'en' : 'id',
      conversations: Array.isArray(stored.conversations) ? stored.conversations : [],
      vocabulary: stored.vocabulary && typeof stored.vocabulary === 'object' ? stored.vocabulary : {},
      bookmarks: Array.isArray(stored.bookmarks) ? stored.bookmarks : [],
    };
  } catch (error) {
    console.error('Could not read saved learning data:', error);
    return emptyState;
  }
}

let state = readState();

function t(key, values = {}) {
  const template = TRANSLATIONS[state.language]?.[key] || TRANSLATIONS.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ''));
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.title = t('appName');
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  document.querySelectorAll('.suggestion-card').forEach((button) => {
    button.dataset.prompt = state.language === 'id' ? button.dataset.promptId : button.dataset.promptEn;
  });
  languageSelect.value = state.language;
  updateLevelPickers();
  renderHistory();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Could not save learning data:', error);
    showToast(t('saveFailed'));
  }
}

function activeConversation() {
  return state.conversations.find((conversation) => conversation.id === state.activeConversationId) || null;
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function formatTime(timestamp) {
  return new Intl.DateTimeFormat(state.language === 'id' ? 'id-ID' : 'en-US', { hour: 'numeric', minute: '2-digit' }).format(new Date(timestamp));
}

function renderHistory() {
  conversationList.replaceChildren();
  const recent = [...state.conversations].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 12);
  if (!recent.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-history';
    empty.textContent = t('emptyHistory');
    conversationList.appendChild(empty);
    return;
  }
  for (const conversation of recent) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `history-item${conversation.id === state.activeConversationId ? ' selected' : ''}`;
    button.title = conversation.title;
    const icon = document.createElement('span');
    icon.textContent = '◷';
    const title = document.createElement('span');
    title.textContent = conversation.title;
    title.style.overflow = 'hidden';
    title.style.textOverflow = 'ellipsis';
    button.replaceChildren(icon, title);
    button.addEventListener('click', () => {
      state.activeConversationId = conversation.id;
      saveState();
      renderConversation();
      renderHistory();
      closeSidebar();
    });
    conversationList.appendChild(button);
  }
}

function renderConversation() {
  chatBox.replaceChildren();
  const conversation = activeConversation();
  if (!conversation || !conversation.messages.length) {
    chatBox.appendChild(welcomeScreen);
    welcomeScreen.hidden = false;
    return;
  }
  welcomeScreen.hidden = true;
  for (let index = 0; index < conversation.messages.length; index += 1) {
    renderMessage(conversation.messages[index], index, conversation);
  }
  chatBox.scrollTop = chatBox.scrollHeight;
}

function renderMessage(message, index, conversation) {
  const user = message.role === 'user';
  const row = document.createElement('article');
  row.className = `message-row ${user ? 'user-row' : 'assistant-row'}`;
  const avatar = document.createElement('span');
  avatar.className = 'message-avatar';
  avatar.textContent = user ? 'S' : 'L';
  avatar.setAttribute('aria-hidden', 'true');
  if (!user) row.appendChild(avatar);

  const content = document.createElement('div');
  content.className = 'message-content';
  const meta = document.createElement('div');
  meta.className = 'message-meta';
  const sender = document.createElement('strong');
  sender.textContent = user ? (state.language === 'id' ? 'Anda' : 'You') : 'Lexora';
  const time = document.createElement('time');
  time.dateTime = new Date(message.timestamp).toISOString();
  time.textContent = formatTime(message.timestamp);
  meta.append(sender, time);

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  if (message.error) bubble.classList.add('error-bubble');
  if (user) bubble.textContent = message.text;
  else renderMarkdown(bubble, message.text);
  content.append(meta, bubble);

  if (!user && !message.error) {
    const actions = document.createElement('div');
    actions.className = 'message-actions';
    const copy = document.createElement('button');
    copy.type = 'button';
    copy.className = 'message-action';
    copy.textContent = t('copy');
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(message.text);
        showToast(t('copied'));
      } catch (error) {
        console.error('Could not copy response:', error);
        showToast(t('copyFailed'));
      }
    });
    actions.appendChild(copy);
    if (index === conversation.messages.length - 1) {
      const regenerate = document.createElement('button');
      regenerate.type = 'button';
      regenerate.className = 'message-action';
      regenerate.textContent = t('regenerating');
      regenerate.addEventListener('click', () => regenerateResponse(conversation));
      actions.appendChild(regenerate);
    }
    content.appendChild(actions);
  }
  if (user) row.appendChild(content);
  else row.appendChild(content);
  if (user) row.appendChild(avatar);
  chatBox.appendChild(row);
}

function renderTyping() {
  const row = document.createElement('div');
  row.className = 'message-row assistant-row';
  const avatar = document.createElement('span');
  avatar.className = 'message-avatar';
  avatar.textContent = 'L';
  avatar.setAttribute('aria-hidden', 'true');
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.setAttribute('aria-label', t('thinking'));
  bubble.innerHTML = '<span class="typing-dots" aria-hidden="true"><i></i><i></i><i></i></span>';
  row.append(avatar, bubble);
  chatBox.appendChild(row);
  chatBox.scrollTop = chatBox.scrollHeight;
  return row;
}

async function requestAssistant(conversation, retry = false) {
  if (isSending) return;
  isSending = true;
  setComposerDisabled(true);
  const typing = renderTyping();
  try {
    const messages = conversation.messages
      .filter((message) => !message.error)
      .map((message) => ({ role: message.role === 'assistant' ? 'model' : 'user', text: message.text }))
      .slice(-30);
    while (messages[0]?.role === 'model') messages.shift();
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ conversation: messages, level: state.level }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(t('serverError'));
    if (typeof data.result !== 'string' || !data.result.trim()) throw new Error(t('emptyResponse'));
    conversation.messages.push({
      role: 'assistant',
      text: data.result,
      timestamp: Date.now(),
      ...(typeof data.evaluation === 'boolean' ? { evaluation: data.evaluation } : {}),
    });
    conversation.updatedAt = Date.now();
    saveState();
    renderConversation();
    renderHistory();
  } catch (error) {
    console.error('Failed to get response from server:', error);
    typing.remove();
    const message = {
      role: 'assistant',
      text: t('requestError', { error: error.message }),
      timestamp: Date.now(),
      error: true,
    };
    if (!retry) conversation.messages.push(message);
    renderConversation();
    if (retry) renderMessage(message, conversation.messages.length, conversation);
  } finally {
    isSending = false;
    setComposerDisabled(false);
    input.focus();
  }
}

function setComposerDisabled(disabled) {
  input.disabled = disabled;
  sendButton.disabled = disabled;
  sendButton.setAttribute('aria-busy', String(disabled));
}

async function sendMessage(text) {
  const message = text.trim();
  if (!message || isSending) return;
  let conversation = activeConversation();
  if (!conversation) {
    conversation = { id: makeId(), title: message.slice(0, 38), messages: [], createdAt: Date.now(), updatedAt: Date.now() };
    state.conversations.push(conversation);
    state.activeConversationId = conversation.id;
  }
  conversation.messages.push({ role: 'user', text: message, timestamp: Date.now() });
  conversation.updatedAt = Date.now();
  saveState();
  input.value = '';
  resizeInput();
  renderConversation();
  renderHistory();
  await requestAssistant(conversation);
}

async function regenerateResponse(conversation) {
  if (isSending || !conversation.messages.length) return;
  if (conversation.messages.at(-1).role === 'assistant') conversation.messages.pop();
  if (conversation.messages.at(-1)?.error) conversation.messages.pop();
  saveState();
  renderConversation();
  await requestAssistant(conversation, true);
}

function newChat() {
  if (isSending) return;
  state.activeConversationId = null;
  saveState();
  renderConversation();
  renderHistory();
  input.focus();
  closeSidebar();
}

function resizeInput() {
  input.style.height = 'auto';
  input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
}

function syncLevel(level) {
  if (!LEVELS.includes(level)) return;
  state.level = level;
  updateLevelPickers();
  saveState();
  if (panelOverlay.classList.contains('open')) renderPanel();
}

function updateLevelPickers() {
  for (const picker of levelPickers) {
    picker.code.textContent = state.level;
    picker.name.textContent = t(`level${state.level}`);
    if (picker.detail) picker.detail.textContent = t(`detail${state.level}`);
    picker.trigger.setAttribute('aria-label', `${t(picker.detail ? 'chooseLevel' : 'activeLevel')}: ${state.level} ${t(`level${state.level}`)}`);
    picker.options.setAttribute('aria-label', t(picker.detail ? 'chooseLevel' : 'activeLevel'));
    picker.options.replaceChildren();
    for (const level of LEVELS) {
      const option = document.createElement('button');
      option.type = 'button';
      option.className = 'level-option';
      option.id = `${picker.options.id}-${level.toLowerCase()}`;
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', String(level === state.level));
      option.dataset.level = level;

      const code = document.createElement('span');
      code.className = 'level-code';
      code.textContent = level;
      const copy = document.createElement('span');
      copy.className = 'level-option-copy';
      const name = document.createElement('strong');
      name.textContent = t(`level${level}`);
      const detail = document.createElement('small');
      detail.textContent = t(`detail${level}`);
      copy.append(name, detail);
      const check = document.createElement('span');
      check.className = 'level-option-check';
      check.setAttribute('aria-hidden', 'true');
      check.textContent = '✓';
      option.append(code, copy, check);
      option.addEventListener('click', () => {
        syncLevel(level);
        closeLevelPickers();
        picker.trigger.focus();
      });
      option.addEventListener('keydown', (event) => handleLevelOptionKeydown(event, picker));
      picker.options.appendChild(option);
    }
  }
}

function openLevelPicker(picker) {
  closeLevelPickers();
  picker.root.classList.add('is-open');
  picker.trigger.setAttribute('aria-expanded', 'true');
  picker.options.hidden = false;
  picker.options.querySelector(`[data-level="${state.level}"]`)?.focus();
}

function closeLevelPickers() {
  for (const picker of levelPickers) {
    picker.root.classList.remove('is-open');
    picker.trigger.setAttribute('aria-expanded', 'false');
    picker.options.hidden = true;
  }
}

function handleLevelOptionKeydown(event, picker) {
  const options = [...picker.options.querySelectorAll('[role="option"]')];
  const index = options.indexOf(event.currentTarget);
  let nextIndex = index;
  if (event.key === 'ArrowDown') nextIndex = (index + 1) % options.length;
  else if (event.key === 'ArrowUp') nextIndex = (index - 1 + options.length) % options.length;
  else if (event.key === 'Home') nextIndex = 0;
  else if (event.key === 'End') nextIndex = options.length - 1;
  else if (event.key === 'Escape') {
    event.preventDefault();
    event.stopPropagation();
    closeLevelPickers();
    picker.trigger.focus();
    return;
  } else return;
  event.preventDefault();
  options[nextIndex].focus();
}

for (const picker of levelPickers) {
  picker.trigger.addEventListener('click', () => {
    if (picker.trigger.getAttribute('aria-expanded') === 'true') closeLevelPickers();
    else openLevelPicker(picker);
  });
  picker.trigger.addEventListener('keydown', (event) => {
    if (['ArrowDown', 'Enter', ' '].includes(event.key)) {
      event.preventDefault();
      openLevelPicker(picker);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      closeLevelPickers();
    }
  });
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.level-picker')) closeLevelPickers();
});

function syncLanguage(language) {
  if (!['id', 'en'].includes(language)) return;
  state.language = language;
  saveState();
  applyTranslations();
  renderConversation();
  if (panelOverlay.classList.contains('open')) renderPanel();
}

function openPanel(type) {
  panelType = type;
  panelOverlay.hidden = false;
  panelOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderPanel();
  if (type === 'vocabulary') {
    const search = panelContent.querySelector('#vocab-search');
    if (search) search.focus();
  }
}

function closePanel() {
  panelOverlay.hidden = true;
  panelOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderPanel() {
  const title = document.getElementById('panel-title');
  const eyebrow = document.getElementById('panel-eyebrow');
  panelContent.replaceChildren();
  if (panelType === 'history') {
    title.textContent = t('history');
    eyebrow.textContent = t('historyEyebrow');
    renderHistoryPanel();
  } else if (panelType === 'progress') {
    title.textContent = t('progress');
    eyebrow.textContent = t('progressEyebrow');
    renderProgressPanel();
  } else {
    title.textContent = t('vocabularyBook');
    eyebrow.textContent = t('vocabularyEyebrow');
    renderVocabularyPanel();
  }
}

function renderHistoryPanel() {
  const intro = document.createElement('p');
  intro.className = 'panel-intro';
  intro.textContent = t('historyIntro');
  const list = document.createElement('div');
  list.className = 'conversation-list';
  const conversations = [...state.conversations].sort((a, b) => b.updatedAt - a.updatedAt);
  if (!conversations.length) {
    const empty = document.createElement('div');
    empty.className = 'panel-empty';
    empty.textContent = t('historyPanelEmpty');
    panelContent.append(intro, empty);
    return;
  }
  for (const conversation of conversations) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `history-item${conversation.id === state.activeConversationId ? ' selected' : ''}`;
    const icon = document.createElement('span');
    icon.textContent = '◷';
    const title = document.createElement('span');
    title.textContent = conversation.title;
    title.style.overflow = 'hidden';
    title.style.textOverflow = 'ellipsis';
    const date = document.createElement('time');
    date.textContent = new Intl.DateTimeFormat(state.language === 'id' ? 'id-ID' : 'en-US', { month: 'short', day: 'numeric' }).format(new Date(conversation.updatedAt));
    date.style.marginLeft = 'auto';
    date.style.flex = '0 0 auto';
    date.style.color = '#a0a0ae';
    button.append(icon, title, date);
    button.addEventListener('click', () => {
      state.activeConversationId = conversation.id;
      saveState();
      closePanel();
      renderConversation();
      renderHistory();
    });
    list.appendChild(button);
  }
  panelContent.append(intro, list);
}

function renderVocabularyPanel() {
  const intro = document.createElement('p');
  intro.className = 'panel-intro';
  intro.textContent = t('vocabIntro', { level: state.level, levelName: t(`level${state.level}`) });
  const controls = document.createElement('div');
  controls.className = 'panel-controls';
  const search = document.createElement('input');
  search.id = 'vocab-search';
  search.className = 'panel-search';
  search.type = 'search';
  search.placeholder = t('searchVocabulary');
  search.setAttribute('aria-label', t('searchLabel'));
  const filter = document.createElement('select');
  filter.className = 'filter-select';
  filter.setAttribute('aria-label', t('filterLevel'));
  for (const [value, label] of [['all', t('allLevels')], ...LEVELS.map((level) => [level, level]), ['bookmarked', t('bookmarked')]]) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    filter.appendChild(option);
  }
  controls.append(search, filter);
  const list = document.createElement('div');
  list.className = 'vocab-list';
  panelContent.append(intro, controls, list);

  function updateList() {
    list.replaceChildren();
    const query = search.value.trim().toLowerCase();
    const selected = filter.value;
    const words = VOCABULARY.filter((item) => {
      const status = state.vocabulary[item.word] || 'new';
      const matchesQuery = `${item.word} ${item.meaning} ${item.example} ${item.part}`.toLowerCase().includes(query);
      const matchesLevel = selected === 'all' || selected === item.level || (selected === 'bookmarked' && state.bookmarks.includes(item.word));
      return matchesQuery && matchesLevel;
    });
    if (!words.length) {
      const empty = document.createElement('p');
      empty.className = 'no-results';
      empty.textContent = t('noVocabulary');
      list.appendChild(empty);
      return;
    }
    for (const item of words) list.appendChild(createVocabularyCard(item));
  }
  search.addEventListener('input', updateList);
  filter.addEventListener('change', updateList);
  updateList();
}

function createVocabularyCard(item) {
  const card = document.createElement('article');
  card.className = 'vocab-card';
  const top = document.createElement('div');
  top.className = 'vocab-card-top';
  const wordBlock = document.createElement('div');
  const word = document.createElement('h3');
  word.className = 'vocab-word';
  word.textContent = item.word;
  const pronunciation = document.createElement('p');
  pronunciation.className = 'vocab-pronunciation';
  pronunciation.textContent = `${item.pronunciation} · ${t(`part${item.part[0].toUpperCase()}${item.part.slice(1)}`)}`;
  wordBlock.append(word, pronunciation);
  const bookmark = document.createElement('button');
  bookmark.type = 'button';
  bookmark.className = `bookmark-button${state.bookmarks.includes(item.word) ? ' bookmarked' : ''}`;
  bookmark.textContent = state.bookmarks.includes(item.word) ? '★' : '☆';
  bookmark.setAttribute('aria-label', t(state.bookmarks.includes(item.word) ? 'removeBookmark' : 'bookmarkWord', { word: item.word }));
  bookmark.addEventListener('click', () => {
    if (state.bookmarks.includes(item.word)) state.bookmarks = state.bookmarks.filter((wordValue) => wordValue !== item.word);
    else state.bookmarks.push(item.word);
    saveState();
    renderPanel();
  });
  top.append(wordBlock, bookmark);
  const meaning = document.createElement('p');
  meaning.className = 'vocab-meaning';
  meaning.textContent = item.meaning;
  const example = document.createElement('p');
  example.className = 'vocab-example';
  const exampleLabel = document.createElement('strong');
  exampleLabel.textContent = t('example');
  example.append(exampleLabel, document.createTextNode(item.example));
  const tags = document.createElement('div');
  tags.className = 'vocab-tags';
  const level = document.createElement('span');
  level.className = 'level-badge';
  level.textContent = item.level;
  const status = document.createElement('select');
  status.className = 'status-select';
  status.setAttribute('aria-label', t('learningStatus', { word: item.word }));
  for (const value of ['new', 'learning', 'mastered']) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = t(STATUS_KEYS[value]);
    status.appendChild(option);
  }
  status.value = state.vocabulary[item.word] || 'new';
  status.addEventListener('change', () => {
    if (status.value === 'new') delete state.vocabulary[item.word];
    else state.vocabulary[item.word] = status.value;
    saveState();
    if (panelOverlay.classList.contains('open') && panelType === 'progress') renderPanel();
  });
  tags.append(level, status);
  card.append(top, meaning, example, tags);
  return card;
}

function renderProgressPanel() {
  const learned = Object.values(state.vocabulary).filter((status) => status === 'learning' || status === 'mastered').length;
  const mastered = Object.values(state.vocabulary).filter((status) => status === 'mastered').length;
  const practiceAnswers = state.conversations.flatMap((conversation) => conversation.messages)
    .filter((message) => message.role === 'assistant' && typeof message.evaluation === 'boolean');
  const correctAnswers = practiceAnswers.filter((message) => message.evaluation).length;
  const practiceAccuracy = practiceAnswers.length
    ? `${Math.round((correctAnswers / practiceAnswers.length) * 100)}%`
    : '—';
  const activityDays = new Set(state.conversations.flatMap((conversation) =>
    conversation.messages
      .filter((message) => message.role === 'user')
      .map((message) => {
        const date = new Date(message.timestamp);
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      }),
  ));
  let streakDays = 0;
  const day = new Date();
  day.setHours(0, 0, 0, 0);
  if (!activityDays.has(`${day.getFullYear()}-${day.getMonth()}-${day.getDate()}`)) day.setDate(day.getDate() - 1);
  while (activityDays.has(`${day.getFullYear()}-${day.getMonth()}-${day.getDate()}`)) {
    streakDays += 1;
    day.setDate(day.getDate() - 1);
  }
  const thisLevelWords = VOCABULARY.filter((word) => word.level === state.level);
  const completedThisLevel = thisLevelWords.filter((word) => state.vocabulary[word.word] === 'mastered').length;
  const overview = document.createElement('div');
  overview.className = 'progress-overview';
  const stats = [
    [t('statCurrentLevel'), state.level],
    [t('statWordsLearned'), String(learned)],
    [t('statWordsMastered'), String(mastered)],
    [t('statAccuracy'), practiceAccuracy],
    [t('statStreak'), streakDays === 1 ? t('streakDay') : t('streakDays', { count: streakDays })],
    [t('statLevelCompletion'), `${thisLevelWords.length ? Math.round((completedThisLevel / thisLevelWords.length) * 100) : 0}%`],
  ];
  for (const [label, value] of stats) {
    const card = document.createElement('div');
    card.className = 'stat-card';
    const labelNode = document.createElement('span');
    labelNode.textContent = label;
    const valueNode = document.createElement('strong');
    valueNode.textContent = value;
    card.append(labelNode, valueNode);
    overview.appendChild(card);
  }
  const levels = document.createElement('div');
  levels.className = 'progress-block';
  const heading = document.createElement('h3');
  heading.textContent = t('cefrPath');
  const rows = document.createElement('div');
  rows.className = 'level-progress';
  for (const level of LEVELS) {
    const words = VOCABULARY.filter((word) => word.level === level);
    const count = words.filter((word) => state.vocabulary[word.word] === 'mastered').length;
    const percent = words.length ? Math.round((count / words.length) * 100) : 0;
    const row = document.createElement('div');
    row.className = 'level-progress-row';
    const levelName = document.createElement('strong');
    levelName.textContent = level;
    const track = document.createElement('div');
    track.className = 'progress-track';
    const fill = document.createElement('div');
    fill.className = 'progress-fill';
    fill.style.width = `${percent}%`;
    track.appendChild(fill);
    const value = document.createElement('span');
    value.textContent = `${percent}%`;
    row.append(levelName, track, value);
    rows.appendChild(row);
  }
  levels.append(heading, rows);
  const tip = document.createElement('div');
  tip.className = 'progress-tip';
  const tipHeading = document.createElement('strong');
  tipHeading.textContent = t('keepGoing');
  tip.append(tipHeading, document.createTextNode(` ${t('progressTip')}`));
  panelContent.append(overview, levels, tip);
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.setAttribute('role', 'status');
    Object.assign(toast.style, {
      position: 'fixed', zIndex: '20', right: '20px', bottom: '20px', padding: '10px 14px',
      borderRadius: '9px', background: '#34334c', color: '#fff', fontSize: '12px',
      boxShadow: '0 5px 20px #0002', transition: 'opacity .2s',
    });
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.style.opacity = '0'; }, 2400);
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-scrim').classList.remove('visible');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  sendMessage(input.value);
});
input.addEventListener('input', resizeInput);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    form.requestSubmit();
  }
});
document.querySelectorAll('.suggestion-card').forEach((button) => {
  button.addEventListener('click', () => sendMessage(button.dataset.prompt));
});
document.getElementById('new-chat').addEventListener('click', newChat);
document.getElementById('header-new-chat').addEventListener('click', newChat);
languageSelect.addEventListener('change', () => syncLanguage(languageSelect.value));
document.querySelectorAll('[data-panel]').forEach((button) => {
  button.addEventListener('click', () => {
    closeSidebar();
    openPanel(button.dataset.panel);
  });
});
document.getElementById('close-panel').addEventListener('click', closePanel);
panelOverlay.addEventListener('click', (event) => {
  if (event.target === panelOverlay) closePanel();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePanel();
    closeSidebar();
  }
});
document.getElementById('mobile-menu').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-scrim').classList.add('visible');
});
document.getElementById('sidebar-scrim').addEventListener('click', closeSidebar);
document.querySelectorAll('.nav-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.nav-button').forEach((navButton) => navButton.classList.remove('active'));
    button.classList.add('active');
  });
});
function renderMarkdown(element, text) {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  let paragraph = [];
  let list = null;
  let codeLines = null;
  function flushParagraph() {
    if (!paragraph.length) return;
    const node = document.createElement('p');
    paragraph.forEach((line, index) => {
      if (index) node.appendChild(document.createElement('br'));
      appendInlineMarkdown(node, line);
    });
    element.appendChild(node);
    paragraph = [];
  }
  for (const line of lines) {
    if (codeLines !== null) {
      if (/^\s*```/.test(line)) {
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        code.textContent = codeLines.join('\n');
        pre.appendChild(code);
        element.appendChild(pre);
        codeLines = null;
      } else codeLines.push(line);
      continue;
    }
    if (/^\s*```/.test(line)) { flushParagraph(); list = null; codeLines = []; continue; }
    const heading = line.match(/^\s{0,3}(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph(); list = null;
      const node = document.createElement(`h${Number(heading[1].length) + 2}`);
      appendInlineMarkdown(node, heading[2]); element.appendChild(node); continue;
    }
    const item = line.match(/^\s*([-*+]|\d+[.)])\s+(.+)$/);
    if (item) {
      flushParagraph();
      const tagName = /^\d/.test(item[1]) ? 'ol' : 'ul';
      if (!list || list.tagName.toLowerCase() !== tagName) {
        list = document.createElement(tagName); element.appendChild(list);
      }
      const listItem = document.createElement('li');
      appendInlineMarkdown(listItem, item[2]); list.appendChild(listItem); continue;
    }
    if (!line.trim()) { flushParagraph(); list = null; continue; }
    const quote = line.match(/^\s*>\s?(.*)$/);
    if (quote) {
      flushParagraph(); list = null;
      const node = document.createElement('blockquote');
      appendInlineMarkdown(node, quote[1]); element.appendChild(node); continue;
    }
    if (/^\s*(---+|___+|\*\*\*+)\s*$/.test(line)) { flushParagraph(); list = null; element.appendChild(document.createElement('hr')); continue; }
    list = null;
    paragraph.push(line);
  }
  flushParagraph();
  if (codeLines !== null) {
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = codeLines.join('\n');
    pre.appendChild(code); element.appendChild(pre);
  }
}

function appendInlineMarkdown(parent, text) {
  const pattern = /(\[[^\]]+\]\(https?:\/\/[^)\s]+\)|\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|`[^`]+`|\*[^*]+\*|_[^_]+_)/g;
  let lastIndex = 0;
  for (const match of text.matchAll(pattern)) {
    parent.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
    const token = match[0];
    let node;
    if (token.startsWith('[')) {
      const link = token.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
      node = document.createElement('a');
      node.textContent = link[1];
      node.href = link[2];
      node.target = '_blank';
      node.rel = 'noopener noreferrer';
    } else {
      const marker = token.startsWith('**') || token.startsWith('__') || token.startsWith('~~') ? 2 : 1;
      const content = token.slice(marker, -marker);
      const markerText = token.slice(0, marker);
      if (markerText === '**' || markerText === '__') node = document.createElement('strong');
      else if (markerText === '~~') node = document.createElement('del');
      else if (markerText === '`') node = document.createElement('code');
      else node = document.createElement('em');
      node.textContent = content;
    }
    parent.appendChild(node);
    lastIndex = match.index + token.length;
  }
  parent.appendChild(document.createTextNode(text.slice(lastIndex)));
}

applyTranslations();
renderConversation();
