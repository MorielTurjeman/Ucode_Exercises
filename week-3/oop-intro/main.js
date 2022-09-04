// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.childern = []

//     }
//     giveBirth(name) {
//         this.childern.push(name)
//     }


// }

// const cat = new Animal("Mitzi", 4)
// cat.giveBirth("Dolly")
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿

// class Human {
//     constructor(name, age, isFriendly) {
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//     }
// }


// const h1 = new Human("Moshe", 50, false)
// console.log(h1)

// class Vehicle {
//     constructor(x, y, speed) {
//         this.x = x;
//         this.y = y;
//         this._speed = speed;
//         Vehicle.carsSold++;
//         this._fuel = fuel


//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");

//     }
//     static calculateMoney() {
//         console.log("Made " + 30000 * Vehicle.carsSold + " dollars");
//     }

//     set speed(speed) {
//         if (speed < 0) {
//             return console.log("Speed must be positive")
//         }
//         this._speed = speed
//     }

//     get speed() {
//         return this._speed
//     }

//     set fuel(val) {
//         if (fual < 0 && fuel > 150) {
//             return console.log("faul must be between 0 to 150")
//         }
//         this._fuel = val
//     }

//     get fual() {
//         return this._fuel
//     }

// }

// Vehicle.carsSold = 0;


// const v1 = new Vehicle("1", "2", "2000")
// const v2 = new Vehicle("3", "3", "3000")

// Vehicle.getInfo()
// Vehicle.calculateMoney()

// const c = new Vehicle()
// c.x = 3
// c.y = 1
// c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
// console.log(c.speed) // prints undefined
// c.speed = 14
// console.log(c.speed)
// c.fual = -2
// console.log(c._fuel)


class Trip {
    constructor(destination, date) {
        this.dest = destination
        this.date = date
        this.plan = []
    }
}

let t = Trip("Guadalupe", new Date())