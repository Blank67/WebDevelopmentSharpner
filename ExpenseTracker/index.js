const form = document.querySelector('#addForm');
const mainList = document.querySelector('#mainList');

form.addEventListener('submit',saveToLocal);

addEventListener('DOMContentLoaded',() => {
    const localStorageObj = localStorage;
    console.log(`localStorageObj---> ${localStorageObj}`);
    const localStorageKeys = Object.keys(localStorageObj);
    console.log(`localStorageKeys---> ${localStorageKeys}`);
    for(let i=0;i<localStorageKeys.length;i++){
        const key = localStorageKeys[i];
        console.log(key);
        const expenseDataString = localStorageObj[key];
        console.log(expenseDataString);
        const expenseDataObj = JSON.parse(expenseDataString);
        console.log(expenseDataObj);
        showOnScreen(expenseDataObj);
    }
});

function saveToLocal(e){
    e.preventDefault();
    const amount = document.querySelector('#amount').value;
    const description = document.querySelector('#description').value;
    const category = document.querySelector('#category').value;
    const expense = {
        amount,
        description,
        category
    };
    localStorage.setItem(description,JSON.stringify(expense));
    showOnScreen(expense);
}

function showOnScreen(expObj){
    form.reset();
    removeExpenseFromScreen(expObj.description);
    const liHTML = `<li class="list-group-item" id="${expObj.description}"> Amount- Rs. ${expObj.amount}<br>Description- ${expObj.description}<br>Category- ${expObj.category}
                    <span id=${expObj.description} hidden>${expObj}</span>
                    <button class="btn btn-danger btn-sm float-right delete" onclick=deleteExpense('${expObj.description}') style="margin-left:5px">Delete</button>
                    <button class="btn btn-danger btn-sm float-right delete" style="background-color:#f4f4f4; color:black" onclick=editExpense('${expObj.description}','${expObj.amount}','${expObj.category}')>Edit</button>                    
                    </li>`;
    mainList.innerHTML = mainList.innerHTML+liHTML; 
}

function deleteExpense(description){  
    // if(confirm('Do you want to delete this expense?')){
        localStorage.removeItem(description);
        removeExpenseFromScreen(description);
    // }else{
    //     console.log(`${localStorage.getItem(description)} is not deleted.`);
    // }
}

function editExpense(description,amount,category){
    document.querySelector('#amount').value = amount;
    document.querySelector('#description').value = description;
    document.querySelector('#category').value = category;
    deleteExpense(description);
}

function removeExpenseFromScreen(key){
    const parentElement = document.querySelector('#mainList');
    const expenseToBeDeleted = document.querySelector(`#${key}`);
    if(expenseToBeDeleted != null){
        parentElement.removeChild(expenseToBeDeleted);
    }
}