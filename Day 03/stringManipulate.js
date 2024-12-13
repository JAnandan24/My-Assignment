// String Manipulate
let s="Hello World";                           //Declaring the variable and assigning
let word= s.split(" ");                       //Splitting the string into an array of words
let lastWord=word[word.length-1];             //Finding the last word in the array.
let length=[lastWord.length];                  //Calculating the length of this word.
console.log(word);                             // Printing
console.log(`The last word is ${lastWord} with length ${length}`);


let s2="  Fly me to the moon  ";                   //Declaring the variable and assigning
let textTrim=s2.trim();                           //Trimming the String
let textsplit=textTrim.split(" ");                //Splitting the string into words
let lasttext=textsplit[textsplit.length-1];       //Identify the Last Word
let textlenght=[lasttext.length]                   //Calculating the length of the last word.
console.log(`Trimming the String - `+ textTrim);    //Printing
console.log(textsplit);
console.log(`The last word is ${lasttext} with length ${textlenght}`);



