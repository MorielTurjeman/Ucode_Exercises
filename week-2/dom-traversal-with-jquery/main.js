// $(".remove").on("click", function () {
//     alert($(this).closest(".post").data().id)
// })

// $('button').on('click', function () {
//     let relevantInputValue = $(this).closest("div").find("input").val()
//     alert(relevantInputValue)
// })


// spot check 1
$('button').on('click', function () {
    let relevantSpanValue = $(this).closest("div").find("span").text()
    console.log(relevantSpanValue);
})


// Spot Check 2

$('button').on('click', function () {
    let findMe = ($(".container").find("p").text())
    console.log(findMe);

})



// Exercises

// $('button').on('click', function () {
//     // let processor = ($(this).closest(".processor").attr('id'))
//     // console.log(`processor id: ${processor}`);
//     // let compId = $(this).closest(".computer").attr('data-id')
//     // const compIdArr = []
//     // compIdArr.push({ id: compId })
//     // console.log(compIdArr);
//     // let



// })
// When the generator button is clicked
$('.generator').on('click', function () {

    let processorId = $(this).closest(".processor").attr('id')
    console.log(processorId);
    let compId = $(this).closest(".computer").attr('data-id')
    console.log(compId);
    const compIdArr = []
    compIdArr.push({ id: compId })
    console.log(`computer id: ${compIdArr}`);
    console.log(compIdArr);
    let busNum = $(this).closest(".computer").find(".BUS").text()
    console.log(`Bus num: ${busNum}`);


    // When the validator button is clicked

})


$('.validator').on('click', function () {
    let genText = $(this).closest(".computer").find(".generator").text();
    console.log(genText)
    let mb = $(this).closest(".computer").find(".MB").text()
    console.log(mb);
    let firstQr = $(this).closest(".computer").find("span.QR").text();
    console.log(firstQr);




})

let x = "flap"
let y = { a: "shlop", x: "dub" }
const all = [x, y]

x = all[1].x
$("#corq").siblings(".nalo").append("<div>" + x + " - Ryk</div>")