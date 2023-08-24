const addbutton = document.getElementById("addtask")
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
    var deletebutton = document.createElement('button')
    var checkbutton = document.createElement('button')
    
    
    cell0.innerHTML = sr;
    cell1.appendChild(taskitem);
    cell4.appendChild(checkbutton);
    cell4.appendChild(deletebutton);
    deletebutton.innerHTML = "Delete"
    checkbutton.innerHTML = "Assign"
    deletebutton.addEventListener("click",deletetask)
    checkbutton.addEventListener("click",checktask)
    sr++;
    check()

    function deletetask(){

        console.log("Task " + (sr-1) + " Deleted.")
        taskitem.removeChild(taskitem);
    
    }

    function checktask(){

        console.log("Check button clicked.")
        checkbutton.innerHTML = "Check"
    
    }

}
var sr = 1;
addbutton.addEventListener("click",addrow)

