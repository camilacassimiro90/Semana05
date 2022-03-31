// Dentro da classe Pedido, adicione um método **adicionarProduto**, que recebe como argumento um objeto do tipo Produto ( _caso deseje_, você pode realizar uma validação utilizando o operador _instanceof_).

// Este método deve adicionar (**push**) à propriedade listaProdutos o produto passado como argumento.

class Produto {
  nome
  preco
  emEstoque
  quantidade

  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome
    this.preco = preco
    this.emEstoque = emEstoque
    this.quantidade = quantidade
  }
}

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
  // adicionar item no array
  adicionarProdutos(...produto) {
    this.listaProdutos.push(produto)
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

pedido1.adicionarProdutos('mouse')
console.log(pedido1)
pedido2.adicionarProdutos('teclado', 'monitor')
console.log(pedido2)
