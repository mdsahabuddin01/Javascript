// Create an Object
const car = {
    name: "fiat",
    model: "500",
    wight: "5000kg",
    color: "blue",
    start: function() {
        console.log("Car is starting");
    },
    drive: function() {
        console.log("Car is driving");
    },

  };

console.log(car.name);
console.log(car['model']);

car.start();

