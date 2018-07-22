import { Component, OnInit, NgZone } from '@angular/core';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { Shoppinglist } from '../../models/shoppinglist';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public getShoppinglists: Shoppinglist[];

  private mediaMatcher: MediaQueryList = 
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(zone: NgZone, private tobuyservice: TobuyserviceService) {

    this.getShoppinglists=tobuyservice.mockShoppinglists();

    this.mediaMatcher.addListener(mql => 
      zone.run(() => this.mediaMatcher = mql));
  }

  

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
