import { Component, OnInit, Input } from '@angular/core';
import { TobuyserviceService } from '../../services/tobuyservice.service';
import { Tobuy } from '../../models/tobuy';

@Component({
  selector: 'app-tobuy-item',
  templateUrl: './tobuy-item.component.html',
  styleUrls: ['./tobuy-item.component.scss']
})
export class TobuyItemComponent implements OnInit {

  @Input()
  private tobuy: Tobuy;

  constructor(private tobuyservice: TobuyserviceService) { }

  ngOnInit() {
  }

  private removeTobuy(): void {
    this.tobuyservice.removeItem(this.tobuy.id);
  }

}
