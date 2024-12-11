import verifyBoughtList from "./verificarComprado.js";
import verifyList from "./verificarLista.js";

const lista = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById('lista-comprados');

const deleteItem = (element) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if (confirmacao) {
        element.remove();

        verifyBoughtList(listaComprados);
        verifyList(lista);
    }
}

export default deleteItem;