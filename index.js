
function inputHide() {

   document.getElementById("container").style.display = 'none'
   document.getElementById("main-div").style.display = "flex"
   let inputField = document.getElementById("myInput");
   var welcomeName = document.getElementById("welcome-name")
   welcomeName.innerHTML ="Welcome"+" "+ inputField.value
   console.log(welcomeName)
}




const quiz = [
   {
      question: "@@@@@@@@@@@@@@@@@@what is the name?",
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      ans: "A"

   },
   {
      question: "numbers?",
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      ans: "C"

   }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const loadQuestions = () => {
   console.log(quiz[0])
   question.innerHTML = quiz[0].question
}
loadQuestions()