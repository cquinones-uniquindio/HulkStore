import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shirt } from './models/shirt';
import { Observable } from 'rxjs/internal/Observable';






@Injectable()
export class ShirtService {

  private url: string = "http://localhost:8081/api/v1/shirts";

  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');




  constructor(private http: HttpClient) { }


  /**
* Create a request post for the param
* @param shirt param to send to the backend
*/
  postShirt(shirt: Shirt): Promise<Shirt> {
    return this.http
      .post(this.url, JSON.stringify(shirt), { headers: this.headers })
      .toPromise()
      .then(res => res as Shirt)
  }

  /**
   * Create a a get request to the backend
   */
  getShirts(): Observable<Shirt[]> {
    return this.http.get<Shirt[]>(this.url)
  }

  deleteShirt(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
  }

  readShirts(): Observable<Shirt[]> {
    return this.http.get<Shirt[]>(this.url);
  }









}
