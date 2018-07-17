import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

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
