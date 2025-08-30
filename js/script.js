const questions = [ //Perguntas
    {
    pergunta: "Qual palavra-chave NÃO pode ter seu valor reatribuído após a inicialização?",
    opcoes: [
      { id: 1, text: "var", correct: false },
      { id: 2, text: "let", correct: false },
      { id: 3, text: "const", correct: true },
      { id: 4, text: "variable", correct: false }
    ]
  },
  {
    pergunta: "O que typeof null retorna em JavaScript?",
    opcoes: [
      { id: 1, text: "null", correct: false },
      { id: 2, text: "undefined", correct: false },
      { id: 3, text: "object", correct: true },
      { id: 4, text: "boolean", correct: false }
    ]
  },
  {
    pergunta: "Qual destes métodos é usado para remover o último elemento de um array?",
    opcoes: [
      { id: 1, text: "shift()", correct: false },
      { id: 2, text: "pop()", correct: true },
      { id: 3, text: "slice()", correct: false },
      { id: 4, text: "unshift()", correct: false }
    ]
  },
  {
    pergunta: "Qual é a saída de console.log(2 + '2')?",
    opcoes: [
      { id: 1, text: "4", correct: false },
      { id: 2, text: "22", correct: true },
      { id: 3, text: "NaN", correct: false },
      { id: 4, text: "Erro", correct: false }
    ]
  },
  {
    pergunta: "O que significa “hoisting” em JavaScript?",
    opcoes: [
      { id: 1, text: "Elevar variáveis ao escopo global", correct: false },
      { id: 2, text: "Mover funções e variáveis declaradas para o topo do escopo", correct: true },
      { id: 3, text: "Remover variáveis não utilizadas", correct: false },
      { id: 4, text: "Armazenar dados no navegador", correct: false }
    ]
  },
  {
    pergunta: "Qual é a diferença entre == e === em JavaScript?",
    opcoes: [
      { id: 1, text: "Nenhuma diferença", correct: false },
      { id: 2, text: "== compara apenas valores, === compara valores e tipos", correct: true },
      { id: 3, text: "=== é mais rápido que ==", correct: false },
      { id: 4, text: "== só funciona com números", correct: false }
    ]
  },
  {
    pergunta: "O que o método map() retorna?",
    opcoes: [
      { id: 1, text: "O mesmo array original", correct: false },
      { id: 2, text: "Um novo array modificado", correct: true },
      { id: 3, text: "Um objeto", correct: false },
      { id: 4, text: "O tamanho do array", correct: false }
    ]
  },
  {
    pergunta: "Qual é a forma correta de escrever uma arrow function?",
    opcoes: [
      { id: 1, text: "function => () {}", correct: false },
      { id: 2, text: "() -> {}", correct: false },
      { id: 3, text: "() => {}", correct: true },
      { id: 4, text: "(=>) {}", correct: false }
    ]
  },
  {
    pergunta: "Qual é o valor de Boolean(0) em JavaScript?",
    opcoes: [
      { id: 1, text: "true", correct: false },
      { id: 2, text: "false", correct: true },
      { id: 3, text: "null", correct: false },
      { id: 4, text: "undefined", correct: false }
    ]
  },
  {
    pergunta: "Qual objeto é usado para trabalhar com datas em JavaScript?",
    opcoes: [
      { id: 1, text: "Date", correct: true },
      { id: 2, text: "Time", correct: false },
      { id: 3, text: "Calendar", correct: false },
      { id: 4, text: "Moment", correct: false }
    ]
  }
]

const questionELement = document.getElementById("question")
const answerButtons = document.getElementById("answerButtons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0 
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Próxima"
    showQuestion()
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionELement.innerHTML = questionNo + ". " + currentQuestion.pergunta
}

startQuiz()