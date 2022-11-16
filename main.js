/*
In this assignment, we'll be creating a to do list... from scratch!

Feel free to take creative liberties with the design and user interface of your application.

Users have the ability to add new to-do items
Users have the ability to view to-do items
Allow users to clear all to-do items
form
text input from user
SUBMIT BUTTON
add tolist
list for items
document .createelements 
append child to add to list
querrie ALL

HTML LIST
FORM BUTTONS INPUT

JS
add to list
remove list
completed items
*/
let toDoForm = document.querySelector("#toDoForm");

let textInput = document.querySelector("#textInput");

let toDoList = document.querySelector("#toDoList");

let toDoListItems = document.querySelectorAll('#toDoList li');

let removeAll = document.querySelector("#remove");

toDoForm.addEventListener('submit', function(event){
    event.preventDefault();
//add to list
    let newItem = document.createElement('li');
// list iten txt imput
    newItem.innerText = textInput.value;

    //console.log(newItem);

   toDoList.appendChild(newItem);
   textInput.value = "";
   toDoListItems = document.querySelectorAll('#toDoList li');


})

removeAll.addEventListener('click', function(){
    //toDoListItems = document.querySelectorAll('#toDoList li');
    for(let i = 0; i < toDoListItems.length; i++){
        toDoListItems[i].remove();
    }
    toDoListItems = document.querySelectorAll('#toDoList li');
})




