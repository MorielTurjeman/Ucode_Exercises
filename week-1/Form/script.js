// const box = document.createElement("div")
// box.setAttribute("class", "box")

const fname = document.getElementById("fname")
const salary = document.getElementById("salary")
const bday = document.getElementById("bday")
const phone = document.getElementById("num")


const ValidateSubmitions = function () {

    if (fname.value.length <= 2) {
        if (salary.value < 10000 || salary.value > 16000) {
            console.log("Salary must be greater than 10,000 but less than 16,000")
            if (bday.value=='') {
                console.log("Birthday is required")
                if (num.value.length < 10) {
                    console.log("Phone number must be 10 digits")
                }
            }
        }
    }

    else {
        console.log(`welcome ${fname.value}`)
    }

}



const submit = document.getElementById("submit")
submit.onclick = function () {
    ValidateSubmitions()
}