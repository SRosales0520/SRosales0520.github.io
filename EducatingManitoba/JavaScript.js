const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
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
    extraInfo:
      "The correct answer is D. Manitoba has tough standards for drinking and driving. That's why you should make the right choice by not drinking and driving"
  },
  {
    question: "What is the most common factor of a colision",
    answers: {
      a: "A human condition",
      b: "Drivers action",
      c: "Environmental condition"
    },
    correctAnswer: "b",
    extraInfo:
      "The correct answer is B. The Drivers action is a contributing factor in 51% of collision in 2018"
  },
  {
    question: "How many fatal crashes in manitoba involve impaired driving",
    answers: {
      a: "100% of the crashes",
      b: "Almost half of the crashes",
      c: "25% of all crashes",
      d: "None of the crashes"
    },
    correctAnswer: "b",
    extraInfo:
      "The correct answer is B. Driving impaired reatly increases the risk of the crash being fatal"
  },
  {
    question: "What is the most common mistake that leads to a crash",
    answers: {
      a: "Distracted driving",
      b: "Following too closely",
      c: "Backing up unsafely",
      d: "Turning improperly"
    },
    correctAnswer: "a",
    extraInfo:
      "The correct answer A. Distracted Driving makes up the most of the mistakes followed by following cars too closely and backing up unsafely"
  },
  {
    question: "Which age group has the highest involvment in collisions in 2018",
    answers: {
      a: "16 to 19",
      b: "Both A and D",
      c: "25 to 35",
      d: "20 to 24"
    },
    correctAnswer: "b",
    extraInfo:
      "The correct answer is B. Distracted Driving makes up the most of the mistakes followed by following cars too closely and backing up unsafely"
  },
  {
    question: "What is the road to zero vision?",
    answers: {
      a: "Clearing the snow off the roads",
      b: "decrease the number of road fatalaties to 0",
      c: "Both B and D",
      d: "For manitoba to have the safest roads in canada"
    },
    correctAnswer: "c",
    extraInfo:
      "The correct answer is C. This vision creates safe and informed drivers for the future"
  },
  {
      question: "How much does being on your phone effect your attention while driving",
      answers: {
          a: "It completely effects your attention",
          b: "Only 15% (A little bit) of your brain activity associated with driving",
          c: "It doesn't effect your attention at all",
          d: "37% of your brain activity associated with driving"
      },
      correctAnswer: "d",
      extraInfo:
        "The correct answer is D. 22% of youth deaths in crashes involve distracted driving due to mobile devices"
  }
];

// we'll need a place to store the HTML output
const output = [];

function buildQuiz() {}
//for each question...
myQuestions.forEach((currentQuestion, questionNumber, extraInfo) => {
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
        <div class="answers"> ${answers.join("")} </div>
        <div class="infoContainer"> <p class="extraInfo" style="display:none;"> ${
          currentQuestion.extraInfo
        } </p> </div>`
  );
});

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
quizContainer.innerHTML = output.join("");
function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");
  const extraInfoContainers = quizContainer.querySelectorAll(".extraInfo");

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber, extraInfo) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = "input[name=question" + questionNumber + "]:checked";
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
      extraInfoContainers[questionNumber].style.background = "lightgreen";
      extraInfoContainers[questionNumber].style.borderColor = "green";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = "red";
      extraInfoContainers[questionNumber].style.background = "#FF8080  ";
      extraInfoContainers[questionNumber].style.borderColor = "red";
    }
    console.log(numCorrect);
    if (numCorrect == 0) {
      let extraInfoElements = document.getElementsByClassName("extraInfo");
      //change css of paragraph to display extra info
      //$("#extraInfo").css("display", "inline");
      console.log(extraInfoElements.length);
      for (i = 0; i < extraInfoElements.length; i++) {
        extraInfoElements.item(i).style.display = "inline-block";
      }
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + " out of " + myQuestions.length;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
