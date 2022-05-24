/* Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.*/

function RandName(array){
    let rand = Math.random()*array.length | 0;
    let rName = array[rand];
    return rName;
}
const names = ['franco', 'giuseppe', 'chriss', 'stewart', 'michael', 'al', 'john', 'jack'];
const surnames = ['rossi', 'pendragon', 'carlmichael', 'bright', 'windsor', 'rowling', 'tolkien', 'ribbentrop'];
const list = [];
let nomiCompleti
for (let i = 0; i<=8; i++) {
var rName = RandName(names);
var rSurnames = RandName(surnames);
nomiCompleti = rName + " " + rSurnames;
list.push(nomiCompleti);
console.log(nomiCompleti)
}


//console.log("nome:" + " " + rName + " " + "-" + " " + "cognome:" + " " + rSurnames)