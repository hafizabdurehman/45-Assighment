
//Q17) Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//     and you have space for only two guests.

//• Start with your program from Exercise 16.
//   Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. 
//  Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.

let shrkGuestList = ["Maryam", "Insiya", "Sakina", "Nafisa"];
console.log(`${shrkGuestList[1]} is not coming`);

shrkGuestList.splice(1,1, "Maria")

console.log(`Hey everyone! we have found bigger dinner table.lets call somemore guests`);
shrkGuestList.unshift("Fatema")

shrkGuestList.push("Tahira")

let middleGuest: number = Math.floor(shrkGuestList.length/2);
shrkGuestList.splice(middleGuest,0,"Zara");

shrkGuestList.forEach((moreInvitation)=>
console.log(`Hey ${moreInvitation}, I'd love to catch up over dinner!
    How about joining me for a delicious meal this "Saturday" at "8:00pm" at "BBQ TONIGHT". Let me know if you're free!`)
);

console.log("Unfortunately,new dinner table won't arrive in time for the dinner.so I have space for only 2 guest for dinner");
while(shrkGuestList.length > 2){
let removeGuest = shrkGuestList.pop();
console.log(`Sorry ${removeGuest} I can't invite you for dinner`)
}
console.log("Invitation to the last 2 guests");
shrkGuestList.forEach(guestInvitation => console.log(`Hey ${guestInvitation} you're still invited for dinner`))

shrkGuestList.pop();
shrkGuestList.pop();

console.log(shrkGuestList, "Empty list");

