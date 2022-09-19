// Exercise 1

function sum<Type>(num: Type): number {
    let sum = 0
    if (typeof num === 'number') {
        console.log("single num:", num)
        return num;
    }
    if (typeof num == 'string') {
        const parsedStr1 = parseInt(num)
        if (!isNaN(parsedStr1)) {
            console.log("single string:", num)
            return parsedStr1
        }


    }
    else if (Array.isArray(num)) {
        // num.forEach(element => {
        //     // sum += getVal(element)

        let sum = num.reduce((a, b) => getVal(a) + getVal(b), 0);
        return sum

        // });


    }
    return -1;
    // else { ((isNaN(num) === 'false') ? 0 : -1) }

}

function getVal<Type>(value: string | number): number {
    if (typeof value == 'string') {
        const parsedStr = parseInt(value)
        if (!isNaN(parsedStr)) {
            return parsedStr
        }
        else return -1

    }
    return value;


}

console.log(sum(2));
console.log(sum("blabla"));
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum(["a", "b"]));
console.log(sum(["1", "2"]));




//EX-2

class Numbers<Type> {
    numbers: Type[];

    constructor(numbers: Type[]) {
        this.numbers = numbers;
    }

    addNum(number: Type): void {
        this.numbers.push(number);
    }

    sum(): number {
        let res: number = 0;
        this.numbers.forEach(e => {
            if (typeof e === 'string' || typeof e === 'number') {
                res += this.getNumValue(e)
            }
        });
        return res;
    }

    getNumValue(val: string | number): number {
        if (typeof val === 'string') {
            const num: number = parseInt(val);
            return !isNaN(num) ? num : 0;
        } else {
            return val;
        }
    }
}

const numbers1: Numbers<string> = new Numbers<string>(["test", "22"]);
numbers1.addNum("55");
numbers1.addNum("block");
numbers1.addNum("9");

const numbers2: Numbers<number> = new Numbers<number>([23]);
numbers2.addNum(433);
numbers2.addNum(11);