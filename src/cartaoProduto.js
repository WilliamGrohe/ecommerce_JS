import { catalogo } from "./utilidades";


export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo){
    const cartaoProduto = `<div class="border-solid border-2 border-sky-500 w-48 p-2" id="card-produto">
            <img src="./assets/img/${produtoCatalogo.imagem}" alt="Texto" style="height: 200px;">
            <p>${produtoCatalogo.marca}</p>
            <p>${produtoCatalogo.nome}</p>
            <p>$${produtoCatalogo.preco}</p>
            <button>Adicionar</button>
          </div>
    `;
    
    document.getElementById("container-produto").innerHTML += cartaoProduto
  }

}