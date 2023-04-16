/*

let pessoa = {}

pessoa.nome = "Nuno"
pessoa.peso = parseInt(prompt("Diga o seu peso:"))

console.log(pessoa)

*/

const lista = []

let pessoa = {}

pessoa.nome = "Nuno"
pessoa.idade = 43

lista.push(pessoa)

console.log(lista[0].nome)

pessoa.nome = "Isabel"
pessoa.idade = 49

lista.push(pessoa)
console.log(lista[1].idade)

console.log(lista)
