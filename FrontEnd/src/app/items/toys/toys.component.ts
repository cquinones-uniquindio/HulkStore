import { Component, OnInit } from '@angular/core';
import { ToyService } from 'src/app/services/toy-service';
import { Item } from 'src/app/services/models/item';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { BuyComponentComponent } from '../buy-component/buy-component.component';
import { SaleService } from 'src/app/services/sale-service';
import { Sale } from 'src/app/services/models/sale';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  private toys = [];


  /**
   * 
   * @param toyService Service to make request of toys
   * @param saleService Service to make request of sales
   * @param router instance that allow to navigate through the web
   * @param sanitizer Guarantees to secure a url from unknown sources in base64 format
   * @param dialog Allow to create a popup instance of a component
   */
  constructor(private toyService: ToyService,
    private saleService: SaleService,
    private router: Router, private sanitizer: DomSanitizer, private dialog: MatDialog) {
  }

  /**
   * First method to get executed
   */
  ngOnInit() {
    this.loadToys();
  }
  /**
   * Load the toys from the database calling his service
   */
  loadToys() {
    this.toyService.getToys().subscribe((toys: Item[]) => {
      this.toys = toys;
      this.castingImages(toys)
    })

  }
  /**
   * Convert the picture in base64 format from the backend to a picture, in a item's array
   * @param toys Array with items
   */
  castingImages(toys: Item[]): boolean {
    for (let i = 0; i < toys.length; i++) {
      toys[i].picture = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + toys[i].picture);
    }
    return true;

  }

  /**
   * Allow to open a dialog component as a pop up, receiving a data to work with it
   * @param item Contains the data
   */
  openDialog(item): void {
    console.log("item: " + item)
    const dialogRef = this.dialog.open(BuyComponentComponent, {
      width: '250px',
      data: { id: item.id, name: item.name, description: item.description, type: item.type, amount: item.amount }
    });

    dialogRef.afterClosed().subscribe(result => {


      let itemId = parseInt(localStorage.getItem("itemId"));


      this.createSale(itemId);

    });
  }

  /**
   * Allow to send an item to the backend and get saved in the databas
   * @param item item to send to the backend
   */
  saveSale(item): void {
    this.saleService.postSale(item)
      .then(
        () => this.redirect(),
        () => console.log("Error"),
      )

  }

  /**
   * Allow to create a sell validating the item as parameter
   * @param itemId item to validate
   */
  createSale(itemId: number) {
    if (itemId != -1) {
      let sale = new Sale();
      let itemName = localStorage.getItem("itemName");
      let itemDescription = localStorage.getItem("itemDescription");
      let itemType = localStorage.getItem("itemType");
      let itemAmount = parseInt(localStorage.getItem("itemAmount"));

      sale.id = itemId;
      sale.name = itemName;
      sale.description = itemDescription;
      sale.type = itemType;
      sale.amount = itemAmount;

      this.saveSale(sale);
      this.toyService.deleteToy(itemId);

    }
  }

  /**Redirect the navigation to the specific url */
  redirect() {
    this.router.navigate(['./']);

  }


}
