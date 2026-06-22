// script.js

// انتظر تحميل الـ DOM
document.addEventListener('DOMContentLoaded', function () {
  // عناصر أساسية
  const backToTopBtn = document.getElementById('back-to-top');
  const menuBtn      = document.getElementById('menu-btn');
  const closeBtn     = document.getElementById('close-btn');
  const mobileMenu   = document.getElementById('mobile-menu');
  const mobileLinks  = document.querySelectorAll('.mobile-link');
  const navLinks     = document.querySelectorAll('.nav-link');
  const yearSpan     = document.getElementById('year-span');
  const revealEls    = document.querySelectorAll('.reveal');
  const langSwitch   = document.getElementById('lang-switch');
  const toast        = document.getElementById('toast');
  const toastMsg     = document.getElementById('toast-msg');

  const puzzleImage  = document.getElementById('puzzle-image');
  const riddleText   = document.getElementById('riddle-text');
  const puzzleInput  = document.getElementById('puzzle-answer');
  const submitAnswer = document.getElementById('submit-answer');
  const feedback     = document.getElementById('feedback');

  /* =========================
   *  سنة الفوتر الحالية
   * ========================= */
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* =========================
   *  زر العودة لأعلى الصفحة
   * ========================= */
  function handleBackToTopVisibility() {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleBackToTopVisibility);

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* =========================
   *  قائمة الموبايل
   * ========================= */
  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', openMobileMenu);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }

  // إغلاق القائمة عند الضغط على رابط داخلها
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  /* =========================
   *  تفعيل الروابط في النافبار حسب السكشن
   * ========================= */
  const sections = document.querySelectorAll('section[id]');
  function activateNavLinkOnScroll() {
    const scrollPos = window.scrollY + 120; // لتعويض الهيدر الثابت

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', activateNavLinkOnScroll);

  /* =========================
   *  تأثير الظهور عند التمرير (Reveal)
   * ========================= */
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18
      }
    );

    revealEls.forEach(el => observer.observe(el));
  } else {
    // في المتصفحات القديمة اجعل العناصر ظاهرة بشكل افتراضي
    revealEls.forEach(el => el.classList.add('active'));
  }

  /* =========================
   *  نظام التوست (رسالة علوية صغيرة)
   * ========================= */
  let toastTimeout;

  function showToast(message, duration = 3000) {
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  /* =========================
   *  دعم بسيط لتبديل اللغة (عرض فقط)
   * ========================= */
  let currentLang = 'ar';
  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      // في هذا الإصدار نقوم فقط بإظهار رسالة، ويمكن لاحقاً ربطه بنظام ترجمة حقيقي
      if (currentLang === 'ar') {
        showToast('English version is under preparation.', 3500);
        currentLang = 'en';
      } else {
        showToast('سيتم الرجوع للواجهة العربية.', 3000);
        currentLang = 'ar';
      }
    });
  }

  /* =========================
   *  لغز الأسبوع (منطق بسيط)
   * ========================= */

  // يمكنك تغيير هذه البيانات لاحقاً إذا أحببت تحديث اللغز والصورة أسبوعياً
  const puzzle = {
    answer: 'lighthouse', // الإجابة الصحيحة
    moreCorrect: ['a lighthouse', 'light house'],
    successMessages: [
      'إجابة رائعة! 👏',
      'Perfect! You solved it! 🎉',
      'Great job, your answer is correct!'
    ],
    errorMessages: [
      'إجابة قريبة، جرّب مرة أخرى.',
      'Not quite. Look at the picture carefully and try again.',
      'Hint: It helps ships at night.'
    ]
  };

  function normalizeAnswer(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[.!?،]/g, '');
  }

  if (submitAnswer && puzzleInput && feedback) {
    submitAnswer.addEventListener('click', () => {
      const userAnsRaw = puzzleInput.value;
      const userAns = normalizeAnswer(userAnsRaw);

      if (!userAns) {
        feedback.textContent = 'اكتب إجابة أولاً.';
        feedback.style.color = '#f97373';
        return;
      }

      const isCorrect =
        userAns === puzzle.answer ||
        puzzle.moreCorrect.some(a => userAns === a);

      if (isCorrect) {
        const msg =
          puzzle.successMessages[
            Math.floor(Math.random() * puzzle.successMessages.length)
          ];
        feedback.textContent = msg;
        feedback.style.color = '#4ade80';
        showToast('إجابة صحيحة! أحسنت 👌', 3000);
      } else {
        const msg =
          puzzle.errorMessages[
            Math.floor(Math.random() * puzzle.errorMessages.length)
          ];
        feedback.textContent = msg;
        feedback.style.color = '#f97373';
      }
    });

    // السماح بالضغط على Enter
    puzzleInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitAnswer.click();
      }
    });
  }
});