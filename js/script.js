let firstname;

firstname = prompt("Qual'è il tuo nome?");

console.log(firstname);

let surname;

surname = prompt("Qual'è il tuo cognome?");

console.log(surname);

let favcolor;

favcolor = prompt("Qual'è il tuo colore preferito?");

console.log(favcolor);

document.getElementById("password").innerHTML =
` ${firstname}${surname}${favcolor}.23 `;