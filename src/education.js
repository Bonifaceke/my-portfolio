export default function renderEducation() {
  const section = document.createElement('section');
  section.id = 'education';
  section.className = 'py-16 px-6 bg-gray-50 text-gray-900 fade-in';

  section.innerHTML = `
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16 relative inline-block">
        Education
        <span class="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-indigo-600 mt-2 rounded-full"></span>
      </h2>

      <div class="relative border-l-2 border-indigo-500 pl-6 space-y-12">

        <div class="relative">
          <div class="absolute -left-[10px] top-1 w-5 h-5 bg-indigo-500 rounded-full"></div>
          <h3 class="text-xl font-semibold">"    BSc in Computer Science</h3>
          <p class="text-sm text-gray-500 mb-1">CHUKA University, Kenya • 2021 – 2025 (Ongoing)</p>
          <p class="text-gray-700">Currently pursuing a Bachelor's degree focused on cybersecurity, ethical hacking, network forensics, and digital investigations.</p>
        </div>

        <div class="relative">
          <div class="absolute -left-[10px] top-1 w-5 h-5 bg-indigo-500 rounded-full"></div>
          <h3 class="text-xl font-semibold">"   High School – KCSE</h3>
          <p class="text-sm text-gray-500 mb-1">KIRIMARA High School • Graduated: 2020</p>
          <p class="text-gray-700">Completed high school with strong academic performance, leadership roles, and a passion for technology.</p>
        </div>

      </div>
    </div>
  `;

  return section;
}
