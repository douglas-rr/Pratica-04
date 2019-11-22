var i, soma = parseInt(0);
n = parseInt(prompt("Digite o número limite:"));

document.write("Múltiplos de 3 no intervalo de 3 a " + n + ": </br> ----> ");
for (i = 3; i <= n; i += 3) {
    document.write(i + ", ");
    soma = i + soma;
}
document.write(" = " + soma + "</br></br>");

i, soma = 0;

document.write("Múltiplos de 5 no intervalo de 5 a " + n + ": </br> ----> ");
for (i = 5; i <= n; i += 5) {
    document.write(i + ", ");
    soma = i + soma;
}
document.write(" = " + soma + "</br></br>");

i, soma = 0;

document.write("Potência de base 2: </br> ----> ");
for (i = 0; i <= n; i++) {
    document.write(Math.pow(2, i) + ", ");
    soma = soma + Math.pow(2, i);
}
document.write(" = " + soma + "</br></br>");

i, soma = 0;

document.write("Potência de base variável: </br> ----> ");
for (i = 1; i <= n; i++) {
    document.write(Math.pow(i, 3) + ", ");
    soma = soma + Math.pow(i, 3);
}
document.write(" = " + soma);