import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:any[] = [];

  constructor(private http: Http) { 

    this.readProducts();
  }

  public readProducts(){
      
    this.http.get('https://cursoangular-4c4fa.firebaseio.com/productos_idx.json')
          .subscribe( res =>{
            console.log(res.json());
            this.products = res.json();
          })
    
  }

  
}
