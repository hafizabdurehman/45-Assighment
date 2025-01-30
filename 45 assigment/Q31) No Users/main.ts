
// Q31) No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let userNames = ["Fatima","Sakina","Maria","Admin","Zainab"];
userNames = [];

if(userNames.length === 0){
    console.log("Your Array is Empty We need to find some users!");   
}else{
    userNames.forEach(oneuser =>{
        if(oneuser === "Admin"){
            console.log(`Hello ${oneuser}, would you like to see a status report?`); 
        }else{
            console.log(`Hello ${oneuser}, thank you for logging in again.`);   
        }
    })
}
