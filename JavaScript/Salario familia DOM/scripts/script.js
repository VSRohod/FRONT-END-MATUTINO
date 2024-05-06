let calcularBtn = document.querySelector("#calcular");

calcularBtn.addEventListener('click', calcular);

function resposta(salFamilia,nome){
    let resultadoDiv = document.querySelector("#resultado");

    if(salFamilia <= 0){
        resultadoDiv.innerHTML = `
        
        <div id="dados">
            ${nome}, você não tem direito ao salário família!
        </div>

        `
    }else{
        resultadoDiv.innerHTML = `
        
        <div id="dados">
            ${nome}, você tem direito ao salário família! 
            O salário família é de R$: ${salFamilia}.
        </div>

        `
    }
}

function calcular(){
    let empregado = document.querySelector("#empregado").value;
    let filhos = Number(document.querySelector("#filho").value);
    let salario = Number(document.querySelector("#salario").value).toFixed(2);
    let salFamilia = 0;

    if(salario <= 806.80){
        salFamilia = filhos * 41.37;
        resposta(salFamilia,empregado); 
    }else if(salario >= 806.81 & salario <= 1212.64){
        salFamilia = filhos * 29.16;
        resposta(salFamilia,empregado); 
    }else{
        resposta(salFamilia,empregado); 
    }
}