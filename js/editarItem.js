
const editItem = (element) => {
    let novoItem = prompt("Digite o novo nome do item:")

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTexto = element.querySelector('#item-titulo');
        itemTexto.textContent = novoItem;

        const isBought = element.querySelector('.input-checkbox').checked;

        if (isBought) {
            element.querySelector('.input-checkbox').checked = true;
            element.querySelector('.checkbox-customizado').classList.add("checked");
            itemTexto.style.textDecoration = 'line-through';
        }
    }
}

export default editItem;