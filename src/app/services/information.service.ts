import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  info:any = {};
  aboutTeamData:any[] = [];
  cargada:boolean = false;
  readAbout:boolean = false;

  constructor(public http:Http) {
      this.readInfoData();
      this.readAboutData();
   }

   public readInfoData(){
    this.http.get("assets/data/info.pag.json")
        .subscribe(data =>{
          //console.log(data.json());
          this.info = data.json();
          this.cargada = true;
        });
   }

   public readAboutData(){
    this.http.get("https://cursoangular-4c4fa.firebaseio.com/equipo.json")
      .subscribe(data =>{
        //console.log(data.json());
        this.aboutTeamData = data.json();
        this.readAbout = true;
      });
   }

}
