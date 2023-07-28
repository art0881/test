let btn = document.querySelector("#btn");
let person = document.querySelector("#person");

let rob = ()=>{
fetch(`https://random-data-api.com/api/v2/users?response_type=json`)
.then(res=>res.json())
.then(data=>{

    person.innerHTML = `<div class="block_img"><img src="${data.avatar}" class="img"  alt="Загрузка"/></div>
    <h2>${data.last_name} ${data.first_name}</h2>
    <div class="flex"><span class="img_loc"></span><h3>${data.address.city}</h3></div>
    <div class="flex"><span class="img_phone"></span><h5>${data.phone_number}</h5></div>
    ` ;
    console.log(data);
})};

window.addEventListener("load", rob());
btn.addEventListener("click",()=>{
rob();
})