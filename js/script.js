/* 
raccolta dati
chiedere all'utente km da percorrere e età

esecuzione logica
prezzo biglietto a km: 0.21€
    MESSAGGIO quanti km da percorrere?

se l'età è < di 18 anni va applicato lo sconto del 20% 
se l'età è > di 65 anni va appliecato lo sconto del 40%
    MESSAGGIO age < 18 sconto 20%
ALTRIMETI
    MESSAGGIO age > 65 sconto 40%
ALTRIMENTI 
    MESSAGGIO prezzo biglietto intero (tra i 18 e i 65 anni)

OUTPUT stampo il messaggio il console
*/

const kmStr = prompt(`How many km will you travel?`)
console.log(kmStr);

const ageStr = prompt(`How old are you?`)
console.log(ageStr);


//esecuzione logica
    const prezzoFinale = kmStr * 0.21;
    console.log(prezzoFinale);

if (prezzoFinale){
    const prezzoFinale = kmStr * 0.21;
    // let x = 3.14; ; 

}
if (ageStr < 18 ){  
    const multipli = prezzoFinale * 80 / 100;
    console.log(multipli);
}else if (ageStr > 65) {
    const multipli = prezzoFinale * 60 / 100;
    console.log(multipli);
}else {
}







// if (age < underEighteen) {
//     console.log(`minors 20% discount`);
// } else if(age > overSixtyFive){
//     console.log(`over 65 40% discount`);

// }

