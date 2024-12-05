const word = prompt("inserisci una parola");

let reverseWord = "";
for(let i = word.length - 1; i >=0; i--) {
    reverseWord = reverseWord + word[i];
}

if(word === reverseWord) {
    alert("la parola è palindroma")
} else {
    alert("la parola non è palindroma");
}