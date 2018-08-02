package proyecto.finalt4;

import javax.persistence.*;

@Entity
@Table (name = "productos")
public class Productos {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long idprod;
	private String nombre;
	private int precio;
	private int cantidad;
	private String categoria;
	
	public void setNombre(String n) {
		nombre = n;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public Long getID() {
		return idprod;
	}
	
	public void setPrecio(int p) {
		precio = p;
	}
	
	public int getPrecio() {
		return precio;
	}
	
	public void setCantidad(int c) {
		cantidad = c;
	}
	
	public int getCantidad() {
		return cantidad;
	}
	
	public void setCategoria(String a) {
		categoria = a;
	}
	
	public String getCategoria() {
		return categoria;
	}
}
