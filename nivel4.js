/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Curso: Informática para Internet
 * Disciplina: Lógica de Programação e Estrutura de Dados
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 * 
 * Código de Domínio Público, sinta-se livre para usá-lo, modificá-lo e redistribuí-lo.
 *
 */

// Computar a distância entre dois pontos bidimencionais

var valorAX = 3;
var valorAY= 1;
var valorPX = 5;
var valorPY= 6;
var distancia = (valorPX - valorAX )**2

// cálculo da distancia bidimencional 

 distancia = (Math.sqrt(valorPX-valorAX)**2 + (valorPY - valorAY)**2);

//imprimir

  console.log(distancia)
