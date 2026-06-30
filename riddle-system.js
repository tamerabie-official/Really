// --- نظام لغز الأسبوع ---
// لتغيير اللغز أسبوعياً، فقط عدّل القيمة التالية (بحروف صغيرة):
const correctRiddleAnswer = "echo";

function checkRiddleAnswer() {
    const input = document.getElementById('riddleInput');
    if (!input) return;

    const userAnswer = input.value.trim().toLowerCase();

    if (userAnswer === "") {
        showRiddleFeedback("من فضلك اكتب إجابة أولاً.", false);
        return;
    }

    if (userAnswer === correctRiddleAnswer) {
        showRiddleFeedback("إجابة صحيحة! أحسنت 🎉", true);
        input.disabled = true;
    } else {
        showRiddleFeedback("إجابة خاطئة، حاول مرة أخرى.", false);
    }
}

function showRiddleFeedback(message, isCorrect) {
    let feedbackEl = document.getElementById('riddleFeedback');

    if (!feedbackEl) {
        feedbackEl = document.createElement('p');
        feedbackEl.id = 'riddleFeedback';
        const riddleBox = document.querySelector('.riddle-box');
        if (riddleBox) riddleBox.appendChild(feedbackEl);
    }

    feedbackEl.textContent = message;
    feedbackEl.style.marginTop = '10px';
    feedbackEl.style.fontWeight = 'bold';
    feedbackEl.style.color = isCorrect ? '#2ecc71' : '#e74c3c';
}

// السماح بالإرسال عبر زر Enter داخل خانة اللغز
document.addEventListener('DOMContentLoaded', function () {
    const riddleInput = document.getElementById('riddleInput');
    if (riddleInput) {
        riddleInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                checkRiddleAnswer();
            }
        });
    }
});