var i = 0, n = 0, soma = 0
n = parseInt (prompt ("Digite o número limite para a soma:"));
parseInt (i);
parseInt (soma);

document.write ("Soma de números ímpares no intervalo de 0 a " + n + ": </br></br>");

for (i = 0; i <= n; i++) {
    if (i % 2 == 1) {
        document.write (i +" + ")
        soma += i;
    }
}
         
document.write (" = " + soma);