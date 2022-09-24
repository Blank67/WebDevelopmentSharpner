"use strict";
//  var x = function(){
//     this.val = 1;
//     setTimeout( ()=>{
//         this.val++;
//         console.log(this.val);
//     },1000 );
//  };
//  var xx = new x();

class Student {
    static count = 0;
    static eligibleStudentList = [];
    constructor(name,age,phoneNumber,marks){
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.marks=marks;
        Student.count++;
    }
    egligibleForPlacements(minMarksRequired){
        return (age)=>{
            if(age>this.age && minMarksRequired<this.marks){
                // return true;
                console.log(`${this.name} is elgible for placement.`);
                Student.eligibleStudentList.push(this.name);
            }else{
                // return false;
                console.log(`${this.name} is not elgible for placement.`);
            }
        };
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
// Student.numberOfStudents();
student1.egligibleForPlacements(40)(30);
student2.egligibleForPlacements(40)(30);
student3.egligibleForPlacements(40)(30);
student4.egligibleForPlacements(40)(30);
student5.egligibleForPlacements(40)(30);
console.log(Student.eligibleStudentList);