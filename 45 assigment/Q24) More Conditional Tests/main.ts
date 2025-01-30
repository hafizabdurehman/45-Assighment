
//Q24)More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//    If you want to try more comparisons, write more tests. 

//  Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
//  and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array


// Variables
let fruit = "orange";
let capitalLetters = "AUSTRALIA";
let num1 = 5;
let num2 = 10;
let fruits = ["apple","orange","banana"];


// Tests for equality and inequality with string
console.log("Is fruit is equal to orange?");
console.log(fruit == "orange");

console.log("\nIs fruit is not Equal to orange?");
console.log(fruit != "orange");

//Tests using the lower case function
console.log("\nIs AUSTRALIA is equal to australia after converting to lowercase?");
console.log(capitalLetters.toLowerCase() == "australia");

console.log("\nIs AUSTRALIA is not Equal to australia after converting to lowercase?");
console.log(capitalLetters.toLowerCase() != "australia");


// Numerical tests 
//Equal to
console.log("\nIs num1 is equal to num2?");
console.log(num1 == num2);

//Not Equal to
console.log("\nIs num1 is not Equal to num2?");
console.log(num1 != num2);

//Greater than
console.log("\nIs num1 is greater than 0?");
console.log(num1 > 0);

//Less than
console.log("\nIs num2 is less than num1?");
console.log(num2 < num1);

//Greater than or Equal to
console.log("\nIs num2 is greater than or equal to 5?");
console.log(num2 >= 5);

//Less than or Equal to
console.log("\nIs num2 is less than or equal to 5?");
console.log(num2 <= 5);

//Tests using "and" and "or" operators
// (&&)
console.log("\n num2 is no equal to 5 and num2 is greater than 5");
console.log(num2 != 5 && num2 > 5);

console.log("\n num2 is not equal 5 and num2 is greater than 15");
console.log(num2 != 5 && num2 > 15);

//(||)
console.log("\n num2 is greater than num1 or num2 is not Equal to 10");
console.log(num2 > num1 || num2 != 10);

console.log("\n num2 is less than num1 or num2 is not Equal to 10");
console.log(num2 < num1 || num2 != 10);


//Test whether an item is in a array
console.log("\norange is include in my fruits array");
console.log(fruits.includes("orange"));

console.log("\nIs orange is not include in my fruits array");
console.log(!fruits.includes("orange"));












