import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from 'src/app/manager/views/menu/menu.component';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MenuComponent,
  ]
})
export class ManagerModule { }
