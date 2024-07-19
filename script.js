const input= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    if(input.value === ''){
        alert("Cannot add empty task!");
    } else {
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild("li");
    }
}