/* 2 - exibir os numeros pares de 0 a 60, fazer o uso do laço
de repetição for
*/
console.clear();
for (var par = 0; par <= 60; par++) {
    if (par % 2 == 0) {
        console.log("Os numero pares de 0 a 60 s\u00E3o: ".concat(par));
    }
}
