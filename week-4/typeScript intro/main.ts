

// let id: number = 5;
// let firstname: string = 'danny';
// let hasDog: boolean = true;


// let ids: number[] = []

// ids.push(1)





// // class Person {
// //     name: string;
// //     isProgrammer: boolean;
// //     children: number;

// //     constructor(n: string, c: boolean, p: number) {
// //       this.name = n;
// //       this.isProgrammer = c;
// //       this.children = p;
// //     }

// //     sayHello() {
// //       return `Hi, my name is ${this.name} and I have ${this.children} children`;
// //     }
// //   }

// //   const person1 = new Person('John', false, 2);
// //   const person2 = new Person('Michael', 'yes', 4); // ERROR, Argument of type 'string' is not assignable to parameter of type 'boolean'.

// //   console.log(person1.sayHello()); // => Hi, my name is John and I have 1 children

// //=====================================================================================================================

// // EX-1

// function sum(arr: number[]): number {
//     let sum = arr.reduce((prev, curr) => prev + curr)
//     return sum
// }

// const isEven = (num: number): boolean => {
//     if (num % 2 === 0) return true
//     else return false
// }


// const numArray1: number[] = [4, 7, 44, 5, 234];
// const numArray2: number[] = [65, 33, 5, 2532, 32, 6];
// const numArray3: number[] = [54, 6, 656, 4];

// let res1 = sum(numArray1)
// console.log("sum1:", res1)
// console.log("is even?", isEven(res1))



// // EX - 2

// class Student {
//     name: string;
//     age: number;
//     grades: number[];
//     constructor(name: string, age: number, grades: number[]) {
//         this.name = name;
//         this.age = age;
//         this.grades = grades

//     }

//     getGrade(grade: number) {
//         this.grades.push(grade)
//     }
//     getAvgGrade() {
//         const avg = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
//         return avg
//     }

// }

// const s1 = new Student("Avi", 12, [60, 70, 80])
// const s2 = new Student("May", 14, [99, 90, 100])
// const s3 = new Student("Ron", 13, [61, 91, 98])


// const students: Student[] = [s1, s2, s3];

// students.forEach(student => {
//     console.log(`${student.name}: ${student.getAvgGrade()}`)
// });


