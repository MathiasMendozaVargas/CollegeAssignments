//Adding a note

const addTaskButton = document.querySelector("#add-btn");


addTaskButton.addEventListener("click", (event) => {

    event.preventDefault()

    const list = document.querySelector("#list");
    const add_input = document.querySelector("#add-input");

    let li_item = document.createElement("li");
    let first_p = document.createElement("p");
    first_p.textContent = add_input.value;

    let second_p = document.createElement("p");

    let first_icon = document.createElement('i')
    first_icon.classList.add("fa");
    first_icon.classList.add("fa-pencil-square-o");

    let second_icon = document.createElement('i');
    second_icon.classList.add("fa");
    second_icon.classList.add("fa-times");

    second_p.appendChild(first_icon);
    second_p.appendChild(second_icon);

    let input_item = document.createElement('input');
    input_item.classList.add('edit-note');

    li_item.appendChild(first_p);
    li_item.appendChild(second_p);
    li_item.appendChild(input_item);

    console.log(li_item);

    
    list.appendChild(li_item);

    add_input.value = " ";
});

