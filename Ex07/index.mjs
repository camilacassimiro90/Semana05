// Crie 5 instâncias de produtos, com as características que desejar.

// Crie 2 instâncias de pedidos. O primeiro pedido deve ter o número '20220001' e o nome do cliente à sua escolha. O segundo pedido deve ser o '20220001'.

// Utilizando o método **adicionarProduto**, adicione 3 dos 5 produtos ao pedido '20220001' e, o restante, ao pedido '20220002'.

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

class Pedido {
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
  adicionarProduto(produto) {
    if (produto instanceof Produto) {
      // se o argumento produto for instancia da classe Produto
      this.listaProdutos.push(produto)
    }
  }
  calcularTotal() {
    let valorTotal = 0
    this.listaProdutos.forEach(produto => {
      valorTotal += produto.quantidade * produto.preco
    })
    return valorTotal
  }
}

const produto1 = new Produto('Mouse', 30, true, 5)
const pedido1 = new Pedido(
  20220001,
  'Camila',
  this.estaPago,
  this.dataPedido,
  this.listaProdutos
)
pedido1.adicionarProduto(produto1)

const produto2 = new Produto('Teclado', 60, true, 20)
const pedido2 = new Pedido(
  20220002,
  'João',
  this.estaPago,
  this.dataPedido,
  this.listaProdutos
)
pedido2.adicionarProduto(produto2)

const produto3 = new Produto('Monitor', 20, true, 25)
const produto4 = new Produto('HD', 10, true, 15)
const produto5 = new Produto('Impressora', 5, true, 5)

console.log(pedido1)
console.log(pedido2)
