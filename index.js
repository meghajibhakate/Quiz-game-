

const quizDB = [
   {
      question: "https://media.istockphoto.com/id/172411313/photo/juicy-orange-refreshment.jpg?s=612x612&w=0&k=20&c=jhM16H0e3neuiyygel3DfSinTPxfbPrMcblMZUFUUjs=",
      a: "Mango",
      b: "Orange",
      c: "Apple",
      d: "Banana",
      correct: "c"

   },
   {
      question: "https://cdn2.sharechat.com/loinwallpaper_7372653_1598360694835_cmprsd_40.jpg",
      a: "tiger",
      b: "bear",
      c: "lion",
      d: "deer",
      correct: "c"

   }
]

var mainDiv=document.getElementById('main-div');

let inputField = document.getElementById("myInput");


function inputHide() {

   document.getElementById("container").style.display = 'none'

   mainDiv.innerHTML=`


   <div id="main-div"  >
   <div class="container">
   <h3 id="welcome-name">${"Welcome "+inputField.value}</h3>
   <div id="box2">
       <p id="quiz"></p>
       <h4 id="question"></h4>
       <img src="${quizDB[1].question}" alt="">
       

   </div>
   <ul id="AnsOptions">
       <li>
           <input type="radio" name="answer" id="ans1" class="answer">
           <label for="ans1" id="option1">${quizDB[1].a}</label>
       </li>

       <li>
           <input type="radio" name="answer" id="ans1" class="answer">
           <label for="ans1" id="option2">${quizDB[1].b}</label>
       </li>

       <li>
           <input type="radio" name="answer" id="ans1" class="answer">
           <label for="ans1" id="option3">${quizDB[1].c}</label>
       </li>

       <li>
           <input type="radio" name="answer" id="ans1" class="answer">
           <label for="ans1" id="option4">${quizDB[1].d}</label>
       </li>

   </ul>



</div>

</div>
   `
}




















