import createItem from "./criarItem.js";
import verifyList from "./verificarLista.js";

const item = document.getElementById('input-item');
const lista = document.getElementById('lista-de-compras');

const addItem = (event) => {
    event.preventDefault()

    const listItem = createItem(item.value)
    lista.appendChild(listItem);
    verifyList(lista);
}

export default addItem;