import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { MenuComponent } from './views/menu/menu.component';

const routes: Routes = [
    {path: "client", children: [
        {path: 'register', component: RegisterComponent},
        {path: 'profile', component: ProfileComponent},
        {path: "", component: MenuComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
