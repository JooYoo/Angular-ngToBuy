import { Component, OnInit, Input } from '@angular/core';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { Tobuy } from '../../models/tobuy';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-tobuy-item',
  templateUrl: './tobuy-item.component.html',
  styleUrls: ['./tobuy-item.component.scss']
})
export class TobuyItemComponent implements OnInit {

  weekDay:string;

  @Input()
  private tobuy: Tobuy;

  constructor(
    private route: ActivatedRoute,
    private tobuyservice: TobuyserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.weekDay = params['weekDay'];
    })
  }

  private removeTobuy(): void {
    this.tobuyservice.removeItem(this.tobuy.id,this.weekDay);
  }

}
