///////////////////////////////////////////
//  JAVASCRIPT CODING TASK 1-3
//  AUTHOR: MATHIAS MENDOZA
///////////////////////////////////////////

function checkingNumber(number){
    if(number>0){
        console.log("%s is a positive number!", number);
    }else if(number<0){
        console.log("%s is a negative number!", number);
    }else if(number===0){
        console.log('The number is %s', number);
    }else if(typeof(number)!='number'){
        console.log("Invalid Format!");
    }
}

checkingNumber(10);
checkingNumber(-10);
checkingNumber(0);
checkingNumber('d');