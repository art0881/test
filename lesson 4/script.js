// const input = document.createElement('input');
// const ul = document.createElement('ul');

// document.body.append(input,ul);
// input.addEventListener("keydown", keyHand);

// function keyHand(even){
//     const {key} = event;
//     const {value} = input;
//     if(key == "Enter" && value){
//         const li = document.createElement("li");
//         li.textContent = value;
//         input.value = "";
//         ul.append(li);
//     }
// }
 const button = document.querySelector('#button');
 const content = document.querySelector('#content');

 button.addEventListener('click', function(){
content.classList.toggle('content-hidden');
if(content.classList.contains('content-hidden')){
    button.textContent = 'Открыть блок';
} else {
    button.textContent = 'Закрыть блок';
}
 });

//  const array = ['привет','как дела'];

// const p = document.querySelector('#p');
//  array.forEach((el,i){
//     p.textContent=el;
//  });