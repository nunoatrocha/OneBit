let numero = prompt("Digite o número para calculo: ");
let resultadoDaMultiplicacao = 0;
let mostraTabuada = "";

for (let i = 1; i <= 20; i++) {
  resultadoDaMultiplicacao = numero * i;
  mostraTabuada += `${numero} x ${i} = ${resultadoDaMultiplicacao}\n`;
}

alert(mostraTabuada);
