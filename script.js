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
  
  // الكود الكامل والمصلح 100% لإدارة حالة الأزرار بصرياً دون أي نقص:
  const btnAr = document.getElementById('btn-ar');
  const btnEn = document.getElementById('btn-en');
  
  if (btnAr) {
    btnAr.style.background = lang === 'ar' ? '#c9a961' : 'transparent';
    btnAr.style.color = lang === 'ar' ? '#0a0a0f' : '#c9a961';
  }
  if (btnEn) {
    btnEn.style.background = lang === 'en' ? '#c9a961' : 'transparent';
    btnEn.style.color = lang === 'en' ? '#0a0a0f' : '#c9a961';
  }
}

