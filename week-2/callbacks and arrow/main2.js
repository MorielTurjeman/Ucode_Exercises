// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)
// displayData()

///////////////////////////////////////////////////////////////////////////////////////

// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument

/////////////////////////////////////////////////////////////////////////////////////////

// Rewrite the following without the variable:
// const timer = function(){
//     console.log(new Date())
//   }

// //   solution:
//   setInterval(function(){console.log(new Date())}, 1000)

//////////////////////////////////////////////////////////////////////////////////////////

// Create an arrow function called square that receives a number and console logs its square.

// const sqr= num=>console.log(num*num)

// sqr(4)

//////////////////////////////////////////////////////////////////////////////////////////
// Write an arrow function called getFormalTitle
// 1. It should take two parameters: title, name
// 2. It should return the concatenation of those parameters


//returns "Maddame Lellouche"

// const getFormalTitle = (title, fname) => title + " " + fname
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) 
//////////////////////////////////////////////////////////////////////////////////////////////

// Exercise 1 - Callbacks



// const pushPull = function (callback) {
//     callback()

// }


// const push = function () {
//     console.log("pushing it!")
// }

// const pull = function () {
//     console.log("pulling it!")
// }

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise 2 - Callbacks


// const getTime= function(callback){
//     const time= new Date()
//     callback(time)



// }




// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }

//   getTime(returnTime)


//   Exercise 3 - Callbacks
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const logData = console.log
displayData(alert, logData, "I like to party")




//Exercise 4 - Arrow Functions
const add = (x, y, z) => { return x + y + z }

add(1, 2, 3)

// Exercise 5 - Arrow Functions
const capitalize = function (str) {
    // console.log(str)
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

}
capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia



// Exercise 6 - Arrow functions

const commentOnWeather =temp =>function(){
    'its'+ determineWeather(temp)

}


const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }