console.log("Hello World")

let numberOfFaculty = 4;
let numberOfManagement = 3;
let numberOfAbsentFaculty = 2;
console.log(numberOfFaculty + numberOfManagement - numberOfAbsentFaculty)

let numberOfTotalFaculty = numberOfFaculty * 21;
console.log(numberOfTotalFaculty)

let TotalnumberOfkg = 30;
let distibution =  TotalnumberOfkg / numberOfTotalFaculty;
console.log(distibution)



let num1 = 5;
++num1; //6
++num1; //7
++num1; //8
++num1; //9
++num1; //10
console.log(num1)


let num2 = 5;
--num2; //4
++num2; //5
--num2; //4
++num2; //5
--num2; //4
console.log(num2)

let num3 = 5;
--num3; //4
--num3; //3
--num3; //2
--num3; //1
--num3; //0
console.log(num3)

let i = 10;
//            11 + 12  + 6 + 11  - 2 = 38
let result = ++i + ++i + 6 + --i - 2;
console.log(result);

let j = 10;
           //   9 +  10 +  9  + 19 + 10  - 11  - 7 + 12
let result1 = --j + ++j + --j + 19 + ++j - ++j - 7 + ++j
console.log(result1)


let firstName = "umer";
let age = 18;

// console.log("My Name is" + firstName + " " + "and my age is" + age);
console.log(`My name is: ${firstName} and my age is: ${age}`);




let weightInKg = 70; //70kg
let heightInMeters = 1.75; //1.75m
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(`The value of bmi is ${bmi}`);
 


                                //   Asseignment Operator
// let naam:string = "Umer";
let number1:number = 6;
number1 += 4;
// number1 -= 5;
console.log(number1);


                                //   Comparison Operators
let numb1:number = 5;
let numb2:number = 5;
console.log(numb1 >= numb2);

let numb3:number = 21;
let numb4:number = 21;
console.log(numb3 == numb4);

let num5:number = 5;
let num6:number = 21;
console.log(num5 != num6);

// let num7 = "5";
// let num8 = 5;
// console.log(num7 === num8);       // output is error

let a:number = 51;
let b:number = 10;
console.log(a >= b);

let c:number = 5;
let d:number = 2;
    //   6  +  7  +  1  +  0  + 5 +  1  + 2  = 22
let e = ++c + c++ + --d + d-- + c + d++ + d;
console.log(e);
