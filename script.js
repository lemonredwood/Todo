const add = document.getElementById("addtask")
const table = document.getElementById("todotable")

function addtask(){
    console.log("Task to be added now.")

}

function check(){
    console.log("Function called")
    addtask()
}

function addrow(){
    
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell4 = row.insertCell(2);
    
    var taskitem = document.createElement('input')
    
    
    cell0.innerHTML = sr;
    cell1.appendChild(taskitem);
    cell4.innerHTML = "Status";

    
    sr++;
    check()
}
var sr = 1;
add.addEventListener("click",addrow)