var fruits = ["kiwi", "apple", "mango", "banana", "kiwi"];
// console.log(fruits.indexOf("kiwi"));
// console.log(fruits.lastIndexOf("kiwi"));
// console.log(fruits.indexOf("orange"));
// console.log(fruits.includes("apple"));

// add element
// // in first position
// fruits.unshift("papaya");
// // in last positon
// fruits.push("grapes");
// console.log(fruits);

// // remove element
// // from first positon
// fruits.shift();
// // from last positon
// fruits.pop();
// console.log(fruits);

// slice
// console.log(fruits.slice(1, 4));

// splice
fruits.splice(1, 1);
fruits.splice(1, 0, "peach");
console.log(fruits);


