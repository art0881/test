// // ВСПЛЫВАЮЩЕЕ ОКНО

// function myFunction(){
//     var x = document.getElementById("snackbar");
//     x.className ="show";
//     setTimeout(function(){
//         x.className=x.className.replace("show","");
//     },3000);
// }


// // СКРЫВАЮЩИЙ БЛОК

// function myFunction(){
//     var x = document.getElementById('myDiv');
//     if(x.style.display == 'none'){
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// }
// var close = document.getElementsByClassName('closebtn');
// var i;
// for(i=0;i<close.length;i++){
//     close[i].onclick = function(){
//         var div = this.parentElement;
//         div.style.opacity="0";
//         setTimeout(function(){
//             div.style.display="none";
//         }, 600);
//     }
// }

// // ПУБИЛКАЦИИ

// var myNodelist = document.getElementsByTagName('li');
// var i;
// for(i=0; i<myNodelist.length;i++){
//     var span = document.createElement("span");
//     var txt = document.createTextNode("\u00D7");
//     span.className="close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

// var close = document.getElementsByClassName("close");
//     var i;
//     for(i=0; i < close.length;i++){
//         close[i].onclick = function(){
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }

//   var list = document.querySelector('ul');
//   list.addEventListener('click',function(ev){
//     if(ev.target.tagName === 'li'){
//         ev.target.classList.toggle('checked');
//     }
//   },false);

//   function newElement(){
//     var li = document.createElement('li');
//     var inputValue = document.getElementById('myInput').value;
    
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if(inputValue === ''){
//         alert('поле пустое')
//     } else {
//         document.getElementById('myUL').appendChild(li);
//     }
//   }


// // ОТКРЫВАЮЩИЕ БЛОКИ

// var acc = document.getElementsByClassName('accordion');
// var i;
// for (i =0;i <acc.length; i++){
//     acc[i].onclick = function(){
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//     }
// }

// // МОДАЛЬНОЕ ИЗОБРОЖЕНИЕ

// var modal = document.getElementById('myModal');
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById('img01');
// var captionText = document.getElementById('caption');

// img.onclick=function(){
//     modal.style.display="block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName('close')[0]
// span.onclick = function(){
//     modal.style.display = "none";
// }

// // КАЛЬКУЛЯТОР

// function plus(){
//     var num1, num2,result;
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);
//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//     result = num1 + num2;
//     document.getElementById('out').innerHTML = result;
// }
// function minus(){
//     var num1, num2,result;
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);
//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//     result = num1 - num2;
//     document.getElementById('out').innerHTML = result;
// }
// function multiply(){
//     var num1, num2,result;
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);
//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//     result = num1 * num2;
//     document.getElementById('out').innerHTML = result;
// }

// // ПОИСКОВИК

// function myFunction(){
//     var input,filter,ul,li,p,a,i;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUl");
//     li = ul.getElementsByTagName('li');
//     p = document.getElementsByTagName('p');

//     for(i=0;i<li.length;i++){
//         a = li[i].getElementsByTagName('a')[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter)>-1){
//             li[i].style.display = "";

//         } else {
//             li[i].style.display = "none";

//         }
//     }
// }

// var tab;
// var tabContent;

// window.onload = function (){
//     tabContent = document.getElementsByClassName('tabContent');
//     tab = document.getElementsByClassName('tab');
//     hideTabsContent(1);
// }

// function hideTabsContent(a){
//     for(var i=a; i<tabContent.length;i++){
//         tabContent[i].classList.remove('show');
//         tabContent[i].classList.add('hide');
//         tab[i].classList.remove('whiteborder');
//     }
// }

// document.getElementById('tabs').onclick=function(even){
//     var target=event.target;
//     if(target.className=='tab'){
//     for(var i =0;i<tab.length;i++){
// if(target == tab[i]){
//     showTabsContent(i);
// }
//     }
// }
// }

// // НАВИГАЦИЯ

// function showTabsContent(b){
//     if(tabContent[b].classList.contains('hide')){
//         hideTabsContent(0);
//         tab[b].classList.add('whiteborder');
//         tabContent[b].classList.remove('hide');
//         tabContent[b].classList.add('show');
//     }
// }

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close");

// btn.onclick = function(){
//     modal.style.display = "block";
// }
// span.onclick = function(){
//     modal.style.display = "none";
// }
// function show(){
//     var btn = document.getElementById("myBtn");
//     modal.style.display = "block";
//      }
// function hide(){
//     var span = document.getElementsByClassName("close");
//     modal.style.display = "none";
//      }

//      function f1 (){
//         const ch = document.getElementById('one');
//      if(ch.checked){
//      document.getElementById('te').innerHTML="есть нажатие";

//      } else {
//         document.getElementById('te').innerHTML="нет нажатие";
//      }
//     }

//     // кнопка бетмен
//     function betmeen(){
//         document.getElementById('betman').innerHTML = ('Бетмен')
//     }

//     // кнопка человека паука через события
//     const link = document.querySelector('#g');
//     link.addEventListener("click", function (event){
//       document.querySelector('#spider').innerHTML=('человек паук');
//     })

//     // блоки при клике пишут блок в консоле
// const block1 = document.querySelector('.block1');
// const block2 = document.querySelector('.block2');

// block1.addEventListener("click",function(event){
// console.log("Первый блок")
// });
// block2.addEventListener("click",function(event){
// console.log("второй блок")
// });
// // выводит инфу и инпута
// function but()  {
// let g = document.getElementById('in').value;
// document.getElementById('in').value = "";
// document.getElementById('t').innerHTML = g;

// }
// function butu()  {
//  document.getElementById('t').innerHTML = "";

// }

//         // менят цвет блока
//         function redblue() {
//             const red = document.getElementById('red');
//             red.classList.toggle('block__blue');
//          }
