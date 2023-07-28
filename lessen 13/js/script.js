const apiKey = "019f92f8f8be5709c21228cdda3fdd68";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector('.search-weater input');
const searchButton = document.querySelector('.search-weater button');
const weater = document.querySelector('.weather');
const error = document.querySelector('.error');

async function Weather(city){
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(res.status == 404){
        error.style.display = "block";
        weater.style.display = "none";
    }
    const data = await res.json();
    console.log(data,"data");

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);

    weater.style.display = "block";
    error.style.display = "none";

}
searchButton.addEventListener('click',()=>{
    Weather(searchInput.value);
    searchInput.value="";
})
Weather();