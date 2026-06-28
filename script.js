
```javascript
// --- مصفوفة الترجمات والـ SEO الديناميكي ---
const content = {
    ar: {
        btn: "English",
        name: "تامر ربيع",
        desc: "صانع محتوى تعليمي",
        heroBtn: "التواصل الرسمي",
        metaTitle: "تامر ربيع | خبير تعليم اللغة الإنجليزية وصانع محتوى",
        metaDesc: "منصة تامر ربيع التعليمية: متخصص في شرح منهج الإنجليزية للمرحلة الإعدادية، اختبارات تحديد مستوى، وكورسات محادثة."
    },
    en: {
        btn: "العربية",
        name: "Tamer Rabie",
        desc: "Educational Content Creator",
        heroBtn: "Official Contact",
        metaTitle: "Tamer Rabie | English Language Expert",
        metaDesc: "Tamer Rabie's Platform: Specialized in English curriculum, placement tests, and conversation courses."
    }
};

let currentLang = 'ar';

// --- دالة تبديل اللغة والـ SEO ---
function toggleLanguage() {
    const body = document.body;
    const metaDescTag = document.querySelector('meta[name="description"]');
    
    if (currentLang === 'ar') {
        currentLang = 'en';
        body.classList.add('lang-en');
        body.setAttribute('dir', 'ltr');
    } else {
        currentLang = 'ar';
        body.classList.remove('lang-en');
        body.setAttribute('dir', 'rtl');
    }
    
    // تحديث النصوص في الصفحة
    document.getElementById('langBtn').textContent = content[currentLang].btn;
    document.getElementById('hero-name').textContent = content[currentLang].name;
    document.getElementById('hero-desc').textContent = content[currentLang].desc;
    document.getElementById('hero-btn').textContent = content[currentLang].heroBtn;
    
    // تحديث الـ SEO ديناميكياً (ليراها جوجل والزائر)
    document.title = content[currentLang].metaTitle;
    if(metaDescTag) metaDescTag.setAttribute('content', content[currentLang].metaDesc);
}

// --- نظام التحكم في المساعد الذكي moaid ---
function toggleChatWindow() {
    const chatWin = document.getElementById('chatWindow');
    if (chatWin) {
        chatWin.style.display = (chatWin.style.display === 'flex') ? 'none' : 'flex';
    }
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendUserMessage();
    }
}

// --- وظائف الموقع التفاعلية ---
document.addEventListener('DOMContentLoaded', function () {
    
    // 1. تحديث السنة تلقائياً في الفوتر
    const yearSpan = document.getElementById('year-span');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. تأثير الظهور التدريجي (Reveal on Scroll)
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

    // 3. زر العودة للأعلى (Back to Top)
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
});
```