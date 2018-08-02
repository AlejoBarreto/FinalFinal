package proyecto.finalt4;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource (path = "productos")

public interface ProductoRepository extends JpaRepository<Productos, Long> {

	List findAll();
	//Productos create(Productos producto);
}
