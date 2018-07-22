import { Component, OnInit } from '@angular/core';
import { Tobuy } from '../../models/tobuy';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { Shoppinglist } from '../../models/shoppinglist';


@Component({
  selector: 'tobuy-list',
  templateUrl: './tobuy-list.component.html',
  styleUrls: ['./tobuy-list.component.scss']
})
export class TobuyListComponent implements OnInit {

  private shoppingList: Shoppinglist;

  constructor(private tobuyservice: TobuyserviceService) { 
    this.shoppingList = tobuyservice.getCurrentList();
  }

  ngOnInit() {
    
  }

}
