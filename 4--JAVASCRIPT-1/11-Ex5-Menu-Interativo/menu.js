let opcao = "";

do {
    opcao = prompt("Escolha uma das seguintes opçoes: \n\n 1 - Escolher \n 2 - Pedir \n 3 - Recolher \n 4 - Pagar \n 5 - Sair\n");
    alert(`A opcao escolhilha foi a - ${opcao}`);
    if (opcao === 5) {
        alert("O pedido foi dado como entregue, volte sempre.");
    }
} while (opcao !== "5");