import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  termino:string = undefined;

  constructor(private route: ActivatedRoute,
              private _pr:ProductsService) { 

    route.params.subscribe( parametros => {
        this.termino = parametros['termino'];
        console.log(this.termino);

        _pr.searchProduct(this.termino);
    });
  }

  

}
