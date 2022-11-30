///////////////////////////////////////////
//  JAVASCRIPT CODING TASK 2-1
//  AUTHOR: MATHIAS MENDOZA
///////////////////////////////////////////

let person1 = {
    name: 'Matt',
    grade: 30
}

let person2 = {
    name: 'Simon',
    grade: 41
}

function compareStudents(p1, p2){
    if(p1.grade >= 51 && p2.grade >= 51){
        console.log('Congrats, both students have passed!');
        console.log("%s's grade: %s", p1.name, p1.grade);
        console.log("%s's grade: %s", p2.name, p2.grade);
    }else if(p1.grade < 51 && p2.grade >= 51){
        console.log("%s passed! But %s failed...", p2.name, p1.name);
        console.log("%s's grade: %s", p1.name, p1.grade);
        console.log("%s's grade: %s", p2.name, p2.grade);
    }else if(p2.grade < 51 && p1.grade >= 51){
        console.log("%s passed! But %s failed...", p1.name, p2.name);
        console.log("%s's grade: %s", p1.name, p1.grade);
        console.log("%s's grade: %s", p2.name, p2.grade);
    }else{
        console.log("Both students have failed!");
        console.log("%s's grade: %s", p1.name, p1.grade);
        console.log("%s's grade: %s", p2.name, p2.grade);
    }
}


compareStudents(person1, person2);