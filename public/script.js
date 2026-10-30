const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const submitButton = form.querySelector('button[type="submit"]');

const conversation = [];
let isSending = false;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage || isSending) return;

  appendMessage('user', userMessage);
  input.value = '';

  const thinkingMessage = appendMessage('bot', 'Sedang menyiapkan jawaban...');
  isSending = true;
  input.disabled = true;
  submitButton.disabled = true;

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        conversation: [
          ...conversation,
          { role: 'user', text: userMessage },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Chat request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (typeof data.result !== 'string' || !data.result.trim()) {
      thinkingMessage.textContent = 'Maaf, belum ada jawaban yang bisa ditampilkan.';
      return;
    }

    renderAssistantMessage(thinkingMessage, data.result);
    conversation.push(
      { role: 'user', text: userMessage },
      { role: 'model', text: data.result },
    );
  } catch (error) {
    console.error('Failed to get response from server:', error);
    thinkingMessage.textContent = 'Maaf, terjadi kendala saat menghubungi server. Coba lagi sebentar, ya.';
  } finally {
    isSending = false;
    input.disabled = false;
    submitButton.disabled = false;
    input.focus();
  }
});

function appendMessage(sender, text) {
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
  return message;
}

function renderAssistantMessage(element, text) {
  element.replaceChildren();

  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  let paragraph = [];
  let list = null;
  let codeLines = null;

  function flushParagraph() {
    if (paragraph.length === 0) return;

    const node = document.createElement('p');
    paragraph.forEach((line, index) => {
      if (index > 0) node.appendChild(document.createElement('br'));
      appendInlineMarkdown(node, line);
    });
    element.appendChild(node);
    paragraph = [];
  }

  function closeList() {
    list = null;
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
      } else {
        codeLines.push(line);
      }
      continue;
    }

    if (/^\s*```/.test(line)) {
      flushParagraph();
      closeList();
      codeLines = [];
      continue;
    }

    const heading = line.match(/^\s{0,3}(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const node = document.createElement(`h${Math.min(heading[1].length + 1, 6)}`);
      appendInlineMarkdown(node, heading[2]);
      element.appendChild(node);
      continue;
    }

    const item = line.match(/^\s*([-*+]|\d+[.)])\s+(.+)$/);
    if (item) {
      flushParagraph();
      const tagName = /^\d/.test(item[1]) ? 'ol' : 'ul';
      if (!list || list.tagName.toLowerCase() !== tagName) {
        closeList();
        list = document.createElement(tagName);
        element.appendChild(list);
      }
      const listItem = document.createElement('li');
      appendInlineMarkdown(listItem, item[2]);
      list.appendChild(listItem);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      closeList();
      continue;
    }

    const quote = line.match(/^\s*>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      closeList();
      const blockquote = document.createElement('blockquote');
      appendInlineMarkdown(blockquote, quote[1]);
      element.appendChild(blockquote);
      continue;
    }

    if (/^\s*(---+|___+|\*\*\*+)\s*$/.test(line)) {
      flushParagraph();
      closeList();
      element.appendChild(document.createElement('hr'));
      continue;
    }

    closeList();
    paragraph.push(line);
  }

  flushParagraph();
  if (codeLines !== null) {
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = codeLines.join('\n');
    pre.appendChild(code);
    element.appendChild(pre);
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendInlineMarkdown(parent, text) {
  const pattern = /(\[[^\]]+\]\(https?:\/\/[^)\s]+\)|\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|`[^`]+`|\*[^*]+\*|_[^_]+_)/g;
  let lastIndex = 0;

  for (const match of text.matchAll(pattern)) {
    parent.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));

    const token = match[0];
    let node;
    let content;

    if (token.startsWith('[')) {
      const link = token.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
      node = document.createElement('a');
      node.textContent = link[1];
      node.href = link[2];
      node.target = '_blank';
      node.rel = 'noopener noreferrer';
    } else {
      const marker = token.startsWith('**')
        || token.startsWith('__')
        || token.startsWith('~~')
        ? 2
        : 1;
      content = token.slice(marker, -marker);
      const markerText = token.slice(0, marker);

      if (markerText === '**' || markerText === '__') {
        node = document.createElement('strong');
      } else if (markerText === '~~') {
        node = document.createElement('del');
      } else if (markerText === '`') {
        node = document.createElement('code');
      } else {
        node = document.createElement('em');
      }
      node.textContent = content;
    }

    parent.appendChild(node);
    lastIndex = match.index + token.length;
  }

  parent.appendChild(document.createTextNode(text.slice(lastIndex)));
}
