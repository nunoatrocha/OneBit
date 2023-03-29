const primeiroNome = prompt("Digite o seu primeiro nome: ")
const sobrenome = prompt("Digite o seu sobrenome nome: ")
const campoEstudo = prompt("Qual o seu campo de estudo: ")
const anoNascimento = prompt("Qual o seu ano de nascimento: ")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoEstudo + 
    "\nIdade: " + (2023 - anoNascimento)
)
