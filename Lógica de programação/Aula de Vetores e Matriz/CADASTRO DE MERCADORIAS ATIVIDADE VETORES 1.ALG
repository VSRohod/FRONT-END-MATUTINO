Algoritmo "CADASTRO DE MERCADORIAS ATIVIDADE VETORES 1"
//1) Uma loja está levantando o valor total 3 mercadorias em  estoque.
//Escreva um algoritmo que permita a entrada das seguintes informações:
//a)o nome de cada mercadoria
//b)o valor de cada mercadoria.
//c)Ao final imprimir o valor total em estoque e a média de valor das mercadorias.


Var
mercadorias : vetor[1..3] de caractere
// numero das mercadorias, mercadoria 1 / mercadoria 2 e mercadoria 3
valorTotal : real
mediaTotal : real
valor : vetor[1..3] de real

Inicio
mercadorias[1] <- "salsicha"
mercadorias[2] <- "pao"
mercadorias[3] <- "maionese"
 escreval("==========    BEM VINDO AO GOODBURGUER   ==========")
 escreval("")
 escreval("  Esse ambiante é destinado ao cadastramento de produtos: ")
 escreval("")
 escreval("")
 escreval("")
 escreval("  Escreval qual a primeira opção:  ")
 escreval("")
 escreval("  Selecione as opções:")
 escreval("")
 escreval("         ( Salsicha )")
 escreval("")
 escreval("         ( Pao )")
 escreval("")
 escreval("         ( Maionese )")
 escreval("")

 leia(mercadorias[1])
 escreval("")
 escreval("Qual o valor do produto: ")
 leia (valor[1])
 LimpaTela()
 escreval("Escreval qual a segunda mercadoria")
 leia(mercadorias[2])
 escreval("Qual o valor do produto: ")
 leia (valor[2])
 LimpaTela()
 escreval("Escreval qual a terceira mercadoria")
 leia(mercadorias[3])
 escreval("Qual o valor do produto: ")
 leia (valor[3])
 LimpaTela()

 valorTotal <- valor[1]+valor[2]+valor[3]

 escreval("Valor total das mercadorias escolhidas: ", valorTotal)
 escreval("")
 escreval("")
 escreval("Obrigado pelo cadastro dos produtos para um programa destinado")
 escreval("a vendas por favor contate nossa central de TI")




fimAlgoritmo