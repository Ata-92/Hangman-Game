const randomWord = require("random-words");
let theWord = randomWord({exactly: 1, maxLength: 11, join: ""});

while (theWord.length !== 11) theWord = randomWord({exactly: 1, maxLength: 11, join: ""});
