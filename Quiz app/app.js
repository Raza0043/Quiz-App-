var quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "What is the color of the sky?",
        options: ["Green", "Blue", "Red", "Yellow"],
        correct: 1
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        correct: 1
    },
    {
        question: "What is the square root of 16?",
        options: ["2", "3", "4", "5"],
        correct: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Hemingway", "Tolkien", "Dickens"],
        correct: 0
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correct: 1
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "400,000 km/s"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

var  questionElement = document.getElementById("question");
var  answerButtons = document.querySelectorAll(".answer-btn");
var  nextButton = document.getElementById("next-btn");
var  resultContainer = document.getElementById("result");
var  scoreElement = document.getElementById("score");

function loadQuestion() {
    var  currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.dataset.correct = index === currentQuestion.correct;
    });
}

answerButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.dataset.correct === "true") {
            score++;
        }
        nextButton.disabled = false;
    });
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = score;
}

loadQuestion();
nextButton.disabled = true;
