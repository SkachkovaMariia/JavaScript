const carsArray = [
    {
        ownerName: "Jane Smith", 
        modelName: "Honda Civic", 
        engineVolume: 2.8
    },
    {
        ownerName: "Mike Johnson",
        modelName: "Ford Mustang",
        engineVolume: 3.0
    },
    {
        ownerName: "Emily Brown",
        modelName: "Chevrolet Malibu",
        engineVolume: 2.0
    },
    {
        ownerName: "Alex Wilson",
        modelName: "Nissan Altima",
        engineVolume: 2.2
    }
];

let minEngineCar = carsArray[0];
for(let i = 0; i < carsArray.length; i++) {
    if (carsArray[i].engineVolume < minEngineCar.engineVolume) {
        minEngineCar = carsArray[i];
    }
}

console.log("Машина з мінімальним об'ємом двигуна:");
console.log("Ім'я власника:", minEngineCar.ownerName);
console.log("Назва моделі:", minEngineCar.modelName);
console.log("Об'єм двигуна:", minEngineCar.engineVolume);