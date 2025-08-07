export default function renderContact() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'bg-white py-12 px-4 sm:px-6 lg:px-8 text-gray-800 fade-in';

  // Safe, clean HTML using + to concatenate strings avoids JSX parsing issues
  section.innerHTML =
    '<div class="max-w-3xl mx-auto text-center">' +
      '<h2 class="text-3xl font-bold mb-4">Get in Touch</h2>' +
      '<p class="text-gray-600 text-sm sm:text-base mb-8">' +
        'Got an idea or opportunity? Send me a quick message below.' +
      '</p>' +
      '<form name="contact" method="POST" data-netlify="true" class="grid gap-4 text-left text-sm">' +
        '<input type="hidden" name="form-name" value="contact" />' +
        '<div class="grid sm:grid-cols-2 gap-4">' +
          '<input type="text" name="name" placeholder="Name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition" />' +
          '<input type="email" name="email" placeholder="Email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition" />' +
        '</div>' +
        '<input type="text" name="subject" placeholder="Subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition" />' +
        '<textarea name="message" rows="4" placeholder="Message" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"></textarea>' +
        '<div class="text-center mt-2">' +
          '<button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition shadow-sm">' +
            'Send' +
          '</button>' +
        '</div>' +
      '</form>' +
    '</div>';

  return section;
}