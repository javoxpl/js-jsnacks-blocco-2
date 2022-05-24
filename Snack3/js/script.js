/* Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari*/


let numeri =[]; 
let rNumeri;
for (let i = 0; i <= 20; i++) {
    rNumeri = Math.round(Math.random() * 100);
    numeri.push(rNumeri);
    let index = (numeri.indexOf(rNumeri));
    let indexx = index%2
    if (indexx != 0) {
        console.log (rNumeri);
    }

}
//console.log(numeri);
