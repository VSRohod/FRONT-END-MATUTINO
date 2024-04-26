// var filme1 = "Era do Gelo";
// var filme2 = "Jack Estripador";
// var filme3 = "V de vingança";
// var filme4 = "Harry Potter"

//ARRAY
var filmes = Array();
filmes[0] = "Era do gelo";
filmes[1] = "Jack Estripador";
filmes[2] = "V de Vingança";
filmes[3] = "Harry Potter";
let main = document.querySelector("main");

for(var contador = 0;contador <= 3;contador++){
    main.innerHTML += `<div class="posts">
        ${filmes[contador]}
    </div>`;
}

main.innerHTML += `<h1>METODO 2</h1>`;

// metodo 2
var produtos = ["Pen drive","X salada","Chocolate","Açai","Ps5"];

// comandos de array
// adicionar no fim
produtos.push("Bicicleta");

// remover no fim
produtos.pop();

//adicionar no comeco
produtos.unshift("Pipa");

//remover no comeco
produtos.shift();

//adicionar ou remover de acordo com elemento, indice, quantos serão afetados, qual elemento adicionado
// segundo valor =  deleteCount - quantos deletados
produtos.splice(2,1,"Bota");

// clona o array para uma nova variavel
var produtosNovos = produtos.slice();




produtos.forEach((elementos) => {
    main.innerHTML += `<div class="posts">
        ${elementos}
    </div>`;
});

