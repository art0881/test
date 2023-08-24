let debounceTimeout;

searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimeout);

  let search = searchInput.value;
  resultsDiv.innerHTML = "";

  if (search !== "") {
    debounceTimeout = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
          let filteredUsers = data.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
          );
          displayUsers(filteredUsers);
        })
        .catch(error => {
          resultsDiv.innerHTML = "Ошибка при получении данных.";
        });
    }, 300); // Задержка перед выполнением запроса в миллисекундах
  }
});

let displayUsers = (users) => {
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      let userDiv = document.createElement("div");
      userDiv.innerHTML = `
        <h1>${users[i].name}</h1>`;
      resultsDiv.appendChild(userDiv);
    }
  } else {
    // Ничего не делаем, не выводим сообщение об отсутствии результатов
  }
};
