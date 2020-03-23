import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Glass } from './models/glass';
import { Observable } from 'rxjs/internal/Observable';






@Injectable()
export class GlassService {

  private url: string = "http://localhost:8081/api/v1/glasses";

  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');




  constructor(private http: HttpClient) { }


  /**
   * Create a request post for the param
   * @param glass param to send to the backen
   */
  postGlass(glass: Glass): Promise<Glass> {
    return this.http
      .post(this.url, JSON.stringify(glass), { headers: this.headers })
      .toPromise()
      .then(res => res as Glass)
  }

  /**
   * Create a get request to the backend
   */
  getGlasses(): Observable<Glass[]> {
    return this.http.get<Glass[]>(this.url)
  }



  deleteGlass(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
  }

  readGlasses(): Observable<Glass[]> {
    return this.http.get<Glass[]>(this.url);
  }









}
