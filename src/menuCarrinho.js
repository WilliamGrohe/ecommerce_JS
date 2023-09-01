import { catalogo } from "./utilidades";

const divCarrinho = document.getElementById("carrinho");

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

export function adicionarAoCarrinho(idProduto) {
  const produto = catalogo.find(p => p.id === idProduto)

  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  const cartaoProdutoCarrinho = `
    <article class="flex bg-slate-100 rounded-lg p-1 m-2 relative">
        <button id="fechar-carrinho" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
        <img src="./assets/img/${produto.imagem}"
        alt="Carrinho: ${produto.nome}" class="h-24">
        <div class="pl-2">
          <p class="text-slate-950 text-sm">${produto.nome}</p>
          <p class="text-slate-400 text-xs">Tamanho: M</p>
          <p class="text-green-700 text-lg">${produto.preco}</p>
        </div>
        
    </article>
  `;

  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho
}
