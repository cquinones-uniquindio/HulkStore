package co.test.hulk.store.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.test.hulk.store.exception.ResourceNotFoundException;
import co.test.hulk.store.model.Shirt;
import co.test.hulk.store.repository.ShirtRepository;

/**
 * Class that allow control all transactions of shirts
 * 
 * @author CarlosEQ
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ShirtController {
	@Autowired
	private ShirtRepository shirtRepository;

	@PersistenceContext
	private EntityManager em;

	/**
	 * Get a list of the shirts storaged
	 * 
	 * @return list of shirts
	 */
	@RequestMapping("/shirts")
	public List getAllShirts() {
		List lista = shirtRepository.findAll();
		return lista;
	}

	/**
	 * Allow get a shirt by his id
	 * 
	 * @param shirtId shirt's id
	 * @return the shirt if it is, else an exception
	 * @throws ResourceNotFoundException
	 */
	@GetMapping("/shirts/{id}")
	public ResponseEntity<Shirt> getShirtById(@PathVariable(value = "id") Long shirtId)
			throws ResourceNotFoundException {
		Shirt shirt = shirtRepository.findById(shirtId)
				.orElseThrow(() -> new ResourceNotFoundException("Shirt not found for this id :: " + shirtId));
		return ResponseEntity.ok().body(shirt);
	}

	/**
	 * Allow to save a shirt in the database
	 * 
	 * @param comic shirt to save
	 * @return the storaged shirt
	 */
	@PostMapping("/shirts")
	public Shirt createShirt(@Valid @RequestBody Shirt shirt) {
		return shirtRepository.save(shirt);
	}

	/**
	 * Allow to update an shirt by his id
	 * 
	 * @param shirtId      shirt's id
	 * @param shirtDetails the updated shirt
	 * @return response of the shirt
	 * @throws ResourceNotFoundException if the shirt is not storaged
	 */
	@PutMapping("/shirt/{id}")
	public ResponseEntity<Shirt> updateShirt(@PathVariable(value = "id") Long shirtId,
			@Valid @RequestBody Shirt shirtDetails) throws ResourceNotFoundException {
		Shirt shirt = shirtRepository.findById(shirtId)
				.orElseThrow(() -> new ResourceNotFoundException("Shirt not found for this id :: " + shirtId));

		shirt.setName(shirtDetails.getName());
		final Shirt updatedShirt = shirtRepository.save(shirt);
		return ResponseEntity.ok(updatedShirt);
	}

	/**
	 * Allow to delete an shirt by his id
	 * 
	 * @param shirtId shirt's id
	 * @return response of the shirtId
	 * @throws ResourceNotFoundException if the shirt is not storaged
	 */
	@DeleteMapping("/shirts/{id}")
	public Map<String, Boolean> deleteShirt(@PathVariable(value = "id") Long shirtId) throws ResourceNotFoundException {
		Shirt shirt = shirtRepository.findById(shirtId)
				.orElseThrow(() -> new ResourceNotFoundException("Shirt not found for this id :: " + shirtId));

		shirtRepository.delete(shirt);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
