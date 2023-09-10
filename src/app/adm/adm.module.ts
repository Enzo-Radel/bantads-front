import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdmService } from './services/adm.service';
import { ManagerListComponent } from './components/manager-list/manager-list.component';
import { AdmRoutingModule } from './adm-routing.module';
import { InsertManagerComponent } from './components/insert-manager/insert-manager.component';

@NgModule({
  declarations: [
    ManagerListComponent,
    InsertManagerComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    AdmService
  ]
})
export class AdmModule { }
