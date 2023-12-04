 //PRIMEIRA ATIVIDADE
 const quantidade = Number('4')
 let soma = 0
 var p = 0

 while(p<quantidade){
   num = Number(prompt('Digite um número'))
   soma += num
   p++
}
alert('A soma desses números é ' + soma)
alert('E a média desses valores é ' + soma/4)

//SEGUNDA ATIVIDADE
 let escolha = Number(prompt('Digite a quantidade de números'))
 let somaII = 0
 var y = 0

 while(y<escolha){
   nume = Number(prompt('Digite um número'))
   somaII += nume
   y++
   x = somaII/escolha
}
alert('A soma desses números é ' + somaII)
alert('E a média desses valores é ' + x)

//TERCEIRA ATIVIDADE
 let numI = Number(prompt('Digite um número inteiro'))
 let numII = Number(prompt('Digite outro número'))
 let somaI = 0

if(numI < numII){
  for(var i=numI;i<=numII;i++){
   if(i % 2 !== 0)
    somaI += i
    }
   
 alert('O resultado da soma dos impares é ' + somaI)
}
else{
 alert('O primeiro número não pode ser maior que o segundo. Digite outro')
}
