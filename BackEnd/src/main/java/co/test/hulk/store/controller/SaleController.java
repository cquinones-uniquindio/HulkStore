package co.test.hulk.store.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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
import co.test.hulk.store.model.Sale;
import co.test.hulk.store.repository.SaleRepository;;

/**
 * Class that allow control all transactions of sale
 * 
 * @author CarlosEQ
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class SaleController {
	@Autowired
	private SaleRepository saleRepository;

	@PersistenceContext
	private EntityManager em;

	/**
	 * Get a list of the sales storaged
	 * 
	 * @return list of sales
	 */
	@RequestMapping("/sales")
	public List getAllSales() {
		List lista = saleRepository.findAll();
		return lista;
	}

	/**
	 * Allow get a sale by his id
	 * 
	 * @param saleId sale's id
	 * @return the sale if it is, else an exception
	 * @throws ResourceNotFoundException
	 */
	@GetMapping("/sales/{id}")
	public ResponseEntity<Sale> getSaleById(@PathVariable(value = "id") Long saleId) throws ResourceNotFoundException {
		Sale sale = saleRepository.findById(saleId)
				.orElseThrow(() -> new ResourceNotFoundException("Sale not found for this id :: " + saleId));
		return ResponseEntity.ok().body(sale);
	}

	/**
	 * Allow tu save a sale in the database
	 * 
	 * @param comic sale to save
	 * @return the storaged sale
	 */
	@PostMapping("/sales")
	public Sale createSale(@Valid @RequestBody Sale sale) {
		return saleRepository.save(sale);
	}
	
	/**
	 * Allow to update an sale by his id
	 * 
	 * @param saleId sale's id
	 * @param saleDetails the updated sale
	 * @return response of the sale
	 * @throws ResourceNotFoundException if the sale is not storaged
	 */
	@PutMapping("/sales/{id}")
	public ResponseEntity<Sale> updateSale(@PathVariable(value = "id") Long saleId, @Valid @RequestBody Sale saleDetails)
			throws ResourceNotFoundException {
		Sale sale = saleRepository.findById(saleId)
				.orElseThrow(() -> new ResourceNotFoundException("Sale not found for this id :: " + saleId));

		sale.setName(saleDetails.getName());
		final Sale updatedSale = saleRepository.save(sale);
		return ResponseEntity.ok(updatedSale);
	}

	/**
	 * Allow to delete an sale by his id
	 * 
	 * @param saleId sale's id
	 * @return response of the saleId
	 * @throws ResourceNotFoundException if the sale is not storaged
	 */
	@DeleteMapping("/sales/{id}")
	public Map<String, Boolean> deleteSale(@PathVariable(value = "id") Long saleId) throws ResourceNotFoundException {
		Sale sale = saleRepository.findById(saleId)
				.orElseThrow(() -> new ResourceNotFoundException("Sale not found for this id :: " + saleId));

		saleRepository.delete(sale);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
