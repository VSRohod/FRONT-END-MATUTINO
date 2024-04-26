const usuarioCadastrado = "ADM";
const senhaCadastrada = "ADM";

function login() {
    let usuarioCorreto = false;
    let tentativas = 0;
   
    while(usuarioCorreto === false){
        let usuario = prompt("Digite o seu usuario");
        let senha = prompt("Digite a sua senha");    

        if(usuario != usuarioCadastrado || senha != senhaCadastrada){
            alert("Usuário ou senha incorretos! tente novamente!");

            tentativas++;
            alert("Numero de tentativas (Max de 3) : "+tentativas);

            if(tentativas === 3){
                alert("Número de tentativas excedido! Tente novamente mais tarde");
                break;
            }

        }else{
            alert("Seja bem vindo!")
            usuarioCorreto = true;
        }
    }
}