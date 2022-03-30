// aqui vai importar
// import * as saudacao from './saudacao.js' ->>> importar tudo o que tem no arquivo saudacao.js

import { cumprimentar } from './saudacao.mjs'

console.log('Olá!')

let nome = 'Camila'
import saudacaoEspecial from './saudacao-especial.mjs'
console.log(saudacaoEspecial(`Olá, ${nome}! Seja muito bem vindo(a)!`))
