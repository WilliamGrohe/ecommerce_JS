const divCarrinho = document.getElementById("carrinho");

function abrirCarrinho() {
  divCarrinho.classList.remove('right-[-360px]')
  divCarrinho.classList.add('right-[0px]')
}

function fecharCarrinho() {
  divCarrinho.classList.remove('right-[0px]')
  divCarrinho.classList.add('right-[-360px]')
}

export function inicializarCarrinho() {
  const btnFecharCarrinho = document.getElementById("fechar-carrinho")
  const btnAbrirCarrinho = document.getElementById("abrir-carrinho")

  btnFecharCarrinho.addEventListener('click', fecharCarrinho);
  btnAbrirCarrinho.addEventListener('click', abrirCarrinho);
}