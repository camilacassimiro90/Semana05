// Crie uma classe Pedidos, com as propriedades numeroPedido, dataPedido, estaPago, listaProdutos e nomeCliente.

// Utilize o método construtor para que, a cada instancia dessa classe, um número do pedido e o nome do cliente seja informado, a **dataPedido** seja a data atual ( *new Date( ).toLocaleDateString( )* ), o **estaPago** seja falso e a **listaProdutos** seja um array vazio.

class Pedidos {
  constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente) {
    this.numeroPedido = numeroPedido
    this.estaPago = false
    this.dataPedido = new Date().toLocaleDateString()
    this.listaProdutos = []
    this.nomeCliente = nomeCliente
  }
}
const pedidos = new Pedidos(
  1,
  this.estaPago,
  this.dataPedido,
  this.listaProdutos,
  'Camila'
)

console.log(pedidos)
