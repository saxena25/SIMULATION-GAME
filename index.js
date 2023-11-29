function createVehicle(brand,model,speed,fueltype){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fueltype = fueltype;
}

createVehicle.prototype.accelerate = function(){
    this.speed += 20;
    console.log(`${this.brand} is Accelerating`);
}

createVehicle.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.brand} has appling brakes, now the speed is ${this.speed}`);
}

createVehicle.prototype.refuel = function(){
    console.log(`Vehicle is Refueling`);
}

function car(brand,model,speed,fueltype,noofwheels){
    createVehicle.call(this,brand,model,speed,fueltype);
    this.noofwheels = noofwheels;
}

Object.setPrototypeOf(car.prototype,createVehicle.prototype);

function airplane(brand,model,speed,fueltype,noofengines,haslandinggear,noofwheels){
    createVehicle.call(this,brand,model,speed,fueltype);

    this.haslandinggear = haslandinggear;
    this.noofengines = noofengines;
    this.noofwheels = noofwheels;
}

Object.setPrototypeOf(airplane.prototype,createVehicle.prototype);

airplane.prototype.takeoff = function(){
    console.log(`${this.brand} is Taking Off at the Speed of ${this.speed}`);
}

let car1 = new car('Mahindra',2023,30,'Petrol',4);
let flight = new airplane('Vistara',2018,299,'Jetfuel',2,true,6);

car1.accelerate();
car1.accelerate();
car1.brake();
car1.refuel();
console.log(car1);

flight.takeoff();
console.log(flight);

