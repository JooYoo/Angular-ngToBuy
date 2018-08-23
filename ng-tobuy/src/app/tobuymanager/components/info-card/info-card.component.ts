import { Component, OnInit } from '@angular/core';
import { TobuyserviceService } from '../../services/tobuyservice.service';

@Component({
  selector: 'app-infocard',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  weekDayNow:string;

  constructor(service:TobuyserviceService) { }

  ngOnInit() {
    this.weekDayNow = createWeekDay();
  }

}

function createWeekDay():string{
  var date = new Date();

  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'];
  
  return dayOfWeek[date.getDay()];
}
