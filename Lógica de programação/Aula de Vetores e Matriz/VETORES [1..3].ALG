Algoritmo "VETORES [1..3]"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/03/2024
Var
// Se��o de Declara��es das vari�veis 
alunos : vetor[1..2] de caractere
//DOIS ALUNOS
notasAval1 : vetor[1..2] de real
notasAval2 : vetor[1..2] de real
notasAval3 : vetor[1..2] de real
//3 NOTAS RECEBIDAS DE 2 ALUNOS
//vetores voc� informar a maquina em quantos procurar em linguagem de programa��o
// chamamos de array   (""""ARRAY)
contador : inteiro
mediaFinal: real
Inicio
escreval("=====ESCOLA MILENIO=====")
escreval("")
  para contador <- 1 ate 2 faca
  //pois temos dois alunos
   escreval("Nome do 1� aluno:")
   leia(alunos[contador])
   limpaTela()
   escreval("=====ESCOLA MILENIO=====")
   escreval("")
   escreval("Digite a primeira nota do(a)", alunos[contador])
   leia(notasAval1[contador])
   limpaTela()
   escreval("=====ESCOLA MILENIO=====")
   escreval("")
   escreval("Digite a segunda nota do(a)", alunos[contador])
   leia(notasAval2[contador])
   limpaTela()
   escreval("=====ESCOLA MILENIO=====")
   escreval("")
   escreval("Digite a terceira nota do(a)", alunos[contador])
   leia(notasAval3[contador])
   limpaTela()
   
   mediaFinal <- (notasAval1[contador] + notasAval2[contador] + notasAval3[contador]) / 3
   se (mediaFinal >= 8) entao
   escreval("Aluno Aprovado!")
   senao
   escreval("Aluno reprovado!")
   fimSe
  fimPara
  
  escreval("")
  escreval("")
  escreval("")
  escreval("")
  escreval("")
  escreval("Obrigado pela sua consulta!")
Fimalgoritmo