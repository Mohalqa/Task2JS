
/*
Question 1: Check Even or Odd
*/
var result =parseFloat( window.prompt("plase enter your number")) ; 

if (result%2==0)
    {
        window.alert("your number is Even") ; 
    }
    else {
        window.alert("your number is Odd") ; 

    }
    /*
Question 2: Determine Age Eligibility for a Movie

    */
var Age =parseFloat( window.prompt("plase enter your Age")) ; 

if (Age<18)
    {
        window.alert("cannot watch the movie") ; 
    }
    /*
    Question 3: Check Weather Conditions
    */
    // Prompt the user to enter the current temperature
var temperature = window.prompt("Please enter the current temperature in degrees:");

// Convert the input to a number
temperature = Number(temperature);
// Check the temperature range and display an appropriate message
if (temperature < 20) {
    console.log("It is cold.");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It is warm.");
} else if (temperature > 30) {
    console.log("It is hot.");
} else {
    console.log("Invalid input. Please enter a numeric temperature.");
}
/*
Question 4: Check Passing Grade
*/
var gread = parseFloat( window.prompt("plase enter your number")) ; 
if (gread <50){
 window.alert("fail :(")    ;

}
else{
    window.alert("pass :)") ; 
}
/*
Question 5: Determine the Larger Number
*/
var num1= parseFloat( window.prompt("plase enter your number1")) ;
var num2= parseFloat( window.prompt("plase enter your num2")) ;
if (num1 >num2){
    
    window.alert("number1 is is larger ")    ;

}
else {
    window.alert("number2 is is larger ")    ; 
}
/*
Question 6: Verify Password
*/

var predefinedPassword = "mypassword123";

var enteredPassword = window.prompt("Please enter your password:");
 
if (enteredPassword === predefinedPassword) {
    console.log("Login successful");
} else {
    console.log("Incorrect password");
}

/*
Question 7: Check Username and Password
*/

var predefinedUsername = "user123";
var predefinedPassword = "mypassword123";
var enteredUsername = window.prompt("Please enter your username:");
var enteredPassword = window.prompt("Please enter your password:");
if (enteredUsername === predefinedUsername && enteredPassword === predefinedPassword) {
    console.log("Login successful");
} else {
    console.log("Incorrect username or password");
}
/*
Question 8: Determine Academic Grade
*/

var grade = window.prompt("Please enter your exam grade:");
grade = Number(grade);


if (grade >= 90 && grade <= 100) {
    alert("Your grade is A");
} else if (grade >= 80 && grade <= 89) {
    alert("Your grade is B");
} else if (grade >= 70 && grade <= 79) {
    alert("Your grade is C");
} else if (grade >= 60 && grade <= 69) {
    alert("Your grade is D");
} else if (grade < 60) {
    alert("Your grade is F");
} else {
    alert("Invalid input. Please enter a numeric grade between 0 and 100.");
}
/*
Question 9: Determine Age Category
*/

var age = window.prompt("Please enter your age:");
age = Number(age);

if (age < 13) {
    alert("You are a Child");
} else if (age >= 13 && age <= 19) {
    alert("You are a Teenager");
} else if (age >= 20) {
    alert("You are an Adult");
} else {
    alert("Invalid input. Please enter a numeric age.");
}
/*
Question 10: Check Membership Type
*/

var membershipType = window.prompt("Please enter your membership type (Basic, Silver, Gold):");
membershipType = membershipType.toLowerCase();
if (membershipType === "basic") {
    alert("Access to basic content");
} else if (membershipType === "silver") {
    alert("Access to silver content");
} else if (membershipType === "gold") {
    alert("Access to all content");
} else {
    alert("Invalid membership type. Please enter Basic, Silver, or Gold.");
}
