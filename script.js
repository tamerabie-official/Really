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
