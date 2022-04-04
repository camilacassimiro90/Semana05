import { Produto, Pedido } from './classes.mjs'

//Instanciar produtos
const produto1 = new Produto('Mouse', 30, true, 5)
const produto2 = new Produto('Teclado', 60, true, 20)
const produto3 = new Produto('Monitor', 20, true, 25)
const produto4 = new Produto('HD', 10, true, 15)
const produto5 = new Produto('Impressora', 5, true, 5)

const pedido1 = new Pedido(20220001, 'Camila')
const pedido2 = new Pedido(20220002, 'João')

//Adicionado os produtos ao pedido 1 e calculando valor final
pedido1.adicionarProduto(produto1)

//Adicionado os produtos ao pedido 1 e calculando valor final
pedido2.adicionarProduto(produto2)
const totalPedido1 = pedido1.calcularTotal(pedido1.listaProdutos)

console.log(
  `Produto: ${produto1.nome} | Valor un:  ${produto1.preco.toLocaleString(
    'pt-BR',
    { style: 'currency', currency: 'BRL' }
  )} | Total: ${produto1.preco * produto1.quantidade}`
)

console.log(
  `Preço total do pedido: ${pedido1
    .calcularTotal()
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
)
