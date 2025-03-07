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

// const kmStr = prompt(`How many km will you travel?`)
// const ageStr = prompt(`How old are you?`)
// console.log(kmStr, ageStr);


//esecuzione logica
//     const prezzoFinale = kmStr * 0.21;
//     console.log(prezzoFinale);

// if (prezzoFinale){
//     const prezzoFinale = kmStr * 0.21; 
//     let x = 3.14; 
// }
// if (ageStr < 18 ){  
//     const multipli = prezzoFinale * 80 / 100;
//     console.log(multipli);
// }else if (ageStr > 65) {
//     const multipli = prezzoFinale * 60 / 100;
//     console.log(multipli);
// }else {

// }
const kmPrice = 0.21;
const userKmStr = prompt(`How many km will you travel?`);
const userAgeStr = prompt(`How old are you?`);
console.log(userKmStr, userKmStr);

const userKm = parseInt(userKmStr);
const userAge = parseInt(userAgeStr);

const basePrice = userKm * kmPrice;
console.log(basePrice);

let discount = 0;
if (userAge < 18) {
    discount = 20;
} else if (userAge > 65) {
    discount = 40;
}
console.log(discount);

const finalPrice = basePrice - (basePrice * discount / 100);

// const message = `il prezzo base è di €${basePrice.toFixed(2)}. visto che il passeggero ha ${userAge} anni, hai il diritto allo sconto ${discount}%. Quindi il prezzo finale è di €${finalPrice.toFixed(2)}`;
// console.log(message);

