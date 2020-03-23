import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Sale } from './models/sale';






@Injectable()
export class SaleService {

  private url: string = "http://localhost:8081/api/v1/sales";

  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');





  constructor(private http: HttpClient) { }




  addToy(toy: Sale): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(toy);
    return this.http.post(this.url, body, { 'headers': headers })
  }



  postSale(d: Sale): Promise<Sale> {
    return this.http
    .post(this.url, JSON.stringify(d), {headers: this.headers})
    .toPromise()
    .then(res => res as Sale)
  }


  getToys(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.url)
  }

  deleteToy(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
  }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.url);
  }

}
