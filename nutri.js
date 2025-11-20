document.getElementById('healthForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const sexo = document.getElementById('sexo').value;
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const atividade = parseFloat(document.getElementById('atividade').value);
  const pesoDesejado = parseFloat(document.getElementById('pesoDesejado').value);
  const dias = parseInt(document.getElementById('dias').value);
  const distancia = parseFloat(document.getElementById('distancia').value);

  let tmb;
  if (sexo === 'masculino') {
    tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
  } else {
    tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
  }

  const gastoDiario = tmb * atividade;
  const aguaDiaria = peso * 35;
  const caloriasParaPerder = pesoDesejado * 7700;
  const deficitDiario = caloriasParaPerder / dias;
  const gastoCaminhada = distancia * peso * 0.5;

  document.getElementById('resultados').innerHTML = `
    <h2>Resultados para ${nome}</h2>
    <p><strong>Taxa Metabólica Basal (TMB):</strong> ${tmb.toFixed(2)} kcal/dia</p>
    <p><strong>Gasto Calórico Diário Total:</strong> ${gastoDiario.toFixed(2)} kcal/dia</p>
    <p><strong>Quantidade Ideal de Água Diária:</strong> ${aguaDiaria.toFixed(0)} ml</p>
    <p><strong>Déficit Calórico Diário para perder ${pesoDesejado} kg em ${dias} dias:</strong> ${deficitDiario.toFixed(2)} kcal/dia</p>
    <p><strong>Gasto Calórico ao Caminhar ${distancia} km:</strong> ${gastoCaminhada.toFixed(2)} kcal</p>
  `;
});
