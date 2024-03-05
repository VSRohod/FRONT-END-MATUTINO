Algoritmo "ex2"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 04/03/2024
Var
contador, numero, quantVezes, maiorNumero : inteiro


Inicio
//ler quantidade de vezes
escreval("Quantos números serão comparados?")
leia(quantVezes)
//repetição baseadas nas vezes
enquanto ( contador < quantVezes) faca
 //pergunta os numeros
 escreval("Digite o ",contador + 1," numero :")
 leia(numero)
 //verifica maior
 se (numero > maiorNumero) entao
    maiorNumero <- numero
 fimSe
 contador <- contador + 1
 limpaTela()
fimEnquanto
//mensagem final
escreval("O maior número digitado é de :", maiorNumero)


Fimalgoritmo