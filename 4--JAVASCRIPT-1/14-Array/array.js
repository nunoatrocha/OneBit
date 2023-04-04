const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

console.log(arr)

// Adicionar elementos
// push - no fim

arr.push("Nuno")
console.log(arr)

// unshift - adiciona no inicio do array

let tamanho = arr.unshift("Nuno")
console.log(arr)
console.log(tamanho)

// Remover elementos
// pop - no fim

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift  - no inicio

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Procurar por um elemento
// includes

const inclui = arr.includes("Gandalf")
console.log(inclui)

// procurar pelo index

const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice

const  hobbits = arr.slice(0, 4)
console.log(hobbits)

const outrosHobbits = arr.slice(-4)
console.log(outrosHobbits)


// concat

const sociedade = hobbits.concat(outrosHobbits, "Nuno")
console.log(sociedade)


//  Substituição dos elementos
//splice

const a = sociedade.splice(indice, 1, "Gandalf O Cinzento")
console.log(sociedade)
console.log(a)

// Iterar sobre os elementos

for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento)
}