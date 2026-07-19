import { produtos } from "./js/produtos";

import "./css/style.css";
import logo from "./assets/logo.png";
import { salvarProdutos } from "./js/storage";


import {
    adicionarAoCarrinho,
    removerDoCarrinho,
    obterCarrinho,
    calcularTotal
}
 from "./js/carrinho";

// Logo
document.getElementById("logo").src = logo;

// Área onde serão exibidos os produtos
const listaProdutos = document.getElementById("produtos");

// Exibe os produtos da loja
function mostrarProdutos(lista) {

    listaProdutos.innerHTML = "";

    lista.forEach((produto) => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button>Comprar</button>
        `;

        card.querySelector("button").addEventListener("click", () => {

            adicionarAoCarrinho(produto);

            atualizarCarrinho();

        });

        listaProdutos.appendChild(card);

    });

}
const campoPesquisa = document.getElementById("pesquisa");

campoPesquisa.addEventListener("input", () => {

    const texto = campoPesquisa.value.toLowerCase();

    const filtrados = produtos.filter((produto) => {

        return produto.nome
            .toLowerCase()
            .includes(texto);

    });

    mostrarProdutos(filtrados);

});


// Atualiza o carrinho
function atualizarCarrinho() {

    const listaCarrinho = document.getElementById("listaCarrinho");

    listaCarrinho.innerHTML = "";

    obterCarrinho().forEach((produto, indice) => {

        const item = document.createElement("li");

        item.innerHTML = `
            ${produto.nome}
            - R$ ${produto.preco.toFixed(2)}
            <button>Remover</button>
        `;

        item.querySelector("button").addEventListener("click", () => {

            removerDoCarrinho(indice);

            atualizarCarrinho();

        });

        listaCarrinho.appendChild(item);

    });

    // Quantidade de itens
    document.getElementById("quantidade").textContent =
        obterCarrinho().length;

    // Contador do ícone 🛒
    document.getElementById("contadorCarrinho").textContent =
        obterCarrinho().length;

    // Total da compra
    document.getElementById("total").textContent =
        calcularTotal().toFixed(2);

}

// Menu responsivo
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("ativo");

});

// Inicialização da página
document.getElementById("formProduto").addEventListener("submit", (e) => {

    e.preventDefault();

    const arquivo = document.getElementById("imagemProduto").files[0];

    if (!arquivo) {

        alert("Selecione uma imagem.");

        return;

    }

    const leitor = new FileReader();

    leitor.onload = function () {

        const novoProduto = {

            id: Date.now(),

            nome: document.getElementById("nomeProduto").value,

            preco: Number(document.getElementById("precoProduto").value),

            imagem: leitor.result

        };

        produtos.push(novoProduto);

        salvarProdutos(produtos);

        mostrarProdutos(produtos);

        e.target.reset();

    };

    leitor.readAsDataURL(arquivo);

});
mostrarProdutos(produtos);
atualizarCarrinho();