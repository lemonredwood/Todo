var showtasks = document.getElementById("tasklist")
var butn = document.getElementById("btn1")

function addtasks(){
    console.log("Function called")

    var taskitem = document.createElement("li")
    
    taskitem.innerHTML = "New Task";    
    showtasks.appendChild(taskitem);
   

    console.log("New element appended.")
    addtable;


}
function deletetask(){
    showtasks.removeChild(taskitem1);
    
}
function addtable(){
    const completedtasks = document.createElement("table");
    
}
addtask.addEventListener("click",addtasks)
btn1.addEventListener("click",deletetask)
var taskitem1 = document.createElement("input")
showtasks.appendChild(taskitem1);