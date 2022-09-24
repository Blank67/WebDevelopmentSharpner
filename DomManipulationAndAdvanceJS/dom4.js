const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

//Form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
//Filter event
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();
    //get input value
    const newItem = document.querySelector('#item').value;
    const newDescription = document.querySelector('#description').value;
    //create new li
    const li = document.createElement('li');
    const br = document.createElement('br');
    li.className = 'list-group-item';
    //add text node with i/p value to the li
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(br);
    li.appendChild(document.createTextNode(`${newDescription}`));
    //create delete button element
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //add text node to button
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    //EDIT BUTTON
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';
    editBtn.style.backgroundColor = '#f4f4f4';
    editBtn.style.color = 'black';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
    localStorage.setItem(newItem,newDescription);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            //select parent element(li) of delete button
            const li = e.target.parentElement;
            //remove li
            itemList.removeChild(li);
        }
    }
}

const list = document.querySelectorAll('.list-group-item');
// console.log(list);
for(let i=0;i<list.length;i++){
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';
    editBtn.style.backgroundColor = '#f4f4f4';
    editBtn.style.color = 'black';
    editBtn.appendChild(document.createTextNode('Edit'));
    list[i].appendChild(editBtn);   
}

function filterItems(e){
    //convert everything to lowercase for easy selection
    let text = e.target.value.toLowerCase();
    // console.log(text);
    const items = itemList.querySelectorAll('.list-group-item');
    // console.log(items);
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        // console.log(itemName);
        let itemDes = item.childNodes[2].textContent;
        // console.log(itemDes);
        if((itemName.toLowerCase().indexOf(text) != -1) || (itemDes.toLowerCase().indexOf(text) != -1)){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}

// localStorage.setItem('name','bob');
// console.log(localStorage.getItem('name'));;
// localStorage.removeItem('name');