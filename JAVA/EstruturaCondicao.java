public class EstruturaCondicao { 
    public static void main (String [] args){
       
       //condição if

    boolean condicao = true;
        
    if (!condicao){
        System.out.println("A condicao esta falsa");
    }else {
        System.out.println("A condicao esta verdadeira");
    }

int nota = 80; //média de aprovação é 60
int falta = 4; //o número max. de faltas é 5

if (nota >=60 && falta <=5){
    System.out.println("Aluno aprovado");
}else{
    System.out.println("Aluno reprovado");
}

String resultado = "";
resultado = (nota >=60) ? "Aprovado" : "Reprovado"; 
    //If ternario - (Dentro da string) ? = condição ENTÃO   : = SENÃO - atribuida para a variavel resultado
System.out.println(resultado);


//switch case (vários ifs de uma vez)
int posicao = 1;

switch(posicao){
    case 1:
      System.out.println("Você chegou em primeiro lugar");
      break;
    case 2:
        System.out.println("Você chegou em segundo lugar");
        break;
    case 3:
        System.out.println("Você chegou em terceiro lugar");
        break;
    case 4: case 5: case 6:
        System.out.println("Você ganhou um premio de participacao");
        break;
    default:
        System.out.println("Você nao teve colocacao");
        break;
}

    }}