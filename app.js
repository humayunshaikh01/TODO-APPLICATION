
var input = document.getElementById("todoInput")
var ulParent = document.getElementById("ulParent")
function addTodo(){
    if(!input.value){
        return
    }

var liElement = document.createElement("li")
liElement.className = "list-group-item bg-dark text-white d-flex align-items-center justify-content-between"

var liTxt = document.createTextNode(todoInput.value)
liElement.appendChild(liTxt)
console.log(liElement)




var div = document.createElement("div")
var editBtn = document.createElement("Button")
var deleteBtn = document.createElement("Button")
editBtn.innerHTML = "Edit"

editBtn.setAttribute("onclick" , "editTodo(this)")
deleteBtn.innerHTML = "Delete"

deleteBtn.setAttribute("onclick" ,"deleteTodo(this)")

editBtn.className ="btn btn-success"
deleteBtn.className = "btn btn-danger"

div.appendChild(editBtn)
div.appendChild(deleteBtn)

liElement.appendChild(div)

ulParent.appendChild(liElement)
// console.log(ulParent)

input.value = ""

}

function editTodo(el){
    // console.log("editTodo()" , el.parentNode.parentNode.firstChild.nodeValue)
    var li = el.parentNode.parentNode
    // console.log(li)

    var placeHolder = li.firstChild.nodeValue;
    var editValue = prompt("Edit ToDo..." , placeHolder);
    // console.log("Edit value",editValue)

    li.firstChild.nodeValue = editValue;
}

function deleteTodo(elem){
    elem.parentNode.parentNode.remove()

}

function deleteAll(){
    ulParent.innerHTML = ""
}