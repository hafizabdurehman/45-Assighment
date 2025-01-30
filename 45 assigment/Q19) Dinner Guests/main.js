//Q19) Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//     print a message indicating the number of people you are inviting to dinner.
// Working with Exercise 14
var guestList = ["Maryam", "Nafisa", "Zara"];
/*guestList.forEach((invitation)=>
console.log(`"Hey ${invitation}, I'd love to catch up over dinner!
    How about joining me for a delicious meal this "Saturday" at "8:00pm" at "BBQ Tonight".Let me know if you're free!`));*/
var totalGuests = guestList.length;
console.log("I have invited total ".concat(totalGuests, " guests for dinner."));
