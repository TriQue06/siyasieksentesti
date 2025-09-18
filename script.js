let currentQuestionIndex = 0;
let userAnswers = [];
let shuffledQuestions = [];

let solsagScore = 0;
let libotokScore = 0;
let ilericimuhafazakarScore = 0;
let kurmilScore = 0;
let unifedScore = 0;

const questionTextElement = document.getElementById('question-text');
const answerButtonsContainer = document.querySelector('.answer-buttons');
const prevButton = document.getElementById('prev-btn');
const questionCounterElement = document.getElementById('question-counter');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    questionTextElement.innerText = shuffledQuestions[currentQuestionIndex].question;
    questionCounterElement.innerText = `Soru ${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;

    document.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));

    const previousAnswer = userAnswers[currentQuestionIndex];
    if (previousAnswer !== undefined) {
        document.querySelector(`.answer-btn[data-value="${previousAnswer}"]`).classList.add('selected');
    }

    prevButton.style.display = (currentQuestionIndex > 0) ? 'block' : 'none';
}

function selectAnswer(event) {
    const selectedButton = event.target.closest('.answer-btn');
    if (!selectedButton) return;

    const value = parseInt(selectedButton.dataset.value);
    userAnswers[currentQuestionIndex] = value;

    document.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));
    selectedButton.classList.add('selected');

    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        calculateAndRedirect();
    }
}

function calculateAndRedirect() {
    userAnswers.forEach((answer, index) => {
        const question = shuffledQuestions[index];
        const scoreToAdd = answer * question.effect;
        if (question.axis === 'solsag') {
            solsagScore += scoreToAdd;
        } else if (question.axis === 'libotok') {
            libotokScore += scoreToAdd;
        } else if (question.axis === 'ilericimuhafazakar') {
            ilericimuhafazakarScore += scoreToAdd;
        } else if (question.axis === 'kurmil') {
            kurmilScore += scoreToAdd;
        } else if (question.axis === 'unifed') {
            unifedScore += scoreToAdd;
        }
    });

    window.location.href = `results.html?solsag=${solsagScore}&libotok=${libotokScore}&ilericimuhafazakar=${ilericimuhafazakarScore}&kurmil=${kurmilScore}&unifed=${unifedScore}`;
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

answerButtonsContainer.addEventListener('click', selectAnswer);
prevButton.addEventListener('click', prevQuestion);

shuffledQuestions = [...questions];
shuffleArray(shuffledQuestions);
showQuestion();