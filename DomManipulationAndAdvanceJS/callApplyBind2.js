//Currying
//Method 1 - Using bind
const multiply = function(x,y){
    console.log(x*y);
};
const byTwo = multiply.bind(this,2); //Now x=2
byTwo(5); //Now y=5
const byThree = multiply.bind(this,3);
byThree(5);

//Method 2 - Using closures
const multiply2 = function(x){
    return function (y){
        console.log(x*y);
    }
};
const byTwo2 = multiply2(2); //Now x=2
byTwo2(5); //Now y=5
const byThree2 = multiply2(3);
byThree2(5);
