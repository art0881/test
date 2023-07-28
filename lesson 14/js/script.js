
// часть 1 время 
setInterval(()=>{
    let year = document.querySelector("#date").textContent=new Date().getFullYear();
    let hours = document.querySelector("#date1").textContent=new Date().getHours();
    let min = document.querySelector("#date2").textContent=new Date().getMinutes();
    let sec = document.querySelector("#date3").textContent=new Date().getSeconds();

});
let color = document.querySelector(".flex");

// часть 2 меняем фон 
const black = document.querySelector("#black");
const white = document.querySelector("#white");
const blue = document.querySelector("#blue");

black.addEventListener("click",()=>{
    document.body.style.backgroundColor="black";
    color.style.color = "white";
});
blue.addEventListener("click",()=>{
    document.body.style.backgroundColor="blue";
    color.style.color = "red";
});
white.addEventListener("click",()=>{
    document.body.style.backgroundColor="white";
    color.style.color = "black";
});


// часть 3 апи погоды 
async function w(){
 await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=Izberbash&appid=019f92f8f8be5709c21228cdda3fdd68`)
.then(response => response.json())
.then(data =>
    {   
        
        const temperature = Math.round(data.main.temp);
        const name = data.name;
        document.querySelector("#weater").textContent = `Город ${name}, Температура: ${temperature} C`;
    } );
};
w();
setInterval(()=>{
    w();
},60000)

// часть 4 апи пользователей 

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res=> res.json())
.then(data=>{

    for ( i = 0; i < data.length; i++) {
        console.log( data[i].name );

const id = data[i].id;
const name = data[i].name;
document.querySelector("#users").innerHTML+=`id ${id}, имя ${name} <br>`;
    }
});

// часть 5 фото
let img = document.querySelector("#cat");
fetch(`https://jsonplaceholder.typicode.com/photos`)
.then(res=>res.json())
.then(data =>{

data.splice(7);
    console.log(data);
  
  for(i=0;i<data.length;i++){
    img.innerHTML += `
    <img width="300px" src=${data[i].url}>`
    }
});

// часть 6 посты 

const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(res=>res.json())
.then(data=>{
   
    data.splice(5);
    for(i=0;i<data.length;i++){
    document.querySelector("#container").innerHTML+=`<p>публикация : ${data[i].id} <b>${data[i].title}</b></br> ${data[i].body}</p>`;
    }
});



