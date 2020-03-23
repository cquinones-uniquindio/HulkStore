import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToyService } from '../services/toy-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccesoryService } from '../services/accesory-service';
import { ComicService } from '../services/comic-service';
import { GlassService } from '../services/glass-service';
import { ShirtService } from '../services/shirt-service';
import { Item } from '../services/models/item';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {


  item = new Item();

  accesories;
  comics;
  glasses;
  shirts;
  toys;
  file = null;
  base64textString: string;

  /**
   * Create a instance of the component 
   * @param accesoryService Service to make requests of accesorie
   * @param comicService Service to make requests comic
   * @param glassService Service to make requests of glass
   * @param shirtService Service to make requests of shirt
   * @param toyService Service to make requests of toy
   * @param router Instance that allow to navigate through the web
   * @param _snackBar Instant that allow alert messages
   */
  constructor(private accesoryService: AccesoryService,
    private comicService: ComicService,
    private glassService: GlassService,
    private shirtService: ShirtService,
    private toyService: ToyService,
    private router: Router, private _snackBar: MatSnackBar) {
    this.accesories = [];
    this.comics = [];
    this.glasses = [];
    this.shirts = [];
    this.toys = [];


  }

  itemControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  items = ["Accesories", "Comics", "Glasses", "Shirts", "Toys"];



  /**
   * Parse a picture to base 64 file
   * @param evt event that accion the upload file
   */
  getBase64(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }



  /**
   * File on load with a event click
   * @param readerEvt event with the reader
   */
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(btoa(binaryString));
    this.file = btoa(binaryString);


  }

  /**
   * Save instances of accesory, comic, glass, shirt and toy type
   */
  async save() {


    this.item.type = this.itemControl.value;

    console.log(this.item.type);
    this.item.picture = this.file;

    if (this.itemControl.value == "Accesories") {


      for (let i = 0; i < this.item.units; i++) {
        this.saveAccesory();
      }


    } else if (this.itemControl.value == "Comics") {


      for (let i = 0; i < this.item.units; i++) {
        this.saveComic();
      }

    }
    else if (this.itemControl.value == "Glasses") {

      for (let i = 0; i < this.item.units; i++) {
        this.saveGlass();
      }

    }
    else if (this.itemControl.value == "Shirts") {

      for (let i = 0; i < this.item.units; i++) {
        this.saveShirt();
      }

    }
    else if (this.itemControl.value == "Toys") {

      for (let i = 0; i < this.item.units; i++) {
        this.saveToy();
      }
    }
    this.redirect();

  }

  refreshToys() {
    this.toyService.getToys()
      .subscribe(data => {
        console.log(data)
        this.toys = data;
      })

  }


  public loadToys() {
    this.toyService.getToys().subscribe((toys: Item[]) => {
      this.toys = toys;
      console.log(this.toys);
    })
  }

  /**
   * Allow validate that the form
   */
  validators() {

    if (this.item.name == null) {
      this._snackBar.open("Fill the name text box", "", { duration: 4000 });
    }
    else if (this.itemControl.value == null) {
      this._snackBar.open("Choose an item", "", { duration: 4000 });

    }
    else if (this.file == null) {
      this._snackBar.open("Choose an image", "", { duration: 4000 });
    }
    else if (this.item.description == null) {
      this._snackBar.open("Fill the description box", "", { duration: 4000 });
    }
    else if (this.item.units == null) {
      this._snackBar.open("Fill the units box", "", { duration: 4000 });
    }
    else if (this.item.amount == null) {
      this._snackBar.open("Fill the amount box", "", { duration: 4000 });
    }

    else {
      this.save();
    }

  }

  /**REVISAR */
  redirect() {
    this.router.navigate(['./']);

  }



  /**
   * * Call the service to create a post request to save the toy
   */
  saveToy(): void {

    this.toyService.postToy(this.item)
      .then(
        () => console.log("Exito"),
      )

  }

  /**
   * Call the service to create a post request to save the comic 
   */
  saveComic(): void {

    this.comicService.postComic(this.item)
      .then(
        () => console.log("Exito"),
      )

  }
  /**
 * * Call the service to create a post request to save the glass
 */
  saveGlass(): void {

    this.glassService.postGlass(this.item)
      .then(
        () => console.log("Exito"),
      )

  }

  /**
   * * Call the service to create a post request to save the shirt
   */
  saveShirt(): void {

    this.shirtService.postShirt(this.item)
      .then(
        () => console.log("Exito"),
      )

  }

  /**
  ** Call the service to create a post request to save the accesory
 */
  saveAccesory(): void {

    this.accesoryService.postAccesory(this.item)
      .then(
        () => console.log("Exito"),
      )

  }
}
