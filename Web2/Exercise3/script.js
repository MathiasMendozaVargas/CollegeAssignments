const images = [
    "./images/avocado.jpeg",
    "./images/pancake.jpeg",
    "./images/sandwich.jpeg",
    "./images/spaghetti.jpeg"
]

let img = document.querySelector('img')

// Get the button left and right
const left_Arr = document.querySelector('#prev-btn')
const right_Arr = document.querySelector('#next-btn')

// Define default index
let curr_Index = 0

left_Arr.addEventListener('click', () => {
    if(curr_Index === 0){
        curr_Index = (images.length-1)
        img.src = images[curr_Index]
    }
    else{
        curr_Index--
        img.src = images[curr_Index]
    }
})

right_Arr.addEventListener('click', () => {
    if(curr_Index === images.length-1){
        curr_Index = 0
        img.src = images[curr_Index]
    }
    else{
        curr_Index++
        img.src = images[curr_Index]
    }
})


window.addEventListener("DOMContentLoaded", () => {
    img.src = images[curr_Index]
})