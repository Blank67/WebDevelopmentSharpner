"use strict"

// import axios from "axios";

let flag =  true;
const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
form.addEventListener('submit',saveToLocal);

window.addEventListener('DOMContentLoaded',() => {
    flag = false;
    axios
        .get('https://crudcrud.com/api/8087d601cfa841888a3879a2294aa2e8/demo-cloud')
        .then((res) => {
            // console.log(res.data);
            res.data.forEach(obj => {
                console.log(obj);
                showNewUserOnScreen(obj);
            });
        })
        .catch((err) => {console.log("ERROR CATCH BLOCK:",err);})
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
        .post('https://crudcrud.com/api/8087d601cfa841888a3879a2294aa2e8/demo-cloud',obj)
        .then((res) => {
            showNewUserOnScreen(res.data)
            // console.log(res);
        })
        .catch((err) => {console.log("ERROR CATCH BLOCK:",err);})
}

function showNewUserOnScreen(user){
    form.reset();
    removeUserFromScreen(user.email);
    const childHTTML = `<li class="list-group-item" id=${user._id}> Item: ${user.newItem}<br>User: ${user.userName}
                        <span id=${user.email} hidden>${user.userName}</span>
                        <button class="btn btn-danger btn-sm float-right delete" onclick=deleteUser('${user._id}')>Delete</button>
                        <button class="btn btn-danger btn-sm float-right delete" style="background-color:#f4f4f4; color:black" onclick=editUserDetails('${user.email}','${user.userName}','${user.newItem}','${user._id}')>Edit</button>
                        </li>`;
    itemList.innerHTML = itemList.innerHTML+childHTTML;
}

function removeUserFromScreen(unqID){
    const parentNode = document.querySelector('#items');
    const childNodeToBeDeleted = document.getElementById(`${unqID}`);
    // console.log(childNodeToBeDeleted);
    if(childNodeToBeDeleted != null && flag){
        parentNode.removeChild(childNodeToBeDeleted)
    }
}

function deleteUser(unqID){
    // localStorage.removeItem(emailId);
    axios
        .delete(`https://crudcrud.com/api/8087d601cfa841888a3879a2294aa2e8/demo-cloud/${unqID}`)
        .then(() => {
            console.log(`Entry deleted!`);
            flag = true;
            removeUserFromScreen(unqID);
        })
        .catch((err) => {console.log("ERROR CATCH BLOCK:",err);})
}

function editUserDetails(emailId, name, newItem,unqID){
    document.querySelector('#email').value = emailId;
    document.querySelector('#user').value = name;
    document.querySelector('#item').value = newItem;
    flag = true;
    deleteUser(unqID)
 }
