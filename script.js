// ===================================================
// 1. TOAST FUNCTION
// ===================================================
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 3000);
}

// ===================================================
// 2. MOBILE MENU
// ===================================================
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn) {
  menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('open');
  });
}
if (closeBtn) {
  closeBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
  });
}
mobileLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
  });
});

// ===================================================
// 3. BACK TO TOP
// ===================================================
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
if (backToTop) {
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===================================================
// 4. REVEAL ON SCROLL
// ===================================================
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(function(el) {
  observer.observe(el);
});

// ===================================================
// 5. ACTIVE NAV LINKS
// ===================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(function(link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.3 });
sections.forEach(function(s) {
  navObserver.observe(s);
});

// ===================================================
// 6. WEEKLY RIDDLE
// ===================================================
const puzzles = [
  {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop',
    text: '"I stand tall by the sea, guiding ships through the dark. My light cuts through the fog, yet I never move. What am I?"',
    answers: ['lighthouse', 'a lighthouse', 'light house']
  },
  {
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop',
    text: '"I have a face but no eyes, hands but no arms. I tell you something you cannot live without. What am I?"',
    answers: ['clock', 'a clock', 'watch', 'a watch']
  },
  {
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=900&auto=format&fit=crop',
    text: '"I drink without a mouth, I run without feet. I begin in the mountains and end in the sea. What am I?"',
    answers: ['river', 'a river']
  },
  {
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop',
    text: '"I have keys but no locks, I have space but no room. You can enter but can\'t go outside. What am I?"',
    answers: ['keyboard', 'a keyboard']
  },
  {
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900&auto=format&fit=crop',
    text: '"I have cities but no houses, forests but no trees, and water but no fish. What am I?"',
    answers: ['map', 'a map']
  },
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=900&auto=format&fit=crop',
    text: '"The more you take, the more you leave behind. What am I?"',
    answers: ['footsteps', 'footstep']
  }
];

const now = new Date();
const weekNum = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24 * 7));
const currentPuzzle = puzzles[weekNum % puzzles.length];

const puzzleImage = document.getElementById('puzzle-image');
const riddleText = document.getElementById('riddle-text');
if (puzzleImage && riddleText) {
  puzzleImage.src = currentPuzzle.img;
  riddleText.textContent = currentPuzzle.text;
}

const submitBtn = document.getElementById('submit-answer');
const answerInput = document.getElementById('puzzle-answer');
const feedback = document.getElementById('feedback');

if (submitBtn && answerInput && feedback) {
  submitBtn.addEventListener('click', function() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (!userAnswer) {
      feedback.textContent = 'من فضلك اكتب إجابتك أولاً.';
      feedback.style.color = '#fcd34d';
      return;
    }
    const correct = currentPuzzle.answers.some(function(a) {
      return userAnswer.includes(a);
    });
    if (correct) {
      feedback.textContent = '🎉 إجابة صحيحة! أحسنت!';
      feedback.style.color = '#86efac';
      showToast('إجابة صحيحة! أحسنت');
    } else {
      const hint = currentPuzzle.answers[0];
      feedback.textContent = 'إجابة غير صحيحة. فكّر مرة أخرى... (تلميح: ' + hint.length + ' أحرف)';
      feedback.style.color = '#fca5a5';
    }
  });
  answerInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') submitBtn.click();
  });
}

// ===================================================
// 7. PARALLAX EFFECT ON ORBS
// ===================================================
document.addEventListener('mousemove', function(e) {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelectorAll('.orb').forEach(function(orb, i) {
    const factor = (i + 1) * 0.5;
    orb.style.transform = 'translate(' + (x * factor) + 'px, ' + (y * factor) + 'px)';
  });
});

// ===================================================
// 8. LANGUAGE SWITCH (باستخدام aricone.svg)
// ===================================================
(function() {
  const btn = document.getElementById('lang-switch');
  let currentLang = localStorage.getItem('preferredLang') || 'ar';

  const translations = {
    'صانع محتوي تعليمي و PRO': { en: 'Educational Content Creator & PRO', ar: 'صانع محتوي تعليمي و PRO' },
    'عني': { en: 'About', ar: 'عني' },
    'رسالتي': { en: 'My Mission', ar: 'رسالتي' },
    'هواياتي': { en: 'My Hobbies', ar: 'هواياتي' },
    'أعمالي': { en: 'My Works', ar: 'أعمالي' },
    'صورة اليوم': { en: 'Photo of the Day', ar: 'صورة اليوم' },
    'خدماتي': { en: 'My Services', ar: 'خدماتي' },
    'تواصل': { en: 'Contact', ar: 'تواصل' },
    'القائمة': { en: 'Menu', ar: 'القائمة' },
    'تواصل معي': { en: 'Contact Me', ar: 'تواصل معي' },
    'ابدأ التواصل': { en: 'Start Connecting', ar: 'ابدأ التواصل' },
    'استكشف أعمالي': { en: 'Explore My Works', ar: 'استكشف أعمالي' },
    'اكتشف المزيد': { en: 'Discover More', ar: 'اكتشف المزيد' },
    'صانع محتوى تعليمي · مدرّس لغة إنجليزية · مصوّر فوتوغرافي': { en: 'Educational Content Creator · English Teacher · Photographer', ar: 'صانع محتوى تعليمي · مدرّس لغة إنجليزية · مصوّر فوتوغرافي' },
    'صانع محتوى تعليمي': { en: 'Educational Content Creator', ar: 'صانع محتوى تعليمي' },
    'وشغوفٌ بنقل المعرفة': { en: 'Passionate about transferring knowledge', ar: 'وشغوفٌ بنقل المعرفة' },
    'أنا': { en: 'I am', ar: 'أنا' },
    'تامر ربيع': { en: 'Tamer Rabie', ar: 'تامر ربيع' },
    'صانع محتوى تعليمي متخصص في تعليم اللغة الإنجليزية، وأعمل كمستقل (Freelancer) في تقديم المحتوى التعليمي والخدمات اللغوية.': { en: 'An educational content creator specializing in teaching English, working as a freelancer in providing educational content and language services.', ar: 'صانع محتوى تعليمي متخصص في تعليم اللغة الإنجليزية، وأعمل كمستقل (Freelancer) في تقديم المحتوى التعليمي والخدمات اللغوية.' },
    'حاصل على درجة البكالوريوس من جامعة جنوب الوادي – قسم اللغة الإنجليزية، وأؤمن أن التعليم رسالة قبل أن يكون مهنة، وأن كل طالب يستحق فرصة حقيقية لإتقان لغة جديدة.': { en: 'Holds a Bachelor\'s degree from South Valley University - English Department, and believes that education is a mission before being a profession, and that every student deserves a real opportunity to master a new language.', ar: 'حاصل على درجة البكالوريوس من جامعة جنوب الوادي – قسم اللغة الإنجليزية، وأؤمن أن التعليم رسالة قبل أن يكون مهنة، وأن كل طالب يستحق فرصة حقيقية لإتقان لغة جديدة.' },
    'سنوات خبرة': { en: 'Years of Experience', ar: 'سنوات خبرة' },
    'طالب وطالبة': { en: 'Students', ar: 'طالب وطالبة' },
    'خريج': { en: 'Graduate', ar: 'خريج' },
    'جامعة جنوب الوادي': { en: 'South Valley University', ar: 'جامعة جنوب الوادي' },
    'قسم اللغة الإنجليزية': { en: 'English Department', ar: 'قسم اللغة الإنجليزية' },
    'رسالتي': { en: 'My Mission', ar: 'رسالتي' },
    'اللغة الإنجليزية ليست مجرد لغة،': { en: 'English is not just a language,', ar: 'اللغة الإنجليزية ليست مجرد لغة،' },
    'بل هي طريقة تفكير.': { en: 'it\'s a way of thinking.', ar: 'بل هي طريقة تفكير.' },
    'الهوايات هي مُتنفّس الروح وملاذ الإنسان': { en: 'Hobbies are the soul\'s escape and a haven for humans', ar: 'الهوايات هي مُتنفّس الروح وملاذ الإنسان' },
    'للهروب من ضغوط الحياة.': { en: 'to escape life\'s pressures.', ar: 'للهروب من ضغوط الحياة.' },
    'عالَمي عبر عدسة الكاميرا': { en: 'My World Through the Camera Lens', ar: 'عالَمي عبر عدسة الكاميرا' },
    'التصوير الفوتوغرافي هو هوايتي التي أعشقها، وأرى العالم بعدسة كاميرتي. كل لقطة هي قصة، وكل إطار يحمل لحظة لا تتكرر.': { en: 'Photography is my beloved hobby. I see the world through my camera lens. Every shot is a story, and every frame carries a unique moment.', ar: 'التصوير الفوتوغرافي هو هوايتي التي أعشقها، وأرى العالم بعدسة كاميرتي. كل لقطة هي قصة، وكل إطار يحمل لحظة لا تتكرر.' },
    'الجبال عند الغروب': { en: 'Mountains at Sunset', ar: 'الجبال عند الغروب' },
    'شوارع تحكي قصصاً': { en: 'Streets Telling Stories', ar: 'شوارع تحكي قصصاً' },
    'هدوء الطبيعة': { en: 'Nature\'s Peace', ar: 'هدوء الطبيعة' },
    'انعكاسات السكون': { en: 'Reflections of Silence', ar: 'انعكاسات السكون' },
    'امتداد الأرض': { en: 'Earth\'s Expanse', ar: 'امتداد الأرض' },
    'بين الأشجار': { en: 'Among the Trees', ar: 'بين الأشجار' },
    'أرى العالم بعدسة كاميرتي، وألتقط من الحياة أجمل لحظاتها': { en: 'I see the world through my lens, capturing life\'s most beautiful moments', ar: 'أرى العالم بعدسة كاميرتي، وألتقط من الحياة أجمل لحظاتها' },
    'مشاريع أفتخر بها': { en: 'Projects I\'m Proud Of', ar: 'مشاريع أفتخر بها' },
    'أعمال تعليمية ورقمية أنجزتها بشغف لمساعدة المتعلمين على إتقان اللغة الإنجليزية.': { en: 'Educational and digital works I accomplished with passion to help learners master English.', ar: 'أعمال تعليمية ورقمية أنجزتها بشغف لمساعدة المتعلمين على إتقان اللغة الإنجليزية.' },
    'قناة يوتيوب': { en: 'YouTube Channel', ar: 'قناة يوتيوب' },
    'English Learning Hub': { en: 'English Learning Hub', ar: 'English Learning Hub' },
    'قناة تعليمية على اليوتيوب تقدم محتوى متنوعاً لتعلم اللغة الإنجليزية بطريقة مبسطة وممتعة، تشمل دروس قواعد، محادثات، ونصائح عملية.': { en: 'An educational YouTube channel offering diverse content for learning English in a simple and enjoyable way, including grammar lessons, conversations, and practical tips.', ar: 'قناة تعليمية على اليوتيوب تقدم محتوى متنوعاً لتعلم اللغة الإنجليزية بطريقة مبسطة وممتعة، تشمل دروس قواعد، محادثات، ونصائح عملية.' },
    'دروس مرئية': { en: 'Video Lessons', ar: 'دروس مرئية' },
    'للمتعلمين': { en: 'For Learners', ar: 'للمتعلمين' },
    'شاهد القناة': { en: 'Watch Channel', ar: 'شاهد القناة' },
    'اضغط هنا': { en: 'Click Here', ar: 'اضغط هنا' },
    'لغز الأسبوع': { en: 'Riddle of the Week', ar: 'لغز الأسبوع' },
    'تأمل الصورة، حلّ اللغز بالإنجليزية، واختبر مهاراتك في الملاحظة واللغة معاً.': { en: 'Contemplate the image, solve the riddle in English, and test your observation and language skills together.', ar: 'تأمل الصورة، حلّ اللغز بالإنجليزية، واختبر مهاراتك في الملاحظة واللغة معاً.' },
    'صورة الأسبوع': { en: 'Photo of the Week', ar: 'صورة الأسبوع' },
    'اكتب إجابتك بالإنجليزية:': { en: 'Write your answer in English:', ar: 'اكتب إجابتك بالإنجليزية:' },
    'إرسال الإجابة': { en: 'Submit Answer', ar: 'إرسال الإجابة' },
    'يتجدد أسبوعياً': { en: 'Renews Weekly', ar: 'يتجدد أسبوعياً' },
    'كيف يمكنني مساعدتك': { en: 'How Can I Help You?', ar: 'كيف يمكنني مساعدتك' },
    'خدمات تعليمية مصممة بعناية لتناسب احتياجاتك وتأخذك إلى المستوى التالي في اللغة الإنجليزية.': { en: 'Educational services carefully designed to suit your needs and take you to the next level in English.', ar: 'خدمات تعليمية مصممة بعناية لتناسب احتياجاتك وتأخذك إلى المستوى التالي في اللغة الإنجليزية.' },
    'كورسات لغة إنجليزية': { en: 'English Courses', ar: 'كورسات لغة إنجليزية' },
    'كورسات متكاملة لجميع المستويات، من المبتدئ إلى المتقدم، بمنهج عملي وممتع.': { en: 'Integrated courses for all levels, from beginner to advanced, with a practical and enjoyable approach.', ar: 'كورسات متكاملة لجميع المستويات، من المبتدئ إلى المتقدم، بمنهج عملي وممتع.' },
    'استشارات فردية': { en: 'Individual Consultations', ar: 'استشارات فردية' },
    'جلسات استشارية خاصة لتقييم مستواك ووضع خطة تعلم تناسب أهدافك الشخصية والمهنية.': { en: 'Private consultation sessions to assess your level and create a learning plan that fits your personal and professional goals.', ar: 'جلسات استشارية خاصة لتقييم مستواك ووضع خطة تعلم تناسب أهدافك الشخصية والمهنية.' },
    'جلسات محادثة': { en: 'Conversation Sessions', ar: 'جلسات محادثة' },
    'تدريب عملي على المحادثة لبناء الثقة وتطوير مهارات التحدث والاستماع بطلاقة.': { en: 'Practical conversation training to build confidence and develop speaking and listening skills fluently.', ar: 'تدريب عملي على المحادثة لبناء الثقة وتطوير مهارات التحدث والاستماع بطلاقة.' },
    'دروس المرحلة الإعدادية': { en: 'Preparatory Stage Lessons', ar: 'دروس المرحلة الإعدادية' },
    'دروس خاصة لطلاب المرحلة الإعدادية وفق المنهج الدراسي، مع تبسيط وشرح وافٍ.': { en: 'Private lessons for preparatory stage students according to the curriculum, with simplification and thorough explanation.', ar: 'دروس خاصة لطلاب المرحلة الإعدادية وفق المنهج الدراسي، مع تبسيط وشرح وافٍ.' },
    'احجز خدمتك الآن': { en: 'Book Your Service Now', ar: 'احجز خدمتك الآن' },
    'لنبادر بالتواصل': { en: 'Let\'s Connect', ar: 'لنبادر بالتواصل' },
    'سواء كنت طالباً، أولياء أمور، أو صاحب مشروع، أنا هنا للإجابة على استفساراتك.': { en: 'Whether you are a student, a parent, or a project owner, I am here to answer your inquiries.', ar: 'سواء كنت طالباً، أولياء أمور، أو صاحب مشروع، أنا هنا للإجابة على استفساراتك.' },
    'البريد الإلكتروني': { en: 'Email', ar: 'البريد الإلكتروني' },
    'الهاتف المحمول': { en: 'Mobile Phone', ar: 'الهاتف المحمول' },
    'واتساب': { en: 'WhatsApp', ar: 'واتساب' },
    'تليجرام': { en: 'Telegram', ar: 'تليجرام' },
    'تابعني على منصات التواصل': { en: 'Follow me on Social Platforms', ar: 'تابعني على منصات التواصل' },
    'محتوى تعليمي يومي، نصائح، ولحظات من عالمي': { en: 'Daily educational content, tips, and moments from my world', ar: 'محتوى تعليمي يومي، نصائح، ولحظات من عالمي' },
    'جميع الحقوق محفوظة.': { en: 'All Rights Reserved.', ar: 'جميع الحقوق محفوظة.' },
    'صُنع بـ وشغفٍ بالتعليم': { en: 'Made with Passion for Education', ar: 'صُنع بـ وشغفٍ بالتعليم' }
  };

  function applyLanguage(lang) {
    document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';
    document.documentElement.lang = lang;

    // استخدام TreeWalker لالتقاط كل النصوص بدقة
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.tagName === 'INPUT' || parent.tagName === 'TEXTAREA') {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.id === 'riddle-text' || parent.closest('#riddle-text')) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodesToReplace = [];
    let node;
    while (node = walker.nextNode()) {
      nodesToReplace.push(node);
    }

    nodesToReplace.forEach(function(node) {
      const text = node.textContent.trim();
      if (text && translations[text]) {
        node.textContent = translations[text][lang];
      }
    });

    localStorage.setItem('preferredLang', lang);
    currentLang = lang;
  }

  if (btn) {
    btn.addEventListener('click', function() {
      const newLang = (currentLang === 'ar') ? 'en' : 'ar';
      applyLanguage(newLang);
    });
  }

  applyLanguage(currentLang);
})();

// ===================================================
// 9. CHALLENGE REGISTRATION FORM
// ===================================================
(function() {
  const form = document.getElementById('challenge-form');
  if (!form) return;

  const nameInput = document.getElementById('student-name');
  const phoneInput = document.getElementById('student-phone');
  const emailInput = document.getElementById('student-email');
  const messageDiv = document.getElementById('registration-message');
  const testLink = document.getElementById('test-link');

  const YOUR_WHATSAPP = '201131413209';
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !phone || !email) {
      showToast('الرجاء تعبئة جميع الحقول أولاً.');
      return;
    }

    const whatsappMessage = '📝 *تسجيل جديد في تحدي English Learning Hub*\n\n' +
      '👤 *الاسم:* ' + name + '\n' +
      '📱 *الجوال:* ' + phone + '\n' +
      '📧 *البريد:* ' + email + '\n\n' +
      '📅 *تاريخ التسجيل:* ' + new Date().toLocaleDateString('ar-EG') + '\n' +
      '🕐 *الوقت:* ' + new Date().toLocaleTimeString('ar-EG');

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = 'https://wa.me/' + YOUR_WHATSAPP + '?text=' + encodedMessage;
    window.open(whatsappURL, '_blank');

    const studentEmailSubject = encodeURIComponent('نتيجة تحدي English Learning Hub');
    const studentEmailBody = encodeURIComponent(
      'مرحباً ' + name + '،\n\n' +
      'شكراً لتسجيلك في تحدي English Learning Hub.\n\n' +
      '📋 بيانات تسجيلك:\n' +
      '👤 الاسم: ' + name + '\n' +
      '📱 الجوال: ' + phone + '\n' +
      '📧 البريد: ' + email + '\n\n' +
      '🔗 رابط الاختبار:\n' +
      'https://tamerrabie8-cmyk.github.io/Professional-placement-test/\n\n' +
      'بعد إنهاء الاختبار، سيتم إرسال نتيجتك إلى هذا البريد الإلكتروني.\n\n' +
      'مع تمنياتي لك بالتوفيق،\n' +
      'تامر ربيع\n' +
      'صانع محتوى تعليمي و PRO'
    );

    window.open('mailto:' + email + '?subject=' + studentEmailSubject + '&body=' + studentEmailBody, '_blank');

    if (messageDiv) messageDiv.style.display = 'block';
    if (testLink) testLink.style.display = 'block';

    showToast('🎉 تم التسجيل بنجاح! سيتم إرسال النتيجة إلى بريدك.');

    console.log('📝 بيانات التسجيل:');
    console.log('الاسم:', name);
    console.log('الجوال:', phone);
    console.log('البريد:', email);
    console.log('✅ تم إرسال إشعار واتساب إ