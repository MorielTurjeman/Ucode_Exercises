console.log(document)
const playingField = document.getElementById("playing-field")
console.log(playingField)
const down = document.getElementById("down")
console.log(down)
console.log(down.innerHTML)
// down.innerHTML = "Down"
console.log(down.innerHTML)
console.log(playingField.innerHTML)
playingField.style.backgroundColor = "blue"
const ball = document.getElementById("ball")
ball.style.backgroundColor = "yellow"
// document.getElementById("ball").style.backgroundColor = "yellow"  //Another way to change the style like in line 12




    const header = document.createElement("h1")
    header.innerHTML = "The Best Game Ever"
    header.style.color = "#c0392b"
    header.style.fontFamily = "Helvetica"
    document.body.appendChild(header)

    const subHeader= document.createElement("h2")
    subHeader.innerHTML="You must try it!"
    subHeader.setAttribute("class", "subheader")
    document.body.appendChild(subHeader)


const moveRight = function () {

        let val = document.getElementById("ball").style.left
        val = (val == "" ? 0 : parseInt(val)) + 15
        document.getElementById("ball").style.left = val + "px"
    }


const moveLeft=function(){
    let val=document.getElementById("ball").style.left
    val = (val == "" ? 0 : parseInt(val)) - 15
    document.getElementById("ball").style.left = val + "px"
}

const moveTop= function(){
    let val = document.getElementById("ball").style.top
    val = (val == "" ? 0 : parseInt(val)) - 15
    document.getElementById("ball").style.top = val + "px"

}


const moveDown= function(){
    let val = document.getElementById("ball").style.top
    val = (val == "" ? 0 : parseInt(val)) + 15
    document.getElementById("ball").style.top = val + "px"

}
// box.setAttribute("class", "box")
// box.onclick = function(){       // adding an event to the new element
//     box.innerHTML = "I'm alive!"
// }