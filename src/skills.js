export default function renderSkills() {
  const skills = [
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 85, icon: '🎨' },
    { name: 'JavaScript', level: 80, icon: '⚙️' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'SQL', level: 70, icon: '🗃️' },
    { name: 'Kali Linux', level: 80, icon: '💀' },
    { name: 'Burp Suite', level: 75, icon: '🛡️' },
    { name: 'Metasploit', level: 70, icon: '🚀' },
    { name: 'Nmap', level: 85, icon: '📡' },
    { name: 'Wireshark', level: 80, icon: '🔍' },
    { name: 'React', level: 78, icon: '⚛️' },
    { name: 'Node.js', level: 70, icon: '🌱' }
  ];

  const section = document.createElement('section');
  section.className = 'py-12 bg-gray-100 fade-in';

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Technical Skillset</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        ${skills.map(skill => `
          <div class="bg-white shadow rounded-lg p-4 text-left transition hover:shadow-md">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-lg">${skill.icon}</span>
              <span class="font-medium text-sm text-gray-700">${skill.name}</span>
            </div>
            <div class="w-full bg-gray-200 h-2 rounded-full">
              <div class="bg-blue-500 h-full rounded-full transition-all duration-500" style="width: ${skill.level}%;"></div>
            </div>
            <div class="text-xs text-gray-500 mt-1">${skill.level}%</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  return section;
}
