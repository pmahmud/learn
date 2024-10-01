// declaration
const s1 : string = 'this is a string';
console.log(s1);

const s3 : string = new String(230).toString();
console.log(s3);

//length
console.log(s3.length);


//fromCharCode(...nums)
console.log(String.fromCharCode(97));

// charAt -> new string
let sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);


// charCodeAt
index = 4;
console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);


//concat -> new string
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

//indexOf() / lastIndexOf()..
let paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);


//padStart(targetLength, padString)
console.log(str1.padStart(2, '0'));
// Expected output: "05"


// padstart
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"


//repeat(count)
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);


//replace(pattern, replacement) - > new string / replaceAll()
paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

// slice(indexStart, indexEnd) -> new string
let str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"


// split(separator, limit) --> string[]
str = 'The quick brown fox jumps over the lazy dog.';

words = str.split(' ');
console.log(words[3]);

// substring(indexStart, indexEnd)
str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"

//toUpperCase() / toLowerCase()
sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


//trim() -> new string / trimStart(), trimEnd()
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
