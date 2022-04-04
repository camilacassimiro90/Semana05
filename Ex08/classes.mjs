export class Produto {
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

export class Pedido {
  numeroPedido
  nomeCliente
  dataPedido = new Date().toLocaleDateString()
  estaPago = false
  listaProdutos = []

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
    let totalPedido = 0
    this.listaProdutos.forEach(item => {
      totalPedido = totalPedido + item.quantidade * item.preco
    })
    return totalPedido
  }
}
