Algoritmo "correcao1"

Var
num1 , num2 , num3, maior, meio , menor : inteiro


Inicio
leia(num1)
leia(num2)
leia(num3)

//maior
se(num1 > num2) e (num1 > num3) entao
  maior <- num1
senao
  se(num2 > num1) e (num2 > num3) entao
    maior <- num2
  senao
    se(num3 > num1) e (num3 > num2) entao
      maior <- num3
fimSe
fimSe
fimSe

//menor
se(num1 < num2) e (num1 < num3) entao
  menor <- num1
senao
  se(num2 < num1) e (num2 < num3) entao
    menor <- num2
  senao
    se(num3 < num1) e (num3 < num2) entao
      menor <- num3
fimSe
fimSe
fimSe

//meio
se (num1 <> maior) e (num1 <> menor) entao
  meio <- num1
senao
  se (num2 <> maior) e (num2 <> menor) entao
    meio <- num2
  senao
     se (num3 <> maior) e (num3 <> menor) entao
       meio <- num3
fimSe
fimSe
fimSe

escreval("Os números em ordem crescente : ",menor,meio,maior)
escreval("Os números em ordem decrescente : ",maior,meio,menor)


Fimalgoritmo