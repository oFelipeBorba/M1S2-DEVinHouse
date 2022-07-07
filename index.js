var peso = window.prompt("Digite o seu peso:");
var altura = window.prompt(
  "Digite a sua altura(Utilize um ponto '.' para realizar a separação das casas decimais):"
);
var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
console.log(imc);
if (imc >= 25) {
  window.alert("Você está acima do peso, procure um médico");
} else if (imc > 18.5 && imc < 24.9) {
  document.write("PARABÉNS!! Você está no peso ideal");
} else {
  document.write("Você está abaixo do peso, procure um médico.");
}
