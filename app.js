package Unid1Code1;

//declara��o da classe
public class Guitarra {

    private String numeroSerie, fabricante, modelo, tipo, madeira;
    private double preco;

    //Cria��o do construtor da classe Guitarra
    public Guitarra(
        String numeroSerie, String fabricante,
        String modelo, String tipo,
        String madeira, double preco) {
        this.numeroSerie = numeroSerie;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.tipo = tipo;
        this.madeira = madeira;
        this.preco = preco;
    }
    public String getNumeroSerie() {
        return numeroSerie;
    }
    public void setNumeroSerie(String numeroSerie) {
        this.numeroSerie = numeroSerie;
    }
    public String getFabricante() {
        return fabricante;
    }
    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    public String getMadeira() {
        return madeira;
    }
    public void setMadeira(String madeira) {
        this.madeira = madeira;
    }
    public double getPreco() {
        return preco;
    }
    public void setPreco(double preco) {
        this.preco = preco;
    }

    //o m�todo main() � o metodo principal da classe
    public static void main(String[] args) {
        //instanciamos um objeto chamado "minhaGuitara" que ser� do tipo "Guitarra"
        //Os valores passados s�o usados pelo construtor da classe para criar
        //o objeto
        Guitarra minhaGuitarra = new Guitarra("01020304", "fender", "telecaster",
        "el�trica", "mogno", 1500);

        //Testando os dados da classe, imprimindo a sa�da simples no terminal
        System.out.println(minhaGuitarra.getNumeroSerie());
        System.out.println(minhaGuitarra.getMadeira());
        System.out.println(minhaGuitarra.getPreco());
        System.out.println(minhaGuitarra.getTipo());
    }


}