const fish = { id: 50, name: 'King Hilsha', price: 9000, phone: '01849675876', address: 'Chandpur', color: 'siler' };

const phone = fish.phone;
const price = fish.price;
const color = fish.color;
const id =fish.id;

console.log(phone ,price);
console.log(phone,color);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);


const company = {Name:'GP', CEO: {id: 1, name: 'ajmol', food: 'Fuchka'},
web: {work: 'website development ', employee: 22, framework: 'react'} 
 ;}

 //const work = company.web.work;
 //const framework = company.web.framework;


 const {work, framework} = company.web;
 const {food} = company.CEO;