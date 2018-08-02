package proyecto.finalt4;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

	@Service
	public class ServicioTabla implements ProductoServicio {

		@Autowired
		private ProductoRepository pr;
		
		@Override
		public Productos create(Productos producto) {
			return pr.save(producto);
		}
		@Override
		public List<Productos> findAll() {
			return pr.findAll();
			
		}
}
