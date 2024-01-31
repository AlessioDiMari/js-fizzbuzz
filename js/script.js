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


    // Creazione di condizioni secondo le quali 
    // andrò a cambiare gli elementi ".square"
    // a seconda che siano multipli di 3, 
    // di 5 e di entrambi
    

    // Chiedo se l'elemento é sia multiplo di 3 e di 5
    if( i % 3 == 0 && i % 5 == 0) {

        newElement.className += " fizzbuzz" 
        newElement.innerHTML = "fizzbuz";
        
    } else if( i % 3 == 0 ) {

        // Chiedo se sia multiplo di 3
        newElement.className += " fizz";
        newElement.innerHTML = "fizz";

    } else if( i % 5 == 0 ){

        // chiedo se sia multiplo di 5
        newElement.className += " buzz";
        newElement.innerHTML = "buzz";

    } else {
        newElement.className += " norm"
    }

}