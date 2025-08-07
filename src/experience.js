export default function renderExperience() {
  const section = document.createElement('section');
  section.id = 'experience';
  section.className = 'py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 fade-in';

  section.innerHTML = `
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16 relative inline-block">
        Professional Experience
        <span class="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-blue-500 mt-2 rounded-full"></span>
      </h2>

      <div class="relative border-l-4 border-blue-500 pl-6 space-y-12">

        <!-- RSM Internship -->
        <div class="relative group">
          <div class="absolute -left-7 top-1.5 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg transition-transform group-hover:scale-125"></div>
          <div class="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 class="text-xl font-semibold mb-1">IT & Cybersecurity Intern</h3>
            <p class="text-sm text-gray-500 mb-2">RSM East Africa LLP • 2025</p>
            <p class="text-gray-700">
              Assisted in penetration testing, vulnerability assessments, and report documentation. Strengthened practical skills in network & web security testing, policy auditing, and red teaming.
            </p>
          </div>
        </div>

        <!-- Freelance Dev -->
        <div class="relative group">
          <div class="absolute -left-7 top-1.5 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg transition-transform group-hover:scale-125"></div>
          <div class="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 class="text-xl font-semibold mb-1">Freelance Web Developer</h3>
            <p class="text-sm text-gray-500 mb-2">Remote • 2024</p>
            <p class="text-gray-700">
              Delivered secure, responsive websites and small web tools. Focused on client needs, frontend UI/UX, and implementing secure-by-design coding principles.
            </p>
          </div>
        </div>

      </div>
    </div>
  `;

  return section;
}
