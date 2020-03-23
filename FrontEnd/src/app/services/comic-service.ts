import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comic } from './models/comic';
import { Observable } from 'rxjs/internal/Observable';






@Injectable()
export class ComicService {

  private url: string = "http://localhost:8081/api/v1/comics";

  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');




  constructor(private http: HttpClient) { }


  // addComic(comic:Comic): Observable<any> {
  //     const headers = { 'content-type': 'application/json'}  
  //     const body=JSON.stringify(comic);
  //     return this.http.post(this.url, body,{'headers':headers})
  //   }


  /**
   * Create a request post for the param
   * @param toy param to send to the backen
   */
  postComic(toy: Comic): Promise<Comic> {
    return this.http
      .post(this.url, JSON.stringify(toy), { headers: this.headers })
      .toPromise()
      .then(res => res as Comic)
  }

  getComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(this.url)
  }

  deleteComic(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
  }

  readComic(): Observable<Comic[]> {
    return this.http.get<Comic[]>(this.url);
  }









}
