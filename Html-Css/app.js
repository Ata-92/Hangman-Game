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
