// Crie uma classe para um Produto, com as seguintes propriedades: **nome**, **preco**, **emEstoque**, **quantidade**.
// Todas essas propriedades precisam ser recebidas no construtor da classe.

class Produto {
  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome
    this.preco = preco
    this.emEstoque = emEstoque
    this.quantidade = quantidade
  }
}

const produto = new Produto('Monitor', 100, true, 10)

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.emEstoque)
console.log(produto.quantidade)

