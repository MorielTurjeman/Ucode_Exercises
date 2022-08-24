// Exercise 1+2


// const btn = "<button id='mybtn'> Add Human </button>"
// $("body").append(btn)



// const input = " <input id='input' type='text' placeholder='Heuman Name'>"
// $("body").append(input)




// $("#mybtn").on("click", function () {

//     $('#humanlist').append($('<li class="names">').text($('#input').val()))

// });




// $("#humanlist").on("click", ".names", function () {
//     $(this).remove()
// })



// Exercise 3



// const addDiv = function () {
//     $("body").append("<div class='box'></div>");

// };




// addDiv()
// addDiv()

// $(".box").hover(
//     function () {
//     $(this).css("background-color", "blue")
// }, function () { $(this).css("background-color", "#8e44ad") })




// Exercise 4


$(".post").on("click", function () {

  if ($(this).data('instock')) {
    $('#cart').append($('<div class="cart-item">').text(($(this).text())))

  }





});



// Exercise 5

const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" }
]


for (let fruit of fruits) {
  $("body").append($(`<div class='${fruit.color}'>`).text(fruit.name));
}



