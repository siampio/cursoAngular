import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
 
  year:number = new Date().getFullYear();

  constructor(public _is:InformationService){

  }
}
