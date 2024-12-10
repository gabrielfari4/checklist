import createItem from "./criarItem.js";

const item = document.getElementById('input-item');
const lista = document.getElementById('lista-de-compras');

const addItem = (event) => {
    event.preventDefault()

    const listItem = createItem(item.value)
    lista.appendChild(listItem);
}

export default addItem;