import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitularesComponent } from './titulares/titulares.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { NavbarComponent } from './navbar/navbar.component';
import{ErrorComponent} from './error/error.component'
import {Routes,RouterModule} from '@angular/router'
import{ HttpClientModule } from '@angular/common/http'
import {DataServiceService} from './services/data-service.service'
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { SidebarComponent } from './sidebar/sidebar.component';

const RouterConfig:Routes =[
  {"path":"","component": TitularesComponent},
  {"path":"home","component": TitularesComponent},
  {"path":"home/:paper","component": TitularesComponent},
  {"path" :"articulos/:indice","component":ArticuloComponent},
 {"path" :"all/:indice","component":SidebarComponent},
  {"path":"**","component": ErrorComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    TitularesComponent,
    ArticuloComponent,
    NavbarComponent,
    ErrorComponent,
    SidebarComponent,
   
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(RouterConfig, {useHash:true}),
    MatSliderModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
