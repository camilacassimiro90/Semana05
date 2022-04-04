// Crie uma função chamada **sleep**, que recebe como argumento um  valor qualquer.
// Quando chamada, essa função precisa retornar, após 3 segundos (setTimeout), uma Promise resolvida com o valor que foi passado como argumento.
// Ex.:
// ````
// function sleep ( valor ) {
//   return new Promise ( (res, rej) => {
//      setTimeout( ... )
//   })
// }
// ````

function tomeAgua(valor) {
  return window.alert(valor)
}

function sleep(valor) {
  return new Promise((res, rej) => {
    setTimeout(tomeAgua, 3000, valor)
  })
}

sleep('Mantenha-se hidratado, beba água :)')
