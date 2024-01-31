// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// *Prima di partire a scrivere codice poniamoci qualche domanda:*
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// Creazione della griglia

const gridElement = document.querySelector("#grid");

for(let i = 1; i <= 100; i++){

    const newElement = document.createElement("div");
    newElement.className = "square"
    newElement.innerHTML = i;

    gridElement.append(newElement);
}