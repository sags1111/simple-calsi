// var buttons = document.getElementsByClassName("button");
// var display = document.getElementById("display");
// var operand1 = 0;
// var operand2 = null;
// var operator = null;
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');
//         if (value == '+') {
//             operator = '+';
//             operand1 = parseFloat(display.textContent);
//         } else if (value == '=') {
//             (operand2 = parseFloat(display.textContent))
//         } else {
//             display.innerText += value;
//         }

// //     })
// // }
// var student = { name: "abc", rollno: 123, "pic": "" };

// // var student = new Object();
// console.log(student);

// var obj = {
//     "p1": 10
// };
// var obj2 = obj;

// iterating item here
// for (var prop in student) {
//     console.log(prop, student[prop])
// }
// var keys = Object.keys(student)
// var obj4 = {
//     roll: 34,
//     pi: "rajmohali",
//     address: {
//         city: "surat",
//         pincode: 395006,

//     }

// }
// console.log(obj4)
//     // var arr = [3, 43, 21, 7];
//     // console.log(arr)
//     // arr[2] = 234;
//     // console.log(arr)
// function hellow() {
//     console.log("hwlloq");

// }
// // setTimeout(hellow, 5000)
// // setInnterval most consider repititive funtion
// // setInterval(hellow, 2000)
// setTimeout(hellow, 2000)
//     // countDown
// var count = 10;

// function timer() {
//     console.log(count);
//     count--;
// }
// setInterval(timer, 1000)
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 2000)
// }
// var var1 = 10;

// function outer() {
//     var b = 50;
//     console.log(b);
// }
// console.log(var1)
/// scope and function
// console.log(this)
// 'use-strict'
// var obj = {
//     proj: "name",
//     print: function() {
//         console.log(this);
//     }
// }
// obj.print();
// oop concept
// function createStudent(name, rollno) {
//     var student = {};
//     student.name = name;
//     student.rollno = rollno;
//     return student;

// }
// var student1 = createStudent("gfd", 23);
// var student2 = createStudent("gfddfds", 253);
// console.log(student1, student2)
// decalre class in js 
var Vehicle = class {
    constructor(num, price) {
        this.num = num;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
var v1 = new Vehicle(2, 3000);
var v2 = new Vehicle(5, 9000);
console.log(v1, v2)