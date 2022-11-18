
function inputHide() {

   document.getElementById("container").style.display = 'none'
   document.getElementById("main-div").style.display = "flex"
   let inputField = document.getElementById("myInput");
   var welcomeName = document.getElementById("welcome-name")
   welcomeName.innerHTML = "Welcome" + " " + inputField.value
   console.log(welcomeName)
}




const quizDB = [
   {
      question: "What is capital of India?",
      a: "gandhinagar",
      b: "Surat",
      c: "Delhi",
      d: "mumbai",
      correct: "c"

   },
   {
      question: "What is the capital of Gujarat",
      a: "surat",
      b: "vadodara",
      c: "gandhinagar",
      d: "rajkot",
      correct: "c"

   }
]


const Quiz = document.getElementById('quiz')
const answerElems = document.querySelectorAll('.answer')

const questionel = document.getElementById('question')

const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')


const submitBtn = document.getElementById('sumbit')

let score = 0;
let currentQuiz = 0;

loadQuestions()
function loadQuestions() {
   notSelectedAns()

   const questionList = quizDB[currentQuiz]
   //    // console.log(quiz[queCount])
   questionel.innerText = questionList.question

   //    // for the option
   option1.innerHTML = questionList.a
   option2.innerHTML = questionList.b
   option3.innerHTML = questionList.c
   option4.innerHTML = questionList.d
}



function notSelectedAns() {
   answerElems.forEach(answerElem => answerElem.checked = false)
}

function selectedAns() {
   let answer
   answerElems.forEach(answerElem => {
      if(answerElem.checked){
         answer = answerElem.id
      }
   })
   console.log(answer)
   return answer
}


submitBtn.addEventListener('click', () => {
   const answer = selectedAns();
   if (answer) {
      if (answer === quizDB[currentQuiz].correct) {
         score++
      }
      currentQuiz++

      if (currentQuiz < quizDB.length) {
         loadQuestions()
      }
      else {
         Quiz.innerHTML = `
         <h2>you answerd ${score}/${quizDB.length}question correct</h2>
         <button onclick="location.reload()">Reload</button>
         `
      }
   }
})