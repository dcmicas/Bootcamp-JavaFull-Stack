import java.util.InputMismatchException;
import java.util.Scanner;

public class Principal2 {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.println("Digite um número: ");
        try{
            long numero = scan.nextLong();
            System.out.println("O número digitado foi: " + numero);
        } catch (InputMismatchException e) {       //ou utilizar o Exception para ser mais genérico
            System.out.println("Erro - Você não digitou um número válido");
        } finally {
            System.out.println("Obrigatoriamente, você passa por aqui");
        }

} }
