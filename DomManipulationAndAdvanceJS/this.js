"use strict";
// // const cleanTable = function(){
// //     console.log(`Cleaning ${this.table}.`);
// // }

// this.table = 'window table';
// this.garage = {table:'garage table'};
// // let johnsRoom = {table:'johns table'};
// class createTable {
//     constructor(name) {
//         this.table = `${name}'s table`;
//     }
//     cleanTable(){
//         console.log(`Cleaning ${this.table}.`);
//     }
// }
// // createTable.prototype.cleanTable = function(){
// //     console.log(`Cleaning ${this.table}.`);
// // }
// let john = new createTable('John');
// let jill = new createTable('Jill');
// john.cleanTable();
// jill.cleanTable();
// // cleanTable.call(this);
// // cleanTable.call(this.garage);
// // cleanTable.call(johnsRoom);

class Student {
    static count = 0;
    constructor(name,age,phoneNumber,marks){
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.marks=marks;
        Student.count++;
    }
    isEligible(){
        if(this.marks>40){
            console.log(`${this.name} is eligible for college.`);
        }else{
            console.log(`${this.name} is not eligible for college.`);
        }
    }
    static numberOfStudents(){
        console.log(`Total number of students are: ${this.count}.`);
    }
}
const student1 = new Student('Sourab',23,797522211,35);
const student2 = new Student('Vinay',24,897522211,41);
const student3 = new Student('Vineet',24,997522211,75);
const student4 = new Student('Ashutosh',24,697522211,58);
const student5 = new Student('Mahesh',24,887522211,33);
Student.numberOfStudents();
student3.isEligible();