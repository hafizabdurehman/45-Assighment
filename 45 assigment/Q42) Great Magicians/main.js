//Q42) Great Magicians: Start with a copy of your program from Exercise 39. 
//    Write a function called make_great() that modifies the array of magicians by adding the phrase the Great 
//    to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define function to show magician name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define function to modify array's value
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//  Define array of magician names
var magician_names = ["Harry Houdini", "David Blaine", "Dynamo", "Penn Jillette", "Teller"];
// call modify function in a variable
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
