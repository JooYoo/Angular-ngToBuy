import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tobuy-input',
  templateUrl: './tobuy-input.component.html',
  styleUrls: ['./tobuy-input.component.scss']
})
export class TobuyInputComponent implements OnInit {

  public todoText: string;

  constructor() { 
    this.todoText = '';
  }

  ngOnInit() {
  }

  public addTodo():void{
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
