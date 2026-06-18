const translations = {
  ar: {
    dir: 'rtl',
    subtitle: 'مرحباً بكم في موقعي الشخصي وصناعة المحتوى الإبداعي البروجرافي والتعليمي.',
    aboutTitle: 'من أنا؟',
    aboutText: 'أنا تامر ربيع، صانع محتوى تعليمي ومدرس لغة إنجليزية شغوف بتطوير المهارات واستخدام أحدث التقنيات البرمجية لتسهيل التعليم.',
    hobbyTitle: 'هواياتي واهتماماتي',
    hobbyText: 'إلى جانب التدريس، أعشق التصوير السينمائي، الطيران بالدرون، وتجربة أحدث الألعاب والأجهزة الإلكترونية.',
    exp1: '+23 سنة خبرة مهنية',
    exp2: '7 سنوات مؤسسة مسار الطبية - الدوحة',
    exp3: 'المقر الحالي - مصر'
  },
  en: {
    dir: 'ltr',
    subtitle: 'Welcome to my professional hub for creative content and educational tech.',
    aboutTitle: 'About Me',
    aboutText: 'I am Tamer Rabie, an English language educator and digital content creator dedicated to building innovative learning experiences.',
    hobbyTitle: 'Hobbies & Interests',
    hobbyText: 'Beyond teaching, I am highly passionate about cinematic photography, piloting drones, and diving into tech and gaming.',
    exp1: '+23 Years Professional Experience',
    exp2: '7 Years Masar Medical Foundation - Doha',
    exp3: 'Egypt Current Base'
  }
};

function switchLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text.replace(/\n/g, '<br>');
  };
  
  setText('hero-name-first', lang === 'ar' ? 'تامر' : 'Tamer');
  setText('hero-name-last', lang === 'ar' ? 'ربيع' : 'Rabie');
  setText('hero-subtitle', t.subtitle);
  setText('about-title', t.aboutTitle);
  setText('about-text', t.aboutText);
  setText('hobby-title', t.hobbyTitle);
  setText('hobby-text', t.hobbyText);
  setText('exp-1', t.exp1);
  setText('exp-2', t.exp2);
  setText('exp-3', t.exp3);
  
  // تحديث ستايل أزرار تبديل اللغة
  const btnAr = document.getElementById('btn-ar');
  const btnEn = document.getElementById('btn-en');
  if (btnAr && btnEn) {
    if (lang === 'ar') {
      btnAr.style.background = '#c9a961';
      btnAr.style.color = '#0a0a0f';
      btnEn.style.background = 'transparent';
      btnEn.style.color = '#c9a961';
    } else {
      btnEn.style.background = '#c9a961';
      btnEn.style.color = '#0a0a0f';
      btnAr.style.background = 'transparent';
      btnAr.style.color = '#c9a961';
    }
  }
  
  localStorage.setItem('preferredLang', lang);
}

// تشغيل اللغة المحفوظة تلقائياً عند فتح الموقع
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'ar';
  switchLang(savedLang);
});

// زر التعديل
function applyChanges() {
  // النص تحت الاسم
  document.getElementById("subtitle").innerHTML = "صانع محتوى تعليمي و PRO";

  // صورة البروفايل
  let img = document.querySelector(".profile-pic");
  img.src = "profile.jpg"; // ضع هنا رابط صورتك
  img.style.display = "block";
}

// زر تبديل اللغة
function toggleLanguage() {
  let text = document.getElementById("subtitle");
  if (text.innerHTML === "صانع محتوى تعليمي و PRO") {
    text.innerHTML = "Educational Content Creator & PRO";
  } else {
    text.innerHTML = "صانع محتوى تعليمي و PRO";
  }
}
// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Back to top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => observer.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.3 });
sections.forEach(s => navObserver.observe(s));

// Puzzle system
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

// Pick a puzzle based on week number
const now = new Date();
const weekNum = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24 * 7));
const currentPuzzle = puzzles[weekNum % puzzles.length];

document.getElementById('puzzle-image').src = currentPuzzle.img;
document.getElementById('riddle-text').textContent = currentPuzzle.text;

const submitBtn = document.getElementById('submit-answer');
const answerInput = document.getElementById('puzzle-answer');
const feedback = document.getElementById('feedback');

submitBtn.addEventListener('click', () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  if (!userAnswer) {
    showFeedback('من فضلك اكتب إجابتك أولاً.', 'warn');
    return;
  }
  const correct = currentPuzzle.answers.some(a => userAnswer.includes(a));
  if (correct) {
    showFeedback('🎉 إجابة صحيحة! أحسنت، أنت ملاحظ جيد.', 'success');
    showToast('إجابة صحيحة! أحسنت');
  } else {
    const hint = currentPuzzle.answers[0];
    showFeedback(`إجابة غير صحيحة. فكّر مرة أخرى... (تلميح: ${hint.length} أحرف)`, 'error');
  }
});

answerInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') submitBtn.click();
});

function showFeedback(msg, type) {
  feedback.textContent = msg;
  const colors = {
    success: '#86efac',
    error: '#fca5a5',
    warn: '#fcd34d'
  };
  feedback.style.color = colors[type] || 'var(--ts)';
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Parallax effect on orbs
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelectorAll('.orb').forEach((orb, i) => {
    const factor = (i + 1) * 0.5;
    orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});
