export default function renderProjects() {
  const projects = [
    {
      title: "VulnScope",
      category: "Cybersecurity",
      description: "A custom-built platform for practicing ethical hacking and exploit testing in isolated environments.",
      tags: ["Kali Linux", "Burp Suite", "XSS", "SQLi"],
      github: "#",
      demo: "#"
    },
    {
      title: "DevConnect",
      category: "Web Development",
      description: "A full-stack social network app for developers to connect, share code, and collaborate.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "CryptoPulse",
      category: "Data & Crypto",
      description: "A real-time cryptocurrency tracker with chart visualizations and market analytics.",
      tags: ["JavaScript", "API", "Charts.js"],
      github: "#",
      demo: "#"
    }
  ];

  const categories = ["All", "Web Development", "Cybersecurity", "Data & Crypto"];

  const section = document.createElement('section');
  section.className = 'bg-white py-20 px-6 fade-in';
  section.id = 'projects';

  section.innerHTML = `
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-4">Projects</h2>
      <p class="text-center text-gray-500 mb-10">Real-world tools and experiments I’ve worked on.</p>

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        ${categories.map(cat => `
          <button class="filter-btn bg-gray-200 hover:bg-gray-300 text-sm font-medium py-2 px-4 rounded-full transition">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 project-grid">
        ${projects.map(proj => `
          <div class="project-card bg-gray-100 rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 class="text-xl font-semibold mb-2">${proj.title}</h3>
            <p class="text-gray-700 text-sm mb-4">${proj.description}</p>
            <div class="flex flex-wrap gap-2 text-xs text-white mb-4">
              ${proj.tags.map(tag => `<span class="bg-indigo-500 px-2 py-1 rounded">${tag}</span>`).join('')}
            </div>
            <div class="flex gap-4 text-sm">
              <a href="${proj.github}" class="text-blue-600 hover:underline">GitHub</a>
              <a href="${proj.demo}" class="text-green-600 hover:underline">Live Demo</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Add filtering functionality
  setTimeout(() => {
    const buttons = section.querySelectorAll('.filter-btn');
    const cards = section.querySelectorAll('.project-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.innerText;
        cards.forEach(card => {
          const text = card.innerHTML;
          if (category === "All" || text.includes(category)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });

        buttons.forEach(b => b.classList.remove("bg-blue-600", "text-white"));
        btn.classList.add("bg-blue-600", "text-white");
      });
    });
  }, 0);

  return section;
}
