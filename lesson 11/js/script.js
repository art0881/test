

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

person.forEach(elem=>{
    getEmail.push(elem.name);
});
console.log(getEmail);
