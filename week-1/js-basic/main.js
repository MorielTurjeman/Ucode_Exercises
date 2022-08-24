
// js-basic:

// ex- Conditional Statements

let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase <= 4) {
        console.log("Would you like an upgrade?")
    }
    else {
        console.log("are you satisfied with your car?")
    }
}

if (boughtTesla && !isUSCitizen) {
    console.log("Would you like to move to the US?")
}

if (!boughtTesla) {
    console.log("Would you like to buy one?")
}



// ex-1 Arrays
// ****************************************
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.splice(1, 2)
let removed = numbers.splice(6, 4)
// console.log(removed)
numbers[3] = 1
numbers.splice(0, 0, 0);
console.log(numbers)


// Objects
// ***************************************

// Ex-1 
let p1 = {
    name: "Jill",
    age: 33,
    city: "Tel aviv"

}

let p2 = {
    name: "Robert",
    age: 80,
    city: "Tel aviv"
}

if (p1.age == p2.age) {
    if (p1.city == p2.city) {
        console.log("Jill wanted to date Robert")
    }

}
  
else {
    console.log("Jill wanted to date Robert, but couldn’t")
}


// EX-2


const library = {
    books: [
        { title: "Lion king", author: "Disney" },
        { title: "Snow White", author: "Grimm" },
        { title: "Harry Potter", author: "JK Rolling" }
    ]
}


//EX-3
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }

//   const name = prompt('Please enter the name for your reservation');

//   if(reservations[name] && !reservations[name].claimed) {
//     alert("Welcome in, " + name)
//   } else if (reservations[name] && reservations[name].claimed){
//     alert("Hmm, someone already claimed this reservation")
//   } else if (!reservations[name]) {
//     alert("You have no reservation")
//   }   
//     console.log(reservations)


// // EX-3.1
// if(reservations[name] && !reservations[name].claimed) {
//     alert("Welcome in, " + name)
//     } else if (reservations[name] && reservations[name].claimed){
//     alert("Hmm, someone already claimed this reservation")
//     } else if (!reservations[name]) {
//     alert("You have no reservation")
//     reservations[name] = {claimed: true} 
//     }   
//     console.log(reservations)


//     // EX-3.2
//     const reservations = {
//         Bob: { claimed: false },
//         Ted: { claimed: true }
//         }

//         const name = prompt('Please enter the name for your reservation');

//         const lowerCaseName = name.toLowerCase()

//         const editedName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)
//         if(reservations[editedName] && !reservations[editedName].claimed) {
//         alert("Welcome in, " + editedName)
//         } else if (reservations[editedName] && reservations[editedName].claimed){
//         alert("Hmm, someone already claimed this reservation")
//         } else if (!reservations[editedName]) {
//         alert("You have no reservation")
//         }   
//         console.log(reservations)
//******************************* */
// Loops:

// EX-1
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i in names) {

}
let x = [{ human: { name: 'Daena', age: 31 } }][0].age
console.log(x)



// EX-3
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]








// const isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }


// greet() //works without a problem
// greetExpression() //throws an error

// function greet(){
//   console.log("Hello there, from the wild, wild West")
// }

// const greetExpression = function(){
//   console.log("Uh oh")
// }


