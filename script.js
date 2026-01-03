
let todoList =[
    {item:"milk",dueDate:"3/1/2026"},
    {item:"apple",dueDate:"5/1/2026"},
    {item:"pineapple",dueDate:"8/1/2026"},
];
displayitems();
function addtodo(){
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date")
    let todoitem = inputElement.value 
    let todoDate = dateElement.value;
    // console.log(todoitem)
    todoList.push({item:todoitem,dueDate:todoDate})
    inputElement.value=''
    dateElement.value=''
    displayitems();


}

function displayitems(){
    let containerElement = document.querySelector(".todo-container");
   let newhtml =''
    for(let i = 0; i<todoList.length; i++){
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;

        newhtml +=`
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1); displayitems();">Delete</button>
        `
        // displaytodoitems.innerText = displaytodoitems.innerText + "\n"+ todoList[i]
    }

    containerElement.innerHTML = newhtml
}