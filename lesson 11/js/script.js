const person = [
  {
    id: 1,
    name: "Rashid",
    age: 23,
  },
  {
    id: 2,
    name: "Mukhtar",
    age: 23,
  },
];

const getEmail = [];
person.forEach((elm) => {
  getEmail.push(elm.name);
});
console.log(getEmail.join(" "));
document.write(getEmail);

// /// часть 2

const div = document.createElement("div");
div.classList.add("wr");
div.textContent = "Привет я js";
const body = document.body;
body.appendChild(div);

// // часть 3

const people = [
  { name: "Рашид", age: 17 },
  { name: "Таймураз", age: 25 },
];
const comment = [
  { text: "первый ком", id: 1 },
  { text: "второй ком", id: 2 },
];

const eighting = people.some((person) => {
  return new Date().getFullYear() - person.age >= 18;
});
console.log(eighting);

const idcom = comment.find((comment) => {
  return comment.id == 2;
});
console.log(idcom);

fetch("https://jsonplaceholder.typicode.com/users/1/posts")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log("Ошибка"));

// // 4 часть
const age = (document.getElementById("age").innerHTML += " 23 года");
console.log(age);

// 5 часть

const number = [1, 2, 4, 5];
number.forEach((num) => {
  console.log(num * num);
});

const setnumber = new Set();
setnumber.add(123);
setnumber.add(590);
console.log(setnumber);


// часть 6

document.title = "Привет мир";
// часть 7

