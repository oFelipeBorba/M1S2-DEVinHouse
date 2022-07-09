//Pensando em um sistema de notas online, crie um código que irá capturar o nome do aluno e a nota de 4 unidades
//usando o prompt dentro de uma laço while, a ideia é que a cada valor digitado seja puxado para um array com o 
//método push. Após isso, crie um laço “for” que irá calcular a soma de todos os itens do array para ser calculada
//sua média. Ao final de tudo, deverá ser apresentado em tela o nome do aluno, sua média e se o aluno foi aprovado
//ou não, para esse último tópico considere a média para aprovação maior ou igual a 7.
var i = 1, aluno = '', soma = 0, result = 0, notas = [];
aluno = window.prompt("Digite o nome do aluno:");
while (i <= 4){
    notas.push(window.prompt("Valor da "+ i +"ª nota do aluno."));
    i++;
}
i=0;

//apenas para acompanhar os valores o console:
console.log(aluno);
console.log(notas[0]);
console.log(notas[1]);
console.log(notas[2]);
console.log(notas[3]);
console.log(notas.length);

//como trocar esse if por um laço for? 
if (notas.length == 4) {
    soma = (parseFloat(notas[0])+parseFloat(notas[1])+parseFloat(notas[2])+parseFloat(notas[3]));
    result = (soma/4);
}
if(result >= 7) {
    document.write("O aluno <strong>"+aluno+"</strong> ficou ACIMA da média, com o resultado = <strong>"+result+"</strong>");
}else{
    document.write("O aluno <strong>"+aluno+"</strong> ficou ABAIXO da média, com o resultado = <strong>"+result+"</strong>");  
}
