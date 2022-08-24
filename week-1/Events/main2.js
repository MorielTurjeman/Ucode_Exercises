// const box = document.getElementById("box")

// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }

// const onClick=function(){
//     box.style.backgroundColor="#8e44ad"
    
// }

// const list=document.createElement("ul")
// list.setAttribute("class", list)
// list.innerHTML="HERE!"
// document.body.appendChild(list)
// const listItem=document.createElement("li")
// listItem.innerHTML="Milk"
// listItem.innerHTML="Milk"
// listItem.setAttribute("class", listItem)
// document.body.appendChild(listItem)
// const list= document.getElementById("list")

// const addLiOnClick= function(){
//     const listItem=document.createElement("li")
//     listItem.innerHTML="NEW Item!"
//     document.body.appendChild(listItem)

// }

// const box = document.getElementById("box")
// box.onclick = function () {
//     box.innerHTML = "clicked"
// }

// box.onmouseenter=function(){
//     box.style.backgroundColor= "#8e44ad"

// }
const box = document.createElement("div") // dynamically creating an element

box.setAttribute("class", "box")
box.onclick = function(){       // adding an event to the new element
    box.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(box)