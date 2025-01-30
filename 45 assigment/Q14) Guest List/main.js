//Q14) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//     Make a list that includes at least three people you’d like to invite to dinner.
//     Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Maryam", "Nafisa", "Zara"];
guestList.forEach(function (invitation) {
    return console.log("\"Hey ".concat(invitation, ", I'd love to catch up over dinner!\n    How about joining me for a delicious meal this \"Saturday\" at \"8:00pm\" at \"BBQ Tonight\".Let me know if you're free!"));
});
