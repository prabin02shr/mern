// task 1
// functional
// function argument
var bikes = ["honda", "yamaha", "honda", "bajaj"];
var fruits = ["kiwi", "apple", "mango", "banana", "apple", "kiwi"];
var number = [1, 2, 3, 3, 4, 5, 2, 1];
function getUniqueitem(data) {
  var uniqueItem = [];
  data.forEach(function (item, index) {
    if (!uniqueItem.includes(item)) {
      uniqueItem.push(item);
    }
  });
  console.log(uniqueItem);
}
getUniqueitem(bikes);
getUniqueitem(fruits);
getUniqueitem(number);


// function return

// task 2
var countItem =[]
