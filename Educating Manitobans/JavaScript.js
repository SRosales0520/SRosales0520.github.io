const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
      question: "Manitoba drinking and driving laws apply to...",
      answers: {
          a: "Regular cars",
          b: "All on and off road vehicles",
          c: "Agricultural equipment and watercraft",
          d: "All options listed above"
      },
      correctAnswer: "d",
      extraInfo: "Manitoba has tough standards for drinking and driving. That's why you should make the right choice by not drinking and driving"
  },
  {
      question: "What is the best site ever created?",
      answers: {
          a: "SitePoint",
          b: "Simple Steps Code",
          c: "Trick question; they're both the best"
      },
      correctAnswer: "c",
      extraInfo: "this is filler text for question two!"
  },
  {
      question: "Where is Waldo really?",
      answers: {
          a: "Antarctica",
          b: "Exploring the Pacific Ocean",
          c: "Sitting in a tree",
          d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d",
      extraInfo: "this is filler text for question three!"
  }
];

// we'll need a place to store the HTML output
const output = [];

function buildQuiz() { }
//for each question...
myQuestions.forEach(
  (currentQuestion, questionNumber, extraInfo) => {

      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
          );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        <div> <p class="extraInfo" style="display:none;"> ${currentQuestion.extraInfo} </p> </div>`
      );
  }
);

//myQuestions.forEach(
//    function (currentQuestion, questionNumber) {
//        // we'll want to store the list of answer choices
//        const answers = [];

//        // and for each available answer...
//        for (letter in currentQuestion.answers) {

//            // ...add an HTML radio button
//            answers.push(
//              `<label>
//            <input type="radio" name="question${questionNumber}" value="${letter}">
//            ${letter} :
//            ${currentQuestion.answers[letter]}
//          </label>`
//            );
//        }

//        // add this question and its answers to the output
//        output.push(
//          `<div class="question"> ${currentQuestion.question} </div>
//        <div class="answers"> ${answers.join('')} </div>`
//        );
//    });

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question' + questionNumber + ']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;
            
            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
            
        }
            // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
        console.log(numCorrect);
        if (numCorrect == 3)
            {
                let extraInfoElements = document.getElementsByClassName("extraInfo");
                //change css of paragraph to display extra info
                //$("#extraInfo").css("display", "inline");
                console.log(extraInfoElements.length);
                for (i = 0; i < extraInfoElements.length; i++)
                {
                    extraInfoElements.item(i).style.display = "inline-block";
                }
                                                
            }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
