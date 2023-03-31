const palavra = prompt("Escreva uma palavra: ");
let palavraInvertida = "";

for (let i = palavra.length -1; i >= 0;  i--) {
  palavraInvertida+= palavra[i];
}

if (palavra === palavraInvertida) {
  alert(`A palavra "${palavra}" é um PALÍNDROMO`);
} else {
  alert(`A palavra "${palavra}" não é um PALÍNDROMO`);
}
