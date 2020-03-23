package co.test.hulk.store.model;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
 
@Entity
@Table(name="shirts")
public class Shirt {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String name;
    
//    @OneToMany(mappedBy="category", cascade=CascadeType.ALL)
//    private List <Product> products;
// 
    public Shirt() {
        super();
        // TODO Auto-generated constructor stub
    }
 
    public Shirt(String name) {
        this.name = name;
    }
 
    public long getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    
//    public List<Product> getProducts() {
//        return products;
//    }
//    
//    public void setProducts(List <Product> products) {
//        this.products = products;
//    }
 
}
