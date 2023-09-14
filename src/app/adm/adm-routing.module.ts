import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerListComponent } from './components/manager-list/manager-list.component';
import { InsertManagerComponent } from './components/insert-manager/insert-manager.component';
import { EditManagerComponent } from './components/edit-manager/edit-manager.component';

const routes: Routes = [
    {
        path: "adm", children: [
            { path: "", component: ManagerListComponent },
            { path: "new", component: InsertManagerComponent },
            { path: "edit/:name", component: EditManagerComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdmRoutingModule { }
