// array loop in js
/*
1. forEach
2. map
3. filter
4. some
5. every
6. find
7. reduce
*/

var fruits = ["kiwi", "apple", "mango", "banana", "apple", "kiwi"];
var number = [1, 2, 3, 3, 4, 5, 2, 1];
var bikes = ["honda", "yamaha", "bajaj"]

// forEach
var uniqueFruits = [];
fruits.forEach(function (item, index) {
  //   console.log(item);
  //   console.log(index);
  //   console.log("index of element", item, "is", index);
  if (uniqueFruits.includes(item)) {
    // uniqueFruits.push(item);
  }
  else{uniqueFruits.push(item)}
});
console.log(uniqueFruits);

// unique fruits
fruits.forEach(function (item, index) {
  if (!uniqueFruits.indexOf(item === -1)) {
    uniqueFruits.push(item);
  }
});
console.log(uniqueFruits);

// unique numbers
var uniqueNumber = [];
number.forEach(function (item, index) {
  if (!uniqueNumber.includes(item)) {
    uniqueNumber.push(item);
  }
});
console.log(uniqueNumber);

// functional
