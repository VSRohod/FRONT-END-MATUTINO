$("#listarTabuada").on("click", function(){
    let nTabuada = $("#nTabuada").val()
    let resultado = document.querySelector("#tabuadaDesejada");

    resultado.innerHTML = "";

    if(nTabuada > 10 || nTabuada < 0 || nTabuada == 0){
        resultado.innerHTML = `Opa, operação não autorizada! O número deverá ser entre 0 e 10!`;
    }else{
        for(var contador = 1; contador <= 10;contador++){
            resultado.innerHTML += `
                <p> ${nTabuada} X ${contador} = ${nTabuada * contador} </p>
                *******
            `
        }
    } 
});

document.querySelector("#btnTema").addEventListener("click", function(){
    // $("body").css("background-color","black");
    // $("body").css("color","white");
    // $("body").removeClass("temaClaro");
    // $("body").addClass("temaEscuro");

    let corpo = document.querySelector("body");
    if(corpo.classList.contains("temaClaro")){
        corpo.classList.replace("temaClaro","temaEscuro");
        // $("body").attr("data-bs-theme","dark") bootstrap
    }else{
        corpo.classList.replace("temaEscuro","temaClaro");
        // $("body").attr("data-bs-theme","light") bootstrap
    }
})

$("#abrir").on("click",function(){
    $(".caixa").slideDown(500);
});

$("#fechar").on("click",function(){
    $(".caixa").slideUp(500);
});

$("#animar").on("click",function(){
    $(".caixa").animate({width : "500px"},{duration :2000}).animate({height : "500px"});
});
