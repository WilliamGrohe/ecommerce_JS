import { catalogo } from "./utilidades";

const divCarrinho = document.getElementById("carrinho");

const idsProdutoCarrinhoComQuantidade = {}

function abrirCarrinho() {
  divCarrinho.classList.remove("right-[-360px]");
  divCarrinho.classList.add("right-[0px]");
}

function fecharCarrinho() {
  divCarrinho.classList.remove("right-[0px]");
  divCarrinho.classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const btnFecharCarrinho = document.getElementById("fechar-carrinho");
  const btnAbrirCarrinho = document.getElementById("abrir-carrinho");

  btnFecharCarrinho.addEventListener("click", fecharCarrinho);
  btnAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++
}

function decrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]--
}

export function adicionarAoCarrinho(idProduto) {
  if(idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto)
    return;
  } 
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  const produto = catalogo.find(p => p.id === idProduto)

  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  const cartaoProdutoCarrinho = `
    <article class="flex bg-slate-100 rounded-lg p-1 m-2 relative">
        <button id="fechar-carrinho" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
        <img src="./assets/img/${produto.imagem}"
        alt="Carrinho: ${produto.nome}" class="h-24">
        <div class="p-2 flex flex-col justify-between">
          <p class="text-slate-950 text-sm">${produto.nome}</p>
          <p class="text-slate-400 text-xs">Tamanho: M</p>
          <p class="text-green-700 text-lg">${produto.preco}</p>
        </div>
        <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
          <button>-</button>
          <p id="quantodade-${produto.id}" class="px-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
          <button>+</button>
        </div>
    </article>
  `;

  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho
  
}
