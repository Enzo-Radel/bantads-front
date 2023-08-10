import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { FormComponent } from './views/form/form.component';
import { MenuComponent } from './views/menu/menu.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [
    RegisterComponent,
    ProfileComponent,
    FormComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
