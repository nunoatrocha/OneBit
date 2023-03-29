const nomeCarro1 = prompt("Qual o nome do carro 1: ")
const velociadeCarro1 = prompt("Qual a velocidade do carro 1: ")
const nomeCarro2 = prompt("Qual o nome do carro 2: ")
const velociadeCarro2 = prompt("Qual a velocidade do carro 2: ")

if (velociadeCarro1 > velociadeCarro2) {
    alert(`O carro ${nomeCarro1} é mais rapido que o carro ${nomeCarro2}`)
} else if (velociadeCarro1 === velociadeCarro2) {
    alert('Os dois carro têm a mesma velocidade')
} else {
    alert(`O carro ${nomeCarro2} é mais rapido que o carro ${nomeCarro1}`)
}
