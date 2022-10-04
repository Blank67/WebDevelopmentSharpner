"use strict"

// import axios from "axios";
var flag =  true;;
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
    // localStorage.setItem(obj.email,JSON.stringify(obj));
    axios 
        .post('https://crudcrud.com/api/de30d677e3424561a29b53295694f538/demo-cloud',obj)
        .then((res) => {
            showNewUserOnScreen(res.data)
            // console.log(res);
        })
        .catch((err) => {console.log(err);})
    // showNewUserOnScreen(obj);
}

function showNewUserOnScreen(user){
    form.reset();
    removeUserFromScreen(user.email);
    const childHTTML = `<li class="list-group-item" id=${user.email}> Item: ${user.newItem}<br>User: ${user.userName}
                        <span id=${user.userName} hidden>${user.userName}</span>
                        <button class="btn btn-danger btn-sm float-right delete" onclick=deleteUser('${user.email}')>Delete</button>
                        <button class="btn btn-danger btn-sm float-right delete" style="background-color:#f4f4f4; color:black" onclick=editUserDetails('${user.email}','${user.userName}','${user.newItem}')>Edit</button>
                        </li>`;
    // console.log(user.email);
    // console.log(user.userName);
    // console.log(user.newItem);
    itemList.innerHTML = itemList.innerHTML+childHTTML;
}

function removeUserFromScreen(emailId){
    const parentNode = document.querySelector('#items');
    const childNodeToBeDeleted = document.getElementById(`${emailId}`); //Unable to user querySelector
    // console.log(childNodeToBeDeleted);

    if(childNodeToBeDeleted != null && flag){
        parentNode.removeChild(childNodeToBeDeleted)
    }
}

function deleteUser(emailId){
    localStorage.removeItem(emailId);
    flag = true;
    removeUserFromScreen(emailId);
}

function editUserDetails(emailId, name, newItem){
    document.querySelector('#email').value = emailId;
    document.querySelector('#user').value = name;
    document.querySelector('#item').value = newItem;
    flag = true;
    deleteUser(emailId)
 }
