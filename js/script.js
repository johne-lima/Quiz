const questions = [ //Perguntas
  {
    pergunta: "Qual palavra-chave NÃO pode ter seu valor reatribuído após a inicialização?",
    answers: [
      { id: 1, text: "var", correct: false },
      { id: 2, text: "let", correct: false },
      { id: 3, text: "const", correct: true },
      { id: 4, text: "variable", correct: false }
    ]
  },
  {
    pergunta: "O que typeof null retorna em JavaScript?",
    answers: [
      { id: 1, text: "null", correct: false },
      { id: 2, text: "undefined", correct: false },
      { id: 3, text: "object", correct: true },
      { id: 4, text: "boolean", correct: false }
    ]
  },
  {
    pergunta: "Qual destes métodos é usado para remover o último elemento de um array?",
    answers: [
      { id: 1, text: "shift()", correct: false },
      { id: 2, text: "pop()", correct: true },
      { id: 3, text: "slice()", correct: false },
      { id: 4, text: "unshift()", correct: false }
    ]
  },
  {
    pergunta: "Qual é a saída de console.log(2 + '2')?",
    answers: [
      { id: 1, text: "4", correct: false },
      { id: 2, text: "22", correct: true },
      { id: 3, text: "NaN", correct: false },
      { id: 4, text: "Erro", correct: false }
    ]
  },
  {
    pergunta: "O que significa “hoisting” em JavaScript?",
    answers: [
      { id: 1, text: "Elevar variáveis ao escopo global", correct: false },
      { id: 2, text: "Mover funções e variáveis declaradas para o topo do escopo", correct: true },
      { id: 3, text: "Remover variáveis não utilizadas", correct: false },
      { id: 4, text: "Armazenar dados no navegador", correct: false }
    ]
  },
  {
    pergunta: "Qual é a diferença entre == e === em JavaScript?",
    answers: [
      { id: 1, text: "Nenhuma diferença", correct: false },
      { id: 2, text: "== compara apenas valores, === compara valores e tipos", correct: true },
      { id: 3, text: "=== é mais rápido que ==", correct: false },
      { id: 4, text: "== só funciona com números", correct: false }
    ]
  },
  {
    pergunta: "O que o método map() retorna?",
    answers: [
      { id: 1, text: "O mesmo array original", correct: false },
      { id: 2, text: "Um novo array modificado", correct: true },
      { id: 3, text: "Um objeto", correct: false },
      { id: 4, text: "O tamanho do array", correct: false }
    ]
  },
  {
    pergunta: "Qual é a forma correta de escrever uma arrow function?",
    answers: [
      { id: 1, text: "function => () {}", correct: false },
      { id: 2, text: "() -> {}", correct: false },
      { id: 3, text: "() => {}", correct: true },
      { id: 4, text: "(=>) {}", correct: false }
    ]
  },
  {
    pergunta: "Qual é o valor de Boolean(0) em JavaScript?",
    answers: [
      { id: 1, text: "true", correct: false },
      { id: 2, text: "false", correct: true },
      { id: 3, text: "null", correct: false },
      { id: 4, text: "undefined", correct: false }
    ]
  },
  {
    pergunta: "Qual objeto é usado para trabalhar com datas em JavaScript?",
    answers: [
      { id: 1, text: "Date", correct: true },
      { id: 2, text: "Time", correct: false },
      { id: 3, text: "Calendar", correct: false },
      { id: 4, text: "Moment", correct: false }
    ]
  },
  {
    pergunta: "Qual destes tipos de dado NÃO existe em JavaScript?",
    answers: [
      { id: 1, text: "String", correct: false },
      { id: 2, text: "Number", correct: false },
      { id: 3, text: "Character", correct: true },
      { id: 4, text: "Boolean", correct: false }
    ]
  },
  {
    pergunta: "Qual palavra-chave define uma função em JavaScript?",
    answers: [
      { id: 1, text: "function", correct: true },
      { id: 2, text: "def", correct: false },
      { id: 3, text: "fun", correct: false },
      { id: 4, text: "method", correct: false }
    ]
  },
  {
    pergunta: "Qual destas estruturas de repetição NÃO existe em JavaScript?",
    answers: [
      { id: 1, text: "for", correct: false },
      { id: 2, text: "foreach", correct: false },
      { id: 3, text: "repeat-until", correct: true },
      { id: 4, text: "while", correct: false }
    ]
  },
  {
    pergunta: "Qual é o valor padrão de uma variável declarada com 'let' mas não inicializada?",
    answers: [
      { id: 1, text: "null", correct: false },
      { id: 2, text: "undefined", correct: true },
      { id: 3, text: "0", correct: false },
      { id: 4, text: "false", correct: false }
    ]
  },
  {
    pergunta: "Como se escreve um comentário de múltiplas linhas em JavaScript?",
    answers: [
      { id: 1, text: "// comentário", correct: false },
      { id: 2, text: "/* comentário */", correct: true },
      { id: 3, text: "&lt;!-- comentário --&gt;", correct: false },
      { id: 4, text: "# comentário", correct: false }
    ]
  },
  {
    pergunta: "O que o método 'filter()' faz em um array?",
    answers: [
      { id: 1, text: "Filtra elementos e retorna um novo array", correct: true },
      { id: 2, text: "Modifica o array original removendo elementos", correct: false },
      { id: 3, text: "Ordena o array", correct: false },
      { id: 4, text: "Retorna apenas o primeiro elemento", correct: false }
    ]
  },
  {
    pergunta: "Qual destas opções é um exemplo válido de objeto em JavaScript?",
    answers: [
      { id: 1, text: "{nome: 'Ana', idade: 25}", correct: true },
      { id: 2, text: "[nome: 'Ana', idade: 25]", correct: false },
      { id: 3, text: "(nome: 'Ana', idade: 25)", correct: false },
      { id: 4, text: `&lt;nome: 'Ana', idade: 25&gt;`, correct: false }
    ]
  },
  {
    pergunta: "Qual destas funções é usada para converter JSON em objeto JavaScript?",
    answers: [
      { id: 1, text: "JSON.parse()", correct: true },
      { id: 2, text: "JSON.stringify()", correct: false },
      { id: 3, text: "JSON.convert()", correct: false },
      { id: 4, text: "JSON.toObject()", correct: false }
    ]
  },
  {
    pergunta: "Qual operador lógico é usado para 'OU' em JavaScript?",
    answers: [
      { id: 1, text: "&&", correct: false },
      { id: 2, text: "||", correct: true },
      { id: 3, text: "!", correct: false },
      { id: 4, text: "??", correct: false }
    ]
  },
  {
    pergunta: "Qual destas funções retorna o maior número de uma lista?",
    answers: [
      { id: 1, text: "Math.round()", correct: false },
      { id: 2, text: "Math.random()", correct: false },
      { id: 3, text: "Math.max()", correct: true },
      { id: 4, text: "Math.high()", correct: false }
    ]
  }
]

const questionELement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
  currentQuestionIndex = 0
  score = 0
  nextButton.innerHTML = "Próxima"
  showQuestion()
}

function resetState() {
  nextButton.style.display = "none"
  
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function showQuestion() {
  resetState()

  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1
  questionELement.innerHTML = questionNo + ". " + currentQuestion.pergunta

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button")
    button.innerHTML = answer.text
    button.dataset.id = answer.id
    button.classList.add("btn")
    button.addEventListener("click", selectAnswer)
    answerButtons.appendChild(button)
  })
}

function selectAnswer(e) {
  answers = questions[currentQuestionIndex].answers
  const correctAnswer = answers.filter(answer => answer.correct == true)[0]

  const selectedBtn = e.target
  const isCorrect = selectedBtn.dataset.id == correctAnswer.id
  if(isCorrect) {
    selectedBtn.classList.add("correct")
    score++
  } else {
    selectedBtn.classList.add("incorrect")
  }
  
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true
  })
  
  nextButton.style.display = "block"
}

function showScore() {
 resetState()
 questionELement.innerHTML = `Você acertou ${score} de ${questions.length}!`
 questionELement.style.textAlign = "center"
 nextButton.innerHTML = "Jogar Novamente"
 nextButton.style.display = "block"
}

function handleNextButton(){
  currentQuestionIndex++
  if (currentQuestionIndex < questions.length) {
    showQuestion()
  } else {
    showScore()
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton()
  } else {
    startQuiz()
  }
})

startQuiz()