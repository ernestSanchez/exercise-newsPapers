import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../services/data-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {


countries:string[] = ["jp","fr","eg","gb","ch"]
  
formData = { }


constructor( public _data : DataServiceService, public router: Router) {
    
  this._data.allPapersNews()

 }


 filterPaper(value) {
  if (value) {
      this.router.navigate(["home/"+value]);
  }
  return false;
}

setCountry(country){
  this._data.inicio(country);
}


reset(){
  this._data.inicio("us")

}


url(){ //<---------funcion para para dar valor al argumento del service
  this._data.submitUrl(this.formData['detallSearch'])
 console.log(this.formData['detallSearch'])//<------para llamar el valor solo del objeto
}


}
