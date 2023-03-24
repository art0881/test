const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const nex= ["0","2","3","4","5","6","7","8","9",
"A","B","C","D","E","F"]
btn.addEventListener('click',()=>{
    let textColor = getHex();
    document.body.style.backgroundColor = textColor;
    color.textContent = textColor;
})
function getHex(){
    let nexColor="#";
    for (let i=0; i<6;i++){
        nexColor+=nex[getRamdom()]
    }
    return nexColor;
}
function getRamdom(){
   return Math.floor(Math.random() * nex.length);
}