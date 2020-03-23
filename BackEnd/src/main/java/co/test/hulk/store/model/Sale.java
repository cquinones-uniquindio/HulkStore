package co.test.hulk.store.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;
 
@Entity
@Table(name="sales")
public class Sale {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String name;
    private String type;
    private String description;
    private int amount;
    
//    @OneToMany(mappedBy="category", cascade=CascadeType.ALL)
//    private List <Product> products;
// 
    public Sale() {
        super();
        // TODO Auto-generated constructor stub
    }
 
    public Sale(String name, String type, String description, int amount) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.amount = amount;
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
   
    public String getType() {
		return type;
	}
    public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
    
 
    
 
}