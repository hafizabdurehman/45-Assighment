
//Q42) Great Magicians: Start with a copy of your program from Exercise 39. 
//    Write a function called make_great() that modifies the array of magicians by adding the phrase the Great 
//    to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// Define function to show magician name
function show_magicians (magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// Define function to modify array's value
function make_great (magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

//  Define array of magician names
let magician_names = ["Harry Houdini", "David Blaine", "Dynamo", "Penn Jillette", "Teller"];


// call modify function in a variable
let great_magicians = make_great(magician_names);

show_magicians(great_magicians);


