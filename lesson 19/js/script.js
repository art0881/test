let greet = (name) => {
  console.log("Привет, " + name);
};
greet("Рашид");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let findMin = () => {
  let min = Math.max(...arr);
  console.log(min);
};
findMin();

// герация паролей
let input = document.querySelector("#input");
let button = document.querySelector("#button");
button.addEventListener("click", () => {
  let num_password = "123456789абвгде";
  let password = "";
  var passwordLength = Math.floor(Math.random() * (20 - 8 +1)) + 8;
  for (i = 0; i < passwordLength; i++) {
    let random = Math.floor(Math.random() * num_password.length);
    password += num_password[random];
  }
  return (input.value = password);
});

// табы

let openTab =(event, tabName)=> {
    const tabs = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
      }
      const tabContents = document.getElementsByClassName("tab-content");
      for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  event.target.classList.add("active");
  document.getElementById(tabName).style.display = "block";
}


// туду лист 
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  // Получаем значение из поля ввода
  let text = taskInput.value;
  
  // Проверяем, что введенный текст не пустой
  if (text !== "") {
      // Создаем элемент <li> для задачи
      let result = document.createElement("li");
      
      // Создаем элемент <p> для отображения текста задачи
      let p = document.createElement("p");
      p.textContent = text;
      p.classList.add("tydo_text"); // Добавляем класс "tydo_text" для стилизации текста
      
      // Создаем кнопку "Удалить" для удаления задачи
      let button = document.createElement("button");
      button.textContent = "Удалить";
      
      // Добавляем обработчик события "click" для текста задачи
      p.addEventListener("click", () => {
          p.classList.toggle("yes"); // Добавляем/удаляем класс "yes" для изменения стиля текста
      });
      
      // Добавляем обработчик события "click" для кнопки "Удалить"
      button.addEventListener("click", () => {
          taskList.removeChild(result); // Удаляем элемент <li> (задачу) из списка
      });
      
      // Добавляем элементы в DOM
      taskList.appendChild(result); // Добавляем элемент <li> в список задач
      result.appendChild(p); // Добавляем элемент <p> (текст задачи) внутрь элемента <li>
      result.appendChild(button); // Добавляем кнопку "Удалить" внутрь элемента <li>
      
      // Очищаем поле ввода
      taskInput.value = "";
  }
});


