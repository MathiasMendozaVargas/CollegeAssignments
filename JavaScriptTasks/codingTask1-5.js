///////////////////////////////////////////
//  JAVASCRIPT CODING TASK 1-5
//  AUTHOR: MATHIAS MENDOZA
///////////////////////////////////////////

function concatenateStrings(string1, string2){
    if(typeof(string1) && typeof(string2) === 'string'){
        console.log(string1+string2);
    }else{
        console.log('Invalid String!');
    }
}


concatenateStrings('Hello', 'World');
concatenateStrings('Hello', 1);