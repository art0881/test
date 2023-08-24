// вывод рандомных публикаций

let text = document.querySelector("#text");
let title = document.querySelector("#title");
let btn = document.querySelector("#btn");

function generation (){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>res.json())
    .then(data=>{
       let random = Math.floor(Math.random()*data.length);
        text.textContent = data[random].body;
        title.textContent = data[random].title;
        console.log(data[random].title);
        console.log(data[random].body);
        
    })
};

generation ();

btn.addEventListener("click", ()=>{
    generation();
    console.clear()
});

// страны 
let search = document.querySelector("#search");
let search_btn = document.querySelector("#search-btn");
let result = document.querySelector("#result");
search_btn.addEventListener("click", ()=>{
    let search_input = search.value;
fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search_input}&appid=019f92f8f8be5709c21228cdda3fdd68`)
.then(response => response.json())
.then(data =>
    {   
        
        const temperature = Math.round(data.main.temp);
        const name = data.name;
        document.querySelector("#weater").innerHTML = `<h3>Температура: ${temperature} C</h3>`;
    } ).catch((err)=>{
     
        if (search_input.length == 0) {
            result.innerHTML = `<h3>Строка пустая</h3>`;
            console.log("Строка пустая");
          } else {
            result.innerHTML = `<h3>такой страны нет</h3>`;
            console.log("такой страны нет");
          }
    });
});
search.addEventListener("input", ()=>{
    let search_input = search.value;
    fetch(`https://restcountries.com/v3.1/name/${search_input}?fullText=true`)
    .then(res=>res.json())
    .then(data=>{
    
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="img">
        <h2>Континент : ${data[0].continents}</h2>
        <h2>Страна : ${data[0].name.common}</h2>
        <h3>Столица : ${data[0].capital}</h3>
        `
        console.log(data);
    }).catch((err)=>{
     
        if (search_input.length == 0) {
            result.innerHTML = `<h3>Строка пустая</h3>`;
            console.log("Строка пустая");
          } else {
            result.innerHTML = `<h3>такой страны нет</h3>`;
            console.log("такой страны нет");
          }
    })
})
// покемоны
