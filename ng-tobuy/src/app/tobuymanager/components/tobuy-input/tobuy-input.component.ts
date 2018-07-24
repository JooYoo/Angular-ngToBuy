import { Component, OnInit } from '@angular/core';
import { Tobuy } from '../../models/tobuy';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Shoppinglist } from '../../models/shoppinglist';

@Component({
  selector: 'tobuy-input',
  templateUrl: './tobuy-input.component.html',
  styleUrls: ['./tobuy-input.component.scss']
})
export class TobuyInputComponent implements OnInit {

   todoText: string;
   weekDay:string;
   shoppingList: Shoppinglist;

   displayTobuys:Tobuy[];
  
  constructor(
    private route: ActivatedRoute,
    private tobuyservice:TobuyserviceService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.weekDay= params['weekDay'];
    })
  }

  public addTodo():void{
    this.tobuyservice.addTobuyToList(this.todoText, this.weekDay);
    this.todoText = '';
  }

  // Enter is Submit
   onKeydown(event) {
    if (event.key === "Enter") {
      this.addTodo();
    }
  }
}
