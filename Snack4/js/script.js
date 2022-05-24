/* Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.*/

let arrayUno = [1,2,3,4,5,6,7,8,9,10];
let arrayDue = [1,2,3,4,5];

let lunghezzaArrayUno = arrayUno.length;
let lunghezzaArrayDue = arrayDue.length;

console.log (lunghezzaArrayUno);
console.log (lunghezzaArrayDue);


if (lunghezzaArrayUno>lunghezzaArrayDue) {
    let arrayCorto = lunghezzaArrayUno-lunghezzaArrayDue

    for (let i=0; i<=arrayCorto-1; i++ ) {
    let rNumeri;
    rNumeri = Math.round(Math.random() * 100);
    arrayDue.push(rNumeri);
    
    } 
console.log (arrayDue.length);
} else {
    let arrayCorto = lunghezzaArrayDue-lunghezzaArrayUno
    for (let i=0; i<=arrayCorto-1; i++ ) {
        let rNumeri;
        rNumeri = Math.round(Math.random() * 100);
        arrayUno.push(rNumeri);
        
}
console.log(arrayUno.length);
}

