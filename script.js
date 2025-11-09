// Função que formata o número com zero à esquerda (ex: 08, 09, 10)
function adicionarZero(numero) {
  return numero < 10 ? "0" + numero : numero;
}

// Função principal que atualiza o relógio
function atualizarRelogio() {
  const agora = new Date(); // Objeto Date com a hora atual

  const horas = adicionarZero(agora.getHours());
  const minutos = adicionarZero(agora.getMinutes());
  const segundos = adicionarZero(agora.getSeconds());

  const horario = `${horas}:${minutos}:${segundos}`;

  // Exibe o horário dentro da div com id="relogio"
  document.getElementById("relogio").textContent = horario;
}

// Atualiza o relógio a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);

// Chamada inicial para não esperar 1 segundo para começar
atualizarRelogio();
