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

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ShirtController {
	@Autowired
	private ShirtRepository shirtRepository;

	@PersistenceContext
	private EntityManager em;

	@RequestMapping("/shirts")
	public List getAllShirts() {
		List lista = shirtRepository.findAll();
		return lista;
	}

	@GetMapping("/shirts/{id}")
	public ResponseEntity<Shirt> getShirtById(@PathVariable(value = "id") Long shirtId)
			throws ResourceNotFoundException {
		Shirt shirt = shirtRepository.findById(shirtId)
				.orElseThrow(() -> new ResourceNotFoundException("Shirt not found for this id :: " + shirtId));
		return ResponseEntity.ok().body(shirt);
	}

	@PostMapping("/shirts")
	public Shirt createShirt(@Valid @RequestBody Shirt shirt) {
		return shirtRepository.save(shirt);
	}

	@PutMapping("/shirt/{id}")
	public ResponseEntity<Shirt> updateShirt(@PathVariable(value = "id") Long shirtId,
			@Valid @RequestBody Shirt shirtDetails) throws ResourceNotFoundException {
		Shirt shirt = shirtRepository.findById(shirtId)
				.orElseThrow(() -> new ResourceNotFoundException("Shirt not found for this id :: " + shirtId));

		shirt.setName(shirtDetails.getName());
		final Shirt updatedShirt = shirtRepository.save(shirt);
		return ResponseEntity.ok(updatedShirt);
	}

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
