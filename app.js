let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText= inp.value;

    let dltBtn = document.createElement("button");
    let cmpltBtn = document.createElement("button");
    cmpltBtn.innerText="Completed";
    cmpltBtn.classList.add("cmpltBtn",  "btn", "btn-success");
    item.appendChild(cmpltBtn);
    dltBtn.innerText="Delete"
    dltBtn.classList.add("dltBtn","btn","btn-danger");
    item.appendChild(dltBtn);
  
    ul.appendChild(item);
    inp.value="";
})

ul.addEventListener("click",function(event){
  if (event.target.classList.contains("dltBtn")){
event.target.parentElement.remove();

}
  else if(event.target.classList.contains("cmpltBtn")){
    event.target.parentElement.classList.add("completed");
    event.target.remove();}
 
})