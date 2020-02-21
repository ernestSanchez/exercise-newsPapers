import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  indexArticle: string = "";

  constructor(public _route: ActivatedRoute, public _data: DataServiceService) {

    this.indexArticle = _route.snapshot.params["indice"]
  }
}
