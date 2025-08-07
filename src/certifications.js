export default function renderCertifications() {
  const section = document.createElement('section');
  section.id = 'certifications';
  section.className = 'py-16 px-6 bg-white text-gray-900 fade-in';

  section.innerHTML = `
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16 relative inline-block">
        Certifications
        <span class="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-indigo-600 mt-2 rounded-full"></span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

        <!-- Boniface Mugo's Data Analysis Certification -->
        <div class="bg-gray-100 hover:bg-gray-200 transition p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
          <h3 class="text-lg font-semibold">Data Analysis: SQL, Tableau, Power BI & Excel</h3>
          <p class="text-sm text-gray-500 mb-1">Issued: 2025 • Credential ID: 0004</p>
          <p class="text-gray-700">Completed hands-on projects covering data cleaning, visualization, SQL querying, and dashboard creation.</p>
          <a href="https://ude.my/UC-d28d3212-fla1-4544-bbec-fad284db5725" target="_blank" class="text-indigo-600 underline">View Certificate</a>
        </div>

        <!-- Boniface Mugo's Cybersecurity Certificate -->
        <div class="bg-gray-100 hover:bg-gray-200 transition p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
          <h3 class="text-lg font-semibold">Cybersecurity and Emerging Technologies Awareness Training</h3>
          <p class="text-sm text-gray-500 mb-1">Issued: 2024 • Credential ID: ICTA-1715738533-1520-5093</p>
          <p class="text-gray-700">Completed training in cybersecurity awareness, threat detection, and emerging technologies.</p>
          <a href="https://icta.go.ke" target="_blank" class="text-indigo-600 underline">View Certificate</a>
        </div>

        <!-- Boniface Mugo's Python Certificate -->
        <div class="bg-gray-100 hover:bg-gray-200 transition p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
          <h3 class="text-lg font-semibold">100 Days of Code: The Complete Python Pro Bootcamp</h3>
          <p class="text-sm text-gray-500 mb-1">Issued: 2025 • Credential ID: UC-5291c44(-3da3-4666-5251-1480874881f</p>
          <p class="text-gray-700">Mastered Python programming with a focus on real-world projects and deep problem-solving skills.</p>
          <a href="https://www.udemy.com" target="_blank" class="text-indigo-600 underline">View Certificate</a>
        </div>

      </div>
    </div>
  `;

  return section;
}
