const taskInput = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskContainer");

function addtask(){
   if(taskInput.value === ''){
      alert("Enter your task!");
   }
   else{
     let li = document.createElement("li");
       li.innerHTML = taskInput.value;
      taskContainer.appendChild(li);
     let span = document.createElement("span");
     span.innerHTML = "delete"
     li.appendChild(span);
 }
 
  taskInput.value = "";
   saveData();

  taskContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
      e.target.classList.toggle ("task1");
      saveData();
    }
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
   }
  }, false);
}
function saveData(){
  localStorage.setItem("data", taskContainer.innerHTML);
}
function showTask(){
  taskContainer.innerHTML = localStorage.getItem("data")
}
showTask();

