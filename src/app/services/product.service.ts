import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
type Products = Product[];
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProduct(): Products {
    const productList: Products = [];
    const item1 = new Product('01', 'Egg', 10.25, true, 3, 'xxx.com');
    const item2 = new Product('02', 'Chicken', 100.8, false, 4.5, 'yyy.com');
    const item3 = new Product('03', 'Bird', 40.4, true, 1.5, 'zzz.com');
    productList.push(item1, item2, item3);
    return productList;
  }
  getAllProductLocal(): Observable<Products> {
    const item1 = new Product('01', 'Egg', 10.25, true, 3, 'xxx.com');
    const item2 = new Product('02', 'Chicken', 100.8, false, 4.5, 'yyy.com');
    const item3 = new Product('03', 'Bird', 40.4, true, 1.5, 'zzz.com');

    return of([item1, item2, item3]);
  }
  getAllProoduct(): Observable<Products> {
    return this.http.get<Products>('https://165.22.255.58:3000/products');
  }
}
