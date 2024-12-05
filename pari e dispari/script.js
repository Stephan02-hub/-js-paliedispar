const scelta = prompt(" inserisci pari o dispari");
const computer = Math.floor(Math.random() * 6);
const giocatore = Number(prompt("inserisci un numero da 1 a 5"));
const sum = giocatore + computer;

let risultato = "";
if(sum % 2 === 0) {
    risultato =  "pari"
} else{
    risultato = "dispari"
}

if(risultato === scelta) {
    alert("hai vinto")
}else{
    alert("hai perso")
}

