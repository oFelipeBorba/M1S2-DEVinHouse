// Utilizando estrutura de repetição for realize a tabuada do número 5 e exibe em tela da seguinte forma:

// 5 x 0 = 0
// 5 x 1 = 5
// 5 x 2 = 10
// ....
// 5 x 10 = 50

//variavel i será o multiplicador e ao mesmo tempo o que limita meu for
var i; 
var atualResult = 0;
for ( i = 0; i<=10 ; i++) {
    atualResult = (5*parseFloat(i));
    document.write('5 x '+parseFloat(i)+' = '+atualResult+'</br>');
}
