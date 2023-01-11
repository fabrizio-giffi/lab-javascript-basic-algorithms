// Iteration 1: Names and Input

const hacker1 = 'Fabrizio';
console.log (`The driver's name is ${hacker1}.`);

const hacker2 = 'Nomin';
console.log (`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else {
    console.log('You managed to break my code, congratulations.');
}

// Iteration 3: Loops

let capitalSpaced = "";
let reverseName = "";

for (let ind = 0; ind < hacker1.length; ind++) {
    capitalSpaced += hacker1[ind].toUpperCase() + " ";
}

for (let i = hacker1.length-1; i >= 0; i--) {
    reverseName += hacker1[i];
}

console.log(capitalSpaced);
console.log(reverseName);

const nameList = [hacker1, hacker2];
const order = nameList.sort();

if (order[0] === hacker1) {
    console.log(`The driver's name goes first.`);
}
else if (order[0] === hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
}
else if (order[0] === order[1]) {
    console.log(`What?! You both have the same name?`);
}

// BONUS TIME!

// Bonus 1 - Lorem Ipsum

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat leo eu mi semper semper. Duis interdum dolor sit amet quam congue, nec feugiat mi accumsan. Nulla facilisi. In nunc odio, gravida eget leo ac, varius posuere ante. Aenean eleifend turpis urna, vitae vehicula ipsum rutrum id. Etiam porta risus in felis mollis cursus pretium vel ipsum. Quisque elementum commodo mauris a tincidunt. In hac habitasse platea dictumst. Vestibulum id dui quis nunc bibendum consequat. Proin consectetur, tortor dictum ullamcorper laoreet, lectus dolor gravida massa, ac ornare mi libero et eros. Suspendisse eleifend sagittis magna, ac condimentum magna aliquet quis. Mauris et metus in lectus congue blandit. In interdum nisi in malesuada pretium.
Phasellus at semper quam. Sed sodales, leo quis fringilla euismod, sapien nisl porttitor arcu, sit amet pharetra orci est ac massa. Proin fermentum velit ut nunc aliquet efficitur. Nulla tempor iaculis metus, eu varius felis bibendum at. Donec sodales tincidunt velit, in tristique elit molestie vitae. Ut viverra sapien luctus diam ullamcorper, ut pellentesque ante malesuada. Pellentesque id sapien velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id dignissim eros, in interdum libero. Aenean suscipit blandit tellus, id aliquet arcu cursus tincidunt. Donec tempus faucibus sapien quis luctus. Mauris aliquet eros nisi, ut tincidunt ipsum convallis ac.
Duis tincidunt justo nunc, sit amet malesuada urna euismod sit amet. Curabitur interdum libero odio, sed sodales justo rutrum ac. Proin ut urna sed orci sodales auctor. Sed blandit felis vitae mauris tristique, vitae suscipit elit congue. Suspendisse vitae rutrum tortor, eget pellentesque mauris. Morbi facilisis dui sit amet posuere feugiat. Aenean non tempus nisl. Nam vel venenatis nibh, quis ultricies dolor. Aliquam sed purus efficitur erat maximus euismod quis sed felis. Suspendisse pulvinar lorem tortor, ut vulputate eros suscipit id. Donec vitae venenatis nisl.`

const wordList = longText.split(" ");
const wordCounter = wordList.length;

console.log(`My longText string contains ${wordCounter} words!`);

let etCounter = 0;

for (let ind = 0; ind < wordList.length; ind++) {
    if (wordList[ind] === "et") {
        etCounter += 1;
    }
}

console.log(`My longText string contains the word "et" ${etCounter} times!`)


// Bonus 2 - Palindrome


function palindromeCheck(phraseToCheck) {

    const alphaChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const lowerPhrase = phraseToCheck.toLowerCase()
    let wordContainer = []

    for (let ind=0; ind < lowerPhrase.length ; ind++) {
        if (alphaChars.includes(lowerPhrase[ind])) {
            wordContainer.push((lowerPhrase[ind]))
        }
    }

    const wordStripped = wordContainer.join("");
    const wordStrippedReverse = (wordContainer.reverse()).join("");

    if (wordStripped === wordStrippedReverse) {
        return console.log(`The phrase "${phraseToCheck}" is a palindrome.`)
    }
    else {
        return console.log(`The phrase "${phraseToCheck}" is not a palindrome.`)
    }
}

const phraseToCheck = `No 'x' in Nixon`;

palindromeCheck(phraseToCheck)