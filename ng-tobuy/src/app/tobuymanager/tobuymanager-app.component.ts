import { Component, OnInit } from '@angular/core';
import { TobuyserviceService } from './services/tobuyservice.service';

@Component({
  selector: 'app-tobuymanager-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: []
})
export class TobuymanagerAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
