// class Person {

const { text } = require("express");

//     constructor(
  
//       fName = 'Anuj',
  
//       lName = 'Kumar',
  
//       age = 25,
  
//       city = 'Delhi'
  
//     ) {
  
//       this.fName = fName
  
//       this.lName = lName
  
//      this.age = age
  
//       this.city = city
  
//     }
  
//   }
  
  
//   const person1 = new Person() // it will take the default values
  
//   const person2 = new Person('Rohan', 'Sharma', 28, 'Jaipur')
//   console.log(pe);

let name = "nilu";

function greet(){
    console.log("greeting:" ,name);
    var x = 10;
    function test(){
        console.log(x);
    }
    test()
}


greet();