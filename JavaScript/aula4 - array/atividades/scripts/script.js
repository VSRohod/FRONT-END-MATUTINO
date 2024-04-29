var carrinho = [];
var valorTotal = 0;

function atualizarCarrinho(){
    let carrinhoHtml = document.querySelector("#carrinhoDados");
    carrinhoHtml.innerHTML = "";

    carrinho.forEach((nomeProduto) => {
        carrinhoHtml.innerHTML += `<div class="itemCarrinho">${nomeProduto}</div>`;
    });

}

function adicionarCarrinho(produto,valor){
    carrinho.push(produto);
    valorTotal += valor;
    atualizarCarrinho();
}
