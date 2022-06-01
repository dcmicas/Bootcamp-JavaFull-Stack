//declarar classe - public - modificador de acesso - Qualquer outra consegue acessar a classe. 
//A primeira é o mesmo nome do arquivo criado//

public class AloMundo { 
    public static void main (String [] args){
        System.out.println("Bem vindos ao mundo Java");

    int idade; //variavel inteira de nome idade//
    idade = 15;
    System.out.println("A idade e: " +idade);

int num1 = 5;
int num2 = 2;
int resto = 5%2;

int x = 10;
long y = 10;

x = (int) y;

char letra = 'l'; //precisa ser aspas simples. Char - 1 unico caracter

float numero = 3;
System.out.printf("%n%.2f%n", numero); //tem que colocar o formato do que vai estar na tela

//Mais sobre atribuições

int a = 1;
int b = 2;

a = a+b; // Outra forma de representação: a+=b
a *=b;

//incremento

a = a + 1; //a++

int i = 5;
int z;
z = i+1;
System.out.println(z);
z = ++i;
System.out.println(z);

z = i++;
System.out.println(z);

}
}

//Operadores artiméticos:
//Soma +
//Subtração -
//Multiplicação *
//Divisão /
//Resto da Divisão %


/* %d	representa números inteiros
%f	representa números floats
%2f	representa números doubles
%b	representa valores booleanos
%c	representa valores char */