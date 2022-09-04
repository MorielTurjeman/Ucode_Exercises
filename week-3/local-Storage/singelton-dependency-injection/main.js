
// localStorage.name = "Shoobert"
// console.log(localStorage.getItem('name'))

// localStorage.removeItem(name)
// localStorage.clear()


// let userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }


// //JS - Setting (all of these are valid)
// localStorage.userStorage = JSON.stringify(userStorage)
// localStorage.setItem('userStorage', JSON.stringify(userStorage))
// localStorage['userStorage'] = JSON.stringify(userStorage)

// //In the browser:
// let data = JSON.parse(localStorage.userStorage)
// data.cart[data.cart.length - 1].count


// localStorage.personalData = JSON.stringify({
//     averageTimeOnSite: { unit: "hr", amt: 9 },
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
// })

// let userStuff = JSON.parse(localStorage.personalData)

// console.log(userStuff.probabilityOfFriends) //prints 0.02


// let userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }

// //JS - Setting (all of these are valid)
// localStorage.userStorage = JSON.stringify(userStorage)
// localStorage.setItem('userStorage', JSON.stringify(userStorage))
// localStorage['userStorage'] = JSON.stringify(userStorage)

// //In the browser:
// let data = JSON.parse(localStorage.userStorage)
// data.cart[data.cart.length - 1].count



// EX-1

// const wisdom = []

// $("#btn").on("click", function () {
//     const input = $("#input").val()
//     $(".inputList").append($(`<li class="cart-item">${input}</li>`));
//     wisdom.push(input)
//     if (wisdom.length() % 2 == 0) {

//     }

// });




// // $(".inputList").append($('<li>')).text(`${input}`).text()
// localStorage.userStorage = wisdom.push(JSON.stringify(input))

// localStorage.name = wisdom


let wisdom = []
let input
// let texts = localStorage.wisdom || []


let inputTxt = JSON.parse(localStorage.wisdom || "[]")




if (inputTxt) {
    for (let a of inputTxt) {
        $("#info").append(`<div class="line-delete" data-id="${a.text}"><i class="fas fa-trash delete"></i><span>${a.text}</span></div>`)
    }
}


let isInside
let p
$("#app").on("click", function () {
    $("#info").empty()
    input = $("input").val()
    $("#info").append(`<div>${input}</div>`)
    wisdom.push({ "text": input })
    $("input").val("")


    if (!(wisdom.length % 2)) {
        if (localStorage.wisdom) {
            p = JSON.parse(localStorage.wisdom)
            for (let i in wisdom) {
                isInside = false
                for (let j in p) {
                    if (p[j].text === wisdom[i].text) {
                        isInside = true
                    }
                }
                if (!isInside) {
                    p.push(wisdom[i])
                }
            }
            localStorage.wisdom = JSON.stringify(p)
        } else {
            localStorage.wisdom = JSON.stringify(wisdom)
        }


    }
})


$("#ls-clear").on("click", function () {
    localStorage.removeItem("wisdom")
    $("#info").empty()
})


$("#info").on("click", ".delete", function () {
    $(this).closest(".line-delete").remove()


    let id = $(this).closest(".line-delete").data().id


    let storage = JSON.parse(localStorage.wisdom)


    for (let i in storage) {
        if (storage[i].text == id) {
            storage.splice(i, 1)
        }
    }


    localStorage.wisdom = JSON.stringify(storage)
})