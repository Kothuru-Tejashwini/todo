document.getElementById('addForm').addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    const newItem = document.getElementById('item').value;
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.appendChild(document.createTextNode(newItem));
    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn btn-success btn-sm mr-2';
    doneBtn.appendChild(document.createTextNode('Done'));
    doneBtn.onclick = function () {
        li.style.textDecoration = 'line-through';
    };
    li.appendChild(doneBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.onclick = function () {
        document.getElementById('items').removeChild(li);
    };
    li.appendChild(deleteBtn);
    document.getElementById('items').appendChild(li);
    document.getElementById('item').value = '';
    document.getElementById('submit').disabled = true;
    document.getElementById('lblsuccess').style.display = 'block';
    setTimeout(function () {
        document.getElementById('lblsuccess').style.display = 'none';
    }, 2000);
}
function toggleButton(input, buttonId) {
    const submitButton = document.getElementById(buttonId);
    submitButton.disabled = input.value.trim() === '';
}