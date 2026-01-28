const marathiSentences = [
  "मला दररोज सकाळी व्यायाम करायला आवडते.",
  "आज हवामान खूप छान आहे.",
  "माझा आवडता रंग निळा आहे.",
  "तुम्ही काल कुठे गेलात?",
  "मला नवीन भाषा शिकायला खूप आवडते.",
  "मी दुपारी तीन वाजता शाळेत पोहोचणार आहे.",
  "माझ्या आईला चहा बनवायला खूप आवडते.",
  "तुमचा मित्र आज सकाळी खूप आनंदी दिसत होता.",
  "मी उद्या बाजारात जाऊन काही खरेदी करणार आहे.",
  "पुस्तक वाचल्यावर मला खूप समाधान वाटले."
];
const englishSentences = [
  "I like to exercise every morning",
  "The weather is very nice today",
  "My favorite color is blue",
  "Where did you go yesterday?",
  "I really like learning new languages",
  "I will reach school at three in the afternoon",
  "My mother really likes making tea",
  "Your friend looked very happy this morning",
  "I will go to the market tomorrow and buy some things",
  "I felt very satisfied after reading the book"
];


const sent = document.querySelector(".sen");
const textarea = document.getElementById("answer");
const correct = document.querySelector("#correct");
const incorrect = document.querySelector("#incorrect");
const emoji = document.querySelector(".emoji");
const correctsound = new Audio("audio/correct.mp3");
const incorrectsound = new Audio("audio/incorrect.wav");
const correctans = document.querySelector(".a");
const checkBtn = document.getElementById("checkBtn");

let i = 0;
let correctscore = 0;
let incorrectscore = 0;

function nextSentence() {
  let userAnswer = textarea.value.trim();
  if (userAnswer.toLowerCase() === englishSentences[i].toLowerCase()) {
    // alert("correct");
    correctscore++;
    correct.innerText = correctscore;
    emoji.innerHTML = "<img src='img/correct.png' height='191px' width='254px'>";
    correctsound.currentTime =0;
    correctsound.play();

  } else {
    // alert("incorrect");
    incorrectscore++;
    incorrect.innerText = incorrectscore;
    correctans.innerText = englishSentences[i];
    emoji.innerHTML = "<img src='img/incorrect.png' height='220px' width='254px'>";
    incorrectsound.currentTime = 0;
    incorrectsound.play();
  }
  i++;

  if (i < marathiSentences.length) {
    sent.innerText = marathiSentences[i];
    textarea.value = "";
  } else {
    checkBtn.disabled = true;
    checkBtn.innerText = "Game Over";
    textarea.disabled = true;
    feedback.innerText = "🎉 You finished the game!";
  }
}
