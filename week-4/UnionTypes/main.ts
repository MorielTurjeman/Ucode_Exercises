// const concat = (val1: string | string[], val2: boolean | number) => {
//     if (Array.isArray(val1)) {
//         val1 = val1.concat('', val1)
//     }
//     else if (typeof val1 !== 'string') {
//         console.log(`Function doesn't support type ${typeof val1}`);
//     }


//     if ((typeof val2 === 'boolean' && val2) || (typeof val2 === 'number' && val2 === 1)) {
//         console.log(val1)
//     }
//     else if ((typeof val2 !== 'boolean') || (typeof val2 === 'number' && val2 === 0)) {

//         console.log(`Function doesn't support type ${typeof val2}`);
//     }

// }


// concat("Avi", false);
// concat("Avi", 1);
// concat(["Avi", "Maya"], 1);
// concat(["Avi", "Maya"], 0);
// concat(["Avi", "and", "Maya", "are", "the", "best"], true);







//EX-2
type typesOfPhoneNumbers = string | string[] | number | number[];

function print_numbers(phoneNum: typesOfPhoneNumbers): void {
    if (Array.isArray(phoneNum)) {
        console.log(`The type of phoneNum is array+numbers: ${phoneNum}`)
    }
    else if (typeof phoneNum === 'string') {
        console.log(`The type of phoneNum is string: ${phoneNum}`)
    }
    else if (typeof phoneNum == 'number') {
        console.log(`The type of phoneNum is number: ${phoneNum}`)
    }
    else if (typeof phoneNum === ) {

    }




}















    // else if (typeof phoneNum === 'number') {
    //     console.log(`The type of phoneNum is number: ${typeof phoneNum}`)

    // }

    // else if (typeof phoneNum === 'string') {
    //     console.log(`The type of phoneNum is string: ${typeof phoneNum}`)

    // }



}

print_numbers("0521231122111111111111111") //string
print_numbers(["0521231122", "052321223333333"])
print_numbers(972521231122)
print_numbers([972521231122, 972523212211])