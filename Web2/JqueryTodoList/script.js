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
    const list = $('.list')

    // Input Box: AddTask Icon press
    $('#addTask').click(function(){
        if(inputBox.val() !== ''){
            let new_li = document.createElement('li')

                let textSpan = document.createElement('span')
                textSpan.classList.add('textSpan')


                let iconSpan = document.createElement('span')
                iconSpan.classList.add('iconSpan')
                

                // 1st Icon
                let icon_1 = document.createElement('i')
                icon_1.setAttribute("id", 'checkBtn')
                icon_1.classList.add('fa-solid fa-check')
                icon_1.classList.add('fa-check')
                icon_1.classList.add('todoIcons')
                icon_1.classList.add('firstIcon')

                // 2nd Icon
                let icon_2 = document.createElement('i')
                icon_2.setAttribute("id", 'deleteBtn')
                icon_2.classList.add('fa-solid')
                icon_2.classList.add('fa-trash')
                icon_2.classList.add('todoIcons')
                

                let new_p = document.createElement('p')
                new_p.innerText = inputBox.val()
                textSpan.appendChild(new_p)

                iconSpan.appendChild(icon_1)
                iconSpan.appendChild(icon_2)
                new_li.appendChild(textSpan)
                new_li.appendChild(iconSpan)
                $(new_li).hide().appendTo(list).fadeIn(700)
                inputBox.val('')
        }
        else{
            alert('The textbox cannot be empty 😖')
        }
    })

    // Input Box: Key press
    $('#inputBox').on('keypress', function(e){
        if(e.which == 13){
            if(inputBox.val() !== ''){
                let new_li = document.createElement('li')

                let textSpan = document.createElement('span')
                textSpan.classList.add('textSpan')


                let iconSpan = document.createElement('span')
                iconSpan.classList.add('iconSpan')
                

                // 1st Icon
                let icon_1 = document.createElement('i')
                icon_1.setAttribute("id", 'checkBtn')
                icon_1.classList.add('fa-solid')
                icon_1.classList.add('fa-check')
                icon_1.classList.add('todoIcons')
                icon_1.classList.add('firstIcon')

                // 2nd Icon
                let icon_2 = document.createElement('i')
                icon_2.setAttribute("id", 'deleteBtn')
                icon_2.classList.add('fa-solid')
                icon_2.classList.add('fa-trash')
                icon_2.classList.add('todoIcons')
                

                let new_p = document.createElement('p')
                new_p.innerText = inputBox.val()
                textSpan.appendChild(new_p)

                iconSpan.appendChild(icon_1)
                iconSpan.appendChild(icon_2)
                new_li.appendChild(textSpan)
                new_li.appendChild(iconSpan)
                $(new_li).hide().appendTo(list).fadeIn(700)
                inputBox.val('')
            }
            else{
                alert('The textbox cannot be empty 😖')
            }
        }
    })

    // Icons Event listeners / Check and Delete
    $(document).on('click', '#checkBtn', function() {
        const span_target = $(this).parent()
        const li_target = span_target.parent()
        li_target.fadeOut('2000', function(){
            $('.completed').append(li_target)
            li_target.fadeIn('2000')
        })
    })

    $(document).on('click', '#deleteBtn', function() {
        const span_target = $(this).parent()
        const li_target = span_target.parent()
        li_target.fadeOut('2000', function(){
            this.remove()
        })
    })
    
});