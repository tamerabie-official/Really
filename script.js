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
}