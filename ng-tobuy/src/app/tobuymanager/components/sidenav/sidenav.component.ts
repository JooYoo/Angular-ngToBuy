import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { Shoppinglist } from '../../models/shoppinglist';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';


const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  shoppinglists: Shoppinglist[];

  constructor(
    zone: NgZone,
    private router: Router,
    private tobuyservice: TobuyserviceService) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this.shoppinglists = this.tobuyservice.mockShoppinglists();

    if(this.shoppinglists.length >0){
      this.router.navigate(['/tobuymanager',this.shoppinglists[0].weekDay])
    }



    this.router.events.subscribe(() => {
      if (this.isScreenSmall())
        this.sidenav.close();
    })
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
