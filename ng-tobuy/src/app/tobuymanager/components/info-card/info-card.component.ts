import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  weekDayNow: string = createWeekDay();

  constructor() { }

  ngOnInit() {
  }

}

function createWeekDay():string{
  var date = new Date();

  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'];
  
  return dayOfWeek[date.getDay()];
}
