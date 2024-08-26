/*
conditional/ternary operator in js
syntax:
condition ? "body of truth" : "body of false"
*/
var n = 101;
n > 0
    ? console.log(n, 'is positive number')
    : console.log(n, 'is negative number');

n % 2 == 0
    ? console.log(n + ' even number')
    : console.log(n + ' odd number')

n % 2 != 0
    ? console.log(n + ' odd number')
    : console.log(n + ' even number')

// num = 23
// divide by 3 and 7
// divisible by both 3 and 7
// not divisible by both 3 and 7
// divisible by 3 not divisible by 7
// divisible by 7 not divisible by 3 
var num = 14;
var n1 = 3;
var n2 = 7;
(num % n1 ==00 && num % n2 == 0)
    ? console.log('divisible by both', n1, 'and', n2)
    : (num % n1 == 0 || num % n2 == 0)
        ? num % n1 == 0
            ? console.log('divisible by', n1, 'not divisible by', n2)
            : console.log('divisible by', n2, 'not divisible  by', n1)
        : console.log('not divisible by both', n1, 'and', n2);


var reg_username = "";
var reg_password = "";
var loggedIn_username = "";
var loggedIn_password = "";

// logged in sucessfully if both matched
// both invalid
// invalid username(valid password)
// invalid password(valid username)