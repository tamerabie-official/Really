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
  <script>
// تخزين نص اللغز الحالي لإرساله مع الواتساب
let currentRiddleTextForWa = "";

document.addEventListener("DOMContentLoaded", function() {
    // جدول الـ 52 أسبوعاً ممتد لعام كامل ويعيد نفسه تلقائياً كل سنة جديدة
    // يمكنك تعديل النصوص وأسماء الصور بما يناسبك في أي وقت
    const riddlesYearDatabase = [
        { image: "riddle1.jpeg", text: "الأسبوع 1: ما هو الشيء الذي يتحدث جميع لغات العالم؟" },
        { image: "riddle2.jpeg", text: "الأسبوع 2: كلمة إنجليزية إذا حذفت أول حرفين تصبح كلمة تدل على مكان؟" },
        { image: "riddle3.jpeg", text: "الأسبوع 3: اختر الإجابة الصحيحة من القواعد المعروضة في الصورة!" },
        { image: "riddle4.jpeg", text: "الأسبوع 4: ما هو الشيء الذي يملك عيناً واحدة لكنه لا يرى بها؟" },
        { image: "riddle1.jpeg", text: "الأسبوع 5: لغز جديد مخصص لهذا الأسبوع، ترقبو الحل!" },
        // الكود ذكي؛ إذا لم تملاً الـ 52 خانة كاملة، سيقوم بالدوران التلقائي (auto-loop) بناءً على العدد المتاح لديه
    ];

    // دالة احترافية لحساب رقم الأسبوع الحالي في السنة (من 1 إلى 52)
    function getCurrentWeekNumber() {
        const today = new Date();
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

    const riddleImgElement = document.getElementById("riddle-image");
    const riddleTextElement = document.getElementById("riddle-text");

    if (riddleImgElement && riddleTextElement) {
        const weekNum = getCurrentWeekNumber();
        
        // اختيار اللغز بناءً على رقم الأسبوع الحالي مع ميزة الحماية والتدوير (Modulo)
        const currentIdx = (weekNum - 1) % riddlesYearDatabase.length;
        const currentRiddle = riddlesYearDatabase[currentIdx];

        // تحديث المحتوى على الصفحة فوراً
        riddleImgElement.src = currentRiddle.image;
        riddleTextElement.innerText = currentRiddle.text;
        currentRiddleTextForWa = currentRiddle.text; // حفظ النص للواتساب
    }
});

// دالة شريط الإجابة لإرسال النص مباشرة إلى الواتساب الخاص بك
function sendRiddleAnswer() {
    const answerInput = document.getElementById("user-answer");
    if (!answerInput || answerInput.value.trim() === "") {
        alert("من فضلك اكتب إجابتك أولاً في الشريط قبل الإرسال!");
        return;
    }
    
    const userAns = answerInput.value.trim();
    const yourPhoneNumber = "201234567890"; // قم بتغيير هذا الرقم إلى رقم الواتساب الخاص بك بالرمز الدولي
    
    // تجهيز نص الرسالة بشكل منسق وفخم للمستر
    const message = "أهلاً مستر، أنا مشترك في الموقع وجاهز بـ حل لغز الأسبوع!\n\n" + 
                    "📌 اللغز: " + currentRiddleTextForWa + "\n" +
                    "💡 إجابتي هي: " + userAns;
    
    // فتح الرابط فوراً
    const whatsappUrl = "https://wa.me/" + yourPhoneNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, "_blank");
}
</script>
          
