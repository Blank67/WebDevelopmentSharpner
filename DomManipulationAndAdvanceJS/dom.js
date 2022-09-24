//EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 'Changed'; //We can also change document object
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// //GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// // headerTitle.textContent = 'Hello!'
// // headerTitle.innerText = 'GoodBye!'
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello!</h3>';
// // headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';

// //GET ELEMENT BY CLASS
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2!';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// //items.style.backgroundColor = '#f4f4f4'; //We can't change color of all the items, to do that we need to loop through it.
// for(let i=0;i<items.length;i++){ //To change color of all
// items[i].style.backgroundColor = '#f4f4f4';
// }

// //QUERYSELECTOR
// let header = document.querySelector ('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'; 
// let input = document.querySelector('input');
// input.value = 'Hello World';
// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";
// let item = document.querySelector ('.list-group-item');
// item.style.color = 'red';
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'yellow';

// //QUERYSELECTORALL
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello!';
// let oddItems = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0;i<oddItems.length;i++){
//     oddItems[i].style.backgroundColor = '#f4f4f4';
// }
// let evenItems = document.querySelectorAll('li:nth-child(even)');
// for(let i=0;i<evenItems.length;i++){
//     evenItems[i].style.backgroundColor = '#ccc';
// }

// //TASK 3
// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';
// let titleClass = document.getElementsByClassName('title');
// titleClass[0].style.fontWeight = 'bold';
// titleClass[0].style.color = 'green';

// //TASK 4
// let items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';
// let i=0;
// while(i<items.length){
//     items[i].style.fontWeight = 'bold';
//     i++;
// }

// //TASK 5
// let items = document.getElementsByClassName('list-group-item');
// let i=0;
// while(i<items.length){
//     items[i].style.backgroundColor = '#f4f4f4';
//     items[i].style.fontWeight = 'bold';
//     i++;
// }
// let itemsTag = document.getElementsByTagName('li');
// let j=0;
// while(j<itemsTag.length){
//     itemsTag[j].style.backgroundColor = '#f4f4f4';
//     itemsTag[j].style.fontWeight = 'bold';
//     j++;
// }

//TASK 6
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
console.log(secondItem);
secondItem.style.backgroundColor = 'green';
let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

let newSecondItem = document.querySelectorAll('li:nth-child(2)');
console.log(newSecondItem);
newSecondItem[0].style.color = '#00ff00';
let oddItems = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<oddItems.length;i++){
    oddItems[i].style.backgroundColor = 'green';
}