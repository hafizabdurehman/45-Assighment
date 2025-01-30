
//Q45) Cars: Write a function that stores information about a car in a Object. 
//    The function should always receive a manufacturer and a model name. 
//   It should then accept an arbitrary number of keyword arguments.
//   Call the function with the required information and two other name-value pairs, 
//   such as a color or an optional feature.
//   Print the Object that’s returned to make sure all the information was stored correctly.



// Define a function to create a car with optional options
function create_car (manufacturer, model, ...options){

    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer:manufacturer,
        model:model
    };

    // add additional options to the car object
    options.forEach(option => {
        let [key,value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
}

// call a function to create a car object
let car_Info = create_car("Toyota","Corolla","Color:Black","Sunroof:True","Year:2024");

console.log(car_Info);

