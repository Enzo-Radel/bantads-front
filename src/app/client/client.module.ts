import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { FormComponent } from './views/form/form.component';

@NgModule({
  declarations: [
    RegisterComponent,
    ProfileComponent,
    FormComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
