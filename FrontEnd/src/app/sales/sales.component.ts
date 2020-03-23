import { Component, OnInit } from '@angular/core';
import { Sale } from '../services/models/sale';
import { SaleService } from '../services/sale-service';


export interface Transaction {
  id: number;
  name: string;
  description: string;
  amount: number;
  type: string;
}


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit {

  /**
   * Create an instance of the component
   * @param saleService Service to make request of sales
   */
  constructor(private saleService: SaleService) {

  }

  sales = [];
  transactions: Transaction[] = [];

  displayedColumns = ['Id', 'Name', 'Description', 'Type', 'Amount'];

  async ngOnInit() {

    this.loadSales();


  }

  /**
   * Allow to load sales from the backend
   */
  public loadSales() {
    this.saleService.getSales().subscribe((toys: Sale[]) => {
      this.sales = toys;
      this.fillData(toys);
      this.getTotalAmounts();
    })
  }

  /**
   * Fill transactions data to index the colomuns in the tabla with data sales 
   * @param sales contains all the info to fill columns
   */
  fillData(sales) {
    this.transactions = [];
    for (let i = 0; i < sales.length; i++) {
      this.transactions.push({ id: sales[i].id, name: sales[i].name, type: sales[i].type, description: sales[i].description, amount: sales[i].amount });
    }
  }
  /**
   * Clculates the sum value of the amount column
   */
  getTotalAmounts() {
    return this.transactions.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

}