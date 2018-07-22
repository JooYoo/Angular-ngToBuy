import { Component, OnInit, Input } from '@angular/core';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { Shoppinglist } from '../../models/shoppinglist';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.css']
})
export class SidenavItemComponent implements OnInit {

  @Input()
  private shoppinglist: Shoppinglist;

  constructor(private tobuyservice: TobuyserviceService) { }

  ngOnInit() {
  }

}
