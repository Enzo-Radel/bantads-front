import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/app/client/views/register/register.component';
import { ProfileComponent } from 'src/app/client/views/profile/profile.component';
import { MenuComponent } from 'src/app/client/views/menu/menu.component';
import { LoginComponent } from 'src/app/client/views/login/login.component';
import { BankStatementComponent } from 'src/app/client/views/bank-statement/bank-statement.component';

const routes: Routes = [
    {path: "client", children: [
        {path: 'register', component: RegisterComponent},
        {path: 'profile', component: ProfileComponent},
        {path: "", component: MenuComponent},
        {path: "login", component: LoginComponent},
        {path: "bank-statement", component: BankStatementComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
