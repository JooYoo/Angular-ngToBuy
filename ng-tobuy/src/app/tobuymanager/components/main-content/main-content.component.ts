import { Component, OnInit } from '@angular/core';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { ActivatedRoute } from '@angular/router';
import { Shoppinglist } from '../../models/shoppinglist';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  shoppinglist:Shoppinglist;
  constructor(
    private route: ActivatedRoute,
    private service: TobuyserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let weekDay = params['weekDay'];
      if (!weekDay) weekDay = this.service.getWeekDayNow();
      this.shoppinglist = null;
    });

      // this.service.shoppinglists.subscribe(users => {
      //   if (users.length == 0) return;

      //   setTimeout(() => {
      //     this.shoppinglist = this.service.shoppinglistByWeekday(weekDay);
      //   }, 500);
      // });
    

  }
  

}
