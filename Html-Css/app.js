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

class Word {
  writeLetter(key) {
    if ("abcdefghijklmnopqrstuvwxyz".includes(key.key) && playable) {
      if (theWord.includes(key.key) && letter.every(i => !i.innerHTML.includes(key.key))) {
        letter.map((n, index) => theWord[index] === key.key ? n.innerHTML = key.key : null);
        Word.popup();
      } else if ((theWord.includes(key.key) && letter.some(i => i.innerHTML.includes(key.key))) || spanElem.innerText.includes(key.key)) {
        const wordObject = new Word();
        wordObject.notify();
      } else if (!theWord.includes(key.key)) {
        if (wrongEntry >= 5) {
          spanElem.innerText += key.key;
          hangman[wrongEntry].style.display = "initial";
          Word.popup();
        } else {
          pElem.textContent = "Wrong";
          spanElem.innerText += key.key + ", ";
          hangman[wrongEntry].style.display = "initial";
          ++wrongEntry;
        }
      }
    }
  }
  notify() {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  }
  static popup() {
    if (letter.every((n, index) => n.innerHTML === theWord[index])) {
      finalMessage.textContent = "Congratulations! You won! 😀";
      finalMessageRevealWord.textContent = `...the word was: ${theWord}`;
      popupContainer.style.display = "flex";
      playable = false;
    } else if (wrongEntry === 5) {
      finalMessage.textContent = "Unfortunately you lost. 😕";
      finalMessageRevealWord.textContent = `...the word was: ${theWord}`;
      popupContainer.style.display = "flex";
      playable = false;
    }
  }
}
