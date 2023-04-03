const btn = document.querySelector("button");
btn.style.fontSize = "32px";
btn.classList.add("btn")
btn.onclick = () => {
  alert("сплывающее окно");
};
console.log('%c мои друзья', 'color:orange;');
const ar1 = {name:'привет',age:32};
const ar2 = {name:'пerg',age:3234};
console.table([ar1,ar2])

