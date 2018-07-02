import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:any[] = [];
  cargando:boolean = true;

  constructor(private http: Http) { 

    this.readProducts();
  }

  public readProducts(){
      
    this.http.get('https://cursoangular-4c4fa.firebaseio.com/productos_idx.json')
          .subscribe( res =>{
            //console.log(res.json());
            setTimeout(()=>{
              this.products = res.json();
              this.cargando = false;
            },1500);
            
          })
    
  }

  public cargar_productobyId(cod:string){
    return this.http.get(`https://cursoangular-4c4fa.firebaseio.com/productos/${ cod }.json`);
  }

  
}
