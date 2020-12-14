// Dati raccolti dall'utente e verifica
var km = prompt('Quanti km vuoi percorrere?');
var age = "";

if (isNaN(km)) {
    alert("Il dato inserito non è un numero, si prega di fare il refresh della pagina e di inserire solo dati numerici")
} else {
    age = prompt('Quanti anni hai?');
    if (isNaN(age)) {
        alert("Il dato inserito non è un numero, si prega di fare il refresh della pagina e di inserire solo dati numerici")
    } else {
        // Conversione dati utente in numeri
        km = parseInt(km);
        age = parseInt(age);

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
    }
}
