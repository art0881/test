let button = document.querySelector("#button");
let block = document.querySelector("#block");

// button.addEventListener("click", ()=>{
//     if(block.classList.contains("grey")){
//         block.classList.toggle("yellow");
//         if(block.classList.contains("yellow")){
//             button.textContent = "Выключить";
//         } else if(block.classList.contains("grey")){
//             button.textContent = "Включить";
//         }
        
//     } 
// })

button.addEventListener("click",()=>{
    if(block.classList.contains("grey")){
        block.classList.add("yellow");
        block.classList.remove("grey");
        button.textContent="Выключить"
    } else if(block.classList.contains("yellow")){
        block.classList.add("grey");
        block.classList.remove("yellow");
        button.textContent="Включить";
    }
})