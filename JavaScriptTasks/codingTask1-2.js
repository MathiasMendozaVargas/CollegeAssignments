///////////////////////////////////////////
//  JAVASCRIPT CODING TASK 1-2
//  AUTHOR: MATHIAS MENDOZA
///////////////////////////////////////////

function evenOrOdd(number){
    let result;
    if(number%2 === 0){
        console.log("The number %s is %s!", number, result);
    }else if(typeof(number)!="number"){
        console.log('Invalid Format!');
    }else if(number<0){
        console.log('Invalid Format!');
    }else{
        console.log("The number %s is %s!", number, result);
    }
    
}

evenOrOdd(12);
evenOrOdd(5);
evenOrOdd(-2);
evenOrOdd(0);