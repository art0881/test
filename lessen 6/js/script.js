const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");
// дата отсчета
let countdownDate = new Date(2023,3,1,10,0,0).getTime();
function getCountdownTime(){
    // получаем время
    const now = new Date().getTime();
    // находим разницу времени
    const distance = countdownDate - now;
    // создаем свое время
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHours = 60 * 60 * 1000;
    const oneMinut = 60 * 1000;
    // посчет времени для дней минут секунд
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHours);
    let minut = Math.floor((distance % oneHours) / oneMinut);
    let second = Math.floor((distance % oneMinut) / 1000);
    // Создаем массив 
    const values =[days,hours,minut,second];
    if(distance < 0){
       clearInterval(countdown);
       countdownElement.innerHTML = '<h4 class="expired">Время Вышло</h4>';
    }
    // Добвляем значение в массив с переменной
    items.forEach(function(item,index){
        item.textContent= values[index];
    });
 
}
// обновления времени 
let countdown = setInterval(getCountdownTime,1000);
