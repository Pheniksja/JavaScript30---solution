const itemsList = document.querySelector(".plates")
const addItems = document.querySelector(".add-items")
// it's going to try and get it from local storage, and then if it isn't there it's
// going to fall back to an empty array.
const items = JSON.parse(localStorage.getItem('items')) || []; 

function addItem(e) {
    e.preventDefault() ;

    // take text and put it in the object
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done:false,
    };
    console.log(item)
    items.push(item);
    populateList(items, itemsList);
    // When we add an item, you put it into local storage and you update your local storage every single time.

    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
    
}

function populateList(plates = [], platesList) {
platesList.innerHTML = plates.map((plate,i) =>{
return `
    <li> 
    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
    <label for="item${i}">${plate.text} </label>   



    </li>
`
}).join( '');
}  
// checked -> So if it has a property of "done," put the "checked" attribute. Otherwise, we leave it off.


// when we refresh the page, we whant to keep the symbol, so we what to  persist the toggling of
function toogleDone(e) {
if(!e.target.matches('input')) return;
const el = e.target;
const index = el.dataset.index;
items[index].done = !items[index].done;
localStorage.setItem('items', JSON.stringify(items));
populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toogleDone);

  populateList(items, itemsList);