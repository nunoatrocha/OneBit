const baralho = [];
let opcao = "";

do {
  opcao = prompt(`O baralho tem ${baralho.length} cartas\nSelecione uma opçao:\n  1 - Adicionar uma carta\n  2 - Puxar uma carta\n  3 - Sair`);
  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual o nome da carta: ");
      baralho.unshift(novaCarta);
      break;
    case "2":
      const cartaRemovida = baralho.shift()
      if (!cartaRemovida) {
        alert('Não há nenhuma carta no baralho')
      } else {
        alert("A carra removida foi: " + cartaRemovida);
      }
      break;
    case "3":
      alert("A encerrar!");
      break;
    default:
      alert("Não digitou a opção correta");
      break;
  }
} while (opcao !== "3")