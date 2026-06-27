// --- مصفوفة الترجمات الخاصة بالصفحة ---
const content = {
    ar: {
        btn: "English", name: "تامر ربيع", title: "Tamer Rabie",
        desc: "صانع محتوى تعليمي. خريج جامعة جنوب الوادي - قسم اللغة الإنجليزية. أمتلك خبرة مهنية تمتد لـ 15 سنة كـ PRO بمؤسسة مسار الطبية المتخصصة في مجال الأسنان في الدوحة، قطر.",
        heroBtn: "التواصل الرسمي", missionTitle: "رسالتي", projMainTitle: "أعمالي ومشاريعي",
        p1Desc: "قناة تعليمية على اليوتيوب لشرح منهج المرحلة الإعدادية (الاول والثاني والثالث الاعدادي) بطريقة عصرية تقيم وتصنف قدرات الدارسين لاختيار أفضل طريقة استيعاب لكل طالب.",
        p2Title: "إختبار تحديد المستوى (التحدي)", p2Desc: "بمثابة المصافحة الأولى بيني وبين الدارس. اختبار شامل يعطي فكرة تعليمية دقيقة ومكتملة عن مستوى المتعلم الحالي ليعرف أين يقف بوضوح ونرسم معاً مسار التطوير.",
        p3Title: "التصوير الفوتوغرافي", p3Desc: "هوايتي المفضلة التي أسعى لـ احترافها قريباً. معرضي الفوتوغرافي الأول الجاهز سيكون بعنوان \"صباح الخير يا القاهرة\".",
        p3Status: "حلمي قريباً ⏳", p3Link: "رابط مؤقت للمتابعة", riddleTitle: "لغز الأسبوع", riddleBtn: "إرسال الإجابة",
        blogTitle: "مدونة هلوسات", post1Title: "أولى الهلوسات: خربشة على جدار الفكر",
        post1Excerpt: "هنا مساحة حرة تماماً خارج قيود المناهج وقواعد التعليم. أشارككم فيها بعض الأفكار العابرة والتأملات الشخصية في مجريات الحياة والمجتمع...", post1Link: "اقرأ المزيد ←",
        post2Title: "بين الشغف والمسؤولية", post2Excerpt: "كيف نوازن بين هواياتنا وملاذاتنا الروحية التي نتنفس بها، وبين التزامات وضغوط الحياة اليومية الحتمية؟ موازنة صعبة ولكنها تستحق المحاولة دائماً...", post2Link: "اقرأ المزيد ←",
        srvTitle: "الخدمات التي أقدمها", srv1: "كورسات لغة إنجليزية", srv2: "جلسات محادثة", srv3: "دروس لغة إنجليزية (المرحلة الإعدادية)"
    },
    en: {
        btn: "العربية", name: "Tamer Rabie", title: "Educational Content Creator & Former PRO",
        desc: "Educational content creator. Graduate of South Valley University - English Department. Possess 15 years of professional experience as a PRO at Masar Medical Establishment (Dental Field) in Doha, Qatar.",
        heroBtn: "Official Contact", missionTitle: "My Mission", projMainTitle: "My Projects & Portfolio",
        p1Desc: "An educational YouTube channel dedicated to explaining the English curriculum for Middle School (1st, 2nd, and 3rd prep) utilizing modern adaptive learning strategies based on student assessments.",
        p2Title: "English Placement Test (The Challenge)", p2Desc: "Considered the first handshake between me and the learner. A comprehensive test that gives a complete analytical insight into the student's scale and level to initiate a growth map.",
        p3Title: "Photography Portfolio", p3Desc: "My favorite hobby that I aim to specialize in soon. My first ready gallery will be named 'Good Morning Cairo'.",
        p3Status: "My Dream Soon ⏳", p3Link: "Temporary Channel Link", riddleTitle: "Riddle of the Week", riddleBtn: "Submit Answer",
        blogTitle: "Halosat Blog (My Ramblings)", post1Title: "First Rambling: Scribbles on the Wall of Thought",
        post1Excerpt: "A completely free space outside the constraints of curricula and teaching rules, where I share transient thoughts and personal reflections on life...", post1Link: "Read More →",
        post2Title: "Between Passion and Responsibility", post2Excerpt: "How do we balance our hobbies and spiritual sanctuaries through which we breathe, with the inevitable commitments of daily life? A tough balance, but always worth trying...", post2Link: "Read More →",
        srvTitle: "Services I Offer", srv1: "English Language Courses", srv2: "Conversation Sessions", srv3: "English Lessons (Middle School Curriculum)"
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    const body = document.body;
    if (currentLang === 'ar') {
        currentLang = 'en';
        body.classList.add('lang-en');
        body.setAttribute('dir', 'ltr');
        document.getElementById('langBtn').textContent = content.en.btn;
        document.getElementById('hero-name').textContent = content.en.name;
        document.getElementById('hero-title').textContent = content.en.title;
        document.getElementById('hero-desc').textContent = content.en.desc;
        document.getElementById('hero-btn').textContent = content.en.heroBtn;
        document.getElementById('mission-title').textContent = content.en.missionTitle;
        document.getElementById('projects-main-title').textContent = content.en.projMainTitle;
        document.getElementById('p1-desc').textContent = content.en.p1Desc;
        document.getElementById('p2-title').textContent = content.en.p2Title;
        document.getElementById('p2-desc').textContent = content.en.p2Desc;
        document.getElementById('p3-title').textContent = content.en.p3Title;
        document.getElementById('p3-desc').textContent = content.en.p3Desc;
        document.getElementById('p3-status').textContent = content.en.p3Status;
        document.getElementById('p3-link').textContent = content.en.p3Link;
        document.getElementById('riddle-title').textContent = content.en.riddleTitle;
        document.getElementById('riddle-btn').textContent = content.en.riddleBtn;
        document.getElementById('blog-title').textContent = content.en.blogTitle;
        document.getElementById('post1-title').textContent = content.en.post1Title;
        document.getElementById('post1-excerpt').textContent = content.en.post1Excerpt;
        document.getElementById('post1-link').textContent = content.en.post1Link;
        document.getElementById('post2-title').textContent = content.en.post2Title;
        document.getElementById('post2-excerpt').textContent = content.en.post2Excerpt;
        document.getElementById('post2-link').textContent = content.en.post2Link;
        document.getElementById('services-title').textContent = content.en.srvTitle;
        document.getElementById('srv-1').textContent = content.en.srv1;
        document.getElementById('srv-2').textContent = content.en.srv2;
        document.getElementById('srv-3').textContent = content.en.srv3;
        document.getElementById('chat-btn-text').textContent = "Chat with moaid";
    } else {
        currentLang = 'ar';
        body.classList.remove('lang-en');
        body.setAttribute('dir', 'rtl');
        document.getElementById('langBtn').textContent = content.ar.btn;
        document.getElementById('hero-name').textContent = content.ar.name;
        document.getElementById('hero-title').textContent = content.ar.title;
        document.getElementById('hero-desc').textContent = content.ar.desc;
        document.getElementById('hero-btn').textContent = content.ar.heroBtn;
        document.getElementById('mission-title').textContent = content.ar.missionTitle;
        document.getElementById('projects-main-title').textContent = content.ar.projMainTitle;
        document.getElementById('p1-desc').textContent = content.ar.p1Desc;
        document.getElementById('p2-title').textContent = content.ar.p2Title;
        document.getElementById('p2-desc').textContent = content.ar.p2Desc;
        document.getElementById('p3-title').textContent = content.ar.p3Title;
        document.getElementById('p3-desc').textContent = content.ar.p3Desc;
        document.getElementById('p3-status').textContent = content.ar.p3Status;
        document.getElementById('p3-link').textContent = content.ar.p3Link;
        document.getElementById('riddle-title').textContent = content.ar.riddleTitle;
        document.getElementById('riddle-btn').textContent = content.ar.riddleBtn;
        document.getElementById('blog-title').textContent = content.ar.blogTitle;
        document.getElementById('post1-title').textContent = content.ar.post1Title;
        document.getElementById('post1-excerpt').textContent = content.ar.post1Excerpt;
        document.getElementById('post1-link').textContent = content.ar.post1Link;
        document.getElementById('post2-title').textContent = content.ar.post2Title;
        document.getElementById('post2-excerpt').textContent = content.ar.post2Excerpt;
        document.getElementById('post2-link').textContent = content.ar.post2Link;
        document.getElementById('services-title').textContent = content.ar.srvTitle;
        document.getElementById('srv-1').textContent = content.ar.srv1;
        document.getElementById('srv-2').textContent = content.ar.srv2;
        document.getElementById('srv-3').textContent = content.ar.srv3;
        document.getElementById('chat-btn-text').textContent = "تحدث مع moaid";
    }
}

// ========================================================
// --- ذكاء ومنطق وعمل المساعد moaid ---
// ========================================================

let chatState = {
    isStarted: false,
    isRegistering: false,
    regStep: 0,
    studentData: { name: '', grade: '', phone: '', preference: '' },
    historyLogs: []
};

function toggleChatWindow() {
    const chatWin = document.getElementById('chatWindow');
    chatWin.style.display = (chatWin.style.display === 'flex') ? 'none' : 'flex';
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendUserMessage();
    }
}

function appendMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender === 'user' ? 'user-msg' : 'bot-msg'}`;
    bubble.innerText = text;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // حفظ المحادثة في الذاكرة الحالية
    chatState.historyLogs.push(`${sender === 'user' ? 'المتصل' : 'moaid'}: ${text}`);
}

function sendUserMessage() {
    const inputEl = document.getElementById('chatInput');
    const userText = inputEl.value.trim();
    if (!userText) return;

    appendMessage(userText, 'user');
    inputEl.value = '';

    // معالجة الردود بناءً على القواعد الصارمة المطلوبة
    setTimeout(() => {
        processBotResponse(userText);
    }, 600);
}

function processBotResponse(inputText) {
    const lowerText = inputText.toLowerCase();

    // 1. قاعدة بدء المحادثة الإلزامية (لأول رسالة أياً كانت)
    if (!chatState.isStarted) {
        chatState.isStarted = true;
        appendMessage("السلام عليكم ورحمة الله وبركاته. انا moaid المساعد الذكي لـ Mr. Tamer Rabie\nآزاي ممكن اخدمك؟", "bot");
        return;
    }

    // 2. سيناريو إنهاء التواصل
    if (inputText === 'سلام' || lowerText === 'باي' || lowerText === 'bye') {
        appendMessage("رافقتك السلامة", "bot");
        saveChatSessionLocally(); // حفظ المحادثة عند المغادرة
        chatState.isStarted = false; // إعادة ضبط الحالة لبدء جديد لاحقاً
        return;
    }

    // 3. سيناريو تدفق التسجيل والحجز (خطوة بخطوة)
    if (chatState.isRegistering) {
        handleRegistrationFlow(inputText);
        return;
    }

    // بدء طلب الحجز الجديد
    if (inputText.includes('حجز') || inputText.includes('تسجيل') || inputText.includes('اشترك')) {
        chatState.isRegistering = true;
        chatState.regStep = 1;
        appendMessage("الرجاء تزويدنا بالمعلومات التالية:\n1- اسم المتعلم/الطالب:", "bot");
        return;
    }

    // 4. سيناريو الشرح والامتحانات والمناهج (New Hello / Aim High)
    if (inputText.includes('شرح') || inputText.includes('امتحان') || inputText.includes('منهج') || lowerText.includes('hello') || lowerText.includes('aim high')) {
        appendMessage("نعم يا فندم، الكورس يغطي شرح القواعد (Grammar) والكلمات بالكامل، مع حل امتحانات المحافظات السابقة بانتظام والتدريب على سؤال المحادثة والباراجراف لضمان الاستيعاب الكامل.", "bot");
        return;
    }

    // 5. سيناريو متابعة المستوى والدرجات
    if (inputText.includes('متابعة') || inputText.includes('المستوى') || inputText.includes('المستوي') || inputText.includes('درجات')) {
        appendMessage("أكيد حضرتك العنصر الاساسي المعني بالمعرفة هيكون باكثر من وسيلة.\n1. اختاري وسيلة تواصل مناسبة ليك/ اسمي؟ ودى هتكون مرجع لحضرتك.\nالمساعد الذكي moaid هيطلعك علي كل مواعيد الدروس، رسائل تاكيد للحضور، رسائل تاكيد الغياب، الدرجات، المستوي، السلوك..... كل شئ مباشر.", "bot");
        return;
    }

    // 6. تزويد المتصل بوسائل التواصل الاجتماعي إذا طلب روابط السوشيال ميديا
    if (inputText.includes('تواصل') || inputText.includes('رقم') || inputText.includes('روابط') || inputText.includes('سوشيال')) {
        appendMessage("إليك كافة وسائل التواصل الرسمية لـ Mr. Tamer:\n" +
            "✉️ البريد: Mr.tamer2026@outlook.com\n" +
            "📞 الهاتف: 0020113141320\n" +
            "💬 واتساب: 00201131413209\n" +
            "✈️ تليجرام: t.me/Tamerelnoby\n\n" +
            "📱 حسابات التواصل:\n" +
            "• TikTok: tiktok.com/@mr.rabie50\n" +
            "• Facebook: facebook.com/share/196NNPq4QS/\n" +
            "• LinkedIn: linkedin.com/in/tamerrabie62", "bot");
        return;
    }

    // 7. سيناريو السؤال المبهم أو غير المعلوم (الافتراضي الحذر)
    appendMessage("آسف لست مخولا عن الحديث في هذا الأمر", "bot");
}

// دالة التحكم بتدفق بيانات استمارة التسجيل الأربعة
function handleRegistrationFlow(inputText) {
    if (chatState.regStep === 1) {
        chatState.studentData.name = inputText;
        chatState.regStep = 2;
        appendMessage("2- السنة الدراسية:", "bot");
    } else if (chatState.regStep === 2) {
        chatState.studentData.grade = inputText;
        chatState.regStep = 3;
        appendMessage("3- رقم جوال ولي الأمر:", "bot");
    } else if (chatState.regStep === 3) {
        chatState.studentData.phone = inputText;
        chatState.regStep = 4;
        appendMessage("4- وسيلة التواصل المفضلة:", "bot");
    } else if (chatState.regStep === 4) {
        chatState.studentData.preference = inputText;
        
        // الرد النهائي بعد اكتمال الخطوة الرابعة
        appendMessage("سيتم إرسال رسالة برقم تسجيل المتعلم/ الطالب عند الانتهاء من مراجعته", "bot");
        
        // تنفيذ الحفظ الآلي
        saveRegistrationData();
        
        // إعادة تهيئة حالة الحجز
        chatState.isRegistering = false;
        chatState.regStep = 0;
    }
}

// دالة حفظ بيانات حجز الطالب وتحميلها آلياً لمحاكة مجلد moaid
function saveRegistrationData() {
    const dataString = `استمارة تسجيل طالب جديد:\n` +
                       `الاسم: ${chatState.studentData.name}\n` +
                       `السنة الدراسية: ${chatState.studentData.grade}\n` +
                       `جوال ولي الأمر: ${chatState.studentData.phone}\n` +
                       `الوسيلة المفضلة: ${chatState.studentData.preference}\n` +
                       `التاريخ: ${new Date().toLocaleString()}`;

    // 1. الحفظ داخل LocalStorage للمتصفح
    let currentRecords = JSON.parse(localStorage.getItem('moaid_registrations')) || [];
    currentRecords.push(chatState.studentData);
    localStorage.setItem('moaid_registrations', JSON.stringify(currentRecords));

    // 2. تفعيل تحميل الملف التلقائي باسم الطالب لحفظه فوراً في جهازك (مجلد moaid)
    const blob = new Blob([dataString], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `student_${chatState.studentData.name}.txt`;
    link.click();
}

// دالة حفظ سجل المحادثات الكاملة عند الانتهاء
function saveChatSessionLocally() {
    let allChats = JSON.parse(localStorage.getItem('moaid_chat_history')) || [];
    allChats.push({
        timestamp: new Date().toLocaleString(),
        log: chatState.historyLogs
    });
    localStorage.setItem('moaid_chat_history', JSON.stringify(allChats));
    console.log("تمت أرشفة المحادثة بنجاح في سجلات LocalStorage لقسم moaid.");
}
// دالة التحكم بتدفق بيانات استمارة التسجيل الأربعة خطوة بخطوة
function handleRegistrationFlow(inputText) {
    if (chatState.regStep === 1) {
        chatState.studentData.name = inputText;
        chatState.regStep = 2;
        appendMessage("2- السنة الدراسية:", "bot");
    } else if (chatState.regStep === 2) {
        chatState.studentData.grade = inputText;
        chatState.regStep = 3;
        appendMessage("3- رقم جوال ولي الأمر:", "bot");
    } else if (chatState.regStep === 3) {
        chatState.studentData.phone = inputText;
        chatState.regStep = 4;
        appendMessage("4- وسيلة التواصل المفضلة:", "bot");
    } else if (chatState.regStep === 4) {
        // استقبال الخطوة الرابعة والأخيرة
        chatState.studentData.preference = inputText;
        
        // 1. الرد الإلزامي الفوري للبوت moaid
        appendMessage("سيتم إرسال رسالة برقم تسجيل المتعلم/ الطالب عند الانتهاء من مراجعته", "bot");
        
        // 2. تنفيذ التعديل فوراً: إنشاء وتنزيل الملف النصي تلقائياً
        generateAndDownloadTxtFile(chatState.studentData);
        
        // 3. أرشفة المحادثة محلياً وإعادة ضبط عداد الحجز لمتصل جديد
        saveChatSessionLocally();
        chatState.isRegistering = false;
        chatState.regStep = 0;
    }
}

// دالة إنشاء ملف الـ Txt عبر تقنية Blob ومحاكاة التحميل التلقائي
function generateAndDownloadTxtFile(data) {
    // جلب التاريخ والوقت الحالي بتوقيت مصر المحلي وبشكل مقروء
    const currentDateTime = new Date().toLocaleString('ar-EG', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    });
    
    // تنسيق محتوى الملف النصي المنظم الذي سيظهر داخل المجلد
    const fileContent = `==================================================
إستمارة تسجيل طالب جديد - المساعد الذكي moaid
==================================================
تاريخ ووقت التسجيل : ${currentDateTime}

1- اسم المتعلم/الطالب  : ${data.name}
2- السنة الدراسية      : ${data.grade}
3- رقم جوال ولي الأمر  : ${data.phone}
4- وسيلة التواصل المفضلة: ${data.preference}
==================================================
تم الحفظ تلقائياً بواسطة منصة Mr. Tamer Rabie التعليمية`;

    // خطوة إنشاء الـ Blob (Binary Large Object) لتحويل النص لملف حقيقي في الذاكرة المؤقتة
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    
    // خطوة إنشاء رابط تحميل وهمي وغير مرئي في الصفحة
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    
    // تسمية الملف باسم الطالب تلقائياً لسهولة فرزه داخل مجلد moaid (مع استبدال المسافات بشرطات)
    const formattedName = data.name.trim().replace(/\s+/g, '_');
    downloadLink.download = `student_${formattedName}.txt`;
    
    // إدراج الرابط في الصفحة مؤقتاً ومحاكاة "ضغطة زر تحميل" تلقائية
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // تنظيف الصفحة وحذف الرابط الوهمي بعد إتمام التحميل بنجاح
    document.body.removeChild(downloadLink);
}