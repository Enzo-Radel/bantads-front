import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmService } from './services/adm.service';
import { ManagerListComponent } from './components/manager-list/manager-list.component';
import { AdmRoutingModule } from './adm-routing.module';

@NgModule({
  declarations: [
    ManagerListComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule
  ],
  providers : [
    AdmService
  ]
})
export class AdmModule { }
