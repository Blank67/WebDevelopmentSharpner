class MyQueue{
    constructor(){
        this.queue = [];
        this.start = 0;
        this.end = 0;
        this.length = 0;
    }
    enqueue(element){
        this.queue[this.end] = element;
        console.log(`${element} is added at index ${this.end}`);
        this.end++;
        this.length++;
        return this.end-1;
    }
    dequeue(){
        if(this.length===0){
            console.log(`Queue is empty!`);
            return -1;
        }else{
            let deleteItem = this.queue[this.start];
            this.start++;
            this.length--;
            console.log(`${deleteItem} is deleted.`);
            return deleteItem;
        }
        // this.queue.shift(); // Remove first element of array.
    }
    front(){
        if(this.length===0){
            console.log(`Queue is empty!`);
            return -1;
        }else{
            console.log(`Element at the start is: ${this.queue[this.start]}.`);
            return this.queue[this.start];
        }
    }
    rear(){
        if(this.isEmpty()){
            console.log(`Queue is empty!`);
            return -1;
        }else{
            console.log(`Element at the start is: ${this.queue[this.end]}.`);
            return this.queue[this.end];
        }
    }
    isEmpty(){
        console.log(this.length===0 ? `Empty!` : `Not Empty!`);
        return this.length===0;
    }
    size(){
        console.log(`Size of queue is ${this.length}.`);
        return this.length;
    }
    // display(){
    //     for(let i=this.start;i<this.end;i++){
    //         console.log(`${this.queue[this.start+i]} `);
    //     }
    //     return this.queue; //After using shift in dequeue
    // }
    // clear(){
    //     this.queue=[];
    //     this.length=0;
    //     this.start=0;
    //     this.end=0;
    //     console.log(`Queue is cleared.`);
    //     return this.queue;
    // }
}

const queue = new MyQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
// queue.display();
queue.size();
queue.isEmpty();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
// queue.display();
queue.size();
queue.isEmpty();