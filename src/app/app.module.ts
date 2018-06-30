import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { app_routing } from "./app.routes";

//Componets

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { PortafolioComponent } from './componets/portafolio/portafolio.component';
import { AboutComponent } from './componets/about/about.component';
import { PortafolioItemComponent } from './componets/portafolio-item/portafolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent
  ],
  imports: [
    BrowserModule, 
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
