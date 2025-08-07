export default function renderChatbot() {
  if (document.getElementById('chat-toggle')) return;

  // Floating Chat Button
  const toggle = document.createElement('button');
  toggle.id = 'chat-toggle';
  toggle.innerHTML = '💬';
  Object.assign(toggle.style, {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    zIndex: '1000',
    padding: '14px 16px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontSize: '22px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
  });
  document.body.appendChild(toggle);

  // Chat Box Container
  const box = document.createElement('div');
  box.id = 'chatbox';
  box.style.cssText = `
    position: fixed;
    bottom: 150px;
    right: 20px;
    width: 340px;
    height: 480px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.2);
    display: none;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Segoe UI', sans-serif;
    z-index: 999;
  `;
  document.body.appendChild(box);

  // Inner Chat HTML
  box.innerHTML = `
    <div style="background:#1a1a1a;color:#fff;padding:14px 18px;font-weight:600;display:flex;align-items:center;justify-content:space-between;">
      Boniface Assistant
      <span id="close-chat" style="cursor:pointer;font-size:18px;">❌</span>
    </div>
    <div id="chat-messages" style="flex:1;padding:12px;overflow-y:auto;background:#f4f6f9;"></div>
    <div style="display:flex;border-top:1px solid #ddd;">
      <input type="text" id="chat-input" placeholder="Ask me anything..." style="flex:1;padding:12px;border:none;outline:none;" />
      <button id="send-btn" style="padding:0 18px;border:none;background:#1a1a1a;color:white;cursor:pointer;">Send</button>
    </div>
  `;

  // Toggle visibility
  toggle.addEventListener('click', () => {
    box.style.display = (box.style.display === 'none') ? 'flex' : 'none';
  });

  document.getElementById('close-chat').addEventListener('click', () => {
    box.style.display = 'none';
  });

  const messages = document.getElementById('chat-messages');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');

  function appendMessage(sender, text, isBot = false) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `margin:10px 0;display:flex;${isBot ? 'justify-content:flex-start;' : 'justify-content:flex-end;'}`;

    const bubble = document.createElement('div');
    bubble.style.cssText = `
      background: ${isBot ? '#e9ecef' : '#1a1a1a'};
      color: ${isBot ? '#000' : '#fff'};
      padding: 10px 14px;
      border-radius: 16px;
      max-width: 75%;
      font-size: 14px;
      animation: fadeIn 0.3s ease;
    `;
    bubble.innerHTML = `<strong>${sender}:</strong> ${text}`;

    wrapper.appendChild(bubble);
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
  }

  function botTypingAnimation() {
    const typing = document.createElement('div');
    typing.id = 'typing';
    typing.style.cssText = `margin:10px 0;color:#666;font-style:italic;font-size:13px;`;
    typing.textContent = 'Bot is typing...';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
  }

  function botReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("name")) return "This is Boniface Mugo’s personal portfolio assistant.";
    if (msg.includes("who are you") || msg.includes("your name")) return "I'm your virtual assistant for Boniface Mugo’s portfolio site.";
    if (msg.includes("help")) return "I can help you with skills, projects, contact, or anything related to Mugo's work.";
    if (msg.includes("projects")) return "You can find featured projects in the Projects section of this site.";
    if (msg.includes("skills")) return "Boniface is skilled in Cybersecurity, Web Dev, DevOps, and AI.";
    if (msg.includes("contact")) return "Reach out via the Contact Me section or email mugo@example.com.";
    if (msg.includes("hi") || msg.includes("hello")) return "Hi there 👋! How can I assist you today?";
    if (msg.includes("bye")) return "Goodbye! Have an amazing day!";
    if (msg.includes("website")) return "You're on the official portfolio website of Boniface Mugo.";

    return "I'm still learning! Try asking about skills, projects, or how to contact Mugo.";
  }

  function handleUserMessage() {
    const text = input.value.trim();
    if (!text) return;

    appendMessage('You', text, false);
    input.value = '';

    botTypingAnimation();
    setTimeout(() => {
      removeTyping();
      appendMessage('Bot', botReply(text), true);
    }, 800);
  }

  sendBtn.addEventListener('click', handleUserMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserMessage();
  });
}
