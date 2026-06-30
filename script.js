// --- مصفوفة الترجمات والـ SEO الديناميكي ---
const content = {
    ar: {
        btn: "English",
        name: "تامر ربيع",
        desc: "صانع محتوى تعليمي",
        heroBtn: "التواصل الرسمي",
        metaTitle: "تامر ربيع | خبير تعليم اللغة الإنجليزية وصانع محتوى",
        metaDesc: "منصة تامر ربيع التعليمية: متخصص في شرح منهج الإنجليزية للمرحلة الإعدادية، اختبارات تحديد مستوى، وكورسات محادثة.",
        missionTitle: "رسالتي",
        missionText1: "\"اللغة الإنجليزية ليست مجرد لغة، بل طريقة تفكير.\"",
        projectsMainTitle: "أعمالي ومشاريعي",
        p1Desc: "قناة تعليمية لشرح منهج المرحلة الإعدادية بطريقة عصرية.",
        p2Title: "إختبار تحديد المستوى (التحدي)",
        p2Desc: "اختبار شامل يعطي فكرة دقيقة عن مستوى المتعلم الحالي.",
        p3Title: "التصوير الفوتوغرافي",
        p3Desc: "من مسقط رأسي بأسوان الحبيبة.",
        p3Status: "حلمي قريباً ⏳",
        riddleTitle: "لغز الأسبوع",
        servicesTitle: "الخدمات التي أقدمها",
        srv1: "كورسات لغة إنجليزية",
        srv2: "جلسات محادثة",
        srv3: "دروس المرحلة الإعدادية",
        riddleBtn: "إرسال الإجابة"
    },
    en: {
        btn: "العربية",
        name: "Tamer Rabie",
        desc: "Educational Content Creator",
        heroBtn: "Official Contact",
        metaTitle: "Tamer Rabie | English Language Expert",
        metaDesc: "Tamer Rabie's Platform: Specialized in English curriculum, placement tests, and conversation courses.",
        missionTitle: "My Mission",
        missionText1: "\"English isn't just a language, it's a way of thinking.\"",
        projectsMainTitle: "My Work & Projects",
        p1Desc: "An educational channel explaining the prep-stage curriculum in a modern way.",
        p2Title: "Placement Test (The Challenge)",
        p2Desc: "A comprehensive test that gives an accurate idea of the learner's current level.",
        p3Title: "Photography",
        p3Desc: "From my hometown, beloved Aswan.",
        p3Status: "Coming soon ⏳",
        riddleTitle: "Weekly Riddle",
        servicesTitle: "Services I Offer",
        srv1: "English Language Courses",
        srv2: "Conversation Sessions",
        srv3: "Prep-Stage Lessons",
        riddleBtn: "Submit Answer"
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
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    } else {
        currentLang = 'ar';
        body.classList.remove('lang-en');
        body.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    }

    const t = content[currentLang];

    document.getElementById('langBtn').textContent = t.btn;
    document.getElementById('hero-name').textContent = t.name;
    document.getElementById('hero-desc').textContent = t.desc;
    document.getElementById('hero-btn').textContent = t.heroBtn;
    document.getElementById('mission-title').textContent = t.missionTitle;
    document.getElementById('mission-text1').textContent = t.missionText1;
    document.getElementById('projects-main-title').textContent = t.projectsMainTitle;
    document.getElementById('p1-desc').textContent = t.p1Desc;
    document.getElementById('p2-title').textContent = t.p2Title;
    document.getElementById('p2-desc').textContent = t.p2Desc;
    document.getElementById('p3-title').textContent = t.p3Title;
    document.getElementById('p3-desc').textContent = t.p3Desc;
    document.getElementById('p3-status').textContent = t.p3Status;
    document.getElementById('riddle-title').textContent = t.riddleTitle;
    document.getElementById('services-title').textContent = t.servicesTitle;
    document.getElementById('srv-1').textContent = t.srv1;
    document.getElementById('srv-2').textContent = t.srv2;
    document.getElementById('srv-3').textContent = t.srv3;
    document.getElementById('riddle-btn').textContent = t.riddleBtn;

    document.title = t.metaTitle;
    if (metaDescTag) metaDescTag.setAttribute('content', t.metaDesc);
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

// --- نظام ردود moaid الجاهزة (بدون AI) ---
const moaidReplies = [
    {
        keywords: ["سعر", "تكلفة", "فلوس", "كام"],
        reply: "أسعار الكورسات بتختلف حسب نوع الجلسة. تقدر تتواصل مع Mr. Tamer مباشرة على mr.tamer2026@outlook.com للتفاصيل الكاملة."
    },
    {
        keywords: ["كورس", "دروس", "اشتراك"],
        reply: "Mr. Tamer بيقدم كورسات لغة إنجليزية، جلسات محادثة، ودروس للمرحلة الإعدادية. تقدر تشوف التفاصيل في قسم 'الخدمات' فوق."
    },
    {
        keywords: ["اختبار", "تحديد المستوى", "مستوى"],
        reply: "تقدر تعمل اختبار تحديد المستوى من هنا: قسم 'أعمالي ومشاريعي' فوق، زرار 'ابدأ التحدي'."
    },
    {
        keywords: ["تواصل", "رقم", "ايميل", "اتصال"],
        reply: "تقدر تتواصل مباشرة عبر الإيميل mr.tamer2026@outlook.com أو من خلال السوشيال ميديا في أسفل الصفحة."
    },
    {
        keywords: ["سلام", "اهلا", "هاي", "مرحبا"],
        reply: "أهلاً بيك! أنا moaid، مساعد Mr. Tamer. اسألني عن الكورسات أو اختبار تحديد المستوى."
    }
];

const defaultMoaidReply = "شكراً لرسالتك! لمزيد من التفاصيل تقدر تتواصل مباشرة مع Mr. Tamer عبر mr.tamer2026@outlook.com";

function getMoaidReply(userText) {
    const text = userText.toLowerCase();
    for (const item of moaidReplies) {
        if (item.keywords.some(k => text.includes(k))) {
            return item.reply;
        }
    }
    return defaultMoaidReply;
}

function addChatBubble(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    const bubble = document.createElement('div');
    bubble.classList.add('chat-bubble', sender === 'user' ? 'user-msg' : 'bot-msg');
    bubble.textContent = message;

    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendUserMessage() {
    const chatInput = document.getElementById('chatInput');
    if (!chatInput) return;

    const userText = chatInput.value.trim();
    if (userText === "") return;

    addChatBubble(userText, 'user');
    chatInput.value = "";

    setTimeout(() => {
        const reply = getMoaidReply(userText);
        addChatBubble(reply, 'bot');
    }, 500);
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