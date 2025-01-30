//Q44) Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//     The function should have one parameter that collects as many items as the function call provides, 
//     and it should print a summary of the sandwich that is being ordered. Call the function three times,
//      using a different number of arguments each time.
// difine a fuction with rest parameters
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy Sandwich!");
}
// call the function 3 times with 3 different arguments
make_sandwich("Bread", "Mayo", "Egg", "Chicken", "Cheese");
make_sandwich("Bread", "Lettuce", "Chicken", "Tomatoes", "Cheese");
make_sandwich("Bread", "Butter", "Potatoes", "Onion", "Chicken", "Egg", "Mayo", "Cheese");
