import addItem from "./js/adicionarItem.js";
import verifyBoughtList from "./js/verificarComprado.js";

const salvarItemButton = document.getElementById('botao-adicionar');

salvarItemButton.addEventListener('click', addItem);

const listaComprados = document.getElementById('lista-comprados');

verifyBoughtList(listaComprados);