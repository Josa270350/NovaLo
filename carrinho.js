let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

export function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    salvarCarrinho();
}

export function removerDoCarrinho(indice) {
    carrinho.splice(indice, 1);
    salvarCarrinho();
}

export function obterCarrinho() {
    return carrinho;
}

export function calcularTotal() {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
}