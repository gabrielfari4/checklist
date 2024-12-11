const comprados = document.getElementById('comprados-title');

const verifyBoughtList = (list) => {
    if (list.childElementCount === 0) {
        comprados.style.display = "none";
    } else {
        comprados.style.display = "block";
    }
}

export default verifyBoughtList;