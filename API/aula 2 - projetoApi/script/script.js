const username = "Leonardo";

if(username == ""){
    document.querySelector("#user").innerHTML = `
    
    <button class="btn btn-primary">LOGIN</button>

    `
}else{
    document.querySelector("#username").innerHTML = username
    document.querySelector("#nome").value = username
}

// cep pesquisar
var cepInput = document.querySelector("#cep");

cep.addEventListener('focusout',pesquisarCep);

function pesquisarCep(){
    var cepValue = cepInput.value;

    if(cepValue.length == 8){
        fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then((response) => {
            return response.json()
        }).then((dados) => {
            document.querySelector("#logradouro").value = dados.logradouro
            document.querySelector("#bairro").value = dados.bairro
            document.querySelector("#localidade").value = dados.localidade
        })
        document.querySelector("#contaCaracteres").innerHTML = `
            <p class="text-success"> CEP válido</p>
        `
    }else{
        document.querySelector("#contaCaracteres").innerHTML = `
            <p class="text-danger"> Quantidade de caracteres inválida (Max = 8 digitos)</p>
        `
    }

}