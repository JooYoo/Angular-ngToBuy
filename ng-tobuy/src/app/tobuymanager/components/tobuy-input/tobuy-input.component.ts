import { Component, OnInit } from '@angular/core';
import { Tobuy } from '../../models/tobuy';
import { TobuyserviceService } from '../../services/tobuyservice.service';

@Component({
  selector: 'tobuy-input',
  templateUrl: './tobuy-input.component.html',
  styleUrls: ['./tobuy-input.component.scss']
})
export class TobuyInputComponent implements OnInit {

  private _toBuyService: TobuyserviceService;
  public todoText: string;
  public displayTobuys:Tobuy[];
  
  constructor(tobuyservice:TobuyserviceService) { 
    //tobuyservice.getAllTobuy();
    this._toBuyService = tobuyservice;
  }

  ngOnInit() {
    //this.displayTobuys = this._toBuyService.getAllTobuy();
  }

  // public addTodo():void{
  //   this._toBuyService.addTobuy(this.todoText);
  //   console.log("add:" + this.todoText);
  //   this.todoText = '';
  // }

  //todo: ??? how to pass value from component to another one 
  public addTodo():void{
    this._toBuyService.addTobuyToList(this.todoText, this._toBuyService.getWeekDayNow());
    console.log("add:" + this.todoText);
    this.todoText = '';
  }

  // Enter is Submit
   onKeydown(event) {
    if (event.key === "Enter") {
      this.addTodo();
    }
  }
}
