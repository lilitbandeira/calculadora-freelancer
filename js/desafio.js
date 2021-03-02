const precoHora = document.getElementById('valor-hora');
const horasTrabalho = document.getElementById('horas-projeto');
const resposta = document.getElementById('resposta');

//console.log(precoHora, horasTrabalho, resposta);

function valorProjeto() {
  //console.log((precoHora.valueAsNumber * horasTrabalho.valueAsNumber).toFixed(2));
  const calculo = (precoHora.valueAsNumber * horasTrabalho.valueAsNumber).toFixed(2);
  resposta.textContent = "R$ " + calculo.replace('.', ',')
}

