import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './models/item';
import { Observable } from 'rxjs/internal/Observable';






@Injectable()
export class ToyService {

  private url: string = "http://localhost:8081/api/v1/toys";

  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');





  constructor(private http: HttpClient) { }




  addToy(toy: Item): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(toy);
    return this.http.post(this.url, body, { 'headers': headers })
  }

  putToy(toy: Item): Observable<any> {
    return this.http.get<Item>(`${this.url}/${toy.id}/${toy.units}`);
  }



  /**
   * Create a post request for the param
   * @param toy param to send to the backen
   */
  postToy(toy: Item): Promise<Item> {
    return this.http
    .post(this.url, JSON.stringify(toy), {headers: this.headers})
    .toPromise()
    .then(res => res as Item)
  }


  /**
   * Create a delete repost for the param
   * @param id param to sen to the backend
   */
  deleteToy(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
  }

  /**
   * Create a get request to the backend
   */
  getToys(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

}
