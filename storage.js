export function salvarProdutos(produtos){
    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );
}

export function carregarProdutos(){

    const dados = localStorage.getItem("produtos");

    return dados ? JSON.parse(dados) : null;

}