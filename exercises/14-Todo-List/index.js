// Your code here
function addDeleteTaskEvent(item){
    item.addEventListener("click",function(e){
        e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);
    });
}

let  deleteTasks = document.querySelectorAll(".fa-trash");

for(var i=0;i<deleteTasks.length;i++){
    addDeleteTaskEvent(deleteTasks[i]);
}

document.body.addEventListener("keydown",function(e){
   if(e.keyCode == 13){
       var val = document.querySelector("#addToDo").value
       if(val!=''){
           var elem = document.createElement('li');
           elem.innerHTML = '<span><i class="fa fa-trash"></i></span> '+val;
           document.querySelector("ul").appendChild(elem)
       } 
   }
})


