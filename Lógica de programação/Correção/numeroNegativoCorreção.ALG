Algoritmo "ex2"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 04/03/2024
Var
contador, numero , quantNegativo : inteiro


Inicio
escreval("Digite 10 numeros")
repita
  leia(numero)

  se (numero < 0) entao
   quantNegativo <- quantNegativo + 1
  fimSe
  
  contador <- contador - 1
  
ate ( contador >= 10)


Fimalgoritmo