const salario = document.getElementById('ganho-mes');
const horasDia = document.getElementById('horas-dia');
const resposta = document.getElementById('resposta');

//console.log(salario, horasDia, resposta)

function calcularValorHora() {
  //console.log("clique funcionando")

  const totalDeHoras = horasDia.valueAsNumber * 22
  //console.log(totalDeHoras)

  const valorHora = (salario.valueAsNumber/totalDeHoras).toFixed(2);
  //console.log(resultado)

  resposta.textContent = 'R$ ' + valorHora
} 