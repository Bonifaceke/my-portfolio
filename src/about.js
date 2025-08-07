export default function renderAbout() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-6 px-4 text-gray-900 fade-in';

  section.innerHTML = `
    <div class="max-w-6xl mx-auto">

      <!-- Section Title -->
      <div class="text-center mb-4">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          About Me
        </h2>
        <div class="w-16 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>

      <!-- Grid -->
      <div class="grid gap-6 lg:gap-8 lg:grid-cols-2 items-center">

        <!-- Image -->
        <div class="text-center lg:text-left">
          <div class="relative w-fit mx-auto lg:mx-0">
            <img src="/profile.jpg" alt="Boniface Mugo"
              class="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-indigo-300 shadow-xl transition-transform duration-300" />
          </div>
          <h3 class="text-xl font-semibold mt-2 text-indigo-700">Boniface Mugo</h3>
          <p class="text-xs uppercase tracking-wide text-gray-500 font-medium">Cybersecurity Specialist</p>
        </div>

        <!-- Bio -->
        <div class="text-sm sm:text-base leading-relaxed text-gray-800">
          <p class="mb-3">
            I’m a results-driven cybersecurity professional with practical experience in ethical hacking, penetration testing, and secure system development. I build and break systems with purpose, clarity, and precision.
          </p>
          <p class="mb-3">
            I value logic, discipline, and real work over hype. My mission is to contribute to a safer digital world by identifying threats, writing secure code, and continuously upgrading my skills in offensive and defensive security.
          </p>
          <p class="mb-4">
            Whether it's breaking into systems to make them stronger or building from the ground up with a secure mindset, I operate with integrity and a relentless focus on excellence.
          </p>

          <!-- Button -->
          <a href="/Boniface_Mugo_CV.pdf" download
            class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md hover:scale-105 transition duration-300">
            📄 Download CV
          </a>

          <!-- Tags -->
          <div class="mt-4 flex flex-wrap gap-2 text-xs">
            <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Ethical Hacking</span>
            <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Pen Testing</span>
            <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Secure Code</span>
            <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Bug Bounty</span>
            <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Forensics</span>
          </div>
        </div>

      </div>
    </div>
  `;

  return section;
}
