var num1, num2, numIgual
do {
    num1 = parseFloat (prompt ("Informe o primeiro número:"));
    num2 = parseFloat (prompt ("Informe o segundo número:"));

    while (num1 == num2) {
        alert ("Os números precisam ser diferentes.")
        num1 = parseFloat (prompt ("Informe o primeiro número:"));
        num2 = parseFloat (prompt ("Informe o segundo número:"));
    }

    if (num1 > num2) {
        alert ("O maior número é: " + num1 + "\n" + 
               "O menor número é: " + num2 + "\n" +
               "A raíz quadrada de " + num1 + " é: " + Math.sqrt (num1) + "\n"
               + num2 + " elevado a 2 é: " + Math.pow (num2, 2));
    }

    if (num2 > num1) {
        alert ("O maior número é: " + num2 + "\n" + 
               "O menor número é: " + num1 + "\n" +
               "A raíz quadrada de " + num2 + " é: " + Math.sqrt (num2) + "\n"
               + num1 + " elevado a 2 é: " + Math.pow (num1, 2));
    }
        
    numIgual = confirm ("Deseja realizar uma nova operação?");
    
} while (numIgual == true);
