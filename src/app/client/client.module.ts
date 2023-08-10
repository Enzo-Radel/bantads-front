import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ClientFormComponent } from './views/client-form/client-form.component';

@NgModule({
  declarations: [
    RegisterComponent,
    ProfileComponent,
    ClientFormComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
