import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:any[] = [];
  products_filtrado:any[]=[];
  cargando:boolean = true;

  constructor(private http: Http) { 

    this.readProducts();
  }

  public readProducts(){
    
    let promesa = new Promise((resolve, reject)=>{
      this.http.get('https://cursoangular-4c4fa.firebaseio.com/productos_idx.json')
          .subscribe( res =>{
            //console.log(res.json());
            //setTimeout(()=>{
              this.products = res.json();
              this.cargando = false;
              resolve();
            //},1500);
            
          });
    });
    
    return promesa;
  }

  public searchProduct(termino:string){

    console.log('Buscando...');

    if( this.products.length === 0){
      this.readProducts().then(()=>{
        //termino carga de objetos
        this.filtrar_productos(termino);
      });
    }else{
      this.filtrar_productos(termino);
    }
      
  }

  private filtrar_productos( termino:string ){
      this.products_filtrado = [];  
      termino = termino.toLowerCase();

      this.products.forEach( prod =>{
        if( prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0){
          this.products_filtrado.push(prod);
        }
        console.log(prod); 
      });
  }

  public cargar_productobyId(cod:string){
    return this.http.get(`https://cursoangular-4c4fa.firebaseio.com/productos/${ cod }.json`);
  }

  
}
