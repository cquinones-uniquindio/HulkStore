import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from './models/item';
import { Accesory } from './models/accesory';






@Injectable()
export class AccesoryService {

  private url: string = "http://localhost:8081/api/v1/accesories";

  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');




  constructor(private http: HttpClient) { }


  /**
* Create a request post for the param
* @param accesory param to send to the backen
*/
  postAccesory(accesory: Accesory): Promise<Accesory> {
    return this.http
      .post(this.url, JSON.stringify(accesory), { headers: this.headers })
      .toPromise()
      .then(res => res as Accesory)
  }

   /**
   * Create a get request to the backend
   */
  getAccesories(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }


  deleteAccesory(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
  }

}
