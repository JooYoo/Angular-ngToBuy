import { Component, OnInit } from '@angular/core';
import { Tobuy } from '../../models/tobuy';
import { TobuyserviceService } from '../../services/tobuyservice.service';


@Component({
  selector: 'tobuy-list',
  templateUrl: './tobuy-list.component.html',
  styleUrls: ['./tobuy-list.component.scss']
})
export class TobuyListComponent implements OnInit {
  private _toBuyService: TobuyserviceService;
  public displayTobuys:Tobuy[];

  constructor(tobuyservice:TobuyserviceService) {
    this._toBuyService= tobuyservice;
   }

  ngOnInit() {
    this.displayTobuys = this._toBuyService.getAllTobuy();
  }

}
