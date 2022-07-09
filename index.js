// Você foi contratado por um supermercado para catalogar a compra de uma cliente.
//Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar,
//só serão aceitas as seguintes respostas:

// (1) Hortifruti
// (2) Laticínios
// (3) Carnes
// (4) Peixes
// (5) Aves
// (6) Fechar pedido
// Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.
// Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.
// Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.

var i = 0;
var itemInicio = [
  "Hortifruti",
  "",
  "Laticíneos",
  "",
  "Carnes",
  "",
  "Peixes",
  "",
  "Aves",
  "",
  "Fechar o pedido",
];
var item = [
  "Hortifruti",
  "",
  "Laticíneos",
  "",
  "Carnes",
  "",
  "Peixes",
  "",
  "Aves",
  "",
  "Fechar o pedido",
];
do {
  if (i == 10) {
    item[i] = window.alert("Seu pedido será fechado.");
    i++;
  } else {
    item[i] = window.prompt(
      "Você gostaria de comprar algum item de " +
        item[i] +
        ". Responda apenas com: 'sim' ou 'não'"
    );
    if (item[i] == "sim" && item[i] != "não") {
      i++;
      item[i] = window.prompt("Quantos itens você gostaria?");
      i++;
    } else if (item[i] != "sim" && item[i] == "não") {
      i++;
      item[i] = 0;
      i++;
    } else if (item[i] != "sim" && item[i] != "não") {
      window.alert("Por favor, responda apenas com 'sim' ou 'não'");
      item[i] = itemInicio[i];
    }
  }
} while (i < 11);
console.log("Gostaria de hortifruti:" + item[0]);
console.log("Quantidade de itens em hortifruti:" + item[1]);
console.log("Gostaria de laticínios:" + item[2]);
console.log("Quantidade de itens em laticínios:" + item[3]);
console.log("Gostaria de carnes:" + item[4]);
console.log("Quantidade de itens em carnes:" + item[5]);
console.log("Gostaria de peixes:" + item[6]);
console.log("Quantidade de itens em peixes:" + item[7]);
console.log("Gostaria de aves:" + item[8]);
console.log("Quantidade de itens em aves:" + item[9]);
console.log(item[10]);
