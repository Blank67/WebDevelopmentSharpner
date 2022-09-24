//Task 1,2,3
let Obj1 = {
    a:7
};
function sum(x=0,y=0,z=0){
    return this.a + x + y + z;
}
//CALL
let call = sum.call(Obj1,13,10);
console.log(`Using Call: ${call}`);
//APPLY
let arr = [13,10,20];
let apply = sum.apply(Obj1,arr);
console.log(`using Apply: ${apply}`);
//Bind
let bind = sum.bind(Obj1);
console.log(`Using Bind: ${bind(11,11)}`);

//Task 4
const Student = {
    age : 20
};
function printAge() {
    return `Age of student is: ${this.age}`;
}
let studentAge = printAge.bind(Student);
console.log(studentAge());