// const { default: test } = require('node:test')
// const calculateHyp = require('./code')
// const add = require('./code')

// test("add should return sum of a + b", () => {
//     let sum = add(1, 2)
//     expect(sum).toBe(3)
// })


// test("calculateHyp should return the square root of the sum of the numbers squares", () => {
//     let res = calculateHyp(3, 4)
//     expect(res).toBe(5)
// })



// test("should remove all BUGs from list of code", () => {
//     let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
//     let bugFreeCode = removeBugs(code)
//     expect(bugFreeCode).not.toContain("BUG")
// })

const Exercises = require('./code')
// const clearLowPriority = require('./code')
// const removeBugs = require('./code')

// test("should remove all BUGs from list of code", () => {
//     let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
//     let bugFreeCode = removeBugs(code)

//     expect(bugFreeCode).not.toContain("BUG")
//     expect(bugFreeCode).toContain("good code") //this is just an example, there are other ways to check
// })




// test("should return a new array with only “HIGH” priority items", () => {
//     let obj = [{
//         "text": "clean dishes",
//         "priority": "HIGH"
//     },


//     {
//         "text": "make food",
//         "priority": "LOW"
//     },

//     {
//         "text": "Take Mitzi to the vet",
//         "priority": "LOW"
//     },
//     {
//         "text": "Go to the SuperMarket",
//         "priority": "HIGH"
//     }]

//     let res = clearLowPriority(obj)
//     res.forEach(r => {
//         expect(r.priority).toBe("HIGH")

//     })

// })




// test("addPicture should add a picture URL to the pictureURLs array", function () {
//     //sanity 
//     const picManager = new PM()
//     expect(picManager.pictureURLs.length).toBe(0)

//     picManager.addPicture("some_url")
//     expect(picManager.pictureURLs.length).toBe(1)           //test
//     expect(picManager.pictureURLs).toContain("some_url")    //double check 
//     expect(picManager.removePicture).not.toContain("some_url")
// })


// test("manipulate  shuld return an object: the object’s keys and values should be based off the values in the first and second array", function () {
//     let key = ["food", "item", "location"]
//     let value = ["cherry", "lightbulb", "Tazmania"]
//     let res = ArrayManipulator.manipulate(key, value)
//     expect(res).toEqual({
//     {
//             food: "cherry",
//             item: "lightbulb",
//             location: "Tazmania"



//         })

// })


// test("should return a message when array lengths don't match", () => {
//     let x = ["food", "item", "location"]
//     let y = ["cherry", "lightbulb"]

//     let result = arrayManipulator.manipulate(x, y)

//     expect(result).toEqual({ error: "Array lengths don't match" })
// })

//============================================================================================================================================================//
// EX-1

test("should return true if n is even, false otherwise", () => {
    let res = new Exercises

    expect(res.isEven(2)).not.toBeFalsy()

})


//=======================================================================================//
// EX-2

test("should remove at least one element from the array `arr`", () => {
    let remove = new Exercises
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    len = arr.length
    expect(remove.removeAtLeastOne(arr).length).not.toEqual(len)



})


//====================================================================================//
//EX-3

test(`should return a clean string without these symbols: "!", "#", ".", ",", "'" `, () => {

    let cleanString = new Exercises
    let string = "blabkabka!kdfjskdf#"
    let symbols = ["!", "#", ".", ",", "'"]

    expect(cleanString.simplify).not.toContain(symbols)
})

//=============================================================================================//
// EX-4
//returns error if at least one boolean in the array and if there is more True then False in the array return True, else False

test("returns error if not conatin at least one boolean in the array and if there is more True then False in the array return True, else False", () => {

    let valid = new Exercises
    let arr = [true, true, false]
    let emptyArr = []
    expect(valid.validate(arr)).toBeTruthy()
    expect(valid.validate(emptyArr)).toBeFalsy()


})

