
const atacante = prompt("Qual o nome do personagem atacante? ")
const poderDeAtaque = parseFloat(prompt("Qual o seu poder de ataque? "))

const defensor = prompt("Qual o nome do personagem defensor? ")
let pontosDeVida =  parseFloat(prompt("Quanto pontos de vida ele tem? "))
const poderDeDefesa = parseFloat(prompt("Qual o seu poder de defesa? "))
const temEscudo = prompt("Ele tem escudo? (s/n): ")

let danoCausado = 0
 
if (poderDeAtaque > poderDeDefesa && temEscudo === "n") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque >  poderDeDefesa && temEscudo === "s") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
} 

alert("DANO CAUSADO: " + danoCausado)

pontosDeVida -= danoCausado

alert("PONTOS DE VIDA: " + pontosDeVida)
