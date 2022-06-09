public class Financiamento {

    //regras: 1) O valor da entrada tem que ser no minimo 20% do valor total
    //        2) o número de parecelas deve ser de no minimo 6

    private double valorTotal;
    private double valorEntrada;
    private int parcelas;

    public Financiamento(double valorTotal, double valorEntrada, int parcelas) throws FinanciamentoException{
        if (valorEntrada < valorTotal * 0.2){
            throw new FinanciamentoException("Você não atendeu os pré requisitos");
        }
        if (parcelas < 6){
            throw new FinanciamentoException("Você não atendeu os pré requisitos");
        }
        this.valorTotal = valorTotal;
        this.valorEntrada = valorEntrada;
        this.parcelas = parcelas;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public double getValorEntrada() {
        return valorEntrada;
    }

    public void setValorEntrada(double valorEntrada) {
        this.valorEntrada = valorEntrada;
    }

    public int getParcelas() {
        return parcelas;
    }

    public void setParcelas(int parcelas) {
        this.parcelas = parcelas;
    }
}
