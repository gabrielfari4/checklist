import addDateTime from "./adicionarDataHora.js";
import editItem from "./editarItem.js";
import deleteItem from "./excluirItem.js";
import verifyBoughtList from "./verificarComprado.js";

const lista = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById('lista-comprados');

let itemCount = 1

const createItem = (item) => {
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
        const itemTitle = event.currentTarget.closest('li').querySelector('#item-titulo');

        if (checkboxInput.checked) {
            customCheckbox.classList.add('checked');
            itemTitle.style.textDecoration = 'line-through';
            listaComprados.appendChild(listItem);
        } else {
            customCheckbox.classList.remove('checked');
            itemTitle.style.textDecoration = 'none';
            lista.appendChild(listItem);
        }
        verifyBoughtList(listaComprados);
    })

    const customCheckbox = document.createElement('div');
    customCheckbox.classList.add('checkbox-customizado');

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(customCheckbox);

    checkboxContainer.appendChild(checkboxLabel);
    itemNameContainer.appendChild(checkboxContainer);
    
    const itemName = document.createElement('p');
    itemName.id = 'item-titulo';
    itemName.innerText = item;
    itemNameContainer.appendChild(itemName);
    
    const buttonContainer = document.createElement('div');
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('botao-acao');
    deleteButton.addEventListener('click', () => {
        deleteItem(listItem)
    })
    buttonContainer.appendChild(deleteButton);
    
    const deleteImg = document.createElement('img');
    deleteImg.src = 'img/delete.svg';
    deleteImg.alt = 'deletar'
    deleteButton.appendChild(deleteImg);
    
    const editButton = document.createElement('button');
    editButton.classList.add('botao-acao');
    editButton.addEventListener('click', () => {
        editItem(listItem);
    })
    buttonContainer.appendChild(editButton);
    
    const editImg = document.createElement('img');
    editImg.src = 'img/edit.svg';
    editImg.alt = 'editar';
    editButton.appendChild(editImg);
    
    

    listItemContainer.appendChild(itemNameContainer);
    listItemContainer.appendChild(buttonContainer);

    
    listItem.appendChild(listItemContainer);
    listItem.appendChild(addDateTime());

    return listItem;
}

export default createItem;