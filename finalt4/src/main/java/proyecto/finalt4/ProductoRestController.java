package proyecto.finalt4;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductoRestController {
	@Autowired
	private ProductoRepository productoRepository;

	@PostMapping("/formulario")
	public Productos create(@RequestBody Productos producto) {
		return productoRepository.save(producto);
	}
	
	@DeleteMapping("/delete/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        productoRepository.deleteById(id);
    }
	
	/*@GetMapping("/buscar/{id}")
	public List<?> buscarProductos(@PathVariable Long id){
		return productoRepository.findOne(id);
	}*/

	@GetMapping("/productos")
	public List<Productos> getProductos(){
		return productoRepository.findAll();
	}
	

}
