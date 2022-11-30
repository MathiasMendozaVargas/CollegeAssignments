////////////////////////
// LTF TO LCT
// By Mathias Mendoza
////////////////////////

console.log("Welcome to the Feet to Centimeters converter!");

let feet = prompt("Please enter a feet measure");

function converter(feet){
    let result = feet*30;
    return result;
}

let result = converter(feet);

console.log("%s is %s", feet, result);
