import notebook from "../assets/notebook.jpg";
import mouse from "../assets/mouse.jpg";
import teclado from "../assets/teclado.jpg";

import {
    carregarProdutos
} from "./storage";

const produtosPadrao = [

    {
        id:1,
        nome:"Notebook",
        preco:3500,
        imagem:notebook
    },

    {
        id:2,
        nome:"Mouse Gamer",
        preco:120,
        imagem:mouse
    },

    {
        id:3,
        nome:"Teclado Mecânico",
        preco:250,
        imagem:teclado
    }

];

export let produtos =
    carregarProdutos() || produtosPadrao;