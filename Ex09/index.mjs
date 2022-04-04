// Utilizando o setInterval, crie uma função que mostre o horário atual e atualize automaticamente a cada 2 segundos.

// O horário deve ser mostrado no console, no formato HH:MM:SS.

function horario() {
  const data = new Date()

  console.log(
    data.getHours() +
      'h:' +
      data.getMinutes() +
      'min:' +
      data.getSeconds() +
      'seg'
  )
}

setInterval(horario, 2000)
