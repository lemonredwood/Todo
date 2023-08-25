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
    cell4.className = "tablerows action-items";
    cell1.className = "tablerows display-items";

    var displaytaskitem = document.createElement('label')
    var deletebutton = document.createElement('button')
    var checkbutton = document.createElement('button')
    deletebutton.id="deletebutton";
    checkbutton.id="checkbtton"
    
    
    cell1.appendChild(displaytaskitem);
    displaytaskitem.innerHTML=taskitem.value;
    taskitem.value = "";
    cell4.appendChild(checkbutton);
    cell4.appendChild(deletebutton);
    deletebutton.innerHTML = "Del"
    checkbutton.innerHTML = "Check"
    deletebutton.addEventListener("click",deletetask)
    checkbutton.addEventListener("click",function(){
        var listitem = document.createElement("li");
        completetasklist.appendChild(listitem);
        listitem.innerHTML=displaytaskitem.innerHTML;
        deletetask()
    });


    function deletetask(){

        console.log("Task Deleted.")
        row.remove();
    
    }

}


