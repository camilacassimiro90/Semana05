function tomeAgua(valor) {
  return window.alert(valor)
}

function sleep(valor) {
  return new Promise((res, rej) => {
    setTimeout(tomeAgua, 3000, valor)
  })
}

sleep('Mantenha-se hidratado, beba água :)')
