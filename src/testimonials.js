export default function renderTestimonials() {
  const testimonials = [
    {
      name: 'Alex Carter',
      title: 'Cybersecurity Lead, Sentinel Group',
      feedback: 'Working with Boniface was exceptional. His deep knowledge in cybersecurity and attention to detail really stood out.',
      image: 'https://i.pravatar.cc/100?img=1'
    },
    {
      name: 'Linda Mwangi',
      title: 'Software Engineer, Craftly AI',
      feedback: 'Boniface combines professionalism with powerful technical expertise. Highly recommended for any serious tech project.',
      image: 'https://i.pravatar.cc/100?img=2'
    },
    {
      name: 'Daniel Kimani',
      title: 'Founder, DevHive Agency',
      feedback: 'He delivered more than expected. His development and design approach is top-tier and forward-thinking.',
      image: 'https://i.pravatar.cc/100?img=3'
    }
  ];

  const section = document.createElement('section');
  section.className = 'py-16 bg-gradient-to-r from-slate-50 to-slate-100';

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-14 tracking-tight">What People Say</h2>
      <div class="grid gap-8 md:grid-cols-3">
        ${testimonials.map(({ name, title, feedback, image }) => `
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
            <div class="flex items-center gap-4 mb-4">
              <img src="${image}" alt="${name}" class="w-14 h-14 rounded-full ring-2 ring-indigo-500" />
              <div class="text-left">
                <h3 class="text-lg font-semibold text-gray-900">${name}</h3>
                <p class="text-sm text-gray-600">${title}</p>
              </div>
            </div>
            <p class="text-sm text-gray-700 italic leading-relaxed">“${feedback}”</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  return section;
}
