// const add = function (a, b) {
//     return a - b
// }



// const calculateHyp = function (a, b) {
//     return (Math.sqrt(a * a + b * b))
// }

// module.exports = calculateHyp

// const removeBugs = function (code) {
//     return code.filter(c => c != "BUG")
// }

// module.exports = removeBugs


// const clearLowPriority = function (objArray) {
//     return (objArray.filter(p => p.priority != "LOW"))

// }

// module.exports = clearLowPriority



// class PictureManager {
//     constructor() {
//         this.pictureURLs = []
//     }

//     addPicture(picURL) {
//         this.pictureURLs.push(picURL)
//     }

//     removePicture(picURL) {
//         this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
//     }
// }

// module.exports = PictureManager


// class ArrayManipulator {
//     manipulate(arr1, arr2) {
//         let obj = {}
//         for (let i in arr1) {
//             obj[i] = arr2[i]
//         }
//         return obj
//     }
// }

// module.exports = ArrayManipulator




//=========================================================================================//
// EX-1




class Exercises {
    constructor() { }

    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    // EX-2
    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    //EX-3
    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    // EX-4
    //returns error if array not contain at least one boolean in the array and if there is more True then False in the array return True, else False
    validate(boolArr) {

        let newARR = boolArr.filter(c => typeof c === 'boolean')

        if (newARR.length == 0) {
            return (console.log("Need at least one boolean"));
        }

        let countF = 0
        let countT = 0
        for (let val of newARR) {
            if (val === 'True') {

                countT += 1
            }

            if (val === 'False') {
                countF += 1
            }

            return (countT >= countF ? true : false)
        }

    }


}

module.exports = Exercises


