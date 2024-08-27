/*
conditional statement in js
1. if
    syntax:
    if(conditon){
    body of if
    }

    conditon value:
    - truthy value => true, some defined value
    - falsy value => false, 0, "", '', null, undefined

2. nested if
    syntax:
    if(conditon1){
        body of if
        if(condition2){
            body of nested if
            if(conditon3)
                if ladder
        }

    }

3. if else
    syntax:
    if(conditon){
    body of if
    }
    else{
    body of else
    }

4. nested if else
    syntax:
    if(conditon1){
    body of condition1
    }
    else if(condition2{
    body of condition2
    }
    else if(conditon3){
    body of conditon3
    }
    else if(condition n){
    body of conditon n
    }
    else{
    body of else
    }
5. switch
*/

if (0) {
  console.log("if statement");
}

var n = 23;

// if
if (n % 2 == 0) {
  console.log(n, "is even number");
}
if (n % 2 != 0) {
  console.log(n, "is odd number");
}

// nested if
if (n > 0) {
  console.log("positve number");
  if (n > 10) {
    console.log("positive number greater than 10");
  }
}

// if else
if (n % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

var reg_username = "aram";
var reg_password = "123";
var logIn_username = "ram";
var logIn_password = "123";

if (reg_username === logIn_username && reg_password === logIn_password) {
  console.log("logged in sucessfully");
} else {
  if (reg_username === logIn_username || reg_password === logIn_password) {
    if (reg_username === logIn_username) {
      console.log("invalid password");
    } else {
      console.log("invalid username");
    }
  } else {
    console.log("invalid username and password");
  }
}

// nested if else
var day = 6;
if (day == 1) {
  console.log("Sunday");
} else if (day == 2) {
  console.log("Monday");
} else if (day == 3) {
  console.log("Tuesday");
} else if (day == 4) {
  console.log("Wednesday");
} else if (day == 5) {
  console.log("Thursday");
} else if (day == 6) {
  console.log("Friday");
} else if (day == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid input");
}


// calculator
// symbol
