import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../services/data-service.service'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.css']
})
export class TitularesComponent  {

  constructor(public _route: ActivatedRoute, public _data: DataServiceService) {

    let paper = _route.snapshot.params["paper"];

    if (paper != "")
      _data.newsByPaper(paper);

  }
 

}
