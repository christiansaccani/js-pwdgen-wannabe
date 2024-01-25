let firstname;

firstname = prompt("Qual'è il tuo nome?");

let surname;

surname = prompt("Qual'è il tuo cognome?");

let favcolor;

favcolor = prompt("Qual'è il tuo colore preferito?");

document.getElementById("password").innerHTML =
` ${firstname}${surname}${favcolor}.23 `;