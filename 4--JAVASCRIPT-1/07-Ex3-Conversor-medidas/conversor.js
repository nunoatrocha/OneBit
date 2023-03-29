const valorMetros = prompt("Digite uma medida em metros: ")
const escolhaConvesao = prompt("Para que unidade pretende converter:\nmm) \ncm) \ndm) \ndam \nhm) \nkm)")

switch (escolhaConvesao) {
    case "mm":
        alert(`Resutado: ${valorMetros}m para milimeros = ${valorMetros * 1000}mm`)
        break
    case "cm":
        alert(`Resutado: ${valorMetros}m para milimeros = ${valorMetros * 100}cm`)
        break
    case "dm":
        alert(`Resutado: ${valorMetros}m para milimeros = ${valorMetros * 10}dm`)
        break
    case "dam":
        alert(`Resutado: ${valorMetros}m para milimeros = ${valorMetros / 10}dam`)
        break
    case "hm":
        alert(`Resutado: ${valorMetros}m para milimeros = ${valorMetros / 100}hm`)
        break
    case "km":
        alert(`Resutado: ${valorMetros}m para milimeros = ${valorMetros / 1000}km`)
        break
    default :
    alert("Fim")
}
