package co.test.hulk.store.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
 
@Entity
@Table(name="accesories")
public class Accesory {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String name;
    @Lob
    private String picture;
    private String type;
    private String description;
    private int units;
    private int amount;
    

    /**
     * Constructor class with no params
     */
    public Accesory() {
        super();
    }
 
    /**
     * Contructor class with params
     * @param name name of the class
     */
    public Accesory(String name) {
        this.name = name;
    }
 
    /**
     * Allows to get the id
     * @return id of class
     */
    public long getId() {
        return id;
    }
    /**
     * Allow to update the id of the class
     * @param id updated id
     */
    public void setId(int id) {
        this.id = id;
    }
    /**
     * Allow to get the name of the class
     * @return class name
     */
    public String getName() {
        return name;
    }
    
    /**
     * Allow to update the name of the class
     * @param id updated name
     */
    public void setName(String name) {
        this.name = name;
    }
    /**
     * Allow to get the type of the class
     * @return class name
     */
    public String getType() {
		return type;
	}
    /**
     * Allow to update the type of the class
     * @param type updated name
     */
    public void setType(String type) {
		this.type = type;
	}
    
    public String getPicture() {
		return picture;
	}
    public void setPicture(String picture) {
		this.picture = picture;
	}
    
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
 
}