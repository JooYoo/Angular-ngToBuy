import { Component, OnInit, Input } from '@angular/core';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { Shoppinglist } from '../../models/shoppinglist';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.css']
})
export class SidenavItemComponent implements OnInit {

  @Input()
  private shoppinglist: Shoppinglist;

  shoppinglists: Shoppinglist[];

  constructor(
    private tobuyservice: TobuyserviceService,
    private router:Router) { }

  ngOnInit() {
    // this.shoppinglists= this.tobuyservice.mockShoppinglists();

    // this.shoppinglists.subscribe(data=>{
    //   if(data.length > 0)this.router.navigate(['/tobuymanager',data[0].week])
    // });
  }

  private displayShoppinglist(): void {
    console.log("click: " + "displayShoppinglist()");
    console.log("weekDay: " + this.shoppinglist.weekDay);
    this.shoppinglist = this.tobuyservice.getTargetShoppingList(this.shoppinglist.weekDay);
     
    console.log(this.shoppinglist);
  }

}
