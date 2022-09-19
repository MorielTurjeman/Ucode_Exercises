"use strict";
// const concat = (val1: string | string[], val2: boolean | number) => {
//     if (Array.isArray(val1)) {
//         val1 = val1.concat('', val1)
//     }
//     else if (typeof val1 !== 'string') {
//         console.log(`Function doesn't support type ${typeof val1}`);
//     }
function print_numbers(phoneNum) {
    if (Array.isArray(phoneNum)) {
        console.log(`The type of phoneNum is array+numbers: ${phoneNum}`);
    }
    else if (typeof phoneNum === 'string') {
        console.log(`The type of phoneNum is string: ${phoneNum}`);
    }
    else if (typeof phoneNum == 'number') {
        console.log(`The type of phoneNum is number: ${phoneNum}`);
    }
    else if (typeof phoneNum === '[string]') {
    }
}
print_numbers("0521231122111111111111111"); //string
print_numbers(["0521231122", "052321223333333"]);
print_numbers(972521231122);
print_numbers([972521231122, 972523212211]);
