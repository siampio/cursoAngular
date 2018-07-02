import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  constructor(private router:ActivatedRoute){
    router.params.subscribe( parametros =>{
      console.log(parametros);
      console.log(parametros['id']);
    });
  }  

}
