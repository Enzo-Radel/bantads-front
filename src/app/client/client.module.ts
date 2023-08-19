import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from 'src/app/client/views/register/register.component';
import { ProfileComponent } from 'src/app/client/views/profile/profile.component';
import { FormComponent } from 'src/app/client/components/form/form.component';
import { MenuComponent } from 'src/app/client/views/menu/menu.component';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { LoginComponent } from 'src/app/client/views/login/login.component';
import { BankStatementComponent } from 'src/app/client/views/bank-statement/bank-statement.component';

@NgModule({
  declarations: [
    RegisterComponent,
    ProfileComponent,
    FormComponent,
    LoginComponent,
    BankStatementComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MenuComponent,
  ]
})
export class ClientModule { }
