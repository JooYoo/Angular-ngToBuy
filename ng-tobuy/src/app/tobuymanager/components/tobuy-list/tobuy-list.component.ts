import { Component, OnInit } from '@angular/core';
import { Tobuy } from '../../models/tobuy';
import { TobuyserviceService } from '../../services/tobuyservice.service';


@Component({
  selector: 'tobuy-list',
  templateUrl: './tobuy-list.component.html',
  styleUrls: ['./tobuy-list.component.scss']
})
export class TobuyListComponent implements OnInit {
 

  constructor(private tobuyservice:TobuyserviceService) {}
   

  ngOnInit() {
  }

}
