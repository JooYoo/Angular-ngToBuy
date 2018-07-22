import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { TobuyserviceService } from '../../services/tobuyservice.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output()toggleSidenav = new EventEmitter<void>();
  constructor(private tobuyService: TobuyserviceService) { }
  ngOnInit() {
  }
}
