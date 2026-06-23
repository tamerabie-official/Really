document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuBtn && closeBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const onScroll = () => {
    const trigger = window.innerHeight * 0.85;
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) el.classList.add('active');
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Year in footer
  const yearSpan = document.getElementById('year-span');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Riddle (Arabic & English)
  const correctAnswer = 'lighthouse';

  const riddleArInput = document.getElementById('puzzle-answer');
  const riddleArBtn = document.getElementById('submit-answer');
  const riddleArFeedback = document.getElementById('feedback');

  if (riddleArBtn && riddleArInput && riddleArFeedback) {
    riddleArBtn.addEventListener('click', () => {
      const value = riddleArInput.value.trim().toLowerCase();
      if (!value) return;
      if (value === correctAnswer) {
        riddleArFeedback.style.color = '#4ade80';
        riddleArFeedback.textContent = 'إجابة صحيحة! أحسنت.';
      } else {
        riddleArFeedback.style.color = '#f97373';
        riddleArFeedback.textContent = 'قريبة، جرّب مرة أخرى 😉';
      }
    });
  }

  const riddleEnInput = document.getElementById('puzzle-answer-en');
  const riddleEnBtn = document.getElementById('submit-answer-en');
  const riddleEnFeedback = document.getElementById('feedback-en');

  if (riddleEnBtn && riddleEnInput && riddleEnFeedback) {
    riddleEnBtn.addEventListener('click', () => {
      const value = riddleEnInput.value.trim().toLowerCase();
      if (!value) return;
      if (value === correctAnswer) {
        riddleEnFeedback.style.color = '#4ade80';
        riddleEnFeedback.textContent = 'Correct answer! Well done.';
      } else {
        riddleEnFeedback.style.color = '#f97373';
        riddleEnFeedback.textContent = 'Close, try again 😉';
      }
    });
  }

  // Toast helper
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const showToast = msg => {
    if (!toast) return;
    if (toastMsg && msg) toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  };

  // Contact forms (prevent default submit and show toast)
  const formAr = document.getElementById('contact-form');
  if (formAr) {
    formAr.addEventListener('submit', e => {
      e.preventDefault();
      showToast('تم إرسال الرسالة بنجاح!');
      formAr.reset();
    });
  }

  const formEn = document.getElementById('contact-form-en');
  if (formEn) {
    formEn.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Message sent successfully!');
      formEn.reset();
    });
  }
});