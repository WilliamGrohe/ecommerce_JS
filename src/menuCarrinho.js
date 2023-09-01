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

export function adicionarProdutoCarrinho() {
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  const cartaoProdutoCarrinho = `
    <article class="flex bg-slate-100 rounded-lg p-1 relative">
        <button id="fechar-carrinho" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
        <img src="./assets/img/product-1.jpg" alt="Casaco com bolso" class="h-24">
        <div class="pl-2">
          <p class="text-slate-950 text-sm">Camisa Larga com bolsos</p>
          <p class="text-slate-400 text-xs">Tamanho: M</p>
          <p class="text-green-700 text-lg">$70</p>
        </div>
        
    </article>
  `;

  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho
}
