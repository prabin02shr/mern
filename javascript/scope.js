/*
applicaton data:
var, let, const, function

scope
=> accesibility of application data
types:
1. global scope
2. functional/local scope
3. block scope

*/
// global scope:
// accesible within a file
// declare in outermost layer
// var n = 23;

// functional/local scope:
// declare within a function
// var maintain functional scope
// accesible within a function
var a = 3321;
function demo(name, adress) {
    // name and adress(parameter) is functional scope
  var a = 13;
  console.log(a);
  console.log(name, adress)
}
demo("ram", "vedu")
console.log(a);

// block scope
// declare within a block
// accesible withi a block
// let main the local scope
// {}
var greetingText = "Hi"
if(true){
    let greetingText = "Hello"
    console.log(greetingText)
}
else{
    let greetingText = "Good morning"
    console.log(greetingText)
}
console.log(greetingText)



