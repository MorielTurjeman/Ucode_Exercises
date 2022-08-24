const header = $("h1")
console.log(header)



const myQuery = function (selector) {
    if (selector[0] == "#") {
        const elementId = selector.split("#")[1] //will return everything after the # in selector 
        return document.getElementById(elementId)
    }
}
console.log(myQuery("#my-h1"))



$("h1").css("color", "blue")
$(".red-div").css("color", "red")
$("li:first-child").css("color", "green")
$("li:last-child").css("color", "pink")
$("#brown-div").css("color", "brown")


$("#b1").addClass("box")
$("#b2").addClass("box")

$('#my-input').val("Terabyte")



const color = $("div").data().color
console.log(color) //prints #2980b9

///////////////////////////////////////////////////////////////
// spot-check5

// const id= document.getElementById("info")
// id.setAttribute("class", "info")

// const info = $("div")[6].data().



// console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate[1]) //notice how we use expirationdate, even though in the HTML it's expirationDate
// $('.action').data('actionMethod')
////////////////////////////////////////////////////////////

// $('button').on('click', function () {
//     alert('clicked!')
//   })

// //eql to each other

//   const clicked = function () {
//     alert('clicked!')
//   }

//   $('button').on('click', clicked)


// ///////////////////////////////////////////////////////////

// const clicked = function () {
//     alert('clicked!')
//   }

//   $('button').click(clicked)

// //eql

//   $('button').click(function () {
//     alert('clicked!')
//   })



// $('#b2').hover(function(){
//     $("#b2").css("background-color", "blue")

// })


// $('button').click(function () {
//         alert('clicked!')
// })


$('.box').hover(function(){
 $(this).css("background-color", "blue")})


$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

$(".feedme").on("click", function(){
     let divCopy = `<div class=feedme> ${$(this).text()} </div>`
     $("body").append(divCopy)
  })




  const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]

  for (let name of names) {
    $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
  }





$("#toremove").hover(function(){
    $("toremove").remove()
})

$("button").on("click", function () {

    $("#blogs").append('<div class="blog"> some text</div>')

})


$("#blogs").on("click", ".blog", function(){
    $(".blog").text("bblargh")

})

$("blogs").on("click", ".blog", function(){
    $(this).text("my-blog")
})




const addDiv = function() {
    $("body").append("<div class=box></div>");
  };
  
  $("button").on("click", function() {
    addDiv();
  });
  
  $("body").on("click", ".box", function() {
    alert("hi");
  });



  