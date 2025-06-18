const allQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS"],
    answer: "CSS"
  },
  {
    question: "What does JS stand for?",
    options: ["JavaScript", "JavaScreen", "JustScript"],
    answer: "JavaScript"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>"],
    answer: "<a>"
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-size", "text-style", "text-size"],
    answer: "font-size"
  },
  {
    question: "How do you start a JavaScript function?",
    options: ["function = myFunc()", "function myFunc()", "start myFunc()"],
    answer: "function myFunc()"
  },
  {
    question: "How do you write a comment in HTML?",
    options: ["// comment", "<!-- comment -->", "/* comment */"],
    answer: "<!-- comment -->"
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "** comment **"],
    answer: "// comment"
  },
  {
    question: "Which symbol is used for an ID selector in CSS?",
    options: ["#", ".", "*"],
    answer: "#"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Netscape", "Microsoft"],
    answer: "Netscape"
  },
  {
    question: "Which HTML element is used for a line break?",
    options: ["<lb>", "<break>", "<br>"],
    answer: "<br>"
  },
  {
    question: "Which input type is used for selecting a file?",
    options: ["text", "file", "image"],
    answer: "file"
  },
  {
    question: "Which tag is used to define a table row?",
    options: ["<tr>", "<th>", "<td>"],
    answer: "<tr>"
  },
  {
    question: "Which HTML tag defines a list item?",
    options: ["<item>", "<li>", "<list>"],
    answer: "<li>"
  },
  {
    question: "How can you make text bold in HTML?",
    options: ["<b>", "<strong>", "Both"],
    answer: "Both"
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var myVar;", "int myVar;", "declare myVar;"],
    answer: "var myVar;"
  },
  {
    question: "What is the correct file extension for JavaScript files?",
    options: [".js", ".java", ".script"],
    answer: ".js"
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>"],
    answer: "<h1>"
  },
  {
    question: "How do you add a background color in CSS?",
    options: ["background-color", "bgcolor", "color-bg"],
    answer: "background-color"
  },
  {
    question: "Which method can be used to select an element by ID in JavaScript?",
    options: ["getElementById()", "querySelectorAll()", "getElements()"],
    answer: "getElementById()"
  },
  {
    question: "What symbol is used for a class selector in CSS?",
    options: [".", "#", "%"],
    answer: "."
  },
  {
    question: "Which attribute specifies an image source in HTML?",
    options: ["src", "href", "link"],
    answer: "src"
  },
  {
    question: "What is the default display value of a <div>?",
    options: ["inline", "block", "flex"],
    answer: "block"
  },
  {
    question: "Which JavaScript method is used to write into the console?",
    options: ["console.log()", "print()", "write()"],
    answer: "console.log()"
  },
  {
    question: "What tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>"],
    answer: "<ul>"
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function myFunc()", "create myFunc()", "def myFunc()"],
    answer: "function myFunc()"
  },
  {
    question: "What CSS unit is relative to the root element?",
    options: ["em", "rem", "%"],
    answer: "rem"
  },
  {
    question: "Which event is triggered when a form is submitted?",
    options: ["click", "submit", "change"],
    answer: "submit"
  },
  {
    question: "Which tag is used to define a form in HTML?",
    options: ["<form>", "<input>", "<label>"],
    answer: "<form>"
  },
  {
    question: "Which language is used to structure content on the web?",
    options: ["CSS", "JavaScript", "HTML"],
    answer: "HTML"
  }
];

let questions = [];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const quizBox = document.querySelector(".quiz-box");
const startBtn = document.getElementById("startBtn");
const questionCountEl = document.getElementById("questionCount");

startBtn.addEventListener("click", () => {
  const selectedCount = parseInt(questionCountEl.value);
  questions = shuffleArray([...allQuestions]).slice(0, selectedCount);
  currentQuestion = 0;
  score = 0;
  quizBox.style.display = "block";
  resultEl.style.display = "none";
  startBtn.disabled = true;
  questionCountEl.disabled = true;
  loadQuestion();
});

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-primary btn-option";
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, option === q.answer);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(button, isCorrect) {
  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === questions[currentQuestion].answer) {
      btn.classList.replace("btn-outline-primary", "btn-success");
    } else {
      btn.classList.replace("btn-outline-primary", "btn-danger");
    }
  });

  if (isCorrect) score++;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    quizBox.style.display = "none";
    resultEl.style.display = "block";
    resultEl.textContent = `🎉 You scored ${score} out of ${questions.length}!`;
    startBtn.disabled = false;
    questionCountEl.disabled = false;
  }
};

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    quizBox.style.display = "none";
    resultEl.style.display = "block";
    resultEl.textContent = `🎉 You scored ${score} out of ${questions.length}!`;

    localStorage.setItem("quizScore", score);

    startBtn.disabled = false;
    questionCountEl.disabled = false;
  }
};
