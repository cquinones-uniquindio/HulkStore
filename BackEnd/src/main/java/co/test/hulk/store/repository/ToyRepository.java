package co.test.hulk.store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.test.hulk.store.model.Toy;

@Repository
public interface ToyRepository extends JpaRepository<Toy, Long> {

}