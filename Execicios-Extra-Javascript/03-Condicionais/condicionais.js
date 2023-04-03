const name = prompt("Qual o seu nome: ");
let velocity = 0;
velocity = prompt("Qual a velocidde que pretende acelerar? ")
const confirmation = confirm(`Confirma esta velocidade ${velocity}Km/h`)
if (confirmation != true) {
  velocity = 0;
} else {
  alert("A sua velocidade foi alterada com sucesso.");
}

alert(velocity)