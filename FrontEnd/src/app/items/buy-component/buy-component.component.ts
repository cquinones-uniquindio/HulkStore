import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Item } from 'src/app/services/models/item';


@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.css']
})
export class BuyComponentComponent implements OnInit {

  /**Create an instance of this class */
  constructor(
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<BuyComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item) {
    
  }

  /**First method to get executed */
  ngOnInit() {
  }

  /**Allow put the data items at the local storage and close the pop up window */
  validator() {

    localStorage.setItem("itemId", this.data.id.toString());
    localStorage.setItem("itemName", this.data.name.toString());
    localStorage.setItem("itemDescription", this.data.description.toString());
    localStorage.setItem("itemType", this.data.type.toString());
    localStorage.setItem("itemAmount", this.data.amount.toString());

    this.dialogRef.close();

  }


  /**Allow bet bac to the previous UI */
  back(): void {
    
    localStorage.setItem("itemId", "-1");
    this.dialogRef.close();
  }


}
