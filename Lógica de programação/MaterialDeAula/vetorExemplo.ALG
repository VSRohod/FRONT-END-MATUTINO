Algoritmo "materialDeAulaExemplo"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/03/2024
Var
alunos : vetor[1..2] de caractere
notasAval1 : vetor[1..2] de real
notasAval2: vetor[1..2] de real
notasAval3: vetor[1..2] de real
contador : inteiro
mediaFinal: real

Inicio
para contador <- 1 ate 2 faca
  escreval("Digite o nome do aluno")
  leia(alunos[contador])
  limpaTela()
  escreval("Digite a primeira nota do(a) ",alunos[contador])
  leia(notasAval1[contador])
  limpaTela()
  escreval("Digite a segunda nota do(a) ",alunos[contador])
  leia(notasAval2[contador])
  limpaTela()
  escreval("Digite a terceira nota do(a) ",alunos[contador])
  leia(notasAval3[contador])
  limpaTela()

  mediaFinal <- (notasAval1[contador] + notasAval2[contador] + notasAval3[contador]) / 3

  se (mediaFinal >= 8) entao
    escreval("O aluno foi aprovado!")
  senao
    escreval("O aluno não foi aprovado!")
  fimSe
fimPara

Fimalgoritmo