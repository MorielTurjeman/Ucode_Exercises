

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }


 const name= document.getElementById("name").value

const checkReservation =function(name){

    if(reservations[name]){
        
        if (!reservations[name].claimed){
            alert(`Welcome ${name}`)
        }
        else{
            alert(`Im sorry ${name} but your reservation is already claimed`)

        }
      

    }
    else{
        alert(`Im sorry but there is no reservation under the name ${name}`)

    }


}


const submit= document.getElementById("submit")
submit.onclick= function(){
    const name= document.getElementById("name").value
    checkReservation(name)
}