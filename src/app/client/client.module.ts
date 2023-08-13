import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import { MenuComponent } from './views/menu/menu.component';
import { ClientRoutingModule } from './client-routing.module';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    ProfileComponent,
    FormComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MenuComponent,
  ]
})
export class ClientModule { }
