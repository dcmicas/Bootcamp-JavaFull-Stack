//Receber um valor do usuario no terminal

import java.util.Scanner;

public class Leitura { 
    public static void main (String [] args){

    Scanner leitor = new Scanner(System.in);    //instanciamento de classes

    System.out.println("Digite um número: ");
    int numero = 0;
    numero = leitor.nextInt();
    System.out.println("O número digitado foi: " +numero);   

}}