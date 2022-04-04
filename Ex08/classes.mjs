// Estas classes criadas durante os exercícios estão prontas para serem utilizadas em uma aplicação real. Por exemplo: podemos criar um sistema de pedidos, e, através da propriedade **listaProdutos**, podemos realizar uma iteração nos produtos de determinado pedido e imprimir cada um deles em tela.
// Podemos chamar o método **calcularTotal** para exibir em tela o valor total de um determinado pedido.
// A princípio, vamos apenas exibir essas informações no console. Usando o método de array **forEach**, faça um console.log em cada um dos produtos de cada um dos pedidos. O texto de saída pode ser qualquer um, à seu critério. Por exemplo:
// ` Produto: ${produto.nome} | Valor un: ${produto.preco} | Total: ${produto.preco * produto.quantidade} `
// Faça também um console.log para exibir o valor total de cada pedido. Exemplo:
// `Preço total do pedido: R$ ${pedido.calcularTotal( )}`
// Dica: você pode utilizar o **toLocaleString** em um número para formata-lo como moeda. [Dê uma olhadinha neste link...](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

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
