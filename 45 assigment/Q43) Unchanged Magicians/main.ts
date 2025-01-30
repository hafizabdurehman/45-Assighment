
// Q43) Unchanged Magicians: Start with your work from Exercise 42. 
//      Call the function make_great() with a copy of the array of magicians’ names. 
//      Because the original array will be unchanged, return the new array and store it in a separate array.
//      Call show_magicians() with each array to show that you have one array of the original names 
//      and one array with the Great added to each magician’s name.



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

// making a copy of original array through .slice() function
let copy_magician_names = magician_names.slice();

// modify the copy array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);

// show both arrays original & copied

// original array
console.log("Orignal Array:");
show_magicians(magician_names);

console.log("\n");


// copied array
console.log("Copied Array:");
show_magicians(copy_great_magicians);