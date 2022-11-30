///////////////////////////////////////////
//  JAVASCRIPT CODING TASK 1-4
//  AUTHOR: MATHIAS MENDOZA
///////////////////////////////////////////

function personAge(age){
    if(age<=17 && age>0){
        console.log('Minor!');
    }else if(age>=18){
        console.log('Adult!');
    }else{
        console.log('Invalid Person!');
    }
}

personAge(21);