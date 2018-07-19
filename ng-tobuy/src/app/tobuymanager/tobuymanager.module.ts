import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


import { TobuymanagerAppComponent } from './tobuymanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { TobuyInputComponent } from './components/tobuy-input/tobuy-input.component';
import { TobuyserviceService } from './services/tobuyservice.service';
import { TobuyListComponent } from './components/tobuy-list/tobuy-list.component';

import { NgSwipeToDeleteModule } from 'ng-swipe-to-delete';

const routes: Routes = [
  {
    path: '', component: TobuymanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgSwipeToDeleteModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    TobuyserviceService
  ],
  declarations: [TobuymanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, InfoCardComponent, TobuyInputComponent, TobuyListComponent]
})
export class TobuymanagerModule { }
