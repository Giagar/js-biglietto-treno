// Dati raccolti dall'utente
var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var age = parseInt(prompt('Quanti anni hai?'));

// Costo in base ai km percorsi 
var cost = km * 0.21;

// Costo aggiornato in base all'età
if (age < 18) {
    cost = cost - (cost / 100 * 20);
} else if (age > 65) {
    cost = cost - (cost / 100 * 40);
} else {
    null;
}

// Costo arrotondato ai centesimi
cost = Math.round(cost);

document.querySelector("#cost").innerHTML = cost;