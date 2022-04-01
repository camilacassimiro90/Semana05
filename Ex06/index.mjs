// Dentro da classe Pedido, crie outro método, chamado **calcularTotal**, que deve iterar sobre a **listaProdutos** e retornar o valor total do pedido. Lembre-se de multiplicar a quantidade de cada produto pelo seu valor quando realizar a soma (quantidade e valor são propriedades da classe Produto!).

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
