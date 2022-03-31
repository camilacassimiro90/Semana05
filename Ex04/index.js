// Crie uma classe Pedidos, com as propriedades numeroPedido, dataPedido, estaPago, listaProdutos e nomeCliente.

// Utilize o método construtor para que, a cada instancia dessa classe, um número do pedido e o nome do cliente seja informado, a **dataPedido** seja a data atual ( *new Date( ).toLocaleDateString( )* ), o **estaPago** seja falso e a **listaProdutos** seja um array vazio.

class Pedidos {
  numeroPedido
  dataPedido = new Date().toLocaleDateString()
  estaPago = false
  listaProdutos = []
  nomeCliente
  constructor(numeroPedido, nomeCliente) {
    this.numeroPedido = numeroPedido
    this.nomeCliente = nomeCliente
  }
}

const pedido1 = new Pedidos(
  1,
  'Camila',
  this.estaPago,
  this.dataPedido,
  this.listaProdutos
)

const pedido2 = new Pedidos(
  2,
  'João',
  this.estaPago,
  this.dataPedido,
  this.listaProdutos
)

console.log(pedido1)
console.log(pedido2)
