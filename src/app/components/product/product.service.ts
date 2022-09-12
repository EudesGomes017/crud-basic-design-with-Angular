import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X' , {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


//metodo que criar
//post vai receber um observoble q ele vai receber vai ser do tipo product
  create(Product: Product): Observable<Product>  {
    return this.http.post<Product>(this.baseUrl, Product)

  }

//obtendo uma lista de produtos do nosso backend
read(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl)
}

//busco por id
readById(id: string): Observable<Product> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Product>(url); 

}

update(product: Product): Observable<Product> {
  const url = `${this.baseUrl}/${product.id}`;
  return this.http.put<Product>(url, product).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

errorHandler(e: any): Observable<any> {
  this.showMessage("Ocorreu um erro!");
  return EMPTY;
}

}
