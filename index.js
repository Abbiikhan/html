// const users = [];
// let id=1;
// function add(){
//     const name = document.getElementById('name');
//     const fname = document.getElementById('fname');
//     const age = document.getElementById('age');
//     const table = document.getElementById('mytable');
//     const error = document.getElementById('error');
//    const user = {
//         id:id,
//         name:name.value,
//         fname:fname.value,
//         age:age.value
//     }
   
    
//     if(name.value==='' && fname.value==='' && age.value===''){
// error.innerHTML = "All fields are required."
//     }else{

//         users.push(user);
//         id++;
//     }
//    table.innerHTML = users.map((user) => (`<tr>
//        <td>${user.id}</td>
//        <td>${user.name}</td>
//        <td>${user.fname}</td>
//        <td>${user.age}</td>
//        </tr>`)
      
//        )
// }


// tables
// for(let i = 0; i <= 10; i++) {
//   const result = num * i;
// //   console.log(`${num} * ${i} = ${result}`);8
//   var a = '';
//   a = "<span>" + result + "</span>";
// console.log(a);
// }
// var text = document.getElementById('demo');
// text.innerHTML = a
// var x = '', i;
// let num ="hello";

// for (i=1; i<=6; i++) {
// x = i
// }
// document.getElementById('demo').innerHTML = x


// let val = 1000;

// function test() {
//     const secretCode = 12345;
//     return function inner() {
//         console.log(`your secret code is ${secretCode}`);
//     }
// }
// let output = test();
// output();
// const secret2 = function(val) {
//     const namez = function() {
//         return val;
//     }
//     return namez;
// }

// let secretVal = secret2('abbas');
// console.log(secretVal);


// let myCar = {
//     make: 'honda',
//     model: 'accord',
//     year: 2010
// };
// let x,y;

// function myFunc(object) {
//     object.make = 'toyota';
// }
// x = myCar.make;
// console.log(myCar);

// myFunc(myCar);
// y = myCar.make;

function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }

console.log(factorial(5));
  



