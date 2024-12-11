
const addDateTime = () => {
    const itemDate = document.createElement('p');
    itemDate.innerText = `${new Date().toLocaleDateString('pt-BR', { weekday: 'long' })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' })}`;
    itemDate.classList.add('item-texto-data');
    
    return itemDate;
}
    
export default addDateTime;