// Получаем ссылки на HTML-элементы для поля ввода и блока результатов
const searchInput = document.getElementById("searchInput"); // Поле ввода
const resultsDiv = document.getElementById("results"); // Блок результатов
const button = document.getElementById("button"); // Блок результатов

button.addEventListener("click",()=>{
  let search = searchInput.value;
  resultsDiv.innerHTML = "";
  
  if(search!=""){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(data=>{
      let filterUser = data.filter(user=>
        user.name.toLowerCase().includes(search.toLowerCase()));
        displayUsers(filterUser);
      }).catch(error => {
        resultsDiv.innerHTML = "Ошибка при получении данных.";
      });
      
    } 
});

 let displayUsers =(data)=>{
   if(data.length>0){
    for(let i=0;i<data.length;i++){
      let userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `<h1>${data[i].name}</h1>`;
      resultsDiv.appendChild(userDiv);
    }
   } else{
     resultsDiv.innerHTML ="Пользователь не найден";
    } 
  };


// // Прослушиваем событие "input" на поле ввода
// searchInput.addEventListener("input", () => {
//   // Извлекаем введенный пользователем текст из поля ввода
//   const searchTerm = searchInput.value;
//   // Очищаем блок результатов перед новым поиском
//   resultsDiv.innerHTML = "";
//   // Проверяем, есть ли введенный текст
//   if (searchTerm != "") {
//     // Запрашиваем данные с API JSONPlaceholder с использован ием fetch
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json()) // Конвертируем ответ в формат JSON
//       .then(users => {
//         // Фильтруем пользователей по имени с учетом введенного текста
//         const filteredUsers = users.filter(user =>
//           user.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         // Отображаем найденных пользователей 
//         displayUsers(filteredUsers);
//       })
//   }
// });

// // Функция для отображения пользователей
// function displayUsers(users) {
//   if (users.length > 0) {
//     // Перебираем массив найденных пользователей
//     users.forEach(user => {
//       // Создаем элемент <div> для каждого пользователя
//       const userDiv = document.createElement("div");
//       // Добавляем класс "user" к созданному элементу <div>
//       userDiv.classList.add("user");
//       // Заполняем содержимое элемента <div> информацией о пользователе
//       userDiv.innerHTML = `
//         <h3>${user.name}</h3>
//         <p>Email: ${user.email}</p>
//         <p>Username: ${user.username}</p>
//       `;
//       // Добавляем созданный элемент <div> в блок результатов
//       resultsDiv.appendChild(userDiv);
//     });
//   } else {
//     // Если пользователи не найдены, выводим сообщение об отсутствии результатов
//     resultsDiv.innerHTML = "Пользователи не найдены.";
//   }
// }

