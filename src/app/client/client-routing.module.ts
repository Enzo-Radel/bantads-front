import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { MenuComponent } from './views/menu/menu.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
    {path: "client", children: [
        {path: 'register', component: RegisterComponent},
        {path: 'profile', component: ProfileComponent},
        {path: "", component: MenuComponent},
        {path: "login", component: LoginComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
