console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");

 var faker = require('faker');
 
 for(var i = 0; i < 10; i++){
     console.log(faker.company.companyName() + " - " + faker.company.catchPhrase());
 }