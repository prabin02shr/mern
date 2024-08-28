/*
loop in js
types:
1. for loop
    syntax:

    for(initialization;conditon;increment/decrement){
    body of for loop 
    }

    # task
    #  write a program(wap) to print a number from 1 to 10 using for loop
    intialization:
        i = 1
    condition:
        i == 10
        i < 11
        i <= 10
        i >= 10
    increment/decrement:
        increment:
            i++
        decrement:
            i--

2. while loop
    syntax:

    intialization;
    while(condition){
        body of 
    }
3. do-while loop
    syntax:

    intialization
    do{
        body of do while
    }

*/

// for loop

// wap to print 1 to 10
for (i = 1; i < 11; i++) {
  console.log(i);
}

// wap to print a collection of odd number from 1 to 10
for (i = 10; i > 0; i--) {
  //   console.log(i);
  if (i % 2 != 0) {
    console.log(i);
  }
}

// wap to print the sum of number from 1 to 10
// wap to print the sum of natural number
var sum = 0;
for (i = 1; i < 11; i++) {
  // sum = sum + i;
  sum += i;
}
console.log(sum);

// wap to print
var sum = 0;
var fact = 1;
for (i = 1; i < 6; i++) {
  //   5 * 4 * 3 * 2 * 1;
  fact *= i;
}
console.log(fact);

// while loop
var i = 1;  // intialization
while (i <= 10) {  // condition
  console.log(i);
  i++; // increment
}

// do while loop
var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
