

const person=[{
    id:1,
    name:'Rashid',
    age:23
},
{
    id:2,
    name:'Mukhtar',
    age:23
}
];


const getEmail = [];
person.forEach((elm)=>{
    getEmail.push(elm.name);
})
console.log(getEmail.join(" "));
document.write(getEmail);
/// часть 2 

const list = fetch('https://api.sampleapis.com/countries/countries');
console.log(list);


