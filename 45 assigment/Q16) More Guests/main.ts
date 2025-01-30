
//16) More Guests: You just found a bigger dinner table, so now more space is available.
//    Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15.
//  Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.

let moreGuestList = ["Maryam", "Insiya", "Sakina", "Nafisa"];
console.log(`${moreGuestList[1]} is not coming`);

moreGuestList.splice(1,1, "Maria")

console.log(`Hey everyone! we have found bigger dinner table.lets call somemore guests`);
moreGuestList.unshift("Fatema")

moreGuestList.push("Tahira")

let middleGuest: number = Math.floor(moreGuestList.length/2);
moreGuestList.splice(middleGuest,0,"Zara");

moreGuestList.forEach((moreInvitation)=>
console.log(`Hey ${moreInvitation}, I'd love to catch up over dinner!
    How about joining me for a delicious meal this "Saturday" at "8:00pm" at "BBQ TONIGHT". Let me know if you're free!`)
);
