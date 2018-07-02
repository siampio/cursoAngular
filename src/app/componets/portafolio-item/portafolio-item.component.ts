import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  producto:any= undefined;
  parametro:string;
  constructor(private router:ActivatedRoute,
              private _pr: ProductsService){

    router.params.subscribe( parametros =>{
      //console.log(parametros);
      //console.log(parametros['id']);

      _pr.cargar_productobyId(parametros['id'])
        .subscribe( res =>{
          
          this.producto = res.json();
          this.parametro = parametros['id'];
        });
    });
  }  

}
