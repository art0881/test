setInterval(()=>{
    let hours = document.querySelector("#hours").textContent = new Date().getHours();
    let minuts = document.querySelector("#minuts").textContent = new Date().getMinutes();
    let second = document.querySelector("#second").textContent = new Date().getSeconds();
});



searchInput.addEventListener("input", async () => {
    const searchTerm = searchInput.value.toLowerCase();

    resultsDiv.innerHTML = "";

    if (searchTerm) {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm)
        );

        displayUsers(filteredUsers, searchTerm);
    }
});

function displayUsers(users, searchTerm) {
    if (users.length > 0) {
        users.forEach((user) => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user");

            // Создаем имя пользователя с подсветкой поисковых букв
            const highlightedName = user.name.replace(
                new RegExp(searchTerm, "gi"),
                (match) => `<span class="highlight">${match}</span>`
            );

            userDiv.innerHTML = `
                <h3>${highlightedName}</h3>
                <p>Email: ${user.email}</p>
                <p>Username: ${user.username}</p>
            `;

            resultsDiv.appendChild(userDiv);
        });
    } else {
        resultsDiv.innerHTML = "Пользователи не найдены.";
    }
}