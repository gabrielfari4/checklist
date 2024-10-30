const item = document.getElementById('input-item');
const salvarItemButton = document.getElementById('botao-adicionar');
const lista = document.getElementById('lista-de-compras');

salvarItemButton.addEventListener('click', (event) => {
    event.preventDefault();
    addItem();
})
let itemCount = 1

const addItem = () => {
    itemCount >= 1 ? itemCount++ : itemCount
    const listItem = document.createElement('li');

    const listItemContainer = document.createElement('div');
    listItemContainer.classList.add('item-lista-container');
    
    const itemNameContainer = document.createElement('div');
    itemNameContainer.classList.add('container-nome-compra');

    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('checkbox-input');
    checkboxInput.id = `checkbox-${itemCount}`
    
    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxInput.id);

    checkboxLabel.addEventListener('click', (event) => {
        const checkboxInput = event.currentTarget.querySelector('.checkbox-input');
        const customCheckbox = event.currentTarget.querySelector('.checkbox-customizado');

        if (checkboxInput.checked) {
            customCheckbox.classList.add('checked');
        } else {
            customCheckbox.classList.remove('checked');
        }
    })

    const customCheckbox = document.createElement('div');
    customCheckbox.classList.add('checkbox-customizado');

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(customCheckbox);

    checkboxContainer.appendChild(checkboxLabel);
    itemNameContainer.appendChild(checkboxContainer);
    
    const itemName = document.createElement('p');
    itemName.innerText = item.value;
    itemNameContainer.appendChild(itemName);
    
    const buttonContainer = document.createElement('div');
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('botao-acao');
    buttonContainer.appendChild(deleteButton);
    
    const deleteImg = document.createElement('img');
    deleteImg.src = 'img/delete.svg';
    deleteImg.alt = 'deletar'
    deleteButton.appendChild(deleteImg);
    
    const editButton = document.createElement('button');
    editButton.classList.add('botao-acao');
    buttonContainer.appendChild(editButton);
    
    const editImg = document.createElement('img');
    editImg.src = 'img/edit.svg';
    editImg.alt = 'editar';
    editButton.appendChild(editImg);
    
    
    listItemContainer.appendChild(itemNameContainer);
    listItemContainer.appendChild(buttonContainer);
    listItem.appendChild(listItemContainer);
    lista.appendChild(listItem)
}