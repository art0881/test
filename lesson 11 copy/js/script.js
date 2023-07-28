const main = document.querySelector('#main');
const x = document.querySelector('#x');

main.addEventListener('mousemove',(e)=>{
x.textContent = e.clientX;
main.style.backgroundColor = `hsl(${e.clientX}, 80%, 50%)`;
})

// часть 2 
async function getRes(){
    let res = await fetch('https://jsonplaceholder.typicode.com/photos');
    let con = await res.json();
    con = con.splice(0,10)
    
    let  list = document.querySelector('.posts');

    let key;
    for(key in con){
        list.innerHTML +=`
        <li class="post">
        <h4>${con[key].title}</h4>
        <img src="${con[key].url}" width="300px">
        </li>`
       console.log(con[key]); 
    }
};

getRes();