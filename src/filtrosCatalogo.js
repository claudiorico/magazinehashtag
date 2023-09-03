const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  produtosEscondidos.forEach((item) => item.classList.remove("hidden"));
}

function esconderMasculino() {
  exibirTodos();
  const produtosMasculinos = Array.from(
    catalogoProdutos.getElementsByClassName("masculino")
  );

  for (const produto of produtosMasculinos) {
    produto.classList.add("hidden");
  }
}

function esconderFeminino() {
  exibirTodos();
  const produtosFeminino = Array.from(
    catalogoProdutos.getElementsByClassName("feminino")
  );

  for (const produto of produtosFeminino) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-femininos")
    .addEventListener("click", esconderMasculino);
  document
    .getElementById("exibir-masculinos")
    .addEventListener("click", esconderFeminino);
}
