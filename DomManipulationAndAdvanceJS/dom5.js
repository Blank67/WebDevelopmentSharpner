// TASK 13
const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
form.addEventListener('submit',saveToLocal);

window.addEventListener('DOMContentLoaded',() => {
    const localStorageObj = localStorage;
    console.log(`localStorageObj---> ${localStorageObj}`);
    const localStorageKeys = Object.keys(localStorageObj);
    console.log(`localStorageKeys---> ${localStorageKeys}`);
    for(let i=0;i<localStorageKeys.length;i++){
        const key = localStorageKeys[i];
        console.log(key);
        const userDetailsString = localStorageObj[key];
        console.log(userDetailsString);
        const userDetailsObj = JSON.parse(userDetailsString);
        console.log(userDetailsObj);
        showNewUserOnScreen(userDetailsObj);
    }
});

function saveToLocal(e){
    e.preventDefault();
    const newItem = document.querySelector('#item').value;
    const userName = document.querySelector('#user').value;
    const email = document.querySelector('#email').value;
    const obj = {
        newItem,
        userName,
        email
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showNewUserOnScreen(obj);
}

function showNewUserOnScreen(user){
    document.querySelector('#item').value = '';
    document.querySelector('#user').value = '';
    document.querySelector('#email').value = '';
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email);
    }
    const ul = document.querySelector('#items');
    const childHTTML = `<li class="list-group-item" id=${user.email}> Item: ${user.newItem}<br>User: ${user.userName}
                        <span id=${user.userName} hidden>${user.userName}</span>
                        <button class="btn btn-danger btn-sm float-right delete" onclick=deleteUser('${user.email}')>Delete</button>
                        <button class="btn btn-danger btn-sm float-right delete" style="background-color:#f4f4f4; color:black" onclick=editUserDetails('${user.email}','${user.userName}','${user.newItem}')>Edit</button>
                        </li>`;
    // console.log(user.email);
    // console.log(user.userName);
    // console.log(user.newItem);
    ul.innerHTML = ul.innerHTML+childHTTML;
}

function removeUserFromScreen(emailId){
    const parentNode = document.querySelector('#items');
    const childNodeToBeDeleted = document.getElementById(`#${emailId}`); //Unable to user querySelector
    if(childNodeToBeDeleted != null){
        parentNode.removeChild(childNodeToBeDeleted)
    }
}

function deleteUser(emailId){
    // console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}

function editUserDetails(emailId, name, newItem){
    document.querySelector('#email').value = emailId;
    document.querySelector('#user').value = name;
    document.querySelector('#item').value = newItem;
    deleteUser(emailId)
 }

// function addItem(e){
//     e.preventDefault();
//     //Get text from Item Field 
//     const newItem = document.querySelector('#item').value;
//     const userName = document.querySelector('#user').value;
//     const email = document.querySelector('#email').value;
//     //Create li to store that item
//     // const li = document.createElement('li');
//     // li.className = 'list-group-item';
//     //Add text to li
//     // li.appendChild(document.createTextNode(newItem));
//     // itemList.appendChild(li);
//     //Adding rest of the data in local storage
//     //Store data in local storage as object.
//     const userObj = {
//         email : email,
//         userName : userName,
//         itemName : newItem
//     };
//     //Convert obj into string
//     const userObj_serialized = JSON.stringify(userObj);
//     localStorage.setItem(`${email}`,userObj_serialized);
//     //Convert string to its obj
//     // const userObj_deserialized = JSON.parse(userObj_serialized);
//     const localStorageKeys = Object.keys(localStorage);
//     for(let i=0;i<localStorageKeys.length;i++){
//         const key = localStorageKeys[i];
//         const userDetailsString = userObj_serialized[key];
//         const userDetailsObj = JSON.parse(userDetailsString);
//         showNewUserOnScreen(userObj);
//     }
//     // showNewUserOnScreen(userObj);
// }

// function showNewUserOnScreen(user){
//     if(localStorage.getItem(user.email) !=null){
//         removeUserFromScreen(user.email);
//     }
//     const ul = document.querySelector('#items');
//     const childHTTML = `<li class="list-group-item" id=${user.email}> Item: ${user.itemName}<br>User: ${user.userName}<button class="btn btn-danger btn-sm float-right delete">Delete</button></li>`;
//     ul.innerHTML = ul.innerHTML+childHTTML;
// }

// function removeUserFromScreen(email){
//     const parentNode = document.querySelector('#items');
//     const childNode = document.querySelector(`#${email}`);
//     if(childNode){
//         parentNode.removeChild(childNode);
//     }
// }

// function deleteUser(email){
//     localStorage.removeItem(email);
//     removeUserFromScreen(email);
// }

// // console.log(localStorage);
// // Object.keys(localStorage).forEach((key) => {
// //    stringifiedDetailsOfPeople = localStorage.getItem(key);
// //    detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
// //    const ul = document.querySelector('#items');
// //    const childHTTML = `<li class="list-group-item"> Item: ${detailsOfPeople.itemName}<br>User: ${detailsOfPeople.userName}<button class="btn btn-danger btn-sm float-right delete">Delete</button></li>`;
// //    ul.innerHTML = ul.innerHTML+childHTTML;
// // });
