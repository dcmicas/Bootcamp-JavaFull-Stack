const deltaa = parseFloat(prompt ("Delta - A função é (b ^ 2 - 4 * a * c) Qual a número de a ?"));
const deltab = parseFloat(prompt ("Delta - A função é (b ^ 2 - 4 * a * c) Qual a número de b ?"));
const deltac = parseFloat(prompt ("Delta - A função é (b ^ 2 - 4 * a * c) Qual a número de c ?"));

function eqSegundograu (deltaa, deltab, deltac){
    delta = (deltab *deltab) - 4 * deltaa * deltac
   
    if (delta < 0){
    console.log(`Delta é menor que 0, portanto não é possível calcular.`);
    }
    
    if (delta > 0){
        raiz1 = (-deltab + Math.sqrt (delta)) / 2 *deltaa;
        raiz2 = (-deltab - Math.sqrt(delta)) / 2 *deltaa;
       console.log (`O primeiro resultado é ${raiz1} e o segundo é ${raiz2}`);
    }
    else(delta == 0)
        console.log(`Delta é zero, então os valores serão iguais`);
}