alert("Bem-vindo! A seguir pediremos que informe alguns dados.");

let name = prompt("Qual o seu nome: ");
let age = prompt("Qual a sua idade: ");
let ageConfirmation = confirm(`A sua idade é ${age} anos?`);
let ageConfirmationOutput = "";

if (ageConfirmation === true) {
  ageConfirmationOutput = "Sim";
} else {
  ageConfirmationOutput = "Nao";
}

alert(`Os deu dados são:\n - Nome: ${name} \n - Idade: ${age} anos`);
alert(`Idade confirmada: ${ageConfirmationOutput}`)

