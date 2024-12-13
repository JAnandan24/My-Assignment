//**Function to reverse the string.

let palindrome = `RacecaR`; 
function reverseString() {                                   // Converting the input into characters
    let chars = palindrome.split("");                       //Split string into characters using split("")
    console.log(chars);
    let reversed ="";
for (let index = chars.length-1; index>=0 ; index--) {    //Loop in reverse direction
          reversed = reversed+chars[index];  }            //Concatenate the string
         return reversed}                                 
 reverseString();                                         //Printing the new string
//Function to check the given string is a palindrome

function isPalindrome()
{
    let checkpalin = reverseString();
if(palindrome===checkpalin){                 // Using strict equality 
    console.log(checkpalin + " - The String is palindrome")
   }
else{
     console.log(checkpalin + " - The String is not palindrome")
     }
}

isPalindrome();
