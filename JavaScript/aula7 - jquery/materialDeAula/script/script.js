// var teste = document.querySelector("#tituloPagina");
// teste.innerHTML = "JQUERY É TOP"

// text() - imprime string
//html() - imprime string interpretando comandos html
var teste = $("#tituloPagina").text(`JQUERY É TOP`);

var texto = undefined;
// document.querySelector("#textoPagina").innerHTML = texto;
$("#textoPagina").html(texto);

//var span = document.querySelector("#teste");
// span.addEventListener("click",function);
// function (){}

$("#teste").on("click", function(){
    let teste = $("p");
    console.log(teste);
    $("#teste").text("Acertou!");
    $("#teste").addClass("teste");
    $("#testeImagem").html(` <img src="..." alt="Uma imagem"> `);
    // $("#teste").removeClass("teste");
})

console.log(teste);