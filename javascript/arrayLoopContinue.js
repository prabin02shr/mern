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
  {
    name: "Lenovo",
    generation: "i5",
    ram: "16GB",
  },
  {
    name: "Dell",
    generation: "i5",
    ram: "16GB",
  },
  {
    name: "acer",
    generation: "i3",
    ram: "16GB",
  },
];

laptops.forEach(function (item, index) {
  item.offer = "20% off";
});
// console.log(laptops)

// filter
var acerLaptops = laptops.filter(function (item, index) {
  if (item.name === "acer" && item.generation === "i3") {
    return item;
  }
});
// console.log(acerLaptops)

// map
var laptopName = laptops.map(function (item, index) {
  return item.name;
  //   return item.generation;
});
// console.log(laptopName);

// some
var searchName = laptops.some(function (item, index) {
  if (item.name === "acer") {
    return true;
  }
});
// console.log(searchName);

// every
var searchNames = laptops.every(function (item, index) {
  if (item.offer === "20% off") {
    return true;
  }
});
// console.log(searchNames);

// find
var findResult = laptops.find(function (item, index) {
  if (item.name === "Lenovo") {
    return item;
  }
});
// console.log(findResult);

// reduce
laptops.reduce(function(acc, item, index, source){
    console.log(source);
    return 1;
}, 12)