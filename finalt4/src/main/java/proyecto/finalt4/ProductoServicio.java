package proyecto.finalt4;

import java.util.List;

import org.aspectj.apache.bcel.util.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoServicio{
	public Productos create(Productos producto);
	public List<Productos> findAll();
}
