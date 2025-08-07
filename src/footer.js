export default function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'bg-[#0e0e0e] text-gray-300 py-12 px-6';

  footer.innerHTML = `
    <div class="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">

      <!-- Branding -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-3">Boniface Mugo</h2>
        <p class="text-sm leading-relaxed">
          Cybersecurity | Developer | Innovator.  
          Creating secure, modern digital experiences.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-3">Explore</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#about" class="hover:text-white transition-all duration-200">About Me</a></li>
          <li><a href="#skills" class="hover:text-white transition-all duration-200">Skills</a></li>
          <li><a href="#projects" class="hover:text-white transition-all duration-200">Projects</a></li>
          <li><a href="#contact" class="hover:text-white transition-all duration-200">Contact</a></li>
        </ul>
      </div>

      <!-- Socials -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-3">Connect</h3>
        <div class="flex justify-center sm:justify-start space-x-4 text-xl">
          <a href="https://www.linkedin.com/in/boniface-mugo-8a8a34283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="hover:text-blue-400 transition-all duration-200"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/Bonifaceke" class="hover:text-gray-100 transition-all duration-200"><i class="fab fa-github"></i></a>
          <a href="https://x.com/its_bmugo?t=0n2AOktYUpx58ZD0E5scaw&s=09" class="hover:text-blue-500 transition-all duration-200"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-3">Contact Info</h3>
        <ul class="space-y-2 text-sm">
          <li>Email: <a href="mailto:bonifacemugo347@gmail.com" class="hover:text-white">bonifacemugo347@gmail.com</a></li>
          <li>Phone: <span class="text-gray-400">+254 113 435498</span></li>
        </ul>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="max-w-2xl mx-auto mt-12 px-4">
      <div class="bg-[#1a1a1a] rounded-xl p-6 text-center shadow-md">
        <h3 class="text-xl font-semibold text-white mb-2">📬 Join My Newsletter</h3>
        <p class="text-sm text-gray-400 mb-4">Get updates on new projects, blogs, and exclusive content.</p>
        <form 
  name="newsletter"
  method="POST"
  data-netlify="true"
  class="flex flex-col sm:flex-row items-center justify-center gap-4"
>
  <input type="hidden" name="form-name" value="newsletter" />

  <input
    type="email"
    name="email"
    required
    placeholder="Enter your email"
    class="w-full sm:w-auto px-4 py-2 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />

  <button
    type="submit"
    class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition font-medium"
  >
    Subscribe
  </button>
</form>
        <p id="newsletterMessage" class="text-green-400 mt-3 text-sm hidden">Subscribed successfully!</p>
      </div>
    </div>

    <div class="mt-10 border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
      © ${new Date().getFullYear()} Boniface Mugo. All rights reserved.
    </div>
  `;

  return footer;
}
