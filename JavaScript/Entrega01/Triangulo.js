const comp1 = parseFloat(prompt ("Qual é o comprimento do 1° lado do triangulo ?"))
const comp2 = parseFloat(prompt ("Qual é o comprimento do 2° lado do triangulo ?"))
const comp3 = parseFloat(prompt ("Qual é o comprimento do 3° lado do triangulo ?"))

if (comp1 === comp2 && comp1 === comp3 && comp2 === comp3)
    { (alert (`O triângulo é equilátero`)) }
else if (comp1 === comp2 || comp1 === comp3 || comp2 === comp3)
    {alert (`O triângulo é isósceles`)}
else {
    alert (`O triângulo é escaleno`)
}