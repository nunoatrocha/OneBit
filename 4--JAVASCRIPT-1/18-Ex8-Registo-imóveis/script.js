const listaImoveis = []
let opcao = ""

do {
    opcao = prompt(`Número de imóveis registados: ${listaImoveis.length}\n
        \nEscolha uma das seguintes opçoes:
        \n 1 - Inserir imóvel
        \n 2 - Listar imóveis registados
        \n 3 - Sair`)
    switch (opcao) {
        case "1":
        const imovel = {}
        imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
        imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
        imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
        imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

        const confirma = confirm("Salvar este imóvel?\n" + "\nProprietário: " + imovel.proprietario + "\nQuartos: " + imovel.quartos + "\nBanheiros: " + imovel.banheiros + "\nPossui Garagem? " + imovel.garagem)

        if (confirma) {
            listaImoveis.push(imovel)
      }
        break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
              alert(
                "Imóvel " + (i + 1) +
                "\nProprietário: " + listaImoveis[i].proprietario +
                "\nQuartos: " + listaImoveis[i].quartos +
                "\nBanheiros: " + listaImoveis[i].banheiros +
                "\nPossui Garagem? " + listaImoveis[i].garagem
              )
            }
            break
        case "3" :
            opcao = "3"
            alert('A sair...')
            break
        default :
            alert('Escolheu a opção errda') 
            break    
        }
} while (opcao !== "3");
