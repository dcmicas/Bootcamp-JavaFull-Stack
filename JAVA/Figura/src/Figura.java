import java.awt.*;

public abstract class Figura implements FiguraInterface {

    private String nome;
    private Color cor;

    public Figura(String nome, Color cor) {
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }

}
