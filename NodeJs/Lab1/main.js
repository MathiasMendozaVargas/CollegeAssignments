const mySum = require("./mySum.js");

// First Task ///////////////////////////
const myArr = [1, 2, 3, 4, 5];
const result = mySum(...myArr);
console.log(result);

/////////////////////////////////////////


// Second Task //////////////////////////
const mySecondArr = myArr.map((num) => num * 2);

/////////////////////////////////////////


// Third Task ///////////////////////////
const average = mySecondArr.reduce((acc, curr) => acc + curr, 0) / mySecondArr.length;

/////////////////////////////////////////


// Fourth Task //////////////////////////\
mySecondArr.filter((num) => {
  if (num > average) {
    console.log(num);
    return true;
  }
  else{
    return false;
  }
});

/////////////////////////////////////////


// Fifth Task ///////////////////////////
setTimeout(() => {
  console.log("GoodBye");
}, 3000);

/////////////////////////////////////////


// Sixth Task ///////////////////////////
const Employee = {
  name: "Mathias",
  email: "mathiasmendoza@gmail.com",
  startDate: "2023-11-05",
  department: "AI",
};

const { name, email } = Employee;
const Person = { name, email };
console.log(Person);

/////////////////////////////////////////