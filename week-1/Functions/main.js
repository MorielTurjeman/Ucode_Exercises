// EX-1 
const isEven=function(array1){
    for (let i in array1){
        if (array[i]%2==0){
            console.log(array[i])
        }


    }
    
}

const array1=[4,20,15,2,17,5];
isEven(array1)


// EX-2
const isNotEven=function(array){
    for (let i in array){
        if (array[i]%2!==0){
            console.log(array[i])
        }


    }
    
}

const array=[4,20,15,2,17,5]
isNotEven(array)


// EX-3
const numInArr=function(arr, num){
    for(let i in arr){
        if (num===arr[i]){
             console.log("True")
             return
        }
        else{
            continue
        }
    }

    
  
}

const arr=[1,2,3,4,5,6]
let num= 5
numInArr(arr, num)

// EX-4
const calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)

//EX-5
const makeRegal = function(name) {
    return "His Royal Highness, " + name
  }
      
  const increaseByNameLength = function(money, name) {
    return name.length * money
  }
      
  const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)
    console.log(name + " has " + money + " gold coins")
  }
      
  turnToKing("martin luther", 100)