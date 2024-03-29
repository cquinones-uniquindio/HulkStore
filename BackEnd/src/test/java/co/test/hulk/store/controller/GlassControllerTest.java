package co.test.hulk.store.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;


import java.util.ArrayList;
import java.util.List;
import static org.hamcrest.CoreMatchers.is;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import co.test.hulk.store.model.Glass;
import co.test.hulk.store.repository.GlassRepository;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class GlassControllerTest {
	
	@MockBean
	private GlassRepository glassRepository;

	@MockBean
	private TestEntityManager em;
	
	@Autowired
	private MockMvc mvc;
	
	@Before
    public final void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }
	@Test
	public void testGetAllGlasses() throws Exception {
		
		List<Glass> array = new ArrayList<Glass>();
		
		Glass glass = new Glass("Batman Glass");
		array.add(glass);
		Mockito.when(glassRepository.findAll()).thenReturn(array);
		mvc.perform(get("/api/v1/glasses").accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$[0].name", is(array.get(0).getName())));		
	}

	@Test
	public void testGetGlassById() {
	}

	@Test
	public void testCreateGlass() {
	}

	@Test
	public void testUpdateGlass() {
	}

	@Test
	public void testDeleteGlass() {
	}

}
