

const formSub = document.querySelector('#expenses');
const tableList = document.querySelector('#list');
const tableBod = document.querySelector('tbody');
const addBtn = document.querySelector('#addBtn');
//let nameInp = document.getElementById("inputId").value;




  
function addExpense () {
    const nameInp = document.querySelector("#name").value;
    const dateInp = document.querySelector('#date').value;
    const amountInp = document.querySelector('#Amount').value;
    
    //adding to table
    let newTr = document.createElement('tr')
    newTr.innerHTML = `<tr><td>  ${nameInp}  </td><td>  ${dateInp}  </td><td>  £${amountInp}  </td></tr>`;
    tableBod.append(newTr);

    //adding a delete button
    let removeBtn = document.createElement('button')
    removeBtn.classList.add('removeBtn')
    removeBtn.append('X')
    newTr.append(removeBtn);

    removeBtn.addEventListener('click', removeItem);
    function removeItem () {
        newTr.classList.add('delete')
    }
    //trying to reset the value of all inputs
    document.querySelector('#expenses').reset();
    
};



formSub.addEventListener('submit',  addExpense );
//this is to stop the above functions from dissapearing 
formSub.addEventListener('submit',  function (event){
   event.preventDefault()

});

