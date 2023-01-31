/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

$(document).ready(function () {

    // Get the input Element
    const inputBox = $('#inputBox')

    // Get the list
    const list = $('#list')



    // event listener for add button
    $('#addTask').click(function(){
        if(inputBox.val() !== ''){
            let new_li = document.createElement('li')
            new_li.textContent = inputBox.val()

            list.append(new_li)
            inputBox.val('')
        }
        else{
            alert('The textbox cannot be empty 😖')
        }
    })

    // event listener for enter key press inside of inputBox
    $('#inputBox').on('keypress', function(e){
        if(e.which == 13){
            if(inputBox.val() !== ''){
                let new_li = document.createElement('li')
                new_li.textContent = inputBox.val()

                list.append(new_li)
                inputBox.val('')
            }
            else{
                alert('The textbox cannot be empty 😖')
            }
        }
    })
});