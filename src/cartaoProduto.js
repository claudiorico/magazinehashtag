import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
  for (const produto of catalogo) {
    const cartaoProduto = `<div class="w-48 m-2 flex flex-col p-2 justify-between group ${
      produto.feminino ? "feminino" : "masculino"
    } shadow-xl shadow-slate-700 rounded-lg" id="card-produto-${produto.id}">
            <img
            src="./assets/img/${produto.imagem}.jpg"
            alt="${produto.nome}"
            class="group-hover:scale-110 duration-300 my-3 rounded-lg"
            />
            
            <p class="text-sm">${produto.marca}</p>
            <p class="text-sm">${produto.nome}</p>
            <p class="text-sm">$${produto.preco}</p>
            <button id="adicionar-${produto.id}"
            class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
            </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produto of catalogo) {
    document
      .getElementById(`adicionar-${produto.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produto.id));
  }
}
