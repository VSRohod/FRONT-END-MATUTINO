Algoritmo "ex2"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 04/03/2024
Var
contador, numero, quantVezes, maiorNumero : inteiro


Inicio
//ler quantidade de vezes
escreval("Quantos n�meros ser�o comparados?")
leia(quantVezes)
//repeti��o baseadas nas vezes
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
escreval("O maior n�mero digitado � de :", maiorNumero)


Fimalgoritmo