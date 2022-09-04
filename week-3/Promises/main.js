// $.get('/randomWord'){
//     then.function(word)
//     {
//         console.log(word);


//     }
// };


// let p = $.get(`/sentiment/Ploy`)
// p.then(function (word) {
//     console.log(p)

// })


// EX-1

// $.get(`https://random-word-api.herokuapp.com/word`)
//     .then(function (randWord) {
//         console.log("rand:", randWord)
//         // console.log("word:", word)
//         let book = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${randWord}`)
//         Promise.all([randWord, book])
//             .then(function (res) {
//                 console.log("the random word is:", randWord)
//                 if ("items" in res[1]) {
//                     console.log("the book name with the ransom word is:", res[1].items[0].volumeInfo.title)
//                 }
//                 else {
//                     console.log(`could not find a book with the word ${randWord}`)
//                 }
//             })

//     })




// EX-2





let f = $.get(`https://random-word-api.herokuapp.com/word`)
    .then(function (randWord) {
        console.log("rand:", randWord)
        // console.log("word:", word)
        let gif = $.get(`https://api.giphy.com/v1/gifs/search?api_key=4hHrdtOj56I0u9IzxkxPRJu79Bjb2R2j&q=cat`)
        Promise.all([randWord, gif])
            .then(function (res) {
                $("body").append($(`<div class='word'>`).text(`${randWord}`))
                console.log(res[1])
                if ("data" in res[1])
                    $("body").append($`<a href="${res[1].data[0].url}"></a>`)
                console.log(res[0].data[0].url)


                console.log("the random word is:", randWord)

            })

    })



console.log("f:", f)




// if ("items" in res[1]) {
//     console.log("the book name with the ransom word is:", res[1].items[0].volumeInfo.title)
// }
// else {
//     console.log(`could not find a book with the word ${randWord}`)
// }

let x = $.get('/randomWord')
console.log(x)