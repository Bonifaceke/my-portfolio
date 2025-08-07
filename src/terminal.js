export default function renderTerminal() {
  const section = document.createElement('section');
  section.className = 'py-10 bg-gray-950 text-green-400';

  section.innerHTML = `
    <div class="max-w-4xl mx-auto px-4">
      <div id="terminal" style="
        background-color: #111827;
        color: #10b981;
        font-family: 'Fira Code', monospace;
        padding: 1rem;
        border-radius: 8px;
        font-size: 0.85rem;
        line-height: 1.4;
        box-shadow: 0 0 12px rgba(16, 185, 129, 0.15);
        min-height: 200px;
        overflow-y: auto;
      ">
        <div class="terminal-output">Welcome to Boniface Mugo’s Terminal Portfolio 👨‍💻</div>
        <div class="terminal-output">Type <span class="font-bold">help</span> to get started.</div>
        <div class="terminal-input-line">
          <span class="prompt">$</span>
          <input type="text" class="terminal-input" autofocus style="
            background: transparent;
            border: none;
            outline: none;
            color: #10b981;
            font-family: inherit;
            font-size: inherit;
            width: 90%;
          "/>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const terminal = section.querySelector('#terminal');
    const input = terminal.querySelector('.terminal-input');

    const commands = {
      help: `Available Commands:\nwhoami - Display your identity\nskills - List your skillset\nprojects - Show recent projects\ncontact - Display contact info\nclear - Clear terminal`,
      whoami: "Boniface Mugo — Cybersecurity Specialist | Web Developer | Tech Visionary",
      skills: "HTML, CSS, JavaScript, Python, React, Node.js, Kali Linux, Burp Suite, SQL, Nmap, Wireshark",
      projects: "Visit the Projects section above or type 'projects' to view more.",
      contact: "📧 bonifacemugo.dev@gmail.com | 🌐 www.bonifacemugo.com",
      clear: "clear"
    };

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = input.value.trim();
        const output = document.createElement('div');
        output.className = 'terminal-output';
        output.innerHTML = `<span class="prompt">$</span> ${command}`;
        terminal.insertBefore(output, input.parentElement);

        const response = document.createElement('div');
        response.className = 'terminal-output';

        if (commands[command]) {
          if (command === 'clear') {
            const outputs = terminal.querySelectorAll('.terminal-output');
            outputs.forEach(el => el.remove());
            input.value = '';
            return;
          }
          response.textContent = commands[command];
        } else {
          response.textContent = `Command not found: ${command}`;
        }

        terminal.insertBefore(response, input.parentElement);
        input.value = '';
        terminal.scrollTop = terminal.scrollHeight;
      }
    });
  }, 100);

  return section;
}
