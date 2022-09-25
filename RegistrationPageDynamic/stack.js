// class MyStack{
//     constructor(){
//         this.stack = [];
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     pop(){
//         if(this.stack.length===0){
//             console.log(`Stack is empty!`);
//             return -1;
//         }else{
//             return this.stack.pop();
//         }
//     }
//     peek(){
//         return this.stack[this.stack.length-1];
//     }
//     isEmpty(){
//         return this.stack.length === 0;
//     }
//     display(){ //leaving last element
//         // return this.stack;
//         let str = "";
//         for (var i = 0; i < this.stack.length; i++)
//             str += this.stack[i] + " ";
//         return str;
//     }
//     clear(){
//         if(this.stack.length===0){
//             console.log(`Stack is empty!`);
//             return -1;
//         }else{
//             let i=this.stack.length;
//             while(i>0){
//                 this.pop();
//                 i--;
//             }
//             console.log(`You emptied the stack.`);
//         }
//     }
// };

class MyStack{
    constructor(){
        this.stack = [];
        this.length = 0;
    }
    push(element){
        this.stack[this.length] = element;
        console.log(`${element} is added at index ${this.length}.`);
        this.length++;
        return this.length-1;
    }
    pop(){
        if(this.length===0){
            console.log(`Stack is empty!`);
            return -1;
        }else{
            let deleteItem = this.stack[this.length-1];
            this.length--;
            console.log(`${deleteItem} is deleted.`);
            return deleteItem;
        }
    }
    peek(){
        console.log(`Top element is ${this.stack[this.length-1]}`);
        return this.stack[this.length-1];
    }
    isEmpty(){
        console.log(this.length===0 ? `Empty!` : `Not Empty!`);
        return this.length===0;
    }
    size(){
        console.log(`Size of stack is ${this.length}.`);
        return this.length;
    }
    display(){
        return this.stack;
    }
    clear(){
        this.stack=[];
        this.length=0;
        console.log(`Stack is cleared.`);
        return this.stack;
    }
}

let stack = new MyStack;
stack.push(10);
stack.push(20);
stack.push(30);
// stack.push(40);
// console.log(stack.pop());
console.log(stack.display());
// stack.clear();
// console.log(stack.display());
