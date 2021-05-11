let theWordList = [
  'appropriate', 'opportunity',
  'arrangement', 'temperature',
  'explanation', 'mathematics',
  'grandfather', 'immediately',
  'information', 'grandmother',
  'combination', 'environment',
  'comfortable', 'electricity',
  'development', 'independent',
  'composition'
];
let wordRank = 0;
let theWord = theWordList[wordRank];
wordRank === theWordList.length - 1 ? wordRank === 0 : ++wordRank;

const hangman = document.getElementsByClassName("figure-part");
let wrongEntry = 0;

const wrongLetters = document.getElementById("wrong-letters");
const pElem = document.createElement("p");
const spanElem = document.createElement("span");
wrongLetters.appendChild(pElem);
wrongLetters.appendChild(spanElem);

const word = document.getElementById("word");
// let letter = [];
// for (let i = 0; i < 11; i++) {
//   letter[i] = document.createElement("span");
//   letter[i].className = "letter";
//   word.appendChild(letter);
// }
let letter = Array.from({length: 11}, (_, index) => index = document.createElement("span"));
letter.map(i => i.classList.add("letter"));
letter.map(i => word.appendChild(i));

const popupContainer = document.getElementById("popup-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById("final-message-reveal-word");
const playButton = document.getElementById("play-button");

const notification = document.getElementById("notification-container");

let playable = true;

