///////////////////////////////////////////
//  JAVASCRIPT CODING TASK 2-1
//  AUTHOR: MATHIAS MENDOZA
///////////////////////////////////////////

var students = [
    {name: 'John', grade1: 47, grade2: 46},
    {name: 'Bob', grade1: 23, grade2: 24},
    {name: 'John', grade1: 40, grade2: 35},
    {name: 'John', grade1: 44, grade2: 45},
]
function sumGrades(g1, g2){
    let finalGrade = g1+g2;
    
    // Define the Grade in letters
    if(finalGrade>=91){
        finalGrade = 'A';
    }else if(finalGrade>=81){
        finalGrade = 'B';
    }
    else if(finalGrade>=71){
        finalGrade = 'C';
    }
    else if(finalGrade>=61){
        finalGrade = 'D';
    }
    else if(finalGrade>=51){
        finalGrade = 'E';
    }else{
        finalGrade = 'F'
    }
    return finalGrade;
}

function assignGrades(students){
    for(let student in students){
        let finalGrade = sumGrades(students[student].grade1, students[student].grade2);
        console.log("%s's final grade is: %s", students[student].name, finalGrade);
    }
}

assignGrades(students);