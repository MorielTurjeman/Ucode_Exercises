// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function (result) {
//     console.log(result)
// })


// $.get("https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind", function (result) {
//     console.log(result)
// })

//request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function (users) {
//extract the geo data of the first user

// let lat = users[0].address.geo.lat
// let long = users[0].address.geo.lng
// let catchPhrase = users[users.length - 1].company.catchPhrase


// log the data
//     console.log(`${lat}, ${long}, ${catchPhrase}`) //prints -37.3159, 81.1496
// })

// const useData = function (data) {
//     console.log(data);
// }


// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData()
// });


// const fetch = function () {
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

//==========================================================================================
// EX-1


// const getData = function (data) {
//     console.log(books.items)

// }


// const fetch = function (isbn) {
//     console.log(isbn)
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch(9782806269171);

//=========================================================================================
// Ex - 2
// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("isbn", 9789814561778)
// fetch("title", "The Wise Man's Fears")


//====================================================================================
// EX-3




const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            console.log(data)
            data.items.forEach(item => console.log(`${item.volumeInfo.title} ,${item.volumeInfo.author} ,${item.volumeInfo.industryIdentifiers[0].identifier}`))
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch("isbn", 9789814561778)
fetch("title", "The Wise Man's Fears")


