// Setting up
const SELECTED_CLASS = "selected";
const NOT_SELECTED_CLASS = "not-selected"; 
// O Template ID será usado para obter o elemento que queremos através do id
const TEMPLATE_ID = "div-";

// O item selecionado por default é o div-1 (ou seja: TEMPLATE_ID + "1")
var currentSelection = document.getElementById(TEMPLATE_ID + "1");
currentSelection.className = SELECTED_CLASS;

// Função changeSelection(index) será chamada cada vez que o user clique numa divisão
function changeSelection(index) {
    var newSelectionId = TEMPLATE_ID + index; // div-1 / div-2 / div-3 (dependendo do index que é passado)

    // Primeiro, limpamos a classe do elemento selecionado anteriormente e colocamos not-selected
    currentSelection.className = NOT_SELECTED_CLASS;

    // Por fim, obtemos o novo elemento, mudamos a classe e guardamos como elemento selecionado
    var newSelection = document.getElementById(newSelectionId);
    newSelection.className = SELECTED_CLASS;
    currentSelection = newSelection;
}