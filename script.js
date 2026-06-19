// =============================================
// الملف: script.js
// الوصف: جميع الأكواد التفاعلية للصفحة
// =============================================

// انتظار تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
  
  // ===== 1. القائمة الجانبية (Mobile Menu) =====
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

  // ===== 2. زر العودة للأعلى (Back to Top) =====
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

  // ===== 3. تأثير الظهور عند التمرير (Reveal on Scroll) =====
  const revealEls = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.12, 
    rootMargin: '0px 0px -60px 0px' 
  });

  revealEls.forEach(function(el) {
    observer.observe(el);
  });

  // ===== 4. تفعيل الروابط النشطة في شريط التنقل =====
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
  }, { 
    threshold: 0.3 
  });

  sections.forEach(function(s) {
    navObserver.observe(s);
  });

  // ===== 5. نظام الألغاز الأسبوعي =====
  const puzzles = [
    {
      img: 'https://images.unsplash.com/photo-1473507539-13eb9b7e8c2e?q=80&w=900&auto=format&fit=crop',
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
    }
  ];

  // اختيار لغز بناءً على رقم الأسبوع
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
        showFeedback('من فضلك اكتب إجابتك أولاً.', 'warn');
        return;
      }
      
      const correct = currentPuzzle.answers.some(function(a) {
        return userAnswer.includes(a);
      });
      
      if (correct) {
        showFeedback('🎉 إجابة صحيحة! أحسنت، أنت ملاحظ جيد.', 'success');
        showToast('إجابة صحيحة! أحسنت');
      } else {
        const hint = currentPuzzle.answers[0];
        showFeedback('إجابة غير صحيحة. فكّر مرة أخرى... (تلميح: ' + hint.length + ' أحرف)', 'error');
      }
    });

    answerInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        submitBtn.click();
      }
    });
  }

  // ===== 6. دوال مساعدة =====
  function showFeedback(msg, type) {
    const feedbackEl = document.getElementById('feedback');
    if (!feedbackEl) return;
    
    feedbackEl.textContent = msg;
    
    const colors = {
      success: '#86efac',
      error: '#fca5a5',
      warn: '#fcd34d'
    };
    
    feedbackEl.style.color = colors[type] || 'var(--ts)';
  }

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

  // ===== 7. تأثير البارالاكس على الخلفيات =====
  document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    document.querySelectorAll('.orb').forEach(function(orb, i) {
      const factor = (i + 1) * 0.5;
      orb.style.transform = 'translate(' + (x * factor) + 'px, ' + (y * factor) + 'px)';
    });
  });

}); // نهاية DOMContentLoaded
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}// ===================================================
// TOAST FUNCTION
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
// LANGUAGE TOGGLE
// ===================================================
(function() {
  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');
  let isEnglish = false;

  // قاموس الترجمة الكامل
  const translations = {
    'header-title': { ar: 'صانع محتوى تعليمي و PRO', en: 'Educational Content Creator & PRO' },
    'nav-about': { ar: 'عني', en: 'About' },
    'nav-mission': { ar: 'رسالتي', en: 'My Mission' },
    'nav-hobbies': { ar: 'هواياتي', en: 'Hobbies' },
    'nav-works': { ar: 'أعمالي', en: 'My Work' },
    'nav-photo': { ar: 'صورة اليوم', en: 'Photo of the Day' },
    'nav-services': { ar: 'خدماتي', en: 'Services' },
    'nav-contact': { ar: 'تواصل', en: 'Contact' },
    'contact-btn': { ar: 'تواصل معي', en: 'Contact Me' },
    'menu-title': { ar: 'القائمة', en: 'Menu' },
    'mobile-contact-btn': { ar: 'ابدأ التواصل', en: 'Start Chat' },
    'hero-subtitle': { ar: 'صانع محتوى تعليمي و PRO', en: 'Educational Content Creator & PRO' },
    'hero-btn-works-text': { ar: 'استكشف أعمالي', en: 'Explore My Work' },
    'hero-btn-contact-text': { ar: 'تواصل معي', en: 'Contact Me' },
    'scroll-hint': { ar: 'اكتشف المزيد', en: 'Discover More' },
    'about-label': { ar: 'عني', en: 'About' },
    'about-title-1': { ar: 'صانع محتوى', en: 'Educational Content' },
    'about-title-2': { ar: 'تعليمي', en: 'Creator' },
    'about-title-3': { ar: 'و PRO', en: '& PRO' },
    'about-text-1': { ar: 'أنا', en: 'I am' },
    'about-text-2': { ar: '، صانع محتوى تعليمي و PRO.', en: ', Educational Content Creator & PRO.' },
    'about-text-3': { ar: 'حاصل على درجة البكالوريوس من', en: 'Holder of a Bachelor\'s degree from' },
    'about-text-4': { ar: 'جامعة جنوب الوادي – قسم اللغة الإنجليزية', en: 'South Valley University - English Department' },
    'about-text-5': { ar: '، وأؤمن أن التعليم رسالة قبل أن يكون مهنة، وأن كل طالب يستحق فرصة حقيقية لإتقان لغة جديدة.', en: ', and I believe that education is a mission before being a profession, and every student deserves a real chance to master a new language.' },
    'about-badge-grad': { ar: 'خريج', en: 'Graduate' },
    'about-badge-uni': { ar: 'جامعة جنوب الوادي', en: 'South Valley University' },
    'about-badge-dept': { ar: 'قسم اللغة الإنجليزية', en: 'English Department' },
    'about-exp': { ar: 'سنوات خبرة', en: 'Years Experience' },
    'about-students': { ar: 'طالب وطالبة', en: 'Students' },
    'about-tag-1': { ar: 'صانع محتوى تعليمي و PRO', en: 'Educational Content Creator & PRO' },
    'mission-title': { ar: 'رسالتي', en: 'My Mission' },
    'mission-label': { ar: 'رسالتي', en: 'My Mission' },
    'mission-quote-1': { ar: 'اللغة الإنجليزية ليست مجرد', en: 'English is not just a' },
    'mission-quote-2': { ar: 'لغة', en: 'language' },
    'mission-quote-3': { ar: '،', en: ',' },
    'mission-quote-4': { ar: 'بل هي', en: 'it is a' },
    'mission-quote-5': { ar: 'طريقة تفكير', en: 'way of thinking' },
    'mission-quote-6': { ar: '.', en: '.' },
    'mission-quote-7': { ar: 'الهوايات هي', en: 'Hobbies are' },
    'mission-quote-8': { ar: 'مُتنفّس الروح', en: 'the soul\'s breathing space' },
    'mission-quote-9': { ar: 'وملاذ الإنسان', en: 'and man\'s refuge' },
    'mission-quote-10': { ar: 'للهروب من ضغوط الحياة.', en: 'to escape life\'s pressures.' },
    'mission-name': { ar: 'تامر ربيع', en: 'Tamer Rabie' },
    'hobbies-label': { ar: 'هواياتي', en: 'Hobbies' },
    'hobbies-title-1': { ar: 'عالَمي عبر', en: 'My World Through' },
    'hobbies-title-2': { ar: 'عدسة الكاميرا', en: 'the Camera Lens' },
    'hobbies-desc': { ar: 'التصوير الفوتوغرافي هو هوايتي التي أعشقها، وأرى العالم بعدسة كاميرتي. كل لقطة هي قصة، وكل إطار يحمل لحظة لا تتكرر.', en: 'Photography is my passion, I see the world through my camera lens. Every shot is a story, every frame captures a unique moment.' },
    'hobbies-caption-1': { ar: 'الجبال عند الغروب', en: 'Mountains at Sunset' },
    'hobbies-caption-2': { ar: 'شوارع تحكي قصصاً', en: 'Streets Telling Stories' },
    'hobbies-caption-3': { ar: 'هدوء الطبيعة', en: 'Nature\'s Peace' },
    'hobbies-caption-4': { ar: 'انعكاسات السكون', en: 'Reflections of Stillness' },
    'hobbies-caption-5': { ar: 'امتداد الأرض', en: 'Land\'s Expanse' },
    'hobbies-caption-6': { ar: 'بين الأشجار', en: 'Among the Trees' },
    'hobbies-quote': { ar: '«أرى العالم بعدسة كاميرتي، وألتقط من الحياة أجمل لحظاتها»', en: '«I see the world through my camera lens, capturing life\'s most beautiful moments»' },
    'works-label': { ar: 'أعمالي', en: 'My Work' },
    'works-title-1': { ar: 'مشاريع', en: 'Projects I' },
    'works-title-2': { ar: 'أفتخر بها', en: 'Am Proud Of' },
    'works-desc': { ar: 'أعمال تعليمية ورقمية أنجزتها بشغف لمساعدة المتعلمين على إتقان اللغة الإنجليزية.', en: 'Educational and digital projects I\'ve completed with passion to help learners master English.' },
    'works-youtube-badge': { ar: 'قناة يوتيوب', en: 'YouTube Channel' },
    'works-youtube-desc': { ar: 'قناة تعليمية على اليوتيوب تقدم محتوى متنوعاً لتعلم اللغة الإنجليزية بطريقة مبسطة وممتعة، تشمل دروس قواعد، محادثات، ونصائح عملية.', en: 'An educational YouTube channel offering diverse content for learning English in a simple and enjoyable way, including grammar lessons, conversations, and practical tips.' },
    'works-youtube-tag-1': { ar: 'دروس مرئية', en: 'Video Lessons' },
    'works-youtube-tag-2': { ar: 'للمتعلمين', en: 'For Learners' },
    'works-youtube-btn': { ar: 'شاهد القناة', en: 'Watch Channel' },
    'works-challenge-btn': { ar: 'اضغط هنا', en: 'Click Here' },
    'riddle-label': { ar: 'صورة اليوم', en: 'Photo of the Day' },
    'riddle-title-1': { ar: 'لغز', en: 'Riddle of' },
    'riddle-title-2': { ar: 'الأسبوع', en: 'the Week' },
    'riddle-desc': { ar: 'تأمل الصورة، حلّ اللغز بالإنجليزية، واختبر مهاراتك في الملاحظة واللغة معاً.', en: 'Study the photo, solve the riddle in English, and test your observation and language skills together.' },
    'riddle-badge': { ar: 'صورة الأسبوع', en: 'Photo of the Week' },
    'riddle-badge-eng': { ar: 'لغز الأسبوع', en: 'RIDDLE OF THE WEEK' },
    'riddle-input-label': { ar: 'اكتب إجابتك بالإنجليزية:', en: 'Type your answer in English:' },
    'riddle-submit-btn': { ar: 'إرسال الإجابة', en: 'Submit Answer' },
    'riddle-footer-1': { ar: 'يتجدد أسبوعياً', en: 'Renews Weekly' },
    'services-label': { ar: 'خدماتي', en: 'Services' },
    'services-title-1': { ar: 'كيف يمكنني', en: 'How Can I' },
    'services-title-2': { ar: 'مساعدتك', en: 'Help You' },
    'services-desc': { ar: 'خدمات تعليمية مصممة بعناية لتناسب احتياجاتك وتأخذك إلى المستوى التالي في اللغة الإنجليزية.', en: 'Educational services carefully designed to suit your needs and take you to the next level in English.' },
    'services-item-1-title': { ar: 'كورسات لغة إنجليزية', en: 'English Courses' },
    'services-item-1-desc': { ar: 'كورسات متكاملة لجميع المستويات، من المبتدئ إلى المتقدم، بمنهج عملي وممتع.', en: 'Comprehensive courses for all levels, from beginner to advanced, with a practical and enjoyable approach.' },
    'services-item-2-title': { ar: 'استشارات فردية', en: 'One-to-One Consultations' },
    'services-item-2-desc': { ar: 'جلسات استشارية خاصة لتقييم مستواك ووضع خطة تعلم تناسب أهدافك الشخصية والمهنية.', en: 'Private consultation sessions to assess your level and create a learning plan tailored to your personal and professional goals.' },
    'services-item-3-title': { ar: 'جلسات محادثة', en: 'Conversation Sessions' },
    'services-item-3-desc': { ar: 'تدريب عملي على المحادثة لبناء الثقة وتطوير مهارات التحدث والاستماع بطلاقة.', en: 'Practical conversation training to build confidence and develop speaking and listening skills fluently.' },
    'services-item-4-title': { ar: 'دروس المرحلة الإعدادية', en: 'Preparatory Stage Lessons' },
    'services-item-4-desc': { ar: 'دروس خاصة لطلاب المرحلة الإعدادية وفق المنهج الدراسي، مع تبسيط وشرح وافٍ.', en: 'Special lessons for preparatory stage students following the curriculum, with simplification and thorough explanation.' },
    'services-btn-text': { ar: 'احجز خدمتك الآن', en: 'Book Your Service Now' },
    'contact-label': { ar: 'التواصل الرسمي', en: 'Official Contact' },
    'contact-title-1': { ar: 'لنبادر', en: 'Let\'s' },
    'contact-title-2': { ar: 'بالتواصل', en: 'Get in Touch' },
    'contact-desc': { ar: 'سواء كنت طالباً، أولياء أمور، أو صاحب مشروع، أنا هنا للإجابة على استفساراتك.', en: 'Whether you are a student, a parent, or a project owner, I am here to answer your queries.' },
    'contact-email-label': { ar: 'البريد الإلكتروني', en: 'Email' },
    'contact-phone-label': { ar: 'الهاتف المحمول', en: 'Mobile' },
    'contact-whatsapp-label': { ar: 'واتساب', en: 'WhatsApp' },
    'contact-telegram-label': { ar: 'تليجرام', en: 'Telegram' },
    'social-title-1': { ar: 'تابعني على', en: 'Follow Me On' },
    'social-title-2': { ar: 'منصات التواصل', en: 'Social Platforms' },
    'social-desc': { ar: 'محتوى تعليمي يومي، نصائح، ولحظات من عالمي', en: 'Daily educational content, tips, and moments from my world.' },
    'footer-name': { ar: 'تامر ربيع', en: 'Tamer Rabie' },
    'footer-title': { ar: 'صانع محتوى تعليمي و PRO', en: 'Educational Content Creator & PRO' },
    'footer-verse': { ar: '﴿ وَقُل رَّبِّ زِدْنِي عِلْمًا ﴾', en: '﴾ And say, \'My Lord, increase me in knowledge\' ﴿' },
    'footer-copy': { ar: '© 2025 تامر ربيع. جميع الحقوق محفوظة.', en: '© 2025 Tamer Rabie. All rights reserved.' },
    'footer-made': { ar: 'صُنع بـ', en: 'Made with' },
    'footer-passion': { ar: 'وشغفٍ بالتعليم', en: 'and passion for education' }
  };

  function setLanguage(lang) {
    isEnglish = (lang === 'en');
    langLabel.textContent = isEnglish ? 'العربية' : 'English';

    document.querySelectorAll('[data-translate]').forEach(function(el) {
      const key = el.getAttribute('data-translate');
      if (translations[key]) {
        el.textContent = isEnglish ? translations[key].en : translations[key].ar;
      }
    });

    document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
    document.documentElement.lang = isEnglish ? 'en' : 'ar';
  }

  langToggle.addEventListener('click', function() {
    setLanguage(isEnglish ? 'ar' : 'en');
  });

  setLanguage('ar');
})();

// ===================================================
// MOBILE MENU
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
// BACK TO TOP
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
// REVEAL ON SCROLL
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
// ACTIVE NAV LINKS
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
// WEEKLY RIDDLE
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
// PARALLAX EFFECT ON ORBS
// ===================================================
document.addEventListener('mousemove', function(e) {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelectorAll('.orb').forEach(function(orb, i) {
    const factor = (i + 1) * 0.5;
    orb.style.transform = 'translate(' + (x * factor) + 'px, ' + (y * factor) + 'px)';
  });
});

console.log('✅ تم تحميل جميع الأكواد بنجاح!');// ===== فتح وإغلاق القائمة الجانبية =====
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn) {
  menuBtn.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateX(0)';
  });
}
if (closeBtn) {
  closeBtn.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateX(100%)';
  });
}
// إغلاق القائمة عند الضغط على أي رابط داخلها
document.querySelectorAll('.mobile-link').forEach(function(link) {
  link.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateX(100%)';
  });
});
```
