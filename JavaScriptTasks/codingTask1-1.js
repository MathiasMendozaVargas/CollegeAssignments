///////////////////////////////////////////
//  JAVASCRIPT CODING TASK 1-1
//  AUTHOR: MATHIAS MENDOZA
///////////////////////////////////////////

let grade = prompt("Welcome to the grades identifier!\nEnter your final grade");

function identyGrade(grade){
    if(grade>=100){
        prompt("Perfect Score!");
    }else if(grade>70){
        prompt("You passed!");
    }else if(grade===0){
        prompt("Invalid grade!");
    }else if(grade<70){
        prompt("You failed!");
    }else if(typeof(grade) != 'number'){
        prompt("Invalid grade!");
    }
}

identyGrade(name, grade);