//Grade Calculation Using Switch statements

function gradeCalculation(studentsScore){     //student's score as a parameter

     switch (true){                           //Using `switch` statement inside the function
    
        case studentsScore>=90:
             console.log("The Student grade is A ");
            break;
        case studentsScore>=70:
            console.log("The Student grade is B");
            break;
        case studentsScore>=50:
            console.log("The Student grade is C");
            break;
        case studentsScore>=35:
            console.log("The Student grade is D");
            break;
        default:
            console.log("The Student grade is E");
            break;
    }
    
}
    studentsScore = 33;
     gradeCalculation(studentsScore); //Call the function
    
  