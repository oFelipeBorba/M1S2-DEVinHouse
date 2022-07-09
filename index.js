var i = 0, qtd = 0;
var array = ['user1', 'user2', 'user3', 'user4'];
do {
    array[i] = window.prompt("Digite aqui sua avaliação:");
    if (array[i] == 'ruim'){
        qtd++;
        }
        if ((array[i] != 'ruim') && (array[i] != 'bom') && (array[i] != 'excelente')){
            array[i] = window.prompt("Digite aqui sua avaliação (Escolha entre: bom, ruim ou excelente):");
            if (array[i] == 'ruim'){
                qtd++;
            }
        }
        i++;
} while (i < 4);
  
console.log(qtd," pessoas acharam a série ruim.");

