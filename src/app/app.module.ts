import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from "@angular/http";

//Routes
import { app_routing } from "./app.routes";

//services

import {InformationService} from "./services/information.service";
import {ProductsService} from "./services/products.service";
//Componets

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { PortafolioComponent } from './componets/portafolio/portafolio.component';
import { AboutComponent } from './componets/about/about.component';
import { PortafolioItemComponent } from './componets/portafolio-item/portafolio-item.component';
import { SearchComponent } from './componets/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    app_routing
  ],
  providers: [
    InformationService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
