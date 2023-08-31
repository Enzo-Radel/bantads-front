import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerListComponent } from './components/manager-list/manager-list.component';


const routes: Routes = [
    {path: "adm", children: [
        {path: "", component: ManagerListComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdmRoutingModule { }
