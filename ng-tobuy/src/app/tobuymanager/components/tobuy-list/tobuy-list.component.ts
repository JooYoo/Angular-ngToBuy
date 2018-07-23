import { Component, OnInit } from '@angular/core';
import { Tobuy } from '../../models/tobuy';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { Shoppinglist } from '../../models/shoppinglist';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';


@Component({
  selector: 'tobuy-list',
  templateUrl: './tobuy-list.component.html',
  styleUrls: ['./tobuy-list.component.scss']
})
export class TobuyListComponent implements OnInit {

  shoppingList: Shoppinglist;

  constructor(
    private route: ActivatedRoute,
    private tobuyservice: TobuyserviceService) { 
    this.shoppingList = tobuyservice.getCurrentList();
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      const weekDay=params['weekDay'];
      this.shoppingList = this.tobuyservice.shoppinglistByWeekday(weekDay);
      console.log("In main-content:)");
    })
  }

}
