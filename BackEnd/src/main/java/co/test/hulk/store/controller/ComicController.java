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
import co.test.hulk.store.model.Comic;
import co.test.hulk.store.repository.ComicRepository;

/**
 * Class that allow control all transactions of comic
 * 
 * @author CarlosEQ
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ComicController {
	@Autowired
	private ComicRepository comicRepository;

	@PersistenceContext
	private EntityManager em;

	/**
	 * Get a list of the comic storaged
	 * 
	 * @return list of comic
	 */
	@RequestMapping("/comics")
	public List getAllComics() {
		List lista = comicRepository.findAll();
		return lista;
	}

	/**
	 * Allow get an comic by his id
	 * 
	 * @param comicId comic's id
	 * @return the comic if it is, else an exception
	 * @throws ResourceNotFoundException
	 */
	@GetMapping("/comics/{id}")
	public ResponseEntity<Comic> getComicById(@PathVariable(value = "id") Long comicId)
			throws ResourceNotFoundException {
		Comic comic = comicRepository.findById(comicId)
				.orElseThrow(() -> new ResourceNotFoundException("Comic not found for this id :: " + comicId));
		return ResponseEntity.ok().body(comic);
	}

	/**
	 * Allow tu save an comic in the database
	 * 
	 * @param comic comic to save
	 * @return the storaged comic
	 */
	@PostMapping("/comics")
	public Comic createComic(@Valid @RequestBody Comic comic) {
		return comicRepository.save(comic);
	}

	/**
	 * Allow to update an comic by his id
	 * 
	 * @param comicId      comic's id
	 * @param comicDetails the updated comic
	 * @return response of the comic
	 * @throws ResourceNotFoundException if the comic is not storaged
	 */
	@PutMapping("/comics/{id}")
	public ResponseEntity<Comic> updateComic(@PathVariable(value = "id") Long comicId,
			@Valid @RequestBody Comic comicDetails) throws ResourceNotFoundException {
		Comic comic = comicRepository.findById(comicId)
				.orElseThrow(() -> new ResourceNotFoundException("Comic not found for this id :: " + comicId));

		comic.setName(comicDetails.getName());
		final Comic updatedComic = comicRepository.save(comic);
		return ResponseEntity.ok(updatedComic);
	}

	/**
	 * Allow to delete an comic by his id
	 * 
	 * @param comicId comic's id
	 * @return response of the comicId
	 * @throws ResourceNotFoundException if the comic is not storaged
	 */
	@DeleteMapping("/comics/{id}")
	public Map<String, Boolean> deleteComic(@PathVariable(value = "id") Long comicId) throws ResourceNotFoundException {
		Comic comic = comicRepository.findById(comicId)
				.orElseThrow(() -> new ResourceNotFoundException("Comic not found for this id :: " + comicId));

		comicRepository.delete(comic);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
