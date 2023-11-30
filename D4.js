/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(l1 = 1, l2=1){

return l1*l2

}

console.log('area del rettangolo;', area(5, 6))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function(l1 = 1, l2=1){

    if(l1 !== l2 ) {
    return l1+l2
    }else
    return (l1+l2)*3
    }

console.log(crazySum(3, 2))
console.log(crazySum(2,2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function(l1 = 1){

    const x = 19
    if(l1 <= x ) {
    return l1-x
    }else
    return (l1-x)*3
    }

console.log(crazyDiff(3))
console.log(crazyDiff(20))


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function(n){

if(n>=20 && n<=100 || n === 400){

return true

} else 

return false
}

console.log(boundary(60))
console.log(boundary(200))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const epify = function (stringa){

    let pos = stringa.indexOf('EPICODE') 

    if (pos !== 0){

return 'EPICODE'+', '+ stringa

    } else

    return stringa

}

console.log(epify('un corso magnifico'))
console.log(epify('EPICODE, un corso magnifico'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (number=1){

if(number < 0){
number * -1    
}

if ((number % 3) === 0 || (number % 7) === 0 ){

return true

}else 
return false
}
let number = check3and7(3)


if (number ===true){

console.log('multiplo')

} else 

console.log('non è multiplo')


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */



const reverseString = function (parola) {



const div = parola.split("")

const cont = div.reverse()

return cont.join('')

}

console.log(reverseString('ciao'))




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (sentence){

let div = sentence.split(' ')


for (i = 0; i<div.lenght; i++){

x = div[i].charAt(0).toUpperCase()
rim = div[i].slice(1)
tot = x.concat(rim)
div[i].slice(i,1,tot)

}

return  div

}


console.log(upperFirst('ciao sono marco'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function(number){

let array = []


for (i = 0; i<number; i++){

let x = (Math.random*10)+ number   
    
array[i].push(x)

}

return array

}


console.log(giveMeRandom(3))