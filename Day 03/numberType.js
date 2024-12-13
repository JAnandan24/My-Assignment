// Categorize the number to find postive,negative or neutral.
let number = 1                                  // Declaring and initialize the variable.
function numberType(){
    let result= number;
    if(number<0){                                // conditonal statement
        console.log(result+ ` - The Number is Negative`);}
    else{if(number>0){
        console.log(result+ ` - The Number is Positive`);}
    else if(number==0){
        console.log(result+ ` - The Number is Neutral`);}
    else{}
    return result;
}
}
numberType(); // calling the function