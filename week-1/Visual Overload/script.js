
const container= document.getElementById("container")

const getRandColor=function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#"+randomColor

}
const setColor= function(){
    return this.style.backgroundColor=getRandColor()
}
const createBox=function(){
    console.log('here')
    for (let i=0; i<10; i++){
        const box=document.createElement("div")
        box.setAttribute("class", "box")
        box.onmouseenter=setColor
        container.appendChild(box)
    }
    
}





createBox()



document.getE