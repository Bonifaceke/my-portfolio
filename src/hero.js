export default function renderHero() {
  return `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-white to-gray-100 text-gray-900 overflow-hidden fade-in">

      <!-- Radial Glow Background -->
      <div class="absolute w-[600px] h-[600px] bg-purple-300 opacity-30 rounded-full blur-3xl top-1/4 -left-1/4 z-0"></div>

      <!-- Particle Canvas Background -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <canvas id="particles"></canvas>
      </div>

      <!-- Floating Icons -->
      <div class="absolute top-10 left-10 z-0 animate-float-slow">
        <img src="/hacker.svg" alt="Cybersecurity" class="w-12 h-12 opacity-30" />
      </div>
      <div class="absolute bottom-10 right-10 z-0 animate-float-fast">
        <img src="/terminal.svg" alt="Terminal" class="w-12 h-12 opacity-30" />
      </div>

      <!-- Hero Glass Card -->
      <div class="z-10 bg-white/30 backdrop-blur-md rounded-xl p-10 shadow-xl border border-white/20 max-w-3xl w-full flex flex-col items-center">

        <!-- Profile Avatar -->
        <img src="/profile.jpg" alt="Boniface Mugo" class="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-6 object-cover object-center" />

        <!-- Name -->
         <h1 class="animate-neon text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-black via-gray-800 to-black text-transparent bg-clip-text">
  Boniface Mugo
</h1>

        <!-- Tagline -->
        <p class="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mb-4">
          Cybersecurity Specialist · Ethical Hacker · Web & Software Developer · Visionary Leader
        </p>

        <!-- Social Links -->
        <div class="flex gap-4 mb-8 flex-wrap justify-center">
          <a href="https://github.com/Bonifaceke" target="_blank" aria-label="GitHub" class="text-gray-700 hover:text-black transition">
            <i class="fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/boniface-mugo-8a8a34283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" aria-label="LinkedIn" class="text-gray-700 hover:text-black transition">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="mailto:bonifacemugo347@gmail.com" aria-label="Email" class="text-gray-700 hover:text-black transition">
            <i class="fas fa-envelope fa-lg"></i>
          </a>
          <a href="https://youtube.com/@bonifacemugo-b?si=4C3HAOMg962nkKfY" target="_blank" aria-label="YouTube" class="text-gray-700 hover:text-black transition">
            <i class="fab fa-youtube fa-lg"></i>
          </a>
          <a href="https://x.com/its_bmugo?t=0n2AOktYUpx58ZD0E5scaw&s=09" target="_blank" aria-label="Twitter" class="text-gray-700 hover:text-black transition">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://www.instagram.com/its_b.mugo?igsh=MTRlZnpla2ljdXp2eQ==" target="_blank" aria-label="Instagram" class="text-gray-700 hover:text-black transition">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.facebook.com/boniface.mugo.2025?mibextid=ZbWKwL" target="_blank" aria-label="Facebook" class="text-gray-700 hover:text-black transition">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
        </div>

        <!-- CTA Button -->
        <a href="#about" class="group relative inline-flex items-center px-8 py-3 bg-black text-white rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300"></span>
          <span class="relative z-10 flex items-center gap-2 font-medium">
            Explore My Work
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </a>

        <!-- Scroll Down Icon -->
        <div class="mt-10 animate-bounce">
          <a href="#about">
            <svg class="w-6 h-6 text-gray-700 hover:text-black transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `;
}
