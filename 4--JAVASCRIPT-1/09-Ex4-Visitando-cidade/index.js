let nome = prompt("Qual o seu nome: ");
let visita = prompt("Já visitou alguma cidade? s/n");
let contador = 0;
let cidades = "";

while (visita === "s" || visita === "S") {
    let cidade = prompt("Qual o nome da cidade? ");
    cidades += "\n - " + cidade;
    contador ++;
    visita = prompt("Já mais alguna cidade? s/n");
}

if (contador === 0) {
    alert(`O ${nome} ainda não vistou nenhuma cidade.`);
} else {
    alert(`O ${nome} já visitou ${contador} cidades sendo elas: ${cidades}`);
}
