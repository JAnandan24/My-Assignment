//Learning if-else and switch case
function launchBrowser(){                       
    let browserName = "";
    if(browserName ==='chrome'){              // using if-else statement and strict equality
        console.log("The browser is chrome");}       //Printing the value
    else{
        console.log(`Unknown Browser`);}
}launchBrowser();                           // calling the function

function runTests(){
    let testType="";
    switch (testType) {                        // Using switch statement
        case 'smoke':
            console.log("smoke");
            break;
            case 'sanity':
                console.log("sanity");
            break;
            case 'regression,':
                console.log("regression");
            break;
    default:
            console.log("smoke");
            break;
    }
}
runTests();                                      // calling the function