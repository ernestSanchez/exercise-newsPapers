import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service'

@Component({
  selector: 'app-search-detall',
  templateUrl: './search-detall.component.html',
  styleUrls: ['./search-detall.component.css']
})
export class SearchDetallComponent {

  constructor ( public _data: DataServiceService) { }



}
