console.log('js ok');

//1. Recuperare gli elementi dal DOM
const list = document.getElementById('list');

//2. Creare un collegamento per l'HTML
let listItem = ``;

//3. Preparare una lista con alcuni elementi all'interno
const shoppingList = ['acqua', 'pane', 'zucchero', 'latte di unicorno', 'code di ragno' , 'alito di vento', 'lacrime di coccodrillo'];

//4. Creare un ciclo che stampi gli elementi della lista **finchè** non arriva all'ultimo
/* FOR VERSION
for(let i = 0; i < shoppingList.length; i++){
    listItem += `<li>${shoppingList[i]}</li>`
}
*/

// ? WHILE VERSION

//5. stampo in pagina
list.innerHTML = listItem;