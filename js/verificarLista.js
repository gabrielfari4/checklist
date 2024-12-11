const emptyListMsg = document.getElementById('mensagem-lista-vazia');

const verifyList = (list) => {
    if (list.querySelectorAll('li').length === 0) {
        emptyListMsg.style.display = "block";
    } else {
        emptyListMsg.style.display = "none";
    }
}

export default verifyList;