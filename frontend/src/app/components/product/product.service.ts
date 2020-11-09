import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'undo', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product)
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api)
  }

  readById(id: number): Observable<Product> {
    const url = `${this.api}/${id}`

    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.api}/${product.id}`

    return this.http.put<Product>(url, product)
  }

  remove(id: number): Observable<Product> {
    const url = `${this.api}/${id}`

    return this.http.delete<Product>(url)
  }

}
