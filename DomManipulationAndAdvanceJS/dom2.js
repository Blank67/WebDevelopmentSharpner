//Traversing DOM
// let itemList = document.querySelector('#items');

// //parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// //parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// // //child Node
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //first Child
// console.log(itemList.firstChild);

// //first element Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1!';

// //last Child
// console.log(itemList.lastChild);

// //last element Child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4!';

// //next Sibling
// console.log(itemList.nextSibling);

// //next element Sibling
// console.log(itemList.nextElementSibling);

// //previous sibling
// console.log(itemList.previousSibling);

// //previous element sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// //create element
// const newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title','Hello Div');
// const newDivText = document.createTextNode('Hello World!'); //To add text to div
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// const container = document.querySelector('header .container'); //To select <header> parent that have a child with class container
// const h1 = document.querySelector('header h1'); // To select h1 in header
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv,h1);

// //TASK 7
// const newDiv = document.createElement('div');
// newDiv.id = 'newDiv';
// // console.log(newDiv);
// const divText = document.createTextNode('HEllo');
// newDiv.appendChild(divText);
// const container = document.querySelector('header .container');
// // console.log(container);
// const h1 = document.querySelector('header h1');
// // console.log(h1);
// container.insertBefore(newDiv,h1);

// const itmLst = document.querySelector('div .list-group');
// // console.log(itmLst);
// const li = document.querySelector('div li');
// // console.log(li);
// itmLst.insertBefore(newDiv,li);

// TASK 10
const form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    //Get text from Item Field 
    const newItem = document.querySelector('#item').value;
    //Create li to store that item
    const li = document.createElement('li');
    li.className = 'list-group-item';
    //Add text to li
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    //Adding rest of the data in local storage
    const userName = document.querySelector('#user').value;
    const email = document.querySelector('#email').value;
    // localStorage.setItem('userName',userName);
    // localStorage.setItem('email',email);
    // localStorage.setItem('itemName',newItem);
    //Store data in local storage as object.
    const userObj = {
        email : email,
        userName : userName,
        itemName : newItem
    };
    //Convert obj into string
    const userObj_serialized = JSON.stringify(userObj);
    console.log(userObj_serialized);
    localStorage.setItem(email,userObj_serialized);
    //Convert string to its obj
    const userObj_deserialized = JSON.parse(userObj_serialized);
    console.log(userObj_deserialized);
}