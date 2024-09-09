// es6
// ecma script
// es5
/*
1. object shorthand
2. object destruction
3. default argument
4. template literals
5. arrow notation function
6. spread and rest operator
7. import and export
*/

// object shorthand

var name = "sita";
var adress = "Lalitpur";
var details = {
  name,
  adress,
};
// console.log(details);

// object destruct

function displayDetails(det) {
  return det;
}
var { name, address } = displayDetails(details);
// console.log(name);
// console.log(adress);

// default argument

function displayResult(det = { name: "hari", address: "Ktm" }) {
  console.log(det);
}
// displayResult();

// template literals
// + ,
// ``

var text = "my name is " + name + " my adress is " + adress;
var result = `my name is ${name} , my adress is ${adress}`;
// console.log(text);
// console.log(result);

// arrow notation function
// es5 function
function hi() {
  console.log("hi from es5 function");
}
// hi();

// es6 function
const hello = (a, b) => {
  console.log("hi from es6 function", a, b);
};
// hello(2, 3);

// one liner arrow function
const ret = (a) => a;
// console.log(ret(55));

var laptops = [
  {
    name: "acer",
    generation: "i9",
    ram: "16GB",
  },
  {
    name: "Asus",
    generation: "i7",
    ram: "8GB",
  },
  {
    name: "Lenovo",
    generation: "i5",
    ram: "32GB",
  },
  {
    name: "acer",
    generation: "i3",
    ram: "16GB",
  },
  {
    name: "Dell",
    generation: "i9",
    ram: "4GB",
  },
  {
    name: "samsung",
    generation: "i5",
    ram: "16GB",
  },
];

// var acerLaptops = laptops.filter(function(item, index){
//     if ( item.name === "acer"){
//         return item;}
// });
var acerLaptops = laptops.filter((item) => item.name === "acer");
// console.log(acerLaptops);

// spread  operator
//  ...
var a = {
  names: "rahul",
};
var b = {
  city: "Lalitpur",
};
var c = {
  // concatinate object
  // convert to imutable
  ...a,
  ...b,
};
a.location = "random";
c.data = "active";
// console.log(a);
// console.log(c);

// rest operator
// ...

var data1 = 13131;
var data2 = "HEllo";
var data3 = true;
var main_data = { data1, data2, data3 };
const dataResult = (main_data) => {
  return main_data;
};
var { data1, ...rest } = dataResult(main_data);
console.log(data1);
console.log(rest);


// import and export
// file to file communication

/*
*export

function Demo(){}
1. named export
=>  export function Demo(){}
=>  export const MyFunction = Demo

2. default export
=>  export default function Demo(){}


*import

1. if named export
=> import {Demo, MyFunction} from "./location_of_file"
=> import {MyFunction} from "./location_of_file"

2. if default export
=> import something from "./location_of_file"

3. if both named and default export
=> import {Demo, MyFunction}, something from "./location_of_file"

*/