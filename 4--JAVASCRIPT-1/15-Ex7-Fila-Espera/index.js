let filaEspera = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < filaEspera.length; i++) {
    pacientes += (`${i + 1} º - ${filaEspera[i]}\n`);
  }
  opcao = prompt(`Pacientes: \n${pacientes} \nEscolha uma opção: \n  1 - Novo paciente \n  2 - Consultar paciente\n  3 - Sair`);
  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual o nome od novo Paciente: ");
      filaEspera.push(novoPaciente);
      break
    case "2":
      const pacienteConsultado= filaEspera.shift();
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!");
      } else {
        alert(`${pacienteConsultado} foi removido da fila.`)
      }
      break
    case "3":
      alert("A encerrar")
      break
    default:
      alert("Opção inválida")
      break
  }
 } while (opcao !== "3");
