const addbutton = document.getElementById("addtask")
const table = document.getElementById("todotable")
const completetasklist = document.getElementById("completedtasks")
const closebutton = document.getElementById("close-button")
const savebutton = document.getElementById("save-button")

addbutton.addEventListener("click",()=>{
    modal.style.display = "block";
})

closebutton.addEventListener("click",()=>{
    modal.style.display = "none";
})

savebutton.addEventListener("click",addrow)

function addrow(){
    
    modal.style.display = "none";
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell4 = row.insertCell(1);
    
    var displaytaskitem = document.createElement('label')
    var deletebutton = document.createElement('button')
    var checkbutton = document.createElement('button')

    
    
    cell1.appendChild(displaytaskitem);
    displaytaskitem.innerHTML=taskitem.value;
    taskitem.value = "";
    cell4.appendChild(checkbutton);
    cell4.appendChild(deletebutton);
    deletebutton.innerHTML = "Delete"
    checkbutton.innerHTML = "Check"
    deletebutton.addEventListener("click",deletetask)
    checkbutton.addEventListener("click",function(){
        var listitem = document.createElement("ul");
        completetasklist.appendChild(listitem);
        listitem.innerHTML=taskitem.value;
        deletetask()
    });


    function deletetask(){

        console.log("Task Deleted.")
        row.remove();
    
    }

}


