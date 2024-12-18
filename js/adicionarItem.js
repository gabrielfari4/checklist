import createItem from "./criarItem.js";
import verifyList from "./verificarLista.js";

const item = document.getElementById('input-item');
const lista = document.getElementById('lista-de-compras');

const addItem = (event) => {
    event.preventDefault()

    if (item.value === null || item.value.trim() === "") {
        alert("Por favor, digite um item!");
        item.value = ''
        item.focus()
        return;
    } 

    const listItem = createItem(item.value)
    lista.appendChild(listItem);
    verifyList(lista);
    item.value = ''
    item.focus()
}

export default addItem;