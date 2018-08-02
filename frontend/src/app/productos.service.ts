import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Productos } from './models/productos.models';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  constructor(private http: HttpClient) { }
  private userUrl = '/api'
  heroesUrl = 'http://localhost:8080/api/delete';
  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/productos')
  }

  deleteProducto(producto : Productos): Observable<Productos> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'  })
    };
    const url = `${this.heroesUrl}/${producto.id}`;
    return this.http.delete<Productos>(url, httpOptions);
 }
}